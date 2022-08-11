# Migrating Security Access Manager

The HCL Digital Experience migration process migrates the security configurations. However, there is no provision for the automatic migration of any junction definitions that exist for the previous version of HCL Digital Experience in WebSEAL. You must replace the old junction definitions with the new virtual host junction definitions.

The migration process migrates security configurations such as the user registry, VMM settings, and the IBM® WebSphere® Application Server security setup, including any Trust Association Interceptor \(TAI\) configurations. You must install the latest version of TAI on the current version of HCL Portal server. This installation configures the new HCL Digital Experience instance for integration with Security Access Manager WebSEAL.

The HCL Digital Experience migration process cannot change the junction definitions in WebSEAL to point to the new server. It cannot switch from standard non-transparent or transparent junctions to the new virtual host junctions. You must manually run these tasks within Security Access Manager. The Security Access Manager administrator staff often runs these tasks, which might be separate from the HCL Portal administrative staff.

**Tip:** Complete the following steps with the instructions in the *Security Access Manager eBusiness WebSEAL Administrative Guide*.

**Attention:** These steps describe that you create the new virtual host junction before you delete the old junctions. This approach assumes that there are no detected conflicts to prevent the new junction from coexisting with the old junctions. A conflict might arise if the vhost\_label value is the same between the new and old junctions. Try to avoid or work around these conflicts. If you cannot avoid the conflict, delete the old junction before you create the new virtual host junction. Create a backup copy of the WebSEAL configuration file first so you can refer to it if necessary.

1.  Complete the following steps on the previous instance of HCL Digital Experience:

    1.  Open the WebSEAL configuration file.

    2.  Search the file for stanzas that define the junctions.

        For example: \[junction:junction\_name\].

    3.  Record the configuration value for each junction for future reference.

    4.  Save a backup copy of the WebSEAL configuration file.

2.  Create the new virtual host junctions that are based on the junctions from the previous instance:

    The general format for the pdadmin command to create a virtual host junction is

    ```
    pdadmin> server task WebSEAL-instance\_name-webseald-WebSEAL-HostName virtualhost create -t type -h hostname \[options\] vhost-label
    ```

    The following information describes the mandatory parameters in the pdadmin command:

    -   The `WebSEAL-instance\_name-webseald-WebSEAL-HostName` has three parts, as documented in the WebSEAL Administration Guide:

        1.  The configured name of a single WebSEAL instance, for example web 1
        2.  The literal string `-websealed-`
        3.  The host name, for example, webseal.yourco.com
        The resulting combination would be `web 1-websealed-webseal.yourco.com`. You can use the pdadmin server list command to display the correct format of the server name.

    -   The virtual host label \(vhost-label\) is the name for the virtual host junction.
        -   Virtual host junctions are always mounted at the root of the WebSEAL object space.
        -   You can refer to a junction in the pdadmin utility with this label.
        -   The virtual host junction label must be unique within each instance of WebSEAL.
        -   Because the label represents virtual host junctions in the protected object space, the label name must not contain the forward slash character \(/\).
    -   -t type: This parameter defines whether the junction is encrypted \(-t ssl\) or not encrypted \(-t tcp\). This parameter is mandatory when you create a virtual host junction. For more information about other possible values, see the *WebSEAL Administration Guide*.
    -   -h hostname: This parameter defines the backend server to which the junction connects. In most situations, the host name is the HTTP server that sits in front of HCL Portal. This parameter is mandatory when you create a virtual host junction.
    The \[options\] includes the following parameters:

    -   -p port: This parameter defines the port number for the backend server to which the junction connects. If not specified, the default value is 80 for HTTP or 443 for HTTPS. It is best to specify this value explicitly in the junction creation command even if the default values are in use.
    -   -v vhost\_name\[:port\]: This parameter is the virtual host name and port number that defines the junction. WebSEAL maps incoming requests to this host name and port to this junction. If not specified, the values default to the -h hostname and -p port values.
    -   -c header\_type: This parameter inserts the Security Access Manager client identity in HTTP headers across the junction. The header\_type argument can include any combination of the following Security Access Manager HTTP header types:

        -   \{iv\_user\|iv\_user-l\}
        -   iv\_groups
        -   iv\_creds
        -   all
        The header types must be comma-separated, and cannot have a space between the types. For example: -c iv\_user,iv\_groups. Specifying -c all is the same as specifying -c iv\_user,iv\_groups,iv\_creds. This parameter is valid for all junctions except for the type of local. The setting here depends on how you want your TAI running within WebSphere Application Server to operate. In certain modes, the TAI might be looking for the presence of one or more of these headers. The TAI looks for these headers to know that it must claim the request when interrogated by WebSphere Application Server security. This setting must be set to match what the TAI is looking for. Consult your WebSphere system administrator if you are in doubt as to how the TAI is configured.

    -   -b: This option controls how WebSEAL passes authentication information to the backend server. Usually this setting depends on how you want the TAI to be configured in WebSphere to validate a trust relationship with WebSEAL. The usual option that is chosen is -b supply. For more information, see the *WebSEAL Administration Guide* or the *ETAI installation and configuration* documentation.
    -   -k: This option controls whether WebSEAL includes its own session cookie in the request to the backend server. In some situations, sending the WebSEAL session cookie to the backend server is necessary. This action is necessary to support single sign-on from HCL Portal to other backend services where WebSEAL also protects those backend services.
    -   **Note:** Junctions to HCL Digital Experience whether direct or through an HTTP server does not support the -q option the query\_contents function. Query\_contents is not possible on HCL Digital Experience

    The following information is a sample command to create a virtual host TCP junction, on the web 1 WebSEAL instance that is running on a host webseal.yourco.com, for the virtual host name portalvhost.yourco.com running on port 80 that requires a TAI in WebSphere Application Server. The virtual host junction is labeled vhost\_junction\_portal\_1. The virtual host junction host name must be mapped in DNS to the WebSEAL server. The portal or http server is running on host portal.yourco.com and is using port 8080:

    ```
    pdadmin> server task web1-webseald-webseal.yourco.com virtualhost create -t tcp -v portalvhost.yourco.com:80 -h portal.yourco.com -p 8080 -c all -k -b supply vhost_junction_portal_1
    ```

3.  Delete the old junctions with the appropriate administration commands.

    server task instance\_name -webseal-host\_name delete junction\_point


**Parent topic:**[Add-ons, features, and third-party integration tasks](../migrate/mig_post_ptl_int_addon.md)

**Related information**  


[Configuring Security Access Manager for authentication only](../security/cfg_tam_auth.md)

[Configuring Security Access Manager for authentication, authorization, and the Credential Vault](../security/tam_prov_usrs.md)

