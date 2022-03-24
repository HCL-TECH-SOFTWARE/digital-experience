# Support for library components in content and authoring templates 

DX supports an image or file element in a content or authoring template to point to an existing library component. The API is added to retrieve the references to library components from content and authoring templates and to update/add these references.

## GET - Retrieve data on references

When placing a GET request for content or for an authoring template, the reference is returned in the `resourceUri` element in the. `libraryComponentReferenceURI` field. Sample:

```
<resourceUri libraryComponentReferenceURI="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/LibraryFileComponent/a3bb731e-7029-4c81-a012-8c6530e10abc"></resourceUri>
```

Complete payload sample:

```
<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:5c33e12b-6a62-48a2-824c-29a6a2d89a63</id>
    <title xml:lang="en">crappo</title>
    <summary xml:lang="en"></summary>
    <wcm:name>crappo</wcm:name>
    <wcm:type>Content</wcm:type>
    <updated>2021-02-02T12:41:34.993Z</updated>
    <wcm:created>2021-01-20T23:23:01.992Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/um/users/profiles/Z9eAeJHO66QCCGHO4MMOC5RD6MMG62BD2MM472BECMMS6O9P6MS47O1E0JR06K1</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/um/users/profiles/Z9eAeJHO66QCCGHO4MMOC5RD6MMG62BD2MM472BECMMS6O9P6MS47O1E0JR06K1</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/um/users/profiles/Z9eAeJHO66QCCGHO4MMOC5RD6MMG62BD2MM472BECMMS6O9P6MS47O1E0JR06K1</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/um/users/profiles/Z9eAeJHO66QCCGHO4MMOC5RD6MMG62BD2MM472BECMMS6O9P6MS47O1E0JR06K1</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:creator>
    <wcm:profile/>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/item/5c33e12b-6a62-48a2-824c-29a6a2d89a63/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/item/5c33e12b-6a62-48a2-824c-29a6a2d89a63/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/ac/access:oid:Z6QReDeLPO6JPKCHHC4MMO61JD4JMG6O9O4JM07I1D6MM86P9OCJG9643EIJGP6J1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/Library/9c67b217-d5bd-4ab6-a8fb-f146b4143072" xml:lang="en" label="Library"/>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/SiteArea/8bd8c5d0-6581-4f8b-b3fb-960bb0514083" xml:lang="en" label="Parent"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/item/5c33e12b-6a62-48a2-824c-29a6a2d89a63/versions" xml:lang="en" label="Versions"/>
    <link rel="preview" href="/wps/poc/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcm/oid:5c33e12b-6a62-48a2-824c-29a6a2d89a63" xml:lang="en" label="Preview"/>
    <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="content-template" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/ContentTemplate/7395873d-06d2-4d8d-a9e4-75cd6fa2a3be" xml:lang="en" label="Content Template"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63/elements" xml:lang="en" label="Elements"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <category scheme="wcmrest:locked" term="false" label=""/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom">
                <element name="file">
                    <title xml:lang="en">file</title>
                    <type>FileComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <resourceUri libraryComponentReferenceURI="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/LibraryFileComponent/a3bb731e-7029-4c81-a012-8c6530e10abc"></resourceUri>
                    </data>
                </element>
                <element name="image">
                    <title xml:lang="en">image</title>
                    <type>ImageComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <image>
                            <dimension height="1448" width="1912" border="0"/>
                            <altText></altText>
                            <tagName></tagName>
                            <resourceUri libraryComponentReferenceURI="/wps/mycontenthandler/!ut/p/digest!bwnkIBCsjNHRQuZQ53TKzg/wcmrest/LibraryImageComponent/e2e844cb-06b9-40c2-b8a7-aae5f1e8bd3d"></resourceUri>
                            <renditionList/>
                        </image>
                    </data>
                </element>
            </elements>
        </wcm:content>
    </content>
</entry>
```

## PUT - Update library components

Similar to the GET, the PUT sets/adds library component references for file or image components. Note that a file element can only point to a file library component and an image element can only point to an image library component.

```
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:5c33e12b-6a62-48a2-824c-29a6a2d89a63</id>
    <title xml:lang="en">crappo</title>
    <summary xml:lang="en"></summary>
    <wcm:name>crappo</wcm:name>
    <wcm:type>Content</wcm:type>
    <updated>2021-01-20T23:23:01.993Z</updated>
    <wcm:created>2021-01-20T23:23:01.992Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/um/users/profiles/Z9eAeJHO66QCCGHO4MMOC5RD6MMG62BD2MM472BECMMS6O9P6MS47O1E0JR06K1</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/um/users/profiles/Z9eAeJHO66QCCGHO4MMOC5RD6MMG62BD2MM472BECMMS6O9P6MS47O1E0JR06K1</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/um/users/profiles/Z9eAeJHO66QCCGHO4MMOC5RD6MMG62BD2MM472BECMMS6O9P6MS47O1E0JR06K1</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/um/users/profiles/Z9eAeJHO66QCCGHO4MMOC5RD6MMG62BD2MM472BECMMS6O9P6MS47O1E0JR06K1</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:creator>
    <wcm:profile/>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/item/5c33e12b-6a62-48a2-824c-29a6a2d89a63/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/item/5c33e12b-6a62-48a2-824c-29a6a2d89a63/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/ac/access:oid:Z6QReDeLPO6JPKCHHC4MMO61JD4JMG6O9O4JM07I1D6MM86P9OCJG9643EIJGP6J1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/Library/9c67b217-d5bd-4ab6-a8fb-f146b4143072" xml:lang="en" label="Library"/>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/SiteArea/8bd8c5d0-6581-4f8b-b3fb-960bb0514083" xml:lang="en" label="Parent"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/item/5c33e12b-6a62-48a2-824c-29a6a2d89a63/versions" xml:lang="en" label="Versions"/>
    <link rel="preview" href="/wps/poc/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcm/oid:5c33e12b-6a62-48a2-824c-29a6a2d89a63" xml:lang="en" label="Preview"/>
    <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="content-template" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/ContentTemplate/7395873d-06d2-4d8d-a9e4-75cd6fa2a3be" xml:lang="en" label="Content Template"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/Content/5c33e12b-6a62-48a2-824c-29a6a2d89a63/elements" xml:lang="en" label="Elements"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <category scheme="wcmrest:locked" term="false" label=""/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom">
                <element name="file">
                    <title xml:lang="en">file</title>
                    <type>FileComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <resourceUri libraryComponentReferenceURI="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/LibraryFileComponent/a3bb731e-7029-4c81-a012-8c6530e10abc"></resourceUri>
                    </data>
                </element>
                <element name="image">
                    <title xml:lang="en">image</title>
                    <type>ImageComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <image>
                            <dimension height="" width="" border="0"/>
                            <altText></altText>
                            <tagName></tagName>
                            <resourceUri libraryComponentReferenceURI="/wps/mycontenthandler/!ut/p/digest!fjNf__yQKLSOezHCPIbN8Q/wcmrest/LibraryImageComponent/e2e844cb-06b9-40c2-b8a7-aae5f1e8bd3d"></resourceUri>
                            <renditionList/>
                        </image>
                    </data>
                </element>
            </elements>
        </wcm:content>
    </content>
</entry>
```

## POST - create content with image library components or file library component references

For the creation scenario, the same pattern can be used to supply library component references.

**Parent topic:**[REST service for Web Content Manager ](../wcm/wcm_rest.md)

