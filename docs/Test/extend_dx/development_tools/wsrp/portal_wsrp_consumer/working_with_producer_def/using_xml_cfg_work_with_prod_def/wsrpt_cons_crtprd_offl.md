# Creating a Producer definition offline

When you create a Producer definition offline, be aware which information you must provide.

If you work offline, that is you cannot connect from your Consumer portal to the Producer portal, you can use only the XML configuration interface to create the Producer definition. In this case you specify the following information:

-   The endpoint address URLs to the Service Description and the Markup interfaces of the Producer.
-   If the Producer supports the two optional WSRP interfaces Portlet Management and Registration, you specify them as well.

If the Producer requires certain registration properties or a registration handle with the registration by the Consumer, you must specify this information as well.

The XML configuration interface writes all parameters that you provide into the portal database. This includes all of the following information:

-   The URL for the Producer's WSDL service definitions
-   A name for the Producer definition
-   A description for the Producer definition
-   The registration handle that you received from the Producer by outside communication
-   The registration properties
-   The user attributes.

The portal transfers the user attributes and the registration handle to the Producer later when **both** of the following conditions apply:

1.  You work online, that is you can connect to the Producer portal.
2.  You update the portal configuration with an XML script that includes the scripting code for consuming a portlet.

The user attributes are sent to the Producer with every markup or action request, that is every time when a user interacts with a remote portlet of that Producer.


