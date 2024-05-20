# Upgrading Helm Deployment

This section describes how to update the configuration of an HCL Digital Experience (DX) 9.5 CF196 or later deployment to Kubernetes or OpenShift installed using Helm.

This section assumes that you prepared your cluster and your custom-values.yaml file, using guidance provided in the [Preparation before installing HCL DX  using Helm](../helm_deployment/preparation/index.md) topic, and then installed your deployment using the instructions in the [Install](../helm_deployment/helm_install_commands.md) topic.

## Overview of Helm Configuration Updates

Once an HCL DX Kubernetes 9.5 deployment is installed, it is possible to update its configuration directly using the standard Kubernetes or OpenShift commands (for example, by updating values in the various config maps). However, this is NOT the recommended approach. Some of the configuration parameters have interdependencies, as outlined in the [Preparation before installing HCL DX using Helm](../helm_deployment/preparation/index.md) topic. These require knowledgeable management to make changes that are compatible with interdependency requirements. For example, if you change the context root for DX Core you also need to change the readiness and liveness probes.

The recommended approach for configuration changes is to update the custom-values.yaml file used to install the deployment, and then run a Helm upgrade. This has the added benefit that your custom-values.yaml file remains an up-to-date description of the configuration of your environment.

## Prerequisites

Make sure that the `wkplc_dbdomain.properties` file is correct. The HCL DX upgrade runs several ConfigEngine scripts. These scripts depend on the `wkplc_dbdomain.properties` being up-to-date and accurate, especially with the password properties. 

Edit the `(wp_profile root)/ConfigEngine/properties/wkplc_dbdomain.properties` file and ensure the following values are set correctly:
    -   `release.DbPassword=(your database user password)`
    -   `community.DbPassword=(your database user password)`
    -   `customization.DbPassword=(your database user password)`
    -   `jcr.DbPassword=(your database user password)`
    -   `likeminds.DbPassword=(your database user password)`
    -   `feedback.DbPassword=(your database user password)`

If you do not want these password values removed after every run, make sure `PWordDelete=false` is set in `(wp_profile root)/ConfigEngine/properties/wkplc.properties`.

!!!note
        If your server is configured with database runtime users, for example, `feedback.DbRuntimeUser=(your feedback database runtime user)`, make sure to set their password values correctly (for example, in `feedback.DbRuntimePassword=(your feedback database runtime user password)`).

## Recommended actions during a CF upgrade

In a Helm-based deployment, moving from one cumulative fix (CF) to another one is also handled through Helm upgrade. In addition to the [Prerequisites](#prerequisites) mentioned, the following actions are recommended when applying cumulative fixes:
In addition to the Prerequisites mentioned above we recommend the following actions for applying cumulative fixes:
- Back up the file system of the persistent volumes associated with the namespace. Also, take a matching backup of the database associated with the Core pod.
 2. In case you are running a 24/7 environment we recommend setting up a blue/green deployment before applying a CF to ensure high availability. While DX Core will stay available with multiple pods, DAM is not high available during CF application. See [Difference and Similarities Between Traditional and Kubernetes DX Deployments](../../deployment/manage/container_configuration/deploy_container_artifact_updates.md#difference-and-similarities-between-traditional-and-kubernetes-dx-deployments) showing how a DX solution could be deployed for high availability and blue/green deployments in a single Kubernetes cluster.
 3. Disable DAM staging from and to the environment while it is not matching the source or target CF level.
 4. Consider disabling WCM Syndication from and to the environment - this is not required but recommended.

## Helm Upgrade configuration command

After making the needed changes to your custom-values.yaml file, use the following command:

``` sh
# Helm upgrade command
helm upgrade -n your-namespace -f path/to/your/custom-values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
```

-   The `your-namespace` is the namespace in which your HCL Digital Experience 9.5 deployment is installed and `your-release-name` is the Helm release name you used when installing.
-   The `-f path/to/your/custom-values.yaml` parameter must point to the custom-values.yaml you have updated.
-   The path/to/hcl-dx-deployment-vX.X.X\_XXXXXXXX-XXXX.tar.gz is the HCL Digital Experience Helm Chart that you extracted in the preparation steps.



