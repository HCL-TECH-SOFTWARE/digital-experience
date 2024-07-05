---
title: Software Licensing Portal
---

# Download and Install from the Software Licensing Portal

New and existing users need to register at the HCL Software License Portal and download their entitled HCL Digital Experience package(s).

Co-packaged software is identified in HCL Digital Experience 9.5 Download documents available in your entitlements on the [HCL Software License and Download Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344).

## Getting the software

Product software can be accessed from the [HCL Software Licensing Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344){:target="_blank"}. For additional guidance, refer to the [Step-by-step guide on downloading HCL Digital Experience products](../../../guide_me/tutorials/access-software/register-for-access.md){:target="_blank"} and watch the video tutorial on [How to download HCL Digital Experience Software from the License Server](https://youtu.be/ze0ZhLlXwfU){:target="_blank"}.

HCL Digital Experience V9.5 for deployment to Kubernetes environments can be accessed via Helm charts in the [HCL Harbor repository](https://hclcr.io/account/sign-in?redirect_url=/harbor/projects){:target="_blank"}. Customers with credentials to access entitled software in the HCL Software Licensing Portal may apply those credentials to optionally access the Docker components of Digital Experience v9.5 releases. For more information, see [Access and Deploy DX 9.5 Docker components from HCL Harbor](../harbor_container_registry.md) for more information. 

HCL Digital Experience software is available through several product offerings and associated software licenses. Depending on the product offering that you purchased, your product might include some or all of the following HCL Digital Experience and related programs:

HCL Digital Experience Cloud Native 9.5, Digital Experience Manager, HCL Portal, HCL Portal Express, HCL Web Content Manager, HCL Portal Enable, HCL Portal Extend, HCL Customer Experience Suite, HCL Employee Experience Suite, IBM WebSphere Application Server Network Deployment, IBM DB2 Universal Database Workgroup Server Edition, HCL Connections, and HCL Leap.

Additional HCL Digital Experience product offering and license details may be found at the [HCL Software Product License site](https://www.hcl-software.com/resources/license-agreements){:target="_blank"}.

## Installation paths

There are different paths that you will start from depending on your current scenario:

1.  Fresh full installation (for new customers or for a new system)
2.  HCL Digital Experience 9.5 deployment to supported platforms, including Docker or OpenShift/Kubernetes with Docker
3.  Updating an existing HCL Digital Experience 8.5 or 9.0 system

Users can also test the new HCL Digital Experience API Docker image and run it. Visit the [Experience API](../../../extend_dx/apis/hcl_experience_api/index.md) documentation to learn more.

## Fresh full installation

For a fresh full installation, follow the installation path using the components below which may be found in the [HCL Software Licensing Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344) (FlexNet) with HCL Digital Experience software packages:

1.  IBM® Installation Manager.
2.  IBM WebSphere® Application Server 9.0.5.
3.  HCL Portal 8.5
4.  Latest available HCL Digital Experience CF, at least CF205
5.  HCL Digital Experience 9.5
6.  Corresponding edition files according to your HCL Digital Experience entitlements (HCL Portal Enable, HCL Portal Extend, HCL Portal Server, and HCL Portal Express)

After installing the [IBM Installation Manager](https://www.ibm.com/support/knowledgecenter/SSDV2W/im_family_welcome.html){:target="_blank"}, users need to configure the repositories for IBM WebSphere Application Server 9.0.5, HCL Portal 8.5, HCL Digital Experience CF205 or higher, and HCL Digital Experience 9.5, and the corresponding edition files.

## Update an existing HCL Digital Experience 8.5 or 9.0 system

The path from an existing HCL Digital Experience 8.5 or 9.0 system to HCL Digital Experience 9.5 is to download the latest available HCL Digital Experience CF as well as the 9.5 files. Then install the cumulative fix via the usual CF process.

Afterwards, users start the IBM Installation Manager, then configure the 9.5 repository, and add 9.5. Users who are using HCL Portal Enable, HCL Portal Extend, or HCL Web Content Manager need to add both the HCL Portal 9.5 Server and the applicable edition via IBM Installation Manager.

-   Documentation resource: [Apply Combined Cumulative Fix](../../../deployment/install/traditional/cf_install/index.md)

## Deployment of HCL Digital Experience to Kubernetes platforms

The following is the installation path from an existing HCL Digital Experience 8.5 or 9.0 system:

1.  Download the following HCL Digital Experience 9.5 container image file:
    -   HCL Digital Experience Docker container
2.  Follow the [documentation here](../../../deployment/install/container/index.md) to deploy to supported Kubernetes platforms.
3.  Stage the content to the new environment to move from an existing system to HCL Digital Experience on Kubernetes platforms.

## Configure HCL Digital Experience Cloud Native 9.5 Entitlement checks
Beginning with [HCL Digital Experience 9.5 Container Update CF207](../../../whatsnew/cf20/newcf207.md), you must specify certain entitlement check parameters within your [HCL Digital Experience Cloud Native 9.5 Tier 1 – 7](../../product_overview/offerings.md#hcl-digital-experience-cloud-native) installations to accomplish entitlement checks with the HCL Software Licensing and Delivery Portal (Flexnet). See the Help Center topic [HCL Digital Experience Cloud Native 9.5 entitlement checks](../software_licensing_portal/configure_entitlement_checks/index.md) for more information.

???+ info "Related information"
    - [Locating and Downloading DX Products](../../../guide_me/tutorials/access-software/locating-downloads.md)
