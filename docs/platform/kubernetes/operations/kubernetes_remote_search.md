# Configure Remote Search in OpenShift and Kubernetes

This section shows how to configure Remote Search for your HCL Digital Experience 9.5 environments on supported Red Hat OpenShift and Kubernetes container platforms.

**Note:** Prior to Container Update CF195, the HCL Digital Experience 9.5 Remote Search image is supported for deployment to Red Hat OpenShift. With the Container Update CF195 release, Remote Search can be configured for deployment on supported Kubernetes platforms.

## Introduction

Using HCL Digital Experience 9.5 Remote Search images in the supported cloud container platforms, such as Red Hat OpenShift, require a different setup and configuration steps than those used to [set up Remote Search on a non-Docker or Kubernetes container platform](../admin-system/installrssman.md).

-   As information, the serverindex.xml file on the Remote Search server when deployed to on-premises environments may have a host name that is not accurate in a container environment with respect to the actual host name of the server hosting the Remote Search server.
-   Follow the guidance in this section to define collections in the core HCL DX 9.5 container environment with respect to JCR text search collections, rather than guidance published for the on-premises [\(non-Docker or Kubernetes\) platforms](../admin-system/srtcfg_jcr_colls.md) for the JCR collection URL.

## Deploying Remote Search in HCL Digital Experience 9.5 OpenShift and Kubernetes platforms

