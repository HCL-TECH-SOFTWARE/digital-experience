# JCR search service configuration parameters

The following search service configuration parameters can be modified to enable and configure searching for WCM content that is stored in the JCR database. These JCR search service configuration parameters can be modified by accessing the JCR ConfigService PortalContent resource environment provider.

!!! important
    Setting these parameters correctly is required for WCM Authoring search to work.

To access the JCR search service configuration parameters that are stored in the **JCR ConfigService PortalContent** resource environment provider, complete the following steps:

1.  Log in to WebSphere® Integrated Solutions Console.
2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** and select **JCR ConfigService PortalContent**.
3.  In the Additional Properties section of the Configuration window, select **Custom properties**.

!!! important
    There are many configuration parameters in the **JCR ConfigService PortalContent** resource environment provider that must not be modified. Do not modify any configuration parameters that are not referenced in the following list, unless you are directed to do so by HCL Software Support.

-   **jcr.textsearch.enabled**

    This parameter enables or disables text search. The default value is `true`. Set this value to `false` to disable the text search run time. This parameter is required.

-   **jcr.textsearch.indexdirectory**

    This parameter specifies the directory where indexes are stored, for example,/opt/IBM/WebSphere/wp\_profile/PortalServer/jcr/searchIndexes. This parameter is required if text search is enabled \(jcr.textsearch.enabled=`true`\).

-   **jcr.textsearch.PSE.type**

    This parameter specifies whether the search service is a local search service or a remote search service. The default value is `localhost`. Specify one of the following values:

    -   **localhost**

        This value specifies the search service as a local search service.

    -   **EJB**

        This value specifies the search service as a remote search service.

        !!! note
            -   SOAP support for remote search service was deprecated with HCL Portal 8.0.
            -   If you are using a remote search service, you must also specify thejcr.textsearch.EJB.IIOP.URL andjcr.textsearch.EJB.EJBName parameters.
            
-   **jcr.textsearch.EJB.IIOP.URL**

    This parameter specifies the URL of the naming service that is used to access the WebScannerEJB, for example, `iiop://localhost:2811`. Specify this parameter if you are using a remote search service \(jcr.textsearch.PSE.type=`EJB`\).

-   **jcr.textsearch.EJB.EJBName**

    This parameter specifies the name of the WebScanner EJB, for example, `ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome`. Specify this parameter if you are using a remote search service \(jcr.textsearch.PSE.type=`EJB`\).

-   **jcr.query.collation.db2.enabled**

    This parameter enables or disables collation support for the ordering of results in the JCR XPath queries. This parameter is for all DB2 platforms. The default value is `false`. Specify `true` to enable collation support.


The following new properties are integrated in [CF16 and later](https://www.ibm.com/support/pages/apar/PI94076):

-   **jcr.text.search.seedlist.cleanup.pending.max.deletes.per.interval**

    Default value is `100000`.

    For a given iteration of the Seedlist CleanupUtility, this value defines the number of rows from the `ICMSTJCRTSSEEDLISTPENDING` will attempt to delete prior to terminating the iteration.


-   **jcr.text.search.seedlist.cleanup.pending.limit**

    Default value is `25000`.

    This value defines the maximum number of rows that the Seedlist Cleanup Utility will attempt to delete from the `ICMSTJCRTSSEEDLISTPENDING` table in a single SQL call.


???+ info "Related information"
    - [Database transfer: Set up JCR collation](../../../../../deployment/manage/db_mgmt_sys/dbtransfer_manual/kc-db-createdb-db2.md)
    - [Setting up a JCR search collection](../setup_search_collections/jcr_search_collections/index.md)
