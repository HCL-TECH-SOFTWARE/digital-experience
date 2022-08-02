# Using the view definitions provided with social rendering on your portal pages

The social rendering feature provides you with a set of predefined view definitions. You can add them to the pages of your HCL Portal and modify them according to your requirements. For example, you can define which types of social objects are listed, how they are filtered, sorted, and presented. These tasks are done by a page editor.

**Notes:**

-   Social rendering view definitions are represented by Web Content Manager content items. Therefore, you can drag and drop these view definitions only to managed pages or pages that have an explicitly defined web content association to a site area in Web Content Manager. For more information, see *Web content associations*.
-   The list view definitions that are provided with social rendering use the HCL Connections search service remote API to retrieve the social objects that are displayed in the list. This action has the following consequences:

    -   Only information that is available in the HCL Connections search feed can be displayed in the social lists.
    -   Updates to social objects in HCL Connections do not appear in the social lists that are provided with social rendering until the index of the HCL Connections search service was updated.
    For more details about how to administer the HCL Connections search service, read the information about *Administering Search* in the HCL Connections product documentation.


1.  To add a social rendering view definition to a portal page and modify it as required, proceed as follows:
2.  Select the **Edit Mode** of the page.

3.  Add the social list of your choice to the portal page:

    1.  Select **Create** \> **Content** from the toolbar.

    2.  Open the **Social Content** site area from the selection list.

    3.  Select the view definition of your choice and place it on the page by drag-and-drop or by clicking the **Add this content to the page** plus sign icon.

        You can choose from the following types of lists:

        -   List of Community Files
        -   List of Community Content
        -   List of Community Blog Posts
        -   List of Community Forum Topics
        -   List of Community Events
        -   List of Files
        -   List of Social Content
        -   List of Blog Posts
        -   List of Forum Topics
        -   List of Communities
        -   List of People
        -   Forum Topic Details.
    4.  Save your changes.

4.  Remaining in page edit mode, click **Display component action menu** in the social list portlet skin.

    The component action menu opens.

5.  Select the **Open Edit Form** menu item.

    The Web Content Manager inline edit dialog opens up and shows the authoring experience for the view definition.

6.  Modify the social list definition to serve the information appropriate to the current page.

    For a list and descriptions of the available options, see *Customizing social list definitions by using inline editing*.


**Parent topic:**[Working with lists of social objects](../social/soc_rendr_tsk_socl_list.md)

**Related information**  


[Customizing social list definitions by using inline editing](../social/soc_rendr_cust_socl_list.md)

[Web content associations](../wcm/wcm_delivery_contentmap_about.md)

[Administering Portal Search](../admin-system/srtadmsrch.md)

