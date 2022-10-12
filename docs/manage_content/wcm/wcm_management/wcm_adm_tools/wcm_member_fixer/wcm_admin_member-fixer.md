# How to use the member fixer task

Enable the member fixer task, create custom mappings, and then run the task.

## Custom Mapping

To update a reference to a member that does not exist with a member that does exist, member mappings can be defined in a custom mapping file. Where the member fixer task does not find a mapping in this file for a member, it will search the user repository for members with the same ID as the member that no longer exists. If such a member is found, it will update the reference with this user or group, or remove the reference, as specified by the altDn parameter. If no such member is found, this member is classified as 'invalid' and will be updated or removed as specified by the `invalidDn` parameter.

If custom mapping is required you must perform the following steps to map the user and group domain names before running the member fixer task:

1.  Update the following properties in the wp_profile_root/PortalServer/wcm/shared/app/config/wcmservices/MemberFixerModule.properties` file:

    -   **cn=contentAuthors,dc=lotus,o=ibm->cn=contentEditors,dc=rational,o=ibm**

        This format is used to completely replace one distinguished name with another.

    -   **cn=[ID],dc=websphere,o=ibm->cn=[ID],dc=tivoli,o=ibm**

        This format is used to replace part of a distinguished name. This example will change all of the distinguished name except the common name.

    Further examples are listed in the MemberFixerModule.properties file.

2.  You then run the member fixer task using the -DaltDn option as details in the following section.

## Running the Member Fixer task:

1.  Open a command prompt.

    **Library parameters in steps 2 and 3:**

    -   The library specified in the command is the library to be scanned by the member fixer task. If the query parameter "library" is omitted, the default library that has been configured with the `defaultLibrary` property in the `WCM WCMConfigService` service is used.

2.  To create a report of users or groups referenced in Web Content Manager items that need fixing, run the following command from the wp_profile_root/ConfigEngine directory:

    -   **Windows™**

        `ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary"`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary"`

    !!!note
        An administrator user name and password is not required if you have already specified the portal administrator username and password using the PortalAdminId and PortalAdminPwd settings in the wkplc.properties file.

    !!!note
        Before you progress to the next step and run the member fixer task in fix mode, ensure that the report mode indicates that the updates will happen as you require. A summary of the updates will be shown by the command.

    A detailed report containing the updates that will be made for each item will be shown in the SystemOut.log file located in wp_profile_root\logs\HCL Portal and HCL Web Content Manager.

    A detailed report containing the updates that will be made for each item will be shown in the job log for the portal application server.

    If the report indicates that the update will not happen as required, change the member fixer task parameters and run the report mode again. Repeat this process until you are satisfied that the fixes will be applied correctly. This is important because the fixes made by the member fixer task when run in fix mode may not be easy to undo if incorrect fixes are applied.

3.  If there have been changes to users and groups, update the items that reference them by running the run-wcm-admin-task-member-fixer task. If the member fixer task indicates that certain mismatched member conditions exist, append the specified parameters to the command.

    |Condition description|Command to correct condition|
    |---------------------|----------------------------|
    |Nonexistent users or groups have alternate distinguished names (DNs) available.|    -   To update references to nonexistent users or groups with the DN values that are mapped in the MemberFixerModule.properties file, append -DaltDn=update to the command. <br/> -   To remove references to nonexistent users or groups append `-DaltDn=remove` to the command.|
    |If users or groups have invalid distinguished names (DNs) the report lists these as "invalid". This means the distinguished name doesn't exist and there is no alternate distinguished name available.|    -   To remove references to users and groups that have invalid distinguished names append -DinvalidDn=remove to the command. <br/> -   To update references to users and groups that have invalid distinguished names with the portal administrator user distinguished name, append -DinvalidDn=update to the command.|
    |Users or groups have been found with mismatched unique IDs.|    -   To fix the mismatched unique IDs append -DmismatchedId=update to the command. <br/> -   To remove references to users and groups with mismatched unique IDs append -DmismatchedId=remove to the command.|

    -   **Windows™**

        `ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -Dfix=true`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -Dfix=true`

    !!!note
        An administrator user name and password is not required if you have already specified the portal administrator username and password using the PortalAdminId and PortalAdminPwd settings in the wkplc.properties file.

4.  After the member fixer task runs, review the log output to verify that the task ran correctly. The member fixer task may not be able to save items that fail validation, such as items that contain invalid fields. You must edit these items to make them valid and then run the member fixer task again.

## Running the Member Fixer in a federated security environment

In a federated security environment with multiple realms, you can specify the realm to run the member fixer task on by adding `-Drealm=realmName` to the command. If this parameter is omitted the default realm will be used.

The member fixer task will check whether there are any members and groups referenced in items that contain any of the base distinguished names defined for the specified realm and fix these references. References to members can only be updated with references to members in the specified realm.

Additionally, the member fixer task can be used to check whether there are any members and groups referenced in items that are not under any of the base distinguished names defined for any of the realms in the environment and fix these references. To do this, follow the same steps described for a single realm environment and add `-DnoRealmDn=true` to the command.

In a federated security environment with multiple realms, the member fixer task should be run for each realm in turn to make sure that all of the references are fixed.

## Preserving dates

You can preserve the last modified date of items updated by the member fixer task by adding -DpreserveDates=true to the command. Otherwise, the last modified date is updated when the member fixer task is run.

## Restricting which items types to fix

You can restrict which objects types are processed by appending -DrestrictOn=ItemType to the command.

For example:

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

You can restrict multiple object types by separating the types with a comma (`,`). For example, to restrict workflows and workflow stages, you can specify -DrestrictOn=Workflow,WorkflowStage.

If not specified, all object types will be updated.

## Running the task for all libraries

You can run this task for all libraries by replacing the option `-Dlibrary=libraryName` with the option -DallLibraries=true in the command. If neither option is specified, this task will process the default library that has been configured in the **WCM WCMConfigService** service using the WebSphere® Integrated Solutions Console.

## Running the task on a virtual portal

When running this task on a virtual portal you must add either `-DVirtualPortalHostName`=name or `-DVirtualPortalContext=context` to the command.

## Parameters to set for large repositories

To prevent your session timing out before the task has finished, you can append the option `-DsessionTimeOut=timeOut` to the command. This sets the number of seconds in which the task must complete before its session will timeout. The default session timeout is 14,440 seconds, which is 4 hours. For large repositories you should increase this setting. For example: `-DsessionTimeOut=36000`, which is 10 hours.

## Examples

These options can be combined when the conditions occur at the same time. For example, if alternate DNs are available for nonexistent users and groups and there are mismatched unique IDs, you would use the following command:

-   **Windows™**

    `ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -Dfix=true -DaltDn=update -DmismatchedId=update`

-   **AIX® and Linux™**

    `./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password-Dlibrary="MyLibrary" -Dfix=true -DaltDn=update -DmismatchedId=update`

If there have been changes to users and groups that are within the specified realm or that are not within any realm, update the items that reference them by entering the following command:

-   **Windows™**

    `ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Drealm=MyRealm -Dlibrary="MyLibrary" -Dfix=true -DnoRealmDn=true`

-   **AIX® and Linux™**

    `./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Drealm=MyRealm -Dlibrary="MyLibrary" -Dfix=true -DnoRealmDn=true`



???+ info "Related information"
    - [Setting service configuration properties](../../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

