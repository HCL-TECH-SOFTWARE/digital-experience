# Accessing the Search Admin UI

This section provides steps on how to grant access to the Search Admin UI.

!!! note
    Access to the Search Admin UI is restricted to administrator users only. For more information, refer to [Working with resource permissions](../../deployment/manage/security/people/authorization/controlling_access/working_with_resource_permission/index.md).

Assign the required portal resource permissions to users who need to access the Search Admin UI. The resources that require permissions depend on how the Search Admin UI is exposed.

## Standalone Search Admin UI

To access the Search Admin UI as a standalone application, go to the following URL:

`https://<host>/dx/ui/search/admin-ui`

![](../../../assets/Search_Admin_UI_standalone_view.png)

For a standalone Search Admin UI deployment, grant access to the **Pages** resource only:

`Pages > Content Root > Practitioner Studio > Administration > Search > Search Admin`

Assign the **Administrator** role to the user or group.

## Search Admin UI in Practitioner Studio

To access the Search Admin UI inside the Portal, go to:

**Practitioner Studio > Administration > Search > Search Admin**

![](../../../assets/Search_Admin_UI_portal_view.png)

When the Search Admin UI is accessed inside Practitioner Studio, grant access to both the page and portlet resources.

### Pages resource

Navigate to:

`Pages > Content Root > Practitioner Studio > Administration > Search > Search Admin`

Assign the **Administrator** role to the user or group.

### Portlet resource

Navigate to:

`Portlets > Search Center Administration portlet`

Assign at least the **User** role to the user or group.
