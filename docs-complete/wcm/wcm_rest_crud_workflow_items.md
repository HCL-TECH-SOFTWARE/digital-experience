# How to use REST with workflow items 

You can use the Web Content Manager REST service to create, read, update, and delete workflow items.

## Create

A workflow item can be created by sending a POST request to the following URI with an Atom entry that represents the workflow item:

```
/Workflow
```

**Note:** A library link is required to specify the location to create the workflow.

For example:

```

HTTP/1.1 POST /wps/mycontenthandler/wcmrest/Workflow
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>MyWorkflow</wcm:name>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/be3ca1cd-f482-4715-9972-8e683fd0be85"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflow xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <option name="REQUIRE_COMMENT_ON_APPROVAL" enabled="true"/>
            <option name="ALLOW_VALIDATION_FAILURES" enabled="true"/>
            <stages>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/434ec120-aaa1-4ad0-a7fd-62a060206fc9"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fca54fb-fcaf-4e99-bc03-8f496510fd4e"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/4d0ff502-0cf4-4a94-9757-f37675202f44"/>
                <reject href="/wps/mycontenthandler/wcmrest/WorkflowStage/4d0ff502-0cf4-4a94-9757-f37675202f44"/>
                <project-exit href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fca54fb-fcaf-4e99-bc03-8f496510fd4e"/>
            </stages>
            <draftCreation>ALLOW_EXCLUSIVE_DRAFTS_ONLY</draftCreation>
        </wcm:workflow>
    </content>
</entry>

HTTP/1.1 201 Created
Content-Type: application/atom+xml
Content-Location: /wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:b9c05b29-66ac-48fa-9ed7-43e3912f3c54</id>
    <title xml:lang="en">MyWorkflow</title>
    <summary xml:lang="en"></summary>
    <wcm:name>MyWorkflow</wcm:name>
    <wcm:type>Workflow</wcm:type>
    <updated>2014-06-03T02:03:24.406Z</updated>
    <wcm:created>2014-06-03T02:03:24.406Z</wcm:created>
    ... some content elided...
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54" xml:lang="en" label="Delete"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/b9c05b29-66ac-48fa-9ed7-43e3912f3c54/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/b9c05b29-66ac-48fa-9ed7-43e3912f3c54/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDe2BE66OK62JCIJMO6M9O6MMG6OHP2MM4753PEJMG6J9P6JS46IHP6JHL6K1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/be3ca1cd-f482-4715-9972-8e683fd0be85" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/b9c05b29-66ac-48fa-9ed7-43e3912f3c54/versions" xml:lang="en" label="Versions"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflow xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <option name="REQUIRE_COMMENT_ON_APPROVAL" enabled="true"/>
            <option name="ALLOW_VALIDATION_FAILURES" enabled="true"/>
            <option name="ALLOW_WORKFLOW_IN_PROJECTS" enabled="false"/>
            <stages>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/434ec120-aaa1-4ad0-a7fd-62a060206fc9"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fca54fb-fcaf-4e99-bc03-8f496510fd4e"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/4d0ff502-0cf4-4a94-9757-f37675202f44"/>
                <reject href="/wps/mycontenthandler/wcmrest/WorkflowStage/4d0ff502-0cf4-4a94-9757-f37675202f44"/>
                <project-exit href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fca54fb-fcaf-4e99-bc03-8f496510fd4e"/>
            </stages>
            <draftCreation>ALLOW_EXCLUSIVE_DRAFTS_ONLY</draftCreation>
        </wcm:workflow>
    </content>
</entry>


```

## Update

A workflow item can be updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed.

```
/Workflow/itemuuid
```

For example:

