# Reinstalling the PortalTheme

If you migrate from Version 7.0 to Version 8.5, when you apply the latest Combined Cumulative Fix during post-migration, the PortalTheme from earlier Portal versions is removed. If your system requires this theme, then you can manually reinstall it.

In Version 8.0, the PortalTheme was removed. Complete the following procedure only if your migrated system requires the PortalTheme from an earlier version.

1.  Run the following command to install the PortalTheme.

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh deploy-portal-theme -DPortalAdminPwd=password -DWasPassword=password
    -   IBM® i: ConfigEngine.sh deploy-portal-theme -DPortalAdminPwd=password -DWasPassword=password
    -   Windows™: ConfigEngine.bat deploy-portal-theme -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh deploy-portal-theme -DPortalAdminPwd=password -DWasPassword=password
2.  Restart your portal server.


**Parent topic:**[Theme tasks](../migrate/mig_post_themetasks.md)

