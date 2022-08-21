# Class attributes for portlets on static pages

When you place a portlet on a static HTML page to be rendered by the portal, use a suitable CSS file to format the portlet. The CSS file makes use of the portlet microformat. You can make use of this microformat if you want to render portlets on your static HTML page with a skin of your choice. When you write the static page, you can use CSS or JavaScript techniques to convert the microformat into a friendly user interface. The portlet references in the static HTML page are replaced by the content of the portlet and the portlet microformat.

Refer to the following list of class attributes for more information. An example of a portlet rendered from HTML is also provided.

-   **portlet-window**

    This value of the `class` attribute identifies the containing `<div>` tag for the portlet window as it was defined by the Web designer when the static page was written. The style attribute and the name attribute contain the same information that was provided by the author of the page on the `<div>` element that referenced the portlet. The ID attribute contains the object ID of the window. Refer to the following example for rendering a page from full HTML markup:

    ```
    <html>
       <head>
          <title>Sample Static Page</title>
       </head>
       <body>
          <p>This is a static page example.</p>
          <p>Welcome portlet</p>
          <div class="portlet-container" name="portletContainer1">
             <div class="portlet-window" name="portletWindow1" 
                  style="portlet-definition:wps.p.Welcome To WebSphere Portal">
             </div>
          </div>
       </body>
    </html>
    ```

-   **portlet-info**

    This value of the `class` attribute introduces the metadata section of the portlet. All metadata is encapsulated in this container so that it can be hidden it by CSS. The `xoxo` class denotes that this contains a list of items.

-   **portlet-title**

    This value of the `class` attribute represents the localized title of the portlet. The `lang` attribute identifies the actual locale.

-   **portlet-actions**

    This value of the `class` attribute lists the different portlet actions or operations that can be invoked in the portlet window.

    **Note:** Such operations are not necessarily actions in the sense of HTTP. Instead, some actions are safe interactions, whereas others can be unsafe, as they modify the server. In the list of actions each interaction is either represented as a link to denote a safe interaction or as a `form` to denote an unsafe interaction.

-   **portlet-action**

    This value of the `class` attribute describes the actual actions or operations. Those actions that would result in an idempotent operation are denoted by the selected attribute. In addition each action is classified by an action specific attribute to allow CSS to style these actions, for example, by adding action specific icons. The list of possible actions is computed on the server by making use of the Operations Feed. This feed is extensible, therefore new operations can be added over time.

-   **portlet-window-body**

    This value of the `class` attribute denotes the body of the portlet.

-   **iw-iWidiget**

    This value of the `class` attribute identifies the beginning of the microformat for placing an iWidget instance on a static page. Additional information about the iWidget microformat for including iWidgets into a broader set of markup, such as a portal page, provided by the iWidget specification and on the topic about Class attributes for iWidgets on static pages.

-   **selected**

    This value of the `class` attribute identifies a selected item, either the portlet itself or an action. If it appears on the `<div>` tag for the portlet window, this means that the portlet was the target of the interaction that produced the page.

-   **portal-drag-source**

    This is an optional class on the portlet window. It denotes that this portlet window can be dragged around on the screen by users. This attribute is only valid if the portlet window is part of a modifiable portlet container, and if the user has the rights to modify the page and the container is not locked. Refer to the Container Microformat to see how a drop target is represented and how the actual drag and drop operation can be performed.

    **Note:** A drag and drop action is triggered from the client side, but is executed on the server.

-   **xoxo**

    This attribute denotes that the following is a list of items.


## Example of rendering a portlet from HTML

The following is an example of a microformat representation for a portlet window on a page:

```
<div class='portlet-window' id='7_CGAH47L00OGRB02DA9LR6H1024' name='window2' >
   <ul class='xoxo portlet-info' >
      <li class='portlet-title' lang='en'>
         PetStorePortlet
      </li>
      <li class='portlet-actions' >
         Actions
         <ul class='xoxo portlet-action' >
            <li class='portletoperation-view selected' >
               <a href='?uri=wp.operations:onPortletModeView
                  (7_CGAH47L00OGRB02DA9LR6H1024)'
                  rel='view' >Back</a>
            </li>
            <li class='portletoperation-normal selected' >
               <a href='?uri=wp.operations:onWindowStateNormal
                  (7_CGAH47L00OGRB02DA9LR6H1024)' 
                  rel='normal' >Restore</a>
            </li>
            <li class='portletoperation-minimized' >
               <a href='?uri=wp.operations:onWindowStateMinimized
                  (7_CGAH47L00OGRB02DA9LR6H1024)' 
                  rel='minimized' >Minimize</a>
            </li>
            <li class='portletoperation-maximized' >
               <a href='?uri=wp.operations:onWindowStateMaximized
                  (7_CGAH47L00OGRB02DA9LR6H1024)' 
                  rel='maximized' >Maximize</a>
            </li>
            <li class='portletoperation-delete_portlet' >
               <form method='POST' action='?uri=wp.operations:onDeletePortlet
                     (7_CGAH47L00OGRB02DA9LR6H1024)' 
                     rel='delete_portlet' >Delete</form>
            </li>
         </ul>
      </li>
   </ul>
   <div class='portlet-window-body' >
   </div>
</div>

```

**Parent topic:**[Creating a static page](../dev/spa_define_page.md)

**Related information**  


[The Navigation portlet](../dev/spa_portlet_nav.md)

[The Breadcrumb Trail portlet](../dev/spa_portlet_brdcrmb.md)

[The SPA Resource Addressability portlet](../dev/spa_portlet_pagelist.md)

