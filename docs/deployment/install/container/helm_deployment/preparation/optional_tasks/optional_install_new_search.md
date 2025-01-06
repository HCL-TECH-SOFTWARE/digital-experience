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
  # Image name for each application
  names:
    openSearch: "path/in/your/repository/dx-opensearch"
    searchMiddleware: "path/in/your/repository/dx-search-middleware"
```

Configure other parameters inside the `custom-search-values.yaml` of the search deployment based on your requirements. The default out-of-the-box deployment is a minimal deployment with one replica per service.

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
```

### Validating access to API explorer

You can access the Search REST API through the following URL:

`https://your_dx_host/dx/api/search/v2/explorer`

Replace the `your_dx_host` with the hostname under which your DX deployment is available.
