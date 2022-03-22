# Create or update credential vault slot

This topic describes the commands that are used to create or update credential vault slot in the DX server.

## Credential vault slot

-   **Command description**

    Use the `create-credential-vault` command to create or update a credential vault slot.

    ```
    dxclient create-credential-vault
    ```

-   **Help command**

    This command shows the help information for `create-credential-vault` command usage:

    ```
    dxclient create-credential-vault -h
    ```

-   **Command options**

    Use this attribute to specify the protocol to connect to the server:

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

    Use this attribute to specify the path to DX configuration endpoint:

    ```
    -xmlConfigPath <value>
    ```

    Use this attribute to specify the credential vault segment slot name:

    ```
    -credentialSlotName <value>
    ```

    Use this attribute to specify the credential vault Username:

    ```
    -vaultUsername <value>
    ```

    Use this attribute to specify the credential vault UserGroup:

    ```
    -vaultUserGroup <value>
    ```

    Use this attribute to specify the credential vault shared userid password:

    ```
    -vaultPassword <value>
    ```

    Use this attribute to specify the credential vault segment name and the default is set to `DefaultAdminSegment`:

    ```
    -vaultSegmentName <value>
    ```

    Use this attribute to specify the credential vault segment description:

    ```
    -vaultDescription <value>
    ```

-   **Example:**

    ```
    dxclient create-credential-vault -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword>  -xmlConfigPath <xmlConfigPath> -credentialSlotName <credentialSlotName> -vaultUsername <vaultUsername> -vaultPassword <vaultPassword>
    ```


**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

