# Generic reading by using REST services for Web Content Manager

Although not all item types are handled by the REST service, all item types can be read in a generic fashion by using the REST service.

You can send a GET request to any web content item by using the following URI:

```
/item/{item-uuid}
```

## Example

```
GET /wps/mycontenthandler/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda HTTP/1.0


HTTP/1.0 200 OK

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>c98d11e1-7f2a-480e-9aac-40eb1949cbda</id>
    <title>Web Content</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <updated>2011-05-16T20:42:29.979Z</updated>
    <wcm:type>interface com.ibm.workplace.wcm.api.Library</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
</entry>
```

## Digital Experience Core Configuration API

The Digital Experience Core Configuration API allows developers to retrieve DX configuration settings. It is available for use with HCL Digital Experience 9.5 Container Update CF181 and higher releases.

-   **Endpoint**

    **GET request to:**

    ```
    http://host:port/wps/mycontenthandler/dxconfig/configuration/
    ```

    **Sample URL:**

    ```
    http://localhost:10039/wps/mycontenthandler/!ut/p/digest!gZZrj7OT0HwfuJ4loXv_ng/dxconfig/configuration/
    ```


-   **Expected Body**

    **With payload:**

    ```
    {
    }
    
    ```


-   **Expected Headers**

    LTPA token of the user.


-   **Return body**

    Result: 200, if successful.

    Result Payload:

    ```
        "dam": {
            "enabled": true,
            "picker-url-files": "/wps/myportal/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zizS0sLTy8TIwC_J2CnQwCQ0PDDIxDAw0MLIz1I4EKzDEUmJoEGZqFGhu4G-n7G-v7BeQkZubph-BXWJAd6AgAFF9JPg!!/?hcldam=true&assetType=File",
            "picker-url-images": "/wps/myportal/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zizS0sLTy8TIwC_J2CnQwCQ0PDDIxDAw0MLIz1I4EKzDEUmJoEGZqFGhu4G-n7G-n7BeQkZubph-BXWJAd6AgAdmdhFA!!/?hcldam=true&assetType=Image"
        },
        "wcm": {
            "maxUploadSize": 16,
            "browserCacheMaxAge": 600,
            "picker-url-content": "/wps/myportal/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zi_RwNXD3cTYwC_F2CnQwCXU3DDNx8jA29DU31_Q3N9P0CchIz8_RDoszjfQ0MnQ2cTAwMLAN8DA0CQ32cPD2CzIwNzEz0C7IdFQE0ftdV/?mode=picker"
        }
    }
    ```


Explanation of parameters

-   dam - enabled: If the Digital Asset Management (DAM) is configured.
-   dam - picker-url-files: If DAM is enabled, this parameter holds the URL to launch the DAM Selection interface and the filter for Files (excluding images).
-   dam - picker-url-images: If DAM is enabled, this parameter holds the URL to launch the DAM Selection interface and filter for Images (excluding other files).
-   wcm - maxuploadsize: Maximum size of assets that can be uploaded to the Web Content Manager JCR (not the Digital Asset Manager storage container).
-   wcm - browserCacheMaxAge: The configured timeout value in Web Content Manager for static resources, in seconds. Default value is 600 seconds.
-   wcm - picker-url-content: The URL to launch the Content Picker (selection interface).


