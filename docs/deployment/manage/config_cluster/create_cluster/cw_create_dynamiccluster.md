# Dynamic cluster

If you choose to create a dynamic cluster using the Configuration Wizard, the following configuration steps might be included in your generated instructions. Steps might vary based on your wizard selections. For example, whether the deployment manager is on the same server or a different server. This procedure is intended only as a reference. Follow your generated instructions from the wizard to create a dynamic cluster.

The default selections for the create a cluster procedure are:

-   Deployment manager on the same server

If you selected a value other than the default, it is listed as a condition on the step that is associated with that selection.

1.  Manual Step: Verify that the portal node and deployment manager system clocks are within 5 minutes of each other.

    -   **Condition**

        Deployment manager is remote

    -   **ConfigEngine task**

        none

2.  Federate the node. This node then becomes a managed node in the deployment manager cell.

    -   **Condition**

        none

    -   **ConfigEngine task**

        add-node

3.  Configure the dynamic cluster node. Add a nodegroup and add nodes to the nodegroup

    -   **Condition**

        none

    -   **ConfigEngine task**

        dynamic-cluster-create-nodegroup

        dynamic-cluster-add-node-to-nodegroup

4.  Prepare the node for clustering.

    -   **Condition**

        none

    -   **ConfigEngine task**

        cluster-node-config-post-federation

5.  Complete the cluster setup.

    -   **Condition**

        none

    -   **ConfigEngine task**

        cluster-node-config-dynamic-cluster-setup

**Related information**  
[Accessing the Configuration Wizard](../../../../extend_dx/development_tools/portal_admin_tools/cfg_wizard/configuration/cw_run.md)<br>
[Updating DB2 self-tuning memory manager (STMM) settings](../../migrate/next_steps/post_mig_activities/db_task/mig_t_post_db2_stmm.md)

