# Auditing Service 

With the Auditing Service, you can log a set of events in to a separate audit log file. All events are organized in groups. For example, the logging events User Created and User Deleted are grouped and must be turned on or off together.

In the WebSphere® Integrated Solutions Console, the portal Auditing Service is listed as WP AuditService.

The section about available events lists and describes the events that are available for auditing.

The audit log output is written to the audit log file. No other log messages are written to this file. For an explanation of the contents of the audit log file, refer to the section about the audit log file.

## Auditing service configuration

By default, the audit log service is disabled. Therefore, the service is loaded, but does not register any event listeners for audit logging. The auditing service configuration is controlled by the Auditing Service.

### audit.service.enable = (false)

This parameter is the global switch. Set this parameter to `true` to turn on the service. Set this parameter to `false` to turn off the service. The default setting is `false`.


Use the following property to configure the actual log file access of the service:

**audit.service.enable = (false)**

This parameter is the global switch. Set this parameter to `true` to turn on the service. Set this parameter to `false` to turn off the service. The default setting is `false`.

Use the following property to configure the actual log file access of the service:

```
audit.logFileName = log/audit_$APPSERVER_NAME_$CREATE_TIME.log
```

You can use the auditing service to have the transaction ID written to the audit log file. The project ID can also be written to the audit log file. Because these IDs can be long and might not be required in every environment, you can disable the inclusion of the IDs.

### audit.showTransactionID.enable = (true)

Use this property to disable transaction IDs in the audit log. Change the value to `false`. The default value is `true`.

### audit.projects.enable = (true)

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

The default value for all of these properties is `false`. That means that no events are logged by default, even if you turned on the service by setting the property audit.service.enable to `true`.

To enable one or more groups of events, change the default value of the appropriate **audit.eventGroup.enable** property to `true`.

## Available events
This list shows the events that you can log with the auditing service. They are listed by the groups in which they are available. If you enable one group, all events in that group are logged.

