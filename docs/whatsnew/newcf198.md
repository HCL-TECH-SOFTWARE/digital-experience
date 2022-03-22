# What's new in Container Update CF198?

This HCL Digital Experience 9.5 Container Update and CF198 release includes new releases of HCL DX core Portal and Web Content Manager, Content Composer, Digital Asset Management, Experience API, Design Studio \(Beta\), new Helm deployment operations for container deployments, updated CICD release process artifacts, the new Site Manager Custom Layout Editor, HCL Digital Experience Technical Articles, ‘How To’ videos, and more.

Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17) and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases. Product software can be accessed from the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). Go to this [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2) for more information.

The latest Software Requirements and Updates supporting HCL Digital Experience solutions may be accessed from the HCL Support pages, [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) topic.

## Design Studio \(Beta\)

Design Studio enables content managers and designers to build and style their digital site properties quickly. Available for use with DX 9.5 container-based deployments, Design Studio presents a modern, intuitive, and role-based tool aggregating all needed functions to visually assemble, curate, design, and model pages, content, and applications in DX sites. New features available with the Container Update CF198 release include the ability to create new DX sites, reading and updating site metadata, accessing site and page UUID and URLs, and client-side logging services.

**Note:** Design Studio is provided for beta evaluation with HCL Digital Experience 9.5 Container Update CF198, and includes a sample DX site.  It is not yet supported for use in production deployments.

See the [Design Studio \(Beta\)](../design_studio/design_studio_overview.md) topic for more information. 

## Deploy HCL DX CF198 to container platforms using Helm

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. Support for hybrid deployments is provided, enabling to update from HCL DX 9.5 CF197 to CF198 in the Red Hat OpenShift, Microsoft Azure Elastic Kubernetes Service \(AKS\) and Amazon Elastic Kubernetes Service \(EKS\) platforms.

See the [HCL DX 9.5 Helm deployment](../containerization/helm.md) topic for more information.

## New HCL Digital Experience 9.5 Release Artifacts supporting CICD release processes

The HCL Digital Experience 9.5 DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform, and automate processes in the development and delivery process. Updates delivered in CF198 include process definitions to automate select IBM WebSphere Application Server settings during deployment, generate import and export lists of virtual portals, and import and export personalization rules.

See the [DXClient and DXConnect tooling supporting CICD release processes](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) topic for more information.

## New HCL Digital Experience Site Manager Custom Layout Editor

Beginning with HCL Digital Experience CF198, a Custom Layout Editor is available for use with HCL DX Site Manager capabilities, reducing custom development requirements for site designers implementing custom layouts in DX site pages.

See the [Using the Digital Experience Custom Layout Editor](../panel_help/custom_layout_editor.md) topic for more information.

## New Experience APIs

New HCL Experience Web Content Manager REST APIs are available for new menu component update, collection responses conversion utilities, the ability to use the page editor to edit elements inline and update metadata, set locations for sites, set HTML tags for text elements, and more.

See the [HCL DX Experience API](../open_api/openapi_overview.md) topic for more information



## Rationalized CF release versioning

Beginning with HCL Digital Experience CF196, single versioning is used for both container and on-premise Combined Cumulative Fixes \(CFs\). This means that fixes for both deployments are included into one CF deliverable. And although the versioning is the same, CFs are packaged separately for on-premises and container deployments.

See the [CF release versioning and update path](../install/rm_cf.md#cf_release_versioning_update) topic for more information.

## New HCL Digital Experience ‘How To’ Videos

Take advantage of new step-by-step guidance for HCL Digital Experience practitioners presented in articles and videos from the following HCL Digital Experience Help Center topics:

-   [Video: Creating an HCL Digital Experience 9.5 CF196 cluster](../install/rm_cluster_parent.md)
-   [Step-by-step guide: How to deploy HCL DX Container update CF197 and later to Microsoft Azure Kubernetes Service](../containerization/helm_install_commands.md)

## HCL Digital Experience 9.5 Container Platform Support Matrix

View the latest Kubernetes and OpenShift platforms tested and supported for specific HCL Digital Experience 9.5 Container Update deployments.

See the [HCL Digital Experience 9.5 Container Platform Support Matrix](../containerization/c_kubesupportstatement.md) topic for more information.

**Parent topic:**[Container Update releases 9.5](../overview/container_update_releases.md)

