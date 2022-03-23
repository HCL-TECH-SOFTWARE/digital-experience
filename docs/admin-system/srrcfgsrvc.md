# Search service configuration parameters 

Learn about the portal search service parameters and possible values.

To configure a portal search service, use the parameters given in the following list. For details about how to set the values for these parameters, read *Managing search services* or the Manage Search administration portlet help.

**Notes for configuring a search service:**

-   Unless otherwise stated, the values that you set for parameters of a portal search service apply to that search service and all its collections. They do not affect other search services of the portal or their search collections.
-   Unless otherwise stated, changing the value of a parameter apply to both the existing search collections and newly created search collections. Some parameters affect only newly created search collections. These parameters cannot be updated for existing search collections.
-   The search administration portlet Manage Search lists the Default Portal Search Service and its collection Portal Content or other collections in the default portal language. It does not list these items in the language that the user selected as preferred language for the portal or set in the browser. Example: The portal default language is set to English and the user selected German as the preferred portal language or as the browser language. In this case, the Default Portal Search Service and its collections show in English.
-   SOAP support for remote search services was deprecated with HCL Digital Experience Version 8.0. EJB is still supported.
-   If you delete a search service, the portal does not delete the search collections that are related to this search service. Delete the search collections by using the Manage Search administration portlet. If you delete the default search service, it is re-created new when you restart the portal.

**Notes related to the search service configuration parameter list:**

-   The parameter list in both the Search Services pane of the Manage Search portlet and in the following information shows several parameters that end with the suffix `_EXAMPLE`. These example parameters are not used by the portal. They serve as an example for the same parameter without the suffix `_EXAMPLE`. They give an example value that you might use. Deleting these parameters or modifying their value has no effect.
-   If you want to set a parameter that is listed here, but not listed in the portlet, add it. To add a parameter, type the parameter and the value in the entry fields **Parameter key:** and **New parameter value:** and click **Add Parameter**.
-   In the following list, the abbreviation pse in parameters or values stands for Portal Search Engine.
-   The following list is arranged in alphabetical order. Parameters might be listed in a different order in the portlet.

-   **boostingSettings**

    Use this parameter to specify which metadata fields are given extra weight in an overall rank score during a search. You can also specify how much the selected metadata fields contribute to relevance circulation when you run a search. Specify the following values:

    -   **fieldBoost**

        This value defines which metadata fields have extra weight when search results are returned, and how much extra weight is given to the specified fields. Provide the following attributes:

        -   **field**

            The relevant string-based metadata field that you want search to focus on. Some common or default field values are `title`, `description`, and `keywords`.

        -   **boost**

            A factor that increases the relevancy for matches in the specified metadata field. This value can be set between a range of 1.0 and 10.0. However, it is good practice to set it between a range of 1.0 and 3.0. Value 1.0 means no extra relevancy.

    -   **phraseBoost**

        This parameter is not mandatory. If enabled, it improves the ranking of a document when the search terms are found as a phrase in that document. For instance, if the user is searching for "John Smith" and a document contains exactly that phrase, this document gets a higher ranking. However, if that document contains "Smith, John", then the ranking is not improved.

    The following example shows the boost parameters and some sample values.

    ```
    {"phraseBoost": {"Enabled":"true"}, "fieldBoost": [{"field":"title", "boost": 3.0} , {"field":"description", "boost":3.0}, {"field":"keywords", "boost":2.0}]}
    ```

    **Important:** After you set these values, restart the portal server. If you changed your content items to test your settings, recrawl your content to see the effects of the settings. Readjust the settings to find the best values for your search data.

-   **CLEAN\_UP\_TIME\_OF\_DAY\_HOURS**

    Time of day at which the portal runs the maintenance process for search collections to remove outdated files and broken links. Possible values are positive integers 0 - 24 for the full hours of the day. The default value is `0`, which runs the cleanup at midnight.

    **Note:** If you modify the value for this parameter, the new value is applied only to newly created collections of the search service. You cannot update this parameter for existing search collections.

