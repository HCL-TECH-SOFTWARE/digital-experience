# How to set default content values for content templates by using REST

You can update and read default content values for content items that are created by using a content template.

These values include:

-   Elements
-   Default workflow
-   Presentation template override
-   Configuration properties \(for HCL Digital Experience 9.5 CF173, CF18 and higher releases. This option is also available to HCL Digital Experience 8.5 and 9.0 CF18 users.\)
-   Apply Content templates to Content items \(for HCL Digital Experience 9.5 CF173, CF18 and higher releases. This option is also available to HCL Digital Experience 8.5 and 9.0 CF18 users.\)

## Update

You can update the default content values of a content template by sending a PUT request to the following URI:

```
/ContentTemplate/item-uuid/Prototype
```

For example:

```
PUT /wps/mycontenthandler/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" 
xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:8986d098-4b75-43c0-b912-37c905960dd1</id>
    <wcm:type>Content</wcm:type>
    <link rel="workflow" href="/wps/mycontenthandler/!ut/p/wcmrest/Workflow/27b4254a-3762-42e3-
8099-997f394874d4" label="Workflow"/>
    <link rel="presentation-override" 
href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/832f2d12-829c-41eb-a808-63393a3f77ce" 
label="Presentation Override"/>
</entry>


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" 
xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:8986d098-4b75-43c0-b912-37c905960dd1</id>
    <title/>
    <summary/>
    <wcm:type>Content</wcm:type>
    <updated>2015-03-19T04:06:49.489Z</updated>
    <wcm:created>2015-03-19T04:02:33.670Z</wcm:created>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</
wcm:distinguishedName>
    <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/
Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</
wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/
Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/wcmrest/
ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/
ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype" label="Edit"/>
    <link rel="workflow-stage" href="/wps/mycontenthandler/!ut/p/wcmrest/
WorkflowStage/b241a6b7-49ea-4a33-ad26-4ca1cc927620" label="Workflow Stage"/>
    <link rel="workflow" href="/wps/mycontenthandler/!ut/p/wcmrest/
Workflow/27b4254a-3762-42e3-8099-997f394874d4" label="Workflow"/>
    <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/wcmrest/Content/
8986d098-4b75-43c0-b912-37c905960dd1" type="application/vnd.ibm.wcm+xml" label="Edit Media"/>
    <link rel="presentation-override" href="/wps/mycontenthandler/!ut/p/
wcmrest/PresentationTemplate/832f2d12-829c-41eb-a808-63393a3f77ce" label="Presentation Override"/>
    <category scheme="wcmrest:workflowState" term="DRAFT" label="Draft"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom"/>
        </wcm:content>
    </content>
</entry>
```

## Enhanced Content Template API Element Configuration Updates

The Enhanced Content Template API Element Configuration Updates allows the configuration of the elements to be UPDATED by doing an HTTP PUT and including the updates in the body of the HTTP PUT request. If the props=true, the configuration is also included, and the response will contain the full update as in an HTTP GET for the configuration of the elements \(changes will be reflected in the response\). Only the configuration options included will be updated.

Optionally the data can be formatted into json by adding the following:

```
&amp;mime-type=application/json
```

Configuration updates may be made for the following WCM elements:

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

You can access and update the configuration properties of content template elements by sending requests using the following formats. The sample below outlines what could be changed in a DateComponent.

Sample Response from a GET request

-   **Sample URL:**

    ```
    /wps/mycontenthandler/wcmrest/ContentTemplate/be740772-5e30-48da-b7a6-e57839d58ea0/
    Prototype?props=true
    ```


