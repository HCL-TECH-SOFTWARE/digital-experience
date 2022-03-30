# Migrate Digital Asset Management persistence and binaries

This section shows the guidance to back up and restore your DAM persistence and binaries.

Follow this guidance to create a backup of the DAM persistence and binaries from your Operator deployment, and restore them to a Helm-based deployment.

-   **Back up from an Operator-based deployment**

    1.  You must start Digital Asset Management in maintenance mode, to ensure that no actions are performed during the migration. You can set DAM to maintenance mode by changing the ConfigMap of the Operator deployment:

        ```
        kubectl -n <namespace> edit cm <configmap>
        ```

        **Example**:

        ```
        kubectl edit cm -n dxns dx-deployment
        ```

        In the `data` section, add the following entry and save the changes:

        ```
        data:
          dx.deploy.dam.features: "maintenance_mode:true"
        ```

        After saving the changes, the DAM pod restarts automatically. Please wait until the pod restarts before proceeding.

    2.  Verify that persistence \(read-write\) and DAM pods are up and running, and are in maintenance mode. Use the following command to see the current status of the pods:

        ```
        kubectl -n <namespace> get pods
        ```

        If more than one DAM or persistence pod is running, scale down the pods to only one of each type. Adjust the `dxctl` property file:

        ```
        dam.minreplicas:1
        dam.maxreplicas:1
        
        persist.minreplicas:1
        persist.maxreplicas:1
        ```

        And apply it using the `dxctl` tool.

        ```
        ./dxctl -–update -p deployment.properties
        ```

        The changes are applied and any replicas are terminated. Use `kubectl` to check the progress.

        Verify that DAM is in maintenance mode by running the following command:

        ```
        kubectl -n <namespace> logs <pod-name>
        ```

        **Example**:

        ```
        kubectl -n dxns logs dx-deployment-dam-0
        ```

        If your output looks similar to the following, maintenance mode is enabled and you can continue:

        -   Maintenance mode is: true
        -   Listening for SIGTERM
        -   Maintenance mode is enabled. This mode solely starts the pod without any processes within it.
    3.  Connect to the persistence pod. The following command opens a shell in the running persistence pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example**:

        ```
        kubectl exec --stdin --tty pod/dx-deployment-persistence-0 -n dxns -- /bin/bash
        ```

        1.  Dump the current database using `pg_dump`:

            ```
            pg_dump dxmediadb > /tmp/dxmediadb.dmp
            ```

        2.  Exit the shell in the persistence pod

            ```
            exit
            ```

    4.  Download the dumped database from the persistence pod to your local system:

        ```
        kubectl cp <namespace>/<pod-name>:<source-file> <target-file>
        ```

        **Example:**

        ```
        kubectl cp dxns/dx-deployment-persistence-0:/tmp/dxmediadb.dmp /tmp/dxmediadb.dmp
        ```

    5.  Connect to the DAM pod. The following command opens a shell in the running DAM pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example**:

        ```
        kubectl exec --stdin --tty pod/dx-deployment-dam-0 -n dxns -- /bin/bash
        ```

        1.  Compress the DAM binaries located in /opt/app/upload:

            ```
            tar -cvpzf backupml.tar.gz --exclude=/backupml.tar.gz --one-file-system --directory /opt/app/upload .
            ```

        2.  Exit the shell in the DAM pod:

            ```
            exit
            ```

    6.  Download the compressed DAM binaries from the DAM pod to your local system:

        ```
        kubectl cp <namespace>/<pod-name>:<source-file> <target-file>
        ```

        **Example:**

        ```
        kubectl cp dxns/dx-deployment-dam-0:/opt/app/server-v1/backupml.tar.gz /tmp/backupml.tar.gz
        ```


