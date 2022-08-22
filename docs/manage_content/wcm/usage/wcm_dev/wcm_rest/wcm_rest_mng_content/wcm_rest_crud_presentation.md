# How to REST with presentation templates

You can use the Web Content Manager REST service to create, read, update, and delete presentation templates.

## Create

A presentation template can be created by sending a POST request to the following URI with an Atom entry that represents the presentation template:

```
/PresentationTemplate
```

For example:

```
POST /wps/mycontenthandler/wcmrest/PresentationTemplate HTTP/1.0 POST
Content-Type : application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>SamplePresentationTemplateTitle</title>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <wcm:name>SamplePresentationTemplateTitleName</wcm:name>
    <wcm:description>SamplePresentationTemplateDescription</wcm:description>
</entry>


HTTP/1.0 201 Created
Content-type: application/atom+xml; type=entry
Content-location: /wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>02da6e9d-20ca-4c54-ae4a-f1114fa8e948</id>
    <title>SamplePresentationTemplateTitle</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948"/>
    <link rel="edit-media" type="text/html" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/versions"/>
    <link rel="add-attachment" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/attachments"/>
    <updated>2011-05-30T04:46:34.811Z</updated>
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
    <wcm:name>SamplePresentationTemplateTitleName</wcm:name>
    <wcm:description>SamplePresentationTemplateDescription</wcm:description>
    <wcm:type>PresentationTemplate</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
</entry>
```

## Update

A presentation template can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed.

```
/PresentationTemplate/<itemuuid>
```

For example:

```
PUT /wps/mycontenthandler/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948 HTTP/1.0
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>SamplePresentationTemplateTitleUpdated</title>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <wcm:name>SamplePresentationTemplateTitleNameUpdated</wcm:name>
    <wcm:description>SamplePresentationTemplateDescriptionUpdated</wcm:description>
</entry>

HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>02da6e9d-20ca-4c54-ae4a-f1114fa8e948</id>
    <title>SamplePresentationTemplateTitleUpdated</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948"/>
    <link rel="edit-media" type="text/html" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/versions"/>
    <link rel="add-attachment" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/attachments"/>
    <updated>2011-05-30T04:51:39.260Z</updated>
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
    <wcm:name>SamplePresentationTemplateTitleNameUpdated</wcm:name>
    <wcm:description>SamplePresentationTemplateDescriptionUpdated</wcm:description>
    <wcm:type>PresentationTemplate</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
</entry>
```

## Read

A presentation template can be read by sending a GET request to the following URI:

```
/PresentationTemplate/<itemuuid>
```

For example:

```
GET /wps/mycontenthandler/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948 HTTP/1.0


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>02da6e9d-20ca-4c54-ae4a-f1114fa8e948</id>
    <title>SamplePresentationTemplateTitleUpdated</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948"/>
    <link rel="edit-media" type="text/html" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/versions"/>
    <link rel="add-attachment" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948/attachments"/>
    <updated>2011-05-30T04:51:39.260Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <email></email>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <email></email>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:name>SamplePresentationTemplateTitleNameUpdated</wcm:name>
    <wcm:description>SamplePresentationTemplateDescriptionUpdated</wcm:description>
    <wcm:type>PresentationTemplate</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
</entry>
```

## Delete

A presentation template can be deleted by sending a DELETE request to the following URI:

```
/PresentationTemplate/<itemuuid>
```

For example:

-   **DELETE**

    ```
    HTTP/1.1 DELETE
    http://host:port/wps/mycontenthandler/wcmrest/PresentationTemplate/<itemuuid>
    ```

-   **Response:**

    ```
    Status Code :200
    Status Message : OK
    ```


## Specifying raw data

The content of a presentation template is accessed from the media resource that is specified in the HREF attribute of the edit-media link. The link also contains a TYPE attribute that contains the accepted media type for presentation templates, which is text/html. For example:

```
<link rel="edit-media" type="text/html" 
href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948"/>
```

To update content of a presentation template PUT content of type text/html type to the edit-media URL. For example:

```
PUT /wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948 HTTP/1.0
Content-type: text/html

<html>
    <body>
        [Component name="story"]
    </body>
</html>

HTTP/1.0 200 OK
```

To retrieve content from a library component GET content from the edit-media URL. For example:

```
GET  /wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/02da6e9d-20ca-4c54-ae4a-f1114fa8e948 HTTP/1.0
Accept: text/html


HTTP/1.0 200 OK
Content-type: text/html

<html>
    <body>
        [Component name="story"]
    </body>
</html>


```


