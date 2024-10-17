# LiveSync

This topic provides information about syncing WebDAV-based theme or WCM Design Library files from local-to-server and server-to-local in real time. LiveSync watches the file system for changes in the background and reflects them in the DX server.

It is recommended that you use the node version of the DXClient while working with LiveSync. LiveSync is supported in scaled DX environment setups.

!!! note
    You can trigger all LiveSync commands from within the target local theme path.
    Starting CF223, LiveSync Pull and Push commands for WCM Design Library are available for HTML and Folder Components.

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

    - WebDAV-based theme files in local
    - A registered Theme in server

-   **Common command attributes**

    ```shell title="Use this attribute to specify the protocol with which to connect to the DX server (`wp_profile`):"
    -dxProtocol <value>
    ```

    ```shell title="Use this attribute to specify the hostname of the target DX server:"
    -hostname <value>
    ```

    ```shell title="Use this attribute to specify the port on which to connect to the DX server (`wp_profile`):"
    -dxPort <value>
    ```

    ```shell title="Use this attribute to specify the username to authenticate with the DX server (`wp_profile`):"
    -dxUsername <value>
    ```

    ```shell title="Use this attribute to specify the password for the user in the `dxUsername` attribute:"
    -dxPassword <value>
    ```

    ```shell title="Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler):"
    -contenthandlerPath <value>
    ```

    ```shell title="Use the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files. This bypasses the prompt and immediately proceeds to pushing theme files."
    -disablePrompt, --disablePrompt <value>
    ```

-   **Required attribute for LiveSync Push Theme**

    ```shell title="Use this attribute to specify the Theme System Name of the theme created under DX server:"
    -themeName <value>
    ```

    !!! note "Difference between Theme System Name and Theme Title"
        The **_Theme System Name_** can only have the following characters: `a-z`, `A-Z`, `0-9`, `spaces`, and `- _ . ! ( ) ,`. Invalid characters in the title are converted to underscore "\_" in the system name by default. The **_Theme Title_** can include any characters.
      
        ![theme-title-vs-theme-system-name](../../../../images/theme-title-vs-theme-system-name.png){: style="height:350px;"}

    Use this attribute to specify the theme folder path that contains all static WebDAV based files to be pushed into DX theme, it accepts the folder path of the WebDAV based theme folder:

    ```shell
    -themePath <value>
    ```

    !!! warning
        1. Avoid using `~` `!` `()` `'` and `*` special characters when naming files and folders.
        2. If you have a theme title name with special characters, those are automatically converted to underscores (`_`) by the server (for example, `来源folder` is translated to `__folder`). For the theme name, use the Theme System Name, the one with `_` like `__folder` in the following example.

        ![livesync proper theme name](../../../../images/livesync_themename.png){: style="height:450px"}

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

    - A local folder where all the WebDAV-based theme files will be placed after downloading
    - A registered WebDAV-based Theme in server

-   **Common command attributes**

    ```shell title="Use this attribute to specify the protocol with which to connect to the DX server (`wp_profile`):"
    -dxProtocol <value>
    ```

    ```shell title="Use this attribute to specify the hostname of the target DX server:"
    -hostname <value>
    ```

    ```shell title="Use this attribute to specify the port on which to connect to the DX server (`wp_profile`):"
    -dxPort <value>
    ```

    ```shell title="Use this attribute to specify the username to authenticate with the DX server (`wp_profile`):"
    -dxUsername <value>
    ```

    ```shell title="Use this attribute to specify the password for the user in the `dxUsername` attribute:"
    -dxPassword <value>
    ```

    ```shell title="Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler):"
    -contenthandlerPath <value>
    ```

    ```shell title="Use the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files. This bypasses the prompt and immediately proceeds to pulling theme files."
    -disablePrompt, --disablePrompt <value>
    ```

