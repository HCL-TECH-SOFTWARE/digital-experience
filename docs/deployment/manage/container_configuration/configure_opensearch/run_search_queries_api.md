# Running search queries via REST API

Search queries follow the capabilities that OpenSearch provides. However, the request schema is different from the one that OpenSearch uses.

## Basic query structure

The search REST API provides an OpenSearch-compatible search syntax with some adjustments. This allows developers to use the capabilities of OpenSearch.

The following example shows the basic structure of a search query:

```json
{
    "query": {
        "must": [],
        "should": [],
        "must_not": [],
        "filter": [],
    },
    "aggregations": {},
    "page": 0,
    "pageSize": 30,
    "scope": [],
    "sort": []
}
```

The following table provides more information about each property in the search query:

| Property | Description |
| -- | -- |
| query | Same syntax as an [OpenSearch Boolean Compound Query](https://opensearch.org/docs/latest/query-dsl/compound/bool/). |
| aggregations | Same syntax as [OpenSearch Aggregations](https://opensearch.org/docs/latest/aggregations/). |
| page | Pagination index. Default is 0. |
| pageSize | Results per page. Default is 100. |
| scope | A list of content source IDs, to which the search request is limited to. If omitted or empty, all content sources are searched. |
| sort | Same syntax as [OpenSearch Sort](https://opensearch.org/docs/latest/search-plugins/searching-data/sort/). |

The filter section of the query is always enriched during processing with a filter for the user's ACLs. This ensures a search result only contains the allowed fields.

Note that a search query is currently limited to 10000 results.

## Example queries

This section provides sample search queries for several scenarios. 

### Search for a title in WCM

```json
{
  "query": {
    "must": [
      {
        "match": {
          "documentObject.title": "Product"
        }
      }
    ]
  }
}
```

This search query returns all documents containing the word `Product` in their `title` field.

### Search for a collection in DAM

```
{
  "query": {
    "must": [
      {
        "wildcard": {
          "documentObject.name": {
            "value": "*Product*",
            "case_insensitive": true
          }
        }
      },
      {
        "match": {
          "documentObject.type": "collection"
        }
      }
    ]
  },
  "page": 0,
  "pageSize": 10
}
```

This search query returns all documents containing the word `Product` in their `name` field and the `type` is `collection`.

### Search for an asset in DAM

```
{
  "query": {
    "must": [
      {
        "wildcard": {
          "documentObject.name": {
            "value": "*Product*",
            "case_insensitive": true
          }
        }
      },
      {
        "match": {
          "documentObject.type": "asset"
        }
      }
    ]
  },
  "page": 0,
  "pageSize": 10
}
```

This search query returns all documents containing the word `Product` in their `name` field and the `type` is `asset`.

### Search using a query string

```json
{
  "query": {
    "must": [
       {
         "query_string": {
           "query": "Products AND (01 OR 03)"
         }
       }
    ]
  }
}
```

You can use query strings to define a search query. This search query returns all documents containing the word `Products` and the number `01` or `03`.

### Limiting scope to one content source

```json
{
  "query": {
    "must": [
      {
        "match": {
          "documentObject.title": "Product"
        }
      }
    ]
  },
  "scope": [
    "619b9540-b2aa-45e6-a69b-0a0ab6799a78"
  ]
}
```

This returns all documents containing the word `Product` in their `title` field but only for the content source with ID `619b9540-b2aa-45e6-a69b-0a0ab6799a78`.

### Sorting results by a field

```json
{
  "query": {
    "must": [
      {
        "match": {
          "documentObject.title": "Product"
        }
      }
    ]
  },
  "sort": [
    {
      "documentObject.published": {
        "order": "desc"
      }
    }
  ]
}
```

This returns all documents containing the word `Product` in their `title` field but they are sorted by their published date in `descending` order.

### Using filters

```json
{
  "query": {
    "must": [
      {
        "match": {
          "documentObject.title": "Product"
        }
      }
    ],
    "filter": [
        {
            "term": {
                "documentObject.locale": "fr"
            }
        }
    ]
  }
}
```

This returns all documents containing the word `Product` in their `title` field but only the ones with the `locale` being `fr`. The filter has no influence on scoring and is purely binary.
