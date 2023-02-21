# The update keyword tool

Use the update keyword tool to add a keyword to the profile settings on multiple web content items.

## Running the update keyword tool

1.  Open a command prompt.
2.  Run the following command from the wp_profile_root/ConfigEngine directory:

    -   **Windows™**

        `ConfigEngine.bat update-wcm-content-template-keywords -DPortalAdminId=username -DPortalAdminPwd=password -Dlibrary=libraryName -Dkeyword=yourkeyword`

    -   **UNIX™ and Linux™**

        `./ConfigEngine.sh update-wcm-content-template-keywords -DPortalAdminId=username -DPortalAdminPwd=password -Dlibrary=libraryName -Dkeyword=yourkeyword`

    !!!note
        An administrator user name and password is not required if the portal administrator user name and password are specified in the PortalAdminId and PortalAdminPwd settings in the wkplc.properties file.


## Running the update keyword tool for all libraries

You can run the tool on all libraries by replacing the option `-Dlibrary=libraryName` with the option `-DallLibraries=true` in the command. If neither option is specified, the keyword tool is processed for all libraries

## Restricting the tool to update only specified items types

You can restrict which objects types are processed by appending `-DrestrictOn=ItemType` to the command. For example:

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

If not specified, the security of all object types is updated.

## Running the tool on a virtual portal

When you run this tool on a virtual portal, you must add either `-DVirtualPortalHostName=name` or `-DVirtualPortalContext=virtual_portal_context` to the command.

## Defining the session timeout

To prevent your session from timing out before the tool finishes, you can append the option `-DsessionTimeOut=timeOut` to the command. This parameter sets the number of seconds in which the tool must complete before its session will timeout. The default session timeout is 14,440 seconds, which is 4 hours. For large repositories, increase this setting. For example: `-DsessionTimeOut=36000`, which is 10 hours.


