# Installing HCL Leap to integrate with HCL Digital Experience

HCL Digital Experience (DX) can be integrated with HCL Leap. Both products can be installed in the same Kubernetes cluster using the same Kubernetes namespace. Common parts of the deployments can be reused which is described [in the Configuration section](../configuration/index.md).

## Steps to Create a Basic Leap/DX Installation
These steps will enable you to install Leap, with the most basic settings, on the same cluster as DX. Follow the links for detailed steps.

1. Deploy a kubernetes cluster with [DX](../../../../deployment/install/container/helm_deployment/overview.md) and [Ingress](../configuration/index.md) enabled
2. In the cluster, [pull the Leap image and create a kubernetes secret](https://opensource.hcltechsw.com/leap-doc/9.3.8/helm_load_images.html#retrieve-leap-container-image)
3. Create a custom values file and [configure SSL behavior.](https://opensource.hcltechsw.com/leap-doc/9.3.8/helm_configure_ssl.html) This allows you to open Leap in a browser. Your custom values file should now look similar to this:
4. Install your Leap helm chart into your cluster with `helm install <your-release-name> <path-to-leap-helm-chart>`
5. Access Leap via `https://<your-domain>/apps` and follow the on-screen instructions to eventually open the Leap interface shown below:
![](../../../../assets/Leap_homepage.png)

!!!notes "Customize your deployment"
    - You may create a custom values file. The value options for Leap are documented [in the Leap documentation](https://opensource.hcltechsw.com/leap-doc/9.3.5/deploy_container_kubernetes_openliberty.html) The procedure is similar to the instructions in the topic [Prepare Configuration page for DX](../../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md). 
    - For more details on deploying Leap, refer to the [Deploying to a Container (Kubernetes) Platform - Open Liberty](https://opensource.hcltechsw.com/leap-doc/9.3.8/kubernetes_helm_deployment.html) section of the HCL Leap product documentation.
    - It is recommended that you perform the [post-deployment tasks](https://help.hcltechsw.com/Leap/9.3.2/in_setting_up_environment.html) for HCL Leap.