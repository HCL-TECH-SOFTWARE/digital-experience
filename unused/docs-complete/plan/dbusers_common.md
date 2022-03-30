# Database users 

Become familiar with the privileges required for each user type to work with the database domains of HCL Portal and the commands for creating database configuration users and granting privileges.

## Database configuration user

The database administration user that is typically created when a database management system \(DBMS\) is installed is the database installation user or the database configuration user. The database configuration user is not necessarily the user that is created by default when the database management system is installed. The default user might be used as the database configuration user. The database configuration user is used by HCL Portal for configuration tasks and creates the database structure that is needed by HCL Portal. For example, the database configuration user can create database tables and indexes, do database transfer, and often times has operating system privileges, depending on the database management system.

## Database runtime user

The database runtime user has fewer privileges than the database configuration user. The runtime user has runtime access to the data source of a database and can do basic read and write operations on the data. Consider creating a dedicated runtime user for each database domain of HCL Portal. If you do not create runtime users, then HCL Portal uses the configuration user to connect to the databases at run time.

## Privileges of database users

The following table identifies the minimum privileges that are needed to correct function by the two types of database users: configuration users and runtime users. The privileges that are listed pertain to all HCL Portal database domains.

|Permission within the database domain|Release|Community|Customization|JCR|Feedback|Likeminds|
|-------------------------------------|-------|---------|-------------|---|--------|---------|
|Access to the database|Yes|Yes|Yes|Yes|Yes|Yes|
|Read on all tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Write on all tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Update on all tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Delete on all tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Create tables|No|No|No|No|No|No|
|Create indexes|No|No|No|No|No|No|
|Use of sequences|No|No|No|No|Yes|No|

|Permission within the database domain|Release|Community|Customization|JCR|Feedback|Likeminds|
|-------------------------------------|-------|---------|-------------|---|--------|---------|
|Access to the database|Yes|Yes|Yes|Yes|Yes|Yes|
|Read on all tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Write on all tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Update on all tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Delete on all tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Quota on disk to create new objects|Yes|Yes|Yes|Yes|Yes|Yes|
|Create table spaces|Yes|Yes|Yes|Yes|Yes|Yes|
|Drop table spaces|Yes|Yes|Yes|Yes|Yes|Yes|
|Create tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Alter tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Drop tables|Yes|Yes|Yes|Yes|Yes|Yes|
|Create indexes|Yes|Yes|Yes|Yes|Yes|Yes|
|Drop indexes|Yes|Yes|Yes|Yes|Yes|Yes|
|Create triggers|Yes|Yes|Yes|No|Yes|Yes|
|Drop triggers|Yes|Yes|Yes|Yes|Yes|Yes|
|Create sequences|No|No|No|Yes|Yes|No|
|Use of sequences|No|No|No|Yes|Yes|No|
|Create types|No|No|No|Yes|No|No|
|Drop types|No|No|No|Yes|No|No|
|Create views|No|No|No|No|No|No|
|Drop views|No|No|No|Yes|No|No|

**Parent topic:**[Database considerations ](../plan/db_considerations.md)

**Related information**  


[Database transfer: Granting privileges to database users for DB2 for i ](../config/unix_db2i_priv_dbusers_common.md)

