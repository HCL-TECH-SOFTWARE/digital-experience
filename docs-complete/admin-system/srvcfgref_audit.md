# Auditing Service 

With the Auditing Service, you can log a set of events in to a separate audit log file. All events are organized in groups. For example, the logging events User Created and User Deleted are grouped and must be turned on or off together.

In the WebSphere® Integrated Solutions Console, the portal Auditing Service is listed as **WP AuditService**.

The section about available events lists and describes the events that are available for auditing.

The audit log output is written to the audit log file. No other log messages are written to this file. For an explanation of the contents of the audit log file, refer to the section about the audit log file.

## Auditing service configuration

By default, the audit log service is disabled. Therefore, the service is loaded, but does not register any event listeners for audit logging. The auditing service configuration is controlled by the Auditing Service.

-   **audit.service.enable = \(false\)**

    This parameter is the global switch. Set this parameter to true to turn on the service. Set this parameter to false to turn off the service. The default setting is false.


The actual log file access of the service can be configured by using the following property:

-   **audit.logFileName = log/audit\_$create\_time.log**

    This property defines the location and the name of the audit log file. The placeholder $create\_time is replaced by a time stamp during file name generation. A second placeholder $APPSERVER\_NAME is used for a vertical cluster configuration to make the log file name unique. Example:

    ```
         audit.logFileName = log/audit_$APPSERVER_NAME_$CREATE_TIME.log
    ```


You can use the auditing service to have the transaction ID written to the audit log file. The project ID can also be written to the audit log file. As these IDs can be long and might not be required in every environment, you can disable the inclusion of the IDs.

-   **audit.showTransactionID.enable = \(true\)**

    Use this property to disable transaction IDs in the audit log. Change the value to `false`. The default value is `true`.

-   **audit.projects.enable = \(true\)**

    Use this property to disable project IDs in the audit log. Change the value to `false`. The default value is `true`.


You determine the events that you want to be logged by enabling the appropriate properties as required. Set the events that you want to enable to the value `true`. The following groups of events are defined:

```
		audit.groupEvents.enable
		audit.userEvents.enable
		audit.portletEvents.enable
		audit.roleEvents.enable
		audit.roleBlockEvents.enable
		audit.ownerEvents.enable
		audit.resourceEvents.enable
		audit.externalizationEvents.enable
		audit.userInGroupEvents.enable
		audit.webModuleEvents.enable
		audit.domainAdminDataEvents.enable
		audit.designerDeployServiceEvents.enable
		audit.impersonationEvents.enable 
		audit.taggingEvents.enable
		audit.ratingEvents.enable
		audit.projectPublishEvents.enable
		audit.vanityURLEvents.enable

```

The default value for all of these properties is `false`. That means that no events are logged by default, even if you turned on the service by setting the property `audit.service.enable` to `true`.

To enable one or more groups of events, change the default value of the appropriate `audit.eventGroup.enable` property to `true`.

## Available events

This list shows the events that you can log with the auditing service. They are listed by the groups in which they are available. If you enable one group, all events in that group are logged.

