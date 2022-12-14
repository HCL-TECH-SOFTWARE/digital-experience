# How to use REST with content templates

You can use the Web Content Manager REST service to create, read, update, and delete content templates. You can also set default values for items that are created by using these content templates, also create or update an option selection element for a Content Authoring template.

## Create

A content template can be created by sending a POST request to the following URI with an Atom entry that represents the content template:

```
/ContentTemplate
```

For example:

```

POST /wps/mycontenthandler/wcmrest/ContentTemplate
Content-Type : application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title>SampleContentTemplateTitle</title>
    <wcm:name>SampleContentTemplateName</wcm:name>
    <summary xml:lang="en">SampleContentTemplateDescription</summary>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062" label="Library"/>
</entry>

HTTP/1.0 201 Created
Content-type: application/atom+xml; type=entry
Content-location: /wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/e15bb37f-6eba-42f4-8470-e54431b69fb3

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:d19db2ce-87dc-484f-937a-203139818fbd</id>
    <title xml:lang="en">SampleContentTemplateTitle</title>
    <summary xml:lang="en">SampleContentTemplateDescription</summary>
    <wcm:name>SampleContentTemplateName</wcm:name>
    <wcm:type>ContentTemplate</wcm:type>
    <updated>2015-03-19T04:02:33.655Z</updated>
    <wcm:created>2015-03-19T04:02:33.655Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/d19db2ce-87dc-484f-937a-203139818fbd/change-to-draft" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/d19db2ce-87dc-484f-937a-203139818fbd/create-draft" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/ac/access:oid:Z6QReDe4BCI3I9CIPOAMM07N1P6MMG6O1DCMM47JPD2MM86GPC2JP47O9CG3J9C43" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/d19db2ce-87dc-484f-937a-203139818fbd/versions" label="Versions"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype/elements" label="Elements"/>
    <link rel="prototype" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype" label="Prototype"/>
    <link rel="prototype-properties" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype/properties" type="application/vnd.ibm.wcm+xml" label="Prototype Properties"/>
    <link rel="new-content" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/new-content" label="New Content"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>

```

## Update

A content template can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed.

```
/ContentTemplate/item-uuid
```

For example:

```

PUT /wps/mycontenthandler/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>SampleContentTemplateTitleUpdated</title>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062"/>
    <wcm:name>SampleContentTemplateNameUpdated</wcm:name>
    <summary xml:lang="en">SampleContentTemplateDescriptionUpdated</summary>
</entry>

HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:d19db2ce-87dc-484f-937a-203139818fbd</id>
    <title xml:lang="en">SampleContentTemplateTitleUpdated</title>
    <summary xml:lang="en">SampleContentTemplateDescriptionUpdated</summary>
    <wcm:name>SampleContentTemplateNameUpdated</wcm:name>
    <wcm:type>ContentTemplate</wcm:type>
    <updated>2015-03-19T04:06:49.462Z</updated>
    <wcm:created>2015-03-19T04:02:33.655Z</wcm:created>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/d19db2ce-87dc-484f-937a-203139818fbd/change-to-draft" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/d19db2ce-87dc-484f-937a-203139818fbd/create-draft" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/ac/access:oid:Z6QReDe4BCI3I9CIPOAMM07N1P6MMG6O1DCMM47JPD2MM86GPC2JP47O9CG3J9C43" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/d19db2ce-87dc-484f-937a-203139818fbd/versions" label="Versions"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype/elements" label="Elements"/>
    <link rel="prototype" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype" label="Prototype"/>
    <link rel="prototype-properties" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype/properties" type="application/vnd.ibm.wcm+xml" label="Prototype Properties"/>
    <link rel="new-content" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/new-content" label="New Content"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>

```

## Read

A content template can be read by sending a GET request to the following URI:

```
/ContentTemplate/item-uuid
```

For example:

```

GET /wps/mycontenthandler/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd

HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:d19db2ce-87dc-484f-937a-203139818fbd</id>
    <title xml:lang="en">SampleContentTemplateTitleUpdated</title>
    <summary xml:lang="en">SampleContentTemplateDescriptionUpdated</summary>
    <wcm:name>SampleContentTemplateName</wcm:name>
    <wcm:type>ContentTemplate</wcm:type>
    <updated>2015-03-19T04:06:49.462Z</updated>
    <wcm:created>2015-03-19T04:02:33.655Z</wcm:created>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/d19db2ce-87dc-484f-937a-203139818fbd/change-to-draft" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/d19db2ce-87dc-484f-937a-203139818fbd/create-draft" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/ac/access:oid:Z6QReDe4BCI3I9CIPOAMM07N1P6MMG6O1DCMM47JPD2MM86GPC2JP47O9CG3J9C43" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/d19db2ce-87dc-484f-937a-203139818fbd/versions" label="Versions"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype/elements" label="Elements"/>
    <link rel="prototype" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype" label="Prototype"/>
    <link rel="prototype-properties" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype/properties" type="application/vnd.ibm.wcm+xml" label="Prototype Properties"/>
    <link rel="new-content" href="/wps/mycontenthandler/!ut/p/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/new-content" label="New Content"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>

```

## Delete

A content template can be deleted by sending a DELETE request to the following URI:

```
/ContentTemplate/item-uuid
```

For example:

```
DELETE /wps/mycontenthandler/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd

Response:
Status Code :200
Status Message : OK
```

-   **[How to set default content values for content templates by using REST](wcm_rest_crud_cont_temp_default.md)**  
You can update and read default content values for content items that are created by using a content template.
-   **[How to set default properties for content templates by using REST](wcm_rest_crud_cont_temp_props.md)**  
You can update and read the default properties of content items that are created by using a content template.
-   **[How to create or update an Option Selection Element](wcm_rest_create_update_option_selection_element.md)**  
You can create or update an Option Selection Element in a Content Template.


