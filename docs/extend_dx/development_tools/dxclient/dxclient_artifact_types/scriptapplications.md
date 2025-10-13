# Script Application

This topic provides information about managing Script Applications with DXClient, including deployment, undeployment, and restoration operations.

## Overview

Script Applications allow you to deploy modern web applications on HCL DX. The DXClient tool provides commands to:

- Deploy new Script Applications to your DX server
- Update existing Script Applications
- Download Script Applications from the server
- Undeploy (remove) Script Applications
- Restore previous versions of Script Applications

While DXClient manages the deployment lifecycle of Script Applications, you can also use the [Create DX Script App Tool](../../create_script_apps/create-and-deploy-script-app.md) to quickly scaffold modern React applications specifically designed for HCL DX.

## Deploy Script Application

The `deploy-scriptapplication` command lets you push or pull Script Applications between your local environment and DX 9.5 CF19 or later servers. It handles transferring all files that make up a Script Application to or from a Web Content Manager library on the server.

**Before You Begin**

!!! note
    You must assign both Editor and Reviewer access to the Script Application Library for the user to deploy Script Applications using DXClient. For more details, refer to [Granting access to the Script Application Library](../../../script_application/script_application_security/access_to_script_app_lib_sitearea/acc_lib.md).

**Required Files**:

For the `push` command, you'll need one of the following:
- A **ZIP file** containing your Script Application (use the `prebuiltZip` parameter)
- An **extracted folder** containing your Script Application files (use the `contentRoot` parameter)

!!! tip "Quick Start with create-dx-script-app"
    To quickly scaffold a modern Script Application, use the [create-dx-script-app](../../create_script_apps/create-and-deploy-script-app.md) tool. This tool helps you create production-ready React applications with JavaScript or TypeScript that integrate seamlessly with HCL DX and includes built-in deployment capabilities.

For more information on creating Script Applications, refer to the [Build applications with the Script Application](../../../script_application/scriptapps/common-setup/basic-scriptapp/basic_nowebpack_setup.md) topics in the HCL DX Help Center.

**Command Structure**

The base command for Script Application management:

```
dxclient deploy-scriptapplication
```

**Subcommands**

| Subcommand | Description | Example |
|------------|-------------|---------|
| `push` | Create or update a Script Application on the DX server | `dxclient deploy-scriptapplication push [options]` |
| `pull` | Download a Script Application from the DX server | `dxclient deploy-scriptapplication pull [options]` |

**Getting Help**

For detailed help on any command:

```
dxclient deploy-scriptapplication pull -h
dxclient deploy-scriptapplication push -h
```

!!! important "Key Requirements"
    - **Identifying Content:** You must specify at least one of:
      - `wcmContentId` (for updating existing Script Applications)
      - `wcmContentPath` (full path to the content)
      - Both `wcmContentName` AND `wcmSiteArea` (name and location)
    
    - **For New Applications:** Use either `wcmContentPath` OR both `wcmContentName` and `wcmSiteArea`
    
    - **Main HTML File:** The `mainHtmlFile` parameter is mandatory for the `push` command
      - For `prebuiltZip`: Path should be relative to the top-level directory in the ZIP
      - For `contentRoot`: Path should be relative to that directory
    
    - **Project Integration:** When adding to an active project, include `projectContext` with the appropriate content identifiers
    
    - **Pull Output:** Files from the `pull` command are saved to `store/outputFiles/sp-pull-output`

### Options for the `pull` subcommand

| Option | Description | Example |
|--------|-------------|---------|
| `-dxProtocol <value>` | Protocol to connect to the DX server | `-dxProtocol https` |
| `-hostname <value>` | Hostname of the target DX server | `-hostname mydxserver.com` |
| `-dxPort <value>` | Port to connect to the DX server | `-dxPort 10039` |
| `-contenthandlerPath <value>` | Path to content handler servlet | `-contenthandlerPath /wps/mycontenthandler` |
| `-virtualPortalContext <value>` | Virtual portal context containing the Script App | `-virtualPortalContext myportal` |
| `-projectContext <value>` | Portal project context for publication management | `-projectContext myproject` |
| `-dxUsername <value>` | Username for DX server authentication | `-dxUsername admin` |
| `-dxPassword <value>` | Password for authentication | `-dxPassword password` |
| `-wcmContentId <value>` | WCM content ID of the Script App | `-wcmContentId 12345` |

