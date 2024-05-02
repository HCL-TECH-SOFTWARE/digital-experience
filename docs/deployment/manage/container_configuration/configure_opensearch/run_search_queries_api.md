# Run search queries via REST API

Search queries follow the capabilities that OpenSearch provides. However the request schema is different from the one that OpenSearch uses.

## Basic query structure

The search REST API provides an OpenSearch compatible search syntax with some adjustments. This allows developers to leverage the capabilities of OpenSearch.

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

| Property | Description |
| -- | -- |
| query | Same syntax as a [OpenSearch Boolean Compound Query](https://opensearch.org/docs/latest/query-dsl/compound/bool/) |
| aggregations | Same syntax as [OpenSearch Aggregations](https://opensearch.org/docs/latest/aggregations/) |
| page | pagination index, default is 0 |
| pageSize | results per page, default is 100 |
| scope | A list of Content Source IDs, to which the search request will be limited to. If omitted or empty, all Content Sources will be searched. |
| sort | Same syntax as [OpenSearch Sort](https://opensearch.org/docs/latest/search-plugins/searching-data/sort/) |

The filter section of the query will always be enriched during processing with a filter for the users ACLs. This ensures a search result will only contain allowed fields.

## Limiting scope

If you want to limit the scope of a search query to only a specific Content Source, your can use the `scope` property in your query.
This accepts the UUIDs of Content Sources and will limit your search query to the selected Content Sources

## Using aggregations

## Page and page size

## Example queries

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

This will return all documents containing the word `Product` in their `title` field.

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

You can use query strings to define a search query. This will result in all documents containing the word `Products` and the number `01` or `03`.

### Limiting scope to one Content Source

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

This will return all documents containing the word `Product` in their `title` field but only for the Content Source with ID `619b9540-b2aa-45e6-a69b-0a0ab6799a78`.

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

This will return all documents containing the word `Product` in their `title` field but sort them by their published date in `descending` order.

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

This will return all documents containing the word `Product` in their `title` field but only the ones with the `locale` being `fr`. The filter has no influence on scoring and is purely binary.

### 