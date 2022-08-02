# How to use REST with taxonomies

You can use the Web Content Manager REST service to create, read, update, and delete taxonomies.

## Create

A taxonomy can be created by sending a POST request to the following URI with an Atom entry that represents the item:

```
/Taxonomy
```

For example:

```

HTTP/1.1 POST /wps/mycontenthandler/wcmrest/Taxonomy
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>Marketing Taxonomy</wcm:name>
    <title>Marketing Taxonomy</title>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!muAe8T8GIzS4EJeiF9a_sw/wcmrest/Library/94a8214d-322c-4724-acc3-b6c217d1bc5f" label="Library"/>
</entry>

HTTP/1.1 201 Created
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4</id>
    <wcm:name>Marketing Taxonomy</wcm:name>
    <title>Marketing Taxonomy</title>
    <wcm:type>Taxonomy</wcm:type>
    <updated>2014-06-27T00:52:59.022Z</updated>
    <wcm:created>2014-06-27T00:52:59.022Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Taxonomy/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Taxonomy/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Taxonomy/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDeL1C2JGH61JOGJMG6OPO6JMG6HHP6MM8CHHP8MMO64JOA6O4C3JO2MOGCK1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/94a8214d-322c-4724-acc3-b6c217d1bc5f" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4/versions" xml:lang="en" label="Versions"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>
```

## Update

A taxonomy can be updated by sending a PUT request to the following URI:

```
/Taxonomy/taxonomy-id
```

For example:

```

HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/Taxonomy/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>Marketing Taxonomy Has Been Changed</wcm:name>
    ... some content elided ...
</entry>

HTTP/1.1 200 OK
```

## Read

A taxonomy can be read by sending a GET request to the following URI:

```
/Taxonomy/taxonomy-id
```

For example:

```

HTTP/1.1 GET /wps/mycontenthandler/wcmrest/Taxonomy/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4
Accept: application/atom+xml

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4</id>
    <wcm:name>Marketing Taxonomy</wcm:name>
    <title>Marketing Taxonomy</title>
    <wcm:type>Taxonomy</wcm:type>
    <updated>2014-06-27T00:52:59.022Z</updated>
    <wcm:created>2014-06-27T00:52:59.022Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Taxonomy/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Taxonomy/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Taxonomy/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDeL1C2JGH61JOGJMG6OPO6JMG6HHP6MM8CHHP8MMO64JOA6O4C3JO2MOGCK1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/94a8214d-322c-4724-acc3-b6c217d1bc5f" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/501a4ab8-48c3-41fc-b1fd-6dbe0acba1d4/versions" xml:lang="en" label="Versions"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>
```

## Delete

A taxonomy can be deleted by sending a DELETE request to the following URI:

```
/Taxonomy/taxonomy-id
```

In this example, the type `PublishAction` can be replaced with `ExpireAction` or `VersionAction` when you work with those workflow action types.

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/Taxonomy/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80

HTTP/1.1 200 OK
```

**Parent topic:**[How to manage web content items by using REST](../wcm/wcm_rest_crud.md)

