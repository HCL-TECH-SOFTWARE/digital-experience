# How to Force HCL Digital Experience to Use a Specific TLS Version for MSSQL Backend Connections

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

When running HCL Digital Experience with a database running on Microsoft SQL Server, it might be needed to ensure that SSL-connections use a specific TLS version. What needs to be configured to make sure that such a special SSL (TLS) connection will be used? 

## Instructions

1. Login into the IBM Integrated Solutions Console (WebSphere Application Server admin console) of the Portal Server

2. Go to Resources > JDBC > Datasources > Datasource Name > Custom Properties

3. Search for the URL property. If it does not exist, create it. If it exists, modify the value. 

4. Change the value of the URL property as following: 

    Syntax:
```text
    jdbc:sqlserver://<hostname>:<port>;database=<database-name>;sslProtocol=<protocol version>
```

    Sample:
```text
    jdbc:sqlserver://mssqlservername:1414;database=jcrdb;sslProtocol=TLSv1.2
```

    Potential values for the sslProtocol connection property are: TLS, TLSv1, TLSv1.1, TLSv1.2 and so on. for details, please check: 

[Setting the connection properties](https://learn.microsoft.com/en-us/sql/connect/jdbc/setting-the-connection-properties?view=sql-server-ver16)

### `Additional information`:
The custom datasource property URL overwrites the general connection settings that will be used under:
Resources > JDBC > Datasources > Datasource Name
