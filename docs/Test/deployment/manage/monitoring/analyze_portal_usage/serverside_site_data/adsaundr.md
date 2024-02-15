# Understanding the site analysis log

Learn more details about how to read the site analysis log.

The HCL Digital Experience site analysis log information is collected in the following file:

```

[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/app_server_name/sa_date_time.log


```

where [wp\_profile\_root](../../../../../guide_me/wpsdirstr.md) is the HCL Digital Experience root directory and date\_time is the date and time when the file was created. The current \(active\) log file is named **sa.log**. As explained in the previous section, the dateFormat parameter determines the interval at which the file is created.

The site analysis log uses the NCSA Combined log format, which is a combination of NCSA Common log format and three additional fields: the referrer field, the user\_agent field, and the cookie field. The following example displays a sample entry in the site analysis log. The table describes each field of the log format:

```

9.37.3.88 - customer2 [10/Apr/2002:21:33:16 +0000]
"GET /Portlet/146/Welcome_Portlet?PortletPID=146&PortletMode=View&PortletState=Normal
HTTP/1.1" 200 -1 "http://myserver.company.com/Page/110/Welcome"
"Mozilla/4.0 \(compatible; MSIE 5.5; Windows NT 4.0\)"

"JSESSIONID=OXDFAPVR4SXYZOIHSLVGA2Y"

```

|Field in the Example|Log Field Name and Explanation|
|--------------------|------------------------------|
|`9.37.3.88`|**host** The IP address of the HTTP client that sent the request. **Important:** If there is a reverse proxy server between the client and the portal, the IP address logged is that of the reverse proxy server rather than the HTTP client. To log the IP address of the HTTP client, you must remove the reverse proxy server from the environment.|
|-|**rcf931** The identifier used to identify the client making the request. This field is always set to the hyphen character \( - \).|
|`customer2`|**username** The user ID for the client. If the user ID is not known, the field is set to the hyphen character \( - \).|
|`[10/APR/2002:21:33:16 +0000]`|**date:time: timezone** The date and time of the HTTP request.|
|'"GET /Portlet/146/Welcome_Portlet?'<br>'PortletMode='<br>'View&PortletState= Normal HTTP/1.1"<br>'|**request** The HTTP method, the URL of the requested resource and the version of HTTP used by the client.|
|`200`|**statuscode** The HTTP status code for the request.|
|`-1`|**bytes** The number of bytes of data transferred from the client as part of the request. A value of -1 means unknown.|
|`"http://myserver.company.com/Page/110/Welcome"`|**referrer** The URL that linked the client to the website. For some requests, the referrer might not be logged. In such cases, the field is set to empty double quotes: ""|
|`"Firefox/2.0 (compatible; MSIE 5.5; Windows NT 4.0)"`|**user\_agent** The type of Web browser used by the client.|
|`"JSESSIONID=OXDFAPVR4SXYZOIHSLVGA2Y"`|**cookies** The name and value of a cookie that was sent to the client browser. If multiple cookies were sent, the list is delimited by the semicolon character.|


???+ info "Related information"
    - [Site analysis example for the Web Content Viewer](../../../../../manage_content/wcm_configuration/cfg_webcontent_delivery_env/wcmviewer_site_analytics_setup/wcm_config_wcmviewer_saxmp.md)

