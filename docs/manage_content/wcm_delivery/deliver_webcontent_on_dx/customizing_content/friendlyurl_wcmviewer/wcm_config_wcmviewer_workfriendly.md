# About friendly URLs for web content

With friendly URLs for web content, you can construct URLs to content items that are clear and concise.

You can construct friendly URLs that reference web content items, but HCL Web Content Manager itself does not generate friendly URLs by default. However, you can cause the web content viewer to generate friendly URLs. For more information, read *Changing the site URL after an installation*. For more detailed information, read *Defining friendly URLs without state information for pages in your site*

These URLs are easier for users to remember and share and are a convenient way for users to create bookmarks to content items. External applications can also use friendly URLs to provide links directly to content items in the portal. To create effective friendly URLs for web content, you must understand how friendly URLs for DX pages are constructed and how friendly URLs for web content extend those URLs.

## How friendly URLs for pages are constructed

For a page to be referenced as part of a friendly URL, you must assign a friendly URL name for the page. You can assign a friendly URL when you create the page, or you can edit the page properties after the page is created.

Friendly URLs take the following general form:

```
http://host\_name:port\_number/context\_root/portal/page\_id/[!ut/p/encoded\_suffix]
```

The page\_id portion of the friendly URL is made up of the friendly URL names of each page in the page structure. The page structure begins at the content root and ends with the currently selected page.

For example, you might have a DX page called `Products` with a friendly URL name of `products`. Under the `Products` page is another page called `Appliances` with a friendly URL name of `appliances`. When referenced as a complete friendly URL, you would enter the following URL to access the `Appliances` page:

```
http://www.example.com:10039/wps/portal/products/appliances
```

For friendly URLs to work for a specific page, you must define a friendly URL name for each page or label in the page structure. If you want to suppress a friendly URL name from showing in the friendly URL, you can specify a friendly URL name of `com.ibm.portal.friendly.wildcard` for the page. For example, if the `Products` page has a friendly URL name of `com.ibm.portal.friendly.wildcard`, the friendly URL in the previous example for the `Appliances` page is abbreviated:

```
http://www.example.com:10039/wps/portal/appliances
```

!!! note
    When the portal displays a page using a friendly URL, the URL can include an encoded suffix at the end of the URL with the form `!ut/p/base\_codec/rich\_state`. This suffix contains information about the portals state that the portal might use when displaying the page. However, when bookmarking or sharing friendly URLs, it is not necessary to include the suffix.

## How friendly URLs for web content are constructed

Friendly URLs for web content are constructed just as friendly URLs for pages but include additional information that identifies the path to a content item. When the portal decodes a friendly URL, it decodes the URL from beginning to end. Each path segment of the URL is matched with the friendly URL names of DX pages until no more matches can be located. The remainder of the URL is then considered to be path information to a content item.

This path information is mapped to a shared public render parameter that is scoped to the DX page identified by the URL. The fully qualified name of this path-info parameter is `http://www.ibm.com/xmlns/prod/websphere/portal/publicparams:path-info`. The path-info parameter can contain multiple values, with the individual values representing segments of a content path. The segments are concatenated using a forward slash \(`/`\) as a path separator.

Friendly URLs for web content take the following general form:

```
http://host\_name:port\_number/context\_root/portal/page\_id/path\_to\_content/[!ut/p/encoded\_suffix]
```

When you add a web content viewer to a DX page, the web content viewer reads the path-info parameter. The viewer assembles the path to the content to be rendered by appending the path information to the path of the default content mapping defined for the current page. For example, you might have the following friendly URL for web content:

```
http://www.example.com:10039/wps/portal/products/appliances/welcome
```

Several conditions contribute to this URL:

-   The DX page `Products` has a friendly URL name of `products`, and underneath the `Products` page is another page called `Appliances` with a friendly URL name of `appliances`.
-   A web content library contains a site area called `Appliances`, which contains a content item called `welcome`. For this example, the web content library is called `Web Content`.
-   The DX page `Appliances` has a default content mapping to the `Web Content/Appliances` site area.

When a web content viewer is added to the `Appliances` page, the web content viewer interprets the path-info information from the friendly URL. The viewer identifies `welcome` as path information that represents content in a web content library. By examining the default content mapping on the page, the web content viewer locates the `Web Content/Appliances` site area and then displays the `welcome` content item.

The `page\_id` portion of the friendly URL is always evaluated first. Because of this priority, ensure that your naming schemes do not overlap when setting up your DX page hierarchy and your web content hierarchy. In particular, the `path\_to\_content` information cannot begin with segments that could be part of the `page_id` portion of the friendly URL. If the first segment of the `path\_to\_content` information matches the friendly URL name of a DX page at that point in the page hierarchy, the friendly URL could reference the wrong page.

**Considerations for the path-info parameter:**

