# Adding vertical cluster members to a static cluster

You can add vertical cluster members to share the workload demands of your cluster across multiple members on the same physical server.

1.  Log on to the deployment manager WebSphere® Integrated Solutions Console.

2.  Go to **Servers > Clusters > WebSphere application server clusters > cluster_name > Cluster members**.

3.  Click **New** to create the cluster member.

    1.  Define the name of cluster member.

        !!!note
            Do not use spaces in the cluster member name.

    2.  Select an existing node where HCL Digital Experience is installed.

    3.  Check the box **Generate Unique HTTP Ports**.

    4.  Click **Add Member** or **Apply** and then click **Next** to view the summary.

    !!!important
        Update the virtual host entries for the new port that is created when you added a cluster member. Update the default_host virtual host in the WebSphere Integrated Solutions Console. Then, add an alias entry for the port number. Use an "`*`" wildcard character for the host name. Read [Configuring virtual hosts](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/tcws_plugin_vhost.html) for information.

4.  Click **Finish** and save the changes.

    -   View the new cluster topology from **Servers > Clusters > Cluster Topology**.
    -   The **Servers > Server Types > WebSphere application servers** view lists the new server cluster members.

5.  Complete the following steps to enable cache replication:

    1.  From the deployment manager WebSphere Integrated Solutions Console, go to **Servers > Server Types > WebSphere application servers**.

    2.  Click the new vertical cluster member.

    3.  Click **Dynamic cache service** under **Container services**.

    4.  Change **Cache size** to 3000 entries.

    5.  Check the **Enable cache replication** check box.

    6.  Select **NOT_SHARED** from the **Replication type** menu.

    7.  Click **OK**.

    8.  Click **Save** to save your changes to the master configuration.

6.  Open a command prompt.

7.  Change to the wp_profile_root/ConfigEngine directory.

8.  Run the following command on each vertical cluster member to clean up the server-scoped resources, caches, and resource providers:

    -   AIX® HP-UX Linux™ Solaris: `./ConfigEngine.sh cluster-node-config-vertical-cluster-setup -DServerName=unique vertical cluster servername -DWasPassword=password`
    -   IBM® i: `ConfigEngine.sh cluster-node-config-vertical-cluster-setup -DServerName=unique vertical cluster servername -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat cluster-node-config-vertical-cluster-setup -DServerName=unique vertical cluster servername -DWasPassword=password`
    
    The unique vertical cluster servername is the name that you specified when you created the cluster member.

9.  The binary cache that is used by the JCR cannot share files between Portal JVMs. Therefore, each cluster member that is on a single host system must have its own directory that is specified for the JCR binary file cache property. Complete the following steps to configure the directories:

    1.  From the deployment manager WebSphere Integrated Solutions Console, go to **Resources > Resource Environment> Resource Environment Providers**.

        Each server should have a server scoped Resource Environment Provider. The provider is called **JCR ConfigService PortalContent**.

    2.  Click the first **JCR ConfigService PortalContent** link in the list.

    3.  Click **Custom properties**.

    4.  Verify that the **jcr.binaryValueFileDir** value is unique within the HCL Portal node where the server is located.

        For example, the following values are supported:

        -   The Node 1/Server 1 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp\_profile/jcr/binary
        -   The Node 1/Server 2 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp\_profile2/jcr/binary
        -   The Node 2/Server 1 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp\_profile/jcr/binary
        -   The Node 2/Server 2 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp\_profile2/jcr/binary
        
        The following values are not supported:

        -   The Node 1/Server 1 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp\_profile/jcr/binary
        -   The Node 1/Server 2 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp\_profile/jcr/binary
        If the value is not unique, complete the following steps:

        1.  Click **jcr.binaryValueFileDir**.
        2.  Change the value of the **jcr.binaryValueFileDir**.
        3.  Click **OK**.
        4.  Click **Save**.
    5.  Repeat these steps on all **JCR ConfigService PortalContent** options.

10. Restart the vertical cluster member that is referenced in the cluster-node-config-vertical-cluster-setup task.

11. Save your changes and resynchronize the nodes.

    1.  In the deployment manager WebSphere Integrated Solutions Console, click **Save** on the taskbar.

    2.  Save your administrative configuration.

    3.  Go to **System Administration > Nodes**.

    4.  Select the node from the list.

    5.  Click **Full Resynchronize**.

12. If you transferred your databases after you created the cluster, complete the following steps on each vertical cluster member:

    1.  Log on to the deployment manager WebSphere Integrated Solutions Console.

    2.  Go to **Environment > WebSphere Variables**.

    3.  From the **Scope** menu, select the **Node=nodename, Server=servername** option to narrow the scope of the listed variables. **Node=nodename** is the node that contains the HCL Portal application server.

    4.  Update the **WCM_DATASOURCE** variable with the JCR data source name. Create the variable in the jdbc/jcr.DataSourceName format.

        For example, jdbc/wpdbds_jcr.

    5.  Save all changes and synchronize the nodes.

13. Regenerate the web server plug-in.

    1.  Log in to the deployment manager WebSphere Integrated Solutions Console.

    2.  Copy the updated plug-in configuration file \(`plugin-cfg.xml`\) to the web server's plug-in configuration directory.

    3.  Stop and start the web server.

**Related information**  
[Setting up a cluster](../config_cluster/index.md)