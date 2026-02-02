# Getting started with the REST service for Web Content Manager

Before getting started with the REST service for Web Content Manager you should become familiar with how it works and how to use it.

The REST service for Web Content Manager is a collection of web services that are compliant with the Atom Publishing Protocol. They provide access to web content, including versions and workflow states, through HTTP. The service is designed according to the REST (REpresentational State Transfer) architectural style.

REST services make it easy to build interactive content, which can be modified directly by your site users. Responsive, integrated editing tools can be created by embedding HTML and JavaScript in web content components, which bind to the REST service to display or update content asynchronously. (Ajax)

HTTP makes integration with remote clients easier than with a traditional API. Web Content Manager functions can be visible to remote systems without adding more server-side components, such as JSP, to access Java APIs. HTTP allows these services to work seamlessly with your infrastructure including firewall, proxy servers, and caches.

!!! note
    Any examples in this section that contain incomplete XML, or XML without namespace declarations, use the following declarations:
    -   `xmlns:atom="http://www.w3.org/2005/Atom"`
    -   `xmlns:app="http://www.w3.org/2007/app"`
    -   `xmlns:wcm="http://www.ibm.com/xmlns/wcm"`

## Service entry points

The URLs, which comprise the REST service can change from release to release, or even with minor updates. Therefore, it is recommended to never bookmark, or generate a URL unless it is for a defined entry point.

-   **Atom publishing protocol service document**

    ```
    /wps/mycontenthandler/model/service
    ```

    This service document includes the entry points for all portal REST services. When you browse for content, you must first retrieve the service document. The AtomPub service document describes the top-level collections in an APP service. These collections represent libraries and other types of content accessible through the service.

    Web content queries can be stored in certain collections. This allows administrators to limit the scope and structure of queries, and bind them to specific URLs, which all authenticated users can access to retrieve the results as an Atom feed.

-   **POC Service**

    If a specific content item is known, it can be accessed directly through the POC service, or the POC service can be used to look up an appropriate URL for the content. The identity of a piece of content in the REST service is represented by its POC URI. The POC URI can be found in the ID element of the Atom Entry documents, which represents the content item.

-   **Queries**

    While queries can be stored within the REST service, they can also be run directly through a single location:

    ```
    /wcmrest/query
    ```

    This flexibility is subject to security controls to prevent users from inadvertently overloading production servers with complex queries.


## REST Service Access Levels

To use the REST service, for Web Content Manager a client user be assigned the "user" role or higher in the WCM REST SERVICE virtual resource. All authenticated users are assigned the "user" role by default.

An administrator can edit the WCM REST SERVICE virtual resource. Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**. Then, click **Virtual Resources**.

!!! note
    Proper library permissions must be configured to be able to create the content.

The same access control checks also apply to the HCL Digital Experience Version 2 REST APIs. Reference the Help Center topic [REST service for Web Content Manager v2](../wcm_rest_v2/index.md) for more information.

|Header|Header|
|------|------|
|User|Users assigned the "user" role can:-   work with web content items and run defined queries.|
|Editor|Users assigned the "editor" role can:-   work with web content items and run defined queries. <br>-   Run custom queries through the following path: `/wcmrest/query`|
|Manager|Users assigned the "manager" role can:-   work with web content items and run defined queries. <br>-   Run custom queries through the following path: `/wcmrest/query` <br>-   create, read, update, and delete defined queries.|


# WCM REST API Background and Queries

Use the following configuration settings and query examples to interact with the Web Content Manager (WCM) REST service.

---

## Configuration and Authentication

Before making requests, ensure your environment is configured for tracing and proper authentication.

### Service Tracing

To debug WCM REST service issues, use the following trace string:

```text
com.ibm.workplace.wcm.rest.*=all
```
# WCM Component Management

Use the following endpoints and request formats to create or update library components in WCM.

---

## Create a File Resource Component

Creating a file resource requires a **two-step process**: first, create the component container, then upload the binary file.

### Step 1: Create the Component

Send a **POST request** to the following URL:
`/wps/mycontenthandler/wcmrest/LibraryFileComponent`
**Request body:**

```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Staging to Production whitepaper</title>
  <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/[library-uuid]"/>
  <wcm:name>Staging to Production whitepaper</wcm:name>
  <wcm:description>PDF for staging to production in Portal 8.5</wcm:description>
</entry>
```
!!! tip "Tip"
    Replace `[library-uuid]` with the UUID of the target library where the component will be created.

# WCM Queries

The WCM REST service supports standard query parameters and predefined **Defined Queries** for complex searches.

---

## Query Parameters

Use the following parameters to filter or sort WCM items.  

