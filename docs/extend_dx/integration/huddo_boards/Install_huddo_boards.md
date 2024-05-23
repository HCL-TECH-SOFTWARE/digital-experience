# Installing Huddo Boards in HCL DX

Learn how to install [Huddo Boards](https://www.huddo.com/boards) in an HCL Digital Experience (DX) environment.

## Prerequisites

Make sure that you have the following before installing Huddo Boards:

- HCL DX environment deployed to a supported K8s platform

- Container runtime to host Boards, either:

    - Kubernetes cluster with `kubectl` installed and authenticated, or

    - Docker

- **License Key**: Huddo Boards is a free entitlement for HCL DX customers, but it requires customers to obtain a license key from the [Huddo Store](https://store.huddo.com). 

!!! note
    Please contact your HCL seller if you are interested in purchasing the unlimited Huddo Boards version.


## Deploying Huddo Boards using Helm

Deploy Huddo Boards into Kubernetes for on-premises environments. For more information, see [Boards for HCL DX](https://docs.huddo.com/boards/dx/).

## Installing Huddo Boards Portlet

Install Huddo Boards Portlet as an application in DX. For more information, see [Boards Portlet](https://docs.huddo.com/boards/dx/portlet/).

## Uninstalling Huddo Boards

Follow the steps to uninstall Huddo Boards application from your DX deployment:

1. On your Kubernetes master node, determine what services are currently installed using the following command:

    ``` bash
    helm list
    ```

2. Uninstall Huddo Boards using the following command:

    ``` bash
    helm uninstall <release_name> --purge
    ``` 
    Where <release_name> is `huddo-boards`, for example:

    ``` bash
    helm uninstall huddo-boards --purge
    ```