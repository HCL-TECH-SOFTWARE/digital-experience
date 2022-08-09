# Enabling the new tag and rating widgets after a portal upgrade

If you upgrade your HCL Portal from an earlier version to Version 8.5 and want to use the new tag and rating widgets, you must first enable blogs and wikis. Then, complete the following task to ensure that tag and rating widgets are enabled.

You must have blogs and wikis enabled before proceeding. Go to [Migration: Blogs and wikis](mig_blogs_wiki.md#) for more information.

1.  Verify that the HCL Web Content Manager components are updated.

    1.  Open the applications menu and go to **Content** \> **Web Content Authoring** \> **Libraries** \> **Web Resources v70** \> **Components**.

        If the Web Resources v70 library is not listed by default, add it. Open the applications menu and go to **Content** \> **Web Content Authoring** \> **Preferences** \> **Edit Shared Settings** \> **Library selection**. Select **Web Resources v70** and click **Add** and **OK**.

    2.  Verify that the components **HTML-Tagging Widget Light- Tags** and **HTML-Rating Widget Light- Stars** are listed.

        If they are not listed, check the logs to determine whether the configuration task might have resulted in errors.

2.  Turn on **Edit Mode**.

3.  For the tag and rating widgets to render properly, go to **Menu** \> **Edit Page Properties** and select the Portal 8.5 theme for your portal theme and click **Save**. The Portal 8.5 theme is now enabled.

    **Note:** Apply the Portal 8.5 theme to the page on which you want to use the tagging and rating widgets.

4.  Go to **Edit Page Properties** and select the "Basic Content" profile for your portal profile.


You and your portal site visitors can now use the new enhanced tag and rating widgets.

**Parent topic:**[Enabling new functionality in a migrated portal](../migrate/mig_t_enable_new.md)

**Related information**  


[What is new in tagging and rating](../admin-system/tag_rate_whatsnew.md)

