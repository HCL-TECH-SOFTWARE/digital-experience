# How to use REST with workflow stages

You can use the Web Content Manager REST service to create, read, update, and delete workflow stages.

## Create

A workflow stage is created by sending a POST request to the following URI with an Atom entry that represents the workflow item:

```
/WorkflowStage
```

For example:

```


HTTP/1.1 POST /wps/mycontenthandler/wcmrest/WorkflowStage
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>WorkflowStage Create With Access Control Test</wcm:name>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!_Nw2dNJ9qG0BrJuC97Bijw/wcmrest/Library/3e22085a-2ebb-423d-89c2-53d3c4aa593f"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflowStage xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <actions>
                <entering href="/wps/mycontenthandler/wcmrest/item/95b0e3d2-ae2b-431a-bd39-31f5c14f5726"/>
                <entering href="/wps/mycontenthandler/wcmrest/item/24fef197-3b88-45aa-88ef-c49623d95195"/>
                <exiting href="/wps/mycontenthandler/wcmrest/item/24fef197-3b88-45aa-88ef-c49623d95195"/>
                <exiting href="/wps/mycontenthandler/wcmrest/item/95b0e3d2-ae2b-431a-bd39-31f5c14f5726"/>
            </actions>
            <jointApproval enabled="true">
                <approver>
                    <distinguishedName>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:name>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</atom:name>
                </approver>
                <approver>
                    <distinguishedName>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:name>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</atom:name>
                </approver>
            </jointApproval>
            <workflowDefinedAccess>
                <role name="User">
                    <member>
                        <distinguishedName>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                        <atom:name>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</atom:name>
                    </member>
                    <member>
                        <distinguishedName>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</distinguishedName>
                        <atom:name>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</atom:name>
                    </member>
                </role>
                <role name="Manager">
                    <member>
                        <distinguishedName>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                        <atom:name>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</atom:name>
                    </member>
                    <member>
                        <distinguishedName>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</distinguishedName>
                        <atom:name>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</atom:name>
                    </member>
                </role>
            </workflowDefinedAccess>
        </wcm:workflowStage>
    </content>
</entry>




HTTP/1.1 201 Created
Content-Type: application/atom+xml
Content-Location: /wps/mycontenthandler/wcmrest/WorkflowStage/141793eb-afa7-428e-bb7b-070a25ee3d7c

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    ... some content elided ...
    <wcm:name>WorkflowStage Create With Access Control Test</wcm:name>
    ... some content elided ...
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!_Nw2dNJ9qG0BrJuC97Bijw/wcmrest/Library/3e22085a-2ebb-423d-89c2-53d3c4aa593f"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflowStage xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <actions>
                <entering href="/wps/mycontenthandler/wcmrest/item/95b0e3d2-ae2b-431a-bd39-31f5c14f5726"/>
                <entering href="/wps/mycontenthandler/wcmrest/item/24fef197-3b88-45aa-88ef-c49623d95195"/>
                <exiting href="/wps/mycontenthandler/wcmrest/item/24fef197-3b88-45aa-88ef-c49623d95195"/>
                <exiting href="/wps/mycontenthandler/wcmrest/item/95b0e3d2-ae2b-431a-bd39-31f5c14f5726"/>
            </actions>
            <jointApproval enabled="true">
                <approver>
                    <distinguishedName>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:name>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</atom:name>
                </approver>
                <approver>
                    <distinguishedName>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</distinguishedName>
                    <atom:name>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</atom:name>
                </approver>
            </jointApproval>
            <workflowDefinedAccess>
                <role name="User">
                    <member>
                        <distinguishedName>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                        <atom:name>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</atom:name>
                    </member>
                    <member>
                        <distinguishedName>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</distinguishedName>
                        <atom:name>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</atom:name>
                    </member>
                </role>
                <role name="Manager">
                    <member>
                        <distinguishedName>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</distinguishedName>
                        <atom:name>uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm</atom:name>
                    </member>
                    <member>
                        <distinguishedName>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</distinguishedName>
                        <atom:name>uid=WCMUT_Editor_B,o=defaultWIMFileBasedRealm</atom:name>
                    </member>
                </role>
            </workflowDefinedAccess>
        </wcm:workflowStage>
    </content>
</entry>


```

## Update

A workflow stage is updated by sending a PUT request to the following URI with an Atom entry that includes the fields on the item that need to be changed.

```
/WorkflowStage/workflow-stage-id
```

For example:

