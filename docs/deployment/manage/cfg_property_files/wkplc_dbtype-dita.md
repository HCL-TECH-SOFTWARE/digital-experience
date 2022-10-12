# Properties File: wkplc_dbtype.properties


## Database safe mode properties

-   **DbSafeMode**

    -   **Description**<br>

        Prevents unintentional database creation, initialization, and removal. It applies to database-specific ConfigEngine tasks only. Set the value to false if you need to create, initialize, or remove a database. When the value is set to true, the database server is protected. You cannot create, initialize, or remove databases by using ConfigEngine tasks.

    -   **Valid values**

        `true`<br>

        `false`

    -   **Default value**<br>

        `false`

    -   **Examples**<br>

        None available


## Apache Derby database properties

The following property value pairs are specific to the Apache Derby database. Derby is not a production environment database, but it is ideal for development environments.

-   **derby.DbDriver**

    -   **Description**<br>

        The name of the database driver that is used to connect to the Apache Derby database.

    -   **Default value**<br>

        `org.apache.derby.jdbc.EmbeddedDriver`

    -   **Examples**<br>

        Apache Derby: : `org.apache.derby.jdbc.EmbeddedDriver`

-   **derby.DbLibrary**

    -   **Description**<br>

        The path and name of the .zip or JAR file that contains the JDBC driver class. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon (;). For Linux and UNIX operating systems, use a colon (:).

    -   **Default value**<br>

        No default value

    -   **Examples**<br>

        Linux:: /opt/IBM/WebSphere/AppServer/derby/lib/derby.jar<br>

        Microsoft Windows:: C:/IBM/WebSphere/PortalExpress/AppServer/derby/lib/derby.jar<br>

-   **derby.JdbcProviderName**

    -   **Description**<br>

        Type the name of JDBC provider to use for Apache Derby.

    -   **Default value**<br>

        `wpdbJDBC_derby`

    -   **Examples**<br>

        None available


## IBM DB2 database properties

The following property value pairs are specific to IBM DB2 database.

-   **db2.DbDriver**

    -   **Description**<br>

        Name of the database driver class for IBM DB2.

    -   **Default value**<br>

        `com.ibm.db2.jcc.DB2Driver`

    -   **Examples**<br>

        IBM DB2: : `com.ibm.db2.jcc.DB2Driver`

-   **db2.DbLibrary**

    -   **Description**<br>

        Copy the JDBC Driver JAR files from your database server to your portal server. Type the path to the location of these files on your portal server and the name of the .zip or JAR file that contains the JDBC driver class. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon (;). For Linux and UNIX operating systems, use a colon (:).

    -   **Default value**

        No default value

    -   **Examples**

        AIX: /opt/IBM/db2/V10.5/java/db2jcc4.jar:/opt/IBM/db2/V10.5/java/db2jcc_license_cu.jar

        Linux: /opt/ibm/db2/V10.5/java/db2jcc4.jar:/opt/ibm/db2/V10.5/java/db2jcc_license_cu.jar

        Windows: c:/Program Files/IBM/SQLLIB/java/db2jcc4.jar;c:/Program Files/IBM/SQLLIB/java/db2jcc_license_cu.jar

-   **db2.JdbcProviderName**

    -   **Description**<br>

        Type the name of JDBC provider to use for IBM DB2.

    -   **Default value**<br>

        `wpdbJDBC_db2`

    -   **Examples**<br>

        None available


## Oracle Database Properties

The following property value pairs are specific to Oracle Database.

-   **oracle.DbDriver**

    -   **Description**<br>

        Type the database driver class name for the Oracle Database.

    -   **Default value**<br>

        `oracle.jdbc.OracleDriver`

    -   **Examples**<br>

        None available

