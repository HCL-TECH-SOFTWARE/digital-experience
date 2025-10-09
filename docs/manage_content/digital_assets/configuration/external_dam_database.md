# Configuring an External Database for DAM

The Digital Asset Management (DAM) framework uses PostgreSQL as its default persistence backend. This guide provides instructions on how to externalize the DAM database to a cloud or self-hosted PostgreSQL environment.

## External Database Prerequisites

Before configuring the external database, ensure the following:

- **PostgreSQL Version**: The external database must be running PostgreSQL version 16.
- **Network Connectivity**: There should be network access between the DX application and the external PostgreSQL database.
- **Database Setup**: 
  - Create the `dxmediadb` and `dx_user` databases.
  - Create `<damUser>` and `<dbUser>` roles with their respective passwords.
  - Grant all privileges on the `dxmediadb` database to `<dbUser>`.
  - Assign the `<damUser>` role to `<dbUser>` with the admin option.
  - Set `<damUser>` as the owner of the `dxmediadb` database.

    !!! note
        Obtain the credentials for `damUser` and `dbUser` from the `security.digitalAssetManagement` section in the custom values YAML file.
- **SSL**: Pem file is used for SSL. Create a generic secret with name as `custom-db-ssl-cert` in helm chart for the DAM container to access the pem while connecting to the database.

## Configuring DAM to Use the External Database

After ensuring the database is set up, configure DAM to connect to the external PostgreSQL instance.

### 1. **Back Up and Import Existing Database**
   - First, export the database dump from the current persistence node. See the [Backup Persistence](../../digital_assets/dam_backup_restore_image.md#backup-persistence) section for guidance.
   - Import the database dump into the external database.
   - Verify the database connection using the `<damUser>` credentials.

### 2. **Update the Custom Values YAML File**
   - Open the custom values YAML file for editing.
   - Set the `persistence` under `applications` to false.
   - Modify the database hostname in the `configuration.persistence.host` field to point to the external database.
   - Modify the ssl to true

### 3. **Run Helm Upgrade**
   After making the necessary changes, upgrade the Helm release with the following command:
   ```bash
    helm upgrade <release-name> <chart-path> -f <values-file>
   ```

## Example: Externalizing a PostgreSQL Database Using Docker

You can create a PostgreSQL instance in various ways, including through cloud providers. This example demonstrates how to set up a PostgreSQL instance using Docker to externalize the database.

!!! note
    These steps are specific to using a Docker image, but they may vary based on the cloud provider you choose. The goal is to create the necessary database, roles, and permissions, and import the database dump.

### Steps for Setting Up PostgreSQL with Docker

1. **Run the PostgreSQL Docker Container**:
    Start by pulling and running the PostgreSQL Docker image with the following command:
    ```sh
    docker run --name <external-postgres-name> -e POSTGRES_PASSWORD=<password> -p 5432:5432 -d postgres:16
    ```

2. **Access the Docker Container**:
    Once the container is running, access it using the following command:
    ```sh
    docker exec -it <external-postgres-name> psql -U postgres
    ```

3. **Create the Necessary Databases and Roles**:
    Inside the container, run the following SQL commands to create the `dxmediadb`, `dx_user` databases, and the required roles:
    ```sql
    CREATE DATABASE dxmediadb;
    CREATE ROLE <dxuser> with CREATEROLE login PASSWORD '<password>';
    CREATE USER <damuser> WITH LOGIN PASSWORD '<password>';
    ALTER DATABASE dxmediadb OWNER TO <damuser>;
    GRANT CREATE ON DATABASE dxmediadb TO <dxuser>;
    GRANT <damuser> TO <dxuser> WITH ADMIN OPTION;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    ```

4. **Exit the Container**:
    After executing the necessary SQL commands, exit the PostgreSQL container:
    ```sh
    exit
    ```

5. **Back Up the Current Database**:
    Export a database dump from your existing persistence node. For instructions, refer to the [Backup Persistence](../../digital_assets/dam_backup_restore_image.md#backup-persistence) section.

6. **Transfer and Import the Database Dump**:
    Move the database dump file to the server where the Docker container is running, then import the dump into the external PostgreSQL container using the following command:
    ```sh
    docker exec -i <external-postgres-name> psql -U postgres -d dxmediadb < dxmediadb.dmp
    ```

7. **Verify the Import**:
    To ensure that the database has been imported correctly, run the following command to access the database:
    ```sh
    docker exec -it <external-postgres-name> bash
    psql dxmediadb -U <damUser>
    ```

8. **Connect DAM to External database**:
    Once the database setup is done, point the DAM application to the external database by [modifying HELM values](#2-update-the-custom-values-yaml-file) and performing a [HELM Upgrade](#3-run-helm-upgrade).


## Limitations

- This configuration is intended for externalizing an existing DAM database, not for new deployments.
- Modifying or updating user credentials via the Helm chart is not supported.
- If DAM is disabled in the Helm chart, the DAM database will not be disabled.
