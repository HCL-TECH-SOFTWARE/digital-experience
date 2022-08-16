# Administering portlet preferences for Portlet load monitoring

You can set portlet preferences to influence in which cases Portlet load monitoring blocks or reenables JSR portlets.

You can configure parameters for the following:

-   Maximum number of concurrent requests
-   Reactivation limit of concurrent requests for reactivating the portlet
-   Allowed average response time. You can configure the sample number of requests by which this average response time for portlets is calculated as mentioned in configuration tasks.

For more information about these three parameters and their meaning, refer to the topic about Portlet configuration parameters for Portlet load monitoring. For information about setting the sample by which the average response time is calculated refer to the topic about Portal configuration parameters for Portlet load monitoring.

1.  Log in to the portal by using a portal administrator user ID.

2.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.

    The Manage Portlets portlet is displayed. It lists the portlets in your portal.

3.  Search for the portlet for which you want to set portlet preferences.

4.  Select the **Configure Portlet** icon.

5.  Add a portlet preference, and type **number** for the new portlet preference:

    -   To set the maximum number of requests that you want to allow for this portlet, add `com.ibm.wps.pe.plm.maxrequest = xyz` for the new portlet preference. For example, if you want to allow this portlet no more than 15 concurring requests, specify com.ibm.wps.pe.plm.maxrequest = 15.
    -   To set the reactivation limit for this portlet, add `com.ibm.wps.pe.plm.minrequest = xyz` for the new portlet preference. For example, if you want this portlet to be reenabled when its concurrent requests fall back to 5 or less, specify com.ibm.wps.pe.plm.minrequest = 5.
    -   To set the allowed average response time for this portlet, add `com.ibm.wps.pe.plm.average.time.processing = xyz`, where `xyz` is the average response time in milliseconds. For example, if you specify `com.ibm.wps.pe.plm.average.time.processing = 3000` and the average response time for this portlet exceeds 3 seconds, then Portlet load monitoring blocks further requests to this portlet.
6.  Click **Add** to add the preference.

7.  Save your changes by clicking **OK**.


As an alternative, you can define a portlet preference before you deploy the portlet. In this case add the portlet preference to the `portlet.xml` deployment descriptor of your WAR file.

**Parent topic:**[Administering Portlet load monitoring](../dev-portlet/plmt_admin.md)

