# Back up and restore a DAM

This topic shows how to backup and restore for Digital Asset Management (DAM) persistence and binaries.

This procedure is not meant for moving DAM data to another deployment. The backup data is valid only on the deployment where the backup is performed. This recommended approach for back up and restore is [EXIM](../usage/managing_dam/dam_exim.md).

!!! note 
    The steps in this section are supported for HCL DX 9.5 Container Update CF199 or later deployments. Please contact HCL Support if you need to perform backup/restore for container deployments at earlier levels.

-   **Back up your database**

    1.  Verify that persistence \(read-write\) and DAM pods are up and running:

        ```
        kubectl -n <namespace> get all
        ```

        !!! example

            ```
            kubectl -n dxns get all
            ```

    2.  If there are more than 1 persistence-node pod, reduce it to 1 in `values.yaml` to ensure that there is only one Primary pod:

        ```
        scaling:
          persistence-node: 1
        ```

        Then perform helm upgrade using following command:

        ```
        helm upgrade <deployment-name> -n <namespace> . -f <custom values yaml>
        ```

        !!! example
            ``` 
            helm upgrade dx-deployment -n dxns . -f ./custom-values.yaml
            ```
        !!! Note
            Verify if the persistence pods are reduced to 1 using `kubectl -n <namespace> get all pods` command


    3.  Connect to the persistence pod. Open a shell in the running persistence pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash 
        ```

        !!! example

            ```
            kubectl exec --stdin --tty pod/dx-deployment-persistence-node-0 -n dxns -- /bin/bash
            ```

        1.  Take Dump of the current database:

            ```
            pg_dump dxmediadb > /tmp/dxmediadb.dmp
            ```

        2.  Close the shell in the persistence pod:

            ```
            exit
            ```

    4.  Download the database dump from the container to the local system:

        ```
        kubectl cp <namespace>/<pod-name>:<source-file> <target-file>
        ```

        !!! example

            ```
            kubectl cp dxns/dx-deployment-persistence-node-0:/tmp/dxmediadb.dmp /tmp/dxmediadb.dmp
            ```

-   **Back up your DAM binary**

    1.  Connect to the DAM pod. Open a shell in the running DAM pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        !!! example

            ```
            kubectl exec --stdin --tty pod/dx-deployment-digital-asset-management-0 -n dxns -- /bin/bash
            ```

    2.  Compress the DAM binaries located under /opt/app/upload directory:

        ```
         tar -cvpzf assets.tar.gz --exclude=/assets.tar.gz --one-file-system --directory /opt/app/upload .
        ```

    3.  Close the shell in the DAM pod:

        ```
        exit
        ```

    4.  Download the compressed binaries to the local system.

        ```
        kubectl cp <namespace>/<pod-name>:<source-file> <target-file>
        ```

        !!! example

            ```
            kubectl cp dxns/dx-deployment-digital-asset-management-0:/opt/app/server-v1/assets.tar.gz /tmp/assets.tar.gz
            ```



    **Restore your database**

    1.  Verify that persistence pod running:

        ```
        kubectl -n <namespace> get all
        ```

        !!! example

            ```
            kubectl -n dxns get all
            ```

    2.  Copy the database dump file to the persistence pod:

        ```
        kubectl cp <target-file> <namespace>/<pod-name>:<target-file>
        ```

        !!! example

            ```
            kubectl cp dxmediadb.dmp dxns/dx-deployment-persistence-node-0:/tmp/dxmediadb.dmp
            ```

    3.  Connect to the persistence pod. Open a shell in the running persistence pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        !!! example

            ```
            kubectl exec --stdin --tty pod/dx-deployment-persistence-node-0 -n dxns -- /bin/bash
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

            !!! note If you are getting the following error, run the two commands from this step again until it completes without the error occurring.

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


-   **Restore your DAM binary**

    1.  Upload the backed up binary gz file to the DAM pod:

        ```
        kubectl cp <source-file> <namespace>/<pod-name>:<target-file>
        ```

        !!! example

            ```
            kubectl cp /tmp/assets.tar.gz dxns/dx-deployment-digital-asset-management-0:/tmp/assets.tar.gz
            ```

    2.  Connect to the DAM pod. Use the following command to open a shell in the running DAM pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        !!! example

            ```
            kubectl exec --stdin --tty pod/dx-deployment-digital-asset-management-0 -n dxns -- /bin/bash
            ```

    3.  Restore the DAM binaries:

        ```
        tar -mpxf /tmp/assets.tar.gz --directory /opt/app/upload
        rm /assets.tar.gz
        ```

    4.  Close the shell in the DAM pod:

        ```
        exit
        ```


-   

-   **Additional steps to restore your database**

    1.  The DAM pods starts working in a few minutes. If not, you may delete the DAM pod:

        ```
        kubectl delete pod <dam-pod-name> -n <namespace>
        ```

        !!! example

        ```
        kubectl delete pod dx-deployment-digital-asset-management-0 -n dxns
        ```

    2.  You must reset the read-only pod. Do the following steps:
        1.  Get all the `PersistentVolumeClaim` \(`PVC`\) from the deployment.

            ```
            kubectl get pvc -n <name space>
            ```

            !!! example

                ```
                kubectl get pvc -n dxns
                ```

        2.  Delete the `PVC` for the read-only pods.

            ```
            kubectl delete pvc <pvc-name-for-read-only-pod> -n <namespace>
            ```

            !!! example

                ```
                kubectl delete pvc dam-persistence-dx-deployment-persistence-ro-0 -n dxns
                ```

        3.  Enable persistence-node pod to the previous value in `values.yaml`:

        ```
        scaling:
          persistence-node: 3
        ```

        Then perform helm upgrade following command:

        ```
        helm upgrade <deployment-name> -n <namespace> . -f <custom values yaml>
        ```

        !!! example
            ``` 
            helm upgrade dx-deployment -n dxns . -f ./custom-values.yaml
            ```

        !!! Note
            `values.yaml` shouldn't be modified directly. It iss recommded to create a custom values yaml file to overwrite the necessary values and pass those as the parameter during `helm install` or `helm upgrade`. Please refer to this [link](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md) for more information on usage of custom values yaml.



