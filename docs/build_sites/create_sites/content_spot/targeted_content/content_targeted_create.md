---
id: content_targeted_create
title: Adding targeted content to a spot
---


You can add targeted content to a spot to match the best content with the most appropriate segments or audiences. You can also hide the spot for particular user segments.

Before you create **Segments**, ensure that your system administrator has set up the proper access control permissions. Go to the *Access permissions for Business Rules* table in [Access permissions](../../../../deployment/manage/security/controlling_access/resources_roles/sec_acc_rights.md) for more information.

To add targeted content, click **Add Content** to select a content item. Then, add segments that can view or not view these content items. All content items that can display in the spot are summarized in the Targeted Content list.

!!! note
    To hide the spot, click **Hide Spot**, and then add segments for which the spot must be hidden.

The spot can display a default content item or can be hidden for users who are not included in the targeted segments.

1.  Navigate to a page on your site that contains a web content viewer.

2.  Click **Edit Mode** on the site toolbar.

3.  To configure your spot with content, click the **Display content menu** ![content menu](../../../../images/content_menu2.jpg) icon in the web content viewer title bar. Click **Configure Spot**.

4.  From the **Configure Spot** menu, select **Targeted Content**.

    The current content becomes the default content that displays to users who are not included in the segments added to targeted content items. When you are starting with a web content viewer that does not contain content, you must add default content before you add other content items.

5.  To display alternative content to a particular group of users, click **Add Content**.

6.  Select a content item from a web content library, and click **OK**.

    After you select your content item, you can have other options from the **More** menu. From the **More** menu, you can select from the following options:

    -   **Hide Spot**

        Rather than showing the content item that you selected, you can hide the web content viewer from the selected user segments.

    -   **Use Page Default Content**

        Rather than using the content item you selected, you can change this targeted content item to use the default web content that is defined in Page Properties for the page. To view the default web content, open the site menu to review the web content item that is defined in Page Properties on the Overview tab.

    -   **Save and show on Page**

7.  Click **Add Segment** to select your target audience for the content item that you added.

8.  To add segments to your content item, click one or more segment names. A list of selected segments is displayed in this view. Click **Done**.

9.  Review the segments that you selected for this content item. Click **Done** when you are finished reviewing the selected segments.

    !!! note
        -   When you have multiple segments, you can select an option that users must match the criteria of all selected segments to view the content item. When this option is not selected, users can belong to one or more of the segments and view the content.
        -   You can add more segments from this view.
        -   You can remove segments from this view and from other views.

10. Add more content items to your Targeted Content Items list as needed. Set the order in which the content items display to segments in the Targeted Content Items list. Click the arrows by the content item to rearrange the display order. When a user views this spot, the first matching content item in the list is displayed.

    For example, if the user matches a segment for both the first and second content items, the first content item is displayed

11. Click **Save** to apply your settings, and exit the dialog.


