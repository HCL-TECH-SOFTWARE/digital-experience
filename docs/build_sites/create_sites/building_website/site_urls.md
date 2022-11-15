---
id: site_urls
title: URLs
---




Portal URLs do not look like plain HTTP server URLs over a simple file system. Portal URLs have a complex structure and include a large compressed and encoded XML Navigation State document. The stream of random characters in a Portal URL is the Navigation State document. Full Portal function depends on correctly maintaining this Navigation State document during all the operations a user might do in Portal. Forcing Portal URLs to look like plain HTTP server URLs over a simple file system structure cripples the function of HCL Portal.

Some of the use cases that must be supported by Portal URLs include the following:

-   ****Backward and Forward** button support**

    The user can use the browser's back and forward buttons to switch between recent views.

-   **Bookmark-ability**

    The current view can be saved into a client-side bookmark and can be accessed at any time. The user might need to log on first before they can access the bookmark. The bookmark must remain valid across portal versions.

-   **Crawl-ability**

    Web-Crawlers such as Googlebot can crawl portal pages and index them.

-   **Cacheability**

    Views of pages must be cacheable.

-   **Non-Functional requirements**

    Non-functional requirements include RFC 1738 URL size limitations, URL generation performance, and markup size management when markup contains many Portal URLs.


A Portal URL can be self-contained, or can be a delta URL relative to a base. A Portal URL might contain human-readable tokens for URL Mappings, Friendly URLs, Vanity URLs, or Virtual Portal context, in addition to the encoded Navigational State document.

For users to find specific content in your website, you can provide friendly URLs or vanity URLs. These URLs are short URLs that people can easily remember. They are shorter than full HCL Portal URLs. These short URLs are sometimes also called marketing URLs. You can publish them for marketing campaigns through different channels, such as email or print. This way, you can use them to direct customers to a specific portal page or content item. Interested site visitors who want to view your campaign can then remember or copy the short URL and type it into the browser address field.

-   **Friendly URLs**

    Friendly URLs have human-readable strings in the URL that describe the path to a Portal page. These human-readable strings correspond to the Friendly URL Names that are associated with the pages or labels. In addition, there might also be Friendly Content Path tokens in the URL. The Friendly Content Path tokens are human-readable strings that describe the site area path to Web Content Management library associated with the page.

    **Note:** A friendly URL might also include an encoded Navigational State document. If it does not, it is a Stateless Friendly URL. There is a programming API specifically for working with Friendly URLs.

-   **Vanity URLs**

    Vanity URLs are similar to Stateless Friendly URLs, in that they are human-readable and do not have an encoded Navigational State document. However, Vanity URLs are not tied to the Friendly URL Names associated with the Portal pages. Instead, Vanity URLs are intended to be aliases that are simple, easily remembered, and easily entered by hand if necessary. Vanity URLs are similar to Mapped URLs that were introduced in prior releases of HCL Portal. They are intended only as an initial entry point, and are not persistent in the browser address bar after interaction with the Portal site begins. There is a programming API specifically for working with Vanity URLs.


## Deciding between vanity URLs and friendly URLs

Depending on your requirements, you can use vanity URLs, or friendly URLs:

-   If you want to have a short URL as an entry point to a specific portal page or content item, use a vanity URL.
-   If you want to have a friendly URL that your site visitors see when the portal shows the page, use a friendly name.
-   If you want to be able to publish the page through the Web Content Manager workflow, use a vanity URL. For example, this URL can be useful for a marketing campaign.
-   If you want to address a specific portal page through URL generation tags or APIs, use unique name IDs. For more information, see *URL generation in HCL Portal*.

You can create both vanity URLs and friendly URLs for the same portal page.

## URL mappings

URL mappings were deprecated starting with HCL Portal Version 8.5. Instead, you can now use friendly URLs or Vanity URLs as an alternative to URL mappings.


???+ info "Related information:"

    - [URL generation in HCL Portal](../../../extend_dx/apis/url_generation/index.md)

