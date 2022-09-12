# Tag and Search Center pages

When you migrate to HCL Digital Experience Version 8.5, the migration process does not apply the Portal 8.5 theme to all portal pages. For example, this affects the Tag and Search Center pages. To continue to use your Tag Center and Search Center pages, you must update the theme for the pages to the Version 8.5 theme. You must also update the profile of the pages to the Search and Tag Center profile.

Ensure that the Portal 8.5 theme is set for your Tag and Search Center pages before completing the following procedure.

The Search and Tag Center profile is a hidden profile. Therefore, you must set this profile in the page properties.

1.  To create the Tag Center pages, or apply the correct theme in order to work with these pages, run the following configuration task. Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory and enter:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh cp-setup-tag-center
    -   IBM® i: ConfigEngine.sh cp-setup-tag-center
    -   Windows™: ConfigEngine.bat cp-setup-tag-center
2.  To update the profile for the Search Center pages, complete the following steps:

    1.  Go to Page properties.

    2.  Set the resourceaggregation.profile parameter to profiles/profile\_search\_tag.json.



**Related information**  


[Enabling and disabling the Dojo tagging and rating options for additional profiles](../admin-system/tag_rate_nbldsbl_dojo_options.md)

