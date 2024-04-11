# Installing Huddo Board

In this section, learn how to install Huddo Boards in HCL Digital Experience.

## Prerequisites

Prerequisites for installing Huddo Boards:

1. Set up HCL DX environment to host Huddo Boards:

    - Kubernetes cluster with `kubectl` installed and authenticated, or

    - Docker

2. **License Key**: Huddo Boards is a free entitlement for HCL DX customers, but it requires to obtain a license key from [](https://store.huddo.com). 


## Deploying Huddo Boards using Helm

Deploy Huddo Boards into Kubernetes or IBM Cloud Private for on-premise environments. For more information, see [Huddo Boards for Kubernetes and IBM Cloud Private](https://docs.huddo.com/boards/kubernetes/).

## Installing Huddo Boards Portlet

Install Huddo Boards Portlet as an application in DX. For more information, see [Boards Portlet](https://docs.huddo.com/boards/dx/portlet/).

## Uninstalling Huddo Boards

Follow the steps to uninstall Huddo Boards application from your DX deployment:

1. On your Kubernetes master node, determine what services are currently installed:
    
    ```
    helm list
    ```

2. Uninstall the Huddo Boards using the following command:

    ```
    helm uninstall <release_name> --purge

    ```
    Where <release_name> is `huddo-boards`, for example:

    ```
    helm uninstall huddo-boards --purge
    ```