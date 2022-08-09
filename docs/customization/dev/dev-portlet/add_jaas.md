# Adding the Java Authentication and Authorization Service \(JAAS\) login module to the Tivoli Federated Identity Manager \(TFIM\) server

The Java Authentication and Authorization Service \(JAAS\) login module is available as a plug-in. This plug-in sets the email address of the logged in user within the security context so that the email address can be used within Tivoli Federated Identity Manager.

The local Tivoli Federated Identity Manager server creates SAML tickets to interact with SmartCloud for Social Business. You can identify the user in those tickets by their email address. The default mapping rules in Tivoli Federated Identity Manager enable access to attributes within the security context of a user. It is not possible to use the email address of the user that is currently logged in. Instead of custom programming, HCL Portal provides a Java Authentication and Authorization Service \(JAAS\) login module implementation that must be added to your Tivoli Federated Identity Manager system. The JAAS plug-in accesses the user's email address and inserts it into the Authorization Token, so the email address can be used within the standard mapping rules. Because the plug-in uses VMM API calls to obtain the email address, the Federated Repository type needs to be configured on your Tivoli Federated Identity Manager system. The following WebSphere® Application Server JAAS login modules must be enabled before you enable the plug-in:

-   com.ibm.ws.security.server.lm.ltpaLoginModule
-   com.ibm.ws.security.server.lm.wsMapDefaultInboundLoginModule

The preceding modules are enabled by default.

If these prerequisites are not met in your environment, or you have another way of obtaining the email address that is not stored in your User Repository, you can implement your own JAAS plug-in by using the developerWorks guidelines. For more information, see the developerWorks article *Developing a custom Java module* in the related links.

-   **[Configuring the Java Authentication and Authorization Service \(JAAS\) login module](../dev-portlet/config_jaas.md)**  
The behavior of the JAAS login module is configurable. If you change the attribute name for the security context, make sure to adjust the mapping rule accordingly.
-   **[Tivoli Federated Identity Manager \(TFIM\) mapping for the Java Authentication and Authorization Service \(JAAS\) login module](../dev-portlet/tfim_mapping.md)**  
By default, the JAAS plug-in reads a user's email address from the VMM attribute with the name mail. The JAAS plug-in sets the mail attribute in the security context. If you change the name of the attribute in the security context, update the following mapping rule accordingly.

**Parent topic:**[Configuration settings for Tivoli Federated Identity Manager \(TFIM\)](../dev-portlet/outbhttp_auth_est_sso_tfim.md)

**Related information**  


[Developing a custom Java module](https://support.hcltechsw.com/csm)

