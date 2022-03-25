# Configure Remote Search using REST APIs

This section shows how to configure Remote Search for your HCL Digital Experience 9.5 environments on a traditional IBM WebSphere Application Server Network Deployment-based cluster DX deployment cluster, a Docker container, or on supported Red Hat OpenShift and Kubernetes container platforms using REST APIs.

## Introduction

REST APIs are available to allow listing, deleting, modifying, and defining Portal Search Services \(and their parameters\). REST APIs may also be used to list, delete, and define Portal Search collections and Portal Search Content Providers \(and their parameters\). Reference the HCL DX 9.5 Help Center topic [REST APIs for Search](../search-rest-api/search.md) for additional information.

Configuring Remote Search for DX Portal requires changes to the WebSphere configuration of both the remote search server, as well as the DX Portal server. In addition, Portal changes need to be made on the Portal server itself.

Traditionally, these changes occurred via the Search Admin GUI on DX Portal. Starting HCL Digital Experience 9.5 CF199 and higher deployments, a new set of REST services also enables users to configure Remote Search. A REST service is implemented, and may be used to perform many of the same Remote Search configuration tasks in a selected environment. The environment can be a traditional IBM WebSphere Application Server Network Deployment-based cluster DX deployment, a set of Docker images, or a set of DX Kubernetes PODs.

## Prerequisites

-   In general, at least one \(1\) DX Portal Server and exactly one \(1\) DX Remote Search Server instances must be running. This can be in Docker, in Kubernetes, or a cluster.
-   The Portal Servers must have addressability to the Remote Search Server and vice-versa. Optimally, this is handled through a DNS server so each of the servers has an IP address statically assigned and resolvable via DNS.

    **Note:** Some services typically assign IP addresses dynamically and are NOT available in DNS. This is true \(by default\) for Docker. To resolve this issue in Docker, add parameters to the `docker run` command.

    Docker images can be started like it follows both - to statistically assign a DNS address, and for that DNS address to be in the /etc/hosts file on the servers:

    ```
    #!/bin/bash
    
    PORTALIP="172.18.0.10"
    REMOTESEARCHIP="172.18.0.11"
    DOCKERHOST="172.19.0.1"
    
    PORTAL_DOCKER_IMAGE="quintana-docker.artifactory.cwp.pnp-hcl.com/dx-build-output/core/dxen:v95_CF192_20210206-022427_rohan_DXQ-14209_on_develop_601eaed4"
    REMOTE_SEARCH_DOCKER_IMAGE="quintana-docker.artifactory.cwp.pnp-hcl.com/dxrs:v95_CF192_20210208-055522_rohan_develop_60215986"
    
    echo "Starting portal docker image with tag" $PORTAL_DOCKER_IMAGE
    echo "Starting remote search docker image with tag" $REMOTE_SEARCH_DOCKER_IMAGE
    
    # Start the two docker images
    #Portal
    docker run -d  --name portaldocker --net aDockerNetwork --ip="$PORTALIP" -p 10039:10039 -p 10041:10041 -p 10042:10042 -p 10200-10205:10200-10205 -p 7777:7777 --add-host="remotesearch:$REMOTESEARCHIP" --add-host="remotesearch:$REMOTESEARCHIP2" --add-host="dockerHost:$DOCKERHOST" $PORTAL_DOCKER_IMAGE
    
    #Remote Search
    docker run -d --name remotesearch --net aDockerNetwork --ip="$REMOTESEARCHIP" -p 8880:8880 -p 2809:2809 -p 9043:9043 -p 9060:9060 -p  9080:9080 -p  9403:9403 --add-host="portaldocker:$PORTALIP" --add-host="dockerHost:$DOCKERHOST" $REMOTE_SEARCH_DOCKER_IMAGE
    ```

    In order to use statically assigned IP addresses like in the example above, a private Docker subnet is created using the following command:

    ```
    docker network create --internal --subnet 172.18.0.0/16 aDockerNetwork
    ```

    The default network used in the example is 172.19.0.0/16. This is the address range used by the Docker host.

    The example will result to a new set of `ConfigEngine` tasks to exist for the WebSphere configuration portion. A new set of REST APIs are also now in place to support the `command-line` configuration of Portal Search.

    **Note:** The configuration commands used in the example configures remote search in a DX environment. However, the collections are empty even though they are defined. To populate the collections, the crawlers must be started. This can either be achieved by manually starting them, putting them on a schedule, or a combination of both.


