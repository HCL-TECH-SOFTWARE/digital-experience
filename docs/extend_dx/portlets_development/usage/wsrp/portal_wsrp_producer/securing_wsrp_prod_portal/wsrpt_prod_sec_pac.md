# Configuring Portal Access Control for a WSRP Producer portal

If you configure security for WSRP services, you must also configure Portal Access Control for the Producer.

By default Portal Access Control is enabled for the Producer portal. You might want to disable Portal Access Control for using WSRP with HCL Portal. You can disable the WSRP security by setting the portal configuration parameter wsrp.security.enabled in the portal WP Configuration Service to false. You complete this step in the WebSphere® Integrated Solutions Console. With this setting all portlets that your Producer portal provides can be accessed through the WSRP protocol without any authentication.

To enable Portal Access Control for the Producer portal again, set the portal configuration parameter wsrp.security.enabled in the portal WP Configuration Service to true.

1.  Activate the WSRP security by setting the property `wsrp.security.enabled` to `true` in the portal WP Configuration Service in the WebSphere Integrated Solutions Console.

2.  Assign access rights based on the authentication information:

    -   If you use security, assign access rights to the actual Consumer portal users. Get the user information from the Consumer.
    -   If you do not use security, assign access rights to the anonymous user.


  
???+ info "Related information"
    -   [Access permissions](../../../../../../deployment/manage/security/controlling_access/resources_roles/sec_acc_rights.md)
    -   [Security for WSRP services](../../../../../../extend_dx/development_tools/wsrp/planning_wsrp/wsrpc_secy.md)

