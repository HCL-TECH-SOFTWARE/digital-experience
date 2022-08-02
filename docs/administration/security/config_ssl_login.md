# Configuring SSL only for the login process

You can encrypt only the login process to HCL Digital Experience and then allow subsequent requests through HTTP.

Complete the following steps to configure SSL only for the login process:

**Remember:** These steps configure SSL only for the login; if you want to configure SSL for other features such as themes and skins, complete the steps in *Setting up SSL*.

1.  Configure SSL for the webserver plug-in if you have an external webserver that is configured for SSL. Consult with your webserver vendor for more details on how to configure SSL for your webserver. For more information, go to *Guide to properly setting up SSL within the IBM HTTP Server* topic in the related information section.

    **Note:** Proceeding with this task without configuring SSL for the webserver plug-in causes the login to fail.

2.  Verify that the following parameters exist and are correctly set for your installation in the **WP ConfigService** application:

    1.  Log on to the WebSphere® Integrated Solutions Console in a stand-alone environment or on the Deployment Manager WebSphere Integrated Solutions Console in a clustered environment.

    2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    3.  Click **WP ConfigService**.

    4.  Click **Custom Properties** under the Additional Properties heading.

    5.  Locate the redirect.login.ssl property and do one of the following options:

        **Note:** The redirect.login.ssl property determines the protocol that is to be used after login completes. If this property is set to false, the portal uses the protocol that was initially requested before login. The value false is the default. If you set this property to true, the portal uses HTTPS.

        -   If the property exists, click the property to modify it and change the value to true.
        -   If the property does not exist, click **New** to create the property and enter the following information:
            -   **Name**: redirect.login.ssl
            -   **Value**: true
            -   **Type**: java.lang.String
    6.  Locate the host.port.https property and do one of the following options:

        -   If the property exists, click the property to modify it and change the value to alias\_port\_for\_HTTPS.

            **Note:** The alias\_port\_for\_HTTPS is the port number that is used for the virtual host alias \(usually 443\).

        -   If the property does not exist, click **New** to create the property and enter the following information:
            -   **Name**: host.port.https
            -   **Value**: 443
            -   **Type**: java.lang.String
    7.  Locate the host.port.http property and do one of the following options:

        **Note:** Set the host.port.http if you are using a port other than the default 80.

        -   If the property exists, click the property to modify it and change the value to alias\_port\_for\_HTTP.

            **Note:** The alias\_port\_for\_HTTP is the port number that is used for the virtual host alias \(usually 80\).

        -   If the property does not exist, click **New** to create the property and enter the following information:
            -   **Name**: host.port.http
            -   **Value**: 80
            -   **Type**: java.lang.String
    8.  Click **Save** to save the changes to the master configuration.

    9.  Log out of the WebSphere Integrated Solutions Console.

3.  Complete the following steps to encrypt the login process to HCL Portal and allow subsequent requests through HTTP:

    The Login portlet uses the UseSecureLoginActionUrl parameter to control the generation of the login action URL. Set this parameter to true to use a secure URL for login.

    1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.

    2.  Search for **Title start with = "Login"**.

    3.  Select the **Configure portlet** icon.

    4.  Edit the UseSecureLoginActionUrl parameter and set the parameter to true.

    For more information about setting up SSL within the IBM HTTP Server, see *Guide to properly setting up SSL within the IBM HTTP Server*.


You can test the SSL login by using the following unprotected URL: http://portalserver.com/wps/myportalhttp://portalserver.com/lotus/myquickr and submitting your credentials. You notice that the URL does not change to https.

**Note:** Confirm that the login was encrypted by monitoring the packets through a network utility such as Ethereal or by reviewing the source code of the login form when accessed through an unprotected HTTP URL. The login form must have an action URL that is secured, for example `<form method="post" action="https://....">`. Set your browser to warn you when you change between secure and insecure modes to see the behavior on the client-side.

**Parent topic:**[Configuring SSL](../security/ssl_intro.md)

**Previous topic:**[Setting up SSL](../security/ssl.md)

**Next topic:**[Setting up Client Certificate Authentication](../security/certauth.md)

