# Properties file: wkplc\_comp.properties 

**Parent topic:**[Reference: Configuration properties ](../properties/properties.md)

## HCL Portal URLs

Define the URL that is used to access your portal site.

-   **WpsDefaultHome**

    -   **Description**

        The first page that site visitors see before they log in to the site. Valid characters are alphabetic and numeric including underscore and dash. The value entered must be different than the Personalized Home value. If portal is the default home, the following is an example of the URL for the site: http://localhost:10039/wps/portal

        In this example:

        -   localhost is the portal host name \(WpsHostName\)
        -   10039 is the host port \(WpsHostPort\)
        -   wps is the context root \(WpsContextRoot\).
    -   **Default value**

        portal

    -   **Examples**

        : portal

-   **WpsPersonalizedHome**

    -   **Description**

        The page that site visitors see after they log in to the site. Valid characters are alphabetic and numeric including underscore and dash.The value entered must be different than the Default Home value. If myportal is the personalized home, then the following is an example URL for the site: http://localhost:10039/wps/myportal

        In this example:

        -   localhost is the portal host name \(WpsHostName\)
        -   10039 is the host port \(WpsHostPort\)
        -   wps is the context root \(WpsContextRoot\).
    -   **Default value**

        myportal

    -   **Examples**

        : myportal


## Properties for HCL Portal integration with IBM Process Server

The following properties are used to configure integration with WebSphere Process Server. You must provide information about the already installed WebSphere Process Server.

-   **pi.IsCrossCell**

    -   **Description**
    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available

-   **pi.ProcessServerHostAddress**

    -   **Description**

        This property is used only if the pi.IsCrossCell value is set to true. The server host name address of the WebSphere Process Server installation located in another cell.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **pi.ProcessServerBootstrapPort**

    -   **Description**

        This property is used only if the pi.IsCrossCell value is set to true. The bootstrap port of the WebSphere Process Server installation located in another cell.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **pi.ProcessArtifactsLocation**

    -   **Description**

        This property is used only if the pi.IsCrossCell value is set to true. The directory in which the process artifacts are located.

    -   **Default value**

        $\{USER\_INSTALL\_ROOT\}/processArtifacts

    -   **Examples**

        None available

-   **pi.IsWPSCluster**

    -   **Description**

        This property is used only if the pi.IsCrossCell value is set to false.

    -   **Valid values**

        true

        false

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **pi.ClusterName**

    -   **Description**

        This property is used only if the pi.IsCrossCell value is set to false AND pi.IsWPSCluster value is set to true. The name of the WebSphere Process Server cluster.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **pi.NodeName**

    -   **Description**

        This property is used only if the pi.IsCrossCell value is set to false AND pi.IsWPSCluster value is set to false. The name of the node of the WebSphere Process Server server.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **pi.ServerName**

    -   **Description**

        This property is used only if the pi.IsCrossCell value is set to false AND pi.IsWPSCluster value is set to false. This value is the name of the WebSphere Process Server server.

    -   **Default value**

        No default value

    -   **Examples**

        None available


## XMLAccess properties

The following properties are specific to XMLAccess.

-   **XmlAccessHost**

    -   **Description**

        The local host name of HCL Portal. You do not need to modify this value.

    -   **Default value**

        localhost

    -   **Examples**

        None available

-   **XmlAccessPort**

    -   **Description**

        The port used by XML Access configuration tasks to connect to the XMLAccess server Do not use this parameter to reconfigure the XmlAccessPort port. The value is set by the basic HCL Portal configuration task.

    -   **Default value**

        10040

    -   **Examples**

        :

-   **XmlAccessProtocol**

    -   **Description**

        The protocol used to connect to the XMLAccess server.

    -   **Valid values**

        http

        https

    -   **Default value**

        http

    -   **Examples**

        None available


## Advanced Security Configuration using External Security Managers

The following parameters are used for advanced security configuration using external security managers. Use the properties to specify namespace management parameters that are common to TAM and SiteMinder

-   **wp.ac.impl.EACserverName**

    -   **Description**

        \(Optional\) You can set different "contexts" to further distinguish externalized role names from other role names in the Tivoli Access Manager namespace. This context information will be added to the namespace entry created upon role externalization. If any of the three context values \(EACserverName, EACcellName, or EACappName\) are null, none will be used.

    -   **Default value**

        HCL Portal and HCL Web Content Manager

    -   **Examples**

        None available

-   **wp.ac.impl.EACcellName**

    -   **Description**

        One of the three context values used to set a different context to further distinguish the externalized role name

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **wp.ac.impl.EACappName**

    -   **Description**

        One of the three context values used to set a different context to further distinguish the externalized role name

    -   **Default value**

        wps

    -   **Examples**

        :

