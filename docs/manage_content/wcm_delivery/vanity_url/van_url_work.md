# WCM Export

Learn about vanity URLs, how they work, and how you work with them.

In a new HCL Digital Experience (DX) Version 9.5 installation, vanity URL support is enabled. If you upgraded your HCL Digital Experience (DX) from a previous version, vanity URL support might be disabled. You can enable and disable vanity URL support as required by using a portal configuration task. For more information, see *Enabling vanity URL support*. For vanity URLs to work, you must also enable managed pages. If vanity URL support is not enabled and a user tries to access a vanity URL, the portal gives a `404` code.

Vanity URLs are stored as part of the page data on the Web Content Manager portal. When you create a vanity URL, both the vanity URL and the vanity URL resolving information are stored in the Vanity URL property of the portal. This storage method has the following consequences:

-   Manage vanity URLs by using the portal toolbar and the Managed Pages features. Therefore, if you want to use vanity URLs, Managed Pages must be enabled. The Managed Pages feature is enabled by default in the HCL Digital Experience (DX) Version 9.5 installation. 
-   Assign a new vanity URL to a page, or change or delete an existing vanity URL in the scope of a project, creates a draft of the page.
-   Export vanity URL information. Do not use the XML configuration interface \(XMLAccess\), but use the JCR export feature of the portal.

HCL Digital Experience (DX) provides a vanity URL servlet. It resolves an incoming vanity URL request to the appropriate portal page or content item.

Assign multiple vanity URLs to a page. A vanity URL can have different locales that are attached to it.

Vanity URLs are not included in the portal search seedlist. To provide good ranking for your vanity URL pages with search engines, assign friendly names to them. The friendly names are listed in the portal search seedlist. To achieve better search rankings, the portal search seedlist must not include the additional Vanity URLs.

If you have virtual portals, the following rules apply:

-   You must assign a vanity URL that is unique across all of your virtual portals.
-   The hostname of the current virtual portal is used as the hostname of the vanity URL. If the virtual portal was defined by using a context path, use the virtual portal context path hostname.
-   For a vanity URL in the default virtual portal, its hostname should be used as the hostname of the vanity URL.

See the process flow below for an example of a business user who works with a vanity URL:

1.  You have a shoe shop, and you want to advertise a shoe promotion sale.
2.  You have a portal page that has the following friendly URL:

    ```
    http://hostname:port/wps/portal/home/shoe_promotion_page
    ```

3.  When you create a vanity URL, you define the vanity URL segment. Example: `shoe-sale`. You can also select from the following options:
    -   Portal content item: Use this option to specify a content item on the target page for the vanity URL. When a site visitor accesses the vanity URL, the portal shows the site visitor the page with the specified content item.
    -   Locale: If you use this option to specify a locale for the target page for the vanity URL. When a site visitor accesses the vanity URL, the portal shows the site visitor the page in the language and locale that you specified.
4.  To advertise your shoe sale, insert your vanity URL segment `shoe-sale` into the URL, and add a preceding segment `vanityurl`. The URL now looks as follows:

    ```
    http://hostname/wps/vanityurl/shoe-sale
    
    ```

    This URL is the vanity URL that you post in your advertisements for the shoe sale.

5.  When a user accesses the page by using this URL, the portal redirects the user to your shoe sale page via the provided  the URL:

    ```
    http://hostname:port/wps/portal/home/shoe_promotion_page
    ```

    When the portal redirects the user, it also adds state information to the URL. For example, this state information includes the portal and the locale information (selected when you created the vanity URL in the previous steps).

6.  You can make the vanity URLs shorter by omitting the portal root context `/wps` and the string `/vanityurl`. In this case, you must use a web server and define a rewrite rule. For more information, see *Providing short vanity URLs*. You can then pass out the following URL for your advertising campaign:

    ```
    http://hostname:port/shoe-sale
    ```

    When a user accesses this URL, the HTTP server rewrites this URL to the longer URL, and then redirects the user as described before.



???+ info "Related information"
    - [Enabling vanity URL support](../vanity_url/adm_vanity_url/van_url_cfgtsk_enable_vus.md)
    - [Providing short vanity URLs](../vanity_url/adm_vanity_url/van_url_short.md)
    - [URL Addressability](../../../build_sites/create_sites/url_addressing/index.md)
    - [URL Exporting and importing a web content library](https://opensource.hcltechsw.com/digital-experience/CF219/manage_content/wcm_configuration/wcm_adm_tools/wcmlibrary_export/wcm_config_wcmlibrary_export/)
    [Reference Google discussion](https://chat.google.com/room/AAAAZoQ3L0Y/aIny6fZqgeA/aIny6fZqgeA?cls=10)

