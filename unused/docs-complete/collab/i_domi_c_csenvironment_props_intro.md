# Collaborative Services environment properties 

If your collaborative site requires optional configuration that is not accomplished by the tasks that you run on the HCL Portal server to integrate IBM Domino and the collaboration products, you can modify the operation of the collaborative servers and portlets in various ways by manually editing the Lotus Collaborative Services environment properties file \(CSEnvironment.properties\) on the HCL Portal server.

The file is installed in the following directory:

-   **Windows™**

    [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\PortalServer\\config\\config

-   **AIX®SolarisLinux™**

    [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config

-   **z/OS®**

    [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)PortalServer/config/config

-   **IBM® i**

    [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config


This file contains the following information about the portal environment:

-   A flag to indicate whether the Collaborative Services are being used within the portal context
-   Location, protocol, port, and version of Domino® Directory server
-   Location, protocol, port, and version of HCL Sametime server for Sametime 8.5.1 or earlier
-   Configuration and performance tuning settings specific to Collaborative Services
-   A flag to indicate the type of token that is being used: lpta token or ltpa token2

-   **[Editing the CSEnvironment.properties file ](../collab/i_domi_t_csenvir_basic_edit.md)**  
To modify any Lotus Collaborative Services environment properties, you must stop the portal server, locate the file in a location specific to your platform, back up the file before editing it, use a text editor to open and modify it, and then restart the server.
-   **[Auto-detecting user mail information from a secondary LDAP server ](../collab/i_domi_t_csenvir_dom_2domdirs.md)**  
You can set the Lotus Collaborative Services in the portal to detect users' mail file information from an additional \(secondary\) non-Domino LDAP user directory. For example, you may need to configure two directories if your organization has one for customers and one for employees.
-   **[Customizing Collaborative Services user credentials for eTrust SiteMinder ](../collab/i_domi_t_csenvir_user_credential.md)**  
If you protect the portal and any of the Domino and Extended Products Portlets or Common Mail portlet with Computer Associates eTrust SiteMinder, you must set the Lotus Collaborative Services to use the eTrust SiteMinder token instead of the default LTPA token.
-   **[Supporting automatic mail detection with an LDAP directory other than Domino ](../collab/i_domi_t_csenvir_autodetection_nondomldap.md)**  
If the LDAP directory configured for the portal and for Lotus Collaborative Services is not IBM Domino, and you want the automatic mail detection feature in Domino messaging portlets, you can modify the CSenvironment.properties file to support the feature.
-   **[Tuning performance of the Domino Directory ](../collab/i_domi_t_csenvir_domdir_performance.md)**  
If you are using Domino Directory as the primary \(and only\) LDAP server for HCL Portal, you can set the following property in the CSEnvironment.properties file to false to improve the performance of Domino Directory.
-   **[Using LtpaToken2 for user login ](../collab/i_domi_t_csenvironment_ltpatoken2.md)**  
By default, the credential settings in the CSEnvironment.properties file are set to use an LTPA token for user login. If your environment is configured with LtpaToken2 only, you must modify the CSEnvironment.properties file to use LtpaToken2 instead of LtpaToken.

**Parent topic:**[Integrate with collaboration software](../collab/cfg_collab_intro.md)

