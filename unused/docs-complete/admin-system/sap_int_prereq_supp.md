# Prerequisites and support for Integrator for SAP 

Integrator for SAP works with the prerequisites and under the conditions and limitations listed here.

1.  For the integration, use Integrator for SAP only with the following product versions:
    -   HCL Portal Version 7.0.0.1 with fix pack 6 or a later version.
    -   SAP NetWeaver Portal Version 7.3 SP2 with note 1638641 *Interoperability fix for SAML1.1 assertions in web services*. For more information about this note, see the following web link.
2.  For the integration, use Integrator for SAP only with SAP NetWeaver Portal Version 7.3 SP2 with note 1638641 *Interoperability fix for SAML1.1 assertions in web services*. For more information about this note see the web link section. Note that you need a user ID and password from SAP to access this information.
3.  Make sure that both HCL Digital Experience and SAP NetWeaver Portal are installed in the same domain, for example `example.com` and have direct access to each other.
4.  For virtual portals, HCL Digital Experience supports only one integration point per virtual portal.
5.  Use only the browsers and browser versions that are supported by both HCL Digital Experience and SAP NetWeaver Portal. For details about browser support, read the appropriate documentation:
    -   For HCL Portal, read *System requirements*in the HCL Portal Version 7.0 product documentation.
    -   For SAP NetWeaver Portal, read the product documentation for that product.
6.  To configure single sign-on \(SSO\) between HCL Digital Experience and SAP NetWeaver Portal, you can use either of the following options:
    -   HTTP Basic Authentication for single sign-on \(SSO\) to SAP NetWeaver Portal. To configure HTTP Basic Authentication for single sign-on, configure Basic Authentication for SSO for the SAP navigation integration. For details, read *Configuring Integrator for SAP*.
    -   A Security Assertion Markup Language \(SAML\) environment using IBM Tivoli Federated Identity Manager. For the installation and setup instructions, read the product documentation for IBM Tivoli Federated Identity Manager.

The navigation integration is temporary for each session and not imported or persisted in HCL Digital Experience. Therefore the following limitations apply:

-   Users cannot bookmark integrated pages, or tag or rate integrated content.
-   If a search crawler indexes a page, the page might not be available for search by users in a later HCL Digital Experience session. Therefore make sure that the HCL Digital Experience Search crawler user ID does not have access to the SAP integration content.

**Parent topic:**[Integrating with SAP NetWeaver Portal ](../admin-system/sap_int.md)

**Related information**  


[Preparing your system environment and the prerequisites for Integrator for SAP ](../admin-system/sap_int_prep.md)

[Configuring Integrator for SAP ](../admin-system/sap_int_cfg.md)

[System requirements ](../overview/inst_req.md)

[Tivoli Federated Identity Manager product documentation](https://community.ibm.com/community/user/legacy)

