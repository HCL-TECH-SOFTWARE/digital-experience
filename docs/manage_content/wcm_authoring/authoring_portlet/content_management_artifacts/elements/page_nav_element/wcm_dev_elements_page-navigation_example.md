# Page navigation design example

This is an example of a design of a page navigation element.

This example uses two page navigation elements to produce a page navigation system like this:

![Examples of the two page navigation elements that produce a page navigation system](../page_nav_element/_img/page_nav_system.png)

## First page navigation element

1.  Create a page navigation component named "firstnavigation".
2.  Select both **Shuttle (first, previous, next, and last controls)** and **Paging (page numbering and continuation)**.
3.  Select **Limit number of pages** and type 3 in the associated field.
4.  Enter the following text in these element design fields:

    |Design Element|Design code|
    |--------------|-----------|
    |**Header**|`<span>`|
    |**Footer**|`</span>`|
    |**Separator**|`| </span><span>`|
    |**First control - active design**|`<font color="#000000">&lt;&lt;</font>`|
    |**First control - inactive design**|`<font color="#999999">&lt;&lt;</font>`|
    |**Previous control - active design**|`<font color="#000000">&lt;</font>`|
    |**Previous control - inactive design**|`<font color="#999999">&lt;</font>`|
    |**Next control - active design**|`<font color="#000000">&gt;</font>`|
    |**Next control - inactive design**|`<font color="#999999">&gt;</font>`|
    |**Last control - active design**|`<font color="#000000">&gt;&gt;</font>`|
    |**Last control - inactive design**|`<font color="#999999">&gt;&gt;</font>`|
    |**Continuation**|`...`|


## Second page navigation element

1.  Create a page navigation component named "secondnavigation".
2.  Select both **Jump to page (page input box)** and **Page size (page size selection)**.
3.  Define this setting in the **Jump to page (page input box)** section:

    -   **Field label**: Go to page:
    -   **Field size**: 3

4.  Define this setting in the **Page size control** section:

    -   **Field label**: Number of items to display:
    -   **Page sizes**:

        ```
        10 | 10
        50 | 50
        0 | All
        ```

5.  Enter the following text in these element design fields:

    |Design element|Design code|
    |--------------|-----------|
    |**Header**|`<span>`<br>`Page [PageInfo value="currentPage" ]`<br>`[PageInfo value="unknownPages" knowntext="of" unknowntext="of at least" ]`<br>`[PageInfo value="totalPages" ].`<br>`</span>`<br>`<span>`|
    |**Footer**|`| </span>`|
    |**Separator**|`</span><span>`|


## Referencing the page navigation components in another element design

You use component tags to reference both page navigation components in another element design, such as a menu:

```
    <div>
    [component name="firstnavigation" ]
    <br>
    [component name="secondnavigation" ]
    </div>
```

???+ info "Related information" 
    -   [Creating a page information tag](../../..//content_management_artifacts/tags/creating_web_content_tags/wcm_dev_elements_page-navigation_tag.md)


