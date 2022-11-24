# Creating a page information tag

You use the page information tag to display page navigation details in the design of a page navigation element.

This is the format of a page information tag:

```
[PageInfo value=" " knowntext=" " unknowntext=" " start=" " end=" " ]
```

To create a page information tag:

1.  Click **Insert a Tag** from a presentation template or element design field. The **Tag Helper** dialog opens.

2.  Select **Page Information** as the tag type.

3.  Select a page information value:

    -   currentPage
    -   totalPages
    -   firstItemOnPage
    -   lastItemOnPage
    -   totalItems
    -   itemsPerPage
    -   unknownPages
    The value "unknownPages" is used to display different text when the total number of pages are either known or unknown. When used you must also use the "knowntext" and "unknowntext" parameters.

4.  Click **OK** to add the tag to your navigator design.


Once you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`knowntext=" "` <br> `unknowntext=" "`|These parameters are used when value="unknownPages". For example: <br> <pre>``` [PageInfo value="unknownPages"   knowntext="of" unknowntext="of at least" ] ``` <br> This can be used with other PageInfo tags to render the following: <br> -   When the total number of pages are known: "Page 2 of 5." <br> -   When the total number of pages are unknown: "Page 2 of at least 5."|
|`start=" "`<br> `end=" "` |The start and end attributes are used to wrap the data that is returned by a tag within other tags, such as HTML. These attributes are not mandatory.|

???+ info "Related information:"
    - [Creating a page navigation component](../../elements/page_nav_element/wcm_dev_elements_page-navigation_creating.md)
    - [Page navigation design example](../../elements/page_nav_element/wcm_dev_elements_page-navigation_example.md)
