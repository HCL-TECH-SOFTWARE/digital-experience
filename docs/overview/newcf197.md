# What's new in Container Update CF197? 9.5 Containers

This HCL Digital Experience 9.5 Container Update and CF197 release includes updated releases of HCL DX core Portal and Web Content Manager, Content Composer, Digital Asset Management and Experience API images, and an updated beta preview release of Design Studio. New and updated feature references are detailed here.

Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17) and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases. Product software can be accessed from the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). Go to this [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2) for more information.

The latest Software Requirements and Updates supporting HCL Digital Experience solutions may be accessed from the HCL Support pages, [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) topic.

## Design Studio \(Beta\)

Design Studio enables content managers and designers to build and style their digital site properties quickly. Available for use with DX 9.5 container-based deployments, Design Studio presents a modern, intuitive, and role-based tool aggregating all needed functions to visually assemble, curate, design, and model pages, content, and applications in DX sites. New services available with the Container Update CF197 release include ability to render DX site pages and updates using the sample site, Ability to use the page editor to edit elements inline and update metadata, set locations for sites, set html tags for text elements, and more.

**Note:** Design Studio is provided for beta evaluation with HCL Digital Experience 9.5 Container Update CF197, and includes a sample DX site.  It is not yet supported for use in production deployments.

See the [Design Studio \(Beta\)](../design_studio/design_studio_overview.md) topic for more information. 

## Deploy HCL DX CF197 to container platforms using Helm

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators a larger degree of transparency and control in deployment operations. Support for new HCL DX 9.5 CF197 deployments to Red Hat OpenShift, Microsoft Azure Elastic Kubernetes Service \(AKS\) and Amazon Elastic Kubernetes Service \(EKS\),and ability to update from HCL DX 9.5 version CF196 to CF197 is supported with the Google Kubernetes Engine \(GKE\) platform.

See the [HCL DX 9.5 Helm deployment](../containerization/helm.md) topic for more information.

## New HCL Digital Experience 9.5 Release Artifacts supporting CICD release processes

The HCL Digital Experience 9.5 DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform, and automate processes in the development and delivery process. Updates include new release artifact types supporting, Obtain failed Syndication reports for single or multiple items, and delete Digital Asset Management inactive schema from Persistence are provided in CF197.

See the [DXClient and DXConnect tooling supporting CICD release processes](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) topic for more information.

## HCL Digital Experience 9.5 Container Platform Support Matrix

View the latest Kubernetes and OpenShift platforms tested and supported for specific HCL Digital Experience 9.5 Container Update deployments.

See the [HCL Digital Experience 9.5 Container Platform Support Matrix](../containerization/c_kubesupportstatement.md) topic for more information.

## New HCL Digital Experience ‘How To’ Videos

Take advantage of new step-by-step guidance for HCL Digital Experience practitioners presented in new videos and webinars. See the following HCL Digital Experience Help Center topics:

-   [Updating the HCL DX 9.5 Portal & IBM WebSphere Application Server Administrator Secrets in OpenShift and Kubernetes](../containerization/update_dx_core_kubernetes_container_deployment.md)
-   [Use Docker Compose to install HCL DX 9.5 with Cloud Components for Developer Use](../containerization/docker_compose.md)

**Parent topic:**[Container Update releases 9.5](../overview/container_update_releases.md)

