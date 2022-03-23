# Seedlist 1.0 REST service API 

The HCL Web Content Manager API for retrieving application content through a seedlist is based on the REST architecture style. To obtain seedlist content, third-party crawlers or administrator applications need to construct and send only HTTP requests to the application servlet.

All REST API requests are synchronous calls. The order of the parameters in the requests does not matter. The parameter names are case-sensitive and must be entered in the format described here. An HTTP error response \(for example, status code 404\) is generated in the following situations:

-   An unknown or unsupported parameter is submitted as part of the request.
-   Web Content Manager cannot resolve the site area path or ID.
-   Web Content Manager cannot find any items.
-   The search seedlist enterprise application \(Seedlist\_Servlet\) is not running.

The request is a standard HTTP GET command. The URL is formed by combining the seedlist servlet host name, port number, and path, followed by a collection of input parameters that are separated by ampersand \(`&`\) characters. The input parameters are entered as name-value pairs.

For example:

```
http://host\_name:port\_number/wps/seedlist/myserver?SeedlistId=library\_list&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=action&Range=number\_of\_entries
```

-   **library\_list**

    One or more web content libraries, which are separated by commas. If no value is specified, all libraries are used.

-   **action**

    The action to run on the request. The following actions are available:

    -   **GetDocuments**

        Retrieves a list of content items with their associated information.

-   **number\_of\_entries**

    For each seedlist page that is returned, this value specifies the number of entries in the list of content items. If no value is specified, 100 items are returned.


## Examples

In these examples, replace the following variables with values that are appropriate for your environment:

-   host\_name
-   virtual\_portal\_host\_name
-   http\_server
-   port\_number
-   library
-   site\_area
-   site\_area\_id

For the SeedlistId parameter, you can specify the value in the following formats:

-   No value
-   A specific library \(for example, `library1`\)
-   A specific site area \(for example, `site\_area1`\)
-   A list of libraries, which are separated by commas \(for example, `library1,library2,library3`\)
-   The JCRID of a site area

-   **Retrieve a maximum of 100 items from a stand-alone server by using the path to the site area**

    ```
    http://host\_name:port\_number/wps/seedlist/myserver?SeedlistId=library/site\_area&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
    ```

-   **Retrieve a maximum of 200 items from a stand-alone server by using the ID of the site area**

    ```
    http://host\_name:port\_number/wps/seedlist/myserver?SeedlistId=site\_area\_id&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments&Range=200
    ```

-   **Retrieve a maximum of 100 items from a specific library**

    ```
    http://host\_name:port\_number/wps/seedlist/myserver?SeedlistId=library&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
    ```

-   **Retrieve a maximum of 100 items from all libraries**

    **Note:** To use all libraries, leave `SeedlistId` value empty.

    ```
    http://host\_name:port\_number/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
    ```

-   **Retrieve a maximum of 100 items from a specified list of libraries**

    ```
    http://host\_name:port\_number/wps/seedlist/myserver?SeedlistId=library1,library2&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
    ```

-   **Retrieve a maximum of 100 items from a cluster**

    **Note:** When referencing a cluster, specify the request with the host name and port number of the HTTP server.

    ```
    http://http\_server:port\_number/wps/seedlist/myserver?SeedlistId=library/site\_area&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
    ```

-   **Retrieve a maximum of 100 items from a virtual portal that is configured to use the URL context as the access point**

    ```
    http://http\_server:port\_number/wps/seedlist/myserver/virtual\_portal\_context?SeedlistId=library/site\_area&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
    ```

-   **Retrieve a maximum of 100 items from a virtual portal that is configured to use a different host name as the access point**

    ```
    http://virtual\_portal\_host\_name:port\_number/wps/seedlist/myserver?SeedlistId=library/site\_area&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
    ```


**Important:** You can access the REST API for the Web Content Manager search seedlist 1.0 with a secured connection \(HTTPS\) or with an unsecured connection \(HTTP\). Depending on the method, ensure that you use the correct port. However, if you access this REST API with an unsecured connection, you are automatically redirected to a secured connection.

|Parameter|Default Value|Description|
|---------|-------------|-----------|
|SeedlistID|No default; must be specified.|Identifies the seedlist. This parameter can be specified in the following ways:-   An empty value causes all libraries to be used.
-   A specific library \(for example, `library1`\)
-   A specific site area \(for example, `site\_area1`\)
-   A list of libraries, which are separated by commas. For example,

    ```
library1,library2,library3
    ```

-   The JCRID of a site area

|
|Start|0|Defines the start number for currently returned section.|
|Range|100|Defines the number of returned entries for current section.|
|Date|No default. If not specified, all applicable results are returned.|Indicates that entries \(documents\) that were updated after this date are retrieved. The date format \(compliant to standard ISO 8601\) is the following : dateTtimezone, where date is yyyy-MM-dd, time is HH:mm:ss, and zone is ±hhmm. This format includes time zone information, which is critical if the client and server are in different time zones. **Important:** Proper HTML URL encoding must be performed \(for example, represent the plus symbol `+` as `%2B`\).

|
|Action|GetDocuments|Defines requested action to execute.-   GetDocuments retrieve all underlying documents.
-   GetNumberOfDocuments returns the number of all underlying documents, typically for debug purposes. This value must be the same as the number of all documents that are returned from an appropriate GetDocuments request.

|
|Format|ATOM|Defines the output format : ATOM / HTML/ XML.|
|Timestamp|No default.|Indicates the content provider timestamp from a previous crawling session. The timestamp represents for the content provider some snapshot of the content and allows the crawler to get only the content changes on the next crawling. This parameter is used for incremental crawling.|

**Parent topic:**[The search seedlist 1.0 format ](../wcm/wcm_dev_search_searchseed.md)