| Parameter | Description | Example |
|-----------|-------------|---------|
| `approver` | Query items with a specific approver (user ID required) | `/query?approver=userid` |
| `authoringtemplateid` | Query items with a specific authoring template | `/query?authoringtemplateid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53` |
| `author` | Query items created by a specific author (user UID required) | `/query?author=uid=user1,o=defaultWIMFileBasedRealm` |
| `categoryid` | Query items assigned to a specific category | `/query?categoryid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53` |
| `createdafter` | Query items created after a specific date and time | `/query?createdafter=2011-01-11T11:43:29.0150Z` |
| `createdbefore` | Query items created before a specific date and time | `/query?createdbefore=2011-01-11T11:43:29.0150Z` |
| `creator` | Query items created by a specific user | `/query?creator=uid=user1,o=defaultWIMFileBasedRealm` |
| `dateformat` | Specify the date format for query parameters | `/query?dateformat=mm-dd-yyyy&createdbefore=12-31-2011` |
| `depth` | Define search depth when using `parentid`: `CHILDREN` or `DESCENDANTS` | `/query?parentid=wcmrest:uuid&depth=CHILDREN` |
| `expireafter` | Query items that expire after a specific date | `/query?expireafter=2011-01-11T11:43:29.0150Z` |
| `expirebefore` | Query items that expire before a specific date | `/query?expirebefore=2011-01-11T11:43:29.0150Z` |
| `id` | Query an item by its specific ID | `/query?id=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53` |
| `keyword` | Query items tagged with a specific keyword | `/query?keyword=keywordValue` |
| `lastmodifiedafter` | Query items last modified after a specific date | `/query?lastmodifiedafter=2011-01-11T11:43:29.0150Z` |
| `lastmodifiedbefore` | Query items last modified before a specific date | `/query?lastmodifiedbefore=2011-01-11T11:43:29.0150Z` |
| `lastmodifier` | Query items last modified by a specific user | `/query?lastmodifier=uid=user1,o=defaultWIMFileBasedRealm` |
| `libraryid` | Query items stored in a specific library | `/query?libraryid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53` |
| `namelike` | Wildcard search on item names | `/query?namelike=nameApproxValue%` |
| `name` | Query items with a specific name | `/query?name=nameValue` |
| `owner` | Query items owned by a specific user | `/query?owner=uid=user1,o=defaultWIMFileBasedRealm` |
| `pagesize` | Limit the number of results per page | `/query?type=PresentationTemplate&pagesize=5` |
| `page` | Specify which page of results to return | `/query?type=PresentationTemplate&pagesize=5&page=2` |
| `parentid` | Query items that are children of a specific parent | `/query?parentid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53` |
| `projectid` | Query items linked to a specific project | `/query?projectid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53` |
| `projectstate` | Query items linked to projects with a specific state (`ACTIVE`, `PENDING`, etc.) | `/query?projectstate=ACTIVE` |
| `publishafter` | Query items published after a specific date | `/query?publishafter=2011-01-11T11:43:29.0150Z` |
| `publishbefore` | Query items published before a specific date | `/query?publishbefore=2011-01-11T11:43:29.0150Z` |
| `sort` | Sort query results by a field. Append `_ascending` or `_descending` | `/query?type=PresentationTemplate&sort=created_ascending` |
| `state` | Query items in a specific state (`DRAFT`, `PUBLISHED`, `EXPIRED`) | `/query?state=PUBLISHED` |
| `titlelike` | Wildcard search on item titles | `/query?titlelike=nameApproxValue%` |
| `title` | Query items with a specific title | `/query?title=titleValue` |
| `type` | Query items of a specific type | `/query?type=LibraryHTMLComponent` |
| `workflowid` | Query items using a specific workflow | `/query?workflowid=wcmrest:8d25860b-7a5c-4015-9cd5-bdcc60ce14bb` |
| `workflowstageid` | Query items active in a specific workflow stage | `/query?workflowstageid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53` |

# Defined Queries

Defined queries are preconfigured searches stored in XML and bound to a specific URI. They allow administrators to perform complex queries and control allowable filters using a whitelist.

---

## Retrieve and manage defined queries

Use the following operations to list, read, update, or delete defined query components within Web Content Manager (WCM).

### List all queries

Retrieve a list of every defined query on the system. The response returns an Atom feed containing entries for each query.

**Request**

```http
GET /wps/mycontenthandler/wcmrest/DefinedQueryComponent/
```
### Retrieve raw configuration

View the raw XML configuration of a specific query, including selection criteria and allowlisted parameters. Use the edit-media link relation of the query.

**Request**
```http 
GET /wps/mycontenthandler/wcmrest/DefinedQueryComponent/[uuid]
Accept: application/vnd.ibm.wcm+xml
```

## Delete a query

Remove a defined query from the system by targeting its unique identifier.

**Request**
`DELETE /wps/mycontenthandler/wcmrest/DefinedQueryComponent/[uuid]`

## WCM library management

Use the Web Content Manager (WCM) REST service to create, update, read, and delete content libraries.

### Create a library

Send a `POST` request to the library endpoint to create a new library.

**Request body**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>My Library</wcm:name>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:library xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <allowDeletion>false</allowDeletion>
            <enabled>true</enabled>
            <language>en</language>
            <includeDefaultItems>true</includeDefaultItems>
        </wcm:library>
    </content>
