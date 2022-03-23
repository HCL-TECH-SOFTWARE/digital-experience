# Portlet Response headers 

The portlet response headers are part of the portal Configuration Service.

-   **portletcontainer.response.headers.additionallyNotAllowed = <none\>**

    There is a predefined set of response header fields that you cannot use in portlet response fields. These unallowable header fields are listed later in this topic. In addition to these predefined header fields you can define additional fields that are then also not allowed to be included into a portlet response header. If you specify more than one field, you must separate the values by commas.

-   **portletcontainer.response.headers.forceAllowed = \(none\)**

    This property enables you to re-enable the usage of the header fields that are by default prohibited header fields. If you specify more than one field, you must separate the values by commas.


The following list shows the header fields of the HTTP 1.1 \(RFC 2616\) specification that are by default **not** allowed to be set:

-   **6.2 Response Header Fields:**

    The response-header fields allow the server to pass additional information about the response that cannot be placed in the Status-Line. These header fields give information about the server and about further access to the resource identified by the Request-URI.

    -   Accept-Ranges \(Section 14.5\)
    -   Location \(Section 14.30\)
    -   Proxy-Authenticate \(Section 14.33\)
    -   Server \(Section 14.38\)
    -   Vary \(Section 14.44\)
    -   WWW-Authenticate \(Section 14.47\)
-   **7.1 Entity Header Fields:**

    Entity-header fields define meta information about the entity-body or, if no body is present, about the resource identified by the request. Some of this meta information is **optional**; some might be **required** by portions of this specification.

    -   Allow \(Section 14.7\)
    -   Content-Encoding \(Section 14.11\)
    -   Content-Language \(Section 14.12\)
    -   Content-Length \(Section 14.13\)
    -   Content-Location \(Section 14.14\)
    -   Content-MD5 \(Section 14.15\)
    -   Content-Range \(Section 14.16\)
    -   Content-Type \(Section 14.17\)
    -   Expires \(Section 14.21\)
    -   Last-Modified \(Section 14.29\)
-   **4.2 Message Headers:**

    HTTP header fields, which include general-header \(section 4.5\), request-header \(section 5.3\), response-header \(section 6.2\), and entity-header \(section 7.1\) fields, follow the same generic format as that given in Section 3.1 of RFC 822 \[9\]. Each header field consists of a name followed by a colon \( **:** \) and the field value. Field names are **case-insensitive**.


**Parent topic:**[Configuration Service ](../admin-system/srvcfgref_config.md)

