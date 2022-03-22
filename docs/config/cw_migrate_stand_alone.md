# Migrate a stand-alone server

Use the Configuration Wizard to migrate a stand-alone server environment. Use the following information to get familiar with the information that you must provide in the wizard and the configuration procedure that it generates.

## Configuration Wizard

Select **Migrate to a New Version**, and choose the **Migrate a Stand-alone Server** option.

## Worksheet

To set up the migration, you answer questions about your wanted configuration. Some fields apply to migration configurations. Some fields are required based on your environment. The remaining fields are advanced and do not apply to most configurations.

### Minimal required fields

The following table lists the fields that are unique to the migrate a stand-alone server configuration. You might be prompted for additional information about system or user IDs and passwords that you defined during the portal installation process.

|Field Label|Default|Your Value|
|-----------|-------|----------|
|**Target operating system**|Linux™| |
|**Target portal profile name**|wp\_profile| |
|**Target portal profile home directory**|/opt/IBM/WebSphere/wp\_profile| |
|**Is the target portal on the same server or a different server**|Same server| |
|**Database management software**|Derby| |
|**Target operating system**| | |
|**WebSphere Application Server administrator**|wpsadmin| |
|**WebSphere Application Server administrator password**| | |
|**Portal administrator password**| | |
|**What is the portal profile name**|wp\_profile| |
|**What is the cell name**|CellName| |
|**What is the portal node name**|NodeName| |
|**Where is the source application server installed****IBMi only:** Provide the path to the source profile directory instead of the application server directory.

|/opt/IBM/WebSphere/AppServer| |
|**What is the new host name**| | |
|**Target portal soap port****Note:** Enter the same port number used for the source environment.

|10033| |
|**Where is the target application server installed**|/opt/IBM/WebSphere/AppServer| |
|**Where is the target portal installed**|/opt/IBM/WebSphere/PortalServer| |
|**Target temporary path**|/opt/IBM/WebSphere/PortalServer| |

### Advanced fields

The following table lists the advanced fields that are unique to the migrate a stand-alone server configuration. Click **Advanced** on the Answer Questions page for the target system to see the advanced properties. Default values are provided for advanced fields that are required.

|Field Label|Default|Your Value|
|-----------|-------|----------|
|**JVM heap size**|2048| |

# Migrate a stand-alone server option

After you answer questions and provide information about your migration, the wizard generates a custom configuration procedure.

Depending on your environment, the wizard generates a configuration process. The following steps reflect all possible steps in the configuration process. The steps do not represent a literal configuration. The steps are provided as a reference.

If you click **View Step Command**, you can see the task and properties that are associated with each step in the wizard.

1.  Manual Step: Install the latest fix packs

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

2.  Generate the files for remote migration

    -   **Condition**

        The target portal is on a different server than the source.

    -   **ConfigEngine task**

        none

3.  Manual Step: Copy the remote migration package to the source environment

    -   **Condition**

        The target portal is on a different server than the source.

    -   **ConfigEngine task**

        none

4.  Create a backup of the remote source portal profile

    -   **Condition**

        The target portal is on a different server than the source.

    -   **ConfigEngine task**

        none

5.  Create a backup profile of the source portal profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

    **Note:** If you are migrating from HCL Portal Enable or Portal Extend offerings to Portal Server or Web Content Management offerings, complete the following steps manually.

    1.  Locate the backup of the source profile. For example, in the /tmp/wp\_profile\_bak directory.
    2.  Locate the wps.properties file in this directory. For example, /tmp/wp\_profile\_bak/PortalServer/wps.properties.
    3.  Open the wps.properties file in a text editor. Modify the value of the WPFamilyName to match your 8.5 licensed offering. For example, if you were on 8.0 Enable, and you purchased 8.5 Web Content Manager, you would modify from WPFamilyName=enable to WPFamilyName=wcm. Valid values for HCL Portal 8.5 include: server, enable, extend, wcm, and wse.
    4.  Save changes to the wps.properties file.
6.  Manual Step: If the backup profile is larger than 2 GB, clean up the backup profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

7.  Create a default profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

8.  Import backup profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

9.  Manual Step: If you cleaned up the backup profile, restore the JCR content

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

10. Upgrade the ConfigEngine

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

11. Manual Step: Update the ports on the target environment

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

12. Manual Step: Update database settings

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

13. Validate database settings

    -   **Condition**

        none

    -   **ConfigEngine task**

        validate-database

14. Connect to new database copies

    -   **Condition**

        none

    -   **ConfigEngine task**

        connect-database

15. Manual Step: Review database schema changes

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

16. Upgrade the base portal database component

    -   **Condition**

        IBM® z/OS®

        DB2®

    -   **ConfigEngine task**

        grant-runtime-db-user-privileges

        upgrade-database

17. Manual Step: Remove check pending statuses from table spaces

    -   **Condition**

        IBM® z/OS®

        DB2®

    -   **ConfigEngine task**

        none

18. Upgrade the remaining portal databases

    -   **Condition**

        IBM® z/OS®

        DB2®

    -   **ConfigEngine task**

        grant-runtime-db-user-privileges

        upgrade-database

19. Upgrade the portal profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        upgrade-profile

    **Version 7.0 Server Offering-only migration:** Do not complete the upgrade profile step using the Configuration Wizard. Instead you must run this task manually. For more information about running this task manually, see [Migration from Portal Server Offering 7.0 to Portal 8.5](../migrate/mig_consider_7serveronly.md).

    **Note:** When you run this step, the sub task that is named action-deploy-portlets-applyMIGStatic-wp.oob.full runs and completes successfully. However, the following error messages are shown. You can ignore these error messages:

    -   EJPXA0161W: The web module ContactList could not be activated. Please see previous messages for reasons and possible corrective actions.
    -   EJPPH0048W: The synchronization mode of all nodes in the portal cluster is not consistently set. The portlet application PA\_ContactList will not be started in the Application Server. Manual synchronization is assumed for all nodes. Manually start the application after all nodes were synchronized.
    -   EJPXA0067E: The following configuration data is needed to create a content-node resource: content-parentref.
20. Apply the latest Combined Cumulative Fix updates to your system.

    -   **Condition**

        none

    -   **ConfigEngine task**

        none


To complete migration, you must perform several post-migration tasks that depend on how you use HCL Digital Experience.

1.  Review the [Next steps](../migrate/mig_nextsteps.md) section of the product documentation.
    -   Complete the [post-migration activities](../migrate/mig_t_post_mig.md) that apply to how you are using HCL Digital Experience before you move on to the next step. For example, if you are using a virtual portal, then complete the virtual portal post-migration steps.
    -   Start the [enabling new functionality](../migrate/mig_t_enable_new.md) tasks only after you complete the post-migration tasks.

