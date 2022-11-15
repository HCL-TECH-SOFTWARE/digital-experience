# Defined query Service

Defined queries are stored queries that can be run and updated as required.

The defined queries feature allows administrators to define a query in XML format through the REST service, and bind that query to a URI. This query is used to obtain the results by sending a GET request to the bound URI.

## Create

A defined query is created by sending a POST request to the following URI:

```
/DefinedQueryComponent/
```

For example:

```
HTTP/1.1 POST 
http://host:port/wps/mycontenthandler/wcmrest/DefinedQueryComponent
Content-Type: application/atom+xml
<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <atom:title>defined query title-1712115665</atom:title>
    <wcm:name>query-name</wcm:name>
    <wcm:description>defined query description</wcm:description>
</atom:entry>

201 Created
```

The URI that is bound to this query has the following format:

```
/definedquery/component-name
```

For example, the URI used to obtain the results of the previous query example is:

```
/definedquery/query-name
```

The response to a create operation contains a link relation "query-results" specifying this URI.

```
<atom:link atom:rel="query-results" 
atom:href="/wps/mycontenthandler/!ut/p/wcmrest/definedquery/query-name"/>
```

!!! note
    The only way to update this URI is by modifying the name of the component.

## Read

To retrieve a list of defined queries, you send a GET request to the following URI:

```
/DefinedQueryComponent/
```

For example:

```
HTTP/1.1 GET
http://host:port/wps/mycontenthandler/wcmrest/DefinedQueryComponent
Accept-Type: application/atom+xml

<atom:feed xmlns:atom="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <atom:title>Custom Queries</atom:title>
    <atom:updated>2011-07-04T01:19:27.126Z</atom:updated>
    <atom:entry>
        <atom:id>wcmrest:a5d4f72f-a7b7-4576-a7d3-5a4e15c66f01</atom:id>
        <wcm:name>query-one-name</wcm:name>
        <atom:title>Query 1</atom:title>
        <atom:updated>2011-07-04T01:19:27.159Z</atom:updated>
        <atom:link atom:rel="query-results" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/definedquery/query-one-name
        <atom:link atom:rel="edit-media" atom:type="application/vnd.ibm.wcm+xml" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/DefinedQueryComponent/a5d4f72f-a7b7-4576-a7d3-5a4e15c66f01"/>
        <atom:link atom:rel="edit" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/DefinedQueryComponent/a5d4f72f-a7b7-4576-a7d3-5a4e15c66f01"/>
    </atom:entry>
    <atom:entry>
        <atom:id>wcmrest:6276ff18-f370-45eb-89c3-053d335aba88</atom:id>
        <atom:title>defined query title-1280236937</atom:title>
        <wcm:name>query-two-name</wcm:name>
        <atom:updated>2011-07-04T01:19:27.167Z</atom:updated>
        <atom:link atom:rel="query-results" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/definedquery/query-two-name"/>
        <atom:link atom:rel="edit-media" atom:type="application/vnd.ibm.wcm+xml" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/DefinedQueryComponent/6276ff18-f370-45eb-89c3-053d335aba88"/>
        <atom:link atom:rel="edit" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/DefinedQueryComponent/6276ff18-f370-45eb-89c3-053d335aba88"/>
    </atom:entry>
</atom:feed>
```

To retrieve the XML of a specific defined query, you send a GET request to the following URI:

```
/DefinedQueryComponent/item-uuid
```

query-name

For example:

```
HTTP/1.1 GET
http://host:port/wps/mycontenthandler/wcmrest/DefinedQueryComponent/6276ff18-f370-45eb-89c3-053d335aba88
Accept-Type: application/atom+xml

200 OK

<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <atom:id>wcmrest:6276ff18-f370-45eb-89c3-053d335aba88</atom:id>
    <wcm:type>DefinedQueryComponent</wcm:type>
    <atom:title>defined query title-1460391124</atom:title>
    <wcm:name>query-name</wcm:name>
    <atom:updated>2011-07-04T01:34:01.051Z</atom:updated>
    <wcm:description>defined query description</wcm:description>
    <atom:link atom:rel="edit" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/DefinedQueryComponent/6276ff18-f370-45eb-89c3-053d335aba88"/>
    <atom:link atom:rel="edit-media" atom:type="application/vnd.ibm.wcm+xml" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/DefinedQueryComponent/6276ff18-f370-45eb-89c3-053d335aba88"/>
    <atom:link atom:rel="query-results" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/definedquery/query-name"/>
</atom:entry>
```

To retrieve the raw data of a specific defined query, send a GET request to the edit-media link relation:

```
/DefinedQueryComponent/item-id
```

For example:

```
HTTP/1.1 GET
http://host:port/wps/mycontenthandler/wcmrest/DefinedQueryComponent/items-id
Accept-Type: application/vnd.ibm.wcm+xml

200 OK

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<definedQuery restrictParameters="true" page="1" pageSize="10" depth="DESCENDANTS">
    <select>
        <typeEquals>
            <type>com.ibm.workplace.wcm.api.Content</type>
        </typeEquals>
        <nameLike>
            <name>article%</name>
        </nameLike>
        <titleLike>
            <title>product%</title>
        </titleLike>
    </select>
    <allowParameters>
        <parameter>lastmodifiedbefore</parameter>
        <parameter>workflowid</parameter>
        <parameter>createdbefore</parameter>
        <parameter>authoringtemplateid</parameter>
    </allowParameters>
</definedQuery>
```

## Update

To update the metadata of a query, use a PUT request that contains the new specification to the following URI:

```
/DefinedQueryComponent/item-uuid
```

For example:

```
HTTP/1.1 PUT
http://host:port/wps/mycontenthandler/wcmrest/DefinedQueryComponent/6276ff18-f370-45eb-89c3-053d335aba88
Content-Type: application/atom+xml
(… atom data … )

200 OK
```

To update the raw data of a query that specifies the parameters that are used to conduct the query, use a PUT request that contains the new specification to the following URI:

```
/DefinedQueryComponent/item-uuid
```

For example:

```
HTTP/1.1 PUT
http://host:port/wps/mycontenthandler/wcmrest/DefinedQueryComponent/6276ff18-f370-45eb-89c3-053d335aba88
Content-Type: application/vnd.ibm.wcm+xml
(… xml data … )

200 OK
```

## Delete

To delete a defined query, send a DELETE request to the following URI:

```
/DefinedQueryComponent/item-id
```

For example:

```
HTTP/1.1 DELETE
http://host:port/wps/mycontenthandler/wcmrest/definedquery/6276ff18-f370-45eb-89c3-053d335aba88

200 OK
```

## White List

The white list is a list of extra query parameters that can be used to refine the scope of the defined query. These parameters are the only parameters that have an effect when appended to the bound URI.

For example, if the white list includes a parameter of `name`, the following request returns the results of the defined query that have the name "hello world":

```
HTTP/1.1 GET
http://host:port/wps/mycontenthandler/wcmrest/query-name?name=hello+world

200 OK
```


