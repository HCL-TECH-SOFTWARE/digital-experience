# Getting the software

New and existing users need to register at the HCL Software License Portal and download their entitled HCL Digital Experience package\(s\).

## Getting the software

Product software can be accessed from the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release). For additional guidance, refer to the [Step-by-step guide on downloading HCL Digital Experience products](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878) and watch the video tutorial on [How to download HCL Digital Experience Software from the License Server](https://youtu.be/ze0ZhLlXwfU).

HCL Digital Experience software is available through several product offerings and associated software licenses. Depending on the product offering that you purchased, your product might include some or all of the following HCL Digital Experience and related programs:

Digital Experience Manager, HCL Portal, HCL Portal Express, HCL Web Content Manager, HCL Portal Enable, HCL Portal Extend, HCL Customer Experience Suite, HCL Employee Experience Suite, IBM WebSphere Application Server Network Deployment, IBM DB2 Universal Database Workgroup Server Edition, HCL Connections, and HCL Leap.

Additional HCL Digital Experience product offering and license details may be found at the [HCL Software Product License site](https://www.hcltechsw.com/wps/portal/resources/license-agreements).

## Installation paths

There are different paths that you will start from depending on your current scenario:

1.  Fresh full installation \(for new customers or for a new system\)
2.  HCL Digital Experience 9.5 deployment to supported platforms, including Docker or OpenShift/Kubernetes with Docker
3.  Updating an existing HCL Digital Experience 8.5 or 9.0 system

Users can also test the new HCL Digital Experience API Docker image and run it. Visit the Experience API documentation<!--  [Experience API documentation](../design/api/openapi_overview.md) --> to learn more.

## Fresh full installation

For a fresh full installation, follow the installation path using the components below which may be found in the [HCL Software Licensing Portal](https://www.hcltech.com/software/support/release) \(FlexNet\) with HCL Digital Experience software packages:

1.  IBM® Installation Manager.
2.  IBM WebSphere® Application Server 9.0.5.
3.  HCL Portal 8.5
4.  HCL Digital Experience CF17
5.  HCL Digital Experience 9.5
6.  Corresponding edition files according to your HCL Digital Experience entitlements \(HCL Portal Enable, HCL Portal Extend, HCL Portal Server, and HCL Portal Express\)

After installing the [IBM Installation Manager](https://www.ibm.com/support/knowledgecenter/SSDV2W/im_family_welcome.html), users need to configure the repositories for IBM WebSphere Application Server 9.0.5, HCL Portal 8.5, HCL Digital Experience CF17, and HCL Digital Experience 9.5, and the corresponding edition files.

## Update an existing HCL Digital Experience 8.5 or 9.0 system

The path from an existing HCL Digital Experience 8.5 or 9.0 system to HCL Digital Experience 9.5 is to download CF17 as well as the 9.5 files. Then install the cumulative fix via the usual CF process.

Afterwards, users start the IBM Installation Manager, then configure the 9.5 repository, and add 9.5. Users who are using HCL Portal Enable, HCL Portal Extend, or HCL Web Content Manager need to add both the HCL Portal 9.5 Server and the applicable edition via IBM Installation Manager.

-   Documentation resource: [Fixlist of fixes included in CF17](../whatsnew/new_cf17.md)
-   Documentation resource: [Combined Cumulative fix strategy for 9.5](../overview/ccf_strategy95.md)

## Deployment of HCL Digital Experience to Docker and supported Kubernetes platforms

The following is the installation path from an existing HCL Digital Experience 8.5 or 9.0 system:

1.  Download the HCL Digital Experience 9.5 container image files that contains the following:
    -   HCL Digital Experience Docker container; and
2.  Follow the [documentation here](../platform/docker/index.md) to deploy to Docker or supported Kubernetes platforms.
3.  Stage the content to the new environment to move from an existing system to HCL Digital Experience on Docker or supported Kubernetes platforms.

<!-- ???info "Related information:"
    -   [Experience API documentation](../design/api/openapi_overview.md) -->