## Access Rights

For any attempted operation, the user that makes the request must first log into the Portal. The logged-in user is then checked for sufficient privileges before the requested action to any subsequent Remote Search REST API request is executed.

If the logged-in user has no sufficient privileges, the Remote Search REST API request is rejected, and an appropriate response is returned.

## New ConfigEngine tasks

**ConfigEngine tasks on the DX Portal Server**

Complete configuration of WebSphere on the DX Portal Server is accomplished by executing the following command:

```
./ConfigEngine.sh configure-portal-for-remote-search -DWasPassword={Was Password}
```

Parameters may be added to this command to customize it. The following are all given `-D` parameters, along with the default values for each:

```
-Dremote.search.host.name  default="remotesearch"
-Dremote.search.host.port  default="9043"
-Dremote.search.cert.alias  default="remotesearchalias"
-Dremote.search.iiop.url  default="iiop://remotesearch:2809"
-Dremote.search.index.directory  default="/opt/HCL/AppServer/profiles/prs_profile/SearchCollections"
```

The following takes place when the DX Portal Server `ConfigEngine` command is executed:

1.  Retrieve the remote SSL key from the remote search server.
2.  Export the LPTA key to a file for the Portal server.
3.  Suppress the automatic creation of the Default Search Server on Portal restart, if it doesn't already exist.
4.  Set all the Resource Environment Providers for the JCR for WCM Authoring search.

**ConfigEngine tasks on the DX Remote Search Server**

Complete configuration of WebSphere on the DX Remote Search Server may now be accomplished by executing the following command:

```
./ConfigEngine.sh configure-remote-search-server-for-remote-search -DWasPassword={Was Password}
```

**Note:** Complete Remote search server configuration require deploying WebScannerEjbEar.ear, and copying and unzipping file PseLibs.zip on remote search server. Refer to the [Preparing for remote service topic](../admin-system/srtprrmtsrchsrv.md) for steps.

Parameters may be added to this command to customize it. The following are all given `-D` parameters, along with the default values for each:

```
-Dremote.search.host.name  default="remotesearch"
-Dportal.host.name default="portaldocker"
-Dportal.port.number default="10042"
-Dportal.cert.alias default="portaldockeralias"
```

The following takes place when the DX Remote Search Server `ConfigEngine` command is executed:

1.  Retrieve remote SSL key from the Portal Server.
2.  Import the LTPA key exported from the Portal Server in the previous step.
3.  Edit the serverindex.xml file to have the correct Remote Search server host name.

**Important:** Both the remote search server and the portal server must both be restarted after the `ConfigEngine` tasks are complete. Since the changes are IBM WebSphere Application Server Network Deployment-based cluster DX deployment changes in the profile, the changes are not picked up until the restart.

## New REST APIs

Like all REST services, the type of HTTP command \(`GET`, `PUT`, `POST`, `DELETE`\) dictates the type of operation.

The format of the URL is very similar for each type. However, some of the types \(e.g. `POST`\) require JSON input to define the add.

Here are the HTTP mapping types:

```
GET -> list 
POST -> add
DELETE -> delete
```

The following example illustrates the elements of a URL, which generally consists of the following:

```
/wps/mycontenthandler/!ut/p/searchadmin/service/Remote+PSE+service+EJB/collection/JCRCollection1/provider/JCR+Content
```

-   The initial portal \(/wps/mycontenthandler/!ut/p/searchadmin/service\) is invariant and is present in all REST commands for remote search configuration.
-   Remote+PSE+service+EJB presents the name of the service on which to perform an operation. Note that in a URL, the space character is NOT allowed. You can either replace the space character with the "`+`" character, or replace the space character with "`%20`". Both forms are equivalent.
-   The collection character sequence is only required when operating on a collection or providers within a collection. In the example, the collection name is JCRCollection1. This happens to be the required collection name for searches of artifacts by the WCM Authoring GUI.
-   If the URL is malformed for whatever reason, an error will be returned in response to the request.
-   Lastly, and only required when doing operations on a content provider for a particular service and collection, is you need to add the required character sequence provider, followed by the name of the provider in question.

    In our example, the provider is called JCR Content. Note that a "`+`" replaces a space character in the URL. Thus, the actual provider name is JCR Content.


