# Preparing the database

**Previous step**: [Deploying services](deploy-services.md)

This section guides you through configuring persistent database storage for the IQ Integrator. For production deployments, a PostgreSQL database is **strongly recommended** to maintain conversation state and session memory across pod restarts and deployments. You have three configuration options for persistent storage, plus a fallback:

- **Option A: Internal Database**: Let your DX Persistence Node automatically provision a PostgreSQL database for IQ (simplest for Kubernetes-only deployments)
- **Option B: External Database**: Use an existing PostgreSQL instance outside your DX deployment (cloud-managed, on-premises, or separate Kubernetes cluster)
- **Option C: RTC-Managed Database**: Let the DX Runtime Controller automatically provision and manage a PostgreSQL database within your DX deployment (advanced provisioning)
- **SQLite (development only)**: A fallback in-memory database suitable only for testing (all sessions lost on pod restart)

## Configure `values.yaml` for Persistence

The IQ backend server works best with a PostgreSQL database for session persistence. Choose one of the three persistent options below, or use SQLite for testing only.

### Database Benefits

Configuring PostgreSQL provides:
- **Conversation Persistence**: User conversations survive pod restarts
- **Session Management**: IQ session state is preserved across restarts
- **Production Readiness**: SQLite fallback is development-only

!!! warning "Fallback to SQLite Without Persistent Database"
    
    If you do not configure a PostgreSQL database using one of the three options below, the IQ Integrator falls back to an in-memory SQLite state management system. While SQLite preserves conversation history during normal operation, **all session state is lost when the IQ Integrator pod restarts**. This approach is suitable only for development or testing environments. For production deployments, configuring persistent PostgreSQL is strongly recommended.

#### Option A: Using an Internal Database

The Persistence Node in your DX deployment can automatically provision a PostgreSQL database for IQ. Deploy DX first to set up the database, then deploy IQ as a separate Helm release pointing to that internal database.

**Prerequisites**: Your DX deployment (`<DX_RELEASE_NAME>`) is already running in namespace `<DX_NAMESPACE>` with a Persistence Node.

