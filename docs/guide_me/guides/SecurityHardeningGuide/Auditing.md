# Auditing

HCL Digital Experience allows you to [audit](../../../deployment/manage/monitoring/analyze_portal_usage/index.md) certain administrative events, such as impersonation, mentioned above. Most of the auditable events are related to user management and access control.

## Recommended actions and considerations

- [Enable audit logging for all events](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/security_svc/pac_svc/AuditingService.md) for which non-repudiation is a security requirement in your application. Doing so allows you to associate a user identity with the action.

- As a deterrent, inform your users/administrators that auditing is enabled.

- Certain actions, like modifying page layout, are not auditable by default. However, if you sufficiently restrict access and leverage Managed Pages as described above, you could implement auditing in custom workflows to log these events.
