# Installing HCL DX on AIX using a console

Use the IBM Installation Manager to install HCL Digital Experience (DX) to an existing IBM WebSphere Application Server.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

## Preparing the installation

1. Download and extract the latest HCL DX Cumulative Fix (CF) from the [My HCLSoftware](https://my.hcltechsw.com/downloads/dx/cloudnative/DX){target="_blank"} download portal (for example, `HCL-DX-CF237_Server_Update.zip`) to a local directory (for example, `/opt/HCL/INSTALL/CF237`).
2. Start all servers and applications that require a port value to avoid port conflicts when you install HCL DX. If you are installing multiple copies of HCL DX on your server, start the existing Configuration Wizard servers.

    !!!note
        The `cw_profile` port value defaults to `10200`. If you install a second version of DX on the same server, you must customize the `cw_profile` port value by adding `-Dcwprofile_startingport=new_starting_port_number` to the `InstallationManager_root/InstallationManager/eclipse/tools/imcl.ini` file.

3. Open a terminal and navigate to the `<InstallationManager_root>/eclipse/tools` directory:

     ```bash
    cd /IBM/InstallationManager/eclipse/tools
    ```

4. Start the IBM Installation Manager in console mode:  

    ```bash
    ./imcl -c
    ```

5. Complete the following steps to add all required repositories:

    1. Enter **P** to go to the **Preferences** menu.
    2. Enter **1** to go to the **Repositories** menu.
    3. Enter **D** to add repositories.
    4. Type the path for your HCL DX repository file.

        For example, when installing the Web Content Manager (WCM) 9.5 offering:

        1. Add the following DX repositories:

            ```path
            <DX-install-image>/SETUP/products/IFPI59896/8.5.0.0-WP-Server-IFPI59896.zip
            <DX-install-image>/SETUP/products/JDK805/repository.config
            <DX-install-image>/SETUP/products/WASND905/repository.config
            <DX-install-image>/SETUP/products/WP85_Server/repository.config
            <DX-install-image>/SETUP/products/WP95_Server/repository.config
            <DX-install-image>/SETUP/products/WP85_WCM/repository.config
            <DX-install-image>/SETUP/products/WP95_WCM/repository.config        
            ```

        2. Add the latest CF repository. For example:  

            ```path
            <DOWNLOAD_FOLDER>/<CF_version>/repository/repository.config
            ```

    5. Enter **A** to apply your repositories and return to the **Preferences** menu.
    6. Enter **R** to return to the **Main** menu.

## Installing IBM WebSphere Application Server

1. In the main menu, enter **1** to install the software packages.
2. Select the following packages for the initial installation, and then enter **N** to continue:

    - **IBM WebSphere Application Server Network Deployment 9.0.5.0**
    - **IBM SDK, Java Technology Edition, Version 8 \<version>**

    !!!note
        - If an IBM WebSphere Application Server Network Deployment 9.0.5.x is already installed, skip this step.  
        - For new installations, you must have IBM WebSphere Application Server & SDK Java version 8.0.3 installed to install HCL DX on top of it.
        - You must select the **IBM WebSphere SDK Java Technology Edition** package for HCL DX, even though it is labeled **Optional** on the **Select packages to install** prompt.

3. Enter **A** to accept the license agreement, and then enter **N** to continue.  
4. Specify the shared resources directory.

    - To accept the default directory, enter **N** to continue.
    - To change the directory, enter **M**, enter the path (for example, `/opt/IBM/IMShared`), and then enter **N** to continue.

5. At the **New package group** prompt, configure the package group and installation directory:

    1. Ensure that **IBM WebSphere Application Server V9.0** is selected.
    2. To change the installation directory, enter **M**, and then enter the path (for example, `/opt/IBM/WebSphere/AppServer`).
    3. Keep the default architecture setting.
    4. Enter **N** to continue.

    !!! note
        The installation directory must be empty and cannot contain spaces or special characters.

6. Choose the translation packages to install:

    - To use the default **English** package, enter **N** to continue.
    - To install additional languages, enter the numbers corresponding to the packages, and then enter **N** to continue.

7. At the **Features** prompt, enter **N** to deploy the default applications only. To install sample applications, enter **4**, and then enter **N** to continue.
8. At the **Summary** prompt, enter **I** to start the installation.
9. When the installation completes, enter **F** to finish.

## Installing HCL DX

1. At the main menu, enter **1** to install software packages.
2. At the Select packages to install prompt, select the packages to install:

    1. Select **IBM WebSphere Portal Server 8.5.0.0** and any packages required for your offering:

        - **IBM Web Content Manager 8.5.0.0** for HCL WCM
        - **IBM WebSphere Portal Enable 8.5.0.0** for HCL Portal Enable
        - **IBM WebSphere Portal Extended 8.5.0.0** for HCL Portal Extended

    2. If the menu displays `CF<version>`, select the base version instead of the CF:

        1. Select the package number for your offering.
        2. Enter **2** to display all available versions of the package.
        3. Select the base version (for example, select **Version 8.5.5.0** instead of **Version CF237** for **v8.5**, **v9.0** and **v9.5**).
        4. Enter **O** to confirm the selection.

        For example, when you install HCL WCM, select options 2 and 6:

        ```bash
        Select packages to install:
        1. [ ] IBM WebSphere Application Server Network Deployment 9.0.5.0
        2. [X] IBM WebSphere Portal Server 8.5.0.0
        3. [ ] HCL Portal Server 9.5.0.0
        4. [ ] HCL Web Content Manager 9.5.0.0
        5. [ ] IBM SDK, Java Technology Edition, Version 8 8.0.5.35
        6. [X] IBM Web Content Manager  8.5.0.0
        ```

    3. Enter **N** to continue.

3. At the **Select Fixes** prompt, enter **2** to select the **8.5.0.0-WP-Server-IFPI59896 8.5.0.20161201_1732** iFix, and then enter **N** to continue:

    !!!note
        This iFix is required when you install Portal 8.5 on IBM WebSphere Application Server 9.0 using Java 8.

4. Enter **A** to accept the license agreement, and then enter **N** to continue.
5. At the **New package group** prompt, specify the installation directory:

    - To accept the default directory, enter **N** to continue.
    - To change the directory, enter **M**, enter the path (for example, `/opt/HCL/PortalServer`), and then enter **N** to continue.

6. Ensure that **Portal Server Profile** is selected, and then enter **N** to continue.
7. Enter **1** to select the IBM WebSphere Application Server installation directory.  
8. Enter the username and password for the Configuration Wizard (for example, `wpsadmin`).
9. Enter the fully qualified AIX host name.
10. Enter a node name (for example, `DXNode1`).
11. Enter a cell name (for example, `DXCell`).
12. Enter the username and password for the portal administrator (for example, `wpsadmin`).
13. At the **Advanced Parameters** prompt, enter **N**, and then enter **N** to continue.
14. At the **Summary** prompt, verify the packages and enter **I** to start the installation.

    For example, when you install HCL WCM 9.5, the following packages are displayed:

    ```bash
    Packages to be installed:
    1. IBM WebSphere Portal Server 8.5.0.0
    2. 8.5.0.0-WP-Server-IFPI59896 8.5.0.20161201_1732
    3. IBM Web Content Manager  8.5.0.0
    ```

    !!!note
        During the installation, informational messages might appear, such as `com.ibm.wps.workflowWorkflowManager enable WorkflowExecution` or `INFO: I: Workflow execution is enabled`. Ignore these messages and wait for the installation to finish.

15. When the installation finishes, check for warnings:

    1. Enter **V** to view message details.
    2. If the following warning appears, enter **O** to continue:

        ```bash
        WARNING: Multiple warnings occurred.  
        Details:  
        A supported operating system was not detected. Support for your operating system might have been added after the release of the product. See the WebSphere Portal Server detailed system requirements Web pages - http://www.ibm.com/support/docview.wss?uid=swg27007791 for more information about supported operating systems. You can continue with the installation, but the installation or product operation might not succeed without applying maintenance.
        ```

16. Enter **F** to finish.
17. Enter **X** to exit IBM Installation Manager.
18. Navigate to the `<wp_profile_root>/bin` directory and stop the `WebSphere_Portal` server instance:

    ```bash
    ./stopServer.sh WebSphere_Portal
    ```

    For example:  

    ```bash
    cd /opt/HCL/wp_profile/bin
    ./stopServer.sh WebSphere_Portal
    ```

    If prompted, enter the administrator username and password.

19. Navigate to the `/opt/IBM/WebSphere/AppServer/profiles/cw_profile/bin` directory and stop the `server1` instance:

     ```bash
     cd /opt/IBM/WebSphere/AppServer/profiles/cw_profile/bin
     ./stopServer.sh server1
     ```

    If prompted, enter the IBM WebSphere Application Server administrator username and password.

20. Verify that all IBM WebSphere Application Server and HCL DX instances are stopped before you apply updates.

### Installing the latest CF

1. Open a terminal and navigate to the `<InstallationManager_root>/eclipse/tools` directory:

     ```bash
    cd /IBM/InstallationManager/eclipse/tools
    ```

2. Start the IBM Installation Manager in console mode:  

    ```bash
    ./imcl -c
    ```

3. At the main menu, enter **2** to update the environment.
4. Enter **2** to select IBM WebSphere Portal Server 8.5, and then enter **N** to continue.

    If prompted for an IBM ID, enter **C** repeatedly (up to four times) until the next prompt appears.

5. Select the CF version (for example, `Version CF237 for v8.5, v9.0 and v9.5`), and then enter **N** to continue.

    If a warning indicates that no supported operating system was detected, enter **N** to continue.

6. Enter **A** to accept the license agreement, and then enter **N** to continue.
7. Ensure that **Portal Server Profile** is selected, and then enter **N** to continue.
8. At the **Summary** prompt, enter **U** to update the environment.
9. When the installation finishes, check for warnings:

    - Enter **V** to view message details.
    - If only operating system warnings appear, enter **O** to continue.

10. Enter **F** to finish.
11. Enter **X** to exit IBM Installation Manager.
12. In the terminal, navigate to the `<wp_profile_root>/PortalServer/bin` directory. For example: `/opt/HCL/wp_profile/PortalServer/bin`.
13. Update `wp_profile` with the CF:

    ```bash
    ./applyCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

    Ensure that the script displays the following message:

    ```text
    SUCCESS: Update to Cumulative Fix completed successfully.
    ```

    !!!note
        When the update completes, the `WebSphere_Portal` server instance starts automatically. Stop the server instance before updating the environment to version 9.5. For more information, refer to [Applying a Combined Cumulative Fix](../../../../../../deployment/install/traditional/cf_install/index.md).

14. Go to the `<wp_profile_root>/bin` directory and stop the `WebSphere_Portal` server instance:

    ```bash
    ./stopServer.sh WebSphere_Portal
    ```

    For example:

     ```bash
     cd /opt/HCL/wp_profile/bin
     ./stopServer.sh WebSphere_Portal
     ```

    If prompted, enter the IBM WebSphere Application Server administrator username and password.

## Updating HCL DX to v9.5

1. Open a terminal and navigate to the `<InstallationManager_root>/eclipse/tools` directory:

     ```bash
    cd /IBM/InstallationManager/eclipse/tools
    ```

2. Start the IBM Installation Manager in console mode:  

    ```bash
    ./imcl -c
    ```

3. At the main menu, enter **1** to install software packages.
4. At the **Select packages to install** prompt, select all version 9.5 packages for your offering by entering their corresponding numbers, and then enter **N** to continue.

    For example:

    - **HCL Portal Server 9.5**
    - **HCL Web Content Manager 9.5**  

    If an operating system warning appears, enter **N** to continue.

5. Enter **A** to accept the license agreement, and then enter **N**. to continue
6. Ensure that the existing package group is selected, and then enter **N** to continue.
7. Enter the IBM WebSphere Application Server administrator username and password (for example, `wpsadmin`).
8. Enter **Y** to validate the credentials.
9. Enter the portal administrator username and password.
10. Enter **Y** to validate the credentials, and then enter **N** to continue.
11. At the **Summary** prompt, verify that all version 9.5 packages are selected, and then enter **I** to start the installation.

12. When the installation finishes, check for warnings:

    - Enter **V** to view message details.
    - If only operating system warnings appear, enter **O** to continue.

13. Enter **F** to finish.
14. Enter **X** to exit IBM Installation Manager.

## Next Steps

- To enable version 9.5 UI features, refer to [Enabling Practitioner Studio](../../../../../../build_sites/practitioner_studio/working_with_ps/enable_prac_studio.md){target="_blank"}.
- Update IBM WebSphere Application Server and its SDK to the latest fix pack using IBM Installation Manager. For more information, refer to [Recommended updates for WebSphere Application Server](https://www.ibm.com/support/pages/recommended-updates-websphere-application-server){target="_blank"}.

???+ info "Related information"
    [A Step-by-Step Guide to Installing Portal 9.5](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0079596){target="_blank"}  
