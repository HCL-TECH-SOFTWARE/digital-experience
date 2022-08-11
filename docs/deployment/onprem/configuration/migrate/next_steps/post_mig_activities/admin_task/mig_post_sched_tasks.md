# Reviewing and updating scheduled tasks

After you complete the migration by using the Configuration Wizard, review your scheduled tasks to verify that the tasks are still valid for your current environment.

If you performed a remote migration, then you must update the table prefix and jdni name for your schedulers, which are based on the host name. You can complete this update by running the action-clean-scheduled-tasks ConfigEngine task, which removes all schedulers. After you run this task, you must restart the Portal server, and then the schedulers are re-created with the correct table prefix and jdni name. Learn more about [Configuring schedulers using the administration console](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/scheduler/tasks/tsch_configadmin.html).

1.  Review your scheduled tasks:

    1.  Start the WebSphere® Application Server administrative console.

    2.  Select **Resources** \> **Schedulers**.

2.  Run the following task:

    -   AIX® HP-UX Linux™ Solaris: `./ConfigEngine.sh action-clean-scheduled-tasks -DWasPassword=password -Drelease.DbPassword=password`
    -   IBM® i: `ConfigEngine.sh action-clean-scheduled-tasks -DWasPassword=password -Drelease.DbPassword=password`
    -   Windows™: `ConfigEngine.bat action-clean-scheduled-tasks -DWasPassword=password -Drelease.DbPassword=password`
3.  Restart the Portal server so that the default scheduled tasks that are required for operation are created.


**Parent topic:**[Administrative tasks](../migrate/mig_post_admintasks.md)

