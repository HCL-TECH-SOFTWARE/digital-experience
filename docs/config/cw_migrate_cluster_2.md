# Cluster Step 2: Migrate node profiles

Use the Configuration Wizard to upgrade the node profiles for a cluster environment. Use the following information to get familiar with the information that you must provide in the wizard and the configuration procedure that it generates.

## Configuration Wizard

Select **Migrate to a New Version**, and choose the **Migrate a Cluster Step 2: Migrate Node Profiles** option.

**Note:** This option is not available for IBM® z/OS®.

# Worksheet

To set up the migration, you answer questions about your wanted configuration. Some fields apply to migration configurations. Some fields are required based on your environment. The remaining fields are advanced and do not apply to most configurations.

## Minimal required fields

The following table lists the fields that are unique to the Migrate a cluster step 2: Migrate node profiles configuration. You might be prompted for additional information about system or user IDs and passwords that you defined during the portal installation process.

|Field Label|Default|Your Value|
|-----------|-------|----------|
|**Target operating system**|Linux™| |
|**Target portal profile name**|wp\_profile| |
|**Target portal profile home directory**|/opt/IBM/WebSphere/wp\_profile| |
|**Is the target portal on the same server or a different server**|Same server| |
|**WebSphere Application Server administrator**|wpsadmin| |
|**WebSphere Application Server administrator password**| | |
|**What is the portal profile name**|wp\_profile| |
|**What is the cell name**|CellName| |
|**What is the portal node name**|NodeName| |
|**What is the deployment manager node name**|dmgr| |
|**Where is the source application server installed****IBMi only:** Provide the path to the source profile directory instead of the application server directory.

|/opt/IBM/WebSphere/AppServer| |
|**What is the new host name**| | |
|**Where is the target application server installed**|/opt/IBM/WebSphere/AppServer| |
|**Target temporary path**|/tmp| |

## Advanced fields

The following table lists the advanced fields that are unique to the Migrate a cluster step 2: Migrate node profiles configuration option. Click **Advanced** on the Answer Questions page for the target system to see the advanced properties. Default values are provided for advanced fields that are required.

|Field Label|Default|Your Value|
|-----------|-------|----------|
|**JVM heap size**|2048| |

# Migrate a cluster step 2: Migrate node profiles option

After you answer questions and provide information about your migration, the wizard generates a custom configuration procedure.

Depending on your environment, the wizard generates a configuration process. The following steps reflect all possible steps in the configuration process. The steps do not represent a literal configuration. The steps are provided as a reference.

If you click **View Step Command**, you can see the task and properties that are associated with each step in the wizard.

1.  Manual Step: Stop the source deployment manager and node agents

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

2.  Manual Step: Start the target deployment manager

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

3.  Generate the files for remote migration

    -   **Condition**

        The target portal is on a different server than the source.

    -   **ConfigEngine task**

        none

4.  Manual Step: Copy the remote migration package to the source environment

    -   **Condition**

        The target portal is on a different server than the source.

    -   **ConfigEngine task**

        none

5.  Create a backup of the source portal profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

6.  Manual Step: Create a backup of the remote source portal profile

    -   **Condition**

        The target portal is on a different server than the source.

    -   **ConfigEngine task**

        none

    **Note:** If you are migrating from HCL Portal Enable or Portal Extend offerings to Portal Server or Web Content Management offerings, complete the following steps manually.

    1.  Locate the backup of the source profile. For example, in the /tmp/wp\_profile\_bak directory.
    2.  Locate the wps.properties file in this directory. For example, /tmp/wp\_profile\_bak/PortalServer/wps.properties.
    3.  Open the wps.properties file in a text editor. Modify the value of the WPFamilyName to match your 8.5 licensed offering. For example, if you were on 8.0 Enable, and you purchased 8.5 Web Content Manager, you would modify from WPFamilyName=enable to WPFamilyName=wcm. Valid values for HCL Portal 8.5 include: server, enable, extend, wcm, and wse.
    4.  Save changes to the wps.properties file.
7.  Manual Step: Update the deployment manager settings

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

8.  Manual Step: If the backup profile is larger than 2 GB, clean up the backup profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

9.  Create a default profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

10. Import the backup profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

11. Manual Step: If you cleaned up the backup profile, restore the JCR content

    -   **Condition**

        none

    -   **ConfigEngine task**

        none


