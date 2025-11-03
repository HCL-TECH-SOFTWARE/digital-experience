# How to set generic JVM arguments on the dx-core pod in a containerized HCL DX environment 

## Applies to

> HCL Experience 8.5 and higher

## Introduction

 a containerized HCL Digital Experience (DX) environment, most configuration settings must be defined in the Helm chart (`values.yaml`) before you run a Helm upgrade to apply them. Because the Helm chart does not provide parameters for setting generic JVM arguments on the dx-core pod, you must configure them manually after deployment. This topic describes how to set generic JVM arguments for the dx-core pod in a containerized HCL DX environment.  

This document describes how to set generic JVM arguments for the dx-core pod in a containerized HCL DX environment.  

## Instructions

To add generic JVM arguments to the dx-core pod `wp_profile/WebSpherePortal` JVM:
  

1. Install or update the HCL DX environment by using the Helm chart. For more information, see [Deploying using Helm](../../../deployment/install/container/helm_deployment/overview.md){target="_blank"}.  
2. After the dx-core pod is running and the IBM Integrated Solutions Console is accessible, follow these steps:  
    1. Open a web browser and go to the IBM Integrated Solutions Console (for example, `http://<DX_HOSTNAME>/ibm/console`).  
    2. Sign in as an administrator.  
    3. In the navigation tree, select **Servers**.  
    4. Expand **Server types**, and then select **WebSphere application servers**.  
    5. Select the server name.  
    6. Expand **Java and process management**, and then select **Process definition**.  
    7. Under **Additional properties**, select **Java virtual machine**.  
    8. Locate the **Generic JVM arguments** field.  
    9. Add the required JVM arguments at the end of the existing values, separated by spaces.  
    10. Save the configuration changes.  
    11. Restart the dx-core pod for the new arguments to take effect.  
