# Properties File: wkplc_dbtype.properties


## Database safe mode properties

-   **DbSafeMode**

    -   **Description**

        Prevents unintentional database creation, initialization, and removal. It applies to database-specific ConfigEngine tasks only. Set the value to false if you need to create, initialize, or remove a database. When the value is set to true, the database server is protected. You cannot create, initialize, or remove databases by using ConfigEngine tasks.

    -   **Valid values**

        `true`

        `false`

    -   **Default value**

        `false`

    -   **Examples**

        None available


## Apache Derby database properties

The following property value pairs are specific to the Apache Derby database. Derby is not a production environment database, but it is ideal for development environments.

-   **derby.DbDriver**

    -   **Description**

        The name of the database driver that is used to connect to the Apache Derby database.

    -   **Default value**

        `org.apache.derby.jdbc.EmbeddedDriver`

    -   **Examples**

        Apache Derby: : `org.apache.derby.jdbc.EmbeddedDriver`

-   **derby.DbLibrary**

    -   **Description**

        The path and name of the .zip or JAR file that contains the JDBC driver class. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon \(;\). For Linux and UNIX operating systems, use a colon \(:\).

    -   **Default value**

        No default value

    -   **Examples**

        Linux:: /opt/IBM/WebSphere/AppServer/derby/lib/derby.jar

        Microsoft Windows:: C:/IBM/WebSphere/PortalExpress/AppServer/derby/lib/derby.jar

-   **derby.JdbcProviderName**

    -   **Description**

        Type the name of JDBC provider to use for Apache Derby.

    -   **Default value**

        `wpdbJDBC_derby`

    -   **Examples**

        None available


## IBM DB2 database properties

The following property value pairs are specific to IBM DB2 database.

-   **db2.DbDriver**

    -   **Description**

        Name of the database driver class for IBM DB2.

    -   **Default value**

        `com.ibm.db2.jcc.DB2Driver`

    -   **Examples**

        IBM DB2: : `com.ibm.db2.jcc.DB2Driver`

-   **db2.DbLibrary**

    -   **Description**

        Copy the JDBC Driver JAR files from your database server to your portal server. Type the path to the location of these files on your portal server and the name of the .zip or JAR file that contains the JDBC driver class. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon \(;\). For Linux and UNIX operating systems, use a colon \(:\).

    -   **Default value**

        No default value

    -   **Examples**

        AIX: /opt/IBM/db2/V10.5/java/db2jcc4.jar:/opt/IBM/db2/V10.5/java/db2jcc\_license\_cu.jar

        HP-UX:

        IBM i:

        Linux: /opt/ibm/db2/V10.5/java/db2jcc4.jar:/opt/ibm/db2/V10.5/java/db2jcc\_license\_cu.jar

        Solaris: /opt/ibm/db2/V10.5/java/db2jcc4.jar:/opt/ibm/db2/V10.5/java/db2jcc\_license\_cu.jar

        Windows: c:/Program Files/IBM/SQLLIB/java/db2jcc4.jar;c:/Program Files/IBM/SQLLIB/java/db2jcc\_license\_cu.jar

-   **db2.JdbcProviderName**

    -   **Description**

        Type the name of JDBC provider to use for IBM DB2.

    -   **Default value**

        `wpdbJDBC_db2`

    -   **Examples**

        None available


## Oracle Database Properties

The following property value pairs are specific to Oracle Database.

-   **oracle.DbDriver**

    -   **Description**

        Type the database driver class name for the Oracle Database.

    -   **Default value**

        `oracle.jdbc.OracleDriver`

    -   **Examples**

        None available

