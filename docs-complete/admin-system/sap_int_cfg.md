# Configuring Integrator for SAP 

Before you can use the SAP navigation, you need to perform the configuration.

The SAP navigation integration uses a set of configuration parameters, but you must configure these parameters separately:

-   Configuring the SAP navigation page:

    By default, the HCL Portal installation names the SAP integration page **SAP****navigation** and places it as a subpage of **Applications** \> **** **HCL Portal Integrator for SAP**.

    If you want to change the title of the SAP navigation page or move the page to another location in your HCL Portal, use the standard tools of HCL Digital Experience. For example, you can use **Manage Pages** in the HCL Portal administration.

    All required page properties for configuring the SAP navigation page are stored in the page properties of the SAP navigation page. For a list of configuration parameters see the topic about *Configuration parameters for the SAP navigation integration*. You must check and verify these settings and change them as appropriate for your environment, if required. To perform this task, proceed as follows:

    1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

    2.  Click **Content root** \> **Applications** \> **HCL Digital Experience Integrator for SAP**.

    3.  Click **Edit page properties** for the page that is named **SAP**, or however you might have renamed it.

    4.  Select **Advanced options** \> **I want to set parameters**.

    5.  Change the page properties as required.

        For a list of configuration parameters, read the topic about *Configuration properties for the SAP navigation integration*. If your values for the page properties remain within a length limit of 255 characters, you can set them directly in the page properties as described here. If the values for any of the properties exceed 255 characters, you must set that property in the WP Configuration Service, reference it in the page properties, and prefix its value in the page properties with `ConfigService:` . For example, the most likely parameter to have a value that exceeds 255 characters is `sap.SSOTokenUrl` . In this case you configure the following settings:

        -   In the WP Configuration Service: `actual.SSO.tokenUrl = "your\_URL"`
        -   In the page properties: `sap.SSOTokenUrl = "ConfigService:actual.SSO.tokenUrl"`
        For details about how portal service configuration properties and how to set them, read *Configuration Service* and *Setting service configuration properties*. For the parameter `sap.SSOTokenUrl`, you can specify a page URL of the SAP portal of your choice, except the `sap.BaseUri`.

    6.  Restrict the access to the SAP navigation page to the correct audience, for example to all or selected SAP users. To perform this task, use the HCL Portal Access Control.

    7.  Like portal pages, you can configure the navigational integration label to use a theme template. Within the navigational integration, integrated SAP NetWeaver portal pages inherit that configuration from the label. To perform this configuration, add the page parameter com.ibm.portal.theme.template.file.name.htm to the label by using the XMLAccess configuration interface. After you install Integrator for SAP, all integration pages are already configured to use a side navigation theme template. You can remove the side navigation by removing the parameter for the side navigation theme template from the label.


After you have completed the configuration, restart your HCL Portal server for your changes to take effect.

For more information about how to configure Integrator for SAP see these topics:

-   **[Configuring Basic Authentication for SSO for the SAP navigation integration ](../admin-system/sap_int_cfg_basauth_sso_4nav.md)**  
For single sign-on between HCL Digital Experience and SAP NetWeaver Portal, you can configure HTTP Basic Authentication using the Credential Vault.
-   **[Configuring Tivoli Federated Identity Manager with SAML for single sign-on to SAP NetWeaver Portal ](../admin-system/sap_int_cfg_tfimsaml_sso.md)**  
You can also use Tivoli Federated Identity Manager with Security Assertion Markup Language \(SAML\) for single sign-on to SAP NetWeaver Portal.
-   **[Configuring logout handling ](../admin-system/sap_int_cfg_logout.md)**  
When a user logs out of HCL Digital Experience, a log out from SAP NetWeaver Portal needs to be performed as well. Otherwise, the user session on the SAP NetWeaver Portal remains open until it times out.
-   **[Completing the configuration ](../admin-system/sap_int_cfg_cmplt.md)**  
After you have completed configuring Integrator for SAP, restart your HCL Portal server for your changes to take effect.
-   **[Page properties for configuring the SAP navigation integration ](../admin-system/sap_int_cfg_parms_4nav.md)**  
To configure the SAP navigation integration of Integrator for SAP, you can set the following page configuration properties.

**Parent topic:**[Integrating with SAP NetWeaver Portal ](../admin-system/sap_int.md)

**Related information**  


[Prerequisites and support for Integrator for SAP ](../admin-system/sap_int_prereq_supp.md)

[Installing Integrator for SAP ](../admin-system/sap_int_instal.md)

[Performance tuning for Integrator for SAP ](../admin-system/sap_int_perf_tun.md)

[Page properties for configuring the SAP navigation integration ](../admin-system/sap_int_cfg_parms_4nav.md)

[Configuration Service ](../admin-system/srvcfgref_config.md)

[Setting service configuration properties ](../admin-system/adsetcfg.md)

[Configuring authentication filters ](../admin-system/adauthflt.md)

