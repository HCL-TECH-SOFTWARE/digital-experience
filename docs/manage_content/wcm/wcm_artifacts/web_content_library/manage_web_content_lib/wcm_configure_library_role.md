# Defining roles within a library

You can define the access of a user or group for a library to determine who has access to a library, and to define access within the authoring portlet.

You must have administrator access to edit web content libraries.

**Additive and subtractive methodology:**

You can assign roles to both a whole library, and the item types within a library by using either an additive or subtractive strategy.

For example, with an additive strategy, you apply the "All Authenticated Portal Users" to the "Contributor" role to the entire library. This strategy grants "All Authenticated Portal Users" access to the library and any authoring portlets that are configured to use the library. You then apply Editor, Manager, or Administrator roles to specific resource types to grant extra access to specified users or groups.

With a subtractive strategy, you apply the Manager or Administrator role to a user or group to the entire library. You then apply Editor, Contributor, or User roles to specific item types and clear the inheritance check box. This strategy reduces the access to different item types for specified users or groups.

Propagation from the web content library is the preferred strategy because this strategy simplifies administering library access and because disabling propagation might result in access-related errors.

1.  Assigning access permissions to a library and library item types:
2.  Click the **Administration menu** icon in the toolbar. Then, click **Portal Content** \> **Web Content Libraries**.

3.  Set your library access permissions:

    1.  Click ![permissions](../../../../../images/permissions.jpg) on the library you would like to edit.

    2.  Click ![edit](../../../../../images/edit.jpg) on the role you would like to edit.

    3.  Click **Add** and search for any users or groups you would like to assign to a role.

    4.  Click **OK**.

    5.  Click **Resources** to return to the previous view.

    6.  Click **Done**.

4.  Set **access permissions** to the different library item types. This setting defines the views and actions that are available from within the authoring portlet:

    1.  Click ![Library resource](../../../../../images/keydoc.jpg) on the library you would like to edit.

    2.  Click ![edit](../../../../../images/edit.jpg) on the role you would like to edit.

    3.  Click **Add** and search for any users or groups you would like to assign to a role.

    4.  Click **OK**.

    5.  Click **Resources** to return to the previous view.

    6.  Click **Done**.


**Item-level security inheritance:**

By default, each role's access is automatically inherited down to each item in a library. To prevent a user or group from automatically inheriting access to an item, you must turn off inheritance on that item.

The permissions set for item types in a library do not automatically give you access to individual items. They give you access only to specific tasks and views within the authoring portlet.

To disable automatic inheritance you, specify the following property in the WCM WCMConfigService service by using the IBM® WebSphere® Application Server administration console:

-   Property name: `default.inherit.permissions.enabled`
-   Value: `false`

You must restart HCL Portal to enable any configuration changes.

<!--
**Parent topic:**[Managing web content libraries](../panel_help/wcm_admin_libraries.md) -->

