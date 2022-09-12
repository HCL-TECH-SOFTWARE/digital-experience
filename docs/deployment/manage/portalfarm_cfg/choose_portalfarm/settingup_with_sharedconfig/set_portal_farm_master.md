# Installing the Farm Master and setting up the support server

The first server where HCL Digital Experience is installed is the basis for the portal farm and is termed the Farm Master.

1.  Install HCL Digital Experience into the mounted file system.

    A set of product binary files and a default configuration profile \(wp\_profile\) exist. The binary files are the PortalServer, AppServer, and other directories. Ensure that all installable files go into the shared file system. The installation needs a single-server installation and no cluster.

2.  If you are using a shared file system, reconfigure the portal instance to use a different TCP/IP host name. If you are using a cloned file system, skip this step.

    This host name must either be localhost or a host name that is configured in the local hosts file alias localhost. This placement allows the local instance to always reference itself using the loopback address.

    Complete the following steps to reconfigure the host name:

    1.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory.

    2.  Run the following task, where node\_name is the node name that is assigned to the local node:

        -   AIX®: ./wsadmin.sh -c "\\$AdminTask changeHostName \{-nodeName node\_name -hostName localhost\}; \\$AdminConfig save" -conntype NONE
        -   HP-UX: ./wsadmin.sh -c "\\$AdminTask changeHostName \{-nodeName node\_name -hostName localhost\}; \\$AdminConfig save" -conntype NONE
        -   Linux™: ./wsadmin.sh -c "\\$AdminTask changeHostName \{-nodeName node\_name -hostName localhost\}; \\$AdminConfig save" -conntype NONE
        -   IBM® i: wsadmin.sh -c "\\$AdminTask changeHostName \{-nodeName node\_name -hostName localhost\}; \\$AdminConfig save" -conntype NONE
        -   Windows™: wsadmin.bat -c "$AdminTask changeHostName \{-nodeName node\_name -hostName localhost\}; $AdminConfig save" -conntype NONE
    3.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

    4.  Run the following task to propagate the profile changes to the HCL Portal configuration:

        -   AIX: ./ConfigEngine.sh localize-clone -DWasPassword=password
        -   HP-UX: ./ConfigEngine.sh localize-clone -DWasPassword=password
        -   Linux: ./ConfigEngine.sh localize-clone -DWasPassword=password
        -   IBM i: ConfigEngine.sh localize-clone -DWasPassword=password
        -   Windows: ConfigEngine.bat localize-clone -DWasPassword=password
3.  Configure this instance to represent the baseline configuration for the entire farm, including configuring databases and configuring the user registry.

4.  Set up the support server to match the configuration of your portal farm, either GPFS or non-GPFS, with the following deviations:

    1.  Configure the master portal installation to the shared database, custom applications, and security settings.

    2.  Before you set up a farm with a shared file configuration, complete the following steps:

        1.  Create a local copy of the directory; preserve the profile configuration.
        2.  Move the copy to the local file system of the support server.
        3.  Ensure that the local directory location on the support server matches the directory location on the master server.
    3.  On the support server, mount the remote directories. Read the directory from the support server local file system.

    4.  Continue to setup the farm on the master server with one of the following topics:

        -   Setting up farm instances using a GPFS file shared configuration
        -   Setting up farm instances using non-GPFS file shared configuration
5.  If you are using HCL Web Content Manager, run the following task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory, to set up the local messaging bus and queue on the support server:

    To avoid the system from receiving all content updates from the authoring system, one server outside the farm must be identified as the subscriber. This server also requires a message queue where content update messages are posted from members to the farm. All farm servers listen for these messages to update their own content caches.

    **Tip:** Run this step once when you set up the portal farm. It is not completed on each server in the farm. This step is only run on the server that is identified as the WCM SUBSCRIBER that is used in the portal farm.

    -   Windows: ConfigEngine.bat create-wcm-jms-resources -DWasPassword=password
    -   UNIX™Linux: ./ConfigEngine.sh create-wcm-jms-resources -DWasPassword=password
    -   IBM i: ConfigEngine.sh create-wcm-jms-resources -DWasPassword=password
6.  If you are using Web Content Manager, complete the following steps to set up more farm instances to listen for content update messages:

    **Tip:** This step is complete on each server in the farm.

    1.  Open the prereq.wcm.properties file in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/wcm/config/properties/ directory and update the following properties with the appropriate information for the farm servers:

        **Note:** See the prereq.wcm.properties file for specific information about the parameters.

        -   remoteJMSHost
        -   remoteJMSBootstrapPort
        -   remoteJMSNodeName
        -   remoteJMSServerName
    2.  Run the following task to set up the remote messaging bus and queue:

        -   Windows: ConfigEngine.bat create-wcm-jms-resources-remote -DWasPassword=password
        -   AIX HP-UX Linux Solaris z/OS®: ./ConfigEngine.sh create-wcm-jms-resources-remote -DWasPassword=password
        -   IBM i: ConfigEngine.sh create-wcm-jms-resources-remote -DWasPassword=password
