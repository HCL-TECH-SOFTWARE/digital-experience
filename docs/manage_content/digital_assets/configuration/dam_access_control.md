# DAM Access Control Management

This topic describes details about DAM collection access feature and how to assign permission to Users through DAM UI

## Overview on DAM Collection Access

DAM collection is accessible by the current user based on his role and this access permission is managed by DX Portal Access Control (e.g. Possible Role Types are User, Editor (edit, create), Manager (edit, create, delete), Administrator (edit, create, delete, set/remove access) in DX perspective).

### DX Portal Access Control

DX Portal Access Control follows an inheritance based tree structure. At the top of the tree is the virtual Resource Portal, below it is the virtual Resource Media Library and below that, is the resource instances you are registering with its children. By assigning a role on a resource to a user, the user gets permissions on the resource and its children. There is a way to block the inheritance with role blocks but it is not exposed in the initial configuration. 

![Portal Access Control Roles](../../../../images/access_roles_portal.png)

Note: Currently, only Administrator, Editor and User roles are exposed in DAM UI.

### DAM Access Control

From the DAM perspective, each individual collection is a resource instance. 

- User can view the collection if he has User role
- User can view, create and edit the collection if he has Editor role
- User can view, create, edit and delete the collection if he has Manager role. 
- User can view, create, edit, delete the collection and he can even assign/remove the permission for other users as well, if he has Administrator role.

![DAM Access Control Roles](../../../../images/access_roles_dam.png)

# Assigning Permission to User

