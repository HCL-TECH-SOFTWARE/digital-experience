# How to manage web content image renditions interactions by using REST

The REST service for Image Element Renditions supports access to and interactions with image component and elements having different versions to optimize display to desktop, tablet, and smart phone channels.

## Using the API to Interact with Image Renditions

HCL Digital Experience content and Digital Asset Management components support an image component and element, with the capability to have different versions optimize display to desktop, tablet, and smart phone channels. For more information on content images and rendition properties please see:

-   [Setting rendition properties on images](../../../../../manage_content/renditions/rend_images.md)
-   [Generate renditions and versioning](../../../../../manage_content/digital_assets/usage/managing_dam/modify_dam/dam_generate_renditions_and_versions.md)

The **Image Element Rendition Interactions REST API** allows developers to access and interact with image renditions using REST requests, as outlined in the descriptions and examples below.

## GET - Retrieve data on existing image element renditions

When placing a GET request for either a Web Content `LibraryImageComponent` or Content that contains a `LibraryImageComponent`, data on current image renditions will be returned in a `renditionList` after the resource URI for the default image.

Within the `renditionList`, each `imageRendition` tag includes a name property \("desktop", "tablet", or "smart phone"\) to identify which platform it is intended to display on, as well as information about image height, width, file name, file type, and the rendition image's URI.

The sample below has both a Digital Asset Management and a non-Digital Asset Management image:

```
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:29381bcc-05a6-4e4d-b09b-b0357f14f482</id>
    <title xml:lang="en">test2</title>
    <summary xml:lang="en"></summary>
    <wcm:name>test2</wcm:name>
    <wcm:type>Content</wcm:type>
    <updated>2020-09-15T17:53:51.162Z</updated>
    <wcm:created>2020-09-15T15:51:47.571Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/um/users/profiles/Z9eAeMPC4MQGC3BO8JMG6L1D4JMG663EIJM07JHOGJM07LHC83OCCLHC66Q8C43</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/um/users/profiles/Z9eAeMPC4MQGC3BO8JMG6L1D4JMG663EIJM07JHOGJM07LHC83OCCLHC66Q8C43</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/um/users/profiles/Z9eAeMPC4MQGC3BO8JMG6L1D4JMG663EIJM07JHOGJM07LHC83OCCLHC66Q8C43</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/um/users/profiles/Z9eAeMPC4MQGC3BO8JMG6L1D4JMG663EIJM07JHOGJM07LHC83OCCLHC66Q8C43</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:creator>
    <wcm:profile/>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/item/29381bcc-05a6-4e4d-b09b-b0357f14f482/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/item/29381bcc-05a6-4e4d-b09b-b0357f14f482/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/ac/access:oid:Z6QReDeI9E63S462RO6MM06L9OCJMG653D8MM8CG9E4MM8CGPCAJROCH1DC6Q07I1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Library/88744cea-b265-4d47-8e99-71fb2b6ca2a8" xml:lang="en" label="Library"/>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/SiteArea/53c3bf01-04d0-42e7-9d53-8e7d60d1c020" xml:lang="en" label="Parent"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/item/29381bcc-05a6-4e4d-b09b-b0357f14f482/versions" xml:lang="en" label="Versions"/>
    <link rel="preview" href="/wps/poc/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcm/oid:29381bcc-05a6-4e4d-b09b-b0357f14f482" xml:lang="en" label="Preview"/>
    <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="content-template" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/ContentTemplate/04736b04-ab8d-4593-b552-69dbe701ad20" xml:lang="en" label="Content Template"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482/elements" xml:lang="en" label="Elements"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <category scheme="wcmrest:locked" term="false" label=""/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom">
                <element name="image1">
                    <title xml:lang="en">image1</title>
                    <type>ImageComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <image>
                            <dimension height="" width="" border="0"/>
                            <altText></altText>
                            <tagName></tagName>
                            <fileName>image.jpg</fileName>
                            <resourceUri type="image/jpeg">/wps/wcm/myconnect/ade9b466-c6dd-4ffe-90c1-5e527e0a40b7/image.jpg?MOD=AJPERES</resourceUri>
                            <renditionList>
                                <imageRendition height="0" width="0" fileName="desktop" type="image/png" name="desktop">
                                    <resourceUri>/wps/wcm/myconnect/ade9b466-c6dd-4ffe-90c1-5e527e0a40b7/desktop/desktop?MOD=AJPERES</resourceUri>
                                </imageRendition>
                                <imageRendition height="0" width="0" fileName="smartphone" type="image/png" name="smartphone">
                                    <resourceUri>/wps/wcm/myconnect/ade9b466-c6dd-4ffe-90c1-5e527e0a40b7/smartphone/smartphone?MOD=AJPERES</resourceUri>
                                </imageRendition>
                                <imageRendition height="0" width="0" fileName="tablet" type="image/png" name="tablet">
                                    <resourceUri>/wps/wcm/myconnect/ade9b466-c6dd-4ffe-90c1-5e527e0a40b7/tablet/tablet?MOD=AJPERES</resourceUri>
                                </imageRendition>
                            </renditionList>
                        </image>
                    </data>
                </element>
                <element name="image2">
                    <title xml:lang="en">image2</title>
                    <type>ImageComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <image>
                            <dimension height="" width="" border="0"/>
                            <altText></altText>
                            <tagName></tagName>
                            <fileName>timj-gM6k0JmHIBE-unsplash.jpg</fileName>
                            <resourceUri type="image/jpeg">http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true</resourceUri>
                            <renditionList>
                                <imageRendition height="0" width="0" fileName="http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true" name="desktop">
                                    <resourceUri>http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true</resourceUri>
                                </imageRendition>
                                <imageRendition height="0" width="0" fileName="http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true" name="smartphone">
                                    <resourceUri>http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true</resourceUri>
                                </imageRendition>
                                <imageRendition height="0" width="0" fileName="http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true" name="tablet">
                                    <resourceUri>http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true</resourceUri>
                                </imageRendition>
                            </renditionList>
                        </image>
                    </data>
                </element>
            </elements>
        </wcm:content>
    </content>
</entry>
```

