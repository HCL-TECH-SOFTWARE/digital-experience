# Installing the Script Application 

The Script Application is included with CF 09 and later cumulative fixes for HCL Digital Experience.

When you install Combined Cumulative Fix 09 or a later cumulative fix on your HCL Portal V 8.5, the Script Application is included in the installation.

**Note:** If you want to install and use the HCL Script Portlet for HCL Portal V 8.5 with CF08 or earlier cumulative fixes that you can download from the [HCL®Software Products Catalog](https://www.hcltechsw.com/products), read the product documentation for HCL Script Portlet.

-   **Script Application installation through the cumulative fix installation:**

    Installing CF09 or a later cumulative fix on your portal includes the following steps and processes:

    -   The CF09 installation process installs the Script Portlet to the base portal and all virtual portals that exist at the time of installation. The CF11 installation process installs the Script Application to the base portal and all virtual portals that exist at the time of installation.
    -   If you had previously installed the Script Portlet Version 1.2 or 1.3 based on the Portal Catalog PAA download, the CF installation process uninstalls that earlier version of the Script Portlet before it installs the new version of the Script Application. Existing Script Portlet instances and the Script Portlet library remain deployed throughout the process. This way, your existing Script Portlet content is retained. Starting with CF11, the Script Portlet was renamed to Script Application.
-   **Adding the Script Application to virtual portals that you create later:**

    If you add virtual portals to your portal installation after you install CF09 or a later cumulative fix, you must import the Script Application Library to each new virtual portal. To do so, run the following portal configuration engine task.

    **Note:** This task imports libraries for both the Script Application and Site Builder. If you have already run this task to import the Site Builder library, you do not need to run this task again for your Script Application libraries."

    -   **AIX®**

        ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **HP-UX**

        ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **IBM® i**

        ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **Linux™**

        ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **Solaris**

        ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **Windows™**

        ConfigEngine.bat import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **z/OS®**

        ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

-   **Rolling back to an earlier version of the Script Application:**

    If you want to roll back the cumulative fix installation for any reason, the uninstall process removes the Script Application Editor, Importer, and Runtime extensions. They remain inoperable until you install a cumulative fix that includes the Script Application or you reinstall the earlier version 1.3 of the Script Portlet PAA. Existing instances and the library are not uninstalled.


**Parent topic:**[The Script Application ](../script-portlet/script_portlet.md)

**Related information**  


[Script Application limitations and troubleshooting ](../script-portlet/ts_preview.md)

