# Database considerations

HCL Digital Experience includes an Apache Derby database that is configured and ready for immediate use. However, for a production environment or any environment for HCL Web Content Manager, you must use one of the other supported database management systems.

## Apache Derby

Apache Derby is a built-in Java database that provides a small footprint, is self-tuning, and is ideal for solutions where the database must be hidden. Derby works in a non-clustered environment with a few users, such as a portlet or theme development environments.

Derby does not support clustered environments, which enables security in a database-only mode. Derby does not support vertical cloned environments in which multiple application servers are configured on a single server.

## Apache Derby and HCL Web Content Manager

Use one of the other supported databases in a production environment or when you are developing presentation templates or authoring web content. The Apache Derby database might be sufficient for non-production installations of HCL Portal but the performance of Apache Derby with HCL Web Content Manager is insufficient. A typical cause of performance issues is transaction timeouts. Although you can increase these timeouts, the resulting performance is prohibitively slow. You must use one of the other supported database management systems. They are better able to handle large amounts of data and can be tuned for performance.

## Apache Derby and Site Builder

The use of Apache Derby with Site Builder is not supported on development or production environments.

## Database transfer

Transfer data to another supported database before you use the portal extensively. Large amounts of data in the databases can cause the database transfer to fail if your Java™ heap size is not large enough. Do not postpone transferring data to another database management system. Waiting to transfer the database can cause errors during the transfer process, such as not having adequate Java heap size.

## Configuration wizard

Use the wizard to either create scripts that you or your database administrator can use to create databases, create database user IDs, and configure database user ID privileges. The wizard collects information about your database management system, the database topology you want, the user IDs you require, and more. Then, it generates custom scripts and instructions.

See following topics as you plan and set up your database:
-   **[Database users](dbusers_common.md)**  
Become familiar with the privileges required for each user type to work with the database domains of HCL Portal and the commands for creating database configuration users and granting privileges.
-   **[Database topologies](db_topology.md)**  
Consider the database configuration options in relation to your HCL Portal deployment scenario.
-   **[Portal database domains](db_domains.md)**  
Sets of database tables and schemas for portal resources are called database domains. Database domains classify and help you determine how to distribute portal data.
-   **[JDBC type 2 and type 4 drivers](db_jdbc_type.md)**  
The Configuration wizard uses JDBC type 4 drivers by default. You can change the default selection in the Configuration wizard.
-   **[Shared database domains](db_domains_shared.md)**  
To maximize data availability, you can distribute portal data among multiple databases and for some domains, and share data between multiple lines of production.

<!--
**Related information**  


[Prerequisite software for installing Content Template 4.4](../ctc/ctc_inst_prereq8.md)  -->