</entry>
```
### Update a library

To update an existing library, send a `PUT` request to the URI containing the library's unique identifier (UUID).

**Request**

```http
PUT /wps/mycontenthandler/wcmrest/Library/[library-id]
Content-Type: application/atom+xml
```
### Read library metadata

To retrieve the settings and metadata of a library, send a `GET` request to the library's unique identifier (UUID).

**Request**

```http
GET /wps/mycontenthandler/wcmrest/Library/[library-id]
Accept: application/atom+xml
```
Example response

The response returns an Atom <entry> containing the library metadata, including link relations for editing, deleting, and managing access control:
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <id>wcmrest:12345678-90ab-cdef-1234-567890abcdef</id>
  <title>Example Library</title>
  <wcm:name>ExampleLibrary</wcm:name>
  <wcm:description>Sample library description</wcm:description>
  <wcm:language>en</wcm:language>
  <link rel="edit" href="/wps/mycontenthandler/wcmrest/Library/12345678-90ab-cdef-1234-567890abcdef"/>
  <link rel="edit-media" href="/wps/mycontenthandler/wcmrest/Library/12345678-90ab-cdef-1234-567890abcdef"/>
  <link rel="delete" href="/wps/mycontenthandler/wcmrest/Library/12345678-90ab-cdef-1234-567890abcdef"/>
</entry>
```
### Delete a library

You can delete a library using synchronous or asynchronous methods.

#### Synchronous delete

Send a `DELETE` request to the library's URI. The service returns a `200 OK` status once the deletion is complete.

```http
DELETE /wps/mycontenthandler/wcmrest/Library/[library-id]
```
#### Asynchronous delete
For large libraries, use the asynchronous method by adding the synchronous=true query parameter. This triggers the deletion as a background task.
`DELETE /wps/mycontenthandler/wcmrest/Library/[library-id]?synchronous=true`

## WCM library management

Use the Web Content Manager (WCM) REST service to create, read, update, and delete libraries. All operations are performed on the `/Library` endpoint.

### Create a library

To create a new library, send a `POST` request to the library URI. Include an Atom entry in the request body. Modify `wcm:name` and other properties as needed.

**Request**

```http
POST /wps/mycontenthandler/wcmrest/Library
Content-Type: application/atom+xml
```
**Request body example**
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Example Library</title>
  <wcm:name>ExampleLibrary</wcm:name>
  <wcm:description>Library for storing sample content</wcm:description>
  <wcm:language>en</wcm:language>
</entry>
```
#### Read library metadata

To retrieve the settings and metadata of a library, send a GET request to the library’s URI.

**Request**
`GET /wps/mycontenthandler/wcmrest/Library/[library-id]`

**Response
**
The service returns an Atom entry containing link relations for editing, deleting, and managing access control.

### Update a library

To update an existing library, send a PUT request to the URI of the specific library. Include the updated Atom entry in the request body.

**Request**
```http
PUT /wps/mycontenthandler/wcmrest/Library/[library-id]
Content-Type: application/atom+xml
```
**Request body example**
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Updated Library</title>
  <wcm:name>UpdatedLibrary</wcm:name>
  <wcm:description>Updated description for the library</wcm:description>
  <wcm:language>en</wcm:language>
</entry>
```

### Delete a library

You can delete a library using either synchronous or asynchronous methods.

### Synchronous delete
Send a DELETE request to the library URI. The service returns a 200 OK status when the deletion completes.
`DELETE /wps/mycontenthandler/wcmrest/Library/[library-id]`

### Asynchronous delete
For large libraries, append the synchronous=true parameter to trigger a background task.
`DELETE /wps/mycontenthandler/wcmrest/Library/[library-id]?synchronous=true`

## Content authoring templates

Content templates define the structure and default values for content items. You can manage templates using standard REST verbs.

### Create a content template

To create a new content template, send a `POST` request to the `ContentTemplate` endpoint. Include an Atom entry in the request body.

**Request**
```http
POST /wps/mycontenthandler/wcmrest/ContentTemplate
Content-Type: application/atom+xml
```
**Requestbody example**
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Example Content Template</title>
  <wcm:name>ExampleTemplate</wcm:name>
  <wcm:description>Template for creating standard content items</wcm:description>
  <wcm:authoringTemplateId>unique-template-id</wcm:authoringTemplateId>
</entry>
```
**Read content template**
To retrieve the metadata and structure of a specific template, send a GET request to the template’s URI.
`GET /wps/mycontenthandler/wcmrest/ContentTemplate/[template-id]`

#### Update a content template

To update a template’s metadata or structure, send a PUT request with the updated Atom entry.

#### Request

```httpPUT /wps/mycontenthandler/wcmrest/ContentTemplate/[template-id]
Content-Type: application/atom+xml
```
#### Request body example
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Updated Content Template</title>
  <wcm:name>UpdatedTemplate</wcm:name>
  <wcm:description>Updated description for the template</wcm:description>
</entry>
```
#### Delete a content template

To remove a template, send a DELETE request to the template’s URI.

**Request**
`DELETE /wps/mycontenthandler/wcmrest/ContentTemplate/[template-id]`

## Manage template prototypes

A prototype represents the default values for any content item created from a content template. You can define default elements, workflows, and presentation overrides.

### Update prototype values

To update default values, such as workflow or presentation template, send a `PUT` request to the prototype endpoint.

**Request**

```http
PUT /wps/mycontenthandler/wcmrest/ContentTemplate/[item-uuid]/Prototype
Content-Type: application/atom+xml
```
#### Request body example
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Example Prototype Update</title>
  <wcm:defaultWorkflow>wcmrest:workflow-uuid</wcm:defaultWorkflow>
  <wcm:defaultPresentationTemplate>wcmrest:presentation-template-uuid</wcm:defaultPresentationTemplate>
  <wcm:defaultElements>
    <wcm:element name="Title" value="Default title"/>
    <wcm:element name="Summary" value="Default summary text"/>
  </wcm:defaultElements>
