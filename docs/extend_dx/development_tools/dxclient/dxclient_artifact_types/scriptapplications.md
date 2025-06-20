# Script Applications

This topic provides information about the deployment, undeployment, and restoration of Script Applications.

## Deploy Script Applications

The `deploy-scriptapplication` command is used with the DXClient tool to push or pull Script Applications between a local development workstation or automation server and DX 9.5 CF19 or later servers. The command will push or pull the files that make up a Script Application to or from a Script Application instance stored in a Web Content Manager library on the server.

!!! note
    You must assign both Editor and Reviewer access to the Script Application Library for the user to deploy Script Applications using DXClient. For more details, refer to [Granting access to the Script Application Library](../../../script_application/script_application_security/access_to_script_app_lib_sitearea/acc_lib.md). 

**Required Files**:

The Script Application push command in the DXClient tool requires a Script Application zip file or an extracted folder of the same (identified by the `prebuiltZip` or `contentRoot` attributes respectively). For more information on Script Applications, refer to the [Build applications with the Script Application](../../../../guide_me/tutorials/scriptapps/common-setup/basic-scriptapp/basic_nowebpack_setup.md) topics in the HCL DX Help Center.

**Command**

This command invokes the `deploy-scriptapplication` command inside the DXClient tool to either push or pull a Script Application:

```
dxclient deploy-scriptapplication
```

**Subcommands**

Use this command to create or update the content of a Script Application on the HCL DX server:

```
push [options]
```

Use this command to download the content of a Script Application from the HCL DX server:

```
pull [options]
```

**Help command**

This command shows the help document on the `deploy-scriptapplication` command:

```
dxclient deploy-scriptapplication pull -h

dxclient deploy-scriptapplication push -h
```

!!! notes
    1. At least one of (a) `wcmContentId`, (b) `wcmContentPath` or (c) both `wcmContentName` and `wcmSiteArea` must be specified. If multiple options are provided, then the priority order goes as follows: (a), then (b), and then (c).
    2. Use `wcmContentId` only if you are updating an existing Script Application instance. For new Script Applications, specify either (a) `wcmContentPath` or (b) both `wcmContentName` and `wcmSiteArea`.
    3. `mainHtmlFile` is mandatory.
    4. The outputfile for pull is generated inside store/outputFiles/sp-pull-output.
    5. When `prebuiltZip` is specified, the main HTML file path must be relative to the top-level directory in the compressed file.
    6. Use `wcmContentId` to add or update an existing Script Application into an active project. If you are adding a new Script Application to the project, use either (a) `wcmContentPath` or (b) both `wcmContentName` and `wcmSiteArea` along with `projectContext`.

**Options for the `pull` subcommand**

Use this attribute to specify the protocol with which to connect to the DX server:

```
-dxProtocol <value>
```

Use this attribute to specify the hostname of the target DX server:

```
-hostname <value>
```

Use this attribute to specify the port on which to connect to the DX server:

```
-dxPort <value>
```

Use this attribute to specify the path to the content handler servlet on DX server (example: `/wps/mycontenthandler`):

```
-contenthandlerPath <value>
```

Use this attribute to specify the context of the virtual portal that contains the Script Application instance that you want to retrieve, if any:

```
-virtualPortalContext <value>
```

Use this attribute to specify the context of the portal project that manages the publication of changes to the Script Application instance, if any:

```
-projectContext <value>
```

Use this attribute to specify the username to authenticate with the DX server:

```
-dxUsername <value>
```

Use this attribute to specify the password for the user in the `dxUsername` attribute:

```
-dxPassword <value>
```

Use this attribute to specify the WCM content ID of the Script Application content item:

```
-wcmContentId <value>
```

**Options for the `push` subcommand**

Use this attribute to specify the protocol with which to connect to the DX server:

```
-dxProtocol <value>
```

Use this attribute to specify the hostname of the target DX server:

```
-hostname <value>
```

Use this attribute to specify the port on which to connect to the DX server:

```
-dxPort <value>
```

Use this attribute to specify the path to the content handler servlet on the DX server (e.g. /wps/mycontenthandler):

```
-contenthandlerPath <value>
```

Use this attribute to specify the context of the virtual portal that should receive the Script Application instance being pushed, if any:

```
-virtualPortalContext <value>
```

Use this attribute to specify the context of the portal project that manages the publication of changes to the Script Application instance, if any:

```
-projectContext <value>
```

Use this attribute to specify the username to authenticate with the DX server:

```
-dxUsername <value>
```

Use this attribute to specify the password for the user in the `dxUsername` attribute:

```
-dxPassword <value>
```

Use this attribute to specify the WCM ID of the Script Application content item:

```
-wcmContentId <value>
```

Use this attribute to specify the `SiteArea` containing the Script Application content item:

```
-wcmSiteArea <value>
```

Use this attribute to specify the name of the Script Application content item to be created or updated:

```
-wcmContentName <value>
```

Use this attribute to specify the full WCM path of the Script Application content item to be created or updated:

```
-wcmContentPath <value>
```

Use this attribute to set or update the title of the Script Application content item:

```
-wcmContentTitle <value>
```

Use this attribute to specify the main HTML file name that is present within the Script Application:

```
-mainHtmlFile <value>
```

Use this attribute to specify the absolute or relative path to the Script Application's content as a ZIP file:

```
-prebuiltZip <value>
```

Use this attribute to specify the absolute or relative path to the Script Application's content in a directory:

