# Viewing overlay analytics statistics

Users with the appropriate access rights can use Active Site Analytics to view graphical statistics about individual portal resources, such as pages or portlets.

To enable overlay statistics, the user opens the page actions menu and selects either **Show Portlet Reports** or **Show Page Reports**. The portal refreshes and shows boxes with the statistics coupled with the corresponding resource.

When the user clicks a report type in the actions menu, the **display reports** setting is persisted in the navigational state. This means that the user can now navigate through the portal and view statistics on every page that the user visits. To view more details about the resource or the statistics, the user clicks the **Details** link in the overlay box. The portal redirects the user to the website of the analytics business partner.

To disable overlay statistics, the user opens the page actions menu again and clicks the menu item **Close Analytics Reports**. This disables the display of overlay statistics and removes the setting from the navigational state.

**Notes:**

-   Analytics providers might have a policy in place that limits the amount of concurrent API calls against their servers. Such a policy can affect the maximum number of overlay reports that can be displayed on a single portal page. In such cases work with the analytics provider to raise that limit.
-   To be able to view graphical statistics about portal resources, the user needs to have the appropriate roles and access rights, both for viewing the reports and for the portal resources for which the reports are shown. The menu items for displaying statistics are only added to the page actions menu if the user has the access rights to work with analytics and overlay reports.
-   Depending on the height of the portlet window on the portal page, the overlay window can display different graphics. For smaller portlet windows the graphic is smaller than for larger portlet windows.
-   The option to view overlay reports is not available for pages that are currently being updated with new content. For the option to become available, save the page or draft of the page.


**Previous topic:**[Configuring the theme for overlay reports](../admin-system/sa_asa_overlay_cfg_theme.md)

**Next topic:**[Customizing overlay reports](../admin-system/sa_asa_overlay_custom.md)

