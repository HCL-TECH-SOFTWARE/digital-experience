# Defining taxonomy component properties

You use the taxonomy element to define the properties of the taxonomy component.

1.  Click **Select Start Category** to select a category to start the category selection tree.

2.  Select **Include Start** to display the category that you defined in "Start Area" as the first item in the category selection tree. If not selected, the first category after the category that is defined in "Start Area" is displayed as the first item in the category selection tree.

3.  Select the number of child categories to display in the category selection tree that uses the **Depth** field.

4.  To select the categories you would like to be displayed as "selected" when a category tree is first opened, click **Select Category** in the "Categories to include" section. The categories that are selected here appear only in the category selection tree if they are included within the parent categories that are defined in steps 1 and 3.

5.  To display categories as "selected" when a category tree is first opened based on categories that are defined in other sources, select one of the following options:

    1.  To display categories as "selected" when a category tree is first opened based on the categories the currently displayed content item is profiled with, select **Current content**.

    2.  To display categories as "selected" when a category tree is first opened based on the categories the current user is profiled with, select **Current User**.

    3.  Select **Query string** to enter a query string parameter to search for. For example, if you entered `myquery` in this field, a menu that is displayed on a page whose URL contained a search query `?myquery=library1/shoes` would display content that is profiled with a category called shoes from the library called library1. If no library is specified in the original URL the library of the current content item is used, and if that cannot be resolved the default library that is specified in the `WCM WCMConfigService` service is used.

        **Note:** If a category exists in more than one taxonomy, only the first found category is used by the search query. You cannot specify a taxonomy name in the search query. You should rename one of the categories to ensure the search query uses the correct category.

    The categories selected here appear only in the category selection tree if they are included within the parent categories that are defined in steps 1 and 3.

6.  To restrict the categories that are displayed from other sources to specific categories, click **Select Category** in the "Restrict Included Categories to" section.

    The categories that are selected here appear only in the category selection tree if they are included within the parent categories that are defined in steps 1 and 3.

7.  Select **Merge selected categories with included categories** to add categories that are selected in the "Selected Categories" section to category selection tree.

8.  Select **Replace selected categories with included categories** to replace the categories included within the "selected start category" with categories selected in the "Selected Categories" section. If no categories are found by using the criteria that are entered in the "Selected Categories" section, then the "selected start category" is used.

9.  Enter HTML, text, and tags in the component design fields:

    1.  The code that is entered in the header and footer designs will appear before and after the displayed category selection tree.

    2.  The code that is entered into the selected design is used to format selected categories in a category selection tree.

    3.  The code that is entered into the unselected design is used to format unselected categories in a category selection tree.


**Related information**  


[Inserting an image in an element](../panel_help/wcm_dev_elements_insert_image.md)

[Inserting a link in an element](../panel_help/wcm_dev_elements_insert_link.md)

[Inserting element tags](../panel_help/wcm_dev_elements_insert_tags.md)

[Creating web content tags](../panel_help/wcm_dev_referencing_tags.md)

**References:**  


[Inserting an image in an element](wcm_dev_elements_insert_image.md)

[Inserting a link in an element](wcm_dev_elements_insert_link.md)

[Inserting element tags](wcm_dev_elements_insert_tags.md)

[Creating web content tags](wcm_dev_referencing_tags.md)

