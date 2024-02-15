# Disabling automatic synchronization to protect your clustered source environment

The target environment initially uses the same ports as the source environment. There are three important steps you must complete to ensure that the source and target environments do not become corrupted.

1.  Disable automatic synchronization on all nodes in the cluster.

    In a clustered environment, turn off automatic node synchronization before you start the migration. When the automatic synchronization is enabled, the node agent on each node automatically contacts the deployment manager every synchronization interval. As you migrate nodes, some of your migration-specific configuration for a node might get replicated in your clustered environment. For this reason, it is preferable to disable the automatic synchronization and manually sync.

    1.  Start the WebSphere® Integrated Solutions Console.

    2.  Select **System Administration > Node Agents** in the navigation tree.

    3.  Click **nodeagent** for the required node.

    4.  Click **File Synchronization Service** under the **Additional Properties** section.

    5.  Clear the **Enable service at server startup** check box selection to disable the synchronization service at startup.

    6.  Clear the **Automatic Synchronization** check box selection to disable the automatic synchronization feature.

    7.  Click **OK** and **Save**.

    8.  Repeat these steps for all remaining nodes.

    9.  Select **System Administration > Nodes** in the navigation tree.

    10. Select all nodes that must be manually synchronized, and click **Synchronize**.

    11. Select **System Administration > Node Agents** in the navigation tree.

    12. For the primary node, select the node agent and click **Restart**.

2.  Stop the source deployment manager and node agents before you start your cluster migration.

    This step is required to ensure that the source and target environments do not become corrupted during the migration process. The application servers can continue to run, but administration is disabled until the ports for the target environment are changed in Migrate a Cluster Step 3: Upgrade nodes. Ensure that the source deployment manager and node agents do not start until you complete Migrate a Cluster Step 2: Migrate node profiles.

    1.  Open the WebSphere Integrated Solutions Console.

    2.  Click **System administration > Node agents**.

    3.  Select the check box for the node agents and click **Stop**.

    4.  Click **System administration > Deployment manager**.

    5.  On the **Configuration** tab of the deployment manager settings, click **Stop**.

3.  Update the ports on the target environment.

    You will update the ports for the target environment in a step that is detailed in Migrate a Cluster Step 3: Upgrade node profiles. After you update the ports, the source deployment manager and node agents can be started.


???+ info "Related information" 
    -   [Enabling automatic synchronization for a clustered environment](../../../../deployment/manage/migrate/next_steps/post_mig_activities/admin_task/mig_enable_auto-sync.md)

