# Staging DAM to rendering environments

This topic contains the commands that administrators can use to configure the staging of [Digital Asset Management](../../index.md) (DAM) content. This allows you to manage subscriber registration or configure periodic sync.


## Differences between DAM staging and WCM syndication
!!! note
        WCM syndication and DAM staging are two distinct processes that have similar goals but just differ in some details. To learn more about differences have a look at the following table.
| Aspect                               | WCM                                  | DAM                                                        |
| -------------------------------------|--------------------------------------|------------------------------------------------------------|
| `Credentials for authentication` |Authentication via credentials Vault slot. |The credentials given during registration are stored as kube secrets and used for file transfer authentication and authorization from publisher to subscriber. The runtime-controller API stores portal user credentials as kube secret and WAS credentials are used to authenticate the runtime-controller API. For more information, see [Configure WAS Credentials](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_credentials.md).|
| `Configuration syndication` |WCM syndication can be configured via UI or REST API one time. Sync can be triggered via REST API or UI.|Subscriber can be configured by dxclient.|
| `Syndication ordering` |One-way or two-way syndication is possible, with one or many subscriber's resource. |DAM staging only supports one-way syndication.|
| `Different user repository support per environment` |Supported via member fixer in WCM|Not supported by DAM at this time |Not supported by DAM at this time.|


## DAM staging framework

