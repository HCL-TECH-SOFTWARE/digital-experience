# Setting up farm instances as unique installations

Choose this option if you want all portal farm instances to be unique installations. You have more control over the server-specific configuration because they are unique from server to server. For example, you can easily apply and test changes or application updates to one server on the farm at a time. The disadvantage to this option is that all administrative actions must be repeated on every server in the farm.

**Tip:** For most farm configurations, the shared farm is the preferred scenario. For information, go to [Setting up farm instances with a shared configuration](set_portal_farm_shared.md#).

Complete the following steps to set up farm instances as unique installations:

**Note:** All steps are repeated for each instance that you add to the portal farm except for the create-wcm-jms-resources step. Run the create-wcm-jms-resources command once on the server that is identified as the WCM SUBSCRIBER that is used in the portal farm.

**Remember:** Create a different database instance for the Release and JCR databases because all farm members must have their own Release and JCR database. They can share all other databases. Use the connect-database task to connect these instances to the other common database domains already established by the first farm instance.

**Warning:** The connect-database configuration task does not preserve customizations to the data sources for the HCL Portal databases. If you previously tuned your data sources for the HCL Portal databases, make a note of the settings, run connect-database, and reapply the tuning after you run the configuration task.

1.  Install and configure HCL Digital Experience on the initial system as a stand-alone server.

    **Remember:** Create a different database instance for the Release database because all farm members must have their own Release database. They can share all other databases.

2.  Ensure that the HCL Portal server is started.

3.  Log on to the WebSphere® Integrated Solutions Console and complete the following steps:

    1.  Go to **Servers** \> **Server Types** \> **WebSphere application servers** \> **HCL Digital Experience** \> **Web container settings** \> **Web Container** and then click **Custom properties** under the **Additional Properties** section.

    2.  Click **New** and add the HttpSessionCloneId custom property with a value of WpServer1, where WpServer1 is the correct clone ID for that server instance. This ID uniquely identifies this server to the HTTP server plug-in for load balancing purposes.

    3.  Click **OK**.

    4.  Click **Save** to save your changes.

    5.  Log out of the WebSphere Integrated Solutions Console.

4.  If you are using HCL Web Content Manager, run the following task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory, to set up the local messaging bus and queue:

    To avoid the system from receiving all content updates from the authoring system, one server outside the farm must be identified as the subscriber. This server also requires a message queue where content update messages are posted from members to the farm. All farm servers listen for these messages to update their own content caches.

    **Tip:** Run this step once when you set up the portal farm. It is not completed on each server in the farm. This step is only run on the server that is identified as the WCM SUBSCRIBER that is used in the portal farm.

    -   Windows™: ConfigEngine.bat create-wcm-jms-resources -DWasPassword=password
    -   AIX® HP-UX Linux™ Solaris z/OS®: ./ConfigEngine.sh create-wcm-jms-resources -DWasPassword=password
    -   IBM® i: ConfigEngine.sh create-wcm-jms-resources -DWasPassword=password
    **Note:** If you are using a remote content environment, see the "*Working with syndicators and subscribers*" link under Related concepts.

5.  If you are using Web Content Manager, complete the following steps to set up more farm instances to listen for content update messages:

    **Tip:** This step is complete on each server in the farm.

    1.  Open the prereq.wcm.properties file in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/wcm/config/properties/ directory and update the following properties with the appropriate information for the farm servers:

        **Note:** See the prereq.wcm.properties file for specific information about the parameters.

        -   remoteJMSHost
        -   remoteJMSBootstrapPort
        -   remoteJMSNodeName
        -   remoteJMSServerName
    2.  Run the following task to set up the remote messaging bus and queue:

        -   Windows: ConfigEngine.bat create-wcm-jms-resources-remote -DWasPassword=password
        -   AIX HP-UX Linux Solaris z/OS: ./ConfigEngine.sh create-wcm-jms-resources-remote -DWasPassword=password
        -   IBM i: ConfigEngine.sh create-wcm-jms-resources-remote -DWasPassword=password

HCL Digital Experience is now managed the same as a stand-alone server in terms of starting, stopping, and maintaining the configuration.

-   **[Setting up a virtual portal in a portal farm](../install/vp_portal_farm.md)**  
If you plan on creating and using virtual portals within a portal farm, there are additional steps that are recommended to have a successful virtual portal within a portal farm environment. The basic problem if this procedure is not followed is that the virtual portal artifacts have different object ID's in each Portal farm member, which can cause problems if the initial HTTP requests prior to establishing a session end up getting routed to different Portal farm members. By following this procedure, we ensure that all Portal farm members can service these initial HTTP requests.

**Parent topic:**[Choosing the type of portal farm to create](../install/choose_portal_farm.md)

**Related information**  


[Installing the Farm Master and setting up the support server](../install/set_portal_farm_master.md)

