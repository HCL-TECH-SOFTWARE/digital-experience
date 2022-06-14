# Reuse blocks across pages

Users to reuse a content item multiple times across different pages of their HCL Digital Experience sites. Reusable content items are called **reusable blocks**.

As of HCL Digital Experience CF203 and higher releases, the only reusable content element is the Content Container. More content items will be introduced in future releases.

To access available reusable blocks, you need to be on the HCL Design Studio (Beta) Page editor and click the **Reusable blocks** icon as shown below:

![Reusable blocks panel](../../images/Access_reusable_blocks.png) 
![Reusable blocks](../../images/reusable_blocks_content_containers.png)

>**Note:** A reusable block is not made available or to be reused if it is already used in a page. For example, the three reusable blocks (`Designer-Amanda Smithsen`, `Profile - Woodburn Studio`, and `Designer Contact Me`) are not available for reuse in the said page as they are already in use:

![Unavailable Reusable Blocks](../../images/unavailable_reusable_blocks.png)

## Create a new reusable block

Content containers with WCM Content Items are automatically created as new reusable blocks, and are automatically added in the **Reusables** panel as soon as they are created, as shown below:

![Reusable blocks panel](../../images/Choose_reusable_block.png)

You can create a reusable block as if you are creating a new content container for your page.

1.  To create a new content container, follow the steps in [Update a content item](update_content_items.md).
2.  Access the newly-created reusable block in Page editor view, then open the Reusable blocks panel as shown below:

    ![Access new Reusable Block](../../images/access_new_reusable_block.png)

## Edit an existing reusable block

To edit an existing reusable block, follow the steps in [Update a content item](update_content_items.md).

>**Note:** Make sure the name of your reusable block is unique and identifiable for you to be able to quickly locate it from the list.

## Delete a reusable block

>**Notes:**<br> 
>- Deleting a reusable block results in an error if the reusable block is being used in your current or other pages. Deleting a reusable block also results in an error if the reusable block has already been deleted by another authorized user. In this case the **Reusables** panel refreshes and updates the list of reusable blocks.
<br>
>- In previous versions (CF196 - CF202), once you delete a Content Container in Page Editor mode, the Content Container is also deleted in WCM. However, when a Content Container becomes a reusable block and you delete it from Page Editor mode, it will remain in WCM.

1.  Open any page in Page Editor view.
2.  Click the **Reusables** panel to display the list of reusable blocks.
3.  Hover on the reusable block that you want to delete and click the delete icon.

    ![Hover and delete reusable block](../../images/hover_and_delete_reusable.png)

4.  A confirmation modal appears. Click **Delete** to confirm deletion or **Cancel** to cancel deletion.

    ![Delete reusable block](../../images/delete_cancel_reusable_block.png)

5.  A message appears if the selected reusable block is successfully deleted.

**Parent topic:** [Design Studio (Beta)](../design_studio/design_studio_overview.md)
