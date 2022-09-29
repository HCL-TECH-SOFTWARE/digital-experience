# How to use REST with elements before version 8.5 CF03

You can use the Web Content Manager REST service to create, read, update, and delete some types of elements that are stored in site areas and content items. All element types are supported.

## Create

An element can be created by sending a POST request to the following URI with an Atom entry that represents the title of the element:

```
/[Content|SiteArea]/<parent-uuid>/elements
```

!!! note
    The type of the element to be created must be specified in the type field of the entry that is posted.

For example:

```
POST /wps/mycontenthandler/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements HTTP/1.0
Content-type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>Number Element Title</title>
    <wcm:name>numericElementName</wcm:name>
    <wcm:type>NumericComponent</wcm:type>
</entry>


HTTP/1.0 201 Created
Content-type: application/atom+xml; type=entry
Content-location: /wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/numericElementName

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>Number Element Title</title>
    <link rel="edit-media" type="text/plain" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/numericElementName"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/numericElementName"/>
    <wcm:name>numericElementName</wcm:name>
    <wcm:type>NumericComponent</wcm:type>
</entry>
```

## Update

An element can be updated by sending a PUT request to the following URI with an Atom entry that includes the name and title of the element.

```
/[Content|SiteArea]/<parent-uuid>/elements/<element-name-encoded>
```

For example:

```
PUT /wps/mycontenthandler/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/numericComponentName HTTP/1.0
Content-type: application/atom+xml

<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>numericElementTitleUpdated</title>
    <wcm:name>numericElementNameUpdated</wcm:name>
</atom:entry>


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>numericComponentTitleUpdated</title>
    <link rel="edit-media" type="text/plain" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/numericElementNameUpdated"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/numericElementNameUpdated"/>
    <wcm:name>numericElementNameUpdated</wcm:name>
    <wcm:type>NumericComponent</wcm:type>
</entry>
```

## Read

An element can be read by sending a GET request to the following URI:

```
/[Content|SiteArea]/<parent-uuid>/elements/<element-name-encoded>
```

For example:

```
GET /wps/mycontenthandler/wcmrest/Content/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/numericElementName HTTP/1.0


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>numericElementTitleUpdated</title>
    <link rel="edit-media" type="application/vnd.ibm.wcm+xml" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/numericElementName"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/numericElementName"/>
    <wcm:name>numericElementName</wcm:name>
    <wcm:type>NumericComponent</wcm:type>
</entry>
```

## Delete

An element can be deleted by sending a DELETE request to the following URI:

```
/[Content|SiteArea]/<parent-uuid>/elements/<element-name-encoded>
```

For example:

-   **DELETE**

    ```
    HTTP/1.1 DELETE
    http://host:port/wps/mycontenthandler/wcmrest/Content/<parent-uuid>/elements/<element-name-encoded>
    ```

-   **Response**

    ```
    Status Code :200
    Status Message : OK
    ```


## Specifying raw data

The content of an element is accessed from the media resource that is specified in the HREF attribute of the edit-media link. The link also contains a TYPE attribute that contains the accepted media type of the content. For example:

```
<link rel="edit-media" type="text/html" 
href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/heading"/>
```

A complete list of media types are documented here: [Supported media types](../wcm_rest_referencematerial/wcm_rest_media_types.md).

To update content of an element PUT content in an accepted media type to the edit-media URL. For example:

```
PUT /wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/heading HTTP/1.0
Content-type: text/html

<h1>Heading Text</h1>


HTTP/1.0 200 OK
```

To retrieve content from a library component GET content from the edit-media URL. For example:

```
GET  /wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/heading HTTP/1.0
Accept: text/html


HTTP/1.0 200 OK
Content-type: text/plain

<h1>Heading Text</h1>


```

An alternative to specifying the media type in the HTTP accept header, is to use the request parameter mime-type. You must URL encode the value. For example:

```
GET  /wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6/elements/heading?mime-type=text%2Fhtml HTTP/1.0


HTTP/1.0 200 OK
Content-type: text/plain

<h1>Heading Text</h1>


```


???+ info "Related information:"
    - [REST content formats for components and elements](../wcm_rest_content_formats.md)

