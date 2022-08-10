# Moving hidden pages

Portal scripts create hidden pages that can clutter the page topology, making it difficult for users to find the page they want, and also slow down portal performance. To clean up the page topology and ensure faster runtime performance, administrators can move these hidden pages to a different location after you complete the migration to HCL Digital Experience 8.5.

1.  Go to [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine.

2.  Run the following command:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh move-portal-hidden-pages -DWasPassword=was\_password -DPortalAdminPwd=portal\_password
    -   IBM® i: ConfigEngine.sh move-portal-hidden-pages -DWasPassword=was\_password -DPortalAdminPwd=portal\_password
    -   Windows™: ConfigEngine.bat move-portal-hidden-pages -DWasPassword=was\_password -DPortalAdminPwd=portal\_password
    -   z/OS®: ./ConfigEngine.sh move-portal-hidden-pages -DWasPassword=was\_password -DPortalAdminPwd=portal\_password

**Parent topic:**[Enabling new functionality in a migrated portal](../migrate/mig_t_enable_new.md)

