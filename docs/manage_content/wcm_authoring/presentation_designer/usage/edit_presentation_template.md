# Editing a presentation template in Presentation Designer

This section describes how to edit a presentation template in Presentation Designer using a sample scenario. 

To provide a comprehensive example, the goal is to have a **Content Section** presentation template for a **project page** which displays an **image of the project**, the **project title**, and **general information** by utilizing the capabilities of Presentation Designer.


## Prerequisites

-   Create a **content template** with image, text, and rich text elements. The image element is for the Project Image, the text element is for the Project Title, and the rich text element is for the Project Description. For more information on how to create a content template, see [Author Content Templates](../../../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_templates/author_content_templates.md).
    
    
      See the following sample content template:

       ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Template.png)

-   Create two or more **content items** using the created content template and add different content to the image, text, and rich text elements for each content item. For more information on how to create a content item, see [Author Content Items](../../../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/author_content_items.md).

      See the following sample content item:
        
       ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Metadata.png)

       *Image element*:

       ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Image_Element.png)
       ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Image_DAM.png)

       *Text elements (Text and Rich Text)*:
       ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Text_Elements.png)

-   Create a blank **presentation template** in the Authoring portlet. For detailed steps, see [Accessing Presentation Designer](../access/index.md).

       See the following sample presentation template:

       ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Presentation_Template_Empty_Markup.png)


## Editing a presentation template

Refer to the following steps to edit a presentation template in Presentation Designer.

1. From the **Authoring portlet**, select the newly created presentation template then click **More > Edit in Presentation Designer**.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_in_Presentation_Designer.png)

2. Drag and drop a **static container element** on the canvas then enter the following values in the **Style** panel.
    
      **Dimensions**

      - **Width**: 1015px
      - **Height**: 565px

      **Spacing**

      - **Padding top**: 20px
      - **Padding right**: 20px
      - **Padding bottom**: 20px
      - **Padding left**: 20px

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Container_with_Styles.png)

3. Add a **static grid element** inside the container.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Grid.png)

4. Click the **Style** panel and enter the following values to create a **1 x 2 grid**. The content section template needs a **1 x 2 grid** to display an image on the first column and the details on the second column.

      **Layout**

      - **Rows**: 1
      - **Columns**: 2
      - **Row gap**: 4px
      - **Column gap**: 4px

      **Dimensions**

      - **Width**: 910px
      - **Height**: 400px

      **Spacing**

      - **Padding top**: 8px
      - **Padding right**: 8px
      - **Padding bottom**: 8px
      - **Padding left**: 8px

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Apply_Grid_Styles.png)

5. Click the **Add Items** panel and set the element **Source** to **Content elements**.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Search_Content_Template.png)

6.  In the **Content template** field, search and select the content template prepared in [Prerequisites](#prerequisites).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Select_Content_Template.png)

7. Drag and drop the following elements on the **grid**: 
    1. The **Project Image** (Image Content Element) in the first column. 
    2. The **Project Title** (Text Content Element) in the second column.
    3. The **Project Description** (Rich Text Content Element) in the second column.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Content_Elements_in_Grid.png)

8. Add a **static container element** inside the second column of the **grid**. This will serve as the container for the project details.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Container_in_Grid.png)

9. Drag and drop the **Project Title** (Text Content Element) and **Project Description** (Rich Text Content Element) inside the **static container element**.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Move_Content_Elements_in_Container.png)

    ???+ info "Related information"
        - [Element Actions](../usage/user_elements.md#element-actions)

10. Select the **static container element** and enter the following values in the **Style** panel:

      **Dimensions**

      - **Width**: 445px
      - **Height**: 370px

      **Spacing**

      - **Padding top**: 5px
      - **Padding right**: 20px
      - **Padding bottom**: 20px
      - **Padding left**: 50px

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Move_Items_and_Apply_Container_Style.png)

11. Select the **Project Title** (Text Content Element) and enter the following values in the **Style** panel:

      **Typography**

      - **Paragraph format**: Normal
      - **Font**: Verdana
      - **Font size**: 30px
      - **Font weight**: Bolder

      **Appearance**

      - **Text color**: #000000

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Text_Content_Element_with_Styles.png)

12. Drag and drop a **static text element** in between the **Project Title** (Text Content Element) and **Project Description** (Rich Text Content Element).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Insert_Static_Text_Element.png)

13. Enter "General Information" in the **static text element** then add the following values in the **Style** panel:
    
      **Typography**

      - **Paragraph format**: Normal
      - **Font**: Verdana
      - **Font size**: 20px
      - **Font weight**: 500

      **Appearance**

      - **Text color**: #EF1212

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Input_Text_Content_and_Apply_Styles.png)

14. In the **Add Items** panel, set the element **source** to **Property tag** then drag and drop the **Last modified date** property tag under the **Project Description** (Rich Text Content Element).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Insert_Property_Tag_Date.png)

15. Click **Save** to confirm your changes to the presentation template. The message "Presentation Template saved successfully." appears on the screen.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Save_Presentation_Template.png)

    The following image shows the markup generated after saving, as seen from the Authoring portlet. 

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Markup_Generated.png)

16. Click the **Back** button to return to the Authoring portlet and [preview the presentation template](#previewing-the-presentation-template).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Click_Back_Button.png)


## Previewing the presentation template

Use the **Preview** feature from the **Authoring portlet** to check the presentation template you edited in Presentation Designer.

1. From the Authoring portlet, select the **Content Section PT** checkbox then click **Preview**.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_from_Authoring.png)

2. Select any **content item** created in [Prerequisites](#prerequisites) that you want to preview then click **OK**.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Select_Content_Item_for_Preview.png)

3. See the preview generated in a new tab.

    The following is a sample preview for **Project Content - Living Home Furnishings**:

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Home_Furnishings.png)

    See the following sample previews for other content items:

    **Project Content - Architectural Concept**:

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Architectural_Concept.png)

    **Project Content - Classic Studio Ceramics**:

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Studio_Ceramics.png)


### Sample presentation templates

With Presentation Designer, you can create a wide range of custom designs and template layouts tailored to your needs. The intuitive drag-and-drop interface, combined with real-time styling, helps content managers take full control of their designs. This section contains images showing possible presentation templates you can build using Presentation Designer.

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
