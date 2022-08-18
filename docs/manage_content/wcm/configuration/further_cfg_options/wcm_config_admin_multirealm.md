# Defining alternative administrators for multi-realm configurations

Web Content Manager requires a user to run various system tasks such as initialization, and background tasks such as syndication. By default, this system user is the configured JCR domain administrator. In scenarios where the configured user realm does not contain the domain administrator then an alternative user must be provided.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you edit configuration properties.

3.  The settings are different for the base portal and any virtual portals.

    -   **The base portal**

        -   Property name: `wcm.admin.user.dn`
        -   Value: The distinguished name of the alternative admin.
        For example: `wcm.admin.user.dn=uid=myadmin,o=myRealm`

        You can use a base override setting for this property. See [Setting scoped configuration settings for virtual portals](wcm_config_scoped_vp.md) for further information about setting a base override setting for your base portal.

    -   **Virtual portals**

        Use scoped configuration settings to apply different settings for specific virtual portals. See [Setting scoped configuration settings for virtual portals](wcm_config_scoped_vp.md) for further information.

4.  Save your changes.

5.  Restart the portal for the new settings to take effect.


**Parent topic:**[Further configuration options](../wcm/wcm_config.md)

