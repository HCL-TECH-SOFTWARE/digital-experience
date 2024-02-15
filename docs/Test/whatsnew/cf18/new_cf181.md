# What's new in CF181

This HCL Digital Experience 9.5 Container Update release includes new Production releases of Content Composer, Digital Asset Management, and Experience API, new WCM REST APIs, guidance to deploy OpenLDAP, Remote Search and Database transfer processes, and more.

This site describes new features in each release. Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=9bd40c1f1bbf5cd0534c4159cc4bcbbd#CF17){:target="_blank"} and [HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){:target="_blank"} for the list of software fixes, including Container Update releases. 

You can access product software at [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release){:target="_blank"}. See [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878&sys_kb_id=2cde06a31b885494c48197d58d4bcbe2){:target="_blank"} for more information.

You can access the latest software requirements and updates that support HCL Digital Experience solutions from the HCL Support pages topic: [HCL Digital Experience V9.5, V9.0, and V8.5 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03).

## Content Composer

Content Composer delivers simplified processes for creating and managing Digital Experience site content.  Users can work with Content Composer features in HCL Digital Experience 9.5 Container Update CF181 and higher releases. See  [HCL Digital Experience 9.5 Content Composer](../../manage_content/wcm_authoring/content_composer/index.md) for details.

## Digital Asset Management

Digital Asset Management delivers a central platform to store and include rich media assets in Digital Experience site content to present engaging, consistently branded experiences across digital channels. Users can access the Digital Asset Management features in HCL Digital Experience 9.5 Container Update CF181 and higher releases. See [HCL Digital Experience 9.5 Digital Asset Management](../../manage_content/digital_assets/index.md) for details.

## Experience API

The HCL Experience API is a set of OpenAPI compliant REST APIs available for customers deploying HCL Digital Experience 9.5 containers on supported Kubernetes platforms. It supports the integration and management of HCL Digital Experience content and functionality to any digital channel using any front-end development framework. The HCL Experience API includes REST APIs that serve as a wrapper around previously published HCL Digital Experience HTTP based APIs. See [HCL Experience API](../../extend_dx/apis/hcl_experience_api/index.md) for details.

## OpenLDAP Container integration

OpenLDAP Software is an open source implementation of the Lightweight Directory Access Protocol. The HCL Digital Experience 9.5 Container Update release CF181 and higher includes an OpenLDAP container and a customization of the operator to deploy and configure the LDAP container to the HCL Digital Experience 9.5 container deployment. See [Configure the OpenLDAP container image to the HCL Digital Experience 9.5 Container Deployment](https://help.hcltechsw.com/digital-experience/9.5/containerization/configure_openldap_image.html){:target="_blank"}<!-- (../containerization/configure_openldap_image.md) --> for details.

## Transfer default Container database to IBM DB2

HCL Digital Experience 9.5 installs a copy of Derby as the default database. HCL Digital Experience administrators can apply guidance to transfer the default database configuration to IBM DB2, if preferred for use as the relational database for Digital Experience 9.5 Container deployment data. See [Transfer Digital Experience 9.5 Container default database to IBM DB2](https://help.hcltechsw.com/digital-experience/9.5/containerization/cw_containerdbtransfer_ibm_db2.html){:target="_blank"}<!-- (../containerization/cw_containerdbtransfer_ibm_db2.md) --> for details.

<!-- ## Remote Search services Docker deployment

To support search services when deployed to Docker, Digital Experience administrators can configure Remote search services. This will require some different setup and configuration steps than used to set up remote search on a non-Docker container platform. See [Deploy Remote Search services on Docker](../../platform/docker/docker_remote_search.md) for details. -->

## New Digital Experience WCM Workflow REST APIs

Two new WCM REST APIs are added to handle Process Now and Remove Workflow from an item functionality. See How to use REST with drafts and workflows for details.

## New Web Content Manager Reference REST API

The new WCM Content Manager Reference REST API can be used by developers to find references to a Web Content or Digital Asset Management item identified by its UUID. See [How to use REST with content items](../../manage_content/wcm_development/wcm_rest/wcm_rest_mng_content/wcm_rest_crud_content.md) for details.

## New Web Content Text Search REST API

The Text Search REST API Content Authors search for free form text in the Web Content Manager JCR. It is equivalent to the functionality in the Web Content Manager user interface. See [REST Query service for web content - Query parameters](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md) for details.

## New Digital Experience Core Configuration REST API

The Digital Experience Core Configuration API allows developers to retrieve Digital Experience deployment configuration settings. See [Generic reading by using REST services for Web Content Manager](../../manage_content/wcm_development/wcm_rest/wcm_rest_mng_content/wcm_rest_crud_read.md) for details.

## Web Developer Toolkit

The Web Developer toolkit for HCL Digital Experience provides the ability to sync themes, content and script portlets (also known as Script Applications). It is available on the HCL Digital Experience GitHub repository. See [Web Developer Toolkit](../../extend_dx/development_tools/web_developer_toolkit/web_developer_toolkit.md) for details.


