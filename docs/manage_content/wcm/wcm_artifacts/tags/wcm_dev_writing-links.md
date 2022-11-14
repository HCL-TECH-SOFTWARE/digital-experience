# Writing links to web content

Links to content items can be written as URLs.

The following examples show how to write links to web content that are to be used with the web content viewer or the Web Content Manager servlet.

## Linking to web content from other web content

To create a link from a piece of web content to another piece of web content, use the following URL format:

```
[URLCmpnt mode="current" context="Selected" type="Content" 
name="library/site\_area\_path/content"]
```

-   **library**

    The name of the web content library.

-   **site\_area\_path**

    The path to the site area where the content is located.

-   **content**

    The name of the content item.


## Linking to web content from an external portlet or website

To create a link from an external portlet or website that displays web content, use the following URL format:

```
`http://hostname/context\_root/library/site\_area\_path/content`
```

-   **hostname**

    The name of the Web Content Manager host.

-   **context\_root**

    The Web Content Manager context root.

    For example: wps/wcm/connect

-   **library**

    The name of the web content library.

-   **site\_area\_path**

    The path to the site area where the content is located.

-   **content**

    The name of the content item.


## Linking to content displayed in a web content viewer from an external portlet or website

To create a link from an external portlet or website to content displayed in a web content viewer, use one of the following piece of content \(POC\) URIs:

-   **`wcm:path:content\_path`**

    Use this POC URI to link to the content with the specified path.

    For example: /Web Content/Articles/Sample Article.


-   **`wcm:oid:content\_id`**

    Use this POC URI to link to the content with the specified ID.

    For example: fa2bfd32-7b2f-4394-a5ab-2e150c5ed8aa.


Use one of the POC URIs to create a URL with the following format:

```
http://hostname/context\_root/mypoc/virtual\_portal\_context?urile=poc\_uri
```

**Note:** The POC URI needs to be URL encoded. For example:

```
http://myportal/wps/mypoc/myvp?urile=wcm%3Apath%3A/Web+Content/Articles/Sample+Article
```

You can add query parameters to the URL to specify how the portal resolves the POC URI.

To address a specific portal page, use one of the following parameters. The parameters cannot be combined:

-   **page**

    To specify the unique name or the object ID of the target page, use this parameter.

    For example: &page=my.content.page

-   **mapping**

    To specify the target page using a URL mapping, use this parameter.

    For example: &mapping=myContentPage

-   **current**

    To specify that the current page is the target page, use this parameter.

    For example: &current=true


To use a specific presentation template to render the requested content, use the following parameter:

-   **pagedesign**

    Specify the path to the presentation template in your web content library including the names of folders.

    For example: &pagedesign=/Web+Content/My+Templates+Folder/My+Presentation+Template


To specify a mime type for the Content as a Service feature described in topic *Content as a Service,* use the following parameter:

-   **mime-type**

    Specify the MIME type that is used as response content type of a **Content as a Service** request. If you enable your content for different data formats based on the MIME type, this parameter specifies the content type produced by the design component that renders the requested content. You can either use an element from the content item or a presentation template to produce the output. For more information about enabling different data formats based on the mime-type parameter, go to section **Selecting data format based on MIME** type. For example: &mime-type=application/json


**Dynamic page lookup:** The `page` parameter is optional. You can use the link broadcasting feature of the web content viewer to dynamically look up pages by omitting the `page` parameter. For example, if you have a content item **News1**, stored in the library **Web Content** under the site area **News**, you can create a link to that content item with the following URL:

```
http://hostname/context\_root\_poc?urile=wcm%3Apath%3A/Web+Content/News/News1
```

-   **hostname**

    The name of the Web Content Manager host.

-   **context\_root\_poc**

    The portal context root.

    For example, wps/poc or wps/mypoc.


Alternatively you can also add a specific portal page by using a URL mapping by using the following format:

```
http://hostname/context\_root/portal_page_url_mapping/?current=true&urile=wcm%3Apath%3Alibrary/site\_area\_path/content
```

-   **hostname**

    The name of the Web Content Manager host.

-   **context\_root**

    The portal context root. For example, anonymous sites can use wps/portal. Otherwise use wps/myportal.

-   **portal\_page\_url\_mapping**

    The compound name of the portal URL mapping to the portal page that contains the Web Content Manager portlet \(URL mappings can be set up using the portal administration portlets\).

-   **library**

    The name of the web content library.

-   **site\_area\_path**

    The path to the site area where the content is located.

-   **content**

    The name of the content item.


**Note:** The web content viewer on the target page must be configured to receive links from **Other portlets and this portlet**.

## Adding cache parameters to a URL

You can add web content [Cache parameters](wcm_dev_caching_cache-parameters.md) and [Cache expire parameters](wcm_dev_caching_expire-parameters.md) to a URL to custom caching strategies to individual items. For example:

```
`http://hostname/context\_root/library/site\_area\_path/content?cache=site&contentcache=session`
```

-   **hostname**

    The name of the Web Content Manager host.

-   **context\_root**

    The Web Content Manager context root.

    For example: `wps/wcm/connect`

-   **library**

    The name of the web content library.

-   **site\_area\_path**

    The path to the site area where the content is located.

-   **content**

    The name of the content item.


## Adding a last modified parameter to a URL

You can add the last modified date of the current content item to the header of the rendered page. For example:

```
`http://hostname/context\_root/library/site\_area\_path/content?returnLastModified=true`
```

-   **hostname**

    The name of the Web Content Manager host.

-   **context\_root**

    The Web Content Manager context root.

    For example: `wps/wcm/connect`

-   **library**

    The name of the web content library.

-   **site\_area\_path**

    The path to the site area where the content is located.

-   **content**

    The name of the content item.


## Overriding the context mode

The urlModeOverride parameter is used to override the default URL context when linking to URL, Link, and Placeholder components. These are the accepted values:

-   **current**

    Chooses the URL style based on the request.

-   **standalone**

    Generates URLs that render outside a portal site, such as a servlet site.

-   **poc**

    Generates a stateful Portal URL that renders content against the mapped wcm rendering portlet, or a servlet URL if no mapping exists. Functions as 'static' when rendering outside a portal site.

-   **static**

    Generates a short stateless Portal URL, or a servlet URL if no mapping exists.


## Other URL Parameters

-   **WCMRenderAbsoluteURLs**

    Add this to a URL to generate an absolute URL of an item instead of the relative URL.



**Related information**  


[Content as a Service pages](../wcm/cntnt_serv_pgs.md)

[Select data format based on MIME type](../wcm/slct_dta_frmt_mime_type.md)

[Access Content as a Service](../wcm/access_cntnt_serv.md)

