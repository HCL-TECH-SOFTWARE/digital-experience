# APIs

HCL Portal portlet APIs provide standard interfaces for the following functions:

-   Accessing remote content.
-   Looking up credentials.
-   Storing persistent data.
-   Communicating with other portlets.

HCL Portal supports two different portlet APIs by providing two portlet containers:

-   The Java™ Portlet Specification API
-   The Standard Portlet API

    !!! note
        The IBM® Portlet API has been deprecated for WebSphere® Portal Version 7.0 and later versions.


You can enhance and extend the tagging and rating features of the portal by using service APIs. The following service APIs are available with WebSphere Portal:

-   The Java API
-   The REST API

You can use Personalization APIs to allow Rational Application Developer and the Personalization runtime environment access to user and content data in customer data stores.

# List of APIs

**[HCL Experience API](../apis/hcl_experience_api/index.md)**  
The HCL Experience API is a set of OpenAPI-compliant REST APIs you can use to deploy HCL Digital Experience 9.5 containers on supported Kubernetes platforms. It supports the integration and management of HCL Digital Experience content and functionality to any digital channel using any front-end development framework. The HCL Experience API includes REST APIs that serve as a wrapper around previously published HCL Digital Experience HTTP-based APIs.


**[Controller SPI](../apis/controller_spi/index.md)**  
You can use the Controller SPI for portal administration. It allows you to modify portal resources. It enhances the read-only portal Model SPI by adding writable aspects.

**[Model SPI overview](../apis/model_spi/index.md)**  
Models provide information that is needed by HCL to perform tasks such as content aggregation or building navigation to browse the aggregated content. The information that is aggregated is represented through models that can be accessed programmatically by using the Model SPI (read-only). The information of a model is usually persistent (stored in a database) but can also be transient (computed and stored only in memory). Models can be represented by using a tree structure (nodes have a parent-child relationship), a list structure, or a selection structure (a selected element in a tree structure).

**[Portal Access Control interfaces](../apis/portal_access_control_interfaces/index.md)**  
Portal Access Control provides interfaces for retrieving and modifying and access control information of portal resources, such as portlets or pages.


**[User and group management](../apis/puma_spi/index.md)**  
The Portal User Management Architecture (PUMA) System programming interface (SPI) provides interfaces for accessing the profiles of a portal User or Group.


**[URL generation in HCL Portal](../apis/url_generation/index.md)**  
Generating Portal URLs correctly is one of the most important tasks in programming a HCL Portal based application. There are several programming tools and techniques available for generating HCL Portal URLs in custom code. The following section introduces the programming tools available and discusses when it is most appropriate to use each of the tools.


**[Portal v8.5 API Specifications](https://help.hcltechsw.com/digital-experience/8.5/dev/javadoc/vrm/850/api_docs/index.html)**
Reference copy of the Portal Version 8.5.0. API, javadocs, and other specifications.


**[Portal v8.5 SPI Specifications](https://help.hcltechsw.com/digital-experience/8.5/dev/javadoc/vrm/850/spi_docs/index.html)**
Reference copy of the Portal Version 8.5.0. SPI, javadocs, and other specifications.

???+ info "Related Information"
    - **[Developing themes and skins](../../build_sites/themes_skins/index.md)**  
    You can create themes using modules to contribute to separate areas of pages to provide flexibility, enhance the user experience, and maximize performance. To optimize themes on your website, use the theme optimization module framework. The framework separates feature-specific logic and capabilities from the theme code.
    - **[Portlets API](../portlets_development/portlet_api/index.md)**  
    Get an overview of the process of creating portlets, learn about the concepts of the APIs used to develop portlets, and view the samples to get you started. Also, learn about integrating features such as single sign-on, cooperative sharing of information using the property broker, and migrating Struts applications to the portlet environment.
    - **[Standard Portlets API](../portlets_development/standard_portlet_api/index.md)**  
    Get an overview of the process of creating portlets, learn about the concepts of the APIs used to develop portlets, and view the samples to get you started. Also, learn about integrating features such as single sign-on, cooperative sharing of information using the property broker, and migrating Struts applications to the portlet environment.
    - **[The HCL Web Content Manager API](../../manage_content/wcm_development/wcm_dev_api/index.md)**  
    You can use the Web Content Manager API to extend functions of Web Content Manager.
    - **[Search REST API specification](../../build_sites/search/search-rest-api/index.md)**  
    The following document describes the API call to search HCL Digital Experience. You can search HCL to find content that contains a specific text string in its title or content, or is tagged with a specific tag.
    - **[Extending tagging and rating by using service APIs](../../build_sites/tagging_rating/dev_tagging_and_rating/index.md)**  
    Developers can enhance and extend the tagging and rating features of the portal. For this purpose the portal tagging and rating feature provides service APIs that you can use to enhance tagging and rating by your requirements.
    - **[REST service for Web Content Manager](../../manage_content/wcm_development/wcm_rest/index.md)**  
    Application developers can use Representational State Transfer (REST) services to work with Web Content Manager. The REST service for Web Content Manager provides authoring access to content items and elements. The service follows the Atom Publication Protocol, and Atom feeds, and entries are accessible in XML (application/atom+xml) and JSON (application/json) format.
    - **[API for accessing Portlet load monitoring data](../../build_sites/site_analytics/portlet_load_monitoring/plmr_api.md)**  
    Portlet load monitoring provides an API for accessing the monitoring data. You can use this API to write custom code to access that data.
    - **[Personalization APIs](../..//manage_content/pzn/pzn_apis/index.md)**  
    Portlet load monitoring provides an API for accessing the monitoring data. You can use this API to write custom code to access that data.