-   **wp.ac.impl.reorderRoles**

    -   **Description**

        Allows you to either have your externalized Portal rolenames displayed with the resource type first, or the role types first.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        :

        :

        :

        :

        :

        :

        :

        :

        :

        :


## Tivoli Access Manager: AMJRTE connection parameters

Provide authentication information to enable WebSphere Portal to connect with TAM.

-   **wp.ac.impl.PDAdminId**

    -   **Description**

        An administrative user ID for Tivoli Access Manager \(TAM\) that has access to create new TAM servers, new Tivoli protected objectspaces, and new Tivoli protected objects.

    -   **Default value**

        sec\_master

    -   **Examples**

        :

-   **wp.ac.impl.PDAdminPwd**

    -   **Description**

        This value is the password for the administrative TAM user ID.

    -   **Default value**

        ReplaceWithYourTAMAdminPwd

    -   **Examples**

        None available

-   **wp.ac.impl.PDPermPath**

    -   **Description**

        This value is the location of the TAM AMJRTE properties file. This properties file is created by the TAM SvrSslCfg command and contains information such as: Policy Server host name, ports version of AMJRTE path to encryption keys.

    -   **Default value**

        $\{WasHome\}/tivoli/tam/PdPerm.properties

    -   **Examples**

        None available


## Tivoli Access Manager: PDJrteCfg command and filesystem parameters

The following parameter locations depend on your WebSphere Application Server installation structure. For more information or detail on the individual parameters, refer to: http://publib.boulder.ibm.com/infocenter/wasinfo/v6r1/topic/com.ibm.websphere.nd.doc/info/ae/ae/rsec\_tampdjrtecfg.html

-   **wp.ac.impl.PDClasspath**

    -   **Description**

        The location of the TAM PD.jar file, which contains the classes required to establish a connection to the policy server and is passed into the classpath of the command.

    -   **Default value**

        $\{WasHome\}/tivoli/tam/PD.jar

    -   **Examples**

        :

-   **wp.ac.impl.PDHome**

    -   **Description**

        This value is the location of the TAM AMJRTE, which is the same as the pd.home system property in a manual execution.

    -   **Default value**

        $\{WasHome\}/tivoli/tam/PolicyDirector

    -   **Examples**

        None available

-   **wp.ac.impl.JavaHome**

    -   **Description**

        This value is the location of the Java runtime in which to configure, which is the same as the -java\_home command line argument in a manual execution.

    -   **Default value**

        $\{WasHome\}/java/jre/

    -   **Examples**

        None available

-   **wp.ac.impl.CfgFilesPath**

    -   **Description**

        This value is the required filesystem directory location of the generated TAM AMJRTE properties. The properties files are created by the TAM PdjrteCfg command, which is the same as the -cfgfiles\_path command line argument in a manual execution.

    -   **Default value**

        $\{WasHome\}/tivoli/tam

    -   **Examples**

        :

-   **wp.ac.impl.TamHost**

    -   **Description**

        This value defines the TAM Policy Server used when running PDJrteCfg.

    -   **Default value**

        your.TAM.Policy.Server.hostname

    -   **Examples**

        None available


## Tivoli Access Manager: SvrSslCfg command parameters

HCL Portal requires the following information to run the SvrSslCfg command

-   **wp.ac.impl.PDServerName**

    -   **Description**

        The unique application name and will be used to create a new Tivoli server in the Access Manager Policy Server. This server will appear in the pdadmin server list after running the SvrSslCfg command. If a server with the same name appears in the server list command, the SvrSslCfg command will fail.

    -   **Default value**

        amwp80

    -   **Examples**

        :

-   **wp.ac.impl.SvrSslCfgPort**

    -   **Description**

        This value is the configuration port for the application name. This parameter is currently ignored by the SvrSslCfg command.

    -   **Default value**

        7223

    -   **Examples**

        :

-   **wp.ac.impl.SvrSslCfgMode**

    -   **Description**

        This value is the configuration mode of the SvrSslCfg command. Currently, the only valid value is remote.

    -   **Default value**

        remote

    -   **Examples**

        None available

-   **wp.ac.impl.PDPolicyServerList**

    -   **Description**

        This value defines host name, port, and priority combinations for your TAM Policy servers used when running SvrSslCfg.

    -   **Default value**

        your.TAM.Policy.Server.hostname:7135:1

    -   **Examples**

        :

-   **wp.ac.impl.PDAuthzServerList**

    -   **Description**

        This value defines host name, port, and priority combination for your TAM authorization servers.

    -   **Default value**

        your.TAM.Authorization.Server.hostname:7136:1

    -   **Examples**

        :

-   **wp.ac.impl.PDKeyPath**

    -   **Description**

        This value is the file used to store encryption keys used for the SSL communication between AMJRTE and Tivoli Access manager. This file is generated as a result of the SvrSslCfg command.

    -   **Default value**

        $\{WasHome\}/tivoli/tam/pdperm.ks

    -   **Examples**

        None available


