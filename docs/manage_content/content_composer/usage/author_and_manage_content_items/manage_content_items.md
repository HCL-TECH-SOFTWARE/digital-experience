# Manage content items \| HCL Content Composer

This section provides the steps on how to manage content items using the HCL Content Composer.

## Prerequisite

Content Composer should be installed and configured to HCL Digital Experience 9.5 container release update CF181 or higher. See instructions to install to supported container environments in the [Install HCL Digital Experience 9.5 Components](../containerization/install_config_cc_dam.html) topic.

Content Composer is accessible from the Practitioner Studio interface \(after image configuration to your HCL Digital Experience 9.5 CF181 and higher deployment\).

## View Content overview

Content users can view a light preview of uploaded content and more using HCL Content Composer.

1.  Access the content item you wish to edit. In this example, the content item example above \(**Image**\) is obtained from **Web Content \> Content \> Articles** site area location. Select **Open Content**.
2.  On the content item editor interface, select the **More** drop down as shown below and select **Overview**.

    ![](../assets/Select_image_overview_HCL_Content_Composer.png "Select More drop down options")

3.  The light preview of the selected content will be shown in a new window. It will display:
    -   Content title
    -   Content type
    -   For images, a preview of the content in its original size; and
    -   Published link of the content
4.  User can also add a preview image of the content file. In **Edit Mode**, user can select **Show hidden content** and **Upload using file browser** or **HCL DAM** the preview image file.
5.  If done, select **Save** to save your settings and create your new content template, or **Save and Close**, which will create your new content template with the saved settings and will redirect you to the new content template's location in the Content Composer Dashboard.

## Edit Content item

1.  Log in to your HCL Digital Experience 9.5 platform, and select **Web Content** from the Practitioner Studio navigator.

    ![](../assets/HCL_DX_95_Practitioner_Studio_interface.png "Log in to HCL Digital Experience 9.5")

2.  Select **Web Content** menu option to access the HCL Digital Experience 9.5 Content Composer interface.
3.  From the Content Composer interface, navigate through the preset folders Access the content item you wish to edit. In this example, the content item example \(**Image**\) is obtained from **Web Content \> Content \> Articles** site area location. Select **Open Content**.

    ![](../assets/Open_Content_Item_HCL_Content_Composer.png "Opening the content item")

4.  The content item editor interface is set in **Read Only** mode by default. Click the selector to switch the interface to **Edit Mode** to edit the selected content.
5.  Click the **Save** button or the drop-down to **Save and Close** in the upper right of the interface to save your completed content edits.

## Add Comments

**Note:** Content authors can only add comments if they have already added a workflow in the Content.

1.  Follow the steps in creating new content from HCL Content Composer, then set a workflow that allows adding comments in the Content, for example the Three Stage Workflow. After adding the workflow, click the save and close button.

    ![Select workflow and enable Entering comments](../images/comment-3-stage-workflow.png "Select workflow and enable Entering comments")

2.  Open the content that has been created and click the **Comments** tab located on the right side navigation.

![Click Comment tab](../images/comment-button-right-nav.png "Click Comment tab")

3.  Add a comment in the text field box as shown below. Click **Send** to submit your comment. Note that the **Comments** text field box does not have any text and character limit.

![](../images/comment-text-field.png "Add comment and click Send")

4.  The newly added comment will be displayed at the top.

![New comment added](../images/comment-with-new-user.png "New comment added")

Please note that other content authors can also add comments in the newly-created content.


## View and filter a Content's workflow comments

Content authors will be able to view and filter comments in HCL Content Composer once content has been moved through workflow stages and **Enter comment on approval** is enabled.

1.  Follow the steps in creating new content from HCL Content Composer, then set a workflow in which entering comment on approval is enabled. In the example below, the **Three Stage Workflow** is selected.

![Select workflow and enable Entering comment on                                     approval](../images/Three%20Stage%20Workflow%20-%20view%20and%20filter%20comments.png "Select workflow and enable Entering comment on
                                    approval")

2.  Open the content and move the workflow to the preferred stage and add a comment. In the example below, **Next stage - Publish** is selected and a comment is added.

    ![Move workflow to preferred stage and add comment](../images/Move%20workflow%20to%20preferred%20stage%20and%20add%20comment.png "Move workflow to preferred stage and add comment")

3.  Once the action is completed, the **Comments** icon will now be available on the right-side navigation. Click **Comments** to see the workflow comments.

    ![View selected Content's comments](../images/View%20selected%20Content's%20comments.png "View selected Content's comments")

4.  Click the dropdown button to filter the workflow comments according to time period as shown below. In this example, selecting **Today** will display all comments made on the current date.

    ![Filter selected Content's comments](../images/Filter%20selected%20Content's%20comments.png "Filter selected Content's comments")

    ![](../images/Filter%20selected%20Content's%20comments-2.png)


## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).


