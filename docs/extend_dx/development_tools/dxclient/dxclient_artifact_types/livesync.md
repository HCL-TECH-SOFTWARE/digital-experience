# LiveSync

This topic provides information about syncing WebDAV based theme files from local-to-server and server-to-local in real time. It watches the file system for changes in the background.

!!! note
    We recommend using the node version of DXClient while working with livesync.

## LiveSync Push Theme

This command will sync your WebDAV based theme files into DX Server. Then, it will watch for succeeding changes within the given `themePath` and immediately reflect the changes in the DX server.


-   **Command description**

    This command invokes the livesync push-theme tool inside the DXClient.

    This command initially pushes the local theme (provided in `themePath`) in WebDAV Server with the theme system name (provided in `themeName`). It will then create a file system watcher which will watch for any changes (files or folders) under `themePath` and immediately reflect those changes in WebDAV Server. To stop watching, press (Ctrl + C).

    ```shell
    dxclient livesync push-theme
    ```

-   **Help command**

    This command shows the help document on the `livesync push-theme` command usage:

    ```shell
    dxclient livesync push-theme -h
    ```

-   **Required files**

    1. WebDAV based theme files in local.
    2. Registered Theme in server.

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

    Use this attribute to allow users to overwrite files on the local system or server without being prompted for `OVERWRITE-SERVER` or `OVERWRITE-LOCAL` confirmation:

    ```shell
    -o, --allow-overwrite
    ```

-   **Required options for LiveSync Push Theme**

    Use this attribute to specify the Theme System Name of the theme created under DX server:

    ```shell
    -themeName <value>
    ```

    Use this attribute to specify the theme folder path that contains all static WebDAV based files to be pushed into DX theme, it accepts the folder path of the WebDAV based theme folder:

    ```shell
    -themePath <value>
    ```

    !!! note "Important"
        While _Theme Title_ can include any characters, _Theme System Name_ can include only the following characters: a-z, A-Z, 0-9, spaces, and - _ . ! ( ) ,
        Invalid characters in the title are converted to underscore "_" in the system name by default.
       
        ![theme-title-vs-theme-system-name](../../../../images/theme-title-vs-theme-system-name.png)

    !!! warning
        1. Avoid using `~` `!` `()` `'` and `*` special characters when naming files and folders.
        2. If you have a theme title name with special characters, those are automatically converted to underscores (`_`) by the server (for example, `来源folder` is translated to `__folder`). For the theme name, use the Theme System Name, the one with `_` like `__folder` in the following example.

        ![livesync proper theme name](../../../../images/livesync_themename.png){: style="height:450px"}

    Use this attribute to specify the path to the contenthandler servlet on the DX server (e.g. /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

!!! example

    ```
    dxclient livesync push-theme -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -themePath <themePath> -themeName <themeSystemName>
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

This command is used to sync a theme from a DX WebDAV based theme on a remote server to a local folder.

-   **Command description**

    This command invokes the livesync push-theme tool inside the DXClient.

    This command will download the WebDAV based theme files in WebDAV Server under the given theme system name (provided in `-themeName`). This will then be saved to the target local directory of the theme (provided in `-themePath`), overwriting existing files in this local directory which also deletes stale files in the process.


    ```shell
    dxclient livesync pull-theme
    ```

-   **Help command**

    This command shows the help document on the `livesync pull-theme` command usage:

    ```shell
    dxclient livesync pull-theme -h
    ```

-   **Required files**

    1. A local folder where all the WebDAV based theme files will be placed after downloading.
    2. Registered WebDAV based Theme in server.

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

    Use this attribute to specify the Theme System Name of the theme created under the DX server:

    ```shell
    -themeName <value>
    ```

    Use this attribute to specify the theme folder path where DX theme static files will be placed. It accepts a folder path:

    ```shell
    -themePath <value>
    ```

    !!! note "Important"
        While _Theme Title_ can include any characters, _Theme System Name_ can include only the following characters: a-z, A-Z, 0-9, spaces, and - _ . ! ( ) ,
        Invalid characters in the title are converted to underscore "_" in the system name by default.
      
        ![theme-title-vs-theme-system-name](../../../../images/theme-title-vs-theme-system-name.png)

    !!!warning
        1. Avoid using `~` `!` `()` `'` and `*` special characters when naming files and folders.
        2. If you have a theme title name with special characters, those are automatically converted to underscores (`_`) by the server (for example, `来源folder` is translated to `__folder`). For the theme name, use the Theme System Name, the one with `_` like `__folder` in the following example.

        ![livesync proper theme name](../../../../images/livesync_themename.png){: style="height:450px"}

    Use this attribute to specify the path to the contenthandler servlet on the DX server (e.g. /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

!!! example

    ```
    dxclient livesync pull-theme -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -themePath <themePath> -themeName <themeSystemName>
    ```

## Limitations & Troubleshooting

1. This command does not register or unregister themes. For that, use [Deploy Themes](./themes.md#deploy-theme) or [Undeploy Themes](./themes.md#undeploy-theme) commands.
2. While multiple developers can use LiveSync on the same server, each developer has to use a unique theme. In other words, LiveSync Push Theme is currently only intended for one developer working on a single theme. Concurrent usage of this command on the same theme or using it along with [Theme Editor](../../../../build_sites/themes_skins/customizing_theme/theme_editor_portlet.md), or WebDav, is not supported.
3. Sequential usage of LiveSync on a single theme with different client operating systems (i.e., Windows and Mac) is not supported.
4. Conflict detection and resolutions are not implemented.
5. Do not trigger the livesync commands from within the target local theme path.
6. Case-Sensitivity for file and folder naming are not supported.
7. In any case, if the real-time sync of theme during the push command gets disrupted, disconnect and reconnect again.
8. It is not recommended to use LiveSync on a production server.
9. LiveSync is not supported currently in scaled DX environment set-up.