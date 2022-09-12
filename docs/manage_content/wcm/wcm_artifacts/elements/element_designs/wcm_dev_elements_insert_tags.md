# Inserting Element Tags

You can insert elements tags for all the elements of a selected authoring template into the design of a presentation element.

This is useful when first designing a presentation template as you can quickly generate element tags for all the elements that are used by an authoring template. You can then copy and paste the element tags to the correct section of your presentation template design.

1.  Open or create a presentation template in edit mode.

2.  Go to the presentation template design field and click **Insert Element Tags**.

3.  Select an authoring template.

4.  Click **OK**.

5.  The following tags are added to the presentation template design:

    -   A property tag that is configured to display the title of the current item. For example:

        ```
        [Property type="content" context="current" field="title"]
        ```

    -   Element tags for each element that is contained in the selected authoring template. For example, if your authoring template contained a text element named "headline" the following element tag would be created:

        ```
        <!-- Text -->
        <p>[Element context="current" type="content" key="headline"]</p>
        ```

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

[Define component designs for different users](../panel_help/wcm_dev_elements_username_props.md)
 -->
