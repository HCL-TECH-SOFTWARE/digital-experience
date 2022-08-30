# Adding and configuring the External Search Results portlet

Configure a portlet that retrieves and displays search results from third-party search engines, then add the External Search Results portlet to the Search Center.

The External Search Results is a specialized portlet that administrators can add to HCL Digital Experience Search. When you add that portlet to HCL Digital Experience Product Documentation Search, the results of a search that is initiated from the **Search** page include results from third-party external search engines. You can add more than one copy of the External Search Results portlet to the **HCL Digital Experience Product Documentation Search** page. You can also configure each of these portlets to display a specific number of search results.

**Note:**

1.  You must be logged in as Administrator to add an External Search Results portlet to the Search Center.
2.  The External Search Results portlet can be added only to the Search Center on the HCL Digital Experience Product Documentation Search page. It does not function anywhere else.

To add the External Search Results portlet to the **HCL Digital Experience Product Documentation Search** page and configure it, proceed as follows:

1.  Add the portlet to the Search Center.

    You must add the portlet only if the External Search Results portlet was removed from the Search Center.

    1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

    2.  Locate the Search Center page, under **Content Root** \> **Search**.

    3.  Click **Edit Page Layout**.

    4.  Click **Add Portlets**.

    5.  Select the**External Search Results** portlet by clicking the check box.

    6.  Click **OK** to add the portlet to the page.

    7.  Click **Done**.

    8.  Go to the Search Center page.

2.  Configure the External Search Results portlet:

    1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.

    2.  In the list of portlets, locate **External Search Results**, and click the **Configure** icon next to the portlet name.

    3.  Edit the value of the **searchEngineUrl** parameter. This value represents the URL of the third-party search engine that you want to be queried. The value of the **searchEngineUrl** parameter returns a feed of search results for the specified search terms. The feed is in RSS or ATOM syndication format. The string `${searchTerms}` must be included in the value. This string is replaced by the actual query during the search.

        For example:

        ```
        http://www.ibm.com/developerworks/views/rss/customrssatom.jsp?zone_type=AllZones&content_type=AllTypes&search_by=${searchTerms}&day=1&month=01&year=2008
        ```

    4.  Edit the value of the parameter **searchEngineFullPageUrl**. This parameter is optional. You can delete it or leave it empty. When you set this parameter, a **More** link is added to the portlet. It links to the website of the external search engine. The value represents a parameterized form of the URL used to locate the search engine that is queried. The string `${searchTerms}` must be included in the parameter value. During the search, the portlet replaces the string by the actual query.

        For example:

        ```
        https://developer.ibm.com/?s=${searchTerms}
        ```

        This URL returns the public HTML page of the search engine.

    5.  Edit the value of the **numOfEntries** parameter. This parameter determines the maximum number of search results, which are displayed. The default number is 3, but you can enter a different numeric value to increase the maximum.

    6.  If the external search engine returns search results in a format that is not supported, or if the provided rendering of the search results is not acceptable, an XSLT file can be specified. Edit the value of the **externalXsltUrl** parameter to supply a URL for such an external XSLT file.

        **Note:** The XSLT does not create an entire HTML document, but an HTML fragment that can be embedded inside a page.

    7.  On the page for editing the preference `searchEngineFullPageUrl`, click **OK**.

    8.  On the page for configuring the External Search Results portlet, click **OK** to save your changes.

    9.  Remember that if the target URL is HTTPS \(SSL\), that you need to import the SSL certificate for the target site into your node or cell "default trust store". Otherwise the “External Search Results” portlet will throw an error because it cannot reach the target site. Note that the certificate for IBM DeveloperWorks is not imported by default. Since the IBM Developerworks RSS feed is HTTPS, the default "out-of-the-box" external search query will result in an error.

    Users can now use the External Search Results portlet.

3.  If you want to add external search engines, or modify the existing search engine, you must modify the proxy configuration of the portlet. All HTTP requests from the portlet to the external search engines are directed through the outbound HTTP connection service, which is included in the portal. The External Search Results portlet includes an application-specific configuration for this service. In a standard portal installation, it allows only connections to the URL of the default external search engine `http://www.ibm.com/developerworks/views/rss/*`. To change this, you must modify the `proxy-config.xml` file that is bundled with the portlet. To modify the file, proceed as follows:

    1.  Go to the file `searchCenter.war`.

        It is in the directory `[PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/search/wp.search.portlets/search/portlet/installableApps` .

    2.  Edit the file `proxy-config.xml`. It is in the directory `WEB-INF`.

    3.  Add an `proxy:policy` element, or modify the existing one.

        For more information, read *Creating an outbound HTTP connection configuration profile*. The current policy element allows connections to the following URL: `http://www.ibm.com/developerworks/views/rss/*`. You can change the URL attribute to specify another site, for example `http://www.ibm.com/products/*`. If you want to add several instances of the portlet on a page that show search results from different sources, duplicate the `proxy:policy` element. Add a `policy` element for each instance of the portlet, with the URL attribute that matches the search source.

    4.  Repackage the WAR file and update the Search Center web module.

    Searches by users are now done by the modified search configuration.



**Related information**  


[How to create an outbound HTTP connection configuration profile](../dev-portlet/outbhttp_cfg_tsk_create.md)

