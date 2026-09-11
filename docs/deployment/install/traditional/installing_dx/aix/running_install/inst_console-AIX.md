# Installing HCL DX in AIX using a console

Use the IBM Installation Manager to install HCL Digital Experience (DX) to an existing IBM WebSphere Application Server.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

## Prepare the Installation

1. Please download the latest HCL DX cumulative Fix from [MHS Download Portal](https://my.hcltechsw.com/downloads/dx/cloudnative/DX){target="_blank"} before starting the installation.  
    For example: `HCL-DX-CF237_Server_Update.zip`

2. Extract the zip-files into a folder. 
    For example: `/opt/HCL/INSTALL/CF237`

3. Start all servers and applications that require a port number to avoid port conflicts when you install HCL DX. If you are installing multiple copies of HCL DX on your server, start the existing Configuration Wizard servers.

    !!!note
        Currently, the `cw_profile` starting point always defaults to `10200`. If you install a second version of DX on the same server, you must customize the `cw_profile` port value by adding `-Dcwprofile_startingport=new_starting_port_number` to the `InstallationManager_root/InstallationManager/eclipse/tools/imcl.ini`.

4. Open a terminal and change to the `<InstallationManager_root>/eclipse/tools` directory.  
    For example:  

     ```bash
    cd /IBM/InstallationManager/eclipse/tools
    ```

5. Run the command to start the IBM Installation Manager in console mode:  

    ```bash
    ./imcl -c
    ```

6. Complete the following steps to add all required repositories:

    1. Enter **P** to go to the **Preferences** menu.
    2. Enter **1** to go to the **Repositories** menu.
    3. Enter **D** to add repositories.
    4. Type the path for your HCL DX repository file.
    5. Enter A to apply your repositories and return to the **Preferences** menu.
    6. Enter R to return to the **Main** menu.

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

## Install the Application Server

1. In the main menu, enter **1** to install the software packages.

2. Please just select only the following packages for the initial installation and then type **N** for Next:

    - `IBM WebSphere Application Server Network Deployment 9.0.5.0`
    - `IBM SDK, Java Technology Edition, Version 8 <version>`

    !!!note
        - If an IBM WebSphere Application Server Network Deployment 9.0.5.x is already installed, you can skip that step.  
        - For new installations, you must have IBM WebSphere Application Server & SDK Java version 8.0.3 installed to install HCL DX on top of it.
        - The **IBM WebSphere SDK Java Technology Edition** option is required for an HCL DX installation even though it might be marked as "Optional" on the Select packages to install screen.  

3. Accept the license agreement by typing in **A** and then enter **N** for next.  

4. Enter the directory where you want to store shared resources. Enter **M** for modifying the **Shared Resources Directory**.  
    Then you can enter for example: `/opt/IBM/IMShared`

5. Enter **N** to navigate to the next step.  

6. On the **New package group** screen keep the **IBM WebSphere Application Server V9.0** selected. You then can enter **M** to change the installation directory of the IBM WebSphere Application server. For example you can use `/opt/IBM/WebSphere/AppServer`. Keep the **architecture** setting as it is. Then enter **N** to navigate to the next step.  

    !!! remember
        The installation directory that you specify must NOT contain any files or the following characters: ~ ! @ \# $ % ^ & * ( ) + { } | < > ? ` = [ ] ; ' , . " and spaces.

7. Choose one of the following options for translation packages:

    - Enter **N** to select the default English package only.
    - Enter the number for the translation package you want to install.

    Once the selections are done, enter **N** to navigate to the next step.

8. On the features you can enter **N**, if you just want to deploy the default applications. If you also want to install the **sample applications** enter **4** and then **N** to navigate to the next step.  

9. On the summary page enter **I** to start the installation.  

10. As soon as the message **The installation is successfully** is displayed, enter **F** for Finish.  

## Install HCL Digital Experience (Aka IBM WebSphere Portal Server)

1. In the main menu enter **1** to install the additional software packages.

2. Please just select only the following packages for the initial installation or HCL DX and then enter **N** for next:

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

    !!!Important
        If you have downloaded the latest cumulative fix, the menu might also then show the `CF<version>`. Please ensure to not select the `CF<version>` at this installation step! On this step the base-version need to be installed. By first selecting the product offering and then by entering **2** to **Show all available versions of the package** the correct version can be selected. For example, when you have downloaded CF237, then select **Version 8.5.5.0** and NOT **Version CF237 for v8.5, v9.0 and v9.5** and then enter **O** for OK!  

    For example, when installing HCL Web Content Manager, the following should be selected:  

    ```bash
    Select packages to install:
     1. [ ] IBM WebSphere Application Server Network Deployment  9.0.5.0
     2. [X] IBM WebSphere Portal Server 8.5.0.0
     3. [ ] HCL Portal Server 9.5.0.0
     4. [ ] HCL Web Content Manager 9.5.0.0
     5. [ ] IBM SDK, Java Technology Edition, Version 8 8.0.5.35
     6. [X] IBM Web Content Manager  8.5.0.0
    ```

3. On the screen showing:  

    ```bash
    Select Fixes:
         1-. [ ] Fixes for IBM WebSphere Portal Server 8.5.0.0
          2. [ ] 8.5.0.0-WP-Server-IFPI59896 8.5.0.20161201_1732
    ```

    enter **2** to select the IFPI59896 fix. Then enter **N** to navigate to the next step.  

    !!!note
        This ifix is required for Portal 8.5 to be installed while on WAS 9.0 using JDK8.  

4. Enter **A** to accept the license and then **N** to navigate to the next step.

5. On the **New package group** step enter **M**, if you want to change the installation directory.  
    For example: `/opt/HCL/PortalServer`  
    Enter **N** to navigate to the next step.  

6. Keep the **Portal Server Profile** option selected and enter **N**.

7. Enter **1** to select the IBM WebSphere Application Server installation directory.  

8. Then type in the username and password that later should be used for the Configuration Wizard.  
   For example administrator user: `wpsadmin`.  

9. Enter the AIX full qualified hostname on the hostname option.  

10. Enter a node name. For example `DXNode1`.  

11. Enter a cell name. For example `DXCell`.  

12. Enter the username and password for the portal administration user.  
    For example administrator user: `wpsadmin`.  

13. When the menu is asking for **advanced parameters** enter **N** and then enter another **N** to navigate to the next step.

14. Verify the summary and then enter **I** to start the installation.  
     For example, when installing HCL WebContent Manager 9.5 the following should be shown:  

     ```bash
     Packages to be installed:
          1. IBM WebSphere Portal Server 8.5.0.0
            2. 8.5.0.0-WP-Server-IFPI59896 8.5.0.20161201_1732
          3. IBM Web Content Manager  8.5.0.0
     ```

    !!!note
        During the installation you might see information messages like:  
        `com.ibm.wps.workflowWorkflowManager enable WorkflowExecution`
        or  
        `INFO: I: Workflow execution is enabled`.  
        Please ignore these messages and still wait until the installation has completed.  

15. Once the installation is finished, please check if Warnings got printed. You can check it by entering **V** for View Message Details.  

    !!!note
        If the following warning is printed out, please ignore it and then just enter **O** for OK:  
        ```bash
        WARNING: Multiple warnings occurred.  
        Details:  
        A supported operating system was not detected. Support for your operating system might have been added after the release of the product. See the WebSphere Portal Server detailed system requirements Web pages - http://www.ibm.com/support/docview.wss?uid=swg27007791 for more information about supported operating systems. You can continue with the installation, but the installation or product operation might not succeed without applying maintenance.
        ```

16. Enter **F** for Finish.

17. Enter **X** to exit the IBM Installation Manager.

18. In the command line prompt navigate to the `<wp_profile_root>/bin` directory and stop the WebSphere_Portal server JVM with the following command:  

    ```bash
    ./stopServer.sh WebSphere_Portal
    ```

    For example:  

    ```bash
    cd /opt/HCL/wp_profile/bin
    ./stopServer.sh WebSphere_Portal
    ```

    !!!note
        You might be asked for the administration user/password. Enter it to get the JVM stopped.  
        In the next steps the Portal Server will be updated to the latest cumulative Fix. For that all IBM WebSphere Application server JVM instances need to be stopped!

19. Stop the cw_profile/server1 JVM with the following commands:  

     ```bash
     cd /opt/IBM/WebSphere/AppServer/profiles/cw_profile/bin
     ./stopServer.sh server1
     ```

20. Enter the IBM WebSphere Application Server administrator user ID and password to stop it.  

    !!!note
        Ensure that all IBM WebSphere Application Server and HCL Portal JVMs are stopped, before further updating the product to versions.

### Install the latest Cumulative Fix Version

1. In the terminal change to the `<InstallationManager_root>/eclipse/tools` directory.  

    For example:  

     ```bash
    cd /IBM/InstallationManager/eclipse/tools
    ```

2. Run the command to start the IBM Installation Manager in console mode:  

    ```bash
    ./imcl -c
    ```

3. In the main menu enter **2** for Updating the environment.

4. Enter **2** to select **IBM WebSphere Portal Server 8.5**.

5. Enter **N** to navigate to the next steps.

    !!!note
        If you will be asked for an IBM ID, please enter **C**. You may need to repeat to enter **C** 4 times until you will reach the next step page.  

6. Now select the cumulative Fix version, if it is not selected yet. Then enter **N** to navigate to the next step.  
    For example: `Version CF237 for v8.5, v9.0 and v9.5`  

    !!!note
        There might be warning messages that no supported operating system got detected. Please ignore them and enter **N**.

7. Enter **A** to accept the license and then enter **N** to navigate to the next step.  

8. Keep the **Portal Server Profile** selected and enter **N**.

9. On the summary page enter **U** to start updating the environment.

10. When the installation is finished, enter **V** to review the warning messages. If you just find warning messages about the operating system, ignore them and enter **O** for OK.  

11. Enter **F** for Finish and **X** to exit the IBM Installation Manager.  

12. Back in the terminal navigate to the `<wp_profile_root>/PortalServer/bin/` folder.  
    For example: `/opt/HCL/wp_profile/PortalServer/bin`.

13. Run the following command to update the current wp_profile to use the latest cumulative fixes.

    ```bash
    ./applyCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

    !!!note
        - The applyCF.sh script run may take some time to complete. Please ensure that you see the following message at the end of that script run:  
          `SUCCESS: Update to Cumulative Fix completed successfully.`
        - When the update is completed the WebSphere_Portal JVM is running! Please stop the JVM, before updating the environment to v9.5.  
        - For details please also review [Applying a Combined Cumulative Fix](../../../../../../deployment/install/traditional/cf_install/index.md){target="_blank"}

14. Navigate to the `<wp_profile_root>/bin` directory and execute the commands: `./stopServer.sh WebSphere_Portal`  
     For example:  

     ```bash
     cd /opt/HCL/wp_profile/bin
     ./stopServer.sh WebSphere_Portal
     ```

15. Enter the IBM WebSphere Application Server administrator user ID and password to stop it.  

## Update HCL Digital Experience to v9.5

1. In the terminal change to the `<InstallationManager_root>/eclipse/tools` directory.  

2. Run the command to start the IBM Installation Manager in console mode:  

    ```bash
    ./imcl -c
    ```

3. In the main menu, enter **1** to install the software packages.

4. On the **Select packages to install** screen select all the 9.5 packages of the HCL offering by entering the different numbers. Then enter **N** to navigate to the next step.  
    For example:  
    `- HCL Portal Server 9.5`  
    `- HCL Web Content Manager 9.5`  

5. Ignore the operating system warning message and enter **N**.

6. Accept the license by entering **A** and then **N**.

7. Keep the existing package group and enter **N**.

8. Enter the Application Server administrator ID and password.  
    For example: `wpsadmin`

9. Enter **Y** to validate the credentials.  

10. Enter the portal administration ID and password.  

11. Enter **Y** to validate the credentials. Then click **N** to navigate to the next step.

12. Review the summary and check that all 9.5 packages are selected and then enter **I**.

13. As soon as the installation is finish, ignore the operating system warning message and enter **F** and then **X** to exit the Installation Manager.  

## Next Steps

- You may also want to enable the v95 UI features next. For details, please review [Enabling Practitioner Studio](../../../../../../build_sites/practitioner_studio/working_with_ps/enable_prac_studio.md){target="_blank"}.

- It is highly recommended to update the IBM WebSphere Application Server and it's SDK to the latest Fixpack as well by using the Installation Manager. For details, see [Recommended updates for WebSphere Application Server](https://www.ibm.com/support/pages/recommended-updates-websphere-application-server){target="_blank"}.

???+ info "Related information"
    [A Step-by-Step Guide to Installing Portal 9.5](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0079596){target="_blank"}  
