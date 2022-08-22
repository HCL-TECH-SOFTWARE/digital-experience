# Access control for managed pages

Access control for managed pages provides more capabilities than access control for standard portal pages. In addition to the access control features available for pages through portal administration, you can also apply HCL Web Content Manager features, like workflow and syndication, to access control.

When you create a managed page in the portal, a corresponding page item is created in a web content library. You can view access control settings for a managed page by opening the corresponding page item in the web content authoring portlet. The corresponding element is automatically updated. This synchronization ensures that effective permissions are coordinated between the portal page and the web content page item.

## Special considerations

As managed pages integrate features from portal pages and Web Content Manager, there are special considerations that apply with access control for managed pages.

-   **Unified set of applicable roles with different effective capabilities**

    With managed pages, portal pages and Web Content Manager are aware of the same roles; however, some roles are effectively ignored in Web Content Manager. For example, the roles of Privileged User and Markup Editor are used with portal pages to support features such as personalizing a page. In Web Content Manager, these roles have no effect on access control.

    When you perform a web content action on a managed page, like previewing, publishing, or syndicating the page, Web Content Manager accounts for the portal roles. This awareness ensures that pages retain their appropriate permissions from the roles. For details on the portal roles, see *Roles.*

-   **Virtual groups in Web Content Manager \(authors, owners, creators\)**

    In Web Content Manager you can grant access to virtual groups \(authors, owners, creators\) through the web content authoring portlet or as part of a workflow stage. Portal pages do not provide an equivalent mechanism. When you grant permissions on a page item to users or groups with the virtual groups, direct role mappings are assigned on the portal page. These role mappings ensure that equal permissions are applied.

    However, the owner virtual group is limited to a single owner for page items in Web Content Manager. The owner of the portal page is automatically synchronized with the owner of the page item. This owner has the same set of allowed actions as the Manager role, as described in the *Ownership* section of *Roles.*

    **Important:** If you are using author or creator groups for access control management in Web Content Manager, use only the authoring portlet to perform access control tasks. Do not use the site toolbar in the portal interface to revoke permissions because doing so can lead to a potentially complex assignment of permissions.

-   **Traversal support for portal pages**

    With portal pages, traversal support provides implicit permissions that enable users to navigate through a page hierarchy. For example, a user might have permission to access a child page but might not have permission to access the parent page. Because of traversal support, the user is permitted to navigate to the child page. See *Roles* for details on traversal support.

    However, traversal support is not provided for web content items. Content authors that use the authoring portlet must be assigned the User role on all pages higher than the child page to navigate to editable content. Without this access permission, the editable content is not visible in the authoring portlet, even though the author can access the page. Typical page administration tasks can still be performed from the page.

-   **Permissions granted through virtual resources**

    With traditional portal pages, you can grant permissions on the virtual resources PORTAL and CONTENT\_NODES that inherit permissions to the complete page hierarchy. This inheritance is described in *Resources.* You can also specify a similar inheritance for web content libraries that inherit from the root node.

    Because permissions for managed pages are synchronized between portal pages and page items in Web Content Manager, such inheritance is problematic. This inheritance can result in different effective permissions on portal pages and content items. Although you can manage permissions correctly either through the page or the authoring portlet, the preferred approach is through the page. If you grant permissions to the entire page hierarchy with inheritance, grant this permission on the root resource for the page hierarchy \(`wps.content.root` page\). As the permission on this page node is synchronized to the corresponding page item in Web Content Manager, the effective permissions are automatically synchronized throughout the hierarchy.

-   **Access control permissions managed by workflows**

    When you work with managed pages, you can apply access control to page items through workflow stages and actions, as described in *Workflow and change management*. In addition to permissions from the workflow, you can also modify permissions on the page with the site toolbar. Changes that you make with the site toolbar override the access permissions in effect with the current workflow stage. When the next workflow stage is entered, changes from the site toolbar are reset and the permissions that are specified by the workflow stage take effect.

-   **Access control permissions for site areas and pages work only under Web Content Manager, but not under HCL Portal**

    Set the access permissions for the portal site library. Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**. These access permissions restrict what users can do with a portal page site area item only under Web Content Manager. For example, only a user with the appropriate access permission can add content under a page or add a workflow. However, a user without such access permission might still be able to create, update, or delete pages on the HCL Portal side, if the user has the appropriate access permission on the page.

