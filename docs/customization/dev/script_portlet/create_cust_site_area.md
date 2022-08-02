# Creating and enabling a custom site area

You can create extra custom site areas so that your content can be stored in separate site areas.

You do not need to create or enable the default Script Application Library and Script Applications site area that is provided with the CF Script Application installation.

1.  In the Web Content Manager authoring portlet, click **New** \> **Site Area** and choose the new site area name and location library to store the site area in.

2.  In the new site area **Properties** tab, click **Profile** and add the keyword ibm.portal.toolbar.NewContent, ibm.portal.scriptportlet.Content to add the site area to the content toolbar.

3.  To configure the Web Content Manager Viewer portlet that is used by the Script Application when users drag content on a page, associate the new site area with the Script Application DnD Configuration. Proceed as follows:

    1.  From the **Page Components** tab of the toolbar, select the new site area.

    2.  Click **Advanced**.

    3.  From the **Configuration** tab, select the **Script Application Content DnD Configuration** to associate it with your site area.


If your new custom site area appears in the content toolbar and you can add applications from that site area to portal pages, but the title of the portlet shows Web Content Viewer in Edit mode, then the drag configuration step did not complete successfully. To resolve the issue, complete step [3](create_cust_site_area.md#step_3) again.

**Parent topic:**[Script Application command line application overview](../script-portlet/cmd_line_push_ovr.md)

