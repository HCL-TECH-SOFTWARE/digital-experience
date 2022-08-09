# Customizing layouts

To change the page width or column widths, you change the stylesheet. To add extra layouts, for example to further split up the main column, or to add columns into the other areas of the page, create extra layouts.

Consider these best practices when customizing layouts:

-   The overall page width can be changed by modifying the `contentConstrain` style.
-   Individual containers are controlled by the following styles: `split42Main`, `split42Right`, `split121Left`, `split121Main`, and `split121Right`. These styles have specific widths to split the main area into columns.
-   The easiest way to create a new layout is to copy one of the current Content Template Catalog layouts, rename the folder, and then upload it through WebDAV as a new layout.
-   If additional styles areas are required for a new layout, typically to support different column widths, add the additional styles to the stylesheet and reference them from the layout HTML.

Refer to the HCL Digital Experience documentation for details on creating and modifying layouts.

**Parent topic:**[Customizing sites built with Content Template](../ctc/ctc_design_custom.md)

