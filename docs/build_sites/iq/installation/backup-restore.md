# Backing up and restoring data

!!! note "Database configuration required"
    These procedures apply only if you completed the [Preparing the database](prepare-database.md) step. If you deploy the IQ backend server without a database, skip this section. For deployment options without a database, refer to [Limitations](limitations.md).

If you [configured a PostgreSQL database](prepare-database.md), the IQ backend server stores session and conversation data in that instance. Run regular backups to ensure data recovery if a failure occurs.

## Prerequisites

Verify that `persistence-node` pods are in the `Running` state:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep persistence-node
```

Multiple `persistence-node` pods might run:

```text
NAME                                 READY   STATUS    RESTARTS   AGE
dx-deployment-persistence-node-0     2/2     Running   0          3h49m
dx-deployment-persistence-node-1     2/2     Running   0          3h48m
dx-deployment-persistence-node-2     2/2     Running   0          3h48m
```

## Backing up persistence data

Backing up persistence data secures the session information and chat history data managed by the IQ backend server. Regular backups prevent data loss during unexpected system failures, cluster migrations, or application upgrades.

1. Identify the primary `persistence-node` pod:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
    ```

    - `<YOUR_NAMESPACE>`: The Kubernetes namespace.
    - `<DX_RELEASE_NAME>`: The HCL Digital Experience deployment name.

    Example output:

    ```text
    dx-deployment-persistence-node-0
    ```

    Use this node name as `<PRIMARY_NODE_NAME>` in the following steps.

2. Back up the current database contents by generating a dump file inside the pod:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      /bin/bash -c "pg_dump iqdb > /tmp/iqdb.dmp"
    ```

3. Verify that the dump file exists in the pod and contains data:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      ls -lh /tmp/iqdb.dmp
    ```

    Example output:

    ```text
    -rw-r--r--. 1 dx_user dx_users 125K Mar 31 17:22 /tmp/iqdb.dmp
    ```

4. Download the database dump file to the local environment:

    - To download the uncompressed dump file directly, run this command:

        ```bash
        kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
          <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp ./iqdb-backup-$(date +%Y%m%d).dmp
        ```

    - To compress the file before downloading, run these commands:

        ```bash
        # Compress in the pod
        kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
          gzip /tmp/iqdb.dmp
        
        # Download compressed file
        kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
          <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp.gz ./iqdb-backup-$(date +%Y%m%d).dmp.gz
        ```

5. Move the backup file to a secure, off-cluster location:

    ```bash
    # Example: Copy to remote storage
    scp ./iqdb-backup-$(date +%Y%m%d).dmp.gz user@backup-server:/backups/dx-iq/
    ```

## Restoring persistence data

Restoring persistence data reconstructs session information and conversation history from a saved database dump file. This procedure is required during system recovery, database failures, or cluster migrations.

1. Identify the primary `persistence-node` pod:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
    ```

    Example output:

    ```text
    dx-deployment-persistence-node-0
    ```

    Use this node name as `<PRIMARY_NODE_NAME>` in the following steps.

2. Upload the dump file to the primary `persistence-node` pod:

    - To upload an uncompressed dump file, run this command:

        ```bash
        kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
          ./iqdb-backup-20260518.dmp <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp
        ```

    - To upload and decompress a compressed file, run these commands:

        ```bash
        # Upload compressed file
        kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
          ./iqdb-backup-20260518.dmp.gz <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp.gz
        
        # Decompress in the pod
        kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
          gunzip /tmp/iqdb.dmp.gz
        ```

3. Verify that the dump file exists in the pod:

    1. Check that the dump file exists:

        ```bash
        kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
          ls -lh /tmp/iqdb.dmp
        ```

    2. Inspect the first 20 lines of the file to verify the contents:

        ```bash
        kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
          head -n 20 /tmp/iqdb.dmp
        ```

        The output contains SQL statements such as `CREATE TABLE` and `INSERT INTO`.

4. Set the database connection limit to `0`:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      psql -c "ALTER DATABASE iqdb CONNECTION LIMIT 0;"
    ```

5. Terminate the existing active connections to the database:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'iqdb' AND pid <> pg_backend_pid();"
    ```

6. Drop the existing database:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      dropdb iqdb
    ```

    !!! warning
        If an error indicates that the database is being accessed by other users, repeat Steps 4 through 6 until the database drops successfully.

7. Create a new, empty database:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      /bin/bash -c "createdb -O dxuser iqdb"
    ```

8. Restore the database from the backup file:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      /bin/bash -c "psql iqdb < /tmp/iqdb.dmp"
    ```

    Expected output should show SQL statements being executed:

    ```text
    SET
    SET
    CREATE TABLE
    ALTER TABLE
    COPY 37
    REVOKE
    GRANT
    ```

    The `COPY` statements indicate that records are inserting into the database tables.

9. Restore the database connection limit to the standard configuration:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      psql -c "ALTER DATABASE iqdb CONNECTION LIMIT 500;"
    ```

### Completing post-restore recovery

The persistence connection pool restarts after the database restoration completes. If the IQ service fails to recover automatically, perform these steps to restart the service components:

1. Delete the IQ integrator pod to trigger a restart:

    ```bash
    kubectl delete pod -n <YOUR_NAMESPACE> -l app=dx-iq-integrator
    ```

    Kubernetes automatically recreates the pod.

2. Verify the operational status of the new pod:

    ```bash
    kubectl get pods -n <YOUR_NAMESPACE> | grep dx-iq-integrator
    ```

    Ensure that the pod status reaches the `Running` state and displays `1/1` in the `Ready` column.

???+ info "Validation"
    After configuring your database, [validate your deployment](validation.md#verifying-database-connectivity) to verify that the IQ pod can connect to the database successfully.
