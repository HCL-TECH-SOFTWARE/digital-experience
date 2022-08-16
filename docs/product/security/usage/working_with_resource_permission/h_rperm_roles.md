---
id: h_rperm_roles
title: Roles
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Roles determine the level of access to resources that users and user groups have. Read about the specific permissions that are associated with the different role types.

Roles can be assigned in the following three ways:

-   Explicitly assigned by someone with authorization. Use the **User and Group Permissions** portlet or the **Resource Permissions** portlet to assign roles explicitly. Explicit role assignments override role blocks.
-   Implicitly assigned through membership in a user group. Use the **Manage Users and Groups** portlet to assign group membership.
-   Inherited through a role assignment on a parent resource. Use the **Resource Permissions** portlet to administer role blocks that affect inherited role assignments. You can also use the **User and Group Permissions** portlet to administer the role assignments that a user or group has on a parent resource.

Users and groups can have multiple roles on the same resource. For example, the user Hans Mueller might have both the Editor and Manager roles on a particular page. One of these roles might be inherited from the resource hierarchy and the other might be explicitly assigned by a portal administrator.

The following table summarizes roles and how they affect user interaction with resources:

|Role|Permissions|
|----|-----------|
|Administrator|Unrestricted access on resources, which includes creating, configuring, and deleting resources. Administrators can also change the access control configuration.|
|Security Administrator|Creating and deleting role assignments for roles that are tied to specific resources.|
|MARKUP\_EDITOR|Changing the HTML source for static portal pages.|
|Manager|Creating new resources and configuring and deleting existing resources that are used by multiple users.|
|Editor|Creating new resources and configuring existing resources that are used by multiple users.|
|Contributor|Viewing content and creating new resources. The Contributor role does not include the permission to edit resources. You can create only new resources.|
|Privileged user|Viewing portal content, personalizing portlets and pages, and creating new private pages.|
|User|Viewing portal content. For example, viewing a specific page or user profile.|
|Draft Creator|Creating a draft copy of a published or new item. The published item is locked on the rendered site, while a copy of the item is sent through a workflow. After the draft item is approved, it replaces the published item.|
|Reviewer|Approving an item and send it to the next stage in a workflow.|

