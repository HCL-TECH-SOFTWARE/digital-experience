# Site analysis example for the Web Content Viewer

The site analysis log uses the NCSA Combined log format, which is a combination of NCSA Common log format and three extra fields: the referrer field, the user\_agent field, and the cookie field. This example describes typical site analysis logging information for the Web Content Viewer.

The HCL Digital Experience site analysis log is:

```

[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/sa_date_time.log

```

where date\_time is the date and time the file was created. The current \(active\) log file is named sa.log.

**Note:** The WP SiteAnalyzerService might be configured to use different file names.

The following example displays a sample entry in the site analysis log as it is written by the Web Content Viewer if the SiteAnalyzerJSRPortletLogger is enabled.

`9.37.3.88 - jdoe [22/Nov/2008:22:11:27 +0100] "GET /Portlet/5_8000CB1A00U6B02NVSPH1G20G1/Web_Content_Viewer_(JSR_286)/Web%20Content%2fTestSite01%2fTestSiteArea01%2fTestContent01?PortletPID=5_8000CB1A00U6B02NVSPH1G20G1&PortletMode=view&PortletState=normal&RequestType=render&PUBLIC_CONTEXT=%2fWeb%20Content%2fTestSite01 %2fTestSiteArea01%2fTestContent01 HTTP/1.1" 200 -1 "http://myserver.company.com/Page/ 6_8000CB1A00UR402F0JC25U1O25/MyPage" "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.18) Gecko/20081029 Firefox/2.0.0.18" "JSESSIONID=0000JwIm04xm7btVLwzCj9Qo-uj:-1"`

The table describes each field of the log format:

|Field in the Example|Log Field Name and Explanation|
|--------------------|------------------------------|
|`9.37.3.88`|-   **host**

The IP address of the HTTP client that sent the request.

**Important:** If there is a reverse proxy server between the client and the portal, the IP address that is logged is that of the reverse proxy server rather than the HTTP client. To log the IP address of the HTTP client, you must remove the reverse proxy server from the environment.


|
|-|-   **rcf931**

The identifier that is used to identify the client making the request. If the client identifier is not known, the field is set to the hyphen character \(`-`\).


|
|`jdoe`|-   **username**

The user ID for the client. If the user ID is not known, the field is set to the hyphen character \(`-`\).


|
|`[22/Nov/2008:22:11:27 +0100]`|-   **date:time timezone**

The date and time of the HTTP request.


|
|```
"GET /Portlet/[...] HTTP/1.1" 
```

|-   **request**

The HTTP method, the URI of the requested resource, and the version of HTTP used by the client. The URI is composed of the following elements:

    -   The identifier `Portlet`.
    -   The ID of the Web Content Viewer instance that is requested.
    -   The administrative name of the Web Content Viewer \(Note: This name is always the same unless the portlet has been cloned.\).
    -   The context path of the rendered Web Content Manager item encoded in UTF-8.
    -   A query string containing the following parameters:

        -   **PortletPID**

The ID of the Web Content Viewer instance that is requested.

        -   **PortletMode**

The mode in which the portlet is rendered. Note that the Web Content Viewer writes log entries only in its view mode.

        -   **PortletState**

The portlet window state.

        -   **RequestType**

The request type \(note that the Web Content Viewer writes log entries only for render requests\).

This is followed by a list of all request parameters that are available to the Web Content Viewer instance as UTF-8 encoded key-value-pairs.


|
|`200`|-   **statuscode**

The HTTP status code for the request.


|
|`-1`|-   **bytes**

The number of bytes of data that is transferred from the client as part of the request. A value of -1 indicates that the number of bytes is unknown.


|
|`"http://myserver.company.com/Page/6_8000CB1A00UR402F0JC25U1O25/MyPage"`|-   **referrer**

The referrer in case of portlet site analysis log entries identifies the portal page on which the Web Content Viewer instance is rendered.


|
|`"Mozilla/5.0 [...]"`|-   **user\_agent**

The type of web browser that is used by the client.


|
|`"JSESSIONID=0000JwIm04xm7btVLwzCj9Qo-uj:-1"`|-   **cookies**

The name and value of a cookie that was sent to the client browser as part of the request. If multiple cookies were sent, the list is delimited by the semicolon character.


|

**Parent topic:**[Setting up site analysis for the Web Content Viewer](../wcm/wcm_config_wcmviewer_sitean.md)

**Related information**  


[Understanding the site analysis log](../admin-system/adsaundr.md)

