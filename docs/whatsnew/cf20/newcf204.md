# What's new in CF204

The HCL Digital Experience 9.5 Container Update and CF204 release includes new Helm support for File patterns in sidecar logging, Proxy link for CW-Profile administration console, and Ambassador replacement with HA Proxy. The release also adds updates to DAM Export and Import configuration, deprecation of select Digital Asset Management APIs and replacement with Plugin extensibility settings, new Personalization API selection rules, Instructions to back up Document Conversion Services including use with Remote Search, new complementary DX training modules in the HCLSoftware U, and more.

Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17) and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases. Product software can be accessed from the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). Go to this [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2) for more information.
The following features and updates are available to customers installing HCL Digital Experience Container Update CF204 on supported container platforms:

## Notice of deprecation and replacement of Document Conversion Services
Document Conversion Services components in the HCL Digital Experience software will be updated and replaced in the HCL DX CF205 release. HCL Digital Experience will remove the DCS component supplied by Oracle, and replace it with HCL supported functions. After that point, HCL Digital Experience v8.5, v9.0, and v9.5 Container Update and CF releases will include the newer HCL supported component.
For more information, see the [Replacement of DCS component](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0096908) knowledge article.

!!! Important "Replacement of HCL Digital Experience v8.5, v9.0, and v9.5 base installers and Removal of CFs prior to CF205 due to Oracle DCS deprecation"
    
    On August 20, 2022, [HCL Software License & Delivery Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344) (Flexnet) and repositories [managed by Immix Group for Federal customers](https://support.hcltechsw.com/csm?id=federal) will remove all CFs prior to CF205 ([CF01 – CF204](https://help.hcltechsw.com/digital-experience/9.5/overview/soft_fixes95.html)). HCL will also replace the HCL Digital Experience v[8.5](https://help.hcltechsw.com/digital-experience/8.5/welcome/wp_welcome.html), v[9.0](https://help.hcltechsw.com/digital-experience/9.0/welcome/wp9_welcome.html), and v[9.5](https://help.hcltechsw.com/digital-experience/9.5/welcome/wp95_welcome.html) base installers that contain the Oracle supplied Document Conversion Services component. The HCL Software License & Delivery Portal  repositories will contain only the latest HCL Digital Experience v8.5, v9.0, and v9.5 base installers and Container Update and CF versions, which will contain the HCL supplied Document Conversion Services component.

    !!! attention 
        CFs versions prior to CF205 of the HCL Digital Experience 8.5, 9.0, and 9.5 base installers and Container Update and CF releases will not be available for download after August 20, 2022.


## Deploy HCL DX 9.5 Container Update to container platforms using Helm
Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. Beginning with Container Update CF203, the Ambassador shipped as part of the DX Helm deployment is deprecated and a required process to migrate from the Ambassador to HA Proxy Service is provided.  Beginning with CF204, the HAProxy should be used in your DX deployments on Kubernetes. New Helm support for File patterns in sidecar logging, and Proxy link for CW-Profile administration console are provided.

See the following Help Center topics [Migrate from Ambassador to HAProxy](../../deployment/install/container/haproxy-migration/haproxy-introduction.md), [HCL DX 9.5 Kubernetes](../../deployment/install/container/index.md) and [Configure Core sidecar logging](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_core_sidecar_log.md) for more information.

## Personalization REST APIs
Personalization Selection REST API rules add updates to Profiler and Selection Rules, and new Embedded Web Content Selection. See the [Personalization REST API explorer](../../manage_content/pzn/pzn_apis/pzn_rest_API_explorer/index.md) and [Personalization Rules APIs](../../manage_content/pzn/pzn_apis/pzn_rest_API_explorer/pzn_rules_api/index.md) topics for more information.

## Deprecation of selected Digital Asset Management APIs
Select Digital Asset Management APIs are deprecated as of CF204 and replaced by configuration of Plugin Extensibility defined to Config Map settings. See the following Help Center topics for more information:

- HCL DX 9.5 Experience API - [Digital Asset Management API](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/)
- HCL DX 8.5 – 9.5 [Deprecated Features and Services](../deprecated_features.md)

## Updates to Digital Asset Management Export Import (DAM EXIM) with DXClient
Export path attributes are updated in CF 204. See the [DAM Assets Export and Import (EXIM)](../../manage_content/digital_assets/usage/managing_dam/dam_exim.md) Help Center topic for more information.

## Instructions to back up Document Conversion Services
[Document Conversion Services](../../manage_content/wcm_authoring/dcs/index.md) components in HCL Digital Experience software will be updated and replaced in 2022 in a subsequent HCL DX CF Update release. HCL Digital Experience will remove the third-party component providing these capabilities, supplied by Oracle, and replace with HCL supported functions. After that point, HCL Digital Experience v8.5, v9 and v9.5 Container Update and CF releases will include the newer HCL supported component. Instructions to back up Document Conversion Services including use with Remote Search are provided. Refer to the following [HCL Digital Experience support Knowledge Article](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0096908) for and Help Center topic [Creating a Backup of Document Conversion Services](../../manage_content/wcm_authoring/dcs/dcs_backup.md) for additional information. 


## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. New **What’s New in the latest DX CF** release modules are available for Digital Experience business users, developers, and administrators. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/#HCLDXLearningJourneys) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
