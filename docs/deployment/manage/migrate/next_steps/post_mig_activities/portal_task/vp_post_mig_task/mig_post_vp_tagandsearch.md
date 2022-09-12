# Enabling Tag and Search Center pages for virtual portals

When you migrate to HCL Digital Experience 8.5, the migration process does not apply the Portal 8.5 theme to all portal pages for your virtual portals. This affects the Tag and Search Center pages. To use your Tag Center and Search Center pages, you must manually update the theme for the pages to the Version 8.5 theme. You must also update the profile of the pages to the Search and Tag Center profile.

The Search and Tag Center profile is a hidden profile. Therefore, you must set this profile in the page properties.

1.  Update the theme and profile that is used for the Tag Center pages:

    1.  Edit the existing page that is using the older theme.

    2.  Go to **Page properties**.

    3.  Set the Portal 8.5 theme for the page.

    4.  Set the resourceaggregation.profile parameter to profiles/profile\_search\_tag.json.

    5.  Save your changes.

2.  If you created the Search Center pages using the Portal 8.5 theme, update the profile that is used for the Search Center pages:

    1.  Go to **Page properties**.

    2.  Set the resourceaggregation.profile parameter to profiles/profile\_search\_tag.json.

    3.  Save your changes.



