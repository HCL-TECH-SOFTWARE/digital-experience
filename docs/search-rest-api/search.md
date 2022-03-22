# Search REST API specification

The following topics describe-s- the API calls to search HCL Digital Experience. You can search HCL Digital Experience web pages and content to find content that contains a specific text string in its title or content, or is tagged with a specific tag.

Beginning with [HCL DX 9.5 Container Update and CF 200](../overview/new_cf_95.md), a new API explorer is available that allows developers using the Digital Experience Search REST APIs to explore and test these APIs. See the topic [Digital Experience Search REST API Explorer](search.md) below for details.

## Context Paths

There are a number of different context paths available for this API to allow for different authentication mechanisms:

|Context Path|Authentication|
|------------|--------------|
|/PORTAL\_CONTEXT/contenthandler/searchfeed/search|None|
|/PORTAL\_CONTEXT/mycontenthandler/searchfeed/search|Basic|

## Parameters

The order of the parameters in the requests does not matter. The parameter names are case-sensitive; they must be entered in the format documented. Any unknown or unsupported parameters that are submitted as part of a request is ignored.

The request must be a standard HTTP GET or POST command.

-   When the request is GET, the URL is formed by combining the search server's host name, port, and path; and a collection of name-value pairs \(input parameters\) separated by & characters. Any parameter value must be URL-escaped if in GET request.
-   When the request is POST, the URL is formed by combining the search server's host name, port, and path; and a collection of name-value pairs \(input parameters\) is passed on the request as parameters.

|Name|Description|Comments|
|----|-----------|--------|
|locale|-   Locale of request client
-   Any message that is returned is in the client locale
-   Available scopes and collections; titles and description are in the client locale
-   Sorting method might be effected by the locale
-   Any additional information in the search results that are locale aware, like description

|Specifies the language to use to parse the search request. See *ISO-639* and *ISO-3166* for valid values, for example. en\_US. This parameter is optional. When specified, the appropriate dictionary for the specified language is used. **Note:** The dictionary for the language that is specified must be enabled for this parameter to work.

|
|query| |-   Text to search; returns a list of results with the specified text in the title, description, or content.
-   Encode the strings.
-   By default, spaces are treated as an OR operator.

 The following operators are supported:

-   **AND or &&**

Searches for items that contain both words. For example: query=red%20AND%20test returns items that contain both the word red and test. AND is the default operator.

-   **NOT or !**

Excludes the word that follows the operator from the search. For example: query=test%20NOT%20red returns items that contain the word test, but not the word red.

-   **OR**

Searches for items that contain either of the words. For example: query=test%20OR%20red.

To search for a phrase, enclose the phrase in quotation marks \(" "\).

-   **+**

The plus sign indicates that the word must be present in the result. For example: query=+test%20red returns only items that contain the word test and many that also contain red, but none that contain only the word red.

-   **?**

Use a question mark to match individual characters. For example: query=te%3Ft returns items that contain the words test, text, tent, and others that begin with te.

-   **-:**

The dash prohibits the return of a word. This operator is similar to NOT. For example: query=test%20-red returns items that contain the word test, but not the wordred.


 **Note:** Wildcard searches are permitted, but wildcard only searches \(\*\) are not.

 For more information about supported operators, go to the *Search* topic.

|
|queryLang|Language of the query string|Specifies the language to use to parse the query parameter. See *ISO-639* and*ISO-3166* for valid values, for example, en\_US. This parameter is optional. When specified, the appropriate dictionary for the specified language is used. **Note:** The dictionary for the language that is specified must be enabled for this parameter to work.

|
|start|Offset to first result to return in results|Defines an offset from the first result in the set. This parameter is ignored if a page parameter is provided. The value starts from 0. The default is 0. If specified value is negative, the value is defaulted to 0; if the specified value is greater than the number of results, no results are returned.|
|page|Page number|Specifies the page to be returned. The default value is 1, which returns the first page.|
|pageSize|Number of results that are wanted for a single request|Specifies the number of entries to return per page. The minimum value is 0 \(negative values default to 0\). The default value is 10. The maximum value that you can specify is 150.|
|scope|Identifier of which scope to search; the list of valid scopes is available in the *Scopes API*.|Default is to search all scopes.|
|sortKey|The key, which controls the sorting order of the search results.|The following values are supported: date and relevance. A valid value for this parameter is one of these values, or the name of any other sortable field.|
|sortOrder|Determines the order by which the results are sorted: ascending or descending.|The only valid values are asc or desc.|
|constraint|Allows constraining the search results according to the provided criteria.|The provided criteria. For more information, see *Constraints API*.|
|facet|Specifies which facets are returned for the query, in addition to search results.|Addition to search results. For more information, see *Facets API*.|
|index|Specifies which index \(collection\) to use for the search|For more information, see *Indexes API*.|

