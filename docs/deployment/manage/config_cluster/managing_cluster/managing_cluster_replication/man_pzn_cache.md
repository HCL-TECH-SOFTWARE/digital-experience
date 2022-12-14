# Managing Personalization cache replication in your cluster

Enable the Personalization cache replication if you want to propagate invalidation in the Personalization caches to the other nodes in the cluster.

1.  Log in to the Deployment Manager WebSphere® Integrated Solutions Console.

2.  Go to **Resources > Cache instances > Object cache instances**.

3.  Edit each of the following Personalization cache instances by clicking the link:

    -   **applicationObjects**
    -   **campaigns**
    -   **general**
    -   **jcrNodeTypes**
    -   **resourceCollections**
    -   **ruleMappings**
    -   **rules**
    -   **uuidPathConversions**
    
4.  Click the **Enable cache replication** check box to select it.

5.  Ensure that **Replication type** is set to Not Shared.

6.  Click **OK**.

7.  Click **Save** to save the changes to your master configuration.

8.  Sync all nodes in the cluster and then restart the Portal server on each node.



