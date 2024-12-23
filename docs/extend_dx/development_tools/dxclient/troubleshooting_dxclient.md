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
7. You may access the `SystemOut.log` & trace logs files under `/opt/HCL/AppServer/profiles/cw_profile/logs/server1` to trace dxconnect logs.
    
!!!note 
    Refer [Configure Core Sidecar Logging](https://opensource.hcltechsw.com/digital-experience/CF207/deployment/install/container/helm_deployment/preparation/optional_tasks/optional_core_sidecar_log/) on how to configure to fetch logs from Core Server in containerised environments.

???+ info "Related information"
    -   [DXClient](../dxclient/index.md)

## Troubleshooting for some known Issues

- In case of failure in running tasks due timeout issues in kubernetes environment, change the load balancer time out setting from 60 seconds to as per your requirement.

## HCLSoftware U learning materials

To learn how to monitor, troubleshoot, and contact Support about issues you encounter with DX, go to [Monitoring and Troubleshooting](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3436){target="_blank”}. You can try it out using the [Monitoring and Troubleshooting Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab.pdf){target="_blank”} and corresponding [Monitoring and Troubleshooting Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab_Resources.zip){target="_blank”}.
