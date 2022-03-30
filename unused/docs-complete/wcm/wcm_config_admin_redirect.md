# Changing the login or redirect page used for servlet rendering 

When an unauthenticated user accesses secured content using servlet rendering, the user is redirected to the Web Content Manager login page by default.

The Web Content Manager login page is used by default when an unauthenticated user accesses secured content using servlet rendering. The user can redirected to a different page \(such as a custom login or error page\) by configuring the connect.usermanagement.loginpagelocation property of the WCM WCMConfigService service.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you edit configuration properties.

3.  Add the following property:

    -   Property name: `connect.usermanagement.loginpagelocation`
    -   Value: The URL of the custom page. For example:http://hostname.example.com:10039/sample/customerrorpage.html
4.  Save your changes.

5.  Restart the portal for the new settings to take effect.


**Parent topic:**[Further configuration options ](../wcm/wcm_config.md)

