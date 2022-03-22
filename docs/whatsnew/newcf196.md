# What's new in Container Update CF196?

This HCL Digital Experience 9.5 Container Update release includes new releases of HCL Digital Experience 9.5 core Portal and Web Content Manager, Content Composer, Digital Asset Management, and Experience API images, and a beta preview release of Design Studio. New and updated feature references are detailed here.

Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17) and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases. Product software can be accessed from the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). Go to this [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2) for more information.

The latest Software Requirements and Updates supporting HCL Digital Experience solutions may be accessed from the HCL Support pages, [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) topic.

**Note:** For new capabilities that are available for HCL DX on-premise deployments, see [What's new in the CF196](new_noncf196.md) topic.

## Design Studio \(Beta\)

Design Studio enables content managers and designers to build and style their digital site properties quickly. Available for use with DX 9.5 container-based deployments, Design Studio presents a modern, intuitive, and role-based tool aggregating all needed functions to visually assemble, curate, design, and model pages, content, and applications in DX sites.

**Note:** Design Studio is provided for beta evaluation with HCL Digital Experience 9.5 Container Update CF196. **It is not yet supported for use in production deployments**.

See the [Design Studio \(Beta\)](../design_studio/design_studio_overview.md) topic for more information.

## Deploy HCL DX CF196 to container platforms using Helm

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators a larger degree of transparency and control in deployment operations, and is available for use with the Google Kubernetes Engine \(GKE\) platform with Container Update CF196.

See the [HCL DX 9.5 Helm deployment](../containerization/helm.md) topic for more information.

## Deploy HCL DX 9.5 using Docker Compose

Beginning with HCL DX 9.5 Container Update CF196, administrators and developers can deploy HCL DX 9.5 using Docker Compose, for non-production use. Docker Compose scripts for HCL DX 9.5, installation, and configuration instructions for non-production use are available in the [HCL Software Github](https://github.com/HCL-TECH-SOFTWARE) page.

See the [Docker image deployment using Docker Compose](../containerization/docker_compose.md) topic for more information.

## Web Content Manager Multilingual Solution Enhancements

The [HCL Web Content Manager Multilingual Solution](../wcm/wcm_mls.md) is a set of tools used to manage translated versions Web Content Manager content for localized and regionalized websites. Beginning with the HCL Digital Experience 9.5 Container Update CF196 release, support is added to import and export multiple libraries to a format supported by a translation service, support a maximum field length, export changed contents from a library, and export to projects. A new option to switch the language in an HCL DX 9.5 mobile view is also available.

See the [How to export and import WCM library content using DXClient](../wcm/wcm_mls_export_import.md) and [The Woodburn Studio demo site](../woodburn_studio/woodburn_studio.md) topics for more information.

## New HCL Digital Experience 9.5 Release Artifacts supporting CICD release processes

The HCL Digital Experience 9.5 DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform, and automate processes in the development and delivery process. Updates include a new DXClient Docker image, and new release artifact types supporting shared libraries, obtain failed syndication reports are provided in Container Update CF196.

See the [DXClient and DXConnect tooling supporting CICD release processes](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) topic for more information.

## HCL Digital Experience 9.5 Container Platform Support Matrix

View the latest Kubernetes and OpenShift platforms tested and supported for specific HCL Digital Experience 9.5 Container Update deployments.

See the [HCL Digital Experience 9.5 Container Platform Support Matrix Help Center](../containerization/c_kubesupportstatement.md) topic for more information.

## New HCL Digital Experience ‘How To’ Videos

Take advantage of new step-by-step guidance for HCL Digital Experience practitioners presented in new videos and webinars. See the following HCL Digital Experience Help Center topics:

-   [Configuring user access permissions to Digital Asset Management assets](../digital_asset_mgmt/manage_collections.md)
-   [Deep dive: Progressive Web Applications with HCL DX 9.5](../install/progressive_web_applications.md)
-   [Content Security Policy with HCL DX 9.5](../security/content_security_policy.md)

**Parent topic:**[Container Update releases 9.5](../overview/container_update_releases.md)

