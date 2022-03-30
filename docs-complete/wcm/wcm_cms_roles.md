# Web content management roles

You define the access of a user or group for a library to determine who has access to a library, and to define access to the different views within the authoring portlet.

|Roles|Rendering and authoring portlet access rights|
|-----|---------------------------------------------|
|-   User

|Users and groups that are assigned to this role can:-   view items in a website or rendering portlet that they are assigned at least user access to.

**Tip:** The simplest way to assign users to this role is to select any of the default user groups such as "All Authenticated Portal Users" or "Anonymous Portal User". Users require "user" access to an item before it is rendered in a website or rendering portlet.

|
|-   Reviewer

|Users and groups that are assigned to this role can:-   view items in a website or rendering portlet that they are assigned at least user access to.
-   run approve, next stage, and previous stage operations for workflowed items.

|
|-   Draft Creator

|Users and groups that are assigned to this role can:-   view items in a website or rendering portlet that they are assigned at least user access to.
-   access the create draft button if the user also has editor access.
-   access the restart workflow button if the user also has manager access.

|
|-   Contributor

|Users and groups that are assigned to this role can:-   view items in a rendering portlet or servlet-rendered website that they are assigned at least user access to.
-   view libraries that they are assigned contributor access to in an authoring portlet.
-   access the "My Items" and "All Items" views in an authoring portlet for libraries that they are assigned contributor access to.
-   access the item type view within the authoring portlet for item types that they are assigned at least user access to.

|
|-   Editor

|Users and groups that are assigned to this role can:-   view items in a rendering portlet or servlet-rendered website that they are assigned at least user access to.
-   view libraries that they are assigned contributor access to in an authoring portlet.
-   access the "My Items" and "All Items" views in an authoring portlet for libraries that they are assigned at least contributor access to.
-   for library item types that user and groups are assigned at least editor access to, editors can access the following actions in the authoring portlet:
    -   access the item type view
    -   create a new item
    -   add/remove links
    -   apply authoring template
    -   copy
    -   delete items they have created
    -   edit
    -   link to
    -   move
    -   restore a version
    -   edit version labels

|
|-   Manager

|Users and groups that are assigned to these roles can:-   view items in a rendering portlet or servlet-rendered website that they are assigned at least user access to.
-   view libraries that they are assigned contributor access to in an authoring portlet.
-   access the "My Items" and "All Items" views in an authoring portlet for libraries that they are assigned at least contributor access to.

For library item types that they are assigned manager access to, managers can access the all of the actions available to editors and also the following actions in the authoring portlet:-   edit access settings
-   next stage
-   purge
-   unlock
-   edit user profile

|
|-   Administrator

|Users and groups that are assigned to these roles can:-   view items in a rendering portlet or servlet-rendered website that they are assigned at least user access to.
-   view libraries that they are assigned contributor access to in an authoring portlet.
-   access the "My Items" and "All Items" views in an authoring portlet for libraries that they are assigned at least contributor access to.
-   all actions in the authoring portlet for library item types that they are assigned administrator access to.

|
|-   Security Administrator
-   Privileged User
-   Markup Editor

|These roles have no access to Web Content Manager items.|

**HCL Portal Administrators:**

HCL Portal Administrators automatically have Administrator access to all item-types.

**All Items view:**

A user who is assigned access to an item can always view that item in the **All Items** view regardless of whether they have access to the related item-type view. For example, if a user does not have access to the presentation template view, but is granted editor access to a presentation template, they can still view, but not edit, the presentation template from the **All items** view.

## Permission assignments for optimal performance

Inheriting permissions, instead of explicitly defining access rights on individual items, simplifies access rights maintenance and improves overall system performance. Define role assignments as high as possible in the library so that they apply to the largest set of items.

Explicitly defined permissions are a powerful and flexible way to control access to an item, but when the same user or group is being granted the same role on all items within an area, or across an entire library, then inherited permission is the best option

## Assigning roles to anonymous or authenticated users

When accessing a website, users login as either anonymous users, or authenticated portal users.

The following pre-defined groups can be assigned roles in a library.

|Group|Details|
|-----|-------|
|**Anonymous portal user**|Select this user to assign a role to anonymous users.|
|**All Authenticated Portal Users**|Select this group to assign a role to users that have logged on to your server.|
|**Users and User Groups**|Select this group to assign a role to all users and groups.|
|**All Portal User Groups**|Select this group to assign a role to all groups.|

**Parent topic:**[Users, Groups and Roles ](../wcm/wcm_cms_access.md)

