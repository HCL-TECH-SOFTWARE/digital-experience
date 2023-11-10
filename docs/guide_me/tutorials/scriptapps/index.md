# Script Applications

This section contains instructions to deploy Script Applications. 

The tutorials cover DX pages with single and multiple applications, and show how to package common libraries as DX theme modules. We have provided sample code leveraging React, WebPack and Gradle to do this. The content covers deploying the Script Application as a whole including its dependencies, and also deploying common libraries  as one DX module and how to exclude them from the packaging and deployment of each application.

## Common Setup:

### Pre-Requisites: 
- [DX ScriptApps Pre-Requisites](pre_requisites.md)

### Basic DX Script Application Setup
- [No Webpack Setup](common-setup/basic-scriptapp/basic_nowebpack_setup.md)
- [Webpack Setup](common-setup/basic-scriptapp/basic_webpack_setup.md)

### Optimal DX Script Application Setup
- [DX Modules Project For Common Libraries](common-setup/optimized-scriptapps/dependencies_as_module.md)
- [DX ScriptApps Project For Bundling Without Dependencies](common-setup/optimized-scriptapps/sharing_dependencies.md)

### Build and Deploy Steps
- [Build and Deploy DX Modules](common-setup/build-and-deploy/build_and_deploy_dx_modules.md)
- [Manual EAR file Uploads](common-setup/build-and-deploy/manual_ear_upload.md)
 
### Post-Deployment:
- [Build Configuration Notes](common-setup/post-deployment/important_things_to_note.md)
- [Link a DX Module to a DX Theme](common-setup/post-deployment/verify_link_module_to_theme.md)
- [Prepare a DX Page for DX ScriptApps](common-setup/post-deployment/prepare_dx_page.md)
- [Add a Deployed DX ScriptApp into a DX Page](common-setup/post-deployment/add_scriptapp_to_page.md)

## DX Site Integration
- [Import and Export of DX Sites](site_integration/import_export_site/index.md)
- [Code Splitting](site_integration/code_splitting.md)
- [Use of Cookies](site_integration/use_of_cookies.md)
- [Styling (CSS and SCSS)](site_integration/styling_css_and_scss.md)

## How-To Guides with Sample Codes:

- [Deploy a React App to DX as a Script Application](how_to/01_basic_deployments.md)
- [Deploy JavaScript libraries/dependencies as a DX Module](how_to/02_dependencies_as_module.md)
- [Deploy Script Applications Without its Dependencies](how_to/03_apps_excluding_dependencies.md)
- [Deploy multiple Script Applications with shared dependencies](how_to/04_apps_sharing_dependencies.md)
- [Deploy multiple Script Applications with different dependency versions](how_to/05_apps_with_diff_deploy_versions.md)
- [Make multiple Script Applications use shared components from themes](how_to/06_theme_component_in_app.md)

## ShowCase Samples

- [Woodburn Insurance Demo](samples/woodburn_insurance_demo/index.md)
