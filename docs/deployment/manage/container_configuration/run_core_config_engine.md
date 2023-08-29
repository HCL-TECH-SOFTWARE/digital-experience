# Running DX Core configuration tasks

This topic shows how to run manual Core configuration tasks on your HCL DX 9.5 CF197 and later container deployments.

## Running Core Config Engine tasks

In an [HCL Digital Experience 9.5 Container deployment using Helm](../../install/container/helm_deployment/overview.md),
some DX 9.5 Core configuration tasks such as change of context root are now performed using the Helm upgrade route.
However, other tasks such as database migration are performed using a Config Engine task, as they would be in an on-premise or hybrid environment.

**Steps to run a Config Engine task:**

1.  Open a shell on a DX Core pod.

    The following example instructions use pod ‘0’ as it should always be available:

    ```
    kubectl exec -it -n <namespace> <deployment-name>-core-0 -c core -- /bin/bash
    ```

2.  Run the config engine command using the `containerConfigEngine.sh` wrapper script.

    This script pauses the Kubernetes probes when a Configuration task is in progress. This prevents any unintended restarts of the Pod.

    On the Core pod, use the following command to run the config engine command:

    Follow the instructions for the particular configuration task that you need to perform. See [DB Transfer Config Engine task](https://help.hcltechsw.com/digital-experience/9.5/config/cw_db_transfer-db2.html)<!-- (../config/cw_db_transfer-db2.md) --> for an example.
    ```
    /opt/HCL/wp_profile/ConfigEngine/containerConfigEngine.sh <Config Engine Task Command>
    ```

    After the Config Engine task is completed, you can close the shell on the Core pod:
    ```
    exit
    ```


3.  (Optional) Restart other Core pods.

    If you have multiple Core pods running and if the configuration task you performed requires a server restart, you must restart all the Core pods for the changes to take full effect. 

    To do this, run the following command: 
    ```
    kubectl -n <namespace> rollout restart sts <deployment-name>-core
    ```

    Or you can execute the [DXClient `restart-core-pods` command](../../../extend_dx/development_tools/dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-pods).

## Pausing Probes
If you need to pause the Kubernetes probes without running a Configuration Task, you can do the steps below.

After opening a shell on a DX Core Pod [(See above)](#running-core-config-engine-tasks):
1. Create the semaphore file. This should pause the Kubernetes probes. 
```
touch /opt/app/configInProgress
```

2. To resume the Kubernetes probes, remove the semaphore file. 
```
rm -f /opt/app/configInProgress
```
