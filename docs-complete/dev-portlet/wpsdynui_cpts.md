# Dynamic user interfaces 

Learn about dynamic user interfaces that include dynamic pages, dynamic portlets, dynamic UI configuration, dynamic UI properties, and shared dynamic UIs. Get an overview of how to develop a dynamic UI configuration.

Dynamic user interfaces, or dynamic UIs, are portlets or pages that are dynamically created based on the definition of an existing page or portlet definition. A dynamic UI can be launched only by a portlet using the Dynamic UI Manager API. Because of its dynamic nature, the interface is not persisted in the portal database and has a maximum lifetime of the user's session with the portal. The interface can also be closed prior to the end of the session either programmatically or by the user.

Dynamic UIs are suited for applications in which users might need to have several instances of a page or portlet open for multitasking. Consider the travel request scenario in business process integration as an example. If several marketing representatives need to travel to a conference, their manager would receive multiple travel requests. With static pages, the manager must complete one request before proceeding to the next one. Using dynamic UIs, the manager can open several requests simultaneously and navigate between these and other pages in the portal. Business process integration is an example of a dynamic UI configuration.

Dynamic pages and portlets contain many of the same properties as static pages and portlets. For example, the user can navigate between static and dynamic pages, or change the window state of a dynamic portlet. However, dynamic UIs are not stored in the portal database, so they have less impact on server performance. Therefore, dynamic UIs cannot be administered. For example, you cannot view or update a dynamic page using **Manage Pages** or assign a unique name to a dynamic portlet or page.

A dynamic UI is independent of its point of origin. For example, if a portlet launches a dynamic page, the launched page is maintained even if the originating portlet or page is deleted. A dynamic UI is a copy of a page or portlet definition at the time the instance is created and is not affected by subsequent changes to the definition. By default, the dynamic UI acquires the title and description of its page or portlet definition. However, it is possible to programmatically overwrite the title and description when the dynamic UI is launched.

## Dynamic pages

A dynamic page is an instance of an existing static page, called a page definition. The page definition serves as a template from which all dynamic instances are created. Users must have view rights to the page definition in order to open a dynamic instance of that page. The page definition can be created by the administrator using XMLAccess or **Manage Pages**. The dynamic page copies the layout and content \(containers, portlets, and wires\) and portlet preferences provided by the page definition. Changes to the page definition do not affect the layout or content of dynamic pages that have already been launched. The layout and content of the dynamic page instance cannot be customized.

When a portlet launches a dynamic page, the new page instance appears in the navigation under a node created just for containing dynamic pages. This node is called an extension node. An example of an extension node is the container for task pages for business process integration. A single portal can have multiple extension nodes, one for each dynamic UI configuration. However, extension nodes are intended to hold only dynamic pages. Static nodes added under the content topology of an extension node are not visible. Dynamic pages are not visible to anonymous users, even if anonymous users have view rights to the page definition.

When a dynamic page is closed which a user currently has selected, the user is automatically redirected to another open dynamic page in the same configuration. If no sibling page exists, the redirection is determined by one of the following.

1.  The page indicated by the `setDefaultRedirectPage()` method of the DynamicUIManagementFactoryService interface.
2.  If `setDefaultRedirectPage()` is not used, the user is redirected to the page indicated by the `defaultRedirectPage` property in the `DynamicUIManagerFactoryServiceImpl`. This property is prefixed by the unique name of the extension node for the dynamic UI configuration. For example, two dynamic UI configurations could set this property as follows.

    ```
    my.dynui.config.test1.defaultRedirectPage=page1.unique.name
    my.dynui.config.test2.defaultRedirectPage=page2.unique.name
    ```

3.  If the `defaultRedirectPage` property is not set, the user is redirected to the extension node for the configuration.

In most cases the page definition should be hidden from users by placing it in a sub tree of the content hierarchy that is not accessible by the portal navigation. In the business process configuration, for example, task page definitions are created under a **Task Page Definitions** node that is accessible only to the administrator.

## Dynamic portlets

Dynamic portlets include portlets on a dynamic page and portlets that are dynamically added to the page. Dynamic portlets can receive properties from the portlet that launches the dynamic UI. The task processing portlet, which is a component of business process integration, is an example of a dynamic portlet.

When a portlet is dynamically added to an existing dynamic page, it is added to special containers that have been designated as launch areas. Each dynamic portlet that is added to the page is placed in the column with the least number of portlets. If all of the content of a dynamic page is locked, any attempt to launch a dynamic portlet on that page throws an `AddUIElementException`.

**Note:**

-   It is possible for a user to access edit mode for a dynamic portlet. However, the preferences are not preserved \(cannot be persisted\).
-   For a user to launch a dynamic portlet, the user must have view rights to the portlet definition from which the dynamic portlet would be launched.
-   Dynamic portlets cannot be moved on a dynamic page.

## Dynamic UI configuration

A dynamic UI configuration includes the settings and software components of a portal that support different application frameworks for dynamic UI. For example, a portal site can take advantage of the configuration provided by business process integration as well as support another dynamic UI configuration for a different purpose. The launching portlet can invoke a specific dynamic UI configuration by the unique name assigned to its extension node. Dynamic pages are assigned to the extension node for the configuration for which it is created.

## Dynamic UI properties

Upon launch, a portlet can pass properties to a dynamic UI using the property broker API. Properties can be set during or after launching the dynamic UI. The purpose of these properties is to convey any information to the target portlets needed to fulfill their task, for example, a calendar entry to be processed or a document to be opened.

Properties passed to a dynamic page are available to all portlets on the page. Properties passed to a dynamic portlet are available only for that portlet. However, the dynamic portlets must declare their intention to receive dynamic properties using a preference setting in their descriptor. For example, in a business process configuration, the My Tasks portlets sends the TaskID, ReturnPageID. and TaskUIHandle properties to the dynamic page. The task processing portlet sets the com.ibm.portal.pagecontext.enable preference to `true` so that it will receive these properties. For HCL DX portlets, this is set as a configuration parameter. Also, HCL DX portlets must modify the servlet class entry of the web.xml file, specifying the com.ibm.wps.pb.wrapper.PortletWrapper class.

If page properties are set multiple times before the context is delivered, only the latest parameter set is distributed to the portlets on the target page.

## Shared dynamic UIs

A shared dynamic UI is a dynamic page or dynamic portlet in which only one shared instance can exist for a user at a given time. A portlet can explicitly launch a shared portlet or shared page using the addSharedPage\(\) or addSharedPortlet\(\) methods. When a shared dynamic UI instance already exists, it is reused. If not, a new instance is created and marked as either the shared portlet for a given page, or the shared page for a dynamic UI instance.

If a dynamic UI is launched as shared, subsequent launching of the UI using the non-shared methods \(addPortlet\(\) and addPage\(\)\) creates a new instance. To ensure the same shared instance is used, the launching portlet must consistently use the shared methods.

The scope of a shared portlet or shared page instance is restricted to a dynamic UI configuration. This means, for example, that a portlet can add a shared dynamic page in dynamic UI configuration A. When another portlet also tries to create a shared instance in dynamic UI configuration B, a new one is created.

-   **[Overview: Developing a dynamic UI configuration ](../dev-portlet/wpsdynui_tskovw.md)**  
Get an overview of the main tasks involved in creating a dynamic UI configuration.

**Parent topic:**[Developing portlets ](../dev-portlet/wpsdev.md)

**Related information**  


[Hints and tips for using Portal Search ](../admin-system/srrhinttips.md)

