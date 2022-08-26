# How to use REST to retrieve the settings of the elements for content templates

The Enhanced Web Content Manager Content Template API available with HCL Digital Experience 9.5 CF172 and CF18 higher releases adds the ability to retrieve the configuration of the elements, for example, if an element is required or not. This option is also available to HCL Digital Experience 8.5 and 9.0 CF18 users.

Prior to **HCL Digital Experience 9.5 CF172** and **CF18**, the **WCM REST API** allowed developers to retrieve content templates via/wps/mycontenthandler/wcmrest/ContentTemplate/id. As of **HCL Digital Experience 9.5 CF172** and **CF18**, developers can retrieve the prototype \(the elements\) via /wps/mycontenthandler/wcmrest/ContentTemplate/id/Prototype, and the details of the prototype elements via /wps/mycontenthandler/wcmrest/ContentTemplate/id/Prototype/elements. This option is also available to HCL Digital Experience 8.5 and 9.0 CF18 users.

## Enhancements to the WCM Content Template API

As of **HCL Digital Experience 9.5 CF172** and **CF18**, the enhanced Content Template API returns the additional configuration of the elements if one queries via /wps/mycontenthandler/wcmrest/ContentTemplate/id/Prototype/elements?props=true. This option is also available to HCL Digital Experience 8.5 and 9.0 CF18 users.



Optionally the data can be formatted into json by adding &mime-type=application/json

The following elements are available in WCM:

-   User Selection
-   Component Reference
-   Date and Time
-   File
-   HTML
-   Image
-   JSP
-   Link
-   Number
-   Option Selection
-   Rich Text
-   Short Text
-   Text

New with **HCL Digital Experience 9.5 CF172** and **CF18** higher releases, for all elements, the API returns the following results \(the following sample presented is in XML for none/false/false\). This option is also available to HCL Digital Experience 8.5 and 9.0 CF18 users:

```
<properties>
        <key>HELP_TEXT_PROVIDER_NAME</key>
        <value>NONE</value>
    </properties>
    <properties>
        <key>HIDDEN</key>
        <value>false</value>
    </properties>
    <properties>
        <key>MANDATORY</key>
        <value>false</value>
    </properties>

```

## Sample responses

Depending on what is configured, the elements provide different data. The following sample is a template showing all fields.

