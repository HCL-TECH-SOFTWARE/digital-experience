# Creating a response file for installing HCL DX on AIX

Use IBM Installation Manager to record a response file based on your environment, and to automate your HCL Digital Experience (DX) installation on multiple servers.

You can also use console mode to generate a response file. After you review the summary information in console mode, enter `G` to generate a response file instead of `I` to install. For more information, refer to [Installing with the console for an AIX environment](../inst_console-AIX.md).

1. Start all servers and applications that require a port number to avoid port conflicts when you install HCL DX. If you are installing multiple copies of HCL DX on your server, start the existing Configuration Wizard servers.

    !!! note
        Currently, the `cw_profile` starting point always defaults to `10200`. If you install a second version of DX on the same server, you must customize the `cw_profile` port value by adding `-Dcwprofile_startingport=new_starting_port_number` to the `InstallationManager_root/InstallationManager/eclipse/tools/imcl.ini` file.

2. Go to the `InstallationManager_root/eclipse directory`.
3. Start the recording:

    ```bash
    ./IBMIM -record pathtoresponsexmlfile -skipInstall tempinstalldirectory
    ```

    - `-record`: Indicates recording the actions and parameters into the response file.
    - `pathtoresponsexmlfile`: Specifies the name of the response file, (for example, `WpSampleResp.xml`).
    - `-skipInstall`: Indicates that no actual installation is completed even though it leads to the final pane.
    - `tempinstalldirectory`: Specifies the directory where the response file is recorded.

4. Add the installation media repositories:

    1. Open the IBM Installation Manager and go to **File > Preferences > Repositories**.
    2. Select **Add Repositories**.
    3. Select **Browse**, locate `<install-root>/Setup/repository.config`, and then select **OK**.
    4. Ensure that all the required repositories are selected, and then select **Test Connections** to verify repository access.
    5. Select **Apply**, and then select **OK**.

5. On the main IBM Installation Manager panel, select **Install**.
6. If you install HCL DX to an existing copy of WebSphere Application Server, select only **HCL Portal Server** on the **Install Packages** page. The existing WebSphere Application Server installation must meet the following requirements:

    - WebSphere Application Server version 8.5.5.2 or later
    - Java version 8.0.3.
    - No existing DX profile

    If you install to an existing WebSphere Application Server instance, skip step 7.

7. On the **Select packages to install** page, select the following packages, and then select **Next**:

    - **IBM WebSphere Application Server Network Deployment**
    - **HCL Portal Server**
    - **IBM WebSphere SDK Java Technology Edition**

        !!! note
            - For new installations, you must have SDK Java version 8.0.3.
            - The **IBM WebSphere SDK Java Technology Edition** option is required for an HCL DX installation, even if it is marked as optional on the **Select packages to install** page.
            - If you have an **HCL Portal Enable** license, you must select both the **HCL Portal Server**, **HCL Portal Express**, and **HCL Portal Enable** packages.

8. On the **Select the fixes to install** page, select any required fixes. Then, select **Next**.
9. Accept the license agreement, and then select **Next**.
10. Enter the directory where you want to store shared resources, and then select **Next**.
11. On the **Installation Directory** page, specify the installation directories:

    !!! note
        The installation directory must be empty and cannot contain spaces or special characters.

    1. Select the WebSphere Application Server package group and then enter the installation directory path.
    2. Select the HCL DX package group and then enter the installation directory path.
    3. Select **Next**.

12. Select the translations to install, and then select **Next**.
13. If you chose to install HCL DX to an existing copy of WebSphere Application Server, select the available copy of WebSphere Application Server, and then select **Next**.
14. On the **Select the features to install** page, expand the WebSphere Application Server and HCL DX packages to modify the features you want to install, and then select **Next**.

    !!!note
        - Ensure that **Portal Server Profile** is selected to create a profile that contains the HCL DX application server and the product binary files. Clear this option if you need a binary-only installation for migration or your clustered environment.
        - Review the **Details** section for information about each feature.

15. On the **Profile configuration details** page, enter the user ID and password for the configuration wizard administrator, and then select **Next**.
16. If you selected the **Portal Server Profile** package, select **Enter the Administrator user ID and password for the Portal Server**. Select either the **Standard** or **Advanced** configuration mode, and enter the parameter details for the selected mode.

    !!!note
        Select **Advanced** if you want to specify custom Uniform Resource Identifier (URI) settings.

17. On the **Summary** page, review the configuration, and then select **Install**.
18. After the Installation Manager finishes creating the response file, select **Finish**, and then close the Installation Manager to complete the recording.
19. If you plan to install on a different server, update the response file for the target environment:

    1. Copy the response file to the target server.
    2. Open the response file in a text editor.
    3. Update the repository location path to match the target server environment.
    4. Search for `value=` and update any server-specific parameters.