### Options for the `push` subcommand

| Option | Description | Example |
|--------|-------------|---------|
| `-dxProtocol <value>` | Protocol to connect to the DX server | `-dxProtocol https` |
| `-hostname <value>` | Hostname of the target DX server | `-hostname mydxserver.com` |
| `-dxPort <value>` | Port to connect to the DX server | `-dxPort 10039` |
| `-contenthandlerPath <value>` | Path to content handler servlet | `-contenthandlerPath /wps/mycontenthandler` |
| `-virtualPortalContext <value>` | Virtual portal context for the Script App | `-virtualPortalContext myportal` |
| `-projectContext <value>` | Portal project context for publication management | `-projectContext myproject` |
| `-dxUsername <value>` | Username for DX server authentication | `-dxUsername admin` |
| `-dxPassword <value>` | Password for authentication | `-dxPassword password` |
| `-wcmContentId <value>` | WCM content ID of the Script App | `-wcmContentId 12345` |
| `-wcmSiteArea <value>` | Site area containing the Script App | `-wcmSiteArea "Script App Library/Apps"` |
| `-wcmContentName <value>` | Name of the Script App content item | `-wcmContentName MyScriptApp` |
| `-wcmContentPath <value>` | Full WCM path of the Script App | `-wcmContentPath "/Script App Library/MyApp"` |
| `-wcmContentTitle <value>` | Title of the Script App content item | `-wcmContentTitle "My Application"` |
| `-mainHtmlFile <value>` | Main HTML file name in the Script App | `-mainHtmlFile index.html` |
| `-prebuiltZip <value>` | Path to Script App ZIP file | `-prebuiltZip /temp/MyApp.zip` |
| `contentRoot <value>` | Path to Script App directory | `contentRoot /temp/MyApp` |

> **Note:** Command options passed through the command line will override values set in the config.json file.

### Command Examples

#### Pull Examples

**Pull using content ID:**
```
dxclient deploy-scriptapplication pull -wcmContentId <wcmContentId>
```

**Pull using config file settings:**
```
dxclient deploy-scriptapplication pull
```

#### Push Examples

**Push from a directory:**
```
dxclient deploy-scriptapplication push --contentRoot /temp --wcmSiteArea "Script Application Library/Script Application/" --wcmContentName DemoScriptApplication  --mainHtmlFile index.html
```

**Push from a ZIP file:**
```
dxclient deploy-scriptapplication push -prebuiltZip /temp/DemoScriptApplication.zip -wcmSiteArea "Script Application Library/Script Application/" -wcmContentName DemoScriptApplication --mainHtmlFile  /temp/DemoScriptApplication/index.html
```

**Push using config file settings:**

!!! tip "Automated Creation & Deployment"
    For an even simpler workflow, you can use the [create-dx-script-app](../../create_script_apps/create-and-deploy-script-app.md) tool to both create and deploy Script Applications in one streamlined process. It supports auto-deployment to DX via DXClient.
```
dxclient deploy-scriptapplication push
```

## Undeploy Script Application

The `undeploy-scriptapplication` command removes a Script Application from a target HCL DX 9.5 CF192 or later server.

### Command Syntax

```
dxclient undeploy-scriptapplication -wcmContentId <value>
```

### Getting Help

```
dxclient undeploy-scriptapplication -h
```

### Command Options

| Option | Description | Example |
|--------|-------------|---------|
| `-dxProtocol <value>` | Protocol to connect to the DX server | `-dxProtocol https` |
| `-hostname <value>` | Hostname of the target DX server | `-hostname mydxserver.com` |
| `-dxPort <value>` | Port to connect to the DX server | `-dxPort 10039` |
| `-contenthandlerPath <value>` | Path to content handler servlet | `-contenthandlerPath /wps/mycontenthandler` |
| `-virtualPortalContext <value>` | Virtual portal context containing the Script App | `-virtualPortalContext myportal` |
| `-projectContext <value>` | Portal project context for publication management | `-projectContext myproject` |
| `-dxUsername <value>` | Username for DX server authentication | `-dxUsername admin` |
| `-dxPassword <value>` | Password for authentication | `-dxPassword password` |
| `-wcmContentId <value>` | WCM content ID of the Script App | `-wcmContentId 12345` |
| `-f` | Force delete the Script Application | `-f` |

