# Preparing the database

<!--Add introduction-->

### Step 1: Configure `values.yaml` for Persistence

The IQ backend server requires a PostgreSQL database for session persistence. You can configure this using either an external database or a Runtime Controller (RTC)-managed database.

#### Scenario A: Using an External (Non-RTC) Database

If you have an existing PostgreSQL database outside of the DX deployment, configure the following values:

1. **Create a Kubernetes secret for database credentials:**

    ```bash
    kubectl create secret generic custom-iq-db-credentials \
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
    kubectl get secret custom-iq-db-credentials -n <YOUR_NAMESPACE>
    kubectl describe secret custom-iq-db-credentials -n <YOUR_NAMESPACE>
    ```

3. **Prepare your `custom-iq-values.yaml` with database configuration:**

    ```yaml
    configuration:
      database:
        enabled: true
        dbHost: "your-postgres-server.example.com"
        dbPort: 5432
        dbName: "iqdb"
        dbCustomSecret: "custom-iq-db-credentials"
    ```

#### Scenario B: Using a Runtime Controller (RTC)-Managed Database

The Runtime Controller can automatically provision and manage a PostgreSQL database for IQ within your DX deployment.

1. **Create the IQ database credentials secret:**

    ```bash
    kubectl create secret generic custom-credentials-iq-db \
      --namespace <YOUR_NAMESPACE> \
      --from-literal=username=dx_iq_db_user \
      --from-literal=password=<SECURE_PASSWORD>
    ```

    Replace:
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace
    - `<SECURE_PASSWORD>` with a secure password of your choice

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

    Upgrade the DX deployment with IQ database settings:

    ```bash
    helm upgrade <DX_RELEASE_NAME> \
      https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-deployment/<HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --set configuration.digitalAssetManagement.newDbManagement=true \
      --set networking.dxIqService=dx-ai-integrator \
      --set security.iq.customDbSecret=custom-credentials-iq-db
    ```

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name (e.g., `dx-deployment`)
    - `<HELM_CHART_VERSION>` with your DX Helm chart version
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace

    !!! note
        To find available Helm chart versions in Artifactory:
        ```bash
        curl -u username:token "https://artifactory.cwp.pnp-hcl.com/artifactory/api/storage/quintana-helm/hcl-dx-deployment/"
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
        The `dbName` must be `iqdb` — this is the hardcoded name RTC creates. Do not use a custom name.

    ```yaml
    configuration:
      database:
        enabled: true
        dbHost: "<DX_RELEASE_NAME>-persistence-node-0.<DX_RELEASE_NAME>-persistence-headless-svc.<YOUR_NAMESPACE>.svc.cluster.local"
        dbPort: 5432
        dbName: "iqdb"
        dbCustomSecret: "custom-credentials-iq-db"
    ```

    Replace:
    - `<DX_RELEASE_NAME>` with your DX Helm release name
    - `<YOUR_NAMESPACE>` with your Kubernetes namespace

### Step 2: Configure License Management

The IQ backend server requires a valid license key. To rotate or update the license:

```bash
helm upgrade <IQ_RELEASE_NAME> \
  https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-dx-iq/<HELM_CHART_VERSION>.tgz \
  --namespace <YOUR_NAMESPACE> \
  --reuse-values \
  --set configuration.license.key="<NEW_LICENSE_KEY>"
```

Replace:
- `<IQ_RELEASE_NAME>` with your IQ Helm release name (e.g., `dx-ai`)
- `<HELM_CHART_VERSION>` with the IQ Helm chart version
- `<YOUR_NAMESPACE>` with your Kubernetes namespace
- `<NEW_LICENSE_KEY>` with your new license key
