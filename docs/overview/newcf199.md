# What's new in Container Update CF199? 9.5 Containers

This HCL Digital Experience 9.5 Container Update and CF199 release includes new releases of HCL DX core Portal and Web Content Manager, Content Composer, Digital Asset Management, Experience API, Design Studio \(Beta\), new Helm deployment operations for container deployments, updated CICD release process artifacts, “How To” videos, and more.

Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17) and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases. Product software can be accessed from the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). Go to this [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2) for more information.

The latest Software Requirements and Updates supporting HCL Digital Experience solutions may be accessed from the HCL Support pages, [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) topic.

## Design Studio \(Beta\)

Design Studio enables content managers and designers to build and style their digital site properties quickly. Available for use with DX 9.5 container-based deployments, Design Studio presents a modern, intuitive, and role-based tool aggregating all needed functions to visually assemble, curate, design, and model pages, content, and applications in DX sites. New features available with the Container Update CF199 release include the ability to select Web Content Manager library assets when creating sites, UI globalization, support for alternate and no context root when defining sites, and more.

**Note:** Design Studio is provided for beta evaluation with HCL Digital Experience 9.5 Container Update CF196, and includes a sample DX site.  It is not yet supported for use in production deployments.

See the [Design Studio \(Beta\)](../design_studio/design_studio_overview.md) topic for more information. 

## Migrate from HCL DX 9.5 Operator to Helm Deployments

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. Beginning with Container Update CF199, support for migration from Operator-based \(dxctl\) to Helm-based deployments is provided.

See the [HCL DX 9.5 Helm deployment](../containerization/helm.md) topic for more information.

## Digital Asset Management Staging

New Digital Asset Management \(DAM\) staging support enables administrators to stage and synchronize DAM assets from an authoring environment \(source environment/publisher\) to multiple rendering environments \(target environment/subscriber\), using DXClient.

See the [DAM staging](../containerization/dam_subscription_staging.md) topic for more information.

## New HCL Digital Experience 9.5 Release Artifacts supporting CICD release processes

The HCL Digital Experience 9.5 DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform, and to automate processes in the development and delivery process. Updates include process definitions to automate Export and Import of select IBM WebSphere Application Server Resource Provider settings during deployment, and to create Syndication relationships and credential vault settings.

See the [DXClient and DXConnect tooling supporting CICD release processes](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) topic for more information.

## End of Support for HCL Digital Experience Deprecated Features

The following list of HCL Digital Experience deprecated features will reach end of support beginning with Container update and CF200 release. Refer to the [Deprecated features and themes for HCL Digital Experience 9.5](../reference/newly_deprecated_features_and_themes.md) topic in the Help Center.

## New Experience APIs

New HCL Experience APIs are available for creating, updating and deleting Design Studio \(Beta\) sites, pages, and containers. New Web Content Manager REST V2 APIs are available for creating content templates, categories, and more.

See the [HCL Experience API](../open_api/openapi_overview.md) topic for more information.

## New REST APIs to Configure Remote Search

Beginning with HCL Digital Experience CF and Container Update CF199, additional REST services enable administrators and developers to programatically configure remote search in on-premises and container-based Digital Experience deployments. See the [Configure Remote Search using REST APIs](../containerization/REST_APIs_remote_search.md) topic for more information.

## New HCL Digital Experience ‘How To’ Videos

Take advantage of new step-by-step guidance for HCL Digital Experience practitioners presented in articles and videos from the following HCL Digital Experience Help Center topics:

-   Video: [Deploy HCL DX 9.5 Container Update using Helm](../containerization/helm_deployment.md)
-   Video: [Experience API V2 Web Content Manager REST APIs](../open_api/openapi_overview.md)

**Parent topic:**[Container Update releases 9.5](../overview/container_update_releases.md)

