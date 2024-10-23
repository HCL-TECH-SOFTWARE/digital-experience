# Editing Presentation Template in Presentation Designer

This section details how to edit a presentation template in Presentation Designer using a sample scenario. 

To provide a comprehensive example, the goal is to have a **Content Section** presentation template for a **project page** which will display an **image of the project**, the **project title**, and **general information** by utilizing the capabilities of Presentation Designer. 

---

## Prerequisite

-   Create a **content template** with image, text, and rich text element. The image element will be for the Project Image, the text element will be for the Project Title, and the rich text element will be for the Project Description. For more information on how to create a content template, see **[Author Content Templates](../../../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_templates/author_content_templates.md)**.
    
    ??? note "Click to see sample created content template"
        *Content Section AT*:

        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Template.png)

-   Create 2 or more **content items** using the content template created above and add different content to the image, text, and rich text elements for each content item. For more information on how to create a content item, see **[Author Content Items](../../../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/author_content_items.md)**.

    ??? note "Click to see sample created content item"
        *Project Content - Home Living Furnishings*:
        
        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Metadata.png)

        *Image Element*:

        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Image_Element.png)
        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Image_DAM.png)

        *Text Elements (Text & Rich Text)*:
        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Content_Item_Text_Elements.png)

-   Create a blank **presentation template** in the Authoring portlet. For detailed steps, see **[Access Presentation Designer](../access/index.md)**.

    ??? note "Click to see sample created presentation template"
        *Content Section PT*:

        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_Presentation_Template_Empty_Markup.png)

---

## Editing a Presentation Template in Presentation Designer

The steps below will show how to edit a Presentation Template in Presentation Designer.

???+ info "Related information"
    - [Presentation Designer UI](../access/index.md#the-hcl-presentation-designer-ui)
    - [User Items / Elements](../usage/user_items.md)
    - [Styling Options](../usage/styling_options.md)

### Edit Presentation Template

1. Edit the newly created presentation template in Presentation designer by **selecting the template** and **clicking More options** then **Edit in Presentation Designer**.

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

4. The content section template will only need a **1x2 grid**. The idea is to display an image on the first column and details on the second column. To do this, apply the following styles to the grid:

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

5. On the Add Items panel, set the item **source** to **content elements** and **search and select the content template** prepared in [Prerequisites](#prerequisite).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Search_Content_Template.png)
    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Select_Content_Template.png)

6. Drag and drop the **Project Image** (Image Content Element) on the **first column** of the **grid** and drag and drop the **Project Title** (Text Content Element) and **Project Description** (Rich Text Content Element) on the **second column** of the **grid**.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Content_Elements_in_Grid.png)

7. Add a **static container element** inside the **second column** of the **grid**. This will serve as the container for the project details.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Add_Container_in_Grid.png)

8. Drag and drop the **Project Title** (Text Content Element) and **Project Description** (Rich Text Content Element) inside the container added in step 7 by utilizing the **Move** icon button for each user item and apply the following styles to their parent container:

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
        - [Item Actions](../usage/user_items.md#item-actions)

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

11. **Input text content** "General Information" for the **static text element** and apply the following styles:
    
    ??? note "Click to view styles"
        **Typography**

        - Paragraph Format: Normal
        - Font: Verdana
        - Font size: 20px
        - Font weight: 500

        **Appearance**

        - Text color: #EF1212

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Input_Text_Content_and_Apply_Styles.png)

12. In the **Add Items** panel, set the item **source** to **Property tag** and drag and drop the **Last modified date** property tag under the **Project Description** (Rich Text Content Element).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Insert_Property_Tag_Date.png)

13. **Save** the changes to the presentation template by clicking the **Save** button. A snackbar with message "Presentation Template saved successfully." will appear on the screen. 

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Save_Presentation_Template.png)

    ??? note "Click to view the markup generated after saving."
        *View from Authoring portlet:*

        ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Markup_Generated.png)

14. Go back to the Authoring portlet by clicking the back button to get ready for [Preview](#preview).

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Click_Back_Button.png)

---

### Preview

To see the **actual output** of the presentation template edited in Presentation designer, you can use the **Preview** feature from the **Authoring portlet**.

1. From the Authoring Portlet, select the **Content Section PT** and click the **Preview** button.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_from_Authoring.png)

2. Select any **content item** created in [Prerequisites](#prerequisite) to use it as **rendering context** when previewing then click the **OK** button.

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Select_Content_Item_for_Preview.png)

3. See the preview generated on the **new tab**:

    *Project Content - Living Home Furnishings*:

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Home_Furnishings.png)

4. Preview **other content items** by following steps 1-3.

    *Project Content - Architectural Concept*:

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Architectural_Concept.png)

    *Project Content - Classic Studio Ceramics*:

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Studio_Ceramics.png)

---

### Sample Presentation Templates

With Presentation Designer, users can easily create a wide range of custom designs and template layouts, all tailored to their specific needs. The intuitive drag-and-drop interface, combined with real-time styling, empowers content managers to take full control of their designs. Below, you'll find some screenshots showcasing the creative possibilities and diverse templates that have been built using Presentation Designer.

-   **Hero Banner**

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Hero_Banner.png)

---

-   **Cards with Image**

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Cards_with_Image.png)

---

- **Content Section**

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Content_Section.png)

    *Preview:*
    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Preview_Content_Studio_Ceramics.png)

---

-   **Recent Items Template**

    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Recent_Items.png)

    *Preview:*
    ![](../../../../assets/HCL_Presentation_Designer_Edit_PT_Sample_PT_Recent_Items_Preview.png)