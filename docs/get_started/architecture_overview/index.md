# Architecture Overview

HCL Digital Experience is a solid and reliable platform that can help deliver the vital services of your organization. It is designed to be scalable and flexible, supports authentication for security and personalization, and aids in easy integration with varied applications. Intelligence-agency-grade encryption and cross-system authentication keep your business-critical functions safe. Your teams can easily create, manage, and deliver powerful and reliable digital experiences everyday.

There are different options to deploy DX:
In **traditional deployments**, DX is natively deployed on premises into WebSphere Application Server infrastructures.
While traditional deployments still remain an option, a more modern option as been added recently:
HCL introduced full support for **container-based deployments**. HCL DX can be deployed into Kubernetes infrastructures for test, development, staging, and production environments.

For more information, please have a look at the detailed system requirements for either [traditional deployments](../system_requirements/traditional/operatingsystems/) or [container-based deployments](../system_requirements/kubernetes/kubernetes-runtime/).

![Containerization Architecture Overview](../../images/haproxy-optional-ingress-architecture.png)

There is one component called DX Core that is common for both deployment options. DX Core contains all functionalities, which were originally available for traditional deployments, that are now applicable for both traditional and container-based deployments.
Container-based deployments add additional capabilities to DX that are only available as containers.

Whether developing, testing, or running a full production environment, the use of container-based deployments are preferred for the ease of deploying applications, including the latest version of HCL Digital Experience. Deploy in a fraction of the time than what it takes in the traditional deployment models.


