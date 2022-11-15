# How to use REST with Web Content Manager to Find Soft Deleted Content Items

This new API lets you find any deleted items inside a given virtual Portal. Deleted items may be restored using the [Restore Version API](wcm_rest_crud_purge_restore_deleted.md), as described in that section of the documentation. An additional API is in progress to enable purging of the deleted item.

!!! note
    The APIs to Find Soft Deleted Content items is available for HCL Digital Experience 9.5 CF192 and higher releases.

## Using the Find Soft Deleted Content Items API

-   **Endpoint**

    GET request to:

    ```
    <http://host:port/wps/mycontenthandler/wcmrest/deletedItems/>
    ```

    Sample URL:

    ```
    <http://localhost:10039/wps/mycontenthandler/!ut/p/digest!fF-J90hAcntykMfifdLPZQ/wcmrest/deletedItems/>
    ```

    Sample URL for a virtual Portal:

    ```
    <http://localhost:10039/wps/mycontenthandler/vp1/!ut/p/digest!Lc-UcTPs2kglEFa_Im-cYQ/wcmrest/deletedItems/>
                           
    ```

-   **Expected Body**

    Body can just have the basic WCM structure or be empty:

    ```
    
    <?xml version="1.0" encoding="UTF-8"?/>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0"/>
    </feed/>
    ```

-   **Expected Headers**

    LTPA token of the user. Also works anonymously.

-   **Return body**

    For the results that are returned, the following fields are exposed:

    -   uuid : The uuid identified for the deleted item.
    -   title : The title for the default language this item was saved under.
    -   name : The name of the deleted item.
    -   deletionDate : The date/time it was deleted.
    -   deletedBy : The distinguished name of the user that deleted the item.
    -   type : The type of the item that was deleted
    -   sample values: Content, Sample:

        ```
        
        {{
            "deletedItems" :
            {
                "deletedItemList" :
                [
                    {
                        "uuid" : "7b23185e-4171-4f4a-94a7-6fc205a5dbce",
                        "title" : "Article",
                        "name" : "Article",
                        "deletionDate" : "2020-12-17T09:42:50.173Z",
                        "deletedBy" : "uid=wpsadmin,o=defaultWIMFileBasedRealm",
                        "type" : "Content"
                    },
                    {
                        "uuid" : "8275d5b9-59e3-4011-9ffb-dc8e782ea85f",
                        "title" : "No Items Found",
                        "name" : "No Items Found",
                        "deletionDate" : "2020-12-17T09:42:50.754Z",
                        "deletedBy" : "uid=wpsadmin,o=defaultWIMFileBasedRealm",
                        "type" : "Content"
                    },
                    {
                        "uuid" : "44fa832d-9fa2-485c-b592-dc81fac88625",
                        "title" : "List of Articles",
                        "name" : "List of Articles",
                        "deletionDate" : "2020-12-17T09:42:51.053Z",
                        "deletedBy" : "uid=wpsadmin,o=defaultWIMFileBasedRealm",
                        "type" : "Content"
                    },
                    {
                        "uuid" : "9916d0ab-1b06-45a3-95b1-4ed72bf00fdd",
                        "title" : "Jim",
                        "name" : "Jim",
                        "deletionDate" : "2021-01-03T19:59:03.269Z",
                        "deletedBy" : "uid=wpsadmin,o=defaultWIMFileBasedRealm",
                        "type" : "Content"
                    }
                ]
            }
        }  
        ```



