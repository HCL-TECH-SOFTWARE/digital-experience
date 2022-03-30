# Replicating the DynaCache service

This section describes how to replicate Dynacache service in HCL Digital Experience by customizing timeout properties in the WAS Resource Environment Provider \(REP\).

Previous versions up to HCL Digital Experience 8.5 and 9.0 uses Dynamic Cache \(DynaCache\), a cluster-aware cache service that allows all HCL Portal cluster members to know any name/value pair changes made by any member.

Having a cluster-aware cache does not make sense for HCL Digital Experience 9.5 onwards, as the versions are on a Portal farming or containerization setup. To work around this issue, an administrator can customize the timeout properties in the WAS Resource Environment to replicate the DynaCache service.

****Tuning the servers to replicate DynaCache service in your container environment****

**Note:** You need to be on HCL Digital Experience 9.5 CF172 container release to perform this task.

1.  Configure the following timeout parameters in the WAS Resource Provider \(REP\):

    -   `db.cache.invalidation.read.freq` **= \(timeout in milliseconds\)**
        -   Time between “reads” of the database table containing invalidation messages. **By default, timeout is 1 minute \(60000 milliseconds\)**. Practically, this means this is the longest delay before any dynacache invalidation is “known” on each member \(e.g. Kubernetes, POD, farm worker\).
    -   `db.cache.invalidation.cleanup.freq` **= \(timeout in milliseconds\)**
        -   Age before an entry in the database table containing invalidation messages is deleted. **By default, timeout is 10 minutes \(600000 milliseconds\)**. Generally, the number should be much larger than the “red” frequency to ensure that invalidation messages are read before they are deleted.

To replicate DynaCache service in an HCL Portal farm deployment, see *Tuning the servers in your environment* in [Roadmap: Portal farm](https://help.hcltechsw.com/digital-experience/8.5/install/rm_production_farm.md).

**Parent topic:**[Customizing your container deployment](../containerization/customization.md)

