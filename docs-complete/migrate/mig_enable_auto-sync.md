# Enabling automatic synchronization for a clustered environment 

Before you started migration, you disabled automatic synchronization to prevent the source and target environments from becoming corrupted. Now that the data migration is complete, it is safe to enable this feature on both the source and target environments.

1.  Start the WebSphere® Integrated Solutions Console for the deployment manager.

2.  Select **System Administration** \> **Node Agents**.

3.  Click **nodeagent** for the required node.

4.  Click **File Synchronization Service** in the **Additional Properties** section.

5.  Ensure that **Enable service at server startup** is selected to enable the synchronization service at startup.

6.  Ensure that **Automatic Synchronization** is selected to enable the automatic synchronization feature.

7.  Click **OK** and **Save**.

8.  Repeat these steps for all remaining nodes.

9.  Select **System Administration** \> **Node Agents**.

10. Select all nodes that previously had automatic synchronization disabled, and click **Restart**.


**Parent topic:**[Administrative tasks ](../migrate/mig_post_admintasks.md)

**Related information**  


[Disabling automatic synchronization to protect your clustered source environment ](../migrate/mig_disable_auto-sync.md)

