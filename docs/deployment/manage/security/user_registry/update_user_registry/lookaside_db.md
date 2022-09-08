# Configuring a property extension database

A property extension database stores attributes that the LDAP directory does not or cannot store, but that you want to include in your portal user registry. This situation often occurs when you are using an LDAP directory that does not allow schema extensions for new attributes to support portal applications. When you configure a property extension database, you effectively extend the user registry to make new attributes available as part of your portal user profile. However, it is preferable to store all user attributes in the main user registry. Complete this task only if you cannot add attributes to your LDAP directory.

!!!note "Notes"
    -   Configure portal security with your main user registry before you configure your property extension database. If you complete these steps and then configure your user registry, your property extension database configuration does not work.
    -   The Virtual Member Manager (VMM) has a limitation that includes no tasks to update attributes. To change an attribute, you must first remove the attribute then add it again. For this reason, ensure that you spell all attributes correctly and use caution when you add attributes to your property extension database.
    -   The VMM database schema has a limit of 36 characters on the repository ID column. For this reason, you must use a repository ID that is 36 characters or less.


1.  This task requires server connections.

    -   In a stand-alone environment, ensure the HCL Portal server is running.
    -   In a clustered environment, stop all application servers on the system. Ensure that the HCL Digital Experience Portal server is stopped. Then, start the node agent and deployment manager servers.

2.  Complete the following steps to install the enterprise archive (.ear) file on WebSphere® Application Server:

    1.  Open a command prompt.

    2.  Change to the wp_profile_root/ConfigEngine directory.

    3.  Run the following task:

        **Table 1: Stand-alone and cluster tasks to install the enterprise archive file**
        The wp-la-install-ear task installs the enterprise archive file.

        |Environment|Task|
        |-----------|----|
        |Stand-alone environment| -   AIX® HP-UX Linux™ Solaris: `./ConfigEngine.sh wp-la-install-ear -DWasPassword=password` <br> -   IBM® i: `ConfigEngine.sh wp-la-install-ear -DWasPassword=password` <br> -   Windows™: `ConfigEngine.bat wp-la-install-ear -DWasPassword=password`|
        |Clustered environment| -   AIX HP-UX Linux Solaris: `./ConfigEngine.sh wp-la-install-ear -DWasPassword=dmgr_password -DServerName=dmgr_server_name -DNodeName=node_name` <br> - IBM i: `ConfigEngine.sh wp-la-install-ear -DWasPassword=dmgr_password -DServerName=dmgr_server_name -DNodeName=node_name` <br> -   Windows: `ConfigEngine.bat wp-la-install-ear -DWasPassword=dmgr_password -DServerName=dmgr_server_name -DNodeName=node_name` <br><br> Where the default value for dmgr_server_name is `dmgr`. You can find the dmgr_server_name value in the WebSphere Integrated Solutions Console. Go to **System administrator > Deployment Manager > Configuration tab > General Properties > Name**. <br> <br> Where node_name is the name of the node where the deployment manager is located. You can find the node_name value in the WebSphere Integrated Solutions Console. Go to **System administrator > Deployment Manager > Runtime tab > General Properties > Node Name**.|

3.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, read [Starting and stopping servers, deployment managers, and node agents](../../../stopstart.md).

