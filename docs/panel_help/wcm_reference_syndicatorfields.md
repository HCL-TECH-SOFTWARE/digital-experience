# Syndicator settings

The syndicator view is used to enter details of the server that is subscribing to the syndicator, and display subscription and syndication information.

To edit a syndicator, go to **Administration** \> **Portal Content** \> **Syndicators** and click the edit icon of the syndicator you want to edit.

|Field|Details|
|-----|-------|
|**Syndicator Name and Description**|These fields identify the syndicator.|
|**Subscriber Name, ID and URL**|These fields identify the subscriber.|
|**Mode**|-   **mode="modetype"**

    -   **Configured**: This mode uses the mode that is configured in the WCM WCMConfigService service.
    -   **Automatic**: Syndication is scheduled automatically based on the configured syndication interval.
    -   **Manual**: Syndication occurs only when requested by using the administration portlet.

|
|**Libraries**|This view displays a list of libraries that are included in this syndication relationship.-   Click **Add Libraries** to select a library to syndicate and the syndication type:
    -   **published-items="library\_name\_1,library\_name\_2"**

Published item syndication is mostly used when you syndicate to a staging or delivery server. The following items are syndicated:

        -   Published
        -   Expired
Draft items, projects, project templates, and items in a project are not syndicated.

    -   **all-items="library\_name\_1,library\_name\_2"**

Use "All items" syndication to gradually syndicate projects to a staging or delivery server, rather than waiting until all items in a project achieve a published state. The following items are syndicated:

        -   Published
        -   Expired
        -   Draft items
        -   Projects that contain draft items saved in the configured library. See the HCL Product Documentation topic named **Projects and syndication** for further information.
Project templates are not syndicated.

    -   **all-items-and-versions="library\_name\_1,library\_name\_2"**

"All items and versions" syndication is mostly used when you syndicate between servers within an authoring environment. Selecting this option can increase the amount of time taken for syndication because it includes versions and deleted items.

The following items are syndicated:

        -   Published
        -   Expired
        -   Draft items
        -   Projects that contain draft items saved in the configured library. See the HCL Product Documentation topic named **Projects and syndication** for further information.
        -   Versions
        -   Deleted items
Project templates are not syndicated.

-   Select libraries from the current list and click **Remove Libraries** to remove a library from the list of syndicated libraries.

**Note:** If the syndication configuration is updated to change the syndication type to be more restrictive, then a normal rebuild will not remove previously syndicated items that are now out of scope. For example draft items on the subscriber would not be removed if the syndication type is changed from "All Items" to "Published Items". A [Rebuild With Mirror](wcm_syndication_manual.md) can be used to fully synchronize the library with respect to the new syndication type which includes the removal of subscriber modifications and previously syndicated items.

|
|**Enabled**|This view indicates whether syndication is enabled or not.|

