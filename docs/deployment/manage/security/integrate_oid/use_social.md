# Configuring OpenID authentication

Identity providers include sites such as, but not limited to, Google, Yahoo, and Facebook. As an Administrator, you can select how to configure authentication to work with these identity providers.

Set your system time to match your local time.

Users can always register and log in with HCL Portal credentials. With the `enable-identityprovider-tai` task, you can choose between the following configurations:

!!!note "Remember"
    Google and Yahoo are known identity providers that use OpenID specifications. Facebook uses OAuth.

!!!note "Limitation"
    If you configure portal to use OpenID authentication with YAHOO as the identity provider, attribute exchange does not work. This limitation means that user attributes from your YAHOO OpenID account are not transferred to your portal user account.

-   Configure Facebook only, use the parameters that are designated as Facebook
-   Configure OpenID only, use the parameters that are designated as OpenID
-   Configure Facebook and OpenID, use the parameters that are designated as Facebook and OpenID

1.  If you plan to configure Facebook, register your HCL Portal server instances as Facebook applications. You must register two applications. One application is the protected path: /wps/myportal. One application is the public, unprotected path: /wps/portal.

    After you register, Facebook provides you with an application ID and an application secret. Use this information when you run the enable-identityprovider-tai task.

    !!!note "Tip"
        Your Facebook application has a private and public URL. The private URL is http://yourserver:yourport/wps/myportal/. The public URL is http://yourserver:yourport/wps/portal/.

2.  Run the following task from the wp_profile_root\ConfigEngine directory with the appropriate parameters:

    !!!note "Cluster note"
        Complete this step only on the primary node.

    CAUTION:

    If you rerun the enable-identityprovider-tai task, the task sets new properties and does not preserve the old configuration data. If you want to keep the existing data, you must add the new values to the existing values before you rerun the task.

    -   AIX®: `./ConfigEngine.sh enable-identityprovider-tai -DWasUserId=username -DWasPassword=password`
    -   Linux™: `./ConfigEngine.sh enable-identityprovider-tai -DWasUserId=username -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat enable-identityprovider-tai -DWasUserId=username -DWasPassword=password`
    
    Add the following parameters to customize the task for your business requirements:

    -   **-Didp.providerlist**

        Set the value to facebook,openid if you want to configure both options. Set the value to facebook to configure Facebook only. Set the value to openid to configure only identity providers that use the OpenID specifications. If you leave this field blank, the default value is facebook.

    -   **-Dfacebook_apps**

        If you are configuring Facebook, you can use Facebook for authentication (app), self enrollment (pub), or both (app,pub). The default value is app. Set the value to one of the following values:

        -   **app**

            Configures authentication only.

        -   **pub**

            Configures self enrollment only.

        -   **app,pub**

            Configures both authentication and self enrollment.

    -   **-Dfacebook_app_id**

        If you are configuring Facebook for authentication, set the value to yourprivatefacebookappid, which you received when you registered your Portal server as a private Facebook application. This value is for your private URL.

    -   **-Dfacebook_app_secret**

        If you are configuring Facebook for authentication, set the value to yourprivatefacebookappsecret, which you received when you registered your Portal server as a private Facebook application. This value is for your private URL.

    -   **-Dfacebook_app_site**

        If you are configuring Facebook for authentication, set the value to http://yourserver:yourport/wps/myportal/. This value is the URL for your private HCL Portal server that Facebook uses after a successful authentication. A protected area requires authentication to access and is not available to an anonymous user.

    -   **-Dfacebook_pub_id**

        If you are configuring Facebook for self enrollment, set the value to yourpublicfacebookappid, which you received when you registered your Portal server as a Facebook application. This value is for your public URL.

    -   **-Dfacebook_pub_secret**

        If you are configuring Facebook for self enrollment, set the value to yourpublicfacebookappsecret, which you received when you registered your Portal server as a Facebook application. This value is for your public URL.

    -   **-Dfacebook_pub_site**

        If you are configuring Facebook for self enrollment, set the value to http://yourserver:yourport/wps/portal/. This value is the URL for your public HCL Portal server that Facebook uses after a successful authentication. A public area does not require authentication to access and is available to an anonymous user.

    -   **-Dopenid.servicenames**

        If you are configuring identity providers that use the OpenID specifications, enter a comma-separated list of the identity providers that you want configured; for example: Google,Yahoo.

    -   **-Dopenid.servicenames.endpoints**

        If you are configuring identity providers that use the OpenID specifications, enter a comma-separated list of OpenID endpoints (access addresses). These endpoints are for the identity providers in the openid.servicenames parameter. For example, type https://www.google.com/accounts/o8/id,https://me.yahoo.com/. There must be a one-to-one correspondence between the openid.servicenames and the openid.servicenames.endpoints parameters. If you entered three identity providers in the openid.servicenames parameter, you must enter three endpoints in the openid.servicenames.endpoints parameter and in the same sequence.

    -   **-Dprovider.openid.nonce_valid_time**

        If you are configuring identity providers that use the OpenID specifications, enter a value in seconds to protect old communications from being reused in replay attacks. If this parameter is not set, you might have nonce errors in your SystemOut.log file.

