# Installing and Deploying HCL End-user Search using OpenSearch

This document contains instructions on how to install and deploy the HCL End-user Search using OpenSearch application manually. Note that beginning with HCL Digital Experience 9.5 CF224, End-user Search with OpenSearch is available to be enabled for container-based deployments.

## Packaging, installing, and deploying design

HCL End-user Search using OpenSearch is an instance of a search integration portlet configured to point to where the static assets (javascript, stylesheets, and html markup) can be loaded from. It can be enabled and disabled by using ConfigEngine tasks for container-based deployments. The enable task would deploy, configure the portlet, create the http outbound proxy policy so DX can fetch the assets, and then deploy the page.

For container-based Helm deployment, the deployment values.yaml can also be updated so that the HCL End-user Search with OpenSearch will be enabled by default automatically and there is no further need to use ConfigEngine task to enable.

!!! important
    Before proceeding with the steps below, it is required to install Search based on Opensearch. For more information on how to install Search based on Opensearch, refer to  [Installing search based on OpenSearch](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md).

## Enabling and disabling HCL End-user Search using OpenSearch

This section describes how to enable and disable HCL End-user Search using OpenSearch manually.

Starting with HCL Digital Experience 9.5 CF224, you can enable End-user Search with OpenSearch is available to be enabled. The **enable-search-v2** config task is **not** automatically executed so you have the freedom to enable and disable it by running **enable-search-v2** and **disable-search-v2**, respectively. Once enabled, it is available for use also once you instantiate a Virtual Portal.

!!! important
    Before manually enabling HCL End-user Search using OpenSearch, it is required to enable Practitioner Studio. For more information on how to enable Practitioner Studio, refer to [How to enable Practitioner Studio](../../../build_sites/practitioner_studio/working_with_ps/enable_prac_studio.md).

### Enabling HCL End-user Search using OpenSearch via ConfigEngine task

To enable HCL End-user Search using OpenSearch manually, run the **enable-search-v2** config task. It is not required to stop or restart the Portal when running these configuration tasks.

-   AIX: `./ConfigEngine.sh enable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Dsearch.input.redirect.version=2 -Dsearch.wcm.version=2 -Dsearch.middleware.ui.uri=http://{search.middleware.ui.uri}/dx/ui/search`
-   Linux: `./ConfigEngine.sh enable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Dsearch.input.redirect.version=2 -Dsearch.wcm.version=2 -Dsearch.middleware.ui.uri=http://{search.middleware.ui.uri}/dx/ui/search`
-   Windows: `ConfigEngine.bat enable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Dsearch.input.redirect.version=2 -Dsearch.wcm.version=2 -Dsearch.middleware.ui.uri=http://{search.middleware.ui.uri}/dx/ui/search`
    
!!! important
        The `{search.middleware.ui.uri}` placeholder needs to be replaced with the exact search middleware service name you have in your deployment. For example, it can be something like, `http://dx-search-search-middleware-query:3000`
        
For information on how to enable the HCL End-user Search using OpenSearch on container deployments, see [Running DX Core configuration tasks](../../../deployment/manage/container_configuration/run_core_config_engine.md).

### Enabling HCL End-user Search using OpenSearch via Helm deployment

For information on how to do container-based Helm deployments, see [Deploying using Helm](../../../deployment/install/container/helm_deployment/overview.md).

The following changes must be made to your installation values.yaml to enable HCL End-user Search using OpenSearch.

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

To disable HCL End-user Search using OpenSearch, run the **disable-search-v2** config task.

-   AIX: `./ConfigEngine.sh disable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Linux: `./ConfigEngine.sh disable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat disable-search-v2 -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

For information on how to run the ConfigEngine tasks on container deployments, refer to [Running DX Core configuration tasks](../../../deployment/manage/container_configuration/run_core_config_engine.md).

After HCL End-user Search using OpenSearch is disabled by running the **disable-search-v2** config task, the HCL End-user Search using OpenSearch page is removed. To enable HCL End-user Search using OpenSearch again, the **enable-search-v2** config task must be executed manually.

### Disabling HCL End-user Search using OpenSearch through Helm deployment

For information on how to do container-based Helm deployments, see [Deploying using Helm](../../../deployment/install/container/helm_deployment/overview.md).

The following changes must be made to your installation values.yaml to disable HCL End-user Search using OpenSearch.

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