7.  Based on your file system, complete the following steps to enable the server to run in farm mode:

    The systemTemp parameter specifies where the server-specific directory is located. This directory contains all directories and files that the running portal instance writes to, such as for logging and page-compiling.

        |**Cloned file system**|Run the following task to enable the server to run in farm mode:    -   AIX: ./ConfigEngine.sh enable-farm-mode -DsystemTemp=/usr/IBM/WebSphere/wp\_profile -DWasPassword=password
    -   HP-UX: ./ConfigEngine.sh enable-farm-mode -DsystemTemp=/opt/IBM/WebSphere/wp\_profile -DWasPassword=password
    -   Linux: ./ConfigEngine.sh enable-farm-mode -DsystemTemp=/opt/IBM/WebSphere/wp\_profile -DWasPassword=password
    -   IBM i: ConfigEngine.sh enable-farm-mode -DsystemTemp=/QIBM/IBM/WebSphere/wp\_profile -DWasPassword=password
    -   Windows: ConfigEngine.bat enable-farm-mode -DsystemTemp=C:\\IBM\\WebSphere\\wp\_profile -DWasPassword=password
|
    |**Shared file system**|    1.  Create the target directory path; for example:
        -   AIX: /var/log/was\_tmp
        -   HP-UX: /var/log/was\_tmp
        -   Linux: /var/log/was\_tmp
        -   IBM i: /var/log/was\_tmp
        -   Windows: C:\\temp\\was\_tmp
    2.  Run the following task to enable the server to run in farm mode:
        -   AIX: ./ConfigEngine.sh enable-farm-mode -DsystemTemp=/var/log/was\_tmp -DWasPassword=password
        -   HP-UX: ./ConfigEngine.sh enable-farm-mode -DsystemTemp=/var/log/was\_tmp -DWasPassword=password
        -   Linux: ./ConfigEngine.sh enable-farm-mode -DsystemTemp=/var/log/was\_tmp -DWasPassword=password
        -   IBM i: ConfigEngine.sh enable-farm-mode -DsystemTemp=/var/log/was\_tmp -DWasPassword=password
        -   Windows: ConfigEngine.bat enable-farm-mode -DsystemTemp=C:\\temp\\was\_tmp -DWasPassword=password
|

8.  Each server that you add to the farm is called a Farm Worker.

        |**Cloned file system**|Create a clone of the Farm Master. Go to [Configuring a cloned file system](cfg_farm_clone.md) for information.|
    |**Shared file system**|On each Farm Worker, mount the network accessible file system on a new system in the same location as on the Farm Master. This step preserves the installation path configuration.|

9.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin directory on the farm client.

10. Run the following task to start or stop an instance of HCL Portal from a farm server:

    |Operating system|Tasks|
    |----------------|-----|
    |AIX|./start\_WebSphere\_Portal.sh./stop\_WebSphere\_Portal.sh

|
    |HP-UX|./start\_WebSphere\_Portal.sh./stop\_WebSphere\_Portal.sh

|
    |IBM i|start\_WebSphere\_Portal.shstop\_WebSphere\_Portal.sh

|
    |Linux|./start\_WebSphere\_Portal.sh./stop\_WebSphere\_Portal.sh

|
    |Windows|start\_WebSphere\_Portal.batstop\_WebSphere\_Portal.bat

|

11. If you plan to use a web server for load balancing, complete [Setting up the HTTP server plug-in on a portal farm](set_http_farm.md) next.

12. The **wpsScheduler** is used to clean up the database for non-immediate tasks, such as page deletions, and must be enabled only on the farm support server. Verify that **wpsScheduler** is disabled on the farm master. If it is not disabled, complete the following steps:

    1.  Log in to the WebSphere® Integrated Solutions Console.

    2.  Click **Resources** \> **Schedulers**.

    3.  Click **WPSTaskScheduler**.

    4.  Click **Custom properties**.

    5.  Click **New**.

    6.  Specify daemonAutoStart in the **Name** field.

    7.  Set the value to false.

    8.  Set the type to java.lang.String.

    9.  Click **OK** and then click **Save** to save your configuration changes.

    10. Restart the server.

    Read [Scheduler daemon](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/scheduler/concepts/csch_schedulerdaemon.html) for more information.

13. Verify that the search.service.suppress\_automatic\_creation property exists. This property suppresses the automatic creation of search services. If it does not exist, complete the following steps to create the search.service.suppress\_automatic\_creation property:

    1.  Log in to the WebSphere Integrated Solutions Console.

    2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    3.  Click **WP ConfigService**.

    4.  Click **Custom properties**.

    5.  Click **New**.

    6.  Enter the following information to create the new property:

        -   **Name**: search.service.suppress\_automatic\_creation
        -   **Value**: true
        -   **Description**: Suppress automatic creation of the search service
        -   **Type**: java.lang.string
    1.  Click **OK** and then click **Save** to save your configuration changes.

    2.  Restart the server.



**Related information**  


[Setting up farm instances as unique installations](../install/set_portal_farm.md)

[Configuring a shared file system](../install/set_portal_farm_gpfs.md)

[How to manage syndicators and subscribers](../panel_help/wcm_syndication.md)

[Configuring search in a cluster](../config/config_search_clus.md)

