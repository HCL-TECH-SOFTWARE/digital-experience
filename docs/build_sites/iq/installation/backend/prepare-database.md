# Preparing the database

**Previous step**: [Deploying services](deploy-services.md)  
**Next step**: [Preparing the license and deployment key](prepare-license.md) (if using Deployment Key for automated LiteLLM key management)

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
- **Deployment Key Reliability**: Access tokens are stored and reused (no redundant KMS calls on pod restart)
- **Multi-Pod Safety**: Row locking prevents race conditions in multi-pod deployments
- **Production Readiness**: SQLite fallback is development-only

!!! warning "Fallback to SQLite Without Persistent Database"
    
    If you do not configure a PostgreSQL database using one of the three options below, the IQ Integrator falls back to an in-memory SQLite state management system. While SQLite preserves conversation history during normal operation, **all session state is lost when the IQ Integrator pod restarts**. This approach is suitable only for development or testing environments. For production deployments, configuring persistent PostgreSQL is strongly recommended.

#### Option A: Using an Internal Database

The Persistence Node in your DX deployment can automatically provision a PostgreSQL database for IQ. Deploy DX first to set up the database, then deploy IQ as a separate Helm release pointing to that internal database.

**Prerequisites**: Your DX deployment (`<DX_RELEASE_NAME>`) is already running in namespace `<DX_NAMESPACE>` with a Persistence Node.

1. **Configure your DX deployment to provision the IQ database:**

    Create or update a custom DX values file (e.g., `custom-dx-iq-db-setup.yaml`):

    ```yaml
    security:
      iq:
        dbUser: "<DB_USERNAME>"
        dbPassword: "<DB_PASSWORD>"
    ```

    Replace:
    - `<DB_USERNAME>` with your desired database username
    - `<DB_PASSWORD>` with a secure password

    !!! important
        Unlike Options B and C where you manually create the secret beforehand, Option A uses Helm to automatically create the IQ database secret from the `dbUser` and `dbPassword` values you provide here. This secret will be generated later during IQ deployment (Step 6).

2. **Upgrade your DX deployment to set up the IQ database:**

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
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your repository fully qualified domain name and path
    - `<DX_HELM_CHART_VERSION>` with your DX Helm chart version

    !!! note
        To find available Helm chart versions in your Repository, search in the user interface or run a curl command. For example, in JFrog Artifactory:
        ```bash
        curl -u username:token "https://<YOUR_REPOSITORY_FQDN_AND_PATH>/"
        ```

3. **Wait for the Persistence Node to initialize the IQ database:**

    Monitor the Persistence Node logs:

    ```bash
    kubectl logs -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 | grep -i "iq"
    ```

    Wait until you see:

    ```
    Creating IQ user "<DB_USERNAME>"...
    Creating IQ database "iqdb"...
    ```

    where `<DB_USERNAME>` matches the `dbUser` value you configured in step 1. The database name `iqdb` is always fixed.

4. **Verify the database and user were created:**

    ```bash
    kubectl exec -n <DX_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node -- \
      psql -U postgres -c "\l" | grep iq
    ```

    You should see the `iqdb` database listed in the output.

5. **Prepare your IQ deployment values:**

    Create a custom IQ values file (e.g., `custom-iq-values.yaml`):

    ```yaml
    configuration:
      database:
        enabled: true
        dbHost: "<DX_RELEASE_NAME>-persistence-node-0.<DX_RELEASE_NAME>-persistence-headless-svc.<DX_NAMESPACE>.svc.cluster.local"
        dbPort: 5432
        dbName: "iqdb"
        dbUser: "<DB_USERNAME>"
        dbPassword: "<DB_PASSWORD>"
      
      dx:
        releaseName: "<DX_RELEASE_NAME>"
        externalHost: "<DX_EXTERNAL_FQDN>"
        port: 443
        ssl: true
    ```

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name
    - `<DX_NAMESPACE>` with your DX deployment namespace
    - `<DB_USERNAME>` with the database username from step 1
    - `<DB_PASSWORD>` with the database password from step 1
    - `<DX_EXTERNAL_FQDN>` with your DX external hostname/FQDN (e.g., `dx.example.com`). This is used by the LLM for generating URLs in responses.

    !!! important
        The credentials in this IQ values file must match the database username and password that were provisioned in your DX deployment (Step 1).

6. **Upgrade your IQ deployment with database configuration:**

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <DX_NAMESPACE> \
      -f custom-iq-values.yaml
    ```

    Replace:
    - `<DX_NAMESPACE>` with your DX deployment namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your repository fully qualified domain name and path
    - `<IQ_HELM_CHART_VERSION>` with your IQ Helm chart version

7. **Verify the IQ secret was created:**

    ```bash
    kubectl get secret -n <DX_NAMESPACE> dx-iq-iq-db-secret
    kubectl describe secret -n <DX_NAMESPACE> dx-iq-iq-db-secret
    ```

    The Helm chart automatically creates this secret from the credentials in your IQ `values.yaml`.

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

3. **Prepare your `custom-iq-values.yaml` with database configuration:**

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
      -f custom-iq-values.yaml
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your repository fully qualified domain name and path
    - `<IQ_HELM_CHART_VERSION>` with your IQ Helm chart version

---

#### Option C: Using a Runtime Controller (RTC)-Managed Database

The DX Runtime Controller can automatically provision and manage a PostgreSQL database for IQ within your DX deployment.

1. **Create the IQ database credentials secret:**

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
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --set configuration.digitalAssetManagement.newDbManagement=true \
      --set networking.dxIqService=dx-iq-integrator \
      --set security.iq.customDbSecret=custom-credentials-iq-db
    ```

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name (e.g., `dx-deployment`)
    - `<HELM_CHART_VERSION>` with your DX Helm chart version
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your Repository fully qualified domain name and path to specified package or image.

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

    Verify environment variables and secrets:

    ```bash
    kubectl exec -n <YOUR_NAMESPACE> deployment/<DX_RELEASE_NAME>-runtime-controller -- env | grep -E "IQ_|NEW_DB"
    kubectl get secret custom-credentials-iq-db -n <YOUR_NAMESPACE>
    ```

6. **Prepare your `custom-iq-values.yaml` with RTC-managed database configuration:**

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
      -f custom-iq-values.yaml
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>` with your repository fully qualified domain name and path
    - `<IQ_HELM_CHART_VERSION>` with your IQ Helm chart version

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace

## Validation

After configuring your database, follow the [Validating the IQ backend deployment](validation.md) guide to verify the IQ pod can connect to the database successfully.

Pay special attention to [Step 3: Verify Database Connection](validation.md#step-3-verify-database-connection) to confirm the database is reachable and IQ can initialize its schema.
