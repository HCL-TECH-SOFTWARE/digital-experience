# What's new in CF203

HCL Digital Experience 9.5 Container Update and CF203 release includes new Design Studio (Beta) Content list and container reuse features, Helm configuration of metrics enablement, deploy to internal network, and Ambassador to HA Proxy migration support. The release also adds support for DAM metadata configurations using Extensibility functions, Content Composer in Virtual Portal configuration, Personalization Visibility rules in anonymous use case sample and updates, support for Dynamic Properties, Profiler Rule and update, options to customize the DX Site Manager interface, Notice of deprecation and replacement of Document Conversion services notice, new complementary DX training modules in the HCL Software Academy, and more.

The following features and updates are available to customers installing HCL Digital Experience CF203 on supported container platforms:
<!-- ## Personalization REST APIs 

Personalization Visibility Rules REST APIs adds an anonymous use case sample and updates, and the ability to apply Dynamic Properties. New Profile Create Rule APIs and update based on UUIDs are also added.
See the Help Center topic and [Personalization Rules APIs](https://help.hcltechsw.com/digital-experience/9.5/pzn/dev_pzn_rules_api.html){:target="_blank"}<!-- (../pzn/dev_pzn_rules_api.md) -->
## Deploy HCL DX 9.5 Container Update to container platforms using Helm 

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to the supported container platforms using Helm. Deployment using the Helm Chart can provide administrators more transparency and control in the deployment operations. 

Beginning with Container Update CF203, the Ambassador shipped as part of the DX Helm deployment is deprecated and will be removed in a subsequent HCL DX 9.5 Container Update release. HAProxy is taking its place and replaces functions performed by the Ambassador in the DX namespace.

In CF203, Helm configuration settings for metrics are enabled by default, new guidance is added to deploy to an internal network, and guidance is provided explaining the process to migrate from the Ambassador to new HAProxy service.

See the following Help Center topics [HCL DX 9.5 Kubernetes](../../platform/kubernetes/overview.md), [Monitoring](../../platform/kubernetes/operations/monitoring/monitor_helm_deployment_metrics.md), [Deploying DX on internal network](../../platform/kubernetes/deployment/preparation/optional_internal_networking.md), and [Migrate from Ambassador to HAProxy](../../platform/kubernetes/haproxy-migration/haproxy-introduction.md) for more information. 

!!!important
    In Container Update CF203, the migration from Ambassador to HAProxy must be completed as a required step, in preparation for the removal of Ambassador in the upcoming Container Update release. Refer to the following links for guidance on the migration.

See the following Help Center topics for more information:

- [HCL DX 9.5 Helm deployment](../../platform/kubernetes/architecture/helm_overview.md)
- [HAProxy overview](../../platform/kubernetes/haproxy-migration/haproxy-introduction.md)
- [Migrate from Ambassador to HAProxy](../../platform/kubernetes/haproxy-migration/haproxy-migration.md)

## Digital Asset Management 
Digital Asset Management (DAM) Extensibility adds capability to support user-defined custom renditions and configure transformations for assets. Updates add options to configure metadata generation specifically for MIME types and their renditions.
See the [Metadata configuration through DAM Extensibility](https://help.hcltechsw.com/digital-experience/9.5/containerization/configure_dam_Metadata_configuration.html){:target="_blank"}<!-- (../containerization/configure_dam_Metadata_configuration.md)--> Help Center topic for more information.

## Design Studio (Beta)

Design Studio enables content managers and designers to build and style their digital site properties quickly. Available for use with DX 9.5 container-based deployments, Design Studio presents a modern, intuitive, and role-based tool aggregating all needed functions to visually assemble, curate, design, and model pages, content, and applications in DX sites. New features available with Container Update CF203 include Content list and container re-use features. 

!!! note
    Design Studio is provided for beta evaluation with HCL Digital Experience 9.5 Container Update CF203,and includes a sample DX site.  It is not yet supported for use in production deployments. 

See the [Design Studio \(Beta\)](https://help.hcltechsw.com/digital-experience/9.5/design_studio/design_studio_overview.html){:target="_blank"}<!-- (../design_studio/design_studio_overview.md)--> Help Center topic for more information. 

## Configure Content Composer to Virtual Portals 

Instructions to configure Content Composer to Virtual Portals is available.  See [Content Composer - Configure to Virtual Portals](https://help.hcltechsw.com/digital-experience/9.5/content_composer/configure_cc_virtual_portals.html){:target="_blank"} for more information. 

## Personalization REST APIs

Personalization Visibility Rules REST APIs adds an anonymous use case sample and updates, and ability to apply Dynamic Properties. New Profile Create Rule APIs and update based on UUIDs are also added.

See [Personalization Rules APIs](https://help.hcltechsw.com/digital-experience/9.5/pzn/dev_pzn_rules_api_2.html){:target="_blank"} for more information.

## Customize the Site Manager Interface 
Guidance and examples are added to customize the Site Manager interface to support specific site and content management requirements.  See the following Help Center topics for more information:
- HCL DX 9.5: [Customizing the Site Manager User Interface](https://help.hcltechsw.com/digital-experience/9.5/admin-system/Customize_Site_Manager_User_Interface.html){:target="_blank"}
- HCL DX 8.5 and 9.0: [Customizing the Site Manager User Interface](https://help.hcltechsw.com/digital-experience/8.5/admin-system/Customize_Site_Manager_User_Interface.html){:target="_blank"}

## Notice of deprecation and replacement of Document Conversion Services
Document Conversion Services components in the HCL Digital Experience software will be updated and replaced in the HCL DX CF205 release. HCL Digital Experience will remove the DCS component supplied by Oracle, and replace it with HCL supported functions. After that point, HCL Digital Experience v8.5, v9.0, and v9.5 Container Update and CF releases will include the newer HCL supported component.
For more information, see the [Replacement of DCS component](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0096908) knowledge article.

!!! Important "Replacement of HCL Digital Experience v8.5, v9.0, and v9.5 base installers and Removal of CFs prior to CF205 due to Oracle DCS deprecation"
    
    On August 20, 2022, [HCL Software License & Delivery Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344) (Flexnet) and repositories [managed by Immix Group for Federal customers](https://support.hcltechsw.com/csm?id=federal) will remove all CFs prior to CF205 ([CF01 – CF204](https://help.hcltechsw.com/digital-experience/9.5/overview/soft_fixes95.html)). HCL will also replace the HCL Digital Experience v[8.5](https://help.hcltechsw.com/digital-experience/8.5/welcome/wp_welcome.html), v[9.0](https://help.hcltechsw.com/digital-experience/9.0/welcome/wp9_welcome.html), and v[9.5](https://help.hcltechsw.com/digital-experience/9.5/welcome/wp95_welcome.html) base installers that contain the Oracle supplied Document Conversion Services component. The HCL Software License & Delivery Portal  repositories will contain only the latest HCL Digital Experience v8.5, v9.0, and v9.5 base installers and Container Update and CF versions, which will contain the HCL supplied Document Conversion Services component.

    !!! attention 
        CFs versions prior to CF205 of the HCL Digital Experience 8.5, 9.0, and 9.5 base installers and Container Update and CF releases will not be available for download after August 20, 2022.


## Access the latest HCL Digital Experience 9.5 Education Materials on HCL Software Academy
The HCL Software Academy offers technical education for the HCL Software portfolio of products, organized by practitioner role. New “What’s New in the latest DX CF release’ modules are available for Digital Experience business users, developers and administrators. See the HCL Digital Experience section of the HCL Software Academy and What’s New for Digital Experience section for more information.



