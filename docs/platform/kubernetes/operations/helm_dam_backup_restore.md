# Back up and restore DAM

This topic shows you how to backup and restore for Digital Asset Management persistence and binaries in a Helm-based deployment.

This procedure is not meant for moving DAM data to another deployment. The backup data is valid only on the deployment where the backup is performed.

-   **Back up your database**

    1.  Verify that persistence \(read-write\) and DAM pods are up and running:

        ```
        kubectl -n <namespace> get all
        ```

        **Example:**

        ```
        kubectl -n dxns get all
        ```

        You may see more than one persistence pods running:

        ```
        pod/dx-deployment-persistence-node-0                             2/2     Running   0          3h49m
        pod/dx-deployment-persistence-node-1                             2/2     Running   0          3h48m
        pod/dx-deployment-persistence-node-2                             2/2     Running   0          3h48m
        ```

    2.  Scale down the number persistence pods to 1.

        ```
        helm upgrade -n <namespace> -f <custom-values.yaml> <release-name> <path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz> --set scaling.replicas.persistenceNode=1
        ```

        **Example:**

        ```
        helm upgrade -n dxns -f custom-values.yaml dx-deployment hcl-dx-deployment.tar.gz --set scaling.replicas.persistenceNode=1
        ```

        !!! note
            Verify that only 1 persistence pod remains in the deployment.

    3.  Connect with the persistence pod \(read-write\). Open a shell in the running persistence pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash 
        ```

        **Example:**

        ```
        kubectl exec --stdin --tty pod/dx-deployment-persistence-node-0 -n dxns -- /bin/bash
        ```

        1.  Dump the current database:

            ```
            pg_dump dxmediadb > /tmp/dxmediadb.dmp
            ```

        2.  Close the shell in the persistence pod:

            ```
            exit
            ```

    4.  Download the database dump to the local system:

        ```
        kubectl cp <namespace>/<pod-name>:<source-file> <target-file>
        ```

        **Example:**

        ```
        kubectl cp dxns/dx-deployment-persistence-node-0:/tmp/dxmediadb.dmp /tmp/dxmediadb.dmp
        ```

    5.  Set the number of persistence pods back to the number you noted from step 1:

        ```
        helm upgrade -n <namespace> -f <custom-values.yaml> <release-name> <path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz>
        ```

        **Example:**

        ```
        helm upgrade -n dxns -f custom-values.yaml dx-deployment hcl-dx-deployment.tar.gz
        ```

-   **Back up your DAM binary**

    1.  Connect to the DAM pod. Open a shell in the running DAM pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example:**

        ```
        kubectl exec --stdin --tty pod/dx-deployment-digital-asset-management-0 -n dxns -- /bin/bash
        ```

    2.  Compress the DAM binaries located under `/opt/app/upload` directory:

        ```
         tar -cvpzf backupml.tar.gz --exclude=/backupml.tar.gz --one-file-system --directory /opt/app/upload .
        ```

    3.  Close the shell in the DAM pod:

        ```
        exit
        ```

    4.  Download the compressed binaries to the local system.

        From a local system, you can now download the backup DAM binaries from the DAM pod:

        ```
        kubectl cp <namespace>/<pod-name>:<source-file> <target-file>
        ```

        **Example:**

        ```
        kubectl cp dxns/dx-deployment-digital-asset-management-0:/opt/app/server-v1/backupml.tar.gz /tmp/backupml.tar.gz
        ```


-   **Restore your DAM binary**

    1.  Upload the backup binary to the DAM pod. You can now transfer the backup database to the remote DAM pod:

        ```
        kubectl cp <source-file> <namespace>/<pod-name>:<target-file>
        ```

        **Example:**

        ```
        kubectl cp /tmp/backupml.tar.gz dxns/dx-deployment-digital-asset-management-0:/tmp/backupml.tar.gz
        ```

    2.  Connect to the DAM pod. Open a shell in the running DAM pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example:**

        ```
        kubectl exec --stdin --tty pod/dx-deployment-digital-asset-management-0 -n dxns -- /bin/bash
        ```

    3.  Restore the DAM binaries:

        ```
        tar -mpxf /tmp/backupml.tar.gz --directory /opt/app/upload
        rm /backupml.tar.gz
        ```

    4.  Close the shell in the DAM pod:

        ```
        exit
        ```


-   **Restore your database**

    1.  Verify that persistence \(read-write\) and DAM pods are running:

        ```
        kubectl -n <namespace> get all
        ```

        **Example:**

        ```
        kubectl -n dxns get all
        ```

    2.  Scale down the number persistence pods to 1.

        ```
        helm upgrade -n <namespace> -f <custom-values.yaml> <release-name> <path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz> --set scaling.replicas.persistenceNode=1
        ```

        **Example:**

        ```
        helm upgrade -n dxns -f custom-values.yaml dx-deployment hcl-dx-deployment.tar.gz --set scaling.replicas.persistenceNode=1
        ```

        !!!note
            Verify that only 1 persistence pod remains in the deployment.

    3.  Copy the database dump file to the persistence pod:

        ```
        kubectl cp <target-file> <namespace>/<pod-name>:<target-file>
        ```

        **Example:**

        ```
        kubectl cp dxmediadb.dmp dxns/dx-deployment-persistence:/tmp/dxmediadb.dmp
        ```

    4.  Connect to the persistence pod \(read-write\). Open a shell in the running persistence pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example:**

        ```
        kubectl -n dxns exec --stdin --tty pod/dx-deployment-persistence-node-0 -n dxns -- /bin/bash
        ```

        1.  Run the following commands in order:

            1.  Set the database connection limit to 0 for `dxmediadb`:

                ```
                psql -c "ALTER DATABASE dxmediadb CONNECTION LIMIT 0;"
                ```

            2.  Terminate all the existing connections to the database, if any:

                ```
                psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'dxmediadb' AND pid <> pg_backend_pid();"
                ```

            3.  Drop the database `dxmediadb`:

                ```
                dropdb dxmediadb
                ```

            !!!note
                If you are getting the following error, run the two commands from this step again until it completes without the error occurring.

            ```shell
            dropdb: database removal failed: ERROR:  database "dxmediadb" is being accessed by other users
            ```

        2.  Create the database.

            ```
            createdb -O dxuser dxmediadb
            ```

        3.  Restore the database.

            ```
            psql dxmediadb < dxmediadb.dmp
            ```

        4.  Restore the database connection limit:

            ```
            psql -c "ALTER DATABASE dxmediadb CONNECTION LIMIT 500;"
            ```

        5.  Close the shell in the persistence pod \(read-write\):

            ```
            exit
            ```

    5.  Set the number of persistence pods back to the number you noted from step 1 from Back up your database:

        ```
        helm upgrade -n <namespace> -f <custom-values.yaml> <release-name> <path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz>
        ```

        **Example:**

        ```
        helm upgrade -n dxns -f custom-values.yaml dx-deployment hcl-dx-deployment.tar.gz
        ```


-   **Additional step to restore your database**

    1.  The DAM pods start working in a few minutes. If not, you may delete the DAM pod:

        ```
        kubectl delete pod <dam-pod-name> -n <namespace>
        ```

        **Example:**

        ```
        kubectl delete pod dx-deployment-digital-asset-management-0 -n dxns
        ```
