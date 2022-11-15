**Automated Configuration of Remote Search**

This section shows how to configure Remote Search for your HCL Digital Experience 9.5 environments using the provided shell scripts.
It can be used for traditional deploments (e.g. a WebSphere cluster) as well as on supported Red Hat OpenShift and Kubernetes container platforms.

Note: Prior to Container Update CF195, the HCL Digital Experience 9.5 Remote Search image is supported for deployment to Red Hat OpenShift. With the Container Update CF195 release, Remote Search can be configured for deployment on supported Kubernetes platforms.

**Introduction**

Using HCL Digital Experience 9.5 Remote Search images in the supported cloud container platforms, such as Red Hat OpenShift, require a different setup and configuration steps than those used to set up Remote Search on a non-Docker or Kubernetes container platform.

    As information, the serverindex.xml file on the Remote Search server when deployed to on-premises environments may have a host name that is not accurate in a container environment with respect to the actual host name of the server hosting the Remote Search server.
    Follow the guidance in this section to define collections in the core HCL DX 9.5 container environment with respect to JCR text search collections, rather than guidance published for the on-premises (non-Docker or Kubernetes) platforms for the JCR collection URL.

**Deploying Remote Search in HCL Digital Experience 9.5 OpenShift and Kubernetes platforms**

Prerequisite: Download the HCL Digital Experience 9.5 Docker containers from your HCL Digital Experience entitlements from the HCL Software License Portal.

The HCL DX 9.5 container update CF181 and later packages include a core software and Remote search container. Load both of these images into an OpenShift release platform supported by HCL DX 9.5 such as Red Hat OpenShift. Use CF195 and later if you deploy to a Kubernetes platform.
In this example, the OpenShift load command can be used. Note that if your organization has a corporate OpenShift repository, you might use OpenShift pull instead to put it into your local repository.

hcl-dx-core-image-v95_CF181_xxxxxxxx-xxxx.tar.gz

hcl-dx-dxrs-image-v95_CF181_xxxxxxxx-xxxx.tar.gz

The first one (dx-core-image), is the core HCL DX 9.5 Portal and Web Content Manager image while the second one (dx-dxrs-image) is the remote search image.

After the Remote Search images are loaded to the Kubernetes environment that you deploy to, follow deployment steps for that platform presented in the HCL Digital Experience 9.5 Container Deployment topic pages.
EJBs and host names

HCL Digital Experience 9.5 Container core and Portal Remote Search each use WebSphere Application Server as a base. As these components are on different hosts (containers), they need to communicate via IP. The initial conversation between HCL Digital Experience 9.5 core and the Remote Search server takes place over IIOP (rmi) which is the internet protocol of EJBs.

Ideally, the /etc/hosts file of both containers would have the host name of the other. In other words, the /etc/hosts file of the HCL Digital Experience Container core would have a host reference for the Remote Search and vice versa. However, three factors make this impossible. The containers are based on Red Hat UBI, the /etc/hosts file is owned by root, and the root password (and sudo) is not available. Apply the command below to define host references for the Remote Search service from the Digital Experience Container core. Therefore, a way to force the Kubernetes environment, such as Red Hat OpenShift to write the /etc/hosts file at container initialization time is needed.

HCL DX 9.5 Container operators that execute image deployment to Kubernetes platforms such as Red Hat OpenShift create the correct host-name in /etc/hosts for the local container. In addition, these operators execute a DNS resolution on foreign host-names as long as they are on the same Kubernetes deployment.

Portal and Portal Remote Search both use WebSphere Application Server as a base. As they are on different hosts (containers), they have to be able to talk to each other via IP. The initial conversation between Portal DX and the Remote Search server take place over IIOP (rmi) which is the internet protocol of EJBs.
New ConfigEngine tasks

**ConfigEngine tasks on the DX Portal Server**
Complete configuration of WebSphere on the DX Portal Server is accomplished by executing the following command:

./ConfigEngine.sh configure-portal-for-remote-search -DWasPassword={Was Password}

Parameters may be added to this command to customize it. The following are all given -D parameters, along with the default values for each:

-Dremote.search.host.name  default="remotesearch"
-Dremote.search.host.port  default="9043"
-Dremote.search.cert.alias  default="remotesearchalias"
-Dremote.search.iiop.url  default="iiop://remotesearch:2809"
-Dremote.search.index.directory  default="/opt/HCL/AppServer/profiles/prs_profile/SearchCollections"

The following takes place when the DX Portal Server ConfigEngine command is executed:

    Retrieve the remote SSL key from the remote search server.
    Export the LPTA key to a file for the Portal server.
    Suppress the automatic creation of the Default Search Server on Portal restart, if it doesn't already exist.
    Set all the Resource Environment Providers for the JCR for WCM Authoring search.

**ConfigEngine tasks on the DX Remote Search Server**
Complete configuration of WebSphere on the DX Remote Search Server may now be accomplished by executing the following command:

./ConfigEngine.sh configure-remote-search-server-for-remote-search -DWasPassword={Was Password}

