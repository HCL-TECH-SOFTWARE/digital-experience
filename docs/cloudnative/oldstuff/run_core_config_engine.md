# Running DX Core configuration tasks

This topic shows how to run manual Core configuration tasks on your HCL DX 9.5 CF197 and later container deployments.

## Running Core Config Engine tasks

In an [HCL Digital Experience 9.5 Container deployment using Helm](helm.md), some DX 9.5 Core configuration tasks \(such as change of context root\) are now performed using the Helm upgrade route. However, others \(such as database migration\) are performed using a Config Engine task, as they would be in an on-premise or hybrid environment.

**Steps to run a Config Engine task:**

1.  Open a shell on a DX Core pod.

    The following example instructions uses pod ‘0’ as it should always be available:

    ```
    kubectl exec -it -n < namespace > dx-deployment-core-0 -c core -- /bin/bash
    ```

2.  Create the semaphore file.

    On the Core pod, use the following command to create a file which tells the Kubernetes probes that a Configuration task is in progress:

    ```
    touch /opt/app/configInProgress
    ```

3.  Run the Config Engine command.

    Follow the instructions for the particular configuration task that you need to perform. See [DB Transfer Config Engine task](../config/cw_db_transfer-db2.md) for an example.

4.  Remove the semaphore file.

    On the Core pod, use the following command to delete the file which tells the Kubernetes probes that a configuration task is in progress:

    ```
    rm -f /opt/app/configInProgress
    ```

    You can now close the shell on the Core pod:

    ```
    exit
    ```

5.  \(Optional\) Restart other Core pods.

    If you have multiple Core pods running, and if the configuration task you just performed requires a server restart, you should now restart all the Core pods other than the one on which you ran the task.

    To do this, run the following command for each other Core pod. For example, if you have Core pods `dx-deployment-core-0`, `dx-deployment-core-1`, and `dx-deployment-core-2` and performed the configuration task on pod 0, then run the following command below for pods `dx-deployment-core-1` and `dx-deployment-core-2`:

    ```
    kubectl delete pod -n < namespace > < pod-name >
    ```

    **Note:** To reduce the impact on availability, it is recommended that you wait for a pod to be ready again before running the command for the next pod.


**Parent topic:**[Update deployment to a later version](../containerization/helm_update_deployment.md)

