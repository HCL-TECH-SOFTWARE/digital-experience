---
id: wcm_dev_elements_navigator_display
title: Defining Navigator Element Display Options
---




When you define the display options of a navigator, you select a start area, and also define what levels, before and after the start area, are displayed in the navigator.

1.  Select one of the following start types to determine which site area to display as the first navigator item:

    -   Choose **Current Top Level Site Area** to start the navigator from the beginning of the site framework.
    -   Choose **Current Site Area** to start the navigator from the site area that the currently displayed content item is located.
    -   Choose **Current Content** to start the navigator from the currently displayed content item.
    -   Choose **Portal Context** to start the navigator from the current item that is displayed in a web content viewer portlet. If selected, the navigator can be displayed only on a web content viewer portlet. The navigator is not visible until the web content viewer portlet context is set.
    -   Choose **Portal Mapping** to start the navigator from the item that is configured as the default content mapping of a page. If selected, the navigator can be displayed only on a web content viewer portlet. The navigator is not visible until a valid content mapping is set for the current page.
    -   Choose **Selected** to select the site area to start the navigator with:
        -   Click **Select Start Area**.
        -   Select a site area and then click **OK**.
    -   Choose **Query string** to enter query string as the start type. If the query string parameter is not specified or contains an invalid path, the navigator is not rendered. Alternately, you can select **Replace start with Query string** and enter a query string in the **Parameter** field. You can then select one of the other start types that to be used if the query string parameter is not specified or contains an invalid path. For example, if you entered myquery in this field, a navigator that is displayed on a page whose URL contained a query string `?myquery=library1/shoes` would use the path library1/shoes.

        The query string can also be set in the request attributes, for example by using this tag: `[Plugin:RequestAttribute key="myquery" value="library1/shoes" compute="once"]`

2.  Select **Include Start** to display the site area that you defined in "Start Type" as the first navigator item. If not selected, the first site area after the site area that is defined in "Start Type" is displayed as the first navigator item.

3.  Select the number of ancestors to display in a navigator. Select none if "Start Type" equals "Current".

4.  Select the number of descendants to display in a navigator.

5.  Select the number of siblings to display before the current site area.

    !!!note
        This setting applies to all site areas that include top-level site areas.

6.  Select the number of siblings to display after the current site area.

    !!!note
        This setting applies to all site areas that include top-level site areas.

7.  Select **Show Top Level Site Area** to display the top site area as the first navigator item.

8.  Select **Show Content** to display the content items that are located within the current site area.