-   **XML:**

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:6374c462-cc80-4859-86c0-97eb5a46a483</id>
        <title xml:lang="en">CT-Date-default-title</title>
        <summary xml:lang="en">CT-Date-default-description</summary>
        <wcm:name>CT-Date-default-name</wcm:name>
        <wcm:type>Content</wcm:type>
        <updated>2020-03-16T18:55:38.817Z</updated>
        <wcm:created>2020-02-24T19:23:31.582Z</wcm:created>
        <wcm:lastModifier>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/um/users/profiles/
            Z9eAe5BP0JOKCJHCCJM86O9C0JMG633ECJM8C33P2JM8CMHOAMO473BD23J1733</uri>
            <name>wpsadmin</name>
        </wcm:lastModifier>
        <wcm:creator>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/um/users/profiles/
            Z9eAe5BP0JOKCJHCCJM86O9C0JMG633ECJM8C33P2JM8CMHOAMO473BD23J1733</uri>
            <name>wpsadmin</name>
        </wcm:creator>
        <wcm:profile/>
        <wcm:workflow>
            <wcm:publishDate>2020-02-24T19:21:40.476Z</wcm:publishDate>
        </wcm:workflow>
        <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/
    wcmrest/ContentTemplate/be740772-5e30-48da-b7a6-e57839d58ea0/Prototype" xml:lang="en" label="Read"/>
        <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/
    wcmrest/ContentTemplate/be740772-5e30-48da-b7a6-e57839d58ea0/Prototype" xml:lang="en" label="Edit"/>
        <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/
    wcmrest/ContentTemplate/be740772-5e30-48da-b7a6-e57839d58ea0/Prototype" type="application/vnd.ibm.wcm+xml" xml:lang="en" 
    label="Edit Media"/>
        <content type="application/vnd.ibm.wcm+xml">
            <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                <elements xmlns:atom="http://www.w3.org/2005/Atom">
                    <element name="Sample Date name">
                        <title xml:lang="en">Sample Date title</title>
                        <type>DateComponent</type>
                        <data type="application/vnd.ibm.wcm+xml">
                            <PropertiesContent type="application/vnd.ibm.wcm+xml">
                                <properties key="HELP_TEXT">This is a date and time component!</properties>
                                <properties key="HELP_TEXT_PROVIDER_NAME">NONE</properties>
                                <properties key="HIDDEN">true</properties>
                                <properties key="MANDATORY">true</properties>
                                <properties key="DATE_TYPE">0</properties>
                                <properties key="START_OFFSET_DAYS">1</properties>
                                <properties key="START_OFFSET_HOURS">1</properties>
                                <properties key="START_OFFSET_MINUTES">1</properties>
                                <properties key="END_OFFSET_DAYS">2</properties>
                                <properties key="END_OFFSET_HOURS">2</properties>
                                <properties key="END_OFFSET_MINUTES">2</properties>
                                <properties key="STARTDATE">Fri Mar 13 01:00:00 GMT 2020</properties>
                                <properties key="ENDDATE">Sat Mar 14 01:00:00 GMT 2020</properties>
                                <date type="DateTime">2020-02-25T00:00:00.000Z</date>
                            </PropertiesContent>
                        </data>
                    </element>
                </elements>
            </wcm:content>
        </content>
    </entry>             
    ```


Sample Body Content for the PUT request

-   **Sample URL:**

    ```
    /wps/mycontenthandler/wcmrest/ContentTemplate/be740772-5e30-48da-b7a6-e57839d58ea0/
    Prototype?props=true
    ```


-   **XML:**

    ```
    <?xml version="1.0" encoding="UTF-8"?>
                    <entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
                    <id>wcmrest:6374c462-cc80-4859-86c0-97eb5a46a483</id>
                    <title xml:lang="en">CT-Date-default-title</title>
                    <summary xml:lang="en">CT-Date-default-description</summary>
                    <wcm:name>CT-Date-default-name</wcm:name>
                    <wcm:type>Content</wcm:type>
                    <updated>2020-03-16T18:55:38.817Z</updated>
                    <wcm:created>2020-02-24T19:23:31.582Z</wcm:created>
                    <wcm:lastModifier>
                    <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                    <uri>/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/um/users/profiles/
    Z9eAe5BP0JOKCJHCCJM86O9C0JMG633ECJM8C33P2JM8CMHOAMO473BD23J1733</uri>
                    <name>wpsadmin</name>
                    </wcm:lastModifier>
                    <wcm:creator>
                    <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                    <uri>/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/um/users/profiles/
    Z9eAe5BP0JOKCJHCCJM86O9C0JMG633ECJM8C33P2JM8CMHOAMO473BD23J1733</uri>
                    <name>wpsadmin</name>
                    </wcm:creator>
                    <wcm:profile/>
                    <wcm:workflow>
                    <wcm:publishDate>2020-02-24T19:21:40.476Z</wcm:publishDate>
                    </wcm:workflow>
                    <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/
    wcmrest/ContentTemplate/be740772-5e30-48da-b7a6-e57839d58ea0/Prototype" xml:lang="en" label="Read"/>
                    <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/
    wcmrest/ContentTemplate/be740772-5e30-48da-b7a6-e57839d58ea0/Prototype" xml:lang="en" label="Edit"/>
                    <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!zdqL4jKy5iNx_s0HSkKhgA/
    wcmrest/ContentTemplate/be740772-5e30-48da-b7a6-e57839d58ea0/Prototype" type="application/vnd.ibm.wcm+xml" 
    xml:lang="en" label="Edit Media"/>
                    <content type="application/vnd.ibm.wcm+xml">
                    <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                    <elements xmlns:atom="http://www.w3.org/2005/Atom">
                    <element name="Sample Date name">
                    <title xml:lang="en">Sample Date title</title>
                    <type>DateComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                    <PropertiesContent type="application/vnd.ibm.wcm+xml">
                    <properties key="HELP_TEXT">This is an update to the date and time component!</properties>
                    <properties key="HELP_TEXT_PROVIDER_NAME">NONE</properties>
                    <properties key="HIDDEN">true</properties>
                    <properties key="MANDATORY">true</properties>
                    <properties key="DATE_TYPE">0</properties>
                    <properties key="START_OFFSET_DAYS">2</properties>
                    <properties key="START_OFFSET_HOURS">2</properties>
                    <properties key="START_OFFSET_MINUTES">2</properties>
                    <properties key="END_OFFSET_DAYS">3</properties>
                    <properties key="END_OFFSET_HOURS">3</properties>
                    <properties key="END_OFFSET_MINUTES">3</properties>
                    <properties key="STARTDATE">Fri Mar 13 01:00:00 GMT 2020</properties>
                    <properties key="ENDDATE">Sat Mar 14 01:00:00 GMT 2020</properties>
                    <date type="DateTime">2020-02-25T00:00:00.000Z</date>
                    </PropertiesContent>
                    </data>
                    </element>
                    </elements>
                    </wcm:content>
                    </content>
                    </entry>
                
    ```


## Update

You can update the default content values of a content template by sending a PUT request to the following URI:

```
/ContentTemplate/item-uuid/Prototype
```

For example:

```
PUT /wps/mycontenthandler/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" 
xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:8986d098-4b75-43c0-b912-37c905960dd1</id>
    <wcm:type>Content</wcm:type>
    <link rel="workflow" href="/wps/mycontenthandler/!ut/p/wcmrest/Workflow/27b4254a-3762-42e3-
