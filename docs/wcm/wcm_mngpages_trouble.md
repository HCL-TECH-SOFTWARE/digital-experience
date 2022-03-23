# Troubleshooting pages 

When you work with pages, you might encounter problems that are related to projects, access rights, or other issues.

## User A cannot view project X

Ensure that User A has the following access rights:

-   User on the project. Specify this access by editing the project and adding User A to the **User** list in the **Access** section.
-   User on the WCM\_REST\_SERVICE virtual resource. Specify this access in the portal.Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**. From the list of Resource Types, select **Virtual Resources** by clicking it. On the Resource Permissions page, click on the **Assign Access** icon for the WCM\_REST\_SERVICE resource. Then, click on the **Edit Role** icon to specify the access for the user.

## User A cannot modify a published or draft page

Check the following issues as potential causes:

-   If the page is part of a workflow, ensure that User A has Editor access to the current workflow stage.
-   Is access control inheritance enabled for the portal page site area? The setting is enabled by default but can be disabled as needed. Verify the setting by editing the portal page site area and viewing the **Access** section of the properties to determine whether the **Inheritance** setting is selected.

    If access control inheritance is disabled, ensure that User A has Editor access to the portal page site area.


## Why does User A receive the message "You are customizing this page. Changes are only visible to you"?

This message is generated because User A has Privileged User access to the page. This access level is the default access for a newly created user, and changes that the user makes are visible only to this user.

If you want the changes that User A makes to be visible to all users of that page, User A requires Editor access on the page.

## User A is in a project and receives a message rather than creating a draft

The message "You are customizing this page. Changes are only visible to you" is generated because User A has Privileged User access to the page. This access level is the default access for a newly created user, and changes that the user makes are visible only to this user.

To create a draft in a project, User A requires either of the following access:

-   Editor or higher rights on the page.
-   User access on the page and Draft creator or higher access on the corresponding web content page item.

## User A cannot drag content from the site toolbar onto the page

When the user uses the site toolbar and attempts to add content from the **Content** category in the toolbar, the following access is required for User A:

-   Editor rights on the page.
-   User rights on the web content viewer portlet that User A wants to add.

## Portal pages are not synchronized with portal page site areas in Portal Site library

Typically, the pages in the portal and their corresponding portal page site areas in the Portal Site library are automatically synchronized. However, in some cases, these artifacts can become unsynchronized. For example, this situation can occur when data is restored from a backup or from errors when the portal page site area is created after the portal page is created.

You can resynchronize the Portal Site library based on the current portal page structure that is stored in the portal database. When you do the synchronization, the portal database acts a master repository. Any portal page site areas in the Portal Site library that do not correspond with existing portal pages are removed from the Portal Site library. Any content site areas or content items within the affected portal page site areas are also moved to the lost and found section of the Portal Site library.

To do the resynchronization, run the `create-page-nodes` configuration task, as described in *Enabling managed pages*.

**Important:** This task also removes any draft pages that are not found in the Portal Site library.

**Parent topic:**[Pages ](../site/pages_overview.md)

**Related information**  


[Enabling vanity URL support ](../wcm/van_url_cfgtsk_enable_vus.md)

[Synchronizing the vanity URL database ](../wcm/van_url_cfgtsk_sync_db.md)

