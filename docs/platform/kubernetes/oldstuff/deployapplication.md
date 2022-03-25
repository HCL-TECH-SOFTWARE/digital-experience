# Digital Experience applications

This section provides information about the deployment of DX application artifacts by using the DXClient tool.

## Deploy Application

The deploy-application command is used to deploy the EAR file into the WebSphere Application Server.

-   **Command description**

    This command invokes the deploy-application tool inside DXClient. This command uses the provided files and execute the deploy application task.

    ```
    dxclient deploy-application
    ```

-   **Required files**

    The following EAR file will be deployed into the WebSphere Application Server: Deployable EAR

-   **Help command**

    This command shows the help information for `deploy-application` command usage:

    ```
    dxclient deploy-application -h
    ```

-   **Command options**

    Use this attribute to specify the hostname of the target server

    ```
    -hostname <value>
    ```

    Use this attribute to specify the protocol with which to connect to the server

    ```
    -dxProtocol <value>
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

    Use this attribute and retrigger the command to check the status of any previous request that was incomplete.

    ```
    -requestId <Unique ID of a previously triggered deploy application request>
    ```

-   **Required options for application deployment:**

    Use this attribute to specify the config wizard home \(route change only in case of Open Shift Kubernetes Enviornment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the cw\_profile \(for Kubernetes Environment dxConnectPort is 443\)

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify Soap port of the DX server

    ```
    -dxSoapPort <Soap port of the DX server>
    ```

    Specify either the `dxProfileName` or `dxProfilePath` of the DX core server:

    -   Use this attribute to specify the profile name of the DX core server \(for example: `wp_profile`\):

        ```
        -dxProfileName <Profile name of the DX core server>
        ```

    **OR**

    -   Use this attribute to specify the profile path of the DX server \(for example: `/opt/HCL/wp_profile`\):

        ```
        -dxProfilePath <Path of the DX core server profile> 
        ```

    Use this attribute to specify the EAR file path that is required while executing the deploy application task

    ```
    –applicationFile <Absolute or relative path to deployable ear file>
    ```

    Use this attribute to specify the application name

    ```
    -applicationName <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server \(e.g. /wps/mycontenthandler\)

    ```
    -contenthandlerPath <value>
    ```

    The values passed through the command line command override the default values.

-   **Example:**

    ```
    dxclient deploy-application -dxProtocol <http/https> -hostname <host-name> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxSoapPort <dxSoapPort> -dxConnectHostname <hostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -applicationFile <application-file-with-path> -applicationName <application name> -dxProfileName <Profile name of the DX core server>
    ```


**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

