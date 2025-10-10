# Configuring an External Database for DAM

The Digital Asset Management (DAM) framework uses **PostgreSQL** as its default persistence backend. This guide explains how to externalize the DAM database to a cloud or self-hosted PostgreSQL environment.

-----

## External Database Prerequisites

Before configuring the external database, make sure you have the following:

  - **PostgreSQL Version**: The external database must be running **PostgreSQL version 16**.
  - **Network Connectivity**: Ensure there's network access between your DX application and the external PostgreSQL database.
  - **Database Setup**: You need to set up the necessary database, roles, and permissions. You will need to create the following:
      - The `dxmediadb` and `dx_user` databases.
      - The `<damUser>` and `<dbUser>` roles with their respective passwords.
      - Grant all privileges on the `dxmediadb` database to `<dbUser>`.
      - Assign the `<damUser>` role to `<dbUser>` with the admin option.
      - Set `<damUser>` as the owner of the `dxmediadb` database.

!!! note
    You can get the credentials for `damUser` and `dbUser` from the `security.digitalAssetManagement` section in your custom values YAML file. Refer digitalAssetManagement section in [security configuration](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_credentials.md#adjusting-default-credentials)

  - **SSL**: If you're using SSL, you'll need to create a generic secret named `custom-db-ssl-cert` in the Helm chart. This allows the DAM container to access the `.pem` or `.crt` file when connecting to the database.

-----

## Configuring DAM to Use the External Database

After setting up the database, you can configure DAM to connect to the external PostgreSQL instance.

### 1\. Create the SSL Secret

If your external database requires an SSL connection, you must create a Kubernetes secret containing your SSL certificate file. This secret will be mounted to the DAM container.

```bash
kubectl create secret generic custom-db-ssl-cert --from-file=<path-to-your-ssl-pem-crt-file>
```

Replace `<path-to-your-ssl-pem-crt-file>` with the actual path to your SSL certificate file.

### 2\. Back Up and Import Your Existing Database

  - First, export the database dump from your current persistence node. For guidance, see the [Backup Persistence](../../digital_assets/dam_backup_restore_image.md#backup-persistence) section.
  - Import this database dump into your external database instance.
  - Finally, verify that the database connection works using the `<damUser>` credentials.

### 3\. Update the Custom Values YAML File

  - Open your custom values YAML file for editing.
  - Set the `persistence` field under `applications` to **false**. (This disables the persistence node and persistence pool node)
  - Modify the database hostname in the `configuration.persistence.host` field to point to your external database.
  - If applicable, set the `configuration.persistence.ssl` field to **true**.

### 4\. Run Helm Upgrade

  - After making these changes, upgrade the Helm release using the following command:
    ```bash
    helm upgrade <release-name> <chart-path> -f <values-file>
    ```

-----

## Example: Setting Up a PostgreSQL Database

This section provides a general example of the **required steps** to prepare any external PostgreSQL database for DAM, whether it's on a cloud provider like **AWS RDS** or **Azure Database for PostgreSQL**, or a self-hosted server. The specific commands may vary based on your chosen environment.

### Steps for Preparing the Database

1.  **Create the Database and Roles**: Connect to your PostgreSQL instance and create the necessary database, roles, and permissions. Use SQL commands similar to the following:

    ```sql
    CREATE DATABASE dxmediadb;
    CREATE ROLE <dxuser> WITH CREATEROLE login PASSWORD '<password>';
    CREATE USER <damuser> WITH LOGIN PASSWORD '<password>';
    ALTER DATABASE dxmediadb OWNER TO <damuser>;
    GRANT CREATE ON DATABASE dxmediadb TO <dxuser>;
    GRANT <damuser> TO <dxuser> WITH ADMIN OPTION;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    ```

    This prepares the database schema for the DAM application.

    If this is a fresh deployment, if you choose to use a single credential, use the below SQL Commands:

    ```sql
    CREATE DATABASE dxmediadb;
    CREATE ROLE <userid> with CREATEROLE login PASSWORD '<password>';
    GRANT CREATE ON DATABASE dxmediadb TO <userid>;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    ```

    Update the same credentials for both the `dbUser` and `damUser` in values YAML. Refer digitalAssetManagement section in [security configuration](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_credentials.md#adjusting-default-credentials)

2.  **Back Up and Transfer the Database Dump**:

      - Export a database dump from your existing DAM persistence node.
      - Transfer the `.dmp` file to a location from which you can import it into your external database.

3.  **Import the Database Dump**:

      - Use the appropriate tools for your environment (e.g., `psql`) to import the database dump into the `dxmediadb`. 

4.  **Verify the Import**:

      - Log in to the `dxmediadb` using the `<damUser>` credentials to confirm that the data has been imported correctly.

5.  **Connect DAM to the External Database**:

    Once the database is ready, you can configure your DAM application to connect to it.

      - If your database is SSL enabled, first ensure you have [created the necessary secret](#1-create-the-ssl-secret).
      - Next, [update your custom values YAML file](#3-update-the-custom-values-yaml-file) to point to the external database host and enable SSL.
      - Finally, [perform a Helm upgrade](#4-run-helm-upgrade) to apply the changes.

-----

## Limitations

* **Manual Credential Updates**: Changing user credentials via the Helm chart will not automatically update the external database. You must perform these updates manually in your external database instance.
* **Credential Type**: The option to use the same credentials for both `dbUser` and `damUser` is only applicable to new deployments.
