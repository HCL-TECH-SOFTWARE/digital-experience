# How to set generic JVM arguments on the dx-core pod in a containerized HCL DX environment

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

When running HCL Digital Experience in a containerized environment, most of the configuration settings need to be set in the helm-chart (values.yaml file) before a helm-upgrade need to be done to get them activated. Because HCL Digital Experience does not offer parameters for setting the generic jvm arguments for the core-pod in the helm-chart, the parameters need to be specified differently. This document provides detailed steps to set generic jvm arguments for the dx-core pod in a HCL DX containerized environment.  

## Instructions

If additional generic jvm arguments need to be added to the dx-core pod wp_profile/WebSpherePortal JVM the following procedure applies:  

1. Install or Update the HCL Digital Experience environment using the helm chart. Details can be found at URL: [Deploying using Helm](../../../deployment/install/container/helm_deployment/overview.md){target="_blank"}.  

2. As soon as the dx-core pod is up and running and the IBM Integrated Solutions Console is accessible, set the generic jvm arguments as following:  

    a. Open a web-browser and access the IBM Integrated Solutions Console (admin console). (For example: `http://<DX_HOSTNAME>/ibm/console`)  
    b. Login as administrator.  
    c. In the Administration Console click **Servers**.  
    d. Expand Server Type, then click **WebSphere application servers**.  
    e. Click to the name of the server.  
    f. Expand **Java and Process Management**, then click **Process Definition**.  
    g. Under the **Additional Properties** section, click **Java Virtual Machine**.  
    h. Scroll down and locate the textbox for **Generic JVM arguments**.  
    i. Add the additional generic jvm arguments at the end of all values that are already specified by using a blank-character as separator.  
    j. Once changes are saved to the master configuration, the core-pod(s) require a restart for the arguments to take effect.  
