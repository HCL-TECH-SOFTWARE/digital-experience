# Modifying DX Search

Filters cannot and should not be applied to Seedlist entries. However, it is possible to signal to the Portal or WCM applications specific portlets or content items to not publish through the seedlist.

## Improving the quality of search results

The default relevance calculation which DX Search provides might not be as good as expected for multiple reasons. However, there are configuration options provided which allows you to modify the quality of search to match your needs:

- Use suggested links to associate certain keywords with a specific URL.
- Change the default simple search behavior to not combine keywords using the Boolean 'OR” operator. Use the 'AND' operator instead.
- Boost keywords occurring in certain fields or phrases.

For more information, see [Hints and tips for improving quality of Portal Search results](../portal_search/hint_tips/srrhinttips_improve_quality_search.md).

## Removing language filtering from Search Center

1. Locate the file DisplayresultsWidgets.js (typically located in: WebSphere/wp_profile/installedApps/<cell_name>/PA_Search_Center.ear/searchCenter.war/js/ibm/portal/search/SearchCenter/widgets/).

2. In this file, remove the lines for ``queryLang`` and ``resultLang``:

    Summary:
    create the URL for the search REST servlet, based on query parameters
    createServiceUrl: function() {
    var params = {
    query: this.query.getFullQueryText(),
    scope: this.query.scope.getValue(),
    queryLang: this.query.language,
    resultLang: this.query.language,
    locale: djConfig.locale,
    results: this.numItems,
    start: this.currentPage * this.numItems
    };

3. Save the file. Do not forget to clear the browser's cache before performing the next search to validate.

As a consequence of removing ``queryLang``, the query text is parsed using the default language specified for the search collection.