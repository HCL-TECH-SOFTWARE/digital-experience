# Configuration structure 

The Outbound Connection Service Configuration model has the following structure.

![Configuration structure of the HTTP Outbound connection service](../images/HTTP_OutBound_graphic_2.jpg)

For more detailed information about the configuration structure of the outbound connection service, read the following topics. Examples follow in later topics.

-   **[Outbound connection profile ](../dev-portlet/outbhttp_cfg_strctr_obconn_profile.md)**  
The outbound connection profile contains the elements of the configuration model. The following profiles can exist.
-   **[Policy mappings ](../dev-portlet/outbhttp_cfg_strctr_policy_mapng.md)**  
When an outbound HTTP connection is established through the outbound connection service, the caller can specify the mapping context in an optional parameter.
-   **[Policy rules ](../dev-portlet/outbhttp_cfg_strctr_policy_rul.md)**  
Policy rules define handling rules for outbound HTTP connections. Policy rules are identified by a URL pattern. When an outbound HTTP connection is opened, the portal compares the URL of that outbound HTTP connection against the URL pattern of the policy rule and handles the URL accordingly.
-   **[Cookie rules ](../dev-portlet/outbhttp_cfg_strctr_cookie_rul.md)**  
Cookie rules define handling rules for cookies that you use in the context of an outbound HTTP connection.
-   **[Policy variables ](../dev-portlet/outbhttp_cfg_strctr_policy_variable.md)**  
You can use policy variables to resolve tokens of the form \{$Variable\_name\} that can appear in the URL pattern setting of a proxy rule or in metadata.

**Parent topic:**[Configuring outbound HTTP connections ](../dev-portlet/outbhttp_cfg_oh_conns.md)

