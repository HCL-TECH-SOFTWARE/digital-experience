# Syndication troubleshooting

If you encounter issues when syndicating, there are some common methods available to troubleshoot these issues.

## Common issues

|Issue|Solution|
|-----|--------|
|Unable to reach host|This is a common reason why syndication does not work. The URL for the syndicator or the subscriber might not be valid. You might need to use the IP address rather than the domain name.|
|Syndicator becomes unresponsive during syndication|Syndication can require a large amount of resources to run successfully. Consequently, if your server is performing other tasks at the same time as syndication, the process of syndication might slow or stop altogether. You must schedule your syndication to occur at times when the server load is at its lowest.|
|Syndicator status hangs on "Pending", or "Pending, Active"|If the issue occurs during high workload, it is possible to resolve the issue by restarting the syndicator server when the workload lowers.<br> If you are attempting to update or rebuild a syndicated library that contains a large number of items, the syndicator status might hang on "Pending", or "Pending, Active". This can occur because the syndicator keeps retrying to syndicate when some items fail to syndicate to the subscriber, or when a system timeout occurs on the subscriber when saving data.<br> Improving the performance of your database can help avoid these situations. For example, two of the database attributes that DB2 relies upon to perform optimally are the database catalog statistics and the physical organization of the data in the tables. Catalog statistics must be recomputed periodically during the life of the database, particularly after periods of heavy data modifications \(inserts, updates, and deletes\) such as a population phase. To fix this, you must run "Runstats" on the JCR database before and after syndication. The DB2 runstats command is used to count and record the statistical details about tables, indexes, and columns. See database performance for information on using the "Runstats" task.<br> Due to the heavy load of computing these statistics, it is recommend that this maintenance occurs during off hours, periods of low demand, or when the portal is offline.|
|Time-outs during syndication|Time-outs during syndication are often caused by the failure of large items to be saved. Increasing the `total transaction lifetime timeout` setting of your HCL Digital Experience server can address this issue. The `total transaction lifetime timeout` setting of your subscriber must be at least the same as the syndicator. The `total transaction lifetime timeout` setting is changed by using the WebSphere® Integrated Solutions Console. <br> Go to **Servers > Server Types > WebSphere application servers > portal_server >Container Services > Transaction Service**. <br> See the WebSphere Application Server information center for more information. <br>|
|Subscriber becomes unresponsive during syndication|If you are attempting to syndicate a library that contains more than 10000 items, the subscriber machine might become unresponsive during the syndication operation. This action can occur due to an insufficient Java heap size setting on the subscriber.To update the maximum Java heap size that is used by the portal application server on the subscriber machine, complete the following steps: <br> 1.  In the WebSphere Integrated Solutions Console, click **System administration > Deployment manager > Java and Process Management > Process Definition > Java Virtual Machine**. <br>2.  Update the value in the **Maximum Heap Size** field. A value of at least 1024 MB is recommended. <br> 3.  Click **OK**, and then save your changes. <br>1.  In the WebSphere Integrated Solutions Console, select **Servers > Application Servers > yourPortalServerName > Java and Process Management > Process Definition > Servant > Java Virtual Machine* > Maximum Heap Size** to set the JVM heap size. <br>2.  Set the value to a maximum of 768 MB. <br>3.  Click **OK**, and then save your changes. <br>In addition, ensure that you have at least as much swap space allocated on the subscriber machine as you have physical memory.|
|500 errors on ext2 and ext3 versions of Linux|If you receive 500 errors on ext2 and ext3 versions of Linux, you exceeded the number of children that a parent folder can hold. You cannot store more than 32768 children under one folder on ext2 and ext3 versions of Linux. Move some content items out of the affected site area to another site area. So that none of your site areas contain more than 32768 children under one folder and then try syndicating again. You can move the content items back to the correct site areas after syndication is complete.|
|Subscriber is successful but syndicator is pending with no updates or failed items|Verify that the subscriber URL is correct. For example, the subscriber URL might be one of the following URLs: <br>-   http://myportalhostname.ibm.com:port/wps/wcm/connect?MOD=Synd, where myportalhostname is the name of your portal host <br>-   http://mywebserverhostname.ibm.com:port/wps/wcm/connect?MOD=Synd, where mywebserverhostname is the name of your web server host <br>**Note:** In some configurations, TAM automatically appends itself to the subscriber URL, as in the following example: <br>-   http://TAMmyportalhostname.ibm.com:port/wps/wcm/connect?MOD=Synd <br>1.  Click the **Administration menu** icon. Then, click **Portal Content > Syndicators**. <br> 2.  Click the **Edit Syndicator** icon for your idle syndicator. <br>3.  Verify that the subscriber URL begins with either your portal host name or your web server host name. If it does not, update the URL so that it matches the examples of the subscriber URLs.|
|Manual syndication is automatically started when subscriber is restarted.|If you want to avoid this behavior, set the following property in the WCMConfigService in the WebSphere Application Server console of the subscriber server and restart portal:-   -   connect.moduleconfig.syndication.update.subscribers.on.start=false|

## Other solutions

|Option|Details|
|------|-------|
|Resetting the web content event log.|To assist in the troubleshooting process, you can reset the web content event log. For more information, see *Resetting the web content event log* in the related links.|

## Working with failed items

From time to time items fail to syndicate. You use the failed items view to review a list of failed items and then run syndication again after you fix the issue.

1.  Log on to your syndicator as an administrator.
2.  Click the **Administration menu** icon. Then, click **Portal Content > Syndicators**.
3.  The number of failed items for a syndicator are displayed in the Failed Items column. Click the number of failed items to open the Failed Items view.
    -   Each failed item for the selected syndicator is displayed in the **Failed Items** view. Information is displayed about each failed item, including information about how the appropriate action required to fix the issue.
    -   The Root and Impact columns are used to find the root cause of a syndication failure, and what secondary items are impacted by the root cause. By finding and fixing the root cause of the syndication failure, you also potentially fix the syndication failures of the items that are impacted by the root cause.
    -   The Important Items tab can also be used to narrow down which items are the most crucial to fix.
    
4.  After you identified and fixed the issues, you can click **Retry** to initiate syndication for individual items, or use the **Retry All** in the Important Items tab to try to syndicate all failed items. You can also choose to update or rebuild a syndication relationship.


???+ info "Related information"
    - [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    - [Resetting the web content event log](../../wcm_configuration/wcm_adm_tools/wcm_config_reset_event_log.md)

