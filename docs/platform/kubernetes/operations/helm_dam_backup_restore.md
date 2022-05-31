# Back up and restore DAM

This topic shows you how to backup and restore for Digital Asset Management persistence and binaries in a Helm-based deployment.

This procedure is not meant for moving DAM data to another deployment. The backup data is valid only on the deployment where the backup is performed.

## Backup

1. Verify that `core`, `persistence-node` and `digital-asset-management` pods are up and in `Running` state:

    ```
    kubectl -n <namespace> get pods
    ```

    !!! example
        ```shell
        kubectl -n dxns get pods
        ```

    You may see more than one `persistence-node` pods running:

    ```
    dx-deployment-core-0                                         3/3     Running   0          3h49m
    dx-deployment-persistence-node-0                             2/2     Running   0          3h49m
    dx-deployment-persistence-node-1                             2/2     Running   0          3h48m
    dx-deployment-persistence-node-2                             2/2     Running   0          3h48m
    dx-deployment-digital-asset-management-0                     1/1     Running   0          3h48m
    ```

2.   **Core references backup**

    1.  Export DAM collection references from Core

        ```
        kubectl -n <namespace> exec pod/<release-name>-core-0 -c core -- /bin/bash -c "/opt/HCL/PortalServer/bin/xmlaccess.sh -user <wpsadmin-user> -password <wpsadmin-password> -url http://localhost:10039/wps/config -in /opt/HCL/PortalServer/doc/xml-samples/ExportAllDAMCollections.xml -out /path/to/export/to/damExport.xml"
        ```

        !!! example
            ```shell
            kubectl -n dxns exec pod/dx-deployment-core-0 -c core -- /bin/bash -c "/opt/HCL/PortalServer/bin/xmlaccess.sh -user wpsadmin -password wpsadmin -url http://localhost:10039/wps/config -in /opt/HCL/PortalServer/doc/xml-samples/ExportAllDAMCollections.xml -out /tmp/damExport.xml"
            ```

    2.  Download the collection dump to the local system:

        ```
        kubectl cp -c core <namespace>/<release-name>-core-0:/path/to/export/to/damExport.xml <target-file>
        ```

        !!! example
            ```shell
            kubectl cp -c core dxns/dx-deployment-core-0:/tmp/damExport.xml /tmp/damExport.xml
            ```

3.   **Persistence backup**

    1.  Determine the primary `persistence-node` using the following command:

        ```
        kubectl -n <namespace> exec pod/<release-name>-persistence-node-<running-node-index> -c persistence-node -- repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
        ```

        For `<running-node-index>`, select the index of any `persistence-node` that is in the `Running` state. In most cases, node `0` can be used.

        !!! example
            ```shell
            kubectl -n dxns exec pod/dx-deployment-persistence-node-0 -c persistence-node -- repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
            ```

        This command returns the name of the primary `persistence-node`. Please use this node for the following steps when `<primary-node-name>` is referenced.

        Example output:

        ```
        dx-deployment-persistence-node-0
        ```

    2.  Dump the current database:

        ```
        kubectl -n <namespace> exec pod/<primary-node-name> -c persistence-node -- /bin/bash -c "pg_dump dxmediadb > /path/to/export/to/dxmediadb.dmp"
        ```

        !!! example
            ```shell
            kubectl -n dxns exec pod/dx-deployment-persistence-node-0 -c persistence-node -- /bin/bash -c "pg_dump dxmediadb > /tmp/dxmediadb.dmp"
            ```

    3.  Download the database dump to the local system:

        ```
        kubectl cp -c persistence-node <namespace>/<primary-node-name>:/path/to/export/to/dxmediadb.dmp <target-file>
        ```

        !!! example
            ```shell
            kubectl cp -c persistence-node dxns/dx-deployment-persistence-node-0:/tmp/dxmediadb.dmp /tmp/dxmediadb.dmp
            ```


