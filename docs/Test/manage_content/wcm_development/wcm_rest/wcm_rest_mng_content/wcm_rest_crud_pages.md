# How to use REST with managed pages

You can use the Web Content Manager REST service to read managed pages.

## Read

A managed page can be read by sending a GET request to the following URI:

```
/PortalPage/<itemuuid>
```

For example:

```
GET /wps/mycontenthandler/wcmrest/PortalPage/6c523449-e919-41a8-a8d0-f8b1ea207af1 HTTP/1.0
HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <atom:id>wcmrest:6c523449-e919-41a8-a8d0-f8b1ea207af1</atom:id>
    <atom:title>RestPortalPage1</atom:title>   
 		<atom:link atom:rel="edit" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/PortalPage/6c523449-e919-41a8-a8d0-f8b1ea207af1"/>
    <atom:link atom:rel="library" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/item/d07f0a12-3801-465e-bc20-eaec2cecf5cb"/>   
 		<atom:link atom:rel="workflow-stage" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/item/c5cb286b-b31b-4b9a-b8c9-9d0cb4311ae3"/>
    <atom:link atom:rel="workflow" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/item/2165c8e4-1fbe-4f72-9ffb-4a43888bfa87"/>
    <atom:link atom:rel="create-draft" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/item/6c523449-e919-41a8-a8d0-f8b1ea207af1/create-draft"/>
 		<atom:link atom:rel="next-stage" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/item/6c523449-e919-41a8-a8d0-f8b1ea207af1/next-stage"/>
    <atom:link atom:rel="previous-stage" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/item/6c523449-e919-41a8-a8d0-f8b1ea207af1/previous-stage"/>
    <atom:link atom:rel="restart" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/item/6c523449-e919-41a8-a8d0-f8b1ea207af1/restart"/> 
 		<atom:link atom:rel="versions" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/item/6c523449-e919-41a8-a8d0-f8b1ea207af1/versions"/>
 		<atom:link atom:rel="elements" atom:href="/wps/mycontenthandler/!ut/p/wcmrest/PortalPage/6c523449-e919-41a8-a8d0-f8b1ea207af1/elements"/>
   	<atom:updated>2011-06-30T11:37:27.921Z</atom:updated>
   	<wcm:name>RestPortalPage1</wcm:name>
   	<wcm:description>RestPortalPage1 Description</wcm:description>
   	<wcm:type>PortalPage</wcm:type>
  	<atom:category atom:scheme="wcmrest:workflowState">
        <atom:term>PUBLISHED</atom:term>
        <atom:label>None</atom:label>
    </atom:category>
    <atom:author>
        <atom:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</atom:distinguishedName>
        <atom:uri>/um/users/profiles/uid=wpsadmin,o=defaultWIMFileBasedRealm</atom:uri>
        <atom:name>wpsadmin</atom:name>
    </atom:author>
    <atom:owner>
        <atom:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</atom:distinguishedName>
        <atom:uri>/um/users/profiles/uid=wpsadmin,o=defaultWIMFileBasedRealm</atom:uri>
        <atom:name>wpsadmin</atom:name>
    </atom:owner>
</atom:entry>

```


