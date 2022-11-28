# Adding a database user registry in a clustered environment

Add a database user registry to the default federated repository in a clustered environment. You must repeat the steps for each additional database user registry that you plan to add. Before you begin to add the database user registry in a clustered environment, start the deployment manager and node agent and verify that they are able to synchronize.

1.  Prior to configuring security, you should use the IBM® WebSphere® Application Server `backupConfig` task to create and store a back up of the HCL Digital Experience configuration. For more information, see [backupConfig command](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=clt-backupconfig-command).

2.  Set up a new database, including creating a new user with appropriate database privileges for accessing the database:

    **Instructions for setting up databases:** Refer to the appropriate documentation for the type of database you want to set up.

    **Consulting your databse administrator:** A database administrator typically completes the task of setting up a new database. However, the following steps are provided for your reference in the event you are creating a stand-alone database for testing or demonstration purposes. Consult your database administrator before proceeding with the following steps if you plan to create a database for a production environment.

    -   AIX®, Linux™, Solaris, Windows™

        |Database|Steps|
        |--------|-----|
        |DB2®|Complete the following steps to create a DB2 database:<br> 1. Install DB2.<br> 2. Enter the following database tuning commands:<br> `db2 "CREATE DB dbname using codeset UTF-8 territory us PAGESIZE 8192"`<br> `db2 "UPDATE DB CFG FOR dbname USING applheapsz 4096"`<br> `db2 "UPDATE DB CFG FOR dbname USING app_ctl_heap_sz 1024"`<br> `db2 "UPDATE DB CFG FOR dbname USING stmtheap 32768"`<br> `db2 "UPDATE DB CFG FOR dbname USING dbheap 2400"`<br> `db2 "UPDATE DB CFG FOR dbname USING locklist 1000"`<br> `db2 "UPDATE DB CFG FOR dbname USING logfilsiz 4000"`<br> `db2 "UPDATE DB CFG FOR dbname USING logprimary 12"`<br> `db2 "UPDATE DB CFG FOR dbname USING logsecond 20"`<br> `db2 "UPDATE DB CFG FOR dbname USING logbufsz 32"`<br> `db2 "UPDATE DB CFG FOR dbname USING avg_appls 5"`<br> `db2 "UPDATE DB CFG FOR dbname USING locktimeout 30"`<br> `db2 "UPDATE DB CFG FOR dbname USING AUTO MAINT off"`|
        |Oracle|Complete the following steps to create an Oracle database:<br> 1.   Install Oracle using UNICODE Database and National character sets such as UTF8, AL32UTF8, or AL16UTF16.<br> 2.  Configure the database in Dedicated Server Mode.<br> 3. Enter the recommended initial buffer pool sizes or set them according to your business needs:<br> - db\_block\_size = `8192`<br> - db\_cache\_size = `300M`<br> - db\_files = `1024`<br> - log\_buffer = `65536`<br> - open\_cursors = `1500` open\_cursors = `1500`<br> - pga\_aggregate\_target = `200M`<br> - pre\_page\_sga = `true`<br> - processes = `300`<br> - shared\_pool\_size = `200M`|
        |SQL Server|Complete the following steps to create an SQL Server database:<br>  1.  Install SQL Server.<br> 2.  Set Collation to `case-sensitive`.<br> **Note:** Install SQL Server with the appropriate portal database collation so that your tempdb collation setting matches the collation you use for the property extension database. The tempdb collation is inherited from the master database, which you set when you install SQL Server.|

    -   IBM i: Complete the following steps to create the DB2 for i database
        1.  Login to a remote IBM i session.
        2.  Enter the `strsql` command to start the interactive sql session.
        3.  Enter the `create schema databse_name` command, where `databse_name` is the name you want to use for the database.