-   **DefaultCollectionsDirectory**

    You can use this parameter to specify the default directory for search collections. If you use Portal Search locally, this parameter is optional. If you specify no value for this parameter, the default collection directory is `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/collections`. If you set up a remote search service, this parameter is mandatory. For details about setting this parameter, read Configuring the default location for search collections.

-   **DEFAULT\_SEARCH\_OPERATOR**

    Use this parameter to specify how the Portal search engine responds to search queries with two or more terms. The default value is `or`. Only one search term must be in the document in order for that document to be displayed in the search results list. Change this value to `and` to retrieve only those documents that contain all of the search terms that are listed in the query.

    **Note:** After you change this parameter, you must restart the portal server and remote search service.

-   **CONFIG\_FOLDER\_PATH**

    Use this parameter to determine where the configuration data for search collections is stored. The default is `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/CollectionsConfig`.

-   **EJB**

    If you set up a remote search service by using EJB, use this parameter to specify the EJB name in JNDI. An example value is `ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome`.

    If you set this parameter, you also need to set the `IIOP_URL` parameter.

-   **EJB\_Example**

    This parameter is an example that gives an example value for the parameter `EJB`. The example value is `ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome`.

-   **ExternalSecurityResolverUrl**

    Use this parameter to configure the Portal Search service with the information about an external security resolver. This parameter is required for security filtering of HCL Connections resources to function properly. An example value of the resolver URL is `https://host:port/ConnectionsResourceId/seedlist/authverify/getACLTokens` where ConnectionsResourceID is any HCL Connections resource identifier.

-   **HTTP\_MAX\_BODY\_SIZE\_MB**

    Use this parameter to limit how much content is fetched during a crawl from application files, such as PDF or Microsoft Word. The specified unit is MB. The default value is `20` MB. If a file exceeds the specified limit, the document is truncated, and Portal Search indexes the fetched portion as is possible. However, indexing might fail on truncated documents. In this case, the document is not listed under search results at all.

    **Notes:**

    1.  If you modify the value for this parameter, the new value is applied only to newly created collections of the search service. You cannot update this parameter for existing search collections.
    2.  Document Conversion Services might not be able to convert the content of truncated application files. If Document Conversion Services fails to convert a truncated application file, it logs an error to the `SystemErr.log` file. If the tracing feature tracing is enabled for the portal, Portal Search logs a warning message to the portal log file.
-   **HTTP\_MAX\_SEEDLIST\_SIZE\_MB**

    This parameter limits how much portal content is fetched during a crawl from your own portal site. It determines the amount of space that is reserved for listing portal site resources or managed web content resources. The specified unit is MB. The default value is `4` MB. If a crawl exceeds the limit set for this parameter, the crawl fails, and Portal Search logs an error message. In this case, or if returned search results do not represent to complete extent of your portal site resources, increase this value.

    **Note:** If you modify the value for this parameter, the new value is applied only to newly created collections of the search service. You cannot update this parameter for existing search collections.

-   **HTTP\_NON\_APPL\_MAX\_BODY\_SIZE\_MB**

    Use this parameter to limit how much content of each HTML page is fetched from websites of collections that belong to this search service. The specified unit is MB. The default value is `0.2` MB. This value means that the amount of content that is sent for indexing is always the first 0.2 MB of text.

    **Note:** If you modify the value for this parameter, the new value is applied only to newly created collections of the search service. You cannot update this parameter for existing search collections.

-   **IIOP\_URL**

    If you set up a remote search service by using EJB, use this parameter to specify the IIOP URL. An example value is `iiop://localhost:2811`.

-   **IIOP\_URL\_Example**

    This example gives an example value for the parameter `IIOP_URL`. The example value is `iiop://localhost:2811`.

