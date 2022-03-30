# Portlet Render-time navigation extensions 

This extension enables the Web Content Viewer to become locale aware and thus automatically switch to an equivalent object based on the current user's locale.

To enable this extension:

1.  Update all Web Content Viewer Portlets to reference the multilingual context processor.

    -   **Web Content Viewer**

        Edit the portlet settings and select the com.ibm.workspace.wcm.ml.contextProcessor.MLContextProcessor from within the **Plugins** section of the **Advanced Options**.

    -   **Legacy Web Content Viewer Portlet**

        Add the following property to the configuration of the Web Content Viewer Portlet:

        ```
        ContextProcessorClass=com.ibm.workplace.wcm.contextprocessor.MLContextProcessor
        ```

2.  Modify all of the pages in the site to add a web content associations for the localized sites:

    1.  Go into edit mode.

    2.  Open the toolbar.

    3.  Select **Page**.

    4.  Select **General**.

    5.  Select **Details**.

    6.  Select "Default site area".

    7.  Add the web content associations to the site areas in the localized sites that are equivalent to the existing associated site area in the base locale.

    8.  Click **OK**.


## How it works

-   When a Web Content Viewer Portlet is rendered, the multilingual context processor checks whether the locale has changed. If the locale has changed, then an equivalent item in the new locale is displayed.

-   If a presentation template is selected in the Web Content Viewer configuration, then a localized presentation template is also searched for and used if available.

-   The multilingual portal local switcher can be used to allow the user to select a locale in which to view the site. This selected locale overrides the locale that the user specifies in their browser or in their portal preferences. To enable this extension:

    1.  Integrate the **MLPortalLocaleSwitcher.jsp** from the **wcm-multilocale.ear** into your theme.

    2.  Place a Web Content Viewer portlet on the page that is configured to display the **JSP - ML Portal Locale Switcher** component from the **MLConfiguration\_v7 library**.

        -   Select a content item from one of the localized libraries as the content context.
        -   Set "**Broadcast links to**" to "**This Page**".

**Parent topic:**[Extensions for multilingual sites  Multilingual Solution](../wcm/wcm_mls_extensions.md)

**Related information**  


[Web content associations ](../wcm/wcm_delivery_contentmap_about.md)