3.  Complete the following steps to configure the Profile Management and Login portlets:

    !!!note "Cluster note"
        Complete these steps on one node in the cluster.

    1.  Log on to HCL Portal as the administrator.

    2.  Click the **Administration menu** icon. Then, click **Portlet Management > Portlets**.

    3.  Locate the Login portlet and click the **Configure portlet** icon.

    4.  Configure the Login portlet with the following parameters:

        !!!note "Tip"
            During authentication, HCL Portal server retrieves attributes from the Identity Provider. Custom parameters, such as languages preferences, are not automatically retrieved. You must add these parameters to Portal. If the parameter does not exist, enter the parameter name in **New Preference** and the parameter value in **New value**. Then, click **Add** to add the new parameter to the Login portlet.

        -   **show_idp_option**

            Set this required parameter to true to show the identity provider authentication feature on the portlet.

        -   **show_idp_max**

            Set this required parameter to the maximum number of identity providers that are shown on the portlet. You define the list of providers when you run the enable-identityprovider-tai task. If you defined five identity providers and want two to show on the portlet, set this parameter to 2. On the portlet, two identity providers are shown. Click **More** to show the complete list of identity providers.

        -   **show_idp_freeform_field**

            Set this required parameter to true to use the full OpenID string and not restrict it to certain known services. This option shows a free-form field on the portlet. If set, users can enter any OpenID identifier.

        -   **providername.image**

            providername represents the case-sensitive name of the identity provider. For example, you would create the Google.image parameter. Set this optional parameter to define an image for the configured identity provider buttons. You can define whether a text button or an image is shown. Enter the URL of the identity provider image.

    5.  Click **OK** to save your changes.

    6.  Locate the Profile Management portlet and click the **Configure portlet** icon.

    7.  Configure the Profile Management portlet with the following parameters:

        !!!note "tip"
            If the parameter does not exist, enter the parameter name in the **New Preference** field and the parameter value in the **New value** field. Then, click **Add** to add the new parameter to the Profile Management portlet.

        -   **show_idp_option**

            Set this required parameter to true to show the identity provider authentication feature on the portlet.

        -   **show_idp_max**

            Set this required parameter to the maximum number of identity providers that are shown on the portlet. You define the list of providers when you run the enable-identityprovider-tai task. If you defined five identity providers and want two to show on the portlet, set this parameter to 2. On the portlet, two identity providers are shown. Click **More** to show the complete list of identity providers.

        -   **show_idp_freeform_field**

            Set this required parameter to true to use the full OpenID string and not restrict it to certain known services. This option shows a free-form field on the portlet. If set, users can enter any OpenID identifier.

        -   **providername.image**

            providername represents the case-sensitive name of the identity provider. For example, you would create the Google.image parameter. Set this optional parameter to define an image for the configured identity provider buttons. You can define whether a text button or an image is shown. Enter the URL of the identity provider image.

        -   **providername.required**

            providername represents the case-sensitive name of the identity provider service name. For example, you would create the Google.required parameter. Set this optional parameter to define the attribute mappings you want required between the identity provider and the Profile Management portlet. Enter a semicolon-separated list of attribute mapping pairs that are combined with a vertical bar (|); for example, attributename|openidattribute. You must create a parameter for each supported identity provider; for example: Google.required and aol.required. Check the schema documentation of each identity provider for the supported attributes. Some mapping examples include:

            -   **Google: *all in one line***

                ibm-primaryEmail|http://axschema.org/contact/email;

                preferredLanguage|http://axschema.org/pref/language;

                givenName|http://axschema.org/namePerson/first;

                sn|http://axschema.org/namePerson/last

            -   **Facebook: *all in one line***

                ibm-primaryEmail|email;

                givenName|first_name;

                sn|last_name;

                uid|id;

                preferredLanguage|locale

        -   **providername.optional**

            providername represents the case-sensitive name of the identity provider. For example, you would create the Google.optional parameter. Set this parameter to define the attribute mappings you want optional between the identity provider and the Profile Management portlet. Enter a semicolon-separated list of attribute mapping pairs that are combined with a vertical bar (|). You can create a parameter for each supported identity provider; for example: Google.optional and aol.optional. Check the schema documentation of each identity provider for the supported attributes. Some mapping examples include:

            -   **Google: *all in one line***

                ibm-primaryEmail|http://axschema.org/contact/email;

                preferredLanguage|http://axschema.org/pref/language;

                givenName|http://axschema.org/namePerson/first;

                sn|http://axschema.org/namePerson/last

            -   **Facebook: *all in one line***

                ibm-primaryEmail|email;

                givenName|first_name;

                sn|last_name;

                uid|id;

                preferredLanguage|locale

        -   **providername.protocol**

            providername represents the case-sensitive name of the identity provider. Set this required parameter to define the Identity Provider Attribute Exchange protocol. Simple Registration (SREG) and Attribute Exchange (AX) are supported. The supported values for the parameters are openid.sreg for SREG or openid.ax for AX. You must create a parameter for each supported identity provider service name; for example: Google.protocol and aol.protocol.

        -   **facebook.required**

            Set this parameter to define required attribute mappings between Facebook and the **Profile Management** portlet. Enter a semicolon separated list of attribute mapping pairs that are combined with a vertical bar (\|).

            Some mapping examples include: *all in one line*

            -   attributename|facebookattribute;
            -   attribute2|facebookattribute2
            The following item is a mapping example: *all in one line*

            -   uid|id;ibm-primaryEmail|email;
            -   givenName|first_name;sn|last_name;
            -   preferredLanguage|locale
    8.  Click **OK** to save your changes.

