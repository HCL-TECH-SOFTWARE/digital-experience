# Configuring a property extension database

A property extension database stores attributes that the LDAP directory does not or cannot store, but that you want to include in your portal user registry. This situation often occurs when you are using an LDAP directory that does not allow schema extensions for new attributes to support portal applications. When you configure a property extension database, you effectively extend the user registry to make new attributes available as part of your portal user profile. However, it is preferable to store all user attributes in the main user registry. Complete this task only if you cannot add attributes to your LDAP directory.

-   Configure portal security with your main user registry before you configure your property extension database. If you complete these steps and then configure your user registry, your property extension database configuration does not work.
-   The Virtual Member Manager \(VMM\) has a limitation that includes no tasks to update attributes. To change an attribute, you must first remove the attribute then add it again. For this reason, ensure that you spell all attributes correctly and use caution when you add attributes to your property extension database.
-   The VMM database schema has a limit of 36 characters on the repository ID column. For this reason, you must use a repository ID that is 36 characters or less.

1.  This task requires server connections.

    -   In a stand-alone environment, ensure the HCL Portal server is running.
    -   In a clustered environment, stop all application servers on the system. Ensure that the HCL Digital Experience Portal server is stopped. Then, start the node agent and deployment manager servers.
2.  Complete the following steps to install the enterprise archive \(.ear\) file on WebSphere® Application Server:

    1.  Open a command prompt.

    2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

    3.  Run the following task:

        |Environment|Task|
        |-----------|----|
        |Stand-alone environment|        -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-la-install-ear -DWasPassword=password
        -   IBM® i: ConfigEngine.sh wp-la-install-ear -DWasPassword=password
        -   Windows™: ConfigEngine.bat wp-la-install-ear -DWasPassword=password
|
        |Clustered environment|        -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-la-install-ear -DWasPassword=dmgr\_password -DServerName=dmgr\_server\_name -DNodeName=node\_name
        -   IBM i: ConfigEngine.sh wp-la-install-ear -DWasPassword=dmgr\_password -DServerName=dmgr\_server\_name -DNodeName=node\_name
        -   Windows: ConfigEngine.bat wp-la-install-ear -DWasPassword=dmgr\_password -DServerName=dmgr\_server\_name -DNodeName=node\_name
 Where the default value for dmgr\_server\_name is dmgr. You can find the dmgr\_server\_name value in the WebSphere Integrated Solutions Console. Go to **System administrator** \> **Deployment Manager** \> **Configuration tab** \> **General Properties** \> **Name**.

 Where node\_name is the name of the node where the deployment manager is located. You can find the node\_name value in the WebSphere Integrated Solutions Console. Go to **System administrator** \> **Deployment Manager** \> **Runtime tab** \> **General Properties** \> **Node Name**.

|

3.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, read [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).

