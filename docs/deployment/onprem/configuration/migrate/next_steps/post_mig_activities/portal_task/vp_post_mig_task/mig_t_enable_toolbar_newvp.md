# Enabling the 8.5 site toolbar before you create your first Virtual Portal

After migration and before you create your first Virtual Portal on your migrated server, you must install the 8.5 site toolbar.

If you want to create Virtual Portals on your migrated system, complete the following configuration task once before you create the Virtual Portal.

**Cluster only:** Complete this step only on the primary node.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory of your portal installation and run:

    -   AIX® HP-UX Linux™ Solaris: `./ConfigEngine.sh install-toolbar -DWasPassword=password -DPortalAdminPwd=password`
    -   IBM® i: `ConfigEngine.sh install-toolbar -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat install-toolbar -DWasPassword=password -DPortalAdminPwd=password`
    -   z/OS®: `./ConfigEngine.sh install-toolbar -DWasPassword=password -DPortalAdminPwd=password`

You must restart the Portal server after you run the install-toolbar task.

For more information about using the 8.5 toolbar, see the site toolbar documentation.


