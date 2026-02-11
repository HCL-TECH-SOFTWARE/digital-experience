# Changing the domain or schema for the dynacache invalidation table in the database 

## Introduction

HCL DX Portal relies on a type of hash map called a `dynacache`. A dynacache is an instance of the Java object `DistributedMap` or, if you prefer, the fully qualified class name `com.ibm.websphere.cache.DistributedMap`. A dynacache is cluster-aware, which means that when one instance changes (for example, on one cluster member in a WebSphere Application Server cluster), all other cluster members are notified of the change.

In Kubernetes, WebSphere Application Server clusters do not exist. All DX Portal instances run as non-clustered WebSphere Application Server instances. However, dynacaches in these instances still need to detect changes made by other DX Portal instances (for example, in different pods). In Kubernetes, this is achieved using a database table named `INVALIDATION_TABLE`.

By default, the `INVALIDATION_TABLE` resides in the `RELEASE` domain or schema. In some deployments, it may be preferable to store this table in a different domain or schema, such as `JCR`, `COMMUNITY`, or `CUSTOMIZATION`. Changing the domain or schema of this table can only be done through the Kubernetes Helm chart for the HCL DX Portal.

## How DX Portal Determines the Location of the Invalidation Table

HCL DX Portal examines the WebSphere Application Server REP (Resource Environment Provider) named `WP_ConfigService`. It retrieves the value of the property `db.cache.invalidation.domain` and uses it as the domain or schema for the `INVALIDATION_TABLE` in all DX Portal code that uses a dynacache.

By default, the domain or schema for this table is `RELEASE`. This default is also defined in the Helm chart `values.yaml` as:

```yaml
invalidationDomain: RELEASE
```
## Changing the Domain or Schema of the Invalidation Table

To change the domain or schema of the `INVALIDATION_TABLE` from the default `RELEASE`, follow these steps:

1. Update the value of `invalidationDomain` in `values.yaml`.
2. Run `helm upgrade` after making the change. Assuming your Helm values are in a file called `install-deploy-values.yaml`, the command might look like this:

```bash
helm upgrade -n dxns -f install-deploy-values.yaml dx-deployment ./install-hcl-dx-deployment
```
Where:  

- `dxns` is the namespace for this deployment.  
- `install-deploy-values.yaml` is the YAML file containing the configuration changes.  
- `dx-deployment` is the DX deployment name.  
- `install-hcl-dx-deployment` is the directory containing the Helm chart.

Running the `helm upgrade` command deletes the existing pods and restarts the portal pod with the updated domain or schema.

For more information, see [Upgrading Helm Deployment](../../../deployment/install/container/helm_deployment/update_helm_deployment.md).

