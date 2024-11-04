# Editing Presentation Template in Presentation Designer

This section describes how to edit a presentation template in Presentation Designer using a sample scenario. 

To provide a comprehensive example, the goal is to have a **Content Section** presentation template for a **project page** which displays an **image of the project**, the **project title**, and **general information** by utilizing the capabilities of Presentation Designer.


## Prerequisites

-   **Create a content template with image, text, and rich text elements.** The image element is for the Project Image, the text element is for the Project Title, and the rich text element is for the Project Description. For more information on how to create a content template, see [Author Content Templates](../../../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_templates/author_content_templates.md).
    
    ??? note "Click to see sample created content template"
        *Content Section AT*:

        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Template.png)

-   **Create two or more content items using the created content template and add different content to the image, text, and rich text elements for each content item.** For more information on how to create a content item, see [Author Content Items](../../../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/author_content_items.md).

    ??? note "Click to see sample created content item"
        *Project Content - Home Living Furnishings*:
        
        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Metadata.png)

        *Image Element*:

        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Image_Element.png)
        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Image_DAM.png)

        *Text Elements (Text and Rich Text)*:
        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Text_Elements.png)

-   **Create a blank presentation template in the Authoring portlet**. For detailed steps, see [Access Presentation Designer](../access/index.md).

    ??? note "Click to see sample created presentation template"
        *Content Section PT*:

        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Presentation_Template_Empty_Markup.png)


## Editing a Presentation Template in Presentation Designer

Refer to the following steps to edit a presentation template in Presentation Designer.

### Editing the Presentation Template

1. Select the the newly created presentation template and click **More > Edit in Presentation Designer**.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_in_Presentation_Designer.png)

2. Drag and drop a **static container element** on the canvas and apply the following styles:
    
    ??? note "Click to view styles"
        **Dimensions**

        - Width: 1015px
        - Height: 565px

        **Spacing**

        - Padding top: 20px
        - Padding right: 20px
        - Padding bottom: 20px
        - Padding left: 20px

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Container_with_Styles.png)

3. Add a **static grid element** inside the container.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Grid.png)

4. The content section template only needs a **1 x 2 grid**. The idea is to display an image on the first column and details on the second column. To do this, apply the following styles to the grid:

    ??? note "Click to view styles"
        **Layout**

        - Rows: 1
        - Columns: 2
        - Row gap: 4px
        - Column gap: 4px

        **Dimensions**

        - Width: 910px
        - Height: 400px

        **Spacing**

        - Padding top: 8px
        - Padding right: 8px
        - Padding bottom: 8px
        - Padding left: 8px

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Apply_Grid_Styles.png)

5. On the **Add Items** panel, set the element **Source** to **Content elements**. In the **Content template** field, search for and select the content template prepared in [Prerequisites](#prerequisites).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Search_Content_Template.png)
    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Select_Content_Template.png)

6. Drag and drop the **Project Image** (Image Content Element) on the first column of the **grid**. Then, drag and drop the **Project Title** (Text Content Element) and **Project Description** (Rich Text Content Element) on the second column of the grid.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Content_Elements_in_Grid.png)

7. Add a **static container element** inside the second column of the **grid**. This will serve as the container for the project details.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Container_in_Grid.png)

8. Drag and drop the **Project Title** (Text Content Element) and **Project Description** (Rich Text Content Element) inside the container added in Step 7. Use the **Move** icon for each user element and apply the following styles to their parent container:

    ??? note "Click to view styles"
        **Dimensions**

        - Width: 445px
        - Height: 390px

        **Spacing**

        - Padding top: 5px
        - Padding right: 20px
        - Padding bottom: 20px
        - Padding left: 50px

    ???+ info "Related information"
        - [Element Actions](../usage/user_elements.md#element-actions)

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Move_Items_and_Apply_Container_Style.png)

9. Select the **Project Title** (Text Content Element) and apply the following styles:

    ??? note "Click to view styles"
        **Typography**

        - Paragraph Format: Normal
        - Font: Verdana
        - Font size: 30px
        - Font weight: Bolder

        **Appearance**

        - Text color: #000000

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Text_Content_Element_with_Styles.png)

10. Drag and drop a **static text element** in between the **Project Title** (Text Content Element) and **Project Description** (Rich Text Content Element).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Insert_Static_Text_Element.png)

11. Enter "General Information" in the **static text element** and apply the following styles:
    
    ??? note "Click to view styles"
        **Typography**

        - Paragraph Format: Normal
        - Font: Verdana
        - Font size: 20px
        - Font weight: 500

        **Appearance**

        - Text color: #EF1212

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Input_Text_Content_and_Apply_Styles.png)

12. In the **Add Items** panel, set the element **source** to **Property tag** and drag and drop the **Last modified date** property tag under the **Project Description** (Rich Text Content Element).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Insert_Property_Tag_Date.png)

13. Click the **Save** button to save the changes to the presentation template by clicking the **Save** button. The message "Presentation Template saved successfully." appears on the screen.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Save_Presentation_Template.png)

    ??? note "Click to view the markup generated after saving."
        *View from Authoring portlet:*

        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Markup_Generated.png)

14. Click the **Back** button to return to the Authoring portlet and [preview the presentation template](#previewing-the-presentation-template).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Click_Back_Button.png)


### Previewing the Presentation Template

To see the output of the presentation template edited in Presentation Designer, you can use the **Preview** feature from the **Authoring portlet**.

1. From the Authoring Portlet, select the **Content Section PT** and click **Preview**.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_from_Authoring.png)

2. Select any **content item** created in [Prerequisites](#prerequisites) to use as the rendering context during preview then click **OK**.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Select_Content_Item_for_Preview.png)

3. See the preview generated in a new tab:

    The following is a sample preview for **Project Content - Living Home Furnishings**:

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Home_Furnishings.png)

    See the following sample previews for other content items:

    *Project Content - Architectural Concept*:

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Architectural_Concept.png)

    *Project Content - Classic Studio Ceramics*:

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Studio_Ceramics.png)


### Sample Presentation Templates

With Presentation Designer, you can can create a wide range of custom designs and template layouts tailored to your specific needs. The intuitive drag-and-drop interface, combined with real-time styling, helps content managers to take full control of their designs. This section contains screenshots showing possible presentation templates you can build using Presentation Designer.

-   **Hero Banner**

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Hero_Banner.png)


-   **Cards with Image**

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Cards_with_Image.png)


- **Content Section**

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Content_Section.png)

    *Preview:*
    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Studio_Ceramics.png)


-   **Recent Items Template**

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Recent_Items.png)

    *Preview:*
    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Recent_Items_Preview.png)


???+ info "Related information"
    - [Presentation Designer UI](../access/index.md#the-presentation-designer-ui)
    - [User Elements](../usage/user_elements.md)
    - [Styling Options](../usage/styling_options.md)