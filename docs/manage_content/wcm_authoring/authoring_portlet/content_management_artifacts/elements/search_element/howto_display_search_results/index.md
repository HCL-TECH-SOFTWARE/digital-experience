# How to display search results

You use a search element that is stored in search component to display the results of a search query.

## Using a search component

1.  Click **New > Component > Search** to create a new search component.
2.  Enter [identification](../../../../content_management_artifacts/common/items_id.md) information.
3.  Select a search collection to use.
4.  To page the search result:
    -   Enter the number of results to display per page.
    -   Select the page to display when first rendered.
    -   Enter the maximum number of pages to display.
    -   Enter the number of results pages to read ahead when using a page navigation element. For example, if you enter 3, the page navigation element will calculate results up to 3 pages ahead of the current page. Increasing this number will improve the accuracy of the page navigation element. Lowering this number will improve the performance of the page navigation element when rendered.

        !!!note
            To display multiple pages, you will need to use a [page navigation element](../../page_nav_element/wcm_dev_elements_page-navigation.md). This is referenced within the header or footer of the search element design specified below.

5.  Select how the search results should be sorted.
6.  Define the design of the search results using HTML and text. 
    -   The text entered in the **Header** and **Footer** designs will appear before and after the displayed search results. A page navigation element is referenced in either the header or footer to provide users with a way of navigating through the search results.
    -   The text entered into the **Results** field defines the format of each search result.
    -   The text entered into the **Separator** field will appear between each displayed search result.
    -   Enter a message to display when no search results are found in the **No result design** field.
7.  Set [access](../../../../content_management_artifacts/common/grant_access.md) properties.
8.  Click **Save and close**.

