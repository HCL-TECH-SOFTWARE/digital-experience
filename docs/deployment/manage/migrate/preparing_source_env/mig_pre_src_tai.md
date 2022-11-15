# Verifying that WebSphere Application Server Trust Association Interceptor is enabled

The automated migration of the HCL Portal profile requires that the Trust Association Interceptor \(TAI\) is enabled so that you can configure content in WebDAV during migration.

1.  Verify that TAI is enabled:
2.  Log in to the WebSphere® Integrated Solutions Console.

3.  Go to **Security** \> **Global security**.

4.  Ensure that **Enable administrative security** and **Enable application security** are selected.

5.  In the **Authentication** section, expand **Web and SIP security**. Click **Trust association**.

6.  Ensure that **Enable trust assocation** is selected.

7.  If TAI is not enabled, complete the following steps:
8.  Open a command line and change to the directory where HCL Portal ConfigEngine is installed, on the corresponding operating system:

    -   UNIX™Linux™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)`/ConfigEngine`
    -   z/OS®: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)`/ConfigEngine`
    -   IBM® i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)`/ConfigEngine`
    -   Windows™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)`\ConfigEngine`
9.  Enter the following command:

    -   UNIXLinux: `ConfigEngine.sh enable-http-basic-auth-tai-sitemgmt -DPortalAdminPwd=password -DWasPassword=password`
    -   z/OS: `ConfigEngine.sh enable-http-basic-auth-tai-sitemgmt -DPortalAdminPwd=password -DWasPassword=password`
    -   IBM i: `ConfigEngine.sh enable-http-basic-auth-tai-sitemgmt -DPortalAdminPwd=password -DWasPassword=password`
    -   Windows: `ConfigEngine.bat enable-http-basic-auth-tai-sitemgmt -DPortalAdminPwd=password -DWasPassword=password`
    Use `-DPortalAdminPwd=password -DWasPassword=password` to specify the portal and WebSphere Application Server passwords.

    **Note:** This task uses the settings in the file `wkplc_comp.properties` to configure the TAI. Although the TAI settings are pre-configured to work without requiring adjustment, you can change the settings before you run the task if you need to configure the TAI differently.

10. Stop and restart the portal.

11. Perform this step if you have SSL configured. Establish trust between two WebSphere cells:

    1.  For preparation, determine the URL to the administrative console of the client WebSphere cell.

        For example, the URL can be similar to https://myclientserver.yourco.com:9043/ibm/console.

    2.  Open the administrative console by using the URL that you obtained by the previous step.

    3.  Click **Security** \> **SSL certificate and key management** \> **Key stores and certificates**.

    4.  On the keystores and certificates panel click **CellDefaultTrustStore** or **NodeDefaultTrustStore**, depending on whether you have a cluster or single node configuration.

    5.  On the xxxDefaultTrustStore panel, locate the column Additional properties and click **Signer certificates**.

    6.  On the Signer certificates panel, click **Retrieve from port**.

    7.  Complete the fields and select the options as follows:

        -   **Host**

            The host name of the client server, for example your\_target\_server.your\_co.com.

        -   **Port**

            The secure port on the client server, for example 9043.

        -   **SSL configuration for outbound connection**

            Select the SSL configuration for the outbound connection, such as CellDefaultSSLSettings or NodeDefaultSSLSettings.

        -   **Alias**

            The alias name, for example name\_of\_your\_alias.

    8.  Select **Retrieve signer information**.

        The signer information is displayed.

        **Note:** The error message `CWPKI0661E: Unable to get certificate signer information from host name "yourtargetserver.yourco.com" and port "9043". Verify host name and port are correct` might appear for one of two reasons:

        -   A certificate is imported from the target location.
        -   A previously deleted certificate has not timed out and been removed.
    9.  Click **OK**.

        Your alias is now shown in the list.

    10. Click **Save**.

    11. Stop and restart the portal.

    12. Currently, if you have a clustered environment without automatic synchronization, you need to resynchronize the node agents.



**Related information**  


[Disabling TAI if disabled previously](../migrate/mig_post_tai.md)

