# Migrating from Operator to Helm deployments {#helm_operator_migration_dxctl}

This topic provides administrators the guidance to migrate HCL Digital Experience Container Update CF199 and later releases from Operator to Helm deployment.

-   **[Prepare the Operator properties for migration](../containerization/helm_extract_operator_properties.md)**  
 This section shows the guidance to prepare the mapping of your Operator deployment properties, so you can reuse them in your Helm deployment.
-   **[Migrate the Core profile \| HCL Digital Experience](../containerization/helm_operator_core_migration.md)**  
 This section shows the steps to migrate your Core profile. You can create a backup of the profile and restore it later in the Helm deployment.
-   **[Migrate Digital Asset Management persistence and binaries](../containerization/helm_dam_migration.md)**  
 This section shows the guidance to back up and restore your DAM persistence and binaries.
-   **[Migrate to restore Core and DAM Operator deployment](../containerization/helm_fallback_migration_Operator_deployment.md)**  
 This section shows the steps necessary to revert a DX 9.5 Container Deployment to the previous [Operator-based deployment](deploy_container_platforms.md) in case of any error during the migration to Helm.

**Parent topic:**[Helm-based deployment \| HCL Digital Experience](../containerization/helm.md)

