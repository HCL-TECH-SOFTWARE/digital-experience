# Communication with dynamic menus

You can use dynamic menus for communication between portlets.

The following two communication techniques are based on dynamically generated menus that allow portal users to select a target destination for displayed data at run time:

-   **Live text based click-to-action**

    This technique works for JSR 168 and JSR 286 portlets only. The portal supports client side creation of dynamic action menus based on live text. This means that source data items on a portal page can be tagged with semantic HTML to serve as menu anchors. You can provide tagged source data by any type of HTML fragment on a page. This includes portlets, themes, or external content inside a rendering portlet. You can also define targets by using semantic HTML. In addition to such targets explicitly coded in HTML, the portal makes portlet events or cooperative portlet actions for portlets on the page automatically available as targets.



