# Configure Remote Search New

This section shows how to configure Remote Search for your HCL Digital Experience 9.5 environments. This guidance is for containerized deployments running on Kubernetes. If you are looking for guidance on configuration of Remote Search for non-containerized deployments, please see [Remote search service](../../../../build_sites/search/remotesearch/)


## Introduction

For using the HCL Digital Experience Search with multiple Pods of Core running, it is required to have Remote Search configured. Remote Search itself is provided as a singleton Pod that will provide all required functionality.

Both Core and Remote Search need to be configured in a certain way to allow a functional Remote Search setup.  
From release CF211 onwards, you can either use the automated configuration controlled via the Helm Chart deployment values or use the classic setup method using manual steps.

The configuration is a one-off process. Once you have Remote Search configured, the settings that were changed are persisted in the corresponding Pods Persistent Volumes and will persist after future updates to newer CF releases of HCL Digital Experience.

!!!warning
    If you have configured search collections already and want them and their index backed up, see the topic [Exporting and importing search collections](../../../../build_sites/search/portal_search/administer_portal_search/setup_search_collections/srtexpimp/) for further information.  

    The process of configuring Remote Search will include deleting the default Search Service and its corresponding Search collections.

!!!tip
    This guide uses `kubectl` for all commands that are related to Kubernetes. If you are Running on OpenShift, you can replace the `kubectl` command if `oc`.

## Automated configuration

