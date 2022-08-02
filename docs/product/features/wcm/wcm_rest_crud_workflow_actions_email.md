# How to use REST with email workflow actions

You can use the Web Content Manager REST service to create, read, update, and delete email workflow actions.

## Create

An email action can be created by sending a POST request to the following URI:

```
/EmailAction
```

For example:

```


HTTP/1.1 POST /wps/mycontenthandler/wcmrest/EmailAction
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>My Email Action</wcm:name>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/1f5955c8-38e7-41f9-9029-5c4c0b151976" xml:lang="en" label="Library"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:emailAction xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <dateType>GENERAL_DATE_ONE</dateType>
            <offset unit="MONTH" amount="1" direction="AFTER">
                <time-of-day>11:53:00</time-of-day>
            </offset>
            <recipients>
                <stageApprovers>true</stageApprovers>
                <authors of-item="true" of-referencing-items="true"/>
                <owners of-item="true" of-referencing-items="true"/>
                <additional>
                    <distinguishedName>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:name>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</atom:name>
                </additional>
            </recipients>
            <emailText>this is some email text</emailText>
        </wcm:emailAction>
    </content>
</entry>

HTTP/1.1 201 Created

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    ... some content elided ...
    <wcm:name>My Email Action</wcm:name>
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:emailAction xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <dateType>GENERAL_DATE_ONE</dateType>
            <offset unit="MONTH" amount="1" direction="AFTER">
                <time-of-day>11:53:00</time-of-day>
            </offset>
            <recipients>
                <stageApprovers>true</stageApprovers>
                <authors of-item="true" of-referencing-items="true"/>
                <owners of-item="true" of-referencing-items="true"/>
                <additional>
                    <distinguishedName>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:uri>/wps/mycontenthandler/!ut/p/digest!TPAVlKazgS66elu1F8nIzA/um/users/profiles/Z9eAe5RO8JOCCKHP4MMOCNPOAMMG6M9O6JM07I9CCMMC64BP8JOOCK1C4MGLCI1</atom:uri>
                    <atom:name>WCMUT_Editor_A WCMUT_Editor_A</atom:name>
                </additional>
            </recipients>
            <emailText>this is some email text</emailText>
        </wcm:emailAction>
    </content>
</entry>

```

## Update

An email action can be updated by sending a PUT request to the following URI:

```
/EmailAction/action-id
```

For example:

```


HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/EmailAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:emailAction xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <dateType>DATE_ENTERED</dateType>
            <recipients>
                <stageApprovers>false</stageApprovers>
                <authors of-item="false" of-referencing-items="false"/>
                <owners of-item="false" of-referencing-items="false"/>
                <additional>
                    <distinguishedName>uid=WCMUT_Contributor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:uri>/wps/mycontenthandler/um/users/profiles/Z9eAeJHPGJP86M9EAMMG6K9PAMMG62RDGJM4C1JP0JM06IHP4JPK61RDCMIP6K1</atom:uri>
                    <atom:name>WCMUT_Contributor_A WCMUT_Contributor_A</atom:name>
                </additional>
                <additional>
                    <distinguishedName>uid=WCMUT_Contributor_B,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:uri>/wps/mycontenthandler/um/users/profiles/Z9eAeKPD83H16JHC2JM47KPOCJMG6IHC6MM8C3JCIJMOC4BEAMR06N9E8MQKC63</atom:uri>
                    <atom:name>WCMUT_Contributor_B WCMUT_Contributor_B</atom:name>
                </additional>
            </recipients>
        </wcm:emailAction>
    </content>
</entry>

HTTP/1.1 200 OK

```

## Read

An email action can be read by sending a GET request to the following URI:

```
/EmailAction/action-id
```

For example:

```


HTTP/1.1 GET /wps/mycontenthandler/wcmrest/EmailAction/64c1a38f-54e9-4852-b1e0-a52dbf40d494
Accept: application/atom+xml

HTTP/1.1 200 OK


<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:64c1a38f-54e9-4852-b1e0-a52dbf40d494</id>
    <title xml:lang="en">My Email Action</title>
    <summary xml:lang="en"></summary>
    <wcm:name>My Email Action</wcm:name>
    <wcm:type>EmailAction</wcm:type>
    <updated>2014-06-24T01:54:38.593Z</updated>
    <wcm:created>2014-06-24T01:54:38.593Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/EmailAction/64c1a38f-54e9-4852-b1e0-a52dbf40d494" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/EmailAction/64c1a38f-54e9-4852-b1e0-a52dbf40d494" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/EmailAction/64c1a38f-54e9-4852-b1e0-a52dbf40d494" xml:lang="en" label="Delete"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/64c1a38f-54e9-4852-b1e0-a52dbf40d494/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/64c1a38f-54e9-4852-b1e0-a52dbf40d494/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDeM1D6MO4CJ1ECMMK6K9PIJMG6O9D4JM8CH9P0JM4CLHC86HPCK1C86Q47K1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/790b8ca6-5d89-4f37-9052-783dd580f860" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/64c1a38f-54e9-4852-b1e0-a52dbf40d494/versions" xml:lang="en" label="Versions"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/EmailAction/64c1a38f-54e9-4852-b1e0-a52dbf40d494" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:emailAction xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <dateType>GENERAL_DATE_ONE</dateType>
            <offset unit="MONTH" amount="1" direction="AFTER">
                <time-of-day>11:53:00</time-of-day>
            </offset>
            <recipients>
                <stageApprovers>true</stageApprovers>
                <authors of-item="true" of-referencing-items="true"/>
                <owners of-item="true" of-referencing-items="true"/>
                <additional>
                    <distinguishedName>uid=WCMUT_Contributor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:uri>/wps/mycontenthandler/um/users/profiles/Z9eAeJHPGJP86M9EAMMG6K9PAMMG62RDGJM4C1JP0JM06IHP4JPK61RDCMIP6K1</atom:uri>
                    <atom:name>WCMUT_Contributor_A WCMUT_Contributor_A</atom:name>
                </additional>
                <additional>
                    <distinguishedName>uid=WCMUT_Contributor_B,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:uri>/wps/mycontenthandler/um/users/profiles/Z9eAeKPD83H16JHC2JM47KPOCJMG6IHC6MM8C3JCIJMOC4BEAMR06N9E8MQKC63</atom:uri>
                    <atom:name>WCMUT_Contributor_B WCMUT_Contributor_B</atom:name>
                </additional>
            </recipients>
        </wcm:emailAction>
    </content>
</entry>

```

## Delete

An email action can be deleted by sending a DELETE request to the following URI:

```
/EmailAction/action-id
```

For example:

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/ScheduledMoveAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046

HTTP/1.1 200 OK
```

**Parent topic:**[How to use REST with workflow actions](../wcm/wcm_rest_crud_workflow_actions.md)