```


HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/WorkflowStage/141793eb-afa7-428e-bb7b-070a25ee3d7c
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflowStage xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <option name="ENABLE_PREVIOUS_STAGE_FOR_REVIEWERS" enabled="false"/>
            <option name="REQUIRE_COMMENT_ON_APPROVAL" enabled="false"/>
            <actions>
                <entering href="/wps/mycontenthandler/wcmrest/item/a9198c77-b5fa-4205-aa1a-e12d4a7ad832"/>
            </actions>
            <jointApproval enabled="false"/>
            <workflowDefinedAccess>
                <role name="User" inheritance="true" propagation="true"/>
                <role name="PrivilegedUser" inheritance="true" propagation="true"/>
                <role name="MarkupEditor" inheritance="true" propagation="true"/>
                <role name="Reviewer" inheritance="true" propagation="true"/>
                <role name="DraftCreator" inheritance="true" propagation="true"/>
                <role name="Contributor" inheritance="true" propagation="true"/>
                <role name="Editor" inheritance="true" propagation="true"/>
                <role name="Manager" inheritance="true" propagation="true"/>
                <role name="SecurityAdmin" inheritance="true" propagation="true"/>
                <role name="Admin" inheritance="true" propagation="true"/>
            </workflowDefinedAccess>
        </wcm:workflowStage>
    </content>
</entry>

HTTP/1.1 200 OK
Content-Type: application/atom+xml

```

## Read

A workflow stage is read by sending a GET request to the following URI:

```
/WorkflowStage/workflow-stage-id
```

For example:

```


HTTP/1.1 GET /wps/mycontenthandler/wcmrest/WorkflowStage/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80
Accept: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:7b40f5b6-bf52-4b9e-8062-b0755aaf1f80</id>
    <title xml:lang="en">Publish Stage</title>
    <wcm:displayTitle xml:lang="en">Publish Stage</wcm:displayTitle>
    <wcm:titleTextProviderName>com.ibm.wps.plugins.WebResourcesTextProvider</wcm:titleTextProviderName>
    <wcm:titleTextProviderKey>OOB_PUBLISH_WORKFLOW_STAGE</wcm:titleTextProviderKey>
    <summary xml:lang="en"></summary>
    <wcm:name>Publish Stage</wcm:name>
    <wcm:type>WorkflowStage</wcm:type>
    <updated>2014-04-24T01:31:59.685Z</updated>
    <wcm:created>2010-02-01T02:04:00.686Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/WorkflowStage/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/WorkflowStage/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/WorkflowStage/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80" xml:lang="en" label="Delete"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDeNHO83OOCLHOCJM8C6BD4JMG62BEAMM07GHD4JM8CGPDAJQ4C1JP23J17G1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/f68ddb0c-c06b-43a9-84fd-d43552980e46" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80/versions" xml:lang="en" label="Versions"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/WorkflowStage/7b40f5b6-bf52-4b9e-8062-b0755aaf1f80" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflowStage xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <option name="ENABLE_PREVIOUS_STAGE_FOR_REVIEWERS" enabled="false"/>
            <option name="REQUIRE_COMMENT_ON_APPROVAL" enabled="false"/>
            <actions>
                <entering href="/wps/mycontenthandler/wcmrest/item/b30c40a2-8962-4393-b277-4a64f7a149af"/>
            </actions>
            <jointApproval enabled="false"/>
            <workflowDefinedAccess>
                <role name="User" inheritance="true" propagation="true">
                    <member>
                        <distinguishedName>all_auth_portal_users</distinguishedName>
                        <atom:uri>/wps/mycontenthandler/um/groups/profiles/Z8eAe13RO6G4CL3TGMIPDKBQ6MGHE53P02OTDI3T26M14LRSA6PDE</atom:uri>
                        <atom:name>[all authenticated portal users]</atom:name>
                    </member>
                    <member>
                        <distinguishedName>anonymous_user</distinguishedName>
                        <atom:uri>/wps/mycontenthandler/um/users/profiles/Z9eAe1JRU6N5FDRRANP14GRR47Q5CC38ANPLCI3</atom:uri>
                        <atom:name>[anonymous portal user]</atom:name>
                    </member>
                </role>
                <role name="PrivilegedUser" inheritance="true" propagation="true"/>
                <role name="MarkupEditor" inheritance="true" propagation="true"/>
                <role name="Reviewer" inheritance="true" propagation="true"/>
                <role name="DraftCreator" inheritance="true" propagation="true"/>
                <role name="Contributor" inheritance="true" propagation="true"/>
                <role name="Editor" inheritance="true" propagation="true">
                    <member>
                        <distinguishedName>author_user</distinguishedName>
                        <atom:name>[authors]</atom:name>
                    </member>
                </role>
                <role name="Manager" inheritance="true" propagation="true"/>
                <role name="SecurityAdmin" inheritance="true" propagation="true"/>
                <role name="Admin" inheritance="true" propagation="true"/>
            </workflowDefinedAccess>
        </wcm:workflowStage>
    </content>
</entry>

```

## Delete

A workflow item can be deleted by sending a DELETE request to the following URI:

```
/WorkflowStage/workflow-stage-id
```

For example:

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/WorkflowStage/b9c05b29-66ac-48fa-9ed7-43e3912f3c54

HTTP/1.1 200 OK
```


