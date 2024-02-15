# Maintaining a portal farm

Maintenance can be considered any change to the system, such as the deployment of application updates, platform configuration changes, or the application of corrective service. The mechanism used to apply maintenance to a farm depends on the type of farm deployed: unique installations or shared configuration.

Choose the appropriate farm type for your environment to apply maintenance procedures:

-   **[Applying maintenance to a unique portal farm configuration](apply_main_unique_farm.md)**  
When the portal farm is a series of uniquely installed HCL Digital Experience instances, each installation acts as a totally independent instance from the other farm instances. The only thing in common between farm instances are the shareable database domains \(customization and community data\), which are typically not updated during maintenance operations.
-   **[Applying maintenance to a shared configuration server farm](apply_main_shared_farm.md)**  
If you are using a shared file system, changes made to the shared file system are visible to all farm instances instantaneously. If you are using a cloned file system, changes are visible after replication. The changes might not be activated until a portal or application instance is restarted. Such changes include IBM WebSphere Application Server configuration changes. These changes are made to the shared configuration profile or updates to shared Java resources, like JAR files in a shared library or a redeployed application. Change the Farm Master. The Farm Master is the only server that should have write access to the shared file system.


