# Configuring Security Access Manager for authentication only

HCL Digital Experience and IBM WebSphere Application Server support the Trust Association Interceptors \(TAI\) that IBM Security Access Manager provides. If you use Security Access Manager for authorization, you must also use Security Access Manager for authentication. Using Security Access Manager only for authorization is not supported.

**Important information:**

-   The pdadmin command is a utility that supports Security Access Manager administrative functions.
-   This procedure requires that you are familiar with WebSEAL administration concepts as presented in the WebSEAL Administrator Guide. For complete descriptions of all the pdadmin command options to create junctions, refer to the *Security Access Manager* documentation, particularly the *WebSEAL Administration Guide*.
-   The following example assumes that a web server is located between the WebSEAL and HCL Digital Experience in the request flow. Thus, the junctions that are defined in the following instructions are configured for WebSEAL to forward requests to the HTTP server and then to HCL Digital Experience. If there is no HTTP server, modify the junction target host name and port values to enable direct communication from WebSEAL to HCL Digital Experience.
-   The following examples do not show any load balancing or other performance-related request features in WebSEAL. For more information about these advanced options, consult the *Security Access Manager* documentation.
-   The following examples show simple junction creation cases. Refer to the appropriate *WebSEAL Administration Guide* and *WebSphere® Application Server* documentation for information about advanced options, including generating WebSEAL LTPA Tokens in WebSEAL for SSO to WebSphere Application Server.

**Clustered environments:** Complete the validate-pdadmin-connection task on all nodes in the cluster. Complete all other steps on the primary node.

1.  Start the Security Access Manager policy and authorization servers, which are mandatory for successful configuration and for single sign-on \(SSO\) to occur.

2.  Create your junctions on the WebSEAL server. Refer to the *IBM Security Access Manager for e-business* documentation for guidance on junction creation. Complete the following steps to create a virtual host TCP junction:

    1.  Open a pdadmin command from any node that has a Security Access Manager run time component installed. You can use the Security Access Manager Server node, WebSEAL node, or the HCL Digital Experience node.

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
            The header types must be comma-separated, and cannot have a space between the types. For example: -c iv\_user,iv\_groups. Specifying -c all is the same as specifying -c iv\_user,iv\_groups,iv\_creds. This parameter is valid for all junctions except for the type of local. The setting here depends on how you want your TAI running within WebSphere Application Server to operate. In certain modes, the TAI might be looking for the presence of one or more of these headers. The TAI looks for these headers to know that it must claim the request when interrogated by WebSphere Application Server security. This setting must be set to match what the TAI is looking for. Consult your WebSphere system administrator if you are in doubt as to how the TAI is configured.

        -   -b: This option controls how WebSEAL passes authentication information to the backend server. Usually this setting depends on how you want the TAI to be configured in WebSphere to validate a trust relationship with WebSEAL. The usual option that is chosen is -b supply. For more information, see the *WebSEAL Administration Guide* or the *ETAI installation and configuration* documentation.
        -   -k: This option controls whether WebSEAL includes its own session cookie in the request to the backend server. In some situations, sending the WebSEAL session cookie to the backend server is necessary. This action is necessary to support single sign-on from HCL Digital Experience to other backend services where WebSEAL also protects those backend services.
        -   **Note:** Junctions to HCL Digital Experience whether direct or through an HTTP server does not support the -q option the query\_contents function. Query\_contents is not possible on HCL Digital Experience.

        The following information is a sample command to create a virtual host TCP junction, on the web 1 WebSEAL instance that is running on a host webseal.yourco.com, for the virtual host name portalvhost.yourco.com running on port 80 that requires a TAI in WebSphere Application Server. The virtual host junction is labeled vhost\_junction\_portal\_1. The virtual host junction host name must be mapped in DNS to the WebSEAL server. The portal or http server is running on host portal.yourco.com and is using port 8080:

        ```
        pdadmin> server task web1-webseald-webseal.yourco.com virtualhost create -t tcp -v portalvhost.yourco.com:80 -h portal.yourco.com -p 8080 -c all -k -b supply vhost_junction_portal_1
        ```

