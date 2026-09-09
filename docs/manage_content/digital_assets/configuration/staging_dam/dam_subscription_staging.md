# Staging DAM to rendering environments

This topic contains the commands that administrators can use to configure the staging of [Digital Asset Management](../../index.md) (DAM) content. This allows you to manage subscriber registration or configure periodic sync.

!!! warning "Deprecated parameters (CF221+)"
    Starting from CF221, the parameters `dxWASUsername`, `dxWASPassword`, `targetServerWASUsername`, and `targetServerWASPassword` are deprecated and should no longer be used in DAM staging commands.

## Differences between DAM staging and WCM syndication

DAM staging and Web Content Manager (WCM) syndication are two distinct processes with key differences:

| Feature | WCM | DAM |
| ------- | --- | --- |
| Credentials for authentication | Authentication uses the Credential Vault slot. | The credentials provided during registration are stored as Kubernetes secrets and used for file transfer authentication and authorization from publisher to subscriber. The user credentials stored in the secret are the primary portal administrator credentials. For more information, refer to [Configure Credentials](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_credentials.md). |
| Syndication configuration | Configured once using the user interface or REST API. Synchronization is triggered using the REST API or user interface. | Subscribers are configured using DXClient. |
| Syndication direction | Supports one-way or two-way syndication with one or multiple subscriber resources. | Supports one-way staging only. |
| User repository support per environment | Supported using the Member Fixer tool in WCM. | Not supported. |

## DAM staging framework

The DAM staging framework allows you to stage your DAM content from an authoring environment (publisher) to multiple rendering environments (subscriber). Using [DXClient](../../../../extend_dx/development_tools/dxclient/index.md){:target="_blank"}, you can configure DAM staging to:

- Trigger manual staging or use periodic staging processes.
- Set the cycle length (default: 2 minutes, maximum: 24 hours) for periodic synchronization.
- Register a subscriber with a publisher.

    !!! note
        A subscriber must be registered with a publisher. Access rights to DAM staging assets are not transferred for subscribers who do not have the same distinguished names (for example, `uid=wpsadmin,o=hcl.com`) in both publisher and subscriber Lightweight Directory Access Protocol (LDAP) or other user registry.

### Configuring staging hostname

You must specify the hostname configuration for the DAM staging publisher and subscriber in the `values.yaml` file of your HCL DX Helm charts. If left empty, the host defaults to the load balancer hostname. For hybrid deployments, you must specify the hostname details.

!!! note
    In `values.yaml`, configure host, port, and SSL settings under `networking.addon.digitalAssetManagement.staging`.

### Configuring LTPA token refresh time

By default, the Lightweight Third-Party Authentication (LTPA) token stored in cache refreshes every 5 minutes. To update the LTPA token refresh time:

1. Open the `values.yaml` file for your deployment.

2. Add or update `ltpaTokenRefreshTimeInMinutes` under `configuration.digitalAssetManagement`. This parameter specifies the token refresh time in minutes, which the system passes to DAM as an environment variable:

    ```yaml
    configuration:
      digitalAssetManagement:
        ltpaTokenRefreshTimeInMinutes: 5
    ```

3. Run a [helm upgrade](../../../../deployment/install/container/helm_deployment/update_helm_deployment.md) to apply the updated values to the cluster.

### Configuring LDAP

DAM staging supports environments that use different LDAP user registries. You can use an LDAP user account with portal administrator privileges for staging registration.

### Credentials used during staging

You must use portal administrator credentials for staging registration. HCL DX stores these credentials as Kubernetes secrets. User credentials in the secret can be identical or different on the publisher and subscriber. HCL DX uses the credentials provided during registration for authentication and authorization during DXClient registration and file transfers during staging.

