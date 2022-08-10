# Search constraints REST API specification

Constraints are part of the Search API. They provide a structured method for advanced search over document metadata. They limit search results to the ones that match specific metadata values. It is an alternative for client-side applications, which include filters and advanced search options.

Instead of concatenating values into the query parameter with specific query syntax, an application can pass the values as separate parameters, regardless of query syntax. The constraint parameter can be passed multiple times in a Search API request to indicate multiple constraints. The constraint parameter is optional in the Search API. Constraints are mandatory that is each search result must match all the constraints that are provided on the request. If a query parameter is provided, all search results must match the query and the constraints. Constraints are differentiated between three basic types: field, category, and range constraints. Each constraint can apply to single or multiple values. The value of the constraint parameter is a JSON string. The following section outlines the details of the syntax for the various types of constraints.

## Field Constraint

A field constraint allows only results that match specific field values.

**Syntax**: constraint=type: field, id: field\_id, values: \[fieldValue1,fieldValue2\]

**Parameters:**

|Context Path|Authentication|
|------------|--------------|
|type|Always equals field for this type of constraint.|
|id|The identifier of the indexed field.|
|values|An array of field values. Each search result must match at least one of the values.|

Example: constraint=type:field, id:title, values:\[test\]

## Category Constraint

A category constraint refers to a constraint on a specific category in a *Facet*. A category constraint is similar to a field constraint in its syntax. However, since categories are indexed differently than regular fields, it is declared as a special type of constraint to allow better handling of the request. Category constraints are always an exact match.

**Syntax**: constraint=type: category, values: \[root/a/x, root/a/y\]

**Parameters:**

|Context Path|Authentication|
|------------|--------------|
|type|Always equals category for this type of constraint|
|values|An array of category IDs. Each search result must match at least one of the categories.|

Examples:

-   Constraint=type: category, values:\[Tag/tag1\]
-   Constraint=type: category, values:\[Tag/tag1,Tag/tag2\]
-   Constraint=type: category, values:\[Source/forums,Source/profiles,Source/wikis,Source/status\_updates\]
-   Constraint=type: category, values:\[Tag/tag1\]\}
-   Constraint=type: category, values:\[Tag/tag2\]

## Range Constraint

A range constraint allows only results in a specific range of field values. Values can be strings or numbers.

**Numeric Syntax**: constraint=type: range, id: field\_id, values: \[\{ge: 0.1, le: 0.5\}, \{g: 3.6\}, \{l: -5\}\]

**String Syntax**: constraint=type: range, id: field\_id, values: \[\{ge: cat, le: dog\}, \{g: horse\}, \{l: animal\}\]

**Parameters:**

|Context Path|Authentication|
|------------|--------------|
|type|Always equals range for this type of constraint.|
|id|The identifier of the indexed field.|
|values|An array of range values. Each value consists of lower and upper boundaries. Each boundary can be inclusive or exclusive. One or more boundaries can be specified for each value. The allowed attributes are

-   ge for lower inclusive boundary.

-   g for lower exclusive boundary.

-   le for upper inclusive boundary.

-   l for upper exclusive boundary.


|

**Parent topic:**[Search REST API specification](../search-rest-api/search.md)

**Related information**  


[Search facets REST API specification](../search-rest-api/facets-spec.md)