## Tivoli Access Manager: WebSphere Application Server WebSEAL TAI parameters

HCL Portal uses the following information for WebSEAL.

-   **wp.ac.impl.hostnames**

    -   **Description**

        \(Optional\) This value sets the WebSEAL TAI's hostnames parameter. You should include the host name you provided when configuring the WebSEAL instance. The default behavior when configuring a WebSEAL instance is to use the network short name. For example, hosta.yourcompany.com may be represented as hosta. When the WebSEAL instance is configured and if any additional proxies are included, their host names must be added as well. Presence of this parameter will cause the TAI to evaluate the VIA header and only handle those requests that contain one of the provided host name, and port combinations. This value is case-sensitive and may be a comma-delimited list if more than one host name is provided

    -   **Default value**

        No default value

    -   **Examples**

        :

-   **wp.ac.impl.ports**

    -   **Description**

        \(Optional\) This value sets the WebSEAL TAI's ports parameter. You should include the WebSEAL ports in this comma-delimited list. The default WebSEAL port is 443. Presence of this parameter will cause the TAI to evaluate the VIA header and only handle those requests that contain one of the provided host name and port combinations.

    -   **Default value**

        No default value

    -   **Examples**

        :

-   **wp.ac.impl.loginId**

    -   **Description**

        When you create a TCP junction, this value is WebSEAL identity representing the reverse proxy on every request. WebSphere Application Server will use this identity to establish the "trust" that is required to validate the WebSEAL iv-\* headers. The password for this user should be set in the WebSEAL instance's webseald.conf on the basicauth-dummy-passwd property.

    -   **Default value**

        wpsadmin

    -   **Examples**

        :

-   **wp.ac.impl.TAICreds**

    -   **Description**

        This value is the headers inserted by WebSEAL that the TAI uses to identify the request as originating from WebSEAL. Inclusion of these headers is associated with the headers used by the WebSphere Application Server TAI to identify the request as one from WebSEAL. If you are configuring Portal to use TAM as an external authorization engine, you must include at least the iv-user and iv-creds headers.

    -   **Default value**

        iv-user,iv-creds

    -   **Examples**

        :

-   **wp.ac.impl.checkViaHeader**

    -   **Description**

        You can configure TAI so that the VIA header can be ignored when validating trust for a request. Set this property to false if none of the hosts in the VIA header need to be evaluated. When this value is false, you do not need to set the wp.ac.impl.hostnames and wp.ac.impl.ports properties. The only mandatory property to set when this value is false is wp.ac.impl.loginId.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **wp.ac.impl.viaDepth**

    -   **Description**

        This value is a positive integer that specifies the number of source hosts in the VIA header to check for trust. By default, every host in the VIA header is checked, and if any host is not trusted, trust cannot be established. The VIA depth property is used when only some of the hosts in the VIA header have to be trusted. The setting indicates the number of hosts that are required to be trusted.

    -   **Default value**

        0

    -   **Examples**

        :

-   **wp.ac.impl.ssoPwdExpiry**

    -   **Description**

        After trust is established for a request, the single sign-on user password is cached, eliminating the need to have the TAI re-authenticate the single sign-on user with Tivoli Access Manager for every request. You can modify the cache timeout period by setting the single sign-on password expiry property to the required time in seconds. If the password expiry property is set to 0, the cached password never expires.

    -   **Default value**

        600

    -   **Examples**

        None available

-   **wp.ac.impl.ignoreProxy**

    -   **Description**

        This property can be used to tell the TAI to ignore proxies as trusted hosts. If set to true the comments field of the hosts entry in the VIA header is checked to determine if a host is a proxy. Remember that not all proxies insert comments in the via header indicating that they are proxies. If the checkViaHeader property is set to false, then the ignoreProxy property has no influence in establishing trust.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        :


## Tivoli Access Manager: Portal authorization parameters

The following information is used to authenticate with TAM.

-   **wp.ac.impl.PDRoot**

    -   **Description**

        This value is the root objectspace entry in the TAM namespace. All Portal roles will be installed under this objectspace entry.

    -   **Default value**

        /WPv80

    -   **Examples**

        None available

-   **wp.ac.impl.PDAction**

    -   **Description**

        When the Tivoli Access Manager external authorization plugin is started, it will detect and, if necessary, create a custom action in Tivoli Access Manager. The combination of the action group and the action determines the TAM permission string required to assign membership to externalized Portal roles.

    -   **Default value**

        m

    -   **Examples**

        :

-   **wp.ac.impl.PDActionGroup**

    -   **Description**

        When the Tivoli Access Manager external authorization plugin is started, it will detect and, if necessary, create a custom action group in Tivoli Access Manager. The combination of the action group and the action determines the TAM permission string required to assign membership to externalized Portal roles.

    -   **Default value**

        \[WP80\]

    -   **Examples**

        :

