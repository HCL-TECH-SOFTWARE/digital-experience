# Content Security Policy

The Content-Security-Policy header is used by modern browsers to enhance security of HCL Digital Experience site documents or webpages by allowing HCL Digital Experience administrators or developers declare which dynamic resources are allowed to load.

## Overview

Content Security Policy \(CSP\) is a well-known defense against cross-site scripting \(XSS\) attacks \(delivery of malicious code along with intended content\). CSP provides browsers with the following capabilities:

-   A Content-Security-Policy HTTP request header which defines an allowlist
-   Allowlists which tell the browser what is and is not allowed
-   Reporting of policy violations to the server

The web's security model is rooted in the same-origin security policy which ensures that domain origins are kept isolated.

For more information, see the introductory Google Web Fundamentals article on [Content Security Policy \(CSP\)](https://developers.google.com/web/fundamentals/security/csp).

With HCL Digital Experience Container Update CF192 and higher releases, developers can apply platform support and guidance to update their DX sites to verify scripts requested to execute are coming from trusted sources before rendering pages to end users. See the guidance topics for Content Security Policy as listed below.

## Limitations

CSP has the following limitations:

-   Dojo is unsupported. This is due to difficulties to make Dojo CSP-compliant by eliminating inline Javascript and styles. As a result, any DX artifact \(modules, portlets, themes\) that requires Dojo will also not be supported, including:
    -   The Default85 theme. Standard Skin makes use of Dojo for some of the menu processing, so this skin is not supported.
    -   Some context menu's in the toolbar and skins
    -   Any modules using Dojo
    -   Edit mode is not supported
    -   Semantic tagging is not supported
-   We recommend the use of explicit styles in the rich text editor instead of the default inline styles.

???+ info "Related information"
    - [Rich Text Editor Toolbar configuration options](../../../../../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md)
    



