# Configuring an external database for DAM

The Digital Asset Management (DAM) feature of HCL Digital Experience (DX) uses an internal PostgreSQL service as its default persistence backend. This guide explains how you can utilize an external PostgreSQL database from a cloud provider or self-hosted environment.

## Prerequisites

Before configuring the external database, ensure the following:

- The external database is running PostgreSQL version 16.
- There is network access between your DAM application and the external PostgreSQL database.
- A database is set up for DAM.
- Roles are created with the necessary permissions to the database For more information, refer to [Step 2 of Setting up a PostgreSQL database](#setting-up-a-postgresql-database).

## Configuring DAM to use the external database

After setting up the database, you can configure DAM to connect to the external PostgreSQL instance:

1. If your external database requires an SSL connection, create a Kubernetes Secret containing your SSL certificate file using the following command. This Secret will be mounted to the DAM container.

    ```bash
    kubectl create secret generic custom-db-ssl-cert --from-file=<path-to-your-ssl-pem-crt-file>
    ```

    Replace `<path-to-your-ssl-pem-crt-file>` with the actual path to your SSL certificate file.

2. Back up and import your existing database:

    1. Export the database dump from your current persistence node. For more information, refer to [Backup Persistence](../../digital_assets/dam_backup_restore_image.md#backup-persistence).
    2. Import this database dump into your external database instance.

    !!! note
        Ensure you suspend all authoring operations on the DAM during the database export and import procedure to avoid introducing invalid data into the external database. To do so, scale down the replica to 0 for `digitalAssetManagement` under `scaling.replicas` in the `values.yaml` file.

3. Update your custom values YAML file:

    1. Open your custom values YAML file for editing.
    2. Set the `persistence` field under `applications` to `false` to disable the persistence and persistence pool nodes. Ensure the `persistence` field remains enabled for any other services (for example, `people service`) that still require the persistence functionality.
    3. Modify the database hostname in the `configuration.persistence.host` field to point to your external database.
    4. Modify the database name in the `configuration.persistence.databaseName` field to point to your database name.
    5. If applicable, set the `configuration.persistence.ssl` field to `true`.

4. Perform a Helm upgrade using the following command:

    ```bash
    helm upgrade <release-name> <chart-path> -f <values-file>
    ```

## Sample scenario

This section provides a general example of the required steps to prepare any external PostgreSQL database for DAM, whether it is on a cloud provider such as AWS RDS or Azure Database for PostgreSQL, or on a self-hosted server. The specific commands may vary based on your chosen environment.

### Setting up a PostgreSQL database

1. Connect to your PostgreSQL instance.

2. Create the necessary database, roles, and permissions using SQL commands similar to the following:

    ```sql
    CREATE DATABASE <database>;
    CREATE ROLE <dxuser> WITH CREATEROLE login PASSWORD '<password>';
    CREATE USER <damuser> WITH LOGIN PASSWORD '<password>';
    ALTER DATABASE <database> OWNER TO <damuser>;
    GRANT CREATE ON DATABASE <database> TO <dxuser>;
    GRANT <damuser> TO <dxuser> WITH ADMIN OPTION;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    ```

    This prepares the database schema for the DAM application.

    If this is a fresh deployment and you choose to use a single credential, use the following SQL commands:

    ```sql
    CREATE DATABASE <database>;
    CREATE ROLE <userid> with CREATEROLE login PASSWORD '<password>';
    GRANT CREATE ON DATABASE <database> TO <userid>;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    ```

    Update the same credentials for both the `dbUser` and `damUser` in values YAML. Refer digitalAssetManagement section in [security configuration](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_credentials.md#adjusting-default-credentials)

3. Back up and transfer the database dump:

    1. Export a database dump from your existing DAM persistence node.
    2. Transfer the `.dmp` file to a location accessible for import into your external database.

4. Import the database dump into the `<database>` using the appropriate tools for your environment (for example, `psql`).

5. Confirm that the data has been imported correctly by logging in to the `<database>` using the `<damUser>` credentials.

6. Configure your DAM application to connect to the external database. For more information, refer to [Configuring DAM to use the external database](#configuring-dam-to-use-the-external-database).

    1. If your database is SSL enabled, ensure you have created the necessary Secret.
    2. Update your custom values YAML file to point to the external database host and enable SSL.
    3. Perform a Helm upgrade to apply the changes.

## Limitations

- Changing user credentials using the Helm chart will not automatically update the external database. You must perform these updates manually in your external database instance.
- The option to use the same credentials for both `dbUser` and `damUser` is only applicable to new deployments.
