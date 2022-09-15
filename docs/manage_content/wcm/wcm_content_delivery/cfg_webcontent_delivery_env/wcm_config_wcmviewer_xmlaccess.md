# XML configuration interface parameters for the Web Content Viewer

As with other portlets in your portal, you can use the XML configuration interface \(xmlaccess command\) to deploy and configure the Web Content Viewer. To simplify the configuration of the portlet with the XML configuration interface, the portlet parameters you can specify accept path values in addition to the standard IDs.

By default, the Web Content Viewer is configured with unique IDs. This has the advantage that the configuration does not break if an item is renamed of moved. However, when you are configuring a portlet with the XML configuration interface, it can be difficult to determine the unique ID of an item. When you are configuring the Web Content Viewer, you can reference web content items by their path, as well as by their IDs, by using the following parameters:

-   **`AUTHORINGTEMPLATE_OVERRIDE`**

    Specifies the authoring templates of the profile section. The parameter can contain multiple values, which are separated by commas. The list can contain both ID and path values.

-   **`CATEGORY_OVERRIDE`**

    Specifies the categories of the profile section. To list multiple categories, separate the categories by commas. You can use both ID values and path values.

-   **`SITEAREA_OVERRIDE`**

    Specifies the site areas of the profile section. To list multiple site areas, separate the site areas by commas. You can use both ID values and path values.

-   **`WCM_BROADCASTS_TO`**

    Specifies the link broadcasting setting for the Web Content Viewer. Values include:

    -   `WCM_LINKING_DYNAMIC`: Information about the web content item that is displayed in the Web Content Viewer is used to dynamically determine to which page the context is broadcast.
    -   `WCM_LINKING_SELF`: The context of the current Web Content Viewer is broadcast to other Web Content Viewers on the same portal page.
    -   `WCM_LINKING_OTHER`: The context of the current Web Content Viewer is broadcast to other Web Content Viewers on another portal page, as specified by the `WCM_PORTAL_PAGE_ID` parameter.
    -   `WCM_LINKING_NONE`: The context of the current Web Content Viewer is not broadcast to other Web Content Viewers.

-   **`WCM_COMPONENT_IDR`**

    Specifies a library component and is only used if content type **Component** is selected.

-   **`WCM_CONTENT_COMPONENT`**

    Specifies the name of the element to be displayed, when the `WCM_CONTENT_TYPE` parameter has the value `CONTENT_COMPONENT`.

-   **`WCM_CONTENT_CONTEXT_IDR`**

    Specifies the content render context. It can be a content item or site area, as specified by the `WCM_CONTENT_CONTEXT_TYPE` parameter.

-   **`WCM_CONTENT_CONTEXT_TYPE`**

    Specifies the type of the configured content context. Values include:

    -   `CONTENT`: Indicates that the content context is a content item.
    -   `PARENT`: Indicates that the content context is a site area.

-   **`WCM_CONTENT_TYPE`**

    Specifies the item to be displayed. Values include:

    -   `CONTENT`: Indicates that the item to be displayed is a content item.
    -   `COMPONENT`: Indicates that the item to be displayed is a component.
    -   `CONTENT_COMPONENT`: Indicates that the item to be displayed is an element.
    -   `SUMMARY`: Indicates that the item is to be rendered with the summary presentation template. A summary presentation template can be specified in the item's content template.
    -   `ALTERNATE`: Indicates that the item is to be rendered with the alternative presentation template, as specified by the parameter `WCM_DESIGN_IDR`.

-   **`WCM_DESIGN_IDR`**

    Specifies an alternative presentation template.

-   **`WCM_LISTENS_TO`**

    Specifies how the Web Content Viewer is configured to receive links that are broadcast from other Web Content Viewers. Values include:

    -   `WCM_LINKING_OTHER`: Information is received from any Web Content Viewer broadcasting links.
    -   `WCM_LINKING_SELF`: Information is received only from this Web Content Viewer.
    -   `WCM_LINKING_NONE`: No information from other Web Content Viewers is received.

