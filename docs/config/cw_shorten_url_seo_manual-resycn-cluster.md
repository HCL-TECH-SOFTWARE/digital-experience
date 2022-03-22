# Manual Step: Resynchronizing the nodes and restarting the cluster

The Modify Site URLs for Search Engine Optimization option in the Configuration Wizard includes manual steps. For reference only, you can see the details of the manual step for resynchronizing the nodes and restarting the cluster. To view this step in the Configuration Wizard, you click Modify Site URLs for Search Engine Optimization from the Set Up a Cluster page.

1.  Manual step: Resynchronize the nodes and restart the cluster.

    Complete the following steps if you have a static clusteran idle standby environment:

    1.  Open the deployment manager WebSphere® Integrated Solutions Console.
    2.  Click **System Administration** **\>** **Nodes**, click the **Select All** icon to select all of the nodes from the list, and click **Full Resynchronize**.
    3.  Click **Servers** **\>** **Clusters**.
    4.  Select the cluster and click **Stop**.
    5.  After the cluster stops, restart it by selecting the cluster. Then, click **Start**.
    Complete these steps if you have a dynamic cluster:

    1.  Open the deployment manager WebSphere Integrated Solutions Console.
    2.  Click **System Administration** **\>** **Nodes**, click the **Select All** icon to select all of the nodes from the list, and click **Full Resynchronize**.
    3.  Click **Servers** **\>** **Dynamic Clusters**.
    4.  Click the dynamic cluster that you want to stop and restart.
    5.  Click **Dynamic cluster members**.
    6.  Select the member name that you want to stop and then click **Stop**.
    7.  Select the member name that you want to start and then click **Start**.

