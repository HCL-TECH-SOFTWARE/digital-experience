# Managing workflows by using the workflow checker tool

Use the workflow checker tool to update workflow security settings, reschedule pending workflow actions, or to detect and fix items with an invalid workflow.

You must first enable the workflow update tool by adding the following parameters to the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console:

```
connect.businesslogic.module.workflowcontrolchecker.class=com.aptrix.pluto.workflow.WorkflowControlCheckerModule
connect.businesslogic.module.workflowcontrolchecker.remoteaccess=true
connect.businesslogic.module.workflowcontrolchecker.autoload=false
```

1.  Log in to the portal as an administrator.

2.  Open one of the following URLs in the browser:

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/?MOD=WorkflowControlChecker&library=libraryname&updateDocSecurity=true&fix=true
    ```

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/?MOD=WorkflowControlChecker&library=libraryname&rescheduleActions=true&fix=true
    ```

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/?MOD=WorkflowControlChecker&library=Web+Content&repairInvalidWorkflow=true
    ```

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/?MOD=WorkflowControlChecker&library=Web+Content&repairInvalidWorkflow=true&fix=true
    ```

    !!! note
        If the "`library`" parameter is omitted, the default library that is configured in the **WCM WCMConfigService** service is used.

    !!! note
        If the "`&fix=true`" parameter is omitted, the tool runs in read-only mode and generates a report.


-   **&library**

    Enter a library name. If the `library` parameter is omitted, the default library that is configured in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console.

    To run this tool against all libraries, you instead use `&alllibraries=true`. If you have many libraries, this process can take a long time to run, so it might be better to run this tool against individual libraries instead of all libraries.

-   **`&updateDocSecurity`**

    If set to true, the workflowed item is saved and the workflow stage security is reapplied. This parameter is set to false by default.

-   **`&rescheduleActions`**

    When set to true, workflow actions are rescheduled to run again. This parameter is set to false by default.

-   **`&restrictOn`**

    Enter the items types to run the workflow checker tool against. Valid parameters are:

    -   Content
    -   Folder
    -   Project
    -   PresentationTemplate
    -   AuthoringTemplate
    -   ContentTemplate
    -   SiteAreaTemplate
    -   Taxonomy
    -   Category
    -   SiteArea
    -   Workflow
    -   WorkflowStage
    -   WorkflowAction
    -   Cmpnt for components
-   **`&numberOfJcrOperationsPerLogin`**

    This parameter is used to define the number of operations for 1 JCR login. Used to help with memory consumption.

-   **`&preserve_dates`**

    When set to true, the current last modified date of the item is preserved. This parameter is set to false by default.

-   **`&preserveSecurityInheritancePropagation`**

    When set to true, and `updateDocSecurity` is also set to true, the workflowed item is saved, and the workflow stage security is reapplied, but the workflowed item's security inheritance and security propagation is unchanged.


-   **`repairInvalidWorkflow`**

    This parameter will allow the tool to detect and fix items within an invalid workflow \(ie: both the workflow and workflow stages references are null\).

    When the module is run with `repairInvalidWorkflow=true` in fix mode, the broken items will be updated to use the internal system workflow.


## Running the tool on a virtual portal

There are two methods available when the tool is run on a virtual portal:

-   **Using the URL context of a virtual portal:**

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/[url_context]?MOD=WorkflowControlChecker&library=*libraryname*&updateDocSecurity=true&fix=true
    ```

-   **Using the host name of a virtual portal:**

    ```
    http://[Virtual_HOST]:[PORT]/wps/wcm/myconnect?MOD=WorkflowControlChecker&library=*libraryname*&updateDocSecurity=true&fix=true
    ```



