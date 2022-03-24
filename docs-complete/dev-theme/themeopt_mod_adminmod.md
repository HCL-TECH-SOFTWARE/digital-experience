# Deploying themes with cacheable resources 

Data sources are used in a portal to serve content. Some resources are cached and other resources can define cache settings and pass them to a data source. In a production environment, use caching. When debugging themes, disable caching.

Caching information for combined requests is computed by the framework based on the individual data sources that are combined. However, in some cases the data sources do not provide caching information, such as in the case of static file inclusion. For example, with the resource data source, content is addressed with res in the plugin.xml file and the file serving servlet does not set the cache information.

To make resources cacheable, the resource aggregator provides a generic mechanism where it defines the cache settings for a single URI, URI patterns or contribution types. These settings are then passed to the data source, which determines whether these settings are considered. The resource data source includes them, for example, where the dav data sources for the filestore provides their own settings. These settings are then considered for content in the plugin.xml file, which is addressed with res. Content addressed with dav in the plugin.xml file has its own settings and does not use the following parameters.

Caching information is set in the WP ConfigService resource environment provider. The available settings are:

-   **com.ibm.wps.resourceaggregator.cache.info.<id\>.type**

    The values can be set as uri or contributiontype.

-   **com.ibm.wps.resourceaggregator.cache.info.<id\>.re**

    The value is a regular expression that can be matched against a URI when uri is defined as the type, or a contribution type when contributiontype is set for the type.

-   **com.ibm.wps.resourceaggregator.cache.info.<id\>.max-age**

    The value is the maximum age of the resource in seconds.

-   **com.ibm.wps.resourceaggregator.cache.info.<id\>.cache-scope**

    The value is public when this resource can be cached in an external caching infrastructure or private if it cannot.

-   **com.ibm.wps.resourceaggregator.cache.info.<id\>.user-context**

    The value is false if this resource is shared between users, and true if the value is user specific.


Sample of entries in WP ConfigService:

-   `com.ibm.wps.resourceaggregator.cache.info.0.type = "uri"`
-   `com.ibm.wps.resourceaggregator.cache.info.0.re = ".*\.(js|css)"`
-   `com.ibm.wps.resourceaggregator.cache.info.0.max-age = "86400"`
-   `com.ibm.wps.resourceaggregator.cache.info.0.cache-scope = "public"`
-   `com.ibm.wps.resourceaggregator.cache.info.0.user-context = "false"`
-   `com.ibm.wps.resourceaggregator.cache.info.1.type = "contributiontype"`
-   `com.ibm.wps.resourceaggregator.cache.info.1.re = "config_static"`
-   `com.ibm.wps.resourceaggregator.cache.info.1.max-age = "100000"`
-   `com.ibm.wps.resourceaggregator.cache.info.1.cache-scope = "public"`
-   `com.ibm.wps.resourceaggregator.cache.info.1.user-context = "false"`

The following entries are set by default:

-   Expiry is set to 1 day.
-   User context is set to false.
-   Cache-scope is set to public.

There are configuration tasks that automatically add or remove these entries from the WP ConfigService resource environment provider. To add these entries, run the set-resourceaggregation-cache-info configuration task . If you want to remove entries from the WP ConfigService, then run the remove-resourceaggregation-cache-info configuration task .

## Disabling caching on development systems

Usually, the profiles and contributions are determined once, when the portal server is started and then they are used unchanged. Updates to the portal are not included until a server restart occurs, for performance reasons.

To see the changes to profiles and contributions immediately, the `resourceaggregation.development.mode` property to true within the WP ConfigService resource environment provider.

**Parent topic:**[Managing theme capabilities ](../dev-theme/themeopt_admin_themes.md)

**Related information**  


[Copying the static resources for your theme ](../dev-theme/themeopt_cust_copy_statictheme.md)

