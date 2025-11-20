# How to install and configure Ingress with Virtual Portals

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

In HCL Digital Experience there are two options available for implementing the Access Layer in the DX deployment, which is Ingress and Gateway API. For details, please check [Access Layer for DX deployment](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md){target="_blank"}.
On that page also some general settings can be found for installing and configuring ingress. In addition to that general configuration page this How-To document describes more details in how to install and configure Ingress in a Kubernetes environment for which a specific hostname will be used for the base portal (hostname: `BasePortal`) and a Virtual Portal (hostname `VirtualPortal1`).  

## Prerequisites

Before installing Ingress it is suggested to make sure that the helm version in the kubernetes environment is up to date. This can be done by download the file [get-helm-3.sh](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3){target="_blank"} from the [Installing Helm](https://helm.sh/docs/intro/install/){target="_blank"} web page. After the file is downloaded, run the script to update the helm-version.  

## Instructions

**Step Overview:**  
[1. Installing Ingress](#installing-ingress)  
[2. Change the helm-chart to point to the ClusterIP](#change-the-helm-chart-to-point-to-the-clusterip)  
[3. Add additional hostnames to the helm-chart](#add-additional-hostnames-to-the-helm-chart)  
[4. Update the deployment to reflect the changes](#update-the-deployment-to-reflect-the-changes)  
[5. Creating a Virtual Portal](#creating-a-virtual-portal)  
[6. Creating Ingress resource rules](#creating-ingress-resource-rules)  
[6a. Creating the BasePortal hostname resource rule](#creating-the-baseportal-hostname-resource-rule)  
[6b. Creating the VirtualPortal1 hostname resource rule](#creating-the-virtualportal1-hostname-resource-rule)  
[7. Testing](#testing)  
[Optional - Rewrite options on ingress](#optional---rewrite-options-on-ingress)  

### Installing Ingress

On an existing HCL DX environment on Kubernetes Ingress can be installed in different ways. The default installation can be done by executing the following command:  

 ```shell
 helm upgrade --install ingress-nginx ingress-nginx --repo https://kubernetes.github.io/ingress-nginx --namespace <your_namespace>
 ```

If it is planed to apply more extensive ingress rules by using server-snippets, Ingress can also be installed by using the command:  

```shell
helm upgrade --install ingress-nginx ingress-nginx --repo https://kubernetes.github.io/ingress-nginx --namespace <your_namespace> --set controller.config.allow-snippet-annotations="true" --set controller.config.annotations-risk-level="Critical"
```

!!!note
    Please be aware that installing ingress with `--set controller.config.annotations-risk-level="Critical"` increase the risk level. It should only be used, if server snippets are really needed to fulfil a specific requirement. For details, please refer to [Annotations Scope and Risk](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations-risk/){target="_blank"}

### Change the helm-chart to point to the ClusterIP

By default in the values.yaml file, HAProxy serviceType is set to loadBalancer. To use the external Ingress, set the serviceType appropriate for your specific use case. In this example, ClusterIP is used for which the following need to be changed in the values.yaml file:  

```yaml
networking:
  haproxy:
    serviceType: ClusterIP
```

### Add additional hostnames to the helm-chart

In this sample a base portal will be configured with hostname `BasePortal` and a Virtual Portal will be configured with hostname `VirtualPortal1`.  To make these hostnames accessible from outside the host names need to be known in the hostAliases section in the helm chart. For details, please check [Setting the hostAliases for DX Pods](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_options_host_alias.md){target="_blank"}

Update the values.yaml file in the hostAliases section as following:

```yaml
hostAliases:
  core:
    - ip: "127.0.0.1"
      hostnames:
        - "BasePortal"
        - "VirtualPortal1"
```

!!!note
    If more then just one VirtualPortal will be used, additional host aliases can be added under `hostnames`.

### Update the deployment to reflect the changes

Run a helm upgrade command to reflect the new changes in your current DX deployment. For details, please check [Upgrading Helm Deployment](../../../deployment/install/container/helm_deployment/update_helm_deployment.md){target="_blank"}.  

For example:  

```yaml
helm upgrade -n your-namespace -f path/to/your/values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
```

### Creating a Virtual Portal

Create a host based virtual portal (for example with hostname `VirtualPortal11`) by following the instructions of [Creating a virtual portal](../../../build_sites/virtual_portal/adm_vp_task/vp_adm_task/create_vp/index.md){target="_blank"}

### Creating Ingress resource rules

Ingress can be configured by specifying resources and rules in yaml files. In this section it will be described in how to configure such rules for different host names.
It is best practice to create a new yaml file for each new rule.  

#### Creating the BasePortal hostname resource rule

1. create a new yaml file (for example base_portal_rule.yaml) and add the following content into it:  

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

    !!!note
        Replace the `<deployment-name>` tag with your real deployment name. (for example: dx-deployment).  
        Replace the `<your base portal hostname>` tag with your real base-portal hostname value.  
        Replace the `<your virtual portal hostname>` tag with your virtual portal hostname.  

2. Run the following command to apply the new ingress resource rule for the `BasePortal` hostname:

    ```yaml
    kubectl apply -f base_portal_rule.yaml -n <namespace>
    ```

#### Creating the VirtualPortal1 hostname resource rule

1. create a new yaml file (for example VirtualPortal1_rule.yaml) and add the following content into it:  

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

    !!!note
        Replace the `<deployment-name>` tag with your real deployment name. (for example: dx-deployment).  
        Replace the `<your base portal hostname>` tag with your real base-portal hostname value.  
        Replace the `<your virtual portal hostname>` tag with your virtual portal hostname.  

2. Run the following command to apply the new ingress resource rule for the `VirtualPortal1` hostname:

    ```yaml
    kubectl apply -f base_portal_rule.yaml -n <namespace>
    ```

    where the `<namespace>` tag need to be replaced with your deployment namespace. (for example `dxns`)  

    !!!note
        If additional Virtual Portals will be created, follow the same instructions to extend the ingress rules.  

### Testing

For internal tests the local  `etc/hosts ` file can be modified to point to the dx-deployment IP-address and by mapping then the hostnames `BasePortal` and `VirtualPortal1` to that IP.

For example:  

```shell
192.168.1.2     BasePortal  
192.168.1.2     VirtualPortal  
```

!!!note
    In a production environment DNS entries need to be requested that then can be mapped to the official domain-names used in the HCL DX environment.

As soon as the DNS entries exist either in the etc/hosts file or in the DNS-servers it can be tried to access the base portal or the virtual portal by using the URLs:

For base portal access URL: `https://BasePortal/wps/portal`

For virtual portal access URL: `https://VirtualPortal/wps/portal`

### Optional - Rewrite options on ingress

If you want to configure a rewrite-url to access any host/domain-name from another one, then a additional ingress resource can be specified as following:

1. create a new file and name it VirtualPortal2_rule.yaml

2. Add the following content in that file:  

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

Replace the tag `<hostname to redirect>` with your backend hostname on which you want to redirect requests. For example, if you have a virtual portal with hostname `VirtualPortal1` and you want to access that virtual portal by using "VirtualPortal2" in the web-browser, then "VirtualPortal1" should be used to specify the target.  

Replace the tag `<hostname to be used in web-browser>` with the real hostname that should be used to contact the backend hostname.  

!!!note
    Ingress has limitations. It is possible to configure a redirect rule, but the redirect then is also visible in the web-browser. A redirect to a backend server without changing the web-browser URL is not possible by using ingress!
