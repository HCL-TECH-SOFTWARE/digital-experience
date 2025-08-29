# Docker images for HCL Digital Experience 9.5

HCL Digital Experience (DX) 9.5 supports deployments on popular Kubernetes platforms and Docker Compose. Learn more about the latest list of container images and supported deployment platforms.

!!!note
    HCL DX Docker Compose deployments are only intended for development and test environments. The use of HCL DX Docker Compose in production environments is not supported. Only Docker Compose deployments are supported on native Docker. For questions or issues, create an issue in the [dx-docker-compose GitHub repository](https://github.com/HCL-TECH-SOFTWARE/dx-docker-compose){target="_blank"}.

HCL DX 9.5 core and related component images are provided in your HCL DX entitlements on the [HCL Software Licensing Portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do){target="_blank"}. For the latest list of container images and supported deployment platforms, consult the Docker containers [Deployment](../container_deployment/index.md) topic pages in this section.

## Overview

Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. Containerization is the use of Linux containers to deploy applications. Although the use of containers to deploy applications is not new, containers are favored because they facilitate deploying applications like the latest version of HCL DX.

In HCL DX, you start containers by running a runtime instance of an image. An image is an executable package that includes everything required to run the HCL DX 9.5 application, including the code, a runtime, libraries, environment variables, and configuration files. Because it runs a discrete process, it does not take any more memory other than the executable image with a state or user process.

## Installation, deployment, and migration guidance

1. Go to [Deployment](../container_deployment/index.md) and follow the installation steps outlined in the Docker or the supported Kubernetes platform of your choice.

2. To migrate a DX deployment that exists on an on-premises platform to a supported Kubernetes platform, go to [Staging](../../../deployment/manage/container_configuration/container_staging.md).

3. After you deploy DX 9.5 Container, update the DX 9.5 container images to the latest container update releases. Refer to [Upgrading Helm Deployment](../../../deployment/install/container/helm_deployment/update_helm_deployment.md) for more information.
