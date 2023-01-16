# DX Core server

This topic provides information about restarting the DX Core both on the Websphere Application Server level and on the Core Pods-level on Kubernetes-based deployments.

This topic also provides the steps on creating core server configuration reports using the DXClient tool. The `dx-core-configuration-reports`command is used to generate the differential reports on various core configurations between two DX server nodes.

## Restart DX Core server

!!! important
    Running the restart-dx-core command in a Kubernetes-based deployment does not restart all of the Websphere Application servers in all the HCL DX Core pods. To restart all pods on Kubernetes-based deployments, see: [Restart DX Core Pods](#restart-dx-core-pods).

The restart-dx-core command is used to restart the DX Core server.

- **Command description**

  This command invokes the restart-dx-core tool inside the DXClient and runs the DX Core restart action:

  ```
  dxclient restart-dx-core
  ```

- **Help command**

  This command shows the help information for `restart-dx-core` command usage:

  ```
  dxclient restart-dx-core -h
  ```

- **Command options**

  Use this attribute to specify the username that is required for authenticating with the DX Core:

  ```
  -dxUsername <value>
  ```

  Use this attribute to specify the password that is required for authenticating with the DX Core:

  ```
  -dxPassword <value>
  ```

  Use this attribute to specify the hostname of the target DX server:

  ```
  -hostname <value>
  ```

  Use this attribute to specify the port number of the `cw_profile`:

  ```
  -dxConnectPort <value>
  ```

  Use this attribute to specify the username that is required for authenticating to the `cw_profile`:

  ```
  -dxConnectUsername <value>
  ```

  Use this attribute to specify the password that is required for authenticating to the `cw_profile`:

  ```
  -dxConnectPassword <value>
  ```

  Specify either the `dxProfileName` or `dxProfilePath` of the DX core server:

  - Use this attribute to specify the profile name of the DX core server (for example: `wp_profile`):

    ```
    -dxProfileName <Profile name of the DX core server>
    ```

  **OR**

  - Use this attribute to specify the profile path of the DX server (for example: `/opt/HCL/wp_profile`):

    ```
    -dxProfilePath <Path of the DX core server profile>
    ```

  The values that are passed through the command line override the default values.

  Use this attribute and retrigger the command to check the status of any previous request that was incomplete:

  ```
  -requestId <Unique ID of a previously triggered restart request>
  ```

!!! example

    ```
    dxclient restart-dx-core -dxUsername <dxUsername> -dxPassword <dxPassword> -hostname <hostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <Profile name of the DX core server>
    ```

## Restart DX Core Pods

- **Command description**

  This command triggers a rollout restart of the DX Core Pods similar to `kubectl rollout restart` command.

  This is useful for propagating changes across multiple core pods properly, requiring a server restart.

!!! note
  Only users set in the Kubernetes Secret `wasAdmin` field can use this command.

    ```
    dxclient restart-core-pods
    ```

- **Help command**

  This command shows the help information for `restart-core-pods` command usage:

  ```
  dxclient restart-core-pods -h 
  ```

- **Command options**

  Use this attribute to specify the username that is required for authenticating with the DX WAS Server:

  ```
  -dxWASUsername <value>
  ```

  Use this attribute to specify the password that is required for authenticating with the DX WAS Server:

  ```
  -dxWASPassword <value>
  ```

  Use this attribute to specify the protocol to connect to the server:

  ```
  -dxProtocol <value>
  ```

  Use this attribute to specify the hostname of the target DX deployment:

  ```
  -hostname <value>
  ```

## DX Core server configuration report

- **Command description**

  The `dx-core-configuration-reports` command shows the summary of the configurations of a single DX server or both source and target DX servers, which users can use to compare.

  ```
  dxclient dx-core-configuration-reports [OPTIONS]
  ```

    !!! note
        The target server details are needed only when the user needs to generate the summary of the configurations of both source and target servers. If any one of the target server details is provided, it prompts you to add all the required target parameters.

-   **Help command**

  This command shows the help information for `dx-core-configuration-reports` command usage:

  ```
  dxclient dx-core-configuration-reports summary-report -h
  ```

- **Command options**

  Use this attribute to specify the hostname of the target DX server:

  ```
  -hostname <value>
  ```

  Use this attribute to specify the port number of `cw_profile`:

  ```
  -dxConnectPort <value>
  ```

  Use this attribute to specify the user name that is required for authenticating to `cw_profile`:

  ```
  -dxConnectUsername <value>
  ```

  Use this attribute to specify the password that is required for authenticating to `cw_profile`:

  ```
  -dxConnectPassword <value>
  ```

  Use this attribute to specify the profile name of the DX core server:

  ```
  -dxProfileName <Profile name of the DX core server>
  ```

  Use this attribute to specify the host name of the target DX core server:

  ```
  -targetHostname <value>
  ```

  Use this attribute to specify the port number of the target cw_profile server:

  ```
  -targetDxConnectPort <value>
  ```

  Use this attribute to specify the user name of the target server:

  ```
  -targetDxConnectUsername <value>
  ```

  Use this attribute to specify the password of the target server:

  ```
  -targetDxConnectPassword <value>
  ```

  Use this attribute to specify the profile name of the target server:

  ```
  -targetDxProfileName <Profile name of the DX core server>
  ```


!!! example

    ```
    dxclient dx-core-configuration-reports summary-report -hostname <hostname> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxConnectPort <dxConnectPort> -targetHostname <targetHostname> -targetDxConnectUsername <targetDxConnectUsername> -targetDxConnectPassword <targetDxConnectPassword> -targetDxConnectPort <targetDxConnectPort>
    ```

!!! note
The attribute `-dxConnectHostname` is deprecated in CF202 and later releases. It is recommended that you start using the replacement parameter `-hostname` starting from CF202 wherever necessary.
