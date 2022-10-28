# Configuration settings for Active Directory Federation Services (ADFS)

Learn about establishing a single-sign on (SSO) connection for Active Directory Federation Services (ADFS).

For more information about the administrative settings of SAML-based authentications, see [Creating a generic SAML 2.0 federation with a new or existing domain](https://www.ibm.com/docs/en/tfim/6.2.2.7?topic=ipsc-creating-generic-saml-20-federation-new-existing-domain) in the related links.

-   **[Finding the Identity Provider login URL and the Partner URL (ADFS)](outbhttp_auth_est_sso_adfs_idpp_url.md)**  
To establish a single sign-on (SSO) connection through Active Directory Federation Services (ADFS), you must specify the Identity Provider login URL and the Partner URL. Learn how to find these values from the ADFS configuration if you do not already know them. If you know these values already, skip this step.
-   **[Adding cookie handling to the Active Directory Federation Services (ADFS) server](add_cookie_adfs.md)**  
The Internet Information Services (IIS) server as a part of the ADFS configuration sets up the ADFS cookies by default on a specific path and a specific host. To use these cookies for single sign-on (SSO) between the portal server and the ADFS server, the cookies need to flow on requests to the portal server as well. The cookie domain and cookie path must be changed.
-   **[Creating Identity Provider settings at the Outbound Connection Service configuration (ADFS)](outbhttp_auth_est_sso_adfs_idpp_settings.md)**  
Certain metadata settings such as the ADFS cookies, the Identity Provider URL, and the Partner URL are required to define a single sign-on \(SSO\) connection through Active Directory Federation Services (ADFS).
-   **[Defining policy rules for the remote connection (ADFS)](outbhttp_auth_est_sso_adfs_rules.md)**  
Learn about how to create a policy rule for the SSO connection. Creating a policy rule is required to use the SSO connection for the Identity Provider that you registered.


???+ info "Related information"
    - [Establishing single sign-on (SSO) between the portal installation and HCL Connections in SmartCloud for Social Business](../../../../../../../integration/connections/configuration/cfg_portal_to_work_with_cnx_in_sc/establishing_sso/index.md)
    - [Configuring single sign-on (SSO) for backend calls to HCL Connections in SmartCloud for Social Business](../../../../../../../integration/connections/configuration/cfg_portal_to_work_with_cnx_in_sc/establishing_sso/configuring_sso_sc4sb.md)
    - [Creating a generic SAML 2.0 federation with a new or existing domain](https://www.ibm.com/docs/en/tfim/6.2.2.7?topic=ipsc-creating-generic-saml-20-federation-new-existing-domain)

