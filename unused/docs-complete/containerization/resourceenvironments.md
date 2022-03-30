# Resource environment provider

This topic describes the commands that are used to create, update, delete, and retrieve custom properties from an existing resource environment provider. It also provides the commands to export or import multiple resource environment providers.

## Resource environment commands

-   **Command description:**

    The `resource-env-provider` command is used to create, update or delete a custom property from an existing Resource Environment Provider, and to export or import multiple resource environment providers.

    ```
    dxclient resource-env-provider
    ```

-   **Help command:**

    This command shows the help information for `resource-env-provider` command usage:

    ```
    dxclient resource-env-provider -h
    ```

    -   Help command for creating the resource environment property:

        ```
        dxclient resource-env-provider create-property -h
        
        ```

    -   Help command for updating the resource environment property:

        ```
        dxclient resource-env-provider update-property -h
        ```

    -   Help command for deleting the resource environment property:

        ```
        dxclient resource-env-provider delete-property -h
        ```

    -   Help command for retrieving the resource environment property:

        ```
        dxclient resource-env-provider retrieve-property -h
        ```

    -   Help command for exporting the resource environment property:

        ```
        dxclient resource-env-provider export-properties -h
        ```

    -   Help command for importing the resource environment property:

        ```
        dxclient resource-env-provider import-properties -h
        ```

-   **Commands:**

    -   Create a custom property from an existing resource environment:

        ```
        resource-env-provider create-property [OPTIONS]
        
        ```

    -   Update a custom property from an existing resource environment:

        ```
        resource-env-provider update-property [OPTIONS]
        ```

    -   Delete a custom property from an existing resource environment:

        ```
        resource-env-provider delete-property[OPTIONS]
        ```

    -   Retrieve a custom property from an existing resource environment provider:

        ```
        resource-env-provider retrieve-property [OPTIONS]
        ```

    -   Export all the existing resource environment providers:

        ```
        resource-env-provider export-properties [OPTIONS]
        ```

    -   Import all the existing resource environment providers provided in the input file containing the resource environment providers:

        ```
        resource-env-provider import-properties [OPTIONS]
        ```

-   **Command options required to create, update, delete, and retrieve resource environment providers:**

    Use this attribute to specify the protocol with which to connect to the server:

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the target server:

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the server \(for Kubernetes Environment, dxPort is 443\):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating with the server:

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the server:

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the config wizard home \(route change is only in case of Open Shift Kubernetes Environment, otherwise it is the same as hostname\) that is required for authenticating to the cw\_profile:

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the cw\_profile \(for Kubernetes Environment, dxConnectPort is 443\):

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile:

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile:

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the name of the Resource Environment Provider:

    ```
    -providerName <value> 
    ```

    Use this attribute to specify the name of the Custom Property:

    ```
    -propertyName <value>
    ```

    Use this attribute to specify the value of the Custom Property:

    ```
    -propertyValue <value> 
    ```

    Use this attribute to specify the description of the Custom Property:

    ```
    -propertyDesc <value> 
    ```

-   **Command options required to export and import resource environment providers:**

    Use this attribute to specify the configuration wizard home \(route change is only in the case of Open Shift Kubernetes Environment, otherwise it is same as hostname\) that is required for authenticating to the cw\_profile:

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the cw\_profile\(for Kubernetes Environment, dxConnectPort is 443\):

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile:

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile:

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the username of the DX WAS server:

    ```
    -dxWASUsername <value>
    ```

    Use this attribute to specify the password of the DX WAS server:

    ```
    -dxWASPassword <value>
    ```

    Use this attribute to specify the profile name of the DX core server:

    ```
    -dxProfileName <Profile name of the DX core server> 
    ```

    For importing resource environment properties, use this attribute to specify the File path:

    ```
    -filePath <value>
    ```

-   **Example:**

    -   For creating property:

        ```
        dxclient resource-env-provider create-property -providerName <providerName> -propertyName <propertyName> -propertyValue <propertyValue>
        
        ```

    -   For updating property:

        ```
        dxclient resource-env-provider update-property -providerName <providerName> -propertyName <propertyName> -propertyValue <modifiedpropertyValue>
        ```

    -   For deleting property:

        ```
        dxclient resource-env-provider delete-property -providerName <providerName> -propertyName <propertyName> -propertyValue <modifiedpropertyValue>
        ```

    -   For retrieving property:

        ```
         dxclient resource-env-provider retrieve-property -providerName <providerName> -propertyName <propertyName>
        ```

    -   For exporting property:

        ```
        dxclient resource-env-provider export-properties -dxProfileName <dxProfileName>
        ```

    -   For importing property:

        ```
        dxclient resource-env-provider import-properties -dxProfileName <dxProfileName> -filePath <filePath>
        ```


**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

