# How to deny IBM Integrated Solutions Console access in Kubernetes

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When using HCL Digital Experience (DX) in a Kubernetes environment with an NGINX Ingress controller, you can restrict access to the IBM Integrated Solutions Console for non-administrative users. This article explains how to deny access to the IBM Integrated Solutions Console for normal HCL DX users in Kubernetes.

## Instructions

To deny access to the IBM Integrated Solutions Console, perform the following steps:

1. Create a YAML file containing the Ingress resource definition corresponding to your NGINX Ingress controller deployment:

    - Community NGINX Ingress Controller (`nginx.ingress.kubernetes.io`):

        ```yaml
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: deny-ibm-console
          namespace: <your_namespace>
          annotations:
            nginx.ingress.kubernetes.io/server-snippet: |
              location /ibm/console {
                deny all;
                return 403;
              }
        spec:
          ingressClassName: nginx
          tls:
          - hosts:
            - mykube-deployment.com
            secretName: dx-tls-cert
          rules:
          - host: mykube-deployment.com
            http:
              paths:
              - path: /ibm/console
                pathType: Exact
                backend:
                  service:
                    name: placeholder-service
                    port:
                      number: 80
        ```

    - Enterprise NGINX Ingress Controller (`nginx.org`):

        ```yaml
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: deny-ibm-console
          namespace: <your_namespace>
          annotations:
            nginx.org/server-snippet: |
              location /ibm/console {
                deny all;
                return 403;
              }
        spec:
          ingressClassName: nginx
          tls:
          - hosts:
            - mykube-deployment.com
            secretName: dx-tls-cert
          rules:
          - host: mykube-deployment.com
            http:
              paths:
              - path: /ibm/console
                pathType: Exact
                backend:
                  service:
                    name: placeholder-service
                    port:
                      number: 80
        ```

2. Apply the YAML file to your namespace:

    ```shell
    kubectl apply -f <yaml_file_name> -n <your_namespace>
    ```
