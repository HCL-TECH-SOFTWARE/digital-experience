# Architectural Overview

## Key goals

The new search for DX has been designed with the weaknesses of the existing search in mind. The focus was set on the following properties:

- High Availability: The existing search solution using Remote Search in clustered environments does not provide any high availability features. The Remote Search server is a singleton instance that and thus represents a single point of failure. The new OpenSearch based implementation allows to have multiple nodes running at the same time and is resilient against single node outages.

- Scalability: Since Remove Search was a single instance, the only way to scale was vertically. This is a fairly limited approach, since a single instance can not use an infinite amount of hardware resources. The new OpenSearch based implementation allows to deploy multiple nodes which enables load balancing for heave search related workloads. Furthermore it is possible to have separate nodes for data ingress and querying, allowing for further scaling flexibility.

- Kubernetes native deployment: The new search uses existing proven Kubernetes patterns and technologies that work well in such an environment.

## Main components

### OpenSearch nodes

### Search Middleware nodes

## The Concept of Content Sources

A Content Source represents a search index that contains data from a specific Data Source e.g., WCM. Under the covers, each Content Source has its own independent search index inside OpenSearch. This ensures that indexing documents from different Data Sources will not cause conflicts with duplicate IDs or similar. OpenSearch still allows to perform search queries over all existing indexes, which enables a separation of indexed data while still retaining all search capabilities.

--- Data Source Overview image ---

Having multiple Content Sources also enables easy scoping of search queries. If only the data of a particular Data Source should be considered during a search, the scope for that query can be limited to the ID of the corresponding Content Source inside the search and thereby limiting the search query to that single search index.


### Crawlers

Depending on the type of Content Source it might be required to pull data from the Data Source. In this case, the search provides capabilities to crawl the target Data Source using a built in Crawler. Those Crawlers can be configured on a per Content Source basis and will automatically store the pulled documents inside the search index of the associated Content Source.

### Push API

Every Content Source provides access to the stored documents via the Push API. This allows to:

- retrieve single documents by ID
- partially or fully update single documents by ID
- partially or fully update multiple documents in bulk by IDs
- delete single documents by ID
- delete multiple documents in bulk by IDs
- create new single documents
- create new documents in bulk

This API enables application developers and search administrators to manipulate the stored data inside the search without actual access to the real search indexes inside OpenSearch.

It also enables the push of content that might not be possible to crawl.

## Indexed Documents

Documents that are stored inside a Content Source contain a defined set of metadata and the document data itself. The general schema for a document looks like this:

```json
{
    "lastIndexed": 1712828704213,
    "firstIndexed": 1712828704213,
    "acls": [],
    "created": 1564176483000,
    "updated": 1564176483000,
    "documentObject": {
        ...
    }
}
```

The `documentObject` contains the documents real data and its properties will vary on the type of Content Source and the fields that are indexed.

## Search queries

The new search implementation allows for queries that are using the existing OpenSearch syntax. Each query will be enriched with an ACL check and a possible scoping to a or many Content Sources.

## Deployment types
