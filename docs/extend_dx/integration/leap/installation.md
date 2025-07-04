# Installing HCL Leap to integrate with HCL Digital Experience

HCL Digital Experience (DX) can be integrated with HCL Leap. Both products can be installed in the same Kubernetes cluster using the same Kubernetes namespace. Common deployment parts can be reused, as described in [Configuring HCL Leap for integration with HCL DX](./configuration.md).

Refer to the following steps to install HCL Leap, with its default settings, on the same cluster as HCL DX.

1. Deploy HCL DX [using Helm](../../../deployment/install/container/helm_deployment/overview.md).

2. In the cluster, [retrieve the Leap image and create the `leap-harbor` secret](https://opensource.hcltechsw.com/leap-doc/latest/helm_load_images.html#retrieve-leap-container-image){target="_blank"}.

3. Install your Leap Helm chart into your cluster by running `helm install <your-leap-release-name> <path-to-leap-image> -n <your-dx-namespace>`. You can give it any release name you want, but it's best to make it descriptive, like "leap-release" or "leap-deployment".

    !!!note
        By default, the HAProxy service is deployed as a `LoadBalancer` service type. Set `networking.haproxy.serviceType` to `ClusterIP` in the `values.yaml` file if you use DX with an Ingress as described in the next step.

4. [Configure Ingress or Gateway API for external traffic routing](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md).

5. Access Leap using the `https://<your-domain-name>/apps` URL and follow the on-screen instructions to open the Leap interface.

    !!!tip
        If you encounter the error `There was a problem during the setup or startup. Unable to connect to internal setup routine...`, you may have to [configure SSL behavior](https://opensource.hcltechsw.com/leap-doc/latest/helm_configure_ssl.html){target="_blank"}. Perform a Helm upgrade after configuring to apply your changes.

    ![](../../../assets/Leap_homepage.png)

!!!note
    - For more details on deploying Leap, refer to [the Kubernetes Helm deployment](https://opensource.hcltechsw.com/leap-doc/latest/kubernetes_helm_deployment.html){target="_blank"} section of the HCL Leap product documentation.
    - It is recommended that you perform the [post-deployment tasks](https://opensource.hcltechsw.com/leap-doc/latest/in_setting_up_environment.html){target="_blank"} for HCL Leap after installing it.
