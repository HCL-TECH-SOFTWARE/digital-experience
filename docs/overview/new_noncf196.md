# What's new in CF196?

Combined Cumulative Fix \(CF196\) includes new features and software fixes for the latest version of HCL Digital Experience. Beginning with CF19 and Container Update release CF196, release updates for both on–premises platforms and container deployments will be available.

This HCL Digital Experience 9.5 CF196 release includes updated releases of HCL DX core Portal and Web Content Manager, Content Composer, Digital Asset Management and Experience API, Design Studio \(Beta\) for Container deployments, Theme Editor Portlet, Content Security Policy support, DXClient and DXConnect tooling supporting CICD release processes, Multilingual enhancements, HCL Unica Discover enablement, new HCL Digital Experience ‘How To’ videos and more. 

Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article_view&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd) for the list of software fixes. Product software can be accessed from the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). Go to this [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2) for more information.

**Note:** For new capabilities that are available for HCL DX 9.5 CF196 Container Update deployments, see [What's new in the CF196 Container Update release](newcf196.md) topic.

## Theme Editor Portlet

The Theme Editor portlet is a new addition to HCL Digital Experience CF196 and higher release capabilities. The portlet allows an administrator to edit static theme resources in WebDAV without the use of a WebDAV client or tool.

See the [Theme Editor Portlet](https://help.hcltechsw.com/digital-experience/8.5/dev-theme/theme_editor_portlet.html) topic for more information.

## Web Content Manager Multilingual Solution Enhancements

The [HCL Web Content Manager Multilingual Solution](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_mls.html) is a set of tools used to manage translated versions Web Content Manager content for localized and regionalized websites. Beginning with the HCL Digital Experience 9.5 CF196 release, a new export and import capability allows you to support translation of the content of a library by exporting it into a format supported by a translation service and importing the translated content back into the content library using the [DXClient](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) tool.

Support is also added to define a maximum field length, export changed contents from a library, and export to projects. A new option to switch the language in an HCL DX 9.5 Mobile view is also available.

See the [How to export and import WCM library content using DXClient](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_mls_export_import.html) and The [Woodburn Studio demo site](../woodburn_studio/woodburn_studio.md) Help Center topics for more information.

## Enable Presentation of Locales in Friendly URLs

Beginning with the HCL Digital Experience 9.5 Container Update CF196 release, enablement is provided to present friendly URLs with locale specific definitions when multi-lingual page versions are requested. This enablement can also improve SEO results when users search for language-specific DX page topics.

See the [Enabling presentation of locales in friendly URLs](https://help.hcltechsw.com/digital-experience/8.5/admin-system/enabling_presentation_of_locales_in_friendly_urls.html) topic for more information.

## Change language presented in the HCL Digital Experience Theme

Beginning with HCL DX CF196 release, you can switch the language presented in your Digital Experience theme. An example is provided in the Woodburn Studio demo site supporting presentations for French, Spanish, and English languages.

See the [How to switch the languages in the Digital Experience theme](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_switch_lang_portal_theme.html) topic for more information.

## New HCL Digital Experience 9.5 Release Artifacts supporting CICD release processes

The HCL Digital Experience 9.5 DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform, and to automate processes in the development and delivery process. Updates include a new DXClient Docker image, and new release artifact types supporting Shared Libraries, Obtain failed Syndication reports, Undeploy Themes, and Export/Import Web Content Manager Library, Deploy DX Core, Manage Syndicator, and Manage Subscriber tasks are provided in CF196.

See the [DXClient and DXConnect tooling supporting CICD release processes](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) topic for more information.

## Web Content Manager Advanced Cache Options

New options are available to flush the Web Content Manager Advanced cache, as a result of syndication operations, to help improve performance and reliability.

See the [Web Content Manager Cache Parameters](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_dev_caching_cache-parameters.html) topic for more information.

## Content Security Policy

The `Content-Security-Policy` header is used by modern browsers to enhance the security of HCL Digital Experience site documents or web pages by allowing HCL Digital Experience administrators or developers declare which dynamic resources are allowed to load. With HCL Digital Experience Container Update CF192 and later releases, developers can apply platform support and guidance to update their DX sites to validate trusted sources before rendering pages to end users.

See the [Content Security Policy](https://help.hcltechsw.com/digital-experience/8.5/security/content_security_policy.html) Help Center topic for more information.

## Enhanced Cross Origin Resource Sharing Configuration

Enhanced Cross Origin Resource Sharing Configuration adds new options for HCL Digital Experience administrators to set configuration for CORS using a WP configuration service in the IBM WebSphere Application Server resource environment provider.

See [Enhanced Cross Origin Resource Sharing Configuration](https://help.hcltechsw.com/digital-experience/8.5/admin-system/adauthflt.html) for more information.

## HCL Digital Experience 9.5 Integration with HCL Unica Discover

Integration of [HCL Digital Experience](https://www.hcltechsw.com/wps/portal/products/dx/features) 9.5 sites with [HCL Unica Discover](https://www.hcltechsw.com/products/unica/offerings/discover) enables DX site managers and marketers to access deep insight analytics and session replay services to assess the effectiveness of DX site pages with end user audiences.

See the [Integrate HCL Unica Discover with HCL Digital Experience](../install/integrate_hcl_unica_discover.md) topic for more information.

## Deploy HCL DX 9.5 using Docker Compose

Beginning with HCL DX 9.5 CF196, administrators and developers can deploy HCL DX 9.5 using Docker Compose, for non-production use. Docker Compose scripts for HCL DX 9.5, installation and configuration instructions for non-production use are available in the [HCL Software Github](https://github.com/HCL-TECH-SOFTWARE).

See the [Docker image deployment using Docker Compose](../containerization/docker_compose.md) topic for more information.

## Deploy HCL Digital Experience 9.5 on HCL Solution Factory \(SoFy\)

The HCL Solution Factory \(SoFy\) platform offers the ability for organizations to quickly prototype and test assets and can enable organizations to speed cloud-native adoption. Visit [HCL SoFy](https://hclsofy.com) to access HCL Digital Experience 9.5 and other HCL software offerings to quickly assess and test cloud-native strategies, gain hands-on experience working with demonstration assets, to see what best fits adoption plans.

View this online tutorial: [Deploy HCL Digital Experience in Minutes with HCL SoFy](https://attendee.gotowebinar.com/recording/812851766818085891)

## HCL Digital Experience 9.5 Integration with HCL Commerce

[HCL Commerce integration](https://www.hcltechsw.com/products/commerce) with [HCL Digital Experience](https://www.hcltechsw.com/dx/features) allows content and digital assets managed within HCL Digital Experience to be utilized in any Commerce store. Visit the [HCL Commerce - Digital Experience integration](https://help.hcltechsw.com/commerce/9.1.0/integration/concepts/dx_introduction.html) resource for more information and pre-requisites.

## New Digital Experience REST APIs

New HCL DX APIs are available with the HCL DX CF196 release:

-   [Web Content Manager Multilingual Solution APIs](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_mls_api.html)

-   [Web Content Manager Comments API](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_rest_crud_workflow.html#wcm_rest_crud_workflow__section_tpj_jtt_f4b)

-   [Web Content Manager Find Rendering and Script Portlet References](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_REST_web_content_manager_find_rendering_script_portlet_references.html)

-   [Web Content Manager Access Control Filter REST API](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_REST_web_content_manager_access_control_filter.html)

-   [Clear Theme Cache API](../wcm/clear_themes_caches.md)

-   [Work with Deleted Web Content Items](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_rest_crud_purge_delete.html)


## New HCL Digital Experience ‘How To’ Videos

Take advantage of new step-by-step guidance for HCL Digital Experience practitioners presented in videos in following HCL Digital Experience Help Center topics:

-   [Configuring user access permissions to Digital Asset Management assets](../digital_asset_mgmt/manage_collections.md)

-   [Deep Dive: Progressive Web Applications with HCL DX 9.5](../install/progressive_web_applications.md)

-   [Content Security Policy with HCL Digital 9.5](https://help.hcltechsw.com/digital-experience/8.5/security/content_security_policy.html)

-   [Getting Started with DXClient on Red Hat OpenShift using HCL Digital Experience CF194](../containerization/dxclient.md)

-   [Understanding the Core Persistent Volumes in HCL Digital Experience Container Update CF194](../containerization/sample_storage_class_volume.md)

-   [Create a WebDAV Theme copy using HCL Digital Experience 9.5](https://help.hcltechsw.com/digital-experience/8.5/dev-theme/themeopt_themedev_manual_webdav.html)

-   [Create and apply A/B personalized scenarios with HCL Digital Experience](https://help.hcltechsw.com/digital-experience/8.5/pzn/pzn_overview.html)

-   [Deploy HCL Digital Experience in Minutes using HCL Solution Factory](../containerization/deployment.md)

-   [Using the dxctl tool to Update Digital Experience 9.5 on Red Hat OpenShift](../containerization/update_dx_core_kubernetes_container_deployment.md)

-   [How to Upload HCL Digital Experience 9.5 CF Container Images to a Private Repository](../containerization/docker.md)

-   [HCL Digital Experience 9.5 Container Deployment](../containerization/deployment.md)

-   [Using the dxctl tool to deploy Digital Experience 9.5 on Red Hat OpenShift](../containerization/dxtools_dxctl.md)

-   [Create a WAR-based theme copy on HCL Digital Experience 9.5](https://help.hcltechsw.com/digital-experience/8.5/dev-theme/themeopt_themedev_manual_warbased.html)


**Parent topic:**[Latest Combined CF and 9.5 Container Updates](../overview/new_cf_95.md)