## PUT - Update rendition images

The appropriate rendition tag can also be added to a similarly formatted PUT request in order to add a rendition to an image component already in WCM or Digital Asset Management.

Please note that the image be used by the new rendition already needs to be present in Digital Asset Management, and that resource location must be provided in order for the rendition \(new or update\) to be created.

The sample below has two image components; one that will upload images to Web Content Manager library and a second component that sets Digital Asset Management images for the main image and its renditions to display on desktop, tablet, and smart phone channels.

```
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:29381bcc-05a6-4e4d-b09b-b0357f14f482</id>
    <title xml:lang="en">test2</title>
    <summary xml:lang="en"></summary>
    <wcm:name>test2</wcm:name>
    <wcm:type>Content</wcm:type>
    <updated>2020-09-15T15:51:47.576Z</updated>
    <wcm:created>2020-09-15T15:51:47.571Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/um/users/profiles/Z9eAeMPC4MQGC3BO8JMG6L1D4JMG663EIJM07JHOGJM07LHC83OCCLHC66Q8C43</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/um/users/profiles/Z9eAeMPC4MQGC3BO8JMG6L1D4JMG663EIJM07JHOGJM07LHC83OCCLHC66Q8C43</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/um/users/profiles/Z9eAeMPC4MQGC3BO8JMG6L1D4JMG663EIJM07JHOGJM07LHC83OCCLHC66Q8C43</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/um/users/profiles/Z9eAeMPC4MQGC3BO8JMG6L1D4JMG663EIJM07JHOGJM07LHC83OCCLHC66Q8C43</uri>
        <name>wpsadmin</name>
        <type>USER</type>
    </wcm:creator>
    <wcm:profile/>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482" xml:lang="en" label="Delete"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/item/29381bcc-05a6-4e4d-b09b-b0357f14f482/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/item/29381bcc-05a6-4e4d-b09b-b0357f14f482/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/ac/access:oid:Z6QReDeI9E63S462RO6MM06L9OCJMG653D8MM8CG9E4MM8CGPCAJROCH1DC6Q07I1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Library/88744cea-b265-4d47-8e99-71fb2b6ca2a8" xml:lang="en" label="Library"/>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/SiteArea/53c3bf01-04d0-42e7-9d53-8e7d60d1c020" xml:lang="en" label="Parent"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/item/29381bcc-05a6-4e4d-b09b-b0357f14f482/versions" xml:lang="en" label="Versions"/>
    <link rel="preview" href="/wps/poc/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcm/oid:29381bcc-05a6-4e4d-b09b-b0357f14f482" xml:lang="en" label="Preview"/>
    <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="content-template" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/ContentTemplate/04736b04-ab8d-4593-b552-69dbe701ad20" xml:lang="en" label="Content Template"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/digest!2iyPxgclWtD12Ox3FpJsXg/wcmrest/Content/29381bcc-05a6-4e4d-b09b-b0357f14f482/elements" xml:lang="en" label="Elements"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <category scheme="wcmrest:locked" term="true" label="uid=wpsadmin,o=defaultWIMFileBasedRealm"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom">
                <element name="image1">
                    <title xml:lang="en">image1</title>
                    <type>ImageComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <image>
                            <dimension height="" width="" border="0"/>
                            <altText></altText>
                            <tagName></tagName>
                            <wcm:binaryresource type="image/jpg" fileName="image.jpg">
                                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
                            </wcm:binaryresource>

                                                        <renditionList>
                                <imageRendition height="0" width="0" fileName="test.png" name="desktop">
                            <wcm:binaryresource type="image/jpg" fileName="image.jpg">
                                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
                            </wcm:binaryresource>
                                </imageRendition>
                                <imageRendition height="0" width="0" fileName="test2" name="smartphone">
                            <wcm:binaryresource type="image/jpg" fileName="image.jpg">
                                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
                            </wcm:binaryresource>

                                </imageRendition>
                                <imageRendition height="0" width="0" fileName="test3" name="tablet">
                            <wcm:binaryresource type="image/jpg" fileName="image.jpg">
                                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
                            </wcm:binaryresource>

                                </imageRendition>
                            </renditionList>

                        </image>
                    </data>
                </element>
                <element name="image2">
                    <title xml:lang="en">image2</title>
                    <type>ImageComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <image>
                            <dimension height="" width="" border="0"/>
                            <altText></altText>
                            <tagName></tagName>
                                                        <fileName>timj-gM6k0JmHIBE-unsplash.jpg</fileName>
                            <resourceUri type="image/jpeg">http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true</resourceUri>
                            <renditionList>
                                <imageRendition height="0" width="0" fileName="http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true" name="desktop">
                                    <resourceUri>http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true</resourceUri>
                                </imageRendition>
                                <imageRendition height="0" width="0" fileName="http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true" name="smartphone">
                                    <resourceUri>http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true</resourceUri>
                                </imageRendition>
                                <imageRendition height="0" width="0" fileName="http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true" name="tablet">
                                    <resourceUri>http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/9c71dafa-5135-42df-a957-4577c20d829b/items/9db0e5d8-244e-4a7e-927e-e723100bc1a9/renditions/41a8403c-4419-42d3-bd7f-b96ee0a3f265?binary=true</resourceUri>
                                </imageRendition>
                            </renditionList>

                        </image>
                    </data>
                </element>
            </elements>
        </wcm:content>
    </content>
</entry>
```

## POST - create an image component/element

To create an image and its renditions, the same patterns as shown in the above examples can be used to supply images as renditions if they exist in the Digital Asset Management or Web Content Manager libraries.