</entry>
```
!!! tip
	•	Replace [item-uuid] with the UUID of the content template.
	•	The <wcm:defaultWorkflow> and <wcm:defaultPresentationTemplate> elements reference the workflow and presentation template UUIDs.
	•	<wcm:defaultElements> defines the default values for content elements in new items.

## Manage prototype properties

Prototype properties control how content items are created, including their placement in the site hierarchy and default behaviors.

**Endpoint**

```http
PUT /wps/mycontenthandler/wcmrest/ContentTemplate/[item-uuid]/Prototype/properties
Content-Type: application/atom+xml
```
#### Property configuration options

Use the following XML structures in the request body to configure template behavior:
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Prototype Properties Update</title>
  <wcm:defaultParent>/sites/mysite/content</wcm:defaultParent>
  <wcm:defaultLibrary>wcmrest:library-uuid</wcm:defaultLibrary>
  <wcm:enableWorkflow>true</wcm:enableWorkflow>
  <wcm:defaultState>DRAFT</wcm:defaultState>
  <wcm:allowChildCreation>true</wcm:allowChildCreation>
</entry>
```
### Prototype property details

Use the following properties to control how new content items are created from a template:

- `<wcm:defaultParent>`: The default parent folder or site path where new items are created.  
- `<wcm:defaultLibrary>`: The UUID of the library used for storing new items.  
- `<wcm:enableWorkflow>`: `true` to enforce a workflow on new items, `false` otherwise.  
- `<wcm:defaultState>`: The initial state for new items, for example, `DRAFT` or `PUBLISHED`.  
- `<wcm:allowChildCreation>`: `true` if content items can have children created under them.
!!! tip
    Replace [item-uuid] with the UUID of the content template. Adjust values according to the desired behavior for new content items.

## Prototype property reference

| Property           | Description                                         | Valid values                     |
|-------------------|-----------------------------------------------------|----------------------------------|
| workflow-control   | Controls if workflow is enabled or hidden.         | `true`, `false`                  |
| createNewParent    | Determines if a new site area is created for the item. | `true`, `false`                  |
| placement          | Determines where the item appears in the list.     | `FIRST_CHILD`, `LAST_CHILD`      |
| location-options   | Restricts where items can be created.              | `ALL_AVAILABLE`, `SELECTED`      |

#### Update properties example:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<content-properties xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <workflow-control>
        <option name="ENABLE_WORKFLOW" enabled="false"/>
        <option name="HIDE_WORKFLOW_SECTION" enabled="true"/>
    </workflow-control>
    <createNewParent>true</createNewParent>
    <placement>FIRST_CHILD</placement>
    <location-options allowedLocation="ALL_AVAILABLE" contentLink="NONE"/>
</content-properties>
```
# Site area authoring templates

This guide explains how to manage site area authoring templates using the Web Content Manager (WCM) REST service.

## Overview

Site area templates define the structure and default values for site areas. You can:

- Create, read, update, and delete (CRUD) templates  
- Configure prototype properties for items created from these templates

## Create a site area template

To create a template, send a `POST` request to the `SiteAreaTemplate` endpoint with an Atom entry.

**URL**:  
`/wps/mycontenthandler/wcmrest/SiteAreaTemplate`
**Content-Type**:  
`application/atom+xml`
**Example request body**:  
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>New Site Area Template</title>
  <wcm:name>site-area-template-name</wcm:name>
  <wcm:description>Description of the template</wcm:description>
</entry>
```
# Manage template prototypes

The prototype defines default values for site areas created from a template. This includes:

- Content elements  
- Workflow settings  
- Rendering behavior  
- Default child content

## Update prototype values

To update the default values of a template, send a `PUT` request to the prototype endpoint.

**URL**:  
`/SiteAreaTemplate/[item-uuid]/Prototype`
**Example request body**:  
```xml
<prototype xmlns="http://www.ibm.com/xmlns/wcm/8.0">
  <defaultWorkflow>workflow-uuid</defaultWorkflow>
  <defaultPresentationTemplate>presentation-template-uuid</defaultPresentationTemplate>
  <defaultElements>
    <!-- Define default content elements here -->
  </defaultElements>
</prototype>
```
### Update prototype properties

Prototype properties control specific behaviors, such as workflow enablement or placement in the site hierarchy. Send a PUT request to the /properties URI.
#### URL:
`/SiteAreaTemplate/[item-uuid]/Prototype/properties`
#### Content-Type:
`application/vnd.ibm.wcm+xml`
#### Example request body:
```xml
<properties xmlns:wcm="wcm/namespace">
  <wcm:defaultParent>/sites/mysite</wcm:defaultParent>
  <wcm:defaultLibrary>library-uuid</wcm:defaultLibrary>
  <wcm:enableWorkflow>true</wcm:enableWorkflow>
  <wcm:defaultState>DRAFT</wcm:defaultState>
  <wcm:allowChildCreation>true</wcm:allowChildCreation>
</properties>
```
# Read a site area template