-   **oracle.DbLibrary**

    -   **Description**<br>

        Type the path and name of the .zip or JAR file that contains the JDBC driver class. For Oracle 11g databases, you must configure database transfer and runtime with only the ojdbc6.jar. Provide the path for the ojdbc6.jar driver. For Oracle 12c, there are two database libraries and they must be in the same directory. Copy the ojdbc7.jar and xdb6.jar to the same directory, such as ORACLE_JARS. Provide the path to the ojdbc7.jar and xdb6.jar drivers. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon (;). For Linux and UNIX operating systems, use a colon (:).

    -   **Default value**<br>

        No default value

    -   **Examples**<br>

        AIX:: For Oracle 11: /ORACLE_JARS/ojdbc6.jar For Oracle 12: /ORACLE_JARS/ojdbc7.jar:/ORACLE_JARS/xdb6.jar<br>

        Linux: For Oracle 11: /ORACLE_JARS/ojdbc6.jar For Oracle 12: /ORACLE_JARS/ojdbc7.jar:/ORACLE_JARS/xdb6.jar<br>

        Windows: For Oracle 11: c:/ORACLE_JARS/ojdbc6.jar For Oracle 12: c:/ORACLE_JARS/ojdbc7.jar;c:/ORACLE_JARS/xdb6.jar

-   **oracle.JdbcProviderName**

    -   **Description**<br>

        The name of JDBC provider to use with the Oracle Database.

    -   **Default value**<br>

        `wpdbJDBC_oracle`

    -   **Examples**<br>

        None available


## Microsoft SQL Server properties

The following value pairs are specific to Microsoft SQL Server and can be used with either version 2005 and 2008.

-   **sqlserver2005.DbDriver**

    -   **Description**<br>

        The driver class name to use for Microsoft SQL Server.

    -   **Default value**<br>

        `com.microsoft.sqlserver.jdbc.SQLServerDriver`

    -   **Examples**<br>

        Microsoft JDBC driver:: `com.microsoft.sqlserver.jdbc.SQLServerDriver`

-   **sqlserver2005.DbLibrary**

    -   **Description**<br>

        Type the path and name of the .zip or JAR file that contains the JDBC driver class. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon (;). For Linux and UNIX operating systems, use a colon (:).

    -   **Default value**<br>

        No default value

    -   **Examples**<br>

        AIX:: /sqljdbc_4.0/enu/sqljdbc4.jar<br>
        Linux: /sqljdbc_4.0/enu/sqljdbc4.jar
        Windows: C:/Microsoft JDBC Driver 4.0 for SQL Server/sqljdbc_4.0/enu/sqljdbc4.jar

-   **sqlserver2005.JdbcProviderName**

    -   **Description**<br>

        The name of JDBC provider to use with Microsoft SQL Server.

    -   **Default value**<br>

        `wpdbJDBC_sqlserver2005`

    -   **Examples**<br>

        None available

-   **sqlserver2005.DbConnectionPoolDataSource**

    -   **Description**<br>

        The name of the implementation class of the connection pool data source.

    -   **Default value**<br>

        `com.microsoft.sqlserver.jdbc.SQLServerConnectionPoolDataSource`

    -   **Examples**<br>

        Microsoft JDBC driver:: `com.microsoft.sqlserver.jdbc.SQLServerConnectionPoolDataSource`


## IBM DB2 for z/OS properties

The following value pairs are specific to IBM DB2 for z/OS.

-   **db2\_zos.DbDriver**

    -   **Description**<br>

        Type the database driver class name for DB2 for z/OS.

    -   **Default value**<br>

        `com.ibm.db2.jcc.DB2Driver`

    -   **Examples**<br>

        IBM DB2 for z/OS: : `com.ibm.db2.jcc.DB2Driver`

