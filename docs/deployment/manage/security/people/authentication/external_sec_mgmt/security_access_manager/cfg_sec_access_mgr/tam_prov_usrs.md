# Configuring Security Access Manager for authentication, authorization, and the Credential Vault

You can configure Security Access Manager for authentication, authorization, and the vault adapter with one task.

1.  Start the Security Access Manager policy and authorization servers, which are mandatory for successful configuration and for single sign-on \(SSO\) to occur.

2.  Create your junctions on the WebSEAL server. Refer to the *IBM Security Access Manager for e-business* documentation for guidance on junction creation. Complete the following steps to create a virtual host TCP junction:

    1.  Open a pdadmin command from any node that has a Security Access Manager run time component installed. You can use the Security Access Manager Server node, WebSEAL node, or the HCL Portal node.

    2.  The general format for the pdadmin command to create a virtual host junction is

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
        -   -h hostname: This parameter defines the backend server to which the junction connects. In most situations, the host name is the HTTP server that sits in front of HCL Digital Experience. This parameter is mandatory when you create a virtual host junction.
        The \[options\] includes the following parameters:

        -   -p port: This parameter defines the port number for the backend server to which the junction connects. If not specified, the default value is 80 for HTTP or 443 for HTTPS. It is best to specify this value explicitly in the junction creation command even if the default values are in use.
        -   -v vhost\_name\[:port\]: This parameter is the virtual host name and port number that defines the junction. WebSEAL maps incoming requests to this host name and port to this junction. If not specified, the values default to the -h hostname and -p port values.
        -   -c header\_type: This parameter inserts the Security Access Manager client identity in HTTP headers across the junction. The header\_type argument can include any combination of the following Security Access Manager HTTP header types:

            -   \{iv\_user\|iv\_user-l\}
            -   iv\_groups
            -   iv\_creds
            -   all
            The header types must be comma-separated, and cannot have a space between the types. For example: -c iv\_user,iv\_groups. Specifying -c all is the same as specifying -c iv\_user,iv\_groups,iv\_creds. This parameter is valid for all junctions except for the type of local. The setting here depends on how you want your TAI running within WebSphere® Application Server to operate. In certain modes, the TAI might be looking for the presence of one or more of these headers. The TAI looks for these headers to know that it must claim the request when interrogated by WebSphere Application Server security. This setting must be set to match what the TAI is looking for. Consult your WebSphere system administrator if you are in doubt as to how the TAI is configured.

        -   -b: This option controls how WebSEAL passes authentication information to the backend server. Usually this setting depends on how you want the TAI to be configured in WebSphere to validate a trust relationship with WebSEAL. The usual option that is chosen is -b supply. For more information, see the *WebSEAL Administration Guide* or the *ETAI installation and configuration* documentation.
        -   -k: This option controls whether WebSEAL includes its own session cookie in the request to the backend server. In some situations, sending the WebSEAL session cookie to the backend server is necessary. This action is necessary to support single sign-on from HCL Portal to other backend services where WebSEAL also protects those backend services.
        -   **Note:** Junctions to HCL Portal whether direct or through an HTTP server does not support the -q option the query\_contents function. Query\_contents is not possible on HCL Digital Experience.

        The following information is a sample command to create a virtual host TCP junction, on the web 1 WebSEAL instance that is running on a host webseal.yourco.com, for the virtual host name portalvhost.yourco.com running on port 80 that requires a TAI in WebSphere Application Server. The virtual host junction is labeled vhost\_junction\_portal\_1. The virtual host junction host name must be mapped in DNS to the WebSEAL server. The portal or http server is running on host portal.yourco.com and is using port 8080:

        ```
        pdadmin> server task web1-webseald-webseal.yourco.com virtualhost create -t tcp -v portalvhost.yourco.com:80 -h portal.yourco.com -p 8080 -c all -k -b supply vhost_junction_portal_1
        ```

3.  If you plan to use an SSL junction, more steps are needed before you can create the junction. The necessary key and truststore must be set up with the correct certificates to enable SSL. Follow the instructions in steps 1 - 3 of the topic about *configuring SSL*. Then, complete the following steps to create the virtual host junction:

    1.  Use the IBM® Key Management utility to load the web server certificate into the key ring for the appropriate instance of WebSEAL. See the *HTTP Server* documentation for more details.

    2.  Restart WebSEAL.

    3.  Follow the steps that are mentioned earlier to create the junction. But change the -t value to ssl and add the appropriate set of options from the Mutually Authenticated SSL junctions portion of the WebSEAL Administration Guide: -B, -D,-K, -U, and -W.

