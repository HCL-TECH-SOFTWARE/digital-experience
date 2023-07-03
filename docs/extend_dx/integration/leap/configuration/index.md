# Configure HCL Leap deployment with an existing DX environment

The following is a configuration of the integration of HCL Leap with the existing DX environment.

1. Update the custom values file to set leap image name, tags and repository name. Follow the instructions in [Prepare Configuration for Leap](../../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/)

2. Change Haproxy ServiceType from LoadBalancer to ClusterIP and Set Haproxy SSL to False in custom values file. Follow the instructions in [Configure HAProxy networking](../../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking/#configure-haproxy-networking)
```yaml
networking:
  haproxy:
    serviceType: ClusterIP
    ssl: false
```
3. If you are already using an [ingress for DX](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress/) you can **extend** that ingress for Leap

4. Add a second ingress resource for Leap or you can just extend the existing DX Ingress

5. Point the ingress resource to the path Leap is configured at, this depends on the context route of the Leap Deployment.
For example,
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: custom-routes
spec:
    ingressClassName: nginx
    tls:
    - secretName: dx-tls-cert
      hosts:
        - native-kube-dx-leap.team-q-dev.com
    rules:
    - host: native-kube-dx-leap.team-q-dev.com
      http:
        paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              name: dx-deployment-haproxy
              port:
                name: haproxy
        - path: /apps
          pathType: Prefix
          backend:
            service:
              name: leap-deployment-leap
              port:
                number: 9080
```
