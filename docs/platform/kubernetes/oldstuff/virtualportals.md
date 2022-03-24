# Managing virtual portals

This topic describes the commands that are used in managing the virtual portal activities such as creating, listing, importing, or exporting virtual portals.

## Virtual Portal commands

-   **Command description**

    The `manage-virtual-portal` command is used to manage virtual portal tasks such as create, list, export, and import in the DX server.

    ```
    dxclient manage-virtual-portal
    
    ```

-   **Help command**

    This command shows the help document on the `manage-virtual-portal` command:

    -   Help command for creating virtual portals:

        ```
        dxclient manage-virtual-portal create -h
        ```

    -   Help command for listing virtual portals:

        ```
        dxclient manage-virtual-portal list -h
        ```

    -   Help command for importing virtual portals:

        ```
        dxclient manage-virtual-portal import -h
        ```

    -   Help command for exporting virtual portals:

        ```
        dxclient manage-virtual-portal export -h 
        ```

-   **Subcommands**

    -   Create virtual portal task in the DX server:

        ```
        manage-virtual-portal create [OPTIONS]
        ```

    -   List virtual portal task in the DX server:

        ```
        manage-virtual-portal list [OPTIONS]
        ```

    -   Import virtual portal task in the DX server:

        ```
        manage-virtual-portal import [OPTIONS]
        ```

    -   Export virtual portal task in the DX server:

        ```
        manage-virtual-portal export [OPTIONS]
        ```

    -   Use this attribute and retrigger the command to check the status of any previous request that was incomplete.

        ```
        -requestId <Unique ID of a previously triggered create virtual portal request>
        ```