-   **Restore your back up to the Helm-based deployment**

    **Important:**

    -   Ensure to note the [requirements and limitations here](helm_extract_operator_properties.md#prereq_lxy_5rt_hrb).
    -   For the new Helm deployment, you must use a different Kubernetes namespace from the one used in the Operator-based deployment.
    1.  Ensure that the Helm-based deployment is in the correct state before restoring a backup.
        -   Ensure that you have [extracted the Kubernetes DX configuration](helm_extract_operator_properties.md) from the Operator-based deployment to a valid custom-values.yaml file is done.
        -   You must enable `migration` mode for `operatorToHelm` by adding or updating the following value in custom-values.yaml:

            ```
            migration:
              operatorToHelm:
                enabled: true
            ```

        -   Disable all the applications, except `digitalAssetManagement` and the `persistence`:

            ```
            applications:
              core: false
              runtimeController: false
              contentComposer: false
              designStudio: false
              digitalAssetManagement: true
              imageProcessor: false
              openLdap: false
              persistence: true
              remoteSearch: false
              ringApi: false
              ambassador: false
            ```

        -   Scale down persistence to a single node:

            ```
            scaling:
              replicas:
                persistenceNode: 1
            ```

            You can now start the Helm deployment.

            If you're running the migration of DAM first:

            ```
            helm install -n <namespace> --create-namespace -f <custom-values.yaml> <prefix> <chart>
            ```

            **Example**:

            ```
            helm install -n dxns-helm --create-namespace -f custom-values.yaml dx-deployment hcl-dx-deployment
            ```

            If core migration is done first:

            ```
            helm upgrade -n <namespace> -f <custom-values.yaml> <prefix> <chart>
            ```

            **Example**:

            ```
            helm upgrade -n dxns-helm -f custom-values.yaml dx-deployment hcl-dx-deployment
            ```

        -   The following outcomes are expected:
            -   The DAM and persistence pods are running and kept alive.
            -   The DAM application is not running.
    2.  Upload the backup database. Use the following command to transfer the backup database to the remote persistence pod:

        ```
        kubectl cp <source-file> <namespace>/<pod-name>:<target-file>
        ```

        **Example**:

        ```
        kubectl cp /tmp/dxmediadb.dmp dxns-helm/dx-deployment-persistence-node-0:/tmp/dxmediadb.dmp
        ```

    3.  Connect to the persistence \(read-write\) pod. Use the following command to open a shell in the running persistence pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example:**

        ```
        kubectl exec --stdin --tty pod/dx-deployment-persistence-node-0 -n dxns-helm -- /bin/bash
        ```

        1.  You must drop the DAM database, if it exists. Disconnect all connections that use the database and drop any existing databases of the Helm deployment.

            ```
            echo "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pid <> pg_backend_pid();" | psql
            dropdb dxmediadb
            ```

        2.  Restore the database from the previous backup:

            ```
            createdb -O dxuser dxmediadb
            psql dxmediadb < /tmp/dxmediadb.dmp
            ```

        3.  Exit the shell in the persistence pod:

            ```
            exit
            ```

    4.  Connect to the DAM pod. Use the following command to open a shell in the running DAM pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example:**

        ```
        kubectl exec --stdin --tty pod/dx-deployment-digital-asset-management-0 -n dxns-helm -- /bin/bash
        ```

        1.  Restore the DAM binaries:

            ```
            tar -mpxf /tmp/backupml.tar.gz --directory /opt/app/upload
            rm /backupml.tar.gz
            ```

        2.  Exit the shell in the DAM pod:

            ```
            exit
            ```

    5.  Disable the migration mode and the deployment.

        Before you can start the final upgrade of the Helm deployment, some adjustments are needed:

        1.  Disable the `migration` mode by updating the following value in custom-values.yaml

            ```
            migration:
              operatorToHelm:
                enabled: false
            ```

        2.  Enable all relevant applications.
        3.  You can now upgrade the Helm deployment.

            ```
            helm upgrade -n <namespace> --create-namespace -f <custom-values.yaml> <prefix> <chart>
            ```

            **Example**:

            ```
            helm upgrade -n dxns-helm --create-namespace -f custom-values.yaml dx-deployment hcl-dx-deployment
            ```


**Parent topic:**[Migrating from Operator to Helm deployments](../containerization/helm_operator_migration.md)

