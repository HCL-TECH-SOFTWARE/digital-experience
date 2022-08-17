# Managing iWidgets in your portal

You can add iWidgets to your HCL Digital Experience.

Proceed as follows:

1.  Register the iWidget in the portal. You do this by running the portal configuration task `register-iwidget-definition`.

    This procedure places the iWidget in a clone of the wrapper portlet. After this the iWidget behaves like a portlet. For information about using the task see *Task register-iwidget-definition*.

2.  Place the iWidget on a page by using the portal administration tools for adding portlet to pages.

    For example, you can use the Manage Pages portlet, the portal administration tools embedded in the theme, or the XML configuration interface \(XML Access\) \(XMLAccess\).


-   **[Task register-iwidget-definition](../dev-portlet/csa2r_cfgtsk_regwidgdef.md)**  
Run the portal configuration task register-iwidget-definition to register individual iWidget definitions on HCL Portal.
-   **[Task refresh-iwidget-definitions](../dev-portlet/csa2r_cfgtsk_rfrshwdgtdef.md)**  
Use this configuration task to refresh iWidget definitions in the portal. This task affects all iWidget definitions that are referenced through absolute HTTP or HTTPS URLs in addition to iWidget definitions that are referenced through WebDAV URIs.

**Parent topic:**[Managing portlets, portlet applications, and iWidgets](../admin-system/adpltadmwork.md)

**Related information**  


[Manage pages portlets](../admin-system/mp_manage_pages.md)

[Customizing pages](../admin-system/admcustom.md)

[Putting a portlet on a page](../dev/rest_feed_pt_ptltnpg.md)

[Task register-iwidget-definition](../dev-portlet/csa2r_cfgtsk_regwidgdef.md)

[The XML configuration interface](../admin-system/admxmlai.md)

