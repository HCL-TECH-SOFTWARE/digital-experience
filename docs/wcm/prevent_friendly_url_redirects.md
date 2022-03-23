# How to prevent friendly URL redirects for invalid friendly URLs for web content 

If the validation of friendly URLs for web content is enabled and the path information of an incoming friendly URL is not valid, portal responds with the HTTP status code as defined by the portal Configuration Service property and page parameter friendly.pathinfo.validation.errorCode. However, depending on the configuration, portal does not always send the configured HTTP status code. Portal can identify conditions that require a different HTTP status code.

If you use the friendly.pathinfo.validation.errorTextProvider or the friendly.pathinfo.validation.errorResourceBundle settings, you can skip this information. With either of those settings, portal interrupts the request processing and sends an error response that contains only the configured HTTP status code and a localized status message if a friendly URL contains invalid path information. If you do not use those settings to configure the friendly URL validation and if you require the portal to send the configured HTTP status code instead of 302, you need to limit the friendly URL redirects to valid friendly URLs for web content. By default, portal enforces a redirect by using the HTTP status code 302 if the incoming URL does not contain the friendly URL prefix of the addressed page or if the path information contained in the friendly URL does not match the path information from the portal state. Because the friendly URL validation component removes the path information from the state if it is not valid, the portal sends a 302 status code instead of the configured HTTP status code. Use the following combination of portal Configuration Service properties to prevent those friendly URL redirects when a friendly URL for web content is not valid:

-   friendly.redirect.enabled=false
-   friendly.pathinfo.validation.redirect.onsuccess.enabled=true

For more information about these properties, see *Configuration Service* in the related links.

If you limit friendly URL redirects, set the portal theme parameter com.ibm.portal.theme.hasBaseURL to true. If you have a custom theme, ensure that the theme writes the HTML base tag. Update the theme parameter by using the XML configuration interface as the following sample XML script illustrates:

```

<?xml version="1.0" encoding="UTG-8"?>

<request
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd"
type="update">

	<!-- This sample sets the hasBaseURL parameter in the Portal 8.5 Theme. -->
	<portal action="locate">
		<theme action="update" uniquename="ibm.portal.85Theme" >
			<parameter name="com.ibm.portal.theme.hasBaseURL"
				type="string" update="set">true</parameter>
		</theme>
	</portal>
</request>
```

**Parent topic:**[How to validate friendly URLs for web content ](../wcm/validate_friendly_urls.md)

