# Configuration Wizard log files

The Configuration Wizard generates log files each time you run it. The log file can help you to debug problems.

The trace string for the Configuration Wizard is: `com.ibm.wplc.config.wizard.*=all`.

The log files for the Configuration Wizard are located in the following directory:

-   Windows™: [AppServer\_root](../reference/wpsdirstr.md#was_root)\\logs\\server1
-   AIX® Linux™ Solaris: [AppServer\_root](../reference/wpsdirstr.md#was_root)/logs/server1
-   IBM® i: [AppServer\_root](../reference/wpsdirstr.md#was_root)/logs/cw\_profile

    **Note:** On IBM i, the [AppServer\_root](../reference/wpsdirstr.md#was_root) refers to the UserData path.


You can view log files from the referenced directory. Log files are also generated that reflect the name of the task ran. These files are generated after the task has completed. They contain task-specific copies of the output in the Configuration Wizard log file and can be used to track output for one specific task when multiple tasks are run. The Configuration Wizard log file is generated at the task runs and remains in the `PortalServer/logs` directory. Each log file is backed up if a task is run again.


**Related information**  


[Configuration Wizard: Running the configuration](../cw_panelhelp/cw_workflow_opt.md)