4.  Set up a new database. Create a user with the appropriate database privileges for accessing the database. The database user needs to have permissions to create tables in the database schema and permission to access the data in the database tables.

    **Instructions for setting up databases:** Refer to the appropriate documentation for the type of database you want to set up.

    **Consulting your database administrator:** A database administrator typically completes the task of setting up a new database. However, the following steps are provided for your reference in the event you create a stand-alone database for testing or demonstration purposes. Consult your database administrator if you plan to create a database for a production environment.

    **Table 2. Steps for creating a database to use as a database user registry**
    This table describes the steps by database type to create a database for your database user registry.

    |Database|Steps|
    |--------|-----|
    |DB2®|Complete the following steps to create a DB2 database: <br> 1.  Install DB2. <br> 2.  Enter the following commands to tune your database: <br><br> `db2 "CREATE DB dbname using codeset UTF-8 territory us PAGESIZE 8192"` <br> `db2 "UPDATE DB CFG FOR dbname USING applheapsz 4096"` <br> `db2 "UPDATE DB CFG FOR dbname USING app_ctl_heap_sz 1024"` <br> `db2 "UPDATE DB CFG FOR dbname USING stmtheap 32768"` <br> `db2 "UPDATE DB CFG FOR dbname USING dbheap 2400"` <br> `db2 "UPDATE DB CFG FOR dbname USING locklist 1000"` <br> `db2 "UPDATE DB CFG FOR dbname USING logfilsiz 4000"` <br> `db2 "UPDATE DB CFG FOR dbname USING logprimary 12"` <br> `db2 "UPDATE DB CFG FOR dbname USING logsecond 20"` <br> `db2 "UPDATE DB CFG FOR dbname USING logbufsz 32"` <br> `db2 "UPDATE DB CFG FOR dbname USING avg_appls 5"` <br> `db2 "UPDATE DB CFG FOR dbname USING locktimeout 30"` <br> `db2 "UPDATE DB CFG FOR dbname using AUTO_MAINT off"` |
    |Oracle|Complete the following steps to create an Oracle database: <br> 1.  Install Oracle with Unicode database and National character sets such as UTF8, AL32UTF8, or AL16UTF16. <br> 2.  Configure the database in Dedicated Server Mode. <br> 3.  Enter the initial buffer pool sizes or set them according to your business needs: <br> `db_block_size =8192` <br> `db_cache_size =300M` <br> `db_files =1024` <br> `log_buffer =65536` <br> `open_cursors =1500open_cursors =1500` <br> `pga_aggregate_target =200M` <br> `pre_page_sga =true` <br> `processes =300` <br> `shared_pool_size =200M` |
    |SQL Server|Complete the following steps to create an SQL Server database: <br> 1.  Create an SQL Server database with a name of your choice. <br> 2.  Create a SQL Server database user with the same permissions as your Portal database users for this new database. <br><br> **Tip**: Do not use userid=sa. This ID is a special user ID that has restrictions. Instead, create a new user. Then, create a new schema with the user as owner and assign the user permissions to create database tables. <br><br> **Note**: Install SQL Server with the appropriate portal database collation so that your tempdb collation setting matches the collation that you use for the property extension database. The tempdb collation is inherited from the master database, which you set when you install SQL Server.|

    If IBM® DB2® for i database is used, complete the following steps:
        -   Log in to a remote IBM® i session.
        -   Enter the `strsql` command to start the interactive sql session.
        -   Enter the `create schema database_name` command, where `database_name` is the name you want to use for the database.

5.  Complete the following steps to define the DbDriver and DbLibrary parameter values:

    1.  Go to the wp_profile_root/ConfigEngine/properties directory.

    2.  Open the wkplc_dbtype.properties file with a text editor.

    3.  Enter a value for the following parameters in the appropriate database type properties heading:

        -   db_type.DbDriver
        -   db_type.DbLibrary

        When using DB2®: 
        ```
        db2.DbDriver=com.ibm.db2.jcc.DB2Driver
        db2.DbLibrary=/opt/IBM/DB2/SQLLIB/java/db2jcc4.jar
        ```

    4.  Save your changes.

6.  Specify values for the data source parameters in the wp_add_LA.properties file:

    1.  Go to the wp_profile_root/ConfigEngine/config/helpers directory.

    2.  Open the wp_add_LA.properties file with a text editor.

    3.  Specify values for the following parameters:

        !!!note
            Go to the properties file for specific information about the parameters.

        -   la.JdbcProviderName
        -   la.DbType
        -   la.DbUrl
        -   la.DbName
        -   la.DataSourceName
        -   la.DbUser
        -   la.DbPassword
        -   la.DbSchema
        
        Configuration when using DB2®:
        ```
        la.JdbcProviderName=vmmdbJDBC
        la.DbType=db2
        la.DbUrl=jdbc:db2://myDatabaseServer:50000/VMMDB:returnAlias=0;
        la.DbName=VMMDB
        la.DataSourceName=vmladbDS
        la.DbUser=db2admin
        la.DbPassword=mypassword!
        la.DbSchema=VMM
        ```

        **SQL server:** If your property extension database is an SQL Server, `la.DbUser` and `la.DbSchema` must be the same value.

        **Adding parameters for a clustered environment:** Add the following parameters to the wp_add_LA.properties if you are setting up the property extension database on a clustered environment:

        -   la.schemaLocation=WAS_install_location_on_DMGR/AppServer/etc/wim/setup
        -   la.laPropXML=WAS_install_location_on_DMGR/AppServer/etc/wim/setup/wimlaproperties.xml
        
        Where WAS_install_location_on_DMGR is the local path on your deployment manager node.

    4.  Save your changes.

