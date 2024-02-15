# The generic JSON Digital Data Connector plug-in

You can use the Digital Data Connector \(DDC\) for HCL Portal plug-in directly to integrate remote JSON data without coding. It makes it possible to integrate JSON data that is served in arbitrary JSON document formats by supporting the concept of list-rendering profiles.

A list-rendering profile describes the transformation between a specific JSON document format and the generic bean list data structure that this DDC plug-in generates. You identify the generic JSON DDC plug-in by its name `ibm.portal.ddc.json`. You can address it by using the `[Plugin:ListRenderingContext extension-id="ibm.portal.ddc.json"]` tag. The generic JSON DDC plug-in supports the attributes that are shown in the following list. You can specify these attributes when you set up the list-rendering context by using the `ListRenderingContext` tag that HCL Web Content Manager provides.

-   **source**

    You can set this attribute to identify the source URI that serves the JSON data. The URI must be accessible through the portal resource addressability framework. Supported URI schemes include `http`, `https`, and `dav`. If you access external JSON data by using `http` or `https` URLs, make sure to adjust your proxy configuration outbound HTTP connection to allow outbound access to these URLs. For more information, read the information about proxy configuration in the HCL Digital Experience documentation. For more information, read *Outbound HTTP connection*. Example:

    ```
    [Plugin:ListRenderingContext action="set" extension-id="ibm.portal.ddc.json" 
       profile="yourprofile.name" 
       attribute="source=https://www.your_company.com/your_json_feed" 
       compute="always"
    
    ```

-   **sortCriteria**

    Set this attribute to sort the content of a bean list that is based on a specific attribute. This sorting attribute must be defined in the list-rendering profile that the current list-rendering context uses. This built-in sorting capability sorts only the data that is contained in the current bean list. Therefore, do not use this attribute if the bean list represents only a fragment of a larger result set. In such a situation, provide the sorting process by the backend service. If you do not specify this attribute, the bean list maintains the sequence of items as served by the external data source. To specify the sort order, use the `sortOrder` attribute.

-   **sortOrder**

    Use this attribute in combination with the `sortCriteria` attribute to specify the sort order. Supported values are `asc` and `desc` for sorting in ascending or descending order. Example:

    ```
    [Plugin:ListRenderingContext action="set" extension-id="ibm.portal.ddc.json" 
       profile="yourprofile.name" 
       attribute="source=https://www.your_company.com/your_json_feed" 
       attribute="sortCriteria=title" attribute="sortOrder=asc"]
    
    ```

-   **cacheScope**

    Set this attribute to identify the cache scope for bean lists that result from a specific list-rendering context. Supported values are as follows:

    -   **public**

        This value is the default value. If you set this attribute to `public`, the cached bean list values are shared across users.

    -   **private**

        If you set this attribute to `private`, individual bean list objects are cached per user. Specify `private` if the bean lists contain user-specific information.

    Example:

    ```
    [Plugin:ListRenderingContext action="set" extension-id="ibm.portal.ddc.json" 
       profile="yourprofile.name" 
       attribute="source=https://www.your_company.com/your_json_feed" 
       attribute="cacheScope=private" compute="always"]
    
    ```

-   **cacheType**

    Set this attribute to identify the cache type that you want to be used for bean lists that result from a specific list-rendering context. Supported values are as follows:

    -   **invalidateOnLogin**

        If you use this setting, cached bean list objects are invalidated if the user for whom the bean list was computed logs in to portal. Use this value only in combination with the setting `cacheScope=private`.

    -   **default**

        If you use this setting, resulting cached bean lists are not invalidated during user login.

-   **invalidateCache**

    Use this attribute to invalidate the bean list. If you set this attribute to the value `always`, the bean list is always invalidated before the new list-rendering context is set up. In other words, the bean list is recomputed for each rendering. To achieve a conditional invalidation, you can set the attribute to a different value. In this case, the cache is invalidated only if a portlet session attribute or a request attribute with the specified value is available in the current execution context.

-   **clearCache**

    Use this attribute to clear the bean list cache. If you set this attribute to the value `always`, the cache is always cleared before the new list-rendering context is set up. To achieve a conditional clearing action, you can set the attribute to a different value. In this case, the cache is cleared only if a portlet session attribute or a request attribute with the specified value is available in the current execution context.

-   **listItemSelection**

    Use this attribute only if you do not specify a profile in your list rendering context. If you set this attribute to a `BasicJSONSelection` expression, it serves as a selector statement that is used to break down the source JSON document into a list of individual JSON objects. Each object serves the data for a corresponding item in the resulting bean list. The DDC plug-in evaluates the `BasicJSONSelection` statement against the root element of the source JSON object. For the value, specify a valid `BasicJSONSelection` statement.

    Consequently if you do not specify a profile in your list rendering context, you must specify `BasicJSONSelection` expressions in order to access data in the list designs for you Digital Data Connector. You do so by using the `[AttributeResource attributeName="<basic-json-selection>"]` tag.



???+ info "Related information"
    - [Outbound HTTP connection](../../portlets_development/web2_ui/outbound_http_connection/index.md)
