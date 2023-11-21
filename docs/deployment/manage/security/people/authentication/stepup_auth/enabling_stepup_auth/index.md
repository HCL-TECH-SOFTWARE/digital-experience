# Enabling step-up authentication and the Remember me cookie

Step-up authentication provides different authentication levels for pages and portlets. The **Remember me** cookie is an encrypted HTTP cookie that supports authentication. You can present personalized portlets and pages in a public area without the need for users to manually authenticate. Remembered users can view anonymous pages and portlets with a standard or identified authentication level. When you provide a valid **Remember me** cookie, a user can also access protected pages and portlets that require the identified authentication level. If the authentication level is set to authenticated, the user must provide a user ID and password to view the page or portlet.

You can enable step-up authentication only. You can enable the **Remember me** cookie only. Or you can enable both with one task.

!!!note
    Authenticated and remembered users must have cookies enabled on their browser. Users can access portal sites without cookies enabled if they are anonymous users. If you turn on session tracking for anonymous users, then anonymous users also require cookies.

**Remember me cookies:** After you enable the **Remember me** cookie, you might need to adjust the settings to fit your business needs. You can use the WebSphere® Integrated Solutions Console to create new properties, if necessary, or to update existing properties. The RememberMeConfigService.properties file, including a short description, is in the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md)\\PortalServer\\config directory. Log in to the WebSphere Integrated Solutions Console. Go to **Resources** \> **Resource Environment Providers** \> **WP RememberMeConfigService** \> **Custom properties** to edit the properties file. All property changes require that you restart the HCL Digital Experience server for the changes to take effect.

-   **[Enabling step-up authentication, the Remember me cookie, or both](step_auth_task.md)**  
You can choose to enable either step-up authentication or the Remember me cookie individually or you can choose to enable these features together.
-   **[Configuring Remember me for Java Platform, Enterprise Edition authentication](configure_remme_j2eeauth.md)**  
You can configure a Remember me cookie for Java Platform, Enterprise Edition authentication that works with step-up authentication. When this feature is enabled, users are logged in automatically when they access a protected portal area by presenting a valid Remember me cookie.
-   **[Disabling step-up authentication and the Remember me cookie](step_auth_disable.md)**  
You can disable the step-up authentication feature or the Remember me cookie to remove them from your server.
-   **[Step-up authentication properties](stepup_auth_prop.md)**  
After you enable step-up authentication, you might want to adjust the settings to fit your business needs. You can use the WebSphere Integrated Solutions Console to create new properties, if necessary, or update existing properties.
-   **[Remember me properties](remme_prop.md)**  
After you enable the Remember me cookie, you might need to adjust the settings to fit your business needs. You can use the WebSphere Integrated Solutions Console to create new properties, if necessary, or update existing properties.



???+ info "Related information"
    - [WebSphere® Integrated Solutions Console](../../../../../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
