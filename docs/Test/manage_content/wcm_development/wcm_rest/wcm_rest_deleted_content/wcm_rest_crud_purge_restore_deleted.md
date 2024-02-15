# How to use REST with Web Content Manager to Restore Deleted Content Items

This new API allows you to restore a previous version of a content item. It can also be used to restore deleted items that have not been purged.

It is equivalent to the functionality in the user interface:

![](../../../../images/WCM_REST_Restore_Deleted.png)

!!! note
    The APIs to Restore Deleted Content items is available for HCL Digital Experience 9.5 CF192 and higher releases.

## Using the Restore Deleted Content Items API

-   **Endpoint**

    GET request to:

    ```
    <http://host:port/wps/mycontenthandler/wcmrest/item/"UUID of the content"/versions/>                     
    ```

    Returns list of versions for the content item.

    PUT request to:

    ```
    http://host:port/wps/mycontenthandler/wcmrest/item/<UUID of the content>/versions?setVersion=<versionName>&restoreAsPublished=<true|false>
    ```

    Sample URL:

    ```
    <http://localhost:10039/wps/mycontenthandler/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/versions?setVersion=1,restoreAsPublished=false/>
    ```

-   **Expected Body**

    Body can just have the basic WCM structure:

    ```
    
                        <?xml version="1.0" encoding="UTF-8"?/>
                        <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0"/>
                        </feed/>
    ```

-   **Expected Headers**

    LTPA token of the user.

-   **Query Parameters (See PUT request above for example format and parameter)**

    -   `setVersion`: Name of the version that should become the current version
    -   `restoreAsPublished`: Restore as a draft or replace the published version

-   **Return body**

    The list of versions. Same as when calling **.../wcmrest/item/uuid/versions** 
    
    
    Structure see: [How to use REST with versions](../wcm_rest_mng_content/wcm_rest_crud_versions.md)

    Sample:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <entry>
            <versionContent>
                <wcm:versionName>4</wcm:versionName>
                <wcm:versionDate>2020-03-09T19:45:11.735Z</wcm:versionDate>
            </versionContent>
            <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/digest!SMx91r5Xh87lqsxXlMQqeQ/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/version/4" xml:lang="en" label="Versioned Item"/>
        </entry>
        <entry>
            <versionContent>
                <wcm:versionName>3</wcm:versionName>
                <wcm:versionDate>2020-03-09T19:38:42.133Z</wcm:versionDate>
            </versionContent>
            <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/digest!SMx91r5Xh87lqsxXlMQqeQ/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/version/3" xml:lang="en" label="Versioned Item"/>
        </entry>
        <entry>
            <versionContent>
                <wcm:versionName>2</wcm:versionName>
                <wcm:versionDate>2020-02-26T14:33:19.793Z</wcm:versionDate>
            </versionContent>
            <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/digest!SMx91r5Xh87lqsxXlMQqeQ/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/version/2" xml:lang="en" label="Versioned Item"/>
        </entry>
        <entry>
            <versionContent>
                <wcm:versionName>1</wcm:versionName>
                <wcm:versionDate>2020-02-26T14:33:00.636Z</wcm:versionDate>
            </versionContent>
            <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/digest!SMx91r5Xh87lqsxXlMQqeQ/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/version/1" xml:lang="en" label="Versioned Item"/>
        </entry>
    </feed>
    ```



