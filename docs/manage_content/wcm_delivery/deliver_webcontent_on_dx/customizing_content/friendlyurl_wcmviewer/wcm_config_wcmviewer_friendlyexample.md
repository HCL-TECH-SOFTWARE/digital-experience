# Friendly URL for web content example

This example demonstrates how friendly URLs for web content work with multiple web content viewers on a single DX page. The example describes the DX page structure referenced by the friendly URLs and explains the underlying structure of the content in an HCL Web Content Manager site framework.

The example also describes the configuration of the web content viewers. Starting with the combined cumulative fix readme 03 \(CF03\), the example also describes the use of the function to validate friendly URLs for web content. This example assumes that HCL Portal is configured to support friendly URLs for web content and their validation.

## Elements in the example

The example is composed of the following elements:

-   **DX page hierarchy**

    The DX page hierarchy in this example is:

    ```
    Content Root
         > Home
              > Human Resources
         > Missing Content
    ```

    !!! note
        The page `Missing Content` applies only to the Combined Cumulative Fix readme 03 \(CF03\).

    The page `Home` has a friendly URL name of `home`, and the page `Human Resources` has a friendly URL name of `hr`. The pages can be accessed directly using the following friendly URLs for pages:

    -   `http://www.example.com:10039/wps/portal/home`
    -   `http://www.example.com:10039/wps/portal/home/hr`
    The following page parameters apply to the following pages in the DX page hierarchy:

    -   The page `Missing Content` has the unique name `missing.content` and is hidden from the navigation by setting the com.ibm.portal.Hidden page parameter to `true`.
    -   The page `Content Root` has the friendly.pathinfo.validation.errorURI page parameter set to `nm:oid:missing.content`.
    -   The page `Human Resources` has the friendly.pathinfo.validation.errorContentPath page parameter set to `/Web Content/Home/Human Resources/HR Default`.
-   **Web Content Manager site framework**

    The Web Content Manager site framework resembles the DX page hierarchy:

    ```
    Web Content (Web Content Library)
         > Home (site area)
              > Human Resources (site area)
                   > HR Welcome (content item)
                   > Health (site area)
                        > Workplace Safety (content item)
                        > Personal Wellness (content item)
                   > HR Default (content item)
         > Missing Content (site area)
              > Content Not Found (content item)
         > HR Menu (menu component)
    ```

    !!! note
        The pages `HR Default`, `Missing Content`, and `Content Not Found` apply only to the Combined Cumulative Fix readme 03 \(CF03\).

    The content items in the `Home` site area can be referenced by the following content paths:

    -   `Web Content/home/human resources/hr welcome`
    -   `Web Content/home/human resources/health/workplace safety`
    -   `Web Content/home/human resources/health/personal wellness`
    -   `Web Content/home/human resources/hr default`

    The site area `Missing Content` stores a default content item that is displayed on the corresponding page by default.

    The menu component `HR Menu` is defined to display content from the `human resources` site area and the `health` site area.

-   **Content association**

    The DX page `Human Resources` has the default content association to the `Web Content/home/human resources` site area.

    The DX page `Missing Content` has the default content association to the `Web Content/missing content` site area.

-   **Web content viewers**

    The page `Human Resources` contains two instances of the web content viewer, `Web Content Viewer A` and `Web Content Viewer B`.

    -   The `Web Content Viewer A` viewer renders the menu component `HR Menu` and is configured to broadcast links to this DX page.
    -   The `Web Content Viewer B` viewer inherits the content to display from the content association defined for the page `Human Resources`. The viewer is configured to receive links from other portlets and from itself.
    The page `Missing Content` contains one instance of the web content viewer. The viewer inherits the content to display from the content association defined for the page `Missing Content`. The viewer is configured to receive links from other portlets and from itself.


## Browsing the example content

With the DX page and web content site framework defined, browsing the content demonstrates how the different elements interact:

1.  Navigate to `Human Resources` page for the first time.
    -   The URL that is displayed in the address bar of the browser is `http://www.example.com:10039/wps/portal/home/hr/!ut/p/b1/...`
    -   The URL reflects the friendly URL names of the DX pages `Home` and `Human Resources`.
    -   The `Web Content Viewer A` viewer renders the menu component and displays links to the content items `HR Welcome`, `Workplace Safety`, and `Personal Wellness`.
    -   The `Web Content Viewer B` viewer shows the default content item `HR Welcome` from the site area `Human Resources`, because of the content association defined on the DX page.

        !!! note
            When the DX page is first displayed, the path of the default content item is not included in the friendly URL.

2.  Click **Workplace Safety** from the list of content items.
    -   The URL that is displayed in the address bar in the browser is `http://www.example.com:10039/wps/portal/home/hr/health/workplace%20safety/!ut/p/b1/...`
    -   The `Web Content Viewer B` viewer displays content item `Workplace Safety`.
    -   The URL is adjusted so that the path to the content item \(`health/workplace%20safety`\) becomes part of the URL.

3.  Click **HR Welcome** from the list of content items.
    -   The URL that is displayed in the address bar of the browser is `http://www.example.com:10039/wps/portal/home/hr/hr%20welcome/!ut/p/b1/...`
    -   The `Web Content Viewer B` viewer displays the content item `HR Welcome` again, giving the same result as when the DX page was viewed for the first time.
    -   Because the `Web Content Viewer A` viewer is broadcasting the link to the content item, the URL that is displayed in the browser is updated to reference the path to the content item \(`hr%20welcome`\).

## Content item references with friendly URLs for web content

