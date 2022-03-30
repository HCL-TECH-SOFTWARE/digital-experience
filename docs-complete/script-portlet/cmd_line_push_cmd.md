# Creating and updating Script Applications with command line push support 

Authors can locate your Script Applications and add them to your portal pages by using the content toolbar when they are stored in a Web Content Manager Site Library. You can push files that are associated with script-based applications from your local file system to a Script Application instance in a Web Content Manager Site Library by running the sp push command.

**Note:** If you add the Script Application to pages for which you selected the Lightweight profile, you cannot start the portal dialog to use the Edit and Import features. Script Application instances that you created and edited on pages with profiles other than the Lightweight profile or elsewhere can be added to Lightweight profile pages from the Script Applications for runtime use.

You can edit and test your application locally with your favorite editor and browser and then push it to a site area within a Web Content Manager library on the portal. Applications in site areas that are enabled for the Script Application are then available for creating portal pages in the **Page Components** tab of the toolbar. The CF Script Application installation includes the site areas that are named Script Application Library and Script Applications Site Area. Users can push applications to these site areas by using this command line utility. You can enable more site areas for use with the Script Application. For more information about how to do so, read *Creating and enabling a custom site area*.

1.  Open a command line and find your application root folder. Enter the following command:

    ```
    sp push -wcmContentName your\_application\_name
    ```

    By default, the sp push command uses the default settings from the sp-config.json file where you installed the Script Application command line application. This command creates the Web Content Manager content item for your application. It gives it the name that you specified by the `-wcmContentName` argument in the Web Content Manager site area that is identified by the `wcmSiteArea` setting in that file. The default site area in the sp-config.json is `Script Portlet Library/Script Portlet Applications`. The pushed applications are stored in the Script Applications site area in the Script Application Library in Web Content Manager.

2.  If you are running the sp push command from any other folder than the application folder, you must use the -contentRoot argument to specify your application folder.

    For example, use the following code:

    ```
    sp push -contentRoot c:\samples\scripts\hello
    ```


Use one of the following general command line options with the Script Application command line tool.

|Commands|Description|
|--------|-----------|
|`list projects`|Lists the Web Content Manager projects that are present in the portal.|
|`list vportals`|Lists the virtual portals that are hosted by the portal.|
|`push`|Create or update the content of a Script Application instance.|

Additionally, you can define the following optional modifiers when you use the command line application. Use them to specify configuration values that you may need for your environment. You can specify these options either on the command line or in a sp-config.json file. The sp-config.json configuration file defines baseline options that are used across all instances of the Script Application. This way, you do not need to define such common options on the command line each time you use the application. When you specify an option in the sp-config.json configuration file, omit the leading dash of the option name. The Script Application uses the following sequence of preference when it processes these options:

