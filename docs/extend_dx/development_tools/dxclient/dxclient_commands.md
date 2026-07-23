# DXClient commands

This topic describes the different commands you can use in DXClient.

## Information commands

To display Help documents, check the DXClient version and compatibility, and accept license information for DXClient, refer to the following commands.

Use the following commands to display the Help document for DXClient:

```bash
dxclient
```

```bash
dxclient -h, --help 
```

Use the following command to display the DXClient version number:

```bash
dxclient -V, --version
```

Use the following command to display the Help information for a specific command:

```bash
dxclient help [command]
```

Use the following command to skip the license acceptance prompt:

```bash
dxclient accept-license
```

!!!note
    For container versions, you only have to accept the license agreement once for every volume directory created.

Use the following command to show version compatibility details between DX Core and DXClient [`version-compat`](../dxclient/dxclient_artifact_types/versionCompat.md):

```bash
dxclient version-compat [options]
```

## Core commands

Command syntax conventions:

```bash
dxclient [command] [options]
```

Use the following command to execute the [deploy portlet action](../dxclient/dxclient_artifact_types/portlets.md):

```bash
dxclient deploy-portlet [options]
```

Use the following command to execute the [undeploy portlet action](../dxclient/dxclient_artifact_types/portlets.md):

```bash
dxclient undeploy-portlet [options]
```

Use the following command to execute the [xmlaccess action](../dxclient/dxclient_artifact_types/xmlaccess.md):

```bash
dxclient xmlaccess [options]
```

Use the following command to execute the *pull* [script application action](../dxclient/dxclient_artifact_types/scriptapplications.md):

```bash
dxclient deploy-scriptapplication pull [options]
```

Use the following command to execute the *push* [script application action](../dxclient/dxclient_artifact_types/scriptapplications.md):

```bash
dxclient deploy-scriptapplication push [options]
```

Use the following command to execute the undeploy [script application action](../dxclient/dxclient_artifact_types/scriptapplications.md):

```bash
dxclient undeploy-scriptapplication [options]
```

Use the following command to execute the restore [script application action](../dxclient/dxclient_artifact_types/scriptapplications.md):

```bash
dxclient restore-scriptapplication [options]
```

Use the following command to execute the [deploy application action](../dxclient/dxclient_artifact_types/deployapplication.md):

```bash
dxclient deploy-application [options]
```

Use the following command to execute the [DX Core restart action](../dxclient/dxclient_artifact_types/dxcoreserver.md):

```bash
dxclient restart-dx-core
```

Use the following command to restart [DX Core pods in a Kubernetes deployment](../dxclient/dxclient_artifact_types/dxcoreserver.md):

```bash
dxclient restart-core-pods [options]
```

Use the following command to execute [manage-subscriber action](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md):

```bash
dxclient manage-subscriber -h
```

Use the following command to execute [manage-syndicator action](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md):

```bash
dxclient manage-syndicator -h
```

Use the following command to execute the [deploy theme action](../dxclient/dxclient_artifact_types/themes.md):

```bash
dxclient deploy-theme [options]
```

Use the following command to execute the [undeploy theme action](../dxclient/dxclient_artifact_types/themes.md):

```bash
dxclient undeploy-theme [options]
```

Use the following command to execute the [manage-syndicator get-syndication-report action](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md):

```bash
dxclient  manage-syndicator get-syndication-report [options]
```

Use the following command to execute the [shared-library action](../dxclient/dxclient_artifact_types/wcmlibraries.md):

```bash
dxclient  shared-library [options]
```

Use the following command to execute the delete [DAM schema action](../../../manage_content/digital_assets/usage/managing_dam/damschemas.md):

```bash
dxclient delete-dam-schema [options]
```

Use the following command to list all [DAM schemas present](../../../manage_content/digital_assets/usage/managing_dam/damschemas.md):

```bash
dxclient list-dam-schemas  [options]
```

Use the following command to export the [personalization rules](../dxclient/dxclient_artifact_types/personalization.md) from the target server:

```bash
dxclient pzn-export  [options]
```

Use the following command to import the [personalization rules](../dxclient/dxclient_artifact_types/personalization.md) into the target server:

```bash
dxclient pzn-import  [options]
```

Use the following command to [manage virtual portal](../dxclient/dxclient_artifact_types/virtualportals.md) tasks in the DX server:

```bash
dxclient manage-virtual-portal [options]
```

Use the following command to [register subscriber](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#registering-for-dam-staging):

```bash
dxclient manage-dam-staging register-dam-subscriber [options]
```

Use the following command to [deregister subscriber](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#deregistering-for-dam-staging):

```bash
dxclient manage-dam-staging deregister-dam-subscriber  [options]
```

Use the following command to trigger [manual sync](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#managing-dam-staging):

```bash
dxclient manage-dam-staging trigger-staging  [options]
```

Use the following command to [update secrets](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#updating-secrets-for-dam-staging):

```bash
dxclient manage-dam-staging update-secrets  [options]
```

Use the following command to create [credential vault](../dxclient/dxclient_artifact_types/credentialvaultslot.md) slot in the DX server:

```bash
dxclient create-credential-vault  [options]
```

Use the following command to create the [syndication relation between syndicator and subscriber](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md) in DX server:

```bash
dxclient create-syndication-relation  [options]
```

Use the following command to create, update, delete, export or import a custom property from an existing [Resource Environment](../dxclient/dxclient_artifact_types/resourceenvironments.md) Provider:

```bash
dxclient resource-env-provider [options]
```

Use this command to [export WCM libraries](../dxclient/dxclient_artifact_types/wcmlibraries.md):

```bash
dxclient wcm-library-export
```

Use this command to [import WCM libraries](../dxclient/dxclient_artifact_types/wcmlibraries.md):

```bash
dxclient wcm-library-import
```

Use this command to [export the content of a WCM library for translation into a CSV file](../dxclient/dxclient_artifact_types/wcm_mls_export_import.md):

```bash
dxclient mls-export
```

Use this command to [import the translated content into DX](../dxclient/dxclient_artifact_types/wcm_mls_export_import.md):

```bash
dxclient mls-import
```

Use the [dx-core-configuration-reports](../dxclient/dxclient_artifact_types/dxcoreserver.md) command to get a summary of the configurations of a single DX server or both source and target DX servers, which users can use to compare.

```bash
dxclient dx-core-configuration-reports [OPTIONS]
```

Use this command to sync WebDAV themes in server and then watch for succeeding changes which will immediately reflect in the WebDAV Server:

```bash
dxclient livesync push-theme [options]
```

Use this command to download the theme files in WebDAV Server in preparation for [`livesync push-theme`](../dxclient/dxclient_artifact_types/livesync.md#livesync-push-theme):

```bash
dxclient livesync pull-theme [options]
```

Use this command to download the WCM Design Library files from the DX Server in preparation for [`livesync push-wcm-design-library`](../dxclient/dxclient_artifact_types/livesync.md#livesync-push-wcm-design-library):

```bash
dxclient livesync pull-wcm-design-library [options]
```

Use this command to sync a local WCM Design Library with the DX server. Succeeding changes are immediately reflected in the DX Server:

```bash
dxclient livesync push-wcm-design-library [options]
```

Use this command to trigger [DAM Reindexing](../../../manage_content/digital_assets/configuration/dam_indexing/using_dam_indexing.md):

```bash
    dxclient trigger-dam-reindex [options]
```
