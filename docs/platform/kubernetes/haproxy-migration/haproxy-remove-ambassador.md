# Remove Ambassador CRDs

!!!note "Notes:"
    This section only applies for **existing** HCL Digital Experience deployments. For fresh deployments please refer to [Fresh Installations without Ambassador](haproxy-fresh-installation.md)

Even when the migration to HAProxy is finished and Ambassador is not deployed anymore, the Ambassador [`CustomResourceDefinitions`](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) will still be present in your cluster. Helm is not uninstalling them automatically due to them being cluster-wide resources. The following steps can be used to check if the `CRDs` are still in use in the cluster and give guidance on how to remove them manually if they are unused.

The following 19 Ambassador `CRDs` were deployed as part of DX deployment:

- `filters.getambassador.io`
- `filterpolicies.getambassador.io`
- `authservices.getambassador.io`
- `consulresolvers.getambassador.io`
- `devportals.getambassador.io`
- `hosts.getambassador.io`
- `kubernetesendpointresolvers.getambassador.io`
- `kubernetesserviceresolvers.getambassador.io`
- `logservices.getambassador.io`
- `mappings.getambassador.io`
- `modules.getambassador.io`
- `ratelimitservices.getambassador.io`
- `tcpmappings.getambassador.io`
- `tlscontexts.getambassador.io`
- `tracingservices.getambassador.io`
- `projects.getambassador.io`
- `projectcontrollers.getambassador.io`
- `projectrevisions.getambassador.io`
- `ratelimits.getambassador.io`

## Check the clusters `CustomResourceDefinitions`

To check if the definitions are on the cluster run the following command:

```shell
kubectl get crd --selector app.kubernetes.io/name=ambassador
```

This should return the `CRDs` listed above. If more `CRDs` are returned this can be an indicator that another Ambassador instance is deployed in your cluster. This needs to be taken into consideration when removing the `CRDs`

## Check the clusters `CustomResources`

To see the actual resources that are using the `CRDs` above, run the following command:

```shell
kubectl get ambassador-crds --all-namespaces
```

If HCL Digital Experience was migrated to HAProxy and Ambassador was disabled this should return

```
No resources found
```

## Remove the `CustomResourceDefinitions`

If no resources are using the `CRDs` it should be safe to remove the resources from the cluster. For this run the following command:

```shell
kubectl delete crd \
  filters.getambassador.io \
  filterpolicies.getambassador.io \
  authservices.getambassador.io \
  consulresolvers.getambassador.io \
  devportals.getambassador.io \
  hosts.getambassador.io \
  kubernetesendpointresolvers.getambassador.io \
  kubernetesserviceresolvers.getambassador.io \
  logservices.getambassador.io \
  mappings.getambassador.io \
  modules.getambassador.io \
  ratelimitservices.getambassador.io \
  tcpmappings.getambassador.io \
  tlscontexts.getambassador.io \
  tracingservices.getambassador.io \
  projects.getambassador.io \
  projectcontrollers.getambassador.io \
  projectrevisions.getambassador.io \
  ratelimits.getambassador.io
```

## Restore  `CustomResourceDefinitions` as fallback

In case after deletion the `CRDs` turn out to be required they can be restored from the HCL Digital Experience Helm chart. To do so, unpack the `CRDs` and apply them by running:

```console
tar zxvf hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz hcl-dx-deployment/crds
kubectl apply -f ./hcl-dx-deployment/crds
```
