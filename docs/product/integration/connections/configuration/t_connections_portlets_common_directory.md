# Configuring common Directory Services for your security configuration

Configure the common Directory Services to work with your security configuration.

HCL Connections portlets use the common Directory Services to enable directory lookup from HCL Connections in the HCL Portal environment. This action enables type-ahead for finding names. Common Directory Services are enabled and configured automatically as part of the installation process. Follow this procedure to configure the Directory Services for your security configuration.

**Restriction:** To use common Directory Services, Portal must be configured to use a federated LDAP. Use of a stand-alone LDAP is not supported.

Follow these steps to configure common Directory Services for the HCL Connections portlets.

1.  Do the following to copy the configuration files:

    -   For a single server: On the HCL Portal, copy the following files

        -   directory.services.xml
        -   directory.services.xsd
        -   sonata.services.xml
        -   sonata.services.xsd
        From wp\_profile-dir/paa/SNPortlets/components/SNPortlets/config/templates/deployment, to portalInstallRoot\\wp\_profile\\config\\cells\\cell\\.

    -   For a clustered deployment: On the primary HCL Portal server, copy the files from wp\_profile-dir/paa/SNPortlets/components/SNPortlets/config/templates/deployment, to the DMGR directory at DMGR\_install root\\profiles\\dmgr profile name\\config\\cells\\cell\\.
    **Note:** For SiteMinder and SPNEGO configuration, the Communities and Profiles services URLs in directory-services.xml must point to theinterServiceURL. For a eTrust SiteMinder and SPNEGO configuration, the Communities and Profiles services URLs in directory-services.xml must point to the interServiceURL. For information on getting the value of interServiceURL, see the last table in [Installation Options](r_connections_portlets_install_options.md).

2.  If you are using LTPA SSO, skip this procedure because no change is needed. For other types of authentication, edit sonata.services.xml and change the sonataServices tag, `<sonataServices name="DefaultAuthenticator">`, to the appropriate value for the name attribute.

    -   SPNEGO: `<sonataServices name="KerberosAuthenticator">`
    -   Security Access Manager: `<sonataServices name="TAMAuthenticator">`
    -   eTrust SiteMinder: `<sonataServices name="SiteMinderAuthenticator">`
    -   Security Access Manager and SPNEGO: `<sonataServices name="KerberosAuthenticator">`

        **Note:** On a Portal 8 server, use `<sonataServices name="TAMAuthenticator">`

    -   eTrust SiteMinder and SPNEGO: `<sonataServices name="DefaultAuthenticator">`
3.  \(Clustered deployment only\) Login to DMGR admin console and go to the **System Administration** \> **Nodes**. Select both HCL Portal nodes and click **Full Resynchronize**.

4.  Restart the Portal server after you update directory.services.xml or restart all of the servers for a clustered deployment.


**Parent topic:**[Configure HCL Portal to work with HCL Connections](../connect/c_connections_overview.md)