-   **PSE\_TYPE**

    Use this parameter to specify the type of search service. Possible values are `localhost`, `ejb`, and `soap`. The default value is `localhost` for local search service.

    If you use Portal Search locally, this parameter is optional.

    If you set up a remote search, this parameter is mandatory. In this case, specify the type of remote service that you use, EJB, or SOAP. If you specify `ejb` here, you also need to specify the values for the parameters `EJB` and `IIOP_URL`. If you specify `soap` here, you also need to specify the values for the parameter `SOAP_URL`.

-   **SEARCH\_SECURITY\_MODE**

    This parameter defines access control enforcement during search. Three filter modes are supported. Specify one of the following values, depending on the filter mode that you want to use:

    -   **SECURITY\_MODE\_PREFILTER**

        Specify this value to use pre-filtering mode. Pre-filtering provides the fastest filtering, as it is performed in the search index level. An extra advantage of this filtering mode is that remote secured content sources can be searched from portal. However, it is based on search index only. The search result list can be temporarily inconsistent with user access rights if these access rights were changed after the last crawl:

        -   **Example 1:**

            A user's access rights were restricted after the last crawl. In this case, the use might get search results listed to which the user had access before, but to which the user no longer has access. When the user clicks such a link in the search result list, the user cannot access the document.

        -   **Example 2:**

            A user was given access rights on documents after the last crawl. In this case, the user will not get these documents listed among the search results until after the next crawl.

        **Note:** If the search service contains Portal content \(a collection that contains a content source of type Portal site\), then this security mode is invalid and must not be used.

    -   **SECURITY\_MODE\_POSTFILTER**

        Post-filtering

        Specify this value to use post-filtering mode. Post-filtering provides the safest but costly filtering approach. It checks access permission in real time for each returned search result against Portal Access Control. As a result you can use it only for local content sources. This filtering mode was the only filtering mode available before portal V 7.0.

    -   **SECURITY\_MODE\_PRE\_POST\_FILTER**

        Pre-post-filtering

        Specify this value to use pre-post-filtering mode. This value is the default value. Pre-post-filtering combines the two filter modes mentioned earlier. It provides a balanced method for enforced access control. It filters most irrelevant documents at the pre-filtering phase based on the search index. This behavior results in fewer rejections in the post-filtering phase. As it still uses post-filtering, you can apply it only for local content sources. As it uses pre-filtering, search result lists might be temporarily inconsistent with users' access rights until after the next crawl.

-   **SEEDLIST\_PAGE\_TIMEOUT**

    Use this parameter to increase the timeout for fetching the seedlist page. The specified unit for the value is seconds. The default value is 150 seconds. This value means that the portal search attempts to fetch the seedlist main URL for 150 seconds.

    **Note:** If you modify the value for this parameter, the new value is applied only to newly created collections of the search service. You cannot update this parameter for existing search collections.

-   **SOAP\_URL**

    If you set up a remote search service by using SOAP, use this parameter to specify the SOAP URL. An example value is `http://localhost:10000/WebScannerSOAP/servlet/rpcrouter`.

-   **SOAP\_URL\_Example**

    This example gives an example value for the parameter `SOAP_URL`. The example value is `http://localhost:10000/WebScannerSOAP/servlet/rpcrouter`.

-   **dateFieldPattern**

    By default, portal search does not know whether a field contains a date. Use this parameter to enable search for documents by date. A regular expression is used to check whether a field must be handled as a date field or not. The default pattern is `".*date$"`, and matches all fields that end with the word “date”.

    **Note:** After you change this parameter, you must restart the Portal server and remote search service.

-   **dateFormat**

    Specify the format that is used for date queries. The default is `yyyy-MM-dd`. You can specify a different format by using the Java date syntax with the exception that spaces cannot be used, since that would break the date range queries. Make sure to communicate any changes in format to search users. To verify that the format is supported, you can enable tracing for `com.ibm.lotus.search.index.lucene.search.PseSiapiQueryParser=all` and then perform a series of searches. Do not forget to disable the trace after you verify that the format is supported.

    **Note:** After you change this parameter, you must restart the Portal server and remote search service.

