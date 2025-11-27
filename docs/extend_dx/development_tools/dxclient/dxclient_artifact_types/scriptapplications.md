# Script Application

This topic provides information about managing Script Applications with DXClient, including deployment, undeployment, and restoration operations.

## Overview

Script Applications allow you to deploy modern web applications on HCL DX. The DXClient tool provides commands to:

- Deploy new Script Applications to your DX server
- Update existing Script Applications
- Download Script Applications from the server
- Undeploy (remove) Script Applications
- Restore previous versions of Script Applications

!!!tip "Create DX Script Application"
    While DXClient manages the deployment lifecycle of Script Applications, you can also use the [`create-dx-script-app`](../../create-and-deploy-script-app.md) tool to quickly generate modern React applications specifically designed for HCL DX. It helps you create production-ready React applications with JavaScript or TypeScript that integrate seamlessly with HCL DX and includes built-in deployment capabilities.

## Deploy Script Application

The `deploy-scriptapplication` command lets you push or pull Script Applications between your local environment and DX 9.5 CF19 or later servers. It manages the transfer of all files associated with a Script Application to or from a Web Content Manager (WCM) library.

### Prerequisites

- You must assign both Editor and Reviewer access to the Script Application Library for the user to deploy Script Applications using DXClient. For more details, refer to [Granting access to the Script Application Library](../../../script_application/script_application_security/access_to_script_app_lib_sitearea/acc_lib.md).
- For the `push` command, you will need one of the following:
    - A ZIP file containing your Script Application (use the `prebuiltZip` parameter)
    - An extracted folder containing your Script Application files (use the `contentRoot` parameter)

For more information on creating Script Applications, refer to the [Build applications with the Script Application](../../../script_application/scriptapps/common-setup/basic-scriptapp/basic_nowebpack_setup.md) topics in the HCL DX Help Center.

### Command syntax

The following syntax is the base command for deploying and managing Script Applications:

```
dxclient deploy-scriptapplication
```

**Subcommands**

| Subcommand | Description | Example |
|------------|-------------|---------|
| `pull` | Download a Script Application from the DX server | `dxclient deploy-scriptapplication pull [options]` |
| `push` | Create or update a Script Application on the DX server | `dxclient deploy-scriptapplication push [options]` |

Run the following command(s) if you need more information on the `pull` or `push` command:

```
dxclient deploy-scriptapplication pull -h
dxclient deploy-scriptapplication push -h
```

!!!important
    Remember the following requirements when using the `pull` or `push` commands:

    - If you want to identify content, you must specify at least one of the following parameters:
        - `wcmContentId` (Used for updating existing Script Applications).
        - `wcmContentPath` (Used to provide the full path to the content).
        - `wcmContentName` and `wcmSiteArea` (Used together to specify the content name and location).

    - For new applications, use either `wcmContentPath` or both `wcmContentName` and `wcmSiteArea`.

    - The `mainHtmlFile` parameter is mandatory for the `push` command.
        - The path for `prebuiltZip` should be relative to the top-level directory in the ZIP.
        - The path for `contentRoot` should be relative to that directory.

    - When adding to an active project, include `projectContext` with the appropriate content identifiers.

    - Files from the `pull` command are saved to `store/outputFiles/sp-pull-output`.

### Command options

The following sections describe the options you can use for the `pull` and `push` commands and provide sample use cases.

#### Pull options

| Option | Description | Example |
|--------|-------------|---------|
| `-dxProtocol <value>` | Protocol to connect to the DX server | `-dxProtocol https` |
| `-hostname <value>` | Hostname of the target DX server | `-hostname mydxserver.com` |
| `-dxPort <value>` | Port to connect to the DX server | `-dxPort 10039` |
| `-contenthandlerPath <value>` | Path to content handler servlet | `-contenthandlerPath /wps/mycontenthandler` |
| `-virtualPortalContext <value>` | Virtual portal context containing the Script Application | `-virtualPortalContext myportal` |
| `-projectContext <value>` | Portal project context for publication management | `-projectContext myproject` |
| `-dxUsername <value>` | Username for DX server authentication | `-dxUsername admin` |
| `-dxPassword <value>` | Password for authentication | `-dxPassword password` |
| `-wcmContentId <value>` | WCM content ID of the Script Application | `-wcmContentId 12345` |

Refer to the following sample use cases of the `deploy-scriptapplication pull` command:

