# What's new in CF203

HCL Digital Experience 9.5 Container Update and CF203 release includes Helm configuration of metrics enablement, deploy to internal network, and Ambassador to HA Proxy migration support. The release also adds support for DAM metadata configurations using Extensibility functions, Content Composer in Virtual Portal configuration, Personalization Visibility rules in anonymous use case sample and updates, support for Dynamic Properties, Profiler Rule and update, options to customize the DX Site Manager interface, Notice of deprecation and replacement of Document Conversion services notice, new complementary DX training modules in the HCL Software Academy, and more.

This site describes new features in each release. Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17){:target="_blank"} and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){:target="_blank"} for the list of software fixes, including Container Update releases. 

You can access product software at [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release){:target="_blank"}. See [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2){:target="_blank"} for more information.

You can access the latest software requirements and updates that support HCL Digital Experience solutions from the HCL Support pages topic: [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03).

The following features and updates are available to customers installing HCL Digital Experience CF203 on supported container platforms:
<!-- ## Personalization REST APIs 

Personalization Visibility Rules REST APIs adds an anonymous use case sample and updates, and the ability to apply Dynamic Properties. New Profile Create Rule APIs and update based on UUIDs are also added.
See the Help Center topic and [Personalization Rules APIs](https://help.hcltechsw.com/digital-experience/9.5/pzn/dev_pzn_rules_api.html){:target="_blank"}<!-- (../pzn/dev_pzn_rules_api.md) -->
## Deploy HCL DX 9.5 Container Update to container platforms using Helm 

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to the supported container platforms using Helm. Deployment using the Helm Chart can provide administrators more transparency and control in the deployment operations. 

Beginning with Container Update CF203, the Ambassador shipped as part of the DX Helm deployment is deprecated and will be removed in a subsequent HCL DX 9.5 Container Update release. HAProxy is taking its place and replaces functions performed by the Ambassador in the DX namespace.

In CF203, Helm configuration settings for metrics are enabled by default, new guidance is added to deploy to an internal network, and guidance is provided explaining the process to migrate from the Ambassador to new HAProxy service.

See the following Help Center topics [HCL DX 9.5 Kubernetes](../../deployment/install/container/index.md), [Monitoring](../../deployment/manage/container_configuration/monitoring/monitor_helm_deployment_metrics.md), [Deploying DX on internal network](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_internal_networking.md), and [Migrate from Ambassador to HAProxy](../../deployment/install/container/haproxy-migration/haproxy-introduction.md) for more information. 

!!!important
    In Container Update CF203, the migration from Ambassador to HAProxy must be completed as a required step, in preparation for the removal of Ambassador in the upcoming Container Update release. Refer to the following links for guidance on the migration.

See the following Help Center topics for more information:

- [HCL DX 9.5 Helm deployment](../../get_started/plan_deployment/hybrid_deployment/index.md)
- [HAProxy overview](../../deployment/install/container/haproxy-migration/haproxy-introduction.md)
- [Migrate from Ambassador to HAProxy](../../deployment/install/container/haproxy-migration/haproxy-migration.md)

## Digital Asset Management 
Digital Asset Management (DAM) Extensibility adds capability to support user-defined custom renditions and configure transformations for assets. Updates add options to configure metadata generation specifically for MIME types and their renditions.
See the [Metadata configuration through DAM Extensibility](https://opensource.hcltechsw.com/digital-experience/cf205/productfeatures/digital_asset_mgmt/configure_dam_Metadata_configuration/) Help Center topic for more information.

## Design Studio (Beta)

Design Studio enables content managers and designers to build and style their digital site properties quickly. Available for use with DX 9.5 container-based deployments, Design Studio presents a modern, intuitive, and role-based tool aggregating all needed functions to visually assemble, curate, design, and model pages, content, and applications in DX sites. New features available with Container Update CF203 include Content list and container re-use features. 

!!! note
    Design Studio is provided for beta evaluation with HCL Digital Experience 9.5 Container Update CF203,and includes a sample DX site.  It is not yet supported for use in production deployments. 

See the [Design Studio (Beta)](../../manage_content/design_studio/index.md) Help Center topic for more information. 

## Configure Content Composer to Virtual Portals 

Instructions to configure Content Composer to Virtual Portals is available.  See [Enable or Disable Content Composer in Virtual Portals](../../manage_content/wcm_authoring/content_composer/installation/configure_cc_virtual_portals.md) for more information. 

## Personalization REST APIs

Personalization Visibility Rules REST APIs adds an anonymous use case sample and updates, and ability to apply Dynamic Properties. New Profile Create Rule APIs and update based on UUIDs are also added.

See [Personalization Rules APIs](../../manage_content/pzn/pzn_apis/pzn_rest_API_explorer/pzn_rules_api/index.md) for more information.

## Customize the Site Manager Interface 
Guidance and examples are added to customize the Site Manager interface to support specific site and content management requirements.  See the following Help Center topics for more information:

- HCL DX 9.5: [Customizing the Site Manager User Interface](../../build_sites/create_sites/site_prep_content_author/prep_site_toolbar/Customize_Site_Manager_User_Interface.md)

- HCL DX 8.5 and 9.0: [Customizing the Site Manager User Interface](https://help.hcltechsw.com/digital-experience/8.5/admin-system/epc_custom_sm.html)

## Notice of deprecation and replacement of Document Conversion Services
Document Conversion Services components in HCL Digital Experience software will be updated and replaced in 2022 in a subsequent HCL DX CF Update release. HCL Digital Experience will remove the third-party component providing these capabilities, supplied by Oracle, and replace with HCL supported functions. After that point, HCL Digital Experience v8.5, v9 and v9.5 Container Update and CF releases will include the newer HCL supported component. 

See the [Replacement of DCS component](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0096908){:target="_blank"} knowledge article for additional information.

## Access the latest HCL Digital Experience 9.5 Education Materials on HCL Software Academy
The HCL Software Academy offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience section](https://academy.hcltechsw.com/#HCLDXLearningJourneys) of the HCL Software Academy and [What’s New for Digital Experience section](https://academy.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) for more information.



