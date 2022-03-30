# Creating new users and groups 

Use this topic to create new users and groups by using the portlet and adding them to an existing group.

The objective of this task is to step you through the process of creating new users and groups.

To complete this task, you must have at least the Editor@USERS role to create users and the Editor@USER\_GROUPS role to create user groups. USERS and USER\_GROUPS are virtual resources.

The portlets that are used in this task are Users and Groups

**Note:** As you follow the instructions for this task, refer to the *user IDs and passwords* topic, for more information on the characters you can use in the user ID, password, first name, and last name fields.

1.  Log in to your portal as an administrator.

2.  Click the **Administration menu** icon. Then, click **Access** \> **Users and Groups**.

3.  Select the user group for the user.

4.  Click **New User** or **New Group**.

    **Note:** If the Editor role is not assigned to the following virtual resources: USER, USER GROUPS, and USER SELF ENROLLMENT, **New User** and **New Group** might not display in virtual portals.

5.  If you are creating a new user group, enter a name for the user group.

6.  If you are creating a new user, do the following tasks:

    1.  Enter a user ID for the new user. The user ID must be 3-60 characters in length.

    2.  Enter and confirm a password for the new user. The password must be unique and 5-60 characters in length.

    3.  Enter a first name for the new user.

    4.  Enter a last name for the new user.

    5.  Enter an email address for the new user. This field is not needed for successful creation of a new user.

    **Note:** If you use an LDAP server for your users and groups, your LDAP configuration might place additional restrictions on user and group names. For example, the LDAP configuration might require user names and passwords to be a minimum of 8 characters in length. For information about supported characters, see the related links.

7.  Select **Preferred language** from the drop-down list. This field is not needed for successful creation of a new user. If you do not select a preferred language or if the language is not supported by the portal, the default language is the default HCL Portal language.

8.  Click **OK**.


**Parent topic:**[Users and groups ](../admin-system/adusrgrp.md)

**Related information**  


[User IDs and passwords ](../plan/sec_chars.md)