For all commands, the HTTP response code is useful. For example, if the HTTP response code is `401`, then it is likely that the one has NOT used the REST login before the REST configure command.

All these commands require an "Authenticated" status. The `POST` and `DEL` commands require administrator access rights on the search configuration objects.

In all cases, a combination of the HTTP response code along with a potential error message in the response payload indicates a variety of potential issues. Some of these issues may include a lack of access rights for the intended operation, the fact that the resource already exists \(for example, trying to create/POST a service name that already exists\), and more. Otherwise, a successful returns an HTTP response code of 20x

## List

The following command list details of various remote search resources. No JSON body is required on the request. The HTTP response is the JSON which matches the type of the request.

If the requested resource to "`LIST`" doesn't exist, the returned JSON will be empty \(e.g. "`{}`"\).

```
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/services
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/{service name}/
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/{service name}/collection/{collection name}
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/{service name}/collection/{collection name}/provider/{content provider name}
```

Sample command and output:

```
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/services

{
    "services": [
        {
            "name": "Remote PSE service EJB",
            "link": "/wps/mycontenthandler/!ut/p/searchadmin/service/Remote+PSE+service+EJB"
        }
    ]
}
```

Note that each service name is followed by a relative link, which can be used to get more details of the service.

The next command shows an example of this:

```
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/Remote+PSE+service+EJB/

{
    "RESOURCE_ENVIRONMENT_PROVIDER_NAME": "SearchPropertiesService",
    "facetedFields": "null",
    "WORK_MANAGER_DEPLOY": "wps/searchIndexWM",
    "EJB_Example": "ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome",
    "DefaultCollectionsDirectory": "null",
    "CONTENT_SOURCE_TYPE_FEATURE_NAME": "ContentSourceType",
    "EJB": "ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome",
    "MAX_BUILD_BATCH_SIZE": "10000",
    "fieldTypes": "null",
    "WORK_MANAGER_NATIVE": "force.hrl.work.manager.use.native.threads",
    "WORK_MANAGER": "wps/searchIndexWM",
    "PSE_TYPE_option_3": "soap",
    "PSE_TYPE_option_2": "ejb",
    "PSE_TYPE_option_1": "localhost",
    "IIOP_URL": "iiop://remotesearch:2809",
    "VALIDATE_COOKIE": "123",
    "PortalCollectionSourceName": "Remote PSE service EJB",
    "WORK_MANAGER_NAME": "wps/searchIndexWM",
    "PSE_TYPE": "ejb",
    "CONTENT_SOURCE_TYPE_FEATURE_VAL_PORTAL": "Portal",
    "HTTP_MAX_BODY_SIZE_MB": "20",
    "MAX_BUILD_INTERVAL_TIME_SECONDS": "300",
    "SetProperties": "on",
    "PortalCollectionName": "TestGood",
    "IIOP_URL_Example": "iiop://localhost:2811",
    "CLEAN_UP_TIME_OF_DAY_HOURS": "0",
    "SOAP_URL_Example": "http://localhost:10000/WebScannerSOAP/servlet/rpcrouter",
    "mappedFields": "null",
    "OPEN_WCM_WINDOW": "/wps/myportal/wcmContent?WCM_GLOBAL_CONTEXT=",
    "SOAP_URL": "null",
    "DEFAULT_acls_FIELDINFO": "contentSearchable=false, fieldSearchable=true, returnable=true, sortable=false, supportsExactMatch=true, parametric=false, typeAhead=false",
    "SecurityResolverId": "com.ibm.lotus.search.plugins.provider.core.PortalSecurityResolverFactory",
    "CONTENT_SOURCE_TYPE_FEATURE_VAL_UPLOAD": "Upload",
    "CONTENT_SOURCE_TYPE_FEATURE_VAL_WEB": "Web",
    "OpenResultMode": "new",
    "SEARCH_SECURITY_MODE": "SECURITY_MODE_PRE_POST_FILTER",
    "collections": [
        {
            "name": "JCRCollection1",
            "link": "/wps/mycontenthandler/!ut/p/searchadmin/service/Remote+PSE+service+EJB/collection/JCRCollection1"
        },
        {
            "name": "Portal Search Collection",
            "link": "/wps/mycontenthandler/!ut/p/searchadmin/service/Remote+PSE+service+EJB/collection/Portal+Search+Collection"
        }
    ]
}
```

