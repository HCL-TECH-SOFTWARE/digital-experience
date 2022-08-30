# Deploy Multiple Script Applications that Use Shared Components From Themes

### What You Will Learn In This Tutorial
- Creation of a Gradle project to simplify working with shared libraries in HCL Digital Experience (DX).
- Update bundling of new or existing NPM based projects to exclude dependencies and use the libraries in a DX Module.
- Add component logic in DX Module to be referenced and used by any of the dependent Script Applications.
- Add 3rd-party components in DX Module that can be shared by the Script Applications.

### Where To Get The Sample Code
!!!tip "Sample codes are available in [GitHub: Deploy Multiple Script Applications that Use Shared Components From Themes](https://github.com/HCL-TECH-SOFTWARE/DX-Modules-and-ScriptApps/06ThemeComponentInApp)."

## Pre-Requisites
!!!tip "Pre-Requisites"
    See the detailed information [here](../pre_requisites.md).

## How to Bundle Dependencies as DX Modules
!!!tip "Bundle Dependencies as DX Modules"
    Follow the detailed steps [here](../common-setup/optimized-scriptapps/dependencies_as_module.md).

    Quick Notes:

    - Set a unique rootProject.name (i.e: ReactNSmartComponentsV4) in `DxModule/settings.gradle`.
    - The Webpack profile/config file (i.e: webpack.dxmodules.js) that will be used to build the submodule is defined in the build-dxsubmodule script in its own `package.json`.
    - If a group of dependencies has conflicts with another group (i.e: React v16 vs v18), you'll need to create separate sub-modules for them.
    - Take note of all the output locations and filenames of the DLL manifest, for each of the submodules defined, in the DLLPlugin portion of their `DxModule/<SubModule>/webpack.<dxmodules>.js` files. 

## Important Things to Note
!!!note "Important Things To Note"
    Check the information [here](../common-setup/post-deployment/important_things_to_note.md).

## How To Build and Deploy DX Modules
!!!tip "Build and Deploy DX Modules"
    Follow the steps [here](../common-setup/build-and-deploy/build_and_deploy_dx_modules.md).

## Optional: How to Manually Upload the DXModule EAR File
!!!tip "Manual EAR File Upload"
    Follow the steps [here](../common-setup/build-and-deploy/manual_ear_upload.md).

## How To Verify A Successful Deployment and Link a DX Module to a DX Theme
!!!tip "Verify A Successful Deployment and Link a DX Module to a DX Theme"
    Follow the steps [here](../common-setup/post-deployment/verify_link_module_to_theme.md).

## How To Bundle and Deploy a Script Application Without Its Dependencies
!!!tip "Script Applications Sharing Dependencies"
    For each of your script applications, follow the detailed steps [here](../common-setup/optimized-scriptapps/sharing_dependencies.md).

    Quick Notes:

    - Set a unique wcmContentName (i.e: EducSampleScriptApp) setting in `package.json`.
    - Make sure the contentRoot setting in `package.json` matches the build or distribution folder.

## How To Build and Deploy Script Applications
!!!tip "Build and Deploy Script Applications"
    Follow the steps [here](../common-setup/build-and-deploy/build_and_deploy_scriptapps.md).

## Optional: How to Build and Deploy the DXModule and All Script Applications
!!!tip "Build and Deploy the DX Module and All ScriptApps"
    Follow the steps [here](../common-setup/build-and-deploy/build_and_deploy_all.md).
