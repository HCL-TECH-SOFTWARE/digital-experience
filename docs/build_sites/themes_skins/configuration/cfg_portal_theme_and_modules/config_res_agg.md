# Configuration for resource aggregation

Set the following properties in the WP ConfigService Resource Environment Provider to configure the resource aggregator.

## Configure theme invalidation auto recognition

This setting defines a regular expression that is used by the server to recognize updates in WebDAV. When the regular expression finds a match, it invalidates the theme caches automatically. This feature does not work on .WAR file-based themes. However, it significantly reduces the need for you to invalidate the cache manually.

In the WP ConfigService Resource Environment Provider, modify the `resourceaggregation.auto.invalidate.regex` property. By default, the property is set to `.*\.json|.*/modules/.*`.

For example, updating the file dav:fs-type1/themes/Portal8.5/contributions/theme.json through any WebDAV client, is recognized from the default pattern and causes an automatic theme invalidation.

## Configure system module invalidation

This setting defines a regular expression that is used by the server to invalidate system modules that are defined in plugin.xml files during the theme invalidation process. The regular expression skips all built-in .WAR files. If your.WAR file is not invalidated, its plug-in ID might start with com.ibm or wp. Use custom plug-in IDs with the prefix of your company name to ensure that your .WAR files are invalidated.

In the WP ConfigService Resource Environment Provider, modify the `resourceaggregation.cache-refresh.skipPluginRegEx` property. By default, the property is set to `ˆ(com\.ibm|wp\.|wcm\.|jquery).*`.


**Related information**  


[Modify the dynamic resource references for your theme](../dev-theme/themeopt_cust_copy_modifystatres.md)

