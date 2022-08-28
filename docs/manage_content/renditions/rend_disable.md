# Disabling renditions

Renditions are enabled by default. If you want to disable them, you must run a ConfigEngine task.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

2.  Run the following command:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh disable-renditions -DPortalAdminPwd=password -DWasPassword=password
    -   IBM® i: ConfigEngine.sh disable-renditions -DPortalAdminPwd=password -DWasPassword=password
    -   Windows™: ConfigEngine.bat disable-renditions -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh disable-renditions -DPortalAdminPwd=password -DWasPassword=password
3.  Restart the HCL Portal server.



