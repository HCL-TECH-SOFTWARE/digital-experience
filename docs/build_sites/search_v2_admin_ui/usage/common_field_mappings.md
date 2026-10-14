# Managing common field mappings

This section describes how to manage common field mappings in the Search Admin UI.

Common field mappings map the fields used in search to the corresponding `documentObject` field for each content source type. Each content source type indexes with default field mappings.

!!! note
    Required field mappings (title, description, link, type, and tags) cannot be renamed or deleted. You can only modify their mapped value for each content source type, or add and modify custom fields.

On the **Common Field Mappings** panel, you can do the following tasks:

## Viewing common field mappings

1. Click the **Mapping & Translations** tab. The list of existing common field mappings is displayed.

    ![](../../../assets/Search_Admin_UI_mapping_list.png)

!!! note
    If a common field mapping has not been edited, it shows a **Default** label.

    ![](../../../assets/Search_Admin_UI_mapping_default.png)

    Once it has been edited, or a new custom field mapping has been added, it shows a **Customized** label instead.

    ![](../../../assets/Search_Admin_UI_mapping_customized.png)

## Adding a common field mapping

1. Click **Add common field mapping**.

    ![](../../../assets/Search_Admin_UI_mapping_add_button.png)

2. In the **Add Common Field Mapping** form that opens, add a custom common field and its mapped value for each type.

    ![](../../../assets/Search_Admin_UI_mapping_add_form_dialog.png)

3. To add more common field mappings in the same form, click **Add another common field mapping**.

    ![](../../../assets/Search_Admin_UI_mapping_add_form_add_more.png)

4. Once you are done, click **Add**.

## Searching for a common field mapping

1. Type a search term in the **Search common field mappings** field. The list is filtered to show the results matching the search term.

    ![](../../../assets/Search_Admin_UI_mapping_search_results.png)

## Updating a common field mapping

1. Hover on a common field mapping.
2. Click the **Edit** icon.

    ![](../../../assets/Search_Admin_UI_mapping_edit_button.png)

3. In the dialog that opens, change the mapped value, then click **Save**.

    ![](../../../assets/Search_Admin_UI_mapping_edit_form_dialog.png)

## Deleting a common field mapping

You can only delete a custom common field mapping.

1. Hover on a mapping.
2. Click the **Delete** icon.

    ![](../../../assets/Search_Admin_UI_mapping_delete_button.png)

3. In the confirmation dialog, click **Delete** to confirm, or click **Cancel** to cancel the deletion.

    ![](../../../assets/Search_Admin_UI_mapping_delete_confirm_dialog.png)

Deleting a custom field removes it from the list for all content source types.
