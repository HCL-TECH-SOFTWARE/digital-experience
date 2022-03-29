# Web Content Manager Find Rendering and Script Portlet References

This API allows you to find any page that has a WCM Rendering or Script portlet on it referencing the given WCM content UUID.

## Special Considerations

The API is specific per virtual Portal.

## Limitations

Currently, the API does not support finding draft references in projects.

## Using the Web Content Manager Find Rendering and Script Portlet References API

-   **Endpoint**

    **GET request to:**

    ```
    http://host:port/wps/mycontenthandler/wcmrest/listPageReferences/<uuid>
    ```

    **Sample URL:**

    ```
    http://localhost:10039/wps/mycontenthandler/!ut/p/digest!z9Kf8ax_kfhYNQxUVA-0OQ/wcmrest/listPageReferences/42cfcfe8-764d-4733-b409-87cc83a7a4eb
    ```


-   **Expected Body**

    The body can have the basic WCM structure or be empty:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    </feed>
    ```


-   **Expected Headers**

    LTPA token of the user. Also works anonymously.


-   **Return Body**

    The found results.

    Sample:

    ```
    {
        "listPageReferences" :
        {
            "wcmContentID" : "84b09a3e-9724-4f35-84ce-cad176750d2c",
            "pageReferenceList" :
            [
                {
                    "portleInstanceObjectId" : "Z5_N0KGGB82018R50QD5BQ20S2040",
                    "pageObjectId" : "Z6_N0KGGB82018R50QD5BQ20S2083",
                    "pageTitle" : "More core work"
                },
                {
                    "portleInstanceObjectId" : "Z5_N0KGGB820H6350QDLUV8DF24B3",
                    "pageObjectId" : "Z6_N0KGGB82018R50QD5BQ20S2083",
                    "pageTitle" : "More core work"
                }
            ]
        }
    }
    ```