-   **dateTimeFormat**

    Specify the format that is used for date queries with a time part. The default is `yyyy-MM-dd,hh:mm`. You can specify a different format by using the Java date syntax with the exception that spaces cannot be used, since that would break the date range queries. Make sure to communicate any changes in format to search users. The typical letters that are used in the format are listed here:

    -   **yyyy**

        Specifies the year.

    -   **MM**

        Specifies the numerical month in the year. For instance, the month of December would be represented by `12`.

    -   **dd**

        Specifies the numerical day in the month.

    -   **hh**

        Specifies the hour in the day. By default, the hour is specified in the 24-hour format. For instance, the number `18` specifies 6 PM. However, you can specify a custom format that uses the 12-hour time format instead.

    -   **mm**

        Specifies the minute in the hour.

    -   **ss**

        Specifies the second in the minute.

    -   **Z**

        Specifies the time zone. For example, `-0800`.

    To verify that the format is supported, you can enable tracing for `com.ibm.lotus.search.index.lucene.search.PseSiapiQueryParser=all` and then perform a series of searches. Do not forget to disable the trace after you verify that the format is supported.

    **Note:** After you change this parameter, you must restart the Portal server and remote search service.

-   **dateFormatLocale**

    This parameter specifies the locale that is used when a date is parsed. The portal default locale is used as the default value.

    **Note:** After you change this parameter, you must restart the portal server and the remote search service.


The following parameters are reserved for internal use only. Do not change their values.

-   **CONTENT\_SOURCE\_TYPE\_FEATURE\_NAME**

    This parameter is reserved for internal use only. Do not change its value. The default value is `ContentSourceType`.

-   **CONTENT\_SOURCE\_TYPE\_FEATURE\_VAL\_PORTAL**

    This parameter is reserved for internal use only. Do not change its value. The default value is `Portal`.

-   **CONTENT\_SOURCE\_TYPE\_FEATURE\_VAL\_WEB**

    This parameter is reserved for internal use only. Do not change its value. The default value is `Web`.

-   **SecurityResolverId**

    This parameter is reserved for internal use only. Do not change its value. The default value is `com.ibm.lotus.search.plugins.provider.core.PortalSecurityResolverFactory`.

-   **SetProperties**

    This parameter is reserved for internal use only. Do not change its value. Possible values are `on` or `off`. The default value is `on`.

-   **startup**

    This parameter is reserved for internal use only. Do not change its value. The default value is `false`.

-   **VALIDATE\_COOKIE**

    This parameter is reserved for internal use only. Do not change its value. The default value is `123`.

-   **WORK\_MANAGER**

    You can use this parameter to specify the work manager. This parameter is reserved for internal use only. Do not change its value. The default value is `wps/searchIndexWM`.

-   **WORK\_MANAGER\_DEPLOY**

    This parameter is an example of the deployed `WORK_MANAGER` parameter. The example value is `wps/searchIndexWM`.

-   **WORK\_MANAGER\_NATIVE**

    This parameter is an example of the parameter `WORK_MANAGER` for native threads for debug purposes only. The example value is `force.hrl.work.manager.use.native.threads`.

-   **WORK\_MANAGER\_NAME**

    This parameter specifies the JNDI name of the work manager that Portal Search uses.


-   **[JCR search service configuration parameters ](../admin-system/jcr_srrcfgsrvc.md)**  
The following search service configuration parameters can be modified to enable and configure searching for content that is stored in the JCR database. These JCR search service configuration parameters can be modified by accessing the JCR ConfigService PortalContent resource environment provider.

**Parent topic:**[Administering Portal Search ](../admin-system/srtadmsrch.md)

**Related information**  


[Using the WebSphere Integrated Solutions Console to administer Portal Search ](../admin-system/srtadmsrchadmcnsl.md)

[Hints and tips for improving quality of Portal Search results ](../admin-system/srrhinttips_improve_quality_search.md)