-   **Required attribute for LiveSync Pull Theme**

    ```shell title="Use this attribute to specify the Theme System Name of the theme created under the DX server:"
    -themeName <value>
    ```


    Starting from CF214, if `themeName` option is not provided, a list of WebDAV themes is displayed and you can select a theme to pull into their local.

    ```shell
    $ dxclient livesync pull-theme -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -themePath <themePath>
    2023-08-03 18:18:55 : Extracting themes list from xml
    2023-08-03 18:18:55 : Please select a Theme name
    (x) My Theme
    ( ) Portal8.5
    ( ) PractitionerStudio
    ( ) Simple
    ( ) ThemeDevSite
    ( ) Toolbar8.5
    ```

    !!! note "Difference between Theme System Name vs. Theme Title"
        The **_Theme System Name_** can only have the following characters: `a-z`, `A-Z`, `0-9`, `spaces`, and `- _ . ! ( ) ,`. Invalid characters in the title are converted to underscore "\_" in the system name by default. The **_Theme Title_** can include any characters.
      
        ![theme-title-vs-theme-system-name](../../../../images/theme-title-vs-theme-system-name.png){: style="height:350px;"}

    Use this attribute to specify the theme folder path where DX theme static files should be placed. This attribute accepts a folder path:

    ```shell
    -themePath <value>
    ```

    !!! warning
        1. Avoid using `~` `!` `()` `'` and `*` special characters when naming files and folders.
        2. If you have a theme title name with special characters, those are automatically converted to underscores (`_`) by the server (for example, `来源folder` is translated to `__folder`). For the theme name, use the Theme System Name, the one with `_` like `__folder` in the following example.

        ![livesync proper theme name](../../../../images/livesync_themename.png){: style="height:450px"}

!!! example

    ```
    dxclient livesync pull-theme -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -themePath <themePath> -themeName <themeSystemName>
    ```

Note that LiveSync Pull Theme commands can be triggered from within the target local theme path.

See the following example where '...' represents truncated parameters.

```shell
$ pwd
/Users/path/to/theme

dxclient livesync pull-theme --themePath "/Users/path/to/theme" --themeName "Portal8.5SyncTest" ...
```

## LiveSync Pull WCM Design Library

