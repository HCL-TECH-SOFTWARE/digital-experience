# Redirecting to an HCL Connections site

When a user clicks an HCL Connections resource in the result list portlet, this resource is rendered within an HCL Connections portlet, if that portlet exists and can handle this resource.

For more information about deployment and configuration of the portlets and the HCL Connections POC Resolver, see the HCL Connections documentation.

If you do not require this behavior, you can redirect to a HCL Connections server website. You configure this redirection in the Resource Environment Provider for the WP CP Configuration Service for tagging and rating in the WebSphere® Integrated Solutions Console. For each HCL Connections feature, a custom property exists. The name of the property follows this pattern:

```
com.ibm.wps.cp.tagging.federation.uri.scheme.FederatorID
```

To redirect to the HCL Connections server, use the following value pattern: `connections - FederatorID`.

This setting is used in the next run of the FederationTaskHandler that retrieves HCL Connections tags and tagged resources. After that a redirect to the external HCL Connections website is possible.


???+ info "Related information:"
    - [CP Configuration Service for tagging and rating](../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cp_cfg_svc/index.md)
    - [Setting service configuration properties](../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

