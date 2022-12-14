# Architecture Overview

HCL Digital Experience is a solid and reliable platform that can help deliver the vital services of your organization. It is designed to be scalable and flexible, supports authentication for security and personalization, and aids in easy integration with varied applications. Strong encryption and cross-system authentication keep your business-critical functions safe. Your teams can easily create, manage, and deliver powerful and reliable digital experiences everyday.

There are different options to deploy DX:
- **Traditional deployments**: HCL DX can be deployed on-premises in the WebSphere Application Server infrastructure.
- **Container-based deployments**: HCL supports container-based deployments. HCL DX can be deployed into Kubernetes infrastructures to manage and maintain multiple environments such as testing, development, staging, and production.

For more information, refer to the detailed system requirements for [traditional deployments](../system_requirements/traditional/index.md) or [container-based deployments](../system_requirements/kubernetes/kubernetes-runtime.md).

![Containerization Architecture Overview](../../images/haproxy-optional-ingress-architecture.png)

There is one component called DX Core that is common for both deployment options. DX Core contains functionalities, which were originally available for traditional deployments, that are now applicable for both traditional and container-based deployments.

Besides the DX Core features, there are container-specific features that are available only for the container-based deployments.

Whether developing, testing, or running a full production environment, the use of container-based deployments are preferred for the ease of deploying applications, including the latest version of HCL Digital Experience. Deploy in a fraction of the time than what it takes in the traditional deployment model.


