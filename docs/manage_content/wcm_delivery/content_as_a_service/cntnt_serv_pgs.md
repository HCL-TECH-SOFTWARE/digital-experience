# Accessing Content as a Service pages

To access your Content as a Service (CaaS) pages, you can write links to your content that specifies the CaaS page as target.

When you construct the URLs for your links to web content, you can use the `urile` URL parameter to identify the content item. To access the content item by using the CaaS page, use one of the following methods:

-   Include the friendly name of the CaaS page in the URL and add the `current=true` parameter to the URL. For example:

    ```
    http://hostname/context\_root/virtual\_portal\_context/caas?current=true&urile=wcm:path:library/site\_area\_path/content&mime-type=mime\_type&pagedesign=library/folder/presentation\_template
    ```

-   Specify the unique name of the CaaS page \(`ibm.portal.caas.page`\) in the URL by using the `page` URL parameter. For example:

    ```
    http://hostname/context\_root\_poc/virtual\_portal\_context?page=ibm.portal.caas.page&urile=wcm:path:library/site\_area\_path/content&mime-type=mime\_type&pagedesign=library/folder/presentation\_template
    ```

## Example URLs

To render the **Item1** content item stored in the **SiteArea1** site area of **Library1** with a **Presentation1** JSON presentation template from **Library2** applied to it, refer to the following examples:

-   Addressing the CaaS page from a virtual portal using the **page friendly name**:

    ```
    http://example.com/wps/myportal/vp1/caas?current=true&urile=wcm:path:Library1/SiteArea1/Item1&mime-type=application/json&pagedesign=Library2/Presentation1
    ```

-   Addressing the CaaS page from a virtual portal using the **page parameter**:

    ```
    http://example.com/mypoc/vp1?page=ibm.portal.caas.page&urile=wcm:path:Library1/SiteArea1/Item1&mime-type=application/json&pagedesign=Library2/Presentation1
    ```

To render the content item found in `Web Content/News/News1`, you can use a URL such as the following:

```
http://example.com/wps/mypoc?urile=wcm:path:/Web+Content/News/News1&page=ibm.portal.caas.page
```

If a JSON presentation component is associated to a content item, you can request its JSON representation using a URL such as the following:

```
http://example.com/wps/mypoc?urile=wcm:path:/Web+Content/News/News1&page=ibm.portal.caas.page&mime-type=application/json
```

## HCLSoftware U learning materials

To learn more details on how to develop with HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Intermediate)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3500){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"
    - [Writing links to web content](../../wcm_authoring/authoring_portlet/content_management_artifacts/tags/wcm_dev_writing-links.md)
    - [URL Addressability](../../../build_sites/create_sites/url_addressing/index.md)
