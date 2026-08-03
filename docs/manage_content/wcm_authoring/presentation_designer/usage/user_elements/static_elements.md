# Static elements

Static elements are predefined elements that display content exactly as it looks, ensuring a What You See Is What You Get (WYSIWYG) experience. After you add these elements in your presentation template, they will not change, even if you apply them to different content items. This consistency helps users create organized layouts with confidence, knowing that the design remains the same regardless of the content.

![](../../../../../assets/HCL_Presentation_Designer_Static_Elements_Panel.png)

## Container

The Container element (```<div>...</div>```) serves as a foundational block for organizing and structuring content. This element allows users to group elements together. You can resize the container through the **Style items** panel by setting its width and height to fit different design needs. You can also apply other styling options to a container and add other user elements inside it.

![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Container.png)
![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Container_Applied_Styles.png)

## Text

Static text elements (for example, ```<p>Content goes here</p>```) are used to display text content which you can also edit on the canvas itself. These elements can include headers, paragraphs, and any other textual information. You can apply formatting and styling from the **Style items** panel to enhance readability and visual appeal. To edit the text content, click the text element and enter your desired text.

![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Text.png)

- The first line of text shows the placeholder text that appears when you drag and drop a static text element on the canvas. 
- The second line of text is a static text element with actual text content after user input. 
- The third line of text is a static text element with actual text content and applied styles.

!!! note
    Placeholder text for the static text element is only a visual representation in Presentation Designer. It represents an empty value for the text content. The words "Static text element" is not saved in the actual markup.

## Link

Static links (for example, ```<a href="https://example.com">Click Here</a>```) enable users to create clickable hyperlinks to other websites or resources. You can edit the display text for the link element the same way as editing a text element. Different styling options are also available.

![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Link.png)

- The first line of text shows the default display text that appears when you drag and drop a static link element on the canvas.
- The second line of text shows the placeholder text that appears when you remove the default display text of the link element.
- The third line of text is a static link element with modified display text content after user input.
- The fourth line of text is a static link element with modified display text content and applied styles.

To set the `href` attribute, click the **Configure** button and enter the URL.

![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Link_Configure.png)

!!! note
    When you click a static link element on the canvas, you will not be redirected to the configured URL. To test the link, preview the presentation template in the Authoring portlet.

## Button

The Button element (for example, `<a href="..." class="pd-button-defclass">`) functions as a pre-styled link configured as a button. Use it to add call-to-action links without writing markup manually.

![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Button_Sample.png)

Select the button on the canvas to edit text inline. You can also configure the destination URL in the **Button configuration** menu, and customize button styles using options in the **Style items** panel.

![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Button.png)

!!! note
    Selecting the button element on the canvas does not redirect to the configured URL. Preview the presentation template to test the link.

## Image

Static images (for example, ```<img src="image-url.jpg" alt="Description"/>```) are used to render visuals from various sources. You can add images in Presentation Designer using a URL, or using the Digital Asset Management (DAM) feature of HCL DX:

1. Drag an **Image** element onto the canvas.
2. Select **Configure** on the element toolbar.
3. Select an option from the **Asset source** dropdown:

    - **Import from URL:** Enter the image path directly in the Add URL field. For example: `https://picsum.photos/id/106/300/200`.

    - **HCL DAM:**

        !!!note
            If the DAM picker is not configured or available in the environment, the **HCL DAM** source option appears disabled.

        1. Choose the **Select image** button that appears.

            ![](../../../../../assets/HCL_Presentation_Designer_DAM_Picker_Select_Image_Button.png)

        2. Browse and select an asset inside the DAM Picker dialog.

            ![](../../../../../assets/HCL_Presentation_Designer_DAM_Picker_Select_Image.png)

        3. Choose **Select** to apply the image to the canvas.

4. (Optional) Enter an alternate text for the image in the **Alternate text** field.

!!! note
    - The static image element displays a placeholder image icon when there is no image URL set. This placeholder is only a visual representation in Presentation Designer and no image source is saved.
    - Switching the asset source back to URL clears DAM-specific values to prevent stale data.
    - The selected image label displays only for DAM-compatible image URLs.
    - Custom styles can be applied to DAM images through the **Style items** panel after selection.

## Grid

The **Grid** element (for example, ```<div class="grid">...</div>```) allows for a structured layout of multiple elements in rows and columns. This element is useful for organizing content in a visually appealing way, enabling practitioners to customize the grid structure to fit their content needs.

