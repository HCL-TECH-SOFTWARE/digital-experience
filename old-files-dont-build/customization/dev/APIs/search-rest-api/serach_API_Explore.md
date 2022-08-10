# Digital Experience Search REST API Explorer

The Digital Experience Search REST API provides developers programmatic access to search indexed Digital Experience content and web pages. The Digital Experience Search REST API Explorer allows developers to explore and test the Digital Experience Search REST APIs.

## Access and launch the Digital Experience Search REST API Explorer

To access the DX Search REST APIs Explorer, after installing HCL DX 9.5 CF or Container Update CF200 or later, launch the following URL, located at: /dx/api/search/v1/explorer

**Example**: [http://localhost:10039/dx/api/search/v1/explorer/](http://localhost:10039/dx/api/search/v1/explorer/)

![](../images/DX_Search_Rest_API.png)

## Using the Digital Experience Search REST API Explorer

**Authentication:**

Authentication is not required to use the Digital Experience Search API. Both authenticated and anonymous searches of Digital Experience content and web pages are supported if your DX site administrator has enabled anonymous search. Search results will be presented in accordance with Digital Experience access controls defined to the source DX content that the user is authorized to view. The Search REST API Explorer allows you to choose which type of search you wish to execute.

**Endpoint:**

Open the web browser with:

```
http://host:port/dx/api/search/v1/explorer
```

Example URL:

```
http://localhost:10039/dx/api/search/v1/explorer/
```

**Payload:**

See the Digital Experience REST API Explorer for details on the body, headers, query parameters, response body, and other information available for use.

**Parent topic:**[Search REST API specification](../search-rest-api/search.md)

