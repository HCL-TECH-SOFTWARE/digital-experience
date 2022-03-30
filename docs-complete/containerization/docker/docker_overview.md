# Docker images for HCL Digital Experience 9.5

HCL Digital Experience 9.5 supports deployments on Docker and popular Kubernetes platforms. Learn more about the latest list of container images and supported deployment platforms.

HCL Digital Experience 9.5 core and related component images are provided in your HCL Digital Experience entitlements in the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). For the latest list of container images and supported deployment platforms please consult the Docker containers [Deployment](../containerization/deployment.md) topic pages in this section.

## Overview

Docker is a platform for developers and sysadmins to **develop, deploy, and run** applications with containers. Containerization is the use of Linux containers to deploy applications. While the use of containers to deploy applications is not new, containers are favored due to the ease of deploying applications like the latest version of HCL Digital Experience.

The HCL Digital Experience containers are launched by running a runtime instance of an image. An image is an executable package that includes everything needed to run the HCL Digital Experience 9.5 application, including the code, a runtime, libraries, environment variables, and configuration files. Because it runs a discrete process, it does not take any more memory other than the executable image with state or user process.

## Installation, Deployment and Migration Guidance

1.  Proceed to the Deployment topic page and follow the installation steps outlined in the Docker or supported Kubernetes platform of choice.
    -   Documentation resource: [Deployment](../containerization/docker_image_deployment.md)
2.  To migrate an existing on-premises platform Digital Experience deployment to a supported Kubernetes platform, access the Staging topic page in this section.
    -   Documentation resource: [Staging](../containerization/container_staging.md)
3.  Once you have completed a Digital Experience 9.5 Container deployment, to update the DX 9.5 container images to the latest Container Update releases, follow steps outlined in the Container Maintenance Help Center topic in this section.
    -   Documentation resource: [Maintenance](../containerization/maintenance.md)

**Parent topic:**[DX on Docker](../docker/dxondocker.md)

