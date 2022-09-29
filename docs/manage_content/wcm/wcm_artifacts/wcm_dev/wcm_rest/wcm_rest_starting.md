# Getting started with the REST service for Web Content Manager

Before getting started with the REST service for Web Content Manager you should become familiar with how it works and how to use it.

The REST service for Web Content Manager is a collection of web services that are compliant with the Atom Publishing Protocol. They provide access to web content, including versions and workflow states, through HTTP. The service is designed according to the REST \(REpresentational State Transfer\) architectural style.

REST services make it easy to build interactive content, which can be modified directly by your site users. Responsive, integrated editing tools can be created by embedding HTML and JavaScript in web content components, which bind to the REST service to display or update content asynchronously. \(Ajax\)

HTTP makes integration with remote clients easier than with a traditional API. Web Content Manager functions can be visible to remote systems without adding more server-side components, such as JSP, to access Java APIs. HTTP allows these services to work seamlessly with your infrastructure including firewall, proxy servers, and caches.

!!! note
    Any examples in this section that contain incomplete XML, or XML without namespace declarations, use the following declarations:
    -   `xmlns:atom="http://www.w3.org/2005/Atom"`
    -   `xmlns:app="http://www.w3.org/2007/app"`
    -   `xmlns:wcm="http://www.ibm.com/xmlns/wcm"`

## Service entry points

The URLs, which comprise the REST service can change from release to release, or even with minor updates. Therefore, it is recommended to never bookmark, or generate a URL unless it is for a defined entry point.

-   **Atom publishing protocol service document**

    ```
    /wps/mycontenthandler/model/service
    ```

    This service document includes the entry points for all portal REST services. When you browse for content, you must first retrieve the service document. The AtomPub service document describes the top-level collections in an APP service. These collections represent libraries and other types of content accessible through the service.

    Web content queries can be stored in certain collections. This allows administrators to limit the scope and structure of queries, and bind them to specific URLs, which all authenticated users can access to retrieve the results as an Atom feed.

-   **POC Service**

    If a specific content item is known, it can be accessed directly through the POC service, or the POC service can be used to look up an appropriate URL for the content. The identity of a piece of content in the REST service is represented by its POC URI. The POC URI can be found in the ID element of the Atom Entry documents, which represents the content item.

-   **Queries**

    While queries can be stored within the REST service, they can also be run directly through a single location:

    ```
    /wcmrest/query
    ```

    This flexibility is subject to security controls to prevent users from inadvertently overloading production servers with complex queries.


## REST Service Access Levels

To use the REST service, for Web Content Manager a client user be assigned the "user" role or higher in the WCM REST SERVICE virtual resource. All authenticated users are assigned the "user" role by default.

An administrator can edit the WCM REST SERVICE virtual resource. Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**. Then, click **Virtual Resources**.

!!! note
    Proper library permissions must be configured to be able to create the content.

The same access control checks also apply to the HCL Digital Experience Version 2 REST APIs. Reference the Help Center topic [HCL Digital Experience Version 2 REST APIs](https://help.hcltechsw.com/digital-experience/8.5/wcm/dx_v2_rest_api.html) for more information.

|Header|Header|
|------|------|
|User|Users assigned the "user" role can:-   work with web content items and run defined queries.|
|Editor|Users assigned the "editor" role can:-   work with web content items and run defined queries. <br>-   Run custom queries through the following path: `/wcmrest/query`|
|Manager|Users assigned the "manager" role can:-   work with web content items and run defined queries. <br>-   Run custom queries through the following path: `/wcmrest/query` <br>-   create, read, update, and delete defined queries.|


