# The HCL Web Content Manager API

You can use the Web Content Manager API to extend functions of HCL Web Content Manager.

Use the Web Content Manager API to:

-   create items
-   delete items
-   move items
-   copy items
-   retrieve items
-   approve items in a workflow
-   search for items

See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer_root]/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

## Getting started

To use the Web Content Manager API, you have 2 options:

1.  Write your code as JSPs that you deploy on your server in your Java enterprise application. These JSPs can then be used in your Web Content Manager content by using JSP components or custom JSPs in elements.
2.  Write you code as a compiled java enterprise application. In this case, you need to create a project in your development environment that has the two JAR files ilwwcm-api.jar and wp.base.jar in the build path. These JAR file files can be copied from your portal server from here:

    -   /opt/WebSphere/PortalServer/wcm/prereq.wcm/wcm/shared/app/ilwwcm-api.jar
    -   /opt/WebSphere/PortalServer/base/wp.base/shared/app/wp.base.jar
    This code can then be used in your Web Content Manager content by using custom plug-ins. See [How to create custom plug-ins](../wcm_custom_plugin/index.md) for further information.


-   **[How to use the Web Content Manager API](wcm_dev_api_using.md)**  
The workspace is the heart of the HCL Web Content Manager API. Items are created, saved, deleted and searched for in the workspace item. A workspace is basically an interface to Web Content Manager that is associated with a user. Using a workspace item, the user can perform operations as that user.
-   **[The Query API](wcm_dev_api_using_query.md)**  
The query API provides querying capabilities that are much more rich than the "findBy" methods on the workspace class.
-   **[Web Content Manager JSP tags](wcm_reference_wcm-jsp-tags.md)**  
You use HCL Web Content Manager JSP tags with the Web Content Manager API to pull Web Content Manager content and components into external JSP applications.
-   **[Web Content Library Management APIs](wcm_dev_api_library.md)**  
You can perform various web content library functions by using the Web content API.
-   **[Syndication APIs](wcm_dev_api_syndication.md)**  
You can run various syndication functions by using the web content API.
-   **[Web Content Manager Multilingual Solution API](wcm_mls_api.md)**  
This set of APIs allow you to retrieve information about the configured Multilingual Solution \(MLS\) libraries and also to retrieve the translated content items for a given default language content ID \(for example, from English content find translated French and Spanish strings\).


