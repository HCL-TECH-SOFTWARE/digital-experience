# Customizing block components

When new components are required for the page that are not lists, use the Block pattern instead.

Consider these best practices when customizing block components:

-   Copying a similar block component is the easiest way to create a new one.
-   Content Template Catalog blocks render the header and footer components. This technique is used to render nothing if the block is empty. To render a block conditionally, put tests around the header and footer rendering to hide them if no content is available.
-   Content Template lists contain fragments for including the header and footer. You can use the same fragments in custom block components.

-   **[Customizing headers and footers for block components](../ctc/ctc_design_custom_comp_hdr.md)**  
You can create new headers or footers for your component configurations. These can then be selected in a Block item.

**Parent topic:**[Customizing component designs](../ctc/ctc_design_custom_comp.md)

