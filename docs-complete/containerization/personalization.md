# Personalization rules

This topic contains the commands that the administrators can use to export and import the personalization \(PZN\) rules from the source server to the target server as specified by the user.

## Export PZN rules

-   **Command description**

    The `pzn-export` command is used to export the rules from the source server location specified by the user.

    ```
    dxclient pzn-export
    ```

-   **Help command**

    This command shows the help information for `pzn-export` command usage:

    ```
    dxclient pzn-export -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server:

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the target DX server:

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server,for Kubernetes Environment `dxPort` is 443:

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server:

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the `dxUsername` attribute:

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the location in the target workspace, which is the parent for the published nodes. The target path must exist before publishing:

    ```
    -targetPath <value>
    ```

    Use this attribute to specify the name of the workspace containing the rules in DX server \(default `targetWorkspace` is 'ROOTWORKSPACE'\):

    ```
    -targetWorkspace <value>
    ```

    **Note:** The `targetPath` and `targetWorkspace` parameters are optional. If the user does not pass the respective parameters, then the default values are taken.

    Use this attribute to specify the path to the context root on the DX server \(for example, /wps\):

    ```
    -dxContextRoot <value>
    ```

    Log files from command execution can be found in the logs directory of the DXClient installation.

-   **Example:**

    ```
    dxclient pzn-export -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword>
    
    ```

    The outputfile for pzn export is generated in the following path: store/outputFiles/pznrules


## Import PZN rules

-   **Command description**

    The `pzn-import` command is used to import the rules into the target server.

    ```
    dxclient pzn-import
    ```

-   **Required files**

    Rules file: This file should contain the configuration XML representation of all the currently selected personalization objects.

-   **Help command**

    This command shows the help information for `pzn-import` command usage:

    ```
    dxclient pzn-import -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the target DX server

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server,for Kubernetes Environment dxPort is 443

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the "dxUsername" attribute

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the config wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the port number of the cw\_profile\(for Kubernetes Environment dxConnectPort is 443\)

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the import file path that is required while executing the pzn import task

    ```
    -rulesFilePath <Absolute or relative path to import nodes file> 
    ```

    Use this attribute to specify the location in the target workspace, which is the parent for the published nodes. The target path must exist before publishing

    ```
    -targetPath <value>
    ```

    Use this attribute to specify the name of the workspace containing the rules in DX server \(default targetWorkspace is 'ROOTWORKSPACE'\)

    ```
    -targetWorkspace <value>
    ```

    Use this attribute to specify the path to the context root on the DX server \(for example, /wps\):

    ```
    -dxContextRoot <value>
    ```

    **Notes:**

    -   For Kubernetes environments, `dxProtocol` should be `http`, `hostname` should be localhost, `dxPort` should be 10039 as DXConnect doesn't support https due to SSL Handshake challenges at this time.
    -   The `dxProtocol`, `hostname`, `dxPort`, `targetWorkspace`, and `targetPath` parameters are optional. If the user does not pass the respective parameters, then the default values are taken.
    Log files from command execution can be found in the logs directory of the DXClient installation.

-   **Example:**

    ```
    dxclient pzn-import -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxConnectHostname <dxConnectHostname> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxConnectPort <dxConnectPort> -rulesFilePath <rulesFilePath>
    ```


**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

