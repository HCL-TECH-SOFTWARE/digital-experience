# Oracle: Disabling the auto space advisor background task

To prevent deadlocks during migration, you must complete a task to disable the Oracle background task called "Auto Space Advisor" before your run the upgrade-profile task during migration using the Configuration Wizard. After you complete migration, you can enable "Auto Space Advisor" as a post-migration task.

You can check if the "Auto Space Advisor" task is enabled or disabled by entering the following command from SQL Plus:

```
SQL> select status from dba_autotask_client where client_name = 'auto space advisor';
```

1.  Enter the following SQL:

    ```
    BEGIN
    	dbms_auto_task_admin.disable(
    		client_name => 'auto space advisor',
    		operation  => NULL,
    		window_name => NULL);
    END;
    /
    ```

    **Note:** If you do not turn off the "Auto Space Advisor," it is possible for the migration to fail with the following Oracle error: ORA-00060: deadlock detected while waiting for resource.


When you complete migrating your data using the Configuration Wizard, complete the post-migration step to enable the "Auto Space Advisor" Oracle background task.


**Related information**  


[Oracle: Enabling the auto space advisor background task](../migrate/mig_post_oracle_enableasa.md)