3.  Complete the following steps to define the DbDriver and DbLibrary parameter values:

    1.  Go the following directory:

        -   AIX, Linux, Solaris, IBM i: [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.
        -   Windows: [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties directory.

    2.  Locate and open wkplc\_dbtype.properties with any text editor.

    3.  Enter a value for the following parameters in the appropriate database type properties heading:

        -   dbtype.DbDriver
        -   db\_type.DbLibrary
        -   db2.JdbcProviderName

    4.  Save your changes.

4.  Use a text editor to open the wkplc.properties file, located in the

    -   AIX, Linux, Solaris, IBM i: [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.
    -   Windows: [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties directory.

5.  Enter a value for the following required parameters in the wkplc.properties file under the VMM Federated Database Properties heading:

    !!!note
        See the properties file for specific information about the required and advanced parameters.

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

        -   AIX, Linux, Solaris, IBM i: [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/properties directory.
        -   Windows: [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\properties directory.

    2.  Locate and open soap.client.props with any text editor.

    3.  Locate the com.ibm.SOAP.requestTimeout parameter and ensure the value is greater than 1000.

    4.  Save and close soap.client.props.

7.  Complete the following steps to configure the database repository library paths:

    1.  Create the local Deployment Manager WebSphere variable that is used to access the database jar files.

        -   AIX, Linux, Solaris: Run the `./ConfigEngine.sh wp-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=federated.db -Ddb_type.DmgrDbLibrary=local path of the databse jars on the Deployment Manager -DDmgrNodeName=dmgr\_node\_name` task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
        -   IBM i: Run the `ConfigEngine.sh wp-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=federated.db -Ddb_type.DmgrDbLibrary=local path of the databse jars on the Deployment Manager -DDmgrNodeName=dmgr\_node\_name` task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory
        -   Windows: Run the `ConfigEngine.bat wp-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=federated.db -Ddb_type.DmgrDbLibrary=local path of the databse jars on the Deployment Manager -DDmgrNodeName=dmgr\_node\_name` task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.

        !!!note
            The `db_type` in `db_type.DmgrDbLibrary` should be set to the type of database you are using, for example:

            -   AIX, Linux, Solaris Windows: `db2`
            -   IBM i: `db2_iseries`

        The local full path of the database jars on the Deployment Manager should be one of the following options:

        -   AIX, Linux, Solaris, Windows:

            -   DB2 Type 2 driver: `db2java.zip`
            -   DB2 Type 4 driver: `db2jcc4.jar;db2jcc_license_cu.jar`
            -   DB@ for z/OS Type 2 driver: `db2java.zip`
            -   DB2 for z/OS Type 4 driver: `db2jcc4.jar;db2jcc_license_cisuz.jar`
            -   Oracle: `ojdbc14.jar`
            -   SQL Server JDBC driver that is provided by Microsoft: `sqljdbc. jar`
        -   IBM i:

            -   IBM DB2 for i Type 2 driver: `/QIBM/ProdData/Java400/ext/db2_classes.jar`
            -   IBM DB2 for i Type 4 driver: `/QIBM/ProdData/HTTP/Public/jt400/lib/jt400.jar`

    2.  Run the following task. Include each node name as a comma-separated list in the command:

        **Running the task:** You do not have to run this task more than one time. You can run this task from any node in the cluster.

        1.  -   AIX, Linux, Solaris, Windows: Set the property value for value for federated.db.DbType in the `wkplc.properties` file if you use a database user registry or if the cell is migrated from a previous version.
            -   IBM i: Set the property value for federated.db.DbType if you use a database user registry or if the cell is migrated from previous version and set the property value for la.DbType if you use a property extension database in the `wkplc.properties` file.

        2.  Create the variable that is used to access the VMM database jar files.

            -   AIX, Linux, Solaris: Run the `./ConfigEngine.sh wp-node-prep-vmm-db-secured-environment -DWassPassword=password -DDbDomain=federated.db -DVmmNodeName=node_name -Ddb_type.NodeDbLibrary=local full path of the databse jars` task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory on each node.
            -   IBM i: Run the `ConfigEngine.sh wp-node-prep-vmm-db-secured-environment -DWassPassword=password -DDbDomain=federated.db -DVmmNodeName=node_name -Ddb_type.NodeDbLibrary=local full path of the databse jars` task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory on each node.
            -   Windows: Run the `ConfigEngine.bat wp-node-prep-vmm-db-secured-environment -DWassPassword=password -DDbDomain=federated.db -DVmmNodeName=node_name,node_name,node_name -Ddb_type.NodeDbLibrary=local full path of the databse jars` task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory on each node.

            !!!note
                VmmNodeName is a list of one or more HCL Portal nodes names in the cell which share database driver paths. The `db_type` in `db_type.NodeDbLibrary` should be set to the type of database you are using, for example:

                -   AIX, Linux, Solaris, Windows: `db2`.
                -   IBM i:

                    -   IBM DB2 for i Type 2 driver: `/QIBM/ProdData/Java400/ext/db2_classes.jar`
                    -   IBM DB2 for i Type 4 driver: `/QIBM/ProdData/HTTP/Public/jt400/lib/jt400.jar`

    3.  Stop and restart all necessary servers to propagate your changes. 

8.  Add a database user registry to the default federated repository.

    -   AIX, Linux, Solaris: Run the `./ConfigEngine.sh wp-create-db -DWasPassword=password` task, from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   IBM i: Run the `ConfigEngine.sh wp-create-db -DWassPassword=password` task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   Windows: Run the `ConfigEngine.bat wp-create-db -DWasPassword=password` task, from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.

    !!!note
        Users who are not in an LDAP do not have awareness and cannot see if the other users are online. This can happen if you install HCL Portal and then enable a Federated LDAP or Federated database user repository that does not contain that user. Also, users who sign up using the Self Care portlet do not have awareness.

9.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md).

10. Complete the following steps to update the user registry where new users and groups are stored:

    !!!note
        If you have multiple LDAP user registries or a database user registry, run this task for the user registry that you want to define as the default user registry.

    1.  Use a text editor to open the `wkplc.properties` file.

    2.  Enter a value for the following required parameters in the `wkplc.properties` file under the VMM supported entity types configuration heading:

        !!!note
            See the properties file for specific information about the required and advanced parameters.

        -   personAccountParent
        -   groupParent
        -   personAccountRdnProperties
        -   groupRdnProperties

        The parameters groupParent and personAccountParent must be set to the same value.

        -   `personAccountParent=dc=yourco,dc=com`
        -   `groupParent=dc=yourco,dc=com`

    3.  Save your changes to the wkplc.properties file.

    4.  Delete the old attributes before you add the new attributes.

        -   AIX, Linux, Solaris: Run the `./ConfigEngine.sh wp-set-entitytypes -DWasPassword=password` task, from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
        -   IBM i: Run the `ConfigEngine.sh wp-set-entitytypes -DWasPassword=password` task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
        -   Windows: Run the `ConfigEngine.bat wp-set-entitytypes -DWasPassword=password` task, from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.

    5.  Stop and restart all necessary servers to propagate your changes.

11. List the names and types of configured repositories.

    -   AIX, Linux, Solaris: Run the `./ConfigEngine.sh wp-query-repository -DWasPassword=password` task, from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   IBM i: Run the `ConfigEngine.sh wp-query-repository -DWasPassword=password` task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
    -   Windows: Run the `ConfigEngine.bat wp-query-repository -DWasPassword=password` task, from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.

If you created your clustered environment, including the additional nodes, and then completed the steps in this task, you must now run the `update-jcr-admin` task on the secondary node. See the related links section for instructions.


???+ info "Related information"
    - [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md)
    - [backupConfig command](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=clt-backupconfig-command)

