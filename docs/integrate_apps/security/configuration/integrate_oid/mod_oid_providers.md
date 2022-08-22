# Modifying the list of OpenID providers \| HCL Digital Experience

You can change the list of identity providers that your users can access. You can add or remove providers from the list. You can change the order that the identity providers display in the **Login** and **Profile Management** portlet user interfaces.

1.  Log on to the WebSphere® Integrated Solutions Console.

2.  Go to **Security** \> **Global security** \> **Web and SIP security** \> **Trust association**.

3.  Select **Interceptors** and then select **com.ibm.portal.auth.OpenIDTAI**.

4.  Modify the following properties that are based on your business requirements:

    -   **openid.servicenames**

        This property defines a comma-separated list of your identity providers that your users see. For example, type Google,Yahoo. The order of the names affects the user interface and the order that the providers are displayed.

    -   **provider.openid.servicenames.endpoints**

        When you configure identity providers that use the OpenID specifications, enter a comma-separated list of OpenID endpoints \(access addresses\) for the identity providers that you entered in the openid.servicenames parameter. For example, type https://www.google.com/accounts/o8/id,https://me.yahoo.com/. There must be a one-to-one correspondence between the openid.servicenames and the openid.servicenames.endpoints parameters. If you entered three identity providers in the openid.servicenames parameter, you must enter three endpoints in the openid.servicenames.endpoints parameter and in the same sequence.

5.  Restart the WebSphere\_Portal server.


**Parent topic:**[Integrating with OpenID authentication](../security/use_openid.md)

**Related information**  


[Integrating with OpenID authentication](../security/use_openid.md)

[Starting and stopping servers, deployment managers, and node agents \| HCL Digital Experience](../admin-system/stopstart.md)

