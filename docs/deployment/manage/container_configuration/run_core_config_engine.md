# Running DX Core configuration tasks

This topic shows how to run manual Core configuration tasks on your HCL DX 9.5 CF197 and later container deployments.

## Running Core Config Engine tasks

In an [HCL Digital Experience 9.5 Container deployment using Helm](../../install/container/helm_deployment/overview.md),
some DX 9.5 Core configuration tasks \(such as change of context root\) are now performed using the Helm upgrade route.
However, others \(such as database migration\) are performed using a Config Engine task, as they would be in an on-premise or hybrid environment.

**Steps to run a Config Engine task:**

1.  Open a shell on a DX Core pod.

    The following example instructions use pod ‘0’ as it should always be available:

    ```
    kubectl exec -it -n <namespace> <deployment-name>-core-0 -c core -- /bin/bash
    ```

2.  Run the config engine command using the `containerConfigEngine.sh` wrapper script.
    This script pauses the Kubernetes probes when a Configuration task is in progress. This prevents any unintended restarts of the Pod:

    On the Core pod, use the following command to run the config engine command

    Follow the instructions for the particular configuration task that you need to perform. See [DB Transfer Config Engine task](https://help.hcltechsw.com/digital-experience/9.5/config/cw_db_transfer-db2.html)<!-- (../config/cw_db_transfer-db2.md) --> for an example.
    ```
    /opt/HCL/profiles/<current profile name>/ConfigEngine/containerConfigEngine.sh <Config Engine Task Command>
    ```

    After the Config Engine task is completed, you can now close the shell on the Core pod:
    ```
    exit
    ```


3.  \(Optional\) Restart other Core pods.

    If you have multiple Core pods running, and if the configuration task you just performed requires a server restart, you should now restart all the Core pods other than the one on which you ran the task.
    To do this, run the following command for each other Core pod. For example, if you have Core pods `dx-deployment-core-0`, `dx-deployment-core-1`, and `dx-deployment-core-2` and performed the configuration task on pod 0, then run the following command below for pods `dx-deployment-core-1` and `dx-deployment-core-2`:

    ```
    kubectl delete pod -n <namespace> <pod-name>
    ```

    Another option is to do the rollout restart command:

    ```
    kubectl rollout restart sts <deployment-name>-core
    ```

    Or you can execute the [DXClient `restart-core-pods`command](../../../../extend_dx/development_tools/dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-pods).

    !!!note
        To reduce the impact on availability, it is recommended that you wait for a pod to be ready again before running the command for the next pod.

    
