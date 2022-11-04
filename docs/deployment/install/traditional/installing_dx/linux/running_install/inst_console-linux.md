# Installing HCL Digital Experience in Linux using the console

Use the IBM Installation Manager to install HCL Digital Experience to an existing IBM WebSphere Application Server.

A working installation of IBM® WebSphere® Application Server is required. Ensure that it is not used by another copy of HCL Portal. Before you install the HCL Digital Experience package, install **IBM WebSphere SDK Java Technology Edition** into the same directory where IBM WebSphere Application Server is installed. The SDK Java version must be 8.0.3.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

## Procedure

1.  Start all servers and applications that require a port number to avoid port conflicts when you install HCL Portal. If you are installing multiple copies of HCL Digital Experience on your server, start the existing Configuration Wizard servers.

    !!! note 
        Currently, the cw_profile starting point always defaults to 10200. If you install a second version of portal on the same server, you must customize the cw_profile port value. Add the following line to the InstallationManager_root/InstallationManager/eclipse/tools/imcl.ini file:

    ```
    -Dcwprofile_startingport=new_starting_port_number
    ```

2.  Complete the following steps to run the program as an administrator:

    1.  Go to the InstallationManager_root/eclipse/tools directory.

    2.  Right-click on the imcl command.

    3.  Select **Properties**.

    4.  Go to the **Compatibility** tab.

    5.  Select **Run this program as an administrator**.

    6.  Click **OK**.

3.  Open a command prompt and change to the InstallationManager_root/eclipse/tools directory.

4.  Run the command to start the IBM Installation Manager in console mode:

    `./imcl -c`

5.  Complete the following steps to add the repositories:

    1.  Enter P to go to the **Preferences** menu.

    2.  Enter 1 to go to the **Repositories** menu.

    3.  Enter D to add repositories.

    4.  Type the path for your HCL Portal repository file.

    5.  Enter A to apply your repositories and return to the **Preferences** menu.

    6.  Enter R to return to the **Main** menu.

6.  Enter 1 to install the software packages.

7.  Select **HCL Portal Server**. To complete this installation option, your existing copy of WebSphere Application Server must meet the following requirements:

    -   WebSphere Application Server Version 8.5.5.2 or later
    -   Java Version 8.0.3.
    -   No existing Portal profile

    !!! tip 
        If you have a HCL Portal Enable license, you must select both the **HCL Portal Server****HCL Portal Express** and **HCL Portal Enable** packages.

8.  Choose one of the following options:

    -   Enter 1 to choose Version 9.5 for installation.
    -   Enter 2 to show all available versions of the package.
    
9.  Enter N.

10. Enter A to accept the license agreement.

11. Enter N.

12. Choose one of the following options for translation packages:

    -   Enter N to select the default English package only.
    -   Enter the number for the translation package you want to install.

13. On the **Incompatible package group** menu, choose one of the following options:

    -   Enter M to change the installation directory. Then, enter the new installation directory. Read the **Tip** about installation path length to avoid issues that are caused by long paths.
    -   Enter N to keep the existing directory.

    !!! tip
        Ensure that the installation paths for WebSphere Application Server and HCL Portal that are reasonably short. Long paths can cause installation problems.

14. Enter the number for the WebSphere Application Server root directory to use as the existing WebSphere Application Server.

15. On the **IBM Installation Manager > Install > Licenses > Location > *Features** menu, enter 1 to select the **Portal Server Profile** feature. Then, enter N to continue.

    !!! note
        Ensure that **Portal Server Profile** is selected to create a profile that contains the Portal application server and the product binary files. Clear this option if you need a binary only installation for migrationor your clustered environment.

16. Enter the configuration wizard administrator user ID and password.

17. If you selected the **Portal Server Profile** feature, enter the information for the following prompts:

    -   **Enter the host name**
    -   **Enter the node name**
    -   **Enter the cell name**
    -   **Enter an administrator user ID for the portal server**
    -   **Enter an administrator user password for the portal server**
    -   **Confirm administrator user password for the portal server**

18. Enter Y to enter advanced parameters such as customized Uniform Resource Identifier (URI) settings, profile name, and port numbers. Enter N to accept the default parameters.

    -   **Enter the context root**
    -   **Enter the default home**
    -   **Enter the personalized home**
    -   **Enter the profile name**
    -   **Enter the starting port number**
    -   **Enter the profile path**

19. Enter N.

20. Review the summary information.

21. Choose one of the following options:

    -   Enter G to generate a response file.

        !!! note
            Go to [Create a response file for your Linux environment](../running_install/install_with_responsefile/inst_response-linux.md) for more information.

    -   Enter I to install HCL Portal.

22. When the installation is complete, enter F to return to the main installation menu.

23. Access the Configuration Wizard. Go to http://your_server:10200/hcl/wizard.

    !!!note
        If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your_server:10200/hcl/wizard.

    !!! restriction 
        There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

24. Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.

    !!!note
        If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Language support](../../../../../../extend_dx/development_tools/portal_admin_tools/language_support/index.md) in the HCL Digital Experience Version 8.5 documentation.

After you upgrade to CF08 or higher, you can upgrade your SDK to version 7.1. Go to *Upgrading the SDK* for information.


