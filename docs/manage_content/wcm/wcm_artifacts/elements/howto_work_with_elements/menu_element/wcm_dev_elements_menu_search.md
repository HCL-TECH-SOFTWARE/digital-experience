---
id: wcm_dev_elements_menu_search
title: Defining menu element search properties
---




Specify the search criteria to be used when you generate the menu element. You can limit the search according to the properties of content items, including authoring templates, site areas, categories, and keywords.

Between different criteria, menu searches are "and" searches, but within each search criteria, menu searches are "or" searches. For example, a menu element that searches for two different categories and an authoring template displays content items that are profiled with at least one of each profile type. Content that matches only one profile type is not displayed.

Menus do not display search results if you select a search criteria but do not enter any search parameters. For example, if the menu is configured to display results based on categories, but no categories are specified in the menu form, then no matches are displayed.

1.  Select the search criteria types that you would like to use in this search query, and then enter the following details.

2.  To exclude the currently displayed content item if returned in the search results, select **Exclude current content item from results**.

3.  To search for content items that are based on specific authoring templates:

    1.  Click **Select Authoring Templates** to search for content items that use the selected authoring templates.

    2.  Use the following options to dynamically create search criteria:

        -   To include authoring templates that are defined in a rendering portlet configuration in the search, select **User-specified rendering portlet configuration**.
        -   To include the authoring template that is used by the currently displayed content item, select **Current authoring template**.
        -   Enter a query string parameter to search for. For example, if you entered `myquery` in this field, a menu that is displayed on a page whose URL contained a search query `?myquery=library1/shoes` would display content that used an authoring template that is named `shoes` from the library named `library1`. If no library is specified in the original URL, the default library that is specified in the `WCM WCMConfigService` service is used.

            The query string can also be set in the request attributes, for example by using this tag:

            ```
            [Plugin:RequestAttribute key="myquery" value="library1" compute="once"]
            ```

        -   Select **Merge selected authoring templates with included authoring templates** to add authoring templates that are selected in the Further Options section to the selected authoring templates.
        -   Select **Replace selected authoring templates with included authoring templates** to replace the selected authoring templates with authoring templates selected in the **Further Options** section. If no authoring templates are found with the criteria that are entered in the **Further Options** section, then the selected authoring templates are used.
4.  To search for content items that are stored in specific libraries:

    1.  Click **Location** and then **Libraries**.

    2.  Use the following options to dynamically create search criteria:

        -   To include libraries that are defined in a rendering portlet configuration in the search, select **User-specified rendering portlet configuration**.
        -   To include the library the currently displayed content item is located under in the search, select **Current Library**.
        -   Select **Enter a Query string parameter** to search for libraries with a query string. For example, if you entered myquery in this field, a menu that is displayed on a page whose URL contained a search query ?myquery=library1 searches for all content items under the library named library1.
        -   Select **Merge selected libraries with included libraries** to add libraries that are selected in the **Further Options** section to the selected libraries.
        -   Select **Replace selected libraries with included libraries** to replace the selected libraries with libraries selected in the **Further Options** section. If no libraries are found with the criteria that are entered in the Further Options section, then the selected libraries are used.
5.  To search for content items that are located within specific site areas:

    1.  Click **Location** and then **Site Areas**.

    2.  To include all ancestors of the selected site areas in the search, select **Include Ancestors**.

    3.  To include all descendants of the selected site areas in the search, select **Include Descendants**.

    4.  Click **Select Site Areas** and to search for content items that are located within the selected site areas.

    5.  Use the following options to dynamically create search criteria:

        -   To include site areas that are defined in a rendering portlet configuration in the search, select **User-specified rendering portlet configuration**.
        -   To include the site area the currently displayed content item is located under in the search, select **Current content**.
        -   Select the site areas that you would like restrict the search to. Only the selected site areas that also are found in the portlet-defined or content-defined site areas are used in the search.
        -   Enter a query string parameter to search for. For example, if you entered `myquery` in this field, a menu that is displayed on a page whose URL contained a search query `?myquery=library1/shoes` would display content that is located under a site area that is named `shoes` from the library named `library1`. If no library is specified in the original URL, the default library that is specified in the `WCM WCMConfigService` service is used.

            The query string can also be set in the request attributes, for example by using this tag:

            ```
            [Plugin:RequestAttribute key="myquery" value="library1/shoes" compute="once"]
            
            ```

        -   Select **Merge selected site areas with included site areas** to add site areas that are selected in the **Further Options** section to the selected site areas.
        -   Select **Replace selected site areas with included site areas** to replace the selected site areas with site areas selected in the **Further Options** section. If no site areas are found with the criteria that are entered in the **Further Options** section, then the selected site areas are used.
6.  To search for content items that are profiled with specific categories:

    1.  To include all ancestors of the selected categories in the search, select **Include Ancestor**s.

    2.  To include all descendants of the selected categories in the search, select **Include Descendants**.

    3.  To return content items that are profiled only with all selected categories, select **Results must match All Categories**.

    4.  Click **Select Category** to search for content items that are profiled with the selected categories.

    5.  Use the following options to dynamically create search criteria:

        -   To include categories that are defined in a rendering portlet configuration in the search, select **User-specified rendering portlet configuration**.
        -   To include the categories the currently displayed content item is profiled with in the search, select **Current content**.
        -   To include the categories that the current user is profiled with in the search, select **Current user**.
        -   Select the categories that you would like restrict the search to. Only the selected categories that also are found in the portlet-defined, user-defined, or content-defined categories are used in the search.
        -   Enter a query string parameter to search for. For example, if you entered `myquery` in this field, a menu that is displayed on a page whose URL contained a search query `?myquery=library1/shoes` would display content that is profiled with a category named `shoes` from the library named `library1`. If no library is specified in the original URL the library of the current content item is used, and if that cannot be resolved the default library that is specified in the `WCM WCMConfigService` service is used.

            **Note:** If a category exists in more than one taxonomy, only the first found category is used by the search query. You cannot specify a taxonomy name in the search query. Rename one of the categories to ensure that the search query uses the correct category.

            The query string can also be set in the request attributes, for example by using this tag:

            ```
            [Plugin:RequestAttribute key="myquery" value="library1/shoes" compute="once"]
            
            ```

        -   Select **Merge selected categories with included categories** to add categories that are selected in the **Further Options** section to the selected categories.
        -   Select **Replace selected categories with included categories** to replace the selected categories with categories selected in the **Further Options** section. If no categories are found with the criteria that are entered in the **Further Options** section, then the selected categories are used.
7.  To search for content items that are profiled with specific keywords, enter keywords to search for in the **Matching Content Keywords** field that is separated by commas. Keyword searches are case-sensitive.

    1.  Use the following options to dynamically create search criteria:

        -   To include the keywords the currently displayed content item is profiled with in the search, select **Current content**.
        -   To include the keywords that the current user is profiled with in the search, select **Current user**.
        -   Enter a query string parameter to search for. For example, if you entered `myquery` in this field, a menu that is displayed on a page whose URL contained a search query `?myquery=shoes` would display content that is profiled with a keyword called `shoes`. No library is specified when you use query strings with keywords.

            The query string can also be set in the request attributes, for example by using this tag:

            ```
            [Plugin:RequestAttribute key="myquery" value="shoes" compute="once"]
            ```