3.  If you plan to use an SSL junction, more steps are needed before you can create the junction. The necessary key and truststore must be set up with the correct certificates to enable SSL. Follow the instructions in steps 1 - 3 of the topic about *configuring SSL*. Then, complete the following steps to create the virtual host junction:

    1.  Use the IBM® Key Management utility to load the web server certificate into the key ring for the appropriate instance of WebSEAL. See the *HTTP Server* documentation for more details.

    2.  Restart WebSEAL.

    3.  Follow the steps that are mentioned earlier to create the junction. But change the -t value to ssl and add the appropriate set of options from the Mutually Authenticated SSL junctions portion of the WebSEAL Administration Guide: -B, -D,-K, -U, and -W.

4.  Enter the following tasks on the pdadmin command to create the trusted user account:

    **Tip:** This step is mandatory for TAI junctions only. Skip this step if you created an LTPA junction. An LTPA junction is created when you use the -A parameter. Refer to the *Security Access Manager for e-business* documentation for this advanced configuration.

    The trusted user account in the Security Access Manager user registry must be the same as the one that the TAI within WebSphere Application Server is configured to use. It is the ID that WebSEAL uses to identify itself to WebSphere Application Server by using the -b supply option, and it is one of the underlying TAI security requirements.

    **Note:** To prevent potential vulnerabilities, do not use the `sec_master` or `wpsadmin` users for the trusted user account. The trusted user account must be a dedicated user account for the purposes of communication between WebSEAL and the TAI.

    1.  pdadmin\> user create webseal\_userid webseal\_userid\_DN firstname surname password

    2.  pdadmin\> user modify webseal\_userid account-valid yes

5.  **Clustered environments:** Complete this step on all nodes.

    Run the following task in the [wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)/ConfigEngine directory to validate that the PdPerm.properties file is correct and that communication between HCL Portal and the Security Access Manager server works:

    **Tip:** Run the validate-pdadmin-connection task on the HCL Digital Experience node or on each node in a clustered environment. In a clustered environment, WasPassword is the Deployment Manager administrator password. The wp.ac.impl.PDAdminPwd is the Security Access Manager administrative user password.

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

6.  If you are using junctions that require a Trust Association Interceptor in WebSphere Application Server, you must install and configure the TAI if it was not already set up. To configure the Security Access Manager Trust Association Interceptor \(TAI++\), complete the following steps:

    1.  Use a text editor to open the wkplc\_comp.properties file in the [wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties directory. Enter the following parameters under the WebSphere Application Server WebSEAL TAI parameters heading:

    2.  Add the TAMTAIName parameter to the WebSphere Application Server WebSEAL TAI section.

    3.  Enter `com.ibm.ws.security.web.TAMTrustAssociationInterceptorPlus` as the value.

    4.  For wp.ac.impl.TAICreds, type the headers that are inserted by WebSEAL that the TAI uses to identify the request as originating from WebSEAL. Refer to the values entered for the -c header\_type parameter.

        For example, if you entered -c iv-user, then the value for wp.ac.impl.TAICreds is iv-user. If you entered -c all, then the value for wp.ac.impl.TAICreds is iv-user,iv-groups,iv-creds.

        **Important:** Never specify a header name for wp.ac.impl.TAICreds that the WebSEAL server is not sending over the junction.

    5.  For wp.ac.impl.hostnames, enter the fully qualified URL for HCL Digital Experience. This value must match the -h and -p parameters from the junction creation command.

    6.  For wp.ac.impl.ports, enter the port number that is used to access the host server that is identified in wp.ac.impl.hostnames. This value must match the -p parameter from the junction creation command.

    7.  For wp.ac.impl.loginId, enter the reverse proxy identity that is used when you create a TCP junction. This value must match the trusted user account.

    8.  For wp.ac.impl.BaUserName, enter the reverse proxy identity that is used when you create an SSL junction.

    9.  For wp.ac.impl.BaPassword, enter the password for the SSL junction reverse proxy ID.

        Save your changes to the properties file.

    10. Run the following task to configure TAI for Security Access Manager:

        **Clustered environments:** The WasPassword is the Deployment Manager administrative password. The `wp.ac.impl.PDAdminPWD` is the Security Access Manager administrative password.

        |Operating system|Task|
        |----------------|----|
        |AIX|        ```
./ConfigEngine.sh enable-tam-tai -DWasPassword=password 
                                 -Dwp.ac.impl.PDAdminPwd=password
        ```

|
        |HP-UX|        ```
./ConfigEngine.sh enable-tam-tai -DWasPassword=password 
                                 -Dwp.ac.impl.PDAdminPwd=password
        ```

|
        |IBM i|        ```
ConfigEngine.sh enable-tam-tai -DWasPassword=password 
                               -Dwp.ac.impl.PDAdminPwd=password
        ```

|
        |Linux|        ```
./ConfigEngine.sh enable-tam-tai -DWasPassword=password 
                                 -Dwp.ac.impl.PDAdminPwd=password
        ```

|
        |Solaris|        ```
./ConfigEngine.sh enable-tam-tai -DWasPassword=password 
                                 -Dwp.ac.impl.PDAdminPwd=password
        ```

|
        |Windows|        ```
ConfigEngine.bat enable-tam-tai -DWasPassword=password 
                                -Dwp.ac.impl.PDAdminPwd=password
        ```

|
        |z/OS|        ```
./ConfigEngine.sh enable-tam-tai -DWasPassword=password 
                                 -Dwp.ac.impl.PDAdminPwd=password
        ```

|

7.  Enable user provisioning.

    You must do this task only if you are using HCL Digital Experience to create and provision new users directly in LDAP, and you need these users to also be recognized by Security Access Manager. In an enterprise deployment of HCL Digital Experience this task would be unusual, as most large deployments have a separate user provisioning process, perhaps by using IBM Security Identity Manager. HCL Digital Experience reads from LDAP but does not create new users. For more information, see the related links section.

8.  If you are using Security Access Manager integrated with HCL Digital Experience in a stand-alone environment that does not include a web server between WebSEAL and Portal, complete the following steps:

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Go to **Servers** \> **Server Types** \> **Web application servers** \> **HCL Digital Experience** \> **Web container settings** \> **Web Container** and then click **Additional Properties** \> **Custom properties**.

    3.  Click **New** and then add the com.ibm.ws.webcontainer.extracthostheaderport custom property with a value of true.

    4.  Click **OK**.

    5.  Click **New** and add the trusthostheaderport custom property with a value of true.

    6.  Click **OK**.

    7.  Click **Save** to save your changes.

    8.  Log out of the WebSphere Integrated Solutions Console.

9.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../../../manage/stopstart).

