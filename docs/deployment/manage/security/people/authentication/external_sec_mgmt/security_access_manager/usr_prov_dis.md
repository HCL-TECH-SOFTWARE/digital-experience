# Disabling user provisioning

After you enable and use the user provisioning feature within IBM Security Access Manager, you can disable the feature.

Perform the following steps to disable user provisioning within Security Access Manager:

**Important:** Perform these steps on one portal node in a clustered environment.

1.  Run the following task to disable user provisioning:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh disable-tam-userprov -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   IBM® i: ConfigEngine.sh disable-tam-userprov -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   Windows™: ConfigEngine.bat disable-tam-userprov -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.
    -   z/OS®: ./ConfigEngine.sh disable-tam-userprov -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    **Note:** In a clustered environment WasPassword is the Deployment Manager administrative password.

2.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).