To manage responsive layouts, you can customize row and column counts for each device context, configure **Auto flow** settings to control how content wraps on smaller screens, and apply layout changes dynamically using device-specific stylesheet media blocks (`@media` rules).

![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Grid.png){: style="display: block; margin: 0 auto;"}

!!! note
    The **Grid** element displays a 1 x 3 grid by default. You can adjust the number of rows and column in the **Style items** panel. Different styling options for the grid element are also available.

1. Drag a **Grid** element onto the canvas.
2. Enter the following values in the **Style items** panel:

    ![](../../../../../assets/HCL_Presentation_Designer_Grid_Styles.png)

    **Layout**

    - **Rows**: 3
    - **Columns**: 3

    **Dimensions**

    - **Height**: 500px

    **Spacing**

    - **Padding top**: 4px
    - **Padding right**: 4px
    - **Padding bottom**: 4px
    - **Padding left**: 4px

3. Add static text to each cell.

    ![](../../../../../assets/HCL_Presentation_Designer_Grid_Add_Text.png)

4. Configure the **Auto flow** and **Area layout** sections.

    ![](../../../../../assets/HCL_Presentation_Designer_Grid_new_sections.png)

    - **Auto flow:** Controls how grid elements are distributed within the layout. Options include **Row**, **Column**, **Row dense**, and **Column dense**.
    - **Area Layout:** Provides a count-based layout override that automates responsiveness for **Tablet** and **Mobile**. It dynamically balances rows and columns based on the specified track count to keep cells uniform without manual calculations.

### Device viewports

**Grid** properties adapt dynamically to the active device context. Use the viewport switcher at the top of the canvas to configure and preview how these settings behave across different screen sizes:

- The **Desktop** serves as the baseline layout. It disables the **Area layout** option and uses your primary **Rows** and **Columns** settings. Changing the **Auto flow** direction alters the sequence flow. For example:

    **Row** sequences elements from left to right.

    ![](../../../../../assets/HCL_Presentation_Designer_Grid_area_layout_row.png)

    **Column** sequences elements from top to bottom.

    ![](../../../../../assets/HCL_Presentation_Designer_Grid_area_layout_column_in_desktop.png)

- Switching to **Tablet** view enables **Area layout**, which initially inherits your baseline settings.

    ![](../../../../../assets/HCL_Presentation_Designer_Grid_area_layout_column_in_tablet.png)

    Changing either the **Rows** or **Columns** count automatically recalculates the opposite value to maintain a uniform layout balance. For example, reducing **Rows** to `2` automatically scales **Columns** to `5` to balance the remaining cells uniformly.

    ![](../../../../../assets/HCL_Presentation_Designer_Grid_area_layout_column_in_tablet_change_value.png)

- Switching to **Mobile** view resets properties to the **Desktop** baseline. Adjustments made in **Tablet** view do not carry over.

    ![](../../../../../assets/HCL_Presentation_Designer_Grid_area_layout_row_in_phone.png)

    Reducing the **Columns** count forces the grid tracks to recalculate and stack content vertically for smaller screens. For example, changing **Columns** to `1` automatically updates **Rows** to `9`.

    ![](../../../../../assets/HCL_Presentation_Designer_Grid_area_layout_row_in_phone_change_column.png)

!!!note
    - **Area layout** values calculate automatically from device-specific row and column settings.
    - In **Tablet** and **Mobile** views, **Area layout** overrides rows and columns without modifying the baseline **Desktop** configuration.
    - Layout modifications saved within a specific device context persist independently without affecting other viewports.

## Video

The Video element (for example, `<video>` or `<iframe>`) adds video content to presentation templates without manual HTML editing. You can configure the source URL in the **Video configuration** menu, and customize properties such as **Width**, **Height**, **Margins**, **Padding**, and **Borders** using the **Style items** panel.

![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Video_Sample.png)

The Video element operates in three render states on the canvas:

- Displays a 300x200 pixel gray box with a video icon when sources are empty or the video flag is broken. The placeholder resets when entering a URL in the **Video configuration** menu.
- Supports native video formats, such as MP4 files supplied from an external URL or an HCL DAM video asset URL.
- Embeds YouTube videos automatically using pattern matching for the following formats:
    - `[youtube.com/watch?v=](https://youtube.com/watch?v=)`
    - `[youtube.com/embed/](https://youtube.com/embed/)`
    - `youtu.be/`

![](../../../../../assets/HCL_Presentation_Designer_Static_Element_Video.png)

!!! note
    YouTube Shorts URLs (`[youtube.com/shorts/](https://youtube.com/shorts/)`) are not supported. Unrecognized URLs render in the placeholder state.