<table>
<tr>
<th>Audit logging group</th>
<th>Audit logging event</th>
<th>Meaning of the event</th>
</tr>
<tr>
<td><code>audit.groupEvents</code></td>
<td>Group created event</td>
<td>A new user group was created via portal UIs.</td>
</tr>
<tr>
<td><code>audit.groupEvents</code></td>
<td>Group modified event</td>
<td>A user group was modified via portal UIs.</td>
</tr>
<tr>
<td><code>audit.groupEvents</code></td>
<td>Group deleted event</td>
<td>A user group was deleted via portal UIs.</td>
</tr>
<tr>
<td><code>audit.userEvents</code></td>
<td>User created event</td>
<td>A new user was created via portal UIs.</td>
</tr>
<tr>
<td><code>audit.userEvents</code></td>
<td>User modified event</td>
<td>A user was modified via portal UIs.</td>
</tr>
<tr>
<td><code>audit.userEvents</code></td>
<td>User deleted event</td>
<td>A user was deleted via portal UIs.</td>
</tr>
<tr>
<td><code>audit.portletEvents</code></td>
<td>Portlet Application created event</td>
<td>A new web module or portlet application was created via portal UIs.</td>
</tr>
<tr>
<td><code>audit.portletEvents</code></td>
<td>Portlet Application modified event</td>
<td>A web module or portlet application was modified via portal UIs.</td>
</tr>
<tr>
<td><code>audit.portletEvents</code></td>
<td>Portlet Application deleted event</td>
<td>A web module or portlet application was deleted through portal UIs.</td>
</tr>
<tr>
<td><code>audit.roleEvents</code></td>
<td>Role assigned event</td>
<td>A portal role was assigned to a user. The user was given the specified type of access permission on all resources that are affected by this role. For example, it can be EDITOR on Page1.</td>
</tr>
<tr>
<td><code>audit.roleEvents</code></td>
<td>Role unassigned event</td>
<td>A portal role was unassigned from a user. The user no longer has the specified access rights on the resources that are affected by this role. For example, the user is no longer EDITOR on Page1.</td>
</tr>
<tr>
<td><code>audit.roleBlockEvents</code></td>
<td>Role block modified event</td>
<td>The portal role block information of a resource was changed. The event message contains a list of blocked and non-blocked roles on the resource. As roles can either be inherited or propagated, two separate lists exist for inheriting roles and propagating roles. If the propagation of role blocks was changed, the list for inheriting roles is empty and vice versa.</td>
</tr>
<tr>
<td><code>audit.ownerEvents</code></td>
<td>Resource owner modified event</td>
<td>The owner of a resource was changed.</td>
</tr>
<tr>
<td><code>audit.resourceEvents</code></td>
<td>Resource created event</td>
<td>A new resource was registered. This event is triggered when the resource is registered in Portal Access Control.</td>
</tr>
<tr>
<td><code>audit.resourceEvents</code></td>
<td>Resource modified event</td>
<td>A registered resource was modified. This event is triggered if the resource is modified in Portal Access Control.</td>
</tr>
<tr>
<td><code>audit.resourceEvents</code></td>
<td>Resource deleted event</td>
<td>A registered resource is no longer registered in Portal Access Control. This event usually happens when a resource is deleted.</td>
</tr>
<tr>
<td><code>audit.externalizationEvents</code></td>
<td>Resource externalized event</td>
<td>A resource was externalized. This event means that access permissions to this resource are no longer controlled by Portal Access Control, but by an external Access Manager. For example, it might be Security Access Manager.</td>
</tr>
<tr>
<td><code>audit.externalizationEvents</code></td>
<td>Resource internalized event</td>
<td>A resource was internalized. It is now controlled by Portal Access Control and no longer by an external Access Manager.</td>
</tr>
<tr>
<td><code>audit.userInGroupEvents</code></td>
<td>User added to group event</td>
<td>A user was added to a group. The user is now a member of this group and therefore inherits access rights from the group.</td>
</tr>
<tr>
<td><code>audit.userInGroupEvents</code></td>
<td>User who is removed from group event</td>
<td>A user was removed from a group. The user is no longer a member of that group and no longer has the inherited access rights.</td>
</tr>
<tr>
<td><code>audit.webModuleEvents</code></td>
<td>Web Module started event</td>
<td>A new web module was started.</td>
</tr>
<tr>
<td><code>audit.webModuleEvents</code></td>
<td>Web Module stopped event</td>
<td>An installed web module was stopped.</td>
</tr>
<tr>
<td><code>audit.domainAdminDataEvents</code></td>
<td>Domain administration data initialized event</td>
<td>The administrative data for a domain, such as administrative user, administrative group, and virtual root resource, was initialized during the start of portal. For the lifetime of the current portal process, this user and group have administrative permissions on the domain resource hierarchy, starting from the virtual root resource. For more information, read the Access Control Data Management Service. This event is always thrown for each defined domain during the server start. Because the system causes this event, no user is logged.</td>
</tr>
<tr>
<td><code>audit.designerDeployServiceEvents</code></td>
<td>Component installed event</td>
<td>A portlet application was created using the IBM Lotus Component Designer.</td>
</tr>
<tr>
<td><code>audit.designerDeployServiceEvents</code></td>
<td>Component modified event</td>
<td>A portlet application created using the IBM Lotus Component Designer was modified.</td>
</tr>
<tr>
<td><code>audit.designerDeployServiceEvents</code></td>
<td>Component uninstalled event</td>
<td>A portlet application created using IBM Lotus Component Designer was deleted.</td>
</tr>
<tr>
<td><code>audit.impersonationEvents</code></td>
<td>Impersonation started event</td>
<td>A user started impersonation with another user. Previewing as another user is not logged by this event.</td>
</tr>
<tr>
<td><code>audit.impersonationEvents</code></td>
<td>Impersonation ended event</td>
<td>A user ended impersonation with another user. Previewing as another user is not logged by this event.</td>
</tr>
<tr>
<td><code>audit.impersonationEvents</code></td>
<td>Impersonation attempted with no permission event</td>
<td>A user tried to impersonate another user but has no permission. The attempt to preview as another user without permission is not logged by this event.</td>
</tr>
<tr>
<td><code>audit.vanityURLEvents</code></td>
<td>Vanity URL created</td>
<td>A user created a vanity URL.</td>
</tr>
<tr>
<td><code>audit.vanityURLEvents</code></td>
<td>Vanity URL modified</td>
<td>A user modified a Vanity URL.</td>
</tr>
<tr>
<td><code>audit.vanityURLEvents</code></td>
<td>Vanity URL deleted.</td>
<td>A user deleted a Vanity URL.</td>
</tr>
<tr>
<td><code>audit.tagEvents</code></td>
<td>Tag created</td>
<td>A user created a tag.</td>
</tr>
<tr>
<td><code>audit.tagEvents</code></td>
<td>Tag deleted</td>
<td>A user deleted a tag.</td>
</tr>
<tr>
<td><code>audit.ratingEvents</code></td>
<td>Rating created</td>
<td>A user created a rating.</td>
</tr>
<tr>
<td><code>audit.ratingEvents</code></td>
<td>Rating deleted</td>
<td>A user deleted a rating.</td>
</tr>
<tr>
<td><code>audit.projectPublishEvents</code></td>
<td>Project created</td>
<td>A user created a project.</td>
</tr>
<tr>
<td><code>audit.projectPublishEvents</code></td>
<td>Project published</td>
<td>A user published a project.</td>
</tr>
<tr>
<td><code>audit.projectPublishEvents</code></td>
<td>Project removed</td>
<td>A user removed a project.</td>
</tr>
</table>

## Audit log file
The audit log file contains one audit log message per line. All log messages start with a time stamp, followed by the optional transaction ID, the message code, and the event message. Each event message contains the following information:

- The user ID of the user who triggered the audit event
- Additional information about the event itself

Events for actions that run in a transaction are written to the log file when the transaction is committed. If the transaction is rolled back, no event messages are written to the log file.

Events for actions that do not run in a transaction are written to the log immediately. In such cases, the related action is not always completed successfully.

