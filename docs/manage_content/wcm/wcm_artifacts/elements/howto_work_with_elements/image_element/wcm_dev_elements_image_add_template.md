---
id: wcm_dev_elements_image_add_template
title: Adding an image element to a template
---




You add an image element to an authoring template when you want the image to be used by a set of items that use the same authoring template.

1.  Open or create an authoring template.

2.  Click **Manage Elements**.

3.  Select **Image** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different display title for each language it is configured for. The text that is entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **OK**. The image element is added to your form.

8.  Go to the image element you created. Either select an image file, or do nothing if you want your content creators to select an image.

    1.  Click **Upload a file** to select a file to store in the image component.

        **Note:** In CF06 or higher, click **Upload** to upload a file, or click **Select** to select a component. Selecting a component is useful if you need to apply different image properties to an existing image component, or store an image in a different library, or apply different access settings to the original image component.

    2.  Define the image properties:

        -   **Border**

            Define the size of the border to appear around the image. \(0 = no border\)

        -   **Width**

            Set the width of the image \(in pixels\). Optional.

        -   **Height**

            Set the height of the image \(in pixels\). Optional.

        -   **Alternate text**

            Enter the name of the image to display when you save the image, or if the browser cannot display the image.

        -   **HTML Tag Name**

            Enter the name of the HTML tag to be used in JavaScript.

    3.  If Renditions have been enabled, you can also select images to display with different devices.

9.  Click ![properties](../../../../../../images//propIcon.jpg) to open the display properties of each field in the element. This view is where you define how the element is displayed on the item form.

    1.  To display the field as a required field select **Identify this as a required field**.

    2.  To hide a field on the content form from all users select **Hide field**. You must specify a default value if the field is a required field.

        !!!note
            Administrators and managers can choose to display hidden fields and elements in an item by clicking **Show hidden fields**.

    3.  If Renditions have been enabled, you can choose to enable or disable this feature for content items based on this template. If enabled, you can specify separate default image settings for different device types.

    4.  Specify the minimum and maximum byte values to restrict the size of files added to an image element. This can be used to prevent your content creators from uploading large files that might be too large to realistically store and access from a web page.

    5.  You can also restrict the mime type of files that can be added to image elements. You add multiple mime types that are separated by a space.

    6.  You can set where a content author can select an image from under **Digital asset source**:

        -   Upload a file by using the file browser only.
        -   Select a library component only.
        -   Both.
        !!!note
             If Rich Media Edition is installed the **Show digital asset source** option must be cleared if **Select using library component** has been selected.

    7.  Type the number of characters to use in **Field Width** to set the size of the displayed field. If you leave this blank, the default field size is used.

    8.  Type a number into the maximum or minimum characters or words fields to set limits on the number of characters or words a user can enter in a field.

    9.  Select whether content creators can both upload a file, or select a component, or restrict them to using only one of these options.

    10. Select the users or groups you want to grant exclusive edit access to a field or element by clicking **Add Editors**.

    11. Select the users or groups you want to grant exclusive view access to a field or element by clicking **Add Viewers**.

    12. Type field-specific help into **Field help** text. This is displayed with the element in the content form.

        If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different help text for each language it is configured for. The text that is entered in the **Field help** field is only used if an appropriate help text is not available from the selected text provider, or if the text provider is not available.

10. Save the authoring template.


