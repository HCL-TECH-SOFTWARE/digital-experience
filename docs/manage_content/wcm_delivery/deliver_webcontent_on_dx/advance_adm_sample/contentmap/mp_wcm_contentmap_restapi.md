# REST API and content associations

If you are creating or extending an application and want to manage content associations with that application, you can use portal remote APIs. These APIs retrieve a list of content associations and then create, update, or delete associations.

Based on the Representational State Transfer \(REST\) architecture, the APIs represent information about content associations as Atom feeds. To perform actions, you send HTTP requests to specific URLs.

## Retrieve all content associations

This request returns a feed containing all content associations available in the system.

-   **URL**

    `http://hostname:port/context\_root/mypoc?uri=contentmapping:objecttype:CONTENT_NODE&mode=download`

-   **HTTP method**

    GET

-   **Links**

    Link information is provided for each entry in the Atom feed, as identified by the rel attribute.

    |Link|Description|
    |----|-----------|
    |rel="self"|Link to this Atom entry.|
    |rel="edit"|Link to this item that can be used for POST, PUT, and DELETE operations.|
    |rel="related"|Link that can be used to view the web content page with which the content association is associated.|
    |rel="first"|Link to the first feed fragment. This link is only served if a feed fragment was served.|
    |rel="last"|Link to the last feed fragment. This link is only served if a feed fragment was served.|
    |rel="previous"|Link to the feed fragment preceding the current feed fragment. This link is only served if a feed fragment was served that does not start at the beginning of the feed.|
    |rel="next"|Link to the next feed fragment. This link is only served if a feed fragment was served that does not contain the last entry of the feed.|

-   **Supported URL parameters**

    |Parameter|Description|
    |---------|-----------|
    |start-index|Identifies the start index of the feed fragment to be served. The default value is `0`.|
    |max-results|Identifies the maximum number of entries to be served by this request, as determined by the configuration of the server.|


## Retrieve content associations for a specific web content page

This request returns a feed containing the content associations defined for a specific web content page.

-   **URL**

    The web content page is identified either by its object ID or by its unique name.

    `http://hostname:port/context\_root/mypoc?uri=contentmapping:oid:serialized\_object\_id`

    `http://hostname:port/context\_root/mypoc?uri=contentmapping:oid:unique\_name`

-   **HTTP method**

    GET

-   **Links**

    Link information is provided for each entry in the Atom feed, as identified by the `rel` attribute.

    |Link|Description|
    |----|-----------|
    |rel="self"|Link to this Atom entry.|
    |rel="edit"|Link to this item that can be used for POST, PUT, and DELETE operations.|
    |rel="related"|Link that can be used to view the web content page with which the content association is associated.|


## Modify content associations

This request updates the content associations defined for a specific web content page.

-   **URL**

    The web content page is identified either by its object ID or by its unique name.

    `http://hostname:port/context\_root/mypoc?uri=contentmapping:oid:serialized\_object\_id`

    `http://hostname:port/context\_root/mypoc?uri=contentmapping:oid:unique\_name`

-   **HTTP method**

    PUT

-   **Links**

    Link information is provided for each entry in the Atom feed, as identified by the `rel` attribute.

    |Link|Description|
    |----|-----------|
    |rel="self"|Link to this Atom entry.|
    |rel="edit"|Link to this item that can be used for POST, PUT, and DELETE operations.|
    |rel="related"|Link that can be used to view the web content page with which the content association is associated.|

-   **Supported URL parameters**

    |Parameters|Description|
    |----------|-----------|
    |update|The following values are supported for the update parameter:  <br/>  -   **merge** <br/> This mode merges the content associations in the request with the content associations on the server. The request updates existing content associations and adds new content associations, but the request does not delete other content associations already on the server. <br/> -   **replace** <br/> This mode replaces all current content associations on the server with the content associations specified in the request. The request updates existing content associations, adds new content associations, and deletes other content associations on the server that are not represented in the request. <br/> -   **delete** <br/> This mode deletes the content association specified in the request from the web content page.|


## Delete content associations

This request deletes either all content associations for a specific web content page or an individual content association to specific content item.

-   **URL**

    The web content page is identified either by its object ID or by its unique name.

    `http://hostname:port/context\_root/mypoc?uri=contentmapping:oid:serialized\_object\_id`

    `http://hostname:port/context\_root/mypoc?uri=contentmapping:oid:unique\_name`

-   **HTTP method**

    DELETE

