# Adding vertical cluster members to a dynamic cluster

You can add vertical cluster members to your dynamic cluster. The members share the workload demands across multiple members that run on the same server.

1.  Open a browser.

2.  Enter `http://DM01:9060/ibm/console` to access the deployment manager WebSphere® Integrated Solutions Console, where DM01 is the deployment manager node or host name. The port number might differ based on your installation.

3.  Complete the following steps to allow vertical clusters on your dynamic cluster:

    1.  Go to **Servers > Clusters > Dynamic clusters**.

    2.  Select the dynamic cluster.

    3.  Select the **Allow more than one instance to start on the same node** check box under **Vertical stacking of instances on node**.

    4.  Enter a new value in the **Number of instances** text box to determine the number of vertical cluster members that are allowed on each node.

    5.  Click **Apply** and then click **Save** to save the changes to the master configuration.

    6.  Go to **Servers > Clusters > Dynamic Clusters > clustername > Cluster Members view** to view the list of new cluster members.

    7.  Go to **Servers > Clusters > Cluster Topology** to view the new cluster topology.

4.  Complete the following steps to update the virtual host entries:

    1.  Identify the port values for the new dynamic members.

    2.  Read [Configuring virtual hosts](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.0.0/com.ibm.websphere.nd.doc/info/ae/ae/tcws_plugin_vhost.html) for information.

    3.  Log in to the WebSphere Integrated Solutions Console.

    4.  Update the `default_host` virtual host.

    5.  Add an alias entry for the port number. Use an "`*`" wildcard character for the host name.

5.  Complete the following steps to enable cache replication:

    1.  From the deployment manager WebSphere Integrated Solutions Console, go to **Servers > Server Types > WebSphere application servers**.

    2.  Click the new vertical cluster member.

    3.  Click **Dynamic cache service** under **Container services**.

    4.  Change **Cache size** to 3000 entries.

    5.  Check the **Enable cache replication** check box.

    6.  Select **NOT_SHARED** from the **Replication type** menu.

    7.  Click **OK**.

    8.  Click **Save** to save your changes to the master configuration.

6.  Complete the following steps on each vertical cluster member to clean up the server-scoped resources, caches, and resource providers:

    1.  Open a command prompt on the node where you created the vertical cluster.

    2.  Change to the wp_profile_root\ConfigEngine directory.

    3.  Run the following task:

        -   AIX®, Linux™: `./ConfigEngine.sh cluster-node-config-vertical-cluster-setup -DServerName=unique vertical cluster servername -DWasPassword=password`
        -   Windows™: `ConfigEngine.bat cluster-node-config-vertical-cluster-setup -DServerName=unique vertical cluster servername -DWasPassword=password`
        
        Where unique vertical cluster servername is the name that you specified when you created the cluster member.

    4.  Restart the vertical cluster member that is referenced in the cluster-node-config-vertical-cluster-setup task.

7.  The binary cache that is used by the JCR cannot share files between Portal JVMs. Therefore, each cluster member that is on a single host system must have its own directory that is specified for the JCR binary file cache property. Complete the following steps to configure the directories:

    1.  From the deployment manager WebSphere Integrated Solutions Console, go to **Resources > Resource Environment > Resource Environment Providers**.

        Each server should have a server scoped Resource Environment Provider. The provider is called **JCR ConfigService PortalContent**.

    2.  Click the first **JCR ConfigService PortalContent** link in the list.

    3.  Click **Custom properties**.

    4.  Verify that the **jcr.binaryValueFileDir** value is unique within the HCL Portal node where the server is located.

        For example, the following values are supported:

        -   The Node 1/Server 1 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp_profile/jcr/binary
        -   The Node 1/Server 2 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp_profile2/jcr/binary
        -   The Node 2/Server 1 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp_profile/jcr/binary
        -   The Node 2/Server 2 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp_profile2/jcr/binary    

        The following values are not supported:

        -   The Node 1/Server 1 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp_profile/jcr/binary
        -   The Node 1/Server 2 value for **jcr.binaryValueFileDir** is /opt/IBM/WebSphere/wp_profile/jcr/binary    

        If the value is not unique, complete the following steps:

        1.  Click **jcr.binaryValueFileDir**.
        2.  Change the value of the **jcr.binaryValueFileDir**.
        3.  Click **OK**.
        4.  Click **Save**.

    5.  Repeat these steps on all **JCR ConfigService PortalContent** options.

8.  Save your changes and resynchronize the nodes.

    1.  Log in to the deployment manager WebSphere Integrated Solutions Console.

    2.  Select **System Administration > Nodes**.

    3.  Select the node from the list and click **Full Resynchronize**.

9.  If you transferred your databases after you created the cluster, complete the following steps on each vertical cluster member:

    1.  Log on to the deployment manager WebSphere Integrated Solutions Console.

    2.  Go to **Environment > WebSphere Variables**.

    3.  From the **Scope** menu, select the **Node=nodename, Server=servername** option to narrow the scope of the listed variables. **Node=nodename** is the node that contains the HCL Portal application server.

    4.  Update the **WCM_DATASOURCE** variable with the JCR data source name. Create the variable in the jdbc/jcr.DataSourceName format.

        For example, jdbc/wpdbds_jcr.

    5.  Save all changes and synchronize the nodes.

10. Stop and start the web server.

???+ info "Related information"
    -   [Setting up a cluster](../config_cluster/index.md)
    - [WebSphere® Integrated Solutions Console](../portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
