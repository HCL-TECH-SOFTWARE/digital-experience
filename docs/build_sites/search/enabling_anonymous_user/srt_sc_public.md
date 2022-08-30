# Placing the Search Center on a public portal page

Depending on your environment, you might want to place the Search Center portlet on a public page of your HCL Digital Experience and have the search box in the portal theme take users who do a search to that public Search Center.

To do this, you need to create your custom search center page, place a copy of the Search Center on it, and adapt the file search.jsp accordingly. Proceed as follows:

1.  Create your custom search center page.

    Complete the fields and select options as required. Make sure to specify a Search and Tag Center profile for the page as follows:

    -   If you create the page by using the Manage Pages functionality in the site toolbar, proceed as follows:
        1.  From the site toolbar, select **Page** to edit the new search center page.
        2.  From the General tab, select **Edit Page Properties**.
        3.  In the Manage Page Properties window, select the **Advanced** tab.
        4.  Scroll to the Metadata section of the Manage Page Properties window.
        5.  To specify the Search and Tag Center profile for the custom search center page, add the key resourceaggregation.profile with the value of profiles/profile\_search\_tag.json to the list of key value pairs.

            **Note:** If you created the custom search center page as a child to the original Search Center page, the Search and Tag Center profile is inherited from the parent page.

        6.  Click **Save**.
    -   If you create the page by using the Manage Pages administration portlet, proceed as follows:
        1.  Select **Edit Page Properties** for the page.
        2.  Select **Advanced options**.
        3.  Select **I want to set parameters**.
        4.  Add the parameter resourceaggregation.profile with a value of profiles/profile\_search\_tag.json.
        5.  Click **OK** \> **OK**.
2.  Add the Search Center portlet to the custom search center page by completing the following steps:

    1.  From the custom search center page, select the **Create** tab in the site toolbar.

    2.  From the Applications tab, select the **Search Center** portlet.

    3.  Select **Add to Page ...** to add the Search Center portlet to the page.

3.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

4.  Locate your custom Search Center page in the Manage Pages portlet.

5.  Give your custom Search Center page a unique name by completing the following steps:

    1.  Select **Edit Page Properties**.

    2.  Specify a value for the **Unique name**.

    3.  Click **OK**.

6.  Give the portlet window for the Search Center a unique name:

    1.  Select **Edit Page Layout**.

    2.  From the portlet menu, select **Set portlet window unique name**.

    3.  Specify a value for the **Unique name**.

    4.  Click **OK** \> **Done**.

7.  Change to the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/themes/html/dynamicSpots/modules/search`

8.  Edit the file search.jsp.

9.  Locate the following code snippet that points to the default Search Center page:

    ```
    wp.navigationModel['ibm.portal.Search Center'].urlGeneration.setPortlet('ibm.portal.Search Center Portlet Window')
    ```

10. Change the values for `navigation node` and `control holding`:

    -   Change the value for `navigation node` to the unique name of your custom Search Center page.
    -   Change the value for `control holding` to the unique name that you gave the copy of your Search Center portlet.
    After your updates, the code snippet might look like the following:

    ```
    wp.navigationModel['ibm.portal.your_public_search_center_page_unique_name'].urlGeneration.setPortlet('ibm.portal.your_public_search_center_portlet_window_unique_name')
    ```

11. Restart your portal server.


When your portal users do a search by using the search box in the theme, they are now directed to the Search Center on your public portal page.


