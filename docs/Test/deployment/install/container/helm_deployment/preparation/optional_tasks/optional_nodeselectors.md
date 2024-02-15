# Using NodeSelectors

This topic shows you how to leverage `NodeSelectors` to allow deploying specific DX 9.5 application Pods only on a specific node.

## Prepare cluster nodes

You must label your Kubernetes or OpenShift cluster nodes to use `NodeSelectors`. You can do this by editing the node in Kubernetes or OpenShift.

The following steps shows how to modify cluster nodes. As the examples here may differ from those given by your cloud provider, you are encouraged to review the documentation reference accompanying your cloud subscription.

For this example, the following setup is assumed:

-   The target cluster has multiple nodes.
-   A label purpose is added to a node called `k8s-node-4` and assigned the value `haproxy`

This can be done using the following commands:

-   **Kubectl:**

    ```
    # Edit Node
    kubectl edit node k8s-node-4
    ```

-   **OpenShift Client:**

    ```
    # Edit Node
    kubectl edit node k8s-node-4
    ```


The following label is added using the Kubernetes syntax (and other configurations are changed):

```yaml
metadata:
  labels:
    purpose: haproxy
```

The node is now labeled with the desired target label:

-   **Kubectl:**

    ```
    # Execute lookup via kubectl
    kubectl get node k8s-node-4 --show-labels
    
    # Command output
    NAME         STATUS   ROLES    AGE    VERSION   LABELS
    k8s-node-4   Ready    <none>   123d   v1.20.2   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=k8s-node-4,kubernetes.io/os=linux,purpose=haproxy
    # Execute lookup via kubectl
    oc get node k8s-node-4 --show-labels
    
    # Command output
    NAME         STATUS   ROLES    AGE    VERSION   LABELS
    k8s-node-4   Ready    <none>   123d   v1.20.2   
    beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=k8s-node-4,kubernetes.io/os=linux,purpose=haproxy
    ```


## Configure nodes

You can assign all pods (deployed by the Helm Chart of HCL Digital Experience 9.5) to specific nodes by using `NodeSelectors`. Modify your custom-values.yaml file to include the `NodeSelector`configuration. Make sure to use the proper indentation as YAML is indent-sensitive.

Example for HAProxy:

```yaml
nodeSelector:
  haproxy:
    purpose: haproxy
```

This configuration directs HAProxy to run nodes with the label purpose: `haproxy `.

Once install is completed, the pods are running on your desired node. For example `k8s-node-4`.

**Kubectl:**

```
# Use this command to see running Pods incl. Nodes
kubectl get pods -o wide -n my-deployment 

# Command output
NAME                                   READY   STATUS    RESTARTS   AGE     IP             NODE         NOMINATED NODE   READINESS GATES
dx-haproxy-769b86f6ff-knhgt         1/1     Running   0          2m12s   10.244.4.111   k8s-node-4   <none>           <none>
dx-haproxy-769b86f6ff-qtqmv         1/1     Running   0          2m12s   10.244.4.110   k8s-node-4   <none>           <none>
dx-haproxy-769b86f6ff-whmw6         1/1     Running   0          2m12s   10.244.4.112   k8s-node-4   <none>           <none>
```

**OpenShift Client:**

```
# Use this command to see running Pods incl. Nodes
oc get pods -o wide -n my-deployment

# Command output
NAME                                   READY   STATUS    RESTARTS   AGE     IP             NODE         NOMINATED NODE
dx-haproxy-769b86f6ff-knhgt         1/1     Running   0          2m12s   10.244.4.111   k8s-node-4   <none>
dx-haproxy-769b86f6ff-qtqmv         1/1     Running   0          2m12s   10.244.4.110   k8s-node-4   <none>
dx-haproxy-769b86f6ff-whmw6         1/1     Running   0          2m12s   10.244.4.112   k8s-node-4   <none>

```
