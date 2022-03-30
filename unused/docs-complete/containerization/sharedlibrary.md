# Shared library

Shared libraries are jar files representing code that is shared across multiple components of the customer, for example, portlets, themes, preprocessors, and others.

## Shared library

The shared-library command is used to manage the jar files in the provided default shared library location.

Default shared Library: DXCLib

Default shared library location: `<dx-server-profile>/PortalServer/sharedLibrary`

**Note:** For Shared Library artifact, the DX Server needs to be at HCL DX 9.5 CF196 or higher. The default shared library DXCLib is already configured and associated to application server.

The shared-library command uses two sub-commands upload and delete to manage files in the DX server. The sub-command upload is used to upload jar files and sub-command delete is used to delete the files from the default shared library location provided below.

-   **Command Description**

    This command invokes the shared library upload task inside the DXClient. This is used to upload jar files into the default shared library location.

    ```
    dxclient shared-library upload
    ```

    This command invokes the shared library delete task inside the DXClient. This is used to delete jar files from the default shared library location.

    ```
    dxclient shared-library delete
    ```

-   **Help command**

    This command shows the help information for `shared-library upload` command usage:

    ```
    dxclient shared-library upload -h
    ```

    This command shows the help information for `shared-library delete` command usage:

    ```
    dxclient shared-library delete -h
    ```

-   **Common Command options**

    Use this attribute to specify the username that is required for authenticating with the server

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the server

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the config wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the cw\_profile\(for Kubernetes Environment dxConnectPort is 443\)

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile.

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the profile name of the DX Core

    ```
    -dxProfileName <Name of the DX server profile>
    ```

-   **Command option for upload**

    Use this attribute to specify the path to a jar/zip file or folder containing jars in it.

    ```
    -libFilePath <value>
    ```

-   **Command option for delete**

    Use this attribute to specify the names of the jar files present in the shared library location on the server.

    ```
    -libFileNames <value>
    ```

    **Note:** For upload, the folder or zip file should contain only jars files that are to be uploaded to the default shared library location.

-   **Example:**

    Use this attribute to specify the path to a jar/zip file or folder containing jars in it.

    ```
    dxclient shared-library upload -dxUsername <dxUsername> -dxPassword <dxPassword> -dxConnectHostname <dxConnectHostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <Profile name of the DX Server> -libFilePath <path to jar/zip/Folder> 
    
    dxclient shared-library delete -dxUsername <dxUsername> -dxPassword <dxPassword> -dxConnectHostname <dxConnectHostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <Profile name of the DX Server> -libFileNames <file names> -libFilePath <value>
    ```


**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

