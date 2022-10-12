# Creating a response file for installing HCL Digital Experience in Windows

Use IBM Installation Manager to record a response file based on your environment, and also to automate your installation on multiple servers.

You can also use the console mode to generate a response file. Go to [Installing with the console for a Windows environment](../inst_console-windows.md) for more information. After you review the summary information, enter G to generate a response file instead of I to install.

## Procedure

1.  Start all servers and applications that require a port number to avoid port conflicts when you install HCL Portal. If you are installing multiple copies of HCL Digital Experience on your server, start the existing Configuration Wizard servers.

    !!!note
        Currently, the cw_profile starting point always defaults to 10200. If you install a second version of portal on the same server, you must customize the cw\_profile port value. Add the following line to the InstallationManager_root/InstallationManager/eclipse/tools/imcl.ini file:

    ```
    -Dcwprofile_startingport=new_starting_port_number
    ```

2.  Go to the InstallationManager_root/eclipse directory.

3.  Go to the InstallationManager_root/eclipse/tools directory.

4.  Run the following task to start the recording:

    `./IBMIM -record pathtoresponsexmlfile -skipInstall tempinstalldirectory`

    `imcl -c`

    `IBMIM.exe -record pathtoresponsexmlfile -skipInstall tempinstalldirectory`

    -   **-record**

        This parameter indicates recording the actions and parameters into the response file. The pathtoresponsexmlfile text is the name of the response file, for example Wp8SampleResp.xml. The tempinstalldirectory text is the directory where the response file is recorded.

    -   **-skipInstall**

        This parameter indicates that no actual installation is completed even though it leads to the final pane.

    -   **tempinstalldirectory**

        This value is a directory where the installation saves the history and data when you record the response files.

5.  Complete the following steps to add the repositories where the installation media exists:

    1.  Open the IBM® Installation Manager and go to **File* > Preferences > Repositories**.

    2.  Select **Add Repositories**.

    3.  Select **Browse** and go to the Portal-install-eimage/Setup/repository.config file and then click **OK**.

    4.  Ensure that all required repositories are checked. Then, click **Test Connections** to ensure that the IBM Installation Manager can successfully access the directory where the service repositories are stored.

    5.  Select **Apply**.

    6.  Select **OK**.

6.  On the main IBM Installation Manager panel, select **Install**.

7.  If you are installing Portal to an existing copy of WebSphere Application Server, then select only **HCL Portal Server** on the Install Packages screen. To complete this installation option, your existing copy of WebSphere Application Server must meet the following requirements:

    -   WebSphere Application Server Version 8.5.5.2 or later
    -   Java Version 8.0.3.
    -   No existing Portal profile
    Skip the following step, if you choose to install to an existing copy of WebSphere Application Server.

8.  On Install Packages: Select packages to install, select the following packages, and then click **Next**:

    -   **IBM WebSphere Application Server Network Deployment**
    -   **HCL Portal Server**
    -   **IBM WebSphere SDK Java Technology Edition**

        !!!note
            For new installations, you must have SDK Java version 8.0.3.

        !!!note
            The **IBM WebSphere SDK Java Technology Edition** option is required for a HCL Digital Experience installation even though it might be marked as "Optional" on the Select packages to install screen.

    !!!tip
        If you have a HCL Portal Enable license, you must select both the **HCL Portal Server****HCL Portal Express** and **HCL Portal Enable** packages.

9.  On Install Packages: Select the fixes to install screen, select any required fixes. Then, click **Next**.

10. Accept the license agreement and then click **Next**.

11. Enter the directory where you want to store shared resources and then click **Next**.

12. Complete the following steps on the Install Packages: Installation Directory panel:

    !!!remember
        The installation directory that you specify must NOT contain any files or the following characters: ~ ! @ # $ % ^ & * ( ) + { } | < > ? ` = [ ] ; ' , . " and spaces.

    1.  Select the WebSphere Application Server Package Group Name and then enter the installation directory path.

    2.  Select the HCL Digital Experience Package Group Name and then enter the installation directory path.

    3.  Click **Next**.

13. Select the translations to install and then click **Next**.

14. If you chose to install Portal to an existing copy of WebSphere Application Server, select the available copy of WebSphere Application Server, and click **Next**.

    !!!note
        Skip this step, if you are not installing Portal to an existing copy of WebSphere Application Server.

15. On Install Packages: Select the features to install, expand the WebSphere Application Server and HCL Digital Experience packages to modify the features you want to install and then click **Next**.

    !!!note
        Ensure that **Portal Server Profile** is selected to create a profile that contains the Portal application server and the product binary files. Clear this option if you need a binary only installation for migrationor your clustered environment.

    !!!note
    As you select the items, read the **Details** section for information.

16. On Profile configuration details, enter the user ID and password for the configuration wizard administrator. Then, click **Next**.

17. If you selected the **Portal Server Profile** package, click **Enter the Administrator user ID and password for the Portal Server**. Then, select either the **Standard** or **Advanced** configuration mode and then enter the parameter details for the selected configuration mode.

    !!!note
        Select **Advanced** if you want to specify Uniform Resource Identifier (URI) information that is specific to your company.

18. Confirm the Summary information and then click **Install**.

19. After the Installation Manager finishes creating the response file, click **Finish** and then close the Installation Manager to complete the response file recording.

20. If you plan to install on a different server, copy the response file to the response file directory on that server. Open the response file, make any necessary changes to the repository location. Search for value= and make any necessary changes for the new server.



