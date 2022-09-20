# Portal Search

Learn more about the features of Portal search, including customizing the search experience for site visitors and new search features that are included with HCL Portal version 8.5 and later releases.

## Default search features

A default installation of HCL Portal provides the following features:

-   A search box in the default Portal theme and the Search Center.
-   A search service.
-   A ready-to-run search collection for Portal pages and web content.
-   Search enabled for web content authoring environment.
-   Default search scopes for filtering search results.

You can add, modify, and remove search services. You can also configure your own search collections and search scopes.

## Features for portal site visitors

Site visitors who are working with search can now experience enhanced features, including:

-   The new 'Did you mean?' feature, which makes it easier for visitors to run searches.
-   The new faceted search feature is available through the search REST API, which enables site visitors to limit their searches by using dynamic search filters.
-   Globalized and multilingual search features for site visitors in different countries.

To enhance the possibilities available to site visitors who are working with search, administrators can customize Portal search as follows:

-   Configuration of additional search portlets that are deployed on the Search Center page already. These portlets include the Suggested Links portlet, which can be used to promote certain pages, and the External Results portlet, which reaches out to additional search services with the same search request and renders their RSS or Atom feeds to the user.
-   Simplified administration of Suggested Links by using a concept similar to tagging.

## Benefits for portal administrators

Portal site administrators who are working with search also benefit from enhanced search administration features. By using portal search, site administrators can complete the following tasks:

-   Setting up security as required. Administrators can provide a portal search on public content for anonymous site visitors and a portal search on secured content for authenticated visitors.
-   Configuring portal search for local operation or remote search service. Depending on your portal deployment \(single node or portal cluster\), remote search service handles requests that come from cluster nodes as well as providing performance benefits by balancing system load.
-   Simplified setting up remote search service by using the new IBM Installation Manager.
-   Administer portal search by using the Manager Search administration portlet.

???+ info "Related information"
    - [Search Center](../search/search_center/index.md)

