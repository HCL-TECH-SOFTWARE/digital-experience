# Configure External Database

The [Digital Asset Management (DAM) persistence](../../../get_started/plan_deployment/container_deployment/dam_persistence_architecture.md) framework includes a Postgres database by default as persistence containers. This section provides instructions on how to externalize the database persistence containers to cloud or self-hosted databases.

## Back Up the Existing Database

First, export the database dump from the current persistence node.

Refer to the [Backup Persistence](../../digital_assets/dam_backup_restore_image.md#backup-persistence) section for instructions on exporting the dump from the existing persistence nodes.

## Create and Set Up a New Postgres Database

There are multiple ways to create a new Postgres instance. Please refer to the documentation from your cloud provider if you intend to use one of those. In this example, we will use a Postgres Docker image to set up externalization.

### Steps to Set Up Postgres Using Docker

1. **Pull and Run Postgres Docker Image**:
    ```sh
    docker run --name <external-postgres-name> -e POSTGRES_PASSWORD=<password> -p 5432:5432 -d postgres:16
    ```

2. **Access the Docker Container**:
    ```sh
    docker exec -it <external-postgres-name> psql -U postgres
    ```

3. **Execute the Following Queries**:
    ```sql
    CREATE DATABASE dxmediadb;
    CREATE DATABASE dx_user;
    CREATE ROLE <damUser> WITH LOGIN PASSWORD '<password>';
    CREATE ROLE <dbUser> WITH CREATEROLE LOGIN PASSWORD '<password>';
    CREATE ROLE dx_user WITH CREATEROLE LOGIN PASSWORD 'dx_user';
    GRANT ALL PRIVILEGES ON DATABASE dxmediadb TO <dbuser>;
    GRANT <damUser> TO <dbuser> WITH ADMIN OPTION;
    ALTER DATABASE dxmediadb OWNER TO <damUser>;
    ```

    !!! Note
        The credentials for `damUser` and `dbUser` can obtained from the configurations under `security.digitalAssetManagement` in `values.yaml`.

4. **Exit the Container**:
    ```sh
    exit
    ```

5. **Move the Database Dump File**:
    Move the database dump file to the server where the Docker container is running. Import the dump using the following command:
    ```sh
    docker exec -i <external-postgres-name> psql -U postgres -d dxmediadb < dxmediadb.dmp
    ```

6. **Verify the Database Import**:
    ```sh
    docker exec -it <external-postgres-name> bash
    psql dxmediadb -U <damUser>
    ```

## Configuration

Configure the external database host details in the Helm chart.

1. **Modify `values.yaml`**:
    - In the Helm chart, modify `values.yaml` or a custom values file if it exists.
    - Set the replica count for `persistence-connection-pool` and `persistence-node` to 0.
    - Modify the database host name in `values.yaml` or the custom values file under `configuration.persistence.host`.

2. **Perform Helm Upgrade**:
    ```sh
    helm upgrade <release-name> <chart-path> -f <values-file>
    ```

## Limitations

- This configuration is not applicable for new deployments.
- Creating or updating user credentials via helm chart is not supported.
- The DAM database will not be disabled if DAM is disabled in the Helm chart.