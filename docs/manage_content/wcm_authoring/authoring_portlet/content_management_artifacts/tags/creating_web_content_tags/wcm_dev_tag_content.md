---
title: Content tag
---

The `Content` tag directly renders a content item or site area. See the format of a `Content` tag:

```
[Content context=" " presentationPath=" " renderMode=" " uuid=" " path=" "]

```

!!! note
    If a presentation template uses the `Content` tag to render the current content, the same presentation template will be rendered. In turn, the current content will be rendered again, leading to an infinite loop. Do not use the tag to render current content to avoid this loop.

## Creating a Content tag

Refer to the following steps to create a `Content` tag:

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

        If selected, the context is set by the selected item. You can select an item by clicking **Select content** in the dialog. The selected item is then added to the tag with the `uuid=" "` parameter that points to the UUID of the content or site area. Alternatively, you can manually enter the `path=" "` parameter that points to the item's path. If the UUID or path parameter is specified, the context is always "selected", so you do not have to specify `context="Selected"`.

4.  Click **OK** to add the tag to your navigator design.

## Optional parameters

When you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`presentationPath="``NamePath"`|You can specify a specific presentation template to be used to render the content item or site area, in place of the default.|
|`renderMode="`"|You can define specific mappings of presentation templates to authoring templates based on the `renderMode`. <br> Specifying the `renderMode` allows you to select the presentation template mapped to the authoring template for that `renderMode`. This parameter accepts the following values: `summary`, `json`, `xml`, `html`, and `default`. You can use the Web Content Manager API to define further render modes. You can also create separate presentation templates for each type and select them when you create a site area template or content template.<br>-   **Default Presentation Template**: This presentation template is used to render an item within a Web Content Viewer portlet. <br>-   **Summary Presentation Template**: This presentation template is used when the summary render mode is used to render an item. <br>-   **JSON Record Presentation Template**: This presentation template is used when the JSON render mode is used to render an item. <br>-   **XML Document Presentation Template**: This presentation template is used when the XML render mode is used to render an item. <br>-   **HTML Document Presentation Template**: This presentation template is used when the HTML render mode is used to render an item as a complete web page.|

## Examples

Refer to the following examples of use cases for the `Content` tag.

- You can set a content item or site area with a specified UUID to render by specifying the site area or content that is linked to by an element named `MyLinkElement`.

    ```
    [Content uuid="[Element key='MyLinkElement' format='id']"]

    ```

- You can render a content item or site area from a predefined context. This context can be `portalContext`, `portletContext`, `portalMapping`, or `autofill`.

    ```
    [Content context="portalContext"]

    ```

- You can specify the content or site area you want to render using the name path. For example, to render `/Web Content/My Site Area/My Content`, use the following parameter.

    ```
    [Content path="/Web Content/My Site Area/My Content"]

    ```

- You can specify the content or site area you want to render relative to the name path of the current context.

    ```
    [Content path="./My Content"]

    ```

- You can specify the presentation template to render the content using the `renderMode` parameter. For example, to render the content with the **Summary Presentation Template** selected in the content item's authoring template, use the following parameter.

    ```
    [Content path="./My Content" renderMode="summary"]
    ```
