---
tags:
    - React
    - Script Application
    - WebPack
hide: tags
---

# Deploy a ReactJS App as a Script Application

## Overview

### What You Will Learn In This Tutorial
   - Enrichment of new or existing NPM based projects to easily upload built application to HCL Digital Experience (DX).
   - Optional migration of the NPM project to use [Webpack](https://webpack.js.org/) bundler.

### Where To Get The Sample Code
!!!tip "Sample codes are available in [GitHub: Deploy a React App to DX as a ScriptApp](https://github.com/HCL-TECH-SOFTWARE/DX-Modules-and-ScriptApps/01WebpackWithDependencies)." 

!!! note
    For optimal loading of multiple Script Applications in a single page, custom Webpack bundling is needed. For more information, see [Deploy Multiple Script Applications with Shared Dependencies](04_apps_sharing_dependencies.md).

## Pre-Requisites
!!!tip "Pre-Requisites"
    See the detailed information [here](../pre_requisites.md).


## How To Bundle and Deploy Applications to DX
!!!tip "Quick Build and Deploy"
    Follow the detailed steps [here](../common-setup/basic-scriptapp/basic_nowebpack_setup.md).
    
    Quick Notes:

    - Set a unique wcmContentName (i.e: EducSampleScriptApp) setting in `package.json`.
    - Make sure the contentRoot setting in `package.json` matches the build or distribution folder.


## Optional: How To Migrate Apps to use Webpack and Deploy as Script Application
!!!tip "Build and Deploy using WebPack"
    Follow the detailed steps [here](../common-setup/basic-scriptapp/basic_webpack_setup.md).

