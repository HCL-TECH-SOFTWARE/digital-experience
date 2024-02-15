# Configuring search with Remote Content Server Search Service Type (RCSS)

Use the Remote Content Server Search Service Type (RCSS) to implement live search for HCL Connections content from an HCL Portal application.

Consider these issues before you configure RCSS:

-   RCSS search is not supported when your deployment is configured to use Security Access Manager and SPNEGO or Computer Associates' SiteMinder and SPNEGO.
-   Users who are registered in an LDAP that is common between HCL Connections and HCL Portal can be granted administration rights in Portal to configure RCSS by using scopes API over HTTP.

Search Service is a live search and uses REST to search on a target information source and fetch the matching results. HCL Connections and HCL Portal integration uses RCSS to use the ATOM/REST APIs displayed by HCL Connections. This approach correlates a relevance score for HCL Connections content with the Portal relevance score. It is a federated approach where the search is federated between Portal and HCL Connections instances.

1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

2.  In the Manage Search section, click **New Search Service**.

3.  Name the service so that it is easily identifiable, provide this value in the **Service Name** field.

4.  Configure the search service by using the following parameters. Possible values for the parameters are provided in the Parameter Value column.

    |Parameter Key|Parameter Value|
    |-------------|---------------|
    |SearchRequestUrl|Use/atom/search/results in the case where only public content is returned. Use /atom/mysearch/results in the case where public and private content is returned.|
    |RestServiceUnSecureUrl|/search|
    |ContentType|RemoteContent|
    |QueryParam|includeField=wikiLabel&includeField=pageLabel&includeField=community\_id&query|
    |IgnoreAllSourcesSearch|false|
    |RestServiceSecureUrl|/search|
    |StartParam|start|
    |AllSourcesParam|scope|
    |QueryLangParam|queryLang|
    |DisplayProviderId|ConnRCSS|
    |RequestLocaleParam|locale|
    |LocationParam|scope|
    |RequestLocationType|/atom/scopes|
    |RestServiceHost|connections.host.com|
    |RestServiceUnSecurePort|9081<br>**Note:** Use the direct server port for the Connections server, not the IHS port.|
    |RestServiceSecurePort|9444<br>**Note:** Use the direct server port for the Connections server, not the IHS port.|
    |UseHTTPOutbound|Takes a value of true or false (default).  Setting this parameter to true results in the RCSS code to use the HTTP Outbound service.|
    |HTTPOutboundMappingPath|The value is a path, as defined in the HTTP Outbound proxy configuration. If the HTTP Outbound support is enabled, this parameter defaults to /IBM\_RCSS.  This value is the mapping path that is used when you access the HTTP Outbound service. A proxy configuration with this context path must exist in the proxy configuration. The configuration then determines how the HTTP invocation is handled.|
    |highlight=\[\]|Use this setting to avoid Connection search feeds injecting bold tags to highlight search results.|
    |includeField=\[\]|wikiLabel&includeField=pageLabel&includeField=community\_id&highlight=\[\]&query|

5.  Log out and log in again before you create scopes for the RCSS service that you configured.


The RCSS component does not use the keystore that is managed by WebSphere® Application Server. If you try to set the `RestServiceSecureProtocol` property to https and the `RestServiceSecurePort` property to the SSL port for the HCL Connections server when you configure the RCSS search service, you cannot to retrieve the search scopes from HCL Connections and thus cannot complete the search configuration. You see SSL handshake errors in the HCL Portal `SystemOut` logs even though you imported the HCL Connections SSL certificate into the WebSphere Application Server SSL certificate truststore.


???+ info "Related information"
    - [Search Services](../../../../../../../build_sites/search/manage_search/srch_srvs.md)