Note: Complete Remote search server configuration require deploying WebScannerEjbEar.ear, and copying and unzipping file PseLibs.zip on remote search server. Refer to the Preparing for remote service topic for steps.
Parameters may be added to this command to customize it. The following are all given -D parameters, along with the default values for each:

-Dremote.search.host.name  default="remotesearch"
-Dportal.host.name default="portaldocker"
-Dportal.port.number default="10042"
-Dportal.cert.alias default="portaldockeralias"

The following takes place when the DX Remote Search Server ConfigEngine command is executed:

    Retrieve remote SSL key from the Portal Server.
    Import the LTPA key exported from the Portal Server in the previous step.
    Edit the serverindex.xml file to have the correct Remote Search server host name.

Important: Both the remote search server and the portal server must both be restarted after the ConfigEngine tasks are complete. Since the changes are IBM WebSphere Application Server Network Deployment-based cluster DX deployment changes in the profile, the changes are not picked up until the restart.
**Defining serverindex.xml on the Remote Search server**

When deploying the Remote Search image on supported Kubernetes platforms, additional configuration settings for the serverindex.xml are required. When deployed to Kubernetes, the HCL DX 9.5 container operators are configured to check to ensure that the server name is correct.

Note that dx-deployment-service-remotesearch is a DNS resolvable name from the point of view of the HCL Digital Experience 9.5 Server. The remote search server includes the “ping” command. You can use this to verify that the host name dx-deployment-service-remotesearch resolves to a valid IP address.

Now, when the HCL DX 9.5 server communicates to the Remote Search server over IIOP, the Remote Search Server returns dx-deployment-service-remotesearch as the host name of the Remote Search Server. The HCL DX 9.5 Server has configuration that appends the port to the host name that was just returned.
**Remote Search services configuration**

The following guidance aligns with the Remote Search services configuration instructions available in the Remote Search services topic for deployment to non-container HCL Digital Experience servers.

