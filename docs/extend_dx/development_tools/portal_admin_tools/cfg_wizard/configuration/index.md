---
title: Configuration options
---

# Configuration options in the Configuration Wizard

Using the following configuration options, you can configure the portal server that you are connected to in real time. You can also download scripts and instructions to run on other servers, create reusable scripts for common configuration patterns, and create scripts to compare to scripts created in previous releases.

1. Standalone
-   **Database Transfer**

    Select this option to transfer data from Apache Derby to any of the database types that are supported by HCL Portal.

    -   This option is found in **Set Up a Stand-alone Server** and in **Set Up a Cluster**.
    -   Documentation resource: [Database transfer](../../../../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_web_content_dev.md#transferring-your-database)
    -   Documentation resource: [Troubleshooting: Database Transfer](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/troubleshooting_db_transfer/index.md)

-   **Enable Federated Security**

    Add an LDAP user registry to the default federated repository to store user account information for authorization.

    -   This option is found in **Set Up a Stand-alone Server** and in **Set Up a Cluster**.
    -   Documentation resource: [Enable federated security](../../../../../deployment/manage/security/user_registry/cw_ldap.md)
    -   Documentation resource: [Troubleshooting: Enable federated security option](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_ldap.md)

-   **Shorten Site URLs for Search Engine Optimization**

    Use the Configuration Wizard to change or remove /wps/portal (context root and default home values) to create shorter, human-readable URLs. Select an option to remove navigational state information from site URLs.

    -   This option is found in **Set Up a Stand-alone Server** and **Set Up a Cluster**.
    -   Documentation resource: [Configuration Wizard instructions: Modify site URLs for search engine optimization](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_shorten_url_seo_ts.md)
    
    !!!note
        **Note:** The Configuration Wizard is not used to shorten site URLs for Search Engine Optimization on Kubernetes platforms. Refer to the [Customizing the HCL DX URL when deployed to container platforms](https://help.hcltechsw.com/digital-experience/9.5/containerization/t_customize_dx_url.html) topic for more information.

2. Cluster
-   **Create a Deployment Manager**

    Create a deployment manager profile that is augmented with HCL Portal resources.

    -   This option is found in **Set Up a Cluster**.
    -   Documentation resource: [Create a deployment manager](../../../../../deployment/manage/config_cluster/cw_dmgr_profile.md)
    -   Documentation resource: [Troubleshooting: Create a deployment manager](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_create_dmgr.md)

-   **Create a Cluster**

    Use the Configuration Wizard to create the primary node in your cluster.

    -   This option is found in **Set Up a Cluster**.
    -   Documentation resource: [Create a cluster](../../../../../deployment/manage/config_cluster/create_cluster/index.md)
    -   Documentation resource: [Troubleshooting: Create a cluster option](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_create_cluster.md)

-   **Create an Additional Cluster Node**

    Use the Configuration Wizard to add nodes to a cluster.

    -   This option is found in **Set Up a Cluster**.
    -   Documentation resource: [Create an additional cluster node](../../../../../deployment/manage/config_cluster/cw_add_node.md)
    -   Documentation resource: [Troubleshooting: Create an additional cluster node](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_create_addnode.md)

3. Add-ons
-   **Install and Uninstall Add-ons**

    You can install add-on functionality to your HCL Portal with the solution installer through the Configuration Wizard.

    -   This option is found in **Add On New Capability**.
    -   Documentation resource: [Install and uninstall add-ons using the Configuration Wizard](../../../../../deployment/install/traditional/install_addons/inst_cw_addons.md)

- **Install a PAA file**
    You do not have to wait until the next release to add on new features to your installed Exceptional Digital Experience software. From the Modify option, you can add HCL Web Content Manager to your portal installation, and use the Solution Installer to distribute Portal Application Archive applications to your environment.
    -   This option is found in **Add On New Capability**.
    -   Documentation resource: [Install a PAA file](../../../../../extend_dx/development_tools/portal_admin_tools/cfg_wizard/usage/cw_modify.md#install-a-paa-file)

4. More options
-   **Recycle a Managed HCL Digital Experience Cell**

    Select this option to recycle the deployment manager and node agents. This configuration option runs the action-cluster-recycle-dmgr task.

    -   This option is found in **More Options**.

-   **Remove the HCL Digital Experience Profile**

    Use the Configuration Wizard to remove a portal profile.

    -   This option is found in **More Options**.
    -   Documentation resource: [Remove an HCL Portal profile](../../../../../deployment/manage/profile/cw_remove_profile.md)
    -   Documentation resource: [Troubleshooting: Remove an HCL Portal profile](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_removeprofile.md)

## Configuration Wizard and clusters

In clustered environments, you can use the Configuration Wizard from the primary node. You can use the scripts from the primary node on the other nodes. You do not need to deploy the Configuration Wizard to the deployment manager.

## Configuration Wizard profile

The wizard has a unique profile, cw_profile, and administrator credentials.

!!!note
    Running the Configuration Wizard on z/OS® is not supported.
