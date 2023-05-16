# LiveSync

This topic provides information about syncing files from local-to-server and server-to-local in real time. It replaces your existing WebDAV client and watches file system changes in the background.

!!! note
    We recommend using the node version of DXClient while working with LiveSync, as it is more accurate and more performant.

## LiveSync Push Theme

This command lets you sync your theme on the WebDAV server. Then, it'll watch for succeeding changes within the given `themePath` and immediately reflect them in the WebDAV Server.


-   **Command description**

    This command invokes the livesync push-theme tool inside the DXClient.

    This command initially pushes the local theme (provided in `themePath`) in WebDAV Server with the theme name (provided in `themeName`). It will then create a file system watcher which will watch for any changes (files or folders) under `themePath` and immediately reflect those changes in WebDAV Server. To stop watching, press (Ctrl + C).

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

    !!! warning
        1. Avoid using `#` `%` `&` and `*` special characters when naming files and folders.
        2. If you have a theme name with special characters, those are automatically converted to underscores (`_`) by the server. (for example `来源folder` is translated to `__folder`). For theme name use the Theme System Name, the one with `_` like `__folder` in the following example.
        ![livesync proper theme name](../../../../images/livesync_themename.png){: style="height:450px"}

    Use this attribute to specify the path to the contenthandler servlet on the DX server (e.g. /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

!!! example

    ```
    dxclient livesync push-theme -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -themePath <themePath> -themeName <themeName>
    ```

### Ignoring Files
You can opt to ignore files and folder paths to push to the server by creating an ignore file (`.ignore`) under the root of the theme folder (the theme that is provided in `--themePath`).

When changing the contents of the ignore file, the command needs to be re-run again to reflect the files that needs to be ignored.

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

    !!!warning
        1. Avoid using `#` `%` `&` and `*` special characters when naming files and folders.
        2. If you have a theme name with special characters, those are automatically converted to underscores (`_`) by the server. (For example, `来源folder` is translated to `__folder`). For theme name use the Theme System Name, the one with `_` like `__folder` in the following example.
        ![livesync proper theme name](../../../../images/livesync_themename.png){: style="height:450px"}

    Use this attribute to specify the path to the contenthandler servlet on the DX server (e.g. /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

!!! example

    ```
    dxclient livesync pull-theme -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -themePath <themePath> -themeName <themeName>
    ```

### Limitations & Troubleshooting

1. This command does not register or unregister themes. For that, use [Deploy Themes](./themes.md#deploy-theme) or [Undeploy Themes](./themes.md#undeploy-theme) commands.
2. LiveSync Push Theme is currently only intended for 1:1, developer: server use. Concurrent usage of this command (for example, two (2) developers working on the same theme) or using it along with [Theme Editor](../../../../build_sites/themes_skins/customizing_theme/theme_editor_portlet.md), causes it to overwrite each user's changes.
3. Conflict detections or resolutions are not enabled.
4. Do not trigger the live sync commands inside the target local theme path. Triggering them corrupts the server-side theme folder.
5. Uploading files of the same name with different cases is not supported (for example, sample-file.txt and sample-FILE.txt), especially when working on devices with different OS. Forcibly doing this may cause Theme corruption and corrupts pull-theme action and erase local data. To resolve this, identify the last uploaded file or corrupted file that caused this issue in the server copy and delete it to have both push and pull working properly again.
6. In any case, if the real-time sync of Theme during the push command gets disrupted, disconnect and reconnect again.
