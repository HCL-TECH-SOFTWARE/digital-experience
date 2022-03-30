# Using DAM staging

This topic contains the commands that administrators can use to configure the staging of [Digital Asset Management](../digital_asset_mgmt/digital_asset_mgmt_overview.md) \(DAM\) content. This allows you to manage subscriber registration or configure periodic sync.

## DAM staging framework

The DAM staging framework allows you to stage your DAM content from an authoring environment \(source environment/publisher\) to multiple rendering environments \(target environment/subscriber\). Using [DXClient](dxclient.md), you can configure DAM staging to:

-   Trigger a manual staging or use periodic staging processes.
-   Set the cycle length \(default: 2 minutes, maximum: 24 hours\) for periodic sync.
-   Register a subscriber with a publisher.

    **Note:** A subscriber must be registered with a publisher. Access rights from DAM staging assets are not transferred for subscribers that do not share the same Lightweight Directory Access Protocol \(LDAP\).


![Use separate Digital Asset Management and staging between HCL DX environments](../images/new_dam_staging_options.png "Using separate Digital Asset Management and staging between HCL DX
                        environments")

## Manage DAM staging

Use the `manage-dam-staging trigger-staging` command to trigger DAM staging.

-   **Command description**

    You can trigger the DAM staging with the following command:

    ```
    dxclient manage-dam-staging trigger-staging
    ```

-   **Help command**

    This command shows the help information for `manage-dam-staging trigger-staging` command usage:

    ```
    dxclient manage-dam-staging trigger-staging -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server \(default: ""\)

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the host name of the DX server \(default: ""\)

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating with the DX server \(default: ""\)

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the DX Core \(default: ""\)

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API version number of DAM \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API version number of DX Core \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -ringAPIVersion <value>
    ```

    Use this attribute to specify the host name of the target environment:

    ```
    -targetHostname <value>
    ```

    Use this attribute to specify the interval between two sync cycles. The unit of interval is in minutes. \(default: "2 minutes"\)

    ```
    -interval <value>
    ```

-   **Command:**

    ```
    dxclient manage-dam-staging trigger-staging -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -targetHostname <targetHostname>
    
    ```

    **Example:**

    ```
    dxclient manage-dam-staging trigger-staging -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -targetHostname native-kube-dam-production.team-q-dev.com
    ```


## Registering or deregistering for DAM staging

Use the `manage-dam-staging **register**-dam-subscriber` command to register or the `manage-dam-staging **deregister**-dam-subscriber` command to deregister the subscriber for DAM staging.

-   **Command description**

    You can **register** a subscriber for DAM staging with the following command:

    ```
    dxclient manage-dam-staging register-dam-subscriber
    ```

    You can **deregister** a subscriber for DAM staging with the following command:

    ```
    dxclient manage-dam-staging deregister-dam-subscriber
    ```

-   **Help command**

    The following command shows the help information for `manage-dam-staging **register**-dam-subscriber` command usage:

    ```
    dxclient manage-dam-staging register-dam-subscriber -h
    ```

    The following command shows the help information for `manage-dam-staging **deregister**-dam-subscriber` command usage:

    ```
    dxclient manage-dam-staging deregister-dam-subscriber -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server \(default: ""\)

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the host name of the DX server \(default: ""\)

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating with the DX server \(default: ""\)

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the DX Core \(default: ""\)

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API version number of DAM \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API version number of DX Core \(default: ""; default port for any Kubernetes environment is 443\):

    ```
    -ringAPIVersion <value>
    ```

    Use this attribute to specify the host name of the target environment:

    ```
    -targetHostname <value>
    ```

    Use this attribute to specify the subscriber ID of the target environment:

    ```
    -subscriberId <value>
    ```

    Use this attribute to specify the interval between two sync cycles. The unit of interval is in minutes. \(default: "2 minutes"\)

    ```
    -interval <value>
    ```

-   **Commands:**

    To register:

    ```
    dxclient manage-dam-staging register-dam-subscriber -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -subscriberId <subscriberId>
    ```

    **Example:**

    ```
    dxclient manage-dam-staging register-dam-subscriber -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -targetHostname native-kube-dam-production.team-q-dev.com -interval 2
    ```

    To deregister:

    ```
    dxclient manage-dam-staging deregister-dam-subscriber -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -subscriberId <subscriberId>
    ```

    **Example:**

    ```
    dxclient manage-dam-staging deregister-dam-subscriber -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -subscriberId d7e5e014-12a0-4dc5-a5d7-971fd4fa86f3
    ```


## Using WCM with DAM staging

The typical setup involves a WCM staging/authoring server connected to DAM staging/authoring, and a separate WCM rendering connected to DAM rendering \(there could be multiple WCM rendering/DAM rendering environments, for example, a Blue/Green setup\).

Syndication is set up for WCM between staging/authoring and WCM rendering.

DAM staging is set up between DAM staging/authoring and DAM rendering.

**\(Optional\)** You can configure WCM `WCMConfigService` in the WAS Admin Console to allow switching the host name \(and port\) used for DAM references in WCM using the following:

```
dam.host.overwrite.port=... dam.host.overwrite=...
```

**For example:**

```
dam.host.overwrite=myserver.com
dam.host.overwrite.port=3000
```

You must restart the DX Core JVM for changes to take effect.

**Effect**:

If the properties are in place when using the REST API or WCM Admin UI or WCM API, the returned DAM references have the overwritten host name and port.

For example, if a content item is moved from the staging environment to production, and production has the host overwrite set to `production.hcl.com`, then all DAM references are returned with `production.hcl.com`. For instance, production.hcl.com/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true even if we received the following from syndication: staging.hcl.com/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true.

