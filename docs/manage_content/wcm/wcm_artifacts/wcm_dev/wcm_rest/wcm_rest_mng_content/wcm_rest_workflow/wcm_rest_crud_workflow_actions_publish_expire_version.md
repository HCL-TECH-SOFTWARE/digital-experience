# How to use REST with workflow publish, expire, or version actions

The properties of publish actions, expire actions and version actions are identical. Only the URI used to run the actions are different.

## Create

A publish action can be created by sending a POST request to the following URI with an Atom entry that represents the action:

```
/PublishAction
```

An expire action can be created by sending a POST request to the following URI with an Atom entry that represents the action:

```
/ExpireAction
```

A version action can be created by sending a POST request to the following URI with an Atom entry that represents the action:

```
/VersionAction
```

In this example, the type `PublishAction` can be replaced with `ExpireAction` or `VersionAction` when needed.

```


HTTP/1.1 POST /wps/mycontenthandler/wcmrest/PublishAction
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title>My Publish Action</title>
    <summary>This action publishes content to the live site</summary>
    <wcm:name>My Publish Action</wcm:name>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!muAe8T8GIzS4EJeiF9a_sw/wcmrest/Library/03da7ddc-1bc9-47cd-ab69-b06f23a3f284" />
</entry>


HTTP/1.1 201 Created
Content-Type: application/atom+xml
Content-Location: /wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:9c1d8e5b-0e0d-467b-8f1d-58ed550f4236</id>
    <title xml:lang="en">My Publish Action</title>
    <summary xml:lang="en">This action publishes content to the live site</summary>
    <wcm:name>My Publish Action</wcm:name>
    <wcm:type>PublishAction</wcm:type>
    <updated>2014-06-24T02:19:42.060Z</updated>
    <wcm:created>2014-06-24T02:19:42.060Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDePPO23I175BD4MM0653C8MMG6MPD4MM076BC8MMK6O9P8MQK6GHP83PC6M1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/03da7ddc-1bc9-47cd-ab69-b06f23a3f284" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236/versions" xml:lang="en" label="Versions"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>

```

## Update

A publish action can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed.

```
/PublishAction/action-id
```

An expire action can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed.

```
/ExpireAction/action-id
```

A version action can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed.

```
/VersionAction/action-id
```

In this example, the type `PublishAction` can be replaced with `ExpireAction` or `VersionAction` when needed.

```


HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/WorkflowStage/141793eb-afa7-428e-bb7b-070a25ee3d7c
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:9c1d8e5b-0e0d-467b-8f1d-58ed550f4236</id>
    <title xml:lang="en">My Publish Action</title>
    <summary xml:lang="en">This action publishes content to the live site</summary>
    <wcm:name>My Publish Action - now with a different name</wcm:name>
    <wcm:type>PublishAction</wcm:type>
    <updated>2014-06-24T02:19:42.060Z</updated>
    <wcm:created>2014-06-24T02:19:42.060Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDePPO23I175BD4MM0653C8MMG6MPD4MM076BC8MMK6O9P8MQK6GHP83PC6M1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/03da7ddc-1bc9-47cd-ab69-b06f23a3f284" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236/versions" xml:lang="en" label="Versions"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>

HTTP/1.1 200 OK

```

## Read

A publish action can be read by sending a GET request to the following URI:

```
/PublishAction/action-id
```

An expire action can be read by sending a GET request to the following URI:

```
/ExpireAction/action-id
```

A version action can be read by sending a GET request to the following URI:

```
/VersionAction/action-id
```

In this example, the type `PublishAction` can be replaced with `ExpireAction` or `VersionAction` when needed.

```


HTTP/1.1 GET /wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236
Accept: application/atom+xml

HTTP/1.1 200 OK
Content-Type: application/atom+xml
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:9c1d8e5b-0e0d-467b-8f1d-58ed550f4236</id>
    <title xml:lang="en">My Publish Action</title>
    <summary xml:lang="en">This action publishes content to the live site</summary>
    <wcm:name>My Publish Action</wcm:name>
    <wcm:type>PublishAction</wcm:type>
    <updated>2014-06-24T02:19:42.060Z</updated>
    <wcm:created>2014-06-24T02:19:42.060Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/PublishAction/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDePPO23I175BD4MM0653C8MMG6MPD4MM076BC8MMK6O9P8MQK6GHP83PC6M1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/03da7ddc-1bc9-47cd-ab69-b06f23a3f284" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/9c1d8e5b-0e0d-467b-8f1d-58ed550f4236/versions" xml:lang="en" label="Versions"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>

```

## Delete

A publish action can be deleted by sending a DELETE request to the following URI:

```
/PublishAction/action-id
```

A expire action can be deleted by sending a DELETE request to the following URI:

```
/ExpireAction/action-id
```

A version action can be deleted by sending a DELETE request to the following URI:

```
/VersionAction/action-id
```

In this example, the type `PublishAction` can be replaced with `ExpireAction` or `VersionAction` when needed.

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/PublishAction/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80

HTTP/1.1 200 OK
```


