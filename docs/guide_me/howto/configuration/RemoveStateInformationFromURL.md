# How to remove state information from the URL

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

In HCL Digital Experience (DX), state information is generated by default when accessing any Portal page. When a Portal page is requested by a web browser, a URL may look like the following example:  

``` URL
https://myportal.com:10041/wps/portal/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8ziDVCAo4FTkJGTsYGBu7OJfjhYgbmHi7u7oYFhgL-bu4VBoJmrt7e_UaCBSbCxfhQx-vEowNSPrBCoPwqsxDTQ0t3DyMTI393M0QXoAncPS0eDAAMDCwOoAjxmFOSGRhhkOioCABL0w14!/dz/d5/L2dBISEvZ0FBIS9nQSEh/
```

The text after `/portal` in the URL is a generated encoded string from the Portal Server that includes the state information of a page (state of portlets, pages, and so on). There may be instances where this string should not be displayed to end users. This document provides instructions on how you can remove state information from the URL.

## Instructions

To remove state information from URLs, refer to the following options:

### Option 1: Configure Portal properties

1. In the WebSphere Integrated Solutions Console, go to **Resources > Resources Environment > Resource Environment Providers > WP Config Service > Custom properties**.

2. Set the following properties:

    - `stateless.urls.enabled` to `true`
    - `generate.stateless.urls` to `true`
    - `friendly.redirect.enabled` to `false`

3. Click **Apply > Save**.

For more information, refer to [Configuration Service](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cfg_svc/index.md) and [Defining friendly URLs without state information for pages in your site](../../../deployment/manage/siteurl_cfg/changing_siteurl/cw_navstate/mp_friendly_short_url.md).
  
### Option 2: Edit the HTML `<a>` tag from stateful Portal URLs

In some situations, the URL state information is still shown to end-users when they request a page or navigate to other Portal pages. This commonly happens when a Portal theme uses the [urlGeneration API](../../../build_sites/themes_skins/customizing_theme/expression_language_beans/common_beans/url_generation/index.md) to create stateful Portal URLs. In such cases, you need to change the code to disable the URL state information.

For example, when a theme generates a link using `<a href="${fn:escapeXml(node.urlGeneration.autoNavigationalState.clearScreenTemplate)}` and a user clicks that generated link, state information is still displayed.

To remove the state information, change the `autoNavigationalState` tag to `noNavigationalState`.

For example, `<a href="${fn:escapeXml(node.urlGeneration.noNavigationalState)}"`.
