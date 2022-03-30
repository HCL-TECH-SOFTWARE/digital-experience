# What's new in Container Update CF202?  9.5 Containers

This HCL Digital Experience 9.5 Container Update and CF202 release includes updated releases of HCL DX core Portal and Web Content Manager, Content Composer, Digital Asset Management, Experience API, and Design Studio \(Beta\) components. The release also includes updated CICD release process artifacts, new Remote Model REST APIs, Personalization REST APIs, updated Helm deployment guidance to create Persistent Volume Claims for DX Core, configure credentials, also new HCL Digital Experience Cloud Native 9.5 offering, new Digital Experience How-To Videos and Lab exercises, and more.

Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17) and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases. Product software can be accessed from the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). Go to this [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2) for more information.

The latest Software Requirements and Updates supporting HCL Digital Experience solutions may be accessed from the HCL Support pages, [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) topic.

The following features and updates are available to customers installing HCL Digital Experience on supported on-premises and container platforms, effective with HCL Digital Experience CF202:

## Deploy HCL DX 9.5 Container Update to container platforms using Helm

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. Beginning with Container Update CF202, guidance is added to configure or adjust default credentials for Helm deployments, and configure additional DX Core Persistent Volume Claims \(PVCs\).

See the following Help Center topics for more information:

-   [HCL DX 9.5 Helm deployment](../containerization/helm.md)
-   [Configure PersistentVolumeClaims \(PVCs\)](../containerization/helm_persistent_volume_claims.md#)
-   [Additional Helm Tasks](../digital_asset_mgmt/digital_asset_mgmt_overview.md)

## Digital Asset Management

New Digital Asset Management \(DAM\) capability enables developers and release managers to use the DXClient capability to Export and Import DAM assets from source to a File system and Import from File system to target DX 9.5 deployment. Enhancements are also available for content authors to access DAM asset versions by name and as reflected in Friendly URLs.

See the [Deploy DX components using HCL DXClient and DXConnect](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) and [Digital Asset Management Help Center](../digital_asset_mgmt/digital_asset_mgmt_overview.md) topics for more information.

## Design Studio \(Beta\)

Design Studio enables content managers and designers to build and style their digital site properties quickly. Available for use with DX 9.5 container-based deployments, Design Studio presents a modern, intuitive, and role-based tool aggregating all needed functions to visually assemble, curate, design, and model pages, content, and applications in DX sites. New features available with Container Update CF202 include baseline stylesheet upload and download in Site overview, guidance when styling elements, replacing images, using the Layers panel, and re-use of Content containers.

**Note:** Design Studio is provided for beta evaluation with HCL Digital Experience 9.5 Container Update CF202, and includes a sample DX site.  It is not yet supported for use in production deployments. 

See the [Design Studio \(Beta\)](../design_studio/design_studio_overview.md) Help Center topic for more information. 

## Digital Experience Cloud Native 9.5 offering

Beginning with [HCL Digital Experience 9.5 Container Update CF202](new_cf_95.md), HCL Digital Experience Cloud Native 9.5 is available as a new offering option for customers to deploy the cloud-native Digital Experience 9.5 components and services on the Kubernetes container environments. HCL Digital Experience Cloud Native 9.5 is available with cloud-friendly subscription pricing.

See the *Digital Experience Cloud Native 9.5 details* in the [Digital Experience Overview](intro_container.md) Help Center topic.

## Digital Experience REST API Explorers

Developers can accelerate development tasks using a set of Explorers provided for REST APIs available for use with HCL Digital Experience deployments to on premises platforms, and HCL Digital Experience 9.5 deployments to supported Kubernetes Container platforms. Developers can also initiate and test transactions or other capabilities using the DX REST API explorers.

See the [Digital Experience REST API Explorers](../dev/api_explorers.md) Help Center topic for more information.

## Digital Experience Remote Model REST API Explorer

The Digital Experience Remote Model REST API Explorer can be used by developers creating solutions for HCL DX on premises and HCL DX 9.5 container deployments to explore and test the Remote Model APIs.

See the [Digital Experience Remote Model REST API Explorer](../dev/remote_model_rest_api.md) Help Center topic for more information.

## HCL Digital Experience Release Artifacts supporting CICD release processes

The HCL Digital Experience DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform, and to automate processes in the development and delivery process. Updates include ability to Export and Import DAM assets from source to a File system and Import from File system to target DX 9.5 deployment, and DXConnect parameter updates.

See the [Deploy DX components using HCL DXClient and DXConnect](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) Help Center topic for more information.

## Personalization REST APIs

Personalization REST APIs supporting Personalization Folder Update and Delete operations are available with HCL Digital Experience Container Update and CF202.

See the Help Center topics [Personalization Folder APIs](../pzn/dev_pzn_folders_api.md#) and [Personalization Rules APIs](../pzn/dev_pzn_rules_api.md) for more information.

## Track User sessions in Digital Experience Deployments using Google Analytics

Guidance is added to the Active Site Analytics integration for Google Analytics to track user sessions in Digital Experience deployments.

See the [Integrate Google Analytics with HCL Digital Experience](../install/integrate_google_analytics.md) Help Center topic for more information.

## Updates to Woodburn Studio Demo Site customizations during upgrades

A new optional process is added to retain customizations made to the [Woodburn Studio demonstration site](../woodburn_studio/update_pages_optional.md) during a Digital Experience upgrade.

See the [Upgrade to Woodburn Studio Pages Optional](../woodburn_studio/update_pages_optional.md) Help Center topic for additional information.

## Access the latest HCL Digital Experience 9.5 Education Materials on HCL Software Academy

The HCL Software Academy offers technical education for the HCL Software portfolio of products, organized by practitioner role. New modules are available for Digital Experience developers and administrators.

See the [HCL Digital Experience section](https://academy.hcltechsw.com/#HCLDXLearningJourneys) of the HCL Software Academy and [What’s New for Digital Experience section](https://academy.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) for more information.

## New Digital Experience 9.5 How-To Video:

[Update HCL DX 9.5 Container to a later DX version using Helm](../containerization/helm_deployment.md)

**Parent topic:**[Container Update releases  9.5](../overview/container_update_releases.md)

