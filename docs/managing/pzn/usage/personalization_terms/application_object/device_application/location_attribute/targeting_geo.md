# Location attributes

You can use location attributes to tailor the content that displays.

The Device application object contains five location attributes that you can use in rules that you create: latitude, longitude, country, state, and city.

To receive latitude and longitude information from a user's device:

-   You must enable the geolocation theme module on HCL Digital Experience.
-   The user that accesses your site must use a device that is location aware and selected to share location information about their device to your site.
-   The client software on the device \(the browser\) must support HTML5.

Country, state, and city attributes are resolved from the latitude and longitude coordinates of the user's device or from the IP address that is obtained by using a reverse geocoding service. A reverse geocoding service is not provided with HCL Portal. Use the geolocation interface and registration mechanism that is provided with HCL Portal to define how to deploy the service you use.

-   **[Enable geolocation theme module](../contarget/targeting_geo_enable.md)**  
Unlike the other application objects that are installed by default, the geolocation features of the Device application object are not enabled. To enable the geolocation features, you can modify the JSON profiles to include the geolocation theme module, provide a resolver JAR, or use both methods.
-   **[Retrieving user or device location](../contarget/targeting_geo_location.md)**  
To implement the geolocation interface, you must provide methods to resolve coordinates or IP address to one or more of the location attributes \(country, state, or city\).
-   **[Create a segment using State attribute](../contarget/targeting_geo_example.md)**  
Learn more about the Device application object through an example that uses a location attribute \(state\).
-   **[Enable geolocation theme module](../contarget/targeting_geo_enable.md)**  
Unlike the other application objects that are installed by default, the geolocation features of the Device application object are not enabled. To enable the geolocation features, you can modify the JSON profiles to include the geolocation theme module, provide a resolver JAR, or use both methods.
-   **[Retrieving user or device location](../contarget/targeting_geo_location.md)**  
To implement the geolocation interface, you must provide methods to resolve coordinates or IP address to one or more of the location attributes \(country, state, or city\).
-   **[Create a segment using State attribute](../contarget/targeting_geo_example.md)**  
Learn more about the Device application object through an example that uses a location attribute \(state\).

**Parent topic:**[Device application object](../contarget/targeting_device_overview.md)

**Parent topic:**[Device application object](../contarget/targeting_device_overview.md)

