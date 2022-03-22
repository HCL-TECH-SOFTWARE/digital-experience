# Migrate to restore Core and DAM Operator deployment

This section shows the steps necessary to revert a DX 9.5 Container Deployment to the previous [Operator-based deployment](deploy_container_platforms.md) in case of any error during the migration to Helm.

Follow this guidance to create a backup to support the capability to restore the DX 9.5 Core and Digital Asset Management Operator deployment.

-   **Restore Core Operator deployment**

    1.  Connect to the Core pod. The following command opens a shell in the running core container:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example**:

        ```
        kubectl exec --stdin --tty pod/dx-deployment-0 -n dxns -- /bin/bash
        ```

        1.  Start the server. Navigate to the profile `bin` folder and run the `startServer` command.

            ```
            cd /opt/HCL/wp_profile/bin/./startServer.sh WebSphere_Portal
            ```

        2.  Exit the core container. Close the shell in the core container.

            ```
            exit
            ```

    2.  Reset the scaling of the Core pods. Reset the replication settings for Core to the previous values if necessary. On the operator deployment adjust the DXCTL property file:

        ```
        dx.minreplicas:<min_number_of_replicas>
        dx.maxreplicas:<max_number_of_replicas>
        ```

        and apply it via DXCTL tool:

        ```
        ./dxctl -–update -p deployment.properties
        ```

        The change is applied after a few seconds and the core pods are started. Use the `kubectl get pods` command to check the progress. If the pods are not started after a few minutes, force the change to be applied using the following command:

        ```
        kubectl delete statefulset -n <namespace> dx-deployment
        ```


-   **Restore DAM Operator deployment**

    1.  Disable maintenance mode for DAM. Digital Asset Management must be started without maintenance mode to restore the running status. We achieve this by changing the `ConfigMap` of the Operator deployment.

        ```
        kubectl -n <namespace> edit cm <configmap>
        ```

        Example:

        ```
        kubectl edit cm -n dxns dx-deployment
        ```

        In the `data` section, remove `maintenance_mode:true` from the `dx.deploy.dam.features` entry and save the changes. If `maintenance_mode:true` is the only entry for this key, `dx.deploy.dam.features` can be removed completely.

        ```
        data:
          dx.deploy.dam.features: "maintenance_mode:true"
        ```

        After saving the changes, the DAM pod will restart automatically after some seconds. Please wait until the pod is restarted before proceeding.

    2.  Reset the scaling of the DAM and Persistence pods. Reset the replication settings for DAM and Persistence to the previous values if necessary. On the operator deployment adjust the DXCTL property file:

        ```
        dam.minreplicas:<min_number_of_replicas>
        dam.maxreplicas:<max_number_of_replicas>
        
        persist.minreplicas:<min_number_of_replicas>
        persist.maxreplicas:<max_number_of_replicas>
        ```

        and apply it via DXCTL tool:

        ```
        ./dxctl -–update -p deployment.properties
        ```


**Parent topic:**[Migrating from Operator to Helm deployments](../containerization/helm_operator_migration.md)

