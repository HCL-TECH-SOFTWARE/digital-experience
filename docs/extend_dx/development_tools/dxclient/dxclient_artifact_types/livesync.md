# LiveSync

This topic provides information about syncing WebDAV based theme files from local-to-server and server-to-local in real time. It watches the file system for changes in the background.


!!! note
    - It is recommended that you use the node version of the DXClient while working with LiveSync.
    - Starting CF214, LiveSync is supported in scaled DX environment setups.
    - Starting CF217, all LiveSync commands can be triggered from within the target local theme path.
    - Starting CF223, LiveSync Pull and Push commands for WCM Design Library is available for HTML and Folder Components.

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

    Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

    Use the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files. This bypasses the prompt and immediately proceeds to pushing theme files.

    ```shell
    -disablePrompt, --disablePrompt <value>
    ```

-   **Required options for LiveSync Push Theme**

    Use this attribute to specify the Theme System Name of the theme created under DX server:

    ```shell
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

    Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

    Use the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files. This bypasses the prompt and immediately proceeds to pulling theme files.

    ```shell
    -disablePrompt, --disablePrompt <value>
    ```

-   **Required option for LiveSync Pull Theme**

    Use this attribute to specify the Theme System Name of the theme created under the DX server:

    ```shell
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

## LiveSync Push WCM Design Library

This command will sync your WCM Design Library local files into DX Server. Then, it will watch for succeeding changes within the given `libraryPath` and immediately reflect the changes in the DX server.


-   **Command description**

    This command invokes the livesync push-wcm-design-library tool inside the DXClient.

    This command initially pushes the local WCM Design Library (provided in `libraryPath`) in DX Server with the WCM Design Library system name (provided in `libraryName`). It will then create a file system watcher which will watch for any changes (files or folders) under `libraryPath` and immediately reflect those changes in DX Server. To stop watching, press (Ctrl + C).

    ```shell
    dxclient livesync push-wcm-design-library
    ```

-   **Help command**

    This command shows the help document on the `livesync push-wcm-design-library` command usage:

    ```shell
    dxclient livesync push-wcm-design-library -h
    ```

-   **Required files**

    1. WCM Design Library files in local pulled using the livesync pull-wcm-design-library command.
    2. Registered WCM Design Library in server.

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

    Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

    Use this attribute to specify the Name of the WCM Project the library is part of.

    ```shell
    -wcmProjectName <value>
    ```

    Use this attribute to specify the Name of the Context of the virtual portal of the DX Core server the library is part of.

    ```shell
    -virtualPortalContext <value>
    ```

    Use the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files. This bypasses the prompt and immediately proceeds to pushing WCM Design Library files.

    ```shell
    -disablePrompt, --disablePrompt <value>
    ```

    <!-- THIS IS NOW NOT NEEDED I THINK BECAUSE WE ALWAYS USE THE SAVED METADATA SINCE WE ONLY ALLOW USING WDL ALREADY PULLED USING OUR OWN PULL FEATURE
    Use this attribute to specify the WCM Design Library System Name of the WCM Design Library created under DX server:

    ```shell
    -libraryName <value>
    ```
    -->

-   **Required options for LiveSync Push WCM Design Library**

    Use this attribute to specify the WCM Design Library folder path that contains all static WebDAV based files to be pushed into DX WCM Design Library, it accepts the folder path of the WebDAV based WCM Design Library folder:

    ```shell
    -libraryPath <value>
    ```

    <!-- NOT SURE IF THIS STILL EXISTS
    !!! warning
        1. Avoid using `~` `!` `()` `'` and `*` special characters when naming files and folders.
        2. If you have a WCM Design Library title name with special characters, those are automatically converted to underscores (`_`) by the server (for example, `来源folder` is translated to `__folder`). For the WCM Design Library name, use the WCM Design Library System Name, the one with `_` like `__folder` in the following example.

        ![livesync proper WCM Design Library name](../../../../images/livesync_themename.png){: style="height:450px"}
     -->

!!! example

    ```
    dxclient livesync push-wcm-design-library -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -libraryPath <libraryPath> -libraryName <themeSystemName>
    ```

### Ignoring Files WCM Design Library

You can opt to ignore files and folder paths to push to the server by creating an ignore file (`.ignore`) under the root of the WCM Design Library folder (the WCM Design Library that is provided in `--libraryPath`).

When changing the contents of the ignore file, the command needs to be re-run again to reflect the files that needs to be ignored.

Sample `.ignore` file contents:
```txt
#.ignore

.DS_Store
logs/
```

## LiveSync Pull WCM Design Library

This command is used to sync a theme from a DX WCM Design Library from DX Server to a local folder.

