# LiveSync

This topic provides information about the syncing Theme files from local-to-server, server-to-local.

## LiveSync Push Theme

This command lets you sync your theme in WebDAV Server. Then, it'll watch for succeeding changes within the given `themePath` and immediately reflect in the WebDAV Server.

!!! note
    This command does not register/unregister themes. For that, use [Deploy Themes](./themes.md#deploy-theme) and/or [Undeploy Themes](./themes.md#undeploy-theme) commands.

-   **Command description**

    This command invokes the livesync push-theme tool inside the DXClient.

    This command initially pushes the local theme (provided in `themePath`) in WebDAV Server with the theme name (provided in `themeName`). It will then create a file system watcher which will watch for any changes (files or folders) under `themePath` and immediately reflect those changes in WebDAV Server. To stop watching, press (ctrl + c).

    ```shell
    dxclient livesync push-theme
    ```

-   **Help command**

    This command shows the help document on the `livesync push-theme` command usage:

    ```shell
    dxclient livesync push-theme -h
    ```

-   **Required files**

    WebDAV theme collection: The theme collection folder/zip is used to create or update the collection in WebDAV file store of the DX Server.

-   **Common Command options**

    Use this attribute to specify the protocol with which to connect to the DX server (`wp_profile`):

    ```shell
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the target DX server:

    ```shell
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server (`wp_profile`):

    ```shell
    -dxPort <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server (`wp_profile`):

    ```shell
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the `dxUsername` attribute:

    ```shell
    -dxPassword <value>
    ```

-   **Required options for LiveSync Push Theme**

    Use this attribute to specify the theme name of the collection created under WebDAV server in DX:

    ```shell
    -themeName <value>
    ```

    Use this attribute to specify the theme file path that contains all static files to be pushed into DX theme, it accepts either folder or zip file path of the WebDAV theme collection:

    ```shell
    -themePath <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server (e.g. /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

!!! example

    ```
    dxclient livesync push-theme -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -themePath <themePath> -themeName <themeName>
    ```

### Ignoring Files
You can opt to ignore files and folder paths to push to server by creating an ignore file (`.ignore`) under the root of the theme folder (the theme that is provided in `--themePath`).

When changing contents of the ignore file, the command needs to be re-run again to reflect the files the needs to be ignored.

Sample `.ignore` file contents:
```txt
#.ignore

.DS_Store
logs/
```

## LiveSync Pull Theme

This command is used to sync a theme from a DX WebDAV theme on a remote server to a local folder.​

-   **Command description**

    This command invokes the livesync push-theme tool inside the DXClient.

    This command will download the theme files in WebDAV Server under the given theme name (provided in `-themeName`). This will then be saved to the target local directory of the theme (provided in `-themePath`), overwriting existing files in this local directory which also deletes stale files in the process.

    ```shell
    dxclient livesync pull-theme
    ```

-   **Help command**

    This command shows the help document on the `livesync pull-theme` command usage:

    ```shell
    dxclient livesync pull-theme -h
    ```

-   **Required files**

    WebDAV theme collection: The theme collection folder/zip is used to create or update the collection in WebDAV file store of the DX Server.

-   **Common Command options**

    Use this attribute to specify the protocol with which to connect to the DX server (`wp_profile`):

    ```shell
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the target DX server:

    ```shell
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server (`wp_profile`):

    ```shell
    -dxPort <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server (`wp_profile`):

    ```shell
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the `dxUsername` attribute:

    ```shell
    -dxPassword <value>
    ```

-   **Required options for LiveSync Pull Theme**

    Use this attribute to specify the theme name of the collection created under WebDAV server in DX:

    ```shell
    -themeName <value>
    ```

    Use this attribute to specify the theme file path that contains all static files to be pushed into DX theme, it accepts either folder or zip file path of the WebDAV theme collection:

    ```shell
    -themePath <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server (e.g. /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

!!! example

    ```
    dxclient livesync pull-theme -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -themePath <themePath> -themeName <themeName>
    ```