---
id: wcm_dev_elements_link_add_template
title: Adding a link element to a template
---




You add a link element to an authoring template when you want the link element to be used by a set of items that use the same authoring template.

1.  Open or create an authoring template.

2.  Click **Manage Elements** .

3.  Select **Link** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different display title for each language it has been configured for. The text entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **OK**. The link element is added to your form.

8.  Go to the link element you created. You create a link, or leave the link element fields blank if you want your content creators to select a link.

9.  Select either **External URL**, or **Web Content**.

10. To add a link to a URL, either type or paste the URL in the **Type a URL** field.

    !!!note
        The inserted URL is rendered relative to the URL of the site area of the currently rendered content item. Internet protocols, such as "`Http://`", must be added at the beginning of the inserted link if an absolute URL is intended to be rendered.

11. To add a link to web content, an image component, a file component, or an existing link component, click **Browse Content**.

    In CF08 or higher, click **Browse**.

    1.  Select the library that the item is stored in.

    2.  Select the item to link to.

    3.  Click **OK**

12. To add a link to a document in the current place, click **Browse Libraries**.

    In CF08 or higher, click **Browse**.

    1.  Select the library that the document is stored in.

    2.  Select the document to link to.

    3.  Click **OK**

13. Click **Link Attributes** to set additional settings.

    1.  For external URLs:

        Select a link display type:

        -   **Text**

            Select this type to display the link as text.

            -   **Use URL as link text**: Select this option to use the URL of the item that is linked to as the link text.
            -   **Link text**: Enter the text to use as the link text. To enter text, you must clear the **Use URL as link text** check box.
        -   **Image Component**

            Select this type to display the link as an image. Click **Select Image** to select an image component to use as the link image.

        Enter a description of the link by selecting either:

        -   **Use URL as link description**

            Select this option to use the URL of the item that is linked to as the link description.

        -   **Enter description**

            Select this option to enter the text to use as the link description. To enter a description, you must clear the **Use URL as link description** check box.

    2.  For Web content:

        Select a link display type:

        -   **Text**

            Select this type to display the link as text.

            -   **Use title of linked item**: Select this option to use the title of the item that is linked to as the link text.
            -   **Link text**: Enter the text to use as the link text. To enter text, you must clear the **Use title of linked item** check box.
        -   **Image Component**

            Select this type to display the link as an image. Click **Select Image** to select an image component to use as the link image.

        Enter a description of the link by selecting either:

        -   **Use description of linked item**

            Select this option to use the description of the item that is linked to as the link description.

        -   **Enter description**

            Select this option to enter the text to use as the link description. To enter a description, you must clear the **Use description of linked item** check box.

        Enter an optional query string. You can use a query string here as a search parameter in a menu element. For example, you might enter this query string: `myquery=shoes` You can then specify "myquery" as a search parameter in a menu element.

14. Select a link target:

    -   **Name**

        Select this option to specify the name of the link target.

    -   **New Window**

        Select this option to open the link in a new browser window.

    -   **None**

        Select this option specify no link target.

    -   **Parent**

        Select this option to open the link in the parent frameset of the frame the link appears in, replacing the entire frameset.

    -   **Self**

        Select this option to open the link in the current frame, replacing the content in that frame.

    -   **Top**

        Select this option to open the link in the current browser window, replacing all frames.

15. Enter extra attributes, such as style sheet classes or JavaScript. These attributes are used in the same way as using an attribute in a "`<a href=" "></a>`" tag.

    For example:

    -   To create the link tag, `<a class="classname" href="http://www.ibm.com"></a>` you would enter class="classname" in the **Additional attributes** field.
    -   To create the link tag, `<a name="homepage" class="classname" href="http://www.ibm.com"></a>` you would enter name="homepage" class="classname" in the **Additional attributes** field.
16. Click ![properties](../../../../../../images/propIcon.jpg) to open the display properties of the element. This is where you define how the element is displayed on the item form.

    1.  To display the element as a required field select **Identify this as a required field**.

    2.  To hide a field on the content form from all users select **Hide field**. You must specify a default value if the field is a required field.

        !!!note
            Administrators and managers can choose to display hidden fields and elements in an item by clicking **Show hidden fields**.

    3.  By default, a content creator can select any type of link. To restrict the types of links that a content creator can select, click **Select** within the **Restrict Link Types** section. Select the appropriate link types and then click **OK**. To remove a link type from the restricted list, select the checkbox next to the link type, and click **Remove**.

    4.  Type the number of characters to use in **Field Width** to set the size of the displayed field. If you leave this blank, the default field size is used.

    5.  Type a number into the maximum or minimum characters or words fields to set limits on the number of characters or words a user can enter in a field.

    6.  Select the users or groups you want to grant exclusive edit access to a field or element by clicking **Add Editors**.

    7.  Select the users or groups you want to grant exclusive view access to a field or element by clicking **Add Viewers**.

    8.  Type field-specific help into **Field help** text. This displays with the element in the content form.

        If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different help text for each language it has been configured for. The text entered in the **Field help** field will then only be used if an appropriate help text is not available from the selected text provider, or if the text provider is not available.

17. Save the authoring template.


