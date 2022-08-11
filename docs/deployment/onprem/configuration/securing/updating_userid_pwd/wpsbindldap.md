# Changing the WebSphere Application Server administrator password in the LDAP server using the LDAP administration interface

If you are using the IBM Directory Server or IBM SecureWay Security Server for z/OS and OS/390 LDAP server, you can change the IBM WebSphere Application Server administrator password in the LDAP server using the LDAP administration interface. If you are using any other LDAP server, refer to the product documentation for information about changing passwords.

Perform the following steps to change the WebSphere® Application Server administrator password in the LDAP server using the LDAP administration interface:

**Attention:** The following directions assume an LDAP tree layout where the users are all in the cn=users,o=wps subtree in the directory server. You should adjust these directions based on your own LDAP server layout.

**Tip:** When you change the WebSphere Application Server administrator password, you should also change it in LDAP server.

1.  Log in to the LDAP server Web Administration Tool.

2.  Click **Directory management** \> **Manage entries**.

3.  Select the **o=wps RDN** and click **Expand**.

4.  Select **cn=users** and click **Expand**.

5.  Select the WebSphere Application Server administrator user and click **Edit Attributes**.

    **Note:** If this is your first time navigating to this screen, you may need to click **Next** before you can click the **Optional attributes** link.

6.  Click **Optional attributes**.

7.  Enter the new password in the **userPassword** field.

8.  Click **OK**.

9.  Exit the Web Administration Tool.

10. Complete the following steps to update the RunAsRole, which changes the stored password:

    You can change the password for the WebSphere Application Server administrator user ID using the HCL Digital Experience Edit My Profile portlet, the native utilities for the user repository, such as the LDAP administration interface or the WebSphere Application Server Administrative utilities. Regardless of which option you choose, once you have updated the password, you must also update the RunAsRole for the PZNScheduler application.

    1.  Log on to the WebSphere Integrated Solutions Console with your new password.

    2.  Go to **Applications** \> **Application Types** \> **WebSphere enterprise applications**.

    3.  Locate and click the **pznscheduler** application.

    4.  Click **User RunAs Roles** under Detail Properties.

    5.  Select **RuleEventRunAsRole** and then click **Remove**.

    6.  Enter the fully distinguished name \(DN\) of the WebSphere Application Server Administrator in the **username** field and the new password in the **password** field.

    7.  Select **RuleEventRunAsRole** and then click **Apply** to apply your changes.

    8.  Click **OK**, save your changes, and then restart the server.


**Parent topic:**[Updating user ID and passwords](../security/sec_pswds.md)

**Related information**  


[Applying fix packs to your portal](../security/apply_fixpacks.md)

