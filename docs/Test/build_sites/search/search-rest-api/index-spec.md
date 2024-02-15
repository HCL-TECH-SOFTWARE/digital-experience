# Search indexes REST API specification

The Indexes API returns the set of supported values that can be passed to the index parameter of the HCL Digital Experience Search API.

## Request Format

|Context Path|Authentication|
|------------|--------------|
|/PORTAL\_CONTEXT/contenthandler/searchfeed/indexes|Indexes API|

!!! attention "Use the Context Path below for Virtual Portal" 
  	 /PORTAL\_CONTEXT/contenthandler/!ut/p/searchfeed/scopes  

## Response Format

Response is Atom formatted list of possible values that can be passed to the Search API by using the index parameter of the Search API.

## Response Example

```

<atom:feed xmlns:xhtml="http://www.w3.org/1999/xhtml"
	           xmlns:atom="http://www.w3.org/2005/Atom">
	   <atom:title>Available Indexes</atom:title>
	   <atom:author>
	      <atom:name>Enterprise Search API Web Service.</atom:name>
	   </atom:author>
	   <atom:id>[searchfeed:indexes]</atom:id>
	   <atom:updated>2013-01-15T13:03:02.295Z</atom:updated>
	   <atom:entry>
	      <atom:title>Default Search Collection</atom:title>
	      <atom:id>D...8a</atom:id>
	   </atom:entry>
	   <atom:entry>
	      <atom:title>ImportTest</atom:title>
	      <atom:id>D...st</atom:id>
	   </atom:entry>
	   ...
	</atom:feed>
```

