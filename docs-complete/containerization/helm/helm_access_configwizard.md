# Accessing the ConfigWizard admin console in a container environment

This topic describes how you can access the ConfigWizard admin console in a container environment from your local system. The ConfigWizard admin console opens to the TCP port number 10203, but this port cannot be accessed directly via the Kubernetes ingress controller. Hence, use the following instructions to access the ConfigWizard console.

## Procedure

1.  Connect to your Kubernetes cluster from your workstation via CLI.

    For instructions, refer to the documentation of your cloud platform provider.

2.  Use the following command to find your deployment name space:

    ```
    kubectl get <namespace>
    ```

    **Example:**

    ```
    
        sh-3.2$ kubectl get ns
        NAME                   STATUS   AGE
        default                Active   336d
        eks-n0-clstrhyb-rel    Active   11h
        eks-rel-helm-fresh     Active   15h
        kube-node-lease        Active   336d
        kube-public            Active   336d
        kube-system            Active   336d
    
    ```

3.  Use the following command to find your DX core pod name:

    ```
    kubectl get pods -n <namespace>
    
    ```

    **Example:**

    ```
    
        sh-3.2$ kubectl get pods -n eks-rel-helm-fresh
        NAME                                                         READY   STATUS    RESTARTS   AGE
        dx-deployment-ambassador-7f954c7d74-46km2                    1/1     Running   0          15h
        dx-deployment-ambassador-7f954c7d74-vfzxw                    1/1     Running   0          15h
        dx-deployment-ambassador-7f954c7d74-wtfqq                    1/1     Running   0          15h
        dx-deployment-ambassador-redis-6c5b8f84c6-7bw8r              1/1     Running   0          15h
        dx-deployment-ambassador-redis-6c5b8f84c6-j9s7v              1/1     Running   0          15h
        dx-deployment-ambassador-redis-6c5b8f84c6-nf7p5              1/1     Running   0          15h
        dx-deployment-content-composer-5cb56f94d8-wlnqw              1/1     Running   0          15h
        dx-deployment-core-0                                         3/3     Running   1          15h
        dx-deployment-design-studio-65d4bdbd89-hh62t                 1/1     Running   0          15h
        dx-deployment-digital-asset-management-0                     1/1     Running   4          15h
        dx-deployment-image-processor-96dc59fcf-956wz                1/1     Running   0          15h
        dx-deployment-open-ldap-0                                    1/1     Running   0          15h
        dx-deployment-persistence-connection-pool-75b77b8b86-pmfrz   1/1     Running   0          15h
        dx-deployment-persistence-node-0                             2/2     Running   0          15h
        dx-deployment-persistence-node-1                             2/2     Running   0          15h
        dx-deployment-persistence-node-2                             2/2     Running   0          15h
        dx-deployment-remote-search-0                                3/3     Running   0          15h
        dx-deployment-ring-api-845658b658-tt588                      1/1     Running   0          15h
        dx-deployment-runtime-controller-7d9df9db98-h4mrf            1/1     Running   0          15h
    
    ```

4.  Enable port-forwarding to your workstation.

    ```
    kubectl port-forward <dx-core pod-name> 10203:10203 -n <namespace>
    ```

    **Note:** Ensure that the port-forwarding service keeps running in your terminal to access the ConfigWizard admin console.

    **Example:**

    ```
    sh-3.2$ kubectl port-forward dx-deployment-core-0 10203:10203 -n eks-rel-helm-fresh
        Forwarding from 127.0.0.1:10203 -> 10203
        Forwarding from [::1]:10203 -> 10203
    ```

5.  Navigate to the following URL to open the ConfigWizard admin console: https://localhost:10203/ibm/console

