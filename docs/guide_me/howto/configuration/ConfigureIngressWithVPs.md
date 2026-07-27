# How to install and configure Ingress with virtual portals

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

You can implement the access layer in your HCL Digital Experience (DX) deployment using either Ingress or the Gateway API. For more information regarding general settings and installation processes, refer to [Access Layer for DX deployment](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md).

This article describes how to install and configure Ingress in a Kubernetes environment using a specific hostname for the base portal (`BasePortal`) and a virtual portal (`VirtualPortal1`).

## Prerequisites

Before installing Ingress, ensure that the Helm version in the Kubernetes environment is up to date:

1. Download the [get-helm-3.sh](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3){target="_blank"} script from [Installing Helm](https://helm.sh/docs/intro/install/){target="_blank"}.
2. Run the downloaded script to update the Helm version.

## Instructions

To install and configure Ingress with virtual portals, perform the following steps:

1. [Install the Ingress controller](#installing-the-ingress-controller)  
2. [Change the HAProxy serviceType to ClusterIP](#changing-the-haproxy-servicetype-to-clusterip)  
3. [Add the portal hostnames to the Helm chart](#adding-the-portal-hostnames-to-the-helm-chart)  
4. [Update the deployment to reflect the changes](#updating-the-deployment-to-reflect-the-changes)  
5. [Create a host-based virtual portal](#creating-a-virtual-portal)  
6. [Create the Ingress resource rules](#creating-ingress-resource-rules)  
    1. [Create the `BasePortal` hostname resource rule](#creating-the-baseportal-hostname-resource-rule)  
    2. [Create the `VirtualPortal1` hostname resource rule](#creating-the-virtualportal1-hostname-resource-rule)  
7. [Test the portal access routing](#testing-the-portal-access-routing)  
8. [Configure optional rewrite options on Ingress](#configuring-optional-rewrite-options-on-ingress)  

### Installing the Ingress controller

1. Install the default Ingress configuration on your Kubernetes environment:

    ```shell
    helm upgrade --install ingress-nginx ingress-nginx --repo https://kubernetes.github.io/ingress-nginx --namespace <your_namespace>
    ```

2. If your deployment requires extensive rules using server snippets, enable snippet annotations during installation:

    ```shell
    helm upgrade --install ingress-nginx ingress-nginx --repo https://kubernetes.github.io/ingress-nginx --namespace <your_namespace> --set controller.config.allow-snippet-annotations="true" --set controller.config.annotations-risk-level="Critical"
    ```

!!!note
    Installing Ingress with `--set controller.config.annotations-risk-level="Critical"` increases the environment risk level. Only use this configuration if server snippets are required to fulfill a specific requirement. For more information, refer to [Annotations Scope and Risk](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations-risk/){target="_blank"}.

### Changing the HAProxy serviceType to ClusterIP

Configure the HAProxy `serviceType` to use an external Ingress. In the `values.yaml` file, change the `serviceType` from `loadBalancer` to `ClusterIP`:

```yaml
networking:
  haproxy:
    serviceType: ClusterIP
```

### Adding the portal hostnames to the Helm chart

Map the base portal (`BasePortal`) and virtual portal (`VirtualPortal1`) hostnames inside the `hostAliases` section of the `values.yaml` file to make them accessible from outside the cluster. For more information, refer to [Setting the hostAliases for DX Pods](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_options_host_alias.md).

```yaml
hostAliases:
  core:
    - ip: "127.0.0.1"
      hostnames:
        - "BasePortal"
        - "VirtualPortal1"
```

!!!note
    If your environment uses more than one virtual portal, add the hostnames directly under the `hostnames` list.

### Updating the deployment to reflect the changes

Apply the configuration changes to your active HCL DX deployment. For more information, refer to [Upgrading Helm Deployment](../../../deployment/install/container/helm_deployment/update_helm_deployment.md).  

For example:

```yaml
helm upgrade -n your-namespace -f path/to/your/values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
```

### Creating a virtual portal

Create a host-based virtual portal using your designated hostname (for example, `VirtualPortal1`). For more information, refer to [Creating a virtual portal](../../../build_sites/virtual_portal/adm_vp_task/vp_adm_task/create_vp/index.md).

### Creating Ingress resource rules

Configure Ingress by defining resources and rules in YAML files. Create a new YAML file for each rule.

#### Creating the BasePortal hostname resource rule

1. Create a YAML file named `base_portal_rule.yaml` with the following content:

    ```yaml
    apiVersion: networking.k8s.io/v1  
    kind: Ingress  
    metadata:
      name: nginx-ingress 
      annotations:
        nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
        nginx.ingress.kubernetes.io/rewrite-target: /
    spec:
      ingressClassName: nginx
      tls:
      - secretName: dx-tls-cert
      rules:
      - host: BasePortal
        http:
          paths:
            - path: /
              pathType: Prefix
              backend:
                service:
                  name: <deployment-name>-haproxy
                  port:
                    name: haproxy 
    ```

    - `<deployment-name>`: Your actual deployment name (for example, `dx-deployment`).
    - `<your base portal hostname>`: Your base portal hostname.
    - `<your virtual portal hostname>`: Your virtual portal hostname.

2. Apply the new Ingress resource rule for the `BasePortal` hostname:

    ```yaml
    kubectl apply -f base_portal_rule.yaml -n <namespace>
    ```

#### Creating the VirtualPortal1 hostname resource rule

1. Create a YAML file named `VirtualPortal1_rule.yaml` with the following content:

    ```yaml
    apiVersion: networking.k8s.io/v1  
    kind: Ingress  
    metadata:
      name: nginx-ingress 
      annotations:
        nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
        nginx.ingress.kubernetes.io/rewrite-target: /
    spec:
      ingressClassName: nginx
      tls:
      - secretName: dx-tls-cert
      rules:
      - host: VirtualPortal1
        http:
          paths:
            - path: /
              pathType: Prefix
              backend:
                service:
                  name: <deployment-name>-haproxy
                  port:
                    name: haproxy 
    ```

    - `<deployment-name>`: Your actual deployment name (for example, `dx-deployment`).
    - `<your base portal hostname>`: Your base portal hostname.
    - `<your virtual portal hostname>`: Your virtual portal hostname.

2. Apply the new Ingress resource rule for the `VirtualPortal1` hostname:

    ```yaml
    kubectl apply -f base_portal_rule.yaml -n <namespace>
    ```

    -`<namespace>`: Your actual deployment namespace (for example `dxns`).  

    !!!note
        If you create additional virtual portals, follow the same instructions to extend the Ingress rules.

### Testing the portal access routing

For internal testing, modify the local `/etc/hosts` file to point to the HCL DX deployment IP address by mapping the `BasePortal` and `VirtualPortal1` hostnames to that IP.

For example:  

```shell
192.168.1.2     BasePortal  
192.168.1.2     VirtualPortal  
```

!!!note
    In a production environment, request DNS entries that map to the official domain names used in the HCL DX environment.

Once the DNS entries exist in either the `/etc/hosts` file or your DNS servers, verify access to the portals using the following URLs:

- Base portal URL: `https://BasePortal/wps/portal`
- Virtual portal URL: `https://VirtualPortal/wps/portal`

### Configuring optional rewrite options on Ingress

To configure a rewrite URL that redirects traffic from one host or domain name to another, define an additional Ingress resource.

Create a YAML file named `VirtualPortal2_rule.yaml` with the following content:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
    name: nginx-ingress-vp2
    annotations:
      nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
      nginx.ingress.kubernetes.io/use-regex: "true"
      nginx.ingress.kubernetes.io/rewrite-target: "https://<hostname to redirect>/$1$2"
spec:
  rules:
  - host: vp2
    port: 443,80
    http:
      paths:
        - path: '/([^/]*)(.*)'
          pathType: ImplementationSpecific
          backend:
            service:
              name: ingress-nginx
              port:
                number: 443
```

- `<hostname-to-redirect>`: The backend target hostname for the redirection (for example, `VirtualPortal1`).
- `<hostname to be used in web-browser>`: The public hostname that users enter in their web browser (for example, `VirtualPortal2`).

!!!note
    Ingress redirect rules alter the URL displayed in the web browser. Standard Ingress resources cannot perform a masking backend redirect that hides the target URL from the user.