!!!note
    This feature is only available for HCL Digital Experience 9.5 CF211 and newer versions. If you are running on a previous version and want to configure Remote Search, please see the [Manual configuration](#manual-configuration) steps.

### Pre-requisites and limitations

Before you can leverage the automated configuration, you need to be aware on certain requirements and limitations that the automated configuration has:

- This configuration will only work in containerized deployments running on Kubernetes.
- The configuration of DX Core will not continue automatically if you have configured JCR Text Search or the surpression of automated default search collection creation 
- Both DX Core and DX Remote Search have their credentials configured correctly inside your `custom-values.yaml` used for the Helm deployment.
- There is currently no ConfigEngine task or similar being performed on either DX Core or DX Remote Search Pods

### Configuration properties

To leverage the automated configuration, you will need to adjust the `custom-values.yaml` that you are using for your Helm deployment. (See [Custom value files](../../../install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/#custom-value-files)).

Inside your `custom-values.yaml` you can configure the following section to leverage Remote Search automated configuration:

```yaml
# Configuration section of hcl-dx-deployment
configuration:
  # Remote Search specific configuration parameters
  remoteSearch:
    # If set to true, Remote Search will be configured automatically
    autoConfigure: true
    # Define Maximum time (in seconds) that DX Core will wait for the Remote Search Pod to run its configuration tasks
    coreWaitTime: 5400
    # Define Maximum time (in seconds) that DX Remote Search will wait for the Core Pod to run its configuration tasks
    remoteSearchWaitTime: 5400
    # Define the maximum amount of retries that DX Remote Search will attempt to run its configuration task
    remoteSearchConfigTries: 10
```

The following parameters are available for adjustments:

| Parameter | Possible values | Explanation |
| -- | -- | -- |
| `autoConfigure` | `true` or `false`(default) | This will enable or disable the automated configuration. After this value is set and the new `custom-values.yaml` is applied, the Pod restart of Core and Remote Search will handle the automated configuration. |
| `coreWaitTime` | Number, seconds (`5400` is default) | Since Core and Remote Search are depending on each other for this configuration process, Core will have to wait for Remote Search to finish its configuration. Based on the performance of the environment that HCL Digital Experience is deployed on, this configuration process time will vary. |
| `remoteSearchWaitTime` | Number, seconds (`5400` is default) | Since Core and Remote Search are depending on each other for this configuration process, Remote Search will have to wait for Core to finish its configuration and start its JVM in the background (See [Configuration flow](#configuration-flow)). |
| `remoteSearchConfigTries` | Number (`10` is default) | Remote Search will attempt a retry of its configuration tasks if the Core Pod is not reachable during the configuration process. This parameter limits the amount of retries until Remote Search will continue with a regular startup without a successful configuration. |

It is recommended to have generous wait time values, as not waiting long enough by either of the applications may cause the configuration to fail.  

The given values should suffice for general deployments, but if you are applying those changes directly during a update from on CF to a newer one, it will be good to increase those values based on experienced startup times in your deployment.

If the configuration process fails due to too low wait time values check the [Troubleshooting](#troubleshooting) section that contains steps to re-trigger the configuration process.

### Apply configuration

After you have adjusted your `custom-values.yaml` with the settings mentioned in the previous sections, you can use `helm upgrade` with the reference to your `custom-values.yaml` if you have an existing deployment you want to configure. If you are deploying fresh, you can 

This will apply the new configuration and the (re-)start of both the Remote Search and Core Pods will perform the steps necessary to their respective configuration.

### Configuration flow

This sections explains the flow that occurs when the automated configuration is performed. This section does not contain any steps that are required to be executed by you and just serves as information material.

#### Phase 1: Startup

After the automated configuration has been enabled via the Helm values, both DX Core and DX Remote Search Statefulsets will be updated / created.

In case of an existing deployment that is re-configured, both the DX Core and DX Remote Search Pods will get restarted.  
After the Pod start, both will run their usual startup routine and then enter a specific Remote Search configuration logic.
All log messages relevant to those actions will be prefixed with `[RS Autoconfig]`.

#### Phase 2: Core Pod Stand-By, Remote Search waiting for Core Pod

To perform the automated configuration of Remote Search, the DX Core Pod will go into a stand-by mode.  
In this mode, it will start up the DX Core JVM, but will not set the Pod to ready. This ensures that no active traffic is routed to this Core Pod during the configuration steps (incl. JVM restarts).
The DX Core Pod will remain in that mode until the DX Remote Search Pod becomes ready or the wait time expires (defined by `coreWaitTime` in the [Configuration properties](#configuration-properties) section).

The DX Remote Search Pod will wait for a DX Core Pod with a running background JVM and detect a suitable candidate.

Once the DX Remote Search Pod found a viable DX Core Pod, it will continue with the configuration tasks that are required. This includes:

- Remotely retrieving the LTPA Token from the DX Core Pod for SSO
- Remotely retrieving the DX Core Pods SSL Certificate for trusted communication
- Setting up the serverindex file
- Importing the DX Core LTPA Token into the DX Remote Search WAS

If during that configuration step any issue occurs, this is likely due to DX Core being restarted or the designated DX Core Pod not being available anymore.  
In that case, DX Remote Search will retry the configuration, starting with the search for a viable DX Core Pod again.  

The retry count is limited by the `remoteSearchConfigTries` property described in the [Configuration properties](#configuration-properties) section.

After finishing all configuration tasks, DX Remote Search will re-enter its regular startup routine and become ready.

#### Phase 3: Remote Search finished, Core Pod configuration

Once the DX Remote Search Pod becomes ready, DX Core will notice that and continue with its Remote Search configuration steps. If DX Remote Search does not get ready in time (defined by `coreWaitTime` in the [Configuration properties](#configuration-properties) section), the regular startup will continue.

Before running the configuration, the configuration logic will check if:

- The JCR Text Search configuration
- The surpression of automated default search collection creation

are enabled. This could be a sign of Remote Search being already configured.

If those settings are set, the configuration will not continue. To override this manually, see the [Troubleshooting](#troubleshooting) section.

The configuration steps in DX Core include:

- Remotely retrieving the DX Remote Search SSL Certificate for trusted communication
- Enabling surpression of automated default search collection creation
- Configuration for JCR Text Search
- Deletion of the Default Search Service
- Creation of a Remote Search Service
- Creation of Search Collections (Portal and JCRCollection1) incl. their providers

After these configuration steps are performed, the DX Core Pod will continue with its regular startup routine.

#### Phase 4: Configuration completed

After all configuration steps have been performed, the new Search Service with the new Search Collections are configured. You can see them in the Search Administration.  

Next Pod restarts will automatically recognize that the automated configuration has already been performed and will not run any additional steps.

### Troubleshooting

All steps performed via the automated configuration are safe to be run multiple times. This means re-running the configuration after a failed attempt is generally considered safe.

#### Logs

If you want to see what went wrong during the configuration, look in the logs of both the DX Core Pod and the DX Remote Search Pod for messages prefixed with `[RS Autoconfig]`. The startup routines perform verbose logging that clearly states which steps have been performed. There is no additional log setting required to enable the log messages from the automated configuration.

#### Adjusting timeouts

It may be that in your environment, the startup of DX Core or DX Remote Search take longer than 90 minutes. If that is the case, adjust the timeout wait times in the [Configuration properties](#configuration-properties) section.

After adjusting these properties, you can re-run the automated configuration.

#### Overriding pre-flight checks

If case you have at some point configured either the surpression of automated default search collection creation or the JCR Text Search, but not configured Remote Search yet, you can override the pre-flight checks that would cause the configuration to not continue in that case.

To do so, connect into the DX Core Pod and create a file. See the following example:

```sh
# Connect into your DX Core Pod
# adjust the deployment prefix "dx" and the namespace "dxns" to match your environment
kubectl exec -it -n dxns dx-core-0 -c core -- /bin/bash
# Create the preflight check override file
# This file is persisted in the DX Core Pods Persistent Volume
touch /opt/HCL/wp_profile/rsAutoConfigOverridePreflight
```

If your automated configuration has failed due to those checks, you can re-run it using the commands from the next section.

#### Re-run automated configuration steps

In case your automated configuration failed, you can easily re-run it using the following procedure:

Remove the configuration semaphore file in the DX Core Pod:

```sh
# Connect into your DX Core Pod
# adjust the deployment prefix "dx" and the namespace "dxns" to match your environment
kubectl exec -it -n dxns dx-core-0 -c core -- /bin/bash
# Remove the config status semaphore file
rm -f /opt/HCL/wp_profile/rsAutoConfigStatus
```

Remove the configuration semaphore file in the DX Remote Search Pod:

```sh
# Connect into your DX Remote Search Pod
# adjust the deployment prefix "dx" and the namespace "dxns" to match your environment
kubectl exec -it -n dxns dx-remote-search-0 -c remote-search -- /bin/bash
# Remove the config status semaphore file
rm -f /opt/HCL/AppServer/profiles/prs_profile/rsAutoConfigStatus
```

Perform a restart rollout of DX Core and DX Remote Search:

```sh
# Perform the restart of DX Remote Search
# adjust the deployment prefix "dx" and the namespace "dxns" to match your environment
kubectl rollout restart statefulset dx-remote-search -n dxns
# Perform the restart of DX Core
# adjust the deployment prefix "dx" and the namespace "dxns" to match your environment
kubectl rollout restart statefulset dx-core -n dxns
```

## Manual configuration

For manual configuration, you can rely on existing ConfigEngine tasks that will assist you in configuration of both the DX Core Pod and the DX Remote Search Pod.

### Pre-requisites and limitations

- This configuration will is intended for containerized deployments running on Kubernetes.
- Both DX Core and DX Remote Search have their credentials configured correctly inside your `custom-values.yaml` used for the Helm deployment.
- There is currently no ConfigEngine task or similar being performed on either DX Core or DX Remote Search Pods
- Both DX Core and DX Remote Search are deployed in your environment and the Pods are up and ready.

### Configure the Core Pod

Execute the ConfigEngine task:

```sh
# Connect into your DX Core Pod
# adjust the deployment prefix "dx" and the namespace "dxns" to match your environment
kubectl exec -it -n dxns dx-core-0 -c core -- /bin/bash
# Inside the container execute the ConfigEngine task
# make sure that your deployment prefix (dx in this sample, e.g. dx-remote-search) is adjusted to your environment
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh configure-portal-for-remote-search -DWasPassword=[WAS ADMIN PASSWORD] -Dremote.search.host.name="dx-remote-search" -Dremote.search.host.port="9043" -Dremote.search.cert.alias="remotesearchalias" -Dremote.search.iiop.url="iiop://dx-remote-search:2809" -Dremote.search.index.directory="/opt/HCL/AppServer/profiles/prs_profile/SearchCollections
```

After this ConfigEngine task has been executed, a file containing the LTPA Key export will be created inside the Container.  
Copy that file out of the Container into your local host:

```sh
# Copy out the LTPA key export
# adjust the deployment prefix "dx" and the namespace "dxns" to match your environment
kubectl cp dx-core-0:/home/dx_user/LTPAKeyExported ./LTPAKeyExported -c core -n dxns
```

### Configure the Remote Search Pod



### Restart both Core and Remote Search

### Search Services and Collections

#### New Search Service

Create a new search service and use the following values for a Remote Search services configuration to a Kubernetes container deployment. See the section on [Creating a new search service](https://help.hcltechsw.com/digital-experience/9.5/admin-system/create_search_service.html)<!-- (../../9.0/admin-system/create_search_service.md) --> for more information.

For **Search Services** configuration, the following values are used:

|Item|Value|
|----|-----|
|IIOP_URL|`iiop://dx-remote-search:2809`|
|PSE TYPE|Select ejb from the pull down.|
|EJB|`ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome`|
|DefaultCollectionsDirectory|Leave empty.|
|Search service implementation|Select Portal Search Service Type from the pull down.|
|CONFIG_FOLDER_PATH|Did not set (differs from non-container instructions).|

!!!tip
    Take care when defining the `IIOP_URL` parameter, as the target URL is the Service of Remote Search inside your Kubernetes deployment. The prefix `dx-deployment` may be different in your deployment scenario and is based on the deployment name chosen during the `helm install` command.

!!!note
    Once completed and saved, the HCL Digital Experience 9.5 container deployment has a new search service called **Remote PSE service EJB**, with a green check mark confirming that the service was correctly set up and is able to communicate with the Remote Search container.

#### New Search Collections

Based on the previously created Remote Search service, create a **Portal Search Collection** and a **JCR Search Collection** using the following parameters.

##### Portal Search Collection

Use the following parameters to create a [Portal search collection](https://help.hcltechsw.com/digital-experience/9.5/admin-system/create_search_coll.html)<!-- (../../9.0/admin-system/create_search_coll.md) -->.

|Parameter|Value|
|---------|-----|
|Search collection name|`Portal Search Collection`|
|Search collection location|`/opt/HCL/AppServer/profiles/prs_profile/SearchCollections/PortalSearchCollection`|

!!!note
    The `Search collection location` is relative to the remote search container. Furthermore, one places the collection in the **profile** of the Remote Search server because the profile of the remote search server is persisted. One obviously wants the search indexes persisted across restarts.

Create the two following Content Sources:

###### Portal Content Source

|Parameter|Value|
|---------|-----|
|Content Source Type|Portal Site|
|Content Source Name|Portal Content Source|
|Collect documents linked from this URL|`https://dx-core-service:10042/wps/seedlist/myserver?Source=com.ibm.lotus.search.plugins.seedlist.retriever.portal.PortalRetrieverFactory&Action=GetDocuments&Range=100`|

In the `Security` panel, use the DX Core Service name (e.g. `dx-core`) as the host name, along with the username `wpsadmin` and the associated password for `wpsadmin`. You can also specify Realm as CrawlerUsersRealm.

!!!tip
    Note: The host `dx-core` and port `10042` are the Kubernetes service host and the port for DX Core. In this case, 10042 is the HttpQueueInboundDefaultSecure port on the HCL DX 9.5 server. Adjust this according to your deployment configuration.

###### WCM Content Source

|Parameter|Value|
|---------|-----|
|Content Source Type|Seedlist provider|
|Content Source Name|Portal Content Source|
|Collect documents linked from this URL|`https://dx-core-service:10042//wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments`|

In the `Security` panel, use the DX Core Service name (e.g. `dx-core`) as the host name, along with the username `wpsadmin` and the associated password for `wpsadmin`. You can also specify Realm as CrawlerUsersRealm.

!!!tip
    Note: The host `dx-core` and port `10042` are the Kubernetes service host and the port for DX Core. In this case, 10042 is the HttpQueueInboundDefaultSecure port on the HCL DX 9.5 server.  Adjust this according to your deployment configuration.

##### JCR Search Collection

Use the following parameters to create a Content Source [JCR search collection](https://help.hcltechsw.com/digital-experience/9.5/admin-system/srtcfg_jcr_colls.html)<!-- (../admin-system/srtcfg_jcr_colls.md) -->.

|Parameter|Value|
|---------|-----|
|Search collection name|`JCRCollection1`|
|Search collection location|`/opt/HCL/AppServer/profiles/prs_profile/SearchCollections/JCRCollection1`|

!!!note
    The `Search collection location` is relative to the remote search container. Furthermore, one places the collection in the **profile** of the Remote Search server because the profile of the remote search server is persisted. One obviously wants the search indexes persisted across restarts.

Create the following Content Source:

###### JCR Content Source

|Parameter|Value|
|---------|-----|
|Content Source Type|Seedlist provider|
|Content Source Name|Portal Content Source|
|Collect documents linked from this URL|`https://dx-core:10042/wps/seedlist/myserver?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=1@OOTB_CRAWLER1`|

In the `Security` panel, use the DX Core Service name (e.g. `dx-core`) as the host name, along with the username `wpsadmin` and the associated password for `wpsadmin`. You can also specify Realm as CrawlerUsersRealm.

!!!tip
    Note: The host `dx-core` and port `10042` are the Kubernetes service host and the port for DX Core. In this case, 10042 is the HttpQueueInboundDefaultSecure port on the HCL DX 9.5 server.  Adjust this according to your deployment configuration.

!!!note
    The parsing of the `SeedlistId` positional parameter in this URL uses an index of the virtual portal being crawled. In this case 1 (in 2 places) represents the base virtual portal.