```
contentRoot <value>
```

Command options passed through the command line will override values set in the config.json file.

**Example:**

For Script Application Pull:

```
dxclient deploy-scriptapplication pull -wcmContentId <wcmContentId>
```

If all required options are configured in config.json of the DX Client tool, then execute:

```
dxclient deploy-scriptapplication pull
```

For Script Application Push, if the Script Application is extracted to a folder named temp at the root of the DXClient machine:

```
dxclient deploy-scriptapplication push -contentRoot /temp -wcmSiteArea "Script Application Library/Script Applications/" -wcmContentName DemoScriptApplication
```

If the Script Application is available as a .zip file in a folder named temp on the DXClient tool location, execute:

```
dxclient deploy-scriptapplication push -prebuiltZip /temp/DemoScriptApplication.zip -wcmSiteArea "Script Application Library/Script Applications/" -wcmContentName DemoScriptApplication
```

If all required options are configured in the config.json at the /dist/src/configuration path of the DXClient tool, then execute:

```
dxclient deploy-scriptapplication push
```

## Undeploy Script Applications

The `undeploy-scriptapplication` command is used to remove a Script Application from a target HCL DX 9.5 CF192 or later servers.

**Required file**

This command invokes the `undeploy-scriptapplication` tool inside the DXClient. The `undeploy-scriptapplication` dxtool uses the provided files and execute the `undeploy scriptapplication` task.

**Command**

```
dxclient undeploy-scriptapplication -wcmContentId <value>
```

**Help command**

This command shows the help information for `undeploy-scriptapplication` command usage:

```
dxclient undeploy-scriptapplication -h
```

**Command options**

Use this attribute to specify the protocol with which to connect to the DX server:

```
-dxProtocol <value>
```

Use this attribute to specify the hostname of the target DX server:

```
-hostname <value>
```

Use this attribute to specify the port on which to connect to the DX server:

```
-dxPort <value>
```

Use this attribute to specify the path to the content handler servlet on DX server (example, `/wps/mycontenthandler`):

```
-contenthandlerPath <value>
```

Use this attribute to specify the context of the virtual portal that contains the Script Application instance that you want to retrieve, if any:

```
-virtualPortalContext <value>
```

Use this attribute to specify the context of the portal project that manages the publication of changes to the Script Application instance, if any:

```
-projectContext <value>
```

Use this attribute to specify the username to authenticate with the DX server:

```
-dxUsername <value>
```

Use this attribute to specify the password for the user in the `dxUsername` attribute:

```
-dxPassword <value>
```

Use this attribute to specify the WCM content ID of the Script Application content item:

```
-wcmContentId <value>
```

Use this tag to forcefully delete the Script Application:

```
-f
```

Command options passed through the command line will override values set in the config.json file.

Log files from command execution can be found in the logs directory of the DXClient installation.

**Example:**

```
dxclient undeploy-scriptapplication -wcmContentId <wcm-content-id>
dxclient undeploy-scriptapplication -wcmContentId <wcm-content-id> -f
```

## Restore Script Application

The `restore-scriptapplication` command is used to restore a Script Application into one of its previous versions present in the target HCL DX 9.5 CF 19 or later servers.

**Required file**

This command invokes the restore-scriptapplication tool inside the DXClient. The restore-scriptapplication dxtool uses the provided files and execute the restore scriptapplication task.

**Command**

```
dxclient restore-scriptapplication -wcmContentId <value> -versionName <version-name>
```

**Help command**

This command shows the help information for `restore-scriptapplication` command usage:

```
dxclient restore-scriptapplication -h
```

**Command options**

Use this attribute to specify the protocol with which to connect to the DX server:

```
-dxProtocol <value>
```

Use this attribute to specify the hostname of the target DX server:

```
-hostname <value>
```

Use this attribute to specify the port on which to connect to the DX server:

```
-dxPort <value>
```

Use this attribute to specify the path to the content handler servlet on DX server (example, `/wps/mycontenthandler`):

```
-contenthandlerPath <value>
```

Use this attribute to specify the context of the virtual portal that contains the Script Application instance that you want to retrieve, if any:

```
-virtualPortalContext <value>
```

Use this attribute to specify the context of the portal project that manages the publication of changes to the Script Application instance, if any:

```
-projectContext <value>
```

Use this attribute to specify the username to authenticate with the DX server:

```
-dxUsername <value>
```

Use this attribute to specify the password for the user in the `dxUsername` attribute:

```
-dxPassword <value>
```

Use this attribute to specify the WCM content ID of the Script Application content item:

```
-wcmContentId <value>
```

Use this attribute to specify the versionName for the Script Application:

```
-versionName <value>
```

Use this attribute to specify the restore as a draft or replace the published version of Script Application:

```
-restoreAsPublished <value>
```

Command options passed through the command line will override values set in the config.json file.

Log files from command execution can be found in the logs directory of the DXClient installation.

**Example:**

```
dxclient restore-scriptapplication -wcmContentID <wcm-content-id> -versionName <version-name> -restoreAsPublished <restore-as-published>
```

???+ info "Related information"
    - [DXClient](../index.md)

## HCLSoftware U learning materials

For an introduction and a demo on how to use Script Application, go to [Script Application](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D415){target="_blank"}. To try it out yourself, refer to [Script Application Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Script_Application.pdf){target="_blank"} and corresponding [Script Application Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Script_Application_Lab_Resources.zip).
