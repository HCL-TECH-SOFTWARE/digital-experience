# Changing the WebSphere Application Server administrator password in the file registry 

If you are using the file registry in the federation repository to store passwords, you need to change the passwords in the file registry.

Complete the following steps to change the WebSphere® Application Server administrator password stored in the file registry:

1.  Using a command prompt, change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory.

2.  Issue the wsadmin -conntype NONE command and press **Enter**.

3.  Issue the $AdminTask changeFileRegistryAccountPassword \{-userId <wpsadmin\_ID\> -password <wpsadmin\_new\_password\>\} command and press **Enter**.

4.  Issue the $AdminConfig save command and press **Enter**.

5.  Complete the following steps to update the RunAsRole, which changes the stored password:

    You can change the password for the WebSphere Application Server administrator user ID using the HCL Portal Edit My Profile portlet, the native utilities for the user repository, such as the LDAP administration interface or the WebSphere Application Server Administrative utilities. Regardless of which option you choose, once you have updated the password, you must also update the RunAsRole for the PZNScheduler application.

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

