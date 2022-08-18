# Portlet load monitoring properties

By setting the portal and portlet configuration parameters, you can monitor the session load and configure the parameters to increase performance.

## Portal configuration

After you set the service configuration properties, add the following custom properties for resource environment provider WP ConfigService. These parameters affect all parameters in the portal:

-   **com.ibm.wps.plm.enabled = false**

    Use this parameter to enable and disable Portlet load monitoring in the portal. By default Portlet load monitoring is disabled. To enable it, set the entry com.ibm.wps.plm.enabled to true in the WebSphere® Integrated Solutions Console. If you want to disable Portlet load monitoring, set com.ibm.wps.plm.enabled to false.

-   **com.ibm.wps.plm.statistics.requestnumber = 50**

    Use this parameter to define the number of samples for the calculation of the average response time for a portlet. The default value is `50`. The average response time for the portlet is calculated from the 50 latest requests that this portlet served. You can change the number of samples used for the average response time calculation. Add an entry with the name com.ibm.wps.plm.statistics.requestnumber to the WebSphere® Integrated Solutions Console. Set its value to the number of requests that you want to be used for average response time calculation. For example: If you want to consider the latest 75 requests for the average response time calculation, set the property com.ibm.wps.plm.statistics.requestnumber to a value of 75.


## Portlet configuration

Portlet load monitoring can monitor every JSR 168 or JSR 286 portlet installed in your HCL Portal. By default, Portlet load monitoring does not monitor portlets. If you want Portlet load monitoring to monitor a portlet, you need to set specific portlet preferences for a portlet definition.

You can configure these portlet preferences for a portlet either by setting them in the portlet.xml file before you deploy the portlet. Or you can administer them after the portlet was deployed by using the **Manage Portlets** administration portlet.

-   **com.ibm.wps.pe.plm.maxrequest**

    Use this parameter to define the maximum number of concurrent requests that is allowed for a portlet. If the number of requests that the portlet serves at any time exceeds the maximum number of concurrent requests that you specify here, then Portlet load monitoring blocks further requests to this portlet. Instead of responding to the requests the portlet renders with a message that states the portlet is not available. To re-enable this portlet for rendering, a portal administrator can enable the portlet by using the Manage Portlets administration portlet.

    Example: If you want to allow no more than a maximum of 10 concurrent requests for a portlet, set the portlet preference com.ibm.wps.pe.plm.maxrequest to a value of 10.

-   **com.ibm.wps.pe.plm.minrequest**

    Use this parameter to define the reactivation limit for a portlet. Use this parameter for a recovery process. If Portlet load monitoring blocked the portlet because it exceeded the maximum number of allowed concurrent requests, then no more requests to this portlet are allowed. If the portlet then completes its active requests after some time, the number of concurrent requests that are currently served by the portlet decreases. If the number of concurrent requests in the portlet falls back down to the reactivation limit that you specified for the portlet preference parameter com.ibm.wps.pe.plm.minrequest, Portlet load monitoring enables the portlet for responding to requests and rendering again. This setting is subject to two restrictions:

    1.  This setting is only evaluated when you set the maximum number of concurrent requests by using the parameter com.ibm.wps.pe.plm.maxrequest.
    2.  This value must be less than the maximum number of concurrent requests that you entered for the parameter com.ibm.wps.pe.plm.maxrequest.
    Example 1: If you want the portlet to respond to requests again when it has no more than three active requests open, set the portlet preference parameter com.ibm.wps.pe.plm.minrequest to `3`.

    Example 2: If you set the maximum number of concurrent requests for a portlet to 10 by using the parameter com.ibm.wps.pe.plm.maxrequest and the reactivation limit of concurrent requests for the same portlet to three using the parameter com.ibm.wps.pe.plm.minrequest, Portlet load monitoring works as follows:

    1.  When the portlet exceeds 10 and reaches 11 concurrent requests, Portlet load monitoring blocks the portlet from further requests.
    2.  When the portlet completes 8 active requests and has three active requests to complete, Portlet load monitoring allows the portlet to respond to incoming requests again.
-   **com.ibm.wps.pe.plm.average.time.processing**

    Use this parameter to define the allowed average response time for the portlet. Specify a value in milliseconds. If the portlet exceeds the average response time that you specified, then Portlet load monitoring blocks further requests to this portlet. To reenable this portlet for rendering, a portal administrator can enable the portlet by using the Manage Portlets administration portlet.

    For example: If you want to specify 3 seconds as the average response time allowed for a portlet, set the portlet preference `com.ibm.wps.pe.plm.average.time.processing` to `3000` \(milliseconds\) for this portlet.


**Parent topic:**[Portlet load monitoring for HCL Portal](../dev-portlet/plmc.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

