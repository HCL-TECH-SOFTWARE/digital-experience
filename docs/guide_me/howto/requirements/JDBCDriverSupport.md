# How to choose the correct JDBC driver

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

HCL Digital Experience (DX) is a stack product running on IBM traditional WebSphere Application Server (WAS). Java Database Connectivity (JDBC) driver vendors such as Oracle, Microsoft, and IBM develop JDBC drivers for specific Java versions. Those drivers are usually backward compatible, so they can always be used to connect to older database server versions as well. Ensure that the driver is certified for the specific Java runtime version. For example, if your DX environment is running on Java 7, you need to run a JDBC driver that is certified for Java 7.

It is possible that JDBC drivers running properly on Java 6 may not run correctly in newer Java versions due to changed API calls that may lead to unexpected runtime behaviors. To avoid incompatibility, database vendors certify their JDBC drivers for specific Java versions. For example, Oracle provides a `ojdbc6.jar` JDBC driver file to run the Oracle JDBC driver on Java 6, `ojdbc7.jar` for Java 7, and so on. For Microsoft, it is named `mssql-jdbc-6.4.0.jre7.jar` for Java 7 and `mssql-jdbc-6.4.0.jre8.jar` for Java 8.

!!! Important
    It is highly recommended to use only JDBC drivers that are certified for the specific HCL DX Java runtime version, preferably the latest certified version. Before running any JDBC driver on HCL DX, read  the JDBC driver vendor support information to ensure you select the correct driver.

HCL DX supports any JDBC driver that is compliant with the JDBC specification 4.0 or earlier. A detailed system requirement information about all supported databases can be found at: [System requirements](../../../get_started/system_requirements/index.md){target="_blank"}.

For more information, refer to the following topics:

- [WebSphere Application Server 8.5.x - System Requirements](https://www.ibm.com/support/pages/node/318365){target="_blank"}
- [WebSphere Application Server 9.0.5.x - System Requirements](https://www.ibm.com/support/pages/system-requirements-websphere-application-server-v905){target="_blank"}

In this article, you will learn how to choose the correct JDBC driver for your specific HCL DX environment.

## Instructions

There are three applicable JDBC vendors for HCL DX: IBM DB2, Microsoft, and Oracle. Choose the JDBC drivers that best fit the needs of your specific HCL DX environment:

- [IBM DB2 JDBC drivers](#ibm-db2-jdbc-drivers)
- [Microsoft JDBC drivers](#microsoft-jdbc-drivers)
- [Oracle JDBC drivers](#oracle-jdbc-drivers)

### IBM DB2 JDBC drivers

You can download the IBM DB2 JDBC drivers in
[DB2 JDBC Driver Versions and Downloads](https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads){target="_blank"}.

Read the driver support matrix and their certified Java versions in
[JDBC Driver and Database Version Compatibility](https://www.ibm.com/support/pages/jdbc-driver-and-database-version-compatibility){target="_blank"}.

### Microsoft JDBC drivers

You can download the Microsoft JDBC drivers in
[Download Microsoft JDBC Driver for SQL Server](https://learn.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15){target="_blank"}.

Read the driver support matrix and their certified Java versions in
[Microsoft JDBC Driver support lifecycle matrix and policy](https://learn.microsoft.com/en-us/sql/connect/jdbc/microsoft-jdbc-driver-for-sql-server-support-matrix?view=sql-server-ver15){target="_blank"}.

### Oracle JDBC drivers

You can download the Oracle JDBC drivers in
[Oracle Database JDBC driver and Companion Jars Downloads](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html){target="_blank"}.

Read the driver support matrix and their certified Java versions in
[Frequently Asked Questions](https://www.oracle.com/database/technologies/faq-jdbc.html){target="_blank"}.