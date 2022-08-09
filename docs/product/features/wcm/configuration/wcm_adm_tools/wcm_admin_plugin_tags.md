# How to manage plug-in tag usage

Plug-in tags are used to reference rendering plug-ins in Web content. Use the run-wcm-admin-task-tag-usage task to find or update plug-in tags in your Web content.

## Finding plug-in tags

To create a report of plug-in tags that are referenced in Web Content Manager items, run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

-   **Windows™**

    ConfigEngine.bat run-wcm-admin-task-tag-usage -DPortalAdminId=username -DPortalAdminPwd=password -Dfind=Plugin:PluginName -Dlibrary="MyLibrary"

-   **AIX®HP-UXLinux™ Solaris**

    ./ConfigEngine.sh run-wcm-admin-task-tag-usage -DPortalAdminId=username -DPortalAdminPwd=password -Dfind=Plugin:PluginName -Dlibrary="MyLibrary"

-   **IBM® i**

    ConfigEngine.sh run-wcm-admin-task-tag-usage -DPortalAdminId=username -DPortalAdminPwd=password -Dfind=Plugin:PluginName -Dlibrary="MyLibrary"

-   **z/OS®**

    ./ConfigEngine.sh run-wcm-admin-task-tag-usage -DPortalAdminId=username -DPortalAdminPwd=password -Dfind=Plugin:PluginName -Dlibrary="MyLibrary"


**Note:** The library that is specified in the command is the library to be scanned by the task. If the query parameter "library" is omitted, the default library that is configured with the `defaultLibrary` property in the `WCM WCMConfigService` service is used.

**Note:** An administrator user name and password is not required if you specify the portal administrator user name and password by using the PortalAdminId and PortalAdminPwd settings in the wkplc.properties file.

**Note:** Before you progress to the next step and run the task in fix mode, ensure that the report mode indicates that the updates will happen as you require. A summary of the updates are shown by the command.

A detailed report of the updates that are made for each item is shown in the SystemOut.log file in `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\logs\HCL Portal and HCL Web Content Manager`.

A detailed report of the updates that are made for each item is shown in the job log for the portal application server.

If the report indicates that the update will not happen as required, change the task parameters and run the report mode again. Repeat this process until you are satisfied that the fixes are applied correctly. This is important because the fixes made by the task when run in fix mode might not be easy to undo if incorrect fixes are applied.

## Replacing plug-in tags

To replace one plug-in tag type with another when referenced in web content items, run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

-   **Windows™**

    ConfigEngine.bat run-wcm-admin-task-tag-usage -DPortalAdminId=username -DPortalAdminPwd=password -Dfind=Plugin:OldPluginName -Dfix=true -Dreplace=Plugin:NewPluginName -Dlibrary="MyLibrary"

-   **AIX®HP-UXLinux™ Solaris**

    ./ConfigEngine.sh run-wcm-admin-task-tag-usage -DPortalAdminId=username -DPortalAdminPwd=password -Dfind=Plugin:OldPluginName -Dfix=true -Dreplace=Plugin:NewPluginName -Dlibrary="MyLibrary"

-   **IBM® i**

    ConfigEngine.sh run-wcm-admin-task-tag-usage -DPortalAdminId=username -DPortalAdminPwd=password -Dfind=Plugin:OldPluginName -Dfix=true -Dreplace=Plugin:NewPluginName -Dlibrary="MyLibrary"

-   **z/OS®**

    ./ConfigEngine.sh run-wcm-admin-task-tag-usage -DPortalAdminId=username -DPortalAdminPwd=password -Dfind=Plugin:OldPluginName -Dfix=true -Dreplace=Plugin:NewPluginName -Dlibrary="MyLibrary"


**Note:** The library that is specified in the command is the library to be scanned by the task. If the query parameter "library" is omitted, the default library that has been configured with the `defaultLibrary` property in the `WCM WCMConfigService` service is used.

**Note:** An administrator user name and password is not required if you specify the portal administrator user name and password by using the PortalAdminId and PortalAdminPwd settings in the wkplc.properties file.

## Extra parameter values

Use these additional task parameters to update the parameters in a plug-in tag:

|Parameter|Description|
|---------|-----------|
|`-DaddParam=`ParameterName|The name of a tag parameter to add to the 'find' tag when in fix mode.|
|`-DaddParamValue=`ParameterValue|The value of the tag parameter to add to the 'find' tag when in fix mode.|
|`-DupdateParam=`ParameterName|The name of the tag parameter to update on the 'find' tag when in fix mode.|
|`-DupdateParamNewName=`NewParameterName|The new name of the tag parameter to update on the 'find' tag when in fix mode.|
|`-DupdateParamValue=`OldParameterValue|The old value of the 'updateParam' parameter to update on the 'find' tag when in fix mode.|
|`-DupdateParamNewValue=`NewParameterValue|The new value that replaces the old value in the 'updateParam' parameter on the 'find' tag when in fix mode.|
|`-DremoveParam=`ParameterName|The name of a tag parameter to remove from the 'find' tag when in fix mode.|
|`-DremoveParamValue=`ParameterValue|The values of the updateParam to remove from the 'find' tag when in fix mode.|
|`-DfixBehavior=`Behavior Parameter|Used to determine how a fix is implemented. Valid behavior parameters are:-   **`allowMultipleValues`**

If specified, parameters are allowed to have multiple values when you add parameter values in fix mode.

-   **`ifParamValue`:ParameterValue**

The fix is applied only to tags that have a parameter that has this value

-   **`ifParamNotExist`:ParameterName**

The fix is applied only to tags where this parameter does not exist.


|

## Preserving dates

You can preserve the last modified date of items that are updated by the task by adding -DpreserveDates=true to the command. Otherwise, the last modified date is updated when the task is run.

## Running the task for all libraries

You can run this task for all libraries by replacing the option `-Dlibrary=libraryName` with the option -DallLibraries=true in the command. If neither option is specified, this task processes the default library that is configured in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console.

## Running the task on a virtual portal

When this task is run on a virtual portal, you must add either `-DVirtualPortalHostName`=name or`-DVirtualPortalContext=context` to the command.

## Parameters to set for large repositories

To prevent your session timing out before the task has finished, you can append the option `-DsessionTimeOut=timeOut` to the command. This sets the number of seconds in which the task must complete before its session will timeout. The default session timeout is 14,440 seconds, which is 4 hours. For large repositories, you should increase this setting. For example: `-DsessionTimeOut=36000`, which is 10 hours.

## Examples

In this example, the plug-in tag `ifEqual` has been deprecated and replaced with the plug-in tag `Equals`. To up date all instances of the `ifEqual` tag in your site, run the following commands:

```
./ConfigEngine.sh/bat run-wcm-admin-task-tag-usage -Dfind=Plugin:ifEqual -DallLibraries=true -Dfix=true -DupdateParam=value1 -DupdateParamNewName=text1
./ConfigEngine.sh/bat run-wcm-admin-task-tag-usage -Dfind=Plugin:ifEqual -DallLibraries=true -Dfix=true -DupdateParam=value2 -DupdateParamNewName=text2
./ConfigEngine.sh/bat run-wcm-admin-task-tag-usage -Dfind=Plugin:ifEqual -DallLibraries=true -Dfix=true -Dreplace=Plugin:Equals
```

These commands replace the 'value1' and 'value2' parameters with 'text1' and 'text2' parameters, and then change the tag name to `Equals`.

**Parent topic:**[Web content administration tools](../wcm/wcm_maintain.md)

