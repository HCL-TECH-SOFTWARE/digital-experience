# Clearing version history

You use the clear versions tool to clear the version history of an item.

1.  Log in to the portal as an administrator.

2.  Open the following URL in the browser and specify details of what history details to clear:

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect?MOD=ClearVersions&day=date&month=month&year=year&keep=number\_of\_entries&restrictOn=item\_type&library=library\_name&fix=true&preserve_dates=true
    ```

    -   **day, month, and year**

        The version history is cleared before the date specified in the day, month, and year parameters. If no date is specified, then the date defaults to one year before the current date.

    -   **keep**

        Specify the minimum number of history versions to keep. For example, if a version has not been created for over a year, and you specify to clear all versions more than a year old, but choose to keep the last five versions, all versions are cleared except for the last five versions even though they are over a year old. If a number is not specified, then the minimum number of versions to keep defaults to 10.

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

        Enter a library name. If the library parameter is omitted, the default library that is configured in the `WCM WCMConfigService` service by using the WebSphere® Integrated Solutions Console.

        To run this tool against all libraries, you instead use `&alllibraries=true`. If you have many libraries, this process can take a long time to run, so it might be better to run this tool against individual libraries instead of all libraries.

    -   **fix**

        If omitted or set to false, a report listing which versions will be cleared is displayed. Items are not actually cleared.

        If set to true, versions are cleared as specified.

    -   **preserve\_dates**

        If set to true, the last modified date of items that are updated by the module is preserved. If omitted or set to false, the last modified date is not preserved.


**Note:** You cannot completely clear all versions. One version of an item always remains no matter what parameters you select when the version history is cleared.

## Running the tool on a virtual portal

There are two methods available when the tool is run on a virtual portal:

-   **Using the URL context of a virtual portal:**

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/[url_context]?MOD=ClearVersions
    ```

-   **Using the host name of a virtual portal:**

    ```
    http://[Virtual_HOST]:[PORT]/wps/wcm/myconnect?MOD=ClearVersions
    ```



**Related information**  


[Cloning data](../wcm/wcm_cloning_live.md)

