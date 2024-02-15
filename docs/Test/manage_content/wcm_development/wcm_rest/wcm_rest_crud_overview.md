# How to use REST with Web Content Manager items

Different processes are used when items are created and updated by using REST.

## Item types

A complete list of supported item types are documented here: [REST Item Types](../wcm_rest/wcm_rest_referencematerial/wcm_rest_item_types.md).

## Content representations

-   **Atom entry documents**

    Each web content item has an associated Atom entry document. The entry document provides access to the common metadata properties of the item, such as title and description, along with links to related items, and access control information.

    The default media type of an entry document is `application/atom+xml`. However, `application/json` representations can also be obtained. Entry documents can be retrieved by running an `HTTP GET` to the entry resource. Entry resource URIs can be obtained from:

    -   The service document
    -   Links in other entry documents
    -   Links in feed documents
    -   Using POC to resolve an ID
    Example links to entry documents:

    ```
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6"/>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/wcmrest/item/ae6a3632-a1b5-456a-866e-e9baab84fe29"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/54a68ca2-c550-4385-966f-b0b612147547"/>
    ```

-   **Media resources**

    In addition to the entry document, most items also have a media resource that is associated with them. The media resource exists to store the content of the item, for example, HTML or an image. The media resource location is found in the edit-media link of an items entry document. Media resource URLs support HTTP GET and PUT.

    ```
    <link rel="edit-media" type="text/html" 
    href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948"/>
    ```


## Content Negotiation

When a resource supports multiple representations with different content types, clients can use content negotiation to request a specific representation. For example, entry documents are available in `application/atom+xml; type=entry` and application/json. There are two ways a client can specify the media type that the client can accept:

-   **HTTP Accept header**

    ```
    Accept: application/atom+xml
    ```

-   **Request parameter mime-type**

    `GET /wps/mycontenthandler/!ut/p/wcmrest/SiteArea/c6b00ee6-d628-4cbd-9e65-15c90f2093a6?mime-type=application%2Fjson HTTP/1.0`


!!! note
    The methods that are used to specify the accept type work for all supported media types as listed in [Supported media types](../wcm_rest/wcm_rest_referencematerial//wcm_rest_media_types.md).

## Item path

The path of a requested item can be included by specifying the `options=item-path` URL parameter. For example:

```

HTTP 1.1 GET /wps/mycontenthandler/wcmrest/SiteArea/c0b72020-10b7-4197-a436-62a1d94ce03f?options=item-path

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm">
    ...
    <wcm:path>
        <wcm:pathElement>
            <wcm:title xml:lang="en-GB">rest_query_library</wcm:title>
            <wcm:name>rest_query_library</wcm:name>
            <wcm:link label="Read" rel="alternate" xml:lang="en-GB" href="/wps/mycontenthandler/wcmrest/Library/69452890-2f40-4ce6-90af-e65620a552af"/>
        </wcm:pathElement>
        <wcm:pathElement>
            <wcm:title xml:lang="en-GB">site_b</wcm:title>
            <wcm:name>site_b</wcm:name>
            <wcm:link label="Read" rel="alternate" xml:lang="en-GB" href="/wps/mycontenthandler/wcmrest/SiteArea/c44dc8e1-eea5-4262-842c-562788a34461"/>
        </wcm:pathElement>
    </wcm:path>
…
</entry>
   
```

## Example entry

This code is an example in `application/atom+xml` format:

```
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>3aabfe14-cc9e-4eb5-ad06-d4fc8fd2f1df</id>
    <title>SampleHTMLComponent</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryHTMLComponent/3aabfe14-cc9e-4eb5-ad06-d4fc8fd2f1df"/>
    <link rel="edit-media" type="text/html" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryHTMLComponent/3aabfe14-cc9e-4eb5-ad06-d4fc8fd2f1df"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/3aabfe14-cc9e-4eb5-ad06-d4fc8fd2f1df/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/3aabfe14-cc9e-4eb5-ad06-d4fc8fd2f1df/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/3aabfe14-cc9e-4eb5-ad06-d4fc8fd2f1df/versions"/>
    <link rel="add-attachment" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryHTMLComponent/3aabfe14-cc9e-4eb5-ad06-d4fc8fd2f1df/attachments"/>
    <updated>2011-05-30T02:05:44.574Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!wtpqWRz_9ePiiVHk1Rw2cw/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!wtpqWRz_9ePiiVHk1Rw2cw/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:name>SampleHTMLComponent</wcm:name>
    <wcm:type>LibraryHTMLComponent</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
   </entry>
```

## Virtual portal usage in WCM REST API

When using the REST API on virtual portals, the correct format should be:

```
/wps/mycontenthandler/vpcontext/!ut/p/wcmrest/...
```

!!! note
    The API needs to contain /!ut/p/ after the VP context.

For example:
```
/wps/mycontenthandler/VP1/!ut/p/wcmrest/query?type=Library
Set the contentHandlerPath to be /wps/mycontenthandler/VP1 like this:
{ "connectionId": "myserver-vp1" , "host": "myserver.hcl.com" , "port": 10039 , "username" : "wpsadmin" , "password" : "wpsadmin" , "contentHandlerPath" : "/wps/mycontenthandler/VP1" , "secure" : false , "libraryName" : "" }
```


For more information, see [Sample URLs for WCM REST Service aka WCM REST API](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074521).