## Examples

/searchfeed/search?queryLang=en&locale=en&resultLang=en&query=development&scope=1345374377545&start=0&results=10 Search query with query text = development.

## Response Format

The response is Atom-compliant. The following table describes the significance of the elements that are returned in the response:

|Section|Remarks|
|-------|-------|
|/feed|The container element for metadata and data that is associated with the search results feed.|
|/feed/title|Descriptive title of the feed.|
|/feed/link\[@href\]|Reference from the feed to a web resource. For more information, see *Feed Paging and Archiving*.|
|/feed/link\[@rel= "next"\|"previous"\|"first"\|"last"\]|first, last, next, and previous links are included, for supporting.|
|/feed/author/name|Description of the feed generator.|
|/feed/id|Permanent, universally unique identifier for the feed.|
|/feed/updated|Date and time the query was issued. The value conforms to the date-time production in RFC3339.|
|/feed/openSearch:totalResults|Total number of results for submitted query.|
|/feed/openSearch:Query|Contains information about the query that was submitted by the user.|
|/feed/openSearch:Query\[@role\]|The role attribute value is request.|
|/feed/openSearch:Query\[@searchTerms\]|Represents the user submitted query terms.|
|/feed/openSearch:startIndex|Initial result number for the search results returned in this feed.|
|/feed/openSearch:itemsPerPage|Number of search results that are returned in this feed.|
|/feed/entry|Encompasses the information for a single search result.|
|/feed/entry/category|Conveys information about a category \(often corresponding to a facet\) associated with an entry.|
|/feed/entry/category@term|A string that identifies the category to which the entry belongs.|
|/feed/entry/category@scheme|An IRI that identifies a categorization scheme.|
|/feed/entry/title|Text construct that conveys a human-readable title for an entry.|
|/feed/entry/title\[@type\]|Indicates whether the text construct is text, html, or xhtml. Text construct is text if not otherwise specified.|
|/feed/entry/link|Defines a reference to the search result resource.|
|/feed/entry/link\[@rel\]|Indicates the link relation type. If not present, the link relation type is `alternate`.|
|/feed/entry/link\[@href\]|URI link to document.|
|/feed/entry/link\[@type\]|Content type of the URI document link is an advisory media type.|
|/feed/entry/relevance:score|Indicates a relative assessment of relevance for a particular search result with regards to the search query.|
|/feed/entry/updated|Last modified date for the document. The value conforms to the date-time production in RFC3339.|
|/feed/entry/id|Unique identifier of the document.|
|/feed/entry/summary|Text construct that conveys a short summary, abstract, or excerpt of an entry.|
|/feed/entry/summary\[@type\]|Indicates whether the text construct is text, html, or xhtml. Text construct is text if not otherwise specified.|
|/feed/entry/author|A person construct that indicates the author of the entry or feed.|
|/feed/entry/author/name|Human-readable name for the person.|
|/feed/entry/author/uri|Identifier that is associated with the person.|
|/feed/entry/author/email|The person email address. Depending on the HCL Connections configuration settings, this value might not be returned as part of the feed.|
|/feed/entry/wplc:field|This element is used to represent the name and value of a field of a document. The id attribute represents the name of the field. The body of the element represents the value of the field. More fields are included in the search result response if specified through the includeField parameter.|
|/feed/ibmsc:facets|For more information, see *Facets*.|

-   The namespace in the table is http://www.w3.org/2005/Atom unless otherwise specified.
-   The openSearch identifier is used to refer to the namespace http://a9.com/-/spec/opensearch/1.1.
-   The relevance identifier is used to refer to the namespace http://a9.com/-/opensearch/extensions/relevance/1.0/.
-   The ibmsc identifier is used to refer to the namespace http://www.ibm.com/search/content/2010.
-   The spelling identifier is used to refer to the namespace http://a9.com/-/opensearch/extensions/spelling/1.0/.

