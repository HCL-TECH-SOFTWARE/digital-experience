# How vanity URLs work

Learn about vanity URLs, how they work, and how you work with them.

In a new HCL Portal Version 8.5 installation, vanity URL support is enabled. If you upgrade your HCL Portal from a previous version to Version 8.5, vanity URL support is disabled. You can enable and disable vanity URL support as required by using a portal configuration task. For more information, see *Enabling vanity URL support*. For vanity URLs to work, you must also enable managed pages. If vanity URL support is not enabled and a user tries to access a vanity URL, the portal gives a 404 return code.

Vanity URLs are stored as part of the page data on the Web Content Manager portal page site area. When you create a vanity URL, both the vanity URL and the information for resolving the vanity URL is stored in the Vanity URL property of the portal page site area item. This storage method has the following consequences:

-   You manage vanity URLs by using the portal toolbar and the Managed Pages features. Therefore, if you want to use vanity URLs, Managed Pages must be enabled. The Managed Pages feature is enabled by default in a HCL Portal Version 8.5 installation. If you upgrade your portal from a previous version to Version 8.5 and want to use vanity URLs, you must enable Managed Pages.
-   Assigning a new vanity URL to a page, or changing or deleting an existing vanity URL in the scope of a project creates a draft of the page.
-   To export vanity URL information, you do not use the XML configuration interface \(XMLAccess\), but the JCR export feature of the portal page site area.

HCL Portal provides a vanity URL servlet. It resolves an incoming vanity URL request to the appropriate portal page or content item.

You can assign multiple vanity URLs to a page. A vanity URL can have different locales that are attached to it.

Vanity URLs are not included in the portal search seedlist. To provide good ranking for your vanity URL pages with search engines, assign friendly names to those pages. The friendly names are listed in the portal search seedlist. To achieve better search rankings, the portal search seedlist does not list the additional Vanity URLs.

If you have virtual portals, the following rules apply:

-   You must assign a vanity URL that is unique across all of your virtual portals.
-   The host name of the current virtual portal is used as the host name of the vanity URL. If the virtual portal was defined by using a context path, the host name of the virtual portal context path is used.
-   For a vanity URL in the default virtual portal, the host name of that default virtual portal is used as the host name of the vanity URL.

An example process flow of a business user who works with a vanity URL is as follows:

1.  You have a shoe shop, and you want to advertise a shoe promotion sale.
2.  You have a portal page that has the following friendly URL:

    ```
    http://hostname:port/wps/portal/home/shoe_promotion_page
    ```

3.  When you create a vanity URL, you define the vanity URL segment. Example: `shoe-sale`. You can also select from the following options:
    -   Portal content item: Use this option to specify a content item on the target page for the vanity URL. When a site visitor accesses the vanity URL, the portal shows the site visitor the page with the content item that you specified.
    -   Locale: If you use this option to specify a locale for the target page for the vanity URL. When a site visitor accesses the vanity URL, the portal shows the site visitor the page in the language and locale that you specified.
4.  To advertise your shoe sale, insert your vanity URL segment `shoe-sale` into the URL, and add a preceding segment `vanityurl`. The URL now looks as follows:

    ```
    http://hostname/wps/vanityurl/shoe-sale
    
    ```

    This URL is the vanity URL that you pass out in your advertisements for the shoe sale.

5.  When a user accesses the page by using this URL, the portal redirects the user to your shoe sale page under the URL given earlier:

    ```
    http://hostname:port/wps/portal/home/shoe_promotion_page
    ```

    When the portal redirects the user, it also adds state information to the URL. For example, this state information includes information about the portal content and the locale as selected when you created the vanity URL in earlier steps.

6.  You can make the vanity URLs shorter by omitting the portal root context `/wps` and the string `/vanityurl`. In this case, you must use a web server and define a rewrite rule. For more information, see *Providing short vanity URLs*. You can then pass out the following URL for your advertising campaign:

    ```
    http://hostname:port/shoe-sale
    ```

    When a user accesses this URL, the HTTP server rewrites this URL to the longer URL, and then redirects the user as described before.



**Related information**  


[Enabling vanity URL support](../wcm/van_url_cfgtsk_enable_vus.md)

[Providing short vanity URLs](../wcm/van_url_short.md)

