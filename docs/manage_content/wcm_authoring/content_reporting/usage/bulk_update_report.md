# Performing a bulk update in Content Reporting

Currently, Content Reporting Bulk Update feature supports the following actions: 

- Update expiration date
- Add an owner or author
- Remove an owner or author
- Replace an owner or author

You can execute these actions on content items returned in a report generated through HCL Content Reporting search.

Starting CF218, if a bulk update process is running and the server restarts, the system pauses the update process. When the server is available again, you can resume the paused bulk update process through the **Update history** page. For more information, see [Resuming a paused bulk update process](#resuming-a-paused-bulk-update-process).

Starting CF220, you have the option to select all items or manually pick items that you want to update for your bulk update operation.

## Prerequisite

Beginning with HCL Digital Experience 9.5 release update CF214, Content Reporting is enabled by default. For HCL Digital Experience 9.5 release update CF213, Content Reporting should be installed and configured. For instructions on installing Content Reporting on supported environments, see the [Install HCL Digital Experience 9.5 Content Reporting](../installation/index.md) topic.

To update items in bulk, you must have edit access to the content items selected. If you kick off the bulk update operation without having the required access to the items, the update will fail with the error message `Unauthorized access`. 

## Using the Content Reporting Bulk Update feature

1.  Log in to your HCL Digital Experience 9.5 platform and select **Web Content**. Select **Content Reporting** from the Practitioner Studio navigator. The following image shows the Content Reporting landing page.

    ![](../../../../assets/HCL_Content_Reporting_Landing_Page.png)

2. Generate a report on items you want to update. See [Generating a content report](../usage/generate_content_report.md) for instructions.


3. Execute one of the following supported bulk update operations: [UpdateExpiry](#updating-the-expiration-date-using-content-reporting) or [Update Owners/Authors](#updating-the-owners-or-authors-using-content-reporting).

## Updating the expiration date using Content Reporting

Content managers can trigger bulk updates to update the expiration dates of all queried items. This section provides steps on how to update the expiration date of content items in a report generated through HCL Content Reporting.

!!!note
   Bulk updates for expiry dates can only be applied to content items, site areas, authoring templates, components, categories, and items to which you have edit access. Only items with a workflow are included.

1. After you have generated a report and if there are results, the **Bulk update** button appears in the application header. Click the **Bulk update** button.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_button.png)

2. In the **Update items** dialog box, there are two fields: **Property**, and **Change to**. In the **Property** field, choose **Expiry date**. In the **Change to** field, enter the new expiry date of the selected items. After entering the date, the **View item list** button is enabled. Click the **View item list** button.
    
    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_action.png)

    To close the dialog box, click **Cancel**.
    
3. In the list, select all items or choose only the items you want to update.

    - To manually pick items you want to update, hover over an item you want to select and check the box that appears.
        ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_select_some.png)
    - To update all items on the current page only, click the first checkbox on the row of the table column headers.
        ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_select_current_page.png)
    - To update all items on all pages, check the **Select items from all pages** checkbox in the main header to select all items from all pages.
        ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_select_all_pages.png)

4. Click the **Apply updates** button.

    A confirmation dialog box appears.

5. In the confirmation dialog box, verify the number of items you want to update and if you entered the correct expiration date. If the values are correct, click the **Update** button to start the bulk update operation.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_confirmation.png)

## Updating the owners or authors using Content Reporting

Content managers can trigger bulk updates to update the owners and/or authors of all queried items. This section provides steps on how to update the owners or authors of content items in a report generated through HCL Content Reporting.

!!!note
    Bulk updates for owners or authors can only be applied to content items, site areas, authoring templates, components, categories, folders, projects, segments, workflow actions, portal pages and items to which you have edit access. To date, adding up to 100 users and updating up to 7000 items have been tested successfully.

1. After you have generated a report and if there are results, the **Bulk update** button appears in the application header. Click the **Bulk update** button.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_bulkupdate_button.png)

