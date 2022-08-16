---
id: h_wab_provider
title: Content provider profile
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The content provider profile identifies the content provider and contains information about its deployment that includes any proxy based security.

A content provider profile uniquely identifies a host server and its deployment configuration to the web application bridge. You need to create only one profile for each host that is contributing web applications for integration.

-   **Host**

    The fully qualified distinguished name or IP address of the host server, including any port numbers other than 80. It starts with either http:// or https://.

-   **Create default policy**

    If the check box is selected, a default policy is created for the profile. This default policy has no authentication and all other policy fields are set to allow everything.

-   **Proxy: None**

    Select this option if the host server is accessible directly.

-   **Anonymous HTTP proxy**

    Select this option if the host server is accessible through an HTTP proxy server that does not require authentication.


