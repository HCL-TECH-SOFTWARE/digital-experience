# How to use REST with projects

You can use the REST services for Web Content Manager to create and work with projects.

## Creating a project

To create a project, send a POST request that contains the appropriate data to the following URI.

```
/project/
```

For example:

```
POST /wps/mycontenthandler/wcmrest/Project HTTP/1.0
Content-type : application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <title>SampleProjectTitle</title>
    <wcm:name>SampleProjectName</wcm:name>
    <wcm:description>SampleProjectDescription</wcm:description>
</entry>


HTTP/1.0 Created
Content-type: application/atom+xml; type=entry
Content-location: /wps/mycontenthandler/!ut/p/wcmrest/Project/80d503aa-fec5-477c-a8b2-372897982af

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>80d503aa-fec5-477c-a8b2-372897982afe</id>
    <title>SampleProjectTitle</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/Project/80d503aa-fec5-477c-a8b2-372897982afe"/>
    <link rel="add-item" href="/wps/mycontenthandler/!ut/p/wcmrest/Project/80d503aa-fec5-477c-a8b2-372897982afe/additem"/>
    <link rel="remove-item" href="/wps/mycontenthandler/!ut/p/wcmrest/Project/80d503aa-fec5-477c-a8b2-372897982afe/removeitem"/>
    <updated>2011-05-30T06:15:29.952Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:name>SampleProjectName</wcm:name>
    <wcm:description>SampleProjectDescription</wcm:description>
    <wcm:type>Project</wcm:type>
</entry>
```

## Creating a project from a project template

From CF202 release, you can create a project based on a project template including access control and other settings.

To use this feature add a parameter `?projectTemplate=`<ID of the project template\> to the Post request.

For example:

```
POST /wps/mycontenthandler/wcmrest/Project?projectTemplate=22ebf62a-bd18-4cb9-ae2f-851c08fb8bbc
```

## Reading a project

To read a project, send a GET request that contains the appropriate data to the following URI.

```
/project/item-uuid
```

For example:

```
GET /wps/mycontenthandler/wcmrest/Project/80d503aa-fec5-477c-a8b2-372897982afe HTTP/1.1


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>80d503aa-fec5-477c-a8b2-372897982afe</id>
    <title>SampleProjectTitle</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/Project/80d503aa-fec5-477c-a8b2-372897982afe"/>
    <link rel="add-item" href="/wps/mycontenthandler/!ut/p/wcmrest/Project/80d503aa-fec5-477c-a8b2-372897982afe/additem"/>
    <link rel="remove-item" href="/wps/mycontenthandler/!ut/p/wcmrest/Project/80d503aa-fec5-477c-a8b2-372897982afe/removeitem"/>
    <updated>2011-05-30T06:15:29.952Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <email></email>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <email></email>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:name>SampleProjectName</wcm:name>
    <wcm:description>SampleProjectDescription</wcm:description>
    <wcm:type>Project</wcm:type>
</entry>
```

## Deleting a project

To delete a project, send a DELETE request that contains the appropriate data to the following URI.

```
/project/item-uuid
```

For example:

```
HTTP/1.1 DELETE
http://host:port/wps/mycontenthandler/wcmrest/Project/35b9120a-17d0-4dcb-b0ba-b034e34b50a6
Accept-Type: application/atom+xml

200 OK
```

## Updating a project

To update a project, send a PUT request that contains the appropriate data to the following URI.

```
/project/item-uuid
```

For example:

```
HTTP/1.1 PUT
http://host:port/wps/mycontenthandler/wcmrest/Project/35b9120a-17d0-4dcb-b0ba-b034e34b50a6
Accept-Type: application/atom+xml

200 OK
```

## Adding an item to a project

To add an item to a project, update the item by using a PUT request that specifies a link with relation "project" specifying the project to add the item to. For example:

```
HTTP/1.1 PUT
http://host:port/wps/mycontenthandler/!ut/p/digest!MetYLHV_M5sJbvslxI8twA/
wcmrest/LibraryTextComponent/fd34a8bf-7ca1-499c-80ab-acdc2f33cf3e</a>
Accept-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm">
    ... data ...
<link rel="project" href="/wps/mycontenthandler/wcmrest/Project/77d08cf6-88f6-4577-a929-34d43a8e150e" />
... data...
</entry>

200 OK
```

!!! note
    If you use REST inside a Portal project context, posting to the create-draft link relation creates the draft in a project.

## Removing an item from a project

To remove an item from a project, update the item by using a PUT request without specifying the project link relation. For example:

```
HTTP/1.1 PUT
http://host:port/wps/mycontenthandler/!ut/p/digest!MetYLHV_M5sJbvslxI8twA/
wcmrest/LibraryTextComponent/fd34a8bf-7ca1-499c-80ab-acdc2f33cf3e</a>
Accept-Type: application/atom+xml

200 OK
```

## Submitting a project for review

Editors of a project can submit a project for review by sending a POST request that contains the appropriate data to the following URI:

```
/item/project-uuid/submit-for-review
```

For example:

```
HTTP/1.1 POST 
http://host:port/wps/mycontenthandler/wcmrest/item/project-uuid/submit-for-review
Accept-Type: application/atom+xml

201 Created
```

## Withdrawing a project from review

Editors of a project can withdraw a project from review by sending a POST request that contains the appropriate data to the following URI:

```
/item/project-uuid/withdraw-from-review
```

For example:

```
HTTP/1.1 POST 
http://host:port/wps/mycontenthandler/wcmrest/item/project-uuid/withdraw-from-review
Accept-Type: application/atom+xml

201 Created
```

When withdrawn, the project returns to an active state.

## Approving a project

Approvers of a project can approve a project by sending a POST request that contains the appropriate data to the following URI:

```
/item/project-uuid/approve
```

For example:

```
HTTP/1.1 POST 
http://host:port/wps/mycontenthandler/wcmrest/item/project-uuid/approve
Accept-Type: application/atom+xml

201 Created
```

When approved, the project is ready to be published.

## Rejecting a project

Approvers of a project can reject project approval by sending a POST request that contains the appropriate data to the following URI:

```
/project/project-uuid/reject
```

For example:

```
HTTP/1.1 POST 
http://host:port/wps/mycontenthandler/wcmrest/Project/PROJECT-UUID/reject
Accept-Type: application/atom+xml

201 Created
```

When rejected, the project returns to an active state.

## Withdrawing approval for a project

Approvers of a project can withdraw approval for a project by sending a POST request that contains the appropriate data to the following URI:

```
/project/project-uuid/withdraw-approval
```

For example:

```
HTTP/1.1 POST 
http://host:port/wps/mycontenthandler/wcmrest/Project/PROJECT-UUID/withdraw-approval
Accept-Type: application/atom+xml

201 Created
```

Withdrawing approval does not change the state of the project, which remains in review.


