# Additional Helm tasks

This topic shows you how to leverage `NodeSelectors` to allow deploying specific DX 9.5 application Pods only on a specific node.

## Prepare cluster nodes

You must label your Kubernetes or OpenShift cluster nodes to use `NodeSelectors`. You can do this by editing the node in Kubernetes or OpenShift.

The following steps shows how to modify cluster nodes. As the examples here may differ from those given by your cloud provider, you are encouraged to review the documentation reference accompanying your cloud subscription.

For this example, the following setup is assumed:

-   The target cluster has multiple nodes.
-   A label purpose is added to a node called `k8s-node-4` and assigned the value `ingress`

This can be done using the following commands:

-   **Kubectl:**

    ```
    # Edit Node
    kubectl edit node k8s-node-4
    ```

-   **OpenShift Client:**

    ```
    # Edit Node
    kubectl edit node k8s-node-4
    ```


The following label is added using the Kubernetes syntax \(and other configurations are changed\):

```
metadata:
  labels:
    purpose: ingress
```

The node is now labeled with the desired target label:

-   **Kubectl:**

    ```
    # Execute lookup via kubectl
    kubectl get node k8s-node-4 --show-labels
    
    # Command output
    NAME         STATUS   ROLES    AGE    VERSION   LABELS
    k8s-node-4   Ready    <none>   123d   v1.20.2   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=k8s-node-4,kubernetes.io/os=linux,purpose=ingress
    # Execute lookup via kubectl
    oc get node k8s-node-4 --show-labels
    
    # Command output
    NAME         STATUS   ROLES    AGE    VERSION   LABELS
    k8s-node-4   Ready    <none>   123d   v1.20.2   
    beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=k8s-node-4,kubernetes.io/os=linux,purpose=ingress
    ```


## Configure nodes

You can assign all pods \(deployed by the Helm Chart of HCL Digital Experience 9.5\) to specific nodes by using `NodeSelectors`. Modify your custom-values.yaml file to include the `NodeSelector`configuration. Make sure to use the proper indentation as YAML is indent-sensitive.

Example for Ambassador:

```
nodeSelector:
  ambassadorIngress:
    purpose: ingress
  ambassadorRedis:
    purpose: ingress
```

This configuration directs the Ambassador Ingress and Ambassador Redis to run nodes with the label purpose: `ingress`.

Once install is completed, the pods are running on your desired node. For example `k8s-node-4`.

**Kubectl:**

```
# Use this command to see running Pods incl. Nodes
kubectl get pods -o wide -n my-deployment 

# Command output
NAME                                   READY   STATUS    RESTARTS   AGE     IP             NODE         NOMINATED NODE   READINESS GATES
dx-ambassador-769b86f6ff-knhgt         1/1     Running   0          2m12s   10.244.4.111   k8s-node-4   <none>           <none>
dx-ambassador-769b86f6ff-qtqmv         1/1     Running   0          2m12s   10.244.4.110   k8s-node-4   <none>           <none>
dx-ambassador-769b86f6ff-whmw6         1/1     Running   0          2m12s   10.244.4.112   k8s-node-4   <none>           <none>
dx-ambassador-redis-6cbbf58649-gtqwv   1/1     Running   0          2m12s   10.244.4.106   k8s-node-4   <none>           <none>
dx-ambassador-redis-6cbbf58649-j8v4d   1/1     Running   0          2m12s   10.244.4.107   k8s-node-4   <none>           <none>	
dx-ambassador-redis-6cbbf58649-qtgqp   1/1     Running   0          2m12s   10.244.4.109   k8s-node-4   <none>           <none>
```

**OpenShift Client:**