!!! note "Check if IQ Database Already Exists"
    
    If your DX deployment was recently provisioned or upgraded with IQ database credentials and networking config, the `iqdb` database and user may already exist. **Skip Steps 1-3 below if both already exist** and jump directly to [Deploy IQ with Database Configuration](#deploy-iq-with-database-configuration).
    
    **Check for existing IQ database:**
    ```bash
    kubectl exec -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      psql -U postgres -c "\l" | grep iq
    ```
    
    **Check for existing IQ user:**
    ```bash
    kubectl exec -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      psql -U postgres -c "\du" | grep -i iq
    ```
    
    If both the database (`iqdb`) and a user (e.g., `dx_iq_db_user`) exist, skip to the [Deploy IQ with Database Configuration](#deploy-iq-with-database-configuration) section below.

1. **Create or update a custom DX values file for IQ database provisioning:**

    Create a file (e.g., `custom-dx-iq-db-setup.yaml`):

    ```yaml
    security:
      iq:
        dbUser: "dx_iq_db_user"
        dbPassword: "<SECURE_PASSWORD>"
    
    networking:
      dxIqService: "<IQ_RELEASE_NAME>-integrator"
    ```

    Replace:
    - `<SECURE_PASSWORD>` with a secure password for the IQ database user
    - `<IQ_RELEASE_NAME>` with your IQ Helm release name (e.g., `dx-iq`). The service name is typically `<IQ_RELEASE_NAME>-integrator`.

    !!! important
        Setting `networking.dxIqService` enables the Persistence Node to pass the `IQ_DB_USER` and `IQ_DB_PASSWORD` environment variables to the PostgreSQL initialization script. This is required for automatic database and user creation.

2. **Upgrade your DX deployment to enable IQ database provisioning:**

    ```bash
    helm upgrade <DX_RELEASE_NAME> \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<DX_HELM_CHART_VERSION>.tgz \
      --namespace <DX_NAMESPACE> \
      --reuse-values \
      -f custom-dx-iq-db-setup.yaml
    ```

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name
    - `<DX_NAMESPACE>` with your DX deployment namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your repository full qualified domain name and path
    - `<DX_HELM_CHART_VERSION>` with your DX Helm chart version

    !!! note
        To find available Helm chart versions in your Repository, search in the user interface or run a curl command. For example, in JFrog Artifactory:
        ```bash
        curl -u username:token "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
        ```

3. **Wait for the Persistence Node to initialize the IQ database and user:**

    Monitor the Persistence Node logs:

    ```bash
    kubectl logs -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 | grep -i "iq"
    ```

    Wait until you see messages like:

    ```
    Creating IQ user "dx_iq_db_user"...
    Creating IQ database "iqdb"...
    ```

    Then verify both the database and user were created:

    ```bash
    kubectl exec -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      psql -U postgres -c "\du" | grep dx_iq_db_user
    ```

    You should see the IQ user listed in the output.

##### Deploy IQ with Database Configuration

4. **Prepare your IQ deployment values:**

    Create a custom IQ values file (e.g., `custom-iq-internal-db-values.yaml`). You have two ways to supply the database credentials:

    === "Option 4a: Use dbUser and dbPassword"

        Supply the credentials directly using the same values you configured in your DX deployment (Step 1):

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

        Replace:
        - `<DX_RELEASE_NAME>` with your DX Helm release name
        - `<DX_NAMESPACE>` with your DX deployment namespace
        - `<SECURE_PASSWORD>` with the same password you configured in Step 1

        !!! important
            The `dbUser` and `dbPassword` **must match exactly** the `security.iq.dbUser` and `security.iq.dbPassword` values you configured in your DX deployment (Step 1).

    === "Option 4b: Use dbCustomSecret (recommended for production)"

        Reference the secret that was automatically created by your DX deployment upgrade in Step 2. No credentials need to be repeated here:

        ```yaml
        configuration:
          database:
            enabled: true
            dbHost: "<DX_RELEASE_NAME>-persistence-node-0.<DX_RELEASE_NAME>-persistence-headless-svc.<DX_NAMESPACE>.svc.cluster.local"
            dbPort: 5432
            dbName: "iqdb"
            dbCustomSecret: "<DX_RELEASE_NAME>-iq-db-secret"
        ```

        Replace:
        - `<DX_RELEASE_NAME>` with your DX Helm release name
        - `<DX_NAMESPACE>` with your DX deployment namespace

        !!! note
            The secret `<DX_RELEASE_NAME>-iq-db-secret` was automatically created by the DX deployment Helm chart when you ran the upgrade in Step 2. It contains the `username` and `password` keys set from `security.iq.dbUser` and `security.iq.dbPassword`.

        !!! important "Same namespace required"
            This option only works when your IQ deployment is in the **same Kubernetes namespace** as your DX deployment. Kubernetes secrets are namespace-scoped and cannot be referenced across namespaces. If IQ is deployed in a different namespace, use **Option 4a** and supply the credentials directly instead.

5. **Upgrade your IQ deployment with database configuration:**

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <DX_NAMESPACE> \
      --reuse-values \
      -f custom-iq-internal-db-values.yaml
    ```

    Replace:
    - `<DX_NAMESPACE>` with your DX deployment namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your repository full qualified domain name and path
    - `<IQ_HELM_CHART_VERSION>` with your IQ Helm chart version

6. **Verify database credentials are configured:**

    === "If you used Option 4a (dbUser + dbPassword)"

        The IQ chart stores these credentials in a ConfigMap. Verify the ConfigMap was created:

        ```bash
        kubectl get configmap -n <DX_NAMESPACE> dx-iq-integrator
        kubectl describe configmap -n <DX_NAMESPACE> dx-iq-integrator
        ```

    === "If you used Option 4b (dbCustomSecret)"

        Verify the referenced DX secret exists in the namespace:

        ```bash
        kubectl get secret -n <DX_NAMESPACE> <DX_RELEASE_NAME>-iq-db-secret
        kubectl describe secret -n <DX_NAMESPACE> <DX_RELEASE_NAME>-iq-db-secret
        ```

---

#### Option B: Using an External Database

If you have an existing PostgreSQL database outside of the DX deployment, configure the following values:

1. **Create a Kubernetes secret for database credentials:**

    ```bash
    kubectl create secret generic custom-external-db-credentials \
      --namespace <YOUR_NAMESPACE> \
      --from-literal=username=<DB_USERNAME> \
      --from-literal=password=<DB_PASSWORD>
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<DB_USERNAME>` with your database username
    - `<DB_PASSWORD>` with your database password

2. **Verify the secret was created:**

    ```bash
    kubectl get secret custom-external-db-credentials -n <YOUR_NAMESPACE>
    kubectl describe secret custom-external-db-credentials -n <YOUR_NAMESPACE>
    ```

3. **Prepare your `custom-iq-external-db-values.yaml` with database configuration:**

    ```yaml
    configuration:
      database:
        enabled: true
        dbHost: "iq-postgres.c9akciq32.us-east-1.rds.amazonaws.com"
        dbPort: 5432
        dbName: "iqdb"
        dbCustomSecret: "custom-external-db-credentials"
    ```

    **Examples for different deployment scenarios:**

    - **AWS RDS PostgreSQL**: `iq-postgres.c9akciq32.us-east-1.rds.amazonaws.com`
    - **Azure Database for PostgreSQL**: `myserver.postgres.database.azure.com`
    - **Google Cloud SQL**: Use Cloud SQL Auth proxy or instance IP (e.g., `10.0.1.5`)
    - **Different Kubernetes cluster**: Use the fully qualified DNS name or IP address of the PostgreSQL server accessible from your current cluster's network
    - **On-premises/external**: Use the hostname or IP address reachable from your Kubernetes cluster (e.g., `postgres.company.internal` or `192.168.1.50`)

    Replace:
    - `dbHost` with your actual PostgreSQL server hostname or IP
    - `dbName` with your IQ database name
    - `custom-external-db-credentials` with your secret name from step 1

4. **Upgrade your IQ deployment with database configuration:**

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      -f custom-iq-external-db-values.yaml
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your repository full qualified domain name and path
    - `<IQ_HELM_CHART_VERSION>` with your IQ Helm chart version

5. **Upgrade your DX deployment to enable IQ and see it in DX portal:**

    Get your current DX deployment Helm chart version:

    ```bash
    helm list -n <YOUR_NAMESPACE>
    helm get all <DX_RELEASE_NAME> --namespace <YOUR_NAMESPACE>
    ```

    Determine the Kubernetes service name for your IQ deployment. The name typically follows the `{{ .Release.Name }}-integrator` format. For example, if the release name is `dx-iq`, the service name is `dx-iq-integrator`.

    Upgrade the DX deployment with IQ database settings.

    ```bash
    helm upgrade <DX_RELEASE_NAME> \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<DX_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --set networking.dxIqService=dx-iq-integrator \
    ```

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name (e.g., `dx-deployment`)
    - `<DX_HELM_CHART_VERSION>` with your DX Helm chart version
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your Repository full qualified domain name and path to specified package or image.

    !!! note
        To find available Helm chart versions in your Repository, search in the user interface or run a curl command. For example, in JFrog Artifactory:
        ```bash
        curl -u username:token "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
        ```

---

#### Option C: Using a Runtime Controller (RTC)-Managed Database

The DX Runtime Controller can automatically provision and manage a PostgreSQL database for IQ within your DX deployment.

1. **Create the IQ database credentials secret:**

    If the secret already exists from a previous installation, delete it first:

    ```bash
    kubectl delete secret custom-credentials-iq-db -n <YOUR_NAMESPACE> --ignore-not-found
    ```

    Then create it:

    ```bash
    kubectl create secret generic custom-credentials-iq-db \
      --namespace <YOUR_NAMESPACE> \
      --from-literal=username=<DB_USERNAME> \
      --from-literal=password=<DB_PASSWORD>
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<DB_USERNAME>` with your database username
    - `<DB_PASSWORD>` with your database password

2. **Verify the secret was created:**

    ```bash
    kubectl get secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
    kubectl describe secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
    ```

3. **Upgrade your DX deployment to enable RTC database management for IQ:**

    Get your current DX deployment Helm chart version:

    ```bash
    helm list -n <YOUR_NAMESPACE>
    helm get all <DX_RELEASE_NAME> --namespace <YOUR_NAMESPACE>
    ```

    Determine the Kubernetes service name for your IQ deployment. The name typically follows the `{{ .Release.Name }}-integrator` format. For example, if the release name is `dx-iq`, the service name is `dx-iq-integrator`.

    Upgrade the DX deployment with IQ database settings.

    ```bash
    helm upgrade <DX_RELEASE_NAME> \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<DX_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --set configuration.digitalAssetManagement.newDbManagement=true \
      --set networking.dxIqService=dx-iq-integrator \
      --set security.iq.customDbSecret=custom-credentials-iq-db
    ```

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name (e.g., `dx-deployment`)
    - `<DX_HELM_CHART_VERSION>` with your DX Helm chart version
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your Repository full qualified domain name and path to specified package or image.

    !!! note
        To find available Helm chart versions in your Repository, search in the user interface or run a curl command. For example, in JFrog Artifactory:
        ```bash
        curl -u username:token "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
        ```

4. **Wait for RTC to create the IQ database:**

    Monitor the Runtime Controller logs:

    ```bash
    kubectl logs -n <YOUR_NAMESPACE> deployment/<DX_RELEASE_NAME>-runtime-controller | grep -i "iq database"
    ```

    Wait until you see:

    ```
    IQ database setup completed successfully.
    ```

5. **Verify the database and user were created:**

    ```bash
    kubectl exec -n <YOUR_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      psql -U postgres -c "\l" | grep iq
    ```

    ```bash
    kubectl exec -n <YOUR_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      psql -U postgres -c "\du" | grep iq
    ```

    Verify environment variables and secrets:

    ```bash
    kubectl exec -n <YOUR_NAMESPACE> deployment/<DX_RELEASE_NAME>-runtime-controller -- env | grep -E "IQ_|NEW_DB"
    kubectl get secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
    ```

6. **Prepare your `custom-iq-rtc-db-values.yaml` with RTC-managed database configuration:**

    !!! important
        The `dbName` must be `iqdb` — this is the fixed name RTC creates. Do not use a custom name.

    ```yaml
    configuration:
      database:
        enabled: true
        dbHost: "<DX_RELEASE_NAME>-persistence-node-0.<DX_RELEASE_NAME>-persistence-headless-svc.<YOUR_NAMESPACE>.svc.cluster.local"
        dbPort: 5432
        dbName: "iqdb"
        dbCustomSecret: "custom-credentials-iq-db"
    ```

7. **Upgrade your IQ deployment with RTC-managed database configuration:**

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      -f custom-iq-rtc-db-values.yaml
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your repository full qualified domain name and path
    - `<IQ_HELM_CHART_VERSION>` with your IQ Helm chart version

## Validation

After configuring your database, follow the [Validating the IQ backend deployment](validation.md) guide to verify the IQ pod can connect to the database successfully.

Pay special attention to [Step 3: Verify Database Connection](validation.md#step-3-verify-database-connection) to confirm the database is reachable and IQ can initialize its schema.
