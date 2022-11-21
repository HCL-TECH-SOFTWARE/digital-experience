# What's new in CF195

This HCL Digital Experience 9.5 Container Update release includes new releases of Digital Experience 9.5 core Portal and Web Content Manager, Content Composer, Digital Asset Management, and Experience API images. New and updated feature references are detailed here.

This site describes new features in each release. Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17){:target="_blank"} and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){:target="_blank"} for the list of software fixes, including Container Update releases. 

You can access product software at [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release){:target="_blank"}. See [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2){:target="_blank"} for more information.

You can access the latest software requirements and updates that support HCL Digital Experience solutions from the HCL Support pages topic: [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03).

## Web Content Manager Multilingual Solution Library Export and Import

The HCL Web Content Manager Multilingual Solution is a set of tools used to manage translated versions Web Content Manager content for localized and regionalized websites. Beginning with the HCL Digital Experience 9.5 Container Update CF195 release, a new export and import capability allows you to support translation of the content of a library by exporting it into a format supported by a translation service and importing the translated content back into the content library using the [DXClient](../../extend_dx/development_tools/dxclient/index.md) tool.

See the [How to export and import WCM library content using DXClient](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/wcm_mls_export_import.md) topic for more information.

## Web Content Manager Advanced Cache Options

New options are available to flush the Web Content Manager Advanced cache, as a result of syndication operations, to help improve performance and reliability.

See the [Web Content Manager Cache Parameters](../../manage_content/wcm/wcm_management/custom_caching/wcm_dev_caching_cache-parameters.md) topic for more information.

## Enhanced Cross Origin Resource Sharing Configuration

Enhanced Cross Origin Resource Sharing Configuration adds new options for HCL Digital Experience administrators to set configuration for CORS using a WP configuration service in the IBM WebSphere Application Server resource environment provider.

See the [Enhanced Cross Origin Resource Sharing Configuration](../../deployment/manage/config_portal_behavior/auth_filters/index.md) for more information.

## New HCL Digital Experience 9.5 Release Artifacts supporting CICD release processes

The HCL Digital Experience 9.5 DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform, and automate processes in the development and delivery process. New release artifact types supporting Undeploy Themes, and Export/Import Web Content Manager Library content are provided in Container Update CF195.

See the [DXClient and DXConnect tooling supporting CICD release processes](../../extend_dx/development_tools/dxclient/index.md) topic for more information.

## Remote Search Configuration for HCL Digital Experience 9.5 deployments on Kubernetes platforms

Beginning with HCL DX 9.5 Container Update CF195 release, Remote Search can be configured for deployment on supported Kubernetes platforms.

See the [Configure Remote Search in Red Hat OpenShift and Kubernetes](../../deployment/manage/container_configuration/kubernetes_remote_search.md) topic for more information.

## Define No Context Root in for HCL Digital Experience 9.5 container deployments

Beginning with HCL DX 9.5 Container Update CF195 release, administrators can define custom context root URLs, or no context root URL, when deploying HCL DX 9.5 software to the supported container platforms.

See the [Customizing the Digital Experience URL when deployed to Container platforms](https://help.hcltechsw.com/digital-experience/9.5/containerization/t_customize_dx_url.html){:target="_blank"}<!-- (../containerization/t_customize_dx_url.md) --> topic for more information.

## HCL Digital Experience 9.5 Container Platform Support Matrix

View the latest Kubernetes and OpenShift platforms tested and supported for specific HCL Digital Experience 9.5 Container Update deployments.

See the [HCL Digital Experience 9.5 Container Platform Support Matrix Help Center](../../get_started/system_requirements/kubernetes/kubernetes-runtime.md) topic for more information.

## New HCL Digital Experience ‘How To’ Videos

Take advantage of new step-by-step guidance for HCL Digital Experience practitioners presented in new videos and webinars. See the following HCL Digital Experience Help Center topics:

-   [Getting Started with DXClient on Red Hat OpenShift using HCL Digital Experience CF194](../../extend_dx/development_tools/dxclient/index.md)
-   [Understanding the Core Persistent Volumes in HCL Digital Experience Container Update CF194](../../deployment/manage/container_configuration/sample_storage_class_volume.md)
-   [Create a WebDAV Theme copy using HCL Digital Experience 9.5](../../build_sites/themes_skins/customizing_theme/copying_theme/manual_copy_theme/creating_webdav_theme_copy/index.md)
-   [Create and apply A/B personalized scenarios with HCL Digital Experience](../../get_started/product_overview/personalization.md)

<!-- ???info "Related information:"
    - [How to export and import WCM library content using DXClient](../wcm/wcm_mls_export_import.md)
    - [Web Content Manager Cache Parameters](../wcm/wcm_dev_caching_cache-parameters.md)
    - [Customizing the Digital Experience URL when deployed to Container platforms](../containerization/t_customize_dx_url.md)
    - [Enhanced Cross Origin Resource Sharing Configuration](../admin-system/adauthflt.md)
    - [Getting Started with DXClient on Red Hat OpenShift using HCL Digital Experience CF194](../containerization/dxclient.md)
    - [Understanding the Core Persistent Volumes in HCL Digital Experience Container Update CF194](../containerization/sample_storage_class_volume.md)
    - [Create a WebDAV Theme copy using HCL Digital Experience 9.5](../dev-theme/themeopt_themedev_manual_webdav.md)
    - [Create and apply A/B personalized scenarios with HCL Digital Experience](../pzn/pzn_overview.md)

     -->