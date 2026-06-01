# Installing the Search V2 backend

This topic explains how to configure search based on OpenSearch (Search V2) for your DX deployment. Search has the following features:

- WCM crawling
- Push API for use with WCM content sources
- Search using REST API
- Searching [Digital Asset Management (DAM) indexes](../../../../../../manage_content/digital_assets/configuration/dam_indexing/index.md)

## Prerequisites

To use OpenSearch, your HCL Digital Experience (DX) deployment must be running in Kubernetes. The deployment must include DX Core, which provides Web Content Manager (WCM) and supports ACL lookup.

## Limitations

- The REST API request body size is limited to 5 MB.
- A search result is limited to 10,000 results.

## Preparing your Kubernetes cluster

Make sure that your Kubernetes nodes meet the requirements before running OpenSearch in your Kubernetes cluster.

- Set the configuration of both the maximum number of open files and the maximum memory allocation capabilities.
- Ensure that you have at least configured `nofile 65536` and `vm.max_map_count=262144` on your Kubernetes nodes.
- The configuration depends on your Kubernetes node setup. Refer to the documentation of your cloud provider for information on how to adjust these values.

For more information about OpenSearch settings, refer to [Important Settings](https://opensearch.org/docs/latest/install-and-configure/install-opensearch/index/#important-settings){target="_blank"} in the official OpenSearch documentation.

## Preparing certificates for inter-service communication

Search V2 uses certificates to secure communication between OpenSearch nodes and the search middleware. To establish this secure communication, these certificates must be generated and stored in Kubernetes secrets. You can complete this setup using one of two methods:

- **Automated generation:** The system automatically creates the certificates and Kubernetes secrets during deployment based on a property in your configuration file. This method is recommended for testing and development. <!--is this strictly for testing and development?-->
- **Manual generation:** You manually generate the certificates using OpenSSL and create the Kubernetes secrets before deploying.

**Method 1: Automated generation (CF236 and later)**

Starting with CF236, you can automatically generate the self-signed certificates and Kubernetes secrets required to secure communication between OpenSearch nodes and the search middleware during the deployment phase.

To use automated generation, specify a value for the `configuration.opensearch.security.rootCASubjectDN` property in your `values.yaml` file. The value must use the X.509 Distinguished Name (DN) format.

For example:

```yaml
configuration:
  opensearch:
    security:
      rootCASubjectDN: '/C=DE/O=ORGANIZATION/OU=ORGANIZATION_UNIT'
```

If you use this method, proceed directly to the [Preparing the `custom-search-values.yaml`](#preparing-the-custom-search-valuesyaml) section.

**Method 2: Manual certificate generation**

If you leave the `rootCASubjectDN` property empty, or if you are using certificates from your organization's Certificate Authority (CA) or Public Key Infrastructure (PKI), you must manually create the certificates and secrets by following the steps below.

If you are using certificates from your organization's Certificate Authority (CA) or Public Key Infrastructure (PKI), refer to [Using in-house CA or PKI for Search V2 Certificates](./optional_new_search_ca_certificates.md) for detailed requirements to provide to your CA team.

### Understanding certificate roles

The following types of certificates are required:

|Certificate|Description|DN configuration|
|-----------|-----------|-------------|
|Admin|Used for OpenSearch administrative operations and configuration.|Configurable in the `adminDN` field of your Helm chart.|
|Node|Used for communication between OpenSearch cluster nodes.|Pre-configured as `CN=opensearch-node*` (wildcard pattern).|
|Client|Used by the search middleware to authenticate with OpenSearch.|Pre-configured as `CN=opensearch-client`.|

Only the admin certificate DN must be customized in your Helm chart. The node and client certificate DNs are pre-configured in the OpenSearch image and work automatically if you follow the certificate generation commands.

### Generating certificates

The examples below show how to generate self-signed certificates for testing and development. For production environments, you can use certificates from your organization's Certificate Authority (CA) or Public Key Infrastructure (PKI). See [Using In-House CA/PKI for Search V2 Certificates](../../../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_new_search_ca_certificates.md) for detailed requirements.

Use the following example to generate all required certificates, including real-world special characters, Unicode, and multiple components.

The certificate generation commands include X.509 v3 extensions (`basicConstraints`, `keyUsage`, `extendedKeyUsage`) to ensure the certificates meet OpenSearch security requirements. These are the same extensions required when requesting certificates from your CA team.

```sh
openssl genrsa -out root-ca-key.pem 2048
# Root CA certificate – using a comprehensive test DN
openssl req -new -x509 -sha256 -key root-ca-key.pem -subj "/C=DE/ST=Bayern/L=Hong Kong/O=Smith, Jones & Co./OU=Área Técnica/OU=Research \+ Development/CN=Patrick O'Brien/DC=internal/DC=com" -utf8 -out root-ca.pem -days 730
```

```
# Admin cert - using same comprehensive test DN
openssl genrsa -out admin-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in admin-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out admin-key.pem
openssl req -new -key admin-key.pem -subj "/C=DE/ST=Bayern/L=Hong Kong/O=Smith, Jones & Co./OU=Área Técnica/OU=Research \+ Development/CN=Patrick O'Brien/DC=internal/DC=com" -utf8 -out admin.csr
cat > admin-ext.cnf << EOF
basicConstraints = CA:FALSE
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
EOF
openssl x509 -req -in admin.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out admin.pem -days 730 -extfile admin-ext.cnf

# Node cert - using test DN components but with wildcard CN pattern
openssl genrsa -out node-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in node-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out node-key.pem
openssl req -new -key node-key.pem -subj "/C=DE/ST=Bayern/L=Hong Kong/O=Smith, Jones & Co./OU=Área Técnica/OU=Research \+ Development/CN=opensearch-node/DC=internal/DC=com" -utf8 -out node.csr
cat > node-ext.cnf << EOF
basicConstraints = CA:FALSE
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
EOF
openssl x509 -req -in node.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out node.pem -days 730 -extfile node-ext.cnf

# Client cert - using test DN components but with fixed CN for middleware
openssl genrsa -out client-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in client-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out client-key.pem
openssl req -new -key client-key.pem -subj "/C=DE/ST=Bayern/L=Hong Kong/O=Smith, Jones & Co./OU=Área Técnica/OU=Research \+ Development/CN=opensearch-client/DC=internal/DC=com" -utf8 -out client.csr
cat > client-ext.cnf << EOF
basicConstraints = CA:FALSE
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
EOF
openssl x509 -req -in client.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out client.pem -days 730 -extfile client-ext.cnf

# Cleanup temporary files
rm admin-key-temp.pem admin.csr admin-ext.cnf
rm node-key-temp.pem node.csr node-ext.cnf
rm client-key-temp.pem client.csr client-ext.cnf
```

### Creating Kubernetes secrets

After obtaining your certificates (either self-signed or from your CA), create the required Kubernetes secrets to store them.

For each certificate type, you need three files:
    
  - The certificate file (e.g., `admin.pem`, `node.pem`, `client.pem`)
  - The private key file (e.g., `admin-key.pem`, `node-key.pem`, `client-key.pem`)
  - The root CA certificate (e.g., `root-ca.pem`)

Create the three required secrets:

```sh
kubectl create secret generic search-admin-cert \
  --from-file=admin.pem \
  --from-file=admin-key.pem \
  --from-file=root-ca.pem \
  -n YOUR_NAMESPACE

kubectl create secret generic search-node-cert \
  --from-file=node.pem \
  --from-file=node-key.pem \
  --from-file=root-ca.pem \
  -n YOUR_NAMESPACE

kubectl create secret generic search-client-cert \
  --from-file=client.pem \
  --from-file=client-key.pem \
  --from-file=root-ca.pem \
  -n YOUR_NAMESPACE
```

Replace `YOUR_NAMESPACE` with your Kubernetes namespace where DX and Search are deployed.

If you received certificates from your CA team, ensure you have the following:
    
  - Your CA's root certificate (and any intermediate certificates)
  - All three signed certificates (admin, node, client)
  - The corresponding private keys you generated
    
    Then use the same `kubectl create secret` commands above with your CA-signed certificate files.

### Extracting the DN from your certificate

After you generate the admin certificate, extract its DN in RFC 2253 format. Use this DN to configure your Helm chart.

1. Extract the DN from the certificate file:

    ```sh
    openssl x509 -in admin.pem -noout -subject -nameopt RFC2253 | sed 's/subject=//'
    ```

2. Extract the DN from Kubernetes secret:

    ```sh
    kubectl get secret search-admin-cert -n YOUR_NAMESPACE -o jsonpath='{.data.admin\.pem}' | base64 -d | openssl x509 -noout -subject -nameopt RFC2253 | sed 's/subject=//'
    ```

    Replace `YOUR_NAMESPACE` with your deployment namespace.

    OpenSearch DN matching is strictly order-sensitive. You must use the `-nameopt RFC2253` parameter to preserve the exact component order from your certificate, correctly format special characters and Unicode, and ensure consistent output across all OpenSSL versions.

3. Verify the output. For example:

    ```text
    CN=Patrick O'Brien,OU=Research \+ Development,OU=\C3\81rea T\C3\A9cnica,O=Smith\, Jones & Co.,L=Hong Kong,ST=Bayern,C=DE,DC=internal,DC=com
    ```

4. Configure this DN in your Helm chart. If the extracted DN contains an apostrophe, you must escape it in the YAML file by using two single quotes (for example, `O''Brien`). For more information, refer to the YAML quoting rules in [Special character escaping](#special-character-escaping).

### DN format requirements

The `adminDN` field accepts DNs in the RFC 2253 format. It validates the DN to ensure compatibility with the OpenSearch Security plugin.

#### Supported attribute types

The following attribute types are supported and can appear in any order:

| Attribute | Full name | Description | Can repeat |
|-----------|-----------|-------------|------------|
| `CN` | Common Name | User, service, or device name | No |
| `OU` | Organizational Unit | Department or division | Yes |
| `O` | Organization | Company or organization name | No |
| `L` | Locality | City or locality | No |
| `ST` | State/Province | State or province name | No |
| `C` | Country | Two-letter country code (ISO 3166) | No |
| `DC` | Domain Component | DNS domain component | Yes |

!!! warning "Order-sensitive matching"
    OpenSearch DN matching requires exact component ordering. The DN in your Helm chart must perfectly match your certificate. For example, `CN=Admin,OU=IT,O=Company,C=US` fails authentication if entered as `C=US,O=Company,OU=IT,CN=Admin`.

#### Special character escaping

If DN attribute values contain special characters, escape them according to RFC 2253 rules. Different escaping rules apply depending on whether you are generating a certificate (OpenSSL `-subj` format) or configuring Helm values (RFC 2253 format). Use the following reference tables:

**OpenSSL `-subj` format**

| Character | Escaping required | Example OpenSSL `-subj` command |
|-----------|-------------------|---------------------------------|
| Ampersand (`&`) | Optional | `Names \& Associates` |
| Apostrophe (`'`) | No | `O'Brien` |
| Backslash (`\`) | Yes | `Path\\To\\Resource` |
| Comma (`,`) | No | `Smith, Jones & Co.` |
| Hash (`#`) | Yes | `Test \#1` |
| Hyphen (`-`) | No | `Test-User` |
| Period (`.`)  | No | `Test.User` |
| Plus (`+`) | Yes | `Research \+ Development` |
| Quotes (`"`) | Yes | `\"Special\" Names` |
| Space (` `) | No | `Test User` |
| Tilde (`~`) | No | `Test~User` |
| Underscore (`_`) | No | `Test_User` |

**RFC 2253 format (Helm configuration)**

| Character | Escaping required | Example string |
|-----------|-------------------|----------------|
| Ampersand (`&`) | No | `Names & Associates` |
| Apostrophe (`'`) |  No\* | `O'Brien` |
| Backslash (`\`) | Yes | `Path\\To\\Resource` |
| Comma (`,`) | Yes | `Smith\, Jones & Co.` |
| Hash (`#`) | Yes | `Test \#1` |
| Hyphen (`-`) | No | `Test-User` |
| Period (`.`)  | No | `Test.User` |
| Plus (`+`) | Yes | `Research \+ Development` |
| Quotes (`"`) | Yes | `\"Special\" Names` |
| Space (` `) | No | `Test User` |
| Tilde (`~`) | No | `Test~User` |
| Underscore (`_`) | No | `Test_User` |

\* RFC 2253 does not require escaping apostrophes, but if you enter this string into a Helm YAML file, you must escape it (for example, `O''Brien`).

**YAML quoting rules**

Proper YAML quoting is essential to prevent parsing errors when moving your RFC 2253 string into a Helm configuration.

- Wrap the entire DN in single quotes (`' '`) to ensure backslashes are treated as literal text.
- Double any internal apostrophes (for example, `O''Brien`) when using single quotes.
- Avoid double quotes (`" "`) to prevent YAML from mangling hex-encoded Unicode or escaped characters.

For example:

```yaml
adminDN: 'CN=Patrick O''Brien,OU=Research \+ Development,OU=\C3\81rea T\C3\A9cnica,O=Smith\, Jones & Co.,L=Hong Kong,ST=Bayern,C=DE,DC=internal,DC=com'
```

**Unicode support**

OpenSearch supports Unicode characters (such as accented letters and non-Latin scripts), but you must configure them using their hex-encoded form. When OpenSearch reads a certificate DN during the TLS handshake, its Java X.500 parser automatically hex-encodes Unicode characters. The value you configure in Helm must exactly match this hex-encoded output.

| Language | Certificate contains | Helm chart configuration |
|----------|----------------------|--------------------------|
| French | `François Dubois` | `Fran\C3\A7ois Dubois` |
| German | `Zürich Financial` | `Z\C3\BCrich Financial` |
| Spanish | `Área Técnica` | `\C3\81rea T\C3\A9cnica` |

!!! warning "Always extract the DN from your certificate"
    Never type Unicode characters directly into the `adminDN` Helm value. Always use the `openssl x509 -nameopt RFC2253` command to extract the exact DN string from your certificate, including hex-encoded Unicode. For more information, refer to  [Extracting the DN from your certificate](#extracting-the-dn-from-your-certificate).

### Validation rules

The Helm chart validates the `adminDN` field by ensuring the string begins with a supported attribute type such as `CN`, `OU`, `O`, `L`, `ST`, `C`, or `DC`. Validation logic requires that individual components follow the `ATTRIBUTE=value` format and are separated by commas. If you are configuring multiple administrators, each full DN string must be separated by a semicolon. Additionally, the field is checked to ensure that all special characters are properly escaped and that the country code attribute (`C`) contains exactly two characters.

Example of valid DNs:
```
CN=Admin,OU=IT,O=Company,C=US
CN=François,OU=Área Técnica,O=EUROPA SIP,C=ES
O=Smith\, Jones & Co.,OU=Research \+ Development,CN=CEO,C=US
CN=Admin,OU=IT,O=Company,C=US;CN=Backup,OU=IT,O=Company,C=US
```

Example of invalid DNs:
```
admin@company.com                        # Not a DN format
CN=Admin OU=IT O=Company C=US            # Missing commas between components
CN=Admin,OU=IT,O=Company,C=United States # Country code must be 2 letters
CN=Admin,OU=IT,O=Smith, Jones,C=US       # Comma inside value must be escaped (should be O=Smith\, Jones)
```

## Preparing the `custom-search-values.yaml`

To configure your search deployment, prepare a `custom-search-values.yaml` file that contains all configurable settings. This file must include only the parameters that you want to override with your preferred settings.

You can generate a file with the default configuration using the following command:

### Command to extract `values.yaml` from the Helm chart

```sh
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

Configure the admin certificate DN in your Helm values file. For example:

- Simple DN:

    ```yaml
    adminDN: "CN=Admin,OU=IT,O=Company,C=US"
    ```

- Multiple organizational units:

    ```yaml
    adminDN: "CN=Database_01,OU=Platform Engineering,OU=Infrastructure,O=Tech Corp,C=US"
    ```

- Domain components:

    ```yaml
    adminDN: "CN=search-admin,DC=internal,DC=corp,DC=local,O=Company,C=US"
    ```

- Escaped special characters:

    ```yaml
    adminDN: "CN=CEO,O=Smith\, Jones \+ Associates,OU=Research \+ Development,C=US"
    ```

- DN with Unicode characters (use hex-encoded form extracted from certificate):

    ```yaml
    adminDN: "CN=Fran\C3\A7ois Dubois,OU=\C3\81rea T\C3\A9cnica,O=EUROPA SIP,C=ES"
    ```

- Mixed features (Unicode hex-encoded, escaped characters, and multiple OUs):

    ```yaml
    adminDN: "CN=Mar\C3\ADa Garc\C3\ADa,OU=Dise\C3\B1o \+ Desarrollo,OU=Innovaci\C3\B3n,O=Z\C3\BCrich Financial~Group,L=Madrid,C=ES"
    ```

- Multiple DNs (for multi-admin configurations):

    ```yaml
    adminDN: "CN=Admin,OU=IT,O=Company,C=US;CN=Backup-Admin,OU=Operations,O=Company,C=US"
    ```

When you configure the `adminDN` in your Helm values, the OpenSearch entrypoint script reads this string and automatically writes it into the opensearch.yml file under the `plugins.security.authcz.admin_dn` parameter. During initialization, the script also parses the string to extract the Common Name (CN) and adds it to the `all_access` role in the `roles_mapping.yml` file.

For example, when you configure the `CN=SearchAdmin,OU=Platform,O=TechCorp,C=US` DN as administrator:

```yaml
configuration:
  openSearch:
    security:
      adminDN: "CN=SearchAdmin,OU=Platform,O=TechCorp,C=US"
```

1. The OpenSearch configuration (`opensearch.yml`) is updated to include the DN under the `authcz` parameter:

    ```yaml
    plugins.security.authcz.admin_dn:
      - 'CN=SearchAdmin,OU=Platform,O=TechCorp,C=US'
    ```

2. The role mapping (`roles_mapping.yml`) is updated to map the extracted CN to the admin role:

    ```yaml
    all_access:
      users:
        - "SearchAdmin"
    ```

3. The user `SearchAdmin` (the identity in the certificate) is now granted full administrative access.

!!!note
    You do not need to manually configure role mappings. The mappings are automatically handled based on the CN in your admin DN.

#### Pre-configured certificate DNs

The following DNs are pre-configured in the OpenSearch image and do not need to be specified in Helm values:

| Certificate Type | Pre-configured DN Pattern | Purpose |
|------------------|---------------------------|---------|
| Node certificate | `CN=opensearch-node*` | Uses a wildcard pattern (`CN=opensearch-node*`) that automatically matches all OpenSearch nodes in the cluster. This allows nodes to join the cluster without DN configuration changes. Changing this requires updating the OpenSearch image configuration. |
| Client certificate | `CN=opensearch-client` | The search middleware is pre-configured to use this DN for authentication. The middleware code and OpenSearch role mappings recognize `opensearch-client` as a trusted user with appropriate permissions. Changing this requires modifying the middleware configuration and rebuilding the OpenSearch image. |

For most deployments, you only need to customize the admin certificate DN to match your organization’s security requirements. The node and client certificates work out-of-the-box when you follow the [certificate generation commands](#generating-certificates).

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
    Do not use `--set` for DNs with special characters (for example, `helm upgrade ... --set configuration.openSearch.security.adminDN="CN=Patrick O''Brien,OU=...`). The `--set` command tries to parse the DN as YAML object properties, which can cause schema validation errors such as `Additional property ST is not allowed`.

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

- - **Search admin** – Set `searchAdminUser` to the search admin username and `searchAdminPassword` to the search admin password.  
- **Push admin** – Set `pushAdminUser` to the push admin username and `pushAdminPassword` to the push admin password.  

### Split deployment settings  

```yaml
configuration:
  openSearch:
    splitDeployment: false
  searchMiddleware:
    splitDeployment: false 
```  

- `splitDeployment` under the `openSearch` configuration controls whether OpenSearch roles are split into manager and data pods.  
  This setting is `false` by default, which keeps all roles combined in the manager pods and prevents additional data pods from being created. Change the setting to `true` to create separate manager and data pods that can be configured individually.  

- `splitDeployment` under the `searchMiddleware` configuration controls whether data and query load are split between pods. 

### Replicas settings  

You can change the default number of replicas for each application.
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

- If split deployment is enabled, both `searchMiddlewareQuery` and `searchMiddlewareData` values are used. In a non-split deployment, only `searchMiddlewareQuery` is used.  

- You can enable automated scaling by setting `horizontalPodAutoScaler` for both `searchMiddlewareQuery` and `searchMiddlewareData`. Enter the minimum number of pods in `minReplicas` and the maximum in `maxReplicas`. By default, automated scaling is disabled for both settings.  

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

You can enable an automated setup for content sources and crawlers.  
This setting is enabled by default for all content sources and crawlers.  

The following content sources are included:

- `dam`    – Digital Asset Management (`dam_default_content_source` - `75024f9c-2579-58f1-3new-5706ba2a62fc`)  
- `jcr`    – Java Content Repository (`jcr_default_content_source` - `680f8805-92f3-45d4-a900-8f28c7160935`)  
- `portal` – Portal (`portal_default_content_source` - `5d2d2fa4-8f71-435d-9341-c3034ff9c509`)  
- `wcm`    – Web Content Manager (`wcm_default_content_source` - `972369e7-041c-4459-9211-069f4917c1ba`)  
- `people` – People Service (`people_default_content_source` - `81f17efc-2a4a-4247-ae0b-3bb99eb62643`)

For each content source, you can enable or disable automated setup by setting the `enabled` field to `true` or `false`.  You can override the default settings for `uuid`, `aclLookupHost`, and `aclLookupPath` for each content source. If these fields are left empty, the setup automatically detects default values by inspecting the existing DX deployment.

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

Common field mappings are the default mappings for WCM, DAM, JCR, PORTAL, and PEOPLE in the `documentObject` parameter. You can find the appropriate mapping for each field in this parameter. Use an empty string if none of the mappings apply. For more information about the `documentObject` parameter, see [Indexed documents](../../../../../manage/container_configuration/configure_opensearch/architectural_overview.md#indexed-documents).

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

- `wcm`, `dam`, `jcr`, `portal`, and `people` are the content source types currently supported.  
- Names of common field mappings such as `title`, `description`, `type`, and `tags` cannot be changed.  
- Apart from `title`, `description`, `type`, and `tags`, additional common fields are not allowed.  
- Default values map different content sources (`wcm`, `dam`, `jcr`, `portal`) to common fields (`title`, `description`, `type`, `tags`).  
  You can change these default mapping values as needed.

### Persistent Volume size requests  

The default storage size for OpenSearch is `1Gi`. You can increase the storage size for larger deployments or to support more indexing.

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

!!! important
    Modifying any files (for example, `chart.yaml`, templates, CRDs) in `hcl-dx-search-vX.X.X_XXXXXXXX-XXXX.tar.gz`—except `custom-values.yaml` or `values.yaml`—is not supported.

Run the installation of your prepared configurations using Helm with the following command:

```sh
# Helm install command
helm install -n my-namespace -f path/to/your/custom-search-values.yaml your-release-name path/to/hcl-dx-search-vX.X.X_XXXXXXXX-XXXX.tar.gz

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