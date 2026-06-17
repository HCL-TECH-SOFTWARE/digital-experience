# How to import the Site Builder library onto a new virtual portal \| HCL Web Content Manager

If you create a new virtual portal, you must copy the Site Builder library onto the new virtual portal.

Open a command line and browse to the ConfigEngine directory.

-   **Windows™**

    C:\\IBM/WebSphere\wp_profile\ConfigEngine

-   **AIX®**

    /usr/IBM/WebSphere/wp_profile/ConfigEngine

-   **Linux™**

    /opt/IBM/WebSphere/wp_profile/ConfigEngine


Run the ConfigEngine batch or script file with the import-libs-to-vp parameter to copy the library. For example:

-   **Windows™**

    `ConfigEngine.bat import-libs-to-vp -DVirtualPortalContext=your\_vp`

-   **AIX and Linux**

    `./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=your\_vp`


!!! note
    This task imports libraries for both Site Builder and the Script Application. If you have already run this task to import your Script Application libraries, you won't have to run this task again for Site Builder.

The Blueprint Template requires all Blueprint WCM Libraries to be installed. When exporting the template to a virtual portal, you must also export all Blueprint Libraries and referenced libraries to the same destination. For more information, see [Install Blueprint in Virtual Portals](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/how-to-install-blueprint-in-virtual-portals--documentation).

For HCL DX Compose, the ConfigEngine utility is not available. Instead, you can use the Web Content Manager (WCM) Module utility to export and import the Site Builder Template library. For more information, see [Importing the Site Builder Template library onto a new virtual portal](https://help.hcl-software.com/digital-experience/dx-compose/latest/deploy_dx/manage/cfg_webengine/import_site_builder_library/).