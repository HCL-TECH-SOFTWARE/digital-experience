# Enabling and disabling portal light mode 

When you enable portal light mode, a portlet application is not started by a user request, but by the first standard HTTP request that occurs and renders a portal page that contains the portlet application on the server. Direct access to the portlet, for example an Ajax request, does not start the portlet.

Follow the appropriate procedures to enable or disable portal light mode.

-   Enable: To enable portal light mode, change to the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` and run the configuration task

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh enable-portal-light-startup-performance -DWasPassword=password
    -   Windows™: ConfigEngine.bat enable-portal-light-startup-performance -DWasPassword=password
    -   IBM® i: ConfigEngine.sh enable-portal-light-startup-performance -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh enable-portal-light-startup-performance -DWasPassword=password
-   Disable: To disable portal light mode, change to the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` and run the configuration task

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh disable-portal-light-startup-performance -DWasPassword=password
    -   Windows: ConfigEngine.bat disable-portal-light-startup-performance -DWasPassword=password
    -   IBM i: ConfigEngine.sh disable-portal-light-startup-performance -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh disable-portal-light-startup-performance -DWasPassword=password

**Limitations:** When portal light mode is enabled, the following limitations apply:

1.  If you manually stop applications, for example by using the WebSphere® Integrated Solutions Console or the wsadmin user ID, and they are then accessed by users, the applications are automatically started again.
2.  When you use the activation task activate-portlets to activate all portlets, it starts all portlets, including the portlets that are set for lazy load.

**Parent topic:**[Using portal light mode ](../admin-system/portal_light_mode.md)

