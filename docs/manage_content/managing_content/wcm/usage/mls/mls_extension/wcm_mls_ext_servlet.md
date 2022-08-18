# Servlet render-time navigation extension

This extension provides navigation between equivalent published content in different locales from within a presentation template at rendering time.

To add localized rendering links to content items, reference the JSP component that is named **MLConfiguration\_v7/JSP - ML Locale Nav** to either the associated presentation template, or as a reference within a component or element that is also referenced in the presentation template.

## How it works

-   Every time that you render a page that includes the **MLConfiguration\_v7/JSP - ML Locale Nav** component, all libraries that are configured in the multilingual configuration file are searched for all items that match the current content item.
-   To be matching, the content must be located under an equivalent site path and have the same name.
-   A link is created for each matching localized content item that is displayed in the language of the current user.
-   While this extension does work for both servlet-rendering and portlet-rendering, in portlet-rendering it add links only for content displayed in the current portlet.

**Parent topic:**[Extensions for multilingual sites Multilingual Solution](../wcm/wcm_mls_extensions.md)