To retrieve metadata and management links for an existing site area template, send a `GET` request.

**URL**:  
`/wps/mycontenthandler/wcmrest/SiteAreaTemplate/[item-uuid]`
The response returns an Atom entry containing several management links:

- **Elements** – Access the default elements defined in the prototype.  
- **Prototype** – Access the default values for site areas created from this template.  
- **New Sitearea** – A helper link to create a new site area based on this template.

# Delete a site area template

To remove a site area template, send a `DELETE` request to the template's UUID.

**URL**:  `/wps/mycontenthandler/wcmrest/SiteAreaTemplate/[item-uuid]`
**Example response**:

- **Status Code**: 200  
- **Status Message**: OK

# WCM presentation templates

Use the Web Content Manager (WCM) REST service to create, read, update, and delete presentation templates.

## Create a presentation template

To create a presentation template, send a `POST` request to the template endpoint with an Atom entry representing the template metadata.

**URL**:  `/wps/mycontenthandler/wcmrest/PresentationTemplate`
**Content-Type**:  `application/atom+xml`
**Example request body**:

```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>My Presentation Template</title>
  <wcm:name>myPresentationTemplate</wcm:name>
  <wcm:description>Template for standard page layout</wcm:description>
</entry>
```

## Read a presentation template

To retrieve the metadata and link relations for an existing template, send a `GET` request to the template URI.

**URL**:  `/wps/mycontenthandler/wcmrest/PresentationTemplate/[item-uuid]`

The response returns an Atom entry that includes management links, such as:

- `edit-media` – edit the raw template content  
- `versions` – access version history  
- `attachments` – manage associated files  

## Update a presentation template

You can update either the template metadata (title, description) or the template's HTML content (raw data).

### Update metadata

Send a `PUT` request containing the updated Atom entry to the template URI.

**URL**:  `/wps/mycontenthandler/wcmrest/PresentationTemplate/[item-uuid]`

### Update HTML content (raw data)

The HTML content is updated via the `edit-media` link relation. Send a `PUT` request with content type `text/html`.

**Request**:  
```
PUT /wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/[item-uuid]
Content-Type: text/html
```
**Example body**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Presentation Template</title>
</head>
<body>
  <h1>Welcome to My Template</h1>
  <div class="content">
    <!-- template content goes here -->
  </div>
</body>
</html>
```

## Retrieve raw HTML content

To get the HTML markup of a presentation template, send a `GET` request to the `edit-media` link of the template.

**Request**:  
```
GET /wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/[item-uuid]
Accept: text/html
```
The response returns the raw HTML content of the template.

## Delete a presentation template

To remove a presentation template from the system, send a `DELETE` request to the template URI.

**Request**:  `DELETE /wps/mycontenthandler/wcmrest/PresentationTemplate/[item-uuid]`
**Response**:

- **Status Code:** 200  
- **Status Message:** OK

## WCM site areas

Use the Web Content Manager (WCM) REST service to perform CRUD (create, read, update, delete) operations on site areas. Site areas define the hierarchical structure of your website.

### Create a site area

To create a site area, send a `POST` request to the `/SiteArea` endpoint. You must include a parent library or parent item link to specify its location in the hierarchy.

**URL:**  `POST /wps/mycontenthandler/wcmrest/SiteArea`

**Request body requirements:**

- **Parent link:** Include a `<link>` element with `rel="parent"` to define the parent site area or library.
- **Authoring template:** Specify the content template that defines the structure of the site area.
- **Metadata:** Include `<title>`, `<wcm:name>`, and `<wcm:description>` elements.

**Example XML body:**
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Marketing Site Area</title>
  <link rel="parent" href="/wps/mycontenthandler/wcmrest/Library/[library-uuid]"/>
  <link rel="authoringTemplate" href="/wps/mycontenthandler/wcmrest/ContentTemplate/[template-uuid]"/>
  <wcm:name>MarketingSiteArea</wcm:name>
  <wcm:description>Main marketing section of the website</wcm:description>
</entry>
```
## Create from a skeleton

You can simplify site area creation by using a "skeleton" representation based on a specific template.

### Steps

1. **Retrieve the skeleton**  
   Send a GET request to the template's new-sitearea endpoint:`GET /wps/mycontenthandler/wcmrest/SiteAreaTemplate/[template-uuid]/new-sitearea`
2. **Complete the data**  
Fill in the empty fields in the returned XML, such as title, name, description, or links.

3. **Create the item**  
POST the completed XML to the `/SiteArea` endpoint: `POST /wps/mycontenthandler/wcmrest/SiteArea`
---

## Update, read, or delete site areas

Use the site area's unique identifier (UUID) to manage existing site areas.

- **Update**: Send a PUT request with updated Atom entry data. `PUT /wps/mycontenthandler/wcmrest/SiteArea/[item-uuid]`
- **Read**: Retrieve metadata and link relations.`GET /wps/mycontenthandler/wcmrest/SiteArea/[item-uuid]`
- **Delete**: Remove the site area.`DELETE /wps/mycontenthandler/wcmrest/SiteArea/[item-uuid]`

---

## Managed portal pages

You can read metadata for portal pages that are managed by WCM.

### Read a managed page

