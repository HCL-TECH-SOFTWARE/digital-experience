# Running DX Core configuration tasks

This topic describes how to run manual Core configuration tasks on your HCL Digital Experience (DX) 9.5 CF197 and later container deployments.

In an [HCL DX 9.5 Container deployment using Helm](../../install/container/helm_deployment/overview.md), some DX 9.5 Core configuration tasks such as change of context root are now performed using the Helm upgrade route. However, other tasks such as database migration are performed using a ConfigEngine task, as they would be in an on-premise or hybrid environment.

## Running a ConfigEngine task

Refer to the following steps to run a ConfigEngine task:

1. Open a shell on a DX Core pod.

    The following example instructions use pod ‘0’ as it should always be available:

    ```
    kubectl exec -it -n <namespace> <deployment-name>-core-0 -c core -- /bin/bash
    ```

2. Run the ConfigEngine command using the `containerConfigEngine.sh` wrapper script. This script pauses the Kubernetes probes when a Configuration task is in progress. This prevents any unintended restarts of the Pod.

    1. On the Core pod, use the following command to run the ConfigEngine command:

        ```
        /opt/HCL/wp_profile/ConfigEngine/containerConfigEngine.sh <Config Engine Task Command>
        ```

        Follow the instructions for the particular configuration task that you need to perform. See [DB Transfer Config Engine task](../db_mgmt_sys/dbtransfer_db2/index.md) for an example.

    2. After the Config Engine task is completed, you can close the shell on the Core pod:

        ```
        exit
        ```

3. (Optional) Restart other Core pods.

    If you have multiple Core pods running and if the configuration task you performed requires a server restart, you must restart all the Core pods for the changes to take full effect. To do this, run the following command:

    ```
    kubectl -n <namespace> rollout restart sts <deployment-name>-core
    ```

    Alternatively, you can execute the [DXClient `restart-core-pods` command](../../../extend_dx/development_tools/dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-pods).

## Pausing probes

If you have to pause the Kubernetes probes without running a configuration task, refer to the following steps:

1. Open a shell on a DX Core pod.

    The following example instructions use pod ‘0’ as it should always be available:

    ```
    kubectl exec -it -n <namespace> <deployment-name>-core-0 -c core -- /bin/bash
    ```

2. Create the semaphore file. This pauses the Kubernetes probes.

    ```
    touch /opt/app/configInProgress
    ```

3. To resume the Kubernetes probes, remove the semaphore file.

    ```
    rm -f /opt/app/configInProgress
    ```