8099-997f394874d4" label="Workflow"/>
    <link rel="presentation-override" 
href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/832f2d12-829c-41eb-a808-63393a3f77ce" 
label="Presentation Override"/>
</entry>


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" 
xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:8986d098-4b75-43c0-b912-37c905960dd1</id>
    <title/>
    <summary/>
    <wcm:type>Content</wcm:type>
    <updated>2015-03-19T04:06:49.489Z</updated>
    <wcm:created>2015-03-19T04:02:33.670Z</wcm:created>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</
wcm:distinguishedName>
    <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/
Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</
wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/
Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/wcmrest/
ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/
ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype" label="Edit"/>
    <link rel="workflow-stage" href="/wps/mycontenthandler/!ut/p/wcmrest/
WorkflowStage/b241a6b7-49ea-4a33-ad26-4ca1cc927620" label="Workflow Stage"/>
    <link rel="workflow" href="/wps/mycontenthandler/!ut/p/wcmrest/
Workflow/27b4254a-3762-42e3-8099-997f394874d4" label="Workflow"/>
    <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/wcmrest/Content/
8986d098-4b75-43c0-b912-37c905960dd1" type="application/vnd.ibm.wcm+xml" label="Edit Media"/>
    <link rel="presentation-override" href="/wps/mycontenthandler/!ut/p/
wcmrest/PresentationTemplate/832f2d12-829c-41eb-a808-63393a3f77ce" label="Presentation Override"/>
    <category scheme="wcmrest:workflowState" term="DRAFT" label="Draft"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom"/>
        </wcm:content>
    </content>
</entry>
```

## Enhanced Content Template API

This API enables developers to retrieve the configuration of content template elements, for example, if an element is required or not.

The new API returns the additional configuration of the elements if one queries via

```
/wps/mycontenthandler/wcmrest/ContentTemplate/id/Prototype/elements?props=true
```

Optionally, the data can be formatted into json by adding `&mime-type=application/json`.

The following elements are currently possible to query in WCM:

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

For all elements, the updated API returns different data depending on what is configured. The following sample is in xml for NONE/false/false:

```
<properties>
        <key>HELP_TEXT_PROVIDER_NAME</key>
        <value>**NONE**</value>
    </properties>
    <properties>
        <key>HIDDEN</key>
        <value>**false**</value>
    </properties>
    <properties>
        <key>MANDATORY</key>
        <value>**false**</value>
    </properties>
