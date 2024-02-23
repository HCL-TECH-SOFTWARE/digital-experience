# HCL DX Server and HCL Web Content Manager - Information related to GDPR

!!! Important
    Clients are responsible for ensuring their own compliance with various laws and regulations, including the European Union General Data Protection Regulation (GDPR). Clients are solely responsible for obtaining advice of competent legal counsel as to the identification and interpretation of any relevant laws and regulations that may affect the clients’ business and any actions the clients may need to take to comply with such laws and regulations.

The products, services, and other capabilities described herein are not suitable for all client situations and may have restricted availability. HCL does not provide legal, accounting, or auditing advice or represent or warrant that its services or products will ensure that clients are in compliance with any law or regulation.


HCL Digital Experience (DX) Server and HCL Web Content Manager are on-premise products installed and operated by the customer. In this scenario, HCL is neither a controller nor a processor as defined by the GDPR.

IBM WebSphere and DB2 software supports both controllers and processors, with their available features in preparing for GDPR readiness. For IBM WebSphere Application Server refer to the [WebSphere Application Server - Considerations for GDPR Readiness](https://www-01.ibm.com/support/docview.wss?uid=swg22016599).

Encryption of data at rest activities can typically be configured in the database and other backends used with HCL DX Server and HCL Web Content Manager. For more information, see [how DB2 native encryption works](https://www.ibm.com/support/knowledgecenter/en/SSEPGG_11.1.0/com.ibm.db2.luw.admin.sec.doc/doc/c0061758.html).


Encryption of data in transit includes both connections from client to the server and from server to the backend. For configuration details, refer to the following guides:

- [IBM WebSphere Application Server security hardening guide](https://www.ibm.com/developerworks/websphere/techjournal/1210_lansche/1210_lansche.html)
- [HCL DX Server security hardening guide](https://support.hcltechsw.com/csm?id=kb_article&sys_id=2a7af78a1b19801c83cb86e9cd4bcb45).

The backup procedure, data retention policy, and how to deal with Data Access and Data Erasure requests need to be defined and managed by data controllers.

For auditing refer to the following documents:

- [Auditing Service](../../../config_portal_behavior/service_config_properties/portal_svc_cfg/security_svc/pac_svc/AuditingService.md)
- [Information about IBM WebSphere Application Server security auditing](https://public.dhe.ibm.com/software/iea/content/com.ibm.iea.was_v7/was/7.0/Security/WASv7_AuditLab.pdf)

When checking for Personal Data, you should include the following cases:

- The user information that is stored in the LDAP (or other repositories).

- Information that may be collected on DX (for example: Tagging and Rating, personalization).

- Information collected by custom code deployed (for example: portlets) or code integrated (for example: via DDC, WSRP, WAB) on HCL DX Server and HCL Web Content Manager.

- User tracking systems integrated with HTML/JavaScript in the browser.

Finally, here are a few hints regarding the handling of users and content:

- **Removing a user**: To remove a user's ability to log into the Portal, you can remove the user from your LDAP (or whatever repository contains the user info). Digital Experience relies on WebSphere for authentication. Mind that some attributes of the user, such as group membership, or attributes in their LDAP record, may have been used in your implementation for access control or personalization rules.

- **Removing cached instance of a user from DB tables**: The easiest way to ensure that cached instances are flushed is to run the documented "CleanupUsers.xml" xmlaccess task. For more information, see [How to fix Portal Access Control settings after LDAP data has changed](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0069350).

- **Changing the ownership for WCM content created by a user**: WCM only refers to the user's distinguished name as stored in the LDAP. No content are lost in WCM when the creator is deleted from the LDAP repository. If you want to replace the assigned content creator, or a specific role, of a user before deleting that user from the LDAP, you can use the "MemberFixer". For more information, see [How to use the member fixer task](../../../../../manage_content/wcm_configuration/wcm_adm_tools/wcm_member_fixer/wcm_admin_member-fixer.md).