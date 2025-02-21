# Environment Recommendations

Before beginning your install of HCL Portal and Web Content Manager, you should consider how the environment will be used to achieve ideal performance.

HCL DX 9.5 CF200 and later is designed to run on any [Certified Kubernetes platform](https://www.cncf.io/certification/software-conformance){target="_blank"} , provided that the following statements are true:

- The Kubernetes platform is hosted on x86-64 hardware.
- The Kubernetes platform is officially supported by [Helm](https://helm.sh/docs/topics/kubernetes_distros/){target="_blank"}.

For more information, see [System Requirements](../../../../get_started/system_requirements/index.md).

To obtain the performance guidance deployments to support Kubernetes container platforms, refer to the following topics:

[Kubernetes Deployment](../../../../get_started/plan_deployment/container_deployment/index.md)

[Containerization requirements and limitations](../../../../get_started/plan_deployment/container_deployment/limitations_requirements.md)

## Prerequisites checker for DX deployment

HCL DX provides a tool called "Prereqs Checker" that runs several checks to confirm whether the prerequisites for various components are met.

You can get the result of these checks from the container logs of the prereqs-checker container in the pod where Prereqs Checker is installed. For more information, see [Configure Prereqs Checker For DX Deployment](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md).

For these checks, one separate sidecar container is deployed with the main application container. This is a lightweight container, so the main application performance is not affected.

The primary objective of the Prereqs Checker is to learn whether the specified prerequisites are met and to inform users of the result in the logs. You can also use the checker to discover basic information about the file system of the mounted volumes, which helps track the issues related to the file systems.

** Note ** Never allow DX Core to run if the Prereqs Checker indicates a problem with the attached storage. 
There are Portal cache attached to the attached storage.
If there are insufficient resources to efficiently access these caches, Portal performance can be erratic or catastrophic.

## DX deployment options

HCL Digital Experience is a platform that helps you deliver the critical services of your organization. It is designed to be scalable and flexible, supports authentication for security and personalization, and aids in integration with varied applications. Strong encryption and cross-system authentication keep your business-critical functions safe. Your teams can create, manage, and deliver powerful and reliable digital experiences every day.

There are different options to deploy DX:

**Traditional deployments**: You can deploy HCL DX on-premises in the WebSphere Application Server infrastructure.

**Container-based deployments**: HCL supports container-based deployments. You can deploy HCL DX into Kubernetes infrastructures to manage and maintain multiple environments such as testing, development, staging, and production.

For more information, refer to the detailed system requirements for [traditional deployments](../../../../get_started/system_requirements/traditional/index.md) or [container-based deployments](../../../../get_started/system_requirements/kubernetes/kubernetes-runtime.md).

For information on container based deployments [Kubernetes Deployment](../../../../get_started/plan_deployment/container_deployment/index.md)

![alt text](../HCL-DX-deployment-diagram-Kubernetes.png)

One component, DX Core, is common to both deployment options. DX Core contains several functions, which were originally available for traditional deployments. These functions are applicable to both traditional and container-based deployments. 

In addition to the DX Core features, several container-specific features are available only for the container-based deployments.

Whether developing, testing, or running a full production environment, using container-based deployments provide the best results for the ease of deploying applications, including the latest version of HCL Digital Experience. You can deploy applications and DX in a fraction of the time that the traditional deployment model requires.

## Hardware Multithreading

Many modern processor architectures support hardware multithreading. For example, this is known as Hyper-Threading (HT) on Intel processors and Simultaneous Multithreading (SMT) on Power processors. Our experience is that using hardware multithreading provides an improvement in capacity in all of the scenarios and platforms we have measured, so we would recommend its use on platforms where this is an option.

However, do not allow pods running DX Core to over commit resources. The CPU and Memory allocation for a pod running DX Core must account for the worst case needs (both in CPU and Memory) and should not be allowed to share this memory with other pods. 

## Virtualization

When running Portal in a virtualized environment, it is important to ensure that the virtual machines are allocated enough resources to perform optimally. To reach capacity on a virtual machine (VM) it may be necessary to ensure that the virtual resources map one-to-one with physical resources, especially CPU and memory. Running Portal on a VM whose host is overcommitted will not achieve optimal performance. Consider dedicating CPUs and memory to the Portal VMs.

In addition, ensure that the network bandwidth to the host is sufficient for all VMs. Depending on requirements, the Portal VM may require a dedicated network interface on the host.
