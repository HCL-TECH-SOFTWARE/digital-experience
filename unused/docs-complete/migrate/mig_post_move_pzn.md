# Moving the personalization page 

After you migrate from Portal Version 7.x to HCL Digital Experience 8.5, change your theme to Version 8.5. The Personalization welcome page is in the Content application area. You can run a task to move the Personalization welcome page back to the application level.

**Note:** This task is only required on the virtual portals.

Run this task to move the Personalization page to the application level. If you do not run this task, the Personalization welcome page remains in the Content application. If the personalization welcome page remains in the Content application, you cannot access the other existing pages in the Content application area.

1.  Open a command prompt and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

2.  Run the following task to move the Personalization welcome page:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh move-pzn-page
    -   IBM® i: ConfigEngine.sh move-pzn-page
    -   Windows™: ConfigEngine.bat move-pzn-page
    -   z/OS®: ./ConfigEngine.sh move-pzn-page
    **Virtual Portal parameter:** Add the -DVirtualPortalContext=vp \_context\_root parameter to the move-pzn-page task.


**Parent topic:**[Virtual Portal tasks ](../migrate/virt_portal_post_mig.md)

