# Configuring Tivoli Federated Identity Manager with SAML for single sign-on to SAP NetWeaver Portal 

You can also use Tivoli Federated Identity Manager with Security Assertion Markup Language \(SAML\) for single sign-on to SAP NetWeaver Portal.

In such a scenario, Tivoli Federated Identity Manager with SAML is responsible for handling the authentication flow by using Security Assertion Markup Language. For the SAP integration into HCL Digital Experience, the supported SAML scenario is named Service Provider initiated single sign-on. To use such a scenario, you need technical expertise for all three participating systems: HCL Digital Experience, IBM Tivoli Federated Identity Manager, and SAP NetWeaver Portal.

To use Tivoli Federated Identity Manager \(Tivoli Federated Identity Manager\) for single sign-on to SAP NetWeaver Portal with Integrator for SAP, follow these instructions:

-   Make sure that your Tivoli Federated Identity Manager is configured correctly for authentication of the participating service providers and the users in a service-provider initiated single sign-on scenario. The service providers are the SAP NetWeaver Portal instance and the HCL Digital Experience instance.

    -   For the navigation integration, you must set up a Web Service Single Sign On for the Web Service Client **NavigationWS**. This Web Service Client is hosted in the enterprise application **IntegrationSAP** in the WebSphere® Integrated Solutions Console.
    -   For the SAP navigation integration, you must set up Web Single Sign On to the SAP NetWeaver Portal.
-   To make the Integrator for SAP, use Tivoli Federated Identity Manager do not set any other authentication configuration:

    -   For the SAP navigation integration, do not set the parameters `sap.CredentialSlotId` and `sap.SSOTokenUrl`. Also, do not configure single sign-on for browsers as described under the topic about *Configuring basic authentication for single sign-on to SAP NetWeaver Portal*.
    -   Do not add the login or logout filter of the SAP integration to the filter chains.
-   To test and verify your environment use the SAP navigation integration. This test requires that the web service single sign-on is configured.


**Parent topic:**[Configuring Integrator for SAP ](../admin-system/sap_int_cfg.md)

**Related information**  


[Configuring logout handling ](../admin-system/sap_int_cfg_logout.md)

[Setting service configuration properties ](../admin-system/adsetcfg.md)

[Configuration Service ](../admin-system/srvcfgref_config.md)

