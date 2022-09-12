# Assigning the Can Run As User role

Users with administrator access in HCL Portal can assign the Can Run As User role to designated users. Use Portal Access Control to assign the role. You can use the Virtual Resources option to grant permission for all users or groups in the system.

**Important:** If you use virtual resources to assign the **Can Run As User** role, the user can also impersonate the administrator.

1.  Log on to HCL Portal as an administrator.

2.  Click **Administration menu** in the toolbar.

3.  Choose one of the following options to assign **Can Run As User** access:

    -   Complete the following steps to assign **Can Run As User** access to a user:
        1.  Click **Access** \> **User and Group Permissions**.
        2.  Click **Users**.
        3.  Search for the user that you want to assign the **Can Run As User** role.
        4.  Click **Select Resource Type** for the appropriate user.
        5.  Go to the page that contains the **Virtual Resources** option. Use **Page Next** and click the link.
        6.  Go to the page that contains the **USERS** option and click **Assign Access**.
        7.  Select the **Explicitly Assign** check box for the **Can Run As User** role.
        8.  Click **OK**.
    -   Complete the following steps to assign **Can Run As User** access for a user group:
        1.  Click **Access** \> **Resource Permissions**.
        2.  Click **User Groups**.
        3.  Search for the user group that you want to assign the **Can Run As User** role.
        4.  Click **Assign Access**.
        5.  Select the **Explicitly Assign** check box for the **Can Run As User** role.
        6.  Add the user that you want to impersonate the users of this user group.
        7.  Click in the breadcrumb to return to the user group page.
        8.  Click **Apply** and accept the changes.
        9.  Click **OK**.
4.  Verify that the user now has **User** and **Can Run As User** access.



