# Platform and user directory considerations 

There are unique considerations for operating systems that you should be aware of before you proceed with integrating collaboration software with HCL Portal. Also, in the context of collaboration integration, there are two types of user directories, Domino directory and then all other supported user directories.

## Platform considerations

Depending upon platform, Domino® servers in your environment have slightly different task and/or registry requirements:

-   **All platforms:**Domino IIOP is used to pre-populate drop-down lists shown when users personalize the collaborative portlets.
-   Windows™: Any Domino data source servers must have HTTP, LDAP, and Domino IIOP enabled.
-   AIX®SolarisLinux™: Any Domino data source servers must have HTTP, LDAP, and Domino IIOP enabled.
-   IBM® i: Any Domino data source servers must have HTTP and Domino IIOP enabled, and must use an LDAP user registry.
-   z/OS®: Any Domino data source servers must have HTTP, LDAP, and Domino IIOP enabled.

## User directory considerations

Directory considerations for Domino LDAP:

From the portal perspective, there are two types of Domino servers: the Domino server as a user repository \(Domino Directory server as an LDAP server\), and any Domino server that acts as a Domino data source for portlets: such a server is called a messaging/application server.

Because HCL Portal supports the use of Domino Directory as an LDAP server, you can set up the portal to use a Domino server as the user repository for users who access both the portal and any portlets that access Domino and collaboration products.

You can use a Domino server with LDAP enabled both as the user repository for the portal and for auto-detection of users' mail files, unless your portal user repository is so large that you want to use separate machines for performance reasons \(see *Performance considerations*\).

Directory considerations for Sametime :

If you will be using portlets for Domino and Sametime, the Sametime user directory can be any supported LDAP \(including Domino\) directory, or a native Domino directory. But it is recommended that Sametime use the same directory as the one configured for the portal, to avoid the additional configuration necessary to support both directories.

**Parent topic:**[Planning for collaborative servers and portlets ](../collab/i_domi_c_servers_plan.md)

