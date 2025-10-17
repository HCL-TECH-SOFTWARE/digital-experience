# Prerequisite of HCL DX Picker

This section contains prerequisite to use the HCL DX Picker.

## Enabling and disabling DX Picker

This section describes how to enable and disable DX Picker.

!!! important
    Before enabling DX Picker, it is required to have Search V2 and Content Source that you would be using installed and enabled. For more information, refer to [Search V2](../../../../build_sites/search_v2/index.md), [DAM](../../../digital_assets/index.md), [WCM](../../../../manage_content/wcm_authoring/authoring_portlet/index.md) and [JCR](../../../../build_sites/search/cfg_dx_search/search_service_params/jcr_srrcfgsrvc.md).

## Preparing the `custom-search-values.yaml`

To configure your dx picker deployment, you have to prepare your `custom-search-values.yaml` which contains all configurable settings. This custom values file must only contain the parameters that you want to overwrite with your preferred settings.

You can get a file with the default configuration using the following command:

``` sh
# Command to extract values.ymal from Helm Chart
helm show values hcl-dx-search.tar.gz > values.yaml
```

You can use this file as a blueprint for your `custom-search-values.yaml`.

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

!!! important
    To prevent CORS issue and be able to access DX Picker in a custom web application, it is required to add the host of the custom web application in the list of origins allowed.

    Blueprint for your `custom-values.yaml`:
    ```
        networking:
          addon:
            digitalAssetManagement:
              # CORS Origin configuration for Digital Asset Management, array of elements
              corsOrigin: []
    ```

    Blueprint for your `custom-search-values.yaml`:
    ```
        configuration:
          searchMiddleware:
            corsOrigin: "https://<other-domain>"
    ```

## Verify the `config.json`

You can go to `https://<your-domain>/dx/ui/search/picker/config.json` and verify if `config.json` have the following content:

```json
{
  "client": {
    "searchApiFullUrl": "https://<your-domain>/dx/api/search/v2",
    "searchApiBaseUrl": "https://<your-domain>",
    "pickerUiContextRoot": "/dx/ui/search/picker",
    "searchApiContextRoot": "/dx/api/search/v2"
  }
}
```