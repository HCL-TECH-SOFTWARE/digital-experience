# Search constraints REST API specification

Constraints are part of the Search API. They provide a structured method for advanced search over document metadata. They limit search results to the ones that match specific metadata values. It is an alternative for client-side applications, which include filters and advanced search options.

Instead of concatenating values into the query parameter with specific query syntax, an application can pass the values as separate parameters, regardless of query syntax. The constraint parameter can be passed multiple times in a Search API request to indicate multiple constraints. The constraint parameter is optional in the Search API. Constraints are mandatory that is each search result must match all the constraints that are provided on the request. If a query parameter is provided, all search results must match the query and the constraints. Constraints are differentiated between three basic types: field, category, and range constraints. Each constraint can apply to single or multiple values. The value of the constraint parameter is a JSON string. The following section outlines the details of the syntax for the various types of constraints.

## Field Constraint

A field constraint allows only results that match specific field values.

**Syntax**: constraint=**type**: field, **id**: *field_id*, **values**: *[fieldValue1,fieldValue2]*

**Parameters:**

|Context Path|Authentication|
|------------|--------------|
|**type**|Always equals *field* for this type of constraint.|
|**id**|The identifier of the indexed field.|
|**values**|An array of field values. Each search result must match at least one of the values.|

**Example**: &constraint={ "type":"field", "id":"title", "values":["STRING_VALUE"]}
 
!!!example "Sample command"
    http://hostname:port/wps/mycontenthandler/searchfeed/search?queryLang=en&locale=en&resultLang=en&query=development&scope=com.ibm.lotus.search.ALL_SOURCES&constraint={ "type":"field", "id":"title", "values":["Welcome"]}

## Category Constraint

A category constraint refers to a constraint on a specific category in a *Facet*. A category constraint is similar to a field constraint in its syntax. However, since categories are indexed differently than regular fields, it is declared as a special type of constraint to allow better handling of the request. Category constraints are always an exact match.

**Syntax**: constraint=**type**: *category*, **values**: *[root/a/x, root/a/y]*

**Parameters:**

|Context Path|Authentication|
|------------|--------------|
|**type**|Always equals category for this type of constraint|
|**values**|An array of category IDs. Each search result must match at least one of the categories.|

**Examples**:

-   Constraint=**type**: *category*, **values**:*[Tag/tag1]*
-   Constraint=**type**: *category*, **values**:*[Tag/tag1,Tag/tag2]*
-   Constraint=**type**: *category*, **values**:*[Source/forums,Source/profiles,Source/wikis,Source/status_updates]*
-   Constraint=**type**: *category*, **values**:*[Tag/tag1]}*
-   Constraint=**type**: *category*, **values**:*[Tag/tag2]*

!!!example "Sample search"
    Set the facetedFields value to **["category"]**.

    From a regular search for content with the text **article1**, it has the category of **compact**.
    (Categories in content: //cars/compact)

    Sample search with a constraint of compact:<br>
    http://hostname:port/wps/mycontenthandler/searchfeed/search?queryLang=en&locale=en&resultLang=en&query=article1&scope=com.ibm.lotus.search.ALL_SOURCES&constraint={ "type":"category", "id":"category", "values”:[“compact”]}

    The constraint needs the **field id** to check. In addition, it needs to be a facet field:<br>
    &lt;wplc:field id="category"&gt;compact&lt;/wplc:field&gt;

### Setting search service properties

For a category constraint to work, set the values for **facetedFields** and **fieldTypes** first.

#### Setting the facetedFields value

1. Go to **Administration > Manage Search > Search Services > Default Search Service**.

2. Edit its properties.

3. In the **facetedFields** field, enter **["tag", "category"]**.

    These two fields will be indexed as facets and could be searchable as facets.

#### Setting the fieldTypes value

If you have fields in the seedlist that are not strings and you want to sort by them, field type configuration is needed. 

1. Go to **Administration > Manage Search > Search Services > Default Search Service**. 

2. Edit its properties.

3. In the **fieldTypes** field, enter **{"popularity":"integer"}**.

!!!important
    When you add or update any of the two search service properties, you must restart the Portal server and the remote search service, if available. Failing to do so will result to facets not being handled during indexing. In addition, no facet information will be returned through the Search REST service call, resulting to facets not appearing in the sample portlet.

For more information, see [Faceted Search - Leverage Search Experience based on Search REST API](https://support.hcltechsw.com/csm?id=kb_article&sys_id=f2cfbcefdbc2dc5055f38d6d13961935).

## Range Constraint

A range constraint allows only results in a specific range of field values. Values can be strings or numbers.

**Numeric Syntax**: constraint=**type**: *range*, **id**: *field\_id*, **values**: *[{ge: 0.1, le: 0.5}, {g: 3.6}, {l: -5}]*

**String Syntax**: constraint=**type**: *range*, **id**: *field\_id*, **values**: *[{ge: cat, le: dog}, {g: horse}, {l: animal}]*

**Parameters:**

    |Context Path|Authentication|
    |------------|--------------|
    |**type**|Always equals *range* for this type of constraint.|
    |**id**|The identifier of the indexed field.|
    |**values**|An array of range values. Each value consists of lower and upper boundaries. Each boundary can be inclusive or exclusive. One or more boundaries can be specified for each value. The allowed attributes are: <br/> -   *ge* for lower inclusive boundary. <br/> -   *g* for lower exclusive boundary. <br/> -   *le* for upper inclusive boundary. <br/> -   *l* for upper exclusive boundary.|

**Example**: &constraint={"type":"range","id":"effectivedate","values":[{"ge":"1322199864000","le": "5371735633728"}]}

!!!example "Sample command"
    http://hostname:port/wps/mycontenthandler/searchfeed/search?queryLang=en&locale=en&resultLang=en&query=development&scope=com.ibm.lotus.search.ALL_SOURCES&constraint={"type":"range","id":"effectivedate","values":[{"ge":"1322199864000","le": "5371735633728"}]}


???+ info "Related information"
    - [Search facets REST API specification](../search-rest-api/facets-spec.md)
