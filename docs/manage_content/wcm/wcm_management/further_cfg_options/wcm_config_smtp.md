# Enabling email

To use the email workflow action, you must configure Web Content Manager to use your SMTP server.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you edit configuration properties.

3.  Specify `connect.connector.mailconnect` properties to use your SMTP server.

    Add the following properties:

    -   **Default SMTP server**

        -   Property name: `connect.connector.mailconnector.defaultsmtpserver`
        -   Value: `mail.yourmailserver.com`
    -   **Default SMTP port**

        -   Property name: `connect.connector.mailconnector.defaultsmtpport`
        -   Value: `yourport`
    -   **Default email address for "from" field**

        -   Property name: `connect.connector.mailconnector.defaultfromaddress`
        -   Value: `admin@yourmailserver.com`
    -   **Default email address for "reply-to" field**

        -   Property name: `connect.connector.mailconnector.defaultreplytoaddress`
        -   Value: `admin@yourmailserver.com`
4.  If you use a secured SMTP server, you need to specify a user name and password to access the SMTP server:

    Add the following properties:

    -   **Default user name**

        -   Property name: `connect.connector.mailconnector.defaultusername`
        -   Value: `username`
    -   **Default password**

        -   Property name: `connect.connector.mailconnector.defaultpassword`
        -   Value: `password`
5.  Save your changes.

6.  Restart the portal for the new settings to take effect.



**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

