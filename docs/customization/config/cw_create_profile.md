# Create an HCL Portal profile

During the installation process, the IBM Installation Manager creates the HCL Portal profile. If you are on HCL Portal Version 8.5 without a Combined Cumulative Fix applied, then you can use this option in the Configuration Wizard to create an additional profile.

## Configuration Wizard

On the Configuration Wizard home page, click **More Options** to find **Create an HCL Portal Profile**.

**Parent topic:**[HCL Portal](../config/config_portal.md)

**Related information**  


[Troubleshooting: Create an HCL Digital Experience profile](../trouble/cw_createprofile.md)

[Using the Installation Manager to modify your environment](../install/iim_modify.md)

# Creating a new profile

After you answer questions and provide information about your system, the wizard generates a custom configuration procedure.

Depending on your environment, the wizard generates a configuration process. The following steps reflect all possible steps in the configuration process. The steps do not represent a literal configuration. The steps are provided as a reference.

If you click **View Step Command**, you can see the task and properties that are associated with each step in the wizard.

1.  Create the target profile for HCL Portal in the WebSphere® Application Server

    **Important:** WebSphere Application Server Version 8.5.5.5 requires that fix PI37248 is installed when creating the managed portal profile. This step fails if PI37248 is not installed.

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

2.  Install the ConfigEngine into the target HCL Portal profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

3.  Register the HCL Portal components with the ConfigEngine

    -   **Condition**

        none

    -   **ConfigEngine task**

        install

4.  Consolidate the properties files for HCL Portal components used in this configuration into a single properties file

    -   **Condition**

        none

    -   **ConfigEngine task**

        consolidate-properties

5.  Prepare the profile for basic configuration

    -   **Condition**

        none

    -   **ConfigEngine task**

        gather-runtime-property-files

        gather-portalserver-exes

        pre-basic-config

        copy-shared-objects

        enable-oob-security

6.  Validate the database connection and environment

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

7.  Deploy applications into the portal profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

8.  Configure the JCR, theme, and core runtime components of your portal server

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

9.  Deploy the administration portlets and pages to the portal

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

10. Deploy the out-of-box pages and portlets to the portal

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

11. Remove the application server \(server1\) from the profile

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

12. Stop the portal server

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

13. Collect the deployment manager augmentation files and profile templates that are required to build a cell

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

14. Restart the HCL Portal server

    -   **Condition**

        none

    -   **ConfigEngine task**

        none


