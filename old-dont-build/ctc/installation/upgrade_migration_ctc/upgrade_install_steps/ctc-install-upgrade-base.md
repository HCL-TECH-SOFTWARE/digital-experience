# Upgrading Content Template Catalog on a base portal or cluster

Content Template Catalog will not install unless you modify the ctc.properties or ctc-zos.properties file to customize the installation.

You should already have extracted CTCInstall.zip to a directory on the server where you want to install Content Template and customized the ctc.properties or ctc-zos.properties file to specify which components to install.

If you are installing Content Template on a cluster, you only must install Content Template on the primary node. After installing on the primary node, you must restart all the nodes in the cluster.

Follow these steps to install specific applications on a base portal or a stand-alone server.

1.  Make a backup copy of the original ctc.properties or ctc-zos.properties file in case you need to revert to it.

2.  Open the properties file in a text editor and make these changes:

    -   **Mandatory settings**

        -   Enter the path of the server profile directory in the **PROFILE\_DIR** parameter. For example:
            -   Linux™: /opt/WebSphere/wp\_profile
            -   Windows™: C:\\IBM\\WebSphere\\wp\_profile

                If your server path contains spaces, use the DOS name. For example: C:\\Progra~2\\IBM\\WebSphere\\wp\_profile

    -   **Mandatory settings when upgrading from Content Template Catalog version 3.x**

        -   If upgrading from Content Template Catalog version 3.x, you must change UPGRADE\_CTC\_3 to true. Content Template Catalog requires that the Page Templates are located under Hidden Pages. This is an optional step when migrating to HCL Portal or Web Content Manager 8.5, but is required for the Content Template Catalog install. By setting UPGRADE\_CTC\_3 to true, the Page Templates will be moved under Hidden Pages if they have not been already.
    -   **Mandatory settings when upgrading from Content Template Catalog version 4.2 or lower**

        -   Ensure that UPGRADE\_CTC\_42\_OR\_LOWER is set to true. This option is not required if upgrading from version 4.3
    -   **Optional settings**

        -   By default, the installer is designed to work offline. This means installation occurs without accessing external DTD files. If your server has access to the Internet, you can set OFFLINE\_MODE to false, and external DTD files are accessed during install.
        -   A sample site is installed by default. If you do not want to install the CTC Demo sample site, change CTC\_DEMO to false. See [The Content Template demonstration site](ctc_overview_comp_demo.md) for further information.
        -   To install the Multilingual solution and the CTC Multilingual Demo site, change CTC\_MLS to true and ensure that CTC\_DEMO is set to true. See [The localized CTC demonstration sites](ctc_overview_comp_demo-mls.md) for further information.
        -   A set of [CTC ready groups and users](ctc_groups_users.md) can be installed by setting CTC\_USERS to true.
    Leave all other parameters to their default settings.

3.  Save and close the file.

4.  Ensure your HCL Portal server is running.

5.  Start the installation program from the command line. If you did not set the administrator passwords in the wkplc.properties file, you must add them to the command line with the syntax:

    `-PortalAdminPwd password -WasPassword password`

    -   **Windows™**

        ctc-install.bat

    -   **AIX® HP-UX Linux™**

        ctc-install.sh

        **Note:** Ensure that ctc-install.sh is enabled to run as program before you run the command.

    -   **z/OS®**

        ctc-install-zos.sh

    When the script finishes successfully, the installation is complete.

6.  Restart the server to enable features that are used by Content Template.

7.  When the server restarts, open a web browser and navigate to the Portal Administration page to check that Content Template installed successfully. If you installed the demo content, you see a new set of pages at the page root, and a set of Content Template libraries in the list of Web Content Libraries.


**Parent topic:**[Upgrade installation steps](../ctc/ctc-upgrade-steps.md)

