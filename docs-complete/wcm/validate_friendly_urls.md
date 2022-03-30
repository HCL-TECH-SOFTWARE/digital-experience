# How to validate friendly URLs for web content 

Learn about the validation and customization of friendly URLs for web content, including use cases and customization options.

Friendly URLs for web content provide human-readable URLs that are easy for users to remember. A friendly URL points to a specific content item that is displayed on a specific portal page. By default, HCL Portal does not check whether a friendly URL addresses an existing content item or not. However, the following scenarios would benefit from validation and customized handling of invalid friendly URLs:

-   A user mistypes a friendly URL.
-   A user clicks a saved bookmark that points to a portal page or a content item that no longer exists.
-   A search engine browses portal pages to update a search index.

If you use friendly URLs for web content, you can configure HCL Portal to validate the friendly URL associated with a request. If you enable friendly URL validation, portal assembles a content path by appending the path information to the path of the default content mapping that is defined for the resolved page. Afterward, portal checks whether that content path identifies a content item that is available in the current user context. The friendly URL for web content is valid if the portal finds a content item. Otherwise, portal sends an error response. Using the HCL Portal Configuration Service and individual page parameters, you can customize error responses in the following ways:

-   Return an HTTP error code along with a localized message.
-   Return an HTTP error code and display the resolved page.
-   Return an HTTP error code and display the resolved page and render a specific content item.
-   Return an HTTP error code and display a specific page.
-   Return an HTTP error code and display a specific page that renders a specific content item.

-   **[How to enable the validation of friendly URLs for web content ](../wcm/enable_validate_friendly_urls.md)**  
Learn about the properties and values that are required in WP Configuration Service Resource Environment Provider to validate friendly URLs for web content.
-   **[Configuring the validation of friendly URLs for web content](../wcm/configure_validate_friendly_urls.md)**  
After you enable the validation of friendly URLs for web content, you can choose from various configuration options. These options enable you to specify how the portal responds to friendly URLs that contain path information that does not identify an available content item. Learn about the parameter combinations you can specify and how the portal response varies based on these combinations.
-   **[How to prevent friendly URL redirects for invalid friendly URLs for web content ](../wcm/prevent_friendly_url_redirects.md)**  
If the validation of friendly URLs for web content is enabled and the path information of an incoming friendly URL is not valid, portal responds with the HTTP status code as defined by the portal Configuration Service property and page parameter friendly.pathinfo.validation.errorCode. However, depending on the configuration, portal does not always send the configured HTTP status code. Portal can identify conditions that require a different HTTP status code.

**Parent topic:**[Friendly URLs and Web Content Viewers](../wcm/wcm_config_wcmviewer_friendlyurl.md)

