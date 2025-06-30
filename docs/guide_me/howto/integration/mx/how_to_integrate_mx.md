# How to Deploy HCL DX and HCL Volt MX within the Same Kubernetes Environment

## Introduction

This guide explains how to deploy **HCL DX** and **HCL Volt MX** within the same Kubernetes environment and set up the ingress and routes to be accessed on the same host.

## Prerequisites

Before you begin, ensure you have:

* A **Kubernetes cluster**.
* **DX and MX Helm charts** ready for deployment.
* **TLS certificates** for your domain.
* **NGINX Ingress Controller** (or another ingress controller of your choice).

## Instructions

### Step 1: Deploy HCL Digital Experience using Helm

For the deployment and installation of DX, refer to the [Deploy Container Platforms Using Helm](./../../../../deployment/install/container/helm_deployment/overview.md) page of this documentation. This integration guide assumes that DX is deployed and configured successfully.

### Step 2: Deploy HCL Volt MX Foundry using Helm

For the deployment and installation of MX Foundry, refer to [HCL Volt MX Documentation: Installation Guide for Volt MX Foundry Containers Helm Installation](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmxfoundry_containers_helm/Content/Introduction.html).

### Step 3: Deploy Ingress for DX

While DX can run without ingress, integrating it with MX requires exposing both apps on the same domain. First, configure an ingress resource for DX.

1.  **Install an Ingress Controller**

    Install your chosen ingress controller (e.g., NGINX) and ensure the ingress controller pod is running.

2.  **Define the Ingress Resource for DX**

    Update your DX Helm `values.yaml` to configure networking with ingress. Here's an example definition:

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: nginx-ingress
    spec:
      ingressClassName: nginx
      tls:
      - secretName: dx-tls-cert
      rules:
      - host: your-kube-deployment.com
        http:
          paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: <release-name>-haproxy
                port:
                  name: haproxy
    ```

### Step 4: Configure Ingress for Volt MX Foundry

Next, configure Volt MX to use the same ingress controller and domain.

1.  **Update MX Helm Values**

    In your MX `values.yaml`, match the ingress class, TLS certificate, and domain to those used in DX:

    ```yaml
    ingress:
      enabled: true
      protocol: "https"
      port: "443"
      class: "nginx"
      tls:
        enabled: true
        customCert:
          cert: "certs/your-ssl-cert.cer"
          key: "certs/your-ssl-cert.key"
    serverDomainName: "your-mx-and-dx-host.com"
    ```

### Step 5: Verify the Ingress and Integration

1.  **Access DXConnect**

    Confirm DX is reachable using the appropriate URL:

    * **Without HAProxy container:**
        ```
        https://<localhost>:10202/hcl/dxconnect/processHandler/version
        ```
    * **With HAProxy container:**
        ```
        https://<host-name>/hcl/dxconnect/processHandler/version
        ```

2.  **Access Volt MX Admin Console**

    Once all services are running, open your browser and navigate to:

    ```
    https://<host-name>/mfconsole
    ```

    Make sure this is accessible and correctly routed via the shared ingress.

## Result

Your DX and Volt MX applications should now be deployed within the same Kubernetes environment and securely routed using the shared ingress configuration.