# Supported aggregator tags

The portal supports the aggregator tags listed in the following for Active Site Analytics.

-   **Page Breadcrumb**

    Page breadcrumb is the ObjectID for the breadcrumb of the current page. Tag it as asa.page.breadcrumb. It contains the path to the page within the hierarchical tree of pages. The path is made of the names of the pages, which are separated by a forward slash character.

-   **Page ID**

    Page ID is the ObjectID of the page. Tag it as asa.page.id and add it to the theme markup.

-   **Page Title**

    Page Title is the title of the page in the portal default language. Tag it as asa.page.title and add it to the theme markup.

-   **Page Locale**

    Page locale is the locale of the page. Tag it as `asa.page.locale` and add it to the theme markup.

-   **Page Locale Direction**

    Page locale direction is the direction of the locale of the page. Tag it as `asa.page.direction` and add it to the theme markup.

-   **Friendly URL**

    Friendly URL is the URL of the current page without navigational state. Tag it as asa.url and add it to the theme markup. This element is empty if no friendly URL is set for the page.

-   **Visitor ID**

    Visitor ID is the object ID of the user who currently logged in. If the user is anonymous, the visitor ID remains empty. Tag it as asa.visitor and add it to the theme markup.

-   **Portlet Window Title**

    Portlet window title is the title of the portlet as it is delivered to the client. Tag it as asa.portlet.title and add it to the skin markup.

-   **Portlet Locale**

    Portlet locale is the locale of the portlet as it is delivered to the client. Tag it as `asa.portlet.locale` and add it to the skin markup.

-   **Portlet Locale Direction**

    Portlet locale direction is the direction of the locale of the portlet as it is delivered to the client. Tag it as `asa.portlet.direction` and add it to the skin markup.

-   **Portlet Window ID**

    Portlet window ID is the unique identifier of the portlet. Tag it as asa.portlet.id. It is published to the Dojo topic queue by the topic name `com.ibm.portal.theme.portlet_ready`.

-   **Portlet Screen ID**

    Portlet screen ID is the unique identifier of the screen or view that is displayed in a portlet. Tag it as asa.portlet.screen.id. The portlet developer can add it to the custom portlet.

-   **Portlet Screen Title**

    Portlet screen title is the localized title of the screen or view that is displayed in a portlet. Tag it as asa.portlet.screen.title. The portlet developer can add it to the custom portlet.

-   **Selected Portlet**

    This tag marks the portlet with which the user interacted. Tag it as asa.portlet.selected and add it to the skin markup by the portal framework. For developers: do not manually add this tag to the skin.

-   **Analytics Tags**

    The analytics tags are associated with a resource. Tag them as asa.taganalyticstag\_name and add them to the page or portlet markup.

-   **Site Promotions**

    These tags are the site promotions that are associated with a resource. Tag them as asa.tag.SitePromotion and add them to the page or portlet markup.

-   **Web Content Manager Content Querystring**

    The Content Querystring is the unique identifier of the Web Content Manager content item that is displayed in a portlet. Tag it as asa.wcm.content\_item.path and add it to the markup of the Web Content Manager Rendering portlet.

-   **Web Content Manager Content Title**

    The Content title is the title of the Web Content Manager content item that is displayed in the Web Content Manager Rendering portlet. This tag must not be identical to the portlet window title. Tag it as asa.wcm.content\_item.title and add it to the Web Content Manager Rendering portlet.

-   **Web Content Manager Content ID**

    The Content ID is the unique identifier of the Web Content Manager content item that is displayed in a portlet. Tag it as asa.wcm.content\_item.id and add it to the markup of the Web Content Manager Rendering portlet.

-   **Web Content Manager Content Authors**

    The Content authors is the name of the author of the Web Content Manager content item that is displayed in a portlet. Tag it as asa.wcm.content\_item.authors and add it to the markup of the Web Content Manager Rendering portlet. This tag can occur more than once.

-   **Search term**

    Tag the search term as asa.search.query and add it to the markup of the Search Center portlet.

-   **Number of search results**

    This the number value of the search results. Tag it as asa.search.results and add it to the markup of the Search Center portlet.

-   **Search Scope ID**

    Tag the search scope ID as asa.search.scope.id and add it to the markup of the Search Center portlet.

-   **Search Scope Label**

    Tag the search scope label as asa.search.scope.label and add it to the markup of the Search Center portlet.


**Parent topic:**[How Active Site Analytics data is represented in the portal](../admin-system/sa_asa_data.md)

**Related information**  


[Aggregator patterns and samples](../admin-system/sa_asa_aggr_xmp.md)

