# Performing a Cherry picking items for bulk update

Content Reporting Bulk Update added the cherry picking items. You can now pick all or selected items for bulk updating in a report generated through HCL Content Reporting search.

!!!note
    Bulk updates for owners or authors can only be applied to content items, site areas, authoring templates, components, categories, folders, projects, segments, workflow actions, portal pages and items to which you have edit access. To date, adding up to 100 users and updating up to 7000 items have been tested successfully.

Starting CF218, if a bulk update process is running and the server restarts, the system pauses the update process. When the server is available again, you can resume the paused bulk update process through the **Updates** page. For more information, see [Resuming a paused bulk update process](#resuming-a-paused-bulk-update-process).

## Prerequisite

Beginning with HCL Digital Experience 9.5 release update CF214, Content Reporting is enabled by default. For HCL Digital Experience 9.5 release update CF213, Content Reporting should be installed and configured. For instructions on installing Content Reporting on supported environments, see the [Install HCL Digital Experience 9.5 Content Reporting](../installation/index.md) topic.

To cherry pick an items in bulk for update, you must have edit access to the content items selected. If you kick off the bulk update operation without having the required access to the items, the update will fail with the error message `Unauthorized access`.

To start cherry picking process, you must need to follow the process of 

## Using the Cherry picking items for bulk update

1.  Log in to your HCL Digital Experience 9.5 platform and select **Web Content**. Select **Content Reporting** from the Practitioner Studio navigator. The following image shows the Content Reporting landing page.

    ![](../../../../assets/HCL_Content_Reporting_Landing_Page.png)

2. Generate a report on items you want to update. See [Generating a content report](../usage/generate_content_report.md) for instructions.

3. [Export the report](./export_content_report) or execute one of the following supported bulk update operations: [UpdateExpiry](#using-the-content-reporting-bulk-update-updateexpiry-feature) or [Update Owners/Authors](#using-the-content-reporting-bulk-update-ownersauthors-feature).

## Using the Content Reporting Cherry Picking for Bulk Update feature

1. Click the "Bulk update" button in the sub-header.
    - Click the "Bulk update" button to open the bulk update dialog.
    - A tooltip saying "Update items in bulk" will appear on hover.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_button.png)

2. Bulk update dialog box will appear.
    - The dialog will display a message to inform the user to enter actions needed for the update.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_dialog.png)

3. Defining action properties for the update.
    - Click the "View item list" button to start searching valid items.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_action.png)

4. Displaying the results based on the update action and applying the update.
    - User may proceed to update all from the list or specifically select the items for update.
    - Click the "Apply updates" button to open the confirmation dialog.
    - A tooltip saying "Apply updates to all list items" will appear on hover.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_result.png)

5. Displaying the confirmation update dialog.
    - The confirmation dialog will contain the number of items to be updated and the update action.
    - Click "Confirm" to send the bulk update request.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_confirmation.png)

## Updating selected items

1. Selecting items to be updated manually.
    - Items for update can be manually selected via the checkbox that appears on hover over a list item.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_checkbox.png)

2. Applying the updates to the selected items.
    - Click on the "Apply updates" button to proceed with the request.
    - A tooltip saying "Apply updates to selected items" will appear on hover of the button.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_apply.png)

3. Displaying the confirmation update dialog.
    - The confirmation dialog will contain the number of items to be updated and the update action.
    - Cick "Confirm" to send the bulk update request.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_confirmation.png)

4. Send request and display progress bar while still on the bulk update page.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_sendrequest.png)


### Viewing / changing actions

1. Viewing the update action thru the bulk update dialog.
    - Click the "View action" button to access the buld update dialog.
    - A tooltip saying "View or change bulk update action" will appear on hover.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_viewing.png)

2. Displaying the bulk update dialog.
    - Upon display, the dialog has the current action displayed and the user can change the properties or action as needed.
    - Click the "View item list" to trigger the search of valid items.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_display.png)

3. Displaying the valid items to be updated.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_displayvalid.png)

### Viewing the update history

1. Viewing the updates thru the update history page.
    - Click the "Update history" button to go to the update history page.
    - A tooltip saying "View ongoing and past updates" will appear on hover.
    - A counter indicator at the button to show ongoing update that is processing at the moment.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_history.png)

2. Loading the update history page.
    - The activity page will display all updates whether it is a successful update, failed update or an ongoing update.
    - Click the "Back" button to go back to previous page.

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_history_loading.png)


### Empty results

1. Displaying empty results.
    - The page will display the message "No items were found".

    ![](../../../../assets/HCL_Content_Reporting_Cherry_Picking_empty_result.png)

