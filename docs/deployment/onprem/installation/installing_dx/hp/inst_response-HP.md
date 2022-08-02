# HP: Creating a response file

After IBM Installation Manager is installed, you can use it to record a response file that is based on your environment. Record a response file on the same operating system you plan for the installation. If you have multiple operating systems, you must record a response file for each operating system. Use a response file to automate your installation on multiple servers.

You can also use the console mode to generate a response file. Go to [Installing with the console for an HP environment](inst_response-HP.md) for more information. After you review the summary information, enter G to generate a response file instead of I to install.

**Ubuntu x86:** If your operating system is Ubuntu x86, install WebSphere® Application Server version 8.5.5.3 or higher before or simultaneously with HCL Portal.

1.  Start all servers and applications that require a port number to avoid port conflicts when you install HCL Portal. If you are installing multiple copies of HCL Digital Experience on your server, start the existing Configuration Wizard servers.

    **Note:** Currently, the cw\_profile starting point always defaults to 10200. If you install a second version of portal on the same server, you must customize the cw\_profile port value. Add the following line to the InstallationManager\_root/InstallationManager/eclipse/tools/imcl.ini file:

    ```
    -Dcwprofile_startingport=new\_starting\_port\_number
    ```

2.  Go to the InstallationManager\_root/eclipse directory.

3.  Run the following task to start the recording:

    ./IBMIM -record pathtoresponsexmlfile -skipInstall tempinstalldirectory

    -   **-record**

        This parameter indicates recording the actions and parameters into the response file. The pathtoresponsexmlfile text is the name of the response file, for example Wp8SampleResp.xml. The tempinstalldirectory text is the directory where the response file is recorded.

    -   **-skipInstall**

        This parameter indicates that no actual installation is completed even though it leads to the final pane.

    -   **tempinstalldirectory**

        This value is a directory where the installation saves the history and data when you record the response files.

4.  Complete the following steps to add the repositories where the installation media exists:

    1.  Open the IBM Installation Manager and go to **File** \> **Preferences** \> **Repositories**.

    2.  Select **Add Repositories**.

    3.  Select **Browse** and go to the Portal-install-eimage/Setup/repository.config file and then click **OK**.

    4.  Ensure that all required repositories are checked. Then, click **Test Connections** to ensure that the IBM Installation Manager can successfully access the directory where the service repositories are stored.

    5.  Select **Apply**.

    6.  Select **OK**.

5.  On the main IBM Installation Manager panel, select **Install**.

6.  If you are installing Portal to an existing copy of WebSphere Application Server, then select only **IBM WebSphere Portal Server** on the Install Packages screen. To complete this installation option, your existing copy of WebSphere Application Server must meet the following requirements:

    -   WebSphere Application Server Version 8.5.5.2 or later
    -   Java Version 7.0
    -   No existing Portal profile
    Skip the following step, if you choose to install to an existing copy of WebSphere Application Server.

7.  On Install Packages: Select packages to install, select the following packages, and then click **Next**:

    -   **IBM WebSphere Application Server Network Deployment**
    -   **HCL Portal server**
    -   **IBM WebSphere SDK Java Technology Edition**

        **Note:** For new installations, you must have SDK Java version 7.0.

        **Note:** The **IBM WebSphere SDK Java Technology Edition** option is required for a HCL Portal installation even though it might be marked as "Optional" on the Select packages to install screen.

    **Tip:** If you have a HCL Portal Enable license, you must select both the **HCL Portal server****HCL Portal Express** and **HCL Portal Enable** packages.

8.  On Install Packages: Select the fixes to install screen, select any required fixes. Then, click **Next**.

9.  Accept the license agreement and then click **Next**.

10. Enter the directory where you want to store shared resources and then click **Next**.

11. Complete the following steps on the Install Packages: Installation Directory panel:

    **Remember:** The installation directory that you specify must NOT contain any files or the following characters: ~ ! @ \# $ % ^ & \* \( \) + \{ \} \| < \> ? \` = \[ \] ; ' , . " and spaces.

    1.  Select the WebSphere Application Server Package Group Name and then enter the installation directory path.

    2.  Select the HCL Portal Package Group Name and then enter the installation directory path.

    3.  Click **Next**.

12. Select the translations to install and then click **Next**.

13. If you chose to install Portal to an existing copy of WebSphere Application Server, select the available copy of WebSphere Application Server, and click **Next**.

    **Note:** Skip this step, if you are not installing Portal to an existing copy of WebSphere Application Server.

14. On Install Packages: Select the features to install, expand the WebSphere Application Server and HCL Portal packages to modify the features you want to install and then click **Next**.

    **Note:** Ensure that **Portal Server Profile** is selected to create a profile that contains the Portal application server and the product binary files. Clear this option if you need a binary only installation for migrationor your clustered environment.

    **Note:** As you select the items, read the **Details** section for information.

15. On Profile configuration details, enter the user ID and password for the configuration wizard administrator. Then, click **Next**.

16. If you selected the **Portal Server Profile** package, click **Enter the Administrator user ID and password for the Portal Server**. Then, select either the **Standard** or **Advanced** configuration mode and then enter the parameter details for the selected configuration mode.

    **Note:** Select **Advanced** if you want to specify Uniform Resource Identifier \(URI\) information that is specific to your company.

17. Confirm the Summary information and then click **Install**.

18. After the Installation Manager finishes creating the response file, click **Finish** and then close the Installation Manager to complete the response file recording.

19. If you plan to install on a different server, copy the response file to the response file directory on that server. Open the response file, make any necessary changes to the repository location. Search for value= and make any necessary changes for the new server.


**Parent topic:**[HP: Installing with the response file](../install/inst_silent-HP.md)

