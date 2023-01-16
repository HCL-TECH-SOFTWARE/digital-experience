# Access Content as a Service

To access your Content as a Service pages, you can write links to your content that specifies the CaaS page as target.

When you construct the URLs for your links to web content, you can use the urile URL parameter to identify the content item. To access the content item by using the CaaS page, use one of the following methods:

-   Include the friendly name of the CaaS page in the URL and add the URL parameter `current=true` to the URL.
-   Specify the unique name of the CaaS page \(`ibm.portal.caas.page`\) in the URL by using the "page" URL parameter.

## Generic URLs

-   **Addressing the CaaS page from a virtual portal by using the page friendly name:**

    ```
    http://hostname/context\_root/virtual\_portal\_context/caas?current=true&urile=wcm:path:library/site\_area\_path/content&mime-type=mime\_type&pagedesign=library/folder/presentation\_template
    ```

-   **Addressing the CaaS page from a virtual portal by using the page parameter:**

    ```
    http://hostname/context\_root\_poc/virtual\_portal\_context?page=ibm.portal.caas.page&urile=wcm:path:library/site\_area\_path/content&mime-type=mime\_type&pagedesign=library/folder/presentation\_template
    ```


## Example URLs

A URL to render the content item Item1 that is stored in the site area SiteArea1 of Library1 by applying a JSON presentation template that is named Presentation1 from the library that is named Library2 looks like the following examples:

-   **Addressing the CaaS page from a virtual portal by using the page friendly name:**

    ```
    http://example.com/wps/myportal/vp1/caas?current=true&urile=wcm:path:Library1/SiteArea1/Item1&mime-type=application/json&pagedesign=Library2/Presentation1
    ```

-   **Addressing the CaaS page from a virtual portal by using the page parameter:**

    ```
    http://example.com/mypoc/vp1?page=ibm.portal.caas.page&urile=wcm:path:Library1/SiteArea1/Item1&mime-type=application/json&pagedesign=Library2/Presentation1
    ```


To render the content item that is found at location Web Content/News/News1, you can use a URL like the following example:

```
http://example.com/wps/mypoc?urile=wcm:path:/Web+Content/News/News1&page=ibm.portal.caas.page
```

If a JSON presentation component is associated to that content, you can request the JSON representation of this content item by using URL like the following example:

```
http://example.com/wps/mypoc?urile=wcm:path:/Web+Content/News/News1&page=ibm.portal.caas.page&mime-type=application/json
```


???+ info "Related information"
    - [Writing links to web content](../../wcm_authoring/authoring_portlet/content_management_artifacts/tags/wcm_dev_writing-links.md)

