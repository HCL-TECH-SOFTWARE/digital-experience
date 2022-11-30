# What's new in CF192

This HCL Digital Experience 9.5 Container Update release includes new releases of Digital Experience 9.5 core Portal and Web Content Manager, Content Composer, Digital Asset Management, and Experience API images.

This site describes new features in each release. Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17){:target="_blank"} and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){:target="_blank"} for the list of software fixes, including Container Update releases. 

You can access product software at [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release){:target="_blank"}. See [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2){:target="_blank"} for more information.

You can access the latest software requirements and updates that support HCL Digital Experience solutions from the HCL Support pages topic: [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03).

## HCL Digital Experience 9.5 Docker and Container Initialization Performance

Beginning with the HCL Digital Experience 9.5 Container Update CF192 release, DX 9.5 Docker and container initialization performance is improved.

See the [HCL Digital Experience 9.5 Docker and Container Initialization Performance Help Center](https://help.hcltechsw.com/digital-experience/9.5/containerization/container_init_performance.html){:target="_blank"}<!-- (../containerization/container_init_performance.md) --> topic for more information.

## HCL Digital Experience 9.5 Container Core Transaction Logging

Beginning with the HCL Digital Experience 9.5 Container Update CF192 release, transaction logging for the DX Docker Core image is updated to improve performance.

See the [Logging and tracing for Containers and new services Help Center](../../deployment/manage/troubleshooting/logging_and_tracing/logging_tracing_containers_and_new_services.md) topic for more information.

## New HCL Digital Experience 9.5 Release Artifacts supporting CICD release processes

The HCL Digital Experience 9.5 DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform,and automate processes in the development and delivery process. New release artifact types supporting Script Application Undeploy and Restore, and Deploy Theme.

See the [DXClient and DXConnect tooling supporting CICD release processes](../../extend_dx/development_tools/dxclient/index.md) topic for more information.

## New Content Composer Features

New Content Composer features are added with HCL Digital Experience Container Update CF192, including a new Version Comparison interface and capabilities to View and Filter Workflow comments, and more.

See the [HCL Content Composer](../../manage_content/wcm_authoring/content_composer/index.md) topic for additional information.

## New Digital Asset Management Features

New Digital Asset Management Features are added with HCL Digital Experience Container Update CF192, including enhanced crop functionality, Kaltura video player support, thumbnail preview support, asset size filter, Renditions and Versioning support, and more.

See the [HCL Digital Asset Management Help Center](../../manage_content/digital_assets/index.md) topic for additional information.

## HCL Digital Experience 9.5 Integration with HCL Unica Discover

Integration of [HCL Digital Experience](https://www.hcltechsw.com/wps/portal/products/dx/features){:target="_blank"} 9.5 sites with [HCL Unica Discover](https://www.hcltechsw.com/products/unica/offerings/discover){:target="_blank"} enables DX site managers and marketers to access deep insight analytics and session replay services to assess the effectiveness of DX site pages with end user audiences.

See the [Integrate HCL Unica Discover with HCL Digital Experience](../../build_sites/site_analytics/unica/index.md) topic for more information.

## Content Security Policy

The Content-Security-Policy header is used by modern browsers to enhance the security of HCL Digital Experience site documents or web pages by allowing HCL Digital Experience administrators or developers declare which dynamic resources are allowed to load. With HCL Digital Experience Container Update CF192 and later releases, developers can apply platform support and guidance to update their DX sites to validate trusted sources before rendering pages to end users.

See the [Content Security Policy Help Center](../../deployment/manage/security/information/integrity/content_sec_policy/index.md) topic for more information.

## New Digital Experience REST APIs

New HCL DX APIs are introduced with the HCL DX CF192 Container Update release:

-   [Using the WCM Add Comment API](../../manage_content/wcm_development/wcm_rest/wcm_rest_mng_content/wcm_rest_crud_workflow.md#using-the-wcm-add-comment-api)
-   [Web Content Manager Find Rendering and Script Portlet References](../../manage_content/wcm_development/wcm_rest/wcm_REST_web_content_manager_find_rendering_script_portlet_references.md)
-   [Web Content Manager Access Control Filter REST API](../../manage_content/wcm_development/wcm_rest/index.md){:target="_blank"}<!-- (../wcm/wcm_REST_web_content_manager_access_control_filter.md) -->
-   [Clear Theme Cache API](../../build_sites/themes_skins/the_module_framework/themeopt_analyzer/utilities/clear_themes_caches.md)
-   [Work with Deleted Web Content Items](../../manage_content/wcm_development/wcm_rest/wcm_rest_deleted_content/index.md)
-   [Web Content Manager Multilingual Solution APIs](../../manage_content/wcm_development/wcm_dev_api/wcm_mls_api.md)

## New HCL Digital Experience ‘How To’ Videos

Take advantage of new step-by-step guidance for HCL Digital Experience practitioners presented in new videos and webinars. See the following HCL Digital Experience Help Center topics:

-   [HCL Digital Experience 9.5 Container Deployment](../../deployment/install/container/helm_deployment/overview.md)
-   [Using the dxctl tool to deploy Digital Experience 9.5 on Red Hat OpenShift](https://opensource.hcltechsw.com/digital-experience/cf202/platform/kubernetes/operator-based/dxtools_dxctl/)
-   [Create a WAR-based theme copy on HCL Digital Experience 9.5](../../build_sites/themes_skins/customizing_theme/copying_theme/manual_copy_theme/creating_war_theme_copy/index.md)

<!-- ???info "Related information:"
    - [HCL Digital Experience 9.5 Docker and Container Initialization Performance Help Center](../containerization/container_init_performance.md)
    - [Logging and tracing for Containers and new services Help Center](../trouble/logging_tracing_containers_and_new_services.md)
    - [DXClient and DXConnect tooling supporting CICD release processes](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md)
    - [HCL Content Composer Help Center](../content_composer/cont_comp_overview.md)
    - [HCL Digital Asset Management Help Center](../digital_asset_mgmt/digital_asset_mgmt_overview.md)
    - [HCL Digital Asset Management Help Center](../digital_asset_mgmt/digital_asset_mgmt_overview.md)
    - [Integrate HCL Unica Discover with HCL Digital Experience](../install/integrate_hcl_unica_discover.md)
    - [Content Security Policy Help Center](../security/content_security_policy.md)
    - [HCL Digital Experience 9.5 Container Deployment](../containerization/deployment.md)
    - [Using the dxctl tool to deploy Digital Experience 9.5 on Red Hat OpenShift](../containerization/dxtools_dxctl.md)
    - [Create a WAR-based theme copy on HCL Digital Experience 9.5](../dev-theme/themeopt_themedev_manual_warbased.md)
    - [Using the WCM Add Comment API](../wcm/wcm_rest_crud_workflow.md#section_tpj_jtt_f4b)
    - [Web Content Manager Find Rendering and Script Portlet References](../wcm/wcm_REST_web_content_manager_find_rendering_script_portlet_references.md)
    - [Web Content Manager Access Control Filter REST API](../wcm/wcm_REST_web_content_manager_access_control_filter.md)
    - [Clear Theme Cache API](../wcm/clear_themes_caches.md)
    - [Work with Deleted Web Content Items](../wcm/wcm_rest_crud_purge_delete.md)
    - [Web Content Manager Multilingual Solution APIs](../wcm/wcm_mls_api.md)


    -->