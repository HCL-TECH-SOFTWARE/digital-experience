# Tuning using HCL DX Administration

## Disable Search

You can disable Search to improve performance if the search feature is not needed.

During medium configuration testing, numerous SSL errors occurred when accessing the local environment. To mitigate these issues, all search collections on the core pods were disabled by setting the `jcr.textsearch.enabled` property to `false`. Additionally, the search collections were deleted.

This included the JCR Collection and the Default Search Collection, but did not affect the WCM Authoring Search Indexer.
As the performance tests focused on rendering the search center portlet without using the actual search functionality, this adjustment helped avoid unnecessary processing and potential errors. It is recommended to consider this approach in your tests if the search functionality is not required, as it can help streamline performance and reduce errors in similar scenarios.

---
### Disabling Search

1.  In the WebSphere Integrated Solutions Console (ISC), go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **JCR ConfigService PortalContent** > **Additional Properties: Custom properties**.
    2.  Click `jcr.textsearch.enabled` and set the **Value** to `false`.

3.  In HCL Digital Experience (DX), click **Open applications menu** (the nine-dot icon), then go to **Administration** > **Search** > **Search Collections**.

4.  Click the **Delete Collection** icon for all the collections listed.

!!! note
    You can also run the `ConfigEngine` task to delete the search service and collections by executing the following command:
    
    ```
    ConfigEngine.sh action-delete-search-services-and-collections-wp.search.service
    ```
      
      For more details, refer to the [PI05486: Script for removing the default search service (local) and its search collections](http://www-01.ibm.com/support/docview.wss?uid=swg1PI05486){target="_blank"}.