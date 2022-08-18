# Verifying external authorization to Security Access Manager

After configuring HCL Digital Experience to use Security Access Manager for externalized authorization, you should verify that it works properly before continuing with any additional configuration tasks.

Perform the following steps to verify that Security Access Manager is working properly:

1.  Verify that your topology matches the topology described in the protected object space.

    For example, ensure the value of the wp.ac.impl.PDroot parameter exists in the Security Access Manager protected object space.

2.  Perform the following steps to verify that at least one user, typically the administrator, has the `Administrator@VIRTUAL/EXTERNAL ACCESS CONTROL_1` role:

    1.  Enter the pdadmin\> acl show WPS\_Administrator-VIRTUAL\_wps-EXTERNAL\_ACCESS\_CONTROL\_1 command on the pdadmin command line to verify that the administrator and administrator group have the `Administrator@VIRTUAL/EXTERNAL ACCESS CONTROL_1` role.

    2.  Enter the following commands to add the administrator to the `Administrator@VIRTUAL/EXTERNAL ACCESS CONTROL_1` role if no entry is found:

        -   pdadmin\> acl modify WPS\_Administrator-VIRTUAL\_wps-EXTERNAL\_ACCESS\_CONTROL\_1 set user wpsadmin T\[WPS\]m
        -   pdadmin\> acl modify WPS\_Administrator-VIRTUAL\_wps-EXTERNAL\_ACCESS\_CONTROL\_1 set group wpsadmins T\[WPS\]m
        where wpsadmin is the administrator user ID and wpsadmins is the administrator group.

3.  Perform the following steps from the Resource Permissions portlet:

    1.  Select a resource type.

    2.  Click the **Assign Access** icon for the specific resource.

    3.  Click the **Edit Role** icon for a role that you want to externalize.

    4.  Click **Add** to explicitly assign at least one user or group to your chosen role for the resource.

    5.  Click **Search for Users or User Groups** or click the pull down for the **Search by** option where the default is set to **All available** to select specific users or user groups. Then click **OK**.

        An informational message box should display the message that members were successfully added to the role.

    6.  Explicitly assign additional roles. If you do not assign at least one user or group to each role type for the resource, you must use the external security manager interface to create this role type later. For example, if you do not assign any users or groups to the Editor role type for the resource, then you must use the external security manager interface to create the Editor role type later.

    7.  Click the **Externalize** icon for the resource. These steps move every role that is defined for each resource you assigned to the Security Access Manager protected object space. One ACL is created for each externalized role.

4.  Add users to the ACLs that are attached to the role types on that resource by using either the Security Access Manager GUI or the pdadmin command line.

    **Remember:** If you log on as an administrator to externalize resources to Security Access Manager,

    -   You must be a member of the `wpsadmins` group.
    -   The `wpsadmins` group must appear in the `VIRTUAL/EXTERNAL_ACCESS_CONTROL_1` ACL.

**Parent topic:**[Security Access Manager](../security/conf_tam.md)