7.  Change the value for the com.ibm.SOAP.requestTimeout parameter in the `wp_profile`. On a clustered environment, please change it in all profiles (Deployment Manager Profile and in all Nodes):

    1.  Go to the wp_profile_root\properties directory.

    2.  Open the soap.client.props with a text editor.

    3.  Locate the com.ibm.SOAP.requestTimeout parameter.

    4.  Ensure that the value is greater than 6000.

    5. Locate the com.ibm.SOAP.loginUserid parameter and enter the application server admin user name.

        `com.ibm.SOAP.loginUserid=wpadmin`

    6. Locate the com.ibm.SOAP.loginPassword parameter and add the password for the administration user.

        `com.ibm.SOAP.loginPassword=mypassword!`
    
    7. Locate the com.ibm.SOAP.loginSource parameter and set the value properties instead of prompt.

        `com.ibm.SOAP.loginSource=properties`

    8.  Save your changes.

8.  Complete the following step in a clustered environment:

    1.  Open the wkplc.properties file.

    2.  Set the property value for federated.db.DbType if you are using a database user registryor if the cell is migrated from a previous version.

    3.  Save your changes.

    4.  Open a command prompt.

    5.  Change to the wp_profile_root/ConfigEngine directory.

    6.  Run the following task to create the local Deployment Manager WebSphere variable that is used to access the database JAR files:

        -   AIX HP-UX Linux Solaris: `./ConfigEngine.sh wp-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -Ddb_type.DmgrDbLibrary=local path of the database jars on the Deployment Manager -DDmgrNodeName=dmgr_node_name -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true`
        -   IBM i: `ConfigEngine.sh wp-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -Ddb_type.DmgrDbLibrary=local path of the database jars on the Deployment Manager -DDmgrNodeName=dmgr_node_name -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`
        -   Windows: `ConfigEngine.bat wp-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -Ddb_type.DmgrDbLibrary=local path of the database jars on the Deployment Manager -DDmgrNodeName=dmgr_node_name -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`
        
            !!!note
                Set the db_type in db_type.DmgrDbLibrary to the type of database you are using, for example db2. The local full path of the database jars on the Deployment Manager is one of the following options:

                    -   DB2 Type 2 driver: db2java.zip
                    -   DB2 Type 4 driver: db2jcc4.jar:db2jcc_license_cu.jar
                    -   DB2 Express® Type 2 driver: db2java.zip
                    -   DB2 Express Type 4 driver: db2jcc4.jar:db2jcc_license_cu.jar
                    -   DB2 for z/OS® Type 2 driver: db2java.zip
                    -   DB2 for z/OS Type 4 driver: db2jcc4.jar:db2jcc_license_cisuz.jar
                    -   Oracle: ojdbc14.jar
                    -   SQL Server JDBC driver that is provided by Microsoft: sqljdbc4.jar

                Command on Windows: <br>
                `ConfigEngine.bat wp-prep-vmm-db-secured-environment -DWasPassword=wpadmin -DDbDomain=la -Ddb2.DmgrDbLibrary=C:/IBM/DB2/SQLLIB/java/db2jcc4.jar -DDmgrNodeName=dmgrNode01 -DparentProperties=C:/IBM/WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`


    7.  Run the following task on each node to create the variable that is used to access the VMM database JAR files. Include each node name as a comma-separated list in the command:

        -   AIX HP-UX Linux Solaris: `./ConfigEngine.sh wp-node-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -DVmmNodeName=node_name,node_name,node_name -Ddb_type.NodeDbLibrary=local full path of the database jars -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`
        -   IBM i: `ConfigEngine.sh wp-node-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -DVmmNodeName=node_name,node_name,node_name -Ddb_type.NodeDbLibrary=local full path of the database jars -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`
        -   Windows: `ConfigEngine.bat wp-node-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -DVmmNodeName=node_name,node_name,node_name -Ddb_type.NodeDbLibrary=local full path of the database jars -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`

            !!!note
                VmmNodeName is a list of one or more HCL Portal nodes names in the cell which share database driver paths. Set the db_type in db_type.NodeDbLibrary to the type of database you are using, for example db2.

                Command on AIX®HP-UXLinux™Solaris: <br> `ConfigEngine.sh wp-node-prep-vmm-db-secured-environment -DWasPassword=mypassword! -DDbDomain=la -DVmmNodeName=dmgrNode1,PortalNode1 -Ddb2.NodeDbLibrary=/opt/IBM/DB2/SQLLIB/java/db2jcc4.jar -DparentProperties=/opt/IBM/WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true` <br><br>
                Command on Windows™: <br>
                `ConfigEngine.bat wp-node-prep-vmm-db-secured-environment -DWasPassword=mypassword! -DDbDomain=la -DVmmNodeName=dmgrNode1,PortalNode1 -Ddb2.NodeDbLibrary=C:/IBM/DB2/SQLLIB/java/db2jcc4.jar -DparentProperties=C:/IBM/WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`

    8.  Stop and restart all necessary servers to propagate your changes.

