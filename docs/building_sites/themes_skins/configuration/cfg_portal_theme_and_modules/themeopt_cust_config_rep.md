# Changing resource environment provider custom properties

The second order of theme configuration is through resource environment provider \(REP\) custom properties in the WP GlobalThemeConfig REP. Changes to the REP custom properties apply across all themes, and the values, therefore, cannot vary from theme to theme.

The REP custom properties are in the WebSphere® Integrated Solutions Console.

1.  Access the WebSphere Integrated Solutions Console.

2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP GlobalThemeConfig**.

3.  To view and edit the custom properties for this resource environment provider, click the **Custom properties** link.

4.  Modify the property values as needed according to the following table. For each property to modify:

    1.  Click the **property name** link.

    2.  Modify the value in the **Value** field.

    3.  Click **OK**.

5.  Save and persist the changes to the master configuration.

6.  Restart the portal server.


Resource environment providers use the following properties and values.

-   **`user.displaynameattribute`**

    Change this value if your identity manager user hierarchy uses a different attribute for the user's full display name. The default value is cn.

-   **`resources.theme.loadingImage`**

    The path to the loading image relative to the theme base URI. The default value is css/images/loading.gif.


**Parent topic:**[Configuring the portal theme and modules](../dev-theme/themeopt_cust_config.md)

