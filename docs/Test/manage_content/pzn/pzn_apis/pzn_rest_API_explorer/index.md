# Personalization REST API explorer

The Personalization REST API explorer allows developers using the Digital Experience Personalization REST APIs to explore and test these APIs. The following topic presents the Personalization REST APIs available and how developers can use them working with the Personalization REST API explorer.

## Access and launch the Personalization REST API Explorer

After installing HCL DX 9.5 CF or Container Update CF200 or later, access the Personalization REST API explorer located at:

```
http or https://host:port/dx/api/pzn/v1/explorer/
```

!!! example

    ```
    https://localhost:10039/dx/api/pzn/v1/explorer/
    ```

For the Embedded WCM Selection Rules, use the following path and path format:

```
http or https://host:port/dx/api/wcm/v2/explorer/
```

!!! example

    ```
    https://localhost:10039/dx/api/wcm/v2/explorer/
    ```

## Limitation

The detailed function of the above mentioned API for accessing Personalization Rules is documented [Personalization Rules](../pzn_rest_API_explorer/pzn_rules_api/index.md)

-   With HCL Digital Experience 9.5 CF206, the PZN Java API was extended to return the evaluated page metadata when using a custom application object. The method signature is: <br> `Interface com.ibm.websphere.personalization.PznPortletRequestObjectInterface:` <br> For example: <br> 
    ```
    /* 
     * Return the MetaData object of the evaluated page
     */
    public MetaData getEvaluatedPageMetaData();
    ```
-   PZN endpoint to manage the personalization rules (/rules) does not support the creation of Embedded WCM Select Action rule yet. So use the WCM API to create the initial embedded PZN rule and then edit it with the PZN API.