```

HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>MyWorkflow With A New Name</wcm:name>
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflow xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <stages>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fdaec77-e342-43a1-beb7-1c7ab21ee35f"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/8eba94a5-dda2-46c4-a9f9-bba5ebac05a2"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fbbe443-63f5-49ad-905d-aa54102f377a"/>
            </stages>
            <draftCreation>ALLOW_MULTIPLE_DRAFTS</draftCreation>
        </wcm:workflow>
    </content>
</entry>

HTTP/1.1 200 OK
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>MyWorkflow With A New Name</wcm:name>
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflow xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <stages>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fdaec77-e342-43a1-beb7-1c7ab21ee35f"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/8eba94a5-dda2-46c4-a9f9-bba5ebac05a2"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fbbe443-63f5-49ad-905d-aa54102f377a"/>
            </stages>
            <draftCreation>ALLOW_MULTIPLE_DRAFTS</draftCreation>
        </wcm:workflow>
    </content>
</entry>

```

## Read

A workflow item can be read by sending a GET request to the following URI:

```
/Workflow/itemuuid
```

For example:

```

HTTP/1.1 GET /wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54
Accept: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:b9c05b29-66ac-48fa-9ed7-43e3912f3c54</id>
    <title xml:lang="en">Workflow Create Test</title>
    <summary xml:lang="en"></summary>
    <wcm:name>Workflow Create Test</wcm:name>
    <wcm:type>Workflow</wcm:type>
    <updated>2014-06-03T02:03:24.406Z</updated>
    <wcm:created>2014-06-03T02:03:24.406Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAeI1E83S86KPDCMMCC1JP4MMG6G9P6JM8CMPD6MMCCOHOE3Q0713D23S06O1</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAeI1E83S86KPDCMMCC1JP4MMG6G9P6JM8CMPD6MMCCOHOE3Q0713D23S06O1</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAeI1E83S86KPDCMMCC1JP4MMG6G9P6JM8CMPD6MMCCOHOE3Q0713D23S06O1</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/um/users/profiles/Z9eAeI1E83S86KPDCMMCC1JP4MMG6G9P6JM8CMPD6MMCCOHOE3Q0713D23S06O1</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <link rel="self" href="/wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54" xml:lang="en" label="Delete"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/b9c05b29-66ac-48fa-9ed7-43e3912f3c54/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/b9c05b29-66ac-48fa-9ed7-43e3912f3c54/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDe2BE66OK62JCIJMO6M9O6MMG6OHP2MM4753PEJMG6J9P6JS46IHP6JHL6K1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/be3ca1cd-f482-4715-9972-8e683fd0be85" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/b9c05b29-66ac-48fa-9ed7-43e3912f3c54/versions" xml:lang="en" label="Versions"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflow xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <option name="REQUIRE_COMMENT_ON_APPROVAL" enabled="true"/>
            <option name="ALLOW_VALIDATION_FAILURES" enabled="true"/>
            <option name="ALLOW_WORKFLOW_IN_PROJECTS" enabled="false"/>
            <stages>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/434ec120-aaa1-4ad0-a7fd-62a060206fc9"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fca54fb-fcaf-4e99-bc03-8f496510fd4e"/>
                <stage href="/wps/mycontenthandler/wcmrest/WorkflowStage/4d0ff502-0cf4-4a94-9757-f37675202f44"/>
                <reject href="/wps/mycontenthandler/wcmrest/WorkflowStage/4d0ff502-0cf4-4a94-9757-f37675202f44"/>
                <project-exit href="/wps/mycontenthandler/wcmrest/WorkflowStage/9fca54fb-fcaf-4e99-bc03-8f496510fd4e"/>
            </stages>
            <draftCreation>ALLOW_EXCLUSIVE_DRAFTS_ONLY</draftCreation>
        </wcm:workflow>
    </content>
</entry>

```

## Delete

A workflow item can be deleted by sending a DELETE request to the following URI:

```
/Workflow/itemuuid
```

For example:

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/Workflow/b9c05b29-66ac-48fa-9ed7-43e3912f3c54

HTTP/1.1 200 OK
```

**Parent topic:**[How to manage web content items by using REST ](../wcm/wcm_rest_crud.md)

