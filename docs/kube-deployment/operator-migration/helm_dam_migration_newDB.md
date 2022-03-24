# Migrate to new DAM DB in Helm-based deployments

This manual migration process to the new DAM DB is mandatory if you have DX CF196 or CF197 deployed using the Helm-based deployment option and are now upgrading to CF200. It is mandatory because you cannot upgrade to a future release, such as CF201, without manually migrating to the new DB. If you already have CF 198 or CF199 installed using the Helm-based deployment option, then you need not manually migrate the DAM DB.

## 1. Upgrade your existing Helm-based deployments to CF200

To perform the DAM DB migration you must first upgrade your existing DX deployment to CF200.

**Important:** During upgrading to CF200, the Helm-based upgrade procedure detects the old deprecated DAM DB and notifies you with the following warning. The message indicates that the deployment is using an old DAM DB system that is deprecated, hence you must migrate to the new DAM DB. If you do not migrate to a new DAM DB, you might lose data during future DX updates.

**Warning message:** Installation of HCL DX 95 CF200 done.

This deployment is using an old DAM Database system and is deprecated. You must migrate this to the new DAM Database.

If you receive this message, you must upgrade your DAM Database using the following steps; otherwise you can continue with the upgrade procedure.

## 2. Back up the existing DAM DB

Back up of your existing DAM Database. Ensure that the DX pods are in running state before proceeding with the backup procedure.

1.  **Connect to the Persistence pod:**

    The following command opens a shell in the running Persistence container.

    ```
    kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
    ```

    **Example:**

    ```
    kubectl exec --stdin --tty pod/dx-deployment-persistence-rw-0 -n dxns -- /bin/bash
    ```

2.  **Dump the current database using the `pg_dump` command:**

    ```
    pg_dump dxmediadb > /tmp/dxmediadb.dmp
    ```

3.  **Exit the Persistence container:**

    Close the shell in the Persistence container.

    ```
    exit
    ```

4.  **Download the dumped database to local system by using the following command:**

    ```
    kubectl cp <namespace>/<pod-name>:<source-file> <target-file>
    ```

    **Example:**

    ```
    kubectl cp dxns/dx-deployment-persistence-0:/tmp/dxmediadb.dmp /tmp/dxmediadb.dmp
    ```


## 3. Migrate to new DB

Enable the DAM DB migration mode to migrate your existing DAM DB to the new DB.

Change the following configuration in your custom values.yaml file.

1.  **Enable DAM Database Migration mode:**

    ```
    # Flags to enable various migration modes
    migration:
      damDB:
        # Enable for DAM Database migration from old DB to new DB
        enabled: true
    ```

2.  **Scale down persistence nodes to 1:**

    ```
    scaling:
      # The default amount of replicas per application
      replicas:
        persistenceNode: 1
    ```

3.  **Perform an upgrade with the new configuration:**

    ```
    helm upgrade dx-deployment . -f  < your_custom_value_file.yaml > -n <namespace>
    ```

    The upgrade will turn off the deprecated old Database system and deploy the new DAM Database system.


## 4. Restore DB from Old DB Backup

Restore the data from the old database to the new database.

1.  **Upload Old DB backup to persistence pod:**

    You can now transfer the backup database to the remote Persistence container.

    ```
    kubectl cp <source-file> <namespace>/<pod-name>:<target-file>
    ```

    **Example:**

    ```
    kubectl cp /tmp/dxmediadb.dmp dxns/dx-deployment-persistence-node-0:/tmp/dxmediadb.dmp
    ```

2.  **Connect to Persistence pod:**

    The following command opens a shell in the running Persistence container.

    ```
    kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
    ```

    **Example:**

    ```
    kubectl exec --stdin --tty pod/dx-deployment-persistence-node-0 -n dxns -- /bin/bash
    ```

3.  **Drop the DAM database if it exists:**

    Disconnect all connections that use the database and drop any existing databases of the deployment.

    ```
    echo "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pid <> pg_backend_pid();" | psql
    dropdb dxmediadb
    ```

4.  **Restore the database from the previous backup:**

    ```
    createdb -O dxuser dxmediadb
    psql dxmediadb < /tmp/dxmediadb.dmp
    ```

5.  **Exit the Persistence container:**

    Close the shell in the Persistence container.

    ```
    exit
    ```


## 5. Disable DAM Database Migration mode and Scale the persistence nodes to 3

Once the restore procedure is completed, you can disable the DAM DB migration mode. You must also scale the persistence node to 3 for scalability and availability.

1.  **Disable DAM Database Migration mode:**

    ```
    # Flags to enable various migration modes
    migration:
      damDB:
        # Enable for DAM Database migration from old DB to new DB
        enabled: false
    ```

2.  **Scale up persistence nodes to 3:**

    ```
    scaling:
      # The default amount of replicas per application
      replicas:
        persistenceNode: 3
    ```

3.  **Perform a helm upgrade with the updated values.yaml file:**

    ```
    helm upgrade dx-deployment . -f  < your_custom_value_file.yaml > -n < namespace >
    ```

    On successful migration, you will receive the following message.

    **Success message:**

    Installation of HCL DX 95 CF200 done.

    See [HCL Digital Experience product documentation website](https://help.hcltechsw.com/digital-experience/9.5/welcome/wp95_welcome.html), for further information.


You might have to wait for a few minutes until all the persistence pods and DAM pods are back to the running state.

