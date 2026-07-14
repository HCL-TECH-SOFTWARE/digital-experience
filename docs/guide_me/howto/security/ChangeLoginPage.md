# How to redirect users to a custom login page in HCL DX

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

By default, when a user accesses a protected server context (such as `/wps/myportal`), HCL DX redirects them to the default login page. IBM WebSphere Application Server manages this by checking the `web.xml` file in the `wps.war` archive and routing the request through the HCL DX redirect servlet (`/wps/redirect`), which identifies the target page by its unique name (default is `wps.Login`). For more information on the default unique name, refer to [Administrator Unique Names Mapping Service](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/srvcfgref_uniq_name.md).

This article describes how to change this behavior and configure a redirect to a custom login page.

## Instructions

To redirect users to a custom login page, choose one of the following options:

- Change the `LOGIN` property value in the Administrator Unique Names Mapping service to point to the custom login page.
- Remove the `wps.Login` unique name from the default login page and assign it to the custom login page.
