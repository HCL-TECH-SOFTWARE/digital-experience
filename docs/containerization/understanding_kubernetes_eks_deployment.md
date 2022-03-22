# Understanding the HCL DX 9.5 container deployment on Amazon EKS

This section describes the output and artifacts created when deploying HCL Digital Experience 9.5 container release in on Amazon Elastic Kubernetes Service \(EKS\).

**Note:** All modifications must be done on the custom resource instance and not the individual pieces of the deployment. See [Customizing the Kubernetes deployment](customizing_kubernetes_eks_deployment.md) for details.

Deploy with the following command:

```
./scripts/deployDx.sh dx14 1 AWS_OWNER_ID.dkr.ecr.us-east-2.amazonaws.com dxen v95_CF184_20200916-2009 dxh1-dam dx deploy-stg derby ambassador 154
```

Results in the following output:

```
Namespace:  dx14
- REPLICAS:  1
- Repository:  AWS_OWNER_ID.dkr.ecr.us-east-2.amazonaws.com
- Image Name:  dxen
- Image Tag:  v95_CF184_20200916-2009
- Volume Name:  dxh1-dam
- Storage Class Name:  dx-deploy-stg
- Database Type:  derby
-
namespace/awseks-demo created
serviceaccount/hcldx-cloud-operator created
role.rbac.authorization.k8s.io/hcldx-cloud-operator created
rolebinding.rbac.authorization.k8s.io/hcldx-cloud-operator created
deployment.apps/hcldx-cloud-operator created
dxdeployment.git.cwp.pnp-hcl.com/dx-deployment created
```

The following artifacts are created during deployment:

## Artifacts

Project/Namespace

