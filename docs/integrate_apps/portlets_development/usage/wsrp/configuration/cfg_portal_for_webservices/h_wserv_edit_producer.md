---
id: h_wserv_edit_producer
title: Editing a Producer definition
---
import useBaseUrl from '@docusaurus/useBaseUrl';



To update the information for a Producer in your portal, click **Edit** for that Producer in the list of Producer definitions. The Web Service Configuration portlet displays a panel similar to the Create Producer panel with the information that you entered before. Modify the information in the fields as required.

You can modify the values for the following fields for the Producer:

-   **Title**
-   **Description**
-   **URL to WSDL service definitions**.

You can also select the following extra options:

-   **I want to specify the user attributes that should be passed to this Producer.** Use this option to modify the user attributes that you want to be passed to the Producer.
-   **I want to set the port settings for this Producer**. Use this option to modify the specific setting for the Producer ports. You can specify the endpoint address URLs of a port and select the transport protocol. You can also select the token type for Web Services Security for a port from the list of service references and token types. You can select either of the token types and service references for each token type from this list:
    -   If you select a token type, the WSRP Consumer uses the default WSRP service reference for this port. Additionally, it generates tokens of the specified type.
    -   If a custom service reference is available and you select it, the WSRP Consumer uses this service reference. It does not generate tokens for Web Services Security.
    -   If you do not select anything from this list, the WSRP Consumer uses the default WSRP service reference. It does not generate extra tokens for Web Services Security.
-   **I want to set titles and descriptions for other languages**. Use this option to set language-specific titles and descriptions for a Producer.
-   **I want to enter registration properties for this Producer**. This option is available only if the Producer supports registration properties. Use this option to set registration properties for the Producer.

