# Task refresh-page-layout

Use this configuration task to refresh the page layout for all pages assigned a given page layout template.

Description: You need to run this task if you have manually modified page layout template files stored in the folder layout-templates of the portal file store and you want those changes to be reflected on existing pages. The task reads the data of a specific page layout template from the portal file store and update all pages that are currently assigned that page template accordingly. Depending on the number of page affected, this task can run for a several minutes.

Assumptions/Prerequisites: HCL Portal is running. The execution of this task requires that the portal is running. If the portal is not running, the task starts the portal.

Usage: Reference the layout template by its file store URI, for example as follows:

```
 /fs-type1/themes/Portal8.5/layout-templates/
```

**Note:** Make sure to provide the full URI here, especially if the URI has a trailing slash \( `/` \).

You can execute the task in synchronous or asynchronous manner. If you execute it asynchronously, the configuration task completes immediately after starting a corresponding asynchronous system task. You can use this mode to avoid timeout problems that might occur if a high number of pages are to be refreshed. The completion of the system task is indicated by a corresponding message in the file SystemOut.log.

Under z/OS® you can run the task by either of the following two options:

-   Create a Job Control Language \(JCL\) script to run the configuration task
-   Open a UNIX System Services \(USS\) command prompt or use a Telnet client to connect to the portal server and run the configuration task

Syntax: Start this task as part of the ConfigEngine script file as follows:

-   For UNIX™Linux™: `./ConfigEngine.sh refresh-page-layout-template`
-   For IBM® i: From the UserData directory: `ConfigEngine.sh refresh-page-layout-template`
-   For Windows™: `ConfigEngine.bat refresh-page-layout-template`
-   For z/OS: `ConfigEngine.sh refresh-page-layout-template`

Mandatory parameters to be specified on the command line or in the file wkplc.properties:

-   WasUserid The WebSphere® Application Server user ID
-   WasPassword The WebSphere Application Server password
-   PortalAdminId The portal administrator user ID
-   PortalAdminPwd The portal administrator password

Mandatory parameter to be specified on the command line only:

-   PageLayoutTemplate The file store URI of the page layout template

    **Note:** Make sure to provide the full URI here, especially if the URI has a trailing slash \( `/` \).


Optional parameters to be specified on the command line only:

-   VirtualPortalContext or VirtualPortalHost Use this parameter to identify the virtual portal. Only pages contained in the specified virtual portal are refreshed. If you omit this parameter, by default no virtual portal page layout is refreshed.
-   Synchronous \(=true\) Use this parameter to specify the execution mode. The default is `synchronous`. If you want to run this task in asynchronous manner, specify false.

Example:

```
./ConfigEngine.sh refresh-page-layout-template 
     -DPageLayoutTemplate=dav:fs-type1/layout-templates/2Columnequal/ 
     -DVirtualPortalContext=virtual\_portal\_context\_url 
```

**Parent topic:**[Manage pages portlets](../admin-system/mp_manage_pages.md)

