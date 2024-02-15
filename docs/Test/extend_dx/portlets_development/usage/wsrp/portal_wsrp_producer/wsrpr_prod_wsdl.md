# How to access the Producer WSDL

As a Producer you must provide the URL for the Producer WSDL service description document to the Consumer.

The basic WSDL document is available under the following URL:

```
http://producer\_portal\_host:producer\_port/WpsContextRoot/wsdl/wsrp_service.wsdl
```

where `WpsContextRoot` is the portal context root that was set at installation time. You can find its value in the file `wkplc.properties`.

This URL refers to a WSDL file with the WSRP 2.0 services. When a Consumer portal administrator configures the Consumer portal to interact with the Producer, the Consumer administrator must specify the WSDL URL. The Consumer accesses this URL and reads the contents of the WSDL document, which provides the endpoint addresses of the WSRP 2.0 services. Consumers use these endpoint addresses to communicate with the Producer through the WSRP protocol.

The URL format of the WSRP service endpoint addresses is as follows:

```
protocol://host\_name:port\_number/wsrp\_context\_root/wsrp\_port\_name
```

wsrp\_context\_root references the context root for the WSRP Producer facade servlet. The facade servlet is provided with the wps.ear enterprise application in the HCL Portal Server WSRP Facade web module wps\_facade.war and controls access to the WSRP web service engine.

You can change the context root for the WSRP Producer with the `modify-servlet-path` configuration task, as described in *Changing the portal URI*

In addition, you can configure and override various settings to manipulate the contents of the WSDL document. To do so, you specify the appropriate parameters in the URL for the WSDL service description document:

-   The WSRP version: WSRP Version 1.0, WSRP Version 2.0, or both
-   The host name for the endpoint addresses
-   The transfer protocol: HTTP, HTTPS, or both
-   The port number for HTTP URLs
-   The port number for HTTP**S** URLs.

To generate the WSDL service description document, the Producer portal uses the following parameters:

1.  Parameters from the URL of the request for the service description document
2.  Settings in the portal Configuration Service
3.  Settings that result from the request for the service description document.

As a result, the portal provides a fallback mechanism for selecting the parameters from the WSDL service description document, depending on which parameters you specify:

1.  If the administrator of the Consumer portal adds parameters as URL parameters to the URL for requesting the service description document, then the Producer portal uses these parameters. For example, it can use the parameters for creating the endpoint addresses of the WSRP web services that are contained in the WSDL document.
2.  If you do not define such a parameter as a URL parameter in the service description document request, then the Producer looks for entries in the portal Configuration Service.
3.  If you do not specify the parameter in the Configuration Service, then the Producer uses the host name and port of the incoming request to generate the endpoint addresses of the WSRP web services that are contained in the WSDL document.

## URL parameters

The administrator of the Consumer portal can request a modified WSDL service description document from the Producer. In this document, the Producer modifies the endpoint addresses of the WSRP web services according to URL parameters that the Consumer provided. These parameters that are listed and described in the following table. Here is an example of the supported URL syntax:

```
http://producer_portal_host:producer_port/wp_contextRoot/wsdl/wsrp_service.wsdl
       ?protocol=<protocolValue>&port=<httpPort>&securePort=<httpsPort>
       &version=<WSRPVersion>&hostname=<hostname>

```

The following table lists possible values for URL parameters:

|URL parameter|Possible values|Results in WSDL file|
|-------------|---------------|--------------------|
|protocol|http|WSRP endpoint addresses with HTTP protocol|
| |https|WSRP endpoint addresses with HTTP**s** protocol|
| |mixed|WSRP endpoint addresses with HTTP and with HTTP**s** protocol|
|version|v1|WSRP services for WSRP Version 1.0|
| |v2|WSRP services for WSRP Version 2.0|
|port|Integer, for example 80|Port number for HTTP endpoint addresses|
|portSecure|Integer, for example 443|Port number for HTTP**s** endpoint addresses|
|hostname|Name of the host, for example localhost|The host name that is used for endpoint addresses|

**Note:** The URL parameters do not modify the Producer settings and bindings. They manipulate only the content of the WSDL service description document, for example, for debugging and tracing purposes.

## Settings in the portal Config Service

To control the default output for the WSDL document, you set the following parameters in the portal configuration service:

-   **wsrp.hostname = localhost**

    Use this property to specify a host name for the endpoint addresses in the WSRP service WSDL document of the Producer.

-   **wsrp.port.http = 80**

    Use this property to specify the HTTP port that is used for the endpoint addresses in the WSRP service WSDL document of the Producer.

-   **wsrp.port.https = 443**

    Use this property to specify the HTTP**S** port that is used for the endpoint addresses in the WSRP service WSDL document of the Producer.


???+ info "Related information" 
    -   [Changing the portal URI after an installation](../../../../../deployment/manage/siteurl_cfg/changing_portal_uri_after_install/index.md)