2. In the **Update items** dialog box, there are six options: **Property**, **Action**, **User attribute**, **Users**, **Group attribute**, and **Groups**.
    - In the **Property** field, select the property to be updated, either **Author** or **Owner**. 
    - In the **Action** field, select the action to be taken on the selected items, either **Add**, **Remove**, or **Replace**. 

        ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_bulkupdate_updateitem.png)

        !!!note
            For the **Replace** action, there are two fields each for users and groups involved in the action: **Remove users** and **Remove groups**, **Add users** and **Add groups**. In the **Remove users** or **Remove groups** field, enter a value according to the selected attribute of the user or group you want to replace with the value you will add in the **Add users** or **Add groups** field.

        ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_update_criteria.png)

    - In the **User attribute** field, select a user attribute to enable the **Users** field. In the **Users** field, enter a corresponding value for the selected attribute. For example, if you selected the **Job Title** attribute, enter a job title in the **Users** field and all users with that job title appear in the dropdown. Note that this field is a type-ahead input field that displays a list of suggested users according to the input and selected user attribute. Only suggested users are valid.
    - You can also select a **Group attribute** to enable the **Groups** field. In the **Groups** field, enter a corresponding value for the selected attribute. For example, if you selected the **Display Name** attribute, enter a display name in the **Groups** field and all groups with that display name appear in the dropdown. Note that this field is a type-ahead input field that displays a list of suggested groups according to the input and selected group attribute. Only suggested groups are valid.

3. After filling out the fields, click the **View item list** button.

4. In the list, select all items or choose only the items you want to update.

    - To manually pick the items you want to update, hover over an item you want to select and check the box that appears.
        ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_select_some_authors.png)
    - To update all items on the current page only, click the first checkbox on the row of the table column headers.
        ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_select_current_page_authors.png)
    - To update all items on all pages, check the **Select items from all pages** checkbox in the main header to select all items from all pages.
        ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_select_all_pages_authors.png)

5. Note the number of items to be affected by the update and check if you entered the correct values for properties to update. If the values are correct, click the **Update** button. Otherwise, you can click **Cancel** and return to the previous dialog box where you can change the incorrect values.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_confirm_author.png)

    To close the dialog box, click **Cancel**.

You can [track the bulk update](#tracking-bulk-updates-and-viewing-bulk-update-results) through the snackbar or through the **Update history** page. Reports are automatically updated after the bulk update process is complete.

### Changing the bulk update action

After kicking off a previous update operation, (for example, [updating the expiration date](#updating-the-expiration-date-using-content-reporting)), you can view then change the bulk update action to get a different set of filtered results to update next.

1. In the **Bulk update** page, click the **View action** button.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_displayvalid.png)

2. In the **Update items** dialog box, you can change the action and properties as needed. Click the **View item list** to search for valid items. 

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_actions.png)

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_action.png)

3. Select the items you want to update.

    If there are no valid items, the page displays the message "No items were found".

## Tracking Bulk Updates and viewing Bulk Update results

When a bulk update is triggered, a snackbar appears in the bottom right corner of the screen. The snackbar displays the status of the update. If the process is still ongoing, it shows how many items have already been processed against the total number of items. If the process is complete, it shows how many items were updated and how many items were not.

   ![](../../../../assets/HCL_Content_Reporting_Bulk_Update_Snackbar.png)

There are two ways to track the bulk update: through the snackbar and through the **Update history** page.

### Using the snackbar

The snackbar that appears when a bulk update is triggered tracks up to five bulk update processes.

   This is the snackbar for an ongoing process.
   ![](../../../../assets/HCL_Content_Reporting_Snackbar_In_Progress.png)

   This is the snackbar if every item was successfully updated.
   ![](../../../../assets/HCL_Content_Reporting_Snackbar_Success.png)

   This is the snackbar if some items were not updated.
   ![](../../../../assets/HCL_Content_Reporting_Snackbar_Warning.png)

   This is the snackbar if all items were not updated.
   ![](../../../../assets/HCL_Content_Reporting_Snackbar_Error.png)

