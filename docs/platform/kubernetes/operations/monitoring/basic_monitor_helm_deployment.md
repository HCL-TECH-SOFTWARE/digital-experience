# Basic monitoring

This topic describes options for monitoring an HCL Digital Experience 9.5 Kubernetes deployments installed using Helm.

## Monitoring

**Requirements**

**Video:** [Understanding the Liveness and Readiness Probes for HCL DX 9.5 Container Helm Deployments](https://youtu.be/wGes1A98SOE)

To use the monitoring commands described below, the Kubernetes Metrics Server must be installed, configured and running. For information on how to do this, please see the [Kubernetes documentation](https://github.com/kubernetes-sigs/metrics-server/releases).

**Monitoring commands**

With the Metrics Server installed, standard `kubectl top` commands can be used to monitor Digital Experience 9.5 components or the nodes on which they are installed.

**Examples**

To get memory and CPU usage details for the pods in your DX deployment:

```
kubectl top pod -n your-namespace -l release=your-release-name
```

In the above example `your-namespace` is the namespace in which your HCL Digital Experience 9.5 deployment is installed and `your-release-name` is the Helm release name you used when installing.

To get memory and CPU usage details for the current Kubernetes node:

```
kubectl top node
```

**Parent topic:**[Troubleshooting your Helm deployment](../containerization/helm_troubleshooting.md)

