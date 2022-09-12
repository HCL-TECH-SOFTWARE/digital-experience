# Java messaging services for web content

Web Content Manager supports for the notification of events such as item state changes, or services starting and stopping. These notifications can be delivered as messages to the Java messaging service.

The event classes can be delivered as messages to the Java messaging service:

-   **Item events:**

    -   Item created
    -   Item updated
    -   Item moved
    -   Item deleted

-   **Syndication events:**

    -   Starting
    -   Stopping

-   **Pre-render events:**

    -   Starting
    -   Stopping

1.  Configure the messaging services parameters in the `WCM MessagingService` service by using the WebSphere® Integrated Solutions Console.

2.  Run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat create-wcm-jms-resources -DPortalAdminId=username -DPortalAdminPwd=password -DuseRemoteEndPoints=true/false

    -   **UNIX™Linux™**

        ./ConfigEngine.sh create-wcm-jms-resources -DPortalAdminId=username -DPortalAdminPwd=password -DuseRemoteEndPoints=true/false

    -   **IBM® i**

        ConfigEngine.sh create-wcm-jms-resources -DPortalAdminId=username -DPortalAdminPwd=password -DuseRemoteEndPoints=true/false

    -   **z/OS®**

        ./ConfigEngine.sh create-wcm-jms-resources -DPortalAdminId=username -DPortalAdminPwd=password -DuseRemoteEndPoints=true/false

    **Note:** An administrator user name and password is not needed if you specify the portal administrator user name and password by using the `PortalAdminId` and `PortalAdminPwd` settings in the wkplc.properties file.

    **Note:** The `-DuseRemoteEndPoints` parameter is only used on clustered systems. If set to true, the task uses all node end points on the current setup. If set to "false", the task uses the end points of the current node.

3.  Restart HCL Portal.


The `create-wcm-jms-resources` command creates a topic space that is named `IWK.Topic.Space` and the topics `IWKTopics_Items`, `IWKTopics_PreRender`, and `IWKTopics_Syndication` in that space for the different events.

The messages are sent with no expiration time and need to be consumed, otherwise the queue fills up.

**Note:** There is a default limit of fifty thousand \(50,000\) messages per queue topic. When that limit is reached, messages cannot be stored anymore in the queue and exceptions are logged in the Portal server log file.

For information about the default implementation of the WebSphere Application Server JMS implementation and choices of message providers, read [Types of messaging providers](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/cmj_jmsp.html).


