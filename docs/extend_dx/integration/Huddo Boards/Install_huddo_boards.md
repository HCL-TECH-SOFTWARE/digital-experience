# Installing Huddo Board in HCL DX

Learn how to install Huddo Boards in an HCL Digital Experience (DX) environment.

## Prerequisites

Make sure that you have the following before installing Huddo Boards:

- HCL DX environment

- Container runtime to host Boards, either:

    - Kubernetes cluster with `kubectl` installed and authenticated, or

    - Docker

- **License Key**: Huddo Boards is a free entitlement for HCL DX customers, but it requires to obtain a license key from [Huddo Store](https://store.huddo.com). 


## Deploying Huddo Boards using Helm

Deploy Huddo Boards into Kubernetes for on-premises environments. For more information, see [Huddo Boards for Kubernetes and IBM Cloud Private](https://docs.huddo.com/boards/kubernetes/).

## Installing Huddo Boards Portlet

Install Huddo Boards Portlet as an application in DX. For more information, see [Boards Portlet](https://docs.huddo.com/boards/dx/portlet/).

## Uninstalling Huddo Boards

Follow the steps to uninstall Huddo Boards application from your DX deployment:

1. On your Kubernetes master node, to determine what services are currently installed, use the following command:

    ```
    helm list
    ```

2. Uninstall Huddo Boards using the following command:

    ```
    helm uninstall <release_name> --purge

    ```
    Where <release_name> is `huddo-boards`, for example:

    ```
    helm uninstall huddo-boards --purge
    ```