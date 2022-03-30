# How to use REST with custom workflow actions 

You can use the Web Content Manager REST service to create, read, update, and delete custom workflow actions.

## Locating Installed Actions

To create a custom workflow action, you need to first identify the installed action that is run by that workflow action. There are two ways to do locate installed actions.

1.  List all the installed custom workflow actions by sending a GET request to the following URI:

**Note:** Each entry has a link with the "alternate" relation. This link can be used to specify the action to use when you create a custom workflow action.

    ```
    /CustomWorkflowAction/available-actions
    ```

    For example:

    ```
    
    
    HTTP/1.1 GET /wps/mycontenthandler/wcmrest/CustomWorkflowAction/available-actions
      
    HTTP 200 OK
    
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:CustomWorkflowAction/available-actions</id>
        <title xml:lang="en">All Custom Workflow Actions</title>
        <updated>2014-06-26T01:17:46.022Z</updated>
        <entry>
            <title xml:lang="en">ML Localize</title>
            <summary xml:lang="en">Notifies the base locale owner of changes to localized copies and performs automatic localization of modified base locale documents</summary>
            <wcm:name>com.ibm.workplace.wcm.ml.workflowactions.LocalizeMLCustomWorkflowAction</wcm:name>
            <link rel="alternate" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.LocalizeMLCustomWorkflowAction" label="Read"/>
        </entry>
        <entry>
            <title xml:lang="en">ML Regionalize</title>
            <summary xml:lang="en">
               Notifies the base locale owner of changes to regionalized copies and performs 
               automatic regionalization of modified base locale documents
            </summary>
            <wcm:name>com.ibm.workplace.wcm.ml.workflowactions.RegionalizeMLCustomWorkflowAction</wcm:name>
            <link rel="alternate" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.RegionalizeMLCustomWorkflowAction" label="Read"/>
        </entry>
        <entry>
            <title xml:lang="en">Legacy ML Sync Publish Implementation</title>
            <summary xml:lang="en">
               Ensures that ML versions of the same document are published at the same time. 
               This is the legacy implementation of synchronized publishing, you are recommended to use the new Projects-based 
               synchronized publishing instead
            </summary>
            <wcm:name>com.ibm.workplace.wcm.ml.workflowactions.SyncPublishMLCustomWorkflowAction</wcm:name>
            <link rel="alternate" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.SyncPublishMLCustomWorkflowAction" label="Read"/>
        </entry>
        <entry>
            <title xml:lang="en">ML Sync Expire</title>
            <summary xml:lang="en">
               Ensures that ML versions of the same document are expired at the same time
            </summary>
            <wcm:name>com.ibm.workplace.wcm.ml.workflowactions.SyncExpireMLCustomWorkflowAction</wcm:name>
            <link rel="alternate" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.SyncExpireMLCustomWorkflowAction" label="Read"/>
        </entry>
        <entry>
            <title xml:lang="en">ML Sync Delete</title>
            <summary xml:lang="en">Ensures that ML versions of the same document are deleted at the same time</summary>
            <wcm:name>com.ibm.workplace.wcm.ml.workflowactions.SyncDeleteMLCustomWorkflowAction</wcm:name>
            <link rel="alternate" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.SyncDeleteMLCustomWorkflowAction" label="Read"/>
        </entry>
        <entry>
            <title xml:lang="en">Update ML Conf File Cache</title>
            <summary xml:lang="en">Update the ML Configuration File cache when a Configuration File is updated</summary>
            <wcm:name>com.ibm.workplace.wcm.ml.workflowactions.UpdateMLConfFileCacheCustomWorkflowAction</wcm:name>
            <link rel="alternate" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.UpdateMLConfFileCacheCustomWorkflowAction" label="Read"/>
        </entry>
        <entry>
            <title xml:lang="en">ML Workflow Switcher</title>
            <summary xml:lang="en">Used to switch a document back to its original workflow (as assigned by the ML Workflow engine)</summary>
            <wcm:name>com.ibm.workplace.wcm.ml.workflowactions.WorkflowSwitcherWorkflowAction</wcm:name>
            <link rel="alternate" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.WorkflowSwitcherWorkflowAction" label="Read"/>
        </entry>
        <entry>
            <title xml:lang="en">ML Next Stage</title>
            <summary xml:lang="en">Used to move a document to the next stage in the workflow</summary>
            <wcm:name>com.ibm.workplace.wcm.ml.workflowactions.NextStageWorkflowAction</wcm:name>
            <link rel="alternate" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.NextStageWorkflowAction" label="Read"/>
        </entry>
    </feed>
    
    ```

2.  List all the installed custom workflow action factories, and in turn the custom actions that are handled by that factory.

    The list of available custom workflow action factories can be obtained by sending a GET request to the following URI. Each entry in the returned feed provides a description of the factory, and a link to all the custom actions associated with that factory that uses the "actions" link relation.

    ```
    /CustomWorkflowActionFactory
    ```

    For example:

    ```
    
    
    HTTP/1.1 GET /wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory
    
    HTTP 200 OK
    
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:CustomWorkflowActionFactory</id>
        <title xml:lang="en">Custom Workflow Action Factories</title>
        <updated>2014-06-26T01:26:38.340Z</updated>
        <entry>
            <id>wcmrest:MLCustomWorkflowActionFactory</id>
            <title xml:lang="en">ML Custom Workflow Action Factory</title>
            <wcm:name>MLCustomWorkflowActionFactory</wcm:name>
            <link rel="actions" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions"/>
            <content/>
        </entry>
    </feed>
    
    ```

    The list of actions that are associated with a custom workflow action factory are obtained by sending a GET request to the following URI.

    **Note:** Each entry has a link with the "alternate" relation. This link is used to specify the action when you create a custom workflow action.

    ```
    
    /CustomWorkflowActionFactory/name-of-the-factory/actions
    ```

    For example:

    ```
    HTTP/1.1 GET /wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions
    
    HTTP 200 OK
    
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions</id>
        <title xml:lang="en">ML Custom Workflow Action Factory</title>
        <updated>2014-06-26T01:30:16.491Z</updated>
        <entry>
            <title xml:lang="en">ML Localize</title>
            <summary xml:lang="en">
               Notifies the base locale owner of changes to localized copies and performs 
               automatic localization of modified base locale documents
            </summary>
            <wcm:name>com.ibm.workplace.wcm.ml.workflowactions.LocalizeMLCustomWorkflowAction</wcm:name>
            <link rel="alternate" href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.LocalizeMLCustomWorkflowAction" label="Read"/>
        </entry>
        ... some entries omitted ...
    </feed>
    
    ```


