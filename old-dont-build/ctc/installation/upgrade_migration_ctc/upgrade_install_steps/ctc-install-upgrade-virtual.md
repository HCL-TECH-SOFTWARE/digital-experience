# Upgrading Content Template Catalog on virtual portals

You must install the Content Template Catalog page templates and libraries on each virtual portal to enable users to create sites.

You must have installed Content Template, with or without the CTC Demo site, on the base portal.

Follow these steps to distribute a shared version of templates and libraries to a virtual portal.

1.  Make a backup copy of the original ctc.properties or ctc-zos.properties file in case you need to revert to it.

2.  Open the properties file in a text editor and make these changes:

    -   **Mandatory settings**

        -   Enter the path of the server profile directory in the PROFILE\_DIR parameter. For example:
            -   Linux™: /opt/WebSphere/wp\_profile
            -   Windows™: C:\\IBM\\WebSphere\\wp\_profile
        -   Change CTC\_BASE to false. This is important, because you should not install the core CTC files when they exist on the base portal.
        -   Enter the virtual portal host name in the VirtualPortalHostName parameter. The host name value takes precedence over VirtualPortalContext. If you only use a context path in your virtual portal, leave this setting blank.
        -   Enter the virtual portal context in the VirtualPortalContext parameter. For example, if your virtual portal is accessed through /wps/portal/myVirtualPortal then VirtualPortalContext should be set to `myVirtualPortal`.
        -   Ensure that **UPGRADE\_CTC\_42\_OR\_LOWER** is set to true.
    -   **Mandatory settings when upgrading from Content Template Catalog version 3.x**

        -   If upgrading from Content Template Catalog version 3.x, you must change UPGRADE\_CTC\_3 to true. Content Template Catalog requires that the Page Templates are located under Hidden Pages. This is an optional step when migrating to HCL Portal or Web Content Manager 8.5, but is required for the Content Template Catalog install. By setting UPGRADE\_CTC\_3 to true, the Page Templates are moved under Hidden Pages if they have not been already.
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

        `ctc-install.bat`

    -   **AIX® HP-UX Linux™**

        `ctc-install.sh`

        **Note:** Ensure that ctc-install.sh is enabled to run as program before you run the command.

    -   **z/OS®**

        `ctc-install-zos.sh`

    When the script finishes successfully, the installation is complete.

6.  Restart the server to enable features that are used by Content Template.

7.  When the server restarts, open a web browser and navigate to the Portal Administration page to check that Content Template installed successfully. If you installed the demo content, you see a new set of pages at the page root, and a set of Content Template libraries in the list of Web Content Libraries.



