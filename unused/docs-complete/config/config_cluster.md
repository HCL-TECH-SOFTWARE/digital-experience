# Setting up a cluster 

Use the Configuration Wizard to set up either a dynamic or static horizontal cluster.

Roadmaps provide an overview of the steps that are required for common environment configurations. Select the roadmap that is most like the environment that you want to set up.

The Configuration Wizard supports adding additional nodes to a horizontal cluster. If you are setting up a vertical cluster, multiple node on a single physical server, manual instructions are available for adding an additional vertical node to either a dynamic or static cluster configuration.

1.  Select the roadmap that is most like the configuration that you need to configure.

2.  Access the Configuration Wizard. Go to http://your\_server:10200/hcl/wizard.

    **Note:** If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your\_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your\_server:10200/hcl/wizard.

    **Restriction:** There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.

    **Note:** The wizard user interface might not be available in all languages. If the language is not currently supported, you might see the English version. For details on the supported languages for all of the HCL Digital Experience user interfaces, see [Supported languages](../reference/supportedlanguages.md).

4.  Click **Set Up a Cluster**.

5.  Complete each sub step in the order that is shown in the wizard.

    Use the Configuration Wizard in conjunction with your selected roadmap.


-   **[Create a deployment manager ](../config/cw_dmgr_profile.md)**  
When you set up a cluster, you must create a deployment manager profile. Use the Configuration Wizard to set up the profile.
-   **[Create a cluster ](../config/cw_create_cluster.md)**  
Use the Configuration Wizard to create the primary node in your cluster. The Create a Cluster option in the wizard refers to setting up the primary node.
-   **[Create an additional cluster node ](../config/cw_add_node.md)**  
After you answer questions and provide information about your environment, the wizard generates a custom configuration procedure. The following set of steps represents all possible configuration steps. The instructions that you generate might include or exclude specific steps based on your wizard selections.
-   **[Adding vertical cluster members to a static cluster ](../install/add_vert_clus.md)**  
You can add vertical cluster members to share the workload demands of your cluster across multiple members on the same physical server.
-   **[Adding vertical cluster members to a dynamic cluster ](../install/add_dynvert_clus.md)**  
You can add vertical cluster members to your dynamic cluster. The members share the workload demands across multiple members that run on the same server.
-   **[Deleting vertical cluster members ](../install/delete_vert_clus.md)**  
When necessary, you can delete members from your static or dynamic cluster.

**Parent topic:**[Configuring ](../config/configuring_parent2.md)

**Related information**  


[Roadmaps for clusters ](../install/rm_cluster_parent.md)

[Adding vertical cluster members to a static cluster ](../install/add_vert_clus.md)

[Adding vertical cluster members to a dynamic cluster ](../install/add_dynvert_clus.md)

[Accessing the Configuration Wizard ](../config/cw_run.md)

[Updating DB2 self-tuning memory manager \(STMM\) settings ](../migrate/mig_t_post_db2_stmm.md)

