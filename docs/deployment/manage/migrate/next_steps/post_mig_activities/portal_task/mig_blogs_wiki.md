# Migration: Blogs and wikis

After you migrate from HCL Portal Versions 7.0 or 8.0 to Version 8.5, you must run a configuration task to update the presentation templates that are used by blogs and wikis to apply the latest updates. You must run this task for content in your blogs and wikis to render properly.

If you customized your blogs and wiki, you will lose your customizations and you must reapply those customizations after you run the task.

1.  Open a command prompt and go to the wp_profile_root/ConfigEngine directory.

2.  Run the following command:

    -   AIX® and Linux™: `./ConfigEngine.sh configure-blog -DPortalAdminPwd=password -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat configure-blog -DPortalAdminPwd=password -DWasPassword=password`

3.  Restart HCL Portal.


Enabling blogs and wikis by running the configure-blog task also enables tag and rating widgets. Go to [Enabling the new tag and rating widgets after a portal upgrade](../../../../../../deployment/manage/migrate/next_steps/enable_func_migrated_portal/mig_post_tagandrate.md)) to verify and finish enabling tag and rating widgets.


???+ info "Related information" 
    -   [The tag and rating widgets](../../../../../../build_sites/tagging_rating/tagging_rating_ui/tagging_rating_widget/index.md)
    -   [Deploying and updating sample web content template items](../../../../../../deployment/manage/migrate/next_steps/post_mig_activities/addon_integration_task/mig_t_templatesample.md)

