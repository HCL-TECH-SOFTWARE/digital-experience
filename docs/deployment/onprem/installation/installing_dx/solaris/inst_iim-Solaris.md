# Preparing the Installation Manager

The IBM Installation Manager is used to install installation packages such as HCL Digital Experience and IBM WebSphere Application Server.

1.  If you have an existing Installation Manager, start it and go to **File** \> **Preferences**. Then, click **Updates**. Click the **Search for Installation Manager updates** check box. This box enables the Installation Manager to search for updates the next time you run an installation or update.

    If you do not have an existing Installation Manager, then complete the following procedure:

2.  Start all servers and applications that require a port number to avoid port conflicts when installing HCL Portal.

3.  Type ping yourserver.yourcompany.com on a command line to verify that your fully qualified host name is properly configured.

4.  Type ping localhost on a command line to verify that your network is properly configured.

5.  If you are installing on a server with a firewall, antivirus, screen saver, or desktop search engine that is enabled, disable them before you install. If you do not disable them and the installation program detects them, a warning message displays during the installation or the installation might fail.

6.  Complete the following steps to install as a non-root user:

    1.  Log in to the operating system as the root user.

    2.  Open a command line.

    3.  Use the appropriate system commands to create the following items:

        -   Non-root user, including password
        -   Group
        -   Directory, used when you install IBM® Installation Manager and HCL Portal
    4.  Set the user profile for the number of open files. Set the value to ulimit -n 10240.

    5.  Add the non-root user to the new group.

    6.  Run the following task to change the owner of the directory to the non-root user:

        ```
        chown user:group /directory
        ```

    7.  Run the following task to change permissions for the directory:

        ```
        chmod 755 /directory
        ```

    8.  Log in as the non-root user.

    9.  Use the following command to install IBM Installation Manager:

        ```
        ./userinst 
        ```

        Set the IBM Installation Manager installation location to /directory/IBM/InstallationManager.

7.  Run the following task from the IIM directory:

    ./install

    install.bat

8.  Run the following task from the Portal Setup disk if you want to start the launchpad to complete all necessary installation steps:

    ./setup.sh

    **Attention:** The launchpad requires Firefox ESR 45 or earlier.

    **Launchpad tip:** On the Launchpad: Install Portal panel, you have the following options:

    -   **Install HCL Digital Experience from network**

        Choose this option if you downloaded the electronic images.

    -   **Install IBM Installation Manager only**

        Choose this option if you want to install multiple HCL Software products, or if a previous version of Installation Manager is not already installed on your system.

    **Tip:** Add the LaunchPadLocale language\_code to the setup task to change the display to your user locale or to another language.

    **Note:** If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Supported languages](../reference/supportedlanguages.md).

    After you complete all necessary steps from the launchpad, verify that your installation was successful.


**Parent topic:**[Solaris: Installing HCL Portal and Web Content Manager](../install/installingwp-Solaris.md)