Use the `manage-dam-staging update-secrets` command to update publisher and subscriber staging secrets. For more information, refer to [Updating secrets for DAM staging](#updating-secrets-for-dam-staging).

### DAM cross-CF staging

DAM cross-CF staging allows staging content across different Cumulative Fix (CF) versions, with the following limitations:

- Supports staging only from higher to lower CF versions.
- Supports staging up to two lower CF versions. For example, if the publisher is on CF225, you can stage to a subscriber on CF223.
- Requires the subscriber to run CF223 or higher.

## Managing DAM staging

Use the `manage-dam-staging trigger-staging` command to trigger DAM staging:

```bash
dxclient manage-dam-staging trigger-staging
```

Run the following command to display help information:

```bash
dxclient manage-dam-staging trigger-staging -h
```

The following options are also available for this command:

| Command option | Description | Default |
|----------------|-------------|---------|
|`-dxProtocol <value>`|Specifies the protocol to connect to the publisher DX server.|""|
|`-hostname <value>`|Specifies the hostname of the publisher DX server.|""|
|`-dxPort <value>`|Specifies the port to connect to the publisher DX server.|"" (`443` for Kubernetes environments)|
|`-dxUsername <value>`|Specifies the username required to authenticate with the publisher DX server.|""|
|`-dxPassword <value>`|Specifies the password required to authenticate with the publisher DX server.|""|
|`-damAPIPort <value>`|Specifies the port number of the publisher DAM server.|"" (`443` for Kubernetes environments)|
|`-ringAPIPort <value>`|Specifies the port number of the publisher DX Core API server.|"" (`443` for Kubernetes environments)|
|`-damAPIVersion <value>`|Specifies the publisher DAM API version number.|"" (`v1` for Kubernetes environments)|
|`-ringAPIVersion <value>`|Specifies the publisher DX Core API version number.|"" (`v1` for Kubernetes environments)|
|`-targetHostname <value>`|Specifies the subscriber target environment hostname.||
|`-interval <value>`|Specifies the interval between sync cycles in minutes.|`2`|

Sample command containing the available options:

```bash
dxclient manage-dam-staging trigger-staging -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -targetHostname <targetHostname>
```

Sample command with specified values:

```bash
dxclient manage-dam-staging trigger-staging -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -targetHostname native-kube-dam-production.team-q-dev.com
```

## Registering for DAM staging

!!! note
    For hybrid deployments, refer to [Setting up staging for hybrid deployments](#setting-up-staging-for-hybrid-deployments).

Use the `manage-dam-staging trigger-staging` command to trigger DAM staging:

```bash
dxclient manage-dam-staging register-dam-subscriber
```

Run the following command to display help information:

```bash
dxclient manage-dam-staging register-dam-subscriber -h
```

The following options are also available for this command:

| Command option | Description | Default |
|----------------|-------------|---------|
|`-dxProtocol <value>`|Specifies the protocol to connect to the publisher DX server.|""|
|`-hostname <value>`|Specifies the hostname of the publisher DX server.|""|
|`-dxPort <value>`|Specifies the port to connect to the publisher DX server.|"" (`443` for Kubernetes environments)|
|`-dxUsername <value>`|Specifies the username required to authenticate with the publisher DX server.|""|
|`-dxPassword <value>`|Specifies the password required to authenticate with the publisher DX server.|""|
|`-damAPIPort <value>`|Specifies the port number of the publisher DAM server.|"" (`443` for Kubernetes environments)|
|`-ringAPIPort <value>`|Specifies the port number of the publisher DX Core API server.|"" (`443` for Kubernetes environments)|
|`-damAPIVersion <value>`|Specifies the publisher DAM API version number.|"" (`v1` for Kubernetes environments)|
|`-ringAPIVersion <value>`|Specifies the publisher DX Core API version number.|"" (`v1` for Kubernetes environments)|
|`-targetHostname <value>`|Specifies the subscriber target environment hostname.||
|`-targetServerUsername <value>`|Specifies the subscriber DX Core server username.|""|
|`-targetServerPassword <value>`|Specifies the subscriber DX Core server password.|""|
|`-interval <value>`|Specifies the interval between sync cycles in minutes.|`2`|

Sample command containing the available options:

```bash
dxclient manage-dam-staging register-dam-subscriber -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -targetHostname <targetHostname> -targetServerUsername <targetServerUsername> -targetServerPassword <targetServerPassword> -interval <interval>
```

Sample command with specified values:

```bash
dxclient manage-dam-staging register-dam-subscriber -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -targetServerUsername xxxx -targetServerPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -targetHostname native-kube-dam-production.team-q-dev.com -interval 2
```

## Deregistering for DAM staging

Use the `manage-dam-staging deregister-dam-subscriber` command to deregister the subscriber for DAM staging:

```bash
dxclient manage-dam-staging deregister-dam-subscriber
```

Run the following command to display help information:

```bash
dxclient manage-dam-staging deregister-dam-subscriber -h
```

The following options are also available for this command:

| Command option | Description | Default |
|----------------|-------------|---------|
|`-dxProtocol <value>`|Specifies the protocol to connect to the publisher DX server.|""|
|`-hostname <value>`|Specifies the hostname of the publisher DX server.|""|
|`-dxPort <value>`|Specifies the port to connect to the publisher DX server.|"" (`443` for Kubernetes environments)|
|`-dxUsername <value>`|Specifies the username required to authenticate with the publisher DX server.|""|
|`-dxPassword <value>`|Specifies the password required to authenticate with the publisher DX server.|""|
|`-damAPIPort <value>`|Specifies the port number of the publisher DAM server.|"" (`443` for Kubernetes environments)|
|`-ringAPIPort <value>`|Specifies the port number of the publisher DX Core API server.|"" (`443` for Kubernetes environments)|
|`-damAPIVersion <value>`|Specifies the publisher DAM API version number.|"" (`v1` for Kubernetes environments)|
|`-ringAPIVersion <value>`|Specifies the publisher DX Core API version number.|"" (`v1` for Kubernetes environments)|
|`-subscriberId <value>`|Specifies the subscriber ID of the target environment.||

Sample command containing the available options:

```bash
dxclient manage-dam-staging deregister-dam-subscriber -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -subscriberId <subscriberId>
```

Sample command with specified values:

```bash
dxclient manage-dam-staging deregister-dam-subscriber -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -subscriberId d7e5e014-12a0-4dc5-a5d7-971fd4fa86f3
```

## Updating secrets for DAM staging

Use the `manage-dam-staging update-secrets` command to update the publisher and subscriber secrets for DAM staging:

```bash
dxclient manage-dam-staging update-secrets
```

Run the following command to display help information:

```bash
dxclient manage-dam-staging update-secrets -h
```

The following options are also available for this command:

| Command option | Description | Default |
|----------------|-------------|---------|
|`-dxProtocol <value>`|Specifies the protocol to connect to the publisher DX server.|""|
|`-hostname <value>`|Specifies the hostname of the publisher DX server.|""|
|`-dxPort <value>`|Specifies the port to connect to the publisher DX server.|"" (`443` for Kubernetes environments)|
|`-dxUsername <value>`|Specifies the username required to authenticate with the publisher DX server.|""|
|`-dxPassword <value>`|Specifies the password required to authenticate with the publisher DX server.|""|
|`-damAPIPort <value>`|Specifies the port number of the publisher DAM server.|"" (`443` for Kubernetes environments)|
|`-ringAPIPort <value>`|Specifies the port number of the publisher DX Core API server.|"" (`443` for Kubernetes environments)|
|`-damAPIVersion <value>`|Specifies the publisher DAM API version number.|"" (`v1` for Kubernetes environments)|
|`-ringAPIVersion <value>`|Specifies the publisher DX Core API version number.|"" (`v1` for Kubernetes environments)|
|`-targetHostname <value>`|Specifies the subscriber target environment hostname.||
|`-targetServerUsername <value>`|Specifies the subscriber DX Core server username.|""|
|`-targetServerPassword <value>`|Specifies the subscriber DX Core server password.|""|

Sample command containing the available options:

```bash
dxclient manage-dam-staging update-secrets -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -targetHostname <targetHostname> -targetServerUsername <targetServerUsername> -targetServerPassword <targetServerPassword>
```

Sample command with specified values:

```bash
dxclient manage-dam-staging update-secrets -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -targetServerUsername xxxx -targetServerPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -targetHostname native-kube-dam-production.team-q-dev.com
```

## Verifying subscriber connectivity during secret rotation

DAM staging verifies the bidirectional connection between the publisher and each subscriber through a periodic heartbeat.

- The `SubscriberInterfaceController` API endpoint is now available to verify bidirectional connections between publishers and subscribers. For more information, refer to [SubscriberInterfaceController](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/#tag/SubscriberInterfaceController){target="_blank"}.
- Heartbeat verification detects connectivity issues and automatically disables or enables subscribers after secret rotation.
- The staging process pauses for disabled subscribers and resumes automatically when enabled.

!!! note
    If you manually disable a subscriber, the system does not automatically re-enable it. You must manually re-enable the subscriber by using DXClient after verifying the configuration is correct.

To configure the verification interval in the Helm values:

1. Open the `values.yaml` file for your deployment.
2. Add or update the `verifySubscribersIntervalInMinutes` property with the interval in minutes.

    ```yaml
    verifySubscribersIntervalInMinutes: 10
    ```

3. Run a [helm upgrade](../../../../deployment/install/container/helm_deployment/update_helm_deployment.md) to apply the updated values to the cluster.

## Getting all subscriber details for DAM staging

Use the `manage-dam-staging get-all-subscribers` command to get details for all registered subscribers for DAM staging:

```bash
dxclient manage-dam-staging get-all-subscribers
```

Run the following command to display help information:

```bash
dxclient manage-dam-staging get-all-subscribers -h
```

The following options are also available for this command:

| Command option | Description | Default |
|----------------|-------------|---------|
|`-dxProtocol <value>`|Specifies the protocol to connect to the publisher DX server.|""|
|`-hostname <value>`|Specifies the hostname of the publisher DX server.|""|
|`-dxPort <value>`|Specifies the port to connect to the publisher DX server.|"" (`443` for Kubernetes environments)|
|`-dxUsername <value>`|Specifies the username required to authenticate with the publisher DX server.|""|
|`-dxPassword <value>`|Specifies the password required to authenticate with the publisher DX server.|""|
|`-damAPIPort <value>`|Specifies the port number of the publisher DAM server.|"" (`443` for Kubernetes environments)|
|`-ringAPIPort <value>`|Specifies the port number of the publisher DX Core API server.|"" (`443` for Kubernetes environments)|
|`-damAPIVersion <value>`|Specifies the publisher DAM API version number.|"" (`v1` for Kubernetes environments)|
|`-ringAPIVersion <value>`|Specifies the publisher DX Core API version number.|"" (`v1` for Kubernetes environments)|

Sample command containing the available options:

```bash
dxclient manage-dam-staging get-all-subscribers -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion>
```

Sample command with specified values:

```bash
dxclient manage-dam-staging get-all-subscribers -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1
```

Enabled subscriber response:

```json
{
    "status": "enabled",
    "syncStatus": "Success",
    "disabledReason": null,
    "message": null
}
```

Disabled subscriber response:

```json
{
    "status": "disabled",
    "syncStatus": "Failed",
    "disabledReason": "AUTH_FAILURE",
    "message": "Authentication failed because of invalid secrets/credentials"
}
```

!!!note
    A manually disabled subscriber sets `disabledReason` to `MANUAL`, whereas a subscriber disabled by a heartbeat check sets `disabledReason` to `AUTH_FAILURE`.

### Handling unstaged items

Media assets and collections are not staged from publisher to subscriber if they share the same name but have different unique IDs on the publisher and subscriber servers.

Items are not staged in these scenarios:

- A collection shares the same name on the same level but has a different unique ID across collections.
- A media asset shares the same file name in the same collection.
- A rendition shares the same custom URL in the set.
- A version is created for a rendition (for example, v1, v2, or v3).

If items are not staged to the subscriber, check the subscriber DAM logs for error messages.

## Using WCM with DAM staging

When WCM content containing DAM asset references syndicates from an authoring environment to a rendering environment, the embedded DAM URLs must resolve to the rendering server instead of the authoring server.

To prevent broken asset links, configure one of two host-resolution methods in `WCMConfigService` using the WebSphere Application Server administration console:

- Configure `WCMConfigService` to replace the authoring hostname and port with rendering server details:

    1. Add or update the following properties in `WCMConfigService`:

        ```properties
        dam.host.overwrite=<rendering-hostname>
        dam.host.overwrite.port=<rendering-port>
        ```

        For example:

        ```properties
        dam.host.overwrite=myserver.com
        dam.host.overwrite.port=3000
        ```

    2. Restart the DX Core JVM.

        When set, the REST API, WCM Authoring UI, and WCM API replace the authoring hostname and port in DAM references with the configured values. For example, if content syndicates from staging to production with `dam.host.overwrite=production.hcl.com` and `dam.host.overwrite.port=3000`:

        DAM receives:

        ```text
        [staging.hcl.com/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true](https://staging.hcl.com/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true)
        ```

        DAM returns:

        ```text
        [production.hcl.com:3000/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true](https://production.hcl.com:3000/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true)
        ```

- Configure `WCMConfigService` to convert DAM asset references to relative paths:

    1. Add or update the following property in `WCMConfigService`:

        ```properties
        dam.host.relative=true
        ```

    2. Restart the DX Core JVM.

        When set to `true`, the REST API, WCM Authoring UI, and WCM API strip the hostname and port from DAM references. For example, if content syndicates from staging to production with relative URLs enabled:

        DAM receives:

        ```text
        [staging.hcl.com/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true](https://staging.hcl.com/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true)
        ```

        DAM returns:

        ```text
        /dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true
        ```

## Setting up staging for hybrid deployments

The following sections also apply for hybrid deployments:

- [Configuring staging hostname](#configuring-staging-hostname)
- [Configuring LTPA token refresh time](#configuring-ltpa-token-refresh-time)
- [Configuring LDAP](#configuring-ldap)

### Creating Kubernetes secrets containing portal administrator credentials

Run the following command on each environment to create staging credentials:

```sh
kubectl -n <namespace> create secret generic <helm release name>-dam-staging \
--from-literal='username-<hostname1>'='<base64 encoded username from hostname1>' \
--from-literal='password-<hostname1>'='<base64 encoded password from hostname1>' \
--from-literal='username-<hostname2>'='<base64 encoded username from hostname2>' \
--from-literal='password-<hostname2>'='<base64 encoded username from hostname2>'
```

Secrets contain the username and password for each environment. Create secrets for additional hostnames based on the number of subscribers, and encode all credentials in base64.

### Registering the subscriber using REST API

1. Request an LTPA token using the [RingAPI `POST /auth/login` endpoint](https://opensource.hcltechsw.com/experience-api-documentation/ring-api/#operation/authLogin){target="_blank"}.

2. Register the subscriber using the [DAM API `POST /staging/subscriber` endpoint](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/#operation/StagingController.create){target="_blank"} on the publisher with the LTPA token you requested from Step 1. For example:

    ```json
    {
      "targetHost": "<kube-dam-subscriber-host-name>",
      "cycleLength": 2,
      "status": true
    }
    ```

3. (Optional) Verify registration using the [DAM API `GET /staging/subscriber` endpoint](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/#operation/StagingController.findAll){target="_blank"}.
