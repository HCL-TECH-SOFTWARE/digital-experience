# Installing the Search V2 backend

This topic provides information on how to configure search based on OpenSearch (Search V2) for your DX deployment.

The search currently provides the following capabilities:

- WCM crawling
- Pushing API for use with WCM Content Sources
- Searching using REST API
- Searching [Digital Asset Management (DAM) indexes](../../../../../../manage_content/digital_assets/configuration/dam_indexing/index.md)

## Prerequisites

To use the capabilities of OpenSearch, it is required to have a DX deployment running inside Kubernetes. This DX deployment must at least contain DX Core because it contains the Web Content Manager (WCM) and is used for ACL lookup.

## Limitations

The search currently has the following limitations:

- The REST API request body size is limited to 5 MB.
- A search result is limited to 10,000 results.

## Preparing your Kubernetes cluster

Make sure that your Kubernetes nodes meet the requirements before running OpenSearch in your Kubernetes cluster. Set the configuration of both the maximum number of open files and the maximum memory allocation capabilities.

Ensure that you have at least configured `nofile 65536` and `vm.max_map_count=262144` on your Kubernetes nodes. The configuration depends on your Kubernetes node setup. Refer to the documentation of your cloud provider for information on how to adjust these values.

If you want to know more about settings for OpenSearch, you can also refer to [Important Settings](https://opensearch.org/docs/latest/install-and-configure/install-opensearch/index/#important-settings) in the official OpenSearch documentation.

## Preparing certificates for inter-service communication

The search uses certificate-based authentication for secure communication between OpenSearch nodes and the search middleware. You must create certificates with specific Distinguished Names (DNs) and store them in Kubernetes secrets.

### Understanding certificate roles

Three types of certificates are required:

- **Admin certificate**: Used for OpenSearch administrative operations and configuration. The DN from this certificate must be configured in the Helm chart's `adminDN` field.
- **Node certificate**: Used for inter-node communication between OpenSearch cluster nodes. The DN is pre-configured to match `CN=opensearch-node*` (wildcard pattern).
- **Client certificate**: Used by the search middleware to authenticate with OpenSearch. The DN is pre-configured to match `CN=opensearch-client,OU=UNIT,O=ORG,C=US`.

!!!important
    Only the **admin certificate DN** needs to be customized via the Helm chart. The node and client certificate DNs are pre-configured in the OpenSearch image and will work automatically if you follow the certificate generation commands below.

### Generating certificates

!!!info "Special character reference"
    Before generating certificates, see [Special character escaping](#special-character-escaping) for a comprehensive guide on how different characters should be handled in certificate generation vs Helm configuration.

Use the following comprehensive example to generate all required certificates with real-world special characters, Unicode, and multiple components:

```sh
# Root CA for certificates - using comprehensive test DN
openssl genrsa -out root-ca-key.pem 2048
openssl req -new -x509 -sha256 -key root-ca-key.pem -subj "/C=DE/ST=Bayern/L=Hong Kong/O=Smith, Jones & Co./OU=Área Técnica/OU=Research \+ Development/CN=Patrick O'Brien/DC=internal/DC=com" -utf8 -out root-ca.pem -days 730

# Admin cert - using same comprehensive test DN
openssl genrsa -out admin-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in admin-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out admin-key.pem
openssl req -new -key admin-key.pem -subj "/C=DE/ST=Bayern/L=Hong Kong/O=Smith, Jones & Co./OU=Área Técnica/OU=Research \+ Development/CN=Patrick O'Brien/DC=internal/DC=com" -utf8 -out admin.csr
openssl x509 -req -in admin.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out admin.pem -days 730

# Node cert - using test DN components but with wildcard CN pattern
openssl genrsa -out node-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in node-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out node-key.pem
openssl req -new -key node-key.pem -subj "/C=DE/ST=Bayern/L=Hong Kong/O=Smith, Jones & Co./OU=Área Técnica/OU=Research \+ Development/CN=opensearch-node/DC=internal/DC=com" -utf8 -out node.csr
openssl x509 -req -in node.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out node.pem -days 730

# Client cert - using test DN components but with fixed CN for middleware
openssl genrsa -out client-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in client-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out client-key.pem
openssl req -new -key client-key.pem -subj "/C=DE/ST=Bayern/L=Hong Kong/O=Smith, Jones & Co./OU=Área Técnica/OU=Research \+ Development/CN=opensearch-client/DC=internal/DC=com" -utf8 -out client.csr
openssl x509 -req -in client.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out client.pem -days 730

# Create Kubernetes secrets
kubectl create secret generic search-admin-cert --from-file=admin.pem --from-file=admin-key.pem --from-file=root-ca.pem -n YOUR_NAMESPACE
kubectl create secret generic search-node-cert --from-file=node.pem --from-file=node-key.pem --from-file=root-ca.pem -n YOUR_NAMESPACE
kubectl create secret generic search-client-cert --from-file=client.pem --from-file=client-key.pem --from-file=root-ca.pem -n YOUR_NAMESPACE
```

Replace `YOUR_NAMESPACE` with your Kubernetes namespace where DX and search are deployed.

!!!note
    The OpenSearch entrypoint script automatically:
    
    - Reads the `adminDN` value from the Helm chart configuration
    - Writes it to the OpenSearch security configuration
    - Extracts the Common Name (CN) from the admin DN
    - Grants the `all_access` role to that user for full administrative permissions
    
    This means you only need to configure the admin certificate DN in your Helm values - role mappings are handled automatically.

!!!important "Why this comprehensive example?"
    This example demonstrates all the special cases you might encounter:
    
    - **Apostrophe**: `Patrick O'Brien` - requires special YAML handling
    - **Escaped comma**: `Smith, Jones & Co.` - comma inside organization name
    - **Unicode**: `Área Técnica` - hex-encoded in certificates
    - **Escaped plus**: `Research \+ Development` - plus sign in OU name
    - **Multiple OUs**: Two organizational unit components
    - **All 7 DN component types**: CN, OU (×2), O, L, ST, C, DC (×2)
    - **Real-world complexity**: Similar to actual corporate certificate structures

### Extracting the DN from your certificate

After generating your admin certificate, you must extract its Distinguished Name (DN) in RFC 2253 format to configure in the Helm chart.

**Extract DN from certificate file:**

```sh
openssl x509 -in admin.pem -noout -subject -nameopt RFC2253 | sed 's/subject=//'
```

**Extract DN from Kubernetes secret:**

```sh
kubectl get secret search-admin-cert -n YOUR_NAMESPACE -o jsonpath='{.data.admin\.pem}' | base64 -d | openssl x509 -noout -subject -nameopt RFC2253 | sed 's/subject=//'
```

Replace `YOUR_NAMESPACE` with your deployment namespace.

**Example output (from our comprehensive test DN):**

```
CN=Patrick O'Brien,OU=Research \+ Development,OU=\C3\81rea T\C3\A9cnica,O=Smith\, Jones & Co.,L=Hong Kong,ST=Bayern,C=DE,DC=internal,DC=com
```

!!!next "Next step: Configure this DN in Helm"
    This extracted DN contains apostrophes that must be doubled for YAML. See the [main example flow](#complete-dn-examples) for the exact YAML configuration with proper apostrophe handling.

!!!important "Critical: Use RFC 2253 format"
    The `-nameopt RFC2253` flag is **required** because:
    
    - It preserves the exact component ordering from your certificate
    - OpenSearch DN matching is **order-sensitive** - the order must match exactly
    - It properly formats special characters and Unicode
    - It ensures consistent output across all OpenSSL versions
    
    **Never use** `-nameopt oneline` or other formats, as they may reorder DN components and cause authentication failures.

Use the exact DN value from this command in the `adminDN` field as described in the [OpenSearch configuration settings](#opensearch-configuration-settings) section.

### DN format requirements

The `adminDN` field accepts Distinguished Names in **RFC 2253 format** with comprehensive validation to ensure compatibility with the OpenSearch Security plugin.

#### Supported attribute types

The following attribute types are supported and can appear in any order:

| Attribute | Full Name | Description | Can Repeat |
|-----------|-----------|-------------|------------|
| `CN` | Common Name | User, service, or device name | No |
| `OU` | Organizational Unit | Department or division | Yes |
| `O` | Organization | Company or organization name | No |
| `L` | Locality | City or locality | No |
| `ST` | State/Province | State or province name | No |
| `C` | Country | Two-letter country code (ISO 3166) | No |
| `DC` | Domain Component | DNS domain component | Yes |

#### Component ordering

!!!warning "Order-sensitive matching"
    OpenSearch DN matching is **order-sensitive**. The DN component order in your Helm configuration **must match exactly** the order in your certificate.
    
    **Example:** If your certificate has `CN=Admin,OU=IT,O=Company,C=US`, you must use that exact order in the Helm chart. Using `C=US,O=Company,OU=IT,CN=Admin` will **fail authentication** even though it represents the same DN.
    
    Always extract the DN from your certificate using the RFC 2253 format command shown above to ensure correct ordering.

#### Special character escaping

Different escaping rules apply to OpenSSL `-subj` format (certificate generation) vs RFC 2253 format (Helm values). Use this comprehensive reference:

| Original Value | In OpenSSL `-subj` Command | In Helm Chart (RFC 2253) | Notes |
|----------------|----------------------------|--------------------------|-------|
| `Smith, Jones & Co.` | `Smith, Jones & Co.` | `Smith\, Jones & Co.` | Comma is separator in RFC 2253, must escape |
| `Research + Development` | `Research \+ Development` | `Research \+ Development` | Plus sign needs escaping in both formats |
| `Test #1` | `Test \#1` | `Test \#1` | Hash needs escaping in both formats |
| `Path\To\Resource` | `Path\\To\\Resource` | `Path\\To\\Resource` | Backslash needs escaping in both formats |
| `"Special" Names` | `\"Special\" Names` | `\"Special\" Names` | Quotes need escaping in both formats |
| `Names & Associates` | `Names \& Associates` | `Names & Associates` | Ampersand optional in OpenSSL, not needed in RFC 2253 |
| `O'Brien` | `O'Brien` | `O''Brien` (special YAML handling) | No RFC 2253 escape, but requires YAML single quotes with doubled apostrophes |
| `Test-User` | `Test-User` | `Test-User` | Hyphen never needs escaping |
| `Test.User` | `Test.User` | `Test.User` | Period never needs escaping |
| `Test_User` | `Test_User` | `Test_User` | Underscore never needs escaping |
| `Test User` | `Test User` | `Test User` | Space never needs escaping |
| `Test~User` | `Test~User` | `Test~User` | Tilde never needs escaping |

**Key differences:**
- **Comma (`,`)**: Not escaped in OpenSSL (because `/` is separator), MUST be escaped in RFC 2253 (because `,` is separator)
- **Ampersand (`&`)**: May be escaped in OpenSSL, not needed in RFC 2253
- **Apostrophe (`'`)**: No escaping in either format, but requires special YAML handling (see [Complete DN examples section below](#complete-dn-examples))

#### DN format differences: OpenSSL vs RFC 2253

!!!important "Why certificate generation and Helm values use different escaping"
    Customers often wonder why certificate generation commands use different escaping than Helm values. This is because they use **different DN formats**:

    **OpenSSL `-subj` format** (for certificate generation):
    - Uses `/` as component separators (slash-separated)
    - Uses **least significant first** order: `/C=US/O=Company/CN=Name`
    - **Commas don't need escaping** because `/` is the separator
    - Still needs to escape other special characters: `\"`, `\#`, `\\`, `\+`
    
    **RFC 2253 format** (for Helm values and extracted DNs):
    - Uses `,` as component separators (comma-separated)  
    - Uses **most significant first** order: `CN=Name,O=Company,C=US`
    - **Commas MUST be escaped** because `,` is the separator
    - Same escaping for other special characters: `\"`, `\#`, `\\`, `\+`

    **Example comparison:**
    
    | Format | DN | Comma handling |
    |--------|-----|----------------|
    | OpenSSL `-subj` | `/O=Smith, Jones & Co./CN=Admin` | Comma not escaped |
    | RFC 2253 | `O=Smith\, Jones & Co.,CN=Admin` | Comma escaped |

    OpenSSL automatically converts between formats, so you only need to worry about using the correct escaping for each context.

**Simple rule for customers:**
1. **Generate certificates** with OpenSSL format (slash-separated, commas not escaped)
2. **Extract DNs** with RFC 2253 format (see [Extracting the DN from your certificate](#extracting-the-dn-from-your-certificate))
3. **Use extracted DN** in Helm values (comma-separated, commas escaped)

#### Unicode support

Unicode characters (accented letters, non-Latin scripts) are supported, but you must use the **hex-encoded form** as extracted from your certificate - not the raw Unicode characters.

When OpenSearch reads a certificate DN during TLS handshake, its Java X.500 parser automatically hex-encodes Unicode characters. The value you configure in Helm must match this hex-encoded output exactly.

| Language | Certificate contains | Use in Helm Chart |
|----------|---------------------|-------------------|
| French | `François Dubois` | `Fran\C3\A7ois Dubois` |
| Spanish | `Área Técnica` | `\C3\81rea T\C3\A9cnica` |
| German | `Zürich Financial` | `Z\C3\BCrich Financial` |

!!!warning "Always extract DN from your certificate"
    Never type Unicode characters directly into the `adminDN` Helm value. Always use the `openssl x509 -nameopt RFC2253` command to extract the exact DN string from your certificate, including hex-encoded Unicode. See [Extracting the DN from your certificate](#extracting-the-dn-from-your-certificate).

#### Complete DN examples

**YAML quoting rules:**
- Use **double quotes** for most DNs (simpler syntax)
- Use **single quotes** when DN contains apostrophes - apostrophes must be doubled (`O''Brien`)
- Single quotes preserve backslashes literally (important for `\,`, `\+`, `\#` and hex-encoded Unicode)

**Main example flow (from certificate generation above):**
```yaml
adminDN: 'CN=Patrick O''Brien,OU=Research \+ Development,OU=\C3\81rea T\C3\A9cnica,O=Smith\, Jones & Co.,L=Hong Kong,ST=Bayern,C=DE,DC=internal,DC=com'
```

!!!example "This is our comprehensive example"
    This DN comes directly from the certificate generation commands shown above. It demonstrates all special cases in one real-world example:
    
    - Apostrophe handling (`O''Brien`)
    - Unicode hex-encoding (`\C3\81rea T\C3\A9cnica`)
    - Escaped commas (`Smith\, Jones`)
    - Escaped plus signs (`Research \+ Development`)
    - All 7 DN component types (CN, OU×2, O, L, ST, C, DC×2)

!!!next "Continue: Deploy with this DN"
    Ready to deploy? See [Deploying with your admin DN](#deploying-with-your-admin-dn) for the complete helm upgrade commands using this exact DN.



#### DN with apostrophe (CRITICAL - must use single quotes and double apostrophes)
```yaml
adminDN: 'CN=Patrick O''Brien,OU=Legal,O=O''Reilly Media,C=IE'
```

!!!critical "Apostrophes require special YAML handling"
    When your extracted DN contains apostrophes (like `O'Brien`), you **must**:
    
    1. **Use single quotes** around the entire DN value
    2. **Double every apostrophe** inside the DN (`O'Brien` → `O''Brien`)
    
    **Why this is critical:**
    
    - The certificate DN contains: `CN=Patrick O'Brien`
    - YAML single quotes preserve backslashes (needed for `\,`, `\+`, `\#`, and hex-encoded Unicode)
    - But in YAML single quotes, apostrophes must be escaped by doubling them
    - If you use double quotes, backslashes get interpreted incorrectly
    - If you don't double apostrophes, YAML parsing fails
    
    **Example of what happens if done wrong:**
    ```yaml
    # WRONG - will cause YAML parsing error
    adminDN: "CN=Patrick O'Brien,OU=\C3\81rea T\C3\A9cnica,..."
    
    # WRONG - backslashes get interpreted incorrectly  
    adminDN: 'CN=Patrick O'Brien,OU=\C3\81rea T\C3\A9cnica,...'
    
    # CORRECT - single quotes with doubled apostrophes
    adminDN: 'CN=Patrick O''Brien,OU=\C3\81rea T\C3\A9cnica,...'
    ```

**DN with mixed features (Unicode hex-encoded + escaped characters + multiple OUs):**
```yaml
adminDN: "CN=Mar\C3\ADa Garc\C3\ADa,OU=Dise\C3\B1o \+ Desarrollo,OU=Innovaci\C3\B3n,O=Z\C3\BCrich Financial~Group,L=Madrid,C=ES"
```

**Simple DN:**
```yaml
adminDN: "CN=Admin,OU=IT,O=Company,C=US"
```

**DN with multiple organizational units:**
```yaml
adminDN: "CN=Database_01,OU=Platform Engineering,OU=Infrastructure,O=Tech Corp,C=US"
```

**DN with domain components:**
```yaml
adminDN: "CN=search-admin,DC=internal,DC=corp,DC=local,O=Company,C=US"
```

**DN with escaped special characters:**
```yaml
adminDN: "CN=CEO,O=Smith\, Jones \+ Associates,OU=Research \+ Development,C=US"
```

**DN with Unicode characters (use hex-encoded form extracted from certificate):**
```yaml
adminDN: "CN=Fran\C3\A7ois Dubois,OU=\C3\81rea T\C3\A9cnica,O=EUROPA SIP,C=ES"
```

**Multiple DNs (for multi-admin configurations):**
```yaml
adminDN: "CN=Admin,OU=IT,O=Company,C=US;CN=Backup-Admin,OU=Operations,O=Company,C=US"
```

#### Validation rules

The Helm chart validates that:

- DN starts with a valid attribute type (`CN`, `OU`, `O`, `L`, `ST`, `C`, or `DC`)
- Components are separated by commas (`,`)
- Each component follows the format `ATTRIBUTE=value`
- Multiple DNs are separated by semicolons (`;`)
- Special characters are properly escaped

**Valid DNs:**
```
CN=Admin,OU=IT,O=Company,C=US
CN=François,OU=Área Técnica,O=EUROPA SIP,C=ES
O=Smith\, Jones & Co.,OU=Research \+ Development,CN=CEO,C=US
CN=Admin,OU=IT,O=Company,C=US;CN=Backup,OU=IT,O=Company,C=US
```

**Invalid DNs:**
```
admin@company.com                        # Not a DN format
CN=Admin OU=IT O=Company C=US            # Missing commas between components
CN=Admin,OU=IT,O=Company,C=United States # Country code must be 2 letters
CN=Admin,OU=IT,O=Smith, Jones,C=US       # Comma inside value must be escaped (should be O=Smith\, Jones)
```

## Preparing the `custom-search-values.yaml`

To configure your search deployment, you have to prepare your `custom-search-values.yaml` which contains all configurable settings. This custom values file must only contain the parameters that you want to overwrite with your preferred settings.

You can get a file with the default configuration using the following command:

``` sh
# Command to extract values.yaml from Helm Chart
helm show values hcl-dx-search.tar.gz > values.yaml
```

You can use this file as a blueprint for your `custom-search-values.yaml`.

Adjust the image repository, tags, and paths to the repository where you put the DX container images. Refer to the following values:

```yaml
# Fill in the values fitting to your configuration
# Ensure to use the correct image version tags
images:
  repository: "my/test/repository"
  tags:
    openSearch: "IMAGE_TAG_FROM_LOADED_IMAGES"
    searchMiddleware: "IMAGE_TAG_FROM_LOADED_IMAGES"
    fileProcessor: "IMAGE_TAG_FROM_LOADED_IMAGES"
  # Image name for each application
  names:
    openSearch: "path/in/your/repository/dx-opensearch"
    searchMiddleware: "path/in/your/repository/dx-search-middleware"
    fileProcessor: "path/in/your/repository/dx-file-processor"
```

Configure other parameters inside the `custom-search-values.yaml` of the search deployment based on your requirements. The default out-of-the-box deployment is a minimal deployment with one replica per service.

### OpenSearch configuration settings

Configure the admin certificate DN in your Helm values file. This is the **only** certificate DN you need to configure - the node and client certificate DNs are pre-configured.

#### Single admin DN

```yaml
configuration:
  openSearch:
    security:
      adminDN: "CN=Admin,OU=IT,O=Company,C=US"
```

#### Multiple admin DNs

For environments with multiple administrators, separate each DN with a semicolon (`;`):

```yaml
configuration:
  openSearch:
    security:
      adminDN: "CN=Admin,OU=IT,O=Company,C=US;CN=Backup-Admin,OU=Operations,O=Company,C=US"
```

#### DN with special characters

If your DN contains special characters, escape them according to the [special character escaping](#special-character-escaping) rules:

```yaml
configuration:
  openSearch:
    security:
      adminDN: "CN=CEO,O=Smith\, Jones \+ Associates,OU=Research \+ Development,C=US"
```

#### DN with Unicode characters

Unicode characters must be in **hex-encoded form** as extracted from your certificate using `openssl x509 -nameopt RFC2253`:

```yaml
configuration:
  openSearch:
    security:
      adminDN: "CN=Fran\C3\A7ois Dubois,OU=\C3\81rea T\C3\A9cnica,O=EUROPA SIP,C=ES"
```

#### How it works

When you configure the `adminDN` in your Helm values:

1. **Certificate DN extraction**: The DN is extracted from your admin certificate using RFC 2253 format
2. **Helm configuration**: You set the extracted DN in the `adminDN` field
3. **Automatic configuration**: The OpenSearch entrypoint script automatically:
   - Writes the DN to `opensearch.yml` under `plugins.security.authcz.admin_dn`
   - Extracts the Common Name (CN) from the DN (e.g., `Admin` from `CN=Admin,OU=IT,O=Company,C=US`)
   - Adds that user to the `all_access` role in `roles_mapping.yml`
   - Grants full administrative permissions

**You do not need to manually configure role mappings** - they are handled automatically based on the CN in your admin DN.

!!!example "Complete configuration example"
    If your admin certificate has DN: `CN=SearchAdmin,OU=Platform,O=TechCorp,C=US`
    
    **In your Helm values:**
    ```yaml
    configuration:
      openSearch:
        security:
          adminDN: "CN=SearchAdmin,OU=Platform,O=TechCorp,C=US"
    ```
    
    **What happens automatically:**
    
    - OpenSearch configuration (`opensearch.yml`) is updated with:
      ```yaml
      plugins.security.authcz.admin_dn:
        - 'CN=SearchAdmin,OU=Platform,O=TechCorp,C=US'
      ```
    
    - Role mapping (`roles_mapping.yml`) is updated with:
      ```yaml
      all_access:
        users:
          - "SearchAdmin"
      ```
    
    - The user `SearchAdmin` now has full administrative access to OpenSearch

#### Pre-configured certificate DNs

The following DNs are pre-configured in the OpenSearch image and do **not** need to be specified in Helm values:

| Certificate Type | Pre-configured DN Pattern | Purpose |
|------------------|---------------------------|---------|
| Node certificate | `CN=opensearch-node*` | Inter-node communication (wildcard matches any node name) |
| Client certificate | `CN=opensearch-client,OU=UNIT,O=ORG,C=US` | Middleware authentication (exact match) |

**Why these are typically not changed:**

- **Node certificate**: Uses a wildcard pattern (`CN=opensearch-node*`) that automatically matches all OpenSearch nodes in the cluster. This allows nodes to join the cluster without requiring DN configuration changes. Changing this would require updating the OpenSearch image configuration.

- **Client certificate**: The search middleware is pre-configured to use this exact DN for authentication. The middleware code and OpenSearch role mappings are both configured to recognize `opensearch-client` as a trusted user with appropriate permissions. Changing this would require modifying both the middleware configuration and rebuilding the OpenSearch image.

**For most deployments**, you only need to customize the **admin certificate DN** to match your organization's security requirements. The node and client certificates work out-of-the-box when you follow the [certificate generation commands](#generating-certificates) above.

### Deploying with your admin DN

After extracting your DN from the certificate, create a values file and deploy:

```sh
# Create admin DN values file (recommended approach)
cat > admin-dn-values.yaml << 'EOF'
configuration:
  openSearch:
    security:
      adminDN: 'DC=com,DC=internal,CN=Patrick O''Brien,OU=Research \+ Development,OU=\C3\81rea T\C3\A9cnica,O=Smith\, Jones & Co.,L=Hong Kong,ST=Bayern,C=DE'
EOF

# Deploy the Helm chart (use full paths to avoid file location issues)
helm upgrade dx-search ./native-kube/install-hcl-dx-search \
  -f ~/native-kube/install-deploy-search-values.yaml \
  -f ~/admin-dn-values.yaml \
  -n YOUR_NAMESPACE
```

!!!warning "Avoid using --set for complex DNs"
    Do NOT use `--set` for DNs with special characters:
    
    ```sh
    # WRONG - causes YAML parsing errors
    helm upgrade ... --set configuration.openSearch.security.adminDN="CN=Patrick O''Brien,OU=..."
    
    # CORRECT - use values file approach
    helm upgrade ... -f admin-dn-values.yaml
    ```
    
    The `--set` command tries to parse the DN as YAML object properties, causing schema validation errors like "Additional property ST is not allowed".

### Security settings  

You can reconfigure security-related configurations such as **Search admin** and **Push admin**.

```yaml
# Security related configuration, e.g. default credentials
security:
  # Security configuration for Search administration
  administration:
    searchAdminUser: "searchadmin"
    searchAdminPassword: "adminsearch"
  pushAdministration:
    pushAdminUser: "pushadmin"
    pushAdminPassword: "adminpush"  
``` 

- **Search admin**: Reconfigure `searchAdminUser` to the search admin username and `searchAdminPassword` to the search admin password.   
- **Push admin**: Reconfigure `pushAdminUser` to the push admin username and `pushAdminPassword` to the push admin password.  

### Split deployment settings  

```yaml
configuration:
  openSearch:
    splitDeployment: false
  searchMiddleware:
    splitDeployment: false 
```  

- `splitDeployment` under the `openSearch` configuration controls whether the OpenSearch roles are split into manager and data pods or not. This configuration is set to `false` by default to ensure all roles are combined into the manager pods and no additional data pods are created. Change the configuration to `true` to create distinct manager data pods which can be configured individually.  
- `splitDeployment` under the `searchMiddleware` configuration controls whether the data and query load should be split between pods or not.  

### Replicas settings  

You can reconfigure the default amount of replicas per application.

```yaml
scaling:
  # The default amount of replicas per application
  replicas:
    openSearchManager: 1
    openSearchData: 1
    searchMiddlewareQuery: 1
    searchMiddlewareData: 1
  # Automated scaling using HorizontalPodAutoScaler
  horizontalPodAutoScaler:
    searchMiddlewareQuery:
      # Enable or disable autoscaling
      enabled: false
      minReplicas: 1
      maxReplicas: 3
      # Target CPU utilization scaling threshold
      targetCPUUtilizationPercentage: 75
      # Target Memory utilization scaling threshold
      targetMemoryUtilizationPercentage: 80
```  

- If split deployment is enabled, both the `searchMiddlewareQuery` and `searchMiddlewareData` values are considered. In a non-split deployment, only the `searchMiddlewareQuery` value is considered.  
- You can enable automated scaling by enabling `horizontalPodAutoScaler` for both `searchMiddlewareQuery` and `searchMiddlewareData`. Enter the minimum number of pods in the `minReplicas` field and the maximum number of pods in `maxReplicas`. By default, automated scaling is disabled for both `searchMiddlewareQuery` and `searchMiddlewareData` settings.  

### Automated setup of content sources and crawlers

```yaml
configuration:
  automatedSetup:
    digitalAssetManagement: 
      enabled: true
    jcr:
      enabled: true
    portal:
      enabled: true
    wcm:
      enabled: true
    people:
      enabled: true
```  

You can enable an automated setup for content sources and crawlers. This setting is enabled by default for all content sources and crawlers. This includes the following content sources:
- 'dam' for Digital Asset Management (`dam_default_content_source` - `75024f9c-2579-58f1-3new-5706ba2a62fc`)
- 'jcr' for Java Content Repository (`jcr_default_content_source` - `680f8805-92f3-45d4-a900-8f28c7160935`)
- 'portal' for Portal (`portal_default_content_source` - `5d2d2fa4-8f71-435d-9341-c3034ff9c509`)
- 'wcm' for Web Content Manager (`wcm_default_content_source` - `972369e7-041c-4459-9211-069f4917c1ba`)
- 'people' for People Service (`people_default_content_source` - `81f17efc-2a4a-4247-ae0b-3bb99eb62643`)

For each of the content sources, you can enable or disable the automated setup by setting the `enabled` field to `true` or `false`. It is possible to override the default settings for `uuid`, `aclLookupHost`, and `aclLookupPath` for each content source. If left empty, the setup will automatically detect default values by inspecting the existing DX deployment.

### Allowlisting for file types in the file processor 

The allowlist for file types has a list of configurable mime types that are allowed to be processed during file extraction. 

```yaml
configuration:
  textExtraction:
      # Configuring Fileprocessor
      allowedMimeTypes:
        - "application/msword"
        - "application/rtf"
        - "text/plain"
        - "application/pdf"
        - "image/jpeg"
        ...
```   

### Common fields mapping for fallback  

Common field mappings are the default mappings for WCM, DAM, JCR, PORTAL, and PEOPLE in the `documentObject` parameter. You can find appropriate mappings for each field in this parameter. Use an empty string if none of the mappings apply. For more information about the `documentObject` parameter, see [Indexed documents](../../../../../manage/container_configuration/configure_opensearch/architectural_overview.md#indexed-documents).

```yaml
commonFieldMappings:
    # Mappings for WCM Crawler
    wcm:
      title: "title"
      description: "summary"
      type: "documentType"
      tags: "tags"
    # Mappings for DAM
    dam:
      title: "name"
      description: "description"
      type: "type"
      tags: "tags"
    # Mappings for JCR Crawler
    jcr:
      title: "title"
      description: "description"
      type: "category"
      tags: ""
    # Mappings for Portal Crawler
    portal:
      title: "title"
      description: "summary"
      type: "category"
      tags: "tags"
    # Mappings for PEOPLE
    people:
      title: "title"
      description: "summary"
      type: "category"
      tags: "tags"
```  

Refer to the following list for more information about the fields:

- `wcm`, `dam`, `jcr`, `portal`, and `people` are the types of content source currently supported.  
- Names of common field mappings such as `title`, `description`, `type`, and `tags` cannot be changed.  
- Apart from `title`, `description`, `type` and `tags`, additional common fields are not allowed.  
- There are default values defined to map different content sources such as `wcm`, `dam`, `jcr`, and `portal` to different common fields such as `title`, `description`, `type` and `tags`. You can change these default mapping values.

### Persistent Volume size requests  

The default storage size for OpenSearch is set to `1Gi`. You can adjust the storage size for more indexing and larger deployments.

```yaml
# Persistent Volume Setup
volumes:
  # Persistent Volumes for OpenSearch
  openSearchManager:
    # Data persistence for OpenSearch nodes
    data: 
      storageClassName: "manual"
      requests:
        storage: "1Gi"
```  

## Running Helm install

!!!important
    Modification to any files (for example, chart.yaml, templates, crds) in `hcl-dx-search-vX.X.X\_XXXXXXXX-XXXX.tar.gz`, except `custom-values.yaml` or `values.yaml`, is not supported.

Run the installation of your prepared configurations using Helm with the following command:

```sh
# Helm install command
helm install -n my-namespace -f path/to/your/custom-search-values.yaml your-release-name path/to/hcl-dx-search-vX.X.X_XXXXXXXX-XXXX.tar.gz
```
Where:

- The `my-namespace` is the namespace where your HCL DX 9.5 deployment is installed to.
- The `-f path/to/your/custom-search-values.yaml` must point to the custom-search-values.yaml you created, which contains all deployment configuration.
- `your-release-name` is the Helm release name and prefixes all resources created in that installation such as Pods, Services, and others.
- `path/to/hcl-dx-search-vX.X.X_XXXXXXXX-XXXX.tar.gz` is the HCL DX 9.5 Search Helm Chart that you extracted as described in the planning and preparation steps.

## Configuring DX install to pass through search

1. Reach the Search REST API endpoints by configuring the routing inside the DX helm chart. In the `custom-values.yaml`, set the following value:

    ```yaml
    configuration:
      networking:
        # Search middlerware service name
        searchMiddlewareService: "SEARCH_DEPLOYMENT_NAME-search-middleware-query"
    ```

    Replace the `SEARCH_DEPLOYMENT_NAME` placeholder with the deployment name that you used during the Helm install section. Replacing the placeholder allows haproxy to pass through traffic to the search middleware.

2. After adjusting the `custom-values.yaml`, use Helm upgrade to apply the changes:

  ```sh
  helm upgrade DX_DEPLOYMENT_NAME -n YOUR_NAMESPACE -f custom-values.yaml path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
  ```

  Replace the `YOUR_NAMESPACE` placeholder with your deployment namespace and the `DX_DEPLOYMENT_NAME` with the name that you chose during the DX install.

## Validating the setup

You can validate the setup using the following methods:

- [Checking the running Pods](#checking-the-running-pods)
- [Validating access to API explorer](#validating-access-to-api-explorer)

### Checking the running pods

Run a kubectl command to validate that all search-related pods are running:

```sh
kubectl get pods -n YOUR_NAMESPACE
```

Replace the `YOUR_NAMESPACE` placeholder with your deployment namespace.

The result should look similar to this, with your Pods entering the `Running` and ready state after a short while.

```text
NAME                                                         READY   STATUS              RESTARTS        AGE
dx-deployment-core-0                                         3/3     Running             0               12m
dx-deployment-digital-asset-management-0                     1/1     Running             0               7m13s
dx-deployment-haproxy-7f487c4d8-4kx9r                        1/1     Running             0               12m
dx-deployment-image-processor-7774d99448-rqfd2               1/1     Running             0               12m
dx-deployment-persistence-connection-pool-69584cd8f5-7hd76   1/1     Running             1 (9m48s ago)   12m
dx-deployment-persistence-node-0                             3/3     Running             0               12m
dx-deployment-ring-api-5c4c75b7c7-85qpk                      1/1     Running             0               12m
dx-deployment-runtime-controller-657fbbf7c7-4kbdk            1/1     Running             0               12m
dx-search-open-search-manager-0                              1/1     Running             0               32s
dx-search-search-middleware-query-5f7fb4798f-gglvj           1/1     Running             0               32s
dx-search-file-processor-98bd64657-h82mx                     1/1     Running             0               32s
```

### Validating access to API explorer

You can access the Search REST API through the following URL:

`https://your_dx_host/dx/api/search/v2/explorer`

Replace the `your_dx_host` with the hostname under which your DX deployment is available.
