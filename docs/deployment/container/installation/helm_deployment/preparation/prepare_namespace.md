You need to create a namespace in your Kubernetes cluster that contains all the resources related to your HCL DX 9.5 Container deployment. It is recommended that the namespace is created before the deployment because you may need to add an ImagePullSecret or configure the TLS certificate for HAProxy before deployment.

Identify a name for your namespace and create it using the following syntax:

-   **On Kubernetes platforms**

    **Kubectl**

    ```
    # Command to create a namespace using kubectl
    # This example creates a namespace called "my-namespace"
    kubectl create ns my-namespace
    ```

-   **OpenShift**

    For OpenShift, you must create a namespace with specific settings.

    Use the following namespace definition and save it as namespace.yaml. You must replace `my-namespace` in the template with the name of the namespace you are using.

    ```
    apiVersion: v1
    kind: Namespace
    metadata:
        name: my-namespace
        annotations:
        openshift.io/sa.scc.mcs: "s0:c24,c4"
        openshift.io/sa.scc.supplemental-groups: "1001/10000"
        openshift.io/sa.scc.uid-range: "1000/10000"
    ```

    **OpenShift client**

    ```
    # Command to create namespace from template file
    oc apply -f namespace.yaml
    ```
