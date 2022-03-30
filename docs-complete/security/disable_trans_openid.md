# Disabling transient users and OpenID authentication 

After using the transient users and OpenID authentication, you might decide you want to stop using the function. You can permanently or temporarily disable the transient users function or the full OpenID authentication function.

Complete the following steps to disable transient users and the OpenID authentication.

1.  Complete the following steps to disable transient users:

    1.  Log on to WebSphere® Integrated Solutions Console as the administrator.

    2.  Go to **Security** \> **Global security** \> **Web and SIP Security** \> **Trust association**.

    3.  Select **com.ibm.portal.auth.tai.OpenIdTAI**.

    4.  Select **Custom properties**.

    5.  Change the value of the create\_user\_during\_logon property to false.

    6.  Save your changes.

    7.  Stop and restart the WebSphere\_Portal server.

2.  Complete the following steps to disable the OpenID authentication function:

    1.  Log on to WebSphere Integrated Solutions Console as the administrator.

    2.  Go to **Security** \> **Global security** \> **Web and SIP Security** \> **Trust association**.

    3.  Delete **com.ibm.portal.auth.tai.OpenIdTAI**.

    4.  Save your changes.

    5.  Stop and restart the WebSphere\_Portal server.


**Parent topic:**[Integrating with OpenID authentication](../security/use_openid.md)

**Related information**  


[Integrating with OpenID authentication](../security/use_openid.md)

[Starting and stopping servers, deployment managers, and node agents ](../admin-system/stopstart.md)

