# Enabling and disabling the Dojo tagging and rating options for additional profiles

In a portal installation,the Dojo tagging and rating menu options for portal pages and portlets are available for a specific portal profile. You can enable these options for other profiles by adding them to the profile.

In a HCL Portal V 8.5 installation, the Dojo tagging and rating menu options for portal pages and portlets are available for the Search and Tag Center profile. This profile is named profile\_search\_tag.json. You can apply this profile to a page or portlet where Dojo tagging and rating options are required. After you apply this profile, the page action menu or portlet menu shows the tagging and rating options.

!!! note
    -   If you upgraded your HCL Portal from version 8.0 to 8.5, you also need to update the page to which you add the tagging and rating options with the new Portal V 8.5 theme. For more information, read *Post-migration steps for Tag and Search enter pages*.
    -   Enabling the Dojo tagging and rating menu options for a profile can influence performance.

To enable the Dojo tagging and rating options for other profiles, proceed as follows:

1.  Open the profile for which you want to enable the modules.

2.  Add the module `wp_tagging_rating_menu` to the list of modules in the section `moduleIDs`.

3.  Apply the modified profile.

    To do so, proceed as follows:

    1.  Start a WebDAV client.

    2.  Create a connection with the entry point to /wps/mycontenthandler/dav/fs-type1 of HCL Portal V 8.5.

    3.  Go to **Themes** \> **Portal 8.5** \> **Profiles**.

    4.  Upload the modified profile by using the **Upload** option in the WebDAV client.

    5.  Log in to the portal server.

    6.  Invalidate the cache with the Portal Theme Analyzer. Or, click **Administration** \> **Utilities** \> **Control Center** \> **Invalidate cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../../themes_skins/the_module_framework/themeopt_analyzer/utilities/index.md).

    This step applies the changes that you made to the profile on the server.


You can now use the Dojo tagging and rating menu options with the modified profile. To disable the Dojo options for a profile, remove the module `wp_tagging_rating_menu` from the profile, and apply the modified profile on the server by the described procedure.


???+ info "Related information:"
    - [What is new in tagging and rating](../tag_rate_whatsnew.md)
    - [Tag and Search Center pages](../../../deployment/manage/migrate/next_steps/post_mig_activities/portal_task/mig_post_tagsearchpages.md)`

