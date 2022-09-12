# Configuring application polling

Site Builder regularly polls to check the status of running tasks that are displayed on the Site Builder home page.

These configurable values are used to configure polling:

-   **Slow poll interval**

    This value is the interval between polls when there are no tasks currently running. The default interval is 60 seconds.

-   **Fast poll interval**

    This value is the interval between polls when tasks run. This poll shows the status of completed pages for each running task. The default interval is 7 seconds.


To change the default polling settings:

1.  Log in as an administrator.

2.  Go to **Administration** \> **Portlet Management** \> **Portlets**

3.  Browse to the Site Builder portlet. The unique name is ibm.portal.sitebuilderportlet.

4.  Click the **Configure portlet** icon.

    1.  Browse to the **SiteTemplateTaskPollingTimeSlow** preference and click the **Edit** value icon. Enter the number of seconds between each slow poll as integer you want to set. The default is 60 seconds.

    2.  Browse to the **SiteTemplateTaskPollingTimeFast** preference and click the **Edit** value icon. Enter the number of seconds between each fast poll as integer you want to set. The default is 7 seconds.

5.  Click **OK**.

6.  Click **OK**.


