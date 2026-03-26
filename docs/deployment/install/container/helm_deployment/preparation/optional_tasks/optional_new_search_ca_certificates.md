# Using In-House CA/PKI for Search V2 Certificates

This guide provides detailed requirements for requesting certificates from your organization's Certificate Authority (CA) or Public Key Infrastructure (PKI) for Search V2 deployment.

!!! info "When to Use This Guide"
    Use this guide if you are using certificates from your organization's Certificate Authority (CA) or Public Key Infrastructure (PKI). This guide provides the detailed certificate requirements to give to your CA team. After obtaining your certificates, proceed to [Creating Kubernetes secrets](optional_install_new_search.md#creating-kubernetes-secrets) in the main installation guide to continue with deployment.

!!! note "OpenSearch Version Compatibility"
    These requirements apply to OpenSearch 2.x (currently using 2.19.2) and remain consistent across OpenSearch versions as they are based on X.509 v3 standards and Java TLS requirements.

## Can I Use My In-House CA?

**Question:** Do the certificates have to be signed by a self-signed root CA?

**Answer:** 

**No.** You can (and should) use certificates from your organization's Certificate Authority (CA) or Public Key Infrastructure (PKI) for production environments.

- Any trusted CA works: in-house CA, commercial CA (DigiCert, Let's Encrypt, etc.), or self-signed CA
- The key requirement is that the certificates must have the proper attributes (Extended Key Usage, DN format, etc.) documented below
- You must provide your CA's root certificate to OpenSearch so it can validate the certificate chain

**What you need to provide to OpenSearch:**

1. The three certificates (admin, node, client) signed by your CA
2. The corresponding private keys
3. Your CA's root certificate (and any intermediate certificates in the chain)

All of these are stored in Kubernetes secrets as shown in the [main installation guide](optional_install_new_search.md#generating-certificates).

## Certificate Requirements

### Admin Certificate

**Purpose:** Administrative operations and configuration

**Distinguished Name (DN) Format:**
- Fully configurable - customize to match your organization
- Example: `CN=SearchAdmin,OU=IT,O=YourCompany,C=US`

**X.509 v3 Extensions (Required):**
- `basicConstraints`: `CA:FALSE`
- `keyUsage`: `digitalSignature, keyEncipherment`
- `extendedKeyUsage`: `serverAuth, clientAuth` (recommended for consistency)

**Additional Requirements:**
- Key algorithm: RSA 2048-bit minimum
- Signature algorithm: SHA-256 or higher

!!! note "Extended Key Usage for Admin Certificate"
    The admin certificate is used for administrative operations (running securityadmin.sh, configuration changes), which are client operations to OpenSearch. Technically, only `clientAuth` is required. However, including both `serverAuth` and `clientAuth` is recommended for consistency and future compatibility.

### Node Certificate

**Purpose:** Inter-node communication (dual role: client and server)

**Distinguished Name (DN) Format:**
- **CRITICAL:** CN must start with `opensearch-node` (wildcard pattern)
- Examples: `CN=opensearch-node`, `CN=opensearch-node1`, `CN=opensearch-node-prod`
- Other DN components (OU, O, C, etc.) can be customized to match your organizational structure
- Example: `CN=opensearch-node1,OU=IT,O=YourCompany,C=US`

**X.509 v3 Extensions (Required):**
- `basicConstraints`: `CA:FALSE`
- `keyUsage`: `digitalSignature, keyEncipherment`
- `extendedKeyUsage`: `serverAuth, clientAuth` **(BOTH required)**

**Additional Requirements:**
- Key algorithm: RSA 2048-bit minimum
- Signature algorithm: SHA-256 or higher

!!! warning "Critical: Both EKU Values Required for Node Certificates"
    Node certificates **MUST** have both `serverAuth` and `clientAuth` in Extended Key Usage. This is the most common issue with CA-signed certificates. OpenSearch nodes communicate peer-to-peer, with each node acting as both:
    
    - **Server** - receiving connections from other nodes
    - **Client** - initiating connections to other nodes
    
    Missing `clientAuth` will cause authentication failures and prevent nodes from joining the cluster. This was the exact issue the customer encountered.

**Technical Detail:** The wildcard pattern `CN=opensearch-node*` is configured in `opensearch.yml` under `plugins.security.nodes_dn`.

### Client Certificate

**Purpose:** Search middleware authentication with OpenSearch

**Distinguished Name (DN) Format:**
- **CRITICAL:** CN must be exactly `opensearch-client`
- Other DN components (OU, O, C, etc.) can be customized to match your organizational structure
- Example: `CN=opensearch-client,OU=Security,O=YourCompany,C=US`

**X.509 v3 Extensions (Required):**
- `basicConstraints`: `CA:FALSE`
- `keyUsage`: `digitalSignature, keyEncipherment`
- `extendedKeyUsage`: `serverAuth, clientAuth` (recommended for consistency)

**Additional Requirements:**
- Key algorithm: RSA 2048-bit minimum
- Signature algorithm: SHA-256 or higher

!!! note "Extended Key Usage for Client Certificate"
    The client certificate is used by the search middleware to connect to OpenSearch as a client. Technically, only `clientAuth` is required. However, including both `serverAuth` and `clientAuth` is recommended for consistency and future compatibility.

**Technical Detail:** OpenSearch extracts the CN from the certificate (`username_attribute: cn` in `config.yml`) and matches it against the hardcoded user `"opensearch-client"` in `roles_mapping.yml` to grant `all_access` role.

## Understanding Certificate Attributes

This section explains what each certificate attribute means in plain language:

**basicConstraints: CA:FALSE**
: Marks this as an end-entity certificate (not a Certificate Authority). This means the certificate can only be used for authentication and cannot sign other certificates. Think of it like a regular employee badge vs. an HR badge that can create new badges.

**keyUsage: digitalSignature, keyEncipherment**
: Defines what cryptographic operations the certificate can perform. These values allow the certificate to create digital signatures and encrypt/decrypt keys.

**extendedKeyUsage: serverAuth, clientAuth**
: Specifies the certificate can be used for both server authentication (TLS Web Server Authentication) and client authentication (TLS Web Client Authentication). This dual-purpose capability is **absolutely critical for node certificates** because OpenSearch nodes communicate peer-to-peer (each node acts as both client and server). For admin and client certificates, only `clientAuth` is technically required, but including both is recommended for consistency.

**subjectAltName**
: Alternative names for the certificate subject, typically DNS names. Helps with hostname verification in distributed systems.

## Understanding Certificate Authentication

OpenSearch uses certificate-based authentication with the following mechanism:

1. **Certificate extraction:** OpenSearch uses the `clientcert_auth_domain` configured with `username_attribute: cn`
2. **Username mapping:** OpenSearch extracts only the CN (Common Name) from the certificate DN and uses it as the username
3. **Role assignment:** The `roles_mapping.yml` file maps usernames to roles

**This explains why:**

- **Client cert** must have `CN=opensearch-client` (but OU, O, C, etc. can vary) - the CN is mapped to the `all_access` role
- **Node cert** must have CN starting with `opensearch-node` (but OU, O, C, etc. can vary) - matches the wildcard pattern in `plugins.security.nodes_dn`
- **Admin cert** DN is fully configurable via Helm values - you specify the complete DN in your configuration

## Certificate Generation Examples

### Two Workflows Supported

**1. For customers who can sign certificates themselves** (have access to CA private key):
   - Generate private key → Generate CSR → Sign with CA → Get certificate
   - Examples below show this complete workflow

**2. For customers using enterprise CA team** (most common):
   - Generate private key → Generate CSR with extension requirements
   - **Send CSR and extension requirements to CA team**
   - Receive signed certificate back from CA team
   - The extension file (.cnf) shows what to request from your CA

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

## Common Issues with CA-Signed Certificates

### Certificate authentication fails

**Cause:** Missing `TLS Web Client Authentication` in Extended Key Usage

**Solution:** Request certificate with both `serverAuth` and `clientAuth` in Extended Key Usage. This is the most common issue when using CA-signed certificates.

### Node cannot join cluster

**Cause:** Node certificate DN doesn't match `CN=opensearch-node*` pattern

**Solution:** Ensure CN starts with `opensearch-node`. Valid examples:
- `CN=opensearch-node`
- `CN=opensearch-node1`
- `CN=opensearch-node-prod`

### Middleware cannot connect

**Cause:** Client certificate CN doesn't match expected value

**Solution:** Client certificate must have `CN=opensearch-client`. Other DN components (OU, O, C) can be customized, but the CN must be exactly `opensearch-client`.

### Certificate chain validation fails

**Cause:** Root CA certificate not provided to OpenSearch

**Solution:** Ensure your CA's root certificate (and any intermediate certificates) are included in the Kubernetes secrets. Each secret should contain:
- The certificate file (e.g., `admin.pem`)
- The private key file (e.g., `admin-key.pem`)
- The root CA certificate (e.g., `root-ca.pem`)

## Reference

For more information about OpenSearch TLS certificate requirements, refer to the official OpenSearch documentation:

- [OpenSearch 2.19 TLS Configuration](https://opensearch.org/docs/2.19/security/configuration/tls/)
- [Separate client and server certificates for transport layer TLS](https://docs.opensearch.org/latest/security/configuration/tls/#separate-client-and-server-certificates-for-transport-layer-tls)

!!! quote "OpenSearch Documentation"
    "By default, transport layer TLS certificates need to be configured as both the client (TLS Web Client Authentication) and server (TLS Web Server Authentication) in the certificate's Extended Key Usage section because the nodes using the TLS certificates assume the responsibility of serving and receiving the communication requests internally."

!!! note
    These requirements are consistent across OpenSearch versions (2.x and 3.x) as they are based on X.509 v3 standards and Java TLS requirements.

## Next Steps

After obtaining your certificates from your CA:

1. Store them in Kubernetes secrets as described in the [main installation guide](optional_install_new_search.md#creating-kubernetes-secrets)
2. Configure the admin DN in your Helm values if using a custom admin certificate
3. Deploy Search V2 following the standard installation process
