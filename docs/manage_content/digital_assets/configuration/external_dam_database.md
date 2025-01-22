# Configure External Database

The [Digital Asset Management (DAM) persistence](../../../get_started/plan_deployment/container_deployment/dam_persistence_architecture.md) framework uses a Postgres database by default. This guide explains how to externalize the database persistence to cloud or self-hosted environments.

## External Database Requirements

Ensure the following prerequisites are met before configuring the external database:

- The external database must be PostgreSQL version 16.
- Ensure network connectivity between the DX application and the external database.

Follow these steps to configure the external database for your DAM application.

## Create and Set Up a New Postgres Database

You can create a new Postgres instance in various ways. Refer to your cloud provider's documentation if you plan to use one. This example uses a Postgres Docker image for externalization.

!!! note
    These steps are specific to a Docker image but may vary depending on the cloud offering. The intention is to create a database and users with necessary permissions and import the database dump.

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

    !!! note
        Obtain the credentials for `damUser` and `dbUser` from the configurations under `security.digitalAssetManagement` in the custom values YAML file.

4. **Exit the Container**:
    ```sh
    exit
    ```

5. **Back Up the Existing Database**:

    Export the database dump from the current persistence node. Refer to the [Backup Persistence](../../digital_assets/dam_backup_restore_image.md#backup-persistence) section for instructions.

6. **Move the Database Dump File**:
    Transfer the database dump file to the server where the Docker container is running. Import the dump using:
    ```sh
    docker exec -i <external-postgres-name> psql -U postgres -d dxmediadb < dxmediadb.dmp
    ```

7. **Verify the Database Import**:
    ```sh
    docker exec -it <external-postgres-name> bash
    psql dxmediadb -U <damUser>
    ```

## Configuration

Configure the external database host details in the Helm chart.

1. **Modify custom values YAML**:
    - Open the custom values YAML file in edit mode.
    - Set the replica count for `persistence-connection-pool` and `persistence-node` to 0.
    - Update the database host name under `configuration.persistence.host`.

2. **Perform Helm Upgrade**:
    ```sh
    helm upgrade <release-name> <chart-path> -f <values-file>
    ```

## Limitations

- This configuration is not applicable for new deployments.
- Creating or updating user credentials via the Helm chart is not supported.
- The DAM database will not be disabled if DAM is disabled in the Helm chart.