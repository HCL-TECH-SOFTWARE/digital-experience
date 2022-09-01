---
tags:
    - React
    - Script Application
    - Deploy
    - WebPack
hide: tags
---

# Deploy A Script Application Without Its Dependencies

## Overview

### What You Will Learn In This Tutorial
- Update bundling of new or existing NPM based projects to exclude dependencies and use the libraries in a DX Module.

### Where To Get The Sample Code
!!!tip "Sample codes are available in [GitHub: Deploy DX ScriptApps Without Its Dependencies](https://github.com/HCL-TECH-SOFTWARE/DX-Modules-and-ScriptApps/tree/main/03AppsExcludingDependencies)."


## Pre-Requisites
!!!tip "Pre-Requisites"
    See the detailed information [here](../pre_requisites.md).

!!!note     
    The full deployment of the sample DX Module described in the guide [Deploy JavaScript Libraries/Dependencies as a DX Module](02_dependencies_as_module.md) must be first completed. The generated DLL Manifest(i.e: dx-dll-manifest.json) in the DX Module folder is going to be referenced in this guide's instructions.

## Bundle and Deploy a Script Application Without Its Dependencies
!!!tip "Script Applications Sharing Dependencies"
    Follow the detailed steps [here](../common-setup/optimized-scriptapps/sharing_dependencies.md).

    Quick Notes:

    - Set a unique wcmContentName (i.e: EducSampleScriptApp) setting in `package.json`.
    - Make sure the contentRoot setting in `package.json` matches the build or distribution folder.

## How to Build and Deploy Script Applications
!!!tip "Build and Deploy Script Applications"
    Follow the steps [here](../common-setup/build-and-deploy/build_and_deploy_scriptapps.md).

