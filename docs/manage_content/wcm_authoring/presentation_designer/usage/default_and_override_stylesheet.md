# Default and Override stylesheets in Presentation Designer

In Presentation Designer, stylesheets play a crucial role in defining the appearance and behavior of elements within a presentation. There are two types of stylesheets that work together to ensure flexibility and consistency in design: the **Default stylesheet** and the **Override stylesheet**. These stylesheets support the handling of type selectors and class selectors.

## Default stylesheet

The **Default Stylesheet** provides a foundational set of styles that are automatically applied to various elements, ensuring a consistent look and feel across the presentation. Default stylesheet support type selectors and class selectors. The default style options in Presentation Designer work as follows:

1. From the initial render of the Presentation Designer, a default style is loaded in the head of the HTML:

    - HTML head for default stylesheet:

        ![](../../../../assets/HCL_Presentation_Designer_default_stylesheet_html_head.png)

    - Element styles for the default stylesheet:

        ![](../../../../assets/HCL_Presentation_Designer_default_stylesheet_element_inspect.png)

2. Each element has a corresponding classname for the default style.

    | Element                     | Default Classname                  | CSS Values                                                                 |
    |-----------------------------|------------------------------------|----------------------------------------------------------------------------|
    | Container element           | pd-cont-defclass                   | padding: 0 0 0 0; <br> margin: 0 0 0 0; <br> width: auto; <br> height: 120px; <br> border-style: none; <br> position: relative; |
    | Text element                | pd-text-defclass                   | width: calc(100% - 6px); <br> margin: 0px; <br> color: rgb(92, 90, 90); <br> text-shadow: rgba(0, 0, 0, 0) 0px 0px 2px; <br> text-align: inherit; <br> padding-left: 2px; <br> display: inline-block; <br> overflow-wrap: normal; <br> position: relative; <br> z-index: 2; |
    | Text placeholder            | pd-text-placeholder-defclass       | position: absolute; <br> top: 0px; <br> color: rgb(170, 170, 170); <br> pointer-events: none; <br> padding-left: 2px; <br> margin: 0px; <br> z-index: 2; |
    | Link element                | pd-link-defclass                   | padding: 0 0 0 2px; <br> margin: 0 0 0 0; <br> width: calc(100% - 6px); <br> color: rgb(92, 90, 90); <br> text-shadow: rgba(0, 0, 0, 0) 0px 0px 2px; <br> text-align: inherit; <br> display: inline-block; <br> overflow-wrap: normal; <br> position: relative; <br> z-index: 3; |
    | Image element               | pd-img-defclass                    | width: 100px; <br> height: 100px; <br> display: flex; <br> justify-content: center; <br> align-items: center; <br> background-color: rgb(214, 214, 214); <br> padding: 0 0 0 0; <br> margin: 0 0 0 0; <br> position: relative; <br> z-index: 3; |
    | Broken image placeholder    | pd-img-placeholder-defclass        | height: 100%; <br> width: 100%; <br> transform: scale(0.24); <br> transform-origin: center center; |
    | Grid element                | pd-grid-defclass                   | display: grid; <br> padding: 4px 4px 4px 4px; <br> margin: 0 0 0 0; <br> column-gap: 4px; <br> row-gap: 4px; <br> width: auto; <br> height: auto; <br> border-style: none; <br> grid-template-columns: 1fr 1fr 1fr; <br> grid-template-rows: 1fr; <br> position: relative; |
    | Grid cell element           | pd-gridcell-defclass               | padding: 4px 4px 4px 4px; <br> margin: 0 0 0 0; <br> width: auto; <br> height: auto; <br> min-height: 120px; <br> border-style: none; <br> grid-area: span 1 / span 1; <br> position: relative; |
    | Content element             | pd-content-element-defclass        | height: 50px; <br> display: flex; <br> align-items: center; <br> padding-left: 20px; <br> background-color: rgba(0, 0, 0, 0.15); |
    | Content element placeholder | pd-content-element-placeholder-defclass | position: relative; <br> color: #aaa; <br> pointer-events: none; <br> padding-left: 2px; |
    | Content text element        | pd-content-element-text-defclass   | color: #5c5a5a; <br> width: 100%; <br> padding-left: 2px; <br> display: inline-block; <br> position: relative; <br> line-height: unset; |
    | Content link element        | pd-content-element-link-defclass   | color: #5c5a5a; <br> width: 100%; <br> padding-left: 2px; <br> display: inline-block; <br> position: relative; <br> line-height: unset; |
    | Content image element       | pd-content-element-image-defclass  | height: 100px; <br> width: 100px; <br> text-align: center; <br> background-color: rgba(0, 0, 0, 0.15); |
    | Default image placeholder   | pd-content-element-default-image-defclass | height: 100%; <br> width: 100%; <br> transform: scale(0.24); <br> transform-origin: center; <br> position: relative; |
    | Content number element      | pd-content-element-number-defclass | width: 100%; <br> color: #5c5a5a; <br> padding-left: 2px; <br> display: inline-block; <br> position: relative; <br> line-height: unset; |
    | Content datetime element    | pd-content-element-datetime-defclass | width: 100%; <br> color: #5c5a5a; <br> padding-left: 2px; <br> display: inline-block; <br> position: relative; <br> line-height: unset; |
    | Content rich text element   | pd-content-element-rich-text-defclass | width: 100%; <br> padding-left: 2px; <br> display: inline-block; <br> position: relative; <br> line-height: unset; |
    | Property tag text element   | pd-property-tag-text-defclass      | color: #5c5a5a; <br> width: 100%; <br> padding-left: 2px; <br> display: inline-block; <br> position: relative; <br> line-height: unset; |
    | Property tag datetime       | pd-property-tag-date-time-defclass | color: #5c5a5a; <br> width: 100%; <br> padding-left: 2px; <br> display: inline-block; <br> position: relative; <br> line-height: unset; |

