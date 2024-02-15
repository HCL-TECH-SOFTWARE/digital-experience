# Oracle: Enabling the auto space advisor background task

If you use an Oracle database, you must complete a post-migration task to enable the Oracle background task called "Auto Space Advisor" after your run the upgrade-profile task during migration using the Configuration Wizard.

1.  Enter the following SQL:

    ```
    BEGIN
    	dbms_auto_task_admin.enable(
    		client_name => 'auto space advisor',
    		operation  => NULL,
    		window_name => NULL);
    END;
    /
    ```


To ensure that you enabled the "Auto Space Advisor" task, you can check whether the task is enabled or disabled by entering the following command from SQL Plus:

```
SQL> select status from dba_autotask_client where client_name = 'auto space advisor';
```


???+ info "Related information"
    -   [Oracle: Disabling the auto space advisor background task](../../../../../../deployment/manage/migrate/settingup_target_env/db_consideration/mig_pre_oracle_disableasa.md)

