# HCL Digital Experience - JDBC Driver Support

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

HCL Digital Experience is a stack product running on IBM traditional WebSphere Application server. The support statement for JDBC-Drivers is similar like described in the traditional WebSphere Application server system requirements pages:

[WebSphere Application Server 8.5.x - System Requirements](https://www.ibm.com/support/pages/system-requirements-websphere-application-server-v855)

[WebSphere Application Server 9.0.5.x - System Requirements](https://www.ibm.com/support/pages/system-requirements-websphere-application-server-v905)

For which in general the following support statement is given:

HCL Digital Experience supports any JDBC driver that is compliant with the JDBC specification 4.0 or earlier. A detailed system requirement information about all supported databases can be found at:

[System requirement | HCL Digital Experience](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0090156)

## Instructions

JDBC driver vendors like Oracle, Microsoft and IBM usually developing JDBC-Drivers for specific java versions. This drivers are usually backward compatible for which the newest driver can be used to connect to older database server versions. Important is to ensure that the driver is certified for the specific java runtime version! Which means that when Digital Experience is running on Java 7, it also requires to run a JDBC Driver that is certified for Java 7. When Digital Experience is running on java 8, the Java 8 certified jdbc driver needs to be used and so on.

**Background information:**

It is possible that jdbc-drivers that running fine on java 6 are not running correctly anymore on newer Java versions like java 7 or Java 8. That may happen, because API calls in newer Java versions sometimes change for which old drivers are not running correctly anymore and that finally can lead to unexpected runtime behaviors. Avoiding incompatibility, database vendors certify their jdbc drivers for specific java versions. For example Oracle provides a `ojdbc6.jar` JDBC Driver file for running the Oracle JDBC Driver on java 6. They are using a `ojdbc7.jar` file for running the driver on java 7 and so on. A similar jar-file naming will be used for Microsoft JDBC Drivers. For example a jdbc driver that can be run on Java 7 is named `mssql-jdbc-6.4.0.jre7.jar`, while the java 8 drivers name is `mssql-jdbc-6.4.0.jre8.jar`.

**Support Statement and best practice:**

HCL highly recommend to use only jdbc-drivers that are certified for the specific HCL Digital Experience Java runtime version. Best practice is to use the latest certified java version driver! Before running any JDBC Driver on HCL Digital Experience, please read the JDBC-Driver vendor support information first to ensure selecting the correct driver.

**Information about Oracle JDBC Drivers:**

Oracle JDBC Drivers for the different java versions can be downloaded on page:
[Oracle Database JDBC driver and Companion Jars Downloads](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html)

Please check the "Driver Support Matrix" first to ensure downloading the correct driver. For details, see:

[Frequently Asked Questions](https://www.oracle.com/database/technologies/faq-jdbc.html)

**Information about Microsoft JDBC Drivers:**

Microsoft JDBC Drivers can be downloaded on page:
[Download Microsoft JDBC Driver for SQL Server](https://learn.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15)

The Driver Support Matrix for Microsoft JDBC Drivers and their certified java versions can be found on page:
[Microsoft JDBC Driver support lifecycle matrix and policy](https://learn.microsoft.com/en-us/sql/connect/jdbc/microsoft-jdbc-driver-for-sql-server-support-matrix?view=sql-server-ver15)

**Information about IBM DB2 JDBC Drivers:**

IBM JDBC Drivers can be downloaded on page:
[DB2 JDBC Driver Versions and Downloads](https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads)

The Driver Support Matrix information can be found on page:
[JDBC Driver and Database Version Compatibility](https://www.ibm.com/support/pages/jdbc-driver-and-database-version-compatibility)
