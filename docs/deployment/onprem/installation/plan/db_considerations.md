# Database considerations

HCL Digital Experience includes an Apache Derby database that is configured and ready for immediate use. But for a production environment or any environment for HCL Web Content Manager, you must use one of the other supported database management systems.

## Apache Derby

Apache Derby is a built-in Java database that provides a small footprint, is self-tuning, and is ideal for solutions where the database must be hidden. Derby works in a non-clustered environment with a few users, such as a portlet or theme development environments.

Derby does not support clustered environments, enabling security in a database-only mode, or vertical cloned environments in which multiple application servers are configured on a single server.

The Apache Derby database that is installed by default is not supported for use in a production environment.

## Apache Derby and HCL Web Content Manager

Use one of the other supported databases in a production environment or when you are developing presentation templates or authoring web content. The ApacheDerby database can be sufficient for non-production installations of HCL Portal, the performance of Apache Derby with HCLWeb Content Manager is poor. A typical cause of performance issues is transaction timeouts. Although you can increase these timeouts, the resulting performance is prohibitively slow. You must use one of the other supported database management systems. They are better able to handle large amounts of data and can be tuned for performance.

## Apache Derby and Site Builder

The use of Apache Derby with Site Builder is not supported on development or production environments.

## Database transfer

Transfer data to another supported database before you use the portal extensively. Large amounts of data in the databases can cause the database transfer to fail if your Java™ heap size is not large enough. Do not postpone transferring data to another database management system. Waiting to transfer the database can cause errors to occur during the transfer process, such as not having adequate Java heap size.

## Configuration Wizard

Use the wizard to either create scripts that you or your database administrator can use to create databases, create database user IDs, and configure database user ID privileges. The wizard collects information about your database management system, the database topology you want, the user IDs you require, and more. Then, it generated custom scripts and instructions.

-   **[Database users](../plan/dbusers_common.md)**  
Become familiar with the privileges required for each user type to work with the database domains of HCL Portal and the commands for creating database configuration users and granting privileges.
-   **[Database topologies](../plan/db_topology.md)**  
Consider the database configuration options in relation to your HCL Portal deployment scenario.
-   **[Portal database domains](../plan/db_domains.md)**  
Sets of databases tables and schemas for portal resources are called database domains. Database domains classify and help you determine how to distribute portal data.
-   **[JDBC type 2 and type 4 drivers](../plan/db_jdbc_type.md)**  
The Configuration Wizard uses JDBC type 4 drivers by default. You can change the default selection in the Configuration Wizard.
-   **[Shared database domains](../plan/db_domains_shared.md)**  
To maximize data availability, you can distribute portal data across multiple databases and for some domains, share data between multiple lines of production.

**Parent topic:**[Planning to install HCL Digital Experience](../plan/plan_installation.md)

**Related information**  


[Prerequisite software for installing Content Template 4.4](../ctc/ctc_inst_prereq8.md)

