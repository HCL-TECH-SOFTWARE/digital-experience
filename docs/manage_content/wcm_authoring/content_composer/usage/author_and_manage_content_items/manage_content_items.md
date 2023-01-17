# Manage Content Items

This section provides the steps on how to manage content items using the HCL Content Composer.

## Prerequisite

Content Composer should be installed and configured to HCL Digital Experience 9.5 container release update CF181 or higher. See instructions to install to supported container environments in the [Install HCL Digital Experience 9.5 Components](../../installation/install_config_cc_dam.md) topic.

Content Composer is accessible from the Practitioner Studio interface (after image configuration to your HCL Digital Experience 9.5 CF181 and higher deployment).

## View Content overview

Content users can view a light preview of uploaded content and more using HCL Content Composer.

1.  Access the content item you wish to edit. In this example, the content item example above (**Image**) is obtained from **Web Content > Content > Articles** site area location. Select **Open Content**.

2.  On the content item editor interface, select the **More** drop down as shown below and select **Overview**.

    ![](../../../../../assets/Select_image_overview_HCL_Content_Composer.png)

3.  The light preview of the selected content will be shown in a new window. It will display:

    -   Content title
    -   Content type
    -   For images, a preview of the content in its original size; and
    -   Published link of the content

4.  User can also add a preview image of the content file. In **Edit Mode**, user can select **Show hidden content** and **Upload using file browser** or **HCL DAM** the preview image file.

5.  If done, select **Save** to save your settings and create your new content template, or **Save and Close**, which will create your new content template with the saved settings and will redirect you to the new content template's location in the Content Composer Dashboard.

## Edit Content item

1.  Log in to your HCL Digital Experience 9.5 platform, and select **Web Content** from the Practitioner Studio navigator.

    ![Log in to HCL Digital Experience 9.5](../../../../../assets/HCL_DX_95_Practitioner_Studio_interface.png)

2.  Select **Web Content** menu option to access the HCL Digital Experience 9.5 Content Composer interface.

3.  From the Content Composer interface, navigate through the preset folders Access the content item you wish to edit. In this example, the content item example (**Image**) is obtained from **Web Content > Content > Articles** site area location. Select **Open Content**.

    ![Opening the content item](../../../../../assets/Open_Content_Item_HCL_Content_Composer.png)

4.  The content item editor interface is set in **Read Only** mode by default. Click the selector to switch the interface to **Edit Mode** to edit the selected content.

5.  Click the **Save** button or the drop-down to **Save and Close** in the upper right of the interface to save your completed content edits.

## Move Content item

Content users can move a content item to another site area location.

1. Access the content item you wish to move. In this example, the content item example below \(**Image**\) is obtained from **Web Content \> Content \> Articles** site area location. Click the icon to select the content item. After doing so, click the **Move** icon on the header. 

    ![Select Content Item to Move](../../../../../assets/Select_Content_Item_to_Move_HCL_Content_Composer.png)

2. A location selector should appear on the screen. Pick the site area to move the content to. After selecting, click the **Move** button to finalize moving of the content item.

    ![Select a site area location and click Move](../../../../../assets/Select_Site_Area_to_Move_Content_to_HCL_Content_Composer.png)

## Copy Content item

Content users can copy a content item to another site area location.

1. Access the content item you want to copy. In this example, the content item example below (**Image**) is obtained from **Web Content > Content > Articles** site area location. Click the icon to select the content item. After doing so, click the **Copy** icon on the header. 

    ![Select Content Item to Copy](../../../../../assets/Select_Content_Item_to_Copy_HCL_Content_Composer.png)

2. A location selector appears on the screen. Pick the site area to copy the content to. After selecting, click the **Copy** button to finalize copying of the content item.

    ![Select a site area location and click Copy](../../../../../assets/Select_Site_Area_to_Copy_Content_to_HCL_Content_Composer.png)
## Rename Content Item when there is conflict during moving

