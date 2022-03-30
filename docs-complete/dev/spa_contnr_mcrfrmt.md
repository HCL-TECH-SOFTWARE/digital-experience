# Class attributes for a portlet container on static pages 

To render a portlet container on a static page, you use a CSS file that makes use of the container microformat. One of the benefits is that users with the required access rights can later move the portlets by drag and drop.

To place a portlet container on a static page, use a style file that makes use of the container microformat. Refer to the following list of class attributes and the example of rendering a portlet container from HTML.

-   **portlet-container**

    This value of the `class` attribute identifies the containing `<div>` tag for a portlet container as it was defined by the Web designer when the static page was written. The `ID` attribute contains the Object ID of the container, which is globally unique in the portal. The `name` attribute contains a name for the container that is unique only in the scope of the hosting page. In static page aggregation the HTML page designer determines this name.

-   **portal-drop-target**

    This value of the `class` attribute identifies the container as a drop target of a drag and drop operation. Only modifiable containers use this class attribute.

-   **drop-handler**

    This value of the `class` attribute identifies the `form` that represents the callback handler for drag and drop. The action contains a URL that uniquely identifies the drop target. You can add additional hints and the drag sources dynamically to the form by using JavaScript.


For the drag source, use the attribute from the portlet microformat when defining the portlet:

-   **portal-drag-source**

    This is an optional class on the portlet window. It denotes that this portlet window can be dragged around on the screen by users. This attribute is only valid if the portlet window is part of a modifiable portlet container, and if the user has the rights to modify the page and the container is not locked. Refer to the Container Microformat to see how a drop target is represented and how the actual drag and drop operation can be performed.

    **Note:** A drag and drop action is triggered from the client side, but is executed on the server.


## Example of rendering a portlet container from HTML

The following is an example of a microformat representation for a portlet container on a page:

```
<div id="content-area">
   <div class='portlet-container portal-drop-target' 
        id='7_CGAH47L0008K402D2V3F7I2005' name='c1' >
      <form class='drop-handler' enctype='multipart/form-data' method='POST'
            action='/wps/mycontenthandler/!ut/p/dnd/lm:
                 oid:7_CGAH47L0008K402D2V3F7I2005@
                 oid:6_CGAH47L0008K402D2V3F7I2000?uri=dnd%3alm%3a
                 oid%3a7_CGAH47L0008K402D2V3F7I2005%40
                 oid%3a6_CGAH47L0008K402D2V3F7I2000'>
         <input type='hidden' name='_charset_'>
      </form>
   </div>

   ... the actual portlets come here

</div>

```

**Parent topic:**[Creating a static page ](../dev/spa_define_page.md)

