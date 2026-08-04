# Content elements

Content elements (for example, ```[Element context="current" type="content" key="Element name"]```) are elements from a content template. You can search for a content template from which you want to pick elements from. Placeholders are rendered on the canvas in place of the elements.

After setting the element source to **Content elements**, no elements are initially loaded because no content template has been selected yet.

![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Empty_Panel.png)

To load the elements, you can use the dual-mode selection available in the **Content template** field to find and select your desired template. You can search by typing for autocomplete, or click the DX Picker icon to the right of the "Select or Search" field to open a rich browser dialog for discovery and selection. The integrated DX Picker enables you to browse and select content templates without manual typing. It improves discoverability by allowing you to visually browse content templates in a dedicated picker UI instead of relying on autocomplete search alone.

!!! note
    If the DX picker is not configured or available in the environment, the picker icon appears disabled.

**Content templates loaded from search field:**

![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Search_Panel.png)

**Content templates loaded from DX Picker:**

![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_DX_Picker.png)

After selecting a content template, it automatically pulls the supported elements from the content template. Each element tag uses the element's display title that is set from the content template.

![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Loaded_Panel.png)

After you drag and drop an element on the canvas, a placeholder representing the element appears. You cannot edit placeholders in Presentation Designer as the actual display value comes from the content item.

![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Structure.png)

In Presentation Designer, the ```<p></p>``` tag wrapper for the element tag is added with the type attribute to determine the element type. Element tags (for example, ```[Element context="current" type="content" key="Element name"]```) use the element name as `key` and authors can set any element name in a content template. This could produce inconsistencies if Presentation Designer needs to rely on the element tag to determine the element type.

![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Markup.png)

For more information on element tags in the Authoring portlet, refer to [Element tag](../../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/tags/creating_web_content_tags/wcm_dev_referencing_elements.md).

## Supported elements

Presentation Designer supports the following content elements:

- **Text elements**

    Text elements (**Text, Rich Text, Short Text, Date and Time, Number**) represent text content and the value changes based on the content item. In Presentation Designer, the element’s display title from the content template is the placeholder text that appears on the canvas except for **Date and Time** and **Number** elements that have their own assigned placeholder value.

    ![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Text_Elements.png)

    You can apply different styling options to the placeholder of the text elements except for **Rich Text**. **Rich Text** elements are set with their own styling in the content item.

    ![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Text_Elements_Applied_Styles.png)

    These styles are stored in the ```<p></p>``` tag style attribute. See the styled placeholder **Short Text** element and the markup generated after saving in the following images:

    ![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_ShortText_Applied_Styles.png)
    ![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_ShortText_Applied_Styles_Markup.png)

    Formatting options are also available for **Number** and **Date and Time elements**. The format is visually reflected on the placeholder value and is stored in the format parameter for the Element tag after saving.

    | Number Format   | Date and Time Format  |
    |-----------------|-----------------------|
    | ![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Number_Format.png) |  ![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_DateTime_Format.png) |

    ![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Format_Markup.png)

- **Image elements**

    An image content element represents an actual image. A placeholder image icon is displayed in Presentation Designer and the image source and image attributes (for example, width and height) set in the content item are followed in the preview.

    ![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Image.png)

- **Link elements**

    A link content element represents a hyperlink, which is a connection or reference to another resource depending on what is set on the content item. In Presentation Designer, a placeholder text using the element's display title is shown. You can apply styling options to the placeholder text through the **Style items** panel, similar to text content elements.

    ![](../../../../../assets/HCL_Presentation_Designer_Content_Elements_Link.png)
