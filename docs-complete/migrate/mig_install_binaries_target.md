# Installing Portal and WebSphere binary files 

On your target system, you must install the portal and WebSphere® binary files.

To effectively set up your target environment, install the Portal and WebSphere binary files on all target systems. Nodes and stand-alone servers require a binary Portal and WebSphere installation, while deployment managers require only a WebSphere binary installation.

HCL Digital Experience 8.5 is packaged with IBM® WebSphere Application Server version 8.5.5.2. There are some fixes in WebSphere Application Server version 8.5.5.4 and later that might prevent some problems from occurring during the migration. Therefore, when you install HCL Portal and the binary files, install the latest version of the WebSphere Application Server. Complete the following steps to install HCL Digital Experience with the latest version of WebSphere Application Server:

1.  Download the latest version of WebSphere Application Server from Passport Advantage.
2.  Start the Installation Manager.
3.  Go to **File** \> **Preferences** \> **Repositories**.
4.  Add the repository for the latest version of WebSphere Application Server.
5.  When you install HCL Portal, select the repositories for the latest version of WebSphere Application Server and the repository for HCL Portal.

The following high-level steps provide guidance for using the IBM Installation Manager. Refer to the Installing the Exceptional Digital Experience section for other installation alternatives.

**Note:** If you previously did a full Portal installation, you must remove all profiles.

1.  Start the IBM Installation Manager.
2.  Follow the IBM Installation Manager instructions through the different screens.
3.  While on the **Features** screen, make sure that **Create a new Portal Server Profile** is not selected.
4.  Proceed with the remaining instructions to complete the binary installation.

**Parent topic:**[Setting up the target environment ](../migrate/setting_up_the_target_environment.md)

