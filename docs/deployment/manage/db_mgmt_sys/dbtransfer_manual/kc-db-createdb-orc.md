# Database transfer: Create Oracle database

Manual steps from the Configuration Wizard are included in HCL Digital Experience (DX) Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

!!!important
    The steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1. See the Oracle product documentation for instructions on creating databases.
2. Create all databases using the Unicode Database and National character sets such as `UTF8`, `AL32UTF8`, or `AL16UTF16`.
3. Configure all databases to be used with HCL DX in Dedicated Server Mode.
4. Create all Oracle databases with the `AL32UTF8` character set for maximum Unicode compatibility. The National Character Set should be set to `AL16UTF16`.
5. Select the appropriate JDBC driver based on your Oracle version:

    - **Oracle 12c**: Configure database transfer and runtime with the `ojdbc7.jar` and `xdb6.jar` library files. These two libraries must be in the same directory.

    - **Oracle 19c and Oracle 21c**: Configure database transfer and runtime with the `ojdbc11.jar` library file. The `xdb6.jar` file is not required for Oracle 19c and 21c. Use the `ojdbc11.jar` driver provided by Oracle for your specific Oracle Database version. Refer to the [Oracle JDBC Downloads page](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html){target="blank"} for the latest driver.

    !!! note
        HCL DX is tested against Oracle 19c and Oracle 21c. Oracle 12c is no longer covered by standard Oracle support. If you are using Oracle 12c, plan an upgrade to a supported Oracle version.

6. Set the buffer pools allocated to the Oracle database in order for HCL DX to communicate with the Java Content Repository database. Refer to the Oracle product documentation for information on how to set the buffer pools. Use these recommended buffer pool values as a guide for setting your values:

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

7. If you are using the Java Content Repository, increase the `open_cursors` value based on the table count in the Java Content Repository schema.

8. Raise the number of parallel servers as appropriate. For example, if you have more than 875 parallel servers, you should set the `parallel_max_servers` to 1200.

9. Configure the Oracle parameter `CURSOR_SHARING` to allow similar SQL statements to be shared when possible, which prevents parsing and establishing a new execution plan. Oracle uses the execution plan to gather the data that is needed to satisfy a request. HCL DX supports both options for `CURSOR_SHARING`, and neither option affects portlet applications. Contact your database administrator for further assistance with these options;

    - **FORCE**

        Oracle uses the same execution plan for similar SQL statements, even if their values differ. This execution plan might not provide optimum performance. For example, similar SQL statements with different values might behave differently when running the same plan.

    - **EXACT**

        Oracle shares the execution plan only for identical SQL statements that use the same values. This option prevents SQL statements from executing under suboptimal performance conditions.