3. After saving the Presentation Designer, it will automatically create a default stylesheet.

    ![](../../../../assets/HCL_Presentation_Designer_Default_stylesheet_create.png)

4. The default style is found in the Presentation Designer libraries. Its location is determined based on the location of the presentation template:

    ![](../../../../assets/HCL_Presentation_Designer_Default_stylesheet_paths.png)

    For example, the default style is located in the following path with the default style name **pd_default_stylesheet**:

    ![](../../../../assets/HCL_Presentation_Designer_Default_stylesheet_locations.png)

5. To validate the styles set in the default stylesheet:

    1. Select the file and click **Edit**.
    2. Click **pd_default_stylesheet.css** to download the file.

        ![](../../../../assets/HCL_Presentation_Designer_Default_stylesheet_download.png)

    3. Locate the downloaded file and open it. This contains the CSS data inside the default stylesheet.

        ![](../../../../assets/HCL_Presentation_Designer_Default_stylesheet_downloaded_file.png)

## Override stylesheet

The **Override stylesheet** allows users to customize styles for specific elements, enabling precise adjustments to meet unique design requirements. Together, the Default and Override stylesheets offer a powerful mechanism for managing presentation aesthetics effectively. The override style options in Presentation Designer work as follows:

1. Override styles can be applied to different resolutions, and each resolution has its own style. If the style is set for **Desktop**, it will apply to all devices. If the style is set for **Tablet**, it will apply changes to tablets and mobile devices only. If the style is set for **Mobile**, it will apply changes to mobile devices only. If there are specific changes to the style for a particular device, those changes will not take effect on other devices since the specific device already has a defined value for the style.

2. The classname for the override stylesheet on the selected element will apply when a style is edited. For example:

    After dropping the element:

    ![](../../../../assets/HCL_Presentation_Designer_override_stylesheet_newly_drop_element.png)

    After adding a style on that element:

    ![](../../../../assets/HCL_Presentation_Designer_override_stylesheet_after_changing_style.png)

3. For each element, there is a corresponding classname convention. For example, `pd-override-[Element]-[(6)uuid]`.

4. After saving the Presentation Designer, it will automatically create an override stylesheet:

    ![](../../../../assets/HCL_Presentation_Designer_override_stylesheet_created.png)

5. To validate the override style, you can inspect and visit the header and the element. For example:

    HTML head for override stylesheet:
    ![](../../../../assets/HCL_Presentation_Designer_override_stylesheet_html_head.png)

    Element styles for the override stylesheet:
    ![](../../../../assets/HCL_Presentation_Designer_Override_stylesheet_element_inspect.png)

6. The override style is found in the Presentation Designer libraries. Its location is determined based on presentation template's location:

    ![](../../../../assets/HCL_Presentation_Designer_override_stylesheet_path.png)

7. The naming of the override style will be based on the following template: `pd_[Presentation template name]_override_[(6)uuid]`. For example:

    ![](../../../../assets/HCL_Presentation_Designer_override_stylesheet_location.png)

8. To validate the styles set in the default stylesheet:

    1. Select the file and click **Edit**.
    2. Click **pd_Override stylesheet test_override_a074b2.css** to download the file.

        ![](../../../../assets/HCL_Presentation_Designer_Override_stylesheet_download.png)

    3. Locate the downloaded file and open it. This contains the CSS data inside the override stylesheet.

        ![](../../../../assets/HCL_Presentation_Designer_Override_stylesheet_downloaded_file.png)