```
<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title xml:lang="en">Elements Feed</title>
    <updated>2019-12-06T18:10:37.200Z</updated>
    <entry>
        <title xml:lang="en">user</title>
        <wcm:name>user</wcm:name>
        <wcm:type>UserSelectionComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/user" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MAX_SELECTION</key>
                    <value>1</value>
                </properties>
                <wcm:userSelection xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom"/>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">componentReference</title>
        <wcm:name>componentReference</wcm:name>
        <wcm:type>ReferenceComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/componentReference" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>ALLOWED_TYPES</key>
                    <value>com.aptrix.pluto.cmpnt.HTMLCmpnt, com.aptrix.pluto.cmpnt.ImageResourceCmpnt</value>
                </properties>
                <wcm:reference></wcm:reference>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">dateandtime</title>
        <wcm:name>dateandtime</wcm:name>
        <wcm:type>DateComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/dateandtime" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>STARTDATE</key>
                    <value>Fri Dec 13 00:00:00 GMT 2019</value>
                </properties>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">file</title>
        <wcm:name>file</wcm:name>
        <wcm:type>FileComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/file" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>ALLOWED_MIME_TYPES</key>
                    <value>[unknown/unknown, video/ogg]</value>
                </properties>
                <properties>
                    <key>MAX_BYTES</key>
                    <value>20000</value>
                </properties>
                <properties>
                    <key>MIN_BYTES</key>
                    <value>200</value>
                </properties>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">html</title>
        <wcm:name>html</wcm:name>
        <wcm:type>HTMLComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/html" xml:lang="en" label="Read"/>
        <content type="text/html">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>FILTER_ACTIVE_CONTENT</key>
                    <value>true</value>
                </properties>
                <properties>
                    <key>MIN_CHARS</key>
                    <value>200</value>
                </properties>
                <properties>
                    <key>MAX_CHARS</key>
                    <value>400</value>
                </properties>Default HTML
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">image</title>
        <wcm:name>image</wcm:name>
        <wcm:type>ImageComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/image" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>ALLOWED_MIME_TYPES</key>
                    <value>[image/jpeg, image/png]</value>
                </properties>
                <properties>
                    <key>MAX_BYTES</key>
                    <value>300</value>
                </properties>
                <wcm:image xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                    <dimension height="" width="" border="0"/>
                    <altText></altText>
                    <tagName></tagName>
                </wcm:image>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">jsp</title>
        <wcm:name>jsp</wcm:name>
        <wcm:type>JSPComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/jsp" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <wcm:jsp xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                    <path></path>
                </wcm:jsp>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">link</title>
        <wcm:name>link</wcm:name>
        <wcm:type>LinkComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/link" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>RESTRICTED_TYPES</key>
                    <value>[portalpage, imagecomponent]</value>
                </properties>
                <wcm:linkElement xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                    <destination type="content" allowClear="false" queryString=""></destination>
                    <display type="title"></display>
                    <description useDestination="false"></description>
                    <target>None</target>
                    <additionalAttributes></additionalAttributes>
                </wcm:linkElement>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">number</title>
        <wcm:name>number</wcm:name>
        <wcm:type>NumericComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/number" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <wcm:double xmlns="http://www.ibm.com/xmlns/wcm/8.0"/>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">option</title>
        <wcm:name>option</wcm:name>
        <wcm:type>OptionSelectionComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/option" xml:lang="en" label="Read"/>
        <content type="application/vnd.ibm.wcm+xml">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MAX_SELECTION</key>
                    <value>1</value>
                </properties>
                <properties>
                    <key>MIN_SELECTION</key>
                    <value>1</value>
                </properties>
                <properties>
                    <key>VALUES</key>
                    <value>[test1, test2]</value>
                </properties>
                <properties>
                    <key>TYPE</key>
                    <value>0</value>
                </properties>
                <wcm:optionselection xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                    <displaytype>CheckboxesOrRadioButtons</displaytype>
                    <selection>UserDefined</selection>
                    <options mode="Singleselect">
                        <option selected="false" id="test1">test1</option>
                        <option selected="false" id="test2">test2</option>
                    </options>
                </wcm:optionselection>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">richtext</title>
        <wcm:name>richtext</wcm:name>
        <wcm:type>RichTextComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/richtext" xml:lang="en" label="Read"/>
        <content type="text/html">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>IS_STYLE_DRIVEN</key>
                    <value>true</value>
                </properties>
                <properties>
                    <key>IS_RICHTEXT_ONLY</key>
                    <value>true</value>
                </properties>
                <properties>
                    <key>FILTER_ACTIVE_CONTENT</key>
                    <value>true</value>
                </properties>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">shorttext</title>
        <wcm:name>shorttext</wcm:name>
        <wcm:type>ShortTextComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/shorttext" xml:lang="en" label="Read"/>
        <content type="text/plain">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MAX_CHARS</key>
                    <value>250</value>
                </properties>
            </PropertiesContent>
        </content>
    </entry>
    <entry>
        <title xml:lang="en">text</title>
        <wcm:name>text</wcm:name>
        <wcm:type>TextComponent</wcm:type>
        <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/text" xml:lang="en" label="Read"/>
        <content type="text/plain">
            <PropertiesContent>
                <properties>
                    <key>HELP_TEXT_PROVIDER_NAME</key>
                    <value>NONE</value>
                </properties>
                <properties>
                    <key>HIDDEN</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MANDATORY</key>
                    <value>false</value>
                </properties>
                <properties>
                    <key>MIN_CHARS</key>
                    <value>200</value>
                </properties>
                <properties>
                    <key>MAX_CHARS</key>
                    <value>400</value>
                </properties>Test the heck
            </PropertiesContent>
        </content>
    </entry>
</feed>
JSON:
{
    "feed": {
        "title": {
            "lang": "en",
            "value": "Elements Feed"
        },
        "updated": "Fri, 06 Dec 2019 18:07:58.243Z",
        "entry": [
            {
                "title": {
                    "lang": "en",
                    "value": "user"
                },
                "name": "user",
                "type": "UserSelectionComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/user",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "application/vnd.ibm.wcm+xml",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "MAX_SELECTION",
                                "value": "1"
                            }
                        ],
                        "userSelection": {}
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "componentReference"
                },
                "name": "componentReference",
                "type": "ReferenceComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/componentReference",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "application/vnd.ibm.wcm+xml",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "ALLOWED_TYPES",
                                "value": "com.aptrix.pluto.cmpnt.HTMLCmpnt, com.aptrix.pluto.cmpnt.ImageResourceCmpnt"
                            }
                        ],
                        "reference": ""
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "dateandtime"
                },
                "name": "dateandtime",
                "type": "DateComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/dateandtime",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "application/vnd.ibm.wcm+xml",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "STARTDATE",
                                "value": "Fri Dec 13 00:00:00 GMT 2019"
                            }
                        ]
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "file"
                },
                "name": "file",
                "type": "FileComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/file",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "application/vnd.ibm.wcm+xml",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "ALLOWED_MIME_TYPES",
                                "value": "[unknown/unknown, video/ogg]"
                            },
                            {
                                "key": "MAX_BYTES",
                                "value": "20000"
                            },
                            {
                                "key": "MIN_BYTES",
                                "value": "200"
                            }
                        ]
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "html"
                },
                "name": "html",
                "type": "HTMLComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/html",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "text/html",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "FILTER_ACTIVE_CONTENT",
                                "value": "true"
                            },
                            {
                                "key": "MIN_CHARS",
                                "value": "200"
                            },
                            {
                                "key": "MAX_CHARS",
                                "value": "400"
                            }
                        ],
                        "value": "Default HTML"
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "image"
                },
                "name": "image",
                "type": "ImageComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/image",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "application/vnd.ibm.wcm+xml",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "ALLOWED_MIME_TYPES",
                                "value": "[image/jpeg, image/png]"
                            },
                            {
                                "key": "MAX_BYTES",
                                "value": "300"
                            }
                        ],
                        "image": {
                            "dimension": {
                                "height": "",
                                "width": "",
                                "border": "0"
                            },
                            "altText": "",
                            "tagName": ""
                        }
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "jsp"
                },
                "name": "jsp",
                "type": "JSPComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/jsp",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "application/vnd.ibm.wcm+xml",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            }
                        ],
                        "jsp": {
                            "path": ""
                        }
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "link"
                },
                "name": "link",
                "type": "LinkComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/link",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "application/vnd.ibm.wcm+xml",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "RESTRICTED_TYPES",
                                "value": "[portalpage, imagecomponent]"
                            }
                        ],
                        "linkElement": {
                            "destination": {
                                "type": "content",
                                "allowClear": false,
                                "queryString": ""
                            },
                            "display": {
                                "type": "title"
                            },
                            "description": {
                                "useDestination": false,
                                "value": ""
                            },
                            "target": "None",
                            "additionalAttributes": ""
                        }
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "number"
                },
                "name": "number",
                "type": "NumericComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/number",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "application/vnd.ibm.wcm+xml",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            }
                        ],
                        "double": null
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "option"
                },
                "name": "option",
                "type": "OptionSelectionComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/option",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "application/vnd.ibm.wcm+xml",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "MAX_SELECTION",
                                "value": "1"
                            },
                            {
                                "key": "MIN_SELECTION",
                                "value": "1"
                            },
                            {
                                "key": "VALUES",
                                "value": "[test1, test2]"
                            },
                            {
                                "key": "TYPE",
                                "value": "0"
                            }
                        ],
                        "optionselection": {
                            "displaytype": "CheckboxesOrRadioButtons",
                            "selection": "UserDefined",
                            "options": {
                                "mode": "Singleselect",
                                "option": [
                                    {
                                        "selected": false,
                                        "id": "test1",
                                        "value": "test1"
                                    },
                                    {
                                        "selected": false,
                                        "id": "test2",
                                        "value": "test2"
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "richtext"
                },
                "name": "richtext",
                "type": "RichTextComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/richtext",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "text/html",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "IS_STYLE_DRIVEN",
                                "value": "true"
                            },
                            {
                                "key": "IS_RICHTEXT_ONLY",
                                "value": "true"
                            },
                            {
                                "key": "FILTER_ACTIVE_CONTENT",
                                "value": "true"
                            }
                        ],
                        "value": ""
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "shorttext"
                },
                "name": "shorttext",
                "type": "ShortTextComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/shorttext",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "text/plain",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "MAX_CHARS",
                                "value": "250"
                            }
                        ],
                        "value": ""
                    }
                }
            },
            {
                "title": {
                    "lang": "en",
                    "value": "text"
                },
                "name": "text",
                "type": "TextComponent",
                "link": [
                    {
                        "rel": "alternate",
                        "href": "/wps/mycontenthandler/!ut/p/digest!e_-zQHtjYVrte9FiINA8xA/wcmrest/ContentTemplate/5640de67-315c-4674-bd7f-b6778f3e8858/Prototype/elements/text",
                        "lang": "en",
                        "label": "Read"
                    }
                ],
                "content": {
                    "type": "text/plain",
                    "PropertiesContent": {
                        "properties": [
                            {
                                "key": "HELP_TEXT_PROVIDER_NAME",
                                "value": "NONE"
                            },
                            {
                                "key": "HIDDEN",
                                "value": "false"
                            },
                            {
                                "key": "MANDATORY",
                                "value": "false"
                            },
                            {
                                "key": "MIN_CHARS",
                                "value": "200"
                            },
                            {
                                "key": "MAX_CHARS",
                                "value": "400"
                            }
                        ],
                        "value": "Test the heck"
                    }
                }
            }
        ]
    }
}

```


