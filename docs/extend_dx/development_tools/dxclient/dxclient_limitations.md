# Limitations

This topic describes the limitations of the DXClient tool.

- Hybrid Deployment Hostname Management
    When using hybrid deployments (where on-premises DX Core and Kubernetes DX Services use different hostnames), you must specify the appropriate hostname based on the specific DXClient command:

    - For DAM-related tasks (like `manage-dam-staging`): Use the Kubernetes hostname
    - For DX Core tasks (like `deploy-portlet`): Use the on-premises DX Core hostname

- Bin Folder Permissions
    For DXClient v1.26.0 and above (since CF217), you must set full access permissions to the bin folder to properly execute DXClient commands. See the installation instructions for details on setting appropriate permissions.

- File Size Limitation**
    The maximum input file size that DXClient can handle is 256 MB. Files larger than this limit will not be processed correctly.

## Additional notes

- The following parameters have been deprecated or removed:

    - `-dxConnectHostname` (deprecated since CF202, removed in CF210). Use`-hostname` instead.
    - `-targetServerHostname`. Use `-targetHostname` instead.
    - `-targetServerPort`. Use `-targetDxConnectPort` instead.
    - `-targetServerUsername`. Use `-targetDxConnectUsername` instead.
    - `-targetServerPassword`. Use `-targetDxConnectPassword` instead.
    - `-targetServerProfileName`. Use `-targetDxProfileName` instead.

- When deploying large CICD artifacts to Kubernetes environments, you may encounter connection timeouts. If you receive "failure" or "request pending" messages:

    - Check your target server first to verify if the deployment actually succeeded.
    - For "request pending" messages, note the `requestId` to check status later.
    - See [Troubleshooting known issues](troubleshooting_dxclient.md#troubleshooting-known-issues) for resolution steps.

- As of CF213, the property `DXCONNECT_MAX_MEMORY_SIZE_MB` in DXC_ConfigSettings has been removed. For more information, refer to [DXC_ConfigSettings](dxconnect.md#resource-environment-provider-property-for-dxconnect).