# Using in-house CA or PKI for Search V2 certificates

This topic discusses how to request certificates from your organization’s certificate authority (CA) or public key infrastructure (PKI) for Search V2 deployment.

## When to use this guide

Use this guide if your deployment uses certificates issued by your organization’s CA or PKI. It explains the certificate requirements to share with your CA team. After you obtain the certificates, continue with [Creating Kubernetes secrets](optional_install_new_search.md#creating-kubernetes-secrets) in the main installation guide.

### OpenSearch version compatibility

These requirements apply to OpenSearch 2.x (currently version 2.19.2). They remain consistent across OpenSearch versions because they are based on:

- X.509 v3 standards
- Java TLS requirements

## Can I use my in-house CA?

**Question:** Do the certificates have to be signed by a self-signed root CA?

**Answer:**  

No. For production environments, use certificates issued by your organization’s certificate authority (CA) or public key infrastructure (PKI). You can use any trusted CA:  

- In-house CA  
- Commercial CA (DigiCert, Let’s Encrypt, etc.)  
- Self-signed CA  

Certificates must include the proper attributes:  

- Extended Key Usage  
- Distinguished Name (DN) format  
- Other requirements documented below  

Provide your CA’s root certificate to OpenSearch so it can validate the certificate chain.

**What to provide to OpenSearch:**

1. The three certificates signed by your CA:
    - Admin
    - Node
    - Client
2. The corresponding private keys
3. Your CA’s root certificate (and any intermediate certificates)

Store all of these in Kubernetes secrets as shown in the [main installation guide](optional_install_new_search.md#generating-certificates).

## Certificate Requirements

### Admin certificate

“The admin certificate secures administrative operations and configuration tasks in OpenSearch.

**Purpose:** Administrative operations and configuration

Distinguished Name (DN) format:

- Fully configurable to match your organization
- Example: 

  `CN=SearchAdmin,OU=IT,O=YourCompany,C=US`

X.509 v3 extensions (required):

- `basicConstraints`: `CA:FALSE`
- `keyUsage`: `digitalSignature, keyEncipherment`
- `extendedKeyUsage`: `serverAuth, clientAuth` (recommended for consistency)

Additional requirements:

- Key algorithm: RSA 2048-bit minimum
- Signature algorithm: SHA-256 or higher

#### Extended Key Usage for Admin certificate

The admin certificate is used for administrative operations, such as running `securityadmin.sh` or making configuration changes. These are client operations to OpenSearch.

Technically, only `clientAuth` is required. However, including both `serverAuth` and `clientAuth` is recommended for consistency and future compatibility.

### Node certificate

The node certificate secures communication between OpenSearch nodes in the cluster.

Purpose: Inter-node communication (each node acts as both client and server)

Distinguished Name (DN) format:

- Critical: CN must start with `opensearch-node` (wildcard pattern)
- Examples:  
  `CN=opensearch-node`, `CN=opensearch-node1`, `CN=opensearch-node-prod`
- Other DN components (OU, O, C, etc.) can be customized to match your organizational structure
- Example:  

    `CN=opensearch-node1,OU=IT,O=YourCompany,C=US`

X.509 v3 extensions (required):

- `basicConstraints`: `CA:FALSE`  
- `keyUsage`: `digitalSignature, keyEncipherment`  
- `extendedKeyUsage`: `serverAuth, clientAuth` (both required)
Additional requirements:

- Key algorithm: RSA 2048-bit minimum  
- Signature algorithm: SHA-256 or higher

!!! warning "Critical: Both EKU values required for node certificates"
    Node certificates must include both `serverAuth` and `clientAuth` in Extended Key Usage.  

    This is the most common issue with CA-signed certificates. OpenSearch nodes communicate peer-to-peer, and each node acts as both:

    - Server: receives connections from other nodes
    - Client: initiates connections to other nodes 

    Missing `clientAuth` will cause authentication failures and prevent nodes from joining the cluster. This was the exact issue a customer encountered.

Technical detail: Configure the wildcard pattern `CN=opensearch-node*` in `opensearch.yml` under `plugins.security.nodes_dn`.

---

### Client certificate

Purpose: Search middleware authentication with OpenSearch

Name (DN) format:

- Critical: CN must be exactly `opensearch-client`
- Other DN components (OU, O, C, etc.) can be customized to match your organizational structure
- Example: 
  
    `CN=opensearch-client,OU=Security,O=YourCompany,C=US`

X.509 v3 extensions (required):

- `basicConstraints`: `CA:FALSE`  
- `keyUsage`: `digitalSignature, keyEncipherment`  
- `extendedKeyUsage`: `serverAuth, clientAuth` (recommended for consistency)

**Additional requirements:

- Key algorithm: RSA 2048-bit minimum  
- Signature algorithm: SHA-256 or higher

#### Extended Key Usage for client certificate

The client certificate is used by the search middleware to connect to OpenSearch as a client. Technically, only `clientAuth` is required. However, including both `serverAuth` and `clientAuth` is recommended for consistency and future compatibility.

**Technical detail:** OpenSearch extracts the CN from the certificate (`username_attribute: cn` in `config.yml`) and matches it against the hardcoded user `"opensearch-client"` in `roles_mapping.yml` to grant the `all_access` role.

## Understanding Certificate Attributes

This section explains what each certificate attribute means in plain language:

- basicConstraints: CA:FALSE:  Indicates that this is an end-entity certificate (not a certificate authority). The certificate can be used for authentication but cannot sign other certificates.

- keyUsage: digitalSignature, keyEncipherment: Defines what cryptographic operations the certificate can perform. These values allow the certificate to create digital signatures and encrypt/decrypt keys.

- extendedKeyUsage: serverAuth, clientAuth: Indicates that the certificate can be used for both server authentication (TLS Web Server Authentication) and client authentication (TLS Web Client Authentication). This dual-purpose capability is critical for node certificates because OpenSearch nodes communicate peer-to-peer, and each node acts as both a client and a server.

For admin and client certificates, only `clientAuth` is required. However, including both values is recommended for consistency.

- subjectAltName: Alternative names for the certificate subject, typically DNS names. Helps with hostname verification in distributed systems.

## Understanding certificate authentication

OpenSearch uses certificate-based authentication as follows:

1. Extract certificate information: OpenSearch uses the `clientcert_auth_domain` configured with `username_attribute: cn`
2. Map username: OpenSearch extracts the Common Name (CN) from the certificate Distinguished Name (DN) and uses it as the username
3. Assign roles: The `roles_mapping.yml` file maps usernames to roles

**This explains why:**

- Client certificate: Must have `CN=opensearch-client` (OU, O, C, etc., can vary). The CN is mapped to the `all_access` role.
- Node certificate: CN must start with `opensearch-node` (OU, O, C, etc., can vary). Matches the wildcard pattern in `plugins.security.nodes_dn`.
- Admin certificate: DN is fully configurable via Helm values. Specify the complete DN in your configuration.

## Certificate generation examples

### Two workflows supported

Use one of the following workflows depending on whether you sign certificates yourself or rely on your enterprise CA team.

1. For customers who can sign certificates themselves (have access to CA private key)
   - Generate private key → Generate CSR → Sign with CA → Get certificate
   - Examples below show this complete workflow

2. For customers using an enterprise CA team (most common)
    - Generate private key → Generate CSR with extension requirements
    - Send CSR and extension requirements to CA team
    - Receive signed certificate back from CA team
    - The extension file (`.cnf`) shows what to request from your CA.

### Admin Certificate Example

```bash
# Generate admin private key
openssl genrsa -out admin-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in admin-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out admin-key.pem

# Generate certificate signing request (CSR)
# Note: DN can be customized to match your organization
openssl req -new -key admin-key.pem -subj "/C=US/O=YourCompany/OU=IT/CN=SearchAdmin" -out admin.csr

# Create extension file with required X.509 v3 extensions
cat > admin-ext.cnf << EOF
basicConstraints = CA:FALSE
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
EOF

# Sign the certificate with your CA
# (If using enterprise CA team, send admin.csr and admin-ext.cnf to them instead)
openssl x509 -req -in admin.csr -CA root-ca.pem -CAkey root-ca-key.pem \
  -CAcreateserial -sha256 -out admin.pem -days 730 -extfile admin-ext.cnf

# Cleanup
rm admin-key-temp.pem admin.csr admin-ext.cnf
```

### Node Certificate Example

```bash
# Generate node private key
openssl genrsa -out node-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in node-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out node-key.pem

# Generate certificate signing request (CSR)
# CRITICAL: CN must start with "opensearch-node"
openssl req -new -key node-key.pem -subj "/C=US/O=YourCompany/OU=IT/CN=opensearch-node1" -out node.csr

# Create extension file with required X.509 v3 extensions
cat > node-ext.cnf << EOF
basicConstraints = CA:FALSE
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
EOF

# Sign the certificate with your CA
# (If using enterprise CA team, send node.csr and node-ext.cnf to them instead)
openssl x509 -req -in node.csr -CA root-ca.pem -CAkey root-ca-key.pem \
  -CAcreateserial -sha256 -out node.pem -days 730 -extfile node-ext.cnf

# Cleanup
rm node-key-temp.pem node.csr node-ext.cnf
```

### Client Certificate Example

```bash
# Generate client private key
openssl genrsa -out client-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in client-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out client-key.pem

# Generate certificate signing request (CSR)
# CRITICAL: CN must be exactly "opensearch-client"
openssl req -new -key client-key.pem -subj "/C=US/O=YourCompany/OU=IT/CN=opensearch-client" -out client.csr

# Create extension file with required X.509 v3 extensions
cat > client-ext.cnf << EOF
basicConstraints = CA:FALSE
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
EOF

# Sign the certificate with your CA
# (If using enterprise CA team, send client.csr and client-ext.cnf to them instead)
openssl x509 -req -in client.csr -CA root-ca.pem -CAkey root-ca-key.pem \
  -CAcreateserial -sha256 -out client.pem -days 730 -extfile client-ext.cnf

# Cleanup
rm client-key-temp.pem client.csr client-ext.cnf
```

## Certificate Verification

After receiving certificates from your CA, verify they have the correct attributes:

```bash
# Verify Extended Key Usage
openssl x509 -in node.pem -noout -text | grep -A 2 "Extended Key Usage"

# Verify DN
openssl x509 -in node.pem -noout -subject -nameopt RFC2253

# Verify all certificate attributes
openssl x509 -in node.pem -noout -text
```

Expected output for Extended Key Usage:
```
X509v3 Extended Key Usage:
    TLS Web Server Authentication, TLS Web Client Authentication
```

## Common issues with CA-signed certificates

### Certificate authentication fails

**Cause:** Missing `TLS Web Client Authentication` in Extended Key Usage.

**Solution:** Request a certificate that includes both `serverAuth` and `clientAuth` in Extended Key Usage. This is the most common issue with CA-signed certificates.

### Node cannot join cluster

**Cause:** Node certificate DN does not match the `CN=opensearch-node*` pattern.

**Solution:** Ensure the CN starts with `opensearch-node`. Valid examples:

- `CN=opensearch-node`
- `CN=opensearch-node1`
- `CN=opensearch-node-prod`

### Middleware cannot connect

**Cause:** Client certificate CN does not match the expected value.

**Solution:** The client certificate must have `CN=opensearch-client`. Other DN components (OU, O, C) can be customized, but the CN must be exactly `opensearch-client`.

### Certificate chain validation fails

**Cause:** Root CA certificate not provided to OpenSearch.

**Solution:** Ensure your CA's root certificate (and any intermediate certificates) are included in the Kubernetes secrets. Each secret should contain:

- The certificate file (for example, `admin.pem`)
- The private key file (for example, `admin-key.pem`)
- The root CA certificate (for example, `root-ca.pem`)

## Reference

For more information about OpenSearch TLS certificate requirements, refer to the official OpenSearch documentation:

- [OpenSearch 2.19 TLS Configuration](https://opensearch.org/docs/2.19/security/configuration/tls/){target="_blank"}
- [Separate client and server certificates for transport layer TLS](https://docs.opensearch.org/latest/security/configuration/tls/#separate-client-and-server-certificates-for-transport-layer-tls){target="_blank"}

!!! quote "OpenSearch Documentation"
    "By default, transport layer TLS certificates need to be configured as both the client (TLS Web Client Authentication) and server (TLS Web Server Authentication) in the certificate's Extended Key Usage section because the nodes using the TLS certificates assume the responsibility of serving and receiving the communication requests internally."

!!! note
    These requirements are consistent across OpenSearch versions (2.x and 3.x) as they are based on X.509 v3 standards and Java TLS requirements.

## Next Steps

After obtaining your certificates from your CA:

1. Store them in Kubernetes secrets as described in the [main installation guide](optional_install_new_search.md#creating-kubernetes-secrets).
2. Configure the admin DN in your Helm values if using a custom admin certificate.
3. Deploy Search V2 following the standard installation process.
