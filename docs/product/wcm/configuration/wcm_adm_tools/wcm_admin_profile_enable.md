# Running the profile enablement tool

Use the profile enablement tool to enable or disable the profile feature on web content items.

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  To enable or disable the profile enablement tool, run the following command:

    -   AIX® HP-UX Linux™ Solaris z/OS®: ./ConfigEngine.sh run-wcm-admin-task-enable-profile -DPortalAdminId=username -DPortalAdminPwd=password -Dlibrary=MyLibrary
    -   IBM® i: ConfigEngine.sh run-wcm-admin-task-enable-profile -DPortalAdminId=username -DPortalAdminPwd=password -Dlibrary=libraryName
    -   Windows™: ConfigEngine.bat run-wcm-admin-task-enable-profile -DPortalAdminId=username -DPortalAdminPwd=password -Dlibrary=libraryName
    Add the following required parameters to the run-wcm-admin-task-enable-profile task to enable or disable profiling on a specific library or on all libraries. You must specify either the -Dlibrary or -DallLibraries parameter.

    -   **-Dlibrary=libraryName**

        Use this parameter if you want to enable or disable profiling on a specific library. The value for this parameter is the name of the library.

        **Note:** If there is a space in your library name; for example: Work Library, put quotation marks around the library name.

    -   **-DallLibraries=true**

        Add this parameter if you want to enable or disable profiling on all libraries.

    -   **-Dmode=add**

        Add this parameter to enable profiling of web content items. If -Dmode is not specified, the default value is add.

    -   **-Dmode=remove**

        Add this parameter to disable profiling of web content items.

    Add the following optional parameters to the run-wcm-admin-task-enable-profile task to meet your business needs:

    -   **To restrict the task to update only specified items types**

        You can restrict which objects types are processed by appending -DrestrictOn=ItemType to the command. For example:

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

    -   **To run the task on a virtual portal**

        When you run this task on a virtual portal, you must add either -DVirtualPortalHostName=name or -DVirtualPortalContext=virtual\_portal\_context to the command.

    -   **To preserve dates**

        You can preserve the last modified date of items that are updated by the update security task by adding -DpreserveDates=true to the command. Otherwise, the last modified date is updated when the update security task is run.

    -   **To define the session timeout**

        To prevent your session from timing out before the task finishes, you can append the option -DsessionTimeOut=timeOut to the command. This parameter sets the number of seconds in which the task must complete before its session will timeout. The default session timeout is 14,440 seconds, which is 4 hours. For large repositories, increase this setting. For example: -DsessionTimeOut=36000, which is 10 hours.

4.  After you enable profiling for an item type, ensure that profiling is also enabled for newly created items in the WCM WCMConfigService service. See the **Enabling profiling** section of the [Web content authoring options](wcm_config_prop_authoring.md) topic.


**Parent topic:**[Web content administration tools](../wcm/wcm_maintain.md)

