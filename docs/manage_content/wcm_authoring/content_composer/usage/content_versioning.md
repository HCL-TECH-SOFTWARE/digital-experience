# Content Versioning

This section details how to manage versioning of content in HCL Content Composer.

HCL Content Composer 9.5 CF192 and later releases now has a Version Comparison feature, which allows content authors to:

-   Compare versions of a specific content or content item.
-   Create a new version of content from old versions of a specific content or content item.

!!!note
    The **Versions** icon will only show in content items that are in **Published** or **Expired** workflow state. The **Versions** icon will not be visible for content in **Draft** workflow state.

## Prerequisite

Content Composer should be installed and configured to HCL Digital Experience 9.5 container release update CF181 or higher. See instructions to install to supported container environments in the [Install HCL Digital Experience 9.5 Components](../installation/install_config_cc_dam.md) topic.

Content Composer is accessible from the Practitioner Studio interface (after image configuration to your HCL Digital Experience 9.5 CF181 and higher deployment).

## Version Comparison

Content authors can view and compare current to previous versions of a selected content that is in **Published** or **Expired** workflow state.

1.  Log in to your HCL Digital Experience 9.5 platform and select **Web Content** from the Practitioner Studio navigator.

    ![](../../../../..//assets/HCL_DX_95_Practitioner_Studio_interface.png)

2.  Select the web content or content item, and then select Edit from the **Web Content** menu options.

    ![Edit Web Content from Metadata column](../../../../images/Edit%20Web%20Content%20from%20Metadata%20column.png)

3.  On the content, click the **Versions** icon, which is on the right side as shown below.

    ![Select Versions icon](../../../../images/Select%20Versions%20icon.png)

4.  **Versions** will display all current and previous versions of the selected content. In this example, there are two previous versions of the selected content aside from the Current Version (which is Version 3).

    ![Select Versions to view and access all versions of selected content](../../../../images/Select%20Versions%20to%20view%20and%20access%20all%20versions%20of%20selected%20content.png)

5.  To compare the Current Version (Version 3) from a version (in this example, Version 2), hover to display the context menu (three-dot icon) as shown in the image below. Then, select **Compare with current version**.

    ![Select Compare With Current Version](../../../../images/Select%20Compare%20with%20current%20version.png)

6.  The Version Comparison view will show both current and the selected version of the content side by side. In this example, the Current Version is shown on the left, while the selected previous version \(Version 2\) is shown on the right.

    ![Version Comparison view](../../../../images/Version%20Comparison%20view.png)

7.  To view only the differences between versions, click the **Show only differences** checkbox.

    ![Show only differences between content versions](../../../../images/Show%20only%20differences%20between%20content%20versions.png)

8.  To switch to an older version, simply click the drop-down arrow beside the Content title to view and select another version, as shown below. You can perform this action on either of the content versions.

    ![Switch to other versions within Version Comparison view](../../../../images/Switch%20to%20other%20versions%20within%20Version%20Comparison%20view.png)


## Restore, Compare and Merge a Content Version

1.  Log in to your HCL Digital Experience 9.5 platform and select **Web Content** to edit from the Practitioner Studio navigator.
2.  On the content, click the **Versions** icon, then hover to click to open the context menu (three dot icon) on the version you wish to edit.
3.  **To restore to an older version**, select **Make Current**. In the example below, if Version 2 is selected from previous versions to be the current version, a new version will be created (Version 4).

    ![Revert to an older version](../../../../images/Revert%20to%20an%20older%20version-2.png)

    The **Make current** option is also available in **Version Comparison** view, along with the other editing options. Select **Compare with current version**, and then click the **Make current** button on the top right side of the previous version you wish to restore the Current Version to.

    ![](../../../../images/Make%20it%20current%20in%20Version%20Comparison%20view.png)

4.  A **Restore Version** dialog box will appear to confirm restoring the selected previous version to current version. Click **Restore** to continue.

    ![Restore Version](../../../../images/Restore%20Version.png)

5.  This will now make Version 2 as the new Current Version (Version 4), while keeping a copy of Version 2 in the **Previous versions** list.

    ![Update Current Version](../../../../images/Update%20Current%20Version-2.png)

6.  You can also revert or merge details of the Current Version with a selected previous version in Version Comparison view. To do so, click **Compare with current version** to continue.
7.  HCL Content Composer will notify you if you are in **View** or **Read-only** mode and not in **Edit** mode. Click the **Switch to edit mode** link to be able to access edit options.

    ![Switch Version Comparison view to Edit mode](../../../../images/Switch%20Version%20Comparison%20view%20to%20Edit%20mode.png)

8.  To update any component of the Current Content Version to that of the selected Previous Version, select the component then click **Merge and edit** located on the upper right of the **Version Comparison** view.

    Using the same example, we will select the image of the previous version and merge it to the Current Version. Click the radio button beside the image of the Previous Version, then click **Merge and edit** to complete the action.

    ![Merge image component from previous version to Current Version](../../../../images/Merge%20image%20component%20from%20previous%20version%20to%20Current%20Version.png)

    Once completed, you will be directed to the Content **Edit** view to make additional changes. Click **Save** to save your changes.

    ![](../../../../images/Merge%20and%20edit.png)

9.  **Merge and save** allows users to automatically create a new version from selected content version components. Once you select your desired components, click the drop-down arrow and select **Merge and save**.

    Using the same example, this will generate a new version (Version 4), which will now be the new Current version. Version 3 will now be moved as a Previous Version.

<!--
## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1){:target="_blank"}.
-->

