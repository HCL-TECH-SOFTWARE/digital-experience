# Configuring the validation of friendly URLs for web content

After you enable the validation of friendly URLs for web content, you can choose from various configuration options. These options enable you to specify how the portal responds to friendly URLs that contain path information that does not identify an available content item. Learn about the parameter combinations you can specify and how the portal response varies based on these combinations.

You can specify the following parameters for the overall portal as properties and key value pairs in the portal Configuration Service or for individual pages as page parameters. Page parameters that you set for a specific page override any global settings that are specified in the portal Configuration Service. Page parameters are inherited by all child pages. For more information, see *Configuration Service* in the related links.

-   **friendly.pathinfo.validation.errorCode = \(404\)**

    This key specifies the HTTP status code that the portal returns if the path information of a friendly URL cannot be resolved to a content item for the requested page. You can specify one of the following values:

    -   **404**

        The default value. This HTTP status code tells a caller, such as a search crawler or web browser, that no content is found for the friendly URL. The missing content might be temporarily or permanently missing.

    -   **410**

        This HTTP status code informs a caller, such as a search crawler or a web browser, that the resource for the friendly URL is no longer available. This missing resource is permanently gone.

    Portal can identify conditions that require a different HTTP status code than the one you configure by using friendly.pathinfo.validation.errorCode. For example, friendly URL redirects require the HTTP status code 302. To support the most common use cases, see the topic *Preventing friendly URL redirects for invalid friendly URLs for web content*.

-   **friendly.pathinfo.validation.errorTextProvider**

    This key specifies the text provider of the localized HTTP status message to send as well as the configured HTTP status code. If you configure a text provider and a request URL has invalid path information, portal responds with a blank page that displays only the HTTP status code and the corresponding localized message that is specified by the text provider. The value of this parameter must be the ID of an implementation of the com.ibm.workplace.wcm.api.plugin.textprovider.TextProvider interface. To use the default messages of HCL Portal, specify the text provider with the ID PathInfoValidationTextProvider. If you implement a custom text provider, make sure that it supports message keys that are composed of the prefix HTTP\_STATUS\_MESSAGE\_ and the configured HTTP status code, for example: HTTP\_STATUS\_MESSAGE\_404.

    **Important:** Portal ignores this setting if you also specify the friendly.pathinfo.validation.errorURI property or page parameter.

-   **friendly.pathinfo.validation.errorResourceBundle**

    This key specifies a Java resource bundle as an alternative to implementing a custom text provider. If you configure a Java resource bundle and a request URL has invalid path information, portal responds with a blank page displays only the HTTP status code and the corresponding localized message from the Java resource bundle. The value of this setting must be the fully qualified name of the Java resource bundle. If you provide a custom Java resource bundle, make sure that it contains message keys that are composed of the prefix HTTP\_STATUS\_MESSAGE\_ and the configured HTTP status code, for example: HTTP\_STATUS\_MESSAGE\_404.

    **Important:** Portal ignores this setting if you also specify the friendly.pathinfo.validation.errorURI property or page parameter. Portal also ignores this setting if you set the value of the friendly.pathinfo.validation.errorTextProvider property or page parameter to a custom text provider ID.

-   **friendly.pathinfo.validation.errorURI**

    This key specifies the piece of content URI that portal resolves if the request URL has invalid path information. The value of this parameter must be a piece of content URI that portal can resolve, for example:

    -   **nm:oid:unique\_page\_name**

        This navigation model URI redirects the request to a specific DX page based on the unique name of the target page.

    -   **custom:resolutionserviceuri**

        This custom implementation of the com.ibm.portal.resolver.ResolutionService interface resolves invalid path information to a dynamically determined navigational state. When portal resolves the piece of content URI, the content path that failed the portlet validation is passed to the resolution service as the wcmContentPath parameter.

-   **friendly.pathinfo.validation.errorContentPath**

    This key specifies the full content path that portal sets as public Web Content Manager context of the resolved page if the request URL has invalid path information. Web Content Viewer portlets on the resolved page that are configured to listen to other portlets can then render the content with the specified path. The value of this setting must be the path of a content item that is available to users, for example: /Web Content/home/human\_resources/health/topic\_not\_found.


|Portal response to invalid friendly URLs for web content: HTTP status code|Portal response to invalid friendly URLs for web content: Page|Portal response to invalid friendly URLs for web content: Web content|friendly.pathinfo.validation.errorCode|friendly.pathinfo.validation.errorTextProvider or friendly.pathinfo.validation.errorResourceBundle|friendly.pathinfo.validation.errorURI|friendly.pathinfo.validation.errorContentPath|
|--------------------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------|--------------------------------------------------------------------------------------------------|-------------------------------------|---------------------------------------------|
|404|The page that is specified in the requested URL.|Web content is rendered according to the private or public Web Content Manager context, but not based on the path information. The path information was invalid and removed from the state.|N/A|N/A|N/A|N/A|
|410|The page that is specified in the requested URL.|Web content is rendered according to the private or public Web Content Manager context, but not based on the path information. The path information was invalid and removed from the state.|410|N/A|N/A|N/A|
|404|The page displays the following text: Error 404: The requested content does not exist. Please verify that the URL is correct.|N/A|N/A|- <br/> **PathInfoValidationTextProvider** <br/> HTTP\_STATUS\_MESSAGE\_404=The requested content does not exist. Please verify that the URL is correct.|N/A|N/A|
|404|The page with the unique name missing.content displays.|Web content is rendered according to the private or public Web Content Manager context, but not based on the path information. The path information was invalid and removed from the state.|N/A|N/A|`nm:oid:missing.content`|N/A|
|404|The page that is specified in the requested URL.|Web content is rendered according to the private Web Content Manager context of the Web Content Viewer portlet or /Web Content/Home/Missing Content.|N/A|N/A|N/A|/Web Content/Home/Missing Content|
|410|The page with the unique name missing.content displays.|Web content is rendered according to the private Web Content Manager context of the Web Content Viewer portlet or /Web Content/Home/Missing Content.|410|N/A|`nm:oid:missing.content`|/Web Content/Home/Missing Content|


???+ info "Related information:"
    - [Advanced options](../../../../../deliver_webcontent_on_dx/editing_wcm_viewer_setting/wcm_config_wcmviewer_hadv.md)
    - [Editing pages, labels, and URLs](../../../../../../../../extend_dx/development_tools/portal_admin_tools/portal_user_interface/managing_pages/managing_page_properties/h_mp_edit_pages.md)
    - [Creating a Text Provider class](../../../../../../wcm_artifacts/wcm_dev/wcm_custom_plugin/wcm_dev_api_text_provider.md)

