# Search facets REST API specification

The following document describes the facet parameter of the Search API and the corresponding response elements. The facet parameter allows obtaining the facets, which are relevant for the search query. The facets that are supported in Portal Search include Tag, Person, Date, Source, and for status updates only Trend.

## Request Format

The facet parameter of the Search API is optional. When absent, facets are not returned with the search results. The facet parameter can repeat multiple times. Each instance of the parameter defines a category for which facets must be computed. For example: Person, Date, Tag, and so on. The value of the facet parameter is a JSON string. A number of attributes for the JSON string are supported. All of the attributes, which have a default value are optional. Any unknown attributes are ignored. The following are the attributes that are supported for the JSON string:

|Name|Description|Default Value|Comments|
|----|-----------|-------------|--------|
|id|Defines the ID of the category from which facets must be computed. This attribute is mandatory.| |This value can be obtained from a response of a previous search request.|
|depth|Defines how to collect facet values in the category. If the depth is 0, only the category is returned. If the depth is 1, its immediate children are also returned. If the depth is the constant value ALL, then there's no limitation on how deep to collect facet values.|1|Negative values are not allowed.|
|count|Defines the maximal number of values to return for this category. If the count is the constant value ALL, then all the category's descendants in the provided depth are returned, up to the maximum.|10|Negative values are not allowed. The maximum is 1000.|
|sortOrder|Defines how results must be sorted, either in ascending or descending order. Facets results are sorted by weight.|DESC|This attribute has only 2 allowed values: ASC, DESC.|

The full structure of the parameter in JSON format is

```
facet={"id": "<facet_id>", "depth": <depth>, "count": <count>, "sortOrder": "<order>"}
```

Examples

Some examples:

```

facet={"id": "Tag", "count": 50}
facet={"id": "Person", "count": 250}
facet={"id": "Date", "count": 250, "depth": 2}
facet={"id": "Source", "count": 50}
facet={"id": "Trend", "count": 50}
```

## Response Format

The response format is designed to allow a faceted search client, which is as generic as possible. The format is XML-based, and augments the existing Atom search feed with elements. All additional elements have the ibmsc namespace, where ibmsc is short for http://www.ibm.com/search/content/2010. The root atom:feed element is augmented with ibmsc:facet elements, as defined in the following schema:

```
atomFeed = element atom:feed {
	ibmscFacets ~//in addition to existing elements
	}

	 ibmscFacets = element ibmsc:facets {
	attribute taxonomyId { text},
	ibmscFacet*
	}
	 
	 ibmscFacet = element ibmsc:facet {
	attribute id { text},
	attribute type { text },
	ibmscFacetValue*
	}
	
	ibmscFacetValue = element ibmsc:facetValue{
	attribute id { text},
	attribute label { text },
	attribute weight { float },
	ibmscFacetValue*
	}
```

Description of response elements:

|Element|Description|
|-------|-----------|
|ibmsc:facets|Root element for all facets information.|
|ibmsc:facets/@taxonomyId|Identifies the facets taxonomy to be used in a category Constraint.|
|ibmsc:facet|Defines the category for which facets were computed.|
|ibmsc:facet/@id|The identifier of the category.|
|ibmsc:facet/@type|Defines the type of facet. Can be used as a hint to the client side on how to render the facet. For example, if type is Person, it can be rendered as a live person link. If type is Tag, it can be rendered as cloud. These values are predefined: Date, Tag, Person, String, Number, Integer.|
|ibmsc:facetValue|Defines a category for which search results were found. A facetValue might contain sub elements, in a tree-like structure.|
|ibmsc:facet:facetValue/@id|The identifier of the category for which search results were found.|
|ibmsc:facetValue/@label|A human-readable label for this facet value.|
|ibmsc:facetValue/@weight|A number that indicates the relative weight of this facet value within the search results. This number might correlate to the actual number of search results that match this query, but that is not mandatory.|

**Note:** When a facet value is selected by the user, the API provides the following ways to reflect that selection in the faceted search request:

1.  To limit search results to the ones that match this facet value, use the constraint parameter. Combine the id of the facetValue element with the taxonomyId attribute of the facets element on the response to build the new service URL. This option can also be used to select two-facet values or more simultaneously. The category value must match the Id of the selected facet value.
2.  To explore facets in a subcategory of the selected facet value if it exists, use the id of the facetValue element as the id attribute of the facet request parameter.

## Example:

```

<ibmsc:facets taxonomyId="facets">
<ibmsc:facet id="Date" type="Date">
<ibmsc:facetValue id="Date/2012" label="2012" weight="1">
<ibmsc:facetValue id="Date/2012/07" label="07" weight="1"/>
</ibmsc:facetValue>
</ibmsc:facet>
</ibmsc:facets>
```


**Related information**  


[Search constraints REST API specification](../search-rest-api/constraints-spec.md)

[Introducing JSON](https://www.json.org/json-en.html)

