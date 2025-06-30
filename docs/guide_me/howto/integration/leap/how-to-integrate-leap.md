# How to install Leap alongside DX so they can be accessed from the same domain

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This article gives you the steps to integrate Leap and DX so they can be accessed from the same domain. Doing so opens up new capabilities, such as [embedding a Leap application into a DX site](./embed-leap-app.md) if [single sign-on](./enable-sso-leap-dx.md) is also enabled.

## Instructions: 

Follow the links for detailed steps.

1\. [Deploy DX](../../../../deployment/install/container/helm_deployment/overview.md) using Helm.

2\. In the cluster, [pull the Leap image and create the leap-harbor secret](https://opensource.hcltechsw.com/leap-doc/latest/helm_load_images.html#retrieve-leap-container-image).

3\. Install your Leap helm chart into your cluster.

4\. If there's only one external IP available you may have to set networking.haproxy.serviceType to `ClusterIP` and networking.haproxy.ssl to `false` in your DX values file. Do a helm upgrade with this configuration to detach the external IP from HAProxy and make it available to Ingress on the next step.
```yaml
### DX helm values
networking:
    haproxy:
        serviceType: ClusterIP
        ssl: false
```

5\. [Configure either Ingress or Gateway API for external traffic routing](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md). 


6\. Access Leap via `https://<your-domain-name>/apps` and follow the on-screen instructions to eventually open the Leap interface shown below:

![](../../../../assets/Leap_homepage.png)
!!!tip 
    If instead of this screen, you get the error `There was a problem during the setup or startup. Unable to connect to internal setup routine...`, you may have to [configure SSL behavior](https://opensource.hcltechsw.com/leap-doc/latest/helm_configure_ssl.html). Do a helm upgrade afterwards.

!!!notes 
    - For more details on deploying Leap, go to [the Kubernetes Helm deployment](https://opensource.hcltechsw.com/leap-doc/latest/kubernetes_helm_deployment.html) section of the HCL Leap product documentation.
    - It is recommended that you perform the [post-deployment tasks](https://opensource.hcltechsw.com/leap-doc/latest/in_setting_up_environment.html) for HCL Leap.