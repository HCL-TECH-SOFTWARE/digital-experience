# Remove Ambassador CRDs

!!!note "Notes:"
    This section applies only to the **existing** HCL Digital Experience deployments. For fresh deployments, refer to the [Fresh Installations using HAProxy](haproxy-fresh-installation.md) topic.

Even after the migration to HAProxy is completed and the Ambassador is not deployed anymore, the Ambassador [`CustomResourceDefinitions`](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) will still be present in your cluster. Helm is not uninstalling them automatically because they are considered cluster-wide resources. The following steps can be used to check if the `CRDs` are still in use in the cluster, and give guidance on how to remove them manually if they are found unused.

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

To check if the definitions are on the cluster, run the following command:

```shell
kubectl get crd --selector app.kubernetes.io/name=ambassador
```

This should return the 19 `CRDs` listed previously. If more `CRDs` are returned, it indicates that another Ambassador instance is deployed in your cluster. This needs to be taken into consideration when removing the `CRDs`

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

If no resources are using `CRDs`, it is safe to remove the resources from the cluster by running the following command:

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

In case you want the deleted `CRDs` back,  you can restore them from the HCL Digital Experience Helm chart. To restore CRDs, unpack the `CRDs` and apply them by running the following command:

```console
tar zxvf hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz hcl-dx-deployment/crds
kubectl apply -f ./hcl-dx-deployment/crds
```
