# How to remove state information from the URL in HCL Digital Experience?

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

In HCL Digital Experience by default state information is generated when accessing any Portal page. When a Poral page is requested by a Web-Browser, a URL may look like the following example:  

`https://myportal.com:10041/wps/portal/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8ziDVCAo4FTkJGTsYGBu7OJfjhYgbmHi7u7oYFhgL-bu4VBoJmrt7e_UaCBSbCxfhQx-vEowNSPrBCoPwqsxDTQ0t3DyMTI393M0QXoAncPS0eDAAMDCwOoAjxmFOSGRhhkOioCABL0w14!/dz/d5/L2dBISEvZ0FBIS9nQSEh/`

The text after /portal in the URL above is a generated encoded string from the Portal Server that includes the state-information of a page. (State of portlets, pages and so on). There can be requirements for a Web-Portal that such an encoded string should not be displayed to the end-users. Options exist to remove the such state-information from the URL.

## Instructions

There are three out of the box properties that might have an influence to the URL state generation, which are:  

`stateless.urls.enabled`  
`generate.stateless.urls`  
`friendly.redirect.enabled`  

A good starting point is to set these properties as following:  

`stateless.urls.enabled=true`  
`generate.stateless.urls=true`  
`friendly.redirect.enabled=false`  

For details, please check:  
[Configuration Service](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cfg_svc/?h=stateless.urls.enabled)

[Defining friendly URLs without state information for pages in your site](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/manage/siteurl_cfg/changing_siteurl/cw_navstate/mp_friendly_short_url/?h=defining+friendly+urls+without+state+information)

In addition to these three properties, it is also possible that in some situations the URL state information is still shown to End-Users when they request a page or navigate to other Portal pages. This can also happen when a portal theme uses the URLGeneration API to create stateful Portal URLs. Most of the time that will be done by using the URLGeneration-API as described at page:  
[UrlGeneration](https://help.hcl-software.com/digital-experience/9.5/CF225/build_sites/themes_skins/customizing_theme/expression_language_beans/common_beans/url_generation/)

That means, that when you still see stateful information in the URL, it may require a theme-code review/change to disable the URL state-information.

For example when the theme includes information like:

`<a href="${fn:escapeXml(node.urlGeneration.autoNavigationalState.clearScreenTemplate)}"`

and a user is clicking to such a Web-Link, state-information is still displayed. This can be prevented by changing the HTML `<a>` tag to use:

`<a href="${fn:escapeXml(node.urlGeneration.noNavigationalState)}"`