All of the instructions contained in the Remote Search services topic must be completed in a Kubernetes container-based HCL Digital Experience deployment. The following guidance outlines specific settings that were used in the Remote Search service DX 9.5 image deployment to supported Kubernetes platforms.

    Create a single sign-on (SSO) domain between HCL Digital Experience 9.5 container and the Remote Search service container by following the non-container on-premises procedure for Creating a single sign-on domain between HCL Portal and the Remote Search service. This entails exchanging SSL certificates and LTPA domain tokens.
    Note: When retrieving the SSL certificates from the host server, use the URL configuration host as defined in the table below (REMOTE SEARCH SERVICE NAME) as the host, and the appropriate port for the SSL access. You must also complete Setting the search user ID.
    Complete Removing default search collections before creating a new search service.
    Create a new search service and use the following values for a Remote Search services configuration to a Kubernetes container deployment. See the section on Creating a new search service for more information.

    For testing Search Services configuration, the following are used:
    Table 1. HCL DX 9.5 Kubernetes container Remote Search services configuration Item 	Value
    IIOP_URL 	iiop://[REMOTE SEARCH SERVICE NAME]:2809
    PSE TYPE 	Select ejb from the pull down.
    EJB 	ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome
    DefaultCollectionsDirectory 	Leave empty.
    Search service implementation 	Select Portal Search Service Type from the pull down.
    CONFIG_FOLDER_PATH 	Did not set (differs from non-container instructions).
    Note: Once completed and saved, the HCL Digital Experience 9.5 container deployment has a new search service called Remote PSE service EJB, with a green check mark confirming that the service was correctly set up and is able to communicate with the Remote Search container.
    Obtain a shell in the Digital Experience core container, by running the following command:

    kubectl/oc exec -it [DX CORE POD NAME] bash -n [NAMESPACE] -c core

    Run the following ConfigEngine task.

    /opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh configure-portal-for-remote-search -DWasPassword=[WAS ADMIN PASSWORD] -Dremote.search.host.name="[REMOTE SEARCH SERVICE NAME]" -Dremote.search.host.port="9043" -Dremote.search.cert.alias="remotesearchalias" -Dremote.search.iiop.url="iiop://[REMOTE SEARCH SERVICE NAME]:2809" -Dremote.search.index.directory="/opt/HCL/AppServer/profiles/prs_profile/SearchCollections

    Note: If the ConfigEngine task is successful, LTPA key will be exported to the local machine.
    Move the exported LTPA key from the DX container to the RemoteSearch container on the local machine, using below command.

    kubectl/oc cp [DX POD NAME]:/home/dx_user/LTPAKeyExported ./LTPAKeyExported -c core -n [namespace/project]

    kubectl/oc cp LTPAKeyExported [REMOTE SEARCH POD NAME]:/home/dx_user/ -c remote-search -n [namespace/project]

    Obtain a shell in the RemoteSearch Container, by running the following command:

    kubectl/oc exec -it [REMOTE SEARCH POD NAME] bash -n [NAMESPACE] -c remote-search

    Run the following ConfigEngine task command:

    /opt/HCL/AppServer/profiles/prs_profile/ConfigEngine/./ConfigEngine.sh configure-remote-search-server-for-remote-search -DWasPassword=[WAS ADMIN PASSWORD] -Dportal.host.name="[DX SERVIC NAME]" -Dportal.port.number="10042" -Dportal.cert.alias="portaldockeralias" -Dremote.search.host.name="[REMOTE SEARCH POD NAME]"

    Restart both DX and RS servers.
        Restart DX server from a shell in the Digital Experience core container.

        /opt/HCL/wp_profile/bin/./stopServer.sh WebSphere_Portal -user [WAS ADMINISTRATOR NAME] -password [WAS ADMINISTRATOR PASSWORD]
        /opt/HCL/wp_profile/bin/./startServer.sh WebSphere_Portal

        Restart RS serve from a shell in the RemoteSearch container.

        /opt/HCL/AppServer/profiles/prs_profile/bin/./stopServer.sh server1 -user [WAS ADMINISTRATOR NAME] -password [WAS ADMINISTRATOR PASSWORD]
        /opt/HCL/AppServer/profiles/prs_profile/bin/./startServer.sh server1

    Based on the previously created Remote Search service, create your collections:
        Portal Search Collection
            Use the following parameters to create a Portal search collection.
            Table 2. Portal Search Collection configuration Parameter 	Value
            Search collection name 	Portal Search Collection
            Search collection location 	/opt/HCL/AppServer/profiles/prs_profile/SearchCollections/PortalSearchCollection
            Note: The “search collection name” can be any text string. The “search collection location” is relative to the remote search container. Furthermore, place the collection in the profile of the Remote Search server because the profile of the remote search server is persisted. To search the indexes persisted across restarts.
            Use the following parameters to create a Portal Search Content Source
            Table 3. Portal Search Content Source Parameter 	Value
            Content Source Type 	Portal Site
            Content Source Name 	Portal Content Source
            Collect documents linked from this URL 	https://[DX SERVICE NAME]:[DX SERVICE SECURE PORT]/wps/seedlist/myserver?Source=com.ibm.lotus.search.plugins.seedlist.retriever.portal.PortalRetrieverFactory&Action=GetDocuments&Range=100
            Note: The host and port are the Kubernetes service host and the port to which 10042 was mapped. In this case, 10042is the HttpQueueInboundDefaultSecure port on the HCL DX 9.5 Server. On the Security panel, use DX SERVICE NAME as the host name, along with the username wpsadmin and the associated password for wpsadmin. One can also specify Realm as CrawlerUsersRealm
            Use the following parameters to create a WCM Content Source.
            Table 4. WCM Content Source Parameter 	Value
            Content Source Type 	Seedlist provider
            Content Source Name 	WCM Content Source
            Collect documents linked from this URL 	https://[DX SERVICE NAME]:[DX SERVICE SECURE PORT /wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
        JCR Search Collection
            Use the following parameters to create a Content Source JCR search collection.
            Table 5. JCR Search Collection configuration Parameter 	Value
            Search collection name 	JCRCollection1
            Search collection location 	/opt/HCL/AppServer/profiles/prs_profile/SearchCollections/JCRCollection1
            Use the following parameters to create a JCR Search Content Source.
            Table 6. JCR Search Content Source Parameter 	Value
            Content Source Type 	Seedlist provider
            Content Source Name 	JCR Content Source
            Collect documents linked from this URL 	https://[DX SERVICE NAME]:[DX SERVICE SECURE PORT /wps/seedlist/myserver?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=1@OOTB_CRAWLER1

            The parsing of the SeedlistId positional parameter in this URL uses an index of the virtual portal being crawled. In this case 1 (in 2 places) represents the base virtual portal.
            Note: The host and port are the Kubernetes service host and the port to which 10042 was mapped. In this case, 10042 is the HttpQueueInboundDefaultSecure port on the HCL DX 9.5 server.

            On the Security panel, use DX SERVICE NAME as the host name, along with the username wpsadmin and the associated password for wpsadmin. You can also specify Realm as CrawlerUsersRealm.

**Configure WCM Authoring Portlet search function**
Note: Even though the documents are gathered by the Remote Search function from the JCR, additional configuration is needed in order for the HCL Web Content Manager (WCM) Authoring Portlet search to use document search. Set the following values for this configuration.
Make sure the Custom properties for the WebSphere Application Server Resource Environment Provider, JCR ConfigService, using the following values:
Table 7. Table 4. JCR ConfigService custom properties Property 	Value
jcr.textsearch.enabled 	true
jcr.textsearch.indexdirectory 	/opt/HCL/AppServer/profiles/prs_profile/SearchCollections
jcr.textsearch.PSE.type 	ejb
jcr.textsearch.EJB.IIOP.URL 	iiop://dx-deployment-service-remotesearch:2809
jcr.textsearch.EJB.EJBName 	ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome
Note: On the jcr.textsearch.indexdirectory, the sub-directory JCRCollection1 is NOT included in the path.
