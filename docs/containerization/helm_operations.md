# Operations using Helm {#helm_cf196andlater_operations .concept}

This topic provides operations guidance for DX administrators to manage DX 9.5 deployments using Helm, such a configuration updates, monitoring, and troubleshooting strategies.

For more information about Helm applications, consult the [Helm documentation](https://helm.sh/docs/). Refer to the DX 9.5 Container component image listing in the DX 9.5 Docker [Image file list](docker.md) topic.

-   **[Update Helm deployment configuration \| HCL Digital Experience](../containerization/update_helm_deployment.md)**  
This section describes how to update the configuration of an HCL Digital Experience 9.5 CF196 or later deployment to Kubernetes or OpenShift installed using Helm.
-   **[Accessing the ConfigWizard admin console in a container environment](../containerization/helm_access_configwizard.md)**  
This topic describes how you can access the ConfigWizard admin console in a container environment from your local system. The ConfigWizard admin console opens to the TCP port number 10203, but this port cannot be accessed directly via the Kubernetes ingress controller. Hence, use the following instructions to access the ConfigWizard console.
-   **[Troubleshooting your Helm deployment \| HCL Digital Experience](../containerization/helm_troubleshooting.md)**  
This section shows how to find and resolve issues when deploying HCL DX 9.5 CF196 and later releases using Helm.

**Parent topic:**[Helm-based deployment \| HCL Digital Experience](../containerization/helm.md)

