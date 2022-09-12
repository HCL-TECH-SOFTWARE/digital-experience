# External Access Control Service

The portal External Access Control Service is responsible for collecting authorization data from external security managers, such as Computer Associates eTrust SiteMinder or IBM Security Access Manager.

In the WebSphere® Integrated Solutions Console, the portal External Access Control Service is listed as **WP ExternalAccessControlService**.

In the portal External Access Control Service, you can modify the configuration properties listed in the following. However, plan well ahead and apply special care when modifying these properties.

## General properties of the External Access Control Service

These properties are used for general purposes of the External Access Control Service.

-   **externalaccesscontrol.ready = \(false\)**

    This property indicates whether the configuration in this file has been configured to connect to the External Security Manager. The default value is `false` .

-   **externalaccesscontrol.server = HCL Portal and HCL Web Content Managerexternalaccesscontrol.application = WPSexternalaccesscontrol.cell = cell**

    Role name representations are qualified with a context built by these three properties. For example, the **Administrator@External\_Access\_Control/xxx/xxx** is represented as follows:

    -   **Security Access Manager: Protected object space entry**

        ```
        /WPSv6/Administrator@External_Access_Control/xxx/xxx/WPS/HCL Portal and HCL Web Content Manager/cell
        ```

    -   **eTrust SiteMinder:**

        ```
        resource/subrealms under Domain: WebSphere Portal v8
        /cell/HCL Portal and HCL Web Content Manager/WPS/Administrator@External_Access_Control/xxx/xxx
        ```


## Access Manager configuration

Use the following properties to configure the connection between HCL Portal and your Tivoli Access Manager.

-   **externalaccesscontrol.pdroot = \(/WPSv6\)**

    After you completed the `AMJRTE` and `SrvSslCfg` configuration tasks, the following directives are required to allow HCL Portal to use Tivoli Access Manager as an External Security Manager. Provide the root of your Protected Object Space for Portal Server entries.

-   **externalaccesscontrol.pduser = sec\_masterexternalaccesscontrol.pdpw = passw0rd**

    Use these properties to provide an administrative user ID and password with adequate rights in Tivoli to create, delete, modify the objects in the Protected Object Space. You can use the WebSphere® Application Server PropFilePasswordEncoder utility to mask the password. Using PropFilePasswordEncoder will remove any comments and uncommented properties. Therefore create a back up copy of this file for future reference. Example for AIX® IBM® i Linux™ Solaris Windows™:

    ```
    [AppServer\_root](../reference/wpsdirstr.md#was_root)/bin/PropFilePasswordEncoder 
    [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/properties/ExternalAccessControlService.properties 
            externalaccesscontrol.pdpw
    ```

    Example for z/OS®:

    ```
    [AppServer\_root](../reference/wpsdirstr.md#was_root)/bin/PropFilePasswordEncoder 
    [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/properties/ExternalAccessControlService.properties 
            externalaccesscontrol.pdpw
    ```

    !!!note
        This command should be typed *on one line* in a command line window.

-   **externalaccesscontrol.pdurl=file:///$\{WAS\_INSTALL\_ROOT\}/java/jre/PdPerm.properties**

    Use this property to specify the URL location of the Access Manager properties file for AMJRTE. This URL must be in the format `file:///directory\_path\_to\_properties\_file` . HTTP URLs are not supported.

-   **externalaccesscontrol.createAcl = \(true\)**

    This property is optional. Use this property to specify whether Access Control Lists \(ACLs\) are created in Access Manager for roles that are stored externally. The default is `true`. If this property is set to `false`, the Access Manager administrator will be responsible for all ACL linkages between Security Access Manager and HCL Portal. Possible values for this property are:

    -   **true**

        A Security Access Manager ACL will be created for **every** HCL Portal resource. This is the default.

    -   **false**

        No ACLs will be created for portal objects.

-   **externalaccesscontrol.pdactiongroup = \(\[WPS\]\)externalaccesscontrol.pdAction = \(m\)**

    These properties are optional. Use these properties to specify the action group and the customized actions to map to portal role membership. If these items do not exist, they will be created at startup. The values previously given are the default values.


## Computer Associates eTrust SiteMinder policy server information

Use the following properties to configure the connection between HCL Portal and your Policy Server.

-   **externalaccesscontrol.domainname = WebSphere Portal V 8**

    Use this property to specify the domain name that is to be created in the eTrust SiteMinder administrative GUI. All realms and sub-realms will be created under this domain. This domain will be created when starting HCL Portal.

-   **externalaccesscontrol.scheme = \(Basic\)**

    Use this property to specify the scheme that is to be to associated with the realms. You must define this scheme in eTrust SiteMinder before starting HCL Portal. The default value is `Basic`.

