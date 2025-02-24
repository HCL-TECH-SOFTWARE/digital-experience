# Content as a Service pages

Starting with version 8.5 CF05, HCL Digital Experience (DX) introduces the concept of Content as a Service (CaaS) pages. You can use CaaS pages to render content that is managed by your HCL Web Content Manager (WCM) in different data formats.

You can generate individual representations of your web content using the corresponding HCL WCM presentation components. Instead of generating HTML, you can use HCL WCM presentation components to generate representations of your web content in formats of your choice such as JSON, or XML. CaaS pages allow the content that is centrally authored and maintained on your website to be accessed by the other data clients in raw data formats. Those data clients can generate their own client-specific visualization of the data. This approach of generating data is especially useful in mobile application that might want to present content consistently with other parts of the application.

-   **[Technical concepts](./cntnt_serv_pgs_tech_cncpts.md)**  
Learn about the building blocks of Content as a Service pages in HCL DX.
-   **[Setting up Content as a Service](./setup_cntnt_serv_pgs.md)**  
Learn how to enable CaaS in HCL DX.
-   **[Accessing Content as a Service pages](./cntnt_serv_pgs.md)**  
Learn how to access your CaaS pages in HCL DX.
-   **[Select data format based on MIME type](./slct_dta_frmt_mime_type.md)**  
Learn how you can select different presentation components for the CaaS pages based on the requested MIME type.
-   **[Removing Content as a Service](./rmv_cntnt_serv.md)**  
Learn how to disable CaaS in HCL DX.

<!--
-   **[Technical concepts](../wcm/cntnt_serv_pgs_tech_cncpts.md)**  
Before you use the Content as a Service pages in HCL Digital Experience, familiarize yourself with its building blocks.
-   **[Select data format based on MIME type](../wcm/slct_dta_frmt_mime_type.md)**  
With Content as a Service pages, you can specify different representation of your web content for different MIME types. This way when you request Content as a Service pages, you can specify the preferred representation of your web content. There are different options to manage the presentation components that produce the output for the MIME types you like to support.
-   **[Setting up Content as a Service](../wcm/setup_cntnt_serv_pgs.md)**  
To be able to work with Content as a Service pages in HCL Portal, you must enable it by using an HCL Digital Experience configuration task.
-   **[Removing Content as a Service](../wcm/rmv_cntnt_serv.md)**  
To remove Content as a Service feature in HCL Portal, you must disable it by using an HCL Digital Experience configuration task.
-   **[Access Content as a Service](../wcm/access_cntnt_serv.md)**  
To access your Content as a Service pages, you can write links to your content that specifies the CaaS page as target. -->

???+ info "Related information"
    - [Writing links to web content](../../wcm_authoring/authoring_portlet/content_management_artifacts/tags/wcm_dev_writing-links.md)