4.  Verify that the following .jar files were copied to the AppServer_root\lib\ext directory:

    !!!note "Cluster note"
        Complete this step on each node in the cluster.

    -   PortalServer_root\prereqs.infra\prereq.commons.httpclient\lib\ext\commons-codec-1.6.jar
    -   PortalServer_root\prereqs.infra\prereq.commons.httpclient\lib\ext\commons-httpclient-3.0.1.jar

5.  Complete the following steps to add SSL certificates for the configured identity providers; some providers require multiple certificates:

    !!!attention
        If an identity provider uses multiple server endpoints that require different SSL certificates, you might receive error message EJPAK0062E.

    !!!note "Cluster note"
        In a clustered environment, you must complete these steps only on the Deployment Manager.

    !!!note "Farm note"
        In a farm environment, you must complete these steps on each server in your farm.

    1.  Log on to the WebSphere® Integrated Solutions Console.

    2.  Go to **Security > SSL certificate and key management**.

    3.  Under **Configuration settings**, click **Manage endpoint security configurations**.

    4.  Under **Outbound > hostname > nodes > node_name > servers**, click the **WebSphere_Portal** server option.

    5.  Under **Related Items**, click **Key stores and certificates**.

    6.  Click **NodeDefaultTrustStore**.

        !!!note "Clsuter note"
            Click **CellDefaultTrustStore** instead of **NodeDefaultTrustStore**.

    7.  Under **Additional Properties**, click **Signer certificates**.

    8.  Click **Retrieve from port**.

    9.  Enter the following information and then click **Retrieve signer information**:

        -   **Host**

            Enter the endpoint for the identity provider without specifying the protocol, for example, http:// or https://. Type www.google.com for Google or graph.facebook.com for Facebook.

        -   **Port**

            Enter the port number for the identity provider, for example, type 443.

        -   **Alias**

            Enter the certificate alias name, which is specified in the SSL configuration; for example type graph.facebook.com_cert for Facebook.

    10. Verify the **Retrieved signer information** and then click **Apply**.

    11. Click **Save**.

    12. If you receive error message EJPAK0062E, you might be missing a certificate. Open the SystemOut.log file and search for CWPKI0022E: SSL HANDSHAKE FAILURE. If this error message is present, import the certificate where the domainname is part of the SubjectDN.

