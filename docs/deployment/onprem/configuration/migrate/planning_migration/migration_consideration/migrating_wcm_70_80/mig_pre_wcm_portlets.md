# Portlet API Web Content Viewer and Remote Web Content Viewer

If you use the Web Content Viewer portlet or the Remote Web Content Viewer portlet that are based on the HCL Portlet API, then you must plan for the replacement of those portlets when migrating.

Both portlets were removed from Web Content Manager Version 8.5 and are no longer supported. You must replace them with the JSR 286 version of the Web Content Viewer portlet that is available.

If you already use only the JSR 286 version, then you do not need to plan for any additional steps for migration.

1.  Check which version you currently have installed on your source environment.
2.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.

3.  Search for the following files names:

    -   **ilwwcm-localrendering-portlet.war**

        This file represents the HCL Portlet API Web Content Viewer portlet and its portlet clones. If you find this web module, you need to perform a conversion for the migration. For more information, see *Converting the HCL Portlet API Web Content Viewer to the JSR 286 Web Content Viewer*.

    -   **ilwwcm-remoterendering-portlet.war**

        This file represents the HCL Portlet API Remote Web Content Viewer portlet and its portlet clones. If you find this web module, you need to perform a conversion for the migration. For more information, see *Converting the HCL Portlet API Remote Web Content Viewer to the JSR 286 Web Content Viewer*.

    -   **ilwwcm-localrendering-portlet-jsr.war**

        This file represents the JSR 286 Web Content Viewer portlet and its portlet clones. A conversion of this portlet is not required for the migration.



**Related information**  


[Converting a Portal API Web Content Viewer to the JSR 286 API](../migrate/migrt_ptlt_api_wcm.md)