-   **oracle.DbLibrary**

    -   **Description**

        Type the path and name of the .zip or JAR file that contains the JDBC driver class. For Oracle 11g databases, you must configure database transfer and runtime with only the ojdbc6.jar. Provide the path for the ojdbc6.jar driver. For Oracle 12c, there are two database libraries and they must be in the same directory. Copy the ojdbc7.jar and xdb6.jar to the same directory, such as ORACLE\_JARS. Provide the path to the ojdbc7.jar and xdb6.jar drivers. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon \(;\). For Linux and UNIX operating systems, use a colon \(:\).

    -   **Default value**

        No default value

    -   **Examples**

        AIX:: For Oracle 11: /ORACLE\_JARS/ojdbc6.jar For Oracle 12: /ORACLE\_JARS/ojdbc7.jar:/ORACLE\_JARS/xdb6.jar

        HP-UX: For Oracle 11: /ORACLE\_JARS/ojdbc6.jar For Oracle 12: /ORACLE\_JARS/ojdbc7.jar:/ORACLE\_JARS/xdb6.jar

        IBM i: For Oracle 11: /ORACLE\_JARS/ojdbc6.jar For Oracle 12: /ORACLE\_JARS/ojdbc7.jar:/ORACLE\_JARS/xdb6.jar

        Linux: For Oracle 11: /ORACLE\_JARS/ojdbc6.jar For Oracle 12: /ORACLE\_JARS/ojdbc7.jar:/ORACLE\_JARS/xdb6.jar

        Solaris: For Oracle 11: /ORACLE\_JARS/ojdbc6.jar For Oracle 12: /ORACLE\_JARS/ojdbc7.jar:/ORACLE\_JARS/xdb6.jar

        Windows: For Oracle 11: c:/ORACLE\_JARS/ojdbc6.jar For Oracle 12: c:/ORACLE\_JARS/ojdbc7.jar;c:/ORACLE\_JARS/xdb6.jar

-   **oracle.JdbcProviderName**

    -   **Description**

        The name of JDBC provider to use with the Oracle Database.

    -   **Default value**

        `wpdbJDBC_oracle`

    -   **Examples**

        None available


## Microsoft SQL Server properties

The following value pairs are specific to Microsoft SQL Server and can be used with either version 2005 and 2008.

-   **sqlserver2005.DbDriver**

    -   **Description**

        The driver class name to use for Microsoft SQL Server.

    -   **Default value**

        `com.microsoft.sqlserver.jdbc.SQLServerDriver`

    -   **Examples**

        Microsoft JDBC driver:: `com.microsoft.sqlserver.jdbc.SQLServerDriver`

-   **sqlserver2005.DbLibrary**

    -   **Description**

        Type the path and name of the .zip or JAR file that contains the JDBC driver class. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon \(;\). For Linux and UNIX operating systems, use a colon \(:\).

    -   **Default value**

        No default value

    -   **Examples**

        AIX:: /sqljdbc\_4.0/enu/sqljdbc4.jar

        HP-UX: /sqljdbc\_4.0/enu/sqljdbc4.jar

        IBM i: /sqljdbc\_4.0/enu/sqljdbc4.jar

        Linux: /sqljdbc\_4.0/enu/sqljdbc4.jar

        Solaris: /sqljdbc\_4.0/enu/sqljdbc4.jar

        Windows: C:/Microsoft JDBC Driver 4.0 for SQL Server/sqljdbc\_4.0/enu/sqljdbc4.jar

-   **sqlserver2005.JdbcProviderName**

    -   **Description**

        The name of JDBC provider to use with Microsoft SQL Server.

    -   **Default value**

        `wpdbJDBC_sqlserver2005`

    -   **Examples**

        None available

-   **sqlserver2005.DbConnectionPoolDataSource**

    -   **Description**

        The name of the implementation class of the connection pool data source.

    -   **Default value**

        `com.microsoft.sqlserver.jdbc.SQLServerConnectionPoolDataSource`

    -   **Examples**

        Microsoft JDBC driver:: `com.microsoft.sqlserver.jdbc.SQLServerConnectionPoolDataSource`


## IBM DB2 for z/OS properties

The following value pairs are specific to IBM DB2 for z/OS.

-   **db2\_zos.DbDriver**

    -   **Description**

        Type the database driver class name for DB2 for z/OS.

    -   **Default value**

        `com.ibm.db2.jcc.DB2Driver`

    -   **Examples**

        IBM DB2 for z/OS: : `com.ibm.db2.jcc.DB2Driver`

