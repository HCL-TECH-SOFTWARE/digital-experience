---
title: Software licensing portals
---

# Downloading and installing HCL DX from a software licensing portal

HCL Digital Experience (DX) software is now available through the new [My HCLSoftware (MHS)](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0109011){target="_blank"} portal, in parallel to the existing [HCL Software License and Download portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344){target="_blank"} delivered in FlexNet.

!!!note
    The MHS portal will replace the HCLSoftware License and Download portal as of June 30, 2025. For more information, refer to [Announcing HCLSoftware Download site and Licensing mechanism changes](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0112538){target="_blank"}.

To change your entitlement server from FlexNet to MHS portal, see the instructions in [Entitlement checking in the My HCLSoftware delivery portal](./configure_entitlement_checks/mhs_license_and_delivery.md). If there is any overlap between the data from FlexNet and MHS portal, you can retrieve the session usage numbers from both platforms separately. You can then add the numbers from both platforms to obtain the total number of sessions for a specific period.

New customers, or those with new deployments, must register at the MHS portal and download their entitled HCL DX packages there to avoid any need to convert later.

Co-packaged software is identified in HCL DX 9.5 download documents, which are available in your entitlements in the [HCL Software License and Download Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344){target="_blank"}.

## Getting the software

You can access product software from the [HCL Software Licensing Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344){:target="_blank"}. For more guidance, see the [Step-by-step guide on downloading HCL Digital Experience products](../../../guide_me/tutorials/access-software/register-for-access.md){:target="_blank"} and watch the video tutorial about [How to download HCL Digital Experience Software from the License Server](https://youtu.be/ze0ZhLlXwfU){:target="_blank"}.

HCL DX V9.5 for deployment to Kubernetes environments can be accessed via Helm charts in the [HCL Harbor repository](https://hclcr.io/account/sign-in?redirect_url=/harbor/projects){:target="_blank"}. Customers with credentials to access entitled software in the HCL Software Licensing Portal can apply those credentials to optionally access the Docker components of DX v9.5 releases. For more information, see [Access and Deploy DX 9.5 Docker components from HCL Harbor](../harbor_container_registry.md) for more information. 

HCL DX software is available through several product offerings and associated software licenses. Depending on the product offering that you purchased, your product might include some or all of the following HCL DX and related programs:

- HCL Digital Experience Cloud Native 9.5
- Digital Experience Manager
- HCL Portal
- HCL Portal Express
- HCL Web Content Manager
- HCL Portal Enable
- HCL Portal Extend
- HCL Customer Experience Suite
- HCL Employee Experience Suite
- IBM WebSphere Application Server Network Deployment
- IBM DB2 Universal Database Workgroup Server Edition
- HCL Connections
- HCL Leap

For more HCL DX product offering and license details, see the [HCL Software Product License site](https://www.hcl-software.com/resources/license-agreements){:target="_blank"}.

## Installation paths

Depending on your current scenario, you will start from different paths:

- Fresh full installation (for new customers or for a new system)
- HCL DX9.5 deployment to supported platforms, including Docker or OpenShift/Kubernetes with Docker
- Updating an existing HCL DX 8.5 or 9.0 system

You can also test the new HCL DX API Docker image and run it. Visit the [Experience API](../../../extend_dx/apis/hcl_experience_api/index.md) documentation to learn more.

## Fresh full installation

For a fresh full installation, follow the installation path by using the components that follow, which you can find in the [HCL Software Licensing Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344) (FlexNet) with HCL DX software packages:

- IBM® Installation Manager.
- IBM WebSphere® Application Server 9.0.5.
- HCL Portal 8.5
- Latest available HCL Digital Experience CF, at least CF205
- HCL Digital Experience 9.5
- Corresponding edition files according to your HCL DX entitlements (HCL Portal Enable, HCL Portal Extend, HCL Portal Server, and HCL Portal Express)

After you install [IBM Installation Manager](https://www.ibm.com/support/knowledgecenter/SSDV2W/im_family_welcome.html){:target="_blank"}, you must configure the repositories for IBM WebSphere Application Server 9.0.5, HCL Portal 8.5, HCL DX CF205 or later, HCL DX 9.5, and the corresponding edition files.

## Update an existing HCL DX 8.5 or 9.0 system

The path from an existing HCL DX 8.5 or 9.0 system to HCL DX 9.5 is to download the latest available HCL DX CF and the 9.5 files. Then, install the cumulative fix by the usual CF process.

Afterward, users start IBM Installation Manager, configure the 9.5 repository, and then add version 9.5. Users who are using HCL Portal Enable, HCL Portal Extend, or HCL Web Content Manager must add both the HCL Portal 9.5 Server and the applicable edition via IBM Installation Manager.

-   Documentation resource: [Apply Combined Cumulative Fix](../../../deployment/install/traditional/cf_install/index.md)

## Deploy HCL DX to Kubernetes platforms

Follow this installation path to deploy DX from an existing HCL DX 8.5 or 9.0 system:

1.  Download the following HCL DX 9.5 container image file: HCL Digital Experience Docker container
2.  Follow these [deployment steps](../../../deployment/install/container/index.md) to deploy DX to supported Kubernetes platforms.
3.  Stage the content to the new environment to move from an existing system to HCL DX on Kubernetes platforms.

## Configure HCL DX Cloud Native 9.5 entitlement checks

Beginning with [HCL Digital Experience 9.5 Container Update CF207](../../../whatsnew/cf20/newcf207.md), you must specify certain entitlement check parameters in your [HCL Digital Experience Cloud Native 9.5 Tier 1 – 7](../../product_overview/offerings.md#hcl-digital-experience-cloud-native) installations to accomplish entitlement checks with the HCL Software delivery portals. See [HCL Digital Experience Cloud Native 9.5 Entitlement Checks](../software_licensing_portal/configure_entitlement_checks/index.md) for more information.

???+ info "Related information"
    - [Locating and Downloading DX Products](../../../guide_me/tutorials/access-software/locating-downloads.md)
