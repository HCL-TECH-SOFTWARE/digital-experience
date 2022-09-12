# Override pattern for styles

Content Template Catalog defines most content styles globally. It then overrides the content style for the layout containers first and then for particular component types.

The pattern is used to change the basic properties of the style quickly, like the font family or color, while still allowing for specific formatting in different parts of the page. For example, the `itemTitle` style displays content titles. The global definition of this style sets up the color, link behavior, font face, and a default font size. When `itemTitle` is used in the sidebar column, Content Template overrides the style and then overrides it again for particular widgets. For example, in the body on a details page, the `itemTitle` style is much larger.