10. Go to the WebSEAL node and edit the webseald-instance.conf file for the appropriate WebSEAL instance. An example is webseald-default.conf. This file sets the `basicauth-dummy-passwd` value to the password for the ID that WebSEAL uses to identify itself to WebSphere Application Server. This password is the trusted user ID and password that were created in an earlier step. Stop and start the WebSEAL server before you continue.

11. If your WebSEAL instance is on the Windows operating system, limit the length of the generated URLs. Edit the webseald-instance.conf file and change the process-root-requests property value to filter to avoid problems with WebSEAL processing.

12. Import HCL Digital Experience users and groups into Security Access Manager. Enter the following commands on the Security Access Manager administrative command, where wpsadmin is the user ID for the administrator, and wpsadmins is the administrators group name. The fully distinguished names of the user and group IDs vary depending on your LDAP settings.

    ```
     user import wpsadmin uid=wpsadmin,cn=users,dc=ibm,dc=com
     user modify wpsadmin account-valid yes
     group import wpsadmins cn=wpsadmins,cn=groups,dc=ibm,dc=com
    
    ```

13. Some functions of HCL Digital Experience require the use of the PUT, and DELETE HTTP method. By default, WebSEAL does not allow these requests. You must either allow this method at the applicable WebSEAL ACL and web server, or change the HTTP methods in the x-method-override configuration in the WebSEAL config file webseald-instance.conf.



**Related information**  


[Creating the PdPerm.properties file](../../security/people/authentication/external_sec_mgmt/security_access_manager/cfg_sec_access_mgr/un_svrssl_config)

[Setting up SSL](../../security/information/confidentiality/configuring_ssl)

[Extended Tivoli Access Manager Trust Association Interceptor Plus \(ETAI\)](https://support.hcltechsw.com/csm)

[WebSEAL Administration Guide](https://www.ibm.com/docs/en/SSPREK_7.0.0/com.ibm.isam.doc_80/ameb_webseal_admin_pdf.pdf)

[ETAI Download](https://www.ibm.com/support/pages/node/574293)

[Migrating Security Access Manager](../../../manage/migrate/next_steps/post_mig_activities/addon_integration_task/mig_tam_consid)

