# Hybrid Deployment - Helm

This section describes how to install HCL Digital Experience 9.5 Container Update CF198 and later Portal Server and Web Content Manager services to on-premises platforms, operating with Digital Asset Management, Content Composer, Experience API deployed to cloud-based Kubernetes and OpenShift platforms using the Helm deployment method.

## Overview

The HCL Digital Experience 9.5 Hybrid deployment reference architecture and topics describe an approach to deploy and manage HCL Digital Experience 9.5 core Portal Server and Web Content Manager services on premises, and connect to cloud native components Digital Asset Management, Content Composer, Experience API and related services using Helm, in a production environment.

![Topology - HCL Digital Experience Hybrid On-premises and Cloud components deployment](../images/topology_hybrid_onprem_cloud_deployment.png "Topology - HCL Digital Experience Hybrid On-premises and Cloud components
                    deployment")

## Prerequisites

-   HCL Digital Experience V9.5 CF198 or a higher release is deployed to supported on-premises platforms in a standalone, cluster, or farm topology. See the [Roadmaps to deploy your Digital Experience 9.5 system](../install/deployment_patterns.md) topic for more information.
-   Practitioner Studio is enabled in the Digital Experience 9.5 CF198 or higher installation. See the [How to enable Practitioner Studio](../practitioner_studio/enable_prac_studio.md) topic for instructions.
-   A common domain that uses an SSL connection is established for both the on-premise HCL DX 9.5 CF198 and higher on-premise environments and the target Red Hat Open Shift or Amazon EKS, Azure AKS, or Google GKE platform deployment to contain the cloud native components \(HCL DX Experience API, Digital Asset Management and Content Composer\).

    For example, mytargetcloud.dx.com and myonprem.dx.com would have the same domain: dx.com.

-   Single sign-on must be enabled on HCL DX 9.5 CF198 or a higher on-premises environment. On DMGR or WAS Admin console, under **Security** \> **Global Security** \> **Web & SIP Security** \> **Single Sign-On**, the **Enabled** box is checked and the **Domain name** is set to common domain.

    For example, dx.com.

-   A high-performance network connection is established between the HCL DX 9.5 CF19 and higher on-premises environment and the target DX Red Hat Open Shift or Kubernetes platform deployment.

-   **Volume Requirement**: Requires an AccessMode of `ReadWriteMany`. Refer to the [Storage Class and Volume](sample_storage_class_volume.md) topic for more information.
-   Ensure you have obtained a backup of the HCL DX 9.5 on-premises deployment. See the [Backup and Restore](../admin-system/i_wadm_c_bkup_restr_winlinux.md) topic for additional information.
    -   **Step 1: Configure Networking** between the on-premises DX 9.5 CF198 or later deployment so that the HCL DX 9.5 Container Update CF198 or later components are accessible externally from the Kubernetes or OpenShift platform cluster. Reference the [Configure Networking](helm_configure_networking.md) topic in the Helm Planning sections of the Help Center.

    -   **Step 2: Set the Core application deployment parameter** in your custom-values.yaml file to `false`. Refer to the [Planning your container deployment using Helm](helm_planning_deployment.md) Help Center topic for more information.

    -   **Step 3: Proceed to configuration instructions** listed in this Help Center topic: [Helm Deployment Configuration](helm_install_commands.md).

**Parent topic:**[Deploying container platforms using Helm](../containerization/helm_deployment.md)

**Parent topic:**[Digital Experience on containerized platforms](../containerization/deployment.md)