-   **Command description**

    This command invokes the livesync pull-wcm-design-library tool inside the DXClient.

    This command will download the WCM Design Library files in DX Server under the given library name (provided in `-libraryName`). This will then be saved to the target local directory of the library (provided in `-libraryPath`), overwriting existing files in this local directory which also deletes stale files in the process.

    ```shell
    dxclient livesync pull-wcm-design-library
    ```

-   **Help command**

    This command shows the help document on the `livesync pull-wcm-design-library` command usage:

    ```shell
    dxclient livesync pull-wcm-design-library -h
    ```

-   **Required files**

    1. A local folder where all the WCM Design Library files will be placed after downloading.
    2. Existing WCM Design Library in server.

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

    Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler):

    ```shell
    -contenthandlerPath <value>
    ```

    Use this attribute to specify the Name of the WCM Project the library is part of.

    ```shell
    -wcmProjectName <value>
    ```

    Use this attribute to specify the Name of the Context of the virtual portal of the DX Core server the library is part of.

    ```shell
    -virtualPortalContext <value>
    ```

    Use the Disable Prompt attribute to disable the confirmation prompt for overwriting local and server files. This bypasses the prompt and immediately proceeds to pushing WCM Design Library files.

    ```shell
    -disablePrompt, --disablePrompt <value>
    ```

-   **Required option for LiveSync Pull Theme**

    Use this attribute to specify the local library folder path where WCM Design Library files should be placed. This attribute accepts a folder path:

    ```shell
    -libraryPath <value>
    ```

!!! example

    ```shell
    dxclient livesync pull-wcm-design-library -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -libraryPath <themePath> -libraryName <libraryName>
    ```

Note that LiveSync commands can be triggered from within the target local libraryPath path.

See the following example where '...' represents truncated parameters.

```shell
$ pwd
/Users/path/to/library

dxclient livesync pull-wcm-design-library --libraryPath "/Users/path/to/library" --libraryName "portal site" ...
```

    Use either of these attributes to specify the WCM Design Library created in DX server:

    ```shell title="WCM Design Library Name"
    -libraryName <value>
    ```

    ```shell title="WCM Design Library ID"
    -libraryId <value>
    ```

    If neither of these options is not provided:
    1. The LiveSync will check if a saved library was previously pull using this command and use that as the basis.
    2. If no saved library is detected, a list of WCM Design Libraries displayed and you can select a WCM Design Library to pull.

    ```shell
    $ dxclient livesync pull-wcm-design-library -dxUsername <dxUsername> -dxPassword <dxPassword> -dxPort <dxPort> -dxProtocol <dxProtocol> -hostname <hostname> -contenthandlerPath <contenthandlerPath> -libraryPath <libraryPath>
    2024-08-16 19:53:06 : Checking for saved WCM Design Library in **_<libraryPath>_**
    2024-08-16 19:53:06 : Please select a WCM Design Library
    (x) [Library Name: blog solo template v70,  Display Title: Blog Solo Template v70,  ID: ddc1c6de-b18d-4cfd-af8f-dac5ccdd5d30]
    ( ) [Library Name: blog template v70,  Display Title: Blog Template v70,  ID: 5eb62c46-6f7d-498f-b71d-6bbdaac3e84a]
    ( ) [Library Name: ml configuration,  Display Title: ML Configuration,  ID: cac73711-d639-436b-a922-1a717c5e1105]
    ( ) [Library Name: portal site,  Display Title: Portal Site,  ID: TWFuYWdlZCBQYWdlcyBSb290IExpYnJhcnk]
    ```

## Limitations & Troubleshooting

### General

1. In any case, if the real-time sync during the push command gets disrupted, disconnect and reconnect again.
2. It is not recommended to use LiveSync on a production server.
3. Conflict detection and resolutions are not implemented.

### Themes

1. This command does not register or unregister themes. For that, use [Deploy Themes](./themes.md#deploy-theme) or [Undeploy Themes](./themes.md#undeploy-theme) commands.
2. While multiple developers can use LiveSync on the same server, LiveSync restricts concurrent theme editing to one developer at a time. If another user is currently working on the same theme being pushed, LiveSync will not allow that user's changes to be pushed. Concurrent usage of this command on the same theme or using it along with [Theme Editor](../../../../build_sites/themes_skins/customizing_theme/theme_editor_portlet.md), or WebDav, is not supported.
3. Sequential usage of LiveSync on a single theme with different client operating systems (i.e., Windows and Mac) is not supported.
4. Case sensitivity for naming files and folders is not supported.

### WCM Design Library

1. Currently only HTML and Folder components are the covered components of this feature.
2. Moving and Renaming of files will be equivalent to deleting the original components and creation of an entirely new components.
3. If a published component have a draft version, the feature will pull and push into the draft version.
4. The Push WCM Design Library feature will only work on WCM Design Library previously pulled by the LiveSync Pull WCM Design Library feature.
