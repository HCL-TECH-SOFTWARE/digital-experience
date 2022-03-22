# What's new in Container Update CF201?

This HCL Digital Experience 9.5 Container Update and CF201 release includes updated releases of HCL DX core Portal and Web Content Manager, Content Composer, Digital Asset Management, Experience API, and Design Studio \(Beta\) components. The release also includes updated CICD release process artifacts, new DX Personalization REST APIs, Updated Helm deployment and logging capacity, LDAP, and environment configuration guidance, also metrics and visualization samples, Script Application updates, new React profile for the DX 8.5 sample Theme, extensibility plugin and sample for Digital Asset Management, and more. 

Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17) and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases. Product software can be accessed from the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). Go to this [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2) for more information.

The latest Software Requirements and Updates supporting HCL Digital Experience solutions may be accessed from the HCL Support pages, [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) topic.

The following features and updates are available to customers installing HCL Digital Experience on supported on-premises and container platforms, effective with HCL Digital Experience CF201:

## Deploy HCL DX 9.5 Container Update to container platforms using Helm

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. Beginning with Container Update CF201, updated capacity requirements are published for Digital Experience components, services, and logging. Options to configure environment values, expanded LDAP configuration guidance, and Prometheus metrics and Grafana visualization dashboard samples are provided for administrators to manage, monitor and optimize their deployments.

See the following Help Center topics for more information:

-   [HCL DX 9.5 Helm deployment](../containerization/helm.md)
-   [Containerization Requirements and Limitations](../containerization/limitations_requirements.md)
-   [Additional Helm Tasks](../containerization/helm_additional_tasks.md)
-   [Monitor the HCL Digital Experience Container Deployment using Metrics](../containerization/monitor_helm_deployment_metrics.md)

## Digital Asset Management

New Digital Asset Management \(DAM\) capability enables developers to use and customize an extensibility plugin, with a customized sample provided use with Digital Asset Management. The DAM Extensibility capability adds support DAM to process user-defined custom renditions and transformations for images. This feature can be used to integrate with third-party plug-ins for custom asset processing, for example, to resize, crop, rotate, or other custom operations, while also supporting default and custom renditions.

See the [Using DAM Extensibility](../containerization/dam_extensibility.md) Help Center topic for more information.

## Script Application Updates

New features and updates available for the Script Application include a new configuration task for use to configure Web Content Manager properties used to run Single Page Applications \(SPAs\) that use React or Angular. Improvements are added to support uploads of minified content for use in production SPAs. An out-of-the-box React profile, “Deferred with React,” is added for use with the [Digital Experience 8.5 Theme](../dev-theme/themeopt_defaultparts.md).

See the Script Application Improvements topic in the [HCL Digital Experience 9.5](../script-portlet/script_app_improvements.md) or [HCL Digital Experience 8.5](https://help.hcltechsw.com/digital-experience/8.5/script-portlet/script_app_improvements.md) Help center pages, as applicable to your HCL DX deployment, for more information.

## New HCL Digital Experience 9.5 Release Artifacts supporting CICD release processes

The HCL Digital Experience 9.5 DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform, and to automate processes in the development and delivery process. Updates include ability to view and manipulate custom Resource Environment Provider \(REP\) settings, with examples.

See the [DXClient and DXConnect tooling supporting CICD release processes](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) topic for more information.

## New Personalization REST APIs

New Personalization REST APIs supporting Personalization Folder operations are available with HCL Digital Experience Container Update and CF201.

See the Help Center topic [Personalization Folder APIs](../pzn/dev_pzn_folders_api.md) for more information.

## Language switcher update

Introduced in Container Update CF201, you can disable the language switcher by setting disable.languageSwitcher to `true` at the root page level in the configuration page. When set to `true`, the language switcher is hidden from the portal interface.

See the Help Center topic [Disabling the language switcher](../wcm/wcm_mngpages_disable_lang_switch.md) for more information.

## Access the latest HCL Digital Experience 9.5 Education Materials on HCL Software Academy

The HCL Software Academy offers technical education for the HCL Software portfolio of products, organized by practitioner role. New modules are available for Digital Experience developers and administrators. See the [HCL Digital Experience section](https://academy.hcltechsw.com/#HCLDXLearningJourneys) of the HCL Software Academy for more information.

**Parent topic:**[Container Update releases 9.5](../overview/container_update_releases.md)