-   **wp.ac.impl.PDCreateAcl**

    -   **Description**

        When Portal externalizes a role, it can automatically create and attach a TAM ACL granting membership to the user doing the role. If you select false, the TAM administrator will be responsible for creating TAM ACLs to allow access to Portal roles.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available


## Tivoli Access Manager: Portal vault parameters

The following information is used to confgure a vault for Tivoli Access Manager.

-   **wp.ac.impl.vaultType**

    -   **Description**

        This value is the new vault type identifier representing the Tivoli GSO lockbox vault.

    -   **Default value**

        AccessManager

    -   **Examples**

        None available

-   **wp.ac.impl.vaultProperties**

    -   **Description**

        This value defines a properties file used to configure the vault with TAM specific user and SSL connection information. This file will automatically be created in the wp\_profile/shared/app/config sub-directory and populated by the ant task based on previous task execution.

    -   **Default value**

        accessmanagervault.properties

    -   **Examples**

        :

-   **wp.ac.impl.manageResources**

    -   **Description**

        This value determines if the portal credential vault or any custom portlet is allowed to create new resource objects in TAM. If you set this value to false, your Tivoli administrator must define the accessible resources to associate users with using the Tivoli command line or GUI.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        :

-   **wp.ac.impl.readOnly**

    -   **Description**

        This value determines if the portal credential vault or any custom portlet is allowed to modify the secrets stored in TAM. If you set this value to true \("Read Only"\), the Tivoli administrator must change the credentials associated with resources using the Tivoli command line or GUI.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available


## Netegrity SiteMinder: Portal/SiteMinder authorization parameters

The following parameters enables HCL Portal to authenticate wit Netegrity SiteMinder.

-   **wp.ac.impl.SMDomain**

    -   **Description**

        This value is the SiteMinder Domain containing all externalized portal resources.

    -   **Default value**

        HCL Portal v80

    -   **Examples**

        None available

-   **wp.ac.impl.SMScheme**

    -   **Description**

        This value is the SiteMinder Authentication scheme object name to use when creating realms.

    -   **Default value**

        Basic

    -   **Examples**

        None available

-   **wp.ac.impl.SMAgent**

    -   **Description**

        This value is the SiteMinder custom or 4.x web agent created to allow communication between HCL Portal and SiteMinder.

    -   **Default value**

        ReplaceWithYourSiteMinderAgentName

    -   **Examples**

        None available

-   **wp.ac.impl.SMAgentPwd**

    -   **Description**

        This value is the SiteMinder custom or 4.x agent password.

    -   **Default value**

        ReplaceWithYourSiteMinderAgentPwd

    -   **Examples**

        None available

-   **wp.ac.impl.SMAgentGroup**

    -   **Description**

        An externalized portal resource is assigned to a SiteMinder custom agent for SiteMinder isProtected and isAuthorized calls. In a non-cluster, the agent specified in the wp.ac.impl.SMAgent parameter is used. However, in a cluster, you must specify a common SiteMinder Agent Group to be assigned to the resource.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **wp.ac.impl.SMAdminId**

    -   **Description**

        This value is the SiteMinder administrator who must have a scope of System because new SiteMinder domains and realms will be created, as well as the realms representing Portal roles and reference to the webagent.

    -   **Default value**

        siteminder

    -   **Examples**

        None available

-   **wp.ac.impl.SMAdminPwd**

    -   **Description**

        This value is the password for the SiteMinder administrative user.

    -   **Default value**

        ReplaceWithYourSiteMinderAdminPwd

    -   **Examples**

        None available

-   **wp.ac.impl.SMUserDir**

    -   **Description**

        This value is the SiteMinder User Directory object referencing the LDAP server used for Portal users and groups.

    -   **Default value**

        ReplaceWithYourSiteMinderUserDirectoryObject

    -   **Examples**

        None available

-   **wp.ac.impl.SMFailover**

    -   **Description**

        This value is the failover mode for the Siteminder Policy Server. SMFailover must be set to true if more than 1 policy server is listed in the SMServers property \(wp.ac.impl.SMServers\).

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **wp.ac.impl.SMServers**

    -   **Description**

        This value is a comma delimited list of server for the SiteMinder agent. Important: If your Policy Servers are listening on non-default ports \(for example: not 44441,44442,44443\), you must add the port property for each policy server manually in the ExternalAccessControlService.properties file.

    -   **Default value**

        your.Policy.Server.ipaddress

    -   **Examples**

        None available


## WSRP configuration parameters

-   **WsrpContextRoot**

    -   **Description**

        Type the context root to use for web services for remote portlets. If you specify wsrp as the context root, the following is an example URL: http://localhost:80/wsrp

    -   **Default value**

        wsrp

    -   **Examples**

        WSRP context root:: /wsrp


