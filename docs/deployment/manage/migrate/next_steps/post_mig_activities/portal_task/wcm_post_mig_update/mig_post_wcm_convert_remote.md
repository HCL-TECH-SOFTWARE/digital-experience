# Convert the Portlet API Remote Web Content Viewer to the JSR 286 Web Content Viewer

If you use the Portlet API Remote Web Content Viewer portlet in your source environment, you must complete the following task after migration to convert to the JSR 286 Web Content Viewer.

The Remote Web Content Viewer portlet that is based on the Portlet API was removed from HCL Web Content Manager 8.5 and is no longer supported. The migration process transfers the portlet and the portlet instances from your portal pages to the target environment. After migration, you must replace the Portlet API Remote Web Content Viewer portlet with the JSR 286 Web Content Viewer portlet.

1.  Check if you installed the Portlet API Web Content Viewer portlet and identify potential portlet clones.

    1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.

    2.  Search for the web module with the file name ilwwcm-remoterendering-portlet.war.

    3.  If the search result is empty, then you do not have the Portlet API Remote Web Content Viewer, and you can skip this task.

    4.  If the search result is not empty, then click **ilwwcm-remoterendering-portlet.war** \> **Web Content Management - Remote Content Viewer**.

        **Note:** If you do not use clones of the portlet, the displayed table will contain only a single portlet with the title **Remote Web Content Viewer**.

2.  If you use the Portlet API Remote Web Content Viewer portlet, choose one of the following methods to deliver your web content after completing the post migration steps:

    -   Option 1: If you migrate from a source rendering portal that does not include HCL Web Content Manager to a target rendering portal that does not include HCL Web Content Manager, you must use the JSR 286 Web Content Viewer and the WSRP support in the portal.
    -   Option 2: If you migrate from a source rendering portal that does not include HCL Web Content Manager to a target rendering portal that includes HCL Web Content Manager, the preferred way to display your web content is to locally render it with the JSR 286 Web Content Viewer.
    -   Option 3: If your source rendering portal includes HCL Web Content Manager, the target rendering portal will also include HCL Web Content Manager. The preferred way to display your web content is to locally render it with the JSR 286 Web Content Viewer.
    The following table summarizes the preferred options depending on the source and target rendering portal.

    |Source rendering portal|Target rendering portal|Preferred option|
    |-----------------------|-----------------------|----------------|
    |Includes the HCL Web Content Manager|Includes the HCL Web Content Manager|Option 3: Local web content rendering with JSR 286 Web Content Viewer|
    |Includes the HCL Web Content Manager|Does not include the HCL Web Content Manager|Unsupported migration path|
    |Does not include HCL Web Content Manager|Includes the HCL Web Content Manager|Option 2: Local web content rendering with JSR 286 Web Content Viewer|
    |Does not include HCL Web Content Manager|Does not include the HCL Web Content Manager|Option 1: Remote web content rendering with JSR 286 Web Content Viewer via WSRP|



# Option 1: Remote web content rendering with JSR 286 Web Content Viewer via WSRP

The source rendering portal of the migration does not contain the web content it delivers. Instead the HCL Portlet API Remote Web Content Viewer connects to another portal of your source environment to retrieve the web content.

As the target rendering portal does not include HCL Web Content Manager, you must continue displaying web content remotely. To perform remote rendering with HCL Web Content Manager 8.5, you must configure your target environment to use the JSR 286 Web Content Viewer with WSRP.

The target rendering portal that does not include HCL Web Content Manager and still uses the Portlet API Remote Web Content Viewer becomes the WSRP consumer. It consumes the JSR 286 Web Content Viewer from the target authoring portal that includes HCL Web Content Manager and contains the web content.

1.  To configure remote rendering, follow the instructions at [Enabling remote rendering with WSRP and the Web Content Viewer](../wcm/wcm_config_wcmviewer_wsrp.md).

2.  On the target rendering portal that acts as WSRP consumer:

    1.  Add instances of the consumed JSR 286 Web Content Viewer portlet to portal pages that contain instances of the Portlet API Remote Web Content Viewer portlet.

    2.  Configure the consumed JSR 286 Web Content Viewer portlet instances to match the configuration of the Portlet API Remote Web Content Viewer portlet instances on each of the portal pages.

    3.  After replacing all instances of the Portlet API Remote Web Content Viewer portlet and of its portlet clones, uninstall the ilwwcm-remoterendering-portlet.war web module.

    **Note:** This option has limitations that do not exist when rendering web content locally. For more information, see *Performing remote rendering with WSRP and the web content viewer*.


# Options 2 and 3: Local web content rendering with JSR 286 Web Content Viewer

The source rendering portal of the migration does not contain the web content it delivers. Instead the HCL Portlet API Remote Web Content Viewer connects to another portal of your source environment to retrieve the web content.

If you choose this option, you will change the web content delivery model from remote rendering to local rendering. After you make the web content libraries available on the target rendering portal, you can use the JSR 286 Web Content Viewer portlet for local rendering.

1.  To make the web content available on the target rendering portal, syndicate the web content libraries from the target authoring portal to the target rendering portal. For more information, see [Syndication](../wcm/wcm_administering.md).

2.  On the target rendering portal:

    1.  Check if you installed the JSR 286 Web Content Viewer portlet.

        1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.
        2.  Search for the web module with the file name ilwwcm-localrenderingportlet-jsr.war.
        3.  If the search result is empty, install the JSR 286 Web Content Viewer portlet from PortalServer\_root/pzn.ext/portlet.localrendering.jsr/localrendering.war/installableApps/ilwwcm-localrenderingportlet-jsr.war.
    2.  To convert the instances of the Portlet API Remote Web Content Viewer portlet to the JSR 286 Web Content Viewer portlet, follow the steps given at [Converting a Portal API web content viewer to the JSR 286 API](migrt_ptlt_api_wcm.md).

        **Important:** If you use clones of the Portlet API Remote Web Content Viewer portlet, you also need to convert their instances.

    3.  After replacing all instances of the Portlet API Web Content Viewer portlet and of its portlet clones, uninstall the ilwwcm-localrendering-portlet.war web module.


