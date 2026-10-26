# Installing HCL DX on AIX using a graphical user interface

Use the IBM Installation Manager to install HCL Digital Experience (DX), IBM WebSphere Application Server, and the Apache Derby database.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

## Preparing the installation

1. Download and extract the latest HCL DX Cumulative Fix (CF) from the [My HCLSoftware](https://my.hcltechsw.com/downloads/dx/cloudnative/DX){target="_blank"} download portal (for example, `HCL-DX-CF237_Server_Update.zip`) to a local directory (for example, `/opt/HCL/INSTALL/CF237`).
2. Start all servers and applications that require a port value to avoid port conflicts when you install HCL DX. If you are installing multiple copies of HCL DX on your server, start the existing Configuration Wizard servers.

    !!!note
        The `cw_profile` port value defaults to `10200`. If you install a second version of DX on the same server, you must customize the `cw_profile` port value by adding `-Dcwprofile_startingport=new_starting_port_number` to the `InstallationManager_root/InstallationManager/eclipse/tools/imcl.ini` file.

3. Open a terminal and navigate to the `<InstallationManager_root>/eclipse/tools` directory:

    ```bash
    cd <InstallationManager_root>/eclipse
    ```

    For example:

    ```bash
    cd /IBM/InstallationManager/eclipse
    ```

4. (Optional) If you use a remote X server (such as Xming) and install as the root user, configure X11 authentication:

    1. Run `xauth list` and record the token string of the current user.
    2. Run `sudo su`.
    3. Run `xauth add <token_string>` using the token recorded in substep 1.
    4. Run `export LIBPATH=/opt/freeware/lib:$LIBPATH`.
    5. Run `export DISPLAY=localhost:10`.

5. Start IBM Installation Manager:

    ```bash
    ./IBMIM
    ```

6. Complete the following steps to add the repositories where the installation media exists:

    1. Navigate to **File > Preferences > Repositories**.
    2. Select **Add Repository**.
    3. Select **Browse**, select the repository file, and then select **OK**. Repeat this action for each required repository.

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

        2. Add the latest CF repository:

            ```path
            <DOWNLOAD_FOLDER>/<CF_version>/repository/repository.config
            ```

    4. Select **Test Connections** to verify that IBM Installation Manager can access all repository directories.
    5. Select **Apply**.
    6. Select **OK**.

## Installing IBM WebSphere Application Server

!!! important
    Installing HCL DX on AIX requires a specific sequence. You must install IBM WebSphere Application Server and its IBM SDK before installing Portal Server and WCM. Do not select all product offerings at the same time to avoid installation errors.

1. On the main IBM Installation Manager page, select **Install**.
2. Select the following packages for the initial installation, and then select **Next**:

    - **IBM WebSphere Application Server Network Deployment 9.0.5.0**
    - **IBM SDK, Java Technology Edition, Version 8 <version>**

    !!!note
        - If an IBM WebSphere Application Server Network Deployment 9.0.5.x is already installed, skip this step.  
        - For new installations, you must have IBM WebSphere Application Server & SDK Java version 8.0.3 installed to install HCL DX on top of it.
        - You must select the **IBM WebSphere SDK Java Technology Edition** package for HCL DX, even though it is labeled **Optional** on the **Select packages to install** page.

3. Accept the license agreement, and then select **Next**.
4. Specify the shared resources directory (for example, `/opt/IBM/IMShared`), and then select **Next**.
5. On the **New package group** page, configure the package group and installation directory:

    1. Select **Create a new package group**.
    2. Enter the installation directory for IBM WebSphere Application Server (for example, `/opt/IBM/WebSphere/AppServer`).
    3. Under **Architecture Selection**, select **64-bit**.
    4. Select **Next**.

    !!! note
        The installation directory must be empty and cannot contain spaces or special characters.

6. Select the translation packages to install (English is selected by default), and then select **Next**.
7. On the **Features** page, select any optional features to install (such as **Sample applications**), and then select **Next**.
8. On the **Summary** page, review the package selections, and then select **Install**.

    !!!note
        This step installs IBM WebSphere Application Server 9.0.5.x and its SDK as prerequisites for HCL DX.

9. When the installation completes, under **Which program do you want to start?**, select **None**, and then select **Finish**.

## Installing HCL DX

1. On the main IBM Installation Manager page, select **Install**.
2. Select **IBM WebSphere Portal Server 8.5.0.0** and any packages required for your offering, and then select **Next**:

    - **IBM Web Content Manager 8.5.0.0** for HCL WCM
    - **IBM WebSphere Portal Enable 8.5.0.0** for HCL Portal Enable
    - **IBM WebSphere Portal Extended 8.5.0.0** for HCL Portal Extended

3. On the **Select Fixes** page, select the **8.5.0.0-WP-Server-IFPI59896 8.5.0.20161201_1732** iFix, and then select **Next** to continue. Ignore any operating system warnings.

    !!!note
        This iFix is required when installing Portal 8.5 on IBM WebSphere Application Server 9.0 using Java 8.

4. Accept the license agreement, and then select **Next**.
5. On the **New package group** page, enter the installation directory for Portal Server (for example, `/opt/HCL/PortalServer`), and then select **Next**.
6. On the **Install Packages** page, ensure that all required features are selected, and then select **Next**.
7. Select the IBM WebSphere Application Server directory (for example, `/opt/IBM/WebSphere/AppServer`), and then select **Next**.
8. Under **Configuration Wizard Credentials**, enter the administrator username and password (for example, `wpsadmin`), and then select **Next**.
9. Under **Configuration Mode**, select **Standard**.
10. Enter the server details, and then select **Next**:

    - In **Host name**, enter the fully qualified AIX hostname.
    - In **Node name**, enter a node name (for example, `DXNode1`).
    - In **Cell name**, enter a cell name (for example, `DXCell1`).

11. Under **Admin Credentials for Portal Server**, enter the portal administrator username and password (for example, `wpsadmin`), and then select **Next**.
12. On the **Summary** page, review the package selections, and then select **Install**.
13. When the installation completes, under **Which program do you want to start?**, select **None**, and then select **Finish**.

    !!!note
        When the installation completes, the `WebSphere_Portal` server instance starts automatically. Stop all server instances before updating to version 9.5.

14. Open a terminal, navigate to the `<wp_profile_root>/bin` directory, and stop the `WebSphere_Portal` server instance.

     ```bash
     cd /opt/HCL/wp_profile/bin
     ./stopServer.sh WebSphere_Portal
     ```

    If prompted, enter the IBM WebSphere Application Server administrator username and password.

15. Navigate to the `/opt/IBM/WebSphere/AppServer/profiles/cw_profile/bin` directory and stop the `server1` instance:

     ```bash
     cd /opt/IBM/WebSphere/AppServer/profiles/cw_profile/bin
     ./stopServer.sh server1
     ```

    If prompted, enter the IBM WebSphere Application Server administrator username and password.

16. Verify that all IBM WebSphere Application Server and HCL DX instances are stopped before continuing.

### Installing the latest CF version

1. On the main IBM Installation Manager page, select **Update**.
2. On the **Update Packages** page, select **IBM WebSphere Portal Server v8.5**, and then select **Next**.

    If prompted for an IBM ID password, select **Cancel**. You might be prompted multiple times before you can proceed.

3. Ensure that the CF version is selected (for example, **IBM WebSphere Portal Server - Version CF237 for v8.5, V9.0 and V9.5**), and then select **Next**.

    !!!note
        If an unsupported operating system warning appears, ignore the message and select **Next**.

4. Accept the license agreement, and then select **Next**.
5. Ensure that **Portal Server Profile** is selected, and then select **Next**.
6. Select **Update**.
7. On the **The packages are updated** page, select **Finish**.
8. Open a new terminal and navigate to the `<wp_profile_root>/PortalServer/bin/` folder. (for example, `/opt/HCL/wp_profile/PortalServer/bin`).
9. Update the profile to the latest CF:

    ```bash
    ./applyCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

    Ensure that the script displays the following message:

    ```text
    SUCCESS: Update to Cumulative Fix completed successfully.
    ```

    !!!note
        When the update completes, the `WebSphere_Portal` server instance starts automatically. Stop the server instance before updating the environment to version 9.5. For more information, refer to [Applying a Combined Cumulative Fix](../../../../../../deployment/install/traditional/cf_install/index.md){target="_blank"}

10. Navigate to the `<wp_profile_root>/bin` directory and stop the `WebSphere_Portal` server instance:

    ```bash
    cd /opt/HCL/wp_profile/bin
    ./stopServer.sh WebSphere_Portal
    ```

    If prompted, enter the IBM WebSphere Application Server administrator username and password.

## Updating HCL DX to v9.5

1. On the main IBM Installation Manager page, select **Install**.
2. On the **Install Packages** page, select all version 9.5 packages for your offering, and then select **Next**:

    - **HCL Portal Server 9.5**
    - **HCL Web Content Manager 9.5**

    If an unsupported operating system warning appears, ignore the message, and then select **Next**.

3. Accept the license agreement, and then select **Next**.
4. On the **Install Packages** page, select **Use the existing package group**, and then select **Next**.
5. Enter the administrator usernames and passwords for IBM WebSphere Application Server and HCL Portal Server, and then select **Validate Credentials**.
6. When validation completes, select **Next**.
7. On the **Summary** page, select **Install**.

    !!!note
        During installation, ConfigEngine tasks run automatically to upgrade the portal from version 8.5 to version 9.5. You do not need to upgrade the profile manually.

8. On the **Packages are installed** page, select **Finish**, and then close IBM Installation Manager.

## Next Steps

- Enable version 9.5 user interface features. For more information, refer to [Enabling Practitioner Studio](../../../../../../build_sites/practitioner_studio/working_with_ps/enable_prac_studio.md).
- Update IBM WebSphere Application Server and its SDK to the latest fix pack using IBM Installation Manager. For more information, refer to [Recommended updates for WebSphere Application Server](https://www.ibm.com/support/pages/recommended-updates-websphere-application-server){target="_blank"}.

???+ info "Related information"
    [A Step-by-Step Guide to Installing Portal 9.5](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0079596){target="_blank"}  
