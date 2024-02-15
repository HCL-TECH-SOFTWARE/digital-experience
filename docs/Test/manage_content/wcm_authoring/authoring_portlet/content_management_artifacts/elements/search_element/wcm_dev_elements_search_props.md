---
id: wcm_dev_elements_search_props
title:  search results design
---

# Creating a search results design


The search element is used to define the design that is used to display search results.

1.  Select a search service.

2.  Select a search collection.

3.  Specify paging options for the search element.

    1.  Enter the number of items that are displayed in each navigator page.

    2.  Enter the number of the page to display first.

    3.  Enter the maximum number of results pages to be included in the navigator design.

    4.  Enter the number of results pages to read ahead. For example, if you enter 3, the page navigation element calculates results up to three pages ahead of the current page. Increasing this number improves the accuracy of the page navigation element. Lowering this number improves the performance of the page navigation element when rendered.

4.  Select how to sort the search results.

5.  Enter HTML, text, and tags into the component design fields to set the layout of the search results:

    -   **Header, separator and footer:**

        The code that is entered in the header designs and the footer designs will appear before and after the displayed search results. The code that is entered into the separator appears between each displayed search result.

    -   **Result:**

        The search results are displayed here. To display the search results as hyperlinks, you must include a placeholder in the search result layout. The simplest way to create a result layout is to use the "namelink" placeholder.

    -   **No Results:**

        Enter text to display if no results are returned.



???+ info "References" 
    -   [Inserting an image in an element](../../elements/element_designs/wcm_dev_elements_insert_image.md)
    -   [Inserting a link in an element](../../elements/element_designs/wcm_dev_elements_insert_link.md)
    -   [Inserting element tags](../../elements/element_designs/wcm_dev_elements_insert_tags.md)
    -   [Creating web content tags](../../../content_management_artifacts/tags/creating_web_content_tags/index.md)

