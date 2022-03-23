# High availability 

HCL Portal Express offering is licensed for use in a single-server configuration and may not be used in either a cloned configuration or a clustered configuration except when implementing idle standby for the purpose of failover.

In an idle standby configuration, a server is considered idle if it is used exclusively for administrative needs and to help a failover situation. Per license, HCL Portal Express is installed on the idle standby server, but it is not operational to service user transactions or to query workloads.

Implementing idle standby requires the purchase of a separate HCL Portal Express Idle Standby Part Number, in addition to licensing the primary server, regardless of whether your primary servers are currently licensed under the per User License Option or the per Processor Value Unit License Option.

Once you have an Idle Standby License Option, you can use HCL Portal Express in an idle standby configuration, for failover situations only. To achieve failover, implement a primary node and a secondary node. The primary node can be configured to be active always; the secondary node becomes active only if the primary node fails

**Remember:** For the deployment manager and eachHCL Portal Express node to be in the cluster, verify that each system clock is set to within 5 minutes of the others or the addNode command fails.

**Parent topic:**[Planning to install HCL Digital Experience](../plan/plan_installation.md)

