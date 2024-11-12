# Presentation Designer limitations

Take note of the following limitations when using Presentation Designer:

- Presentation Designer can only be used to edit presentation templates. For more information, refer to the [Edit Presentation Template in Presentation Designer](../../presentation_designer/usage/edit_presentation_template.md) topic.
- You cannot reuse presentation templates. It is required to create a new template for each design.
- The following features are currently not supported:
    - Locking of a presentation template while being edited in Presentation Designer.
    - Using a Virtual Portal.
    - Undoing and redoing changes.
    - Previewing the template in Presentation Designer. Currently, you can only generate a preview through the Authoring portlet.
    - Reusing of styles from a theme.
    - Adding any script or custom markup.
    - Using external CSS. All styles are applied as inline styles and different orientations through breakpoints are not yet supported. For more information, refer to the [Styling Options in Presentation Designer](../../presentation_designer/usage/styling_options.md) topic.

- The following features are not fully supported:
    - Right-to-Left layout, with certain elements not fully optimized for languages that require this layout.
    - WCM tags and their attributes. Presentation Designer is currently supporting different user elements. For more information, see the [User Elements in Presentation Designer](../../presentation_designer/usage/user_elements.md) topic.
    - Translation to other languages. English is the default language used in Presentation Designer.
    - The fixed position style of the user element may result in overlap with the header under certain conditions, rather than remaining within the intended canvas boundary. This behavior is observed when setting the element's position to fixed with a top value of 10px in the styling properties. The overlap occurs because the canvas utilizes a root div structure integrated with the document's HTML markup, meaning boundaries may not be fully isolated. While using an iframe could more effectively isolate boundaries, this option is currently not implemented.





