# How to use REST with elements with version 8.5 CF03 or higher

You can use the Web Content Manager REST service to create, read, update, and delete elements.

You can use the Web Content Manager REST service to create, read, update, and delete all element types that belong to one of the following element container types:

-   Content
-   Site area
-   The default content of a content template
-   The default site area of a site area template

There are two ways to run these operations. The first is to address each element individually, and by using a URI and use the HTTP verbs \(GET, PUT, POST, DELETE\) to manipulate them. You can also update multiple elements with a PUT request.

## Create

An element can be created by sending a POST request to one of the following URIs with an Atom entry that represent the title of the element:

-   **Content item**

    ```
    /Content/content-id/elements
    ```

-   **Site area**

    ```
    /SiteArea/site-area-id/elements
    ```

-   **The default content of a content template**

    ```
    /ContentTemplate/template-id/Prototype/elements
    ```

-   **The default content of a site area template**

    ```
    /SiteAreaTemplate/template-id/Prototype/elements
    ```


!!! note
    The type of the element to be created must be specified in the type field of the entry that is posted.

For example:

```
HTTP/1.1 POST /wps/mycontenthandler/wcmrest/ContentTemplate/12015598-24c4-40f6-9be0-68c52663c03f/Prototype/elements/

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title>MyDateElement</title>
    <wcm:name>MyDateElement</wcm:name>
    <wcm:type>DateComponent</wcm:type>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:date type="DateTime">2014-08-05T06:01:07.152Z</wcm:date>
    </content>
</entry>

HTTP/1.1 201 Created
Content-Type: application/atom+xml
Content-Location: /wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title>MyDateElement</title>
    <wcm:name>MyDateElement</wcm:name>
    <wcm:type>TextComponent</wcm:type>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" xml:lang="en" label="Read"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" type="text/plain" xml:lang="en" label="Edit Media"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" xml:lang="en" label="Edit"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:date type="DateTime">2014-08-05T06:01:07.152Z</wcm:date>
    </content>
</entry>
```

## Update

An element can be updated by sending a PUT request to one of the following URIs:

-   **Content item**

    ```
    /Content/content-id/elements/element-name
    ```

-   **Site area**

    ```
    /SiteArea/site-area-id/elements/element-name
    ```

-   **The default content of a content template**

    ```
    /ContentTemplate/template-id/Prototype/elements/element-name
    ```

-   **The default content of a site area template**

    ```
    /SiteAreaTemplate/template-id/Prototype/elements/element-name
    ```


For example:

```
HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title xml:lang="en">MyDateElement</title>
    <wcm:name>MyDateElement with a new name</wcm:name>
    <wcm:type>DateComponent</wcm:type>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" xml:lang="en" label="Read"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" xml:lang="en" label="Edit"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:date type="DateTime">2013-08-05T06:01:07.152Z</wcm:date>
    </content>
</entry>

HTTP/1.1 200 OK
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title xml:lang="en">MyDateElement</title>
    <wcm:name>MyDateElement with a new name</wcm:name>
    <wcm:type>DateComponent</wcm:type>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" xml:lang="en" label="Read"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" xml:lang="en" label="Edit"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:date type="DateTime">2013-08-05T06:01:07.152Z</wcm:date>
    </content>
</entry>
```

## Read

An element can be read by sending a GET request to one of the following URIs:

-   **Content item**

    ```
    /Content/content-id/elements/element-name
    ```

-   **Site area**

    ```
    /SiteArea/site-area-id/elements/element-name
    ```

-   **The default content of a content template**

    ```
    /ContentTemplate/template-id/Prototype/elements/element-name
    ```

-   **The default content of a site area template**

    ```
    /SiteAreaTemplate/template-id/Prototype/elements/element-name
    ```


For example:

```
HTTP/1.1 GET /wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement
Accept: application/atom+xml

HTTP/1.1 200 OK
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title xml:lang="en">MyDateElement</title>
    <wcm:name>MyDateElement</wcm:name>
    <wcm:type>DateComponent</wcm:type>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" xml:lang="en" label="Read"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement" xml:lang="en" label="Edit"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:date type="DateTime">2014-08-05T06:01:07.152Z</wcm:date>
    </content>
</entry>
```

## Delete

An element can be deleted by sending a DELETE request to one of the following URIs:

