# Manually Executing DX Core Configuration Tasks \| HCL Digital Experience {#helm_manual_dx_core_config_tasks .concept}

In an HCL Digital Experience Kubernetes deployment using Helm, some Core configuration tasks \(such as change of context root\) are now performed using the Helm upgrade route.

However, others \(such as database migration\) are still performed using a Config Engine task, as they are in an on-premise or hybrid environment. For the latter, especially those that take some time to complete \(e.g database migration\), we recommend that you follow the steps described below to avoid Kubernetes restarting the pod during the task.

## Run a Config Engine task {#section_qnr_c3k_wrb .section}

1.  **Open a shell on a core pod.**

    The following example uses pod 0 as it should always be available:

    ```
    kubectl exec -it -n < namespace > dx-deployment-core-0 -c core -- /bin/bash
    ```

2.  **Create the semaphore file.**

    On the core pod, use the following command to create a file which tells the Kubernetes probes that a configuration task is in progress:

    ```
    touch /opt/app/configInProgress
    ```

3.  **Run the Config Engine command.**

    Follow the instructions for the particular configuration task that you need to perform.

4.  **Remove the semaphore file.**

    On the core pod, use the following command to delete the file which tells the Kubernetes probes that a configuration task is in progress:

    ```
    rm -f /opt/app/configInProgress
    ```

    You can now close the shell on the core pod using the following command:

    ```
    exit
    ```

5.  \(**Optional**\) Restart other core pods.

    If you have multiple core pods running, and if the configuration task you just performed requires a server restart, restart all the core pods other than the one on which you ran the task on.

    To do this, run the following command for each other core pod.

    For example, if you have core pods `dx-deployment-core-0`, `dx-deployment-core-1` and `dx-deployment-core-2`, and performed the configuration task on pod 0, then run the command below for pods `dx-deployment-core-1` and `dx-deployment-core-2`:

    ```
    kubectl delete pod -n < namespace > < pod-name >
    ```

    To reduce the impact on availability, it is recommended that you wait for a pod to be in a "ready" state again before executing the command for the next pod.


**Parent topic:**[Update deployment to a later version \| HCL Digital Experience](../containerization/helm_update_deployment.md)