1. On the snackbar, there is an option to view the items processed only when the bulk update process is complete. Click **View items** to check the details of each item that has been processed. 

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_author_snackbar.png)
    
    A dialog box for the reports appears.

2. In the header of the dialog box, you can see the total number of updated items and the number of failed items. There are four columns on the dialog box:

    - **Title** - This column shows the title of the item processed.
    - **Item type** - This column shows the type of item processed.
    - **Update Status** - This column tells whether the item was successfully updated (shown as **OK**) or not (an error message containing why the update failed is displayed).
    - **Created by** - This column shows the creator of the item.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_snackbar_view_page.png)

### Viewing the Update History page

1. To access the update history, click the **Update history** button in the application header. The **Update history** button also shows the number of ongoing bulk update operations triggered.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_history_button.png)

2. In the **Update history** page, there is a table showing the bulk updates that were triggered. This table has five columns:

    - **Update** - This column indicates whether the bulk update is ongoing or completed. Once complete, there is a summary of items that have been processed. This summary shows how many items were updated and how many failed. This column also contains a button to show the report dialog where you can check the details of each item that has been processed.
    - **Action** - This column shows actions that were taken during the bulk update.
    - **Requested by** - This column shows who triggered the bulk update process.
    - **Updated on** - This column shows when the bulk update was triggered.
    - **Polling ID** - This column shows a unique identifier for the bulk process.

    ![](../../../../assets/HCL_Content_Reporting_Updates_Resume_history_loading.png)

    To return to the **Content Reporting** landing page, click the back button found on the upper left corner of the **Update history** page.

3. In the **Update history** page table, hover over a row of a completed bulk update to display the view action button. Click this button to display the dialog for the list of items processed and their details.

    ![](../../../../assets/HCL_Content_Reporting_Updates_Resume_Update_Button.png)

4. In the header of the dialog box, the number of updated items and the number of failed items are displayed. There are four columns on the dialog box:

    - **Title** - This column shows the title of the item processed.
    - **Item type** - This column shows the type of item processed.
    - **Update Status** - This column tells whether the item was successfully updated (shown as **OK**) or not (an error message containing why the update failed is displayed).
    - **Created by** - This column shows the creator of the item.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_snackbar_view_page.png)

#### Resuming a paused bulk update process
If a bulk update process is running and the server restarts, the system pauses the update process. When the server is available again, you can resume the paused bulk update process.

!!!note
    You can only resume a paused bulk update process for owners and authors if the update involves a limited number of users and groups. Currently, there is a size limitation in the database column that stores the action string that specifies the owners or authors used in an update. If the action string exceeds 255 characters, you cannot resume the paused bulk update process. The operation fails and you must start the bulk update process again.

    If the bulk update process for owners and authors involves a large number of users, it is recommended to create a user group instead. Add all of the users to the group and then select the new group when initiating the bulk update operation. For more information, see [Managing users and groups](../../../../deployment/manage/security/people/authorization/controlling_access/managing_users_groups/index.md).

To continue a paused bulk update process, refer to the following steps:

1. Access the **Update history** page through the button on the application header. Click the **Update history** button to go to the **Update history** page.

2. In the **Update history** page table, hover over a row of a paused update process to display the resume update button. Click this button to display the confirmation dialog box to resume the bulk update process.

    ![](../../../../assets/HCL_Content_Reporting_Updates_Resume_Update_Button.png)

3. The **Confirm resume update** dialog box appears. Verify the items you want to update and click **Resume** to continue. Otherwise, you can click **Cancel**.

    ![](../../../../assets/HCL_Content_Reporting_Update_Confirmation_Dialog_Resume.png)

After resuming the update, you can track the progress in the **Update history** page.
