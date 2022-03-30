# DAM schemas

This topic contains the commands that administrators can use to get a list of all DAM schemas or delete inactive [Digital Asset Management](../digital_asset_mgmt/digital_asset_mgmt_overview.md) \(DAM\) schemas from persistence.

## Listing DAM schemas

The list-dam-schemas command is used to list all the DAM schemas.

-   **Command description**

    This command invokes list-dam-schemas inside DXClient and provides a list DAM schemas.

    ```
    dxclient list-dam-schemas
    ```

-   **Help command**

    This command shows the help information for `list-dam-schemas` command usage:

    ```
    dxclient list-dam-schemas -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the server

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the target server

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the server\(for Kubernetes Environment dxPort is 443\)

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating with the server

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the server

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server\(for Kubernetes Environment default port is 443\)

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server\(for Kubernetes Environment default port is 443\)

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API Version number of DAM\(for Kubernetes Environment default port is 443\)

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API Version number of DX Core\(for Kubernetes Environment default port is 443\)

    ```
    -ringAPIVersion <value>
    ```

-   **Example:**

    ```
    dxclient list-dam-schemas -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -ringAPIVersion <ringAPIVersion> -damAPIVersion <damAPIVersion>
    ```


## Deleting DAM schemas

Deleting DAM schema is a recommended step when the configuration of the DAM database schema has been changed, due to a release update such as from Container Update CF196 to Container Update CF197. When a DAM database is migrated, a new schema gets generated and the old schema is rendered inactive. To avoid the accumulation of inactive schemas, you can use the delete-dam-schema command to delete them.

Use the delete-dam-schema command to delete the inactive DAM schema.

-   **Command description**

    This command invokes delete-dam-schema inside DXClient and deletes the DAM schema.

    ```
    dxclient delete-dam-schema
    ```

-   **Help command**

    This command shows the help information for `delete-dam-schema` command usage:

    ```
    dxclient delete-dam-schema -h
    ```

-   **Command options**

    Use this attribute to specify the protocol that is used to connect to the server

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the target server

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the server \(for Kubernetes Environment dxPort is 443\)

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating with the server

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the server

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server \(for Kubernetes Environment default port is 443\)

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server \(for Kubernetes Environment default port is 443\)

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API Version number of DAM \(for Kubernetes Environment default port is 443\)

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API Version number of DX Core \(for Kubernetes Environment default port is 443\)

    ```
    -ringAPIVersion <value>
    ```

    Use this attribute to specify the DAM Schema Version \(for Kubernetes Environment default port is 443\)

    ```
    -schemaVersion <value>
    ```

    **Note:** In case the user does not enter the `schemaVersion`, user is prompted with a list of inactive schemas to choose from.

-   **Example:**

    ```
    dxclient delete-dam-schema -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -ringAPIVersion <ringAPIVersion> -damAPIVersion <damAPIVersion> -schemaVersion <schemaVersion>
    ```


**Parent topic:**[DAM artifacts](../containerization/dam_artifacts.md)

