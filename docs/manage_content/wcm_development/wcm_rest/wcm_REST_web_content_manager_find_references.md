# Web Content Manager Find Rendering and Script Portlet References

This API allows you to find all references to an item identified by its UUID, either by a DAM UUID for an asset or a WCM UUID for a WCM item.

## Special Considerations

The API is specific per virtual Portal.

## Limitations

Currently, the API does not support finding draft references in projects.

## Using the Web Content Manager Find Rendering and Script Portlet References API

-   **Endpoint**

    **GET request for references to WCM to:**

    ```
    http://host:port/wps/mycontenthandler/wcmrest/references/wcm/<uuid>
    ```

    **GET request for references to DAM to:**

    ```
    http://host:port/wps/mycontenthandler/wcmrest/references/dam/<dam-uuid>
    ```

    **Sample URL:**

    ```
    http://localhost:10039/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/references/wcm/3d464f55-d909-41dd-b760-57667ddd290c?mime-type=application/json
    ```


-   **Expected Body**

    The body can have the basic WCM structure or be empty:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    </feed>
    ```


-   **Expected Headers**

    LTPA token of the user. 

-   **Optional Query Parameters**

    ?options=item-path - if specified the path details (parents) are listed.
    ?options=details - additional details like access-control link.
    ?mime-type=application/json - return JSON

-   **Return Body**

    The found results.

    Sample:

    ```
    {
    "feed" :
    {
        "id" : "wcmrest:references/wcm/2c040b1b-3dde-4c42-ab77-8e2bb5b07a63/?mime-type=application%2Fjson",
        "title" : "wcmrest:references/wcm/2c040b1b-3dde-4c42-ab77-8e2bb5b07a63/?mime-type=application%2Fjson",
        "updated" : "Thu, 07 Sep 2023 18:18:08.665Z",
        "total" : "1",
        "entry" :
        [
            {
                "id" : "wcmrest:b27fdd0c-e566-4330-b52a-a4ed78d7e1e5",
                "title" :
                {
                    "lang" : "en",
                    "value" : "imagine"
                },
                "summary" :
                {
                    "lang" : "en"
                },
                "name" : "imagine",
                "type" : "Content",
                "updated" : "Fri, 18 Aug 2023 18:13:28.297Z",
                "author" :
                [
                    {
                        "distinguishedName" : "uid=wpsadmin,o=defaultWIMFileBasedRealm",
                        "uri" : "/wps/mycontenthandler/!ut/p/digest!IBlykyRUWW3lRpMx4_zgvA/um/users/profiles/Z9eAeL1DAJRGCH9OEJM86O1CCJMG6OHD8JM8CKPCGJMGC1BEAMQC6G9PAJP8C63",
                        "name" : "wpsadmin",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "uid=wpsadmin,o=defaultWIMFileBasedRealm",
                    "uri" : "/wps/mycontenthandler/!ut/p/digest!IBlykyRUWW3lRpMx4_zgvA/um/users/profiles/Z9eAeL1DAJRGCH9OEJM86O1CCJMG6OHD8JM8CKPCGJMGC1BEAMQC6G9PAJP8C63",
                    "name" : "wpsadmin",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/mycontenthandler/!ut/p/digest!IBlykyRUWW3lRpMx4_zgvA/wcmrest/Content/b27fdd0c-e566-4330-b52a-a4ed78d7e1e5",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/mycontenthandler/!ut/p/digest!IBlykyRUWW3lRpMx4_zgvA/wcmrest/Content/b27fdd0c-e566-4330-b52a-a4ed78d7e1e5",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/mycontenthandler/!ut/p/digest!IBlykyRUWW3lRpMx4_zgvA/wcmrest/Library/226f35d9-ac34-4f01-932c-cdd801a52b51",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!IBlykyRUWW3lRpMx4_zgvA/wcm/oid:b27fdd0c-e566-4330-b52a-a4ed78d7e1e5",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "EXPIRED",
                        "label" : "Expired",
                        "lang" : "en"
                    }
                ]
            }
        ]
    }
}
    ```



