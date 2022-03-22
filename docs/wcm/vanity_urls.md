# Vanity URLs

You can associate vanity URLs with portal pages and labels. Vanity URLs are short URLs that people can easily remember. They are shorter than full HCL Portal URLs. They are sometimes also called marketing URLs. You can publish vanity URLs for marketing campaigns through different channels, such as email or print. This way, you can use vanity URLs to direct customers to a specific portal page or content item. Interested site visitors who want to view your campaign can then remember or copy the short vanity URL and type it into the browser address field.

Business users can create short and arbitrary URLs as vanity URLs. The vanity URLs can point to pages that marketing people can post in ads or magazines. To create vanity URLs, you use the HCL Portal toolbar. Businesses can provide URLs with the following benefits to their customers and portal site visitors:

-   Business users can assign vanity URLs to pages or to content on pages easily and change them frequently, for example, for promotion purposes.
-   For site visitors, vanity URLs are self-speaking, short, and easy to remember. Site visitors can easily remember and type vanity URLs.

-   **Technical and usage details about vanity URLs:**

    -   Business and marketing users can easily define and manage vanity URLs by using the portal toolbar. Managing vanity URLs does not require administrator access and use of the portal administration.
    -   Vanity URLs include the host name and the vanity name. They are part of the metadata of the portal page to which they resolve. However, they are not bound to the hierarchy of the friendly name path.
    -   HCL Portal provides a new vanity URL servlet. That servlet is called if a URL contains the portion `host/wps/vanityurl`, followed by a vanity URL segment. For example, in the vanity URL `host/wps/vanityurl/hotnews`, `hotnews` is the vanity URL segment. The servlet resolves the vanity URL segment to the appropriate portal page.
    -   When a site visitor goes to a vanity URL, this URL does not remain in the browser **URL address** field. Instead, the portal resolves the vanity URL to the full portal page URL and redirects the site visitor to the appropriate portal page.
    -   Vanity URLs are part of the portal page and are syndicated with the page. They are stored in the portal page site area item. Therefore, to be able to use vanity URLs, you must enable Managed pages.
    -   You can give a portal page multiple vanity URLs.
    -   You can use a vanity URL to address one or more specific content items on the page. When a user accesses the vanity URL, the portal shows the page with the content item that you specified.
    -   You can choose a specific locale for the target page of the vanity URL. When a user accesses the page, the portal shows the page in the locale that you specified. You can also attach multiple locales to a vanity URL. This way, the user can view the page in the preferred language.
    -   In their ease of use, vanity URLs are similar to friendly URLs. However, unlike friendly URLs, they do not include the portal context. They are also not constructed as a portal navigation path; therefore portal site visitors cannot go to a vanity URL by using the portal navigation.
    -   You can make your vanity URLs even shorter by using an HTTP server rewrite rule. You can then omit the segment `wps/vanityurl` and reduce the vanity URL to the host name and the vanity URL segment as follows: `host/hotnews`. For more information, read *Providing short vanity URLs*.
-   **Example of a vanity URL for a portal page:**

    -   A portal page can have the following friendly name path: `host/wps/portal/home/products/newandexiciting`.
    -   You can define a vanity URL segment that is named `coolstuff`. You can then post the following vanity URL to your customers: `host/wps/vanityurl/coolstuff`.
    -   You can reduce the vanity URL even further by using an HTTP server rewrite rule and then omitting the segment `wps/vanityurl`. You can now give your site visitors the shorter vanity URL: `host/coolstuff`.
    -   When a user enters the vanity URL in the browser address field, the vanity URL servlet resolves the vanity URL segment to the URL of the appropriate portal page.
-   **Vanity URLs and URL mappings:**

    URL mappings were deprecated starting with HCL Portal Version 8.5. Instead, you can now use friendly URLs or Vanity URLs as an alternative to URL mapping. Vanity URLs are similar to URL mappings in that you can define them independent from the page hierarchy. However, the following differences apply between vanity URLs and URL mappings:

    -   Vanity URLs are managed by business and marketing users by using the toolbar, not by administrators by using the portal administration. This way, vanity URLs are easier to manage than URL mappings.
    -   Vanity URLs are not bound to the portal page hierarchy. Now, you can have a single path segment for the vanity URL.
    -   Vanity URLs are managed in Web Content Manager as part of a page. A vanity URL can therefore be part of a project. It can be affected by versioning, workflow and syndication.
    -   Vanity URLs do not have to contain the URL path segment `/wps/portal`. Additionally, if you use an HTTP server rewrite rule, you can omit the `/wps/vanityurl` segment as well.
    -   Vanity URLs are attached to pages and do not exist independently from pages.
    -   Vanity URLs are independent from the portal site and its content taxonomy and hierarchy. In this regard, vanity URLs are similar to URL Mappings, but they do not include the portal context.
    If you prefer to use URL mappings, you can continue to use existing URL mappings. You can also reinstall the old URL mapping portlet. You find the installable WAR file for the portlet under PortalServer/ap/wp.ap.urlmapping/installableApps/urlmapping.war.

-   **Deciding between vanity URLs and friendly URLs**

    Depending on your requirements, you can use vanity URLs, or friendly URLs:

    -   If you want to have a short URL as an entry point to a specific portal page or content item, use a vanity URL.
    -   If you want to have a friendly URL that your site visitors see when the portal shows the page, use a friendly name.
    -   If you want to be able to publish the page through the Web Content Manager workflow, use a vanity URL. For example, this URL can be useful for a marketing campaign.
    -   If you want to address a specific portal page through URL generation tags or APIs, use unique name IDs. For more information, see *URL generation in HCL Portal*.
    You can create both vanity URLs and friendly URLs for the same portal page.


