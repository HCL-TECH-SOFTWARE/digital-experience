# Inserting a Link in an Element

You can insert links into elements that contain an HTML or rich text field.

!!!note
    When you create a link to a site area or content item, this method is only used if the link requires no customization. If you need to create a link to a site area or content item that requires customization, such as "jump-to" navigation, you must instead use a [URL Tag](../../../wcm_artifacts/tags/creating_web_content_tags/wcm_dev_item-details_url.md).

1.  Click **Insert Link**.

2.  Select either **External URL**, or **Web Content**.

3.  To add a link to a URL, either type or paste the URL in the **Type a URL** field.

    **Note:** The inserted URL is rendered relative to the URL of the site area of the currently rendered content item. Internet protocols, such as "`Http://`", must be added at the beginning of the inserted link if an absolute URL is intended to be rendered.

4.  To add a link to web content, an image component, a file component, or an existing link component, click **Browse Content**.

    In CF08 or higher, click **Browse**.

    1.  Select the library that the item is stored in.

    2.  Select the item to link to.

    3.  Click **OK**

5.  To add a link to a document in the current place, click **Browse Libraries**.

    In CF08 or higher, click **Browse**.

    1.  Select the library that the document is stored in.

    2.  Select the document to link to.

    3.  Click **OK**

6.  Click **Link Attributes** to set additional settings.

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

7.  Select a link target:

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

8.  Enter extra attributes, such as style sheet classes or JavaScript. These attributes are used in the same way as using an attribute in a "`<a href=" "></a>`" tag.

    For example:

    -   To create the link tag, `<a class="classname" href="http://www.ibm.com"></a>` you would enter class="classname" in the **Additional attributes** field.
    -   To create the link tag, `<a name="homepage" class="classname" href="http://www.ibm.com"></a>` you would enter name="homepage" class="classname" in the **Additional attributes** field.
9.  Click **OK**.

<!-- **Related information**  


[Page layout](../panel_help/wcm_dev_pres-temp_examples_layout.md)

[How to define authoring tools](../panel_help/wcm_dev_elements_authoring-tools_examples.md)

[Entering HTML](../panel_help/wcm_dev_elements_html_props.md)

[Defining menu element formatting options](../panel_help/wcm_dev_elements_menu_format.md)

[Defining navigator element design options](../panel_help/wcm_dev_elements_navigator_using.md)

[Defining a page navigator](../panel_help/wcm_dev_elements_page-navigation_props.md)

[Defining a Personalization rule](../panel_help/wcm_dev_elements_pzn_props.md)

[Using the rich text element](../panel_help/wcm_dev_elements_rich-text_props.md)

[Creating a search results design](../panel_help/wcm_dev_elements_search_props.md)

[Defining taxonomy component properties](../panel_help/wcm_dev_elements_taxonomy_props.md)

[Define component designs for different users](../panel_help/wcm_dev_elements_username_props.md) -->

