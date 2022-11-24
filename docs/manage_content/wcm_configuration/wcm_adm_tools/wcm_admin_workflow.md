# Updating workflows by using the workflow update tool

Use the workflow update tool to add a workflow to existing items that aren't already workflow enabled.

You must first enable the workflow update tool by adding the following parameters to the `WCM WCMConfigService` service by using the WebSphere® Integrated Solutions Console:

-   `connect.businesslogic.module.workflowenablement.class=com.aptrix.pluto.workflow.WorkflowEnablementModule`
-   `connect.businesslogic.module.workflowenablement.remoteaccess=true`
-   `connect.businesslogic.module.workflowenablement.autoload=false`

1.  Log in to the portal as an administrator.

2.  Open the following URL in the browser and specify which workflow you want to apply and the library that contains the items you want to apply the workflow to:

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/?MOD=workflowenablement&library=*libraryname*&workflow=*workflowname*&fix=true
    ```

    !!! note
        If the "`library`" parameter is omitted, the default library that is configured in the **WCM WCMConfigService** service is used.

    !!! note
        If the "`&fix=true`" parameter is omitted, the tool runs in read-only mode and generates a report.


-   **Specifying the workflow:**

    If the workflow is in a different library to the workflow content, you must also specify the library name. For example: `workflow=libraryName/WorkflowName`

-   **Specifying a workflow stage:**

    You can specify the workflow stage to move the updated items to by adding `&workflowstage=*workflowstagename*` to the URL. The stage that is specified here must have a status of published. You cannot assign items to stages with a status of draft. If not specified, items are assigned to the first stage with a status of published.

    If the workflow stage is in a different library to the workflow content, you must also specify the library name. For example: `workflowstage=libraryName/WorkflowStageName`

-   **Preserving dates:**

    You can preserve the last modified date of items that are updated by the Workflow update tool by adding `&preserve_dates=true` to the URL used to run the Workflow update tool.

-   **Restricting which items types to fix:**

    You can restrict which objects types are processed by adding `&restrictOn=itemtype` to the URL used to run the Workflow update tool. For example:

    -   Content
    -   PresentationTemplate
    -   AuthoringTemplate
    -   ContentTemplate
    -   SiteAreaTemplate
    -   Taxonomy
    -   Category
    -   SiteArea
    -   Cmpnt for components
    If not specified, all object types are fixed.

-   **library**

    Enter a library name. If the `library` parameter is omitted, the default library that is configured in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console.

    To run this tool against all libraries, you instead use `&alllibraries=true`. If you have many libraries, this process can take a long time to run, so it might be better to run this tool against individual libraries instead of all libraries.

-   **Unlocking items:**

    To force locked items to be unlocked while the tool is running, add `&forceUnlock=true` to the query. This setting defaults to true.

-   **Specify a timeout in seconds:**

    To prevent your server from timing out before the workflow update tool finishes, you can specify `&sessionTimeOut=` to the URL. This setting is defined as the number of seconds before a session will timeout. For example: `&sessionTimeOut=36000`. The default session timeout is 14440 seconds.


## Running the tool on a virtual portal

There are two methods available when the tool is run on a virtual portal:

-   **Using the URL context of a virtual portal:**

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/[url_context]?MOD=workflowenablement&fix=true
    ```

-   **Using the host name of a virtual portal:**

    ```
    http://[Virtual_HOST]:[PORT]/wps/wcm/myconnect?MOD=workflowenablement&fix=true
    ```


!!! note
    After you enable workflows for an item type, ensure that workflows are also enabled for newly created items in the WCM WCMConfigService service. See the **Enabling workflows** section of the [Web content authoring options](../../wcm_content_delivery/cfg_webcontent_auth_env/wcm_config_prop_authoring.md) topic.


???+ info "Related information"
    - [Setting service configuration properties](../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

