# Installing HCL Digital Experience in Windows using the graphical user interface

Use the IBM Installation Manager to install HCL Digital Experience, IBM WebSphere Application Server, and the Apache Derby database.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

1.  Start all servers and applications that require a port number to avoid port conflicts when you install HCL Digital Experience. If you are installing multiple copies of HCL Portal on your server, start the existing Configuration Wizard servers.

    **Note:** Currently, the cw\_profile starting point always defaults to 10200. If you install a second version of portal on the same server, you must customize the cw\_profile port value. Add the following line to the InstallationManager\_root/InstallationManager/eclipse/IBMIM.ini file:

    ```
    -Dcwprofile_startingport=new\_starting\_port\_number
    ```

2.  If necessary, start the Installation Manager.

3.  After you install or upgrade the Installation Manager, complete the following steps to add the repositories where the installation media exists:

    1.  Open the IBM® Installation Manager and go to **File** \> **Preferences** \> **Repositories**.

    2.  Select **Add Repositories**.

    3.  Select **Browse**, go to the directory where the repository.config file is found and then click **OK**:

        -   Base server path: \\SETUP\\products\\WP95\_Server\\
        -   Offering path: \\SETUP\\products\\WP95\_xxxx\\ where WP95\_xxxx is the offering type \(WCM, ENABLE, EXTEND, etc.\)
        **Note:** Repositories for the base server and for all offering types must be added to IBM Installation Manager.

    4.  Ensure that all required repositories are checked. Then, click **Test Connections** to ensure that the IBM Installation Manager can successfully access the directory where the service repositories are stored.

        **Note:** If you are installing more than just the base server, add the repositories for Offerings and SETUP.

    5.  Select **Apply**.

    6.  Select **OK**.

4.  On the main IBM Installation Manager panel, select **Install**.

5.  If you are installing Portal to an existing copy of WebSphere® Application Server, then select only **HCL Portal Server** on the Install Packages screen. To complete this installation option, your existing copy of WebSphere Application Server must meet the following requirements:

    -   WebSphere Application Server Version 8.5.5.2 or later
    -   Java Version 8.0.3.
    -   No existing Portal profile
    Skip the following step, if you choose to install to an existing copy of WebSphere Application Server.

6.  On Install Packages: Select packages to install, select the following packages, and then click **Next**:

    -   **IBM WebSphere Application Server Network Deployment**
    -   **HCL Portal Server**
    -   **IBM WebSphere SDK Java Technology Edition**

        **Note:** For new installations, you must have SDK Java version 8.0.3.

        **Note:** The **IBM WebSphere SDK Java Technology Edition** option is required for an HCL Digital Experience installation even though it might be marked as "Optional" on the Select packages to install screen.

    **Tip:** If you have a HCL Portal Enable license, you must select both the **HCL Portal Server****HCL Portal Express** and **HCL Portal Enable** packages.

7.  On Install Packages: Select the fixes to install screen, select any required fixes. Then, click **Next**.

8.  Accept the license agreement and then click **Next**.

9.  Enter the directory where you want to store shared resources and then click **Next**.

10. Complete the following steps on the Install Packages: Installation Directory panel:

    **Remember:** The installation directory that you specify must NOT contain any files or the following characters: ~ ! @ \# $ % ^ & \* \( \) + \{ \} \| < \> ? \` = \[ \] ; ' , . " and spaces.

    1.  Select the WebSphere Application Server Package Group Name and then enter the installation directory path.

    2.  Select the HCL Digital Experience Package Group Name and then enter the installation directory path.

    3.  Click **Next**.

11. Select the translations to install and then click **Next**.

12. If you chose to install Portal to an existing copy of WebSphere Application Server, select the available copy of WebSphere Application Server, and click **Next**.

    **Note:** Skip this step, if you are not installing Portal to an existing copy of WebSphere Application Server.

13. On Install Packages: Select the features to install, expand the WebSphere Application Server and HCL Digital Experience packages to modify the features you want to install and then click **Next**.

    **Note:** Ensure that **Portal Server Profile** is selected to create a profile that contains the Portal application server and the product binary files. Clear this option if you need a binary only installation for migrationor your clustered environment.

    **Note:** As you select the items, read the **Details** section for information.

14. On Profile configuration details, enter the user ID and password for the configuration wizard administrator. Then, click **Next**.

15. If you selected the **Portal Server Profile** package, click **Enter the Administrator user ID and password for the Portal Server**. Then, select either the **Standard** or **Advanced** configuration mode and then enter the parameter details for the selected configuration mode.

    **Note:** Select **Advanced** if you want to specify Uniform Resource Identifier \(URI\) information that is specific to your company.

16. Confirm the Summary information and then click **Install**.


After a successful installation, the summary displays. Choose the **Portal First Steps** radio button and then click **Finish** to start the servers and begin configuring HCL Portal with the Configuration Wizard.

**Tip:** To access First Steps later, you can either select **First Steps** from the **Start** menu or you can run the firststeps.exe./firststeps.sh task from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/installer/wp.firststeps directory. Add the LaunchPadLocale language\_code to the firststeps task to change the display to your user locale or to another language.

Before you access WebSphere Application Server, configure the software license agreement to set the usage limit from the Proof of Entitlement \(POE\) or invoice. Go to [Configuring software license information](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.installation.nd.iseries.doc/ae/tins_is_cfglic.html?cp=SSAW57_8.5.5%2F2-5-0-7-1) for information.

**Attention:** When you install WebSphere Application Server and HCL Portal together, you might find the following message in the SystemErr.log file:

```
[AppServer\_root](../reference/wpsdirstr.md#was_root)/properties/version/installed.xml (No such file or directory)
```

This message is part of the installation process and is not repeated after the installation is complete. Therefore, the message can be ignored.

After you upgrade to CF08 or higher, you can upgrade your SDK to version 7.1. Go to *Upgrading the SDK* for information.


