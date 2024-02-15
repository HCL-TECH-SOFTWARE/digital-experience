---
id: wcm_dev_elements_link_props
title: Selecting a link
---

# Selecting a link


You use the link element to define the item or URL to link to.

1.  Select either **External URL**, or **Web Content**.

2.  To add a link to a URL, either type or paste the URL in the **Type a URL** field.

    !!!note
        The inserted URL is rendered relative to the URL of the site area of the currently rendered content item. Internet protocols, such as "`Http://`", must be added at the beginning of the inserted link if an absolute URL is intended to be rendered.

3.  To add a link to web content, an image component, a file component, or an existing link component, click **Browse Content**.

    In CF08 or higher, click **Browse**.

    1.  Select the library that the item is stored in.

    2.  Select the item to link to.

    3.  Click **OK**

4.  To add a link to a document in the current place, click **Browse Libraries**.

    In CF08 or higher, click **Browse**.

    1.  Select the library that the document is stored in.

    2.  Select the document to link to.

    3.  Click **OK**

5.  Click **Link Attributes** to set additional settings.

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

6.  Select a link target:

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

7.  Enter extra attributes, such as style sheet classes or JavaScript. These attributes are used in the same way as using an attribute in a "`<a href=" "></a>`" tag.

    For example:

    -   To create the link tag, `<a class="classname" href="http://www.ibm.com"></a>` you would enter class="classname" in the **Additional attributes** field.
    -   To create the link tag, `<a name="homepage" class="classname" href="http://www.ibm.com"></a>` you would enter name="homepage" class="classname" in the **Additional attributes** field.
8.  Click **OK**.


