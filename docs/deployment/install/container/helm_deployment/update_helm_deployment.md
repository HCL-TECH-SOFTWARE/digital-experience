# Upgrading Helm Deployment

This section describes how to update the configuration of an HCL Digital Experience (DX) 9.5 CF196 or later deployment to Kubernetes or OpenShift installed using Helm.

This section assumes that you prepared your cluster and your custom-values.yaml file, using guidance provided in the [Preparation before installing HCL DX  using Helm](../helm_deployment/preparation/index.md) topic, and then installed your deployment using the instructions in the [Install](../helm_deployment/helm_install_commands.md) topic.

## Overview of Helm Configuration Updates

Once an HCL DX Kubernetes 9.5 deployment is installed, it is possible to update its configuration directly using the standard Kubernetes or OpenShift commands (for example, by updating values in the various config maps). However, this is NOT the recommended approach. Some of the configuration parameters have interdependencies, as outlined in the [Preparation before installing HCL DX using Helm](../helm_deployment/preparation/index.md) topic. These require knowledgeable management to make changes that are compatible with interdependency requirements. For example, if you change the context root for DX Core you also need to change the readiness and liveness probes.

The recommended approach for configuration changes is to update the custom-values.yaml file used to install the deployment, and then run a Helm upgrade. This has the added benefit that your custom-values.yaml file remains an up-to-date description of the configuration of your environment.

## Prerequisites

Make sure that the `wkplc.*` files are correct. The HCL DX upgrade runs several ConfigEngine scripts. These scripts depend on the `wkplc.*` being up-to-date and accurate, especially with the password properties. If you are using multiple profiles, verify that the information in each profile is correct.

1.  Edit the `(wp_profile root)/ConfigEngine/properties/wkplc.properties` file and ensure the following values are set correctly:
    -   `WasRemoteHostName=(the hostname of your WAS instance)`
    -   `WasSoapPort=(the soap port of your WAS instance)`
    -   `WasUserid=(your WAS admin user)`
    -   `WasPassword=(your WAS admin pwd)`
    -   `PortalAdminId=(your Portal Admin ID)`
    -   `PortalAdminPwd=(your Portal Admin password)`
    -   `WpsHostName=(Your Portal hostname)`
    -   `WpsHostPort=(The port you use to access Portal)`
    -   `WpsContextRoot=(your Portal context root)`
    -   (For HCL DX 9.5 CF19 and later releases): `CwUserPwd=xxxxxx (your Config wizard password)`
    -   (Optional, For HCL DX 9.5 CF202 and later releases): `skipWoodburnUpdate=true`
2.  Edit the `(wp_profile root)/ConfigEngine/properties/wkplc_dbdomain.properties` file and ensure the following values are set correctly:
    -   `release.DbPassword=(your database user password)`
    -   `community.DbPassword=(your database user password)`
    -   `customization.DbPassword=(your database user password)`
    -   `jcr.DbPassword=(your database user password)`
    -   `likeminds.DbPassword=(your database user password)`
    -   `feedback.DbPassword=(your database user password)`
3.  Edit the `(wp_profile root)/ConfigEngine/properties/wkplc_comp.properties` file and ensure the following values are set correctly:
    -   `XmlAccessHost=(your Portal hostname)`
    -   XmlAccessPort=(the port you use to access Portal)
    
    !!!note
        If your server is configured with database runtime users, for example, `feedback.DbRuntimeUser=(your feedback database runtime user)`, make sure to set their password values correctly (for example, in `feedback.DbRuntimePassword=(your feedback database runtime user password)`).


## Helm Upgrade configuration command

After making the needed changes to your custom-values.yaml file, use the following command:

``` sh
# Helm upgrade command
helm upgrade -n your-namespace -f path/to/your/custom-values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
```

-   The `your-namespace` is the namespace in which your HCL Digital Experience 9.5 deployment is installed and `your-release-name` is the Helm release name you used when installing.
-   The `-f path/to/your/custom-values.yaml` parameter must point to the custom-values.yaml you have updated.
-   The path/to/hcl-dx-deployment-vX.X.X\_XXXXXXXX-XXXX.tar.gz is the HCL Digital Experience Helm Chart that you extracted in the preparation steps.