6.  Complete the following steps to stop and restart the WebSphere\_Portal server:

    **Cluster note:** Recycle the server or cluster instance.

    1.  Open a command prompt and change to the following directory:

        -   AIX: wp_profile_root/bin
        -   Linux: wp_profile_root/bin
        -   Windows: wp_profile_root\bin

    2.  Enter the following command to stop the WebSphere\_Portal server, where WebSphere_Portal is the name of the HCL Portal server:

        -   AIX: `./stopServer.sh WebSphere_Portal -username admin_userid -password admin_password`
        -   Linux: `./stopServer.sh WebSphere_Portal -username admin_userid -password admin_password`
        -   Windows: `stopServer.bat WebSphere_Portal -username admin_userid -password admin_password`

    3.  Enter the following command to start the WebSphere_Portal server, where WebSphere_Portal is the name of the HCL Portal server:

        -   AIX: `./startServer.sh WebSphere_Portal`
        -   Linux: `./startServer.sh WebSphere_Portal`
        -   Windows: `startServer.bat WebSphere_Portal`

7.  Complete the following steps in a clustered environment to configure the **OpenidObjCache** cache instance:

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Go to **Resources > Cache instances > Object cache instances**.

    3.  Select **OpenidObjCache**.

    4.  Under the **Consistency settings** section, set the following values:

        -   Select the **Enable cache replication** check box.
        -   Select Both Push and Pull for the **Replication type**.

    5.  Click **OK**.

    6.  Click **Save**.

    7.  Stop and restart the cluster servers to propagate the changes.

8.  Depending on the security settings for your identity providers, you must modify attributes for your identity provider trust association. Complete the following steps to modify your trust association:

    !!!note "Cluster note"
        Complete these steps on one node in the cluster.

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Go to **Security > Global security > Web and SIP security > Trust association**.

    3.  Select **Interceptors** and then select **com.ibm.portal.auth.OpenIDTAI**.

    4.  Add or modify properties to change the default behavior.

        For example, you can add or modify the following properties:

        -   **bindattribute**

            This property stores the user profile attribute that contains the identity provider user ID. The default value is labeledURI.

        -   **loginattribute**

            This property defines the attribute that is retrieved from the repository that uniquely identifies the user. The default value is uid.


New users can register a new HCL Portal profile with a valid identity provider specified in **labeledURI**. Existing users can update their profile with a valid identity provider specified in **labeledURI**. To support the profile update, a writable user repository must exist. They can then log on to HCL Portal with the alternative login field. They are redirected to the identity provider login page.


???+ info "Related information"  
    -   [Integrating with OpenID authentication](../../../manage/security/integrate_oid/index.md)
    -   [Starting and stopping servers, deployment managers, and node agents](../../../manage/stopstart.md)
    -   [Response Format](https://openid.net/specs/openid-simple-registration-extension-1_0.html#response_format)
    -   [Federated Login for Google Account Users](https://support.google.com/a/answer/60224?csw=1)
    -   [User](https://developers.facebook.com/docs/graph-api/reference/user)

