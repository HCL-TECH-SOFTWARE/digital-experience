# Advanced options Multilingual Solution

There are more points of extensibility where you can enhance the multilingual solution to suit your specific requirements.

## Mixed language site navigation

In a mixed language site, the navigation is structured to make it possible for users to easily discover what content is available for them in their preferred language, while they maintain the structure of the base language.

-   For content that is available in complete translations, the localized navigation code can be used to show a link to the translated content.
-   For content that is not available, a menu can be built to pull content from the translated site. For example, the menu might display a list of "Translated content in this area".
-   The opposite can be done when you view translated content. For example, a menu might display a list of "Content in this area that is not translated".
-   A site map can be built for each translation to provide a shortcut for users to find translated content. This action can be built by using a menu or navigator to explicitly pull content in from the translated site.
-   The base site navigation is kept consistent on the page by building navigators that are set to the base site. When translated content is being displayed, the presentation template shows the base navigation always.

## Side-by-side preview

Side by side previews might be built by using a special preview page with two web Content Viewer portlets.

-   Custom rendering code would be required to pick up two contexts at the same time and display both pages, perhaps in a frame.
-   A link to start this preview page might be added to the edit-time navigation or creation extension.

## Side-by-side editing

Side by side editing might be built by using a special editing page with containing one authoring portlet and one web content viewer portlet.

-   A link might be created that combines the URL parameters for displaying content within the web content viewer portlet with the URL parameters for opening another item in read or edit mode in the authoring portlet
-   A link to start this preview page might be added to the edit-time navigation or creation extension.

## Writing your own context processor

Provide your own processing whenever the web content viewer portlet renders items.

-   Create a ContextProcessor class, which implements the `com. com.ibm.workplace.wcm.api.ContextProcessor` interface.
-   Compile the ContextProcessor class into a new jar and place that jar in the [wp\_profile\_root](../../../../guide_me/wpsdirstr.md)`\wcm\shared\app` directory.

## Customizing the workflow synchronization email notifications

Modify the default email notifications to provide your own wording.

1.  Go to [wp\_profile\_root](../../../../guide_me/wpsdirstr.md) `\paa\wcm_mls\components\wcm_mls\shared\app\` directory
2.  Extract the contents of wcm.ml.emailnotifications.jar to [wp\_profile\_root](../../../../guide_me/wpsdirstr.md)`\wcm\ prereq.wcm\wcm\shared\app` .
3.  Remove the `[wp\_profile\_root](../../../../guide_me/wpsdirstr.md#wp_profile_root)\wcm\prereq.wcm\wcm\shared\app\META-INF` directory.
4.  Customize the workflow synchronization email notifications:

    |Message Key|Description|
    |-----------|-----------|
    |`NEWDOCCREATED`|The notification when a new translation is created.|
    |`LINKCREATED`|The notification when a link is created within a localized or regionalized library.|
    |`DRAFTCREATED`|The notification when a draft is created of any existing localized or regionalized item.|
    |`DRAFTEXISTS`|The notification when a draft exists within a localized or regionalized library.|
    |`DRAFTRENAMED`|The notification when a draft is renamed within a localized or regionalized library.|
    |`DRAFTMOVED`|The notification when a draft is moved within a localized or regionalized library.|
    |`FAILED_NOPROCESSSETTING`|The notification when no processing setting is found for a given localized or regionalized library|
    |`FAILED_CREATENEWDOC`|The notification when a new translation fails to be created.|
    |`FAILED_CREATEDRAFT`|The notification when a draft of an existing translation fails to be created.|
    |`FAILED_CREATELINK`|The notification when a link fails to be created.|
    |`FAILED_CALBASELOCALEDOCPATH`|The notification when the path to the current base locale path cannot be determined.|
    |`FAILED_RENAMEDRAFT`|The notification when a draft fails to be renamed.|
    |`FAILED_MOVEDRAFT`|The notification when a draft fails to be moved.|

    |Message Key|Description|
    |-----------|-----------|
    |`ITEM_PUBLISHED`|The notification when a translation is published.|

    |Message Key|Description|
    |-----------|-----------|
    |`ITEM_EXPIRED`|The notification when a translation is expired.|

    |Message Key|Description|
    |-----------|-----------|
    |`ITEMDELETED`|The notification when a translation is deleted.|
    |`SENTFORDELETION`|The notification when a translation is sent for background deletion.|
    |`DELETEREQUEST`|The notification when a localized translation is being requested to be deleted.|
    |`REGIONAL_DELETEREQUEST`|The notification when a regionalized translation is being requested to be deleted.|
    |`DELETEFAILED`|The notification when a translation deletion fails.|

5.  Modify the message by using any of the following multilingual tags:

    |Message Key|Description|
    |-----------|-----------|
    |`[LOCALE]`|The locale of the current item.|
    |`[ITEM_ID]`|The API ID of the current item.|
    |`[ITEM_LIBRARY]`|The name of the library that the current item is in.|
    |`[ITEM_PATH]`|The path of the current item.|
    |`[ITEM_PATH_LINK]`|A link to open the current item within the authoring UI by using the path of the item as the link name.|
    |`[ITEM_NEW_NAME]`|The new name of the current item, if the item was renamed.|
    |`[ITEM_OLD_NAME]`|The old name of the current item, if the item was renamed.|
    |`[ITEM_NEW_PATH]`|The new path of the current item, if the item was moved.|
    |`[ITEM_OLD_PATH]`|The old path of the current item, if the item was moved.|
    |`[BASELOCALE_ITEM_ID]`|The API ID of the current base locale item.|
    |`[BASELOCALE_ITEM_LIBRARY]`|The name of the library that the current base locale item is in.|
    |`[BASELOCALE_ITEM_PATH]`|The path of the current base locale item.|
    |`[BASELOCALE_ITEM_PATH_ LINK]`|A link to open the current base locale item within the authoring user interface by using the path of the item as the link name.|
    |`[ERRORS]`|The current list of errors that are processing the current item.|

6.  Save your changes.
7.  Translate your message and update the localized versions of the properties files.
8.  Restart the server.


