# Setting up a cluster

Use the Configuration Wizard to set up either a dynamic or static horizontal cluster.

## Before you begin
Roadmaps provide an overview of the steps that are required for common environment configurations. Select the roadmap that is most like the environment that you want to set up.

## Prerequisites
-   [Roadmap for clusters](../../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_clusters/rm_cluster_parent.md)


## About this task
The Configuration Wizard supports adding additional nodes to a horizontal cluster. If you are setting up a vertical cluster, multiple node on a single physical server, manual instructions are available for adding an additional vertical node to either a dynamic or static cluster configuration.

## Procedure

1.  Select the roadmap that is most like the configuration that you need to configure.

2.  Access the Configuration Wizard. Go to http://your_server:10200/hcl/wizard.

    !!!note
        If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your_server:10200/hcl/wizard.

    !!!note "Restriction"
        There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw_profile.

    !!!note
        The wizard user interface might not be available in all languages. If the language is not currently supported, you might see the English version. For details on the supported languages for all of the HCL Digital Experience user interfaces, see [Language support](../../../extend_dx/development_tools/portal_admin_tools/language_support/index.md).

4.  Click **Set Up a Cluster**.

5.  Complete each sub step in the order that is shown in the wizard.

    Use the Configuration Wizard in conjunction with your selected roadmap.

    -   [Create a deployment manager](../../../deployment/manage/config_cluster/cw_dmgr_profile.md)
    -   [Create a cluster](../../../deployment/manage/config_cluster/create_cluster/index.md)
    -   [Create an additional cluster node](../../../deployment/manage/config_cluster/cw_add_node.md)
    -   [Adding vertical cluster members to a static cluster](../config_cluster/add_vert_clus.md)
    -   [Adding vertical cluster members to a dynamic cluster](../config_cluster/add_dynvert_clus.md)
    -   [Deleting vertical cluster members](../../../deployment/manage/config_cluster/delete_vert_clus.md)

???+ info "Related information"  
    -   [Accessing the Configuration Wizard](../../../extend_dx/development_tools/portal_admin_tools/cfg_wizard/configuration/cw_run.md)
    -   [Updating DB2 self-tuning memory manager (STMM) settings](../migrate/next_steps/post_mig_activities/db_task/mig_t_post_db2_stmm.md)