4.   **DAM binary backup**

    5.  Compress the DAM binaries located in the `/opt/app/upload` directory:

        ```
        kubectl -n <namespace> exec pod/<dam-pod-name> -- /bin/bash -c "tar -cvpzf /path/to/backupml.tar.gz --exclude=/backupml.tar.gz --one-file-system --directory /opt/app/upload ."
        ```

        !!! example
            ```shell
            kubectl -n dxns exec pod/dx-deployment-digital-asset-management-0 -- /bin/bash -c "tar -cvpzf /tmp/backupml.tar.gz --exclude=/backupml.tar.gz --one-file-system --directory /opt/app/upload ."
            ```

    6.  Download the compressed binaries to the local system.

        From a local system, you can now download the backup DAM binaries from the DAM pod:

        ```
        kubectl cp <namespace>/<dam-pod-name>:<source-file> <target-file>
        ```

        !!! example
            ```shell
            kubectl cp dxns/dx-deployment-digital-asset-management-0:/tmp/backupml.tar.gz /tmp/backupml.tar.gz
            ```

## Restore

1.  Verify that `core`, `persistence-node` and `digital-asset-management` pods are up and in `Running` state:

    ```
    kubectl -n <namespace> get pods
    ```

    !!! example
        ```shell
        kubectl -n dxns get pods
        ```

    You may see more than one `persistence-node` pods running:

    ```
    dx-deployment-core-0                                         3/3     Running   0          3h49m
    dx-deployment-persistence-node-0                             2/2     Running   0          3h49m
    dx-deployment-persistence-node-1                             2/2     Running   0          3h48m
    dx-deployment-persistence-node-2                             2/2     Running   0          3h48m
    dx-deployment-digital-asset-management-0                     1/1     Running   0          3h48m
    ```

2.   **Core references restore**

    1.  Upload the collection dump to the core pod:

        ```
        kubectl cp -c core <source-file> <namespace>/<release-name>-core-0:/path/to/damExport.xml
        ```

        !!! example
            ```shell
            kubectl cp -c core /tmp/damExport.xml dxns/dx-deployment-core-0:/tmp/damExport.xml
            ```

    2.  Import DAM collection references to Core

        ```
        kubectl -n <namespace> exec pod/<release-name>-core-0 -c core -- /bin/bash -c "/opt/HCL/PortalServer/bin/xmlaccess.sh -user <wpsadmin-user> -password <wpsadmin-password> -url http://localhost:10039/wps/config -in /path/to/damExport.xml"
        ```

        !!! example
            ```shell
            kubectl -n dxns exec pod/dx-deployment-core-0 -c core -- /bin/bash -c "/opt/HCL/PortalServer/bin/xmlaccess.sh -user wpsadmin -password wpsadmin -url http://localhost:10039/wps/config -in /tmp/damExport.xml"
            ```

3.   **DAM binary restore**

    3.  Upload the backup binary to the DAM pod. You can now transfer the backup database to the remote DAM pod:

        ```
        kubectl cp <source-file> <namespace>/<dam-pod-name>:<target-file>
        ```

        !!! example
            ```shell
            kubectl cp /tmp/backupml.tar.gz dxns/dx-deployment-digital-asset-management-0:/tmp/backupml.tar.gz
            ```

    4.  Restore the DAM binaries:
        ```
        kubectl -n <namespace> exec pod/<dam-pod-name> -- /bin/bash -c "tar -cvpzf /path/to/backupml.tar.gz --exclude=/backupml.tar.gz --one-file-system --directory /opt/app/upload ."
        ```

        !!! example
            ```shell
            kubectl -n dxns exec pod/dx-deployment-digital-asset-management-0 -- /bin/bash -c "tar -mpxf /tmp/backupml.tar.gz --directory /opt/app/upload"
            ```