## Example

To search for all content across HCL Digital Experience that contains the text Development, send the following HTTP request:

```
 > GET /searchfeed/search?query=development&scope=com.ibm.lotus.search.ALL_SOURCES HTTP/1.1
```

The following content is returned by the server:

```

    <?xml version="1.0" encoding="UTF-8"?>
       <atom:feed xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/"
           xmlns:xhtml="http://www.w3.org/1999/xhtml"
           xmlns:wplc="http://www.ibm.com/wplc/atom/1.0"
           xmlns:atom="http://www.w3.org/2005/Atom">
           <atom:title>Search results for query "development" on scope "com.ibm.lotus.search.ALL_SOURCES"</atom:title>
           <atom:link href="searchfeed:search" rel="self" type="application/atom+xml"/>
           <atom:author>
               <atom:name>Enterprise Search API Web Service.</atom:name>
           </atom:author>
           <atom:id>searchfeed:search</atom:id>
           <atom:category term="com.ibm.lotus.search.ALL_SOURCES" label="com.ibm.lotus.search.ALL_SOURCES"/>
           <atom:updated>2013-01-14T08:35:27.482Z</atom:updated>
           <opensearch:totalResults exact="true">412</opensearch:totalResults>
           <opensearch:Query role="request" searchTerms="development"/>
           <opensearch:startIndex>0</opensearch:startIndex>
           <opensearch:itemsPerPage>10</opensearch:itemsPerPage>

           <atom:entry>
              <atom:id>ResourceinjectionusingRationalApplicationDeveloperv7.5</atom:id>
              <atom:title type="text/html">Resource injection using Rational Application Developer v7.5</atom:title>
              <atom:author>
                 <atom:uri>Dan_Haim</atom:uri>
                 <atom:name>Dan Haim</atom:name>
              </atom:author>
              <atom:author>
                 <atom:uri>James_Chung</atom:uri>
                 <atom:name>James Chung</atom:name>
              </atom:author>
              <atom:link href="http://www.ibm.com/developerworks/rational/library/10/resourceinjectionwithrad7-5/index.html"/>
              <atom:category term="ContentSourceType/default" scheme="com.ibm.wplc.taxonomy://feature_taxonomy" label="Document"/>
              <opensearch:relevance>100.0</opensearch:relevance>
              <atom:updated>2010-06-07T06:49:09.000Z</atom:updated>
              <atom:summary type="html"><![CDATA[<Strong>Summary:</Strong> Java&#8482; platf....]]></atom:summary>
              <atom:link href="/wps/images/icons/Document.gif" rel="icon"/>
              <wplc:field id="name">95c189804d4268bf8d49ede9170f1e3d</wplc:field>
	        <wplc:field id="contentSourceType">Seedlist</wplc:field>
	       <wplc:field id="defaultcontext">/poc</wplc:field>
              <wplc:field id="effectivedate">1236246335000</wplc:field>
	         <wplc:field id="modifier">Replicator</wplc:field>
	         <wplc:field id="securecontext">/mypoc</wplc:field>
	         <wplc:field id="search_controllable_uuid">2c1e7b59-b465-49da-bc99-5aee3c00932b</wplc:field>
	         <wplc:field id="locale">en</wplc:field>
	         <wplc:field id="RatingAverage">4</wplc:field>
	         <wplc:field id="author_info">Dan_Haim<![CDATA[<Dan Haim<]]></wplc:field>
	         <wplc:field id="author_info">James_Chung<![CDATA[<James Chung<]]></wplc:field>
	         <wplc:field id="acls">public</wplc:field>
	         <wplc:field id="authoringtemplate">Blog Home</wplc:field>
	         <wplc:field id="popularity">7811</wplc:field>
	         <wplc:field id="security_ids">Z6QReDeIPO2JIT62BDIJM8CKHDAJMG6P1P2MM8C3BEIJMK61BPAMPCCG1CIJP8623</wplc:field>
	         <wplc:field id="difficulty">Advanced</wplc:field>
	         <wplc:field id="contentPath">/Blog Solo Template v70/Blog/Home/95c189804d4268bf8d49ede9170f1e3d</wplc:field>
	         <wplc:field id="category">Rational</wplc:field>
	     </atom:entry>
	      ...
	</atom:feed>
```