4.  Enter the following tasks on the pdadmin command to create the trusted user account.

    **Tip:** This step is mandatory for TAI junctions only. Skip this step if you created an LTPA junction. An LTPA junction is created when you use the -A parameter. Refer to the *Security Access Manager for e-business* documentation for this advanced configuration.

    The trusted user account in the Security Access Manager user registry must be the same as the one that the TAI within WebSphere Application Server is configured to use. It is the ID that WebSEAL uses to identify itself to WebSphere Application Server by using the -b supply option, and it is one of the underlying TAI security requirements.

    **Note:** To prevent potential vulnerabilities, do not use the `sec_master` or `wpsadmin` users for the trusted user account. The trusted user account must be a dedicated user account for the purposes of communication between WebSEAL and the TAI.

    1.  pdadmin\> user create webseal\_userid webseal\_userid\_DN firstname surname password

    2.  pdadmin\> user modify webseal\_userid account-valid yes

5.  **Clustered environments:** Complete this step on all nodes.

    Run the following task in the [wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)/ConfigEngine directory to validate that the PdPerm.properties file is correct and that communication between HCL Portal and the Security Access Manager server works:

    **Tip:** Run the validate-pdadmin-connection task on the HCL Portal node or on each node in a clustered environment. In a clustered environment, WasPassword is the Deployment Manager administrator password. The wp.ac.impl.PDAdminPwd is the Security Access Manager administrative user password.

    |Operating system|Task|
    |----------------|----|
    |AIX®|    ```
./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                              -Dwp.ac.impl.PDAdminPwd=password
    ```

|
    |HP-UX|    ```
./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                              -Dwp.ac.impl.PDAdminPwd=password
    ```

|
    |IBM i|    ```
ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                            -Dwp.ac.impl.PDdAdminPwd=password
    ```

|
    |Linux™|    ```
./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                              -Dwp.ac.impl.PDAdminPwd=password
    ```

|
    |Solaris|    ```
./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                              -Dwp.ac.impl.PDAdminPwd=password
    ```

|
    |Windows™|    ```
ConfigEngine.bat validate-pdadmin-connection -DWasPassword=password 
                                             -Dwp.ac.impl.PDAdminPwd=password
    ```

|
    |z/OS®|    ```
./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                              -Dwp.ac.impl.PDAdminPwd=password
    ```

|

    **If the task does not run successfully:** Run the run-svrssl-config task to create the properties file. For information, refer to *Creating the PdPerm.properties file*. Then, run the validate-pdadmin-connection task again. If the task is not successful after a second attempt, do not proceed with any subsequent steps. The fact that the task does not run successfully indicates that your portal cannot connect to the Security Access Manager server. Troubleshoot the connectivity issue between your portal instance and the Security Access Manager server.

