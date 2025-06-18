
# Environment Recommendations

Before you install HCL Digital Experience (DX) and Web Content Manager (WCM), you should consider how the environment will be used to achieve ideal performance.

 **HCL DX 9.5 CF200 and later** is designed to run on any [Certified Kubernetes platform](https://www.cncf.io/certification/software-conformance){target="_blank"}, as long as the Kubernetes platform:<!--!page cannot be reached. can we just remove the link?-->

-  Runs on **x86-64 hardware**  
 Is officially supported by [Helm](https://helm.sh/docs/topics/kubernetes_distros/){target="_blank"}

 For more details, see the [System Requirements](../../../../get_started/system_requirements/index.md).

 To obtain performance guidance for deployments on Kubernetes container platforms, refer to the following topics:

-  [Kubernetes Deployment](../../../../get_started/plan_deployment/container_deployment/index.md)
-  [Containerization Requirements and Limitations](../../../../get_started/plan_deployment/container_deployment/limitations_requirements.md)

##  Prerequisites Checker for DX Deployment

HCL DX provides a tool called **Prereqs Checker** that performs several checks to confirm whether the prerequisites for various components are met.

 **Log Output**  
You can view the results of these checks in the container logs of the `prereqs-checker` container within the pod where it is installed.  
For more information, see [Configure Prereqs Checker for DX Deployment](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md).

 **Sidecar Architecture**  
The Prereqs Checker runs as a **separate sidecar container** alongside the main application container. It is lightweight and does **not affect** the main application's performance.

 **Purpose**

The Prereqs Checker is designed to:

* Verify that all required prerequisites are met.
* Report the results in the container logs.
* Provide basic information about the file system of mounted volumes (helpful for diagnosing file system-related issues).

!!! Important
    Do not allow DX Core to run if the Prereqs Checker indicates a problem with the attached storage. There are Portal caches attached to the attached storage. If there are insufficient resources to efficiently access these caches, Portal performance can be.

## DX deployment options

HCL DX is a platform that helps you deliver the critical services of your organization. It is designed to be scalable and flexible, supports authentication for security and personalization, and aids in integration with varied applications. Strong encryption and cross-system authentication keep your business-critical functions safe. Your teams can create, manage, and deliver powerful and reliable digital experiences every day.

There are different options to deploy DX:

 - **Traditional deployments**: You can deploy HCL DX on-premises in the WebSphere Application Server infrastructure.

 - **Container-based deployments**: You can deploy HCL DX into Kubernetes infrastructures to manage and maintain multiple environments such as testing, development, staging, and production.

📚 For more information, refer to the detailed system requirements for:

-  [Traditional Deployments](../../../../get_started/system_requirements/traditional/index.md)  
-  [Container-Based Deployments](../../../../get_started/system_requirements/kubernetes/kubernetes-runtime.md)

 For details on how to deploy in a container environment, see:  
 [Kubernetes Deployment](../../../../get_started/plan_deployment/container_deployment/index.md)

 ![HCL DX Kubernetes Deployment Diagram](../HCL-DX-deployment-diagram-Kubernetes.png)

The DX Core component is available to both deployment options. DX Core contains several functions which were originally available for traditional deployments. These functions are applicable to both traditional and container-based deployments.

In addition to the DX Core features, several container-specific features are available only for the container-based deployments.

Whether you are developing, testing, or running a full production environment, using container-based deployments provide the best results for deploying applications easily, including the latest version of HCL DX. You can deploy applications and DX in a fraction of the time that the traditional deployment model requires.

## Hardware Multithreading

Many modern processor architectures support hardware multithreading. For example, hardware multithreading is known as Hyper-Threading (HT) on Intel processors and Simultaneous Multithreading (SMT) on Power processors. Using hardware multithreading is highly recommended on platforms where this option is available as it improves capacity in all of the scenarios and platforms that were measured.

!!! Important

    Do not allow pods running DX Core to overcommit resources. The CPU and Memory allocation for a pod running DX Core must account for worst case needs (both in CPU and Memory) and should not be allowed to share this memory with other pods. 

## Virtualization

When running Portal in a virtualized environment, ensure that the virtual machines (VMs) are allocated enough resources to perform optimally. To reach capacity on a VM, ensure that the virtual resources map one-to-one with physical resources, especially CPU and memory. Running Portal on a VM whose host is overcommitted will not achieve optimal performance. Consider dedicating CPUs and memory to the Portal VMs.

Additionally, ensure that the network bandwidth to the host is sufficient for all VMs. Depending on requirements, the Portal VM may require a dedicated network interface on the host.