The **Project**/**Namespace** gets created if it does not already exist.

The Kubernetes Dashboard can be installed on your local using the following link: [https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

![](../images/container_eks_kubectl-dashboard-namespace.png "Sample with Kubernetes Dashboard")

```
kubectl get namespaces
```

![](../images/container_eks_kubectl-cli-namespace.png "Namespace sample with CLI")

Service Account

**Service Accounts** for the operator and ambassador deployments.

```
kubectl get serviceaccounts -n dx14
```

![](../images/container_eks_kubectl-cli-serviceaccount.png "Service Account sample with CLI")

Role

A **Role** that defines the access required by the operator.

```
kubectl get role -n dx14
```

For more detailed information, use the `describe` command.

![](../images/container_eks_kubectl-cli-role.png "Role sample with CLI")

Role Binding

A **Role Binding** that binds the operator service account to the operator role.

```
kubectl describe rolebinding -n dx14
```

![](../images/container_eks_kubectl-cli-rolebinding.png "Role Binding sample with CLI")

Deployment

A **Deployment** that defines/describes the operator Replica Set.

![](../images/container_eks_kubectl-dashboard-deployment.png "Sample with Kubernetes Dashboard")

```
kubectl get deployment -n dx14
```

![](../images/container_eks_kubectl-cli-deployment.png "Deployment sample with CLI")

Replica Sets

**Replica Sets** based on the deployments of the ambassador and the operator, that maintains a stable set of replica pods.

![](../images/container_eks_kubectl-dashboard-replica-set.png "Sample with Kubernetes Dashboard")

```
kubectl get replicaset -n dx14
```

![](../images/container_eks_kubectl-cli-replica-set.png "Replica Set sample with CLI")

Metrics and Services

Services expose HCL Digital Experience running as part of the Stateful Set and provide metrics for the operator created.

![](../images/container_eks_kubectl-dashboard-services.png "Sample with Kubernetes Dashboard")

```
kubectl get service -n dx14
```

![](../images/container_eks_master.png "Service sample with CLI")

Secrets

There are several secrets that are created.

![](../images/container_eks_kubectl-dashboard-secrets.png "Sample with Kubernetes Dashboard")

```
kubectl get secrets -n dx14
```

```
kubectl describe secret dx-deployment-wps -n dx14
```

![](../images/container_eks_kubectl-cli-secrets.png "Secrets (get and describe) sample with CLI")

Kubernetes command to update existing secrets:

```
kubectl edit secret dx-deployment-wps -n dx14
```

Use `base64` encoded values when updating secrets. Most Linux operating systems will allow you to generate `base64` values with this command:

```
echo 'wpsadmin' | base64
```

Config Map

A **Config Map** is created to handle clustering in scenarios where multiple operators are deployed.

![](../images/container_eks_kubectl-dashboard-configmap.png "Sample with Kubernetes Dashboard")

```
kubectl get configmap -n dx14
```

![](../images/container_eks_kubectl-cli-configmap.png "Config Map sample with CLI")

Persistent Volume Claims

One or more **Persistent Volume Claims** are created, one for the shared profile, and another, if configured, for the logs of each pod.

![](../images/container_eks_kubectl-dashboard-persistence.png "Sample with Kubernetes Dashboard")

```
kubectl get pvc -n dx14
```

![](../images/container_eks_kubectl-cli-persistence.png "Persistent Volume Claims sample with CLI")

Stateful Set

A **Stateful Set** is created for the HCL Digital Experience core. A Stateful Set manages pods that are based on an identical container specification.

![](../images/container_eks_kubectl-dashboard-stateful.png "Sample with Kubernetes Dashboard")

```
kubectl get statefulset -n dx14
```

![](../images/container_eks_kubectl-cli-stateful.png "Stateful Sets sample with CLI")

Pods

**Pods** are part of the Stateful Set, running HCL Portal.

![](../images/container_eks_kubectl-dashboard-pods.png "Sample with Kubernetes Dashboard")

`kubectl get pods -l app=dx-deployment -n dx14'` \(limits to pods in the StatefulSetSpec\)

```
kubectl get pods -n dx14
```

![](../images/container_eks_kubectl-cli-pods.png "Pods sample with CLI")

Ambassador

To expose the DX server, HCL is leveraging [Ambassador](https://www.getambassador.io/docs/). Ambassador is deployed and configured by default. There are many artifacts included.

-   Custom resources that help define Ambassador: `AuthService`, `ConsulResolver`, `KubernetesEndpointResolver`, `KubernetesServiceResolver`, `Mapping`, `Module`, `RateLimitService`, `TCPMapping`, `TLSContext`, `TracingService`.
-   Ambassador deployment
-   Ambassador replica set
-   Ambassador pods \(by default, 3\)
-   Ambassador service and Ambassador admin service
-   An instance of TLS context

    ![](../images/container_eks_kubectl-dashboard-TLS.png "Sample with Kubernetes Dashboard")

    ```
    kubectl describe TLSContext -n dx14
    ```

    ![](../images/container_eks_kubectl-cli-TLS.png "TLS Context sample with CLI")


Mapping

An instance of **Mapping** for each target: DX Home Secure, WAS Home Secure, etc.

![](../images/container_eks_kubectl-dashboard-mapping.png "Sample with Kubernetes Dashboard")

```
kubectl get mapping -n dx14
```

![](../images/container_eks_kubectl-cli-mapping.png "Mapping sample with CLI")

Extras

There are several files created for each deployment. It is recommended to keep these files.

![](../images/container_eks_kubectl-cli-extra.png "Extra files")

-   File 1 `dxNameSpace_NAMESPACE.yaml` can be used to delete the `namespace`/`project` if needed.
-   File 2 `git_v1_dxdeployment_cr_NAMESPACE.yaml` is a representation of the last deployed deployment for the given `namespace`/`project`.

**Note:** With multiple instances of Digital Experience 9.5 containers writing to a shared **[Transaction log](https://www.ibm.com/support/knowledgecenter/SSEQTP_9.0.5/com.ibm.websphere.base.doc/ae/tjta_settlog.md)** \(tranlog\) directory, there is a possibility of data corruption which could lead to DX server startup issues. To avoid this possibility, beginning with CF192, for each DX 9.5 instance the deployment creates an additional dynamic Persistent Volume \(pv\) and Persistent Volume Claim \(pvc\) to contain the tranlog data of the individual instances.

**Parent topic:**[Deploy DX Container to Amazon EKS](../containerization/kubernetes_eks.md)

