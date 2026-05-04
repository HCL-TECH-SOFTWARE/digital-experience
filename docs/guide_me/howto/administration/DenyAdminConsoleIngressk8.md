# How to deny IBM Integrated Solutions Console access for normal DX users in kubernetes?

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When using HCL Digital Experience in a Kubernetes environment with the Nginx/Ingress controller, there might be a need to deny access to the IBM Integrated Solutions Console for some users. This document provides detailed steps that can be used to configure it.  

## Instructions

Please create an ingress object in your namespace by creating a new yaml file and by adding the following sample definitions in it:  

**Setting to be added in an ingress object on Kubernetes environments that provide Nginx:**

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

**Setting to be added in an ingress object on which Ngnix is running in an Enterprise organization:**  

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

As soon the the yaml-file is created with the settings mentioned above, please apply the changes with the following command:  

```shell
kubectl apply -f <yaml_file_name> -n <your_namespace>
```
