---
id: wcm_dev_elements_fileresource_add_template
title: Adding a file resource element to a template
---




You add a file resource element to an authoring template when you want the file resource to be used by a set of items that use the same authoring template.

1.  Open or create an authoring template.

2.  Click **Manage Elements**.

3.  Select **File Resource** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different display title for each language it is configured for. The text that is entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **Add**. The file resource element is added to your form.

8.  Go to the file resource element you created:

9.  Click **Upload a file** to select a file to store in the file resource component, or do nothing if you want your content creators to select a file.

    **Note:** In CF06 or higher, click **Upload** to upload a file, or click **Select** to select a component. Selecting a component is useful if you need to store a file in a different library, or apply different access settings to the original file resource component.

10. Click ![properties](../images/propIcon.jpg) to open the display properties of the element. This view is where you define how the element is displayed on the item form.

    1.  To display the element as a required field, select **Identify this as a required field**.

    2.  To hide a field on the content form from all users select **Hide field**. You must specify a default value if the field is a required field.

        **Note:** Administrators and managers can choose to display hidden fields and elements in an item by clicking **Show hidden fields**.

    3.  Specify the minimum and maximum byte values to restrict the size of files added to a file resource element. This setting is used to prevent your content creators from uploading large files that might be too large to realistically store and access from a web page.

    4.  You can also restrict the mime type of files that can be added to file resource elements. You add multiple mime types that are separated by a space.

    5.  Select whether content creators can both upload a file, or select a component, or restrict them to using only one of these options.

    6.  Select the users or groups you want to grant exclusive edit access to a field or element by clicking **Add Editors**.

    7.  Select the users or groups you want to grant exclusive view access to a field or element by clicking **Add Viewers**.

    8.  Type field-specific help into **Field help** text. This field is displayed with the element in the content form.

        If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different help text for each language it is configured for. The text that is entered in the **Field help** field is only used if an appropriate help text is not available from the selected text provider, or if the text provider is not available.

11. Save the authoring template.


