# Creating a content item from a skeleton

A "skeleton" representation of a content item that is created from a content template can be obtained to aid in the creation of content items. This can be obtained by using a GET request to the following URI. When the skeleton is obtained and completed a POST request can be made by using this data to create the item: /ContentTemplate/template-uuid/new-content.

For example:

```
HTTP/1.1 GET http://host:port/wps/mycontenthandler/wcmrest/ContentTemplate/b7b8b3fb-8fa1-4eb3-915e-ce7514f7067f/new-content

Response 
200 OK

```

```
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm">
    <id>wcmrest:6bab48c6-1f24-454e-9bab-ae1be4cf3a0a</id>
    <title lang="en"></title>
    <summary lang="en"></summary>
    <wcm:name></wcm:name>
    <wcm:type>Content</wcm:type>
    <updated>2012-01-31T03:28:08.118Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</
    wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!7K1PhYjxBw0jzCDqHCwg2w/um/
    users/profiles/Z9eAeHPCAJG963RD2MMG6P9O6MMG66BD6MM47IHP4MMS6M1DAJQ4C1BCAMID653</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!7K1PhYjxBw0jzCDqHCwg2w/um/
    users/profiles/Z9eAeHPCAJG963RD2MMG6P9O6MMG66BD6MM47IHP4MMS6M1DAJQ4C1BCAMID653</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <link label="Library" rel="library" href="/wps/mycontenthandler/!ut/p/
digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/item/a423287f-b0ce-4ee3-9c95-aa0939382228" lang="en"/>
    <link label="Content Template" rel="content-template" href="/wps/
mycontenthandler/!ut/p/digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/Content/b7b8b3fb-8fa1-4eb3-915e-ce7514f7067f" lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <content xmlns="http://www.ibm.com/xmlns/wcm">
            <elements>
                <element name="Body">
                    <title lang="en">Body</title>
                    <type>RichTextComponent</type>

```