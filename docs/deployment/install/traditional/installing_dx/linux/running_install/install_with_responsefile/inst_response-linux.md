# Creating a response file for installing HCL Digital Experience in Linux

Use IBM Installation Manager to record a response file based on your environment, and also to automate your installation on multiple servers.

You can also use the console mode to generate a response file. Go to [Installing HCL Digital Experience in Linux using the console](../../running_install/inst_console-linux.md) for more information. After you review the summary information, enter G to generate a response file instead of I to install.

1. Start all servers and applications that require a port number to avoid port conflicts when you install HCL DX. If you are installing multiple copies of HCL Digital Experience (DX) on your server, start the existing Configuration Wizard servers.

    !!!note
        Currently, the `cw_profile` starting point always defaults to `10200`. If you install a second version of DX on the same server, you must customize the `cw_profile` port value by adding `-Dcwprofile_startingport=new_starting_port_number` to the `InstallationManager_root/InstallationManager/eclipse/tools/imcl.ini` file.

2. Go to the `InstallationManager_root/eclipse` directory.
3. Run the following task to start the recording:

    ```
    ./IBMIM -record pathtoresponsexmlfile -skipInstall tempinstalldirectory
    ```

    - `-record`: Indicates recording the actions and parameters into the response file.
    - `pathtoresponsexmlfile`: The name of the response file, (for example, `Wp8SampleResp.xml`).
    - `-skipInstall`: Indicates that no actual installation is completed even though it leads to the final pane.
    - `tempinstalldirectory`: The directory where the response file is recorded.

4. Complete the following steps to add the repositories where the installation media exists:

    1. Open the IBM® Installation Manager and go to **File > Preferences > Repositories**.
    2. Select **Add Repositories**.
    3. Select **Browse**, go to the `Portal-install-eimage/Setup/repository.config` file, and then click **OK**.
    4. Ensure that all required repositories are checked. Then, click **Test Connections** to ensure that the IBM Installation Manager can successfully access the directory where the service repositories are stored.
    5. Select **Apply**.
    6. Select **OK**.

5. On the main IBM Installation Manager panel, select **Install**.
6. If you are installing DX to an existing copy of WebSphere® Application Server, then select only **HCL DX Server** on the Install Packages screen. To complete this installation option, your existing copy of WebSphere Application Server must meet the following requirements:

    - WebSphere Application Server Version 8.5.5.2 or later
    - Java Version 8.0.3.
    - No existing DX profile
    Skip the following step, if you choose to install to an existing copy of WebSphere Application Server.

7. On Install Packages: Select packages to install, select the following packages, and then click **Next**:

    - **IBM WebSphere Application Server Network Deployment**
    - **HCL DX Server**
    - **IBM WebSphere SDK Java Technology Edition**

        !!!note
            For new installations, you must have SDK Java version 8.0.3.

        !!!note
            The **IBM WebSphere SDK Java Technology Edition** option is required for a HCL DX installation even though it might be marked as "Optional" on the Select packages to install screen.

    !!!tip
        If you have a HCL DX Enable license, you must select both the **HCL DX Server**, **HCL DX Express**, and **HCL DX Enable** packages.

8. On Install Packages: Select the fixes to install screen, select any required fixes. Then, click **Next**.
9. Accept the license agreement and then click **Next**.
10. Enter the directory where you want to store shared resources and then click **Next**.
11. Complete the following steps on the Install Packages: Installation Directory panel:

    !!!remember
        The installation directory that you specify must NOT contain any files or the following characters: ~ ! @ # $ % ^ & * ( ) + { } | < > ? ` = [ ] ; ' , . " and spaces.

    1. Select the WebSphere Application Server Package Group Name and then enter the installation directory path.
    2. Select the HCL DX Package Group Name and then enter the installation directory path.

    3. Click **Next**.

12. Select the translations to install and then click **Next**.
13. If you chose to install DX to an existing copy of WebSphere Application Server, select the available copy of WebSphere Application Server, and click **Next**.

    !!!note
         if you are not installing DX to an existing copy of WebSphere Application Server.

14. On Install Packages: Select the features to install, expand the WebSphere Application Server and HCL DX packages to modify the features you want to install and then click **Next**.

    !!!note
        Ensure that **Portal Server Profile** is selected to create a profile that contains the DX application server and the product binary files. Clear this option if you need a binary only installation for migration or your clustered environment.

    !!!note
        As you select the items, read the **Details** section for information.

15. On Profile configuration details, enter the user ID and password for the configuration wizard administrator. Then, click **Next**.
16. If you selected the **Portal Server Profile** package, click **Enter the Administrator user ID and password for the Portal Server**. Then, select either the **Standard** or **Advanced** configuration mode and then enter the parameter details for the selected configuration mode.

    !!!note
        Select **Advanced** if you want to specify Uniform Resource Identifier (URI) information that is specific to your company.

17. Confirm the Summary information and then click **Install**.
18. After the Installation Manager finishes creating the response file, click **Finish** and then close the Installation Manager to complete the response file recording.
19. If you plan to install on a different server, copy the response file to the response file directory on that server. Open the response file, make any necessary changes to the repository location. Search for value= and make any necessary changes for the new server.
