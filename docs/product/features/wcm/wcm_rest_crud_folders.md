# How to use REST with folders

You can use the Web Content Manager REST service to create, read, update, and delete folders. You can also use the Web Content Manager REST service to query for the preset folders in a library.

## Query For Preset Folders

A list of the preset folders in a library can be obtained by sending a GET request to the following URI:

```
/Library/library-id/preset-folders
```

For example:

```


HTTP/1.1 /wps/mycontenthandler/wcmrest/Library/
Accept: application/atom+xml

HTTP/1.1 200 OK
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:Library/790b8ca6-5d89-4f37-9052-783dd580f860/preset-folders</id>
    <title>wcmrest:Library/790b8ca6-5d89-4f37-9052-783dd580f860/preset-folders</title>
    <updated>2014-06-27T02:30:24.312Z</updated>
    <entry>
        <id>wcmrest:fd169c35-f35b-45da-b5cb-6dab73330142</id>
        <title xml:lang="en">Content</title>
        <wcm:name>Content</wcm:name>
        <wcm:type>PresetFolder</wcm:type>
        <updated>2014-06-13T02:27:49.631Z</updated>
        <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/790b8ca6-5d89-4f37-9052-783dd580f860" label="Library"/>
        <link rel="alternate" href="/wps/mycontenthandler/wcmrest/Folder/fd169c35-f35b-45da-b5cb-6dab73330142" label="Read"/>
    </entry>
    <entry>
        <id>wcmrest:f5f8964b-7e47-4427-aca6-46982125f123</id>
        <title xml:lang="en">Taxonomies</title>
        <wcm:name>Taxonomies</wcm:name>
        <wcm:type>PresetFolder</wcm:type>
        <updated>2014-06-13T02:27:49.629Z</updated>
        <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/790b8ca6-5d89-4f37-9052-783dd580f860" label="Library"/>
        <link rel="alternate" href="/wps/mycontenthandler/wcmrest/Folder/f5f8964b-7e47-4427-aca6-46982125f123" label="Read"/>
    </entry>
    <entry>
        <id>wcmrest:b7fd466d-d430-4a72-bb33-e8733f9b47e8</id>
        <title xml:lang="en">Components</title>
        <wcm:name>Components</wcm:name>
        <wcm:type>PresetFolder</wcm:type>
        <updated>2014-06-13T02:27:49.631Z</updated>
        <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/790b8ca6-5d89-4f37-9052-783dd580f860" label="Library"/>
        <link rel="alternate" href="/wps/mycontenthandler/wcmrest/Folder/b7fd466d-d430-4a72-bb33-e8733f9b47e8" label="Read"/>
    </entry>
    ... some entries elided ...
</feed>
```

## Create

A folder can be created by sending a POST request to the following URI with an Atom entry that represents the folder:

```
/Folder
```

For example:

```

HTTP/1.1 POST /wps/mycontenthandler/wcmrest/Folder
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>Design Components</wcm:name>
    <link rel="parent" href="/wps/mycontenthandler/wcmrest/Folder/17fe1ab3-ba6a-4769-b5f0-a2cb2f91ebb5-10"/>
</entry>

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:5def4f6f-0dd9-49ca-b954-706f8ceb7373</id>
    <title xml:lang="en">test create components folder</title>
    <summary xml:lang="en"></summary>
    <wcm:name>test create components folder</wcm:name>
    <wcm:type>Folder</wcm:type>
    <updated>2014-06-27T02:39:58.735Z</updated>
    <wcm:created>2014-06-27T02:39:58.733Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Folder/5def4f6f-0dd9-49ca-b954-706f8ceb7373" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Folder/5def4f6f-0dd9-49ca-b954-706f8ceb7373" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Folder/5def4f6f-0dd9-49ca-b954-706f8ceb7373" xml:lang="en" label="Delete"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDeL1PA6JH66JDCMM0643PIJMG6PPO2MM8CP9D8JMS6GHDC6SCC5JOEJPS6J1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/17fe1ab3-ba6a-4769-b5f0-a2cb2f91ebb5" xml:lang="en" label="Library"/>
    <link rel="parent" href="/wps/mycontenthandler/wcmrest/Folder/17fe1ab3-ba6a-4769-b5f0-a2cb2f91ebb5-10" xml:lang="en" label="Parent"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/5def4f6f-0dd9-49ca-b954-706f8ceb7373/versions" xml:lang="en" label="Versions"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>

```

## Update

A folder can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed:

```
/Folder/folder-id
```

For example:

```

HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/Folder/5def4f6f-0dd9-49ca-b954-706f8ceb7373
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    ... some content elided ...
    <wcm:name>The Folder Name has Chenged</wcm:name>
    <!-- Note that the parent has changed. This will cause the folder to be moved. -->
    <link rel="parent" href="/wps/mycontenthandler/wcmrest/Folder/aceaf85a-48a8-45f7-a6cc-343ace84f337" xml:lang="en" label="Parent"/>
    ... some content elided ...
</entry>

```

## Read

A folder can be read by sending a GET request to the following URI:

```
/Folder/folder-id
```

For example:

```

HTTP/1.1 GET /wps/mycontenthandler/wcmrest/Folder/5def4f6f-0dd9-49ca-b954-706f8ceb7373
Accept: application/atom+xml

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:5def4f6f-0dd9-49ca-b954-706f8ceb7373</id>
    <title xml:lang="en">test create components folder</title>
    <summary xml:lang="en"></summary>
    <wcm:name>test create components folder</wcm:name>
    <wcm:type>Folder</wcm:type>
    <updated>2014-06-27T02:39:58.735Z</updated>
    <wcm:created>2014-06-27T02:39:58.733Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Folder/5def4f6f-0dd9-49ca-b954-706f8ceb7373" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Folder/5def4f6f-0dd9-49ca-b954-706f8ceb7373" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Folder/5def4f6f-0dd9-49ca-b954-706f8ceb7373" xml:lang="en" label="Delete"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDeL1PA6JH66JDCMM0643PIJMG6PPO2MM8CP9D8JMS6GHDC6SCC5JOEJPS6J1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/17fe1ab3-ba6a-4769-b5f0-a2cb2f91ebb5" xml:lang="en" label="Library"/>
    <link rel="parent" href="/wps/mycontenthandler/wcmrest/Folder/17fe1ab3-ba6a-4769-b5f0-a2cb2f91ebb5-10" xml:lang="en" label="Parent"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/5def4f6f-0dd9-49ca-b954-706f8ceb7373/versions" xml:lang="en" label="Versions"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
</entry>
```

## Delete

A folder can be deleted by sending a DELETE request to the following URI:

```
/Folder/folder-id
```

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/Folder/5def4f6f-0dd9-49ca-b954-706f8ceb7373

HTTP/1.1 200 OK
```

**Parent topic:**[How to manage web content items by using REST](../wcm/wcm_rest_crud.md)