4.  Set up a new database. Create a user with the appropriate database privileges for accessing the database. The database user needs to have permissions to create tables in the database schema and permission to access the data in the database tables.

    **Instructions for setting up databases:** Refer to the appropriate documentation for the type of database you want to set up.

    **Consulting your database administrator:** A database administrator typically completes the task of setting up a new database. However, the following steps are provided for your reference in the event you create a stand-alone database for testing or demonstration purposes. Consult your database administrator if you plan to create a database for a production environment.

    |Database|Steps|
    |--------|-----|
    |DB2®|Complete the following steps to create a DB2 database:    1.  Install DB2.
    2.  Enter the following commands to tune your database:

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
db2 "UPDATE DB CFG FOR dbname using AUTO_MAINT off"

        ```

|
    |Oracle|Complete the following steps to create an Oracle database:    1.  Install Oracle with Unicode database and National character sets such as UTF8, AL32UTF8, or AL16UTF16.
    2.  Configure the database in Dedicated Server Mode.
    3.  Enter the initial buffer pool sizes or set them according to your business needs:
        -   db\_block\_size =8192
        -   db\_cache\_size =300M
        -   db\_files =1024
        -   log\_buffer =65536
        -   open\_cursors =1500open\_cursors =1500
        -   pga\_aggregate\_target =200M
        -   pre\_page\_sga =true
        -   processes =300
        -   shared\_pool\_size =200M
|
    |SQL Server|Complete the following steps to create an SQL Server database:    1.  Create an SQL Server database with a name of your choice.
    2.  Create a SQL Server database user with the same permissions as your Portal database users for this new database.

**Tip:** Do not use userid=sa. This ID is a special user ID that has restrictions. Instead, create a new user. Then, create a new schema with the user as owner and assign the user permissions to create database tables.

**Note:** Install SQL Server with the appropriate portal database collation so that your tempdb collation setting matches the collation that you use for the property extension database. The tempdb collation is inherited from the master database, which you set when you install SQL Server.

|

5.  Complete the following steps to create the IBM DB2 for i database:

    **Instructions for setting up databases:** Refer to the appropriate documentation for the type of database you want to set up.

    **Consulting your database administrator:** A database administrator typically completes the task of setting up a new database. However, the following steps are provided for your reference in the event you create a stand-alone database for testing or demonstration purposes. Consult your database administrator before you proceed with the following steps if you plan to create a database for a production environment.

    1.  Log in to a remote IBM i session.

    2.  Enter the strsql command to start the interactive sql session.

    3.  Enter the create schema database\_name command, where database\_name is the name you want to use for the database.

6.  Complete the following steps to define the DbDriver and DbLibrary parameter values:

    1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

    2.  Open the wkplc\_dbtype.properties file with a text editor.

    3.  Enter a value for the following parameters in the appropriate database type properties heading:

        -   db\_type.DbDriver
        -   db\_type.DbLibrary
    4.  Save your changes.

7.  Specify values for the data source parameters in the wp\_add\_LA.properties file:

    1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/config/helpers directory.

    2.  Open the wp\_add\_LA.properties file with a text editor.

    3.  Specify values for the following parameters:

        **Note:** Go to the properties file for specific information about the parameters.

        -   la.JdbcProviderName
        -   la.DbType
        -   la.DbUrl
        -   la.DbName
        -   la.DataSourceName
        -   la.DbUser
        -   la.DbPassword
        -   la.DbSchema
        **SQL server:** If your property extension database is an SQL Server, la.DbUser and la.DbSchema must be the same value.

        **Adding parameters for a clustered environment:** Add the following parameters to the wp\_add\_LA.properties if you are setting up the property extension database on a clustered environment:

        -   la.schemaLocation=WAS\_install\_location\_on\_DMGR/AppServer/etc/wim/setup
        -   la.laPropXML=WAS\_install\_location\_on\_DMGR/AppServer/etc/wim/setup/wimlaproperties.xml
        Where WAS\_install\_location\_on\_DMGR is the local path on your deployment manager node.

    4.  Save your changes.

8.  Change the value for the com.ibm.SOAP.requestTimeout parameter:

    1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\properties directory.

    2.  Open the soap.client.props with a text editor.

    3.  Locate the com.ibm.SOAP.requestTimeout parameter.

    4.  Ensure that the value is greater than 1000.

    5.  Save your changes.

9.  Complete the following step in a clustered environment:

    1.  Open the wkplc.properties file.

    2.  Set the property value for federated.db.DbType if you are using a database user registryor if the cell is migrated from a previous version.

    3.  Save your changes.

    4.  Open a command prompt.

    5.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

    6.  Run the following task to create the local Deployment Manager WebSphere variable that is used to access the database JAR files:

        -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -Ddb\_type.DmgrDbLibrary=local path of the database jars on the Deployment Manager -DDmgrNodeName=dmgr\_node\_name -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
        -   IBM i: ConfigEngine.sh wp-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -Ddb\_type.DmgrDbLibrary=local path of the database jars on the Deployment Manager -DDmgrNodeName=dmgr\_node\_name -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
        -   Windows: ConfigEngine.bat wp-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -Ddb\_type.DmgrDbLibrary=local path of the database jars on the Deployment Manager -DDmgrNodeName=dmgr\_node\_name -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
        **Note:** Set the db\_type in db\_type.DmgrDbLibrary to the type of database you are using, for example db2. The local full path of the database jars on the Deployment Manager is one of the following options:

        -   DB2 Type 2 driver: db2java.zip
        -   DB2 Type 4 driver: db2jcc4.jar:db2jcc\_license\_cu.jar
        -   DB2 Express® Type 2 driver: db2java.zip
        -   DB2 Express Type 4 driver: db2jcc4.jar:db2jcc\_license\_cu.jar
        -   DB2 for z/OS® Type 2 driver: db2java.zip
        -   DB2 for z/OS Type 4 driver: db2jcc4.jar:db2jcc\_license\_cisuz.jar
        -   Oracle: ojdbc14.jar
        -   SQL Server JDBC driver that is provided by Microsoft: sqljdbc4.jar
    7.  Run the following task on each node to create the variable that is used to access the VMM database JAR files. Include each node name as a comma-separated list in the command:

        -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-node-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -DVmmNodeName=node\_name,node\_name,node\_name -Ddb\_type.NodeDbLibrary=local full path of the database jars -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
        -   IBM i: ConfigEngine.sh wp-node-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -DVmmNodeName=node\_name,node\_name,node\_name -Ddb\_type.NodeDbLibrary=local full path of the database jars -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
        -   Windows: ConfigEngine.bat wp-node-prep-vmm-db-secured-environment -DWasPassword=password -DDbDomain=la -DVmmNodeName=node\_name,node\_name,node\_name -Ddb\_type.NodeDbLibrary=local full path of the database jars -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
        **Note:** VmmNodeName is a list of one or more HCL Portal nodes names in the cell which share database driver paths. Set the db\_type in db\_type.NodeDbLibrary to the type of database you are using, for example db2.

    8.  Stop and restart all necessary servers to propagate your changes.

10. If you are configuring the property extension repository from a remote deployment manager, complete the following steps:

    If you are not on a remote deployment manager, continue to the next step.

    1.  Copy the following two files from the Portal server to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/config/work/was/wim/lookaside/ directory location on the remote deployment manager server:

        **Note:** If the directory does not exist on the remote server, create it now.

        -   /etc/wim/setup/lookaside/bootstrap.sql
        -   /etc/wim/setup/lookaside/keys.sql
    2.  Copy the following database files from the Portal server to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/config/work/was/wim/lookaside/database/ directory on the remote deployment manager server:

        **Note:** If the directory does not exist on the remote server, create it now.

        -   /etc/wim/setup/lookaside/database/dbclean.sql
        -   /etc/wim/setup/lookaside/database/indexes.sql
        -   /etc/wim/setup/lookaside/database/primarykeys.sql
        -   /etc/wim/setup/lookaside/database/references.sql
        -   /etc/wim/setup/lookaside/database/schema.sql
11. Run the following task to add a property extension repository to the federated LDAP repository:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-configure-la-complete -DWasPassword=password -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
    -   IBM i: ConfigEngine.sh wp-configure-la-complete -DWasPassword=password -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
    -   Windows: ConfigEngine.bat wp-configure-la-complete -DWasPassword=password -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
12. Stop and restart the appropriate servers to propagate the changes.

13. Specify values for the following parameters in wp\_add\_LA.properties file:

    **Note:** Go to the properties file for specific information about the parameters.

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
    **Note:** A complete overview of valid dataType values can be found in the [Configuring a property extension repository in a federated repository configuration](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.0.0/com.ibm.websphere.nd.multiplatform.doc/info/ae/ae/twim_propertyextrepos.html) file. All constant values of DATA\_TYPE\_\* fields are valid input for la.dataType. Only the String data type is valid for displaying attributes in the Profile Management portlet. These attributes can be added to the Profile Management portlet through the configuration mode interface.

14. Complete the following steps to add the attribute to the property extension database:

    1.  Run the following task:

        **Note:** If the path name contains blank space, you must enclose the path in quotation marks.

        -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-add-la-property -DWasPassword=password -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
        -   IBM i: ConfigEngine.sh wp-add-la-property -DWasPassword=password -DparentProperties=full path to wp\_profile\_root/ConfigEngine/config/helpers/wp\_add\_LA.properties -DSaveParentProperties=true
        -   Windows: ConfigEngine.bat wp-add-la-property -DWasPassword=password -DparentProperties=full path to wp\_profile\_root\\ConfigEngine\\config\\helpers\\wp\_add\_LA.properties -DSaveParentProperties=true
    2.  Run the following task to add the attributes to Web Content Manager if you use user profiling or Category selection trees:

        **Note:** If the path name contains blank space, you must enclose the path in quotation marks.

        -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh add-wcm-la-attributes -DWasPassword=password
        -   IBM i: ConfigEngine.sh add-wcm-la-attributes -DWasPassword=password
        -   Windows: ConfigEngine.bat add-wcm-la-attributes -DWasPassword=password
        **Receiving an authentication prompt:** This task makes an EJB call to WebSphere Application Server, which requires authentication. You might receive an authentication prompt. Enter the appropriate WebSphere Application Server user ID and password.

15. In a clustered environment, synchronize each node in the cluster.

16. Stop and restart the appropriate servers to propagate the changes.



