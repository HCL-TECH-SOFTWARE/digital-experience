# Change default query operator from 'OR' to 'AND'

When a user enters more then one search term, the HCL DX search engine applies a logical 'OR' operator per default. In order for a document to qualify for the search result list, it is sufficient that only one of those terms is included in a document, two or more words the search result will be better.

In terms of search quality, only few of the terms actually contribute to the relevance score and thus dominate the rank score for the returned items. Which might be OK, on the other hand might not be OK as typically user expect that the top hitting document need to contain all of the keywords specified.

As background, the user perception is something they learn by using internet search engine like Google. These actually use 'AND' as the binding default operator. The result is that all of the terms used in the query are found in each of the returned documents.