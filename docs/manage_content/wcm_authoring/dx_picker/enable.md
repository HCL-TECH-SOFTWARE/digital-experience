# Enabling and disabling DX Picker

This section describes how to enable or disable the HCL Digital Experience (DX) Picker feature.

!!! important
    Before enabling DX Picker, ensure to install and enable [Search V2](../../../build_sites/search_v2/index.md) and the content source you want to use such as [Digital Asset Management (DAM)](../../digital_assets/index.md), [DAM Indexing](../../../manage_content/digital_assets/configuration/dam_indexing/index.md), [Java Content Repository (JCR)](../../../build_sites/search/cfg_dx_search/search_service_params/jcr_srrcfgsrvc.md), or [Web Content Manager (WCM)](../../../manage_content/wcm_authoring/authoring_portlet/index.md)

## Enabling DX Picker

To enable DX Picker, you need to create a `custom-search-values.yaml` file, which contains all configurable settings. This custom values file must only contain the parameters that you want to overwrite with your preferred settings.

1. Extract the `values.yaml` file from your Helm chart using the following command:

    ``` sh
    # Command to extract values.yaml from Helm Chart
    helm show values hcl-dx-search.tar.gz > values.yaml
    ```

2. Use the extracted `values.yaml` file as a blueprint to create your `custom-search-values.yaml` file. For example:

    ```yaml
    configuration:
    searchMiddleware:
        host: your-domain
        port: 443
        ssl: true
        version: "v2"
        corsOrigin: "https://<other-domain>"
    picker:
        contextRoot:
        api: "/dx/api/search"
        ui: "/dx/ui/search/picker"
    ```

### Preventing CORS issues

To prevent Cross-Origin Resource Sharing (CORS) issues and access DX Picker in a custom web application, ensure to add the host of the custom web application in the list of origins allowed. Refer to the following sample configurations:

- For your `custom-values.yaml` file:

    ```
        networking:
          addon:
            digitalAssetManagement:
              # CORS Origin configuration for Digital Asset Management, array of elements
              corsOrigin: []
    ```

- For your `custom-search-values.yaml` file.

    ```
        configuration:
          searchMiddleware:
            corsOrigin: "https://<other-domain>"
    ```

## Disabling DX Picker

Once Search V2 is disabled, DX Picker will also be disabled. For reference check [Search V2](../../../build_sites/search_v2/index.md).