> **Note:** Command options passed through the command line will override values set in the config.json file.

### Examples

**Standard undeployment:**
```
dxclient undeploy-scriptapplication -wcmContentId <wcm-content-id>
```

**Forced undeployment:**
```
dxclient undeploy-scriptapplication -wcmContentId <wcm-content-id> -f
```

## Restore Script Application

The `restore-scriptapplication` command restores a Script Application to a previous version from the target HCL DX 9.5 CF 19 or later server.

### Command Syntax

```
dxclient restore-scriptapplication -wcmContentId <value> -versionName <version-name>
```

### Getting Help

```
dxclient restore-scriptapplication -h
```

### Command Options

| Option | Description | Example |
|--------|-------------|---------|
| `-dxProtocol <value>` | Protocol to connect to the DX server | `-dxProtocol https` |
| `-hostname <value>` | Hostname of the target DX server | `-hostname mydxserver.com` |
| `-dxPort <value>` | Port to connect to the DX server | `-dxPort 10039` |
| `-contenthandlerPath <value>` | Path to content handler servlet | `-contenthandlerPath /wps/mycontenthandler` |
| `-virtualPortalContext <value>` | Virtual portal context containing the Script App | `-virtualPortalContext myportal` |
| `-projectContext <value>` | Portal project context for publication management | `-projectContext myproject` |
| `-dxUsername <value>` | Username for DX server authentication | `-dxUsername admin` |
| `-dxPassword <value>` | Password for authentication | `-dxPassword password` |
| `-wcmContentId <value>` | WCM content ID of the Script App | `-wcmContentId 12345` |
| `-versionName <value>` | Version name to restore | `-versionName "1.0"` |
| `-restoreAsPublished <value>` | Restore as draft or published version | `-restoreAsPublished true` |

> **Note:** Command options passed through the command line will override values set in the config.json file.

### Example

```
dxclient restore-scriptapplication -wcmContentID <wcm-content-id> -versionName <version-name> -restoreAsPublished <restore-as-published>
```

## Troubleshooting

If you encounter issues when working with Script Applications in DXClient, check these common problems and solutions:

### Site Area Issues

- **Ensure wcmSiteArea exists**
  
  Before deploying Script Applications to the virtual portal, ensure that the specified `wcmSiteArea` exists.
  
  **Solution:** Create a new site area or use an existing one in your target environment.

- **Handling virtualPortalContext**
  
  If the `virtualPortalContext` is provided but not present in DX, the Script Application will default to the base portal.
  
  **Solution:** Verify the virtual portal name is correct or accept deployment to the base portal.

### Permission Problems

- **User Access Rights**
  
  The user specified in `dxUsername` must have both Editor and Reviewer access to the Script Application Library.
  
  **Solution:** Check and update user permissions in the DX Portal.

### Path and File Issues

- **File Path Formatting**
  
  When using `prebuiltZip`, make sure the `mainHtmlFile` path is relative to the top-level directory in the ZIP file.
  For `contentRoot`, the path should be relative to that directory.
  
  **Solution:** Verify paths are correctly formatted based on your content source.

- **Content ID Not Found**
  
  If using `wcmContentId` for updates and receiving a "not found" error, the content ID may be incorrect.
  
  **Solution:** Verify that the content ID is correct and that the content exists in the specified location.

### Debugging Tips

- Check the logs directory in your DXClient installation for detailed error messages
- Verify connection parameters (hostname, port, protocol)
- Ensure your authentication credentials are correct

???+ info "Related information"
    - [DXClient](../index.md)
    - [Create DX Script App Tool](../../create_script_apps/create-and-deploy-script-app.md) - Tool for scaffolding modern React applications for HCL DX

## HCLSoftware U Learning Materials

For an introduction and a demo on how to use Script Application, go to [Script Application](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D415){target="_blank"}. 

**Beginner Resources:**
- [Script Application Lab (Basic)](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Script_Application.pdf){target="_blank"} 
- [Script Application Lab Resources (Basic)](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Script_Application_Lab_Resources.zip){target="_blank"}

**Advanced Resources:**
- [Script Application (Advanced)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3655){target="_blank"} 
- [Script Application Lab (Advanced)](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application.pdf){target="_blank"} 
- [Script Application Lab Resources (Advanced)](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application_Lab_Resources.zip){target="_blank"}