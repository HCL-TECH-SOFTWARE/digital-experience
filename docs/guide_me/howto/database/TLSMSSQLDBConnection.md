# How to configure a specific TLS version for MS-SQL backend connections

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

When using Microsoft SQL Server as the backend database for HCL Digital Experience (DX), security policy or compliance standards may require restricting database connections to a specific TLS protocol. This article explains how to configure WebSphere Application Server data source properties to use a required TLS version.

## Instructions

To configure a specific TLS version for the backend database connection, perform the following steps:

1. Log in to the IBM Integrated Solutions Console (WAS admin console).
2. Navigate to **Resources > JDBC > Data sources**.
3. Select the data source corresponding to your MS-SQL database (for example, **jcrdb** or **wpdb**).
4. Under **Additional Properties**, select **Custom properties**.
5. Check whether the **URL** custom property exists:

    - If the property exists:

        1. Select **URL**.
        2. In the **Value** field, enter the connection string using the following syntax:

            ```url
            jdbc:sqlserver://<hostname>:<port>;database=<database-name>;sslProtocol=<protocol version>
            ```

            Potential values for the `sslProtocol` connection property include `TLS`, `TLSv1`, `TLSv1.1`, and `TLSv1.2`. For more information on this property, refer to [Setting the connection properties](https://learn.microsoft.com/en-us/sql/connect/jdbc/setting-the-connection-properties?view=sql-server-ver16){target="_blank"}

            For example:

            ```url
            jdbc:sqlserver://mssqlservername:1414;database=jcrdb;sslProtocol=TLSv1.2
            ```

    - If the property does not exist:

        1. Select **New**
        2. In the **Name** field, enter **URL**.
        3. In the **Value** field, enter the connection string using the following syntax:

            ```url
            jdbc:sqlserver://<hostname>:<port>;database=<database-name>;sslProtocol=<protocol version>
            ```

            Potential values for the `sslProtocol` connection property include `TLS`, `TLSv1`, `TLSv1.1`, and `TLSv1.2`. For more information on this property, refer to [Setting the connection properties](https://learn.microsoft.com/en-us/sql/connect/jdbc/setting-the-connection-properties?view=sql-server-ver16){target="_blank"}

            For example:

            ```url
            jdbc:sqlserver://mssqlservername:1414;database=jcrdb;sslProtocol=TLSv1.2
            ```

6. Select **Apply**.
7. Select **Save** at the top of the console messages.

!!!note
    The custom data source property URL overrides the general connection settings configured for the selected data source (such as **jcrdb** or **wpdb**).
