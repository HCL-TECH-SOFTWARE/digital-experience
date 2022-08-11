# Configuring Remember me for Java Platform, Enterprise Edition authentication

You can configure a Remember me cookie for Java Platform, Enterprise Edition authentication that works with step-up authentication. When this feature is enabled, users are logged in automatically when they access a protected portal area by presenting a valid Remember me cookie.

If the portal area has a higher step-up authentication, users are asked to provider their user ID and password credentials. Otherwise, the users can enter the protected area without providing their credentials.

1.  Make sure the HCL Portal server is running.

2.  Log on to the WebSphere® Integrated Solutions Console as an administrator.

3.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

4.  Click **WP RememberMeConfigService** to open the properties view.

5.  Click **Custom properties**.

6.  Click **New**.

7.  Enter the following values for the new property:

    1.  **Name**: j2eeAuthenticate

    2.  **Value**: true

    3.  **Type**: java.lang.Boolean

8.  Click **OK**.

9.  Click the **Save** link in the Messages box to save the changes to the master configuration.


**Parent topic:**[Enabling step-up authentication and the Remember me cookie](../security/cfg_auth.md)

