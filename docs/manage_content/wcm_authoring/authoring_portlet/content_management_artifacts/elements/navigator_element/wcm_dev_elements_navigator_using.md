# Defining navigator element design options

You use the element design options of a navigator element to determine how to display the results a navigator.

1.  Select **Expand current navigator branch one level** to display the content items and site areas one-level under the current site area in the navigator.

2.  Select **Expand navigator to display current site area** to display all the parent site areas from the start site area down to the current site area.

3.  Specify paging options for the navigator element.

    1.  Enter the number of items that are displayed in each navigator page.

    2.  Enter the number of the page to display first.

    3.  Enter the maximum number of results pages to be included in the navigator design.

    4.  Enter the number of results pages to count when a page navigation element is used. For example, if you enter 3, the page navigation element calculates results up to three pages after the current page. Increasing this number improves the accuracy of the page navigation element. Lowering this number improves the performance of the page navigation element when rendered.

    !!!note
        To display multiple navigator pages, you need to use a page navigation element. This element is referenced within the header or footer of the navigator design.

    !!!note
        Changes to paging options are not visible to users until the session cache is expired, or a user starts a new session.

4.  Select **Distinguish items with no children** to add a design field for content items and site areas that contain no children. All other site areas in the navigator use the other component designs. You can use an Alternate Design tag in your navigator design to distinguish between the current site area or content item. See the navigator design examples for more details.

5.  Select **Show header, footer and separator fields for each result design** to enable separate headers and footers for each design field, except for the **Distinguish items with no children** field. This is useful if your navigator design uses nested tags, such as an unordered list. See the navigator design examples for more details.

6.  Enter text, tags, and code into the navigator design fields as required:

    -   The text that is entered in the **Header and Footer** designs will appear before and after the displayed navigator items.
    -   The text that is entered into the **Navigator result design** fields defines the format of each navigator item. Use multiple navigator result designs for each level of a navigator.
    -   The text that is entered into the **Separator** field appears between each displayed navigator item.
    -   The text that is entered into the **Distinguish items with no children** field is used for items that have no children.
    -   The text that is entered into the **No result design** field is displayed if no results are found for the navigator criteria.

???+ info "Related information"  
    -   [Inserting an image in an element](../element_designs/wcm_dev_elements_insert_image.md)
    -   [Inserting a link in an element](../element_designs/wcm_dev_elements_insert_link.md)
    -   [Inserting element tags](../element_designs/wcm_dev_elements_insert_tags.md)
    -   [Creating web content tags](../../tags/creating_web_content_tags/index.md)