Send a GET request to retrieve a portal page's metadata:`GET /wps/mycontenthandler/wcmrest/PortalPage/[item-uuid]`
The response includes link relations for workflow stages, drafts, and version history.

---

## Drafts and workflows

The REST API supports content lifecycle management, including creating drafts and moving items through workflow stages.

### Create drafts

- **Items without workflows**: Set the workflow state to `DRAFT` in the request XML entry.
- **Items in a workflow**: Use the create-draft endpoint:`POST /wps/mycontenthandler/wcmrest/item/[item-uuid]/create-draft`

### Workflow actions

Use POST requests to move items through workflow operations such as:

- Approve
- Reject
- Publish
- Expire

## Workflow actions

The following endpoints allow you to manage the workflow of a content item using the WCM REST API:

| Action         | Endpoint URI                        | Description                                  |
|----------------|------------------------------------|----------------------------------------------|
| Next stage     | /item/[uuid]/next-stage             | Moves the item to the next workflow stage.  |
| Previous stage | /item/[uuid]/previous-stage         | Moves the item back one stage.              |
| Approve        | /item/[uuid]/approve                | Approves the item (moves to next stage).    |
| Reject         | /item/[uuid]/reject                 | Rejects the item in the workflow.           |
| Restart        | /item/[uuid]/restart                | Restarts the item's workflow from the beginning. |

#### Workflow comments
If a workflow stage requires a comment, issuing a GET request to the action link (e.g., next-stage) returns an HTML form. To add the comment, either submit that form or perform a POST request with a Content-Type of text/plain.

## Workflow items

Workflow items define the lifecycle stages that content must pass through before being published.  
The WCM REST API allows you to create, read, update, and delete workflow items.

### Create a workflow item

To create a workflow item, send a `POST` request to the `/Workflow` endpoint.  
Include a library link to specify where the workflow will be stored.

**URL:**  `/wps/mycontenthandler/wcmrest/Workflow`

**Headers:**  `Content-Type: application/atom+xml`

**Example request body:**  
The following example updates the title and description of an existing workflow:

```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Updated Workflow Title</title>
  <wcm:description>Updated description for the workflow</wcm:description>
</entry>
```

### Read a workflow item

To retrieve the full metadata and configuration for a workflow, send a `GET` request.

**URL:**  `/wps/mycontenthandler/wcmrest/Workflow/[workflow-uuid]`
**Headers:**  `Accept: application/atom+xml`
**Response link relations include:**

- **edit-media**: Access the raw `application/vnd.ibm.wcm+xml` configuration.  
- **versions**: View the workflow item's version history.  
- **access-control**: Manage user permissions for this workflow.

---

### Delete a workflow item

To remove a workflow item from the library, send a `DELETE` request to its unique URI.

**Request:**  `DELETE /wps/mycontenthandler/wcmrest/Workflow/[workflow-uuid]`
**Response:**  

- **Status Code:** 200  
- **Status Message:** OK

## Workflow stages

A workflow stage represents a specific phase in an item's lifecycle, such as **Review** or **Publish**.  
You can use the WCM REST API to create, read, update, and delete workflow stages.

### Create a workflow stage

To create a workflow stage, send a `POST` request to the `WorkflowStage` endpoint.  
You must include a library link to define where the stage is stored.

**URL:**  `/wps/mycontenthandler/wcmrest/WorkflowStage`
**Headers:**  `Content-Type: application/atom+xml`

### Request body example

The following example creates a workflow stage with joint approval enabled and role-based access defined:

```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>Review Stage</title>
  <wcm:name>review-stage</wcm:name>
  <wcm:description>Stage for editorial review</wcm:description>

  <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/Library/[library-uuid]" />

  <wcm:jointApproval>true</wcm:jointApproval>

  <wcm:approvers>
    <wcm:user>uid=editor1,o=defaultWIMFileBasedRealm</wcm:user>
    <wcm:user>uid=editor2,o=defaultWIMFileBasedRealm</wcm:user>
  </wcm:approvers>

  <wcm:access>
    <wcm:role name="Editor" />
    <wcm:role name="Reviewer" />
  </wcm:access>
</entry>
```
Replace [library-uuid] with the UUID of the library where the workflow stage will be created.

### Update a workflow stage

To update an existing workflow stage, send a `PUT` request to the stage’s unique identifier (UUID).  
Include only the fields that you want to change.

**URL:**  `/wps/mycontenthandler/wcmrest/WorkflowStage/[workflow-stage-id]`
**Headers:**  `Content-Type: application/atom+xml`
### Example change

The following example disables joint approval and updates the access roles for the stage:
```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>Review Stage</wcm:name>
    <link rel="library" href="/wps/mycontenthandler/wcmrest/Library/[library-uuid]"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:workflowStage>
            <actions>
                <entering href="/wps/mycontenthandler/wcmrest/item/[action-uuid]"/>
            </actions>
            <jointApproval enabled="true">
                <approver>
                    <distinguishedName>uid=user1,o=default</distinguishedName>
                </approver>
            </jointApproval>
        </wcm:workflowStage>
    </content>
</entry>
```

## Workflow items

Workflow items act as containers for workflow stages and control the overall draft and approval logic.

### Manage workflow items

#### Create a workflow

To create a workflow, send a `POST` request to the workflow endpoint.  
Define the sequence of stages in the request body.