-   **External security support**

    You cannot use externalized roles or role mappings with managed pages. Pages cannot be externalized while they are being edited in a project. Similarly, externalized resources cannot be added to a project.


## Required permissions

To determine which permissions are required for typical actions with managed pages, review the following table. Unless otherwise mentioned, **all** listed permissions are required for the specific action.

|Action|Required permissions|
|------|--------------------|
|Access a project view in the site toolbar|User on the WCM\_REST\_SERVICE virtual resource|
|View a project in the site toolbar|-   User on the WCM\_REST\_SERVICE virtual resource, in addition to the permissions that are required to view a specific project
-   User on the selected project

|
|Create a project|-   Contributor on the Portal Site library
-   User on the WCM\_REST\_SERVICE virtual resource

|
|Create new items|You set the access permission for creating new items at the library level, not at the item level. To create a new item, a user must have at least the following access permissions:-   Contributor access on a library
-   Editor access on an item-type

If a user has access permission to create an item type, the user can also create folders and projects.|
|Create a draft of a published page by editing the page in a project|You need the following permissions:-   User on the selected project
-   Either one of the following two permissions:
    -   Editor on the page
    -   Draft Creator on the corresponding web content page item **and** Editor on the workflow defined access. For details, read [Draft Creator role for creating draft pages](#approver-draft).

|
|Create a draft child page under a parent page in a project|-   Contributor or Editor on the parent page
-   User on the selected project

|
|Preview a project|-   Can Run As User on the USERS virtual resource
-   The user that is impersonated requires at least User access to the current portal page. If an anonymous user does not have access to the page, the **As Unauthenticated User** preview option is not available in the site toolbar. In addition, if you select the **As User** preview option, you cannot select users that do not have access to the page.
-   User on the selected project

By default only users and unauthenticated users that have explicit access to the project can preview the project. You can globally assign access for users or unauthenticated users to view all items in all libraries and projects in a specific virtual portal or the default virtual portal. To assign these rights, use the **Set root access** setting in the library administration portlet. Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**.


|
|Create web content by adding web content viewer to a page. The viewer is configured to create and render content from a web content library.|-   Editor on the page
-   User on the viewer portlet
-   No library permissions are enforced.

|
|Perform inline editing of content on a page|-   Editor on the page
-   Appropriate permissions on the library that contains the content

|

For the required permissions for portal pages and web content items, see *Access permissions* for portal pages and *User roles and access* for web content items.

The default set of access control permissions for anonymous users and for members of the All Authenticated Users group are described in *Initial Access Control Settings.* With managed pages, the following default permissions exist:

-   Anonymous users can view projects and have User access to the Portal Site library.
-   Members of the All Authenticated Users group can create new projects and have Editor access to the Portal Site library. This access ensures that users can perform inline editing tasks. You can restrict access as needed with the library administration portlet.

To modify a portal page or page item, you require only those permissions that are needed to perform the action from the user interface or programming API. You do not also require permissions for the underlying synchronization actions that take place automatically. These automatic updates are performed with system privileges.

For example, you might add a portlet to a page by using the site toolbar. In this case, you require sufficient permissions on the page that you are editing and on the portlet that you are adding. However, you do not need additional permissions for the internal updates to the corresponding items in the web content library.

## Draft Creator role for creating draft pages

With managed pages, you can use a workflow to enable business users to create draft versions of pages that they are normally not allowed to edit. By using a workflow in this way, you accomplish two things:

-   You provide business users with the ability to modify pages.
-   You can still ensure that the drafts are reviewed and approved by technical users before the changes are published to the external site.

Typically a user with User access to a page has permission only to view the page. But if the user also has Draft Creator access to the corresponding page item in the Portal Site library, the user can create page drafts. When a user has this access, the user can navigate to the portal page and use the site toolbar to create a draft.

To enable business users to create draft pages, complete the following steps:

1.  In the Portal Site library, assign a workflow to the page items that correspond to the portal pages that you want users to modify. By default, page items are not managed in a workflow.
2.  Edit the publish stage of the workflow and update the access control properties to add the users to the Draft Creator role.
3.  Edit the initial draft stage of the workflow. Go to the **Properties** tab and then click **Access**. Click **Grant Access**. For example, click **Grant User Access**. Search for the users or groups that you want to grant access to and then click **Add**. Click **OK** to return to the **Properties** tab.

## Contributor role for creating child pages

Users with Contributor access to the published version of a page can create child pages under that page. When in edit mode on the parent page, contributors can use the site toolbar to create a child page.


