# Search scopes REST API specification 

The Scopes API returns the set of supported values that can be passed to the scope parameter of the HCL Digital Experience Search API.

## Request Format

|Context Path|Authentication|
|------------|--------------|
|/PORTAL\_CONTEXT/contenthandler/searchfeed/scopes|Scopes API|

## Response Format

Response is Atom formatted list of possible values that can be passed to the Search API by using the scope parameter of the Search API.

## Response Example

```

<atom:feed xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/"
	           xmlns:xhtml="http://www.w3.org/1999/xhtml"
	           xmlns:atom="http://www.w3.org/2005/Atom">
	   <atom:title>Available Scopes</atom:title>
	   <atom:link href="searchfeed:scopes" rel="self" type="application/atom+xml"/>
	   <atom:author>
	      <atom:name>Enterprise Search API Web Service.</atom:name>
	   </atom:author>
	   <atom:id>[searchfeed:scopes]</atom:id>
	   <atom:updated>2013-01-14T14:01:01.837Z</atom:updated>
	   <atom:entry>
	       <atom:title>All Sources</atom:title>
	       <atom:summary>All Sources accessible by the user</atom:summary>
	       <atom:id>com.ibm.lotus.search.ALL_SOURCES</atom:id>
	       <opensearch:image>/wps/images/icons/scope_search_all.gif</opensearch:image>
	   </atom:entry>
	   <atom:entry>
	      <atom:title>Managed Web Content</atom:title>
	      <atom:summary>Search in WCM</atom:summary>
	      <atom:id>com.ibm.lotus.search.MANAGEDWEB</atom:id>
	      <opensearch:image>/wps/images/icons/scope_search_wcm.gif</opensearch:image>
	   </atom:entry><atom:entry>
	   ...
   
	</atom:feed>
```

**Parent topic:**[Search REST API specification ](../search-rest-api/search.md)

