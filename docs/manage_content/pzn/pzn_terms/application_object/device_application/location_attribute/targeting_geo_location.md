# Retrieving user or device location

To implement the geolocation interface, you must provide methods to resolve coordinates or IP address to one or more of the location attributes \(country, state, or city\).

You can determine the location of a device by using reverse geocoding or by using service providers. Reverse geocoding converts latitude and longitude coordinates into a location \(such as country, state, or city\) by using a geolocation JAR that you provide or by using an external geolocation service provider.

Key concepts for determining the location of a device:

-   The new geolocation theme module checks to see that the HTML5 geolocation API is available on the client. When the HTML geolocation API is available, the latitude and longitude of the device that accesses your site is returned to the portal.
-   When latitude and longitude information is returned to your portal, Personalization calls the API method getAddressFromCoords\(\) to return the corresponding country, state, or city information.
-   If latitude and longitude are not returned to portal, Personalization calls the API method getLocation\(\). This method typically resolves the IP address to a country, and other location attributes are not set. Examples of when latitude and longitude are not available are as follows:

    -   The client does not support HTML5. For the location-based services to work correctly, the clients \(browsers\) must support HTML5.
    -   The user does not want to share location information about their device.
    -   The device does not have location awareness.

-   You can also use the geolocation theme to add JavaScript. When the latitude and longitude coordinates are received on the client, these coordinates are resolved to country, state, or city location information that uses a call from the client to an external resolver service. The location attributes \(latitude, longitude, country, state, or city\) are returned to your portal. The getLocation\(\) method resolves the request parameters and returns these parameters.

1.  Enable the reverse geocoding class in the PersonalizationService.properties file to receive the latitude and longitude coordinates of the client that accesses your portal.

    1.  Locate the PersonalizationService.properties in the following directory: [wp\_profile\_root](../../../../../../guide_me/wpsdirstr.md)/PortalServer/config/config/service
    2.  Create a backup copy of the PersonalizationService.properties file.
    3.  Add the class name to the key. For example: pzn.externalGeolocation=com.acme.geolocation.ReverseGeolocationExample

2.  Create a JAR file, and place this file on the portal server class path.

    For example, place your JAR file in the following directory: [PortalServer\_root](../../../../../../guide_me/wpsdirstr.md)/shared

3.  Restart the HCL Portal server.