-   **Content item**

    ```
    /Content/content-id/elements/element-name
    ```

-   **Site area**

    ```
    /SiteArea/site-area-id/elements/element-name
    ```

-   **The default content of a content template**

    ```
    /ContentTemplate/template-id/Prototype/elements/element-name
    ```

-   **The default content of a site area template**

    ```
    /SiteAreaTemplate/template-id/Prototype/elements/element-name
    ```


For example:

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/ContentTemplate/3f6311ae-d277-42d0-869c-eeb7a28ba754/Prototype/elements/MyDateElement

HTTP/1.1 200 OK
```

## Read feed with multiple elements

Element feeds can be obtained by issuing a GET request to the following URIs:

-   **Content item**

    ```
    /Content/content-id/elements/element-name
    ```

-   **Site area**

    ```
    /SiteArea/site-area-id/elements/element-name
    ```

-   **The default content of a content template**

    ```
    /ContentTemplate/template-id/Prototype/elements/element-name
    ```

-   **The default content of a site area template**

    ```
    /SiteAreaTemplate/template-id/Prototype/elements/element-name
    ```


For example:

```
HTTP/1.1 GET /wps/mycontenthandler/wcmrest/Content/4f9dfaa1-a823-4964-9583-8bbd69504595/elements
Accept: application/atom+xml

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title xml:lang="en">Elements Feed</title>
    <updated>2014-08-08T04:50:01.839Z</updated>
    <link rel="parent" href="/wps/mycontenthandler/wcmrest/Content/4f9dfaa1-a823-4964-9583-8bbd69504595" xml:lang="en" label="Parent"/>
    <entry>
        <title xml:lang="en">MyRichTextElement</title>
        <wcm:name>MyRichTextElement</wcm:name>
        <wcm:type>RichTextComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/wcmrest/Content/4f9dfaa1-a823-4964-9583-8bbd69504595/elements/MyRichTextElement" xml:lang="en" label="Read"/>
        <content type="text/html"><![CDATA[<p dir="ltr">This is some rich text</p>
]]&gt;</content>
    </entry>
    <entry>
        <title xml:lang="en">MyDateComponent</title>
        <wcm:name>MyDateComponent</wcm:name>
        <wcm:type>DateComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/wcmrest/Content/4f9dfaa1-a823-4964-9583-8bbd69504595/elements/MyDateComponent" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <wcm:date type="DateTime">2014-08-06T15:00:00.000Z</wcm:date>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">MyTextComponent</title>
        <wcm:name>MyTextComponent</wcm:name>
        <wcm:type>TextComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/wcmrest/Content/4f9dfaa1-a823-4964-9583-8bbd69504595/elements/MyTextComponent" xml:lang="en" label="Read"/>
        <content type="text/plain">This is some text</content>
    </entry>
</feed>
```

## Read inline with multiple elements

Element within an entry can be obtained by issuing a GET request to the following URIs:

-   **Content item**

    ```
    /Content/content-id/
    ```

-   **Site area**

    ```
    /SiteArea/site-area-id/
    ```

-   **The default content of a content template**

    ```
    /ContentTemplate/template-id/Prototype/
    ```

-   **The default content of a site area template**

    ```
    /SiteAreaTemplate/template-id/Prototype/
    ```


For example:

```
HTTP/1.1 GET /wps/mycontenthandler/wcmrest/Content/4f9dfaa1-a823-4964-9583-8bbd69504595
Accept: application/atom+xml

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:4f9dfaa1-a823-4964-9583-8bbd69504595</id>
    <title xml:lang="en">MyContentItem</title>
    <summary xml:lang="en"></summary>
    <wcm:name>MyContentItem</wcm:name>
    <wcm:type>Content</wcm:type>
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom">
                <element name="MyRichTextElement">
                    <title xml:lang="en">MyRichTextElement</title>
                    <type>RichTextComponent</type>
                    <data type="text/html"><![CDATA[<p dir="ltr">This is some rich text</p>]]&gt;</data>
                </element>
                <element name="MyDateComponent">
                    <title xml:lang="en">MyDateComponent</title>
                    <type>DateComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <date type="DateTime">2014-08-06T15:00:00.000Z</date>
                    </data>
                </element>
                <element name="MyTextComponent">
                    <title xml:lang="en">MyTextComponent</title>
                    <type>TextComponent</type>
                    <data type="text/plain">This is some text</data>
                </element>
            </elements>
        </wcm:content>
    </content>
