# Customizing drop targets on the page 

In edit mode, portal renders drop targets for all positions where a portlet can be added to the page. In the default theme, these drop targets are hidden unless an item is dragged over the surrounding container.

The markup for drop targets is defined in a file that is named DropTarget.html, which lies in the current skin folder in WebDAV. For example, fs-type1/themes/YourThemeName/skins/Hidden/DropTarget.html

The markup in DropTarget.html is always surrounded by a `<div>` tag, representing the drop target control component. Inside the `<div>` tag is an anchor tag that references the control-component at the position where a dropped item is inserted. For example:

```
<div class="portlet-window component-control portal-drop-target id-ID\_of\_control\_component\_at\_insert\_position">
<a class="portlet-window-ref" href="#ID\_of\_control\_component\_at\_insert\_position"></a>

        <DropTarget.html>

</div>
```

The styling for the CSS classes can be found in the default\_edit.css in fs-type1/themes/YourThemeName/css/default/default\_edit.css.

Portal also injects the following CSS classes during a drag operation:

-   When an item is dragged over a column or row container, the container gets the CSS class `ibmDndDropZonesActive`.
-   When an item is dragged over a drop target, the drop target gets the CSS class `ibmDndDropZoneOver`.

The following list shows CSS selector examples and the resulting action:

-   `div.ibmDndDropZonesActive div.portal-drop-target` selects a drop target inside the currently active container, either a row or a column.
-   `div.ibmDndDropZonesActive div.portal-drop-target.ibmDndDropZoneOver` selects a drop target where an item is currently dragged over.

A theme developer can customize the drop zones either by editing the default\_edit.css or by modifying the DropTarget.html, or both.

Firefox currently does not support automatic scrolling during a drag-and-drop operation. There are plug-ins available to add this support to Firefox.

**Parent topic:**[Drag-and-drop ](../dev-theme/themeopt_cust_dnd.md)

