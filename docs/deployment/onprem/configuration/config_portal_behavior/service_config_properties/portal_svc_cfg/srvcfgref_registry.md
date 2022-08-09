# Registry Service

The portal Registry Service loads and caches a few objects that are regularly accessed in the engine. This service improves performance. However, the trade-off is that the cached objects can be stale compared to their database counterparts. This service applies particularly in a cluster environment.

If the age of those objects causes a problem, try reducing the refresh rate for the respective entities.

In the WebSphere® Integrated Solutions Console, the portal Registry Service is listed as **WP RegistryService**.

The following list describes the Registry Service properties:

-   **default.interval = \(1800\)**

    The default interval for refreshing a bucket. The amount is specified in seconds, for example default.interval = 1800.

-   **bucket.<bucket-name\>.class**

    The type of class that the bucket with the given name is caching. This property needs to be defined for a bucket if you define at least one of the buckets others properties like reload, interval, or sorted.

-   **bucket.<bucket-name\>.reload \[optional = true\]**

    This property controls whether the bucket with the given name is reloaded in frequent intervals.

-   **bucket.<bucket-name\>.interval = \(default.interval\)**

    The length of the reload interval for the bucket with the given name. If no value is set, the default.interval setting is used.

-   **bucket.<bucket-name\>.sorted \[optional = false\]**

    This property controls whether the bucket with the given name needs to keep the cached objects in a sorted order. The sorting order is determined by the objects themselves.


The bucket names are described in the following list:

-   **theme**

    The theme bucket is used to cache the database representation of all themes that are stored in the database.

-   **language**

    The language bucket is used to cache the database representation of all languages that are stored in the database.

-   **skin**

    The skin bucket is used to cache the database representation of all skins that are stored in the database.

-   **client**

    The client bucket is used to cache the database representation of all clients that are stored in the database.

-   **markup**

    The markup bucket is used to cache the database representation of all markups that are stored in the database.

-   **transformation**

    The transformation bucket is used to cache the database representation of all transformations that are stored in the database.

-   **transformationapplication**

    The transformationapplication bucket is used to cache the database representation of all transformation application definitions that are stored in the database.


The following list shows valid values for property class:

-   bucket.language.class =com.ibm.wps.datastore.LanguageDescriptorHome
-   bucket.markup.class =com.ibm.wps.datastore.MarkupDescriptorHome
-   bucket.client.class =com.ibm.wps.datastore.ClientDescriptorHome
-   bucket.theme.class =com.ibm.wps.datastore.ThemeDescriptorHome
-   bucket.skin.class =com.ibm.wps.datastore.SkinDescriptorHome
-   bucket.transformationapplication.class =com.ibm.wps.datastore.TransformationApplicationDescriptorHome
-   bucket.transformation.class =com.ibm.wps.datastore.TransformationDescriptorHome

**Parent topic:**[Portal service configuration](../admin-system/srvcfgref.md)