The LiveSync Pull WCM Design Library command syncs a WCM Design Library in a DX Server with a local folder. Pulling the WCM Design Library is a prerequisite for the [Push WCM Design Library feature](#livesync-push-wcm-design-library). LiveSync Pull WCM Design Library parameters are case sensitive. It allows only the following special characters for filename, folder and libraryname : " $, -,  _,  !, ( )". Inside HTML components content, special characters are allowed.

-   **Command description**

    This command invokes the `livesync pull-wcm-design-library` tool inside the DXClient.

    This command downloads the WCM Design Library files from the DX Server under the given library name (provided in `wcmLibraryName`). The WCM Design Library files are then saved to the target local directory of the library (provided in `wcmLibraryPath`). This overwrites existing files in the local directory and deletes stale files in the process.

    ```shell
    dxclient livesync pull-wcm-design-library
    ```

-   **Help command**

    This command shows the help document on the `livesync pull-wcm-design-library` command usage:

    ```shell
    dxclient livesync pull-wcm-design-library -h
    ```

-   **Required files**

    - A local folder where all the WCM Design Library files will be placed after downloading
    - An existing WCM Design Library in server.

-   **Common command attributes**

    ```shell title="Use this attribute to specify the protocol with which to connect to the DX server (`wp_profile`):"
    -dxProtocol <value>
    ```

    ```shell title="Use this attribute to specify the hostname of the target DX server:"
    -hostname <value>
    ```

    ```shell title="Use this attribute to specify the port on which to connect to the DX server (`wp_profile`):"
    -dxPort <value>
    ```

    ```shell title="Use this attribute to specify the username to authenticate with the DX server (`wp_profile`):"
    -dxUsername <value>
    ```

    ```shell title="Use this attribute to specify the password for the user in the `dxUsername` attribute:"
    -dxPassword <value>
    ```

    ```shell title="Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler):"
    -contenthandlerPath <value>
    ```

    ```shell title="Use this attribute to specify the name of the WCM Project the library is a part of."
    -wcmProjectName <value>
    ```

    ```shell title="Use this attribute to specify the virtual portal context name of the DX Core server the library is a part of."
    -virtualPortalContext <value>
    ```

    ```shell title="Use the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files. This bypasses the prompt and immediately proceeds to pulling WCM Design Library files."
    -disablePrompt, --disablePrompt <value>
    ```

    Use either of the following attributes to specify the WCM Design Library in the DX server you want to pull using this feature.

    ```shell title="WCM Design Library Name"
    -wcmLibraryName <value>
    ```

    ```shell title="WCM Design Library ID"
    -wcmLibraryId <value>
    ```

    !!! info "If neither of these attributes is provided:"

        1. LiveSync checks if a saved library was previously pulled using the `dxclient livesync push-wcm-design-library command` and uses that as basis.
        2. If no saved library is detected, a list of WCM Design Libraries is displayed. You can select a WCM Design Library to pull.

        ```shell title="Sample WCM Design Library Selection Prompt"
        $ dxclient livesync pull-wcm-design-library -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -wcmLibraryPath <wcmLibraryPath>
        2024-08-16 19:53:06 : Checking for saved WCM Design Library in <wcmLibraryPath>
        2024-08-16 19:53:06 : Please select a WCM Design Library
        (x) [Library Name: blog solo template v70,  Display Title: Blog Solo Template v70,  ID: ddc1c6de-b18d-4cfd-af8f-dac5ccdd5d30]
        ( ) [Library Name: blog template v70,  Display Title: Blog Template v70,  ID: 5eb62c46-6f7d-498f-b71d-6bbdaac3e84a]
        ( ) [Library Name: ml configuration,  Display Title: ML Configuration,  ID: cac73711-d639-436b-a922-1a717c5e1105]
        ( ) [Library Name: portal site,  Display Title: Portal Site,  ID: TWFuYWdlZCBQYWdlcyBSb290IExpYnJhcnk]
        ```


-   **Required attribute for LiveSync Pull WCM Design Library**

    Use this attribute to specify the local library folder path where the WCM Design Library files should be placed. This attribute accepts a folder path:

    ```shell
    -wcmLibraryPath <value>
    ```

!!! example "Example command for pulling a WCM Design Library"

    ```shell
    dxclient livesync pull-wcm-design-library -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -wcmLibraryPath <wcmLibraryPath> -wcmLibraryName <wcmLibraryName>
    ```

Note that you can trigger LiveSync commands from within the target local `wcmLibraryPath`.

See the following example where '...' represents truncated parameters.

    ```shell
    $ pwd
    /Users/path/to/library

    dxclient livesync pull-wcm-design-library --wcmLibraryPath "/Users/path/to/library" --wcmLibraryName "portal site" ...
    ```

## LiveSync Push WCM Design Library

The LiveSync Push WCM Design Library command synchronizes changes in your local WCM Design Library files with the DX Server, overwriting the server files with your local files changes. The system watches for succeeding changes within the given `wcmLibraryPath` and the changes are immediately reflected in the DX server. This feature only works on a WCM Design Library previously pulled by the [LiveSync Pull WCM Design Library feature](#livesync-pull-wcm-design-library). LiveSync Push WCM Design Library parameters are case sensitive. It allows only the following special characters for filename, folder and libraryname : " $, -,  _,  !, ( )". Inside HTML components content, special characters are allowed.


-   **Command description**

    This command invokes the `livesync push-wcm-design-library` tool inside the DXClient.

    First, this command pushes the local WCM Design Library (provided in `wcmLibraryPath`) to the DX Server with the WCM Design Library system name (provided in `wcmLibraryName`). The command then creates a file system watcher which looks out for any changes in the files or folders under `wcmLibraryPath` and immediately reflects those changes in the DX server. To stop watching for changes, press **Ctrl + C**.

    ```shell
    dxclient livesync push-wcm-design-library
    ```

-   **Help command**

    This command shows the help document on the `livesync push-wcm-design-library` command usage:

    ```shell
    dxclient livesync push-wcm-design-library -h
    ```

-   **Required files**

    - WCM Design Library files in local pulled using the `livesync pull-wcm-design-library` command
    - A registered WCM Design Library in server

-   **Common command attributes**

    ```shell title="Use this attribute to specify the protocol with which to connect to the DX server (`wp_profile`):"
    -dxProtocol <value>
    ```

    ```shell title="Use this attribute to specify the hostname of the target DX server:"
    -hostname <value>
    ```

    ```shell title="Use this attribute to specify the port on which to connect to the DX server (`wp_profile`):"
    -dxPort <value>
    ```

    ```shell title="Use this attribute to specify the username to authenticate with the DX server (`wp_profile`):"
    -dxUsername <value>
    ```

    ```shell title="Use this attribute to specify the password for the user in the `dxUsername` attribute:"
    -dxPassword <value>
    ```

    ```shell title="Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler):"
    -contenthandlerPath <value>
    ```

    ```shell title="Use this attribute to specify the name of the WCM Project the library is a part of."
    -wcmProjectName <value>
    ```

    ```shell title="Use this attribute to specify the virtual portal context name of the DX Core server the library is a part of."
    -virtualPortalContext <value>
    ```

    ```shell title="Use the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files. This bypasses the prompt and immediately proceeds to pushing WCM Design Library files."
    -disablePrompt, --disablePrompt <value>
    ```

    ```shell title="Use this attribute to specify the system name of the WCM Design Library created under the DX server:"
    -wcmLibraryName <value>
    ```

-   **Required attribute for LiveSync Push WCM Design Library**

    Use this attribute to specify the WCM Design Library folder path that contains all files to be pushed to the DX WCM Design Library. This attribute accepts the folder path of the WCM Design Library folder previously pulled by the LiveSync Pull WCM Design Library feature:

    ```shell
    -wcmLibraryPath <value>
    ```

!!! example "Example command for pushing a WCM Design Library"

    ```
    dxclient livesync push-wcm-design-library -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -wcmLibraryPath <wcmLibraryPath> -wcmLibraryName <wcmLibraryName>
    ```

## Limitations and Troubleshooting

### General

- If the real-time sync during the push command gets disrupted, disconnect and reconnect again.
- It is not recommended to use LiveSync on a production server.
- Conflict detection and resolutions are not implemented.

### Themes

- The [LiveSync Push Theme](#livesync-push-theme) command does not register or unregister themes. For that, use [Deploy Themes](./themes.md#deploy-theme) or [Undeploy Themes](./themes.md#undeploy-theme) commands.
- While multiple developers can use LiveSync on the same server, LiveSync restricts concurrent theme editing to one developer at a time. If another user is currently working on the same theme being pushed, LiveSync will not allow that user's changes to be pushed. Concurrent usage of this command on the same theme or using it along with [Theme Editor](../../../../build_sites/themes_skins/customizing_theme/theme_editor_portlet.md), or WebDav, is not supported.
- Sequential usage of LiveSync on a single theme with different client operating systems (i.e., Windows and Mac) is not supported.
- Case sensitivity for naming files and folders is not supported.

### WCM Design Library

- Currently, only HTML and Folder components are the supported components of this feature.
- Moving and renaming of files are equivalent to deleting the original components and creating an entirely new set of components.
- If a published component has a draft version, the feature will pull and push into the draft version.
- The LiveSync Push WCM Design Library feature only works on a WCM Design Library previously pulled by the LiveSync Pull WCM Design Library feature.
