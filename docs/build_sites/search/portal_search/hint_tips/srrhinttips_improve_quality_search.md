# Hints and tips for improving quality of Portal Search results

There are three options available to improve the quality of search results and thus the overall search experience for your site visitors. The three options are using the Suggested Links portlet, changing the default query operator from Or to And, and applying boost factors to specific metadata fields.

## Using the Suggested Links portlet

Use the Suggested Links portlet to ensure that a specific document is listed at the beginning of a set of search results. When a site visitor runs a search, the Suggested Links portlet displays the documents that are tagged with the same keywords from the search. To edit the keywords for Suggested Links, complete the following steps:

1.  Log in to HCL Digital Experience as an administrator and navigate to the Search Center.
2.  Select **Edit keywords for Suggested Links** for the document that you would like to edit.
3.  Specify what tags you would like to associate with that specific document.
4.  Click **Save**.

The keywords that you specified are now associated with that item. If a site visitor searches for any of those keywords that are associated with that specific document, that document displays as a link in the Suggested Links portlet.

## Changing the default search operator from “Or” to “And”

When a site visitor enters more than one search term, the Portal search engine applies a logical `Or` operator as a default. In order for a document to display in the search results list, the document must have only one of those search terms. However, search engines such as Google often use `And` as the default search operator. Using `And` as the default search operator means that all of the terms used in the search query must be found in each of the returned documents. For more details on changing the default search operator, see *Search service configuration parameters* in the related links.

## Applying boost factors to specific metadata fields

When a site visitor runs a search, any values from metadata fields such as `title`, `description`, or `keywords` are automatically added to the generic `content` field in the search index. The values in these fields contribute equally to relevance calculation for any qualifying documents that are returned in the search results list. Use the search service configuration parameter boostingSettings to give extra weight to specified metadata fields, such as `title` or `description`. You can also use boostingSettings to specify how much extra weight specified metadata fields receive. For more information on the parameter boostingSettings, see *Search service configuration parameters* in the related links.


???+ info "Related information"
    - [Search service configuration parameters](../administer_portal_search/search_service_params/index.md)