The URL displayed in the web browser can sometimes include the content item path when you browse pages and content with web content viewers. However, you can also reference content items directly in friendly URLs for web content.

For example, to reference the content items `HR Welcome`, `Workplace Safety`, and `Personal Wellness` in the context of the `Human Resources` page, you would use the following friendly URLs for web content:

-   `http://www.example.com:10039/wps/portal/home/hr/hr%20welcome`
-   `http://www.example.com:10039/wps/portal/home/hr/health/workplace%20safety`
-   `http://www.example.com:10039/wps/portal/home/hr/health/personal%20wellness`

!!! note
    These friendly URLs for web content include URL-encoded space characters \(`%20`\) instead of unencoded space characters. Your web browser might accept unencoded space characters when specifying content item names in friendly URLs for web content. However, to ensure consistent behavior from the portal, use the URL-encoded value.

## Testing invalid friendly URLs for web content

Sometimes, the friendly URL entered by a user or requested by a search crawler can be wrong. The following table shows friendly URLs that contain path information that does not identify an available content item and an explanation of the portal response when an invalid friendly URL is requested.

|Invalid friendly URL for web content|Portal response|Explanation|
|------------------------------------|---------------|-----------|
|http://www.example.com:10039/wps/portal/home/products/appliances|-   **HTTP Status code** <br/> 404 <br/> -   **Page** <br/> Missing Content <br/> -   **Web content** <br/> Content Not Found|-   **Resolving the page** <br/> The last path segment of the friendly URL that portal can match to a friendly URL name is home. Therefore, the resolved page is Home and /products/appliances becomes the path information of the request. <br/> -   **Validating the path information** <br/> When validating the friendly URL for web content, portal assembles the content path to validate by appending the path information to the path of the default content association of the resolved page. As the page Home does not have a default content association to construct the content path, the friendly URL for web content is considered invalid. <br/> -   **Handling the invalid path information** <br/> The HTTP status code of the response is set to the default value \(404\) because friendly.pathinfo.validation.errorCode is not set. The resolved page \(Home\) inherits the friendly.pathinfo.validation.errorURI setting from Content Root. Therefore, the portal resolves the URI `nm:oid:missing.content` that addresses the page Missing Content. The Web Content Viewer portlet on the page Missing Content uses the default content mapping of the page to determine the web content to render \(Content Not Found\).|
|http://www.example.com:10039/wps/portal/home/hr/group incentives|-   **HTTP Status code** <br/> 404 <br/> -   **Page** <br/> Missing Content <br/> -   **Web content** <br/> HR Default|-   **Resolving the page** <br/> The last path segment of the friendly URL that portal can match to a friendly URL name is hr. Therefore, the resolved page is Human Resources and /group incentives becomes the path information of the request. <br/> -   **Validating the path information** <br/> When validating the friendly URL for web content, portal assembles the content path to validate by appending the path information to the path of the default content association of the resolved page. The result for the page Human Resources is /Web Content/home/human resources/group incentives. As there is no content item for the computed content path, the friendly URL for web content is considered invalid. <br/> -   **Handling the invalid path information** <br/> The HTTP status code of the response is set to the default value \(404\), because friendly.pathinfo.validation.errorCode is not set. The resolved page \(Human Resources\) inherits the friendly.pathinfo.validation.errorURI setting from Content Root. Therefore, portal resolves the URI `nm:oid:missing.content` that addresses the page Missing Content. Additionally, portal sets the public Web Content Manager context as defined by the page parameter friendly.pathinfo.validation.errorContentPath of the resolved page \(/Web Content/Home/Human Resources/HR Default\).|
|http://www.example.com:10039/wps/portal/home/hr/health/medical prevention and rehabilitation|-   **HTTP Status code** <br/> 404 <br/> -   **Page** <br/> Missing Content <br/> -   **Web content** <br/> HR Default|-   **Resolving the page** <br/> The last path segment of the friendly URL that portal can match to a friendly URL name is hr. Therefore, the resolved page is Human Resources and/health/medical prevention and rehabilitation becomes the path information of the request. <br/> -   **Validating the path information** <br/> When validating the friendly URL for web content, portal assembles the content path to validate by appending the path information to the path of the default content association of the resolved page. The result for the page Human Resources is /Web Content/home/human resources/health/medical prevention and rehabilitation. As there is no content item for the computed content path, the friendly URL for web content is considered invalid. <br/> -   **Handling the invalid path information** <br/> The HTTP status code of the response is set to the default value \(404\) because friendly.pathinfo.validation.errorCode is not set. The resolved page \(Human Resources\) inherits the friendly.pathinfo.validation.errorURI setting from Content Root. Therefore, the portal resolves the URI `nm:oid:missing.content` that addresses the page Missing Content. Additionally, the portal sets the public Web Content Manager context as defined by the page parameter friendly.pathinfo.validation.errorContentPath of the resolved page \(/Web Content/Home/Human Resources/HR Default\).|


???+ info "Related information"
    - [Defining friendly URLs without state information for pages in your site](../../../../../deployment/manage/siteurl_cfg/changing_siteurl/cw_navstate/mp_friendly_short_url.md)
    - [Advanced options](../../editing_wcm_viewer_setting/wcm_config_wcmviewer_hadv.md)
    - [Managing custom unique names](../../../../../build_sites/portal_settings/manage_custom_unique_names/index.md)
    - [Hiding and displaying pages in the navigation](../../../../../build_sites/create_sites/building_website/site_navigation/show_hidden_page.md)

