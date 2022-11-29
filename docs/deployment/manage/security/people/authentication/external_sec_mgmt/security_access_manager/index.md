# Security Access Manager

HCL Digital Experience supports the use of IBM Security Access Manager. Existing Security Access Manager users can use the Security Access Manager services to assist them in their deployment.

You can use the following services:

-   WebSEAL Single Sign On \(SSO\) for authentication
-   Protected Object Space and Access Control List Management for authorization
-   Global Sign-on \(GSO\) lockbox credential vault integration
-   Automatic user provisioning from HCL Digital Experience self-registration to Security Access Manager

Perform the following tasks to configure Security Access Manager:

-   **[Configuring Security Access Manager](../security_access_manager/cfg_sec_access_mgr)**  
HCL Digital Experience can be integrated with IBM Security Access Manager to provide authentication services, authorization, and to link HCL Digital Experience's credential vault to the ISAM GSO Lockbox feature.
-   **[Enabling user provisioning](../security_access_manager/usr_prov.md)**  
When users are created in HCL Digital Experience, they are not automatically imported into Security Access Manager. Enabling automatic user provisioning to Security Access Manager changes this behavior. After this feature is enabled, users are automatically imported into Security Access Manager whenever they are created in HCL Digital Experience. When user provisioning is enabled, anyone with access to the public URL can become an active user in Security Access Manager if the self-registration feature remains enabled.
-   **[Verifying external authorization to Security Access Manager](../security_access_manager/verify_tam.md)**  
After configuring HCL Digital Experience to use Security Access Manager for externalized authorization, you should verify that it works properly before continuing with any additional configuration tasks.
-   **[Removing the Credential Vault adapter](../security_access_manager/remove_tam_vault.md)**  
If you no longer require the use of the credential vault adapter that you created, you can remove it from your configuration.
-   **[Disabling user provisioning](../security_access_manager/usr_prov_dis.md)**  
After you enable and use the user provisioning feature within IBM Security Access Manager, you can disable the feature.


**Related information**  


[Using Social Rendering with Tivoli Access Manager and WebSEAL](/digital-experience/build_sites/social_rendering/administering_social_list/soc_rendr_adm_sr_tam_webseal.md)

