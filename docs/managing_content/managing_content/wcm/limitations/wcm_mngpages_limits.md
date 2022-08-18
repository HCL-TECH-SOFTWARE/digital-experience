# Known issues for pages

You can review known issues for pages.

## Remote portlet entities are not aware of projects

`PortletEntity` objects that are stored in the Release domain of the portal database are project-aware. Changes to such a portlet entity, such as setting and modifying preferences, are reflected as a change limited to the active project. Changes to a portlet made in the active project are not visible on the published site until the changes are syndicated.

This ability to modify a portlet in a project does not apply to remote portlets that are produced with WSRP. As the remote system, the WSRP Producer is responsible for managing the portlet entities. However, because the WSRP Producer is not project-aware, the Producer cannot differentiate between the following changes:

-   Changes made to the remote portlet entity directly on the published site.
-   Changes made to the remote portlet entity when viewing and interacting with a project.

Because of this limitation, changes made in a project are displayed immediately on the published site through the remote portlet entity.

## Authoring portlet issues

-   **Search results for page items in the authoring portlet**

    When you search in the authoring portlet with the **Titles** or **Descriptions** filter, no results are returned for page items.

-   **Sorting order of pages**

    When displayed in the authoring portlet, pages are listed according to the page IDs rather than the page titles. If you attempt to sort pages by title, this behavior causes the pages to display in an unexpected order. This sorting behavior also applies to any window or view, such as the Manage Project window, that is based on the authoring portlet.


## Changing the order of pages in the portal

You can modify the ordering and hierarchy of pages in the portal only with the site toolbar in the portal interface. If you move the portal page site area in the authoring portlet, the page order in the portal is not affected.

## Personalization rules

-   Personalization rules that you create by using the Personalization editor are not managed in Web Content Manager and so are not available for versioning or included in syndication. These rules must be published by using the pznload command or by publishing with Personalization.
-   Personalization rules are not aware of projects and the status of items in a project. Because of this characteristic, rules operate only on published content and do not include draft items.

## Limited support for derived pages

Explicitly derived pages that are in the release domain can be managed by Web Content Manager. However, if you modify an explicitly derived page, that change does not generate drafts for all of the derived pages. If you want the change to occur for all of the derived pages, you must edit each derived page separately. For more information, see the documentation about derived pages.

## Portlet configuration settings

-   **Configure mode**

    If you change the configuration settings for a portlet in **Configure** mode, these changes are global and are not limited to the page. Because the changes are global, the changes cannot be managed in Web Content Manager and so cannot be syndicated to another server. To transfer these changes to another server, use the XML configuration interface \(xmlaccess command\).

-   **Edit Shared Settings mode**

    If you change the configuration settings for a portlet in **Edit Shared Settings** mode, these changes are part of the page. Because the changes are part of the page, the changes are managed in Web Content Manager and are automatically syndicated to other servers.


## Automatic publishing and deleted items

When you specify automatic publishing for a project, the project is published as soon as all the items in the project reach a state of "pending." Deletions do not go through an explicit approval stage and are available for publishing immediately. If your project consists of only deletions, automatic publishing of the project can occur prematurely.

To prevent this automatic publishing, you can complete the following steps:

-   Ensure that the project contains new pages or changes to pages, which require approval before publishing.
-   Set the project to use manual publishing.

## Syndication and versioning

-   The versioning feature of Web Content Manager also applies to pages and is used to run different tasks with page versions. Versioning tasks include saving, deleting, and restoring versions. The Page Properties window lists the versions of the page on the **Advanced** tab. However, if you create a page and syndicate the page for the first time, the version information is empty when you view the page properties on the delivery server. After subsequent syndication operations, the version information is listed.

**Parent topic:**[Pages](../site/pages_overview.md)

