# DXClient Artifact Types

This section provides information about the artifact types that are currently supported by the DXClient tool.

**Limitations:**

-   If deploying CICD artifacts using DXClient to the Red Hat OpenShift environment, you might receive failure messages while you run the deploy-theme, deploy-application, or restart-dx-core commands. This might happen because of a connection getting closed due to timeout before the response is ready. In such situations, before re-triggering the request, we advise you to check your target server to verify if the application has been deployed or the server is up, as the request was already triggered from the client-side.

The following list shows some of the deprecated parameters and the new parameters that replace them in CF201 and later releases. It is recommended that you start using the new parameters because the old parameters are removed starting in CF210.

-   `-dxConnectHostname` replaced by `-hostname`

    !!! note
        The attribute `-dxConnectHostname` is deprecated in CF202 and later releases. It is recommended that you start using the replacement parameter `-hostname` starting from CF202 wherever necessary.

-   `-targetServerHostname` replaced by `-targetHostname`
-   `-targetServerPort ->` replaced by `-targetDxConnectPort`
-   `-targetServerUsername` replaced by `-targetDxConnectUsername`
-   `-targetServerPassword` replaced by `-targetDxConnectPassword`
-   `-targetServerProfileName` replaced by `-targetDxProfileName`


???+ Info "Related information"
    - [How to translate WCM library content using export and import WCM with DXClient](wcm_mls_export_import.md)
    - [DXClient](../index.md)
    - [Sample Pipelines for use with HCL DXClient and Automation servers](../sample_pipelines_for_use_with_dx_client_and_automation_servers.md)
    - [How to manage syndicators and subscribers](https://help.hcltechsw.com/digital-experience/digital-experience/8.5/panel_help/wcm_syndication.html) 

