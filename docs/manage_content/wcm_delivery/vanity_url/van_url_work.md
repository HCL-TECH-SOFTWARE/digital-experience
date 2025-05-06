# How vanity URLs work

Learn about vanity URLs, how they work, and how you work with them.

In a new HCL Digital Experience (DX) Version 9.5 installation, vanity URL support is enabled. If you upgraded your HCL DX from a previous version, vanity URL support might be disabled. You can enable and disable vanity URL support as required by using a portal configuration task. For more information, see [Enabling vanity URL support](../vanity_url/adm_vanity_url/van_url_cfgtsk_enable_vus.md). For vanity URLs to work, you must also enable managed pages. If vanity URL support is not enabled and a user tries to access a vanity URL, the portal gives a `404` code.

Vanity URLs are stored as part of the page data on the Web Content Manager portal page site area. When you create a vanity URL, both the vanity URL and the information for resolving the vanity URL is stored in the Vanity URL property of the portal page site area item. This storage method has the following consequences:

-   You can manage vanity URLs using the portal toolbar and the Managed Pages features. If you want to use vanity URLs, the Managed Pages feature must be enabled. This feature is enabled by default in the HCL DX Version 9.5 installation.
-   Assigning a new vanity URL to a page, or changing or deleting an existing vanity URL in the scope of a project, creates a draft of the page.
-   To export vanity URL information, use the [WCM Export feature](../../../manage_content/wcm_configuration/wcm_adm_tools/wcmlibrary_export/wcm_config_wcmlibrary_export.md) of the portal page site area instead of the [XML configuration interface (XMLAccess)](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md) page.

HCL DX provides a vanity URL servlet. It resolves an incoming vanity URL request to the appropriate portal page or content item.

You can assign multiple vanity URLs to a page. A vanity URL can have different locales that are attached to it.

Vanity URLs are not included in the portal search seedlist. To provide good ranking for your vanity URL pages with search engines, assign friendly names to them. The friendly names are listed in the portal search seedlist. To achieve better search rankings, the portal search seedlist must not include the additional Vanity URLs.

If you have virtual portals, the following rules apply:

-   You must assign a vanity URL that is unique across all of your virtual portals.
-   The hostname of the current virtual portal is used as the hostname of the vanity URL. If the virtual portal was defined using a context path, the hostname of the virtual portal context path is used.
-   For a vanity URL in the default virtual portal, the hostname of that default virtual portal is used as the hostname of the vanity URL.

## Vanity URL sample use case

See the process flow below for an example of a business user who works with a vanity URL:

1. You have a shoe shop and you want to advertise a shoe promotion sale. You can use a portal page that has the following friendly URL:

    ```
    http://hostname:port/wps/portal/home/shoe_promotion_page
    ```

2. When you create a vanity URL, you define the vanity URL segment (for example, `shoe-sale`). You can also select from the following options:

    - Portal content item: Use this option to specify a content item on the target page for the vanity URL. When a site visitor accesses the vanity URL, the portal shows the site visitor the page with the content item that you specified.
    - Locale: If you use this option to specify a locale for the target page for the vanity URL. When a site visitor accesses the vanity URL, the portal shows the site visitor the page in the language and locale that you specified.

3. To advertise your shoe sale, insert your vanity URL segment `shoe-sale` into the URL, and add a preceding segment `vanityurl`. For example:

    ```
    http://hostname/wps/vanityurl/shoe-sale
    
    ```

    This URL is the vanity URL that you post in your advertisements for the shoe sale.

4. When a user accesses the page by using this URL, the portal redirects the user to your shoe sale page using the URL provided earlier:

    ```
    http://hostname:port/wps/portal/home/shoe_promotion_page
    ```

    When the portal redirects the user, it also adds state information to the URL. For example, this state information includes the portal and the locale information (selected when you created the vanity URL in the previous steps).

5. You can make the vanity URLs shorter by omitting the portal root context `/wps` and the string `/vanityurl`. In this case, you must use a web server and define a rewrite rule. For more information, see [Providing short vanity URLs](../../../manage_content/wcm_delivery/vanity_url/adm_vanity_url/van_url_short.md). You can then pass out the following URL for your advertising campaign:

    ```
    http://hostname:port/shoe-sale
    ```

    When a user accesses this URL, the HTTP server rewrites this URL to the longer URL, and then redirects the user as described before.

???+ info "Related information"
    - [Enabling vanity URL support](../vanity_url/adm_vanity_url/van_url_cfgtsk_enable_vus.md)
    - [Providing short vanity URLs](../vanity_url/adm_vanity_url/van_url_short.md)
    - [URL Addressability](../../../build_sites/create_sites/url_addressing/index.md)
    - [Exporting and importing a web content library](../../../manage_content/wcm_configuration/wcm_adm_tools/wcmlibrary_export/wcm_config_wcmlibrary_export.md)