Content users can move and rename a content item when there is another content with the same name in a site area location.

1.  A **Save As** modal should appear on the screen when a user tries to move a content item in a site area location that has a content item with the same name. A unique name and display title will be auto-generated, which can be modified.

    ![Save as content item during moving conflict](../../../../../assets/save-as-content-item-during-moving-conflict.png)

2.  Click **See All Site Areas** under **Location** to change the preferred location to move your content item. A location selector should appear on the screen and pick the site area to move the content to.

    ![Select a site area location and click Move](../../../../../assets/select-site-area-to-move-content-during-moving-conflict.png)

3.  After finalizing the name, display the title and site area location. Click the **Save** button to save the content item to a new location.

    ![Select Content Item to Move](../../../../../assets/save-content-item-to-new-location.png)


## Add Comments

!!!note
    Content authors can only add comments if they have already added a workflow in the Content.

1.  Follow the steps in creating new content from HCL Content Composer, then set a workflow that allows adding comments in the Content, for example the Three Stage Workflow. After adding the workflow, click the save and close button.

    ![Select workflow and enable Entering comments](../../../../../images/comment-3-stage-workflow.png)

2.  Open the content that has been created and click the **Comments** tab located on the right side navigation.

![Click Comment tab](../../../../../images/comment-button-right-nav.png)

3.  Add a comment in the text field box as shown below. Click **Send** to submit your comment. Note that the **Comments** text field box does not have any text and character limit.

![Add comment and click Send](../../../../../images/comment-text-field.png )

4.  The newly added comment will be displayed at the top.

![New comment added](../../../../../images/comment-with-new-user.png)

Please note that other content authors can also add comments in the newly-created content.


## View and filter a Content's workflow comments

Content authors will be able to view and filter comments in HCL Content Composer once content has been moved through workflow stages and **Enter comment on approval** is enabled.

1.  Follow the steps in creating new content from HCL Content Composer, then set a workflow in which entering comment on approval is enabled. In the example below, the **Three Stage Workflow** is selected.

![Select workflow and enable Entering comment on approval](../../../../../images/Three%20Stage%20Workflow%20-%20view%20and%20filter%20comments.png)

2.  Open the content and move the workflow to the preferred stage and add a comment. In the example below, **Next stage - Publish** is selected and a comment is added.

    ![Move workflow to preferred stage and add comment](../../../../../images/Move%20workflow%20to%20preferred%20stage%20and%20add%20comment.png)

3.  Once the action is completed, the **Comments** icon will now be available on the right-side navigation. Click **Comments** to see the workflow comments.

    ![View selected Content's comments](../../../../../images/View%20selected%20Content's%20comments.png)

4.  Click the dropdown button to filter the workflow comments according to time period as shown below. In this example, selecting **Today** will display all comments made on the current date.

    ![Filter selected Content's comments](../../../../../images/Filter%20selected%20Content's%20comments.png)

    ![](../../../../../images/Filter%20selected%20Content's%20comments-2.png)

## Save updates of a Content item as a new Content item

Content authors can save the updates of a content item as a new content item in the current location or in a different location.

1. Access the content item you want to save as a new content item. In this example, the content item example below \(**Image**\) is obtained from **Web Content \> Content \> Articles** site area location. Click the icon to select the content item. Once selected, click the **Edit** icon on the header.

    ![Select a content and edit it](../../../../../images/Select_Content_To_Edit.png)

2. Select **Save As** to save the content as a new content item. 

    ![Click Save As](../../../../../images/Click_Save_As.png)

3. A dialog appears to show the generated name, display title, and the current location. You can edit the name, display title, or select a different location.

    ![Save As Modal](../../../../../images/save_as_modal.png)

4. Click the **Save** button to save the content as a new content item.

    ![Click Save button](../../../../../images/save_as_modal_click_save.png)

5. The editor loads the new content item.

    ![Save As New Content](../../../../../images/save_as_new_content.png)

<!--
## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1){:target="_blank"}.-->