**Request:**  `/wps/mycontenthandler/wcmrest/Workflow/[workflow-uuid]`
**Response link relations include:**

- **create-draft**: Creates a new draft using this workflow.  
- **versions**: Provides access to the workflow’s version history.  
- **library**: Identifies the parent library that contains the workflow.

---

#### Delete a workflow

To remove a workflow item, send a `DELETE` request to the workflow’s unique identifier.

**Request:**  `DELETE /wps/mycontenthandler/wcmrest/Workflow/[workflow-uuid]`
**Response:**

- **Status Code:** 200  
- **Status Message:** OK

## WCM categories

Use the Web Content Manager (WCM) REST service to create, read, update, and delete categories within taxonomies.

### Create a category

To create a category, send a `POST` request to the category endpoint.  
You must include a parent link relation to define where the category belongs (for example, a taxonomy or another category).

**URL:**  `/wps/mycontenthandler/wcmrest/Category`
### Request body example

The following example creates a category under an existing taxonomy:

```xml
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
  <title>News</title>
  <wcm:name>news</wcm:name>
  <wcm:description>News-related content</wcm:description>

  <link rel="parent" href="/wps/mycontenthandler/!ut/p/wcmrest/Taxonomy/[taxonomy-uuid]" />
</entry>
```
Replace [taxonomy-uuid] with the UUID of the taxonomy or parent category.

### Response

If the category is created successfully, the service returns the following status:
`HTTP/1.1 201 Created`
The response body contains an Atom entry for the newly created category, including link relations for editing, deleting, and managing access control.

## WCM Categories

Use the Web Content Manager (WCM) REST service to manage categories. You can create, read, update, and delete categories within your taxonomies.

### Update a category

To update an existing category, send a `PUT` request to the category's URI. Include only the fields you want to change, such as the `wcm:name`.

**URL:**  
`/wps/mycontenthandler/wcmrest/Category/[category-id]`

**Content-Type:**  
`application/atom+xml`

**Request body example:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <wcm:name>Marketing Category Has Been Changed</wcm:name>
</entry>
```
## Identity controls

The behavior of identity controls in the REST service depends on whether a **text provider** is enabled for the item.

### Items with no text provider enabled

If an item does not use a text provider, use the following tags to manage identity fields:

| REST tag                  | Item field      |
|---------------------------|----------------|
| `<wcm:name>`text`</wcm:name>`       | Name           |
| `<atom:title>`text`</atom:title>`   | Display title  |
| `<atom:summary>`text`</atom:summary>` | Description    |

## Text provider controls

To enable, update, or read text provider controls, add the following parameters to the title and description tags.

### REST tags for text providers

| REST tag                                     | Text provider field    |
|---------------------------------------------|----------------------|
| `<wcm:title TextProviderName>`text`</wcm:title>` | Title name           |
| `<wcm:title TextProviderKey>`text`</wcm:title>`  | Title key            |
| `<wcm:desc TextProviderName>`text`</wcm:desc>`  | Description name     |
| `<wcm:desc TextProviderKey>`text`</wcm:desc>`   | Description key      |

### Items with a text provider enabled

When a text provider is enabled, identity controls function as described in the table below:

| REST tag                                     | Item field                     |
|---------------------------------------------|-------------------------------|
| `<wcm:name>`text`</wcm:name>`                     | Name                          |
| `<wcm:displayTitle>`text`</wcm:displayTitle>`     | Display title                 |
| `<atom:title lang="language-code">`text`</atom:title>` | Localized title               |
| `<wcm:description>`text`</wcm:description>`       | Description                   |
| `<atom:summary lang="language-code">`text`</atom:summary>` | Localized description         |

### Localized titles and descriptions

You can read localized titles and descriptions using the `lang` attribute with an **IETF BCP47 compliant language code**.

**Example:**

```xml
<atom:title lang="fr">texte</atom:title>
<atom:summary lang="fr">description</atom:summary>
```

!!! note
    When a text provider is enabled, the REST service can only read the localized title and description.
     update these values, you must modify the text provider plug-in directly.

## Access control management

You can remotely access and modify access control information for resources using the HTTP protocol.

### Supported feeds and URIs

The PAC REST API uses specific URI patterns to address members, roles, and resource configurations.

| Feed type            | URI pattern                                                      | Description                           |
|---------------------|-----------------------------------------------------------------|---------------------------------------|
| Member              | `ac:member:oid:[principalID]@role:[roleTypeName]@oid:[resourceID]` | Individual role membership            |
| Member collection   | `ac:member:[roleTypeName]@oid:[resourceID]`                     | All members of a specific role        |
| Role                | `ac:role:[roleTypeName]@oid:[resourceID]`                       | Information about a single role       |
| Role collection     | `ac:role:oid:[resourceID]`                                       | All roles associated with a resource  |
| Resource config     | `ac:resourceconfig:oid:[resourceID]`                             | Owner and role block settings         |
| Allowed access      | `ac:access:oid:[resourceID]`                                     | Access levels for the current user    |

### Supported HTTP methods

The following table shows what each HTTP method performs for each feed:

| Feed name          | GET                        | POST                     | PUT                 | DELETE                       |
|-------------------|---------------------------|-------------------------|-------------------|-------------------------------|
| Member             | —                         | —                       | —                 | Removes member from role      |
| Member collection  | Returns all members       | Adds principal to role  | —                 | —                             |
| Role               | Returns role info         | —                       | —                 | —                             |
| Role collection    | Returns all roles         | —                       | —                 | —                             |
| Resource config    | Returns owner/blocks      | —                       | Modifies config   | —                             |
| Allowed access     | Returns user permissions  | —                       | —                 | —                             |

## Member management

### Add a member to a role

To add a user or group to a specific role, send a `POST` request to the Member collection URI.

**Request:**

```http
POST ac:member:[roleTypeName]@oid:[resourceID]
Content-Type: application/atom+xml
```
#### Example payload:
```xml
<atom:entry xmlns:atom="http://www.w3.org/2005/Atom">
  <atom:content type="application/xml">
    <ac:member xmlns:ac="http://www.ibm.com/xmlns/prod/lotus/access-control/v1.0"
               ac:id="9eAe6BD86PGCHPD6JMCCG1D8MMG63JD0JM4C3BDAJMK66BC46O"/>
  </atom:content>
