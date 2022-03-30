# Using staging to production techniques to complete the migration 

Choose this option if you want to use staging to production techniques to migrate from Portal Version 8.0.0.1 on WebSphere® Application Server Version 8.5.5.2 to HCL Digital Experience 8.5.

You can set up a staging server with a Portal 8.0.0.1 and WebSphere Application Server 8.0.0.5 installation, and use the staging to production tools to create a new environment that is based on the source environment.

1.  Install Portal 8.0.0.1 and WebSphere Application Server 8.0.0.5 on a staging server with the same operating system as the source server.

2.  Use the HCL Portal staging to production tools to deploy a stand-alone server that is based on the source server.

3.  Install the HCL Digital Experience 8.5 and WebSphere Application Server 8.5.5.2 binary files on the target server.

4.  Access the Configuration Wizard on the target server, and click **Migrate to a New Version** \> **Migrate a Stand-alone Server**.

5.  When you complete the migration of the stand-alone staging server, you can build it into a cluster if needed.


**Parent topic:**[Migrating from Portal 8.0.0.1 on WebSphere Application Server 8.5.5.2 ](../migrate/mig_plan_was855.md)

**Related information**  


[Configuration Wizard ](../config/cw_overview.md)

