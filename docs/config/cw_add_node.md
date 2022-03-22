# Create an additional cluster node

After you answer questions and provide information about your environment, the wizard generates a custom configuration procedure. The following set of steps represents all possible configuration steps. The instructions that you generate might include or exclude specific steps based on your wizard selections.

After you create a static or dynamic cluster, you can create an additional horizontal cluster node to handle failover requests. When creating an additional horizontal cluster node on another server, run the Configuration Wizard from that server.

1.  Manual Step: Install portal binary files on the server where you plan to add a node to your cluster.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

2.  Manual Step: Install profile templates.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

3.  Manual Step: Copy the database drivers from the primary node to the additional node.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

4.  Manual Step: Verify that the portal node and deployment manager system clocks are within 5 minutes of each other.

    -   **Condition**

        Remote deployment manager

    -   **ConfigEngine task**

        None

5.  Create the profile for the secondary portal node.

    -   **Condition**

        none

    -   **ConfigEngine task**

        none

6.  Federate the node. This node then becomes a managed node in the deployment manager cell.

    -   **Condition**

        none

    -   **ConfigEngine task**

        add-node

7.  Configure the dynamic cluster node. Add a nodegroup and add nodes to the nodegroup.

    -   **Condition**

        Dynamic cluster

    -   **ConfigEngine task**

        dynamic-cluster-create-nodegroup

        dynamic-cluster-add-node-to-nodegroup

8.  Add a secondary node to the cluster.

    -   **Condition**

        Static cluster

    -   **ConfigEngine task**

        cluster-node-config-cluster-setup-additional

9.  Add a secondary node to the cluster.

    -   **Condition**

        Dynamic cluster

    -   **ConfigEngine task**

        dynamic-cluster-setup-additional

10. Start the portal server.

    -   **Condition**

        None

    -   **ConfigEngine task**

        start-portal-server


