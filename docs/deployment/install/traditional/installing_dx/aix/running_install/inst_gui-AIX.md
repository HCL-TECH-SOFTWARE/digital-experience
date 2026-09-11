# Installing HCL DX in AIX using a graphical user interface

Use the IBM Installation Manager to install HCL Digital Experience (DX), IBM WebSphere Application Server, and the Apache Derby database.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

## Prepare the Installation

1. Please download the latest HCL DX cumulative Fix from [MHS Download Portal](https://my.hcltechsw.com/downloads/dx/cloudnative/DX){target="_blank"} before starting the installation.  
    For example: `HCL-DX-CF237_Server_Update.zip`

2. Extract the zip-files into a folder.  
    For example: `/opt/HCL/INSTALL/CF237`

3. Start all servers and applications that require a port number to avoid port conflicts when you install the HCL DX. If you are installing multiple copies of HCL DX on your server, start the existing Configuration Wizard servers.

    !!!note
        Currently, the `cw_profile` starting point always defaults to `10200`. If you install a second version of DX on the same server, you must customize the `cw_profile` port value by adding `-Dcwprofile_startingport=new\_starting\_port\_number` to the `InstallationManager_root/InstallationManager/eclipse/IBMIM.ini` file.

4. Start the Installation Manager.

    Command:  

    ```bash
    cd <InstallationManager_root>/eclipse
    ./IBMIM
    ```

    For example:

    ```bash
    cd /IBM/InstallationManager/eclipse
    ./IBMIM
    ```

    !!!note "Hint"
        If you using a remote X-server like Xming and you want to install the product as root-user, please use the following steps to start the Installation Manager:  
        1. On the AIX server execute command `xauth list` and write down the token string of the current user.  
        2. Execute command `sudo su`.
        3. Then add the token string that you created under step 1 with command `xauth add <token string of the user>`.
            With that the x-user token get shared with the root-user.  
        4. Execute command: `export LIBPATH=/opt/freeware/lib:$LIBPATH`.  
        5. Execute command `export DISPLAY=localhost:10`.  
        6. Then you can start the Installation Manager in GUI mode with command `./IBMIM`.  

5. After you install and started the [latest Installation Manager version 1.9.x](../../aix/inst_iim-AIX.md){target="_blank"}, complete the following steps to add the repositories where the installation media exists:

    1. Open the IBM® Installation Manager and go to **File > Preferences > Repositories**.
    2. Select **Add Repositories**.
    3. Select **Browse** and navigate to the `<Portal-install-image>/SETUP/products/<offering>/repository.config` file and then click **OK**.
    4. Ensure that all required repositories are checked. Then, click **Test Connections** to ensure that the IBM Installation Manager can successfully access the directory where the service repositories are stored.

        For example, when installing the Web Content Manager 9.5 offering the following repositories need to be added:

        ```path
        <DX-install-image>/SETUP/products/IFPI59896/8.5.0.0-WP-Server-IFPI59896.zip
        <DX-install-image>/SETUP/products/JDK805/repository.config
        <DX-install-image>/SETUP/products/WASND905/repository.config
        <DX-install-image>/SETUP/products/WP85_Server/repository.config
        <DX-install-image>/SETUP/products/WP95_Server/repository.config
        <DX-install-image>/SETUP/products/WP85_WCM/repository.config
        <DX-install-image>/SETUP/products/WP95_WCM/repository.config        
        ```

        Please also add the latest cumulative fix repository. For example:  

        ```path
        <DOWNLOAD_FOLDER>/<CF_version>/repository/repository.config
        ```

    5. Select **Apply**.
    6. Select **OK**.

## Install the Application Server

!!!Important
    The installation process of HCL DX on AIX has multiple installation steps! First the IBM WebSphere Application Server with it's IBM SDK need to be installed. Once that is done the Portal Server and WCM binaries can be installed on top of it. Don't select all potential product-offerings for installation at one and the same time. That will end up in installation errors!

1. On the main IBM Installation Manager panel, select **Install**.

2. Please just select only the following packages for the initial installation and click to **Next**:

    - `IBM WebSphere Application Server Network Deployment 9.0.5.0`
    - `IBM SDK, Java Technology Edition, Version 8 <version>`

    !!!note
        - If an IBM WebSphere Application Server Network Deployment 9.0.5.x is already installed, you can skip that step.  
        - For new installations, you must have IBM WebSphere Application Server & SDK Java version 8.0.3 installed to install HCL DX on top of it.
        - The **IBM WebSphere SDK Java Technology Edition** option is required for an HCL DX installation even though it might be marked as "Optional" on the Select packages to install screen.  

3. Accept the license agreement and then click **Next**.
4. Enter the directory where you want to store shared resources and then click **Next**.
    For example: `/opt/IBM/IMShared`
5. Select the option **Create a new package group** and enter an installation Directory for the IBM WebSphere Application Server.  
    For example: `/opt/IBM/WebSphere/AppServer`
    Then select `64-bit` under the **Architecture Selection** and click **Next**.  

    !!! remember
        The installation directory that you specify must NOT contain any files or the following characters: ~ ! @ \# $ % ^ & * ( ) + { } | < > ? ` = [ ] ; ' , . " and spaces.

6. Select the translations to install (Default is English only) and then click **Next**.
7. If you want to install some additional IBM WebSphere Application Server features like **Sample applications**, feel free to select them and click **Next**.
8. Confirm the Summary information and then click **Install**.

    !!!note
        This just installs the IBM WebSphere Application Server 9.0.5.x with it's SDK as a prerequisite for the HCL DX installation.

9. After a successful installation, the summary displays. For the question **Which program do you want to start?** select **None** and Click **Finish**.

## Install HCL Digital Experience (Aka IBM WebSphere Portal Server)

1. In the Installation Manager click to the **Install** button.

2. Please just select only the following packages for the initial installation or HCL DX and then click to **Next**:

    - `IBM WebSphere Portal Server 8.5.0.0`  

    !!!note
        Depending on the product offering, it is then also needed to install the other 8.5 related packages like:  
        - `IBM Web Content Manager 8.5.0.0`  
        - `IBM WebSphere Portal Enable 8.5.0.0`  
        - `IBM WebSphere Portal Extended 8.5.0.0`  

    For example when installing the HCL Web Content Manager offering please select:  
    - `IBM WebSphere Portal Server 8.5.0.0`  
    - `IBM Web Content Manager 8.5.0.0`  

    When installing HCL Portal Enable offering select:  
    - `IBM WebSphere Portal Server 8.5.0.0`  
    - `IBM WebSphere Portal Enable 8.5.0.0`  
  
    etc.

3. On Install Packages: **Select the fixes to install** screen, select the following fix:

    ```option
    [x] IBM WebSphere Portal Server 8.5.0.0
       [x] 8.5.0.0-WP-Server-IFPI59896 8.5.0.20161201_1732
    ```

    !!!note
        This ifix is required for Portal 8.5 to be installed while on WAS 9.0 using JDK8.

    Then, click **Next**.  

    !!!note
        If there are validation warnings about the operating system, please ignore them. Click **Next**.

4. Accept the license and click **Next**.

5. Set location of the Portal Server installation. For example: `/opt/HCL/PortalServer`. Click **Next**.

6. On the **Install Packages** screen make sure that all the offerings are selected. Then click **Next**.

7. Select the IBM WebSphere Application Server root directory and click **Next**.

    !!!note
        If you have installed the IBM WebSphere Application Server earlier under `/opt/IBM/WebSphere/AppServer`, select that directory.  

8. Enter then the administrator user ID and password for the **Configure Wizard Credentials** and click **Next**.  
    For example Administrator user ID: `wpsadmin`.  

9. Select the configuration mode `Standard` and enter the full qualified hostname of the AIX server as **host name**.  
    In addition, please enter a node and cell name. For example:  
        node name: `DXNode1`  
        cell name: `DXCell1`  

10. In the section for **Admin Credentials for Portal Server** enter the username and password. Then click **Next**.  
    For example Administrator user ID: `wpsadmin`.  

11. Review the packages that are going to be installed.

12. Click to the **Install** button to start the installation.  

13. When **The packages are installed** screen appears, select **None** for the question **Which program do you want to start?** and then click to **Next**.

    !!!note
        By default after the installation is completed, the WebSphere_Portal JVM is started and the HCL DX Portal can be accessed with the web-browser.
        To get the environment updated to version 9.5 it is required to stop all JVM instances first, which will be done in the next steps.

14. Open a new commandline window.

15. Navigate to the <wp_profile_root>/bin directory and execute the commands: `./stopServer.sh WebSphere_Portal`  
     For example:  

     ```bash
     cd /opt/HCL/wp_profile/bin
     ./stopServer.sh WebSphere_Portal
     ```

16. Enter the IBM WebSphere Application Server administrator user ID and password to stop it.  

17. Stop the cw_profile/server1 JVM with the following commands:  

     ```bash
     cd /opt/IBM/WebSphere/AppServer/profiles/cw_profile/bin
     ./stopServer.sh server1
     ```

18. Enter the IBM WebSphere Application Server administrator user ID and password to stop it.  

    !!!note
        Ensure that all IBM WebSphere Application Server and HCL Portal JVMs are stopped, before further updating the product to version 9.5

### Install the latest Cumulative Fix Version

1. In the Installation Manager GUI click the **Update** button.

2. On the **Update Packages** screen select `IBM WebSphere Portal Server v8.5` and click **Next**.  

    !!!note
        If a password is asked for the IBM ID, just click cancel. The question might be asked multiple times, before you can proceed.

3. Make sure that the cumulative Fix version is selected and click **Next**.  
    For example: `IBM WebSphere Portal Server - Version CF237 for v8.5, V9.0 and V9.5`

    !!!note
        If a message comes up that the no supported operating system was detected, ignore the message and click to **Next**.

4. Accept the license and click **Next**.

5. Keep the **Portal Server Profile** selected and click **Next**.

6. Click to the **Update** button.

7. When the **The packages are updated** screen is shown, click to the **Finish** button.

8. Open a new terminal window and navigate to the `<wp_profile_root>/PortalServer/bin/` folder.  
    For example: `/opt/HCL/wp_profile/PortalServer/bin`.

9. Run the following command to update the current wp_profile to use the latest cumulative fixes.

    ```bash
    ./applyCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

    !!!note
        - The applyCF.sh script run may take some time to complete. Please ensure that you see the following message at the end of that script run:  
          `SUCCESS: Update to Cumulative Fix completed successfully.`
        - When the update is completed the WebSphere_Portal JVM is running! Please stop the JVM, before updating the environment to v9.5.  
        - For details please also review [Applying a Combined Cumulative Fix](../../../../../../deployment/install/traditional/cf_install/index.md){target="_blank"}

10. Navigate to the `<wp_profile_root>/bin` directory and execute the commands: `./stopServer.sh WebSphere_Portal`  
     For example:  

     ```bash
     cd /opt/HCL/wp_profile/bin
     ./stopServer.sh WebSphere_Portal
     ```

11. Enter the IBM WebSphere Application Server administrator user ID and password to stop it.  

## Update HCL Digital Experience to v9.5

!!!note
    If the IBM Installation Manager is not started yet, please start it.

1. In the IBM Installation Manager click to the **Install** button.
2. On the **Install Packages** screen select all the 9.5 packages of the HCL offering and then click **Next**.
    For example:  
    `- HCL Portal Server 9.5`  
    `- HCL Web Content Manager 9.5`  

    !!!note
        If a message comes up that the no supported operating system was detected, ignore the message and click to **Next**.

3. Accept the license and click **Next**.

4. On the **Install Packages** screen make sure that **Use the existing package group** is selected and click to **Next**.

5. Enter the user IDs and passwords for the WebSphere Application Server and HCL Portal Server administrators that you have already specified earlier and click to the **Validate Credentials** button.

6. Once the validation completed click to the **Next** button.

7. On the summary page click to the **Install** button.

    !!!note
        During the install, a series of ConfigEngine tasks will be run to upgrade Portal 8.5 to 9.5 so upgrading the profile after is not required.

8. On the **Packages are installed** screen click to the **Finish** button and close the Installation Manager.  

## Next Steps

- You may also want to enable the v95 UI features next. For details, please review [Enabling Practitioner Studio](../../../../../../build_sites/practitioner_studio/working_with_ps/enable_prac_studio.md){target="_blank"}.

- It is highly recommended to update the IBM WebSphere Application Server and it's SDK to the latest Fixpack as well by using the Installation Manager. For details, see [Recommended updates for WebSphere Application Server](https://www.ibm.com/support/pages/recommended-updates-websphere-application-server){target="_blank"}.

???+ info "Related information"
    [A Step-by-Step Guide to Installing Portal 9.5](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0079596){target="_blank"}  
