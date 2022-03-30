# Changing the HCL Digital Experience administrator password 

HCL Digital Experience treats wpsadmin \(the administrator\) as any other user, just with more permissions granted. With a normal configuration, it is possible to change the wpsadmin or equivalent password through the user interface, just like any other user can manage their own password through the user interface. However, if the wpsadmin account is also used for more than just the administrator, then additional changes, outlined in other steps in this section, must be made to accommodate the change.

Perform the following steps to change the administrator password:

**Note:** You can also change the Administrator password, like any other user password, using an LDAP editor.

1.  Log in to HCL Digital Experience as an administrator.

2.  Click your user ID.

3.  Complete the appropriate fields to change your password.

4.  Click **OK**.

5.  Complete the following steps to change the information stored in the **SearchAdminUser** alias:

    1.  Log in to the WebSphere® Integrated Solutions Console.

    2.  Click **Security** \> **Global security**.

    3.  Under Authentication, click **Java Authentication and Authorization Service** \> **J2C authentication data**.

    4.  Edit the **SearchAdminUser** alias.

    5.  Update the user ID and/or password to match your HCL Digital Experience administrator information.

6.  Update the user ID and password for the RunAs role mapping for the StartupCheck application.

    To do so, proceed as follows:

    1.  Log in to the WebSphere Integrated Solutions Console.

    2.  Select **Enterprise Applications** \> **StartupCheck** \> **User RunAs roles**.

    3.  Update the user ID and password for the RunAs role mapping for the StartupCheck application.


Additionally, you should also change the password in the wkplc.properties file, located in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

**Parent topic:**[Updating user ID and passwords](../security/sec_pswds.md)

**Related information**  


[Applying fix packs to your portal](../security/apply_fixpacks.md)

