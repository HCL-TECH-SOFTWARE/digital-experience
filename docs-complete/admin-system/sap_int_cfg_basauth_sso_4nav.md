# Configuring Basic Authentication for SSO for the SAP navigation integration 

For single sign-on between HCL Digital Experience and SAP NetWeaver Portal, you can configure HTTP Basic Authentication using the Credential Vault.

For you to be able to perform this configuration, the SAP Navigation WS must be running and accessible. This should be given by default in a SAP NetWeaver portal installation.

To configure HTTP Basic Authentication for SSO, proceed as follows:

1.  Access the portal with an administrative user ID.

2.  Create a Credential Vault slot that can later store a user's credentials by using the HCL Portal administration. For more information, read *Credential Vault*.

3.  Configure HTTP Basic Authentication for SSO for Integrator for SAP:

    1.  Set the page parameter for the SAP integration page `sap.CredentialSlotId` to the name of the Credential Slot that you created in the previous step.

    2.  Set the parameter `sap.SSOTokenUrl` to a URL in your SAP NetWeaver Portal.

    For details see the topics *Configuring Integrator for SAP* and *Configuration parameters for the SAP navigation integration*.

4.  Users must add their credentials to the slot in the Credential Vault Dialog. They can access the Credential Vault Dialog by typing the web address of the Credential Vault Dialog into a web browser. For example, http://<host\>:<port\>/wps/mypoc?uri=cvfiller:<credentialVaultSlotName\>.

5.  If you do not want users to be able to edit the user ID and password credentials that the integrator portlet uses with Basic Authentication, then you can revoke the Privileged User role at the portlet for these users. You do this by using the HCL Portal Access Control.

    This can be useful if you use a shared Credential Vault slot and a group of users share the same user ID and password for accessing the SAP NetWeaver Portal.

6.  Configure single sign-on with the SAP navigation integration for browsers.

    If you configure HTTP Basic Authentication for single sign-on, Integrator for SAP provides single sign-on between HCL Portal and the SAP NetWeaver Portal navigation only. This means that users can see the integrated navigation, but when they access an integrated page, SAP NetWeaver Portal prompts them for authentication, if SSO is not implemented by other means. You can include browsers in the configuration of this single sign-on. If you want HCL Portal to pass the SAP NetWeaver Portal authentication token to the user's browser, you must perform both of the following tasks:

    1.  Set the page parameter `sap.SSOTOkenDomain` to the domain for which you want to set the token. For details, read the topic about *Configuration properties for the SAP navigation integration*.

    2.  Configure the following login and logout filters in the Resource Environment Provider WP Authentication Service:

        ```
        login.explicit.filterchain    com.ibm.wps.integration.sap.login.LoginFilter   
        login.implicit.filterchain    com.ibm.wps.integration.sap.login.LoginFilter   
        logout.explicit.filterchain   com.ibm.wps.integration.sap.logout.LogoutFilter 
        logout.implicit.filterchain   com.ibm.wps.integration.sap.logout.LogoutFilter 
        ```

        For details, read the topic *Configuring authentication filters*.


Note that configuring single sign-on with the SAP navigation integration for browsers is supported only for HTTP Basic Authentication.

**Parent topic:**[Configuring Integrator for SAP ](../admin-system/sap_int_cfg.md)

**Related information**  


[Credential Vault ](../plan/plan_credvault.md)

[Page properties for configuring the SAP navigation integration ](../admin-system/sap_int_cfg_parms_4nav.md)

[Configuring authentication filters ](../admin-system/adauthflt.md)

