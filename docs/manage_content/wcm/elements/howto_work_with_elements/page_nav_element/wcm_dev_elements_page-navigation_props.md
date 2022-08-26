# Defining a page navigator


You use the page navigation element to define a page navigator.

1.  Select the types of page navigation controls that you want to use with the page navigation element.

    -   Select **Shuttle** to include relative navigation links, such as previous page, next page, first page, and last page.
    -   Select **Paging** to include navigation links based on page numbers.
    -   Select **Jump to page** to include a field where users can type the page number to display.
    -   Select **Page size** to include different options for the number of items to display on a page.
2.  Specify the layout and design of the header, separator, and footer for the page navigation element by entering HTML tagging in the respective input fields.

    The code that is entered in the header and footer designs will appear before and after the displayed page controls. The code that is entered into the separator design appears between each displayed page control.

3.  If you are using shuttle paging controls, specify their layout and design by entering HTML tagging in the input fields.

    -   **First control**

        The **First** control is used to browse directly to the first page in a set of pages. You must define two layouts:

        -   The **active design** is displayed when the first page in a set of pages is not currently displayed.
        -   The **inactive design** is displayed when the first page in a set of pages is displayed.
    -   **Previous control**

        The **Previous** control is used to browse to the page immediately preceding the currently displayed page. You must define two layouts:

        -   The **active design** is displayed when a page precedes the currently displayed page is available.
        -   The **inactive design** is displayed when there is no available page preceded the currently displayed page. For example, when the first page in a set of pages is displayed.
    -   **Next control**

        The **Next** control is used to browse to the page that follows the currently displayed page. You must define two layouts:

        -   The **active design** is displayed when a page that follows the currently displayed page is available.
        -   The **inactive design** is displayed when there is no available page that follows the currently displayed page. for example, when the last page in a set of pages is displayed.
    -   **Last control**

        The **Last** control is used to browse directly to the last page in a set of pages. You must define two layouts:

        -   The **active design** is displayed when the last page in a set of pages is not currently displayed.
        -   The **inactive design** is displayed when the last page in a set of pages is displayed.
4.  If you are using page number controls, specify the paging options and continuation design.

    1.  Indicate how many pages you want to make available from the page navigation element at one time.

        -   Click **Show all pages** to include navigation links for every page in the result set.
        -   To display a subset of the result set, click **Limit number of pages**, and enter the number of pages you want to include.
    2.  If you are limiting the number of pages that are displayed in the page navigation element, specify the layout and design of the **Continuation** control by entering HTML tagging in the input field.

        The **Continuation** control is displayed on either side of the page numbers to provide access to the preceding or following set of pages.

5.  If you are using the **Jump to page** control, specify the following parameters:

    1.  Enter a field label to display.

    2.  If you would like to display the current page number in a **Jump to page** field, select **Show current page number in field**.

    3.  Type a number to define the **Jump to page** field width.

        **Note:** By default, if a user enters a number in the **Jump to page** field that is higher than the total number of pages, the **No Result Design** is returned. If you want to get the last page returned regardless of how high a number a user enters, ensure that the `handle.invalid.page` property is defined in the **WCM WCMConfigService** service with a value of `false`.

6.  If you are using the **Page size** control, specify the following parameters:

    1.  Enter a field label to display.

    2.  Enter the page size options to display by using the following format:

        ```
        number|text
        ```

        You enter each option on a new line. To display all items, enter "0" in the number parameter.

        For example, to display options to display 10 items per page, 50 items per page and all items, enter the following text:

        ```
        10|Small
        50|Large
        0|All 
        ```


**Related information**  


[Inserting an image in an element](wcm_dev_elements_insert_image.md)

[Inserting a link in an element](wcm_dev_elements_insert_link.md)

[Inserting element tags](wcm_dev_elements_insert_tags.md)

[Creating web content tags](wcm_dev_referencing_tags.md)

