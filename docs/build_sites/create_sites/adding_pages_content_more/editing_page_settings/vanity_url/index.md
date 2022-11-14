---
id: toolbar_vanityurls
title: Vanity URLs
---




Create a vanity URL when you need a short page address that people can easily remember.

As a content author, you can create short, arbitrary URLs that are easy to use in marketing campaigns and for site visitors to remember. You can change vanity URLs as frequently as you want to. You can also set up multiple vanity URLs for a single page. When you create the vanity URL, you can select to display one or more specific content items on the page. When a user accesses the vanity URL, the portal shows the page with the content item that you specified.

## Multilingual websites

You can use vanity URLs in multilingual websites. You can also choose a specific locale for the vanity URL. When a user accesses the page, the portal shows the page in the locale that you specified. If you want site visitors to see the page in their preferred language, you can associate multiple locales to a vanity URL.

## Vanity URL and friendly URL names

Vanity URLs are similar to friendly URLs. Both provide human readable URLs for pages in your website. However, vanity URLs do not include the portal context root or the portal navigation path. Vanity URLs have no relation to where the page is in the overall website page structure. The page might be many levels deep in the site structure, but the vanity URL does not reveal that information. On the contrary, the friendly URL is constructed from the friendly name of each parent page.

## Testing the vanity URL

When you go to a vanity URL, this URL does not remain in the browser **URL address**. Instead, the portal redirects you to the full portal URL.

Ideally the vanity URL is your-hostname.com/your-vanity-url. Your site administrator must set up HTTP server rewrite rules to ensure this behavior. Your authoring environment might be set up differently than the live server site. If you do not have an HTTP server for your authoring environment, then your vanity URL might look as follows: your-hostname.com/context-root/vanityurl/your-vanity-url. After you publish to the production server that has an HTTP server that is configured correctly, your vanity URL is your-hostname.com/your-vanity-url.

-   **[Content types](toolbar_content_types.md)**  


