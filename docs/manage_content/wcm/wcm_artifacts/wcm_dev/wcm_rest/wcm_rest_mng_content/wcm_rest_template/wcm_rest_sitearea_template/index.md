# How to use REST with site area templates

You can use the Web Content Manager REST service to create, read, update, and delete site area templates. You can also set default values for items that are created by using these site area templates.

## Create

A site area template can be created by sending a POST request to the following URI with an Atom entry that represents the site area template:

```
/SiteAreaTemplate
```

For example:

```

POST /wps/mycontenthandler/wcmrest/SiteAreaTemplate
Content-Type : application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title>SampleSiteAreaTemplateTitle</title>
    <wcm:name>SampleSiteAreaTemplateName</wcm:name>
    <summary xml:lang="en">SampleSiteAreaTemplateDescription</summary>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062" label="Library"/>
</entry>

HTTP/1.0 201 Created
Content-type: application/atom+xml; type=entry
Content-location:/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:7f1055db-29ac-43ea-88b8-c6b23019b6b9</id>
    <title xml:lang="en">SampleSiteAreaTemplateTitle</title>
    <summary xml:lang="en">SampleSiteAreaTemplateDescription</summary>
    <wcm:name>SampleSiteAreaTemplateName</wcm:name>
    <wcm:type>SiteAreaTemplate</wcm:type>
    <updated>2015-03-19T11:39:52.405Z</updated>
    <wcm:created>2015-03-19T11:39:52.405Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/7f1055db-29ac-43ea-88b8-c6b23019b6b9/change-to-draft" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/7f1055db-29ac-43ea-88b8-c6b23019b6b9/create-draft" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/p/ac/access:oid:Z6QReDeNHP23OK6L1P4MM86P9O6MMG6J9P2MM07OHOGJMCCMHO4JP06H9E46R8CP1" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/7f1055db-29ac-43ea-88b8-c6b23019b6b9/versions" label="Versions"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype/elements" label="Elements"/>
    <link rel="prototype" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype" label="Prototype"/>
    <link rel="prototype-properties" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype/properties" type="application/vnd.ibm.wcm+xml" label="Prototype Properties"/>
    <link rel="new-sitearea" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/new-sitearea" label="New Sitearea"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>


```

## Update

A site area template can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed.

```
/SiteAreaTemplate/item-uuid
```

For example:

```

PUT /wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>SampleSiteAreaTemplateTitleUpdated</title>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062"/>
    <wcm:name>SampleSiteAreaTemplateNameUpdated</wcm:name>
    <summary xml:lang="en">SampleSiteAreaTemplateDescriptionUpdated</summary>
</entry>

HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:7f1055db-29ac-43ea-88b8-c6b23019b6b9</id>
    <title xml:lang="en">SampleSiteAreaTemplateTitleUpdated</title>
    <summary xml:lang="en">SampleSiteAreaTemplateDescriptionUpdated</summary>
    <wcm:name>SampleSiteAreaTemplateNameUpdated</wcm:name>
    <wcm:type>SiteAreaTemplate</wcm:type>
    <updated>2015-03-19T11:46:42.869Z</updated>
    <wcm:created>2015-03-19T11:39:52.405Z</wcm:created>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/7f1055db-29ac-43ea-88b8-c6b23019b6b9/change-to-draft" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/7f1055db-29ac-43ea-88b8-c6b23019b6b9/create-draft" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/p/ac/access:oid:Z6QReDeNHP23OK6L1P4MM86P9O6MMG6J9P2MM07OHOGJMCCMHO4JP06H9E46R8CP1" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/7f1055db-29ac-43ea-88b8-c6b23019b6b9/versions" label="Versions"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype/elements" label="Elements"/>
    <link rel="prototype" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype" label="Prototype"/>
    <link rel="prototype-properties" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype/properties" type="application/vnd.ibm.wcm+xml" label="Prototype Properties"/>
    <link rel="new-sitearea" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/new-sitearea" label="New Sitearea"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>

```

## Read

A site area template can be read by sending a GET request to the following URI:

```
/SiteAreaTemplate/item-uuid
```

For example:

```

GET /wps/mycontenthandler/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9

HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:7f1055db-29ac-43ea-88b8-c6b23019b6b9</id>
    <title xml:lang="en">SampleSiteAreaTemplateTitleUpdated</title>
    <summary xml:lang="en">SampleSiteAreaTemplateDescriptionUpdated</summary>
    <wcm:name>SampleSiteAreaTemplateUpdated</wcm:name>
    <wcm:type>SiteAreaTemplate</wcm:type>
    <updated>2015-03-19T11:46:42.869Z</updated>
    <wcm:created>2015-03-19T11:39:52.405Z</wcm:created>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/7f1055db-29ac-43ea-88b8-c6b23019b6b9/change-to-draft" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/7f1055db-29ac-43ea-88b8-c6b23019b6b9/create-draft" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/p/ac/access:oid:Z6QReDeNHP23OK6L1P4MM86P9O6MMG6J9P2MM07OHOGJMCCMHO4JP06H9E46R8CP1" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/Library/91d0b849-7e9b-4053-a267-d4b84be29062" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/7f1055db-29ac-43ea-88b8-c6b23019b6b9/versions" label="Versions"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype/elements" label="Elements"/>
    <link rel="prototype" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype" label="Prototype"/>
    <link rel="prototype-properties" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype/properties" type="application/vnd.ibm.wcm+xml" label="Prototype Properties"/>
    <link rel="new-sitearea" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/new-sitearea" label="New Sitearea"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>

```

## Delete

A site area template can be deleted by sending a DELETE request to the following URI:

```
/SiteAreaTemplate/item-uuid
```

For example:

```
DELETE /wps/mycontenthandler/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9

Response:
Status Code :200
Status Message : OK
```

-   **[How to set default site area values for site area templates by using REST](../wcm/wcm_rest_crud_site_temp_default.md)**  
You can update and read default site area values for site areas that are created by using a site area template.
-   **[How to set default properties for site area templates by using REST](../wcm/wcm_rest_crud_site_temp_props.md)**  
You can update and read the default properties of site areas that are created by using a site area template.