9. Run the following task on each node to create the variable and sql-scripts that are used to access the VMM database JAR files.

    -   AIX®HP-UXLinux™Solaris: `ConfigEngine.sh wp-update-vmm-sqlserver-files -DDbType=<db_type> -Ddbuser=<db_user> -Ddbschema=<schema_name> -Ddbname=<database_name> 
-DschemaLocation=<Full path to /WebSphere/AppServer/etc/wim/setup/lookaside> -Dfinal.schemaLocation=<Full path to /WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/work/was/wim/database>`
    - IBM® i: `ConfigEngine.sh wp-update-vmm-sqlserver-files -DDbType=<db_type> -Ddbuser=<db_user> -Ddbschema=<schema_name> -Ddbname=<database_name> -DschemaLocation=<Full path to /WebSphere/AppServer/etc/wim/setup/lookaside> 
-Dfinal.schemaLocation=<Full path to /WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/work/was/wim/database>`
    -   Windows™: ConfigEngine.bat wp-update-vmm-sqlserver-files -DDbType=<db_type> -Ddbuser=<db_user> -Ddbschema=<schema_name> -Ddbname=<database_name> -DschemaLocation=<Full path to /WebSphere/AppServer/etc/wim/setup/lookaside> 
-Dfinal.schemaLocation=<Full path to /WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/work/was/wim/database>

    Command on AIX®HP-UXLinux™Solaris: `ConfigEngine.sh wp-update-vmm-sqlserver-files -DDbType=db2 -Ddbuser=db2admin -Ddbschema=VMM -Ddbname=VMMDB -DschemaLocation=/opt/IBM/WebSphere/AppServer/etc/wim/setup/lookaside 
-Dfinal.schemaLocation=/opt/IBM/WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/work/was/wim/database`

    Command on Windows™: `ConfigEngine.bat wp-update-vmm-sqlserver-files -DDbType=db2 -Ddbuser=db2admin -Ddbschema=VMM -Ddbname=VMMDB -DschemaLocation=C:/IBM/WebSphere/AppServer/etc/wim/setup/lookaside 
-Dfinal.schemaLocation=C:/IBM/WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/work/was/wim/database`

    !!!note
        The `-DskipCleanup=true` command property can be used to check the result of the command which will be stored in directory: `<install_root>/WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/work/`

