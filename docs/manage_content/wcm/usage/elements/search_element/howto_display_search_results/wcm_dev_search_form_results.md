---
id: wcm_dev_search_form_results
title: How to display search results
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You use a search element that is stored in search component to display the results of a search query.

## Using a search component

1.  Click **New \> Component \> Search** to create a new search component.
2.  Enter [identification](https://www01.egoproducts.com/wps/iehs/topic/com.ibm.qpp.places.help/wcm/wcm_dev_items_id.html) information.
3.  Select a search collection to use.
4.  To page the search result:
    -   Enter the number of results to display per page.
    -   Select the page to display when first rendered.
    -   Enter the maximum number of pages to display.
    -   Enter the number of results pages to read ahead when using a page navigation element. For example, if you enter 3, the page navigation element will calculate results up to 3 pages ahead of the current page. Increasing this number will improve the accuracy of the page navigation element. Lowering this number will improve the performance of the page navigation element when rendered.

        **Note:** To display multiple pages, you will need to use a [page navigation element](https://www01.egoproducts.com/wps/iehs/topic/com.ibm.qpp.places.help/wcm/wcm_dev_elements_page-navigation.html). This is referenced within the header or footer of the search element design specified below.

5.  Select how the search results should be sorted.
6.  Define the design of the search results using HTML and text. 
    -   The text entered in the **Header** and **Footer** designs will appear before and after the displayed search results. A page navigation element is referenced in either the header or footer to provide users with a way of navigating through the search results.
    -   The text entered into the **Results** field defines the format of each search result.
    -   The text entered into the **Separator** field will appear between each displayed search result.
    -   Enter a message to display when no search results are found in the **No result design** field.
7.  Set [access](https://www01.egoproducts.com/wps/iehs/topic/com.ibm.qpp.places.help/wcm/wcm_dev_items_access.html) properties.
8.  Click **Save and close**.

**Table of Contents:**  


**[Creating a search component](wcm_dev_elements_search_using.md)**  
A search element defines the layout of a form that is used to display search results. To use a search, you must create a search component. You cannot add search elements to authoring templates, sites, site areas, or content items.

**[Search result examples](wcm_dev_search_form_results_examples.md)**  
These are examples of how to design your search results.

