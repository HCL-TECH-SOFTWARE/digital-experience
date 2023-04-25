# Portal 8.0 & 8.5 Theme Profiles

A new modularized theme design became available with WebSphere Portal version 8.0. This design was continued for the version 8.5 theme. These themes permit easier inclusion or exclusion of components. In general it is best to include components that are used, and exclude components that are not used. A more detailed explanation of this is available https://help.hcltechsw.com/digital-experience/8.5/devtheme/
themeopt_module.html

In our evaluation, we used a theme profile based on profile_deferred.json that ships with Portal 8.5. To allow easier comparison to earlier releases, we removed the following theme modules: 
wp_toolbar_host, 
wp_toolbar_actionbar, 
wp_analytics_aggregator, 
wp_analytics, 
wp_analytics_tags, 
wcm_inplaceEdit, 
wp_sametime_proxy, 
getting_started_module, 
wp_toolbar_host_view, 
wp_tagging_rating_light, 
wp_toolbar_host_edit. 

In addition we added a custom module that allowed top navigation to work.

The theme profile is a WebDAV resource. WebDAV resources are stored in the database, not on the file system. A WebDAV client is needed to add or modify the contents of a theme profile. This documentation in the HCL Digital Experience Help Center https://help.hcltechsw.com/digital-experience/8.5/adminsystem/webdav_client.html?query=webdav discusses the settings needed to connect to Portal using a WebDAV client.

The theme profile is specified in JSON format. Changing it requires downloading the file using a WebDAV tool, editing and saving the file back to the Portal database. https://help.hcltechsw.com/digitalexperience/9.5/dev-theme/themeopt_add_oobmod.html has instructions on how to change the theme
profile.

!!! note
    If removing the last item in a section be sure to remove the comma from the previous item.

## Pages with Different Theme Profiles

While it is a good idea to include only the theme profile elements that a page actually uses, there is a
performance penalty for using different theme profiles on different pages if many pages include the same
base profiles, especially if the base includes larger CSS or Javascript files. This is due to the fact that each
profile bundles all modules into a single set of Javascript and CSS files. Each bundle has a separate URL. So,
each bundle requires a separate download to the user’s browser.

For example, Dojo is a large theme module in terms of download size. So, if there are two pages that need
Dojo but each needs different extensions, there are two options:

1. Two Profiles
    Page 1 Profile with Dojo plus Page 1’s extensions.
    Page 2 Profile with Dojo plus Page 2’s extensions.

2. A single profile including Dojo and the extensions needed for both pages.

Option 1 will require a user to download a large amount of content (Dojo) on both pages. Option 2 will only
require a single Dojo download. Since the bundles are cacheable in the browser, Option 2 will perform
better for users visiting the second page since there will only be one download.

## Out of the Box Portal Themes

Portal 8.5 ships with some useful profiles. profile_lightweight performs even better than the custom profile
we used in our test. If that profile contains all the function necessary for your site, we recommend you use
profile_lightweight for your site. The profile_deferred theme profile also performs very well, but we found
that for rendering sites, where the toolbar function is typically disabled, it still makes sense to remove
wp_toolbar_host and wp_toolbar_actionbar from the theme profile. For rendering-only environments,
where only ‘active content, not drafts’ are published, a further response time improvement can be
achieved by removing wp_draft_page_ribbon from the theme profiles.

In addition it makes sense to make sure the login portlet uses the same theme profile as the other pages.
By default, login uses profile_deferred.

## Theme Analyzer Tool

Portal 8.5 includes a Theme Analyzer tool that can be used to analyze theme profiles, modules and dependencies. This tool is useful for determining which modules will be loaded by each profile and can help diagnose performance issues with custom themes. This tool can also show the Cache-Control headers that will be applied for each theme module. This is useful in determining why theme resources (ra:collection URLs) are not being cached by web browsers. See https://help.hcltechsw.com/digital-experience/9.5/devtheme/themeopt_an_analyzer.html for more information.
