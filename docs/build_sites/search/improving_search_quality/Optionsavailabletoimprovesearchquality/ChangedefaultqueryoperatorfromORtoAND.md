# Changing the default query operator from 'OR' to 'AND'

When a user enters more than one search term, the HCL Digital Experience (DX) search engine applies a logical 'OR' operator by default. For a document to qualify for the search result list, it is enough that only one of those terms is included in a document. However, including two or more words leads to better search results.

In terms of search quality, only few of the terms contribute to the relevance score and thus dominate the rank score for the returned items. This may be acceptable; however, it may not be suitable, because users expect that the top document contain all the specified keywords.

For context, the user perception is something learned by using a search engine like Google. This search engine uses 'AND' as the binding default operator. The result is all the terms used in the query are found in each of the returned documents.

## Enabling 'AND' as default operator

To enable the 'AND' query operator, add the configuration parameter for the HCL DX search service. Apply the parameter and restart the Portal Server and/or remote search service as required.

Use the following configuration parameter:

- For V8 and V8.0.0.1 and higher releases:

    `DEFAULT_SEARCH_OPERATOR=and`

!!! note
    The change to the search service does not require the search collection to re-build. 