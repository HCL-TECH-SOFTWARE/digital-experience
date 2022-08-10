# Deploying and updating sample web content template items

The sample web content template items are not installed or updated during migration. This sample content includes examples of web content template pages and predefined content items that you can add to pages to render content. You can add or update these items manually after migration.

**Important:** These instructions apply only if you installed an offering that includes the sample web content template items. These steps do not work with an offering that does not include the sample content.

When you add the sample content, the following artifacts are created:

-   The `Template Page Content 3.0` and `Web Content Templates 3.0` web content libraries.
-   The **Web Content** category in the site toolbar.
-   The "Image," "Rich Text," "List of Articles," and "Article" content items. These content items are available from **Create** \> **Content** tab of the site toolbar.
-   The "Articles" web content page template.

**Note:** The "Articles" page template can be deployed only if the Portal 8.5 theme is available in your portal.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory. When using z/OS®, open a UNIX™ System Services command prompt to change directories.

    **Note:** If you are instructed to open a properties file, edit the file only with a tool appropriate for editing ASCII files.

2.  To install the sample web content template items, choose one of the following options that is based on your environment:

    -   If the Portal 8.5 theme is available in your portal, run the following command to install the library, content items, and Articles sample page:
        -   AIX® Linux™ Solaris: ./ConfigEngine.sh deploy-content-templating-ui -DPortalAdminId=user\_name -DPortalAdminPwd=password -DWasUserid=user\_name -DWasPassword=password
        -   Windows™: ConfigEngine.bat deploy-content-templating-ui -DPortalAdminId=user\_name -DPortalAdminPwd=password -DWasUserid=user\_name -DWasPassword=password
        -   IBM® i: ConfigEngine.sh deploy-content-templating-ui -DPortalAdminId=user\_name -DPortalAdminPwd=password -DWasUserid=user\_name -DWasPassword=password
        -   z/OS: ./ConfigEngine.sh deploy-content-templating-ui -DPortalAdminId=user\_name -DPortalAdminPwd=password -DWasUserid=user\_name -DWasPassword=password
    -   If the Portal 8.5 theme is not available in your portal, run the following command to install the library and the content items:
        -   AIX Linux Solaris: ./ConfigEngine.sh deploy-content-templating-library -DPortalAdminId=user\_name -DPortalAdminPwd=password -DWasUserid=user\_name -DWasPassword=password
        -   Windows: ConfigEngine.bat deploy-content-templating-library -DPortalAdminId=user\_name -DPortalAdminPwd=password -DWasUserid=user\_name -DWasPassword=password
        -   IBM i: ConfigEngine.sh deploy-content-templating-library -DPortalAdminId=user\_name -DPortalAdminPwd=password -DWasUserid=user\_name -DWasPassword=password
        -   z/OS: ./ConfigEngine.sh deploy-content-templating-library -DPortalAdminId=user\_name -DPortalAdminPwd=password -DWasUserid=user\_name -DWasPassword=password
3.  The sample web content template items include tagging and rating components. These components are functionally available from the web content libraries that are provided with the blogs and wikis feature of the portal. If you intend to use tagging and rating with the templating sample content, you must ensure that the blogs and wikis libraries are installed. For details on installing these libraries, see *Blogs and wikis* in the migration section of the documentation.


**Parent topic:**[Add-ons, features, and third-party integration tasks](../migrate/mig_post_ptl_int_addon.md)

**Related information**  


[Migration: Blogs and wikis](../migrate/mig_blogs_wiki.md)

[Creating content with sample web content template items](../wcm/wcm_delivery_ctsamples_main.md)

