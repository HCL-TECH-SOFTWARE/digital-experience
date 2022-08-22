# Adding a database user registry in a stand-alone environment

Add a database user registry to the default federated repository in a stand-alone environment. You must repeat the steps for each additional database user registry that you plan to add. In a stand-alone server environment, you can complete the following task when the servers are either stopped or stared.

1.  Prior to configuring security, you should use the IBM® WebSphere® Application Server `backupConfig` task to create and store a back up of the HCL Digital Experience configuration. For more information, see *backup Config command*.

2.  Set up a new database, including creating a new user with appropriate database privileges for accessing the database:

    **Instructions for setting up databases:** Refer to the appropriate documentation for the type of database you want to set up.

    **Consulting your databse administrator:** A database administrator typically completes the task of setting up a new database. However, the following steps are provided for your reference in the event you are creating a stand-alone database for testing or demonstration purposes. Consult your database administrator before proceeding with the following steps if you plan to create a database for a production environment.

    -   AIX®, Linux™, Solaris, Windows™

        |Database|Steps|
        |--------|-----|
        |DB2®|Complete the following steps to create a DB2 database:        1.  Install DB2.
        2.  Enter the following database tuning commands:

            ```
db2 "CREATE DB dbname using codeset UTF-8 territory us PAGESIZE 8192"
         db2 "UPDATE DB CFG FOR dbname USING applheapsz 4096"
         db2 "UPDATE DB CFG FOR dbname USING app_ctl_heap_sz 1024"
         db2 "UPDATE DB CFG FOR dbname USING stmtheap 32768"
         db2 "UPDATE DB CFG FOR dbname USING dbheap 2400"
         db2 "UPDATE DB CFG FOR dbname USING locklist 1000"
         db2 "UPDATE DB CFG FOR dbname USING logfilsiz 4000"
         db2 "UPDATE DB CFG FOR dbname USING logprimary 12"
         db2 "UPDATE DB CFG FOR dbname USING logsecond 20"
         db2 "UPDATE DB CFG FOR dbname USING logbufsz 32"
         db2 "UPDATE DB CFG FOR dbname USING avg_appls 5"
         db2 "UPDATE DB CFG FOR dbname USING locktimeout 30"
         db2 "UPDATE DB CFG FOR dbname USING AUTO MAINT off"
            ```

|
        |Oracle|Complete the following steps to create an Oracle database:        1.  Install Oracle using UNICODE Database and National character sets such as UTF8, AL32UTF8, or AL16UTF16.
        2.  Configure the database in Dedicated Server Mode.
        3.  Enter the recommended initial buffer pool sizes or set them according to your business needs:
            -   db\_block\_size = `8192`
            -   db\_cache\_size = `300M`
            -   db\_files = `1024`
            -   log\_buffer = `65536`
            -   open\_cursors = `1500` open\_cursors = `1500`
            -   pga\_aggregate\_target = `200M`
            -   pre\_page\_sga = `true`
            -   processes = `300`
            -   shared\_pool\_size = `200M`
|
        |SQL Server|Complete the following steps to create an SQL Server database:        1.  Install SQL Server.
        2.  Set Collation to `case-sensitive`.
**Note:** Install SQL Server with the appropriate portal database collation so that your tempdb collation setting matches the collation you use for the property extension database. The tempdb collation is inherited from the master database, which you set when you install SQL Server.

|

    -   IBM i: Complete the following steps to create the DB2 for i database
        1.  Login to a remote IBM i session.
        2.  Enter the `strsql` command to start the interactive sql session.
        3.  Enter the `create schema databse_name` command, where `databse_name` is the name you want to use for the database.
3.  Complete the following steps to define the DbDriver and DbLibrary parameter values:

    1.  Go the following directory:

        -   AIX, Linux, Solaris, IBM i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.
        -   Windows: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties directory.
    2.  Locate and open wkplc\_dbtype.properties with any text editor.

    3.  Enter a value for the following parameters in the appropriate database type properties heading:

        -   dbtype.DbDriver
        -   db\_type.DbLibrary
        -   db2.JdbcProviderName
    4.  Save your changes.

4.  Use a text editor to open the wkplc.properties file, located in the

    -   AIX, Linux, Solaris, IBM i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.
    -   Windows: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties directory.
5.  Enter a value for the following required parameters in the wkplc.properties file under the VMM Federated Database Properties heading:

    **Note:** See the properties file for specific information about the required and advanced parameters.

    -   federated.db.DataSourceName
    -   federated.db.DbType
    -   federated.db.DbUrl
    -   federated.db.id
    -   federated.db.baseDN
    -   federated.db.DbUser
    -   federated.db.DbPassword
    -   federated.db.DbName
6.  Change the value for the com.ibm.SOAP.requestTimeout parameter to 1000.

    1.  Go to the following directory:

        -   AIX, Linux, Solaris, IBM i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/properties directory.
        -   Windows: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\properties directory.
    2.  Locate and open soap.client.props with any text editor.

    3.  Locate the com.ibm.SOAP.requestTimeout parameter and ensure the value is greater than 1000.

    4.  Save and close soap.client.props.

7.  Add a database user registry to the default federated repository.

    -   AIX, Linux, Solaris: Run the `./ConfigEngine.sh wp-create-db -DWasPassword=password` task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   IBM i: Run the `ConfigEngine.sh wp-create-db -DWassPassword=password` task from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   Windows: Run the `ConfigEngine.bat wp-create-db -DWasPassword=password` task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.
    **Note:** Users who are not in an LDAP do not have awareness and cannot see if the other users are online. This can happen if you install HCL Portal and then enable a Federated LDAP or Federated database user repository that does not contain that user. Also, users who sign up using the Self Care portlet do not have awareness.

8.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see *Starting and stopping servers, deployment managers, and node agents.*

9.  Complete the following steps to update the user registry where new users and groups are stored:

    **Note:** If you have multiple LDAP user registries or a database user registry, run this task for the user registry that you want to define as the default user registry.

    1.  Use a text editor to open the `wkplc.properties` file.
    2.  Enter a value for the following required parameters in the `wkplc.properties` file under the VMM supported entity types configuration heading:

        **Note:** See the properties file for specific information about the required and advanced parameters.

        -   personAccountParent
        -   groupParent
        -   personAccountRdnProperties
        -   groupRdnProperties
        The parameters groupParent and personAccountParent must be set to the same value.

        -   `personAccountParent=dc=yourco,dc=com`
        -   `groupParent=dc=yourco,dc=com`
    3.  Save your changes to the wkplc.properties file.
    4.  Delete the old attributes before you add the new attributes.

        -   AIX, Linux, Solaris: Run the `./ConfigEngine.sh wp-set-entitytypes -DWasPassword=password` task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
        -   IBM i: Run the `ConfigEngine.sh wp-set-entitytypes -DWasPassword=password` task from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
        -   Windows: Run the `ConfigEngine.bat wp-set-entitytypes -DWasPassword=password` task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.
    5.  Stop and restart all necessary servers to propagate your changes.
10. List the names and types of configured repositories.

    -   AIX, Linux, Solaris: Run the `./ConfigEngine.sh wp-query-repository -DWasPassword=password` task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   IBM i: Run the `ConfigEngine.sh wp-query-repository -DWasPassword=password` task from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   Windows: Run the `ConfigEngine.bat wp-query-repository -DWasPassword=password` task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.


**Related information**  


[Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md)

[backupConfig command](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=clt-backupconfig-command)

