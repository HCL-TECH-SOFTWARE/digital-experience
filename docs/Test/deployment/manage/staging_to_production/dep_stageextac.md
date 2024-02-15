# Staging and external security managers

Staging to production where external security managers \(ESM\) are used is complex and needs special consideration. The following section discusses considerations of the impact of external security managers on the staging process. External security managers can be used to externalize authentication and authorization decisions from the portal. Externalization of authentication decisions to an external security manager has no impact on the staging to production functionality. Management of authorizations by an external security manager has an impact on the staging to production scenario. Using an external security manager for authorization decisions requires that the same external security manager is used to manage authentication to the portal.

Use the security manager to manage entities that the centralized security manager controls. Managing those entities elsewhere violates the principles of centralized security control. This principle does not change in staging-to-production support. For staging-to-production, this principle leads to the inability to modify security definitions of a resource that is externalized. The following sections describe the direct implications in external security manager (ESM) scenarios for staging-to-production.

The XML configuration interface is used for configuration management in the staging-to-production support. The XML configuration interface covers configurations that are managed by the portal. The XML configuration interface configuration files contain a list of all role mappings for all internally managed resources. Using external security managers allows management of entitlements for selected resources outside of the portal.

For HCL Portal, the XML configuration interface covers security definitions of externalized resources. You can provide a request parameter within an export request through this functionality for the XML configuration interface. This parameter causes the XML configuration interface to include role mappings of all resources in the output file. The exported file contains role mappings for internally managed resources and externally managed resources. This feature allows for the staging of role mapping of all resources that are not already externalized in the target system.

The following support matrix illustrates staging support of entitlements in scenarios that involve external security managers (ESM). The source system refers to the system from which the configuration is exported (typically the integration system). The target system is the system into which the configuration is going to be imported (for example, staging or production system).

| |no-ESM Target|ESM Target|
|--|-------------|----------|
|no-ESM Source|All role mappings can be fully synchronized.|Resources on the target system are initially managed internally after release staging.

 Resources can be externalized on the target system. Role mappings of externally managed resources in the target system are reinternalized.

|
|ESM Source|Role mappings of internalized resources can be synchronized.

 Synchronization of role mappings of externalized resources results in errors during import. (Manual configuration file updates ("change external to internal state") are required to prevent errors.)

|Role mappings of internalized resources are fully synchronized.

 Role mappings of externalized resources can be synchronized only on time of externalization.

 Role mappings for resources that are externalized on the target system cannot be synchronized.

|

In summary, role mappings can be synchronized when the resource is managed internally by the HCL Portal server. When the resource is externalized, role mappings are owned by the external security manager system and cannot be synchronized.

However, it is not possible to modify role mappings for existing externalized resources and synchronize their updated role mappings to a target system.

## Staging from system without external security manager to a system with external security manager

This combination is used where the integration system is reduced as much as possible and is configured like a development environment rather than a production environment.

All entitlements for all resources that are staged in this scenario are fully synchronized. All resources in the target system are managed internally. The external security manager is not used for managing authorization decisions.

It is possible to manually externalize resources. You can also manually edit XML configuration interface configuration files. In this step, all role mappings that were defined within the portal before are moved to the external security manager. Managing these resources externally might include updating the role mappings of these resources outside the portal.

During staging of subsequent releases, resources with updated entitlements appear in the XML configuration interface file as internally managed resources. These resources are internalized when this file is imported to the target system. You can manually update the configurations for externally managed resources to prevent this action. However, there is no build-in support for managing these kinds of configurations. Special care must be taken to manually replicate all changes of role mappings of externalized resources on the target system.

## Staging from system with external security manager to system without external security manager

In this scenario, entitlements for internalized resources can be staged without any limitations. These configurations appear as if the source system was not configured to use an external security manager.

If entitlements for resources that are externalized on the source system are staged, errors occur on the target system. During import of this configuration, the target system is asked to externalize a resource. The system is not configured to support resource externalization. This option results in an error condition.

These errors can be resolved by manually updating the configuration file to have all resources that are managed internally. If role mappings for externalized resources are contained in the configuration file, entitlements are synchronized between the two systems.


