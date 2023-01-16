# Roles




Users and user groups might be assigned different roles for each resource.

Roles determine the level of access and can be assigned in the following three ways:

-   Explicitly assigned by someone with the necessary authorization. Use the User and Group Permissions portlet or the Resource Permissions portlet to assign roles explicitly. Explicit role assignments override role blocks.
-   Implicitly assigned through membership in a user group. Use the Manage Users and Groups portlet to administer group membership.
-   Inherited through a role assignment on a parent resource. Use the Resource Permissions portlet to administer role blocks that affect inherited role assignments. You can also use the User and Group Permissions portlet to administer the role assignments that a user or group has on a parent resource.

Users and groups can have multiple roles on the same resource. For example, the user Hans Mueller might have both the Editor and Manager roles on a particular page. One of these roles might be inherited from the resource hierarchy and the other might be explicitly assigned by a portal administrator.

The following table summarizes roles and how they affect user interaction with resources:

|Role|Allowed Actions|
|----|---------------|
|Administrator|Unrestricted access on resources, which includes creating, configuring, and deleting resources. Administrators can also change the access control settings on resource; in other words grant other people access to those resources.|
|Security Administrator|Creating and deleting role assignments on resources. The Security Administrator role allows the user to act as a delegated administrator for that resource. The Security Administrator can delegate a subset of their privileges to other people according to the Delegated Administration Policy topic. For example, a user with Security Administrator and Editor roles can assign the Editor role to other people. The Security Administrator role on a resource does not give view or edit access to the resource.|
|Delegator|Assigning the Delegator role to principals (users and groups) allows roles to be granted to them. Having the Delegator role on other resources, such as specific portlets, is not useful. The set of roles that can be granted to those principals is defined through the Security Administrator and Administrator roles. For example, a user has a Delegator role on the SalesTeam user group but no Delegator role on the Managers user group. Therefore, this user can grant roles only to the SalesTeam or individual members of the SalesTeam user group but not to the Managers user group. The Delegator role on a resource does not give direct access to the resource. The purpose of the Delegator role is to allow the granting of roles to users or groups. Therefore, assigning the Delegator role on resources or resource types that are not users or user groups does not grant those users more privileges.|
|Can run as User (user impersonation)|After you enable the Impersonation feature, you can assign a user the Can run as User role. It allows them to view pages, portlets, and other portal components as another user. Support specialists can use this role to troubleshoot.|
|Manager|Creating new resources and configuring and deleting existing resources that are used by multiple users.|
|Editor|Creating new resources and configuring existing resources that are used by multiple users.|
|Markup Editor|Changing the HTML source for static portal pages.|
|Contributor|Viewing portal content and creating new resources. The Contributor role does not include the permission to edit resources. You can create only new resources. For example, a user is granted the Contributor role on the Template Category Teamspace. The user cannot modify the category itself but can create new templates in this category. A Contributor to a page can create subpages but cannot change the original page.<br>**Note:** This role is only available for the following resources:<br> - Application Templates<br> - Application Template Categories<br> - Application Template Root<br> - Policies<br> - Pages<br> - All HCL Web Content Manager related documents|
|Privileged user|Viewing portal content, customizing portlets and pages, and creating private pages.|
|User|Viewing portal content. For example, viewing a specific page.|
|Draft Creator|Creating a draft copy of a published or new item. The published item is locked on the rendered site. A copy of the item is sent through a workflow. After the draft item is approved, it replaces the published item.|
|Reviewer|Approving an item and send it to the next stage in a workflow.|
|No role that is assigned|Cannot interact with resource.|

