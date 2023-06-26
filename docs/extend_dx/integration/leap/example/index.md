# Example HCL Leap deployment with an existing DX environment

Integrate the HCL Leap with existing DX environment.

Download the leap helm charts using Curl 

```
    curl -s https://artifactory.cwp.pnp-hcl.com/artifactory/quintana-helm/hcl-leap-deployment/hcl-leap-deployment-v1.0.0_20230615-0954_Leap_v9.3.2.37_pjs_develop.tgz --output helm.tgz
```

Extract leap helm charts

```
    tar zvxf helm.tgz
```

Update the `deploy-values.yaml` leap name, tags and repository name in leap directory PATH

```
    sed -i.bck 's'\''LEAP_IMAGE_NAME'\''dx-build-output/leap'\''g' deploy-values.yaml
    sed -i.bck 's'\''LEAP_IMAGE_TAG'\''v1.0.0_20230620-1954_Leap_v0.5.0.33_pjs_develop'\''g' deploy-values.yaml
    sed -i.bck 's'\''REPOSITORY_NAME'\''quintana-docker.artifactory.cwp.pnp-hcl.com'\''g' deploy-values.yaml
    sed -i.bck 's'\''LEAP_SERVICE_TYPE'\''ClusterIP'\''g' deploy-values.yaml

```

Helm Upgrade

```
    helm install -n dxns leap-deployment ./hcl-leap-deployment -f ./deploy-values.yaml
```


Change Haproxy ServiceType from LoadBalancer to ClusterIp and Set Haproxy SSL to False
 
```
networking:
  haproxy:
    serviceType: ClusterIP
```    

Do Helm Upgrade

```
helm -n dxns upgrade -f hcl-dx-deployment/values.yaml -f ./install-deploy-values.yaml dx-deployment ./hcl-dx-deployment
```

Update `ingress/nginx-ingress-dx-and-leap-route.yaml` yaml (make sure it matches the environment)

```
sed -i.bck 's'\''HOST_PLACEHOLDER'\''environment.com'\''g' ./native-kube/artifacts/ingress/nginx-ingress-dx-and-leap-route.yaml
```

Install Ingress

```
    helm upgrade --install ingress-nginx ingress-nginx --repo https://kubernetes.github.io/ingress-nginx --namespace ingress-nginx --create-namespace -f ./nginx-ingress-dx-and-leap-route.yaml
```
kube apply for nginx

```
    kubectl apply -f ~/native-kube/deploy/nginx-ingress-dx-and-leap-route.yaml -n dxns
```
