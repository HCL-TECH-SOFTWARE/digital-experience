# How to use REST with libraries

You can use the Web Content Manager REST service to create, read, update, query locale information, and delete libraries.

## Create a new library

A library can be created by sending a POST request to the following URI:

```
/Library
```

For example:

```
HTTP/1.1 POST /wps/mycontenthandler/wcmrest/Library
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>My Library</wcm:name>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:library xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <allowDeletion>false</allowDeletion>
            <enabled>true</enabled>
            <language>en</language>
            <includeDefaultItems>true</includeDefaultItems>
        </wcm:library>
    </content>
</entry>

HTTP 201 Created
```

## Update an existing library

An existing library can be updated by sending a PUT request to the following URI:

```
/Library/library-id
```

For example:

```
HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c
Content-Type: application/atom+xml
Accept: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:ff207ba6-ac9a-4b38-b831-99528ff5067c</id>
    <title>My New Library Title</title>
    <summary/>
    <wcm:name>my library</wcm:name>
    <wcm:type>Library</wcm:type>
    <updated>2014-10-09T03:18:02.303Z</updated>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" xml:lang="en" label="Delete"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDe6JP43OS62BOCJM4C3BE2MMG62RCGJM8COPC2JM47P9D43SOC6BD03RS633" xml:lang="en" label="Access Control"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="preset-folders" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c/preset-folders"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:library xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <allowDeletion>true</allowDeletion>
            <enabled>true</enabled>
            <language>en</language>
        </wcm:library>
    </content>
</entry>

HTTP 200 OK

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:ff207ba6-ac9a-4b38-b831-99528ff5067c</id>
    <title>My New Library Title</title>
    <summary/>
    <wcm:name>my library</wcm:name>
    <wcm:type>Library</wcm:type>
    <updated>2014-10-09T03:18:02.303Z</updated>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" xml:lang="en" label="Delete"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDe6JP43OS62BOCJM4C3BE2MMG62RCGJM8COPC2JM47P9D43SOC6BD03RS633" xml:lang="en" label="Access Control"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="preset-folders" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c/preset-folders"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:library xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <allowDeletion>true</allowDeletion>
            <enabled>true</enabled>
            <language>en</language>
        </wcm:library>
    </content>
</entry>
```

## Read an existing library

An existing library can be read by sending a GET request to the following URI:

```
/Library/library-id
```

For example:

```
HTTP/1.1 GET /wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c
Accept: application/atom+xml

HTTP 200 OK

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:ff207ba6-ac9a-4b38-b831-99528ff5067c</id>
    <title>My Library</title>
    <summary/>
    <wcm:name>my library</wcm:name>
    <wcm:type>Library</wcm:type>
    <updated>2014-10-09T03:18:02.303Z</updated>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" xml:lang="en" label="Delete"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDe6JP43OS62BOCJM4C3BE2MMG62RCGJM8COPC2JM47P9D43SOC6BD03RS633" xml:lang="en" label="Access Control"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="preset-folders" href="/wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c/preset-folders"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:library xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <allowDeletion>false</allowDeletion>
            <enabled>true</enabled>
            <language>en</language>
        </wcm:library>
    </content>
</entry>
```

**With HCL DX CF19 and higher releases, locale information can be obtained from Web Content Manager libraries**.

When the WCM REST API is used to search for WCM libraries, the language of the libraries is provided in the `displayTitle` and summary elements, as shown in the following example:

```
...
<entry>
    <id>wcmrest:94e69f30-15d7-464a-ab1b-76598eb0758b</id>
    <title>Web Resource v70</title>
    <wcm:displayTitle xml:lang="en">Web Resources v70</wcm:displayTitle>
    <summary/>
    <wcm:description xml:lang="en"></wcm:description>
    <wcm:type>Library</wcm:type>
    <updated>2020-09-23T11:07:01.1835Z</updated>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!
jLKSL8JD0hftsmhoz53-EA/wcmrest/Library/94e69fe0-15d7-464a-
ab1b-76598eb0758b" xml:lang="en" label="Edit"/>
    <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!
jLKSL8JD0hftsmhoz53-EA/wcmrest/Library/94e69fe0-15d7-464a-
ab1b-76598eb0758b" xml:lang="en" label="Read"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!
jLKSL8JD0hftsmhoz53-EA/wcmrest/Library/94e69fe0-15d7-464a-
ab1b-76598eb0758b" xml:lang="en" label="Library"/>
</entry>
...
```

To read the locale of the Web Content Manager library, the read request can be set by using the `Accept-Language` header. If a version for that specific locale is not set, the default title/summary will be returned.

## Delete a library

An existing library can be deleted by sending a DELETE request to the following URI:

```
/Library/library-id
```

For example:

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c

HTTP 200 OK
```

## Asynchronous Delete

An existing library can also be deleted asynchronously by using the following URI. The response contains a `Content-Location` header, containing a URI that can be used to monitor the progress of the delete operation:

```
/Library/library-id?synchronous=true
```

For example:

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/Library/ff207ba6-ac9a-4b38-b831-99528ff5067c?synchronous=true

HTTP 202 Accepted
Content-Location: /wps/mycontenthandler/wcmrest/Library/fd18e3a0-b96b-4a66-9bcc-f3d142c7837e/wcmTask:com.ibm.workplace.wcm.services.task.DeleteTask:ced02fae-abc7-4ff4-af4d-c08804b32811/delete-status
```

**Parent topic:**[How to manage web content items by using REST](../wcm/wcm_rest_crud.md)

