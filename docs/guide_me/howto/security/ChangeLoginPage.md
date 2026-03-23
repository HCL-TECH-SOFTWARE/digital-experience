# How To Change the Login Page

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

When accessing .../wps/myportal you would like to be directed to a custom login page instead of the default login page.  This document describes the prodedure for this configuration.

## Instructions
When you request a protected resource (a URL with a security constraint, in this case .../wps/myportal), WebSphere Application Server checks the web.xml file within the wps.war and sends you to what it believes to be the login page, .../wps/redirect (HCL Portal's redirect servlet). The redirect servlet identifies the login page by unique name and redirects you there.

By default, this unique name is wps.Login, as determined by the Administrator Unique Names Mapping Service:

[Administrator Unique Names Mapping Service](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/srvcfgref_uniq_name.md){target="_blank"}

So, if you want users to be directed somewhere else, you have two options:

**Option 1:** Change the property value of LOGIN in the Administrator Unique Names Mapping service to point to your custom login page.

**Option 2:** Remove the unique name wps.Login from the default login page and assign it to your custom login page instead.