-   **db2\_zos.DbLibrary**

    -   **Description**

        Type the path and name of the .zip or JAR file that contains the JDBC driver class. Use the system-specific file separators. For Microsoft Windows operating system, use a semicolon \(;\). For Linux and UNIX operating systems, use a colon \(:\).

    -   **Default value**

        No default value

    -   **Examples**

        AIX:: /SQLlibrary/jcc/classes/db2jcc4.jar:/SQLlibrary/jcc/classes/db2jcc\_license\_cisuz.jar:/SQLlibrary/jcc/classes/db2jcc\_javax.jar

        HP-UX: /SQLlibrary/jcc/classes/db2jcc4.jar:/SQLlibrary/jcc/classes/db2jcc\_license\_cisuz.jar:/SQLlibrary/jcc/classes/db2jcc\_javax.jar

        IBM i: /SQLlibrary/jcc/classes/db2jcc4.jar:/SQLlibrary/jcc/classes/db2jcc\_license\_cisuz.jar:/SQLlibrary/jcc/classes/db2jcc\_javax.jar

        Linux: /SQLlibrary/jcc/classes/db2jcc4.jar:/SQLlibrary/jcc/classes/db2jcc\_license\_cisuz.jar:/SQLlibrary/jcc/classes/db2jcc\_javax.jar

        Solaris: /SQLlibrary/jcc/classes/db2jcc4.jar:/SQLlibrary/jcc/classes/db2jcc\_license\_cisuz.jar:/SQLlibrary/jcc/classes/db2jcc\_javax.jar

        Linux z Systems: /SQLlibrary/jcc/classes/db2jcc4.jar:/SQLlibrary/jcc/classes/db2jcc\_license\_cisuz.jar:/SQLlibrary/jcc/classes/db2jcc\_javax.jar

        z/OS: /usr/lpp/db2/jdbc/classes/db2jcc4.jar:/usr/lpp/db2/jdbc/classes/db2jcc\_license\_cisuz.jar:/usr/lpp/db2/jdbc/classes/db2jcc\_javax.jar

        Windows: C://jcc/classes/db2jcc4.jar;C://jcc/classes/db2jcc\_license\_cisuz.jar;C://jcc/classes/db2jcc\_javax.jar

-   **db2\_zos.JdbcProviderName**

    -   **Description**

        The name of JDBC provider to use for IBM DB2 for z/OS.

    -   **Default value**

        `wpdbJDBC_db2_zos`

    -   **Examples**

        None available

-   **db2\_zos.DbNativeLibrary**

    -   **Description**

        Type the path to the native IBM DB2 libraries. Required when HCL Portal is running on z/OS only.

    -   **Default value**

        `/usr/lpp/db2910_jdbc/lib`

    -   **Examples**

        `Native libraries: : /usr/lpp/db2910_jdbc/lib`

-   **db2\_zos.DbSqljProperties**

    -   **Description**

        Type the directory and name of the DB2 JDBC property file on z/OS. Required when HCL Portal is running on z/OS only.

    -   **Default value**

        `/etc/DB2JccConfiguration.properties`

    -   **Examples**

        None available

-   **db2\_zos.DbDriverType**

    -   **Description**

        Select the connection type for the driver. Set the value to 2 if you are using RRS as transaction coordinator. Set the value to 4 if you are using Java Platform, Enterprise Edition XA.

    -   **Valid values**

        `2`

        `4`

    -   **Default value**

        `2`

    -   **Examples**

        None available


## IBM DB2 for i properties

-   **db2\_iseries.DbDriver**

    -   **Description**

        The database driver class name for IBM DB2 for i.

    -   **Default value**

        `com.ibm.as400.access.AS400JDBCDriver`

    -   **Examples**

        Type 4 driver:: `com.ibm.as400.access.AS400JDBCDriver`

        Type 2 driver:: `com.ibm.db2.jdbc.app.DB2Driver`

-   **db2\_iseries.DbLibrary**

    -   **Description**

        The directory and name of the library \(.zip or JAR file\) that contains the JDBC version 4 driver class. You can get the latest jt400.jar from [Toolbox for Java/JTOpen](http://sourceforge.net/projects/jt400/files). Select the driver file that includes "jtopen\_x\_y\_jdbc40\_jdk6.zip". Where x and y are the major minor version numbers.

    -   **Default value**

        No default value

    -   **Examples**

        Type 4 driver:: //jt400.jar

        Type 2 driver:: /QIBM/ProdData/OS400/Java400/ext/db2\_classes16.jar

-   **db2\_iseries.JdbcProviderName**

    -   **Description**

        The name of JDBC provider to be used.

    -   **Default value**

        `wpdbJDBC_db2_iseries`

    -   **Examples**

        None available

-   **db2\_iseries.DbDriverType**

    -   **Description**

        Select the type of connection to use for IBM DB2 for i. Set the value to 2 for local, non-CCSID 65535, and non-clustered configurations. Set the value to 4 for local, remote, or clustered configurations.

    -   **Valid values**

        `2`

        `4`

    -   **Default value**

        `4`

    -   **Examples**

        None available


