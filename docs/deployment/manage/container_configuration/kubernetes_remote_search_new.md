# Configure Remote Search New

This section shows how to configure Remote Search for your HCL Digital Experience 9.5 environments. This guidance is for containerized deployments running on Kubernetes. If you are looking for guidance on configuration of Remote Search for non-containerized deployments, please see [Remote search service](../../../../build_sites/search/remotesearch/)


## Introduction

For using the HCL Digital Experience Search with multiple Pods of Core running, it is required to have Remote Search configured. Remote Search itself is provided as a singleton Pod that will provide all required functionality.

Both Core and Remote Search need to be configured in a certain way to allow a functional Remote Search setup.  
From release CF211 onwards, you can either use the automated configuration controlled via the Helm Chart deployment values or use the classic setup method using manual steps.

The configuration is a one-off process. Once you have Remote Search configured, the settings that were changed are persisted in the corresponding Pods Persistent Volumes and will persist after future updates to newer CF releases of HCL Digital Experience.

## Automated configuration

!!!note
    This feature is only available for HCL Digital Experience 9.5 CF211 and newer versions. If you are running on a previous version and want to configure Remote Search, please see the [Manual configuration](#manual-configuration) steps.


### Pre-requisites and limitations

Before you can leverage the automated configuration, you need to be aware on certain requirements and limitations that the automated configuration has:

- This configuration will only work in containerized deployments running on Kubernetes.
- The configuration of DX Core will not continue automatically if you have configured JCR Text Search or the surpression of automated default search collection creation 
- Both DX Core and DX Remote Search have their credentials configured correctly inside your `custom-values.yaml` used for the Helm deployment.

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

### Pre-requisites and limitations

### Configure the Remote Search Pod

### Configure the Core Pod

### Search Services and Collections


Using HCL Digital Experience 9.5 Remote Search images in the supported cloud container platforms, such as Red Hat OpenShift, require a different setup and configuration steps than those used to [set up Remote Search on a non-Docker or Kubernetes container platform](https://help.hcltechsw.com/digital-experience/9.5/admin-system/installrssman.html)<!-- (../admin-system/installrssman.md) -->.

-   As information, the serverindex.xml file on the Remote Search server when deployed to on-premises environments may have a host name that is not accurate in a container environment with respect to the actual host name of the server hosting the Remote Search server.
-   Follow the guidance in this section to define collections in the core HCL DX 9.5 container environment with respect to JCR text search collections, rather than guidance published for the on-premises [\(non-Docker or Kubernetes\) platforms](../../../build_sites/search/portal_search/administer_portal_search/setup_search_collections/jcr_search_collections/index.md)<!-- (../admin-system/srtcfg_jcr_colls.md) --> for the JCR collection URL.

## Deploying Remote Search in HCL Digital Experience 9.5 OpenShift and Kubernetes platforms

**Prerequisite**: Download the HCL Digital Experience 9.5 Docker containers from your HCL Digital Experience entitlements from the [HCL Software License Portal](https://www.hcltech.com/software/support/release){:target="_blank"}.

The HCL DX 9.5 container update CF181 and later packages include a core software and Remote search container. Load both of these images into an OpenShift release platform supported by HCL DX 9.5 such as Red Hat OpenShift. Use CF195 and later if you deploy to a Kubernetes platform. See the following [Additional Routing Configuration for supported Kubernetes platforms](#additional-routing-configuration-for-supported-kubernetes-platforms) topic for information about deploying to Kubernetes container platforms such as Amazon EKS, Azure AKS, or Google GKE.

In this example, the OpenShift load command can be used. Note that if your organization has a corporate OpenShift repository, you might use OpenShift pull instead to put it into your local repository.

```
hcl-dx-core-image-v95_CF181_xxxxxxxx-xxxx.tar.gz
```

```
hcl-dx-dxrs-image-v95_CF181_xxxxxxxx-xxxx.tar.gz
```

The first one \(dx-core-image\), is the core HCL DX 9.5 Portal and Web Content Manager image while the second one \(dx-dxrs-image\) is the remote search image.

After the Remote Search images are loaded to the Kubernetes environment that you deploy to, follow deployment steps for that platform presented in the [HCL Digital Experience 9.5 Container Deployment](../../install/container/helm_deployment/overview.md) topic.


## Remote Search services configuration

The following guidance aligns with the Remote Search services configuration instructions available in the [Remote Search services](https://help.hcltechsw.com/digital-experience/9.5/admin-system/srcusgrmtsrchsrv.html)<!-- (../admin-system/srcusgrmtsrchsrv.md) --> topic for deployment to non-container HCL Digital Experience servers.

All of the instructions contained in the [Remote Search services](https://help.hcltechsw.com/digital-experience/9.5/admin-system/srcusgrmtsrchsrv.html)<!-- (../admin-system/srcusgrmtsrchsrv.md) --> topic must be completed in a Kubernetes container-based HCL Digital Experience deployment. The following guidance outlines specific settings that were used in the Remote Search service DX 9.5 image deployment to supported Kubernetes platforms.

1.  Create a single sign-on \(SSO\) domain between HCL Digital Experience 9.5 container and the Remote Search service container by following the non-container on-premises procedure for [Creating a single sign-on domain between HCL Portal and the Remote Search service](https://help.hcltechsw.com/digital-experience/9.5/admin-system/sso_portal_rss.html)<!-- (../../9.0/admin-system/sso_portal_rss.md) -->. This entails exchanging SSL certificates and LTPA domain tokens.

    !!!note
        When retrieving the SSL certificates from the host server, use the URL configuration host as defined in the table below \(dx-deployment-service-remotesearch\) as the host, and the appropriate port for the SSL access. You must also complete [Setting the search user ID](https://help.hcltechsw.com/digital-experience/9.5/admin-system/srtsttusrid.html)<!-- (../../9.0/admin-system/srtsttusrid.md) --> and [Removing search collections](https://help.hcltechsw.com/digital-experience/9.5/install/rmv_search_coll.html)<!-- (../../9.0/install/rmv_search_coll.md) --> before creating a new search service.

2.  Create a new search service and use the following values for a Remote Search services configuration to a Kubernetes container deployment. See the section on [Creating a new search service](https://help.hcltechsw.com/digital-experience/9.5/admin-system/create_search_service.html)<!-- (../../9.0/admin-system/create_search_service.md) --> for more information.

    For testing **Search Services** configuration, the following are used:

    |Item|Value|
    |----|-----|
    |IIOP\_URL|iiop://dx-deployment-service-remotesearch:2809|
    |PSE TYPE|Select ejb from the pull down.|
    |EJB|ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome|
    |DefaultCollectionsDirectory|Leave empty.|
    |Search service implementation|Select Portal Search Service Type from the pull down.|
    |CONFIG\_FOLDER\_PATH|Did not set \(differs from non-container instructions\).|

    !!!note
        Once completed and saved, the HCL Digital Experience 9.5 container deployment has a new search service called **Remote PSE service EJB**, with a green check mark confirming that the service was correctly set up and is able to communicate with the Remote Search container.

3.  Based on the previously created Remote Search service, create a **Portal Search Collection** and a **JCR Search Collection** using the following parameters.
    1.  Use the following parameters to create a [Portal search collection](https://help.hcltechsw.com/digital-experience/9.5/admin-system/create_search_coll.html)<!-- (../../9.0/admin-system/create_search_coll.md) -->.

        |Parameter|Value|
        |---------|-----|
        |Search collection name|Portal Search Collection|
        |Search collection location|/opt/HCL/AppServer/profiles/prs\_profile/SearchCollections/PortalSearchCollection|

        !!!note
            The “search collection location” is relative to the remote search container. Furthermore, one places the collection in the **profile** of the Remote Search server because the profile of the remote search server is persisted. One obviously wants the search indexes persisted across restarts.

    2.  Use the following parameters to create a Content Source [JCR search collection](https://help.hcltechsw.com/digital-experience/9.5/admin-system/srtcfg_jcr_colls.html)<!-- (../admin-system/srtcfg_jcr_colls.md) -->.

        The **Collect documents linked from this URL** is

        ```
        https://dx-deployment-service:10042/wps/seedlist/myserver?Source=com.ibm.lotus.search.plugins.seedlist.retriever.portal.PortalRetrieverFactory&Action=GetDocuments&Range=100&locale=en-US
        ```

        Note that the host and port are the Kubernetes \(for example, Red Hat OpenShift\) service host and the port to which `10042` was mapped. In this case, `10042`is the `HttpQueueInboundDefaultSecure` port on the HCL DX 9.5 Server. Note also that one can put this URL in a browser \(on the OpenShift host\) and confirm that the response is an ATOM feed.

        On the **Security** panel, use `dx-deployment-service` as the host name, along with the username `wpsadmin` and the associated password for `wpsadmin`. One can also specify **Realm** as `CrawlerUsersRealm`

        Complete the following configuration parameters to enable search in the **Web Content Manager Authoring i**interfaces:

        |Parameter|Value|
        |---------|-----|
        |Search collection name|JCRCollection1|
        |Search collection location|/opt/HCL/AppServer/profiles/prs\_profile/SearchCollections/JCRCollection1|


## JCR Content Source Configuration

Use the following URL for **Collect documents linked from this URL**:

```
https://dx-deployment-service:10042/wps/seedlist/myserver?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=1@OOTB_CRAWLER1
```

The parsing of the `SeedlistId` positional parameter in this URL uses an index of the virtual portal being crawled. In this case `1` \(in 2 places\) represents the `base` virtual portal.

!!!note
    The host and port are the Kubernetes \(for example, Red Hat OpenShift \) service host and the port to which `10042` was mapped. In this case, `10042` is the `HttpQueueInboundDefaultSecure` port on the HCL DX 9.5 server. Note also that one can put this URL in a browser \(on the OpenShift host\) and confirm that the response is an ATOM feed.

On the **Security** panel, use `dx-deployment-service` as the host name, along with the username `wpsadmin` and the associated password for `wpsadmin`. One can also specify **Realm** as `CrawlerUsersRealm`

## Configure WCM Authoring Portlet search function

!!!note
    Even though the documents are gathered by the Remote Search function from the JCR, additional configuration is needed in order for the HCL Web Content Manager \(WCM\) Authoring Portlet search to use document search. Set the following values for this configuration.

Set the **Custom properties** for the WebSphere Application Server Resource Environment Provider, **JCR ConfigService**, using the following values:

|Property|Value|
|--------|-----|
|jcr.textsearch.enabled|true|
|jcr.textsearch.indexdirectory|/opt/HCL/AppServer/profiles/prs\_profile/SearchCollections|
|jcr.textsearch.PSE.type|ejb|
|jcr.textsearch.EJB.IIOP.URL|iiop://dx-deployment-service-remotesearch:2809|
|jcr.textsearch.EJB.EJBName|ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome|

!!!note
    On the **jcr.textsearch.indexdirectory**, the sub-directory JCRCollection1 is NOT included in the path.

## Additional Routing Configuration for supported Kubernetes platforms

To configure Remote Search to DX 9.5 container deployments to supported Kubernetes platforms: Amazon Elastic Kubernetes Service \(EKS\), Microsoft Azure Kubernetes Service \(AKS\), or Google Kubernetes Engine \(GKE\) requires specific steps. The HCL DX 9.5 core and Remote Search services each require `/ibm/console` as the route path when accessing the Admin Console. Due to the overlapping of the path mappings, to configure Remote Search, DX administrators can apply a solution to expose the Remote Search route via an additional Load balancer, as follows:

-   Create a new service for Remote Search with service type as Loadbalancer.

    !!!note
        Do not alter the Remote Search Service created by the DX-Operator.


Sample Yaml:

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
  app: dx-deployment-remotesearch
  release: dx-deployment
  name: dx-deployment-service-remotesearch-lb
spec:
  ports:
  - name: was-admin
    port: 9060
    protocol: TCP
    targetPort: 9060
  - name: was-admin-sec
    port: 9043
    protocol: TCP
    targetPort: 9043
  - name: boot-port
    port: 2809
    protocol: TCP
    targetPort: 2809
  - name: rs-port
    port: 9403
    protocol: TCP
    targetPort: 9403
  selector:
    app: dx-deployment-remotesearch
  sessionAffinity: None
  type: LoadBalancer
```

Apply this configuration using the following example command:

```
$ kubectl apply -f filename.yaml
```

Remote Search Routes \(example results\):

![](../../../images/Container_deploy_redhat_openshift.png "Remote Search Routes ")

Access the Remote Search Admin Console via the external IP address of your DX 9.5 Container deployment:

Example: `https://35.xxx.174.3:9043/ibm/console`



