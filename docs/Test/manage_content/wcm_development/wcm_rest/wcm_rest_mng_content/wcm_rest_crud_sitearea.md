# How to use REST with site areas

You can use the Web Content Manager REST service to create, read, update, and delete site areas.

## Create

A site area can be created by sending a POST request to the following URI with an Atom entry that represents the site area:

```
/SiteArea
```

-   A library or parent link relation must be specified. This tells the REST service the location of the hierarchical item being created.
-   An authoring template must be specified. This tells the REST service what authoring template to use when creating the item.
-   Template mappings can also be specified.

For example:

```
POST /wps/mycontenthandler/wcmrest/SiteArea HTTP/1.0
Content-type : application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>SampleSiteAreaTitle</title>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/wcmrest/item/ae6a3632-a1b5-456a-866e-e9baab84fe29"/>
    <wcm:name>SampleSiteAreaName</wcm:name>
    <wcm:description>SampleSiteAreaDescription</wcm:description>
</entry>


HTTP/1.0 201 Created
Content-type : application/atom+xml; type=entry
Content-location: /wps/mycontenthandler/!ut/p/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>18001a8c-2117-45d2-be1c-baea28a41769</id>
    <title>SampleSiteAreaTitle</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/54a68ca2-c550-4385-966f-b0b612147547"/>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/wcmrest/item/ae6a3632-a1b5-456a-866e-e9baab84fe29"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/18001a8c-2117-45d2-be1c-baea28a41769/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/18001a8c-2117-45d2-be1c-baea28a41769/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/18001a8c-2117-45d2-be1c-baea28a41769/versions"/>
    <link rel="default-content" href="/wps/mycontenthandler/!ut/p/wcmrest/Content/null"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769/elements"/>
    <updated>2011-05-30T06:01:56.330Z</updated>
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
    <wcm:name>SampleSiteAreaName</wcm:name>
    <wcm:description>SampleSiteAreaDescription</wcm:description>
    <wcm:type>SiteArea</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
		<content type="application/vnd.ibm.wcm+xml">
        <wcm:siteArea xmlns="http://www.ibm.com/xmlns/wcm">
            <elements xmlns:atom="http://www.w3.org/2005/Atom"/>
            <templateMap>
                <templateMapping authoringTemplate="/wps/mycontenthandler/!ut/p/digest!One_9iWYnKogRRVx7BtBTA/wcmrest/ContentTemplate/d1dab663-4488-45e4-b63e-2f9339d50b57" presentationTemplate="/wps/mycontenthandler/!ut/p/digest!One_9iWYnKogRRVx7BtBTA/wcmrest/PresentationTemplate/3c304106-3c22-403c-8d62-1930749b0942"/>
            </templateMap>
        </wcm:siteArea>
</entry>
```

## Create from a skeleton

A "skeleton" representation of a site area that is created from a site area template can be obtained to aid in the creation of site areas. This can be obtained by sending a GET request to the following URI. When the skeleton is obtained and completed a POST request can be made by using this data to create the item.

```
/SiteAreaTemplate/template-uuid/new-sitearea
```

For example:

```
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm">
    <id>wcmrest:38188c20-44e4-4447-8a54-91d47ecfcc13</id>
    <wcm:name></wcm:name>
    <wcm:type>SiteArea</wcm:type>
    <updated>2012-01-31T03:33:17.826Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!7K1PhYjxBw0jzCDqHCwg2w/um/users/profiles/Z9eAeHPCAJG963RD2MMG6P9O6MMG66BD6MM47IHP4MMS6M1DAJQ4C1BCAMID653</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!7K1PhYjxBw0jzCDqHCwg2w/um/users/profiles/Z9eAeHPCAJG963RD2MMG6P9O6MMG66BD6MM47IHP4MMS6M1DAJQ4C1BCAMID653</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <link label="Sitearea Template" rel="sitearea-template" href="/wps/mycontenthandler/!ut/p/digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/SiteArea/72456e6a-198c-47f3-8611-659b0ec6624c" lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <siteArea xmlns="http://www.ibm.com/xmlns/wcm">
            <elements>
                <element name="summary">
                    <title lang="en-US">Summary</title>
                    <type>TextComponent</type>
                    <data type="text/plain"><![CDATA[Text inside the element]]&gt;</data>
                </element>
                <element name="body">
                    <title lang="en-US">Body</title>
                    <type>HTMLComponent</type>
                    <data type="text/html"><![CDATA[<p>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
]]&gt;</data>
                </element>
            </elements>
        </siteArea>
    </content>
</entry>
```

## Update

A site area can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed.

```
/SiteArea/item-uuid
```

For example:

```
PUT /wps/mycontenthandler/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769 HTTP/1.0
Content-Type : application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>SampleSiteAreaTitleUpdated</title>
    <wcm:name>SampleSiteAreaNameUpdated</wcm:name>
    <wcm:description>SampleSiteAreaDescriptionUpdated</wcm:description>
</entry>


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>18001a8c-2117-45d2-be1c-baea28a41769</id>
    <title>SampleSiteAreaTitleUpdated</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/54a68ca2-c550-4385-966f-b0b612147547"/>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/wcmrest/item/ae6a3632-a1b5-456a-866e-e9baab84fe29"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/18001a8c-2117-45d2-be1c-baea28a41769/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/18001a8c-2117-45d2-be1c-baea28a41769/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/18001a8c-2117-45d2-be1c-baea28a41769/versions"/>
    <link rel="default-content" href="/wps/mycontenthandler/!ut/p/wcmrest/Content/null"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769/elements"/>
    <updated>2011-05-30T06:04:25.741Z</updated>
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
    <wcm:name>SampleSiteAreaNameUpdated</wcm:name>
    <wcm:description>SampleSiteAreaDescriptionUpdated</wcm:description>
    <wcm:type>SiteArea</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
</entry>
```

```

```

## Read

A site area can be read by sending a GET request to the following URI:

```
/SiteArea/item-uuid
```

For example:

```
GET /wps/mycontenthandler/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769 HTTP/1.0


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>18001a8c-2117-45d2-be1c-baea28a41769</id>
    <title>SampleSiteAreaTitleUpdated</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/54a68ca2-c550-4385-966f-b0b612147547"/>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/wcmrest/item/ae6a3632-a1b5-456a-866e-e9baab84fe29"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/18001a8c-2117-45d2-be1c-baea28a41769/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/18001a8c-2117-45d2-be1c-baea28a41769/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/18001a8c-2117-45d2-be1c-baea28a41769/versions"/>
    <link rel="default-content" href="/wps/mycontenthandler/!ut/p/wcmrest/Content/null"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769/elements"/>
    <updated>2011-05-30T06:04:25.741Z</updated>
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
    <wcm:name>SampleSiteAreaNameUpdated</wcm:name>
    <wcm:description>SampleSiteAreaDescriptionUpdated</wcm:description>
    <wcm:type>SiteArea</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
</entry>
```

## Delete

A site area can be deleted by sending a DELETE request to the following URI:

```
/SiteArea/item-uuid
```

For example:

```
DELETE /wps/mycontenthandler/wcmrest/SiteArea/18001a8c-2117-45d2-be1c-baea28a41769 HTTP/1.0

 

HTTP/1.0 200 OK
```


