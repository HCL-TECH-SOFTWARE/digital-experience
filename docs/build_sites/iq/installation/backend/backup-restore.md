# Backing up and restoring data

!!! note "This guide assumes you configured a database"
    This guide only applies if you completed the [Preparing the database](prepare-database.md) step. If you are using the IQ backend server without a database, you can skip this section. See the [Limitations](limitations.md) for options to deploy without a database for developer use only.

If you configured a PostgreSQL database following the [Preparing the database](prepare-database.md) guide, the IQ backend server stores session and conversation data in it. Regular backups ensure data recovery in case of failures.

## Backup Persistence

### Prerequisites

Verify that `persistence-node` pods are up and in `Running` state:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep persistence-node
```

You may see multiple `persistence-node` pods running:

```
dx-deployment-persistence-node-0     2/2     Running   0          3h49m
dx-deployment-persistence-node-1     2/2     Running   0          3h48m
dx-deployment-persistence-node-2     2/2     Running   0          3h48m
```

### Backup Steps

1. **Determine the primary `persistence-node`:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<DX_RELEASE_NAME>` with your DX deployment name

    Example output:

    ```
    dx-deployment-persistence-node-0
    ```

    Use this node name as `<PRIMARY_NODE_NAME>` in the following steps.

2. **Dump the current database:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      /bin/bash -c "pg_dump iqdb > /tmp/iqdb.dmp"
    ```

3. **Verify the dump file in the pod:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      ls -lh /tmp/iqdb.dmp
    ```

    Example output:

    ```
    -rw-r--r--. 1 dx_user dx_users 125K Mar 31 17:22 /tmp/iqdb.dmp
    ```

4. **Download the database dump to your local machine:**

    Option A: Download uncompressed dump directly:

    ```bash
    kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
      <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp ./iqdb-backup-$(date +%Y%m%d).dmp
    ```

    Option B: Compress and download:

    ```bash
    # Compress in the pod
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      gzip /tmp/iqdb.dmp
    
    # Download compressed file
    kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
      <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp.gz ./iqdb-backup-$(date +%Y%m%d).dmp.gz
    ```

5. **Store the backup securely:**

    Move the backup file to a secure, off-cluster location:

    ```bash
    # Example: Copy to remote storage
    scp ./iqdb-backup-$(date +%Y%m%d).dmp.gz user@backup-server:/backups/dx-iq/
    ```

## Restore Persistence

### Prerequisites

Verify that `persistence-node` pods are up and in `Running` state:

```bash
kubectl get pods -n <YOUR_NAMESPACE> | grep persistence-node
```

#### Restore Steps

1. **Determine the primary `persistence-node`:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      repmgr cluster show --compact --terse 2>/dev/null | grep "primary" | awk '{split($0,a,"|"); print a[2]}' | xargs
    ```

    Example output:

    ```
    dx-deployment-persistence-node-0
    ```

    Use this node name as `<PRIMARY_NODE_NAME>` in the following steps.

2. **Upload the dump file to the primary `persistence-node` pod:**

    Option A: Upload uncompressed dump:

    ```bash
    kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
      ./iqdb-backup-20260518.dmp <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp
    ```

    Option B: Upload and decompress:

    ```bash
    # Upload compressed file
    kubectl cp -n <YOUR_NAMESPACE> -c persistence-node \
      ./iqdb-backup-20260518.dmp.gz <PRIMARY_NODE_NAME>:/tmp/iqdb.dmp.gz
    
    # Decompress in the pod
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      gunzip /tmp/iqdb.dmp.gz
    ```

3. **Verify the dump file in the pod:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      ls -lh /tmp/iqdb.dmp
    ```

    Verify file contents:

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      head -n 20 /tmp/iqdb.dmp
    ```

    You should see SQL statements like `CREATE TABLE`, `INSERT INTO`, etc.

4. **Set database connection limit to 0:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      psql -c "ALTER DATABASE iqdb CONNECTION LIMIT 0;"
    ```

5. **Terminate existing connections:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      psql -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'iqdb' AND pid <> pg_backend_pid();"
    ```

6. **Drop the existing database:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      dropdb iqdb
    ```

    !!! warning
        If you receive an error stating `database "iqdb" is being accessed by other users`, repeat steps 4-6 until the database is successfully dropped.

7. **Create a new empty database:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      /bin/bash -c "createdb -O dxuser iqdb"
    ```

8. **Restore the database from backup:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      /bin/bash -c "psql iqdb < /tmp/iqdb.dmp"
    ```

    Expected output should show SQL statements being executed:

    ```
    SET
    SET
    CREATE TABLE
    ALTER TABLE
    COPY 37
    REVOKE
    GRANT
    ```

    The `COPY` statements indicate rows are being inserted.

9. **Restore the database connection limit:**

    ```bash
    kubectl -n <YOUR_NAMESPACE> exec pod/<PRIMARY_NODE_NAME> -c persistence-node -- \
      psql -c "ALTER DATABASE iqdb CONNECTION LIMIT 500;"
    ```

### Post-Restore Recovery

After completing the restore, the persistence connection pool may take time to restart. If the IQ service does not recover automatically:

1. **Restart the IQ integrator pod:**

    ```bash
    kubectl delete pod -n <YOUR_NAMESPACE> -l app=dx-iq-integrator
    ```

    Kubernetes will automatically recreate the pod.

2. **Verify pod status:**

    ```bash
    kubectl get pods -n <YOUR_NAMESPACE> | grep dx-iq-integrator
    ```

    Wait until the pod shows `Running` status with `1/1` ready.

## Validation

After restoring a backup, follow the [Validating the IQ backend deployment](validation.md) guide to verify that the database restore was successful and all IQ services are operational.

Focus on [Step 3: Verify Database Connection](validation.md#step-3-verify-database-connection) to confirm the IQ pod can connect to the restored database.
