# Installing HCL Leap to integrate with HCL Digital Experience

HCL Digital Experience (DX) can be integrated with HCL Leap. Both products can be installed in the same Kubernetes cluster using the same Kubernetes namespace. Common parts of the deployments can be reused which is described [in the Configuration section](../configuration/index.md).

## Steps to Create a Basic Leap/DX Installation
These steps will enable you to install Leap, with the most basic settings, on the same cluster as DX. Follow the links for detailed steps.

1\. [Deploy DX](../../../../deployment/install/container/helm_deployment/overview.md) using Helm.

2\. In the cluster, [pull the Leap image and create the leap-harbor secret](https://opensource.hcltechsw.com/leap-doc/latest/helm_load_images.html#retrieve-leap-container-image).

3\. Install your Leap helm chart into your cluster.

!!!note
    By default the HAProxy Service is deployed as a `LoadBalancer` Service type. Set `networking.haproxy.serviceType` to `ClusterIP` in the custom values if you use DX with an Ingress as described in the next step.

4\. [Configure either Ingress or Gateway API for external traffic routing](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md). 

5\. Access Leap via `https://<your-domain-name>/apps` and follow the on-screen instructions to eventually open the Leap interface shown below:

![](../../../../assets/Leap_homepage.png)
!!!tip 
    If instead of this screen, you get the error `There was a problem during the setup or startup. Unable to connect to internal setup routine...`, you may have to [configure SSL behavior](https://opensource.hcltechsw.com/leap-doc/latest/helm_configure_ssl.html). Do a helm upgrade afterwards.

!!!notes 
    - For more details on deploying Leap, go to [the Kubernetes Helm deployment](https://opensource.hcltechsw.com/leap-doc/latest/kubernetes_helm_deployment.html) section of the HCL Leap product documentation.
    - It is recommended that you perform the [post-deployment tasks](https://opensource.hcltechsw.com/leap-doc/latest/in_setting_up_environment.html) for HCL Leap.