- Pull by content ID:

    ```
    dxclient deploy-scriptapplication pull -wcmContentId <wcmContentId>
    ```

- Pull using configuration file settings:

    ```
    dxclient deploy-scriptapplication pull
    ```

#### Push options

| Option | Description | Example |
|--------|-------------|---------|
| `-dxProtocol <value>` | Protocol to connect to the DX server | `-dxProtocol https` |
| `-hostname <value>` | Hostname of the target DX server | `-hostname mydxserver.com` |
| `-dxPort <value>` | Port to connect to the DX server | `-dxPort 10039` |
| `-contenthandlerPath <value>` | Path to content handler servlet | `-contenthandlerPath /wps/mycontenthandler` |
| `-virtualPortalContext <value>` | Virtual portal context for the Script Application | `-virtualPortalContext myportal` |
| `-projectContext <value>` | Portal project context for publication management | `-projectContext myproject` |
| `-dxUsername <value>` | Username for DX server authentication | `-dxUsername admin` |
| `-dxPassword <value>` | Password for authentication | `-dxPassword password` |
| `-wcmContentId <value>` | WCM content ID of the Script Application | `-wcmContentId 12345` |
| `-wcmSiteArea <value>` | Site area containing the Script Application | `-wcmSiteArea "Script App Library/Apps"` |
| `-wcmContentName <value>` | Name of the Script Application content item | `-wcmContentName MyScriptApp` |
| `-wcmContentPath <value>` | Full WCM path of the Script Application | `-wcmContentPath "/Script App Library/MyApp"` |
| `-wcmContentTitle <value>` | Title of the Script Application content item | `-wcmContentTitle "My Application"` |
| `-mainHtmlFile <value>` | Main HTML file name in the Script Application | `-mainHtmlFile index.html` |
| `-prebuiltZip <value>` | Path to Script Application ZIP file | `-prebuiltZip /temp/MyApp.zip` |
| `contentRoot <value>` | Path to Script Application directory | `contentRoot /temp/MyApp` |

!!!note
    Command options passed through the command line will override values set in the `config.json` file.

Refer to the following sample use cases of the `deploy-scriptapplication push` command:

- Push from a directory:

    ```
    dxclient deploy-scriptapplication push --contentRoot /temp --wcmSiteArea "Script Application Library/Script Application/" --wcmContentName DemoScriptApplication  --mainHtmlFile index.html
    ```

- Push from a ZIP file:

    ```
    dxclient deploy-scriptapplication push -prebuiltZip /temp/DemoScriptApplication.zip -wcmSiteArea "Script Application Library/Script Application/" -wcmContentName DemoScriptApplication --mainHtmlFile  /temp/DemoScriptApplication/index.html
    ```

- Push using configuration file settings:

    ```
    dxclient deploy-scriptapplication push
    ```

!!! tip "Automated Creation & Deployment"
    For an even simpler workflow, you can use the [create-dx-script-app](../../create-and-deploy-script-app.md) tool to both create and deploy Script Applications in one streamlined process. It supports auto-deployment to DX through DXClient.

## Undeploy Script Application

The `undeploy-scriptapplication` command removes a Script Application from a target HCL DX 9.5 CF192 or later server.

### Command syntax

The following syntax is the base command for undeploying Script Applications:

```
dxclient undeploy-scriptapplication -wcmContentId <value>
```

Run the following command if you need more information on the `undeploy-scriptapplication` command:

```
dxclient undeploy-scriptapplication -h
```

### Command options

The following section describes the options you can use for the `undeploy-scriptapplication` commands and provides sample use cases.

| Option | Description | Example |
|--------|-------------|---------|
| `-dxProtocol <value>` | Protocol to connect to the DX server | `-dxProtocol https` |
| `-hostname <value>` | Hostname of the target DX server | `-hostname mydxserver.com` |
| `-dxPort <value>` | Port to connect to the DX server | `-dxPort 10039` |
| `-contenthandlerPath <value>` | Path to content handler servlet | `-contenthandlerPath /wps/mycontenthandler` |
| `-virtualPortalContext <value>` | Virtual portal context containing the Script Application | `-virtualPortalContext myportal` |
| `-projectContext <value>` | Portal project context for publication management | `-projectContext myproject` |
| `-dxUsername <value>` | Username for DX server authentication | `-dxUsername admin` |
| `-dxPassword <value>` | Password for authentication | `-dxPassword password` |
| `-wcmContentId <value>` | WCM content ID of the Script Application | `-wcmContentId 12345` |
| `-f` | Force delete the Script Application | `-f` |

