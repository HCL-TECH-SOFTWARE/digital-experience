# Port conflicts 

During migration, it is possible that a port conflict might occur when starting up the target environment deployment manager, node agents, or HCL Digital Experience servers.

If you are completing a local migration, you might encounter a port conflict due to the source and target environments using the same ports. You can manually update the ports in the serverindex.xml located in the target\_wp\_profile/config/cells/cellname/nodes/nodename path to correct the port conflict issues.

You might also encounter a port conflict with the configuration wizard server. If this occurs, update the Configuration Wizard ports in the serverindex.xml located in cw\_profile/config/cells/cellnamenodes/nodename.

**Parent topic:**[Migration considerations ](../plan/mig_plan_high_availability.md)

