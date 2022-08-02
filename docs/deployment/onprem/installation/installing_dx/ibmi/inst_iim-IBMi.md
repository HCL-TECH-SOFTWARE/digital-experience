# Preparing the Installation Manager

The IBM® Installation Manager is used to install installation packages such as HCL Digital Experience and IBM WebSphere® Application Server.

1.  If you have an existing Installation Manager, start it and go to **File** \> **Preferences**. Then, click **Updates**. Click the **Search for Installation Manager updates** check box. This box enables the Installation Manager to search for updates the next time you run an installation or update.

    If you do not have an existing Installation Manager, then complete the following procedure:

2.  Start all servers and applications that require a port number to avoid port conflicts when installing HCL Digital Experience.

3.  Type ping yourserver.yourcompany.com on a command line to verify that your fully qualified host name is properly configured.

4.  Type ping localhost on a command line to verify that your network is properly configured.

5.  If you are installing on a server with a firewall, antivirus, screen saver, or desktop search engine that is enabled, disable them before you install. If you do not disable them and the installation program detects them, a warning message displays during the installation or the installation might fail.

6.  Run the following task from the IIM directory:

    installc -acceptLicense.


**Parent topic:**[IBM i: Installing HCL Portal and HCL Web Content Manager](../install/installingwp-IBMi.md)