**Prerequisite**: Download the HCL Digital Experience 9.5 Docker containers from your HCL Digital Experience entitlements from the [HCL Software License Portal](https://www.hcltech.com/software/support/release).

The HCL DX 9.5 container update CF181 and later packages include a core software and Remote search container. Load both of these images into an OpenShift release platform supported by HCL DX 9.5 such as Red Hat OpenShift. Use CF195 and later if you deploy to a Kubernetes platform. See the following [Additional Routing Configuration for supported Kubernetes platforms](#addl_routing_config) topic for information about deploying to Kubernetes container platforms such as Amazon EKS, Azure AKS, or Google GKE.

In this example, the OpenShift load command can be used. Note that if your organization has a corporate OpenShift repository, you might use OpenShift pull instead to put it into your local repository.

```
hcl-dx-core-image-v95_CF181_xxxxxxxx-xxxx.tar.gz
```

```
hcl-dx-dxrs-image-v95_CF181_xxxxxxxx-xxxx.tar.gz
```

The first one \(dx-core-image\), is the core HCL DX 9.5 Portal and Web Content Manager image while the second one \(dx-dxrs-image\) is the remote search image.

After the Remote Search images are loaded to the Kubernetes environment that you deploy to, follow deployment steps for that platform presented in the **[HCL Digital Experience 9.5 Container Deployment](deployment.md)** topic pages.

## EJBs and host names

HCL Digital Experience 9.5 Container core and Portal Remote Search each use WebSphere Application Server as a base. As these components are on different hosts \(containers\), they need to communicate via IP. The initial conversation between HCL Digital Experience 9.5 core and the Remote Search server takes place over IIOP \(rmi\) which is the internet protocol of EJBs.

Ideally, the /etc/hosts file of both containers would have the host name of the other. In other words, the /etc/hosts file of the HCL Digital Experience Container core would have a host reference for the Remote Search and vice versa. However, three factors make this impossible. The containers are based on Red Hat UBI, the /etc/hosts file is owned by `root`, and the `root` password \(and `sudo`\) is not available. Apply the command below to define host references for the Remote Search service from the Digital Experience Container core. Therefore, a way to force the Kubernetes environment, such as Red Hat OpenShift to write the /etc/hosts file at container initialization time is needed.

HCL DX 9.5 Container operators that execute image deployment to Kubernetes platforms such as Red Hat OpenShift create the correct host-name in /etc/hosts for the local container. In addition, these operators execute a DNS resolution on foreign host-names as long as they are on the same Kubernetes deployment.

Portal and Portal Remote Search both use WebSphere Application Server as a base. As they are on different hosts \(containers\), they have to be able to talk to each other via IP. The initial conversation between Portal DX and the Remote Search server take place over IIOP \(rmi\) which is the internet protocol of EJBs.

## Defining serverindex.xml on the Remote Search server

When deploying the Remote Search image on supported Kubernetes platforms, additional configuration settings for the serverindex.xml are required. When deployed to Kubernetes, the HCL DX 9.5 container operators are configured to check to ensure that the server name is correct.

Note that dx-deployment-service-remotesearch is a DNS resolvable name from the point of view of the HCL Digital Experience 9.5 Server. The remote search server includes the “ping” command. You can use this to verify that the host name dx-deployment-service-remotesearch resolves to a valid IP address.

Now, when the HCL DX 9.5 server communicates to the Remote Search server over IIOP, the Remote Search Server returns dx-deployment-service-remotesearch as the host name of the Remote Search Server. The HCL DX 9.5 Server has configuration that appends the port to the host name that was just returned.

## Remote Search services configuration

The following guidance aligns with the Remote Search services configuration instructions available in the [Remote Search services](../admin-system/srcusgrmtsrchsrv.md) topic for deployment to non-container HCL Digital Experience servers.

All of the instructions contained in the [Remote Search services](../admin-system/srcusgrmtsrchsrv.md) topic must be completed in a Kubernetes container-based HCL Digital Experience deployment. The following guidance outlines specific settings that were used in the Remote Search service DX 9.5 image deployment to supported Kubernetes platforms.

1.  Create a single sign-on \(SSO\) domain between HCL Digital Experience 9.5 container and the Remote Search service container by following the non-container on-premises procedure for [Creating a single sign-on domain between HCL Portal and the Remote Search service](../../9.0/admin-system/sso_portal_rss.md). This entails exchanging SSL certificates and LTPA domain tokens.

    **Note:** When retrieving the SSL certificates from the host server, use the URL configuration host as defined in the table below \(dx-deployment-service-remotesearch\) as the host, and the appropriate port for the SSL access. You must also complete [Setting the search user ID](../../9.0/admin-system/srtsttusrid.md) and [Removing search collections](../../9.0/install/rmv_search_coll.md) before creating a new search service.

2.  Create a new search service and use the following values for a Remote Search services configuration to a Kubernetes container deployment. See the section on [Creating a new search service](../../9.0/admin-system/create_search_service.md) for more information.

    For testing **Search Services** configuration, the following are used:

    |Item|Value|
    |----|-----|
    |IIOP\_URL|iiop://dx-deployment-service-remotesearch:2809|
    |PSE TYPE|Select ejb from the pull down.|
    |EJB|ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome|
    |DefaultCollectionsDirectory|Leave empty.|
    |Search service implementation|Select Portal Search Service Type from the pull down.|
    |CONFIG\_FOLDER\_PATH|Did not set \(differs from non-container instructions\).|

    **Note:** Once completed and saved, the HCL Digital Experience 9.5 container deployment has a new search service called **Remote PSE service EJB**, with a green check mark confirming that the service was correctly set up and is able to communicate with the Remote Search container.

3.  Based on the previously created Remote Search service, create a **Portal Search Collection** and a **JCR Search Collection** using the following parameters.
    1.  Use the following parameters to create a [Portal search collection](../../9.0/admin-system/create_search_coll.md).

        |Parameter|Value|
        |---------|-----|
        |Search collection name|Portal Search Collection|
        |Search collection location|/opt/HCL/AppServer/profiles/prs\_profile/SearchCollections/PortalSearchCollection|

        **Note:** The “search collection location” is relative to the remote search container. Furthermore, one places the collection in the **profile** of the Remote Search server because the profile of the remote search server is persisted. One obviously wants the search indexes persisted across restarts.

    2.  Use the following parameters to create a Content Source [JCR search collection](../admin-system/srtcfg_jcr_colls.md).

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

**Note:** The host and port are the Kubernetes \(for example, Red Hat OpenShift \) service host and the port to which `10042` was mapped. In this case, `10042` is the `HttpQueueInboundDefaultSecure` port on the HCL DX 9.5 server. Note also that one can put this URL in a browser \(on the OpenShift host\) and confirm that the response is an ATOM feed.

On the **Security** panel, use `dx-deployment-service` as the host name, along with the username `wpsadmin` and the associated password for `wpsadmin`. One can also specify **Realm** as `CrawlerUsersRealm`

## Configure WCM Authoring Portlet search function

**Note:** Even though the documents are gathered by the Remote Search function from the JCR, additional configuration is needed in order for the HCL Web Content Manager \(WCM\) Authoring Portlet search to use document search. Set the following values for this configuration.

Set the **Custom properties** for the WebSphere Application Server Resource Environment Provider, **JCR ConfigService**, using the following values:

|Property|Value|
|--------|-----|
|jcr.textsearch.enabled|true|
|jcr.textsearch.indexdirectory|/opt/HCL/AppServer/profiles/prs\_profile/SearchCollections|
|jcr.textsearch.PSE.type|ejb|
|jcr.textsearch.EJB.IIOP.URL|iiop://dx-deployment-service-remotesearch:2809|
|jcr.textsearch.EJB.EJBName|ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome|

**Note:** On the **jcr.textsearch.indexdirectory**, the sub-directory JCRCollection1 is NOT included in the path.

## Additional Routing Configuration for supported Kubernetes platforms

To configure Remote Search to DX 9.5 container deployments to supported Kubernetes platforms: Amazon Elastic Kubernetes Service \(EKS\), Microsoft Azure Kubernetes Service \(AKS\), or Google Kubernetes Engine \(GKE\) requires specific steps. The HCL DX 9.5 core and Remote Search services each require `/ibm/console` as the route path when accessing the Admin Console. Due to the overlapping of the path mappings, to configure Remote Search, DX administrators can apply a solution to expose the Remote Search route via an additional Load balancer, as follows:

-   Create a new service for Remote Search with service type as Loadbalancer.

    **Note:** Do not alter the Remote Search Service created by the DX-Operator.


Sample Yaml:

```

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

![](../images/Container_deploy_redhat_openshift.png "Remote Search Routes ")

Access the Remote Search Admin Console via the external IP address of your DX 9.5 Container deployment:

Example: [https://35.xxx.174.3:9043/ibm/console](https://35.xxx.174.3:9043/ibm/console)

**Parent topic:**[Customizing your container deployment](../containerization/customization.md)

