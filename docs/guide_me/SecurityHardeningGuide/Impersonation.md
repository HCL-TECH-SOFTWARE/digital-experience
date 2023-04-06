# Impersonation

The [impersonation](https://help.hcltechsw.com/digital-experience/8.5/admin-system/impers_user.html) feature in HCL Digital Experience enables users with sufficient access rights to act as a different user within the application, without actually having that user's credentials. Impersonation is most often used for:

• Authors to view the site as a regular user, while they are building the site,
• Reviewers (in the context of Managed Pages) to view the site as a regular user before approving updates,
• Help desk personnel to troubleshoot access control or other user-specific problems.

There are several major security concerns with impersonation which you should consider.

## Recommended actions and considerations

• Do you need to use impersonation in your application? If not, consider [disabling impersonation altogether](https://help.hcltechsw.com/digital-experience/8.5/admin-system/impers_enable_disable.html).

• If your application requires impersonation, do your security requirements permit impersonating any arbitrary user? Should users be able to impersonate the Digital Experience administrator (e.g. wpsadmin)? Should they be able to impersonate the CEO?
    ◦ If not, the role mapping Can Run As User@USERS (virtual resource) suggested in the [Product Documentation](https://help.hcltechsw.com/digital-experience/8.5/admin-system/sec_acc_rights.html) is too broad. Assign the Can Run As User role per-user-group instead. For example, if you assign AdminGroup1 the role Can Run As User@GroupA, then any member of AdminGroup1 could impersonate any member of GroupA.

• Does your application participate in SSO with other applications via LTPA? If so, impersonation in Digital Experience may circumvent the security controls of those other applications. Consider limiting the scope of user impersonation in your environment.
• Do your security requirements permit impersonating users without their consent? If not, then the default impersonation portlet is not sufficient. Consider [developing a custom portlet](https://help.hcltechsw.com/digital-experience/8.5/admin-system/impers_dev_custom_portlet.html) instead.

• If impersonation is enabled in your environment, [enable auditing](https://help.hcltechsw.com/digital-experience/8.5/admin-system/sec_audit.html) for impersonation events. As a deterrent, inform anyone with Can Run As User@X that impersonation events are auditable.