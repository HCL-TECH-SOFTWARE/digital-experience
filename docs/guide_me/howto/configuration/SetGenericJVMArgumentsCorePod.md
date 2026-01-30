# How to set generic JVM arguments on the dx-core pod in a containerized HCL DX environment 

## Applies to

> HCL Experience 9.5 and higher

## Introduction

In a containerized HCL Digital Experience (DX) environment, most configuration settings must be defined in the Helm chart (`values.yaml`) before you run a Helm upgrade to apply them. Because the Helm chart does not provide parameters for setting generic JVM arguments on the `dx-core` pod, you must configure them manually after deployment. 

This article describes how to set generic JVM arguments for the `dx-core` pod in a containerized HCL DX environment.  

## Instructions

Refer to the following steps to add generic JVM arguments to the `dx-core` pod `wp_profile/WebSpherePortal` JVM:
  
1. Install or update the HCL DX environment using the Helm chart. For more information, refer to [Deploying using Helm](../../../deployment/install/container/helm_deployment/overview.md){target="_blank"}.  
2. After the `dx-core` pod is running and the IBM Integrated Solutions Console is accessible, follow these steps:  
    1. Open a web browser and go to the IBM Integrated Solutions Console (for example, `http://<DX_HOSTNAME>/ibm/console`).  
    2. Sign in as an administrator.  
    3. Navigate to **Servers > Server Types > WebSphere application servers**.
    4. Click your Portal server name then go to **Java and Process Management > Process definition > Java Virtual Machine**.
    5. Locate the **Generic JVM arguments** field.  
    6. Add the required JVM arguments at the end of the existing values, separated by spaces.  
    7. Click **Apply > Save**.
    8. Restart the `dx-core` pod.
