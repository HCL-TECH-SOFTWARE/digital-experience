# Displaying overlay analytics reports 

You can use Active Site Analytics to show graphical statistics reports about individual portal resources, such as pages or portlets. These reports are called Active Site Analytics overlay reports.

The statistics graph is shown on the portal page in the format of an overlay over the portal resource to which they apply, such as the portlet. Examples of what statistical graphs can show:

-   A simple view count of a portal page, that is how many users visited and viewed the page on a particular day.
-   A statistical curve of the usage for a specific portlet over time.

The statistics are generated as follows:

1.  The data collected by the portal site analytics are collected and forwarded to your business partners for portal analytics.
2.  Your business partner analyzes and evaluates the portal data and sends back a report to your portal.
3.  The portal then displays the report as the overlay graph.

You can define which users can view the reports by setting the appropriate access rights.

The user must at least be in the **USER** role on the virtual resource **OVERLAYREPORTS** and at least in the **USER** role of the resource he wants to view reports for.

**Note:** You can enable overlay statistics only if you already use **Active Site Analytics** on your portal site.

To set up Active Site Analytics overlay reports, perform the procedures given here.

1.  Enable data collection. For example, you can do this by adding an Active Site Analytics aggregator to a portal page:

    1.  Access the IBM® Coremetrics® Web Analytics website or contact your Coremetrics representative.

    2.  Retrieve the appropriate aggregator file from Coremetrics.

    3.  Upload the aggregator file to your portal theme folder, for example, by using WebDAV.

    4.  Perform the procedure described under *Adding an Active Site Analytics aggregator to a portal page*.

    As a result of these steps, analytics data is sent from browsers of your portal users to the Coremetrics data collection servers. You can log on to Coremetrics and analyze the portal usage.

2.  Enable inline display of Coremetrics reports by enabling overlay reports:

    1.  Establish trust with Coremetrics servers.

        For more information, see *Configuring overlay reports*.

    2.  Set up security for overlay reports.

        For details see *Configuring security for overlay analytics reports*.

    3.  Configure your Coremetrics user ID.

        For more information, see *Configuring a Credential Vault for overlay reports*.

    4.  Configure your theme to integrate the overlay report features into the **Actions** menu.

        For more information, see *Configuring the theme for overlay reports*.

    5.  Display overlay reports by choosing **Show Portlet Reports** or **Show Page Reports**.

        For more information, see *Viewing overlay analytics statistics*.

    6.  Customize the overlay report by providing additional configuration parameters.

        For more information, see *Customizing overlay reports*.

3.  To further customize the tagging of your site, assign site promotions to pages and portlets as required.


For more information about enabling inline display of overlay reports, see the following topics.

1.  [Configuring overlay reports ](../admin-system/sa_asa_overlay_config.md)  
In order to activate overlay reports for your site, you need to configure some security-related settings.
2.  [Configuring security for overlay analytics reports ](../admin-system/sa_asa_overlay_stats_sec.md)  
You can administer which users can view overlay reports. To do this, you use the virtual resource OVERLAY\_REPORTS.
3.  [Configuring a Credential Vault for overlay reports ](../admin-system/sa_asa_overlay_cfg_crd_vlt.md)  
To access the IBM Coremetrics Web Analytics system, you have to store your user information in a Credential Vault slot. If you do not do this, the portal overlay reports cannot show data from the Coremetrics system.
4.  [Configuring the theme for overlay reports ](../admin-system/sa_asa_overlay_cfg_theme.md)  
To integrate the overlay analytics features into your theme, add a theme module to the theme profiles of your modular theme. If you do not add the theme, the overlay menu items are not displayed.
5.  [Viewing overlay analytics statistics ](../admin-system/sa_asa_ovrly_stats_ui.md)  
Users with the appropriate access rights can use Active Site Analytics to view graphical statistics about individual portal resources, such as pages or portlets.
6.  [Customizing overlay reports ](../admin-system/sa_asa_overlay_custom.md)  
You can customize your own overlay reports by setting specific parameters as required. Learn about the parameters and the levels at which you can specify them.

**Parent topic:**[Analyzing user behavior by Active Site Analytics ](../admin-system/sa_asa_work.md)

**Related information**  


[Adding an Active Site Analytics aggregator to a portal page ](../admin-system/sa_asa_add_aggr_2_page.md)

[HCL Portal 8 Integration with IBM Digital Analytics \(Coremetrics\)](https://support.hcltech.com/csm?id=kb_article&sysparm_article=KB0074915&sys_kb_id=2742800e1bda809083cb86e9cd4bcb4a)

