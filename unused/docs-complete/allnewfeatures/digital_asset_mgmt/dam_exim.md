# DAM Assets Export and Import \(EXIM\) 

[Digital Asset Management](../digital_asset_mgmt/digital_asset_mgmt_overview.md) \(DAM\) Assets Export and Import \(EXIM\) is a tool used for exporting the DAM assets from the source environment to the file system in a structured manner. It can also be used for importing DAM assets from the file system to the target environment.

## User access and control capabilities for HCL DAM EXIM users

DAM \(EXIM\) is exposed via [DXClient](dxclient.md).

Administrator users and authorized users with Administrator role privileges have access and control capabilities to DAM EXIM.

If you choose to export DAM assets to a target that does not share the same LDAP settings, then access rights is not transferred.

## Limitations

DAM EXIM may be used to take a backup of DAM assets from any environment. The same backup can be used in other environment.

DAM EXIM cannot be used for continuous sync like DAM staging. You need to configure your [DAM staging](managing_dam_staging.md) if you want a continuous sync of DAM assets.

DAM Staging is a continuous sync process between environments. If you are using DAM staging, then it is not necessary to use DAM EXIM.

## Export DAM assets

The export command is used to export the assets of DAM in the file system at a user-specific location or default location store/outputFiles/dam-export-assets/.

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

    Use this attribute to specify the location of the file path to `export` \(default path is store/outputFiles/dam-export-assets/\):

    ```
    -exportPath <value>
    ```

    Use true or false to include or exclude binary as part of `export` \(default is true\):

    ```
    -exportBinary <value>
    ```

    **Note:** Optional parameters are `exportPath` and `exportBinary`.

    Example:

    ```
    dxclient manage-dam-assets export-assets -dxProtocol https -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -exportPath <exportPath> -exportBinary <exportBinary>
    ```


## Validate exported DAM assets

The validate command is used to validate exported DAM assets file at the location specified by the user or default location store/outputFiles/dam-export-assets/.

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

    Use this attribute to specify the location of the file path to *export* \(default path is store/outputFiles/dam-export-assets/\):

    ```
    -exportPath <value>
    ```

    Use true or false to include or exclude binary as part of validation \(default is true\):

    ```
    -importBinary <value>
    ```

    **Note:** Optional parameters are `exportPath` and `exportBinary`.

    Example:

    ```
    dxclient manage-dam-assets validate-assets -exportPath <exportPath> -importBinary <importBinary>
    ```


## Import DAM assets

The import command is used to import the assets of a dam to the target environment from the location specified by the user or default location store/outputFiles/dam-export-assets/.

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

    Use this attribute to specify the location of the file path to `import` \(default path is store/outputFiles/dam-export-assets/\):

    ```
    -exportPath <value>
    ```

    Use `true` or `false` to include or exclude binary as part of `import` \(default is `true`\):

    ```
    -importBinary <value>
    ```

    **Note:** Optional parameters are `exportPath` and `exportBinary`.

    Example:

    ```
    dxclient manage-dam-assets import-assets -dxProtocol https -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -exportPath <exportPath> -importBinary <importBinary>
    ```


**Parent topic:**[Manage media assets ](../digital_asset_mgmt/manage_media_assets.md)

