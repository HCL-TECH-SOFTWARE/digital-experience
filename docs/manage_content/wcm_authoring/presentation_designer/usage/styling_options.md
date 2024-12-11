# Styling options in Presentation Designer

Styling options allow users to make the elements on the canvas presentable. Styles enable an interactive design experience that lets users see their style changes reflected on the canvas in real-time. This topic outlines the different styling options you can do in the **Style** panel of Presentation Designer.

To access Presentation Designer and understand its user interface, refer to the **[Access Presentation Designer](../access/index.md)** topic.

To learn how to use the different user elements in Presentation Designer, refer to the **[User Elements in Presentation Designer](../usage/user_elements.md)** topic. 


## Style panel

The styling options change based on the specific user element selected on the canvas. To check the available styling options for each element on your canvas, click an element and check the rendered style options in the **Style** panel.

See the following sample styling options for a static text element:

![](../../../../assets/HCL_Presentation_Designer_Styling_Options_Static_Text_Sample.png)

See the following sample styling options for a static container element:

![](../../../../assets/HCL_Presentation_Designer_Styling_Options_Static_Container_Sample.png)


## Inline styles

In Presentation Designer, styling options are applied directly to the selected elements through inline styles. 

See the following sample static text element with styles applied in Presentation Designer:

![](../../../../assets/HCL_Presentation_Designer_Styling_Options_Sample_Styles_Applied.png)

See the following sample markup generated after saving the presentation template:

![](../../../../assets/HCL_Presentation_Designer_Styling_Options_Sample_Styles_Markup.png)

See the following sample preview displayed in a browser:

![](../../../../assets/HCL_Presentation_Designer_Styling_Options_Sample_Styles_Preview.png)


## Style sections

Style sections in Presentation Designer refer to categorized areas where users can adjust specific style properties of the selected user element on the canvas. Each section focuses on a different aspect of an element's design, helping users navigate the **Style** panel and apply the adjustments they need for each element.

### Dimensions
The **Dimensions** section allows users to control the size and scaling of elements within the design, ensuring they fit well within their containers and across various screen sizes.

- **Width**: Adjusts the width of the selected element.
- **Height**: Adjusts the height of the selected element.
- **Min width**: Defines the minimum width the element can be resized to.
- **Min height**: Defines the minimum height the element can be resized to.
- **Max width**: Defines the maximum width the element can be resized to.
- **Max height**: Defines the maximum height the element can be resized to.


### Spacing
**Spacing** properties allow users to control the space around and within elements, ensuring proper layout structure and distance between each element.

- **Margin**: Controls the space outside the element, determining how far an element is from adjacent ones.
- **Padding**: Controls the space between the content and its border inside the element.


### Borders
The **Border** section allows users to customize the border around elements, enhancing their appearance and creating a clear visual structure.

- **Border style**: Specifies the element's border type. Possible values include solid, dashed, and dotted.
- **Border radius**: Controls the roundness of an element's corners.
- **Border color**: Specifies an element's border color.
- **Border width**: Sets the thickness of an element's border.


### Appearance
The **Appearance** section allows users to change the colors of elements to make them stand out or blend into the overall design.

- **Background color**: Changes the background color of the selected element.
- **Text color**: Changes the color of any text within the element.


### Layout
The **Layout** section allows users to control the structural positioning and setup of the element relative to other elements on the canvas, ensuring proper arrangement and organization.

- **Grid setup (Rows and Columns)**: Defines the structure for grid layouts, allowing users to specify how content is arranged into rows and columns. The layout uses **fractional units (fr)** to proportionally distribute space within the grid.
  - **Rows**: Specifies the number of horizontal sections (rows) in the grid, with each row's height defined using the **fr** unit (for example, 1fr, 2fr).
  - **Columns**: Specifies the number of vertical sections (columns) in the grid, with each column's width defined using the **fr** unit (for example, 1fr, 3fr).
  - **Column gap**: Sets the space between columns, defining the separation between elements in different columns.


### Position
The **Position** section allows users to precisely control the placement of elements on the canvas, ensuring accurate positioning based on the layout's needs.

- **Order of elements (Z-Index)**: Defines the stacking order of elements, determining which elements appear in front or behind.
- **Position**: Sets an element’s position. Possible values include static, relative, absolute, sticky, and fixed.
- **Top**: Specifies the top position of the element relative to its parent.
- **Bottom**: Specifies the bottom position of the element relative to its parent.
- **Left**: Specifies the left position of the element relative to its parent.
- **Right**: Specifies the right position of the element relative to its parent.


### Typography

The **Typography** section allows users to customize text-based elements, giving them full control over the font, size, and styling of text. This ensures readability and alignment with design standards.

- **Paragraph format**: Defines the paragraph style to be used such as headings and body text.
- **Font**: Defines the font family used for the text.
- **Font size**: Adjusts the size of the font.
- **Font weight**: Controls the boldness of the text.
- **Text decoration**: Adds text formatting such as underlines, overlines, and strikethroughs.
- **Wrap**: Controls whether long lines of text wrap or remain on a single line.
- **Capitalization**: Adjusts text to be uppercase, lowercase, or sentence case.
