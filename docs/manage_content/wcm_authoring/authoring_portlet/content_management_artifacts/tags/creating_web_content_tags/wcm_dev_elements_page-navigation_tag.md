# Page information tag

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

## HCLSoftware U learning materials

To learn more details on how to develop with HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Intermediate)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3500){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"
    - [Creating a page navigation component](../../elements/page_nav_element/wcm_dev_elements_page-navigation_creating.md)
    - [Page navigation design example](../../elements/page_nav_element/wcm_dev_elements_page-navigation_example.md)
