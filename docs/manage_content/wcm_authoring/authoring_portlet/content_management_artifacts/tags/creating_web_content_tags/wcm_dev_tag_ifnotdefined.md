---
title: If Not Defined tag
---




Use the If Not Defined tag to render something if an element is not defined on a content item or site area.

The format of an If Not Defined tag:

```
[IfNotDefined context="" type="" key=""]

[/IfNotDefined]
```

To create an If Not Defined tag:

1.  Click **Insert a Tag** from a presentation template, component, or element design field. The **Tag Helper** dialog opens.

2.  Select **If Not Defined** as the tag type.

3.  Select the source item type and context:

    If not set, the item type is `content` and the context is `current`.

    |Context and Item Type|`type="auto"`|`type="content"`|`type="sitearea"`|`type="parent"`|`type="top"`|
    |---------------------|-------------|----------------|-----------------|---------------|------------|
    |`context="Selected"`If selected, the context is set by the selected item. You select an item by clicking **Select**. This parameter is added to the tag as the `name=" "` parameter.|This parameter displays an element from the selected item.|This parameter displays an element from the selected content item. If a site area is selected, then nothing is displayed.|If the selected item is a site area, then This parameter displays the element from the site area.If the selected item is a content item, then This parameter displays the element from the parent site area of the content item.|This parameter displays an element from the parent of the selected item.|This parameter displays an element from the first item in the path of the selected item.|
    |`context="Current"`If selected, the context is set by the current item.|This parameter displays an element from the item currently being rendered.|This parameter displays an element from the current content item.If a site area is selected, then nothing is displayed.|If the item currently being rendered is a site area, this parameter displays the element from the current site area.If the item currently being rendered is a content item, this parameter displays the element from the parent site area of the content item.|This parameter displays an element from the parent site area of the item currently being rendered.|This parameter displays an element from the first item in the path of the item currently being rendered.|
    |`context="Autofill"`Use this option when the element that is referenced is determined by the search parameters of a menu, navigator, or taxonomy component. If the tag is not used within a menu, navigator, or taxonomy component, the context reverts to the current item.|This parameter displays an element from the item that is returned by a menu, navigator, or taxonomy component.|This parameter displays an element from a content item that is returned by a menu, navigator, or taxonomy component.If a site area is selected, then nothing is displayed.|If the current item returned by a menu, navigator, or taxonomy component is a site area, then the element from the site area is displayed.If the current item returned by a menu, navigator, or taxonomy component is a content item, then the element from the parent of the content item is displayed.|This parameter displays an element from the parent item of the item that is returned by a menu, navigator, or taxonomy component.|This parameter displays an element from the first item in the path of the item that is returned by a menu, navigator, or taxonomy component.|
    |`context="portalContext"`If selected, the context is set by the context of the current page. This option is only valid for content that is delivered by using a web content viewer portlet. <br> See the knowledge center topic called **Web content associations** for further information.|This parameter displays an element from the current page context item.|If the context of the current page is a content item, the element from the current content item is displayed.If the context of the current page is a site area, the element from the default content item of the site area is displayed.|If the context of the current page is a site area, the element from the site area is displayed.If the context of the current page is a content item, the element from the parent of the content item is displayed.|This parameter displays an element from the parent of the current page context item.|This parameter displays an element from the first item in the path of the current page context item.|
    |`context="portalMapping"`If selected, the context is set by the web content association of the current page. This option is only valid for content that is delivered by using a web content viewer portlet. <br>See the knowledge center topic called **Web content associations** for further information.|This parameter displays an element from the item that is selected as the default web content association of the page.|This parameter displays an element from the default content item of the site area that is selected as the default web content association of the page.|This parameter displays an element from the site area that is selected as the default web content association of the page.|This parameter displays an element from parent of the item that is selected as the default web content association of the page.|This parameter displays an element from the first item in the path of the item that is selected as the default web content association of the page.|
    |`context="portletContext"`If selected, the context is set by context of the current web content viewer portlet. This option is only valid for content that is delivered by using a web content viewer portlet.|This parameter displays an element from the current portlet context item.|If the context of the current portlet is a content item, the element from the current content item is displayed.If the context of the current portlet is a site area, the element from the default content item of the site area is displayed.|If the context of the current portlet is a site area, the element from the site area is displayed.If the context of the current portlet is a content item, the element from the parent of the content item is displayed.|This parameter displays an element from the parent of the current portlet context item.|This parameter displays an element from the first item in the path of the current portlet context item.|

    **Portal mapping versus portal context:** The portal mapping context is determined by the web content associations that are assigned to each page. This context is used for rendering when users first access a page. The context of the page can change when users interact with the content on the page. Each web content viewer on a page can be configured with an explicit context that overrides the rendering page context. The context of the portlet can also change if it is configured to receive links. When users click a link within the viewer that is configured to broadcast its links, the page context is updated. This new context is maintained until users click another link, or until users start a new session. When users start a new session, the original page context is used.

4.  Click **Select authoring template** to select an appropriate authoring template. Select an element from the list of available elements. If this element is not defined, the markup that is entered within the If Not Defined tag is rendered. This parameter is added to the tag as the `key=" "` parameter:

5.  Click **OK** to add the tag to your navigator design.


