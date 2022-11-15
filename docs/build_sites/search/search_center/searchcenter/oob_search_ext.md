# Adding External Search Results to the Search Center



Another type of scope is the remote search service scope that uses external search engines.

You must be logged in as an administrator to add an **External Search Results** portlet to the Search Center.

The search engine service that you want to use must provide a web interface and return the search result as either an RSS or Atom feed. For example, the search result page which Google would return is HTML-based and cannot be rendered within the External Search Result portlet.

There are two approaches for configuring external searches:

-   One approach is to define external scopes that allow your visitors to directly start external searches from the scope drop-down of the search box. The search results display in a new browser window.
-   The other approach is to define an external search engine that contributes results to the Search Center results page. Site visitors see the external search engine results from the Search Center page in the External Results portlet. The following procedure describes how you do this.

If the **External Search Results** portlet cannot communicate with the third-party search engine, it displays the following error message: *EJPJN0002E: A problem occurred during the search. This might be due to configuration issues, communication problems with the external search site, or problems with the external search site itself.* Complete the following steps to make sure that the communication between the portal and the third-party search engine is configured correctly.

1.  Go to the **Portal Administration** \> **Portlet Management** \> **Portlets** page.

2.  Search for the string External.

    The portlet that you want to modify is named External Search Results.

3.  Edit the value of the **searchEngineUrl** parameter.

    This value represents the URL of the third-party search engine that you want to be queried. You must include the `$\{searchTerms\}` in the value. During a search query, $\{searchTerms\} is replaced by the actual query.

    Example search engine URLs:

    -   **Google News:**

        `http://news.google.com/news?output=rss&q=${searchTerms}`

    -   **Yahoo News:**

        `http://news.search.yahoo.com/news/rss?p=${searchTerms}&ei=UTF-8&eo=UTF-8`

    -   **Flickr:**

        `http://www.flickr.com/services/feeds/photos_public.gne?tags=${searchTerms}&format=atom`

4.  You can also add a **More** link to the end of the External Search Results that links to the engine page.

    For example:

    1.  Edit the **searchEngineFullPageUrl** parameter.

    2.  In the **Value** field, paste the engine URL plus $\{searchTerms\}.

        For example: http://www.ibm.com/developerworks/search/searchResults.jsp?searchSite=dW&searchScope=dW&query=$\{searchTerms\}

5.  To save your changes, click **OK** twice.

6.  Adapt the proxy configuration file of the Search Center portlet.

    1.  Export the proxy configuration file by running the read-outbound-http-connection-config task.

        For example, `ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=PA_Search_Center` where your\_path/config\_file.xml is the absolute path name of the proxy configuration file of the Search Center portlet.

        For more information about the read-outbound-http-connection-config task, go to [How to read an outbound HTTP connection configuration profile](../../../../extend_dx/portlets_development/web2_ui/outbound_http_connection/cfg_outbound_http_connections/adm_tools_for_cfg_outbound_http_conn/cfg_outbound_http_using_cfgtsk/outbhttp_cfg_tsk_update.md).

    2.  Add the XML to the file your\_path/config\_file.xml and specify the URL for the third-party search engine in the `<policy>` tag.

        For example, for Yahoo News, the policy tag looks as follows:

        ```
        <policy url="http://news.search.yahoo.com/news/*" acf="none">
            <actions>
                <method>GET</method>
                <method>HEAD</method>
            </actions>
            <mime-types>
                <mime-type>text/xml*</mime-type>
                <mime-type>application/xml*</mime-type>
                <mime-type>application/atom+xml*</mime-type>
                <mime-type>application/rss+xml*</mime-type>
            </mime-types>
        </policy>
        ```

    3.  Update the proxy configuration file by running the update-outbound-http-connection-config task.

        For example, `ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=PA_Search_Center` where your\_path/config\_file.xml is the absolute path name of the proxy configuration file of the Search Center portlet.

        For more information about the update-outbound-http-connection-config task, go to [How to update an outbound HTTP connection configuration profile](../../../../extend_dx/portlets_development/web2_ui/outbound_http_connection/cfg_outbound_http_connections/adm_tools_for_cfg_outbound_http_conn/cfg_outbound_http_using_cfgtsk/outbhttp_cfg_tsk_update.md).

7.  Stop and restart the Search Center application.

    Log into WebSphere® Integrated Solutions Console and click **Applications** \> **WebSphere Enterprise Applications**. Then, you can stop and restart the Search Center application.

    !!! note 
        If the URL of the third-party search engine uses HTTPS or if the third-party search engine redirects HTTP requests to HTTPS, the communication between the portal and the third-party search engine is secured with SSL/TLS. To open a secured connection, the portal must retrieve the SSL certificate of the third-party search engine and store it in its truststore. Refer to [Retrieving signers from a remote SSL port](https://www.ibm.com/support/knowledgecenter/en/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/tsec_sslretrievesignersport.html) for instructions.


To add results from additional external search engines, clone and configure additional External Search Result portlets, add them to the Search Center page and update the file proxy-config.xml accordingly.

