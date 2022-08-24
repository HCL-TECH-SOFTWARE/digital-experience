# Removing the Credential Vault adapter

If you no longer require the use of the credential vault adapter that you created, you can remove it from your configuration.

Perform the following steps to remove the credential vault adapter:

1.  Use the **Credential Vault portlet** to remove any segments created in the Security Access Manager Vault. See the Credential Vault portlet help for more information.

    **Note:** Do not remove DefaultAdminSegment.

2.  Remove the Vault.AccessManager Credential Vault Adapter implementation properties from the Credential Vault Segment configuration; including class, config, manager, and read only.

    **Note:** Do not remove the systemcred.dn parameter.

3.  Remove the accessmanagervault.properties file from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config directory.

    **Clustered environments:** Perform this step on all portal nodes.