</entry>
```

## Update multiple elements

An item that contains elements can have elements added, removed, or updated by issuing a PUT request, specifying the elements that should be present on the item. Any elements that don't exist on the item are added. Any elements that are not specified in the request will be removed. Any existing elements will be updated.

The elements of an item can be modified by issuing a PUT request to the following URIs:

-   **Content item**

    ```
    /Content/content-id/
    ```

-   **Site area**

    ```
    /SiteArea/site-area-id/
    ```

-   **The default content of a content template**

    ```
    /ContentTemplate/template-id/Prototype/
    ```

-   **The default content of a site area template**

    ```
    /SiteAreaTemplate/template-id/Prototype/
    ```


For example:

```
HTTP/1.1 GET /wps/mycontenthandler/wcmrest/Content/4f9dfaa1-a823-4964-9583-8bbd69504595
Accept: application/atom+xml

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:4f9dfaa1-a823-4964-9583-8bbd69504595</id>
    <title xml:lang="en">MyContentItem</title>
    <summary xml:lang="en"></summary>
    <wcm:name>MyContentItem</wcm:name>
    <wcm:type>Content</wcm:type>
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom">
                <element name="MyRichTextElement">
                    <title xml:lang="en">MyRichTextElement</title>
                    <type>RichTextComponent</type>
                    <data type="text/html"><![CDATA[<p dir="ltr">This is some rich text</p>]]&gt;</data>
                </element>
                <element name="MyDateComponent">
                    <title xml:lang="en">MyDateComponent</title>
                    <type>DateComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <date type="DateTime">2014-08-06T15:00:00.000Z</date>
                    </data>
                </element>
                <element name="MyTextComponent">
                    <title xml:lang="en">MyTextComponent</title>
                    <type>TextComponent</type>
                    <data type="text/plain">This is some text</data>
                </element>
            </elements>
        </wcm:content>
    </content>
</entry>
```

This response is used to perform the following modifications:

1.  Remove MyTextComponent.
2.  Modify MyRichTextElement.
3.  Add an element named MyNewTextElement.

```
HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/Content/4f9dfaa1-a823-4964-9583-8bbd69504595
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:4f9dfaa1-a823-4964-9583-8bbd69504595</id>
    <title xml:lang="en">MyContentItem</title>
    <summary xml:lang="en"></summary>
    <wcm:name>MyContentItem</wcm:name>
    <wcm:type>Content</wcm:type>
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom">
                <element name="MyRichTextElement">
                    <title xml:lang="en">MyRichTextElement</title>
                    <type>RichTextComponent</type>
                    <data type="text/html"><![CDATA[<p dir="ltr">This is some rich text that has been modified</p>]]&gt;</data>
                </element>
                <element name="MyDateComponent">
                    <title xml:lang="en">MyDateComponent</title>
                    <type>DateComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <date type="DateTime">2014-08-06T15:00:00.000Z</date>
                    </data>
                </element>
                <element name="MyNewTextElement">
                    <title xml:lang="en">MyNewTextElement</title>
                    <type>TextComponent</type>
                    <data type="text/plain">This is the newly created text element</data>
                </element>
            </elements>
        </wcm:content>
    </content>
</entry>


HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:4f9dfaa1-a823-4964-9583-8bbd69504595</id>
    <title xml:lang="en">MyContentItem</title>
    <summary xml:lang="en"></summary>
    <wcm:name>MyContentItem</wcm:name>
    <wcm:type>Content</wcm:type>
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom">
                <element name="MyRichTextElement">
                    <title xml:lang="en">MyRichTextElement</title>
                    <type>RichTextComponent</type>
                    <data type="text/html"><![CDATA[<p dir="ltr">This is some rich text that has been modified</p>]]&gt;</data>
                </element>
                <element name="MyDateComponent">
                    <title xml:lang="en">MyDateComponent</title>
                    <type>DateComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <date type="DateTime">2014-08-06T15:00:00.000Z</date>
                    </data>
                </element>
                <element name="MyNewTextElement">
                    <title xml:lang="en">MyNewTextElement</title>
                    <type>TextComponent</type>
                    <data type="text/plain">This is the newly created text element</data>
                </element>
            </elements>
        </wcm:content>
    </content>
</entry>
```


