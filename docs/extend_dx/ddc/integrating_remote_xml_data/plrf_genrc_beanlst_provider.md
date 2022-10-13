# The generic XML Digital Data Connector plug-in

You can use the Digital Data Connector \(DDC\) for HCL Portal plug-in directly to integrate remote XML data without coding. It makes it possible to integrate XML data that is served in arbitrary XML document formats by supporting the concept of list-rendering profiles.

A list-rendering profile describes the transformation between a specific XML document format and the generic bean list data structure that this DDC plug-in generates. You identify the generic XML DDC plug-in by its name `ibm.portal.ddc.xml`. You can address it by using the `[Plugin:ListRenderingContext extension-id="ibm.portal.ddc.xml"]` tag. The generic XML DDC plug-in supports the attributes that are shown in the following list. You can specify these attributes when you set up the list-rendering context by using the `ListRenderingContext` tag that HCL Web Content Manager provides.

-   **source**

    You can set this attribute to identify the source URI that serves the XML data. The URI must be accessible through the portal resource addressability framework. Supported URI schemes include `http`, `https`, and `dav`. If you access external XML data by using `http` or `https` URLs, make sure to adjust your proxy configuration outbound HTTP connection to allow outbound access to these URLs. For more information, read the information about proxy configuration in the HCL Digital Experience documentation. For more information, read *Outbound HTTP connection*. Example:

    ```
    [Plugin:ListRenderingContext action="set" extension-id="ibm.portal.ddc.xml" 
       profile="ibm.portal.atom" 
       attribute="source=https://www.cntserv_exmp.com/connections/communities/service/atom/catalog/public" 
       compute="always"
    
    ```

-   **sortCriteria**

    Set this attribute to sort the content of a bean list that is based on a specific attribute. This sorting attribute must be defined in the list-rendering profile that the current list-rendering context uses. This built-in sorting capability sorts only the data that is contained in the current bean list. Therefore, do not use this attribute if the bean list represents only a fragment of a larger result set. In such a situation, provide the sorting process by the backend service. If you do not specify this attribute, the bean list maintains the sequence of items as served by the external data source. To specify the sort order, use the `sortOrder` attribute.

-   **sortOrder**

    Use this attribute in combination with the `sortCriteria` attribute to specify the sort order. Supported values are `asc` and `desc` for sorting in ascending or descending order. Example:

    ```
    [Plugin:ListRenderingContext action="set" extension-id="ibm.portal.ddc.xml" 
       profile="ibm.portal.atom" 
       attribute="source=https://www.cntserv_exmp.com/connections/communities/service/atom/catalog/public" 
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
    [Plugin:ListRenderingContext action="set" extension-id="ibm.portal.ddc.xml" 
       profile="ibm.portal.atom" 
       attribute="source=https://www.cntserv_exmp.com/connections/communities/service/atom/catalog/my" 
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



**Related information**  


[Outbound HTTP connection](../../../extend_dx/portlets_development/web2_ui/outbound_http_connection/index.md)

