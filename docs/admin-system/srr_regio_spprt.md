# Region support and multi-regional sites 

Global companies might choose to publish content, and offer products or services specifically for certain regions. While today a language can be detected, there is no technical solution available to detect a region.

In this context you need to distinguish between the various regions; in this context the term 'region' is sometimes used synonymous with 'country'.

As was described for language identification in the topic about language support by Portal Search, Internet search engines also find that location or region specific metadata is not reliable enough to use it for region detection. Consequently crawlers expect the URL to carry region specific information. The most obvious is that the top-level domain name carries the country code and thereby the region information. For example, a domain name such as `XYZ-Co.fr` or `XYZ-Co.co.jp` strongly indicates that the company resides or operates either in France or Japan.

If top-level domain names are used, no further action is required to allow region identification of that website. However, for more generic domain names such as `.com` or `.eu`, additional steps are required for enablement. In such cases you need to encode the region information in the URL, and pair it with tools provided by Internet search engines, such as Google Webmaster Tools for Geographic Targeting.

-   **[Enabling region identification in HCL Portal ](../admin-system/srrt_nbl_regio_id.md)**  
You can use geographic targeting tools to associate a URL pattern with a specific region. However not all URL patterns are typically supported.

**Parent topic:**[Language and region support in Portal Search ](../admin-system/srr_lng_regio_spprt.md)

