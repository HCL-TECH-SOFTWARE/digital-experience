# Migration: Blogs and wikis 

After you migrate from HCL Portal Versions 7.0 or 8.0 to Version 8.5, you must run a configuration task to update the presentation templates that are used by blogs and wikis to apply the latest updates. You must run this task for content in your blogs and wikis to render properly.

If you customized your blogs and wiki, you will lose your customizations and you must reapply those customizations after you run the task.

1.  z/OS® only: When you use z/OS, open a UNIX™ System Service command prompt to change directories.

    **Note:** If you are instructed to open a properties file, the files are ASCII files and must be opened by using the appropriate tool.

2.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following command:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh configure-blog -DPortalAdminPwd=password -DWasPassword=password
    -   IBM® i: ConfigEngine.sh configure-blog -DPortalAdminPwd=password -DWasPassword=password
    -   Windows™: ConfigEngine.bat configure-blog -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh configure-blog -DPortalAdminPwd=password -DWasPassword=password
4.  Restart HCL Portal.


Enabling blogs and wikis by running the configure-blog task also enables tag and rating widgets. Go to [Enabling the new tag and rating widgets after a portal upgrade](mig_post_tagandrate.md#) to verify and finish enabling tag and rating widgets.

**Parent topic:**[Portal tasks ](../migrate/mig_post_portaltasks.md)

**Related information**  


[The tag and rating widgets ](../admin-system/tag_rate_ui_alt.md)

[Deploying and updating sample web content template items ](../migrate/mig_t_templatesample.md)

