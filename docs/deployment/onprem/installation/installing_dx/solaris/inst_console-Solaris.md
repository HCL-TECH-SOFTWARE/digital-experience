# Solaris: Installing with the console

Use the IBM Installation Manager to install HCL Digital Experience to an existing IBM WebSphere Application Server.

A working installation of IBM® WebSphere® Application Server is required. Ensure that it is not used by another copy of HCL Digital Experience. Before you install the HCL Digital Experience package, install **IBM WebSphere SDK Java Technology Edition** into the same directory where IBM WebSphere Application Server is installed. The SDK Java version must be 7.0.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

1.  Start all servers and applications that require a port number to avoid port conflicts when you install HCL Digital Experience. If you are installing multiple copies of HCL Digital Experience on your server, start the existing Configuration Wizard servers.

    **Note:** Currently, the cw\_profile starting point always defaults to 10200. If you install a second version of portal on the same server, you must customize the cw\_profile port value. Add the following line to the InstallationManager\_root/InstallationManager/eclipse/tools/imcl.ini file:

    ```
    -Dcwprofile_startingport=new\_starting\_port\_number
    ```

2.  Open a command prompt and change to the InstallationManager\_root/eclipse/tools directory.

3.  Run the command to start the IBM Installation Manager in console mode:

    ./imcl -c

4.  Complete the following steps to add the repositories:

    1.  Enter P to go to the **Preferences** menu.

    2.  Enter 1 to go to the **Repositories** menu.

    3.  Enter D to add repositories.

    4.  Type the path for your HCL Digital Experience repository file.

    5.  Enter A to apply your repositories and return to the **Preferences** menu.

    6.  Enter R to return to the **Main** menu.

5.  Enter 1 to install the software packages.

6.  Select **HCL Portal Server**. To complete this installation option, your existing copy of WebSphere Application Server must meet the following requirements:

    -   WebSphere Application Server Version 8.5.5.2 or later
    -   Java Version 7.0
    -   No existing Portal profile
    **Tip:** If you have a HCL Portal Enable license, you must select both the **HCL Portal Server****HCL Portal Express** and **HCL Portal Enable** packages.

7.  Choose one of the following options:

    -   Enter 1 to choose version 8.5.0.0 for installation.
    -   Enter 2 to show all available versions of the package.
8.  Enter N.

9.  Enter A to accept the license agreement.

10. Enter N.

11. Choose one of the following options for translation packages:

    -   Enter N to select the default English package only.
    -   Enter the number for the translation package you want to install.
12. On the **Incompatible package group** menu, choose one of the following options:

    -   Enter M to change the installation directory. Then, enter the new installation directory. Read the **Tip** about installation path length to avoid issues that are caused by long paths.
    -   Enter N to keep the existing directory.
13. Enter the number for the WebSphere Application Server root directory to use as the existing WebSphere Application Server.

14. On the **IBM Installation Manager** \> **Install** \> **Licenses** \> **Location** \> **Features** menu, enter 1 to select the **Portal Server Profile** feature. Then, enter N to continue.

    **Note:** Ensure that **Portal Server Profile** is selected to create a profile that contains the Portal application server and the product binary files. Clear this option if you need a binary only installation for migrationor your clustered environment.

15. Enter the Configuration Wizard administrator user ID and password.

16. If you selected the **Portal Server Profile** feature, enter the information for the following prompts:

    -   **Enter the host name**
    -   **Enter the node name**
    -   **Enter the cell name**
    -   **Enter an administrator user ID for the portal server**
    -   **Enter an administrator user password for the portal server**
    -   **Confirm administrator user password for the portal server**
17. Enter Y to enter advanced parameters such as customized Uniform Resource Identifier \(URI\) settings, profile name, and port numbers. Enter N to accept the default parameters.

    -   **Enter the context root**
    -   **Enter the default home**
    -   **Enter the personalized home**
    -   **Enter the profile name**
    -   **Enter the starting port number**
    -   **Enter the profile path**
18. Enter N.

19. Review the summary information.

20. Choose one of the following options:

    -   Enter G to generate a response file.

        **Note:** Go to [Create a response file for your Solaris environment](inst_response-Solaris.md) for more information.

    -   Enter I to install HCL Digital Experience.
21. When the installation is complete, enter F to return to the main installation menu.

22. Access the Configuration Wizard. Go to http://your\_server:10200/hcl/wizard.

    **Note:** If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your\_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your\_server:10200/hcl/wizard.

    **Restriction:** There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

23. Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.

    **Note:** The wizard user interface might not be available in all languages. If the language is not currently supported, you might see the English version. For details on the supported languages for all of the HCL Digital Experience user interfaces, see [Supported languages](../reference/supportedlanguages.md).


After you upgrade to CF08 or higher, you can upgrade your SDK to version 7.1. Go to *Upgrading the SDK* for information.

**Parent topic:**[Solaris: Running the installation program](../install/inst_binaries-Solaris.md)