-   **Supported URL parameters**

    |Parameters|Description|
    |----------|-----------|
    |content|Indicates the content associations to be deleted. If the content parameter is not specified, all content associations for the web content page are deleted.If the content ID for a content item is specified as the value of the content parameter, only one content association is deleted. The content association deleted is the one that maps the web content page to the specified content item. Any other content associations are unaffected.|


## Example Atom feed document

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" xmlns:app="http://www.w3.org/2007/app" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:contentmappings="http://www.ibm.com/xmlns/prod/content-mappings/v1.0" xmlns:atom="http://www.w3.org/2005/Atom" xml:base="http://www.example.com:10039/wps/mypoc/!ut/p/contentmapping/objecttype%3aCONTENT_NODE">
	<atom:title>Content Mappings Feed</atom:title>
	<atom:author>
		<atom:name>WebSphere Portal</atom:name>
	</atom:author>
	<atom:link href="/wps/mycontenthandler/!ut/p/contentmapping/objecttype%3aCONTENT_NODE?max-results=2" rel="self" type="application/atom+xml"/>
	<atom:id>contentmapping:objecttype%3aCONTENT_NODE</atom:id>
	<atom:updated>2009-08-25T12:10:51.641Z</atom:updated>
	<atom:entry>
		<atom:id>contentmapping:oid6_2QC68B1A0GVJE0IOA0R0Q02040</atom:id>
		<atom:title>6_2QC68B1A0GVJE0IOA0R0Q02040</atom:title>
		<atom:link href="/wps/mycontenthandler/!ut/p/contentmapping/oid6_2QC68B1A0GVJE0IOA0R0Q02040" rel="self" type="application/atom+xml"/>
		<atom:link href="/wps/mycontenthandler/!ut/p/contentmapping/oid6_2QC68B1A0GVJE0IOA0R0Q02040" rel="edit" type="application/atom+xml"/>
		<atom:link href="/wps/myportal/!ut/p/c4/04_SB8K8xLLM9MSSzPy8xBz9CP0os3ijQGczCydDRwP3MC9XA09_R4Mgg0ADIwMTA_2CbEdFAHZmm-M!/" type="text/html"/>
		<atom:updated>2009-08-25T12:10:51.805Z</atom:updated>
		<atom:content type="application/xml">
			<contentmappings:content-mapping-info id="6_2QC68B1A0GVJE0IOA0R0Q02040">
				<contentmappings:content-mapping content-id="f40429bb-0cb5-4c0f-8080-cfb66f0e9b91" default="true"/>
			</contentmappings:content-mapping-info>
		</atom:content>
	</atom:entry>
	<atom:entry>
		<atom:id>contentmapping:oid6_2QC68B1A00VBC0IOSHU0A220O6</atom:id>
		<atom:title>cnCTFPortlet</atom:title>
		<atom:link href="/wps/mycontenthandler/!ut/p/contentmapping/oid6_2QC68B1A00VBC0IOSHU0A220O6" rel="self" type="application/atom+xml"/>
		<atom:link href="/wps/mycontenthandler/!ut/p/contentmapping/oid6_2QC68B1A00VBC0IOSHU0A220O6" rel="edit" type="application/atom+xml"/>
		<atom:link href="/wps/myportal/!ut/p/c4/04_SB8K8xLLM9MSSzPy8xBz9CP0os3ijQGczCydDRwODMCdnA0__YI9QA0cjIwN_M_2CbEdFAB2I97c!/" type="text/html"/>
		<atom:updated>2009-08-25T12:10:51.810Z</atom:updated>
		<atom:content type="application/xml">
			<contentmappings:content-mapping-info id="6_2QC68B1A00VBC0IOSHU0A220O6">
				<contentmappings:content-mapping content-id="6f0b7a804d426a9a8d53ede9170f1e3d" default="true"/>
				<contentmappings:content-mapping content-id="291410004ce29075b879f90c4ec954a0" default="false"/>
			</contentmappings:content-mapping-info>
		</atom:content>
	</atom:entry>
	<atom:link href="/wps/mypoc/!ut/p/contentmapping/objecttype%3aCONTENT_NODE?mode=download&start-index=2&max-results=2" rel="next" type="application/atom+xml"/>
</atom:feed>
```


???+ info "Related information:"
    - [Web content associations](../../getting_started/wcm_delivery_contentmap_about.md)
    - [Creating a web content page with the XML configuration interface](../mp_wcm_createpagexml.md)
    - [Human readable URL mappings for virtual portals](../../../../../../../build_sites/virtual_portal/vp_planning/shape_vp_ux/advppln_shpux_urlmap.md)
    - [Managing community associations](../../../../../../../extend_dx/integration/connections/configuration/managing_community_pages/commpages_create_mapping.md)

