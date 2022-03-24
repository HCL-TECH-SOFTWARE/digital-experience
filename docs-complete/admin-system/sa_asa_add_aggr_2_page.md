# Adding an Active Site Analytics aggregator to a portal page 

Portal administrators can manage the aggregators. They can assign an aggregator to one or more portal labels or pages.

As a portal administrator, you assign an aggregator to a page by editing the page properties and adding a new parameter. To do this by using the portal administration portlets, proceed by the following steps:

1.  Add the aggregator to the directory js in the theme directory.

    For example, for the portal theme, the WebDAV location is as follows:

    ```
    mycontenthandler/dav/themelist
    ```

    Take a note of the name of the aggregator file. You need it in later steps. Go to the **Analytics** section of *Modules that are provided with the modularized theme* for information.

2.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

3.  Locate the page to which you want to assign the aggregator. Use the Manage Pages portlet to locate the page.

    **Note:** The page must be located as a child of the portal content root.

4.  Click **Edit Page Properties** for the page that you selected.

    **Note:** You cannot add an Active Site Analytics aggregator to the content root. **Edit Page Properties** is not available for the content root.

5.  To expand the available choices, click the plus sign \(**+**\) icon next to **Advanced Options**.

6.  Click **I want to set parameters**.

7.  In the field **New parameter**, type a string that starts with asa\_aggregator or asa\_dependency. Values that correspond to names that start with the string asa\_aggregator are added to the page body, names that start with asa\_dependency are added to the head. Both the aggregators and dependencies are added to the portal page in alphabetical order according to the Java method `Collections.sort()`.

8.  In the **New value** field, type the name of the aggregator script file.

9.  Click **Add**.

10. Verify that the new parameter is added to the list.

11. Repeat steps 6 - 9 for all aggregators and dependencies.

12. Click **OK** to return to the main Page Properties screen.

13. Click **OK** to save your changes and return to the **Manage Pages** screen.


**Note:** Children pages inherit the script that is set on the parent page. If you want to use a different aggregator on a child page, follow the same procedure that is previously addressed for the child page to make the appropriate assignment. If you want to block inheriting the aggregator setting from the parent page, follow the same procedure, but leave the value empty. As a result, the page has no aggregator that is assigned anymore and all children of the page inherit the new setting.

**Parent topic:**[Collecting analytics data ](../admin-system/sa_asa_collct_data.md)

**Related information**  


[Aggregator patterns and samples ](../admin-system/sa_asa_aggr_xmp.md)

[Modules that are provided with the modularized theme ](../dev-theme/themeopt_oob.md)

[Instrumenting a theme for Active Site Analytics ](../admin-system/sa_asa_use_theme.md)

[Displaying overlay analytics reports ](../admin-system/sa_asa_overlay_stats.md)