-   **Required Commands**

    -   **`manage-virtual-portal create` command:**

        Use this parameter to specify the username that is required for authenticating with the server

        ```
        -dxUsername <value> 
        ```

        Use this parameter to specify the password that is required for authenticating with the server

        ```
        -dxPassword <value>
        ```

        Use this parameter to specify the configuration wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

        ```
        -dxConnectHostname <value>
        ```

        Use this parameter to specify the port number of the cw\_profile\(for Kubernetes Environment dxConnectPort is 443\)

        ```
        -dxConnectPort <value>
        ```

        Use this parameter to specify the username that is required for authenticating to the cw\_profile

        ```
        -dxConnectUsername <value>
        ```

        Use this parameter to specify the password that is required for authenticating to the cw\_profile

        ```
        -dxConnectPassword <value>
        ```

        Use this parameter to specify the profile name of the DX core server

        ```
        -dxProfileName <Profile name of the DX core server> 
        ```

        Use this parameter to specify the username of the DX WAS server

        ```
        -dxWASUsername <value>
        ```

        Use this parameter to specify the password of the DX WAS server

        ```
        -dxWASPassword <value>
        ```

        Use this parameter to specify the virtual portal Title

        ```
        -vpTitle <value>
        ```

        Use this parameter to specify the virtual portal Realm

        ```
        -vpRealm <value>
        ```

        Use this parameter to specify the virtual portal AdminGroup

        ```
        -vpAdminGroup <value>
        ```

        Use this parameter to specify the virtual portal HostName

        ```
        -vpHostname <value>
        ```

        Use this parameter to specify the virtual portal Context

        ```
        -vpContext <value>
        ```

        **Note:** Create virtual portal task creates an empty virtual portal in the DX server.

        **Example usage:**

        ```
         dxclient manage-virtual-portal create -dxConnectHostname <dxConnectHostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <Profile name of the DX Server> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxWASUsername < Username of the DX WAS server> -dxWASPassword <Password of the DX WAS server> -vpTitle <virtual-portal-Title> -vpRealm <virtual-portal-realm>  -vpAdminGroup <virtual-portal-adminGroup> -vpHostname <virtual-portal-hostname> -vpContext<virtual-portal-context>
        ```

    -   **`manage-virtual-portal list` command**

        Use this parameter to specify the username that is required for authenticating with the server

        ```
        -dxUsername <value> 
        ```

        Use this parameter to specify the password that is required for authenticating with the server

        ```
        -dxPassword <value>
        ```

        Use this parameter to specify the configuration wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

        ```
        -dxConnectHostname <value>
        ```

        Use this parameter to specify the port number of the cw\_profile\(for Kubernetes Environment dxConnectPort is 443\)

        ```
        -dxConnectPort <value>
        ```

        Use this parameter to specify the username that is required for authenticating to the cw\_profile

        ```
        -dxConnectUsername <value>
        ```

        Use this parameter to specify the password that is required for authenticating to the cw\_profile

        ```
        -dxConnectPassword <value>
        ```

        Use this parameter to specify the profile name of the DX core server

        ```
        -dxProfileName <Profile name of the DX core server> 
        ```

        Use this parameter to specify the username of the DX WAS server

        ```
        -dxWASUsername <value>
        ```

        Use this parameter to specify the password of the DX WAS server

        ```
        -dxWASPassword <value>
        ```

        **Example usage:**

        ```
        dxclient manage-virtual-portal list -dxConnectHostname <dxConnectHostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <profile-name-of-the-DX-server> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxWASUsername <username-of-the-DX-WAS-server> -dxWASPassword <password-of-the-DX-WAS-server> 
        ```

    -   **`manage-virtual-portal import` command:**

        Use this parameter to specify the protocol with which to connect to the server

        ```
        -dxProtocol <value>
        ```

        Use this parameter to specify the username that is required for authenticating with the server

        ```
        -dxUsername <value> 
        ```

        Use this parameter to specify the password that is required for authenticating with the server

        ```
        -dxPassword <value>
        ```

        Use this parameter to specify the hostname of the target server

        ```
        -hostname <value>
        ```

        Use this parameter to specify the port on which to connect to the server\(for Kubernetes Environment dxPort is 443\)

        ```
        -dxPort <value>
        ```

        Use this parameter to specify the path to DX configuration endpoint \(for example: /wps/config\)

        ```
        -xmlConfigPath <value>
        ```

        Use this parameter to specify the XML file name with absolute path of the input file

        ```
        -xmlFile <value>
        ```

        Use this parameter to specify the virtual portal Context

        ```
        -vpContext <value>
        ```

        **Limitation:** Currently, import virtual portal feature supports only `vpContext` and does not support `vpHostname`. Support for Virtual portal with host name might be added in the future release.

        **Example Usage:**

        ```
        dxclient manage-virtual-portal import -dxProtocol <http/https> -hostname <host-name> -dxPort <dxPort> -xmlConfigPath <xmlConfigPath> -dxUsername <dxUsername> -dxPassword <dxPassword>  -xmlFile <xml-file-with-path> -vpContext <virtual-portal-context>
        ```

    -   **`manage-virtual-portal export` command:**

        Use this parameter to specify the protocol with which to connect to the server

        ```
        -dxProtocol <value>
        ```

        Use this parameter to specify the user name that is required for authenticating with the server

        ```
        -dxUsername <value> 
        ```

        Use this parameter to specify the password that is required for authenticating with the server

        ```
        -dxPassword <value>
        ```

        Use this parameter to specify the host name of the target server

        ```
        -hostname <value>
        ```

        Use this parameter to specify the port on which to connect to the server\(for Kubernetes Environment dxPort is 443\)

        ```
        -dxPort <value>
        ```

        Use this parameter to specify the path to DX configuration endpoint \(for example: /wps/config\)

        ```
        -xmlConfigPath <value>
        ```

        Use this parameter to specify the virtual portal Context

        ```
        -vpContext <value>
        ```

        Use this parameter to specify the virtual portal Title

        ```
        -vpTitle <value>
        ```

        Use this parameter to specify the XML file name with absolute path of the input file to export the virtual portal content.

        ```
        -xmlFile <value>
        ```

        **Limitation:** Currently, exporting virtual portal feature supports only `vpContext` and does not support `vpHostname`. Support for Virtual portal with hostname might be added in the future release.

        **Example:**

        ```
        dxclient manage-virtual-portal export -hostname <hostname> -dxProtocol <dxProtocol> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -vpTitle <vpTitle> -vpContext <vpContext> -xmlFile <xml-file-with-path>
        ```

    Log files from running the command can be found in the logs directory of the DXClient installation.


**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

