# Managing search services

Get an overview of how you manage the portal search services. This task includes creating a new search service or editing an existing search service.

To create or edit a portal search service, proceed as follows:

1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

2.  Click **Search Services**.

    Manage Search displays Search Services.

3.  If you want to create a new search service, click **New Search Service**. If you want to modify an existing search service, click **Edit** for that search service.

    Manage Search lists the parameter key and value pairs for the search service.


Set or edit the parameter values depending on your requirements and configuration.

## Configuring a search service:

-   Unless otherwise stated, the values that you set for parameters of a portal search service apply to that search service and all its collections. They do not affect other search services of the portal or their search collections.
-   Unless otherwise stated, changing the value of a parameter apply to both the existing search collections and newly created search collections. Some parameters affect only newly created search collections. These parameters cannot be updated for existing search collections.
-   The search administration portlet Manage Search lists the Default Portal Search Service and its collection Portal Content or other collections in the default portal language. It does not list these items in the language that the user selected as preferred language for the portal or set in the browser. Example: The portal default language is set to English and the user selected German as the preferred portal language or as the browser language. In this case, the Default Portal Search Service and its collections show in English.
-   SOAP support for remote search services was deprecated with HCL Portal Version 8.0. EJB is still supported.
-   If you delete a search service, the portal does not delete the search collections that are related to this search service. Delete the search collections by using the Manage Search administration portlet. If you delete the default search service, it is re-created new when you restart the portal.

For more detailed steps about how to manage search services refer to the Manage Search portlet help. For a list of the search service parameters and possible values, refer to *Search service configuration parameters*.

If you want to create a search service for remote Portal Search, refer to *Configuring a remote search service*.