!!!note
    Command options passed through the command line will override values set in the `config.json` file.

Refer to the following sample use cases of the `undeploy-scriptapplication` command:

- Standard undeployment:

    ```
    dxclient undeploy-scriptapplication -wcmContentId <wcm-content-id>
    ```

- Forced undeployment:

    ```
    dxclient undeploy-scriptapplication -wcmContentId <wcm-content-id> -f
    ```

## Restore Script Application

The `restore-scriptapplication` command restores a Script Application to a previous version from the target HCL DX 9.5 CF 19 or later server.

### Command syntax

The following syntax is the base command for restoring Script Applications:

```
dxclient restore-scriptapplication -wcmContentId <value> -versionName <version-name>
```

Run the following command if you need more information on the `restore-scriptapplication` command:

```
dxclient restore-scriptapplication -h
```

### Command options

The following section describes the options you can use for the `restore-scriptapplication` commands and provides sample use cases.

| Option | Description | Example |
|--------|-------------|---------|
| `-dxProtocol <value>` | Protocol to connect to the DX server | `-dxProtocol https` |
| `-hostname <value>` | Hostname of the target DX server | `-hostname mydxserver.com` |
| `-dxPort <value>` | Port to connect to the DX server | `-dxPort 10039` |
| `-contenthandlerPath <value>` | Path to content handler servlet | `-contenthandlerPath /wps/mycontenthandler` |
| `-virtualPortalContext <value>` | Virtual portal context containing the Script Application | `-virtualPortalContext myportal` |
| `-projectContext <value>` | Portal project context for publication management | `-projectContext myproject` |
| `-dxUsername <value>` | Username for DX server authentication | `-dxUsername admin` |
| `-dxPassword <value>` | Password for authentication | `-dxPassword password` |
| `-wcmContentId <value>` | WCM content ID of the Script Application | `-wcmContentId 12345` |
| `-versionName <value>` | Version name to restore | `-versionName "1.0"` |
| `-restoreAsPublished <value>` | Restore as draft or published version | `-restoreAsPublished true` |

!!!note
    Command options passed through the command line will override values set in the `config.json` file.

For example, to restore a Script Application, run the following command:

```
dxclient restore-scriptapplication -wcmContentID <wcm-content-id> -versionName <version-name> -restoreAsPublished <restore-as-published>
```

## Troubleshooting

Review the following common issues and solutions:

**Site Area issues**

- Before deploying Script Applications to the virtual portal, ensure that the specified `wcmSiteArea` exists. Create a new site area or use an existing one in your target environment.

- If the `virtualPortalContext` is provided but not present in DX, the Script Application will default to the base portal. Verify the virtual portal name is correct or accept deployment to the base portal.

- If the Project Context is valid/present, the application will be pushed to the specified site area with a draft status; otherwise, it will be pushed with a publish status.

**Permission issues**

- The user specified in `dxUsername` must have both Editor and Reviewer access to the Script Application Library. Check and update user permissions in the DX Portal.

**Path and file issues**

- When using `prebuiltZip`, make sure the `mainHtmlFile` path is relative to the top-level directory in the ZIP file. For `contentRoot`, the path should be relative to that directory. Verify paths are correctly formatted based on your content source.

- If you are using `wcmContentId` for updates and received a "not found" error, the content ID may be incorrect. Verify that the content ID is correct and that the content exists in the specified location.

**Debugging tips**

- Check the logs directory in your DXClient installation for detailed error messages.
- Verify connection parameters (hostname, port, and protocol).
- Ensure your authentication credentials are correct.

???+ info "Related information"
    - [DXClient](../index.md)
    - [Create DX Script App Tool](../../create-and-deploy-script-app.md)

## HCLSoftware U Learning Materials

For an introduction and a demo on how to use Script Application, go to [Script Application](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D415){target="_blank"}. To try it out yourself, refer to [Script Application Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Script_Application.pdf){target="_blank"} and corresponding [Script Application Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Script_Application_Lab_Resources.zip){target="_blank"}.

To learn more about Script Applications, go to [Script Application](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3655){target="_blank"}. You can try it out using the [Script Application Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application.pdf){target="_blank"} and corresponding [Script Application Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application_Lab_Resources.zip){target="_blank"}.