6.  Use a text editor to open the wkplc\_comp.properties file in the following directory:

    -   AIX HP-UX Linux Solaris: [wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties
    -   IBM i: [wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties
    -   Windows: [wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)\\ConfigEngine\\properties
    **Clustered environments:** Complete this step on all nodes.

7.  Updating properties in the wkplc\_comp.properties.

    1.  Update the Namespace management parameters in the wkplc\_comp.properties file for Advanced Security Configuration by using External Security Managers

        1.  For wp.ac.impl.EACserverName, type the Namespace context information to further distinguish externalized portal role names from other role names in the namespace.

            **Note:** If set, wp.ac.impl.EACcellName and wp.ac.impl.EACappname must also be set. All three parameters must be set or none of them.

        2.  For wp.ac.impl.EACcellName, type the Namespace context information to further distinguish externalized portal role names from other role names in the namespace.

            **Note:** If set, wp.ac.impl.EACserverName and wp.ac.impl.EACappname must also be set.

        3.  For wp.ac.impl.EACappname, type the Namespace context information to further distinguish externalized portal role names from other role names in the namespace.

            **Note:** If set, wp.ac.impl.EACcellName and wp.ac.impl.EACserverName must also be set.

        4.  For wp.ac.impl.reorderRoles, type false to keep the role order or true to reorder the roles by resource type first.
    2.  PDJrteCfg command and file system parameters
        1.  For wp.ac.impl.TamHost under the SvrSslCfg command parameter heading in the wkplc\_comp.properties file, type the Security Access Manager Policy Server that is used when you run PDJrteCfg.
    3.  WebSphere Application Server WebSEAL TAI parameters
        1.  Enter the following parameter in the wkplc\_comp.properties file; go to the WebSEAL junction parameters heading:

            **Cluster note:** Complete this step on all nodes in the cluster. The following parameters must match on all nodes in the clustered environment. The one exception is the wp.ac.impl.PDServerName parameter.

            -   For wp.ac.impl.TAICreds, type the headers that are inserted by WebSEAL that the TAI uses to identify the request as originating from WebSEAL.
        2.  Enter the following parameters in the wkplc\_comp.properties file; go to the WebSEAL TAI parameters heading:

            **Cluster note:** Complete this step on all nodes in the cluster. The following parameters must match on all nodes in the clustered environment. The one exception is the wp.ac.impl.PDServerName parameter.

            -   Optional: For wp.ac.impl.hostnames, type the host name that sets the WebSEAL TAI's host name parameter. This value must match the -h and -p parameters from the junction creation command.
            -   Optional: For wp.ac.impl.ports, type the port that is used to set the WebSEAL TAI's ports parameter. This value must match the -p parameter from the junction creation command.
            -   For wp.ac.impl.loginId, type the reverse proxy identity that is used when you create a TCP junction. This value must match the trusted user account.
    4.  Update the following parameters in the wkplc\_comp.properties file; go to the Portal authorization parameters heading:
        1.  For wp.ac.impl.PDRoot, type the root object space name in the Security Access Manager namespace for the resource entries for this portal. All Portal roles are installed with this entry. For multiple profiles and portal instances that all share a common Security Access Manager instance, choose a unique name for each root object space entry. This unique name helps to easily distinguish the resources for different instances. Or use a common PDRoot value for all Portal instances so that all Portal roles from any instance have a common parent. You can then use the EACappname parameter to distinguish between instances. If it better suits your administration models, you can also mix these two approaches, by using a common PDRoot value for some instances, and unique PDRoot values for others.
        2.  For wp.ac.impl.PDAction, type the Custom Action created by the Security Access Manager external authorization plug-in. The combination of the action group and the action determines the Security Access Manager permission string. The permission string is used to assign membership to externalized portal roles. You might want to check with your Security Access Manager administrator to determine what they want the PDActionGroup and PDAction values to be.
        3.  For wp.ac.impl.PDActionGroup, type the Custom Action group that is created by the Security Access Manager external authorization plug-in. The combination of the action group and the action determines the Security Access Manager permission string. The permission string is used to assign membership to externalized portal roles.
        4.  For wp.ac.impl.PDCreateAcl, set the value to true to automatically create and attach a Security Access Manager ACL when HCL Portal externalizes the roles for a resource. Set the value to false to not create and attach a Security Access Manager ACL when HCL Portal externalizes the roles for a resource. In this case, the Security Access Manager Administrator must manually create and attach ACLs to the object space entries for the externalized portal resources and roles. Any ACLs created manually in this way, must use the PDAction and PDActionGroup values in order for the permissions to be found.
    5.  Enter the following parameters in the wkplc\_comp.properties file; go to the Portal vault parameters heading:

**Cluster note:** Complete this step on all nodes in the cluster. The following parameters must match on all nodes in the clustered environment. The one exception is the wp.ac.impl.PDServerName parameter.

        1.  For wp.ac.impl.vaultType, type the new vault type identifier that represents the Tivoli® GSO lockbox vault.
        2.  For wp.ac.impl.vaultProperties, type the file that is used to configure the vault with Security Access Manager specific user and SSL connection information.
        3.  For wp.ac.impl.manageResources, type true if the credential vault or any custom portlets are allowed to create new resource objects in Security Access Manager. Or type false to allow only the Security Access Manager administrator to define the accessible resources to associate users with from the command line or graphical user interface.
        4.  For wp.ac.impl.readOnly, type true to allow credential vault or any custom portlets to modify the secrets that are stored in Security Access Manager. Or type false to allow only the Security Access Manager administrator to modify the secrets from the command line or graphical user interface.
8.  Save your changes to the properties file.

9.  Open a command prompt and change to the [wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)/ConfigEngine directory.

10. Run the following task to enable Security Access Manager authentication, authorization, and the credential vault:

    -   AIX: ./ConfigEngine.sh enable-tam-all -DWasPassword=password
    -   HP-UX: ./ConfigEngine.sh enable-tam-all -DWasPassword=password
    -   IBM i: ConfigEngine.sh enable-tam-all -DWasPassword=password
    -   Linux: ./ConfigEngine.sh enable-tam-all -DWasPassword=password
    -   Solaris: ./ConfigEngine.sh enable-tam-all -DWasPassword=password
    -   Windows: ConfigEngine.bat enable-tam-all -DWasPassword=password
    **Clustered environments:**

    -   Complete this step on all nodes.
    -   WasPassword is the Deployment Manager administrative password.
    **If the task does not run successfully:** Ensure the values that you specified in wkplc\_comp.properties are valid.

11. Complete the following steps to set the value for the systemcred.dn property:

    **Note:** The systemcred.dn property defines the distinguished name of the vault administrative user. All system credentials are stored under the user account. For Security Access Manager, this user must be an existing Security Access Manager user. The Security Access Manager adapter checks if the user exists in Security Access Manager before the slots are accessed.

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    3.  Click **WP CredentialVaultService**.

    4.  Under **Additional Properties**, click **Custom properties**.

    5.  Edit the systemcred.dn property. Set the value to an existing Security Access Manager user.

12. Go to [Enabling user provisioning](../../../manage/security/people/authentication/external_sec_mgmt/security_access_manager/usr_prov) to enable user provisioning.

13. If you are using Security Access Manager integrated with HCL Digital Experience in a stand-alone environment that does not include a web server between WebSEAL and Portal, complete the following steps:

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Go to **Servers** \> **Server Types** \> **Web application servers** \> **HCL Digital Experience** \> **Web container settings** \> **Web Container** and then click **Additional Properties** \> **Custom properties**.

    3.  Click **New** and then add the com.ibm.ws.webcontainer.extracthostheaderport custom property with a value of true.

    4.  Click **OK**.

    5.  Click **New** and add the trusthostheaderport custom property with a value of true.

    6.  Click **OK**.

    7.  Click **Save** to save your changes.

    8.  Log out of the WebSphere Integrated Solutions Console.

14. Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../../../manage/stopstart).

15. Go to the WebSEAL node and edit the webseald-instance.conf file for the appropriate WebSEAL instance. An example is webseald-default.conf. This file sets the `basicauth-dummy-passwd` value to the password for the ID that WebSEAL uses to identify itself to WebSphere Application Server. This password is the trusted user ID and password that were created in an earlier step. Stop and start the WebSEAL server before you continue.

16. If your WebSEAL instance is on the Windows operating system, limit the length of the generated URLs. Edit the webseald-instance.conf file and change the process-root-requests property value to filter to avoid problems with WebSEAL processing.

17. Some functions of HCL Digital Experience require the use of the PUT, and DELETE HTTP method. By default, WebSEAL does not allow these requests. You must either allow this method at the applicable WebSEAL ACL and web server, or change the HTTP methods in the x-method-override configuration in the WebSEAL config file webseald-instance.conf.



**Related information**  


[Creating the PdPerm.properties file](../../../manage/security/people/authentication/external_sec_mgmt/security_access_manager/cfg_sec_access_mgr/un_svrssl_config)

[Setting up SSL](../../../manage/security/information/confidentiality/configuring_ssl)

[Extended Tivoli Access Manager Trust Association Interceptor Plus \(ETAI\)](https://support.hcltechsw.com/csm)

[WebSEAL Administration Guide](https://www.ibm.com/docs/en/SSPREK_7.0.0/com.ibm.isam.doc_80/ameb_webseal_admin_pdf.pdf)

[ETAI Download](https://www.ibm.com/support/pages/node/574293)

[Migrating Security Access Manager](../../../manage/migrate/next_steps/post_mig_activities/addon_integration_task/mig_tam_consid)
