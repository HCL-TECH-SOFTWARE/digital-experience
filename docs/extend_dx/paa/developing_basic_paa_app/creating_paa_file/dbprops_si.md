# Database properties for the Solution Installer

Some Portal Application Archive (PAA) files require access to an external database. The database properties are stored in either the assemblyName.properties file for the assembly or in the componentName.properties file of the component requiring database support.

The Solution Installer uses the following database properties:

-   **dbName**

    The name of the database created to store tables required by the PAA file. Ideally, this should be specified in the default.properties file, especially if the name of the database is explicitly included in the table population scripts.

-   **DbPort**

    Specify the database port number. The following examples are default port numbers for each database, but your server port number might be different if you changed the port values:

    -   Derby: 1527
    -   DB2®: 50000
    -   Oracle: 1521
    -   SQL Server: 1433
-   **DbHostname**

    The host name or IP address of the server hosting the database.

-   **dbType**

    The type of database. Use the following valid database types:

    -   Derby: derby
    -   DB2®: db2
    -   Oracle: oracle
    -   SQL Server: SQL Server
-   **dbProviderName**

    The name of jdbc provider to be used. Use the following example jdbc provider names:

    -   Derby: wpdbJDBC_derby
    -   DB2®: wpdbJDBC_db2
    -   Oracle: wpdbJDBC_oracle
    -   SQL Server: wpdbJDBC_sqlserver
-   **dbDriverType**

    Connection pool data source

-   **dbUsername**

    The username for connecting to the database.

-   **dbPassword**

    The password for connecting to the database.

-   **dbDriverName**

    The name of database driver. Use the following valid driver names:

    -   Derby: org.apache.derby.jdbc.EmbeddedDriver
    -   DB2®: com.ibm.db2.cc.DB2Driver
    -   Oracle: oracle.jdbc.driver.OracleDriver
    -   SQL Server: com.microsoft.sqlserver.jdbc.SQLServerDriver
-   **dbDriverPath**

    The path to the database driver. Use one of the following examples with values specific to your database:

    -   Derby: ${WasHome}/derby/lib
    -   DB2®: ${WasHome}/deploytool/itp/plugins/${dbPlugin}/driver
    -   Oracle: {$ORACLE_HOME}/jdbc/lib/

        !!!note
            ORACLE_HOME is the environment variable specified during the installation of the Oracle database.

    -   SQL Server: installation_directory/sqljdbc_2.0/enu
-   **dbClasspath**

    The database class path value. Use one of the following examples with values specific to your database:

    -   Derby: ${dbDriverPath}/derby.jar:${dbDriverPath}/derbyclient.jar:$ {dbDriverPath}/derbytools.jar:${dbDriverPath}/derbynet.jar
    -   DB2®: ${dbDriverPath}/db2jcc4.jar:$ {dbDriverPath}/db2jcc_license_cisuz.jar:${dbDriverPath}/db2jcc_license_cu.jar
    -   Oracle: ${dbDriverPath}/ojdbc6.jar
    -   SQL Server: installation_directory/sqljdbc_2.0/enu/sqljdbc4.jar
-   **dbUrl**

    The database URL value. Use one of the following examples with values specific to your database:

    -   Derby: jdbc:${dbType}:${dbName}
    -   DB2®: jdbc:${dbType}://${dbHostname}:${dbPort}/${dbName}
    -   Oracle: jdbc:${dbType}:thin:@${dbHostname}:${dbPort}:$\{dbName}
    -   SQL Server: jdbc:sqlserver://hostname:$ {DbPort};SelectMethod=cursor;DatabaseName=tbmesg
-   **dbJndiName**

    Specify the JNDI name that will be used for a component.

-   **dsTemplateName**

    The data source template name. Use one of the following examples with values specific to your database:

    -   Derby: Derby JDBC Driver DataSource
    -   DB2®: DB2 Universal JDBC Driver DataSource
    -   Oracle: Oracle JDBC Driver DataSource
    -   SQL Server: Microsoft SQL Server JDBC Driver - XA DataSource
-   **jpTemplateName**

    Use one of the following examples with values specific to your database:

    -   Derby: Derby JDBC Provider
    -   DB2®: DB2 Universal JDBC Driver Provider
    -   Oracle: Oracle JDBC Driver Provider
    -   SQL Server: Microsoft SQL Server JDBC Driver
-   **dsDbDriverType**

    The type of the database driver that the data source connects to. Valid values are 2 and 4. 

-   **dataSourceName**

    Specifies the Data Source name will be used for the component.

-   **dbAuthDataAlias**

    Specifies the Authentication Alias.

-   **db.connectionTimeout**

    The interval, in seconds, after which a connection request times out and a ConnectionWaitTimeoutException is thrown. Default value is 180.

-   **db.maxConnections**

    The maximum number of physical connections that you can create in this pool. Default value is 30.

-   **db.reapTime**

    The interval, in seconds, between runs of the pool maintenance thread. Default value is 120.

-   **db.agedTimeout**

    The interval in seconds before a physical connection is discarded. Default value is 1800.



