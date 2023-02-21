# Troubleshooting DXClient

Logs can be enabled and disabled as desired by DX developers and administrators through configuration options in the config.json file of DXClient. The log files can be viewed inside the logs folder within the DXClient installation folder.

## Enable or disable logs

-   **Enable logger**

    The DXClient tool Logs can be enabled by setting the parameter `enableLogger: true` in the config.json file.

-   **Disable logger**

    The DXClient tool Logs can be disabled by setting the parameter `enableLogger: false` in the config.json file.

## Troubleshooting DXConnect

To enable log tracing in DXConnect you will need to access ConfigWizard admin console. Once logged in follow the below steps:

1. In the left navigation, expand 'Troubleshooting'.
2. Under Troubleshooting, Click on 'Logs and trace'.
3. Navigate to Logging and tracing > server1 > Diagnostic trace service.
4. Select `Runtime` tab.
5. Navigate to `Change log detail levels`.
6. Add `com.hcl.dxconnect.*=all` to the list. (There is a possibility of a server restart when this is configured.)
7. You may access the `SystemOut.log` from `/opt/HCL/Appserver/profiles/cw_profile/server1/logs` to trace dxconnect logs.
    
!!!note 
    Refer [Configure Core Sidecar Logging](https://opensource.hcltechsw.com/digital-experience/CF207/deployment/install/container/helm_deployment/preparation/optional_tasks/optional_core_sidecar_log/) on how to configure to fetch logs from Core Server in containerised environments.


???+ info "Related information"
    -   [DXClient](../dxclient/index.md)
