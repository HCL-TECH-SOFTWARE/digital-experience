# Exporting and importing WCM libraries

This section provides information about how to export and import WCM libraries using DXClient.

**Note:** WCM export and import supports the WCM JCR nodes format.

## Export WCM libraries

The `wcm-library-export` command is used to export the WCM libraries from the source server to an output location in the <working-directory\>/store/ folder.

-   **Command description**

    ```
    dxclient wcm-library-export
    
    ```

-   **Help command**

    This command shows the help document about the `wcm-library-export` command:

    ```
    dxclient wcm-library-export -h
    ```

-   **Command options**

    Use this attribute to specify the user name that is required to authenticate to the server:

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password that is required to authenticate to the server:

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the config wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as the hostname\) that is required for authenticating to the `cw_profile`:

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the `cw_profile` \(for Kubernetes Environment, `dxConnectPort` is 443\):

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating to the `cw_profile`:

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the `cw_profile`:

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the user name of the DX WAS server:

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

    Use this attribute to specify the names of the WCM libraries of the DX core server \(for example, "hello\_library,demo\_library"\):

    ```
    -librariesName <value>
    ```

    Use this attribute to specify the export libraries. This value can be either true or false. If the value is true, then export the all libraries:

    ```
    -exportAllLibraries <value>
    ```

    Log files from running the command can be found in the logs directory of the DXClient installation.

-   **Example:**

    ```
     dxclient wcm-library-export -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword>  -dxConnectHostname <dxConnectHostname> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxWASUsername <dxWASUsername> -dxProfileName <dxProfileName> -librariesName <librariesName> 
    ```


## Import WCM libraries

The `wcm-library-import` command is used to import the WCM libraries from the source server to the target server.

**Limitation:** Ensure that the WCM import.zip file size is not more than 100MB. This limitation will be addressed in the future release.

-   **Command description**

    ```
    dxclient wcm-library-import
    
    ```

-   **Help command**

    Use this attribute to specify the user name that is required to authenticate to the server:

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required to authenticate to the server:

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the `config` wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to `cw_profile`:

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the `cw_profile` \(for Kubernetes Environment, `dxConnectPort` is 443\):

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating to the `cw_profile`:

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to `cw_profile`:

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the user name of the DX WAS server:

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

    Use this attribute to specify the path to a zip file or folder that contains the WCM libraries:

    ```
    -libFilePath <value>
    ```

    Log files from running the command can be found in the logs directory of the DXClient installation.

-   **Example:**

    ```
    dxclient wcm-library-import -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword>  -dxConnectHostname <dxConnectHostname> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxWASUsername <dxWASUsername> -dxProfileName <dxProfileName> -libFilePath <libFilePath> 
    ```


**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

