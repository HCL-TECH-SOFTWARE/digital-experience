---
title: Content tag
---




The `Content` tag directly renders a content item or site area.

The format of an `Content` tag:

```
[Content context=" " presentationPath=" " renderMode=" "]

```

!!! note
    The content tag renders nothing in the case of an infinite loop. For example if a presentation template uses the content tag to render the current content, this will cause the same presentation template to render, which in turn will render the content, and so forth without end. Take care to avoid this occurring because it slows down the time that is taken to render the tag.

To create an `Content` tag:

1.  Click **Insert a Tag** from a presentation template or element design field. The **Tag Helper** dialog opens.

2.  Select **Content** as the tag type.

3.  Select a context type:

    -   **Autofill**

        Use this option when the element that is referenced is determined by the search parameters of a menu, navigator, or taxonomy component. If the tag is not used within a menu, navigator, or taxonomy component, the context reverts to the current item.

    -   **Current**

        If selected, the context is set by the current item.

    -   **Portal Context**

        If selected, the context is set by the context of the current page. This option is only valid for content that is delivered by using a web content viewer portlet.

        See the knowledge center topic that is called **Web content associations** for further information.

    -   **Portal Mapping**

        If selected, the context is set by the web content association of the current page. This option is only valid for content that is delivered by using a web content viewer portlet.

        See the knowledge center topic that is called **Web content associations** for further information.

    -   **Portlet Context**

        If selected, the context is set by context of the current web content viewer portlet. This option is only valid for content that is delivered by using a web content viewer portlet.

    -   **Selected**

        If selected, the context is set by the selected item. You select an item by clicking **Select**. The selected item is added to the tag as the `uuid=" "` parameter. If the UUID or path parameter is specified, the context is always "selected", so you do not have to specify `context="Selected"`.

4.  Click **OK** to add the tag to your navigator design.


## Optional parameters

When you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`presentationPath="``NamePath"`|You can specify a specific presentation template to be used to render the content item or site area, in place of the default.|
|`renderMode="`"|You can specify a render mode to use in place of the default mode. <br> These render modes are predefined: summary, json, xml, html, default. You can use the Web Content Manager API to define further render modes. <br>-   **Default Presentation Template**: This presentation template is used to render an item within a Web Content Viewer portlet. <br>-   **Summary Presentation Template**: This presentation template is used when the summary render mode is used to render an item. <br>-   **JSON Record Presentation Template**: This presentation template is used when the JSON render mode is used to render an item on mobile devices. <br>-   **XML Document Presentation Template**: This presentation template is used when the XML render mode is used to render an item on mobile devices. <br>-   **HTML Document Presentation Template**: This presentation template is used when the HTML render mode is used to render an item as a complete web page. <br>You can create separate presentation templates for each type and select them when you create a site area template or content template:|

For example, setting a content or site area with a specified UUID to render by specifying the site area or content that is linked to by an element named `MyLinkElement`:

```
[Content uuid="[Element key='MyLinkElement' format='id']"]

```

You can render a content or site area from a predefined context. This context can be `portalContext`, `portletContext`, `portalMapping`, or `autofill`:

```
[Content context="portalContext"]

```

The content or site area to render can be specified by using the name path. For example, to render /Web Content/My Site Area/My Content:

```
[Content path="/Web Content/My Site Area/My Content"]

```

The content or site area to render can be specified relative to the name path of the current context:

```
[Content path="./My Content"]

```

