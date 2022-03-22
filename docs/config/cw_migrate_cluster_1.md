# Cluster Step 1: Migrate the deployment manager profile

Use the Configuration Wizard to migrate the deployment manager profile for a cluster environment. Use the following information to get familiar with the information that you must provide in the wizard and the configuration procedure that it generates.

## Configuration Wizard

Select **Migrate to a New Version**, and choose the **Migrate a Cluster Step 1: Migrate the Deployment Manager Profile** option.

**Note:** This option is not available for IBM® z/OS®.

# Worksheet

To set up the migration, you answer questions about your wanted configuration. Some fields apply to migration configurations. Some fields are required based on your environment. The remaining fields are advanced and do not apply to most configurations.

## Minimal required fields

The following table lists the fields that are unique to the Migrate a cluster step 1: Migrate the deployment manager profile configuration option. You might be prompted for additional information about system or user IDs and passwords that you defined during the portal installation process.

|Field Label|Default|Your Value|
|-----------|-------|----------|
|**Target operating system**|Linux™| |
|**Target portal profile name**|wp\_profile| |
|**Target portal profile home directory**|/opt/IBM/WebSphere/wp\_profile| |
|**Is the target portal on the same server or a different server**|Same server| |
|**WebSphere Application Server administrator**|wpsadmin| |
|**WebSphere Application Server administrator password**| | |
|**What is the deployment manager profile name**|dmgr01| |
|**What is the cell name**|CellName| |
|**What is the deployment manager node name**|dmgr| |
|**Where is the source application server installed****IBMi only:** Provide the path to the source profile directory instead of the application server directory.

|/opt/IBM/WebSphere/AppServer| |
|**What is new host name**| | |
|**Target deployment manager profile name**|dmgr01| |
|**Where is the target application server installed**|/opt/IBM/WebSphere/AppServer| |
|**Target deployment manager profile path**|/opt/IBM/WebSphere/AppServer/profiles/dmgr01| |
|**Target temporary path**|/tmp| |
|**WebSphere Application Server Version**|8.5| |

## Advanced fields

The following table lists the advanced fields that are unique to the Migrate a cluster step 1: Migrate the deployment manager profile configuration option. Click **Advanced** on the Answer Questions page for the target deployment manager system to see the advanced properties. Default values are provided for advanced fields that are required.

|Field Label|Default|Your Value|
|-----------|-------|----------|
|**JVM heap size**|2048| |

# Migrate a cluster step 1: Migrate the deployment manager profile option

After you answer questions and provide information about your migration, the wizard generates a custom configuration procedure.

Depending on your environment, the wizard generates a configuration process. The following steps reflect all possible steps in the configuration process. The steps do not represent a literal configuration. The steps are provided as a reference.

If you click **View Step Command**, you can see the task and properties that are associated with each step in the wizard.

1.  Manual Step: Disable automatic synchronization on all nodes in the cluster

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

2.  Manual Step: Stop the deployment manager

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

3.  Manual Step: Install the latest fix packs

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

4.  Manual Step: Install the Portal and WebSphere® binary files

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

5.  Manual Step: Copy required portal binary files to the target deployment manager

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

6.  Manual Step: Generate files for remote migration on the deployment manager

    -   **Condition**

        The target portal is on a different server than the source.

    -   **ConfigEngine task**

        none

7.  Manual Step: Copy the remote migration package to the source environment

    -   **Condition**

        The target portal is on a different server than the source.

    -   **ConfigEngine task**

        none

8.  Manual Step: Create a backup of the source deployment manager

    **IBMi only:** You must remove the oldProfile parameter before running the command.

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

9.  Manual Step: Create a default deployment manager profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

10. Manual Step: Import the backup profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none