-   **db2_zos.DbLibrary**

    -   **Description**<br>

        Type the path and name of the .zip or JAR file that contains the JDBC driver class. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon (;). For Linux and UNIX operating systems, use a colon (:).

    -   **Default value**<br>

        No default value

    -   **Examples**<br>

        AIX:: /SQLlibrary/jcc/classes/db2jcc4.jar:/SQLlibrary/jcc/classes/db2jcc_license_cisuz.jar:/SQLlibrary/jcc/classes/db2jcc_javax.jar<br>

        Linux: /SQLlibrary/jcc/classes/db2jcc4.jar:/SQLlibrary/jcc/classes/db2jcc_license_cisuz.jar:/SQLlibrary/jcc/classes/db2jcc_javax.jar<br>

        Linux z Systems: /SQLlibrary/jcc/classes/db2jcc4.jar:/SQLlibrary/jcc/classes/db2jcc_license_cisuz.jar:/SQLlibrary/jcc/classes/db2jcc_javax.jar<br>

        Windows: C://jcc/classes/db2jcc4.jar;C://jcc/classes/db2jcc_license_cisuz.jar;C://jcc/classes/db2jcc_javax.jar

-   **db2\_zos.JdbcProviderName**

    -   **Description**<br>

        The name of JDBC provider to use for IBM DB2 for z/OS.

    -   **Default value**<br>

        `wpdbJDBC_db2_zos`

    -   **Examples**<br>

        None available

-   **db2_zos.DbNativeLibrary**

    -   **Description**<br>

        Type the path to the native IBM DB2 libraries.

    -   **Default value**<br>

        `/usr/lpp/db2910_jdbc/lib`

    -   **Examples**<br>

        `Native libraries: : /usr/lpp/db2910_jdbc/lib`

-   **db2_zos.DbSqljProperties**

    -   **Description**<br>

        Type the directory and name of the DB2 JDBC property file on z/OS.

    -   **Default value**<br>

        `/etc/DB2JccConfiguration.properties`

    -   **Examples**<br>

        None available

-   **db2\_zos.DbDriverType**

    -   **Description**<br>

        Select the connection type for the driver. Set the value to 2 if you are using RRS as transaction coordinator. Set the value to 4 if you are using Java Platform, Enterprise Edition XA.

    -   **Valid values**<br>

        `2`<br>

        `4`

    -   **Default value**<br>

        `2`

    -   **Examples**<br>

        None available


## IBM DB2 for i properties

-   **db2_iseries.DbDriver**

    -   **Description**<br>

        The database driver class name for IBM DB2 for i.

    -   **Default value**<br>

        `com.ibm.as400.access.AS400JDBCDriver`

    -   **Examples**<br>

        Type 4 driver:: `com.ibm.as400.access.AS400JDBCDriver`<br>

        Type 2 driver:: `com.ibm.db2.jdbc.app.DB2Driver`

-   **db2_iseries.DbLibrary**

    -   **Description**<br>

        The directory and name of the library (.zip or JAR file) that contains the JDBC version 4 driver class. You can get the latest jt400.jar from [Toolbox for Java/JTOpen](http://sourceforge.net/projects/jt400/files). Select the driver file that includes "jtopen_x_y_jdbc40_jdk6.zip". Where x and y are the major minor version numbers.

    -   **Default value**<br>

        No default value

    -   **Examples**<br>

        Type 4 driver:: //jt400.jar<br>

        Type 2 driver:: /QIBM/ProdData/OS400/Java400/ext/db2_classes16.jar

-   **db2_iseries.JdbcProviderName**

    -   **Description**<br>

        The name of JDBC provider to be used.

    -   **Default value**<br>

        `wpdbJDBC_db2_iseries`

    -   **Examples**<br>

        None available

-   **db2_iseries.DbDriverType**

    -   **Description**<br>

        Select the type of connection to use for IBM DB2 for i. Set the value to 2 for local, non-CCSID 65535, and non-clustered configurations. Set the value to 4 for local, remote, or clustered configurations.

    -   **Valid values**<br>

        `2`<br>

        `4`

    -   **Default value**<br>

        `4`

    -   **Examples**<br>

        None available


