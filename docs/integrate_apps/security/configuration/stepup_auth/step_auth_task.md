# Enabling step-up authentication, the Remember me cookie, or both

You can choose to enable either step-up authentication or the Remember me cookie individually or you can choose to enable these features together.

Log on to the WebSphere® Integrated Solutions Console and go to **Security** \> **Global security** \> **Web and SIP security** \> **Single sign-on \(SSO\)**. Verify that both **Interoperability Mode** and **Web inbound security attribute propagation** are enabled.

You can use step-up authentication with Web Services for Remote Portlets \(WSRP\) extensions. The authentication level that is defined for portlets on the Producer portal is automatically set on the Consumer portal when it consumes WSRP services. If you apply step-up authentication mechanisms on the Producer, users are also challenged for stronger authentication credentials on the Consumer portal as required. To use step-up authentication with a WSRP extension, ensure that your environment meets the following requirements:

-   The Producer and Consumer portals are HCL Portal Version 8.5 or later.
-   You enable step-up authentication on both the Producer and Consumer portals.
-   The authentication levels are the same on the Producer and Consumer portals.

    **Notes:**

    -   Portal administrators can change authentication levels on both the Producer portal or Consumer portal at any time.
    -   If the authentication level on the Consumer portal is less than the authentication level on the Producer portal, the Producer portal gives the following error message: AccessDeniedFault EJPWC1118E: User authentication not strong enough. Then, users cannot access the portlet. For this reason, the authentication level on the Consumer portal must be the same as the authentication level on the Producer portal.

**Important:** The Remember me cookie does not extend the Portal Personalization feature to the public area. When the Remember me cookie identifies a user in a public area, the user is still considered anonymous from an access control point of view.

**Web Content Manager note:** The authoring portlet and the web content viewer do not fully support step-up authentication or the Remember me cookie. However, the user name component is aware of the Remember me cookie. If the Remember me cookie is set on a request and a user is not logged in, the anonymous user design is not used. Instead, it uses the user name design complete with the name or distinguished name of the user that is specified by the Remember me cookie.

**Restriction:** Step-up authentication requires the LtpaToken2 for single sign-on. Read [Implementing single sign-on to minimize web user authentications](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/tsec_msso.html) for details.

**Note:** When you enable both step-up authentication and the Remember me cookie, you receive the following authentication levels:

-   standard
-   identified
-   authenticated

If you enable step-up authentication only, you receive the following authentication levels:

-   standard
-   authenticated

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Enter one of the following values for the enable\_rememberme parameter under the StepUp Authentication heading:

    **Note:** Add the enable\_rememberme parameter to the wkplc.properties file if it does not exist.

    -   If you are enabling both step-up authentication and the Remember me cookie, enter true.
    -   If you are enabling step-up authentication only, enter false.
    -   If you are enabling the Remember me cookie only, leave blank.
4.  Enter a value for the following parameters under the StepUp Authentication heading if you are enabling the Remember me cookie:

    **Note:** Go to the properties file for specific information about the parameters.

    -   sua\_user
    -   sua\_serversecret\_password
5.  Save your changes to the wkplc.properties file.

6.  Open a command prompt.

7.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

8.  Choose one of the following tasks to modify your environment:

    -   If you are enabling step-up authentication and or the Remember me cookie, run the enable-stepup-authentication task.
    -   If you are enabling the Remember me cookie only, run the enable-rememberme task.
    Use the following command syntax:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh task\_name -DWasPassword=password
    -   IBM® i: ConfigEngine.sh task\_name -DWasPassword=password
    -   Windows™: ConfigEngine.bat task\_name -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh task\_name -DWasPassword=password
    Where task\_name is either enable-stepup-authentication or enable-rememberme.

9.  Check the output for any error messages before you run any additional tasks. If any of the configuration tasks fail, verify the values in the wkplc.properties file.

10. In a clustered environment, copy the wp.auth.base.sua\_loginmodule.jar file in the [AppServer\_root](../reference/wpsdirstr.md#was_root)/lib/ext/ directory of one of the Portal nodes to the [AppServer\_root](../reference/wpsdirstr.md#was_root)/lib/ext/ directory of the deployment manager.

11. Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).

12. Complete the following steps to change the authentication level on a page or portlet:

    1.  Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**.

    2.  Click either the **Pages** link or the **Portlets** link.

    3.  Locate the page or portlet you want to change and click the **Authentication Level** link.

    4.  Choose one of the following levels:

        **Note:** The following Authentication Levels are provided. If you customized your step-up authentication, you might have different levels.

        -   **Standard**

            Set the Authentication Level to Standard if you want anonymous and identified users to view the page or portlet. The Standard level has the following two states that are based on the access control setting for the page or portlet:

            -   If anonymous users have access to the page or portlet, no authentication is required.
            -   If only authenticated users have access to the page or portlet, authentication is required.
        -   **Identified \(available if enable\_rememberme=true\)**

            Set the Authentication Level to Identified if you want to control whether content is displayed to an unauthenticated user based on the existence of a persistent HTTP cookie. This option is intended for pages and portlets that are visible to anonymous users. An example is the **Remember me on this computer** option during login. This option generates the com.ibm.portal.RememberMe cookie.

            If a user previously authenticated to HCL Portal and then returns with the com.ibm.portal.RememberMe cookie, the user is "identified" and the content displays. If a user attempts to access HCL Portal without the com.ibm.portal.RememberMe cookie, the user is asked to authenticate before the content is displayed.

            CAUTION:

            Do not set the Access level to **identified** for the Login portlet. This action causes problems when a user logs in to HCL Portal.

        -   **Authenticated**

            Set the Authentication Level to Authenticated if you want anonymous and identified users to log in to view the page or portlet.



