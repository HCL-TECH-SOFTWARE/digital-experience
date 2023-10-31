# Architecture overview

HCL Digital Experience is a platform that can help you deliver the critical services of your organization. It is designed to be scalable and flexible, supports authentication for security and personalization, and aids in  integration with varied applications. Strong encryption and cross-system authentication keep your business-critical functions safe. Your teams can create, manage, and deliver powerful and reliable digital experiences every day.

There are different options to deploy DX:

- **Traditional deployments**: You can deploy HCL DX on-premises in the WebSphere Application Server infrastructure.
- **Container-based deployments**: HCL supports container-based deployments. You can deploy HCL DX into Kubernetes infrastructures to manage and maintain multiple environments such as testing, development, staging, and production.

For more information, refer to the detailed system requirements for [traditional deployments](../system_requirements/traditional/index.md) or [container-based deployments](../system_requirements/kubernetes/kubernetes-runtime.md).

![Containerization Architecture Overview](../../images/HCL-DX-deployment-diagram-Kubernetes.png)

One component, DX Core, is common to both deployment options. DX Core contains several functions, which were originally available for traditional deployments. Those functions applicable to both traditional and container-based deployments.

In addition to the DX Core features, several container-specific features are available only for the container-based deployments.

Whether developing, testing, or running a full production environment, using container-based deployments provide the best results for the ease of deploying applications, including the latest version of HCL Digital Experience. You can deploy applications and DX in a fraction of the time that the traditional deployment model requires.


