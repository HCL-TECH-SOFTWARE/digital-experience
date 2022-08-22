# Enabling region identification in HCL Portal

You can use geographic targeting tools to associate a URL pattern with a specific region. However not all URL patterns are typically supported.

URL patterns that are not supported have the region or country information encoded as a string value in a parameter list, such as `www.XYZ-Co.com/products/information/?article=ABC123?country=UK`. The following options are supported:

-   Subdomains with generic domains, such as `de.XYZ-Co.com`
-   sub-directories with generic domains, for example `www.XYZ-Co.com/es/...`

You can configure top-level domain names with country codes and subdomains with generic domain by using standard portal configuration steps. However, when you write the region information into the relative path of a Portal URL, you need to adapt the portal site structure to differentiate between pages and page groups for a specific country. If you use Web Content Manager to deliver the content into the portal, this has implications as to how the content is managed and organized in the library or libraries. In both cases, the portal capabilities of rendering user friendly URLs is important. You have two options to handle this situation. They are described in the following.

-   The first option is based on the assumption that the site is split up at a certain point to reflect the different regions or countries. A typical scenario can be either an online shop or a product overview specific to the countries in which a company operates. Example URLs might then look as follows:

    -   For the US: `http://www.xyz-co.com/home/products/us/`
    -   For France: `http://www.xyz-co.com/home/products/fr/`
    -   For Italy: `http://www.xyz-co.com/home/products/it/`
    To achieve this, set the friendly name of the top-level page that serves as the entry page for a specific country, with the appropriate country code as the identifier that is then published by means of the URL. Note that you need to assign friendly names in the whole hierarchy of all pages that can be identified as a page for a certain region. The previous example would result in two main unique portal pages:

    -   `home`
    -   `products` This has three region specifics pages: `us`, `fr`, and `it`.
-   The second option has the same first two levels in its page hierarchy as the first: `home` and `products`. The products page renders the content based on user selection or preference. Then Web Content Manager delivers the content for the chosen country. The association of a web page with a set of content items in the Web Content Manager library is done by using site areas. The names of the site areas represent the country codes. Three portal "content" pages are added to the `products` page associated with the site areas. In the example, this adds three region-specific portal pages that are associated with the site areas `us`, `fr` and `it`.

    For more information, about friendly URLs see the topics about friendly URLs.