-   For a web content viewer to process the path-info parameter, the web content viewer must be configured to receive links. If it is configured to receive links, the web content viewer gives precedence to the path-info parameter over the context public render parameter. When you click links displayed by the web content viewer, the link automatically incorporates the path information for the linked item.
-   Clicking **Clear page context** when editing the settings of a web content viewer also clears the path-info parameter.
-   If a friendly URL includes an encoded suffix, it takes this form: `!ut/p/base\_codec/rich\_state`. Because this information is encoded, it is not intended to be read by people. However, the portal itself might act on the information, which can sometimes cause the wrong page to be displayed.

    If the path-info public shared render parameter is encoded in the `rich\_state` portion of the suffix, the path-info contents overwrites the `path\_to\_content` portion of the friendly URL. It is also possible that there could be a mismatch between the path-info contents and the path information encoded in the `rich\_state` section. If such a mismatch occurs, the portal replaces the `path\_to\_content` portion of the friendly URL with the `rich\_state` information and directs the user to that page.

    The following tables demonstrate how the presence of `rich\_state` information affects the page that is shown:

    |Description|URL|
    |-----------|---|
    |The user navigates to URL in the portal.|`http://www.example.com:10039/wps/portal/home/content_item_1/!ut/p/b1/dY07Do...`|
    |The user modifies the URL in the browsers address bar to go to `content_item_2`.|`http://www.example.com:10039/wps/portal/home/content_item_2/!ut/p/b1/dY07Do...`|
    |Resulting URL.|`http://www.example.com:10039/wps/portal/home/content_item_1/!ut/p/b1/dY07Do...`Because the `rich\_state` portion of the URL still contains path information pointing to `content_item_1`, the portal overwrites the `path\_to\_content` portion of the URL. The user remains on the same page instead of being directed to the page where `content_item_2` is displayed.|

    |Description|URL|
    |-----------|---|
    |The user navigates to URL in the portal.|`http://www.example.com:10039/wps/portal/home/content_item_1/!ut/p/b1/dY07Do...`|
    |The user modifies the URL in the browsers address bar to go to `content_item_2`.|`http://www.example.com:10039/wps/portal/home/content_item_2`|
    |Resulting URL.|`http://www.example.com:10039/wps/portal/home/content_item_2`Because the user removed the `rich\_state` portion of the URL when modifying the URL, the `path\_to\_content` portion of the URL is evaluated. The user is directed to the page where `content_item_2` is displayed.|


## Content URL generation filters and friendly URLs

The following applies only to HCL Portal Version 8.5 CF07 and earlier Combined Cumulative Fixes: A content URL generation filter is used to customize the URLs that are generated by a web content viewer. The web content viewer generates a content URL whenever there is a URL to web content within content that the viewer is displaying. By creating a plug-in that implements a content URL generation filter, you can tailor the URLs to content items. For details, read *Creating a content URL generation filter class*.

## Troubleshooting friendly URLs for web content

If you are seeing unexpected behavior when using friendly URLs for web content, review these issues to help identify why the friendly URL is not working. Friendly URLs for web content take the following general form:

```
http://host\_name:port\_number/context\_root/portal/page\_id/path\_to\_content/[!ut/p/encoded\_suffix]
```

-   Support for friendly URLs for web content is only enabled when the configuration properties `friendly.enabled` and `friendly.pathinfo.enabled` both have a value of true in the portal Configuration Service.
-   The web content viewer displays a warning message in the following situations:
    -   The friendly URL for web content references a content item that cannot be located.
    -   The user does not have sufficient access rights to view the referenced content item.

-   The DX page specified in the friendly URL for web content must have a default content mapping to an existing web content site area. If there is no default content mapping on the page, any web content viewers on the page display a warning message about the missing page context.
-   If the target page does not contain a web content viewer that is configured to receive links, the content item specified in the friendly URL for web content is not displayed.
-   If a web content viewer is not configured to broadcast links, links rendered by the viewer do not affect the friendly URL for web content.
-   The default DX page selection does not show the path of the default content item in the friendly URL. The `path\_to\_content` portion of the URL includes the content path information only after users browse web content using links displayed by the viewer.
-   Friendly URLs for web content are URL-encoded. When using friendly URLs for web content, special characters that show in any segment of the URL must be URL-encoded. For example, a space character in the URL would be replaced by its URL-encoded equivalent: `%20`. Some web browsers perform automatic decoding of the URL. In this case, you might see unencoded characters in the URL, but the portal always works with an encoded version of the URL.
-   The segments of a friendly URL for web content are not localized for multiple languages. The `path\_to\_content` portion of a friendly URL for web content is composed of the unlocalized names of web content folders, site areas, and content items. For example, if you name these items with English terms, the friendly URL for web content is constructed of these English terms, even if the portal language is not English.


???+ info "Related information"
    - [Defining friendly URLs without state information for pages in your site](../../../../../../../deployment/manage/siteurl_cfg/changing_siteurl/cw_navstate/mp_friendly_short_url.md)
    - [Changing the site URL after an installation](../../../../../../../deployment/manage/siteurl_cfg/changing_siteurl/index.md)

