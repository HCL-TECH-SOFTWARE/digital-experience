# Database transfer: Create Oracle database 

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  See the Oracle product documentation for instructions on creating databases.

2.  All databases must be created using Unicode Database and National character sets such as UTF8, AL32UTF8, or AL16UTF16.

3.  It is recommended that all databases to be used with HCL Portal are configured in Dedicated Server Mode.

4.  If you are using Oracle

5.  If you are using Oracle 12c databases, you must configure database transfer and runtime with the ojdbc7.jar and xdb6.jar library files. These two libraries must be in the same directory.

6.  You must set the buffer pools allocated to the Oracle database in order for HCL Portal to communicate with the Java™ Content Repository database. Refer to the Oracle product documentation for information on how to set the buffer pools. Use these recommended buffer pool values as a guide for setting your values:

    ```
    db_block_size = 8192 bytes
    db_cache_size = 1 gigabyte
    db_files = 1024 files
    log_buffer = 65536 bytes
    open_cursors = 1500 cursors
    pga_aggregate_target = 200 megabytes
    pre_page_sga = true
    processes = 300 processes
    shared_pool_size = 200 megabytes
    
    ```

7.  If you are using Java Content Repository, the open\_cursors value might need to be increased based on the table count in the Java Content Repository schema.

8.  Raise the number of parallel servers as appropriate. For example, if you have more than 875 parallel servers, you should set the parallel\_max\_servers to 1200.

9.  The Oracle parameter CURSOR\_SHARING allows similar SQL Statements to be shared when possible, which prevents parsing and establishing a new execution plan. The execution plan is used by Oracle to gather the data that is needed to satisfy a request. There are two options for CURSOR\_SHARING. HCL Portal supports both options. Regardless of the option that is selected, portlet applications should not be affected. Contact your database administrator for further assistance on these options.

    -   **FORCE**

        When you select this option, Oracle uses the same execution plan for all SQLs that are similar in value even if the values are different. When you use this option, the execution plan may not provide optimum performance. For example, similar SQLs with different values may behave differently when executed running the same plan.

    -   **EXACT**

        When you select this option, Oracle only shares the same execution plan for SQLs that are identical and use the same values. This option removes the risk of a SQL statement being executed when optimum performance conditions do not exist.


**Parent topic:**[Manual Steps: Database Transfer option in the Configuration Wizard](../eua-workflows/kc-db-parent.md)