Again, do note that the end of the list shows two collections, and the URLs that can be used to gather more information regarding those collections.

```
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/Remote+PSE+service+EJB/collection/JCRCollection1

{
    "location": "/opt/HCL/AppServer/profiles/prs_profile/SearchCollections/JCRCollection1",
    "IndexTitleKey": "JCRCollection1",
    "IndexNameKey": "JCRCollection1",
    "IndexLanguageKey": "en_US",
    "location": "/opt/HCL/AppServer/profiles/prs_profile/SearchCollections/JCRCollection1",
    "CollectionStatus": "true",
    "IndexDescriptionKey": "JCRCollection1",
    "DictionaryAnalysis": "true",
    "providers": [
        {
            "name": "JCR Content",
            "link": "/wps/mycontenthandler/!ut/p/searchadmin/service/Remote+PSE+service+EJB/collection/JCRCollection1/provider/JCR+Content"
        }
    ]
}
```

## Delete

If a resource to be deleted does not exist, then the returned JSON will return null \(e.g. "`{}`"\), which is the same as the returned JSON if the request is successful.

```
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/{service name}/
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/{service name}/collection/{collection name}
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/{service name}/collection/{collection name}/provider/{content provider name}
```

In general, after a successful delete operation \(HTTP 200\), expect that the response JSON payload is null \(e.g. "`{}`"\).

## Add

```
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/{service name}/
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/{service name}/collection/{collection name}
http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/{service name}/collection/{collection name}/provider/{content provider name}
```

If the resource to be added already exists, then an error message is returned like the following:

```
Error 400: {resource} Already Exists
```

where \{resource\} is one of "service", "collection" or "content provider" as is appropriate for the invalid request URL.

The JSON returned as a result of an `add REST` call is exactly that, which is returned for the same `GET` call. Effectively, the returned JSON echoes the `input add` JSON request.

## Starting a Crawler

Once the Service/Collection/Content Provider is configured, the crawlers will still not populate the indexes. To populate the indexes, the crawlers must be started.

Crawlers can be started in one of two different ways:

1.  The first is via a scheduler, which automatically runs the crawler on a set schedule. Currently this schedule can only be configured in the search GUI.
2.  The second method is to immediately start the crawler either from the GUI or via a REST service.

    The REST service to start a crawler looks as follows:

    ```
    http://localhost:10039/wps/mycontenthandler/!ut/p/searchadmin/service/Remote+PSE+service+EJB/collection/Portal+Search+Collection/provider/WCMContentSource/crawl
    ```

    This URL looks like very much a `POST` command to add a content provider. The only difference is that the crawl command is located at the end of the URL. This command will start an immediate crawl on the content provider in the previous portion of the URL.

    The output of the command is an `HTTP 201` return code, along with a JSON body that is exactly like this:

    ```
    {
        "crawl": "started"
    }
    ```


## Use of API on Main Virtual Portal versus all other Virtual Portals

On a Virtual Portal, the “!ut/p/digest” portal of the URL must be included as the `contenthandler` cannot issue the redirect when using the URL format without the portion mentioned.

As such, referring to the example URLs above, the “!ut/p/digest” portal of the URL is NOT included. This implies that this URL is issued in the "main" VP of the DX Portal. A 302 redirect will take place, and the “!ut/p/digest” will be inserted in the final URL. This portion of the URL can also be used for the VP URL request.

**Parent topic:**[Customizing your container deployment](../containerization/customization.md)

