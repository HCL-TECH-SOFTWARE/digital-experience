# Previously deprecated features and themes for HCL Digital Experience 9.5

Deprecation means that the features are supported at this time but can be removed in an upcoming CF. It is recommended that deprecated items be removed as soon as possible as they can cause unpredictable behavior. Links to more information on the replacement for those items listed for deprecation will be posted as they become available to provide help as you move away from these features.

|Category|Unsupported|Recommended Action|
|--------|-----------|------------------|
|Setting up a site |Running the "Local Content Viewer" portlet \(WCM Rendering Portlet\) with WSRP |The Local Content View portlet has no architectural replacement. Instead, use WCM Rendering portlet locally. The feature allows customers to run the content viewer on a remote portal and integrate it into a local portal. You can run the content viewer only locally. -   Documentation resource: [Enabling remote rendering with WSRP and the Web Content Viewer](../wcm/wcm_config_wcmviewer_wsrp.md)

|
|Administering |Frequent Users portlet -   Documentation resource: [Viewing frequent users](https://help.hcltechsw.com/digital-experience/8.5/panel_help/h_main_frequent_users.md)

|Login filters can be used to record login activity as needed.-   Documentation resource: [New security APIs in HCL Portal](https://support.hcltechsw.com/csm)

|
|Security |OpenID authentication

 Legacy Portal OpenID TAI \(com.ibm.portal.auth.tai.OpenidTAI provided by HCL Digital Experience\)

-   Documentation resource: [Integrating with OpenID authentication](../security/use_openid.md)

|For authentication in HCL Digital Experience with an external Identity Provider use SAML/OpenID Connect TAIs provided by IBM WebSphere Application Server or custom TAIs.-   Documentation resource: [Establishing SSO connections through SAML 2.0 tokens](../dev-portlet/outbhttp_auth_est_sso_saml_tok.md)

|
|Administering |XMLAccess xsds for older releases \(HCL Digital Experience Portal 5.0 - 7.0\) |Use the XML configuration interface with XML input files specified according to the latest schema file: PortalConfig\_8.5.0.xsd.  -   Documentation resource: [Using the XML configuration command line client](../admin-system/adxmltsk_cmdln.md)

|
|Developing |Enabler, Builder, and Mashups components and API |The **Mashup Enabler** and the **Builder** components are deprecated. The **Mashups Enabler** and the **Builder** API are deprecated. -   Documentation resource: [Mashup integration post migration steps](../migrate/mig_mashup_post.md)

|
|Personalization |LikeMinds |The **LikeMinds** services and database domains are deprecated.-   Documentation resource: [Using the XML configuration commands line client](../admin-system/adxmltsk_cmdln.md)

 Go to Active Site Analytics to learn how to configure a variety of analysis tools to support your Digital Experience platform requirements. -   Documentation resource: [Enabling Active Site Analytics for your Marketing Center Spot](https://support.hcltechsw.com/csm)

|
|Personalization |Feedback |The **Feedback** database domains are deprecated. -   Documentation resource: [Using the XML configuration commands line client](../admin-system/adxmltsk_cmdln.md)

Go to Active Site Analytics to learn how to configure a variety of analysis tools to support your Digital Experience platform requirements.-   Documentation resource: [Enabling Active Site Analytics for your Marketing Center Spot](https://support.hcltechsw.com/csm)

|
|Security |Active Credentials |Active credentials are deprecated from the Credential Vault portlet. Passive credentials are still available. -   Documentation resource: [Credential Vault](../plan/plan_credvault.md)

|
|Administering |Shared private pages |The Sharing private pages service is deprecated. -   Documentation resource: [Sharing pages with other users](https://support.hcltechsw.com/csm)

Go to Managing Pages for the set of services available in HCL Digital Experience 8.5 and 9 releases. -   Documentation resource: [Managing pages](../admin-system/mp_manage_pages.md)

|
|Administering |Parallel Portlet rendering |The Parallel Portlet rendering feature is deprecated. See the [HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411) for recommendations to optimize digital experience application performance. |
|Security |Stand-alone LDAP user registry |The stand-alone LDAP user registry configuration is deprecated. Instead, configure the federated LDAP user registry. If you upgraded from HCL Digital Experience 7.0 or 8.0 with a stand-alone LDAP user registry, you can continue to use your stand-alone LDAP user registry. However, run the wp-modify-federated-security to change to a federated LDAP user registry. -   Documentation resource: [Changing from a stand-alone repository to a federated repository](../security/mod_fed_sec.md)

|
|Administering |URL mappings |URL mappings are deprecated. If you upgrade from HCL Digital Experience 8.0 to 8.5, you can continue to use your existing URL mappings, but creating new URL mappings is no longer supported. Use vanity or friendly URLs.  -   Documentation resource: [Vanity URLs](../wcm/vanity_urls.md)
-   Documentation resource: [Using friendly URLs](../admin-system/mp_friendly_url.md)

|
|Installation |Full and Base installation options |Before HCL Digital Experience 8.5, a customer chose either a full deployment with all the same pages and artifacts or a base deployment to customize their portal. Starting with HCL Digital Experience 8.5, the **Configuration Wizard** installs the full deployment. Customers can then remove pages to customize their portal. Then, they can package their customizations as a Portal Application Archive \(PAA\) file. Finally, customers can install their production server, run the empty-portal task, and install the customization PAA file. |
|Security |LTPA version 1 token support |The LTPA version 1 token is deprecated. WebSphere® Application Server 8.5.5. disables the LTPA version 1 token by default. If you are integrating with third-party applications that rely on LTPA version 1, update the application to support LTPA version 2. If you cannot update the application, you must manually re-enable LTPA version 1 support after you complete the migration. For information on updating your application to support LTPA version 2, see the documentation for the application. -   Documentation resource: [Enabling or disabling single sign-on interoperability mode for the LTPA token for WebSphere® Application Server 8.5.5](https://www.ibm.com/support/knowledgecenter/en/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/twbs_interopltpatoken.md)
-   Documentation resource: [Enabling or disabling single sign-on interoperability mode for the LTPA token for WebSphere® Application Server 9.0.0](https://www.ibm.com/support/knowledgecenter/en/SSAW57_9.0.0/com.ibm.websphere.nd.multiplatform.doc/ae/twbs_interopltpatoken.md)

|

**Parent topic:**[Deprecated features for HCL Digital Experience 9.5](../reference/deprecated_features.md)

