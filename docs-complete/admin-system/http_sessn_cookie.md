# Renaming the HTTP session cookie 

The Java Servlet API up to Version 2.5 states that the session identification cookie must be named JSESSIONID. WebSphere Application Server Version 8 supports the Java Servlet API 3.0 that offers applications the option to rename the JSESSIONID cookie name. Therefore HCL Portal 8.5 also supports this option.

A common use case for changing the JSESSIONID cookie name results from cookie name clashes due to HTTP proxy server usage. You can avoid such conflicts by either of the following methods:

-   **Enable HTTP session ID reuse**

    This prevents cookie name clashes by reusing the session ID values across different servers. To protect HCL Portal user sessions, you need to enable security integration in conjunction with session ID reuse. For details see the topic about Session management custom properties under the section about Http Session ID Reuse and the topics about Session security support and Session management settings in the appropriate WebSphere® Application Server Help Center for your portal environment.


1.  Rename the HTTP session cookie on WebSphere Application Server.

    To do this, proceed as follows:

    1.  Open the WebSphere Integrated Solutions Console.

    2.  Select **Servers** \> **Application Servers** \> **Server\_Name** \> **Web Container Settings** \> **Session management** \> **Enable Cookies**.

    3.  Change the value for session cookie name as required.

    4.  Click **OK**.

    5.  Save your changes.

    6.  Restart WebSphere Application Server

    7.  Regenerate the plug-in configuration file.

    8.  If you are running a remote system, copy the plug-in configuration file to the remote server.

2.  To synchronize your portal with the changes you made in the previous step, add the required properties to the Resource Environment Providers for your portal:

    1.  Open the WebSphere Integrated Solutions Console.

    2.  Add the following properties to the Resource Environment Providers:

        -   In the **WP ConfigService**, add the following property: cookie.sessionid.name=cookiename
        -   In the **WP PortletServiceRegistryService**, add the following property:`com.ibm.wps.pb.service.PropertyBrokerServiceImpl.sessionid.cookie.names=cookiename`
        For both properties, replace the variable cookiename by the new name of the JSESSIONID cookie.


**Parent topic:**[Configuring portal behavior ](../admin-system/adptlcfg.md)