1.  An option that you specify on the command line. An option that you specify on the command line overrides options that are set in the sp-config.json files.
2.  An option that is defined in the sp-config.json configuration file that is specified by using the `-contentRoot` option as described earlier in step [2](cmd_line_push_cmd.md#spec_cntnt_root).
3.  An option that is defined in the sp-config.json configuration file that is located in the same path where the file sp.sh or sp.bat is located.

|Option|Associated property|Description|
|------|-------------------|-----------|
|`-scriptPortletServer value`|`scriptPortletServer`|The URL of the portal server that hosts a Script Application environment. Push requests are sent to this server. The value is formatted `http://host:port` or `https://host:port`.|
|`-laxSSL true\|false`|`laxSSL`|Specifies whether to disable certificate validation when using HTTPS. The default value is `false`. Set this option to `true` only for trusted local test servers.|
|`-connectTimeout value`|`connectTimeout`|Defines the maximum amount of time, in milliseconds, to wait for the command line to connect to the portal server. The default value is `15000`, or 15 seconds. An error is generated if the portal does not accept the connection within the defined amount of time.|
|`-socketTimeout value`|`socketTimeout`|Defines the maximum amount of time, in milliseconds, to wait for the portal to respond to a command after a successful connection. The default value is `15000`, or 15 seconds. An error is generated if the portal does not respond to the command within the defined amount of time.|
|`-contenthandlerPath alt\_content\_handler\_path`|`contenthandlerPath`|Use this option to define an alternate path for the portal context root or the content handler servlet. If you do not use this option, it defaults to /wps/mycontenthandler, which is correct for a default portal installation. If you modified either the context root or the content handler servlet paths, users of the Script Application command line tool need to provide an alternate value for the `contenthandlerPath` parameter to ensure the connection to the portal server from the client tool.|

|Option|Associated property|Description|
|------|-------------------|-----------|
|`-portalUser value`|`portalUser`|TheHCL Portal user ID you use to log in to complete the push request.|
|`-portalPassword`|`portalPassword`|Password of the HCL Portal user who completes the push request.**Note:** If the portal requires authentication, do not define the password in any .json configuration file because the password is stored in plain text, which is a potential security vulnerability. Instead, allow the command line to query for the password or use the `-portalPassword` command line option. Allowing the tool to query for the password is preferred because the password is not echoed on the command line and does not appear in the command history.

|
|`-performAuth true\|false`|`performAuth`|Defines whether the portal requires authentication before it completes a command. The default value is `true`. It requires that a user name and password are provided before the server completes a command.|

|Option|Associated property|Description|
|------|-------------------|-----------|
|`-contentRoot value`|`contentRoot`|Absolute or relative path to a directory on the workstation that contains the content to be pushed to the portal. If the path is relative, then it is relative to the current working directory. When you use the `-prebuiltZIP` option, the `-contentRoot` option specifies the directory that contains the optional .json configuration file of the portlet. This directory is also where the log file of completed actions of the push command is written. The default value is the current working directory.|
|`-prebuiltZIP value`|`prebuiltZIP`|Path to an existing compressed file that provides the content to be pushed to the portal instead of the content in the current working directory. The `-contentRoot` property can be used to locate the application-specific sp-config.json configuration file if not in the current working directory.|
|`-mainHtmlFile` value|`mainHtmlFile`|Path to the main .html file of the Script Application. The main .html file is the first file that is rendered by the portlet. If `-contentRoot` is specified, then the .html file path must be relative to the value of `-contentRoot`. When `-prebuiltZIP` is specified, the .html file path must be relative to the top-level directory in the compressed file that the push command requires. If you do not specify this path, the tool tries to locate a file that is named either index.html or index.htm at the path that is specified by `-contentRoot` or in the top-level directory of the compressed file. If one of these files is found, it is used as the value of the main .html file. Otherwise, the tool prompts for the value.|

|Option|Associated property|Description|
|------|-------------------|-----------|
|`-wcmContentName value`|`wcmContentName`|Name of the Script Application instance to be created or updated in the Web Content Manager site area that is specified by the `wcmSiteArea` property or command line option. There is no default value. Specify this name by property or command line option unless you are updating an existing Script Application instance on a page through`wcmContentID` or specifying the full path to a content instance through `wcmContentPath`.|
|`-wcmContentID value`|`wcmContentID`|Web Content Manager content ID of an existing Script Application instance on a portal page. Set this value in place of `wcmContentName` only if you are updating an existing Script Application instance on a portal page. And set it only after you click **Export Config** for that application from the Script Application edit mode. Do not use this option when you create or update a Script Application in a shared Web Content Manager Library site area.|
|`-wcmContentPath value`|`wcmContentPath`|Full Web Content Manager path, including library and site area, to your application. You cannot use this argument with `wcmSiteArea`and `wcmContentName` or if either is used by default by sp-config.json.|
|`-wcmContentTitle value`|`wcmContentTitle`|Sets or updates the title of the Script Application instance. The default is the application name that is specified with the `wcmContentName` option if you do not specify it here.|
|`-wcmSiteArea value`|`wcmSiteArea`|The Web Content Manager site area in which Script Application instances are created.|
|`-projectContext value`|`projectContext`|The context of the portal project that manages the publication of changes to the Script Application content.|
|`-virtualPortalContext value`|`virtualPortalContext`|The context of the virtual portal that contains the Script Application instance that you want to create or update.|

**Parent topic:**[Script Application command line application overview ](../script-portlet/cmd_line_push_ovr.md)

