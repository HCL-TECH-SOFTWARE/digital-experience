# Custom URI syntax

Understand the syntax for creating a custom URI to access a piece of content.

## POC URI Syntax

Construct a POC URI to address Connections content. The syntax has this form:

```
connections:atom\_uri&commID=community\_id&service=service\_name&type=content\_type
```

!!!note
    commID, service, and type must be specified as parameters. Parameter names are case sensitive.

## Parameters

-   **connections**

    connections is the scheme that identifies the type of content the URI is locating.

-   **atom\_uri**

    The path portion of the URI used to fetch the atom document for the content.

-   **commID**

    (optional) Community ID. Needs to be specified if the content is community-based.

-   **service**

    Identifies the Connections service.

-   **type**

    Identifies the content type. For example, an activity or a wiki page.


|Service|Type|Type specific parameters|Description|
|-------|----|------------------------|-----------|
|activities|activity| |Opens a particular activity, showing the outline page in the appropriate activities detail portlet|
| |item| |Opens the activity outline page for the activity containing this item in the activities portlet. The atom\_uri may refer to an activity todo, entry, section, comment, chat communication, or email communication.|
|blogs|blog| |Opens particular blog in the appropriate blog details portlet|
| |entry| |Opens a particular blog entry in the appropriate blog details portlet|
|communities|community| |Opens the community page for this community if one is available, otherwise directs to the configured error page.|
|forums|forum| |Opens a particular forum in the appropriate forum details portlet|
| |topic|forumUuid \(optional\)

|Opens a particular forum topic entry in the appropriate forums details portlet|
|profiles|profile| |Opens the profile detail in the profiles portlet|
|wikis|wiki| |Opens a particular wiki in the appropriate wiki details portlet|
| |page| |Opens a particular wiki page in the appropriate wiki details portlet|
| |file|wikiLabel

pageLabel

|Opens the attachments listing page for the parent wiki page in the wikis portlet. The atom\_uri might be the URI of any attachment on the page, obtained from the attachment Atom entry. The portlet lists all attachments for that wiki page.|

## POC Servlet

The piece of content (POC) servlet checks for authentication. The /poc mapping does not require authentication but recognizes if valid authentication or single sign on information is present. If that case, the resolver framework will redirect to /myportal; otherwise, it redirects to /portal. In many usage scenarios it is appropriate to address the /poc mapping, because it detects potential authentication information automatically. In any case, access control to the actual page and portlets to which the POC URI resolves is enforced by the portal. The POC servlet default path is

```
http://server:port/wps/poc?uri= 
```

Use the POC Servlet with the POC URI to access content as follows: POC URI:http://server:port/wps/poc?uri=connections:atom\_uri&commID=community\_id&service=service\_name&type=content\_type

## Sample URI

POC URI to address a forum topic: http://server:port/wps/poc?uri=connections:forums/atom/topic?topicUuid=da99c49f-d2d0-47d9-9f18-1f32cf9e108c&type=topic&service=forums&commID=9425353dfea-484c-1234-1f2f7d51e517&forumUuid=6864a28b-dfea-484c-9fd8-1f2f7d51e517


