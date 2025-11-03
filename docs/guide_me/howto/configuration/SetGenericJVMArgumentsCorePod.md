# How to set generic JVM arguments on the dx-core pod in a containerized HCL DX environment

## Applies to

> HCL Experience 9.5 and higher

## Introduction

In a containerized HCL DX environment, most configuration settings must be defined in the Helm chart (`values.yaml`) before you run a Helm upgrade to apply them. Because the Helm chart does not provide parameters for setting generic JVM arguments on the dx-core pod, you must configure them differently.  

This documentation describes how to set generic JVM arguments for the dx-core pod in a containerized HCL DX environment.  

## Instructions

To add generic JVM arguments to the dx-core pod wp_profile/WebSpherePortal JVM, follow these steps:  

1. Install or Update the HCL DX environment using the helm chart. Details can be found at URL: [Deploying using Helm](../../../deployment/install/container/helm_deployment/overview.md){target="_blank"}.  

2. As soon as the dx-core pod is up and running and the IBM Integrated Solutions Console is accessible, set the generic jvm arguments as follows:

    1. Open a web-browser and access the IBM Integrated Solutions Console (admin console). (For example: `http://<DX_HOSTNAME>/ibm/console`)  
    2. Login as administrator.  
    3. In the Administration Console click **Servers**.  
    4. Expand Server Type, then click **WebSphere application servers**.  
    5. Select the server name.  
    6. Expand **Java and Process Management**, then click **Process Definition**.  
    7. Under the **Additional Properties** section, click **Java Virtual Machine**.  
    8. Scroll down and locate the textbox for **Generic JVM arguments**.  
    9. Add the additional generic jvm arguments at the end of all values that are already specified by using a space as separator.  
    10. Once changes are saved to the master configuration, the core-pod(s) require a restart for the arguments to take effect.  
