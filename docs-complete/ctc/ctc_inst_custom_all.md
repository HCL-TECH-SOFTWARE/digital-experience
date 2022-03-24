# Installing Content Template on a base portal or cluster \| CTC for HCL Digital Experience

Content Template Catalog will not install unless you modify the ctc.properties or ctc-zos.properties file to customize the installation.

You should already have extracted CTCInstall.zip to a directory on the server where you want to install Content Template and customized the ctc.properties or ctc-zos.properties file to specify which components to install.

Content Template Catalog only needs to be installed on the primary node and then synchronized to all secondary nodes using the WebSphere® Integrated Solutions Console:

1.  To synchronize all nodes, go to **System administration** \> **Nodes**.
2.  After synchronization, restart all node agents under **System administration** \> **Node agents**.

Follow these steps to install specific applications on a base portal or a stand-alone server.

1.  Make a backup copy of the original ctc.properties or ctc-zos.properties file in case you need to revert to it.

2.  Open the properties file in a text editor and make these changes:

    -   **Mandatory settings**

        -   Enter the path of the server profile directory in the PROFILE\_DIR parameter. For example:
            -   Linux™: /opt/WebSphere/wp\_profile
            -   Windows™: C:\\IBM\\WebSphere\\wp\_profile

                **Note:** If your server path contains spaces, use the dos name. For example: C:\\Progra~2\\IBM\\WebSphere\\wp\_profile

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

7.  When the server restarts, open a web browser and browse to the Portal Administration page to check that Content Template installed successfully. If you installed the demo content, you see a new set of pages at the page root, and a set of Content Template libraries in the list of Web Content Libraries.

8.  Follow the steps in this topic to complete installation: [Completing a Content Template installation on a web server](ctc_inst_clusdeploy.md)


**Parent topic:**[First-time installation of Content Template ](../ctc/ctc_inst_overview.md)

