# What's new in Container Update CF181?

This HCL Digital Experience 9.5 Container Update release includes new Production releases of Content Composer, Digital Asset Management, and Experience API, new WCM REST APIs, guidance to deploy OpenLDAP, Remote Search and Database transfer processes, and more.

Go to the [HCL Software Support Site](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939#CF18) for the list of software fixes, including Container Update releases. Product software can be accessed from the  [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). Go to this [Step-by-step guide to downloading DX products and accessing Customer Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878) for more information.

## Content Composer

Content Composer delivers simplified processes for creating and managing Digital Experience site content.  Users can work with Content Composer features in HCL Digital Experience 9.5 Container Update CF181 and higher releases. See  [HCL Digital Experience 9.5 Content Composer](../content_composer/cont_comp_overview.md) for details.

## Digital Asset Management

Digital Asset Management delivers a central platform to store and include rich media assets in Digital Experience site content to present engaging, consistently branded experiences across digital channels. Users can access the Digital Asset Management features in HCL Digital Experience 9.5 Container Update CF181 and higher releases. See [HCL Digital Experience 9.5 Digital Asset Management](../digital_asset_mgmt/digital_asset_mgmt_overview.md) for details.

## Experience API

The HCL Experience API is a set of OpenAPI compliant REST APIs available for customers deploying HCL Digital Experience 9.5 containers on supported Kubernetes platforms. It supports the integration and management of HCL Digital Experience content and functionality to any digital channel using any front-end development framework. The HCL Experience API includes REST APIs that serve as a wrapper around previously published HCL Digital Experience HTTP based APIs. See [HCL Experience API](../open_api/openapi_overview.md) for details.

## OpenLDAP Container integration

OpenLDAP Software is an open source implementation of the Lightweight Directory Access Protocol. The HCL Digital Experience 9.5 Container Update release CF181 and higher includes an OpenLDAP container and a customization of the operator to deploy and configure the LDAP container to the HCL Digital Experience 9.5 container deployment. See [Configure the OpenLDAP container image to the HCL Digital Experience 9.5 Container Deployment](../containerization/configure_openldap_image.md) for details.

## Transfer default Container database to IBM DB2

HCL Digital Experience 9.5 installs a copy of Derby as the default database. HCL Digital Experience administrators can apply guidance to transfer the default database configuration to IBM DB2, if preferred for use as the relational database for Digital Experience 9.5 Container deployment data. See [Transfer Digital Experience 9.5 Container default database to IBM DB2](../containerization/cw_containerdbtransfer_ibm_db2.md) for details.

## Remote Search services Docker deployment

To support search services when deployed to Docker, Digital Experience administrators can configure Remote search services. This will require some different setup and configuration steps than used to set up remote search on a non-Docker container platform. See [Deploy Remote Search services on Docker](../containerization/docker_remote_search.md) for details.

## New Digital Experience WCM Workflow REST APIs

Two new WCM REST APIs are added to handle Process Now and Remove Workflow from an item functionality. See How to use REST with drafts and workflows for details.

## New Web Content Manager Reference REST API

The new WCM Content Manager Reference REST API can be used by developers to find references to a Web Content or Digital Asset Management item identified by its UUID. See [How to use REST with content items](../wcm/wcm_rest_crud_content.md) for details.

## New Web Content Text Search REST API

The Text Search REST API Content Authors search for free form text in the Web Content Manager JCR. It is equivalent to the functionality in the Web Content Manager user interface. See [REST Query service for web content - Query parameters](../wcm/wcm_rest_adhoc.md) for details.

## New Digital Experience Core Configuration REST API

The Digital Experience Core Configuration API allows developers to retrieve Digital Experience deployment configuration settings. See [Generic reading by using REST services for Web Content Manager](../wcm/wcm_rest_crud_read.md) for details.

## Web Developer Toolkit

The Web Developer toolkit for HCL Digital Experience provides the ability to sync themes, content and script portlets \(also known as Script Applications\). It is available on the HCL Digital Experience GitHub repository. See [Web Developer Toolkit](../dev/web_developer_toolkit.md) for details.

**Parent topic:**[Container Update releases 9.5](../overview/container_update_releases.md)