## Create

Custom workflow actions can be created by sending a POST request to the following URI:

```
/CustomWorkflowAction
```

For example:

```


HTTP/1.1 POST /wps/mycontenthandler/wcmrest/CustomWorkflowAction

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <title>MLS Next Stage Workflow Action</title>
    <wcm:name>MLS Next Stage Workflow Action</wcm:name>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!muAe8T8GIzS4EJeiF9a_sw/wcmrest/Library/03da7ddc-1bc9-47cd-ab69-b06f23a3f284" />
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:customAction xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <action href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.NextStageWorkflowAction"/>
        </wcm:customAction>
    </content>
</entry>

HTTP/1.1 201 Created

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:33b378f9-78be-4457-a5ec-20c9f2848000</id>
    <title xml:lang="en">MLS Next Stage Workflow Action</title>
    <summary xml:lang="en"></summary>
    <wcm:name>MLS Next Stage Workflow Action</wcm:name>
    <wcm:type>CustomWorkflowAction</wcm:type>
    ... some content elided ...
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:customAction xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <dateType>CUSTOM_ACTION_DATE</dateType>
            <action href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.NextStageWorkflowAction"/>
        </wcm:customAction>
    </content>
</entry>

```

## Update

A custom workflow action can be updated by sending a PUT request to the following URI:

```
/CustomWorkflowAction/action-id
```

For example:

```


HTTP/1.1 PUT /wps/mycontenthandler/wcmrest/CustomWorkflowAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    ... some content elided ...
     <content type="application/vnd.ibm.wcm+xml">
        <wcm:customAction xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <dateType>SPECIFIED_DATE</dateType>
            <date>2014-06-26T01:48:00.000Z</date>
            <action href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.NextStageWorkflowAction"/>
        </wcm:customAction>
    </content>
</entry>

HTTP/1.1 200 OK

```

## Read

Custom workflow actions can be read by sending a GET request to the following URI:

```
/CustomWorkflowAction/action-id
```

For example:

```


HTTP/1.1 GET /wps/mycontenthandler/wcmrest/CustomWorkflowAction/33b378f9-78be-4457-a5ec-20c9f2848000
Accept: application/atom+xml

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:33b378f9-78be-4457-a5ec-20c9f2848000</id>
    <title xml:lang="en">My Test Action</title>
    <summary xml:lang="en"></summary>
    <wcm:name>My Test Action</wcm:name>
    <wcm:type>CustomWorkflowAction</wcm:type>
    <updated>2014-06-26T01:48:54.966Z</updated>
    <wcm:created>2014-06-26T01:48:54.965Z</wcm:created>
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
    <link rel="self" href="/wps/mycontenthandler/wcmrest/CustomWorkflowAction/33b378f9-78be-4457-a5ec-20c9f2848000" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/wcmrest/CustomWorkflowAction/33b378f9-78be-4457-a5ec-20c9f2848000" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/wcmrest/CustomWorkflowAction/33b378f9-78be-4457-a5ec-20c9f2848000" xml:lang="en" label="Delete"/>
    <link rel="create-draft" href="/wps/mycontenthandler/wcmrest/item/33b378f9-78be-4457-a5ec-20c9f2848000/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/wcmrest/item/33b378f9-78be-4457-a5ec-20c9f2848000/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/ac/access:oid:Z6QReDeJPC4MPS6OHPIJMS6OHOAMMG6K9DEJM4CL9P6MM86GPOI3J96O1DG3O06G1" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/f68ddb0c-c06b-43a9-84fd-d43552980e46" xml:lang="en" label="Library"/>
    <link rel="versions" href="/wps/mycontenthandler/wcmrest/item/33b378f9-78be-4457-a5ec-20c9f2848000/versions" xml:lang="en" label="Versions"/>
    <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/CustomWorkflowAction/33b378f9-78be-4457-a5ec-20c9f2848000" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:customAction xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <dateType>CUSTOM_ACTION_DATE</dateType>
            <action href="/wps/mycontenthandler/wcmrest/CustomWorkflowActionFactory/MLCustomWorkflowActionFactory/actions/com.ibm.workplace.wcm.ml.workflowactions.NextStageWorkflowAction"/>
        </wcm:customAction>
    </content>
</entry>

```

## Delete

A custom action can be deleted by sending a DELETE request to the following URI:

```
/CustomWorkflowAction/action-id
```

For example:

```
HTTP/1.1 DELETE /wps/mycontenthandler/wcmrest/CustomWorkflowAction/abc4c24a-3540-4ae3-8ba6-f2f82a977046

HTTP/1.1 200 OK
```

**Parent topic:**[How to use REST with workflow actions ](../wcm/wcm_rest_crud_workflow_actions.md)

