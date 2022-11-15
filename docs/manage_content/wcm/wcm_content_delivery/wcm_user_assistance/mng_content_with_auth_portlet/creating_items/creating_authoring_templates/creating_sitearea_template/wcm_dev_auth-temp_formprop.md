---
id: wcm_dev_auth-temp_formprop
title: Defining form properties
---




Specify the layout and functions available to authors when you create a new item that is based on this content template.

1.  Choose a layout option from the list in the **Item form layout** field.

    -   **Collapsible sections**

        Organizes the sections vertically and enables the author to expand and collapse the sections as needed.

    -   **Labeled sections**

        Organizes the sections of the item form vertically and separates the sections with a label.

    -   **Tabbed**

        Organizes the sections horizontally on the form and provides access to the different sections with tab-like links.

    -   **Legacy Tabbed**

        Uses the tabbed form available before version 7.0.

    -   **No Sections**

        Arranges all elements on the form vertically without organization by section.

2.  Select **Allow elements to be managed by editors** to allow authors to add extra elements. If not selected, the "Manage elements" button is not visible to authors.

3.  Select whether a default style sheet component is used when rich text elements are displayed in the item form. When set, the selected style sheet is applied to rich text editors when viewed in the authoring portlet.

    1.  Click **Select default style sheet**.

    2.  Select a style sheet component from the list of available style sheet components, or click **None** if you do not want to apply a style sheet component.

    3.  Click **OK**.

4.  Select the preferred "save" action for the form. The action that is selected here cannot then be hidden from the form.

5.  Select which actions to hide from authors.

6.  Select how the toolbar is displayed to authors creators.

7.  To display buttons in reverse order, select **Reverse the button order within the toolbar**.

8.  Upload or select a file component that contains an image, or a multi-scale ZIP file that contains images of various sizes and locales. The preview image is used instead of the standard content item icon within the web content authoring interface and within the site manager.

    -   Supported image file formats are PNG, JPG, and SVG.
    -   If you are using multi-scale icons, the collection of images must be compressed into a ZIP file.
    -   Image sizes of `18x18`,`32x32`, `64x64`, or `128x128` are best suited for custom images. If other sizes are used, the custom image is resized to fit the default sizes and your image might not display as expected. Creating images for use with each of these sizes will also prevent distorted images from being displayed.
9.  If you want to override the default help text for the item form with help text specific to your environment, enter the help text in the **Item form help text** field.

    The help text that you create in this field applies to the entire item form. When the author clicks the **Show help** link on the item form, the help text is displayed in a dedicated area of the form.

    With the embedded editor provided in this field, you can add help text as HTML. You can format the HTML text in the design view, which provides toolbar buttons for common tasks. You can also work directly with the text in a source view that displays the HTML tagging. Previously prepared content in HTML format can be imported with the embedded editor.

    **Note:** Although link components can be selected with the insert link button, link components do not work in item form help.