</atom:entry>
```
You can identify a principal using ac:id (ObjectID), ac:DN (Distinguished Name), or ac:email.

### emove a member from a role

To remove a membership, send a DELETE request to the specific Member URI.
`DELETE ac:member:oid:[principalID]@role:[roleTypeName]@oid:[resourceID]`

### Resource configuration

The Resource config feed manages ownership and inheritance/propagation blocks.

## Update resource configuration

To modify the owner or role blocks, send a `PUT` request.

### URL parameter options

- `modmerge`: Adds role blocks to existing ones and changes the owner.
- `update` (default): Replaces all existing blocks and owners.

### Example payload

```xml
<atom:entry xmlns:atom="http://www.w3.org/2005/Atom"
            xmlns:ac="http://www.ibm.com/xmlns/prod/lotus/access-control/v1.0">
  <atom:content type="application/xml">
    <ac:resource-config>
      <ac:owner ac:DN="uid=wpsadmin,o=defaultWIMFileBasedRealm" ac:type="user"/>
      <ac:role-block ac:block-type="inheritance" ac:type="Manager"/>
      <ac:role-block ac:block-type="propagation" ac:type="Editor"/>
    </ac:resource-config>
  </atom:content>
</atom:entry>
```
# Authors and owners

You can specify or retrieve authorship and ownership information for any WCM item using the REST service.

## Attributes

The following attributes represent authorship and ownership:

- `name`: The display name of the user.
- `distinguishedName`: The full LDAP or WIM path for the user (for example, `uid=wpsadmin,o=defaultWIMFileBasedRealm`).
- `uri`: The link to detailed user profile information via the PUMA REST SPI.

## Usage in requests

Include the `<author>` or `<wcm:owner>` tags in the body of a `POST` (Create) or `PUT` (Update) request to set these values.

# Item versions

The REST service allows you to list all historical versions of an item or read the details of a specific version.

## List all versions

To retrieve a feed of an item's versions, send a `GET` request to the versions URI:`GET /wps/mycontenthandler/wcmrest/item/[item-uuid]/versions`
**Response feed example**: The response contains versioned-item link relations.

```xml
<entry>
    <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/wcmrest/item/[uuid]/version/2"/>
    <content>
        <wcm:versionContent>
            <wcm:versionName>2</wcm:versionName>
            <wcm:versionDate>2026-05-30T04:38:49Z</wcm:versionDate>
        </wcm:versionContent>
    </content>
</entry>
```

## View a specific version

To view the full details of a past version:
`GET /wps/mycontenthandler/wcmrest/item/[item-uuid]/version/[version-name]`

## Recent and favorite items

You can access and manage lists of items that have been recently accessed or marked as favorites.

Recent items

Access a list of your recently viewed or edited items:
`GET /wps/mycontenthandler/wcmrest/recent-items`

### avorite items

Access your saved favorites list: `GET /wps/mycontenthandler/wcmrest/favorite-items`

#### Manage favorites
Manage favorites
- Add/remove via item update: Perform a PUT request to the item’s specific URI.
    Set <category scheme="wcmrest:favorite" term="true" /> to add or term="false" to remove.
- Add/remove via generic URI: Send a POST request to the following helper URIs:
    Add: /favorite-items/additem?item-uri=[item-uri]
Remove: /favorite-items/removeitem?item-uri=[item-uri]

### Attachments

Attachments are image resources associated with items containing HTML (such as Presentation Templates, Rich Text Components, or HTML Components).

!!! warning “Limitations”
    Attachments cannot be directly read, updated, or referenced by a unique URI. They are managed through the parent item.

#### Create an attachment

To add an image, send the binary data in a POST request:
```
POST /wps/mycontenthandler/wcmrest/[ITEM-TYPE]/[ITEM-UUID]/attachments
Content-Type: image/jpg or image/png
```
#### Delete an attachment

To remove an attachment, perform a PUT update on the parent item to remove the HTML markup referencing the image.

### Generic item read

If a specific REST handler does not exist for an item type, you can perform a basic read operation on any WCM item:
`GET /wps/mycontenthandler/wcmrest/item/[item-uuid]`
