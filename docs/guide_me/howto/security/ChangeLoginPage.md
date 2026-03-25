# How to change the login page

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

In HCL DX, when accessing a protected server context like `/wps/myportal` a user will be redirected to the default login page, but you may want to change this to redirect users to a custom login page instead of the default one. This document describes the procedure that can be used to configure it.  

## Instructions

When a request happens to a protected resource (a URL with a security constraint, in this case the HCL DX context `/wps/myportal`), IBM WebSphere Application Server checks the web.xml file within the wps.war and sends the user to what it believes to be the login page by using `/wps/redirect` (HCL DX redirect servlet). The redirect servlet identifies the login page by unique name and redirects the user there.

By default, this unique name is `wps.Login`, as determined by the Administrator Unique Names Mapping Service:

[Administrator Unique Names Mapping Service](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/srvcfgref_uniq_name.md){target="_blank"}

If users should be redirected somewhere else, the following two options are available:

**Option 1:** Change the property value of LOGIN in the Administrator Unique Names Mapping service to point to the custom login page.

**Option 2:** Remove the unique name wps.Login from the default login page and assign it to the custom login page instead.
