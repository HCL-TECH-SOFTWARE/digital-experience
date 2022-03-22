# Configuration Wizard

Use the Configuration Wizard to set up stand-alone servers and new deployments, create clusters, migrate and update to new versions, and add new capabilities to existing deployments.

In the Configuration Wizard, you answer questions about the environment that you are configuring. Based on your answers, the wizard prompts you for custom values that are needed to configure your environment. Finally, the wizard generates custom steps and scripts to set up your environment.

**Video**: [HCL Portal - How to Access ConfigWizard](https://www.youtube.com/watch?v=YAEO78T7coM&feature=youtu.be)

## Configuration options in the Configuration Wizard

Using the following configuration options, you can configure the portal server that you are connected to in real time. You can also download scripts and instructions to run on other servers, create reusable scripts for common configuration patterns, and create scripts to compare to scripts created in previous releases.

-   **Database Transfer**

    Select this option to transfer data from Apache Derby to any of the database types that are supported by HCL Portal.

    -   This option is found in **Set Up a Stand-alone Server** and in **Set Up a Cluster**.
    -   Documentation resource: [Database transfer](cw_db_transfer.md#)
    -   Documentation resource: [Troubleshooting: Database Transfer](../trouble/cw_dbtransfer_trouble.md#)
-   **Enable Federated Security**

    Add an LDAP user registry to the default federated repository to store user account information for authorization.

    -   This option is found in **Set Up a Stand-alone Server** and in **Set Up a Cluster**.
    -   Documentation resource: [Enable federated security](cw_ldap.md#)
    -   Documentation resource: [Troubleshooting: Enable federated security option](../trouble/cw_ldap.md#)
-   **Shorten Site URLs for Search Engine Optimization**

    Use the Configuration Wizard to change or remove /wps/portal \(context root and default home values\) to create shorter, human-readable URLs. Select an option to remove navigational state information from site URLs.

    -   This option is found in **Set Up a Stand-alone Server** and **Set Up a Cluster**.
    -   Documentation resource: [Configuration Wizard instructions: Modify site URLs for search engine optimization](cw_shorten_url_seo.md)
    **Note:** The Configuration Wizard is not used to shorten site URLs for Search Engine Optimization on Kubernetes platforms. Refer to the [Customizing the HCL DX URL when deployed to container platforms](../containerization/t_customize_dx_url.md) topic for more information.

-   **Create a Deployment Manager**

    Create a deployment manager profile that is augmented with HCL Portal resources.

    -   This option is found in **Set Up a Cluster**.
    -   Documentation resource: [Create a deployment manager](cw_dmgr_profile.md#)
    -   Documentation resource: [Troubleshooting: Create a deployment manager](../trouble/cw_create_dmgr.md#)
-   **Create a Cluster**

    Use the Configuration Wizard to create the primary node in your cluster.

    -   This option is found in **Set Up a Cluster**.
    -   Documentation resource: [Create a cluster](cw_create_cluster.md#)
    -   Documentation resource: [Troubleshooting: Create a cluster option](../trouble/cw_create_cluster.md#)
-   **Create an Additional Cluster Node**

    Use the Configuration Wizard to add nodes to a cluster.

    -   This option is found in **Set Up a Cluster**.
    -   Documentation resource: [Create an additional cluster node](cw_add_node.md#)
    -   Documentation resource: [Troubleshooting: Create an additional cluster node](../trouble/cw_create_addnode.md#)
-   **Install and Uninstall Add-ons**

    You can install add-on functionality to your HCL Portal with the solution installer through the Configuration Wizard.

    -   This option is found in **Add On New Capability**.
    -   Documentation resource: [Install and uninstall add-ons using the Configuration Wizard](../install/inst_cw_addons.md#)
-   **Migrate a Stand-alone Server**

    Use the Configuration Wizard to migrate a stand-alone server environment.

    -   This option is found in **Migrate to a New Version**.
    -   Documentation resource: [Migrate a stand-alone server](cw_migrate_stand_alone.md#)
    -   Documentation resource: [Troubleshooting: Migrate a stand-alone server](../trouble/cw_migrate_standalone.md#)
-   **Migrate a Cluster Step 1: Migrate the Deployment Manager Profile**

    Use the Configuration Wizard to migrate the deployment manager profile for a cluster environment. These steps must be completed before you start the migration of any nodes.

    -   This option is found in **Migrate to a New Version**.
    -   Documentation resource: [Cluster: Migrate the deployment manager profile](cw_migrate_cluster_1.md#)
    -   Documentation resource: [Troubleshooting: Migrate the deployment manager profile for a cluster environment](../trouble/cw_migrate_cluster1.md#)
-   **Migrate a Cluster Step 2: Migrate Node Profiles**

    Use the Configuration Wizard to upgrade the node profiles for a cluster environment. These steps must be completed on all portal nodes in the cell before you begin the next cluster migration step.

    -   This option is found in **Migrate to a New Version**.
    -   Documentation resource: [Cluster: Migrate node profiles](cw_migrate_cluster_2.md#)
    -   Documentation resource: [Troubleshooting: Migrate node profiles for a cluster environment](../trouble/cw_migrate_cluster2.md#)
-   **Migrate a Cluster Step 3: Upgrade Node Profiles**

    Use the Configuration Wizard to upgrade the nodes profiles for a cluster environment. Start these steps only after you migrate node profiles on all portal nodes in the cell.

    -   This option is found in **Migrate to a New Version**.
    -   Documentation resource: [Cluster: Upgrade node profiles](cw_migrate_cluster_3.md#)
    -   Documentation resource: [Troubleshooting: Upgrade node profiles for a cluster environment](../trouble/cw_migrate_cluster3.md#)
-   **Recycle a Managed HCL Digital Experience Cell**

    Select this option to recycle the deployment manager and node agents. This configuration option runs the action-cluster-recycle-dmgr task.

    -   This option is found in **More Options**.
-   **Remove the HCL Digital ExperienceProfile**

    Use the Configuration Wizard to remove a portal profile.

    -   This option is found in **More Options**.
    -   Documentation resource: [Remove an HCL Portal profile](cw_remove_profile.md#)
    -   Documentation resource: [Troubleshooting: Remove an HCL Portal profile](../trouble/cw_removeprofile.md#)

## Configuration Wizard and clusters

In clustered environments, you can use the Configuration Wizard from the primary node. You can use the scripts from the primary node on the other nodes. You do not need to deploy the Configuration Wizard to the deployment manager.

## Configuration Wizard profile

The wizard has a unique profile, cw\_profile, and administrator credentials.

**Note:** Running the Configuration Wizard on z/OS® is not supported.

