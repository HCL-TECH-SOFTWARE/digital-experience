# The Activity Stream portlet

Find out what is new in your network and the wider organization using the activity stream views available from the Activity Stream portlet.

## Using the Activity Stream portlet

!!! note
    -   Make sure you have imported the HCL Connections security certificate for your browser or this portlet will not work properly. For details, see *Importing the HCL Connections certificate for your browser*.
    -   The Activity Stream portlet does not support basic authentication.

The Activity Stream portlet has three possible modes for displaying information: Homepage Experience, Community Experience, and Profile Board Experience. The mode controls what types of activity you see in the portlet. When the Activity Stream portlet is added to a page, it will default to the Homepage Experience mode unless the page is a community page, in which case it defaults to the Community Experience mode and displays updates from the associated community. To see the Profile Board experience, you must explicitly configure that option for the portlet.

You can use the activity stream to view the latest news stories and updates from across IBM® Connections. The updates are displayed in list format, making it easy for you to scan through the entries and quickly identify the updates that are most important to you. Interact with and respond to content faster.

!!! note
    Only one Activity Stream portlet on a portal page is supported.

A variety of views are available in the Activities Stream portlet. The views available depend on the mode you choose.

Select a view from the **Show** list. The following views are available when you are viewing the Homepage Experience mode for the Activity Streams portlet:

|View|Description|
|----|-----------|
|**I'm Following**|Displays updates related to the people and content that you are following.|
|**Status Updates**|Displays the latest status update messages from across your organization.|
|**My Notifications**|Displays the latest notifications that you received and sent in HCL Connections.|
|**@Mentions**|Displays messages that mention you directly.<br>**Note:** This feature requires HCL Connections 4.5 or later. The view does not display if you are using HCL Connections 4.0.|
|**Action Required**|Displays your latest to-do items from Activities, network and community invitations, requests to join moderated communities, and any third-party events requiring an action on your part.|
|**Saved**|Displays the updates that you saved.|
|**Discover**|Displays the latest public updates from all the applications.|

By default, all updates display in the view. To filter the view, for example, to see only the updates for communities you follow when you are using the Homepage Experience mode, click a component name in the **Filter By** list.

!!! note
    There is no **Filter By** option in the Community Experience.

Follow these guidelines for working with content in the activity stream.

-   To show that you like an update or a comment on a status update, click **Like**, if this feature is enabled for your deployment. You can tell how many people liked an update or comment from the number that displays next to the **Like** icon. Click the icon to see who liked the update or comment.
-   To comment on an update, hover over the update and click **Comment**. Enter your comment in the field, and then click **Post**.
-   To mention a colleague in your comment and share the comment directly with them, enter the at (@) symbol followed by the person's name, and then select the person's name from the drop-down list that displays. When you post the comment, the person's name is linked to their profile. A message is also posted to the person's profile to let them know that you mentioned them.

    !!! note 
        This feature may not be available in your deployment.

-   To delete a comment that you added, hover over the comment, click the **Delete comment** icon, and click **Delete**.
-   To save an update for following up later, hover over the update and click **Save this**.
-   To stop receiving updates about an item or person, click **Stop Following**.
-   To access more options for working with an update, hover over the update and click it. The options that display depend on the type of update you are looking at and what is enabled in terms of embedded experience. For example, to share a status update with the people who are following you, click **Repost**. To close the window, click the **X** icon or click anywhere outside the window.

## Editing the settings for the Activities Stream portlet

You can personalize the portlet to show the mode and features that you want to see. If you have at least editor access for the page and for the portlet choose **Edit Shared Settings** and choose what displays by default when users access the portlet. For more information about access levels, see the WebSphere® Portal wiki. To edit the settings for yourself, choose **Personalize** from the portlet menu and choose what to display. Settings in the **Personalize** panel overwrite settings in the **Edit Shared Settings** panel. If you have administrator access to the Portal application, you can also set these options by choosing **Configure** from the portlet menu. Options set using the **Configure** panel apply to all portlets but can be overwritten by settings made in the **Edit Shared Settings** or **Personalize** panels.

Choose the mode for the portlet.

!!! note
    If you do not explicitly select a mode, no radio buttons appear as selected and the portlet defaults to the Homepage Experience for a stand-alone portlet, or the Communities Experience for a portlet on a community page.

|Mode|Description|
|----|-----------|
|Homepage Experience|**Homepage Experience** is the default unless the Activity Stream portlet is placed on a Community page.|
|Communities Experience|**Communities Experience** is the default when the Activities Stream portlet is placed on a Community page. Choose **Recent Updates** or **Status Updates** to view updates from the community that is associated with the Portal page.|
|Profile Board Experience|**Profile Board Experience** displays the stream as you would see it on a Connections profile associated with the page for a profile that's displayed in the profiles portlet. To use the Profile Board experience, either navigate to a profile or identify the user you want to follow and pin the user's profile in the Profiles portlet. <br/>1.  Add the Profiles portlet to the page containing the Activity Stream portlet. Depending on how the Profiles portlet is configured, you might see a message that you need to pin a user to display their activity in the Activity Stream portlet. <br/> 2.  Configure the Activity Stream portlet to show the Profile Board experience. <br/> 3.  To view the profile board for a person: <br/> -   In the Profiles portlet, click on a profile picture in the **Network** section of the profile being displayed, or click any name in the **Same Manager**, **People Managed** or **Full Report-to Chain** views. Or, click **Find a Profile** to search for and choose the person whose board you want to view. <br/> -   Choose **Edit Shared Settings** from the portlet menu on the Profiles portlet and select **Always pin to the current profile** or **Dynamically pin to the most recently selected profile**. <br/> **Note:** Selecting **Always pin to the current profile** always displays the profile of the person selected when the pin is applied. Selecting **Dynamically pin to the most recently selected profile** allows the administrator to dynamically pin to the last profile viewed in the Profiles portlet at any given time.|

Choose which of the following features to display in the portlet:

-   **Status Updates** displays a text box so you can enter a status update.
-   **Activity Stream** displays updates about content you are following.
-   **Embedded Experience** allows you to view and interact with content.

