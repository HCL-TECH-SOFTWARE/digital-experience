# Deploying and updating sample web content template items

The sample web content template items are not installed or updated during migration. This sample content includes examples of web content template pages and predefined content items that you can add to pages to render content. You can add or update these items manually after migration.

**Important:** These instructions apply only if you installed an offering that includes the sample web content template items. These steps do not work with an offering that does not include the sample content.

When you add the sample content, the following artifacts are created:

-   The `Template Page Content 3.0` and `Web Content Templates 3.0` web content libraries.
-   The **Web Content** category in the site toolbar.
-   The "Image," "Rich Text," "List of Articles," and "Article" content items. These content items are available from **Create > Content** tab of the site toolbar.
-   The "Articles" web content page template.

**Note:** The "Articles" page template can be deployed only if the Portal 8.5 theme is available in your portal.

1.  Go to the wp_profile_root/ConfigEngine directory. When using z/OS®, open a UNIX™ System Services command prompt to change directories.

    !!!note
        If you are instructed to open a properties file, edit the file only with a tool appropriate for editing ASCII files.

2.  To install the sample web content template items, choose one of the following options that is based on your environment:

    -   If the Portal 8.5 theme is available in your portal, run the following command to install the library, content items, and Articles sample page:
        -   AIX® and Linux™: .`/ConfigEngine.sh deploy-content-templating-ui -DPortalAdminId=user_name -DPortalAdminPwd=password -DWasUserid=user_name -DWasPassword=password`
        -   Windows™: `ConfigEngine.bat deploy-content-templating-ui -DPortalAdminId=user_name -DPortalAdminPwd=password -DWasUserid=user_name -DWasPassword=password`

    -   If the Portal 8.5 theme is not available in your portal, run the following command to install the library and the content items:
        -   AIX and Linux: `./ConfigEngine.sh deploy-content-templating-library -DPortalAdminId=user_name -DPortalAdminPwd=password -DWasUserid=user_name -DWasPassword=password`
        -   Windows: `ConfigEngine.bat deploy-content-templating-library -DPortalAdminId=user_name -DPortalAdminPwd=password -DWasUserid=user_name -DWasPassword=password`

3.  The sample web content template items include tagging and rating components. These components are functionally available from the web content libraries that are provided with the blogs and wikis feature of the portal. If you intend to use tagging and rating with the templating sample content, you must ensure that the blogs and wikis libraries are installed. For details on installing these libraries, see *Blogs and wikis* in the migration section of the documentation.


???+ info "Related information"  
    -   [Migration: Blogs and wikis](../../../../../../deployment/manage/migrate/next_steps/post_mig_activities/portal_task/mig_blogs_wiki.md)
    -   [Creating content with sample web content template items](../../../../../../manage_content/wcm/wcm_content_delivery/delivering_web_content/deliver_webcontent_on_portal/getting_started/creating_contentsamples/index.md)

