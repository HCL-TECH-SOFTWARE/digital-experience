# Cluster Step 3: Upgrade node profiles

Use the Configuration Wizard to upgrade the nodes profiles for a cluster environment. Use the following information to get familiar with the information you must provide in the wizard and the configuration procedure that it generates.

## Configuration Wizard

Select **Migrate to a New Version**, and choose the **Migrate a Cluster Step 3: Upgrade Node Profiles** option.

**Note:** This option is not available for IBM® z/OS®.

# Worksheet

To set up the migration, you answer questions about your wanted configuration. Some fields apply to migration configurations. Some fields are required based on your environment. The remaining fields are advanced and do not apply to most configurations.

## Minimal required fields

The following table lists the fields that are unique to the Migrate a cluster step 3: Upgrade node profiles configuration option. You might be prompted for additional information about system or user IDs and passwords that you defined during the portal installation process.

|Field Label|Default|Your Value|
|-----------|-------|----------|
|**Target operating system**|Linux™| |
|**Target portal profile name**|wp\_profile| |
|**Target portal profile home directory**|/opt/IBM/WebSphere/wp\_profile| |
|**Database management software**|Derby| |
|**WebSphere Application Server administrator**|wpsadmin| |
|**WebSphere Application Server administrator password**| | |
|**Target deployment manager host name**| | |
|**Target deployment manager soap port****Note:** Enter the same port number used for the source environment.

|10033| |
|**What is the new host name**| | |
|**Where is the target portal installed**|/opt/IBM/WebSphere/PortalServer| |

## Advanced fields

The following table lists the advanced fields that are unique to the Migrate a cluster step 3: Upgrade node profiles configuration option. Click **Advanced** on the Answer Questions page for the target node to see the advanced properties. Default values are provided for advanced fields that are required.

|Field Label|Default|Your Value|
|-----------|-------|----------|
|**JVM heap size**|2048| |

# Migrate a cluster step 3: Upgrade node profiles option

After you answer questions and provide information about your migration, the wizard generates a custom configuration procedure.

Depending on your environment, the wizard generates a configuration process. The following steps reflect all possible steps in the configuration process. The steps do not represent a literal configuration. The steps are provided as a reference.

If you click **View Step Command**, you can see the task and properties that are associated with each step in the wizard.

1.  Manual Step: Update the ports for the deployment manager and nodes

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

2.  Upgrade the ConfigEngine

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

3.  Update database settings

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

4.  Validate the database settings

    -   **Condition**

        none

    -   **ConfigEngine task**

        validate-database

5.  Connect to new databases

    -   **Condition**

        none

    -   **ConfigEngine task**

        connect-database

6.  Manual Step: Review database schema changes

    -   **Condition**

        IBM® z/OS®

        DB2®

    -   **ConfigEngine task**

        none

7.  Upgrade the base portal database component

    -   **Condition**

        IBM® z/OS®

        DB2®

    -   **ConfigEngine task**

        grant-runtime-db-user-privileges

        upgrade-database

8.  Manual Step: Remove check pending statuses from table spaces

    -   **Condition**

        IBM® z/OS®

        DB2®

    -   **ConfigEngine task**

        none

9.  Upgrade the remaining portal databases

    -   **Condition**

        IBM® z/OS®

        DB2®

    -   **ConfigEngine task**

        grant-runtime-db-user-privileges

        upgrade-database

10. Upgrade the portal profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        upgrade-profile

    **Version 7.0 Server Offering-only migration:** Do not complete the upgrade profile step using the Configuration Wizard. Instead you must run this task manually. For more information about running this task manually, see [Migration from Portal Server Offering 7.0 to Portal 8.5](../migrate/mig_consider_7serveronly.md).

    **Note:** When you run this step, the sub task that is named action-deploy-portlets-applyMIGStatic-wp.oob.full runs and completes successfully. However, the following error messages are shown. You can ignore these error messages:

    -   EJPXA0161W: The web module ContactList could not be activated. Please see previous messages for reasons and possible corrective actions.
    -   EJPPH0048W: The synchronization mode of all nodes in the portal cluster is not consistently set. The portlet application PA\_ContactList will not be started in the Application Server. Manual synchronization is assumed for all nodes. Manually start the application after all nodes were synchronized.
    -   EJPXA0067E: The following configuration data is needed to create a content-node resource: content-parentref.
11. Apply the latest Combined Cumulative Fix updates to your system.

    -   **Condition**

        none

    -   **ConfigEngine task**

        none


You must repeat the **Migrate a Cluster Step 3: Upgrade Node Profiles** steps on every node in the cluster. The task completes more quickly on the secondary nodes because it does not perform the same application and database upgrades that were performed on the primary node.

To complete migration, you must perform several post-migration tasks that depend on how you use HCL Digital Experience.

1.  Review the [Next steps](../migrate/mig_nextsteps.md) section of the product documentation.
    -   Complete the [post-migration activities](../migrate/mig_t_post_mig.md) that apply to how you are using HCL Digital Experience before you move on to the next step. For example, if you are using a virtual portal, then complete the virtual portal post-migration steps.
    -   Start the [enabling new functionality](../migrate/mig_t_enable_new.md) tasks only after you complete the post-migration tasks.
    -   If your target migration server is IBM WebSphere® Application Server Version 9.0, you will need to upgrade to HCL Portal 9.0.