-   **externalaccesscontrol.agentname = wpsagentexternalaccesscontrol.agentsecret = passw0rd**

    Use these properties to specify the agent name and secret to establish a run time connection with eTrust SiteMinder. The agent should be a web agent with a static shared secret, so that Web Agents later than Version 4.6 of WebAgents should enable the property `supports 4.x agents` on the eTrust SiteMinder web agent. You can use the WebSphere® Application Server PropFilePasswordEncoder utility to mask the password.

    !!!note
        Using PropFilePasswordEncoder removes all comments and all properties that are commented out. Therefore make sure you create a back up copy of this file for future reference *before* using the PropFilePasswordEncoder utility.

    An example of masking the password is:

    `[AppServer\_root](../reference/wpsdirstr.md#was_root)/bin/PropFilePasswordEncoder [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/properties/ExternalAccessControlService.properties externalaccesscontrol.agentsecret`

    !!!note
        Type this command *on one line* in a command line window.

-   **externalaccesscontrol.admin = siteminderexternalaccesscontrol.password = passw0rd**

    Use these properties to specify the administrative user ID and password for a user who can create, delete, and modify eTrust SiteMinder objects that are used to represent HCL Portal roles. This user ID must have sufficient access to domain level objects in eTrust SiteMinder. You can use the WebSphere® Application Server PropFilePasswordEncoder utility to mask the password.

    !!!note
        Using PropFilePasswordEncoder removes all comments and all properties that are commented out. Therefore make sure you create a back up copy of this file for future reference *before* using the PropFilePasswordEncoder utility.

    An example of masking the password is:

    `[AppServer\_root](../reference/wpsdirstr.md#was_root)/bin/PropFilePasswordEncoder [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/properties/ExternalAccessControlService.properties externalaccesscontrol.password`

    `[AppServer\_root](../reference/wpsdirstr.md#was_root)/bin/PropFilePasswordEncoder [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/ExternalAccessControlService.properties externalaccesscontrol.password`

-   **externalaccesscontrol.userdir = \(User Directory 1\)**

    Use this property to specify the User Directory that is associated with the domain. You can configure the failover for user directories in the eTrust SiteMinder administrative GUI. The user directory must exist before you start HCL Portal.

-   **externalaccesscontrol.failOver = \(false\)**

    Use this property to specify whether the ESM subsystem should switch to another Policy Server if it cannot contact the current one. Possible values are `true` and `false`. You can specify this property as either `externalaccesscontrol.failOver` or as `externalaccesscontrol.failover` .

    !!!note
        It is important that this value and the number of Policy Server IP addresses that are specified by the `servers` property are carefully coordinated. If you specify multiple Policy Server addresses on the `servers` property, and this property is set to `false`, then the Computer Associate's Agent API will follow round-robin load balancing, by distributing or spraying requests between the configured Policy Servers. This may be appropriate for a TAI which is only doing `read` operations from the Policy Server\(s\), but not for `write` operations . If you have multiple servers defined in the `externalaccesscontrol.servers` property \(following next\), set `failOver` to `true` .

-   **externalaccesscontrol.servers = server1,server2, . . .**

    Use this property to specify the IP addresses of all the Policy Servers. Multiple addresses need to separated by commas. An example is: `servers=10.0.0.1,10.0.0.2` .

    !!!note
        If you have multiple servers defined in the `externalaccesscontrol.servers` property, set the `failOver` property to `true` .

    You can define the following properties for each server. In order to differentiate the properties for each server, specify the keys in the format `Server IP address.key=value` . The defaults are assumed for any keys that you omit. The available keys are as follows:

    -   **accountingPort = \(44441\)**

        The accounting port for the Policy Server. The default is 44441.

    -   **authenticationPort = \(44442\)**

        The authentication port for the Policy Server. The default is 44442.

    -   **authorizationPort = \(44443\)**

        The authorization port for the Policy Server. The default is 44442.

    -   **connectionMax = \(10\)**

        The maximum number of connections which the authorization service may make to this Policy Server. The default is 10.

    -   **connectionMin = \(1\)**

        The initial number of connections which the authorization service will establish with this Policy Server. The default is 1.

    -   **connectionStep = \(1\)**

        The number of connections that are to be allocated if the authorization service runs out of connections to the Policy Server. The default is 1.

    -   **timeout = \(20\)**

        The connection timeout in seconds. The default is 20.

    An example for server 10.0.0.1 is as follows:

    ```
        10.0.0.1.accountingPort=44441
        10.0.0.1.authenticationPort=44442
        10.0.0.1.authorizationPort=44443
        10.0.0.1.connectionMax=30
        10.0.0.1.connectionMin=10
        10.0.0.1.connectionStep=5
        10.0.0.1.timeout=60
    ```



