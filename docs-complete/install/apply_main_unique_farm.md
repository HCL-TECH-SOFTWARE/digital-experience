# Applying maintenance to a unique portal farm configuration 

When the portal farm is a series of uniquely installed HCL Digital Experience instances, each installation acts as a totally independent instance from the other farm instances. The only thing in common between farm instances are the shareable database domains \(customization and community data\), which are typically not updated during maintenance operations.

To apply maintenance in such a farm configuration requires application of the changes to every server instance, as each instance has a dedicated and isolated configuration from another instance. So whether the change is as simple as a single tuning change to as complex as the deployment of a fix pack or new application deployment, these changes need to be made to each server in the farm.

Since each farm instance has its own release database and JCR content repository, all that needs to be done is to remove a server from the work load management, so that it does not receive any more user requests, allowing the individual farm instance to be updated, tested, then returned to workload management. In this way, each farm member can be independently updated and tested, or done in batches. Therefore, multiple farms are not required to achieve continuous availability, as long as a portion of the farm can handle production traffic during the maintenance application process.

**Parent topic:**[Maintaining a portal farm](../install/maintain_portal_farm.md)