```

The following sample template has all fields.

**Sample responses**

XML

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
                </properties>Test the sample
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
                        "value": "Test the sample"
                    }
                }
            }
        ]
    }
}

```

## Apply Content Template API

This API allows a developer to apply a content template to a set of specific content items or all content items of a certain template. It is equivalent to the functionality in the user interface:

![](../images/apply_content_template_ui.png "Apply Content Template User Interface")

Using the **Apply Content Template API**

**Endpoint** You can send a PUT request to:

```
http://host:port/wps/mycontenthandler/!ut/p/digest!KG7Oo8qSOni4fLuinAp3sA/wcmrest/ContentTemplateApply/<template-id>?addNewElements=true&removeElements=<true|false>&replaceElementsAutoConversion=<true|false>&copyHiddenFields=<true|false>&defaultValueMandatoryFields=<true|false>&saveInvalidItems=<true|false>&saveItemsAsDrafts=<true|false>&listOfContentIDs=&templateContentID=
```

**Sample URL**

```
http://localhost:10039/wps/mycontenthandler/!ut/p/digest!KG7Oo8qSOni4fLuinAp3sA/wcmrest/ContentTemplateApply/3c8c5996-4e2a-4c86-a82d-e379bd0c45f0?addNewElements=true&removeElements=true&replaceElementsAutoConversion=false&copyHiddenFields=false&defaultValueMandatoryFields=true&saveInvalidItems=false&saveItemsAsDrafts=false&listOfContentIDs=dc4374b5-22df-448b-becf-bef929c3304f&templateContentID=d2b5a431-760d-47a3-90d7-cc80e116f8bb
```

**Expected body**

The body can have the basic WCM structure:

```
<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
</atom:entry>
```

**Expected headers**

LTPA token of the user.

**Query parameters**

-   `addNewElements`: Add new elements to the content - true\|false
-   `removeElements`: Remove elements from content - true\|false
-   `replaceElementsAutoConversion`: Try auto conversion of updated elements - true\|false
-   `copyHiddenFields`: Copy hidden elements - true\|false
-   `defaultValueMandatoryFields`= Add a default value for the mandatory fields - it uses the templateContentID as the content the default values are copied from - true\|false
-   `saveInvalidItems`= Save Invalid items - true\|false
-   `saveItemsAsDrafts`= Save items as drafts - true\|false
-   `listOfContentIDs`= Optional paramater - if not supplied or empty the template is applied to all content of the template - comma separated list of IDs
-   `templateContentID`= Content ID of the template used for the default values - content ID

**Return body**

Structure:

```
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id><ID of the content template></id>
    <title>ApplyContentTemplate</title>
    <updated><Timestamp when it was updated></updated>
    <entry>
        <content type="application/vnd.ibm.wcm+xml">
            <ContentTemplateApplication>
                <contentTemplateName><Name of the template></contentTemplateName>
                <contentTemplateID><ID of the content template></contentTemplateID>
                <totalCount><Total number of items that were identified as to be updated></totalCount>
                <convertedCount><Total number of items that were successfully updated></convertedCount>
                <alreadyHasDraftsCount><Failed items as they have a draft already></alreadyHasDraftsCount>
                <invalidCount><Failed items that failed as they were invalid with the update.></invalidCount>
                <skippedCount><Failed items that were skipped - for instance the user does not have the right permissions on the item.></skippedCount>
            </ContentTemplateApplication>
        </content>
    </entry>
</feed>

```

Sample:

```
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id><ID of the content template></id>
    <title>ApplyContentTemplate</title>
    <updated><Timestamp when it was updated></updated>
    <entry>
        <content type="application/vnd.ibm.wcm+xml">
            <ContentTemplateApplication>
                <contentTemplateName><Name of the template></contentTemplateName>
                <contentTemplateID><ID of the content template></contentTemplateID>
                <totalCount><Total number of items that were identified as to be updated></totalCount>
                <convertedCount><Total number of items that were successfully updated></convertedCount>
                <alreadyHasDraftsCount><Failed items as they have a draft already></alreadyHasDraftsCount>
                <invalidCount><Failed items that failed as they were invalid with the update.></invalidCount>
                <skippedCount><Failed items that were skipped - for instance the user does not have the right permissions on the item.></skippedCount>
            </ContentTemplateApplication>
        </content>
    </entry>
</feed>

```

**Parent topic:**[How to use REST with content templates](../wcm/wcm_rest_crud_cont_temp.md)