|Audit logging group|Audit logging event|Meaning of the event|
|-------------------|-------------------|--------------------|
|`audit.groupEvents`|Group created event|A new user group was created via portal UIs.|
|`audit.groupEvents`|Group modified event|A user group was modified via portal UIs.|
|`audit.groupEvents`|Group deleted event|A user group was deleted via portal UIs.|
|`audit.userEvents`|User created event|A new user was created via portal UIs.|
|`audit.userEvents`|User modified event|A user was modified via portal UIs.|
|`audit.userEvents`|User deleted event|A user was deleted via portal UIs.|
|`audit.portletEvents`|Portlet Application created event|A new web module or portlet application was created via portal UIs.|
|`audit.portletEvents`|Portlet Application modified event|A web module or portlet application was modified via portal UIs.|
|`audit.portletEvents`|Portlet Application deleted event|A web module or portlet application was deleted through portal UIs.|
|`audit.roleEvents`|Role assigned event|A portal role was assigned to a user. The user was given the specified type of access permission on all resources that are affected by this role. For example, it can be EDITOR on Page1.|
|`audit.roleEvents`|Role unassigned event|A portal role was unassigned from a user. The user no longer has the specified access rights on the resources that are affected by this role. For example, the user is no longer EDITOR on Page1.|
|`audit.roleBlockEvents`|Role block modified event|The portal role block information of a resource was changed. The event message contains a list of blocked and non-blocked roles on the resource. As roles can either be inherited or propagated, two separate lists exist for inheriting roles and propagating roles. If the propagation of role blocks was changed, the list for inheriting roles is empty and vice versa.|
|`audit.ownerEvents`|Resource owner modified event|The owner of a resource was changed.|
|`audit.resourceEvents`|Resource created event|A new resource was registered. This event is triggered when the resource is registered in Portal Access Control.|
|`audit.resourceEvents`|Resource modified event|A registered resource was modified. This event is triggered if the resource is modified in Portal Access Control.|
|`audit.resourceEvents`|Resource deleted event|A registered resource is no longer registered in Portal Access Control. This event usually happens when a resource is deleted.|
|`audit.externalizationEvents`|Resource externalized event|A resource was externalized. This event means that access permissions to this resource are no longer controlled by Portal Access Control, but by an external Access Manager. For example, it might be Security Access Manager.|
|`audit.externalizationEvents`|Resource internalized event|A resource was internalized. It is now controlled by Portal Access Control and no longer by an external Access Manager.|
|`audit.userInGroupEvents`|User added to group event|A user was added to a group. The user is now a member of this group and therefore inherits access rights from the group.|
|`audit.userInGroupEvents`|User who is removed from group event|A user was removed from a group. The user is no longer a member of that group and does no longer have the inherited access rights.|
|`audit.webModuleEvents`|Web Module started event|A new web module was started.|
|`audit.webModuleEvents`|Web Module stopped event|An installed web module was stopped.|
|`audit.domainAdminDataEvents`|Domain administration data initialized event|The administrative data for a domain, such as administrative user, administrative group, and virtual root resource, was initialized during the start of portal. For the lifetime of the current portal process, this user and group have administrative permissions on the domain resource hierarchy, starting from the virtual root resource. For more information, read the *Access Control Data Management Service*. This event is always thrown for each defined domain during the server start. Because the system causes this event, no user is logged.|
|`audit.designerDeployServiceEvents`|Component installed event|A portlet application was created by using IBM Lotus Component Designer.|
|` audit.designerDeployServiceEvents`|Component modified event|A portlet application that is created by using IBM Lotus Component Designer was modified.|
|` audit.designerDeployServiceEvents`|Component uninstalled event|A portlet application that is created by using IBM Lotus Component Designer was deleted.|
|`audit.impersonationEvents`|Impersonation started event|A user started impersonation with another user. Previewing as another user is not logged by this event.|
|`audit.impersonationEvents`|Impersonation ended event|A user ended impersonation with another user. Previewing as another user is not logged by this event.|
|`audit.impersonationEvents`|Impersonation attempted with no permission event|A user tried to impersonate another user but has no permission. The attempt to preview as another user without permission is not logged by this event.|
|`audit.vanityURLEvents`|Vanity URL created|A user created a vanity URL.|
|`audit.vanityURLEvents`|Vanity URL modified|A user modified a Vanity URL.|
|`audit.vanityURLEvents`|Vanity URL deleted.|A user deleted a Vanity URL.|
|`audit.tagEvents`|Tag created|A user created a tag.|
|`audit.tagEvents`|Tag deleted|A user deleted a tag.|
|`audit.ratingEvents`|Rating created|A user created a rating|
|`audit.ratingEvents`|Rating deleted|A user deleted a rating.|
|`audit.projectPublishEvents`|Project created|A user created a project.|
|`audit.projectPublishEvents`|Project published|A user published a project.|
|`audit.projectPublishEvents`|Project removed|A user removed a project.|

## Audit log file

The audit log file contains one audit log message per line. All log messages start with a time stamp, followed by the optional transaction ID, the message code, and the event message. Each event message contains the following information:

-   The user ID of the user who triggered the audit event
-   Additional information about the event itself.

Events for actions that run in a transaction are written to the log file when the transaction is committed. If the transaction is rolled back, no event messages are written to the log file.

Events for actions that do not run in a transaction are written to the log immediately. In such cases, the related action is not allways completed successfully.

**Parent topic:**[Portal Access Control Services ](../admin-system/srvcfgref_secy_pac.md)

