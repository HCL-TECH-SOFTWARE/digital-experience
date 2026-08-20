# Preparing the database

This section guides you through configuring the optional persistent database storage for your IQ Integrator.

Production deployments require a PostgreSQL database to maintain conversation state and session memory across pod restarts and deployments. Select one of the three persistent storage options based on your deployment environment.

!!!warning
    If you do not configure a persistent database, the system defaults to a temporary, in-memory SQLite database that deletes all session data whenever a pod restarts.

Choose from the following database configurations:

- An internal PostgreSQL database provisioned automatically by your Digital Experience (DX) Persistence Node for Kubernetes-only deployments.
- An external PostgreSQL instance located outside your DX deployment, such as a cloud-managed, on-premises, or separate Kubernetes cluster database.
- A PostgreSQL database provisioned and managed automatically within your DX deployment by your DX Runtime Controller (RTC).

## Configuring an internal database

Use this option to automatically provision a PostgreSQL database within your DX deployment. Upgrade the DX deployment to create the database, and then deploy IQ to connect to it.

### Prerequisites

Before configuring the internal database, verify that your DX deployment (`<DX_RELEASE_NAME>`) is fully operational within your target namespace (`<DX_NAMESPACE>`) and includes an active Persistence Node.

### Verifying an existing database setup

If your DX deployment was recently provisioned or upgraded with IQ database credentials and networking configuration, the `iqdb` database and user might already exist. Run the following commands to verify.

1. Check for an existing IQ database:

    ```bash
    kubectl exec -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      psql -U postgres -c "\l" | grep iq
    ```

2. Check for an existing IQ user:

    ```bash
    kubectl exec -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      psql -U postgres -c "\du" | grep -i iq
    ```

