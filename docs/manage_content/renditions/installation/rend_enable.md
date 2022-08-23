# Enabling renditions

Renditions are enabled by default. If you disable them, you must run a ConfigEngine task to enable them.

Running this task sets renditions.enabled=true as a global property for all virtual portals in the Web Content Manager Config Resource Environment Provider Service.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

2.  Run the following command:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh enable-renditions -DPortalAdminPwd=password -DWasPassword=password
    -   IBM® i: ConfigEngine.sh enable-renditions -DPortalAdminPwd=password -DWasPassword=password
    -   Windows™: ConfigEngine.bat enable-renditions -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh enable-renditions -DPortalAdminPwd=password -DWasPassword=password
3.  Restart the HCL Portal server.



