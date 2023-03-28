# Clearing item history

You use the clear history tool to clear the history of an item.

1.  Log in to the portal as an administrator.

2.  Open the following URL in the browser and specify details of what history details to clear:

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect?MOD=ClearHistory&day=date&month=month&year=year&keep=number\_of\_entries&restrictOn=item\_type&library=library\_name&fix=true&preserve_dates=true
    ```

    -   **day, month, and year**

        The history details are cleared before the date specified in the day, month, and year parameters. If no date is specified, then the date defaults to one year before the current date.

    -   **keep**

        Specify the minimum number of history entries to keep. For example, if an item has not been updated for over a year, and you specify to clear all history entries more than a year old, but choose to keep the last five entries, all the history will be cleared except for the last five entries even though they are over a year old. If a number is not specified, then the minimum number of history entries to keep defaults to 10.

    -   **restrictOn**

        Select the item types to run the clear history tool against. If no item types are specified, all item types are processed. Use the following parameters for each item-type:

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
        
    -   **library**

        Enter a library name. If the "library" parameter is omitted, the default library that is configured in the `WCM WCMConfigService` service is used.

        To run this tool against all libraries, you instead use `&alllibraries=true`. If you have many libraries, this process can take a long time to run, so it might be better to run this tool against individual libraries instead of all libraries.

    -   **fix**

        If omitted or set to false, a report listing which history items were cleared is displayed. If set to true, history items are cleared as specified.

    -   **preserve\_dates**

        If set to true, the last modified date of items that are updated by the module is preserved. If omitted or set to false, the last modified date is not preserved.


!!! note
    You cannot completely clear item history. One history item always remains in an item no matter what parameters you select when the item history is cleared.

## Running the tool on a virtual portal

There are two methods available when the tool is run on a virtual portal:

-   **Using the URL context of a virtual portal:**

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/[url_context]?MOD=ClearHistory&fix=true
    ```

-   **Using the host name of a virtual portal:**

    ```
    http://[Virtual_HOST]:[PORT]/wps/wcm/myconnect?MOD=ClearHistory&fix=true
    ```

## ConfigEngine command

You can clear the version item history using the following ConfigEngine command:

`ConfigEngine.`
`{bat | sh}`
`run-wcm-admin-task-clear-history -Dlibrary libName`

|Parameter|Value or Action|
|---------|---------|
|`-Dlibrary libraryName`|Name of the library to crop history from|
|`-DallLibraries=true`|Run against all libraries.|
|`-Dkeep number`|The number of history entries to keep|
|`-Dsize number`|(Optional) The minimum size of the history entry log as a percentage. If specified, the size of history log must be greater or equal to this value or else the item will be ignored.|
|`-Dlimit number`|(Optional) The max length limit of the history entry log property within the DB. If not specified, the default value of 5000000 is used.|


???+ info "Related information"
    - [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

