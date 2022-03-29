# Back up and restore a DAM image

This topic shows you how to backup and restore for Digital Asset Management persistence and binaries in an Operator-based deployment using `dxctl`.

This procedure is not meant for moving DAM data to another deployment. The backup data is valid only on the deployment where the backup is performed.

**Note:** The steps in this section are supported for HCL DX 9.5 Container Update CF195 or later deployments. Please contact HCL Support if you need to perform backup/restore for container deployments at earlier levels.

-   **Back up your database**

    1.  Verify that persistence \(read-write\) and DAM pods are up and running:

        ```
        kubectl -n <namespace> get all
        ```

        **Example:**

        ```
        kubectl -n dxns get all
        ```

    2.  Disable the persistence read-only pods by setting the following properties in the deployment properties file:

        ```
        persist.minreplicas: 1
        persist.force-read: false
        ```

        Then run the following command:

        ```
        dxctl --update -p deployment.properties
        ```

        **Note:** Verify that there are no read-only pods in the deployment.

    3.  Connect with the persistence pod \(read-write\). Open a shell in the running persistence pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash 
        ```

        **Example:**

        ```
        kubectl exec --stdin --tty pod/dx-deployment-persistence-0 -n dxns -- /bin/bash
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
        kubectl cp dxns/dx-deployment-persistence-0:/tmp/dxmediadb.dmp /tmp/dxmediadb.dmp
        ```


-   **Back up your DAM binary**

    1.  Connect to the DAM pod. Open a shell in the running DAM pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example:**

        ```
        kubectl exec --stdin --tty pod/dx-deployment-dam-0 -n dxns -- /bin/bash
        ```

    2.  Compress the DAM binaries located under /opt/app/upload directory:

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
        kubectl cp dxns/dx-deployment-dam-0:/opt/app/server-v1/backupml.tar.gz /tmp/backupml.tar.gz
        ```


-   **Restore your DAM binary**

    1.  Upload the backup binary to the DAM pod. You can now transfer the backup database to the remote DAM pod:

        ```
        kubectl cp <source-file> <namespace>/<pod-name>:<target-file>
        ```

        **Example:**

        ```
        kubectl cp /tmp/backupml.tar.gz dxns/dx-deployment-dam-0:/tmp/backupml.tar.gz
        ```

    2.  Connect to the DAM pod. Use the following command to open a shell in the running DAM pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example:**

        ```
        kubectl exec --stdin --tty pod/dx-deployment-dam-0 -n dxns -- /bin/bash
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

    2.  Copy the database dump file to the persistence pod:

        ```
        kubectl cp <target-file> <namespace>/<pod-name>:<target-file>
        ```

        **Example:**

        ```
        kubectl cp dxmediadb.dmp dxns/dx-deployment-persistence-0:/tmp/dxmediadb.dmp
        ```

    3.  Connect to the persistence pod \(read-write\). Open a shell in the running persistence pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        **Example:**

        ```
        kubectl exec --stdin --tty pod/dx-deployment-persistence-0 -n dxns -- /bin/bash
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

            **Note:** If you are getting the following error, run the two commands from this step again until it completes without the error occurring.

            ```
            ```
            dropdb: database removal failed: ERROR:  database "dxmediadb" is being accessed by other users
            ```    
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


-   **Additional steps to restore your database**

    1.  The DAM pods start working in a few minutes. If not, you may delete the DAM pod:

        ```
        kubectl delete pod <dam-pod-name> -n <namespace>
        ```

        **Example:**

        ```
        kubectl delete pod dx-deployment-dam-0 -n dxns
        ```

    2.  You must reset the read-only pod. Do the following steps:
        1.  Get all the `PersistentVolumeClaim` \(`PVC`\) from the deployment.

            ```
            kubectl get pvc -n <name space>
            ```

            **Example:**

            ```
            kubectl get pvc -n dxns
            ```

        2.  Delete the `PVC` for the read-only pods.

            ```
            kubectl delete pvc <pvc-name-for-read-only-pod> -n <namespace>
            ```

            **Example:**

            ```
            kubectl delete pvc dam-persistence-dx-deployment-persistence-ro-0 -n dxns
            ```

        3.  Enable the read-only pods. To enable the read-only pods, set `persist.force-read` to `true` in deployment properties file. You may also update the `persist.minreplicas:` with the value you configured earlier.

            ```
            persist.minreplicas: 1
            persist.force-read: true
            ```

            Then run the following command:

            ```
            dxctl --update -p deployment.properties
            ```


**Parent topic:**[Backup and recovery procedures Containerization](../containerization/operator_backup_and_recovery_procedures.md)

