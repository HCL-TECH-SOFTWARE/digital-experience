# DAM Assets Export and Import (EXIM)

[Digital Asset Management](../index.md) \(DAM\) Assets Export and Import \(EXIM\) is a tool used for exporting the DAM assets from the source environment to the file system in a structured manner. It can also be used for importing DAM assets from the file system to the target environment.

## User access and control capabilities for HCL DAM EXIM users

DAM \(EXIM\) is exposed via [DXClient](../../../../extend_dx/development_tools/dxclient/dxclient.md).

Administrator users and authorized users with Administrator role privileges have access and control capabilities to DAM EXIM.

If you choose to export DAM assets to a target that does not share the same LDAP settings, then access rights is not transferred.

If you specify a path and run the command from the container, then assets will export or import to this location store/folder_name/.

## Limitations

DAM EXIM may be used to take a backup of DAM assets from any environment. The same backup can be used in other environment.

DAM EXIM cannot be used for continuous sync like DAM staging. Refer to [Sharing and staging DAM assets](../../configuration/staging_dam/index.md) for more information on how to configure a continuous sync of DAM assets.

DAM Staging is a continuous sync process between environments. If you are using DAM staging, then it is not necessary to use DAM EXIM.

## Export DAM assets

The export command is used to export the DAM assets in the file system to default location **store/outputFiles/dam-export-assets/** or if user specify a path, then DAM assets will export to this location **store/folder_name/**.

-   **Commands description**

    ```
    dxclient manage-dam-assets export-assets
    ```

-   **Help command**

    This command shows the help information for `manage-dam-assets` command usage:

    ```
    dxclient manage-dam-assets export-assets -h
    ```


-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server:

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the DX server:

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the server\(e.g. for Kubernetes environment, `-dxPort` is 443\):

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

    Use this attribute to specify the port number of the DAM server for any Kubernetes Environment. For example, default port is 443 \(`default: ""`\):

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server for any Kubernetes Environment. For example, default port is 443 \(`default: ""`\):

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify a location **store/folder_name/** that is different from the default location to export the DAM assets. The default location "export" is **store/outputFiles/dam-export-assets/**:

    ```
    -exportPath <value>
    ```

    Use true or false to include or exclude binary as part of `export` \(default is true\):

    ```
    -exportBinary <value>
    ```

    !!! note 
        Optional parameters are `exportPath` and `exportBinary`.

    !!! example

        ```
        dxclient manage-dam-assets export-assets -dxProtocol https -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -exportPath <exportPath> -exportBinary <exportBinary>
        ```


## Validate exported DAM assets

The validate command is used to validate exported DAM assets file at the default location **store/outputFiles/dam-export-assets/** or if user specify a path, then validation of DAM assets will be done from this location **store/folder_name/**.

-   **Commands description**

    ```
    dxclient manage-dam-assets validate-assets
    ```


-   **Help command**

    This command shows the help information for `manage-dam-assets` command usage:

    ```
    dxclient manage-dam-assets validate-assets -h
    ```

-   **Commands Optional options**


    Use this attribute to specify a location **store/folder_name/** that is different from the default location to validate the DAM assets. The default location "export" is **store/outputFiles/dam-export-assets/**:

    ```
    -exportPath <value>
    ```

    Use true or false to include or exclude binary as part of validation \(default is true\):

    ```
    -importBinary <value>
    ```

    !!! note 
        Optional parameters are `exportPath` and `exportBinary`.

    !!! example

        ```
        dxclient manage-dam-assets validate-assets -exportPath <exportPath> -importBinary <importBinary>
        ```


## Import DAM assets

The import command is used to import the DAM assets to the target environment from the default location **store/outputFiles/dam-export-assets/** or if user specify a path, then DAM assets will import to this location **store/folder_name/**.

-   **Commands description**

    ```
    dxclient manage-dam-assets import-assets -h
    ```


-   **Help command**

    This command shows the help information for `manage-dam-assets` command usage:

    ```
    dxclient manage-dam-assets import-assets -h
    ```


-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server:

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the DX server:

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the server \(e.g. for Kubernetes Environment, `dxPort` is 443\):

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

    Use this attribute to specify the port number of the DAM server. For any Kubernetes Environment, default port is 443 \(`default: ""`\):

    ```
    -damAPIPort <value> 
    ```

    Use this attribute to specify the port number of the DX Core API server. For any Kubernetes Environment, default port is 443 \(`default: ""`\)

    ```
    -ringAPIPort <value> 
    ```

     Use this attribute to specify a location **store/folder_name/** that is different from the default location to import the DAM assets. The default location "import" is **store/outputFiles/dam-export-assets/**:

    ```
    -exportPath <value>
    ```

    Use `true` or `false` to include or exclude binary as part of `import` \(default is `true`\):

    ```
    -importBinary <value>
    ```

    !!! note 
        Optional parameters are `exportPath` and `exportBinary`.

    !!! example

        ```
        dxclient manage-dam-assets import-assets -dxProtocol https -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -exportPath <exportPath> -importBinary <importBinary>
        ```

## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).