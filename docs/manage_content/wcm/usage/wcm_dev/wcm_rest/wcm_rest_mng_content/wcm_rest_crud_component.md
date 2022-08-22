# How to use REST with components

You can use the Web Content Manager REST service to create, read, update, and delete some types of components.

The following component types can be used with the Web Content Manager REST service.

|Component|API type|
|---------|--------|
|Authoring Tools Component|LibraryAuthoringToolsComponent|
|Date and time component|LibraryDateComponent|
|File resource component|LibraryFileComponent|
|HTML Component|LibraryHTMLComponent|
|Image component|LibraryImageComponent|
|JSP Component|LibraryJSPComponent|
|Link Component|LibraryLinkComponent|
|List Presentation Component|LibraryListPresentationComponent|
|Menu Component|LibraryMenuComponent|
|Navigator Component|LibraryNavigatorComponent|
|Number component|LibraryNumericComponent|
|Page Navigation Component|LibraryPageNavigationComponent|
|Personalization Component|LibraryPersonalizationComponent|
|Reference Component|LibraryReferenceComponent|
|Rich text component|LibraryRichTextComponent|
|Search Component|LibrarySearchComponent|
|Short text component|LibraryShortTextComponent|
|Stylesheet Component|LibraryStyleSheetComponent|
|Text component|LibraryTextComponent|
|User Selection Component|LibraryUserSelectionComponent|
|Username Component|LibraryUserNameComponent|

## Create

A component can be created by sending a POST request to the following URI with an Atom entry that represents the component:

```
/<library-component-api-type>
```

For example:

```
POST /wps/mycontenthandler/wcmrest/LibraryNumericComponent HTTP/1.0
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>SampleNumericComponentTitle</title>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <wcm:name>SampleNumericComponentName</wcm:name>
    <wcm:description>SampleNumericComponentDescription</wcm:description>
</entry>

HTTP/1.0 201 Created
Content-type: application/atom+xml; type=entry
Content-location: /wps/mycontenthandler/!ut/p/wcmrest/LibraryNumericComponent/0d678334-69ae-4d3a-a525-91bb551e5a18

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>0d678334-69ae-4d3a-a525-91bb551e5a18</id>
    <title>SampleNumericComponentTitle</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryNumericComponent/0d678334-69ae-4d3a-a525-91bb551e5a18"/>
    <link rel="edit-media" type="text/plain" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryNumericComponent/0d678334-69ae-4d3a-a525-91bb551e5a18"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/versions"/>
    <updated>2011-05-30T04:33:40.540Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:name>SampleNumericComponentName</wcm:name>
    <wcm:description>SampleNumericComponentDescription</wcm:description>
    <wcm:type>NUMERIC</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
</entry>
```

## Update

A component can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields of the item that need to be changed.

```
/<library-component-api-type>/<itemuuid>
```

For example:

```
PUT /wps/mycontenthandler/wcmrest/LibraryNumericComponent/c98d11e1-7f2a-480e-9aac-40eb1949cbda HTTP/1.0
Content-type : application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>SampleNumericComponentTitleUpdated</title>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <wcm:name>SampleNumericComponentNameUpdated</wcm:name>
    <wcm:description>SampleNumericComponentDescriptionUpdated</wcm:description>
</entry>


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>0d678334-69ae-4d3a-a525-91bb551e5a18</id>
    <title>SampleNumericComponentTitleUpdated</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryNumericComponent/0d678334-69ae-4d3a-a525-91bb551e5a18"/>
    <link rel="edit-media" type="text/plain" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryNumericComponent/0d678334-69ae-4d3a-a525-91bb551e5a18"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/versions"/>
    <updated>2011-05-30T04:38:49.522Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:name>SampleNumericComponentNameUpdated</wcm:name>
    <wcm:description>SampleNumericComponentDescriptionUpdated</wcm:description>
    <wcm:type>NUMERIC</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
</entry>
```

## Read

A component can be read by sending a GET request to the following URI:

```
/<library-component-api-type>/<itemuuid>
```

For example:

```
GET /wps/mycontenthandler/wcmrest/LibraryNumericComonent/0d678334-69ae-4d3a-a525-91bb551e5a18 HTTP/1.0


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>0d678334-69ae-4d3a-a525-91bb551e5a18</id>
    <title>SampleNumericComponentTitleUpdated</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryNumericComponent/0d678334-69ae-4d3a-a525-91bb551e5a18"/>
    <link rel="edit-media" type="text/plain" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryNumericComponent/0d678334-69ae-4d3a-a525-91bb551e5a18"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/versions"/>
    <updated>2011-05-30T04:38:49.522Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:name>SampleNumericComponentNameUpdated</wcm:name>
    <wcm:description>SampleNumericComponentDescriptionUpdated</wcm:description>
    <wcm:type>NUMERIC</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
</entry>
```

## Delete

A component can be deleted by sending a DELETE request to the following URI:

```
/<library-component-api-type>/<itemuuid>
```

For example:

-   **DELETE**

    ```
    HTTP/1.1 DELETE
    http://host:port/wps/mycontenthandler/wcmrest/LibraryNumericComponent/<itemuuid>
    ```

-   **Response**

    ```
    Status Code :200
    Status Message : OK
    ```


## Specifying raw data

The content of a component is accessed from the location that is specified in the HREF attribute of the edit-media link. The link also contains a TYPE attribute that contains the accepted media type for the content. For example:

```
<link rel="edit-media" type="text/plain" 
href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryTextComponent/0d678334-69ae-4d3a-a525-91bb551e5a18"/>
```

A complete list of media types are documented here: [Supported media types](wcm_rest_media_types.md).

To update content of a library component PUT content in an accepted media type to the edit-media URL. For example:

```
PUT /wps/mycontenthandler/!ut/p/wcmrest/LibraryTextComponent/0d678334-69ae-4d3a-a525-91bb551e5a18 HTTP/1.0
Content-type: text/plain

This is some text to add to the component.


HTTP/1.0 200 OK
```

To retrieve content from a library component GET content from the edit-media URL. For example:

```
GET  /wps/mycontenthandler/!ut/p/wcmrest/LibraryTextComponent/0d678334-69ae-4d3a-a525-91bb551e5a18 HTTP/1.0
Accept: text/plain


HTTP/1.0 200 OK
Content-type: text/plain

This is some text to add to the component.


```

An alternative to specifying the media type in the HTTP accept header is to use the request parameter mime-type. You must URL encode the value. For example:

```
GET  /wps/mycontenthandler/!ut/p/wcmrest/LibraryTextComponent/0d678334-69ae-4d3a-a525-91bb551e5a18?mime-type=text%2Fplain HTTP/1.0


HTTP/1.0 200 OK
Content-type: text/plain

This is some text to add to the component.


```


**Related information**  


[REST content formats for components and elements](../wcm/wcm_rest_content_formats.md)

