# Installing search based on OpenSearch

This topic provides information on how to configure search based on OpenSearch for your DX deployment.

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

## Preparing your Kubernetes Cluster

Make sure that your Kubernetes nodes meet the requirements before running OpenSearch in your Kubernetes cluster. Set the configuration of both the maximum number of open files and the maximum memory allocation capabilities.

Ensure that you have at least configured `nofile 65536` and `vm.max_map_count=262144` on your Kubernetes nodes. The configuration depends on your Kubernetes node setup. Refer to the documentation of your cloud provider for information on how to adjust these values.

If you want to know more about settings for OpenSearch, you can also refer to [Important Settings](https://opensearch.org/docs/latest/install-and-configure/install-opensearch/index/#important-settings) in the official OpenSearch documentation.

## Preparing certificates for inter-service communication

The search uses certificate authentication for the communication between OpenSearch nodes and the search middleware. To get this communication established, you must create certificates and store them in their respective secrets.

The following commands configure the secrets consumed by the applications:

```sh
# Root CA for certificates
openssl genrsa -out root-ca-key.pem 2048
openssl req -new -x509 -sha256 -key root-ca-key.pem -subj "/C=US/O=ORG/OU=UNIT/CN=opensearch" -out root-ca.pem -days 730

# Admin cert for OpenSearch configuration
openssl genrsa -out admin-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in admin-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out admin-key.pem
openssl req -new -key admin-key.pem -subj "/C=US/O=ORG/OU=UNIT/CN=A" -out admin.csr
openssl x509 -req -in admin.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out admin.pem -days 730

# Node cert for inter node communication
openssl genrsa -out node-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in node-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out node-key.pem
openssl req -new -key node-key.pem -subj "/C=US/O=ORG/OU=UNIT/CN=opensearch-node" -out node.csr
openssl x509 -req -in node.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out node.pem -days 730

# Client cert for application authentication
openssl genrsa -out client-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in client-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out client-key.pem
openssl req -new -key client-key.pem -subj "/C=US/O=ORG/OU=UNIT/CN=opensearch-client" -out client.csr
openssl x509 -req -in client.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out client.pem -days 730

# Create kubernetes secrets
kubectl create secret generic search-admin-cert --from-file=admin.pem --from-file=admin-key.pem --from-file=root-ca.pem -n YOUR_NAMESPACE
kubectl create secret generic search-node-cert --from-file=node.pem --from-file=node-key.pem --from-file=root-ca.pem -n YOUR_NAMESPACE
kubectl create secret generic search-client-cert --from-file=client.pem --from-file=client-key.pem --from-file=root-ca.pem -n YOUR_NAMESPACE
```

Adjust the `YOUR_NAMESPACE` placeholder according to your Kubernetes Namespace in which you have DX and search deployed. If you do not perform this step, the OpenSearch nodes are not initialized and the search middleware cannot communicate with them.

## Preparing the `custom-search-values.yaml`

To configure your search deployment, you have to prepare your `custom-search-values.yaml` which contains all configurable settings. This custom values file must only contain the parameters that you want to overwrite with your preferred settings.

You can get a file with the default configuration using the following command:

``` sh
# Command to extract values.ymal from Helm Chart
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

### Automated setup for DAM  

```yaml
# Automated DAM setup
configuration:
  automatedSetup:
    # Configuring DAM automatically
    digitalAssetManagement: 
      enabled: false
      uuid: ""
      aclLookupHost: ""
```  

Configure the `automatedSetup` for `digitalAssetManagement` to automatically configure DAM content source. If `digitalAssetManagement` is enabled, DAM content source is configured automatically with the given `uuid` and `aclLookupHost` during startup of search. If `uuid` is not provided, the system assumes the default DAM auto configurations with `uuid: 75024f9c-2579-58f1-3new-5706ba2a62fc`. Configure `aclLookupHost` for example :`aclLookupHost: https://dx-deployment-core:10042`. In this example `dx-deployment-core` utilizes the internal name of the core container in a helm deployment on the same cluster. Depending on your installation you may need to point to the webEngine container or if you use different clusters an external host name.  
!!!tip
    The host `dx-deployment-core` and port `10042` are the Kubernetes service host and the port for DX Core. In this case, 10042 is the HttpQueueInboundDefaultSecure port on the HCL DX 9.5 server. Adjust this according to your deployment configuration.  

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
```   

### Common fields mapping for fallback  

Common field mappings are the default mappings for WCM, DAM, JCR, and PORTAL in the `documentObject`. You can find appropriate mappings for each field in the `documentObject`. Use an empty string if none of the mappings apply.

Visit for more information on [`documentObject`](https://pages.git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/in-progress/deployment/manage/container_configuration/configure_opensearch/architectural_overview/#indexed-documents)  

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
```  
Refer to the following list for more information about the fields:  
- `wcm`, `dam`, `jcr` and `portal` are the types of content source currently supported.  
- Names of common field mappings `title`, `description`, `type` and `tags` cannot be changed.  
- Additional common fields are not allowed apart from `title`, `description`, `type` and `tags`.  
- We have defaults defined to map different content source like `wcm`, `dam`, `jcr` and `portal` to the different common fields like `title`, `description`, `type` and `tags`. These mappings values can be changed.  

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

### Checking the running Pods

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
