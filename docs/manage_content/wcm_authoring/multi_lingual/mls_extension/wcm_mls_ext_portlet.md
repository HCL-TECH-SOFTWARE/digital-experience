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

## HCLSoftware U learning materials

For an introduction and a demo on how to manage multilingual sites as a business user, go to [Multilingual for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2792){target="_blank"}. You can try it out using the [Multilingual Lab for Business Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab.pdf){target="_blank"} and corresponding [Multilingual Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab_Resources.zip).

To learn more about multilingual deployment options, go to [Multilingual for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}. In this course, you will learn about language support and selection, page translation, search, and the built-in multilingual solution for web content. You will also learn how to manage the locale URL, plan site capacity, and optimize performance. You can try it out using the [Multilingual Lab for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}.

???+ info "Related information"
    - [Web content associations](../../../wcm_delivery/deliver_webcontent_on_dx/getting_started/wcm_delivery_contentmap_about.md)

