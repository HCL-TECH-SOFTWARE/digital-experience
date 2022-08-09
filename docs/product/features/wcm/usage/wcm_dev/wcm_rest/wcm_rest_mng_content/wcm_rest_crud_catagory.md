# How to use REST with categories

You can use the Web Content Manager REST service to create, read, update, and delete categories.

## Create

A category can be created by sending a POST request to the following URI with an Atom entry that represents the item:

```
/Category
```

For example:

```

HTTP/1.1 POST /wps/mycontenthandler/wcmrest/Category
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>Product Marketing Category</wcm:name>
    <link rel="parent" href="/wps/mycontenthandler/wcmrest/Taxonomy/5b4c58a2-68fb-45e2-9907-ef58ad95cc2f"/>
</entry>

HTTP/1.1 201 Created
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:525900ec-0ae0-40f7-9edd-4bddc7af154f</id>
    <title xml:lang="en">Product Marketing Category</title>
    <summary xml:lang="en"></summary>
    <wcm:name>Product Marketing Category</wcm:name>
    <wcm:type>Category</wcm:type>
    <updated>2014-06-27T01:05:28.212Z</updated>
    <wcm:created>2014-06-27T01:05:28.212Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAe5JOE3O46N1P0JM06J9OCJMG64BC6MM472RCCJMK62JD66J57OHDC3OC6N1</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAe5JOE3O46N1P0JM06J9OCJMG64BC6MM472RCCJMK62JD66J57OHDC3OC6N1</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAe5JOE3O46N1P0JM06J9OCJMG64BC6MM472RCCJMK62JD66J57OHDC3OC6N1</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAe5JOE3O46N1P0JM06J9OCJMG64BC6MM472RCCJMK62JD66J57OHDC3OC6N1</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Category/525900ec-0ae0-40f7-9edd-4bddc7af154f" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Category/525900ec-0ae0-40f7-9edd-4bddc7af154f" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Category/525900ec-0ae0-40f7-9edd-4bddc7af154f" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/525900ec-0ae0-40f7-9edd-4bddc7af154f/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/525900ec-0ae0-40f7-9edd-4bddc7af154f/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDeLHCAJS06G9P6MM061BP0JMG6GHPEJM4753P8MMG623P8MHT61JP2JQG663" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/078dc9ce-3cde-4eec-ab7c-2bdc0043deb7" xml:lang="en" label="Library"/>
    <link rel="parent" href="/wps/mycontenthandler/wcmrest/Taxonomy/5b4c58a2-68fb-45e2-9907-ef58ad95cc2f" xml:lang="en" label="Parent"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/525900ec-0ae0-40f7-9edd-4bddc7af154f/versions" xml:lang="en" label="Versions"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>
```

## Update

A category can be updated by sending a PUT request to the following URI

```
/Category/category-id
```

For example:

```

HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/Category/525900ec-0ae0-40f7-9edd-4bddc7af154f
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>Marketing Category Has Been Changed</wcm:name>
    ... some content elided ...
</entry>

HTTP/1.1 200 OK

```

## Read

A category can be read by sending a GET request to the following URI:

```
/Category/category-id
```

For example:

```

HTTP/1.1 GET /wps/mycontenthandler/wcmrest/Category/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4
Accept: application/atom+xml

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:525900ec-0ae0-40f7-9edd-4bddc7af154f</id>
    <title xml:lang="en">Product Marketing Category</title>
    <summary xml:lang="en"></summary>
    <wcm:name>Product Marketing Category</wcm:name>
    <wcm:type>Category</wcm:type>
    <updated>2014-06-27T01:05:28.212Z</updated>
    <wcm:created>2014-06-27T01:05:28.212Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAe5JOE3O46N1P0JM06J9OCJMG64BC6MM472RCCJMK62JD66J57OHDC3OC6N1</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAe5JOE3O46N1P0JM06J9OCJMG64BC6MM472RCCJMK62JD66J57OHDC3OC6N1</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAe5JOE3O46N1P0JM06J9OCJMG64BC6MM472RCCJMK62JD66J57OHDC3OC6N1</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAe5JOE3O46N1P0JM06J9OCJMG64BC6MM472RCCJMK62JD66J57OHDC3OC6N1</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Category/525900ec-0ae0-40f7-9edd-4bddc7af154f" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Category/525900ec-0ae0-40f7-9edd-4bddc7af154f" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Category/525900ec-0ae0-40f7-9edd-4bddc7af154f" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/525900ec-0ae0-40f7-9edd-4bddc7af154f/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/525900ec-0ae0-40f7-9edd-4bddc7af154f/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDeLHCAJS06G9P6MM061BP0JMG6GHPEJM4753P8MMG623P8MHT61JP2JQG663" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/078dc9ce-3cde-4eec-ab7c-2bdc0043deb7" xml:lang="en" label="Library"/>
    <link rel="parent" href="/wps/mycontenthandler/wcmrest/Taxonomy/5b4c58a2-68fb-45e2-9907-ef58ad95cc2f" xml:lang="en" label="Parent"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/525900ec-0ae0-40f7-9edd-4bddc7af154f/versions" xml:lang="en" label="Versions"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>
```

## Delete

A category can be deleted by sending a DELETE request to the following URI:

```
/Category/category-id
```

In this example, the type `PublishAction` can be replaced with `ExpireAction` or `VersionAction` when working with those workflow action types.

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/Category/525900ec-0ae0-40f7-9edd-4bddc7af154f

HTTP/1.1 200 OK
```

**Parent topic:**[How to manage web content items by using REST](../wcm/wcm_rest_crud.md)

