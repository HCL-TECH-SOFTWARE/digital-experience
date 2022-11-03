# Integrating community membership with Portal security

Configure the Virtual Member manager to integrate information from HCL Connections communities with your HCL Portal environment.

Starting with version 6.1, IBM® WebSphere® Application Server uses a component that is called Virtual Member manager \(VMM\) to manage information about community membership. VMM provides an interface that enables communication between HCL Portal and any repository, whether federated repositories, a stand-alone repository, or your own custom user registry. You can configure VMM to recognize HCL Connections as a repository so that Portal can access community user and group information from HCL Connections communities. For example, after VMM is configured, users can select HCL Connections private or public communities as groups when they assign security roles or access rights.

For more information about the architecture of VMM, go to [HCL Software Support](https://support.hcltechsw.com/csm).

For more information about configuring a user repository for VMM, go to [HCL Software Support](https://support.hcltechsw.com/csm).

After you configure HCL Connections to work with VMM, user can:

-   Search for HCL Connections public and private communities by name \(represented as groups in WebSphere\)
-   Resolve public and private community membership for particular users \(represented as group membership in WebSphere\)
-   Display the WebSphere users that are members of HCL Connections public or private community

The following are some known limitations:

-   When you use the VMM get operation to get a single identifier and querying by name, instead of using the unique externalID, nothing is returned if more than one community name matches the query.
-   The operation to display WebSphere users that are members of a particular HCL Connections community can have a performance impact for large groups.
-   Tivoli® Directory Integrator is suggested for populating user data into HCL Connections. When you use the profile data population wizard, a user's email might not be populated into the Communities database. A user might not appear in the proper communities until they log in to Communities, used a feature from the Communities service, or their profile is synchronized with Tivoli Directory Integrator.

## Prerequisites

!!!note
    The VMM adapter uses the `externalId` field to map the **user object ID** field from the LDAP server to identify users and determine community membership for logged in users. This action helps to control access for Community pages based on community membership in HCL Connections. HCL Portal must be configured to use the same LDAP that was used to import users into the People database for the HCL Connections Profiles service. So that the `externalId` between the two servers matches. Other HCL Portal components such as Social Rendering and the integrated person card require the `externalId` between the two servers to match as well.

To configure the VMM to recognize an HCL Connections repository, the following actions must be true:

-   HCL Digital Experience must be installed and verified
-   HCL Connections must be installed and verified to work
-   Hidden email is supported. In the 3.0.1.1 refresh, it is not mandatory any longer to enable the email.
-   Single sign-on must be configured between HCL Connections and Portal. Follow the steps in [Set up single sign-on](../../../i_coll_t_enable_lcsso.md).
-   HCL Connections and HCL Digital Experience must share a common LDAP.
-   Import the SSL certificate from HCL Digital Experience server to HCL Connections. Follow the steps in [Importing a certificate to support SSL](../../../connectionss_oncloud/connections_deploying/t_connections_portlets_import_cert.md) with the following differences:
    -   Log in to the WebSphere Application Server Integrated Solutions Console for the HCL Connections server, rather than the Portal server.
    -   Enter the host, port, and alias for the Portal server. For example:

        ```
        Host : portal.example.com
        Port : 10025 (SOAP default port on Portal. Please specify appropriate port if non default is used)
        Alias : Portal Certificate (Admin can choose any appropriate alias)
        ```

-   Update the VMM schema so that PersonAccount on the Portal server includes personCorrelationAttribute. Use this attribute to specify the corresponding person relative distinguished name attribute. For example, ibm-primaryEmail. For more information about name attributes for different directories, go to [HCL Software Support](https://support.hcltechsw.com/csm). In a clustered environment, run this command on the Deployment manager. To open the scripting interface, go to [HCL Software Support](https://support.hcltechsw.com/csm) for more information. Enter the following commands in the scripting interface:

    ```
    $AdminTask addIdMgrPropertyToEntityTypes {-name <personCorrelationAttribute> -dataType string -entityTypeNames PersonAccount} 
    ```

    Then, enter the following command:

    ```
    $AdminConfig save
    ```

    For example, if the personCorrelationAttribute matches ibm-entryUuid, use:

    ```
    $AdminTask addIdMgrPropertyToEntityTypes {-name ibm-entryUuid -dataType string -entityTypeNames PersonAccount} 
    
    $AdminConfig save
    ```

    !!!note
        Portal must be running while you run this command. Restart the server to apply the changes.


## Configuring the HCL Connections repository to work with VMM

Complete these tasks to configure the HCL Connections User Repository adapter. When configuration is complete, you can verify that it is working by logging in to HCL Portal as an administrator. Open the Users and Groups portlet from the Administration tab. Search for groups that must be present as communities in your HCL Connections deployment. If you find the correct groups and the members of the groups are listed, the deployment is successful.

!!!note
    Make sure that you configured Common Directory Services when you installed the portlets. Common Directory Services are a requirement for configuring the VMM adapter.

-   **[Configuring the HCL Connections repository for VMM](t_connections_portlets_VMM_repository_config.md)**  
Configure the HCL Connections repository for the Virtual Member manager (VMM) so that you can integrate communities with Portal security.
-   **[Verifying impersonation configuration](t_connections_portlets_impersonation.md)**  
 You can access another user's system with the impersonation feature as though you are that user so that you can test user access. Impersonation is configured as part of the installation process. Use this procedure to confirm that it is working as expected.


