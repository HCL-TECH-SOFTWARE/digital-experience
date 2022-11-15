# Dynamic web content page selection

The web content viewer provides a link broadcasting feature that dynamically determines the best web content page to use when rendering the linked content item. To perform this page selection, the viewer uses the content associations on the web content page.

Understanding dynamic page selection is useful when examining how multiple associations affect link resolution and when troubleshooting why a link is not targeting the expected page.

Dynamic page selection is enabled when the web content viewer is configured to use the **Dynamically select a web content page** link broadcasting option. To render a content item, the dynamically selected target page must contain at least one web content viewer. The viewer must be configured to receive links from other portlets.

When users select a link to a content item, the chain of content page resolution filters runs to determine which page renders the selected item. The same mechanism is used when previewing web content on pages or when selecting search results produced from the search seedlist 1.0 feature. You can control how the page is determined by adding a custom content page resolution filter into this filter chain. For more information, see *Creating a content page resolution filter class.*

The default filter plug-ins perform the following tests to determine a web content page.

1.  An ordered list with all parent site areas of the selected content item is created. If the selected item itself is a site area, it is part of that list. The order in the list matches the order in the Web Content Manager content hierarchy. The topmost parent is the last item in the list, and the direct parent of the selected item \(or the item itself\) is the first item.
2.  Based on this ordered list, a lookup is performed to find the web content page with the following criteria:

    -   The current user has view access to the page.
    -   The page is mapped to the first site area for which a page content association exists.
    If the content associations indicate that multiple pages map equally well, the web content viewer selects a single page using the following rules:

    -   If the current page is among the pages found, the current page takes precedence over the other results.
    -   If one of the pages that is indicated by the content associations is the default association for the page, that page takes precedence over other results.
    -   If the previous rules do not identify a page, a page is selected arbitrarily from the set of found pages.
3.  The content item that gets rendered depends on the situation.
    -   If a web content page can be determined in the previous test, the selected content item is rendered on this page.
    -   If no page can be identified by the content associations, the web content fallback page is used to render the content item.
    -   If no fallback page is configured or if the user does not have view rights on the fallback page, the Web Content Manager servlet renders the item.


???+ info "Related information:"
    - [Setting up a web content fallback page](../customizing_content/mp_wcm_fallback.md)
    - [Creating a content page resolution filter class](../../../../wcm_artifacts/wcm_dev/wcm_custom_plugin/wcm_dev_api_page_resolution.md)