4.   **Persistence restore**


    5.  Determine the primary `persistence-node` using:

        ```
        kubectl -n <namespace> exec pod/<release-name>-persistence-node-<running-node-index> -c persistence-node -- repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
        ```

        For `<running-node-index>` select the index of any `persistence-node` that is in the `Running` state. In most cases, node `0` can be used.

        !!! example
            ```shell
            kubectl -n dxns exec pod/dx-deployment-persistence-node-0 -c persistence-node -- repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
            ```

        This command returns the name of the primary `persistence-node`. Please use this node for the following steps when `<primary-node-name>` is referenced.

        Example output:

        ```
        dx-deployment-persistence-node-0
        ```


    6.  Copy the database dump file to the primary `persistence-node` pod:

        ```
        kubectl cp -c persistence-node <target-file> <namespace>/<primary-node-name>:<target-file>
        ```

        !!! example
            ```shell
            kubectl cp -c persistence-node /tmp/dxmediadb.dmp dxns/dx-deployment-persistence-node-0:/tmp/dxmediadb.dmp
            ```

    7.  Run the following commands in order:

        1.  Set the database connection limit to 0 for `dxmediadb`:

            ```
            kubectl -n <namespace> exec pod/<primary-node-name> -c persistence-node -- psql -c "ALTER DATABASE dxmediadb CONNECTION LIMIT 0;"
            ```

            !!! example
                ```shell
                kubectl -n dxns exec pod/dx-deployment-persistence-node-0 -c persistence-node -- psql -c "ALTER DATABASE dxmediadb CONNECTION LIMIT 0;"
                ```

        2.  Terminate all the existing connections to the database, if any:

            ```
            kubectl -n <namespace> exec pod/<primary-node-name> -c persistence-node -- psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'dxmediadb' AND pid <> pg_backend_pid();"
            ```

            !!! example
                ```shell
                kubectl -n dxns exec pod/dx-deployment-persistence-node-0 -c persistence-node -- psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'dxmediadb' AND pid <> pg_backend_pid();"
                ```

        3.  Drop the database `dxmediadb`:

            ```
            kubectl -n <namespace> exec pod/<primary-node-name> -c persistence-node -- dropdb dxmediadb
            ```

            !!! example
                ```shell
                kubectl -n dxns exec pod/dx-deployment-persistence-node-0 -c persistence-node -- dropdb dxmediadb
                ```

            !!!note
                If you are getting the following error, run the commands from this step again until they are completed without errors.

                ```shell
                dropdb: database removal failed: ERROR:  database "dxmediadb" is being accessed by other users
                ```

        4.  Create the database:

            ```
            kubectl -n <namespace> exec pod/<primary-node-name> -c persistence-node -- /bin/bash -c "createdb -O dxuser dxmediadb"
            ```

            !!! example
                ```shell
                kubectl -n dxns exec pod/dx-deployment-persistence-node-0 -c persistence-node -- /bin/bash -c "createdb -O dxuser dxmediadb"
                ```

        5.  Restore the database:

            ```
            kubectl -n <namespace> exec pod/<primary-node-name> -c persistence-node -- /bin/bash -c "psql dxmediadb < /tmp/dxmediadb.dmp"
            ```

            !!! example
                ```shell
                kubectl -n dxns exec pod/dx-deployment-persistence-node-0 -c persistence-node -- /bin/bash -c "psql dxmediadb < /tmp/dxmediadb.dmp"
                ```

        6.  Restore the database connection limit:

            ```
            kubectl -n <namespace> exec pod/<primary-node-name> -c persistence-node -- psql -c "ALTER DATABASE dxmediadb CONNECTION LIMIT 500;"
            ```

            !!! example
                ```shell
                kubectl -n dxns exec pod/dx-deployment-persistence-node-0 -c persistence-node -- psql -c "ALTER DATABASE dxmediadb CONNECTION LIMIT 500;"
                ```


-   **Additional step to restore your database**

    After restoring the Persistence database as well as the DAM binaries, it can take some minutes for the Persistence connections pool as well as DAM to restart and get back to a `Running` state. If DAM does not recover on its own, use the following workaround:

    1.  Delete the DAM pod to restart it:

        ```
        kubectl delete pod <dam-pod-name> -n <namespace>
        ```

        !!! example
            ```shell
            kubectl delete pod dx-deployment-digital-asset-management-0 -n dxns
            ```