If both exist, you can go directly to [Deploying IQ with database configuration](#deploying-iq-with-database-configuration). If either is missing, proceed to the following provisioning section.

### Provisioning the database

1. Create or update your custom DX values file (for example, `custom-dx-iq-db-setup.yaml`) for IQ database provisioning:

    ```yaml
    security:
      iq:
        dbUser: "dx_iq_db_user"
        dbPassword: "<SECURE_PASSWORD>"
    
    networking:
      dxIqService: "<IQ_RELEASE_NAME>-integrator"
    ```

    - `<SECURE_PASSWORD>`: A secure password for the IQ database user.
    - `<IQ_RELEASE_NAME>`: The IQ Helm release name (for example,, `dx-iq`). The service name typically follows the `<IQ_RELEASE_NAME>-integrator` format.

    !!! important
        Setting `networking.dxIqService` enables the Persistence Node to pass the `IQ_DB_USER` and `IQ_DB_PASSWORD` environment variables to the PostgreSQL initialization script. This is required for automatic database and user creation.

2. Upgrade your DX deployment to enable IQ database provisioning and automatically generate the database secret:

    ```bash
    helm upgrade <DX_RELEASE_NAME> \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<DX_HELM_CHART_VERSION>.tgz \
      --namespace <DX_NAMESPACE> \
      --reuse-values \
      -f custom-dx-iq-db-setup.yaml
    ```

    - `<DX_RELEASE_NAME>`: The DX Helm release name.
    - `<DX_NAMESPACE>`: The DX deployment namespace.
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository fully qualified domain name (FQDN) and path.
    - `<DX_HELM_CHART_VERSION>`. The DX Helm chart version.

    To find available Helm chart versions in your repository, search in the user interface or run a `curl` command. For example, in JFrog Artifactory:

    ```bash
    curl -u <USERNAME>:<TOKEN> "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
    ```

3. Monitor the Persistence Node logs to track database and user initialization:

    1. Monitor the Persistence Node logs:

        ```bash
        kubectl logs -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 | grep -i "iq"
        ```

        Output:

        ```text
        Creating IQ user "dx_iq_db_user"...
        Creating IQ database "iqdb"...
        ```

    2. Run the following command to verify database and user creation:

        ```bash
        kubectl exec -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
          psql -U postgres -c "\du" | grep dx_iq_db_user
        ```

### Deploying IQ with database configuration

1. Create a custom IQ values file (for example, `custom-iq-internal-db-values.yaml`) to prepare your IQ deployment values using one of the following configuration options:

    === "Using database credentials"

        Specify the database credentials directly by adding the following configuration block to your values file:

        ```yaml
        configuration:
          database:
            enabled: true
            dbHost: "<DX_RELEASE_NAME>-persistence-node-0.<DX_RELEASE_NAME>-persistence-headless-svc.<DX_NAMESPACE>.svc.cluster.local"
            dbPort: 5432
            dbName: "iqdb"
            dbUser: "dx_iq_db_user"
            dbPassword: "<SECURE_PASSWORD>"
        ```

        - `<DX_RELEASE_NAME>`: The DX Helm release name.
        - `<DX_NAMESPACE>`: The DX deployment namespace.
        - `dbUser: "dx_iq_db_user"`: The same `dbUser`you configured in [Step 1 of Provisioning the database](#provisioning-the-database).
        - `dbPassword: "<SECURE_PASSWORD>"`: The same `dbPassword` you configured in [Step 1 of Provisioning the database](#provisioning-the-database).

    === "Using a secret"

        Reference the secret generated by your DX deployment upgrade in Step 2 of [Provisioning the database](#provisioning-the-database):

        ```yaml
        configuration:
          database:
            enabled: true
            dbHost: "<DX_RELEASE_NAME>-persistence-node-0.<DX_RELEASE_NAME>-persistence-headless-svc.<DX_NAMESPACE>.svc.cluster.local"
            dbPort: 5432
            dbName: "iqdb"
            dbCustomSecret: "<DX_RELEASE_NAME>-iq-db-secret"
        ```

        - `<DX_RELEASE_NAME>`: The DX Helm release name.
        - `<DX_NAMESPACE>`: The DX deployment namespace.

        !!! important "Same namespace required"
            This option only works when your IQ deployment is in the same Kubernetes namespace as your DX deployment. Kubernetes secrets are namespace-scoped and cannot be referenced across namespaces. If IQ is deployed in a different namespace, use the database credentials option.

2. Upgrade your IQ deployment with the custom database configuration file:

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <DX_NAMESPACE> \
      --reuse-values \
      -f custom-iq-internal-db-values.yaml
    ```

    - `<DX_NAMESPACE>`: The DX deployment namespace.
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository FQDN and path.
    - `<IQ_HELM_CHART_VERSION>`: The IQ Helm chart version.

3. Verify that the database credentials are configured based on your chosen configuration option:

    === "Using database credentials"

        Verify the ConfigMap was created:

        ```bash
        kubectl get configmap -n <DX_NAMESPACE> dx-iq-integrator
        kubectl describe configmap -n <DX_NAMESPACE> dx-iq-integrator
        ```

    === "Using a secret"

        Verify the referenced DX secret exists in the namespace:

        ```bash
        kubectl get secret -n <DX_NAMESPACE> <DX_RELEASE_NAME>-iq-db-secret
        kubectl describe secret -n <DX_NAMESPACE> <DX_RELEASE_NAME>-iq-db-secret
        ```

## Configuring an external database

Use this option to connect to an existing PostgreSQL database located outside of your DX deployment. Create a Kubernetes secret to store the credentials, and then deploy IQ to connect to it.

1. Create a Kubernetes secret to store your external database credentials:

    !!!note
        This section uses the static name `custom-external-db-credentials`. If you modify this name, you must update the `dbCustomSecret` property in later steps to match.

    ```bash
    kubectl create secret generic custom-external-db-credentials \
      --namespace <YOUR_NAMESPACE> \
      --from-literal=username=<DB_USERNAME> \
      --from-literal=password=<DB_PASSWORD>
    ```

    - `<YOUR_NAMESPACE>`: The Kubernetes namespace.
    - `<DB_USERNAME>`: The database username.
    - `<DB_PASSWORD>`: The database password.

2. Verify that the secret was created successfully:

    ```bash
    kubectl get secret custom-external-db-credentials -n <YOUR_NAMESPACE>
    kubectl describe secret custom-external-db-credentials -n <YOUR_NAMESPACE>
    ```

3. Create a custom IQ values file (for example, `custom-iq-external-db-values.yaml`) to define the external database connection settings, referencing the `custom-external-db-credentials` secret name from Step 1:

    ```yaml
    configuration:
      database:
        enabled: true
        dbHost: "<EXTERNAL_DB_HOST>"
        dbPort: 5432
        dbName: "<DB_NAME>"
        dbCustomSecret: "custom-external-db-credentials"
    ```

    - `<EXTERNAL_DB_HOST>`: The hostname or IP address of the external PostgreSQL server. For example:

        |External server|Values|
        |---------------|------|
        |AWS RDS PostgreSQL|`iq-postgres.c9akciq32.us-east-1.rds.amazonaws.com`|
        |Azure Database for PostgreSQL|`myserver.postgres.database.azure.com`|
        |Google Cloud SQL|Use Cloud SQL Auth proxy or instance IP (for example, `10.0.1.5`)|
        |Different Kubernetes cluster|The fully qualified DNS name or IP address of the PostgreSQL server accessible from the cluster network|
        |On-premises or external|The reachable hostname or IP address (for example, `postgres.company.internal` or `192.168.1.50`)|

    - `dbHost`: The actual PostgreSQL server hostname or IP.
    - `dbName`: The IQ database name.
    - `custom-external-db-credentials`: The secret name from Step 1.

4. Upgrade your IQ deployment with the custom database configuration file:

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      -f custom-iq-external-db-values.yaml
    ```

    - `<YOUR_NAMESPACE>`: The Kubernetes namespace.
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository FQDN and path.
    - `<IQ_HELM_CHART_VERSION>`: The IQ Helm chart version.

5. Upgrade your DX deployment to enable IQ:

    1. Retrieve your current DX deployment Helm chart version:

        ```bash
        helm list -n <YOUR_NAMESPACE>
        helm get all <DX_RELEASE_NAME> --namespace <YOUR_NAMESPACE>
        ```

    2. Upgrade the DX deployment with IQ database settings.

        ```bash
        helm upgrade <DX_RELEASE_NAME> \
          https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<DX_HELM_CHART_VERSION>.tgz \
          --namespace <YOUR_NAMESPACE> \
          --reuse-values \
          --set networking.dxIqService=<IQ_SERVICE_NAME> \
        ```

        - `<DX_RELEASE_NAME>`: The DX Helm release name (for example, `dx-deployment`).
        - `<DX_HELM_CHART_VERSION>`: The DX Helm chart version.
        - `<YOUR_NAMESPACE>`: The Kubernetes namespace.
        - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository FQDN and path to specified package or image.
        - `<IQ_SERVICE_NAME>`: The Kubernetes service name for the IQ deployment, which typically follows the `{{ .Release.Name }}-integrator` format (for example, if the release name is `dx-iq`, the service name is `dx-iq-integrator`).

        To find available Helm chart versions in your repository, search in the user interface or run a `curl` command. For example, in JFrog Artifactory:

        ```bash
        curl -u <USERNAME>:<TOKEN> "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
        ```

## Configuring an RTC-managed database

Use this option to automatically provision and manage a PostgreSQL database within the DX deployment using the DX RTC.

1. Create the IQ database credentials secret:

    1. Delete the existing IQ database credentials secret if it exists from a previous installation:

        ```bash
        kubectl delete secret custom-credentials-iq-db -n <YOUR_NAMESPACE> --ignore-not-found
        ```

    2. Create the new secret:

        ```bash
        kubectl create secret generic custom-credentials-iq-db \
          --namespace <YOUR_NAMESPACE> \
          --from-literal=username=<DB_USERNAME> \
          --from-literal=password=<DB_PASSWORD>
        ```

        - `<YOUR_NAMESPACE>`: The Kubernetes namespace.
        - `<DB_USERNAME>`: The database username.
        - `<DB_PASSWORD>`: The database password.

2. Verify the secret was created:

    ```bash
    kubectl get secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
    kubectl describe secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
    ```

3. Upgrade the DX deployment to enable RTC database management for IQ:

    1. Retrieve the current DX deployment Helm chart version:

        ```bash
        helm list -n <YOUR_NAMESPACE>
        helm get all <DX_RELEASE_NAME> --namespace <YOUR_NAMESPACE>
        ```

    2. Upgrade the DX deployment with the IQ database settings:

        ```bash
        helm upgrade <DX_RELEASE_NAME> \
          https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<DX_HELM_CHART_VERSION>.tgz \
          --namespace <YOUR_NAMESPACE> \
          --reuse-values \
          --set configuration.digitalAssetManagement.newDbManagement=true \
          --set networking.dxIqService=<IQ_SERVICE_NAME> \
          --set security.iq.customDbSecret=custom-credentials-iq-db
        ```

        - `<DX_RELEASE_NAME>`: The DX Helm release name (for example, `dx-deployment`).
        - `<DX_HELM_CHART_VERSION>`: The DX Helm chart version.
        - `<YOUR_NAMESPACE>`: The Kubernetes namespace.
        - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository FQDN and path to specified package or image.
        - `<IQ_SERVICE_NAME>`: The Kubernetes service name for the IQ deployment, which typically follows the `{{ .Release.Name }}-integrator` format (for example, if the IQ release name is `dx-iq`, the service name is `dx-iq-integrator`)

        To find available Helm chart versions in your repository, search in the user interface or run a `curl` command. For example, in JFrog Artifactory:

        ```bash
        curl -u <USERNAME>:<TOKEN> "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
        ```

4. Monitor the RTC logs to track database creation:

    ```bash
    kubectl logs -n <YOUR_NAMESPACE> deployment/<DX_RELEASE_NAME>-runtime-controller | grep -i "iq database"
    ```

    Output:

    ```text
    IQ database setup completed successfully.
    ```

5. Verify that the database, user, environment variables, and secrets are successfully created and configured:

    1. Confirm the database and user roles exist in the persistence node:

        ```bash
        kubectl exec -n <YOUR_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
          psql -U postgres -c "\l" | grep iq
        ```

        ```bash
        kubectl exec -n <YOUR_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
          psql -U postgres -c "\du" | grep iq
        ```

    2. Confirm the database management flags are active and the credentials secret exists:

        ```bash
        kubectl exec -n <YOUR_NAMESPACE> deployment/<DX_RELEASE_NAME>-runtime-controller -- env | grep -E "IQ_|NEW_DB"
        kubectl get secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
        ```

6. Prepare the `custom-iq-rtc-db-values.yaml` file with the RTC-managed database configuration:

    !!! important
        The `dbName` must be `iqdb`. This is the fixed name that the RTC creates. Do not use a custom name.

    ```yaml
    configuration:
      database:
        enabled: true
        dbHost: "<DX_RELEASE_NAME>-persistence-node-0.<DX_RELEASE_NAME>-persistence-headless-svc.<YOUR_NAMESPACE>.svc.cluster.local"
        dbPort: 5432
        dbName: "iqdb"
        dbCustomSecret: "custom-credentials-iq-db"
    ```

7. Upgrade the IQ deployment with the RTC-managed database configuration:

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      -f custom-iq-rtc-db-values.yaml
    ```

    - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository FQDN and path to specified package or image.
    - `<IQ_HELM_CHART_VERSION>`: The IQ Helm chart version.
    - `<YOUR_NAMESPACE>`: The Kubernetes namespace.

## Next steps

After configuring your database:

1. Verify that the [IQ pod can connect to the database](validation.md#verifying-database-connectivity) successfully.
2. Configure [IQ Integrator authentication for LiteLLM access](prepare-litellm-access.md).
3. Run [regular backups](backup-restore.md) to ensure data recovery if a failure occurs.

???+ info "Related information"
    - [Backing up and restoring data](backup-restore.md)
    - [IQ environment variables](environment-variables.md)
    - [Preparing LiteLLM access](prepare-litellm-access.md)
    - [Troubleshooting - Connection failures](../troubleshooting.md#connection-failures)
    - [Validating the deployment](validation.md#verifying-database-connectivity)
