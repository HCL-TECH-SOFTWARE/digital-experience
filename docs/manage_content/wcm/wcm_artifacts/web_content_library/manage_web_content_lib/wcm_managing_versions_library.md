# Restoring items in a library

You can restore a set of items within a library that either have the same label or were versioned at, or before, a specified date and time.

-   You can restore only one set of items at a time. You cannot run a second restore request until the first request is completed. If you are restoring many items, this action might take some time.
-   When you restore items that contain links or references to other items, if the original item no longer exists you are prompted to select a new item to link or reference.
-   You must be an Administrator to work with web content libraries.
-   A library cannot be restored while there are any items currently locked or checked out by users. Before you restore a library you, must view all published items in a library and unlock any items marked as checked out or locked.
-   Labels that you apply to versions are not syndicated to subscribers.

1.  Click the **Administration menu** icon in the toolbar.

2.  Click **Portal Content** \> **Web Content Libraries**.

3.  Click **Additional Tasks**:

    -   **Restore all by Date**

        Select this option to restore the most recent version of all items in a library that is saved before the specified date and time. The date and time that is selected here are based on the timezone of the server you are accessing, not the timezone of the computer you are using.

    -   **Restore all by Label**

        Select this option to restore all items that match the specified label.

4.  Click **Additional Tasks** and then **View Report** to open a list of library restore reports.

<!--
**Parent topic:**[Managing web content libraries](../panel_help/wcm_admin_libraries.md) -->


???+ info "Related information:"
    - [How to manage versions of items](../../../wcm_content_delivery/wcm_user_assistance/mng_content_with_auth_portlet/item_management_features/wcm_managing_versions.md)