The DAM staging framework allows you to stage your DAM content from an authoring environment (source environment/publisher) to multiple rendering environments (target environment/subscriber). Using [DXClient](https://help.hcltechsw.com/digital-experience/9.5/containerization/dxclient.html){:target="_blank"}, you can configure DAM staging to:

-   Trigger a manual staging or use periodic staging processes.
-   Set the cycle length (default: 2 minutes, maximum: 24 hours) for periodic sync.
-   Register a subscriber with a publisher.

    !!! note
        A subscriber must be registered with a publisher. Access rights to DAM staging assets are not transferred for subscribers who do not have the same DNS in both publisher and subscriber's Lightweight Directory Access Protocol (LDAP).

### Configure staging hostname
The hostname configuration for the DAM staging publisher and subscriber must be specified in the values.yaml file of HCL DX's helm charts. If the value is empty, the default host details will be the load balancer hostname. In case of a hybrid deployment, the hostname details must be specified.

!!! note
        In values.yaml, the host, port, and ssl settings can be configured under `networking.addon.digitalAssetManagement.staging`.
     
### Configure LTPA Token Refresh Time
LTPA token stored in cache refreshes every `5 minutes` by default.`ltpaTokenRefreshTimeInMinutes` can be configured in `values.yaml` under the `configurations` section of `digitalAssetManagement`.

```yaml
configuration:
  digitalAssetManagement:
    ltpaTokenRefreshTimeInMinutes: 5
```
`ltpaTokenRefreshTimeInMinutes` is a token refresh time configuration in minutes, which is passed to DAM as an environment variable.

### Configure LDAP

**DAM staging supports different LDAP for publisher and subscriber**: <br>
DAM staging will work with environments that use a different LDAP. LDAP user with portal admin rights can be used for stage registration.

### Credentials used during staging

**Registration and file transfer:** <br>
The portal admin user credentials should be used for staging registration and these credentials will be stored as kube secrets. The user credentials in the secret on the transferring server and the subscriber can be same or different.
The credentials used in the registration are used for authentication and authorization during DXClient registration, as well as for transferring files during staging.

**To update staging secret**:<br>
The `manage-dam-staging update-secrets` command can be used to update the publisher and subscriber staging secrets.

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

    Use this attribute to specify the protocol with which to connect to the DX server of the publisher (default: "")

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the host name of the DX server of the publisher (default: "")

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating with the DX server of the publisher (default: "")

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the DX server of the publisher <br/>
    (default: "")

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API version number of DAM of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API version number of DX Core of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIVersion <value>
    ```

    Use this attribute to specify the host name of the target environment of the subscriber:

    ```
    -targetHostname <value>
    ```

    Use this attribute to specify the interval between two sync cycles. The unit of interval is in minutes. (default: "2 minutes")

    ```
    -interval <value>
    ```

-   **Command:**

    ```
    dxclient manage-dam-staging trigger-staging -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -targetHostname <targetHostname>
    
    ```

    !!! example

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

    Use this attribute to specify the protocol with which to connect to the DX server of the publisher (default: "")

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the host name of the DX server of the publisher
    (default: "")

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating with the DX server of the publisher (default: "")

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the DX server of the publisher <br/> (default: "")

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API version number of DAM of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API version number of DX Core of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIVersion <value>
    ```

    Use this attribute to specify the host name of the target environment of the subscriber:

    ```
    -targetHostname <value>
    ```

    Use this attribute to specify the Username of the DX WAS server of the publisher(default: ""):
    
    ```
    -dxWASUsername <value>
    ```

    Use this attribute to specify the Password of the DX WAS server of the publisher(default: ""):
    
    ```
    -dxWASPassword <value>
    ```

    Use this attribute to specify the Username of the DX WAS server of the subscriber (default: ""):
    
    ```
    -targetServerWASUsername <value>
    ```

    Use this attribute to specify the Password of the DX WAS server of the subscriber (default: ""):
    
    ```
    -targetServerWASPassword <value>
    ```

    Use this attribute to specify the Username of the DX Core server of the subscriber (default: ""):
    
    ```
    -targetServerUsername <value>
    ```

    Use this attribute to specify the Password of the DX Core server of the subscriber (default: ""):
    
    ```
    -targetServerPassword <value>
    ```

    Use this attribute to specify the subscriber ID of the target environment of the subscriber:

    ```
    -subscriberId <value>
    ```

    Use this attribute to specify the interval between two sync cycles. The unit of interval is in minutes. (default: "2 minutes")

    ```
    -interval <value>
    ```

-   **Commands:**

    To register:

    ```
    dxclient manage-dam-staging register-dam-subscriber -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -dxWASUsername <dxWASUsername> -dxWASPassword <dxWASPassword> -targetServerWASUsername <targetServerWASUsername> -targetHostname <targetHostname> -targetServerWASPassword <targetServerWASPassword> -targetServerUsername <targetServerUsername> -targetServerPassword <targetServerPassword> -interval <interval>
    ```

    !!! example

        ```
        dxclient manage-dam-staging register-dam-subscriber -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -dxWASUsername xxxx -dxWASPassword xxxx -targetServerWASUsername xxxx -targetServerWASPassword xxxx -targetServerUsername xxxx -targetServerPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -targetHostname native-kube-dam-production.team-q-dev.com -interval 2
        ```

    To deregister:

    ```
    dxclient manage-dam-staging deregister-dam-subscriber -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -subscriberId <subscriberId>
    ```

    !!! example

        ```
        dxclient manage-dam-staging deregister-dam-subscriber -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -subscriberId d7e5e014-12a0-4dc5-a5d7-971fd4fa86f3
        ```

## Update secrets for DAM staging

Use the `manage-dam-staging update-secrets` command to update secrets of the publisher and subscriber for DAM staging.

-   **Command description**

    You can update the secrets of a publisher and subscriber for DAM staging with the following command:

    ```
    dxclient manage-dam-staging update-secrets
    ```

-   **Help command**

    The following command shows the help information for `manage-dam-staging update-secrets` command usage:

    ```
    dxclient manage-dam-staging update-secrets -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server of the publisher (default: ""):

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the host name of the DX server of the publisher (default: ""):

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating with the DX server of the publisher (default: ""):

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the DX server of the publisher <br/> (default: ""):

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API version number of DAM of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API version number of DX Core of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIVersion <value>
    ```

    Use this attribute to specify the host name of the target environment of the subscriber:

    ```
    -targetHostname <value>
    ```

    Use this attribute to specify the Username of the DX WAS server of the publisher(default: ""):
    
    ```
    -dxWASUsername <value>
    ```

    Use this attribute to specify the Password of the DX WAS server of the publisher(default: ""):
    
    ```
    -dxWASPassword <value>
    ```

    Use this attribute to specify the Username of the DX WAS server of the subscriber (default: ""):
    
    ```
    -targetServerWASUsername <value>
    ```

    Use this attribute to specify the Password of the DX WAS server of the subscriber (default: ""):
    
    ```
    -targetServerWASPassword <value>
    ```

    Use this attribute to specify the Username of the DX Core server of the subscriber (default: ""):
    
    ```
    -targetServerUsername <value>
    ```

    Use this attribute to specify the Password of the DX Core server of the subscriber (default: ""):
    
    ```
    -targetServerPassword <value>
    ```

-   **Commands:**

    ```
    dxclient manage-dam-staging update-secrets -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -dxWASUsername <dxWASUsername> -dxWASPassword <dxWASPassword> -targetServerWASUsername <targetServerWASUsername> -targetHostname <targetHostname> -targetServerWASPassword <targetServerWASPassword> -targetServerUsername <targetServerUsername> -targetServerPassword <targetServerPassword>
    ```

    !!! example

        ```
        dxclient manage-dam-staging update-secrets -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -dxWASUsername xxxx -dxWASPassword xxxx -targetServerWASUsername xxxx -targetServerWASPassword xxxx -targetServerUsername xxxx -targetServerPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -targetHostname native-kube-dam-production.team-q-dev.com
        ```

## Get all subscribers details for DAM staging


Use the `manage-dam-staging get-all-subscribers` command to get all the registered subscribers details for DAM staging.

-   **Command description**

    You can get all subscribers details for DAM staging with the following command:

    ```
    dxclient manage-dam-staging get-all-subscribers
    ```

-   **Help command**

    The following command shows the help information for `manage-dam-staging get-all-subscribers` command usage:

    ```
    dxclient manage-dam-staging get-all-subscribers -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server  of the publisher (default: "")

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the host name of the DX server of the publisher
     (default: "")

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating with the DX server of the publisher (default: "")

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the DX server of the publisher <br/>
    (default: "")

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API version number of DAM of the publisher 
    (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API version number of DX Core of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIVersion <value>
    ```

-   **Commands:**

    To get all subscribers details:

    ```
    dxclient manage-dam-staging get-all-subscribers -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion>
    ```

    !!! example

        ```
        dxclient manage-dam-staging get-all-subscribers -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1
        ```

!!! note
        Media assets and collections are not staged from publisher to subscriber if the media assets or collections exist with the same name and have a different unique id on the publisher and the subscriber servers.

        The following list enumerates the scenarios where items are not staged from publisher to subscriber:
        
        - Collection - When there is a same collection name on the same level, but a unique name in the entire set of collections
        - Media - When there is a same file name in the same collection 
        - Rendition - When there is a same custom URL in the entire set
        - Version - When the version is for a rendition (for example, v1, v2, v3)

        If items are not staged to the subscriber, you can find the respective log messages in the DAM logs of the subscriber.

## Using WCM with DAM staging

The typical setup involves a WCM staging/authoring server connected to DAM staging/authoring, and a separate WCM rendering connected to DAM rendering (there could be multiple WCM rendering/DAM rendering environments, for example, a Blue/Green setup).

Syndication is set up for WCM between staging/authoring and WCM rendering.

DAM staging is set up between DAM staging/authoring and DAM rendering.

**(Optional)** You can configure WCM `WCMConfigService` in the WAS Admin Console to allow switching the host name (and port) used for DAM references in WCM using the following:

```
dam.host.overwrite.port=... dam.host.overwrite=...
```

!!! example

    ```
    dam.host.overwrite=myserver.com
    dam.host.overwrite.port=3000
    ```

You must restart the DX Core JVM for changes to take effect.

**Effect**

If the properties are in place when using the REST API or WCM Admin UI or WCM API, the returned DAM references have the overwritten host name and port.

!!! example 
    If a content item is moved from the staging environment to production, and production has the host overwrite set to `production.hcl.com`, then all DAM references are returned with `production.hcl.com`. <br>For instance, `production.hcl.com/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true` even if we received the following from syndication: `staging.hcl.com/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true`.


**(Optional)** Starting with release 210 you can configure WCM `WCMConfigService` in the WAS Admin Console to use relative URLs for DAM references in WCM using the following:

```
dam.host.relative=true
```

!!! example

    ```
    dam.host.relative=true
    ```

You must restart the DX Core JVM for changes to take effect.

**Effect**

If the properties are in place when using the REST API or WCM Admin UI or WCM API, the returned DAM references have no hostname or port.

!!! example 
    If a content item is moved from the staging environment to production, and production has the relative URL option enabled, then all DAM references are returned relatively. <br>For instance, `/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true` even if we received the following from syndication: `staging.hcl.com/dx/api/dam/v1/collections/390e9808-a6d2-4ebe-b6fb-f10046ebf642/items/fd18083c-d84b-4816-af6e-583059c73122/renditions/7855bfae-d741-41f7-815f-d15f427a4da0?binary=true`.


