# HTTP session failover 

View the global settings portlet to verify which server is handling user requests for a session.

In a clustered environment, all requests for a particular session are directed to the same server instance in the cluster. In other words, after a user establishes a session \(for example, by logging in\), the user is served by the same server instance during the session.

To verify which server is handling user requests for a session, you can view the global settings portlet. This portlet displays the node name of the server handling requests. If one of the servers in the cluster fails, the request is rerouted to another server in the cluster. If distributed sessions support is enabled, the new server can access session data from the database or another server instance.

By default, failover support is available for HCL Portal and any portlets that are installed with the product. To take advantage of failover support with your own developed portlets, you must ensure that your portlets are properly implemented.

Distributed session support must be configured separately in WebSphere® Application Server. Refer to the WebSphere Application Server documentation for information:

-   Windows™ and UNIX™Linux™: [Distributed sessions](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/index.jsp?topic=%2Fcom.ibm.websphere.base.doc%2Fae%2Fcprs_persistent_sessions.html)
-   IBM® i: [Distributed session support](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/index.jsp?topic=%2Fcom.ibm.websphere.base.iseries.doc%2Fae%2Fcprs_persistent_sessions.html)
-   [Distributed sessions](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/index.jsp?topic=%2Fcom.ibm.websphere.base.iseries.doc%2Fae%2Fcprs_persistent_sessions.html)

## Failover and lost data

Data that is stored within the JVM memory. It is not managed by the application server or the HCL Portal server because replication might be lost in the case of failover. Even with the distributed session support, users cannot recover any uncommitted information that is not stored in sessions or other replicated data areas. In such cases, users might restart a transaction after a failover occurs. For example, if you are working with a portlet and moved between several screens when a failover occurs, you return to the initial screen. If you are attempting to deploy a portlet when a failover occurs, the deployment might not be successful. Therefore, you must redeploy the portlet. The validity of user login sessions is maintained despite node failures with distributed session support enabled.

In cases where a portlet does not support failover, a "Portlet unavailable" message is displayed for the portlet after a failover occurs. If a portlet supports partial or incomplete failover, some data that is displayed before the failover might disappear after the failover occurs. The portlet might not work as expected. In such extreme cases, the user must log out and in to resume normal operation.

After a failover occurs, the request is redirected to another cluster member by the web server plug-in. Most browsers issue a GET request as a response to a redirect after you submit a POST request. It ensures that the browser does not send the same data multiple times without the user's knowledge. However, after the failover, users must refresh the page or resubmit the form to recover the POST data.

**Note:** Any portlets or applications that use POST data are affected by this behavior.

## Failover for the **Authoring** Portlet

You can configure distributed session support in WebSphere Application Server, either for persistent sessions or memory-to-memory session replication. Configure the `Custom tuning parameters` setting to determine what session attributes are replicated and how often the replication takes place. You can select a tuning level from "Very high" to optimize for performance to "Low" to optimize for failover. In order for session information to be preserved after failover, set the custom-tuning level so that all session attributes are written.

If the write frequency is set as "Time-based" with a frequency of 10 seconds, changes within 10 seconds of the failover are lost. If the write frequency is set as "End of the servlet service", the **Authoring** portlet session remains intact after failover.

During a failover condition or session timeout, an HCL Web Content Manager user might return to the initial screen of the **Authoring** portlet. Uncommitted data is lost, including values for new content items or edits to an existing item. There is, however, no loss of service and the user can continue to work.

**Parent topic:**[Cluster considerations ](../plan/plan_clus_ovr.md)

