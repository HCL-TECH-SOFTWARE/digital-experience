# LiveSync

This topic provides information about the syncing files from local-to-server, server-to-local.

!!! note
    We recommend to use node version of DXClient while working with LiveSync as it is accurate and better performant.

## LiveSync Push Theme

This command lets you sync your theme in WebDAV Server. Then, it'll watch for succeeding changes within the given `themePath` and immediately reflect in the WebDAV Server.

!!! note
    1. This command does not register/unregister themes. For that, use [Deploy Themes](./themes.md#deploy-theme) and/or [Undeploy Themes](./themes.md#undeploy-theme) commands.
    2. LiveSync Push Theme is currently only intended for 1:1, developer : server use. Concurrent usage of this command of (i.e. two (2) developers working in the same theme) will produce unwanted errors. Similarly, usage of LiveSync Push Theme and [Theme Editor](../../../../build_sites/themes_skins/customizing_theme/theme_editor_portlet.md) when editing files of the same theme will also produce unwanted errors.
    3. Conflict Detections (and/or Resolutions) are not part of CF212 release.
    4. In any case LiveSync Push Theme is disrupted, disconnect and reconnect again.

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

    1. WebDAV theme files in local.
    2. Registered WebDAV Theme in Server.

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

    Use this attribute to specify the Theme System Name (or Theme Title) of the theme created under WebDAV server in DX:

    ```shell
    -themeName <value>
    ```

    Use this attribute to specify the theme folder path that contains all static files to be pushed into DX theme, it accepts the folder path of the WebDAV theme folder:

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

!!! warning
    1. Please avoid using `#` `%` `&` and `*` special characters when naming files and folders.
    2. For theme names, it supports non-english characters but `a-z`, `A-Z`, `0-9`, `spaces`, and `- _ . ! ( )` characters will only be used for theme system name. Other invalid characters will be converted in underscores(`_`). (e.g. `来源folder` will be translated to `__folder`).

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

    1. A local folder where all the WebDAV theme files will be placed after downloading.
    2. Registered WebDAV Theme in Server.

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

    Use this attribute to specify the Theme System Name (or Theme Title) of the theme created under WebDAV server in DX:

    ```shell
    -themeName <value>
    ```

    Use this attribute to specify the theme folder path where DX theme static files will be placed. It accepts a folder path:

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