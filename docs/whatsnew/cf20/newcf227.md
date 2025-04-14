# What's new in CF227

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF227 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- User Session Reporting Tool - Updated the command to generate user session data usage in metrics format

**Digital Experience 8.5 and 9.0 Versions**

**Digital Experience 9.5 Container Version**

- DAM Access Control Caching

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959){target="_blank"} for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### User Session Reporting Tool - Updated the command to generate user session data usage in metrics format

=== "Containers"
    User Session Reporting Tool parameters have been updated to allow all named parameters to be used in any order within the generate user session data usage command. You can now exclude multiple IPs and session keys by adding multiple `-excludeIP` or `-excludeSessionKey` parameters, respectively. The `-excludeIPs` and `-excludeSessionKeys` parameters have also been updated to exclude the `-excludeIP` and `-excludeSessionKey` parameters. For more information, refer to [User Session Reporting Tool with My HCLSoftware](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool_non_kubernetes.md) and [User Session Reporting Tool](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool.md).

=== "On-Premises"
    User Session Reporting Tool parameters have been updated to allow all named parameters to be used in any order within the generate user session data usage command. You can now exclude multiple IPs and session keys by adding multiple `-excludeIP` or `-excludeSessionKey` parameters, respectively. The `-excludeIPs` and `-excludeSessionKeys` parameters have also been updated to exclude the `-excludeIP` and `-excludeSessionKey` parameters. For more information, refer to [User Session Reporting Tool with My HCLSoftware](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool_non_kubernetes.md) and [User Session Reporting Tool](../../get_started/download/software_licensing_portal/configure_entitlement_checks/user_session_reporting_tool.md).

## Digital Experience 9.5 Container Version

### DAM Access Control Caching

=== "Containers"
    The DAM Access Control Cache improves performance by reducing redundant access control checks with the Ring API. It caches responses with a configurable Time-to-Live (TTL) mechanism and optimizes efficiency by handling in-flight requests. Caching is enabled by default with a TTL of 10 seconds. For more information, refer to [DAM Access Control Cache](../../manage_content/digital_assets/usage/managing_dam/dam_access_control_cache.md).

=== "On-Premises"
    The DAM Access Control Cache improves performance by reducing redundant access control checks with the Ring API. It caches responses with a configurable Time-to-Live (TTL) mechanism (default: 10 seconds) and optimizes efficiency by handling in-flight requests. For more information, refer to [DAM Access Control Cache](../../manage_content/digital_assets/usage/managing_dam/dam_access_control_cache.md).
