# Configure Remote Search in Docker

This section shows how to configure Remote Search for your HCL Digital Experience 9.5 Docker containers.

## Introduction

To support search services when deployed to Docker container platforms in Kubernetes, administrators should configure Remote Search services. This requires a different setup and configuration steps than those used to [set up Remote Search on a non-Docker container platform](../admin-system/installrssman.md).

Some differences in the non-Docker container platform procedures are outlined below:

-   The serverindex.xml file on the Remote Search server when deployed to on-premises environments may have a host name that is not accurate in a container environment with respect to the actual host name of the server hosting the Remote Search server.
-   Since Docker dynamically allocates the host names for the containers, the /etc/hosts file doesn’t have static entries for the HCL Digital Experience 9.5 container-based server nor the Remote Search server.
-   The WebSphere Application Server ND Administration console will not have correct host names for the HCL Digital Experience container.

## Deploying Remote Search in HCL Digital Experience 9.5 Docker containers

**Prerequisite**: Download the HCL Digital Experience 9.5 Docker containers from your HCL Digital Experience entitlements from the [HCL Software License Portal](https://www.hcltech.com/software/support/release).

The HCL DX 9.5 container update CF181 and higher packages will include a core software and Remote search container. Load both of these images into your Docker repository via the “docker load” command. Note that if your organization has deployed these containers to a corporate Docker repository, you might use “docker pull” instead to put it into your local repository.

In this example, two Docker images and names are referred to. If a higher HCL Digital Experience 9.5 Container Update release is used, for example, HCL Digital Experience 9.5 CF181, the image names may vary.

```
hcl-dx-core-image-v95_CF181_xxxxxxxx-xxxx.tar.gz
```

```
hcl-dx-dxrs-image-v95_CF181_xxxxxxxx-xxxx.tar.gz
```

## EJBs and host names

HCL Digital Experience 9.5 Container core and Portal Remote Search each use WebSphere Application Server as a base. As these components are on different hosts \(containers\), they need to communicate via IP. The initial conversation between HCL Digital Experience 9.5 core and the Remote Search server takes place over IIOP \(rmi\) which is the internet protocol of EJBs.

Ideally, the /etc/hosts file of both containers would have the host name of the other. In other words, the /etc/hosts file of the HCL Digital Experience Container core would have a host reference for the Remote Search and vice versa. However, three factors make this impossible. The containers are based on Red Hat UBI, the /etc/hosts file is owned by `root`, and the `root` password \(and `sudo`\) is not available. Apply the command below to define host references for the Remote Search service from the Digital Experience Container core. Therefore, a way to force Docker to write the /etc/hosts file at container initialization time is needed.

This is done via the Docker switch `add-host`.

The situation is further complicated \(at least on Linux\) by the fact that containers on the default bridge network of Docker cannot DNS name resolve other containers on the same subnet. Therefore, one uses the Docker host as a proxy and starts both containers with the following:

```
docker run –add-host=dockerhost:172.19.0.1 …
```

This has the effect of adding an entry in the /etc/hosts file on the HCL Digital Experience 9.5 Container core like this:

```
172.19.0.1 dockerhost
```

Those familiar with Docker deployment practices will recognize `171.19.0.1` as the IP bridge address of the host machine that starts the Docker containers. Since all Docker containers have unique ports and the Docker host machine is not allowed to use these unique ports, one can refer to a port on any container as `dockerhost:port_number`.

## Launch the HCL Digital Experience 9.5 Core and Remote Search containers

To deploy, following is the complete `docker run` command for both the HCL Digital Experience 9.5 Core and Remote Search containers. In these examples, `wpsadmin / wpsadmin` are used as the HCL Digital Experience and WebSphere Application Server admin user ID and password credentials.

```
docker run --add-host=dockerhost:172.19.0.1 -d -e WAS_ADMIN=wpsadmin -e WAS_PASSWORD=wpsadmin -e DX_ADMIN=wpsadmin -e DX_PASSWORD=wpsadmin -p 9043:9043 -p 9403:9403 -p 2809:2809 -p 9060:9060 -v /home/dxengineer/Documents/prs_profile:/opt/HCL/AppServer/profiles/prs_profile hcl/dx/dxrs:v95_CF181_20200622-1550
```

```
docker run --add-host=dockerhost:172.19.0.1 -d -e WAS_ADMIN=wpsadmin -e WAS_PASSWORD=wpsadmin -e DX_ADMIN=wpsadmin -e DX_PASSWORD=wpsadmin -p 10038:10038 -p 10039:10039 -p 10041:10041 -p 10042:10042 -v /home/dxengineer/Documents/wp_profile:/opt/HCL/wp_profile hcl/dx/core:v95_CF181_20200622-1550
```

The persisted profile for each container is located at /home/dxengineer/Documents/. The HCL Digital Experience admin username and password are passed as environment variables.

## Defining serverindex.xml on the Remote Search server

On the HCL DX 9.5 container Remote search server, the serverindex.xml file is located at:

```
/opt/HCL/AppServer/profiles/prs_profile/config/cells/{cell name}/nodes/{node name}
```

Note that immediately after the Remote Search server is started \(and since the profile is persisted on a persisted sub-directory\), this file can be found at:

```
{persisted volume for remote search profile}/prs_profile/config/cells/{cell name}/nodes/{node name}
```

The serverindex.xml file contains 5 lines:

```
host=”{some hostname}”
```

where `{some hostname}` might likely be `"localhost"` or some host name like `“33b7e5004319”`. However, remote search will not work correctly until this host name field is replaced with a host name exactly like the host name in the “iiop” url in the search service is coded. So, for example, if your Portal search service has coded the "iiop" URL as `“iiop://some.host.com:2809”`, the `host` in serverindex.hml needs to be `host=”some.host.com”`. It could be that your "iiop" url has the host name `"dockerhost"` if your iiop url lets your docker host route that URL.

In that case, change these 5 lines to the following:

```
host=”dockerhost” (apply the string “dockerhost”)
```

Upon completion, when the HCL Digital Experience 9.5 Container core server communicates to the container Remote Search server over "iiop", the Remote Search server will return `“dockerhost”` as the host name of the Remote Search server. The HCL Digital Experience 9.5 Container has a configuration that will append the port to the host name that was just returned.

## Digital Experience instructions for Remote Search configuration

The following guidance aligns with the Remote Search services configuration instructions available in the [Remote Search services](https://help.hcltechsw.com/digital-experience/9.0/admin-system/srcusgrmtsrchsrv.md) topic for deployment to non-container HCL Digital Experience servers.

All of the instructions contained in the [Remote Search services](https://help.hcltechsw.com/digital-experience/9.0/admin-system/srcusgrmtsrchsrv.md) topic should also be completed in a Docker-based HCL Digital Experience deployment. The following guidance outlines specific settings that were used in the Remote Search service DX Docker deployment.

1.  Create a single sign-on \(SSO\) domain between HCL Digital Experience 9.5 container and the Remote Search service container by following the non-container on-premises procedure for [Creating a single sign-on domain between HCL Portal and the Remote Search service](../../9.0/admin-system/sso_portal_rss.md). This entails exchanging SSL certificates and LTPA domain tokens.

    **Note:** When retrieving the SSL certificates from the host server, use dockerhost \(as the host\) and the appropriate port for the SSL access. In the examples, the Remote Search server is on dockerhost:9443 and the DX host is on dockerhost:10042. You must also complete [Setting the search user ID](../../9.0/admin-system/srtsttusrid.md) and [Removing search collections](../../9.0/install/rmv_search_coll.md) before creating a new search service.

2.  Create a new search service and use the following values for a Remote Search services configuration to a Docker container deployment. See the section on [Creating a new search service](../../9.0/admin-system/create_search_service.md) for more information.

    |Item|Value|
    |----|-----|
    |IIOP\_URL|iiop://dockerhost:2809|
    |PSE TYPE|Select ejb from the pull down.|
    |EJB|ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome|
    |DefaultCollectionsDirectory|Leave empty.|
    |Search service implementation|Select Portal Search Service Type from the pull down.|
    |CONFIG\_FOLDER\_PATH|Did not set \(differs from non-container instructions\).|

    **Note:** Once completed and saved, the HCL Digital Experience 9.5 container deployment has a new search service called **Remote PSE service EJB**, with a green check mark confirming that the service was correctly set up and is able to communicate with the Remote Search container.

3.  Based on the previously created Remote Search service, create a **Portal Search Collection** and a **JCR Search Collection** using the following parameters.
    1.  Use the following parameters to create a [Portal search collection](../admin-system/create_search_coll.md).

        |Parameter|Value|
        |---------|-----|
        |Search collection name|Portal Search Collection|
        |Search collection location|/opt/HCL/AppServer/profiles/prs\_profile/SearchCollections/PortalSearchCollection|

    2.  Portal Search Content Source Configuration. Use the following URL for **Collect documents linked from this URL**:

        ```
        https://dockerhost:10042/wps/seedlist/myserver?Source=com.ibm.lotus.search.plugins.seedlist.retriever.portal.PortalRetrieverFactory&amp;Action=GetDocuments&amp;Range=100&amp;locale=en-US
        ```

        **Note:** The host and port are the Docker host and port to which `10042` is mapped. In this case, `10042` is the `HttpQueueInboundDefaultSecure` port on the HCL Digital Experience server. Note that you can also put this URL in a browser \(on the Docker host\) and confirm that the response is an ATOM feed.

        On the **Security** panel, use `dockerhost` as the host name, along with the username `wpsadmin` and the associated password for `wpsadmin`.

    3.  Use the following parameters to create a [JCR search collection](../admin-system/srtcfg_jcr_colls.md).

        |Parameter|Value|
        |---------|-----|
        |Search collection name|JCRCollection1|
        |Search collection location|/opt/HCL/AppServer/profiles/prs\_profile/SearchCollections/JCRCollection1|

    4.  JCR Content Source Configuration. Use the following URL for **Collect documents linked from this URL**:

        ```
        https://dockerhost:10042/wps/seedlist/myserver?Action=GetDocuments&amp;Format=ATOM&amp;Locale=en_US&amp;Range=100&amp;Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&amp;Start=0&amp;SeedlistId=1@OOTB_CRAWLER1
        ```

        **Note:** The host and port are the Docker host and port to which `10042` is mapped. In this case, `10042` is the `HttpQueueInboundDefaultSecure` port on the HCL Digital Experience server. Note that you can also put this URL in a browser \(on the Docker host\) and confirm that the response is an ATOM feed.

        On the **Security** panel, use `dockerhost` as the host name, along with the username `wpsadmin` and the associated password for `wpsadmin`.

4.  Configure WCM Authoring Portlet search function.

    **Note:** Even though the documents are gathered by the Remote Search function from the JCR, additional configuration is needed in order for the HCL Web Content Manager \(WCM\) Authoring Portlet search to use document search. Set the following values for this configuration.

    1.  Set the **Custom properties** for the WebSphere Application Server Resource Environment Provider, **JCR ConfigService**, using the following values:

        |Property|Value|
        |--------|-----|
        |jcr.textsearch.enabled|true|
        |jcr.textsearch.indexdirectory|/opt/HCL/AppServer/profiles/prs\_profile/SearchCollections|
        |jcr.textsearch.PSE.type|ejb|
        |jcr.textsearch.EJB.IIOP.URL|iiop://dockerhost:2809|
        |jcr.textsearch.EJB.EJBName|ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome|

        **Note:** On the **jcr.textsearch.indexdirectory**, the sub-directory JCRCollection1 is NOT included in the path.


**Parent topic:**[Customizing your container deployment](../containerization/customization.md)

