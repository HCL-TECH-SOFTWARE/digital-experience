# Enabling and disabling the tag and rating widgets for additional profiles

In a portal installation, the tag and rating widgets are available for specific portal profiles. You can enable the widgets for more other profiles by adding them to the profile.

In a default HCL Portal V 8.5 installation, the tag and rating widgets are available with the following profiles:

-   Basic Content profile: profile\_basic\_content.json
-   Basic Content with Dojo profile: `profile_dojo_basic_content.json`
-   Content Targeting Portlet profile: `profile_personalization.json`.

To enable the tag and rating widgets for other profiles, proceed as follows:

1.  Open the profile for which you want to enable the widgets.

2.  Add the module `wp_tagging_rating_light` to the list of modules in the section `moduleIDs`.

3.  Apply the modified profile.

    To do so, proceed as follows:

    1.  Start a WebDAV client.

    2.  Create a connection with the entry point to /wps/mycontenthandler/dav/fs-type1 of HCL Portal Version 8.5.

    3.  Go to **Themes** \> **Portal 8.5** \> **Profiles**.

    4.  Upload the modified profile by using the **Upload** option in the WebDAV client.

    5.  Log in to the portal server.

    6.  Invalidate the cache with the Portal Theme Analyzer. Or, click **Administration** \> **Utilities** \> **Control Center** \> **Invalidate cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../dev-theme/themeopt_an_util.md#).

    This step applies the changes that you made to the profile on the server.


You can now use the tag and rating widgets with the modified profile.

**Notes:**

-   The tag and rating widgets are available with the Basic Content profile. If you create a page by using the Article template, the portal applies the Basic Content profile by default. If you add a blog or a wiki to a page with a different profile and you want to have the tag and rating widgets that are shown, you must apply the Basic Content profile to the page.
-   Enabling the widgets for a profile can influence performance.

To disable the widgets, remove the module `wp_tagging_rating_light` from the profile, and apply the modified profile on the server by the described procedure.

**Parent topic:**[Configuration reference for tagging and rating](../admin-system/tag_rate_adm_ref.md)

**Related information**  


[What is new in tagging and rating ](../admin-system/tag_rate_whatsnew.md)

