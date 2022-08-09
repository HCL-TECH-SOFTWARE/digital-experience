# Applying maintenance to a shared configuration server farm

If you are using a shared file system, changes made to the shared file system are visible to all farm instances instantaneously. If you are using a cloned file system, changes are visible after replication. The changes might not be activated until a portal or application instance is restarted. Such changes include IBM WebSphere Application Server configuration changes. These changes are made to the shared configuration profile or updates to shared Java resources, like JAR files in a shared library or a redeployed application. Change the Farm Master. The Farm Master is the only server that should have write access to the shared file system.

**Warning:** Because you are sharing the file system and the database, most maintenance actions require a downtime with this type of farm configuration.

Applying maintenance requires the following general steps:

1.  Take the farm out of service.
2.  Shut down the Farm Workers.
3.  Apply the maintenance on the Farm Master.
4.  In cloned file system, re-clone the worker. Go to [Configuring a cloned file system](cfg_farm_clone.md) for information.
5.  Start the Farm Workers.

You might have a business requirement to have only a minimal downtime for your environment. Use a setup that is called "two lines of production". In a farm, this setup results in a shadow setup of the farm. Both farm installations are used in an active or passive mode. While the active one is serving the request, the passive farm is available for maintenance. When maintenance is complete on the passive system, the roles of the system are switched. Then, maintenance can be applied to the second system. To keep customization data on both systems at the latest level, the Community and Customization domains are shared between systems.

1.  While all Farm Workers are mounted to Farm Image A, maintenance is applied to Farm Image B. Use Farm Master B in this instance.
2.  When maintenance is complete, stop each worker.
    -   If you are using a cloned file system, re-clone the workers. Go to [Configuring a cloned file system](cfg_farm_clone.md) for information.
    -   If you are using a shared file system, unmount Farm Image A and mount Farm Image B. Then, start the Worker with the new image.
3.  Finally, all Workers are running on Image B and maintenance is applied to the Farm Image A. Use Farm Master A.

As the Farm Workers are reused, the two lines of production setup require an additional Farm Master and more space on the shared file system.

**Parent topic:**[Maintaining a portal farm](../install/maintain_portal_farm.md)

