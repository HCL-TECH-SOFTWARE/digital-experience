# How to use REST with scheduled move workflow actions 

You can use the Web Content Manager REST service to create, read, update, and delete scheduled move workflow actions.

## Create

A scheduled move action can be created by sending a POST request to the following URI with an Atom entry that represents the action:

```
/ScheduledMoveAction
```

For example:

```


HTTP/1.1 POST /wps/mycontenthandler/wcmrest/ScheduledMoveAction
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>My Scheduled Move Action</wcm:name>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:scheduledMoveAction xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <dateType>LIVE_DATE</type>
            <offset unit="DAY" amount="3" direction="AFTER">
                <time-of-day>15:42:12</time-of-day>
            </offset>
        </wcm:scheduledMoveAction>
    </content>
</entry>

HTTP/1.1 201 Created

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>My Scheduled Move Action</wcm:name>
    ... some content elided ...
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/624ca7c0-86ac-4e17-9167-25004c84aeca" xml:lang="en" label="Library"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:scheduledMoveAction xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <dateType>LIVE_DATE</type>
            <offset unit="DAY" amount="3" direction="AFTER">
                <time-of-day>15:42:12</time-of-day>
            </offset>
        </wcm:scheduledMoveAction>
    </content>
</entry>

```

## Update

A scheduled move action can be updated by sending a PUT request to the following URI:

```
/ScheduledMoveAction/action-id
```

For example:

```


HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/ScheduledMoveAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:scheduledMoveAction xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <dateType>LIVE_DATE</type>
            <offset unit="HOUR" amount="1" direction="BEFORE">
                <time-of-day>15:42:12</time-of-day>
            </offset>
        </wcm:scheduledMoveAction>
    </content>
</entry>

HTTP/1.1 200 OK

```

## Read

A scheduled move action can be read by sending a GET request to the following URI:

```
/ScheduledMoveAction/action-id
```

For example:

```


HTTP/1.1 GET /wps/mycontenthandler/wcmrest/ScheduledMoveAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046
Accept: application/atom+xml

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:abc4c24a-3540-4ae3-8ba6-f2f82a977046</id>
    <title xml:lang="en">My Scheduled Move Action</title>
    <summary xml:lang="en"></summary>
    <wcm:name>My Scheduled Move Action</wcm:name>
    <wcm:type>ScheduledMoveAction</wcm:type>
    <updated>2014-06-24T04:51:00.159Z</updated>
    <wcm:created>2014-06-24T04:51:00.159Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/ScheduledMoveAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/ScheduledMoveAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/ScheduledMoveAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/abc4c24a-3540-4ae3-8ba6-f2f82a977046/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/abc4c24a-3540-4ae3-8ba6-f2f82a977046/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDe1JO66QCCI1D2MMC6L1D0JMG61BP6JM072BOCJMOCIHPG3P4CPPDE3OG6M1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/624ca7c0-86ac-4e17-9167-25004c84aeca" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/abc4c24a-3540-4ae3-8ba6-f2f82a977046/versions" xml:lang="en" label="Versions"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/ScheduledMoveAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:scheduledMoveAction xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <dateType>LIVE_DATE</type>
            <offset unit="DAY" amount="3" direction="AFTER">
                <time-of-day>15:42:12</time-of-day>
            </offset>
        </wcm:scheduledMoveAction>
    </content>
</entry>

```

## Delete

A scheduled move action can be deleted by sending a DELETE request to the following URI:

```
/ScheduledMoveAction/action-id
```

For example:

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/ScheduledMoveAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046

HTTP/1.1 200 OK
```

**Parent topic:**[How to use REST with workflow actions ](../wcm/wcm_rest_crud_workflow_actions.md)

