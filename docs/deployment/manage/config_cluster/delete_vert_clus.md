# Deleting vertical cluster members

When necessary, you can delete members from your static or dynamic cluster.

Before you delete any cluster members, ensure that the member is stopped. Also, ensure that the cluster member is not the value for the ServerName parameter in the wkplc.properties file.

-   Complete the following steps to remove members from your static cluster:

    1.  Log on to the deployment manager WebSphere® Integrated Solutions Console.

    2.  Go to **Servers** \> **Clusters** \> **WebSphere application server clusters** \> **cluster\_name** \> **Cluster members**.

    3.  Check the status of the cluster member that you want to delete. If the cluster member is started, select the cluster member and then click **Stop**. View the Status of this cluster member again, along with any messages or logs, to make sure that the cluster member is stopped. You cannot remove a cluster member while it is running.

    4.  Select the cluster member that you want to delete and then click **Delete**.

    5.  Save your changes.

    6.  Log in to the deployment manager WebSphere Integrated Solutions Console.

    7.  Select **System Administration** \> **Nodes**.

    8.  Select the node from the list and click **Full Resynchronize**.

-   Complete the following steps to remove members from your dynamic cluster:

    1.  If you allow more than one instance to start and you plan to remove the entire cluster, complete the following steps:

        1.  Log in to the deployment manager WebSphere Integrated Solutions Console.
        2.  Go to **Servers** \> **Clusters** \> **Dynamic clusters**.
        3.  Select the dynamic cluster.
        4.  Select the **Allow more than one instance to start on the same node** check box under **Vertical stacking of instances on node**.
        5.  Enter a value of 1 in the **Number of instances** text box.
        6.  Click **Apply** and then click **Save** to save the changes to the master configuration.
    2.  Go to **Servers** \> **Clusters** \> **Dynamic Clusters** \> **clustername** \> **Cluster Members view** to view the list of cluster members.

    3.  Select the cluster member that you want to delete and then click **Delete**.

    4.  Save your changes.

    5.  Log in to the deployment manager WebSphere Integrated Solutions Console.

    6.  Select **System Administration** \> **Nodes**.

    7.  Select the node from the list and click **Full Resynchronize**.



