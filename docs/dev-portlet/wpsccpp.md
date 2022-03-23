# Client profile information \(CC/PP\) in portlets

The Portal provides a standard API named "CC/PP" for accessing client profiles; learn how the client profile can be accessed through a request attribute. Learn about the attributes and components that are supported by the default profile implementation in the portal.

For each incoming request, the portal tries to determine the client that issued the request. It is important to determine the client in order to know its capabilities and respond properly. The portal database contains a repository of client profiles, providing all relevant information about the supported clients. The Portal uses JSR 188, which provides a standard API named "CC/PP" for accessing client profiles.

The Java Portlet Specification allows portlets to access the client profile through a request attribute. See following code snippet, how to get the profile in a portlet and to access an profile attribute.

```xmp

import javax.ccpp.Attribute;
import javax.ccpp.Profile;
.........
        
Profile clientProfile = 
    (Profile) portletRequest.getAttribute(PortletRequest.CCPP_PROFILE);
String vendor = null;
if (clientProfile != null) {
    		Attribute attribute = clientProfile.getAttribute("Vendor");
    		if (attribute != null) {
        		vendor =  attribute.toString();
    		}
}

```

The following attributes and components are supported by the default profile implementation in the portal. The proprietary attributes supported by the portal default implementation, but not part of the UAPROF dictionary, are all collected in the component ProcessingInstructions.

The following table lists all attributes required for HCL DX to work properly.

|Name|Component|Type|Description|Example Value|
|----|---------|----|-----------|-------------|
|Vendor|HardwarePlatform|Literal|Name of the vendor manufacturing the browser or device|"Netscape"|
|BrowserName|BrowserUA|Literal|Name of the browser user agent associated with the current request|"Navigator"|
|BrowserVersion|BrowserUA|Literal|Version of the browser|"6.x"|
|MarkupName|ProcessingInstructions|Literal|Markup that the browser or device accepts|"html"|
|MarkupVersion|ProcessingInstructions|Literal|Version of the markup|"ns6"|
|CcppAccept|SoftwarePlatform|Literal|List of content types the device supports|"text/html"|
|HtmlVersion|BrowserUA|Literal|Version of Hyper Text Markup Language \(HTML\) supported by the browser|"4.0"|
|HtmlCSS|BrowserUA|Boolean|Indicates whether cascaded style sheets can be used with this browser| |
|FramesCapable|BrowserUA|Boolean|Indicates whether the browser is capable of displaying frames| |
|IFramesCapable|BrowserUA|Boolean|Indicates whether the browser is capable of displaying inline frames| |
|JavaAppletEnabled|BrowserUA|Boolean|Indicates whether the browser supports Java applets| |
|JavaScriptEnabled|BrowserUA|Boolean|Indicates whether the browser supports JavaScript| |
|TablesCapable|BrowserUA|Boolean|Indicates whether the browser is capable of displaying tables| |
|HtmlNestedTable|BrowserUA|Boolean|Indicates whether the browser is capable of displaying nested tables| |
|WmlVersion|WapCharacteristics|Literal|Wireless Markup Language \(WML\) version supported by the device|"1.1"|
|WmlTable|WapCharacteristics|Literal|Indicates whether the WML device is capable of displaying tables| |
|FragmentIdentifier|ProcessingInstructions|Boolean|Indicates whether the browser or device supports fragment identifiers| |

For more information on JSR 188, please see its detailed description page at the Java Community Process site.

**Related information**  


[Additional information about device classes for developers ](../dev-theme/themeopt_devclass_devlop.md)