```
# Use this command to see running Pods incl. Nodes
oc get pods -o wide -n my-deployment

# Command output
NAME                                   READY   STATUS    RESTARTS   AGE     IP             NODE         NOMINATED NODE
dx-ambassador-769b86f6ff-knhgt         1/1     Running   0          2m12s   10.244.4.111   k8s-node-4   <none>
dx-ambassador-769b86f6ff-qtqmv         1/1     Running   0          2m12s   10.244.4.110   k8s-node-4   <none>
dx-ambassador-769b86f6ff-whmw6         1/1     Running   0          2m12s   10.244.4.112   k8s-node-4   <none>
dx-ambassador-redis-6cbbf58649-gtqwv   1/1     Running   0          2m12s   10.244.4.106   k8s-node-4   <none>
dx-ambassador-redis-6cbbf58649-j8v4d   1/1     Running   0          2m12s   10.244.4.107   k8s-node-4   <none>
dx-ambassador-redis-6cbbf58649-qtgqp   1/1     Running   0          2m12s   10.244.4.109   k8s-node-4   <none>

```

## Select DX applications to deploy

HCL Digital Experience 9.5 consists of multiple applications and services that can be deployed. Depending on your needs, it might not be necessary to have all applications deployed. Refer to the [Applications overview - Deploy DX 9.5 to container platforms using Helm](https://doc.cnx.cwp.pnp-hcl.com/digital-experience/9.5/containerization/applications_overview_deploy_helm.md) Help Center topic for related information.

**Disabling or enabling specific applications**

You can easily enable or disable specific applications by adding the following parts to your custom-values.yaml file:

```
# Controls which application is deployed and configured
applications:
  # Deploys Content Composer
  contentComposer: true
  # Deploys Core
  core: true
  # Deploys Design Studio
  designStudio: false
  # Deploys Digital Asset Management
  digitalAssetManagement: true
  # Deploys the Image Processor
  # Enabling digitalAssetManagement will override this setting with: true
  imageProcessor: true
  # Deploy Open LDAP
  # Setting the ldap type in the core application configuration to dx will override this setting with: true
  openLdap: true
  # Deploys the Persistence Layer
  # Enabling digitalAssetManagement will override this setting with: true
  persistence: true
  # Deploys the Remote Search
  remoteSearch: true
  # Deploys the Ring API
  # Enabling either digitalAssetManagement or contentComposer will override this setting with: true
  ringApi: true
  # Deploys the Ambassador Ingress and Redis
  ambassador: true
  # Deploys the Runtime Controller
  runtimeController: true

```

You can set applications that you do not want to be deployed to `false`. As noted in the [Applications overview - Deploy DX 9.5 to container platforms using Helm](https://doc.cnx.cwp.pnp-hcl.com/digital-experience/9.5/containerization/applications_overview_deploy_helm.md) Help Center topic, some DX applications are pre-requisites for others to be deployed. It can appear that you have disabled an application, but it still gets deployed. This is due to other applications requiring that one.

## Supported LDAP configuration

You can specify a LDAP configuration that can be used by HCL Digital Experience 9.5.

The Helm chart provides a `ldap` section under the `configuration` and `core` section. This section can be used to configure a `none`, `dx` or `other` LDAP. This defaults to none, so there is no LDAP configured.

If you adjust this to `other`, you can configure an external LDAP that you want to connect to. Core is then configured to use this LDAP.

Currently, the configuration capability is quite limited. For more complex configurations, use the ConfigWizard instead.

|Parameter|Values|Description|
|---------|------|-----------|
|type|-   `none`
-   `other`
-   `dx`

|-   Determines which type of LDAP to use.
-   Accepts `none`, `dx` or `other`
-   `none`: No LDAP configuration
-   `dx`: use and configure DX Open LDAP
-   `other`: use other LDAP

|
|bindUser| |-   User used to connect to LDAP
-   Only used if ldap type is `other`

|
|bindPassword| |-   Password used to connect to LDAP
-   Only used if ldap type is `other`

|
|suffix| |-   Suffix in LDAP
-   Only used if ldap type is `other`

|
|host| |-   Host of LDAP
-   Only used if ldap type is `other`

|
|port| |-   Port of LDAP
-   Only used if ldap type is `other`

|
|attributeMappingLdap|-   `mail`
-   `title`
-   `userPassword`

|-   Mapping attributes between LDAP and DX, LDAP attribute names \(comma-separated list\)

|
|attributeMappingPortal|-   `ibm-primaryEmail`
-   `ibm-jobTitle`
-   `password`

|-   Mapping attributes between LDAP and DX, DX attribute names \(comma-separated list\)

|
|attributeNonSupported|-   `certificate`
-   `members`

|-   Non-supported LDAP attributes \(comma-separated list\)

|
|serverType|-   `CUSTOM`

|-   Supported LDAP Server types

|
|id|-   `dx_ldap`

|-   LDAP configuration id

|

**Example Configuration**

You can use the following syntax in your custom-values.yaml file to adjust LDAP settings:

```
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for LDAP configuration
    ldap:
      # Determines which type of LDAP to use
      # Accepts: "none", "dx" or "other"
      # "none" - no LDAP configuration
      # "dx" - use DX openLDAP and configure it
      # "other" - use provided configuration for other LDAP
      type: "none"
      # User used to connect to LDAP, only used if ldap type is "other"
      bindUser: ""
      # Password used to connect to LDAP, only used if ldap type is "other"
      bindPassword: ""
      # Suffix in LDAP, only used if ldap type is "other"
      suffix: ""
      # Host of LDAP, only used if ldap type is "other"
      host: ""
      # Port of LDAP, only used if ldap type is "other"
      port: ""
      # Supported LDAP Server types - CUSTOM
      serverType: "CUSTOM"
      # LDAP configuration id
      id: "dx_ldap"
      # Mapping attributes between LDAP and DX, LDAP attribute names (comma-separated list)
      attributeMappingLdap: "mail,title,userPassword"
      # Mapping attributes between LDAP and DX, DX attribute names (comma-separated list)
      attributeMappingPortal: "ibm-primaryEmail,ibm-jobTitle,password"
      # Non-supported LDAP attributes (comma-separated list)
      attributeNonSupported: "certificate,members"
```

Refer to the following Help Center documentation for more information about LDAP and Configuration Wizard configuration:

-   [Configuration Wizard](../config/cw_overview.md)
-   [Enable federated security](../config/cw_ldap.md)

-   [Troubleshooting: Enable federated security option](../trouble/cw_ldap.md)

## Authoring/Rendering configuration

You can choose if the environment you deploy is configured as a WCM authoring or rendering type. This has implications on things like caching of Core.

As default, this defaults to true. The deployment is configured as an authoring environment.

If you want to adjust this to deploy a rendering environment, you can use the following syntax in your custom-values.yaml file:

```
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for tuning
    tuning:
      # Configures if the environment should be configured for authoring or not
      authoring: true
```

## Configuration Wizard configuration

You can select whether the Config Wizard is started together with the Core application. This defaults to true.

If you want to adjust this setting, you can use the following syntax in your file:

```
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for tuning
    tuning:
      # Configures if the server for configWizard and dxconnect is started
      configWizard: true
```

## OpenLDAP configuration

If you choose to deploy the OpenLDAP container in your deployment, you can change country, organization and suffix, that may be configured in OpenLDAP for use.

Use the following syntax in your custom-values.yaml file to adjust the configuration:

```
# Application configuration
configuration:
  # Application specific configuration for Open LDAP
  openLdap:
    # Country configuration for Open LDAP
    country: "US"
    # Org configuration for Open LDAP
    org: "DX"
    # Suffix configuration for Open LDAP
    suffix: "dc=dx,dc=com"
```

## Remote Search configuration

You can configure whether the Remote Search configuration through the IBM WebSphere Application Server Solution Console is exposed as an additional port on the Ambassador Ingress or not. This defaults to true.

If set to true, you can access the Solution Console using:

```
https://yourhost:9043/ibm/console
```

Use the following syntax in your custom-values.yaml file:

```
# Application configuration
configuration:
  # Application specific configuration for Remote Search
  remoteSearch:
    # Should the configuration interface be exposed
    exposeConfigurationConsole: true

```

## Configure scaling

The HCL Digital Experience 9.5 Kubernetes deployment using Helm allows you to configure the pod count of each individual application.

In addition, it is possible to configure the use of HorizontalPodAutoscalers that scales up and down the applications by adding or removing Pods based on the pod metrics. Refer to the [Scaling DX 9.5 container deployments using Helm](https://doc.cnx.cwp.pnp-hcl.com/digital-experience/9.5/containerization/container_scaling_helm.md) Help Center topic for detailed overview information.

**Note:** You are not able to use more than one \(1\) Core Pod until you have performed a database transfer.

**Configuring pod count**

Even if you don't want to automatically scale your DX 9.5 deployment based on CPU and memory utilization, you still can control the amount of pods per application.

You can use the following syntax to reconfigure the pod count per application in your custom-values.yaml file:

```
# Scaling settings for deployed applications
scaling:
  # The default amount of replicas per application
  replicas:
    contentComposer: 1
    core: 1
    designStudio: 1
    digitalAssetManagement: 3
    imageProcessor: 5
    ringApi: 3
    ambassadorIngress: 3
    ambassadorRedis: 3

```

**Configuring HorizontalPodAutoscalers**

The use of HorizontalPodAutoscalers requires your cluster to have the [Kubernetes Metrics](https://github.com/kubernetes-sigs/metrics-server) running. Ensure that this is the case, and reference your cloud provider documentation for further information.

You can set up the use of `HorizontalPodAutoscalers` on a per application basis using the following syntax in your custom-values.yaml file, showing Content Composer, as an example:

```
# Scaling settings for deployed applications
scaling:
  # Automated scaling using HorizontalPodAutoscaler
  horizontalPodAutoScaler:
    # Autoscaling settings for Content Composer
    contentComposer:
      # Enable or disable autoscaling
      enabled: true
      # Minimum and maximum Pod count
      minReplicas: 1
      maxReplicas: 3
      # Target CPU utilization scaling threshold
      targetCPUUtilizationPercentage: 75
      # Target Memory utilization scaling threshold
      targetMemoryUtilizationPercentage: 80

```

The example configures a `HorizontalPodAutoscaler` for Content Composer, that scales up to 3 pods maximum. It considers scaling when a CPU utilization of 75% or Memory utilization of 80% per pod is reached.

Refer to the default values.yaml file for all configurable applications.

## Configure credentials

HCL Digital Experience 9.5 uses several credentials in its deployment to manage access between applications and from outside the container deployment.

**Adjusting default credentials**

You can adjust the default credentials that HCL Digital Experience 9.5 is using by adding the following syntax to your custom-values.yaml file and changing the values you need:

```
# Security related configuration, e.g. default credentials
security:
  # Security configuration for Core
  core:
    # Credentials used for IBM WebSphere Application Server administrative access, needs to be adjusted if different credentials are already in place
    # This setting does currently NOT adjust the existing user credentials.
    wasUser: "REDACTED"
    wasPassword: "REDACTED"
    # Credentials used for HCL Digital Experience Core administrative access, needs to be adjusted if different credentials are already in place
    # This setting does currently NOT adjust the existing user credentials
    wpsUser: "REDACTED"
    wpsPassword: "REDACTED"
  # Security configuration for Digital Asset Management
  digitalAssetManagement:
    # Credentials used by the Digital Asset Management to access the persistence database.
    dbUser: "REDACTED"
    dbPassword: "REDACTED"
    # Credentials used by the persistence database to perform replication between database nodes.
    replicationUser: "REDACTED"
    replicationPassword: "REDACTED"
  # Security configuration for Open LDAP
  openLdap:
    # Admin user for Open LDAP, can not be adjusted currently.
    ldapUser: "REDACTED"
    # Admin password for Open LDAP
    ldapPassword: "REDACTED"

```

## Configure Core sidecar logging

Beginning with HCL Digital Experience 9.5 CF199, Kubernetes deployment using Helm allows you to expose logs that are written to files by the DX Core application. The deployment uses sidecar containers, which access the same logs volume as the Core, read the log files, and expose them as their standard output. You can access logs with commands like `kubectl logs -n <namespace> <pod-name> <sidecar-container-name>`, for example, `kubectl logs -n dxns dx-deployment-core-0 system-err-log`.

See the [official Kubernetes documentation](https://kubernetes.io/docs/concepts/cluster-administration/logging/#streaming-sidecar-container) for more information.

**Shared volume**

The DX Core container and sidecar containers share the same volume. This allows DX Core to write its logs, and have the sidecar containers read those logs. The logs are mounted at /opt/HCL/logs \(and symbolically linked from /opt/HCL/wp\_profile/logs\) in the DX Core container, and at /var/logs/ in the sidecar containers. The different directory paths emphasize that sidecar containers can only read files written by Core under its logs directory. Files in other directories \(such as the profile\) are not available to the sidecars.

**Default configuration**

Two sidecar containers are launched with Core:

-   `system-out-log` - exposes the log file at /var/logs/WebSphere\_Portal/SystemOut.log.
-   `system-err-log` - exposes the log file at /var/logs/WebSphere\_Portal/SystemErr.log.

**Configure custom sidecar containers**

Use the following syntax to configure more sidecar containers for additional log files in the custom-values.yaml file.

**Important:** You can only expose log files inside of the /var/logs/ directory.

```
logging:
  # Core specific logging configuration
  core:
    # List of sidecar containers mapping a container name to a file path for a log file to be exposed
    # Each element must consist of a `containerName` and a `logFilePath`
    # Example:
    # customLogSidecarContainers:
    #   - containerName: "trace"
    #     logFilePath: "/var/logs/WebSphere_Portal/trace.log"
    customLogSidecarContainers: []
```

**Example:**

The following example starts a new sidecar container, and exposes the logs in /var/logs/WebSphere\_Portal/trace.log.

```
logging:
  core:
    customLogSidecarContainers:
      - containerName: "trace"
        logFilePath: "/var/logs/WebSphere_Portal/trace.log"
```

## Configure Remote Search sidecar logging

Beginning with HCL Digital Experience 9.5 CF199, Kubernetes deployment using Helm allows you to expose logs that are written to files on its PersistentVolumes \(PVs\) by the DX Remote Search application. The deployment uses sidecar containers, which access the PersistentVolume as the Remote Search container, read the log files, and expose them as their standard output. You can access logs with commands like `kubectl logs -n <namespace> <pod-name> <sidecar-container-name>`, for example, `kubectl logs -n dxns dx-deployment-remote-search-0 system-err-log`.

See the [official Kubernetes documentation](https://kubernetes.io/docs/concepts/cluster-administration/logging/#streaming-sidecar-container) for more information.

**Shared volume**

The DX Remote Search container and sidecar containers in the same pod share the same volume. This allows DX Remote Search to write its logs, and have the sidecar containers read those logs. The profile volume containing the logs is mounted at /opt/HCL/AppServer/profiles/prs\_profile/ in the DX Remote Search container, and at /var/profile/ in the sidecar containers. The different directory paths emphasize that sidecar containers can only read files written by Remote Search under its profile directory. Files in other directories are not available to the sidecars.

**Default configuration**

Two sidecar containers are launched with Remote Search:

-   `system-out-log` - exposes the log file at /var/profile/logs/server1/SystemOut.log.
-   `system-err-log` - exposes the log file at /var/profile/logs/server1/SystemErr.log.

**Configure custom sidecar containers**

Use the following syntax to configure more sidecar containers for additional log files in the custom-values.yaml file.

**Important:** You can only expose log files inside of the /var/profile/ directory.

```
logging:
  remoteSearch:
    # List of sidecar containers mapping a container name to a file path for a log file to be exposed
    # Each element must consist of a `containerName` and a `logFilePath`, the latter must be located in /var/profile
    # Example:
    # customLogSidecarContainers:
    #   - containerName: "trace"
    #     logFilePath: "/var/profile/logs/server1/trace.log"
    customLogSidecarContainers: []
```

**Example:**

The following example starts a new sidecar container, and exposes the logs in /var/profile/logs/server1/trace.log.

```
logging:
  remoteSearch:
    customLogSidecarContainers:
      - containerName: "trace"
        logFilePath: "/var/profile/logs/server1/trace.log"
```

## Configure Labels and Annotations

This section documents the configuration of labels and annotations for different DX resources.

-   **Annotations**

    **Services and Pods**

    To configure annotations for kubernetes services and pods, update your custom-values.yaml file as follows:

    **Notes:**

    -   Additional annotations are not mandatory for a deployment.
    -   Ensure you do not overwrite existing DX annotations such as the following:

        ```
        meta.helm.sh/release-name
        ```

        ```
        meta.helm.sh/release-namespace
        ```

    -   **Sample annotations for core service**

        To set annotation `KEY1` with value VALUE1 and annotation `KEY2` with value VALUE2 on the core service, add the following to your custom-values.yaml file:

        ```
        annotations:
          service: 
            core: 
              - key: KEY1
                value: VALUE1
              - key: KEY2
                value: VALUE2
        ```

    -   **Sample annotations for core pods**

        To set annotation `KEY1` with value VALUE1 and annotation `KEY2` with value VALUE2 on core pods, add the following to your custom-values.yaml file:

        ```
        annotations:
          pod: 
            core: 
              - key: KEY1
                value: VALUE1
              - key: KEY2
                value: VALUE2
        ```

-   **Labels**

    **Services and Pods**

    To configure labels for kubernetes services and pods, update your custom-values.yaml file as follows:

    **Notes:**

    -   Additional labels are not mandatory for a deployment.
    -   Ensure that you do not overwrite existing DX Labels such as the following:

        ```
        release
        
        ```

        ```
        helm.sh/chart
        
        ```

        ```
        app.kubernetes.io/version
        
        ```

        ```
        app.kubernetes.io/managed-by
        
        ```

        ```
        app.kubernetes.io/name
        
        ```

        ```
        app.kubernetes.io/instance
        ```

    -   **Sample labels for core services**

        To set label `KEY1` with value VALUE1 and label `KEY2` with value VALUE2 on the core services, add the following to your custom-values.yaml file:

        ```
        label:
          service: 
            core: 
              - key: KEY1
                value: VALUE1
              - key: KEY2
                value: VALUE2
        ```

    -   **Sample labels for core pods**

        To set label `KEY1` with value VALUE1 and label `KEY2` with value VALUE2 on core pods, add the following to your custom-values.yaml file:

        ```
        label:
          pod: 
            core: 
              - key: KEY1
                value: VALUE1
              - key: KEY2
                value: VALUE2
        ```


## **Configure environment variables for DX resources**

This section explains the configuration of environment variables for different DX resources.

**Environment variables**

To configure environment variables for kubernetes pods, update your custom-values.yaml file as below.

**Note:** Additional environment values are not mandatory for a deployment.

-   **Sample environment variables for `core` pods**

    To set environment variable `KEY1` with value VALUE1 and environment variable `KEY2` with value VALUE2 on core pods, add the following to your custom-values.yaml file:

    ```
    environment:
      pod: 
        core: 
          - name: KEY1
            value: VALUE1
          - name: KEY2
            value: VALUE2
    ```


## Incubator section in the values.yaml file

The Incubator section is in the root level of the values.yaml file in the Helm charts. This section contains the capabilities that are planned to be made available for production environments in the future releases. The configurations within the incubator section are subject to change. The default values within this section are defined in such a way that they do not interfere with the existing deployments. The features and functions within the incubator section are considered experimental and might not be fully documented yet.

**Note:** All features within the incubator section are not recommended to be used in the production environments.

Refer to **[Install and uninstall commands](helm_install_commands.md)** for the next steps.

## Use ImagePullSecrets

To use a container image registry that has access restrictions and requires credentials, you need to leverage `ImagePullSecrets` in your deployment. Refer to the [Kubernetes Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/) for additional information on this topic.

In addition, reference your Cloud Provider documentation on how to create `ImagePullSecrets`.

**Note:** Ensure that the `ImagePullSecret` has been created in the same namespace that your DX deployment is installed to.

## Configure deployment to use ImagePullSecrets

In order for the HCL Digital Experience 9.5 deployment to leverage `ImagePullSecrets` you need to adjust your `custom-values.yaml` file to include the following syntax:

```
images:
 imagePullSecrets:
 - name: regcred         
```

The name `regcred` can be different, depending on how you have created your `ImagePullSecret` and how it is named. Ensure that you reference the correct name in the configuration.

It is assume that you have moved the HCL Digital Experience 9.5 images to your registry; make sure it is also configured properly in your `custom-values.yaml`:

```
images:
  repository: "your-repo:port"                
```

All pods created now have that secret configured for pulling DX container images.

**Parent topic:**[Deploying container platforms using Helm](../containerization/helm_deployment.md)