10. If you are configuring the property extension repository from a remote deployment manager, complete the following steps:

    If you are not on a remote deployment manager, continue to the next step.

    1.  Copy the following two files from the Portal server to the wp_profile_root/ConfigEngine/config/work/was/wim/lookaside/ directory location on the remote deployment manager server:

        !!!note
            If the directory does not exist on the remote server, create it now.

        -   /etc/wim/setup/lookaside/bootstrap.sql
        -   /etc/wim/setup/lookaside/keys.sql

    2.  Copy the following database files from the Portal server to the wp_profile_root/ConfigEngine/config/work/was/wim/lookaside/database/ directory on the remote deployment manager server:

        !!!note
            If the directory does not exist on the remote server, create it now.

        -   /etc/wim/setup/lookaside/database/dbclean.sql
        -   /etc/wim/setup/lookaside/database/indexes.sql
        -   /etc/wim/setup/lookaside/database/primarykeys.sql
        -   /etc/wim/setup/lookaside/database/references.sql
        -   /etc/wim/setup/lookaside/database/schema.sql

11. Run the following task to add a property extension repository to the federated LDAP repository:

    -   AIX HP-UX Linux Solaris: .`/ConfigEngine.sh wp-configure-la-complete -DWasPassword=password -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`
    -   IBM i: `ConfigEngine.sh wp-configure-la-complete -DWasPassword=password -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`
    -   Windows: `ConfigEngine.bat wp-configure-la-complete -DWasPassword=password -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`

    Command on AIX® HP-UX Linux™ Solaris: `ConfigEngine.sh wp-configure-la-complete -DWasPassword=wpadmin -DparentProperties=/opt/IBM/WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`

    Command on Windows™: `ConfigEngine.bat wp-configure-la-complete -DWasPassword=wpadmin -DparentProperties=C:/IBM/WebSphere/AppServer/profiles/wp_profile/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`

12. Stop and restart the appropriate servers to propagate the changes.

13. Specify values for the following parameters in wp_add_LA.properties file:

    !!!note
        Go to the properties file for specific information about the parameters.

    -   la.providerURL
    -   la.propertyName
    -   la.entityTypes
    -   la.dataType
    -   la.multiValued
    
    **Values for the dataType parameter:** Available data types that are defined in com.ibm.websphere.wim.SchemaConstants:

    -   String
    -   Int
    -   Date
    -   AnySimpleType
    -   AnyURI
    -   Boolean
    -   Long
    -   Double
    -   Short
    
    !!!note
        A complete overview of valid dataType values can be found in the [Configuring a property extension repository in a federated repository configuration](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.0.0/com.ibm.websphere.nd.multiplatform.doc/info/ae/ae/twim_propertyextrepos.html) file. All constant values of DATA_TYPE_* fields are valid input for la.dataType. Only the String data type is valid for displaying attributes in the Profile Management portlet. These attributes can be added to the Profile Management portlet through the configuration mode interface.

14. Complete the following steps to add the attribute to the property extension database:

    1.  Run the following task:

        !!!note
            If the path name contains blank space, you must enclose the path in quotation marks.

        -   AIX HP-UX Linux Solaris: `./ConfigEngine.sh wp-add-la-property -DWasPassword=password -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`
        -   IBM i: `ConfigEngine.sh wp-add-la-property -DWasPassword=password -DparentProperties=full path to wp_profile_root/ConfigEngine/config/helpers/wp_add_LA.properties -DSaveParentProperties=true`
        -   Windows: `ConfigEngine.bat wp-add-la-property -DWasPassword=password -DparentProperties=full path to wp_profile_root\\ConfigEngine\\config\\helpers\\wp_add_LA.properties -DSaveParentProperties=true`

    2.  Run the following task to add the attributes to Web Content Manager if you use user profiling or Category selection trees:

        !!!note
            If the path name contains blank space, you must enclose the path in quotation marks.

        -   AIX HP-UX Linux Solaris: `./ConfigEngine.sh add-wcm-la-attributes -DWasPassword=password`
        -   IBM i: `ConfigEngine.sh add-wcm-la-attributes -DWasPassword=password`
        -   Windows: `ConfigEngine.bat add-wcm-la-attributes -DWasPassword=password`
       
       **Receiving an authentication prompt:** This task makes an EJB call to WebSphere Application Server, which requires authentication. You might receive an authentication prompt. Enter the appropriate WebSphere Application Server user ID and password.

15. In a clustered environment, synchronize each node in the cluster.

16. Stop and restart the appropriate servers to propagate the changes.



