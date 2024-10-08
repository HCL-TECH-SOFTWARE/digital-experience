# Portal service configuration

HCL Portal comprises a framework of configuration services to accommodate the different scenarios that portals of today need to address. You can configure some of these services.

The configuration for each service is stored in and accessible for configuration through the WebSphere® Integrated Solutions Console. In the WebSphere Integrated Solutions Console, the portal configuration services are spelled as one word, for some services abbreviated, and preceded by the letters WP. Example: In the WebSphere Integrated Solutions Console, the portal Configuration Service is listed as **WP ConfigService**. For more information about how to set properties see the topic about Setting service configuration properties.

!!!note "Notes"
    -   The following topics describe the services that can be of interest to the portal administrator. Services that are not described in the following are purely for portal internal usage. Do not modify them in any way.
    -   The following topics describe the portal services and their configuration properties. In these lists, the values given in parentheses are the default values. Properties given with a value of `<none>` have no default values.
    -   You configure the portal configuration services in the WebSphere Integrated Solutions Console. You cannot set the service configuration properties by simply changing the property value in the properties file and restarting the portal.
    -   For details about how to export a configuration from an existing portal and import it to another portal, refer to the documentation about the portal XML configuration interface.

## HCLSoftware U learning materials

For an introduction and a demo on DX deployment, go to [Deployment for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1479){target="_blank"}. Several deployment options are provided in the course.

To learn how to do a traditional installation, go to [Deployment for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3086){target="_blank"}. In this course, you will also learn about additional installation tasks that apply to both container-based and traditional deployments using the Configuration Wizard, DXClient, ConfigEngine, and more. You can try it out using the [Deployment Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab.pdf){target="_blank"} and corresponding [Deployment Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"  
    -   [Configuring your own delayed deletion schedule by using the XML configuration interface](../../../config_portal_behavior/delayed_cleanup/addelclnup_cfgxml.md)
    -   [Digital Data Connector caches](../../../../../extend_dx/ddc/ddc_cache_tuning/plrf_caches.md)
    -   [Working with the XML configuration interface](../../../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
    -   [System event logging](../../../troubleshooting/logging_and_tracing/adsyslog.md)
    - [WebSphere® Integrated Solutions Console](../../../portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
