# How to use REST with Web Content Manager to Purge Deleted Content Items

This API allows for the permanent removal of deleted content items.

**Note:** The APIs to Purge Deleted Content items is available for HCL Digital Experience 9.5 CF192 and higher releases.

## Using the Purge Deleted Content Items API

-   **Endpoint**

    POST request to:

    ```
    <http://host:port/wps/mycontenthandler/wcmrest/purgeItem/{UUID of deleted item to be purged}/>
    ```

    Sample URL:

    ```
    <http://localhost:10039/wps/mycontenthandler/wcmrest/purgeItem/0988c73c-38df-41bc-9fd4-0e20e8957600/>
    ```

-   **Expected Body**

    Body should consist of basic WCM structure:

    ```
    
                        <?xml version="1.0" encoding="UTF-8"?/>
                        <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0"/>
                        </feed/>
    ```

-   **Expected Headers**

    LTPA token of the user.

-   **Return body**

    On a success, the response code will be 201 and the body of the response will consist of a single json entry, purgeStatus, with fields containing the uuid of the purged item and the status of the purge to confirm that it has succeeded.

    Sample:

    ```
    {
        "purgeStatus": {
            "uuid": "0988c73c-38df-41bc-9fd4-0e20e8957600",
            "status": "Successfully purged"
        }
        }
    ```

    If the purge fails because the deleted item was not found, the response code will be 404 and the body of the response will be a list of error messages in json.

    ```
    {
        "errors": {
            "message": [
                {
                    "lang": "en",
                    "text": "Deleted item could not be found."
                }
            ]
        }
    }
    ```


**Parent topic:**[How to Use REST to Work with Deleted Content Items](../wcm/wcm_rest_crud_purge_delete.md)

