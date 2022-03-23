# Task refresh-iwidget-definitions 

Use this configuration task to refresh iWidget definitions in the portal. This task affects all iWidget definitions that are referenced through absolute HTTP or HTTPS URLs in addition to iWidget definitions that are referenced through WebDAV URIs.

Refreshing an iWidget definition in this context means, reloading the iWidget definition XML files and updating the corresponding iWidget Wrapper portlet clone accordingly. You can run the task in a synchronous or asynchronous manner. If you run this task asynchronously, the configuration task completes immediately after you start a corresponding asynchronous system task. You can use this mode to avoid timeout problems that might occur if there are a high number of iWidget definitions to be refreshed. The completion of the system task is indicated in SystemOut.log.

**Notes about this task:**

-   `refresh-iwidget-definitions` updates the titles and the descriptions of an iWidget Wrapper portlet clone only if you set the following portlet preferences to true: com.ibm.portal.replace.titles and com.ibm.portal.replace.descriptions. If these parameters do not exist in the installed iWidget, you must add them and set their values to `true`.
-   If the lines with the iWidget `item id="title"` and `item id="description"` in the iWidget XML file do not include the option `readOnly="true"` set, the default command does not work. To correct this issue, you can choose between the following options:
    -   In the portlet XML file, add the `readOnly="true"` option to the lines with `item id="title"` and `item id="description"` as follows:

        ```
        <iw:item id="title" lang="en" value="iWidget Title" readOnly="true">
          ...              
        <iw:item id="description" lang="en" value="iWidget Description" readOnly="true">
        ```

    -   When you run the ConfigEngine task, include the option `-DForceRefresh=true` option as follows:

        ```
        ./ConfigEngine.sh refresh-iwidget-definitions 
                          -DIWidgetDefinition=/iWidget/iWidget.xml 
                          -DForceRefresh=true
        ```

    -   Add the following portlet parameter to the installed iWidget: `com.ibm.portal.replace.attributes = true`.
-   When you refresh an iWidget Wrapper portlet clone, values of iWidget attributes, or the items of the iWidget attributes item set, are not updated. The values are updated if the attributes are flagged as read-only in the iWidget definition XML file. As a result, values of iWidget attributes that are customized after you register the iWidget in HCL Portal are prevented from becoming lost during a refresh operation.

**Usage:** Use this task to refresh iWidget definitions in the portal.

**Important:** HCL Portal must be running to use this task.

**Syntax:** Invoke this task as part of the ConfigEngine script as follows:

-   UNIX™Linux™: ./ConfigEngine.sh refresh-iwidget-definitions
-   IBM® i:
    -   **From the UserData directory:** ConfigEngine.sh refresh-iwidget-definitions
-   Windows™: ConfigEngine.bat refresh-iwidget-definitions

**Mandatory parameters** that you can specify through the command line or in wkplc.properties:

-   **WasUserid**

    User ID for WebSphere® Application Server.

-   **WasPassword**

    Corresponding password for WebSphere® Application Server.

-   **PortalAdminId**

    User ID for HCL Portal.

-   **PortalAdminPwd**

    Corresponding password for HCL Portal.


**Optional parameters** that you can specify only through the command line:

-   **Synchronous**

    Specify one of the following values:

    -   The value true to run the task in synchronous mode. This value is the default setting.
    -   The value false to run this task in asynchronous mode.

## Scheduling the `refresh-iwidget-definitions` task

You can schedule the task `refresh-iwidget-definitions` by using the following task: `com.ibm.portal.services.RefreshIWidgetDefinitionsTask`. See *XML configuration reference* for instructions.

**Parent topic:**[Managing iWidgets in your portal ](../admin-system/add_widget.md)

