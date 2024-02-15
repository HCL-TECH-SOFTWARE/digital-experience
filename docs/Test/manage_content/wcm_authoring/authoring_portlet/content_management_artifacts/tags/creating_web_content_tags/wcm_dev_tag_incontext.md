# In Context tag

The InContext tag renders a tag body within a specified rendering context. The new rendering context can be specified as a predefined context by using a UUID, or by path.

The format of an `InContext` tag:

```
[InContext context=" "]

[/InContext]
```

To create an `InContext` tag:

1.  Click **Insert a Tag** from a presentation template, component, or element design field. The **Tag Helper** dialog opens.

2.  Select **In Context** as the tag type.

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


## Usage examples

Extra text, HTML, or tags must be added between the `[InContext]` and `[/InContext]` tags. The text and tags added here is what is rendered in the specified context.

For example, setting a context with a specified UUID to render `MyElement` in the context of the site area or content that is linked to by `MyLinkElement`:

```
[InContext uuid="[Element context='current' type='content' key='MyLinkElement' format='id']"]
[Element context="current" type="auto" key="MyElement"]
[/InContext]
```

You can render the tag body in a predefined context. This context can be `portalContext`, `portletContext`, `portalMapping`, or `autofill`:

```
[InContext context="portalContext"]
[Element context="current" type="auto" key="MyElement"]
[/InContext]
```

The new context can be specified by using the name path. For example, to render MyElement in the context of /Web Content/My Site Area/My Content:

```
[InContext path="/Web Content/My Site Area/My Content"]
[Element context="current" type="content" key="MyElement"]
[/InContext]
```

The new context can be specified relative to the name path of the current context:

```
[InContext path="./My Content"]
[Element context="current" type="content" key="MyElement"]
[/InContext]
```
