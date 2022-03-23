# Configuring the Coach portlets for WebSphere Lombardi Edition and WebSphere Business Process Manager 

Two Coach portlets are already installed in HCL Portal: one for use on a dynamic portal page and the other on a portal page. Both Coach portlets offer the same function in both page contexts. When a WebSphere® Lombardi Edition task and WebSphere Business Process Manager task is selected in the Unified Task List portlet it displays the corresponding coach in the Coach portlet.

The Coach portlets included with the Unified Task List portlet must be configured with the specifics of your WebSphere Lombardi Edition server and WebSphere Business Process Manager server host name and port before they can be used.

## Configuring the Coach portlet

1.  Log in to HCL Portal with administrative access to the Unified Task List portlet.
2.  Go to the **Coach** portlet on the Unified Task List page.
3.  Select **Configure** from the portlet menu.
4.  Edit the **Coach Hostname** field to include the **host name**.
5.  Edit the **Coach Port** of your WebSphere Lombardi Edition server or WebSphere Business Process Manager server.
6.  Select **Apply** then **OK**.
7.  Edit the page to create a portlet wire between the Unified Task List portlet and the **Coach** portlet. For more information, see *Adding a wire* in the related links.
8.  Place the **Coach** portlet on a page. Make a note of the page's unique ID because it is to be used in the task handling configuration for the task provider in the Unified Task List portlet.

## Configuring the Dynamic Coach portlet

1.  Log in to HCL Portal with administrative access to the Unified Task List portlet.
2.  Place the **Dynamic Coach** portlet on a page.
3.  Select **Configure** from the portlet menu.
4.  Edit the **Coach Hostname** field to include the **host name**.
5.  Edit the **Coach Port** of your WebSphere Lombardi Edition server and WebSphere Business Process Manager server.
6.  Select **Apply** and then **OK**.
7.  Place the **Dynamic Coach** portlet on a page. Make note of the page's unique ID because it is to be used in the task handling configuration for the Lombardi and Business Process Manager task provider in the Unified Task List portlet.

**Related information**  


[Adding a wire ](../panel_help/h_wires_add.md)

[Configuring an IBM Business Process Manager ](../integrate/utl_configuring_business_process_manager.md)

**References:**  


[Adding a wire](h_wires_add.md)

