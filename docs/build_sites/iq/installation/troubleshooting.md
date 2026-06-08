# Troubleshooting

This section covers diagnostic workflows to isolate installation failures, service errors, and network issues across the infrastructure. Use these steps to identify and resolve root causes.

If validation fails, use this table to isolate the cause:

| Issue | Possible cause | Solution |
|-------|----------------|----------|
| Pods not starting | Image pull errors | Verify image tags and repository access. |
| Database connection fails | Incorrect credentials or host | Verify database secret and configuration in [Preparing the database](prepare-database.md). |
| WebSocket errors | Network policy restrictions | Check Kubernetes network policies. |
| Model Context Protocol (MCP) integration issues | Web Content Manager (WCM) or Digital Asset Management (DAM) not enabled | Verify `mcpServer.enableWcm` and `mcpServer.enableDam` settings in Helm values. |
| No AI responses | LiteLLM configuration issue | Check `LITELLM_API_KEY` and `LITELLM_URL` in [Deploying services - Installing the IQ backend server](deploy-services.md#installing-the-iq-backend-server). |

To inspect pod configurations and system logs:

```bash
kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-integrator --tail=200
kubectl describe pod -n <YOUR_NAMESPACE> -l app=dx-iq-integrator
```

## Troubleshooting connection failures

If you encounter errors such as `Connection refused` or `Password authentication failed` while [verifying your database connectivity](./validation.md#verifying-database-connectivity), the IQ Integrator cannot reach the database. Use the verification steps for your database type to locate the root cause.

### Internal database

Check the persistence node logs to confirm the database and user were created automatically:

```bash
kubectl logs -n <YOUR_NAMESPACE> <DX_RELEASE_NAME>-persistence-node-0 -c persistence-node | grep -i "iq"
```

Expected output:

```
Creating IQ user "dx_iq_db_user"...
Creating IQ database "iqdb"...
```

If the `security.iq.dbPassword` parameter was missing during the deployment upgrade, the log shows this warning:

```text
WARNING: No password specified for "dx_iq_db_user". Skipping IQ user and database creation.
```

### External database

Verify network connectivity from within the cluster to your external database instance. The correct tool, flags, and command structure depend entirely on your database type and network security configuration. Adjust the connection parameters in this sample command to match your specific database engine:

```bash
kubectl run pg-test --rm -it --image=postgres:16 --restart=Never -n <YOUR_NAMESPACE> -- \
  psql "host=<DB_HOST> port=5432 dbname=iqdb user=<DB_USERNAME> password=<DB_PASSWORD> sslmode=require"
```

### Runtime Controller (RTC)-managed database

Check the Runtime Controller logs to confirm the automatic provisioning completed successfully:

```bash
kubectl logs -n <YOUR_NAMESPACE> deployment/<DX_RELEASE_NAME>-runtime-controller | grep -i "iq database"
```

Expected output:

```text
IQ database setup completed successfully.
```

If the logs show `IQ database setup failed.`, verify that the `custom-credentials-iq-db` secret exists in the namespace and that `security.iq.customDbSecret` was defined correctly during deployment.

## Enabling server-side logging and tracing

To isolate deployment issues, enable debug logs for the IQ Integrator and MCP Server. Comparing timestamps across both logs helps pinpoint where processing failures occur.

1. Update the `logging` section in your `custom-iq-debug-values.yaml` file:

    ```yaml
    logging:
      integrator:
        level:
          - "api:server-v1:*=debug"  # Change back to "info" when done
      mcpServer:
        level:
          - "api:server-v1:*=debug"  # Change back to "info" when done
    ```

    !!! warning
        Debug logging produces high-volume output. Only use it while investigating an active issue, then revert the level to `info`.

2. Apply the updated settings:

    ```bash
    helm upgrade dx-iq \
      https://<YOUR_REPOSITORY_FQDN_AND_PATH>/<IQ_HELM_CHART_VERSION>.tgz \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --values custom-iq-debug-values.yaml
    ```

    - `<IQ_HELM_CHART_VERSION>`: The Helm chart version (for example, `hcl-dx-iq-v1.0.0_20260518-2104.tgz`).
    - `<YOUR_NAMESPACE>`: The Kubernetes namespace.
    - `<YOUR_REPOSITORY_FQDN_AND_PATH>`: The repository fully qualified domain name (FQDN) and chart path.

3. Reproduce the issue, then pull the logs from both services:

    ```bash
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-integrator --tail=200
    kubectl logs -n <YOUR_NAMESPACE> deployment/dx-iq-mcp-server --tail=200
    ```

## Contacting HCL Support

If you cannot resolve the issue, open a ticket through the [HCL Support portal](https://support.hcl-software.com/csm){target="_blank"}.

!!! tip
    Collect your Helm deployment values for both your HCL Digital Experience (DX) and IQ releases before opening a ticket. Support engineers require both datasets to diagnose configuration issues effectively.

Collect your DX and IQ deployment values:

```bash
helm get values <DX_RELEASE_NAME> --namespace <YOUR_NAMESPACE>
helm get values <IQ_RELEASE_NAME> --namespace <YOUR_NAMESPACE>
```

- `<DX_RELEASE_NAME>`: The DX Helm release name (for example, `dx-deployment`).
- `<IQ_RELEASE_NAME>`: The IQ Helm release name (for example, `dx-iq`).

!!! warning "Sensitive values"
    The output might contain passwords and secrets. Review and redact all sensitive credentials before sharing the data.

If you are [using an external database](prepare-database.md#configuring-an-external-database), include these additional connectivity details:

- Database host and port (for example, `iq-postgres.c9akciq32.us-east-1.rds.amazonaws.com:5432`).
- Database name (for example, `iqdb`).
- Whether TLS is enabled (`dbTlsEnabled: true` or `false`).
- Network reachability confirmation, such as the output of this connection test:

    ```bash
    kubectl run -it --rm debug --image=postgres:15 --restart=Never -n <YOUR_NAMESPACE> -- \
      psql "host=<DB_HOST> port=<DB_PORT> dbname=<DB_NAME> user=<DB_USER> sslmode=require" -c "\conninfo"
    ```

- Relevant database connection error segments from the IQ Integrator pod logs.

???+ info "Related information"
    - [Deploying services](deploy-services.md)
    - [Preparing the database](prepare-database.md)
    - [Validating the deployment](validation.md)
    - [HCL Support portal](https://support.hcl-software.com/csm){target="_blank"}
