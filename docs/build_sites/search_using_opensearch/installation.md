# Installing and Deploying HCL End-user Search using OpenSearch

This section contains instructions on how to install and deploy the HCL End-user Search using OpenSearch application manually. 

!!! note 
    Starting from HCL Digital Experience (DX) 9.5 CF224, End-user Search with OpenSearch can be enabled for container-based deployments.

## Packaging, installing, and deploying design

HCL End-user Search using OpenSearch is an instance of a search integration portlet configured to point to where the static assets such as Javascript, stylesheets, and HTML markup can be loaded from. You can enable or disable it using ConfigEngine tasks for container-based deployments. The enable task would deploy, configure the portlet, create the http outbound proxy policy so DX can fetch the assets, and then deploy the page.

For container-based Helm deployment, the deployment `values.yaml` can also be configured so HCL End-user Search with OpenSearch is enabled by default.

!!! important
    Before you can enable HCL End-user Search using Opensearch, you need to install Search based on Opensearch. For more information on how to install this feature, refer to [Installing search based on OpenSearch](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md).

## Enabling and disabling HCL End-user Search using OpenSearch

This section describes how to enable and disable HCL End-user Search using OpenSearch manually.

The `enable-search-v2` config task is not automatically executed. You can enable and disable this task by running `enable-search-v2` and `disable-search-v2` respectively. Once enabled, you can also use it after creating a Virtual Portal.

!!! important
    Before manually enabling HCL End-user Search using OpenSearch, you need to enable Practitioner Studio. For more information on how to enable Practitioner Studio, refer to [How to enable Practitioner Studio](../../build_sites/practitioner_studio/working_with_ps/enable_prac_studio.md).

For more information on how to do container-based Helm deployments, refer to [Deploying using Helm](../../deployment/install/container/helm_deployment/overview.md).

For more information on how to run ConfigEngine tasks on container deployments, refer to [Running DX Core configuration tasks](../../deployment/manage/container_configuration/run_core_config_engine.md).

### Enabling HCL End-user Search using OpenSearch using a ConfigEngine task

To enable HCL End-user Search using OpenSearch manually, run the **enable-search-v2** config task. You do not need to stop or restart the Portal when running these tasks.

-   AIX: `./ConfigEngine.sh enable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Dsearch.input.redirect.version=2 -Dsearch.wcm.version=2 -Dsearch.middleware.ui.uri=http://{search.middleware.ui.uri}/dx/ui/search`
-   Linux: `./ConfigEngine.sh enable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Dsearch.input.redirect.version=2 -Dsearch.wcm.version=2 -Dsearch.middleware.ui.uri=http://{search.middleware.ui.uri}/dx/ui/search`
-   Windows: `ConfigEngine.bat enable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Dsearch.input.redirect.version=2 -Dsearch.wcm.version=2 -Dsearch.middleware.ui.uri=http://{search.middleware.ui.uri}/dx/ui/search`
    
!!! important
    The `{search.middleware.ui.uri}` placeholder needs to be replaced with the exact search middleware service name in your deployment. For example:`http://dx-search-search-middleware-query:3000`.
        

### Enabling HCL End-user Search using OpenSearch through Helm deployment


Apply the following changes to your installation `values.yaml` to enable HCL End-user Search using OpenSearch.

```
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
      # Settings for SearchV2 UI configuration
      search:
      # Determines if search ui v2 is enabled or not
      uiV2Enabled: true
      # Determines to which search center any input box on DX redirects by default
      inputRedirectVersion: "v2"
```

### Disabling HCL End-user Search using OpenSearch using a Config Engine task

To disable HCL End-user Search using OpenSearch manually, run the **disable-search-v2** config task.

-   AIX: `./ConfigEngine.sh disable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Linux: `./ConfigEngine.sh disable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat disable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`


After disabling HCL End-user Search using OpenSearch using the **disable-search-v2** config task, the HCL End-user Search using OpenSearch page is removed. To re-enable HCL End-user Search using OpenSearch, execute the **enable-search-v2** config task again.

### Disabling HCL End-user Search using OpenSearch through Helm deployment


Apply the following changes to your installation `values.yaml` to disable HCL End-user Search using OpenSearch.

```
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
      # Settings for SearchV2 UI configuration
      search:
      # Determines if search ui v2 is enabled or not
      uiV2Enabled: false
      # Determines to which search center any input box on DX redirects by default
      inputRedirectVersion: "v1"
```
