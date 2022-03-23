# Enable geolocation theme module 

Unlike the other application objects that are installed by default, the geolocation features of the Device application object are not enabled. To enable the geolocation features, you can modify the JSON profiles to include the geolocation theme module, provide a resolver JAR, or use both methods.

The new geolocation theme module adds JavaScript to every portal page to check that the HTML5 geolocation API is available on the client. When the HTML geolocation API is available, the latitude and longitude of the device that accesses portal is returned to the portal.

1.  Connect to WebDAV client, and go to the /profiles directory.

    For example, follow this path to the /profiles directory: http://server\_name/wps/mycontenthandler/dav/themelist/ibm.portal.85Theme/profiles/

2.  By default, four JSON profiles are in this directory. Add the Geolocation theme module ID to the moduleIDs section of every JSON file. The value for the Geolocation theme module ID is wp\_pzn\_geolocation.

    For example:

    ```
    "moduleIDs": [
    		"wp_theme_portal_85",
    		"wp_pzn_geolocation",
    		"wp_portlet_css",
    		"wp_one_ui",
    		"wp_one_ui_dijit",
    		"wp_legacy_layouts",
    		"wp_client_ext",
    		...
    ```

3.  Use the Theme Opt Analyzer portlet to invalidate the cache. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Utilities** \> **Control Center** \> **Invalidate cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../dev-theme/themeopt_an_util.md#). You do not need to restart the server.


**Parent topic:**[Location attributes ](../contarget/targeting_geo.md)

**Parent topic:**[Location attributes ](../contarget/targeting_geo.md)

