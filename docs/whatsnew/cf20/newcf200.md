# What's new in CF200

This HCL Digital Experience 9.5 Container Update and CF200 release includes updated releases of HCL DX core Portal and Web Content Manager, Content Composer, Digital Asset Management, Experience API, Design Studio \(Beta\), new Helm deployment operations for container deployments and migration from Operator deployments, updated CICD release process artifacts, new DX API and Explorer services for Personalization, Search and User and Groups REST APIs, new Digital Experience 9.5 Demo Packs on HCL Sofy, new ‘How To’ videos, and more.

This site describes new features in each release. Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17){:target="_blank"} and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){:target="_blank"} for the list of software fixes, including Container Update releases. 

You can access product software at [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release){:target="_blank"}. See [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2){:target="_blank"} for more information.

You can access the latest software requirements and updates that support HCL Digital Experience solutions from the HCL Support pages topic: [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03). 

## Design Studio \(Beta\)

Design Studio enables content managers and designers to build and style their digital site properties quickly. Available for use with DX 9.5 container-based deployments, Design Studio presents a modern, intuitive, and role-based tool aggregating all needed functions to visually assemble, curate, design, and model pages, content, and applications in DX sites. New features available with Container Update CF200 include Page creation shortcuts, Delete Site from Overview menu, Define Site base stylesheet, Rename Content container and more.

!!!note
        Design Studio is provided for beta evaluation with HCL Digital Experience 9.5 Container Update CF200, and includes a sample DX site. It is not yet supported for use in production deployments.

See the [Design Studio \(Beta\)](https://help.hcltechsw.com/digital-experience/9.5/design_studio/design_studio_overview.html){:target="_blank"}<!-- (../design_studio/design_studio_overview.md) --> Help Center topic for more information. 

## Deploy HCL DX 9.5 Container Update to container platforms using Helm

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. Beginning with Container Update CF200, new servies and updates include support for Sidecars for logging of Remote Search, define central logs location, Incubator section for future DX 9.5 Container Update features, Configuration of labels and annotations, also environment variables for different DX resources, Use of  Persistent Volumes for DX 9.5 Core, Digital Asset Management, and Persistence services file storage, migration process for the Core profile from Operator to Helm deployment, and Helm based Version to Version Update process.

!!!important
        Beginning with HCL DX Container Update CF200, use of the Operator \(dxctl\) method of container deployment is not supported. Customers should use Helm deployments and migrate existing Operator-based deployments to Helm.

See the [HCL DX 9.5 Helm deployment](../../get_started/architecture_overview/kubernetes_deployment/index.md) topic for more information. 

## Digital Asset Management

New Digital Asset Management \(DAM\) staging support enables administrators to stage and synchronize DAM assets from an authoring environment \(source environment/publisher\) to multiple rendering environments \(target environment/subscriber\), using DXClient.

See the [DAM staging](../../manage_content/digital_assets/usage/staging_dam/dam_subscription_staging.md) Help Center topic for more information.

Support to migrate from the old to new Digital Asset Management database in the Helm-based deployments. See the [Migrate to new DAM DB in Helm-based deployments](../../deployment/install/container/operator-migration/helm_dam_migration_newDB.md) Help Center topic for more information.

## Enhancements to DXClient

The HCL Digital Experience 9.5 DXClient and DXConnect servlet provides developers and administrators an approach to deploy changes or improvements to the HCL Digital Experience platform, and to automate processes in the development and delivery process. Updates include process definitions to automate Export or Import of Web Content Manager libraries from source server to target server location, also ability to generate differential reports for DX Server configurations.

See the [DXClient and DXConnect tooling supporting CICD release processes](../../extend_dx/development_tools/dxclient/index.md) topic for more information.

## New User and Groups REST API Explorer

The remote PUMA SPI gives you access to user profiles through REST services. It provides a remote interface for user and group management for the configured HCL DX user repository. Beginning with HCL DX 9.5 Container Update and CF 199, a new API explorer is available that allows developers using the Portal User Interface APIs to explore and test these APIs. See the Help Center topic [Remote REST service for PUMA](../../extend_dx/apis/puma_spi/remote_rest_service_for_puma/uprof_rest.md) for additional information.

## New Personalization REST APIs and Explorer

Beginning with HCL DX 9.5 Container Update and CF200, a new API explorer is available that allows developers using the new Digital Experience Personalization REST APIs to explore and test these APIs. See the [Digital Experience Personalization](../../get_started/product_overview/personalization.md) Help Center topic for more information.

## New Search REST APIs Explorer

The Digital Experience Search REST API provides developers programmatic access to search indexed Digital Experience content and web pages. Beginning with Container and CF Update CF200, a new Digital Experience Search REST API Explorer allows developers to explore and test the Digital Experience Search REST APIs. See the [HCL Digital Experience Search REST API Specification](../../build_sites/search/usage/search-rest-api/search.md) Help Center topic for more information.

## Access and Deploy HCL Digital Experience 9.5 on HCL Sofy

[HCL SoFy](https://www.hcltechsw.com/sofy/catalog) is a next generation software development platform that accelerates deployment and integration of cloud-native products through the application of cloud-centered technologies and practices. Using HCL SoFy to access and deploy HCL Digital Experience 9.5, and other HCL software offerings and demo packs, you can quickly gain hands-on experience working with these cloud-native solutions. See the [Deploying HCL Digital Experience 9.5 with HCL Solution Factory \(SoFy\)](https://help.hcltechsw.com/digital-experience/9.5/containerization/hybrid_deployment_HCL_SoFy.html){:target="_blank"}<!-- (../containerization/hybrid_deployment_HCL_SoFy.md) --> Help Center topic for more information.

## New How-To Video

Take advantage of step-by-step guidance for HCL Digital Experience practitioners presented in articles and videos included in HCL Digital Experience Help Center topics.

**New**: Learn how to manage and monitor HCL DX 9.5 Container Deployment Liveliness and Readiness probes. See the Help Center topic: [Operations using Helm](../../deployment/install/container/helm_deployment/update_helm_deployment.md).

## End of Support for HCL Digital Experience Deprecated Features

The following list of HCL Digital Experience deprecated features will reach end of support beginning with HCL Digital Experience Container update and CF 200. Reference the Help Center topic [Deprecated features and themes for HCL Digital Experience 9.5](../deprecated_features.md).

<!-- ???info "Related information:"
    - [DAM staging](../containerization/dam_subscription_staging.md)
    - [Deploying HCL Digital Experience 9.5 with HCL Solution Factory \(SoFy\)](../containerization/hybrid_deployment_HCL_SoFy.md)
    - [Design Studio \(Beta\)](../design_studio/design_studio_overview.md)
    - [DXClient and DXConnect tooling supporting CICD release processes](../containerization/dxclient.md)
    - [Remote REST service for PUMA](../dev/uprof_rest.md)
    - [Digital Experience Personalization](../pzn/pzn_overview.md)
    - [HCL Digital Experience Search REST API Specification](../search-rest-api/search.md)
    - [Deprecated features and themes for HCL Digital Experience 9.5](../reference/newly_deprecated_features_and_themes.md) -->
