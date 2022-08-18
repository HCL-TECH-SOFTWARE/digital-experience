# AttributeResource values for federated documents

The AttributeResource tag is used as a placeholder to display attributes from a federated documents selection rule within a personalization element design. It cannot be used in a presentation template or other element types.

When used with a federated documents selection rule, the following values for the `attributeName` attribute of the `AttributeResource` tag are supported for each document in the result set:

-   **`authors`**

    This attribute displays the names of the authors of the document. The actual result depends on the corresponding attribute mapping that needs to exist at the remote content management system. If no such mapping exists, an empty value is displayed.

-   **`contentLink`**

    This attribute displays the absolute URL that can be used to download the document. Unlike the `rawContentLink` attribute, the `contentLink` attribute contains the URL that addresses the Ajax proxy with parameters used to download the document through the proxy. You can disable proxied URLs by editing the `wcm.pzn.ecm.enable.proxy.content.links` property in the `WCM WCMConfigService` configuration service and setting the value to `false`.

-   **`contentLinkAuthenticated`**

    This attribute displays the absolute URL that can be used to download the document, including authentication information when needed. Similar to the `contentLink` attribute, the `contentLinkAuthenticated` attribute contains the URL that addresses the Ajax proxy with parameters used to download the document through the proxy. However, depending on the personalization selection rule, the `contentLinkAuthenticated` attribute might also include information about a shared credential vault that is used to authenticate the user. The credential vault authentication information is available only if the selection rule was created by using a credential vault.

-   **`contentType`**

    This attribute displays the MIME type of the document. If this information is not served by the remote content management system, an empty value is displayed.

-   **`contributors`**

    This attribute displays the names of the contributors of the document. The actual result depends on the corresponding attribute mapping that needs to exist at the remote content management system. If no such mapping exists, an empty value is displayed.

-   **`id`**

    This attribute displays the unique ID of the document.

-   **`published`**

    This attribute indicates the point in time of the first availability of the document. The actual result depends on the corresponding attribute mapping that exists at the remote content management system. If no such mapping exists, an empty value is displayed.

-   **`rawContentLink`**

    This attribute displays the raw absolute URL that can be used to download the document. Although similar to the `contentLink` attribute, the `rawContentLink` attribute contains the URL as it appears in the federated documents feed used by the federated document selection rule. This value does not include any additional proxy that is addressed in the URL.

-   **`size`**

    This attribute displays the size of the document in bytes. If this information is not served by the remote content management system, an empty value is displayed.

-   **`summary`**

    This attribute displays the summary of the document. If this information is not returned by the remote content management system, an empty value is displayed.

    **Note:** Because the value of the summary attribute can contain large character data, the amount of data that is returned by this attribute is limited. You can increase or decrease the amount of data that is returned by setting the `wcm.pzn.ecm.max.field.length` property in the **WCM WCMConfigService** configuration service.

-   **`title`**

    This attribute displays the title of the document. The actual result depends on the corresponding attribute mapping that needs to exist at the remote content management system. If no such mapping exists, the file name is displayed.

-   **`updated`**

    This attribute indicates the point in time of the last update to the document. The actual result depends on the corresponding attribute mapping that exists at the remote content management system. If no such mapping exists, an empty value is displayed.

-   **`viewLink`**

    This attribute displays the absolute URL that can be used to open the document in context of the remote content management user interface. If no such URL is returned by the remote content management system, an empty value is displayed.

    **Note:** The `viewLink` attribute is not supported if you are connected to a HCL Content Manager repository or are using a CMIS server.


Here is an example of how to use these attribute values in a design:

```
<li>
  <a target="_blank" href="[AttributeResource attributeName="contentLink"]">
    [AttributeResource attributeName="title"]
  </a>
</li>
```

**Parent topic:**[How to use a federated documents rule in a personalization component \| HCL Web Content Manager](../wcm/wcm_dev_feddocs_using.md)

