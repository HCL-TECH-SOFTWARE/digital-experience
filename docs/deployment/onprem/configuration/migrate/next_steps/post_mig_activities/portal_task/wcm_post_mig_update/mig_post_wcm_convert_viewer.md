# Convert the Portlet API Web Content Viewer to the JSR 286 Web Content Viewer

If you use the Portlet API Web Content Viewer portlet in your source environment, you must complete the following task after migration to convert to the JSR 286 Web Content Viewer.

The Web Content Viewer portlet that is based on the Portlet API was removed from HCL Web Content Manager 8.5 and is no longer supported. The migration process transfers the portlet and the portlet instances from your portal pages to the target environment. After migration, you must replace the Portlet API Web Content Viewer portlet with the JSR 286 Web Content Viewer portlet. You can complete this task manually or with the conversion task as described in the following procedure.

1.  Check if you installed the Portlet API Web Content Viewer portlet and identify potential portlet clones.

    1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.

    2.  Search for the web module with the file name ilwwcm-localrendering-portlet.war.

    3.  If the search result is empty, then you do not have the HCL Portlet API Web Content Viewer, and you can skip this task.

    4.  If the search result is not empty, then click **ilwwcm-localrendering-portlet.war** \> **Web Content Management - Content Viewer**.

2.  Check if you installed the JSR 286 Web Content Viewer portlet.

    1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.

    2.  Search for the web module with the file name ilwwcm-localrenderingportlet-jsr.

    3.  If the search result is empty, install the JSR 286 Web Content Viewer portlet from PortalServer\_root/pzn.ext/portlet.localrendering.jsr/localrendering.war/installableApps/ilwwcm-localrenderingportlet-jsr.

3.  To convert the instances of the Portlet API Web Content Viewer portlet to the JSR 286 Web Content Viewer portlet, follow the steps that are given at [Converting a Portal API Web Content Viewer to the JSR 286 API](migrt_ptlt_api_wcm.md).

    **Important:** If you use clones of the Portlet API Web Content Viewer portlet, you must also convert their instances.

4.  After you replace all instances of the Portlet API Web Content Viewer portlet and of its portlet clones, uninstall the ilwwcm-localrendering-portlet.war web module.


**Parent topic:**[Web Content Manager](../wcm/wcm_migration_post_update.md)