-   **`WCM_PAGE_TITLE`**

    Used with the `WCM_PAGE_TITLE_TYPE` parameter, this parameter specifies the page title for the Web Content Viewer. Values include:

    -   The user-defined title for the page, if the `WCM_PAGE_TITLE_TYPE` parameter has a value of `WCM_PAGE_TITLE_TYPE_GENERAL`.
    -   The name of the resource bundle containing the title for the page, if the `WCM_PAGE_TITLE_TYPE` parameter has a value of `WCM_PAGE_TITLE_TYPE_RESBUN`.
-   **`WCM_PAGE_TITLE_TYPE`**

    Specifies how the page title is displayed for the Web Content Viewer. Values include:

    -   `WCM_PAGE_TITLE_TYPE_DEFAULT`: The default title that is defined in the portal's administration interface is used.
    -   `WCM_PAGE_TITLE_TYPE_GENERAL`: A user-defined title is used, as specified by `WCM_PAGE_TITLE` parameter.
    -   `WCM_PAGE_TITLE_TYPE_RESBUN`: The title is defined in a resource bundle, as specified by `WCM_PAGE_TITLE` parameter.
    -   `WCM_PAGE_TITLE_TYPE_DYN`: The title is defined by the value of the **Display title** field for the content item that is displayed in the Web Content Viewer.
    -   `WCM_PAGE_TITLE_TYPE_DYN_CONTENT_CMPNT`: The title is defined by the value of an element of the content item that is displayed in the Web Content Viewer. You must also specify the element name using the WCM\_PAGE\_TITLE parameter.

-   **`WCM_PORTAL_PAGE_ID`**

    Specifies the unique name or object ID of the page, which is the target for link broadcasts when the `WCM_BROADCASTS_TO` parameter is set to `WCM_LINKING_OTHER`.

-   **`WCM_PORTLET_TITLE`**

    Used with the `WCM_PORTLET_TITLE_TYPE` parameter, this parameter specifies the portlet title for the Web Content Viewer. Values include:

    -   The user-defined title for the portlet, if the `WCM_PORTLET_TITLE_TYPE` parameter has a value of `WCM_PORTLET_TITLE_TYPE_GENERAL`.
    -   The name of the resource bundle containing the title for the portlet, if the `WCM_PORTLET_TITLE_TYPE` parameter has a value of `WCM_PORTLET_TITLE_TYPE_RESBUN`.

-   **`WCM_PORTLET_TITLE_TYPE`**

    Specifies how the portlet title is displayed for the Web Content Viewer. Values include:

    -   `WCM_PORTLET_TITLE_TYPE_DEFAULT`: The default title that is defined in the portal's administration interface is used.
    -   `WCM_PORTLET_TITLE_TYPE_GENERAL`: A user-defined title is used, as specified by `WCM_PORTLET_TITLE` parameter.
    -   `WCM_PORTLET_TITLE_TYPE_RESBUN`: The title is defined in a resource bundle, as specified by `WCM_PORTLET_TITLE` parameter.
    -   `WCM_PORTLET_TITLE_TYPE_DYN`: The title is defined by the value of the **Display title** field for the content item that is displayed in the Web Content Viewer.
    -   `WCM_PORTLET_TITLE_TYPE_DYN_CONTENT_CMPNT`: The title is defined by the value of an element of the content item that is displayed in the Web Content Viewer. You must also specify the element name using the `WCM_PORTLET_TITLE` parameter.

When specifying a content path, you must begin with the forward slash character \(`/`\) followed by the library name, as indicated in the following examples of valid content paths:

```
/mylib/myfolder/mysitearea/mycontent
```

or

```
/mylib/mypresentationtemplate
```

!!! note
    If you configure an item by its path rather than by its ID, the portlet configuration can become invalid if the item is renamed or moved. If an item has been configured by its path, the Web Content Viewer displays a small path icon after the item when you are in the **Edit Shared Settings** or **Configure** mode.

!!! important
    When configuring an item by its path, you cannot build the path from the **Display title** fields of the items in the path. You must use the **Name** fields of the items when specifying the path.


???+ info "Related information:"
    - [The XML configuration interface](../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/index.md)

