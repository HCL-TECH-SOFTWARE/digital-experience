# HCL Digital Experience roadmap: Maintenance

You maintain portals by using individual Fixes and Combined Cumulative Fixes (CFs), which are suggested for your environment.

For individual Fixes and best results, remain up-to-date on the latest DX releases. As a result, DX only provides Fixes in the latest release. Customers might be asked to upgrade to the latest DX release to assist with problem determination.

Use this roadmap to learn more about the following information:

-   What the latest CF contains
-   How to apply the latest CF
-   How to configure and enable new CF features


## Who should use this roadmap

Use this roadmap if either of these situations applies to your environment:

-   You installed HCL Digital Experience for the first time and want to apply a Fix or the latest CF.
-   You require a high-level view of which features or improvements are ready to use by default after you apply the latest CF and which features need additional configuration.

## Delivering updates

To provide a clear maintenance and upgrade path for our customers, this section describes the strategy for delivering Digital Experience maintenance updates, including the release versioning scheme.

## What is continuous delivery?

Continuous delivery consists of short development cycles with continuous integration and automated tests. The result is a releasable product at any time. Continuous delivery has the following benefits:

-   Accelerated time to customers
-   Building the right product
-   Improved productivity and efficiency
-   Reliable releases
-   Improved product quality
-   Improved customer satisfaction

The continuous delivery features are delivered with CFs.

## CF release versioning and update path

CF releases are sequentially numbered.

-   Between CF01 and CF19, the CF release versioning simply increments the 2-digit integer (CF01, CF02, CF03 through CF19). These CFs apply to an on-premises deployment.
    -   The first CF that applies to 8.5 is CF01.
    -   The first CF that applies to 9.0 is CF14.
    -   The first CF that applies to 9.5 is CF17.
-   With DX Container releases, HCL DX introduced a change in the CF naming scheme. After CF196, a single versioning package for both the container and on-premises CF is applied. This change also signifies that fixes for both deployments are included in one CF deliverable. <!-- What does "single versioning" mean? -->

    ![CF versioning for on-premises and container deployments](../rm_install_deployment/rm_advanced_cfg/_img/rm_cf_onprem_container.png)

See the following points about this change:

-   Starting with CF196, versioning uses a 3-digit integer that increments every release (CF196, CF197, CF198, and so on).
-   Although the versioning is the same, the CFs are packaged separately and specific to each deployment. You can find the sample file naming for the CF package that applies to an on-premises deployment versus a container deployment.
    -   On-premises: `HCL-DX-CF196_Server_Update.zip`, `HCL-DX-CF196_Express_Update.zip`, or `HCL-DX-CF196_RemoteSearch_Update.zip`.
    -   Container: `hcl-dx-kubernetes-v95-CF196.zip`
-   CF196 and later releases apply to HCL DX 8.5, 9.0, and 9.5 on-premises deployments.
-   Customers can update directly to the latest CF release without installing multiple individual CFs \(for example, 8.5 CF17 to 8.5 CF196).

## Learning about CFs

Some CFs focus on fixing known issues that are identified by APARs. Other CFs focus on new features.

<!-- The following list needs an introductory sentence. What's the nature of the items in this list? -->
To know the changes and issues fixed in the CF, do the following steps:

1.  Get an overview of the features and improvements delivered in the latest combined cumulative fix. For more information, see [Apply Combined Cumulative Fix](../../../../../deployment/install/traditional/cf_install/index.md). 

2.  View the fixes delivered for HCL Digital Experience 9.5. The documentation provides specific information about how to enable and use the new feature. For more information, see [What's new with CF17](../../../../../whatsnew/cf17/new_cf17.md).
    <!-- -   Documentation resource: [Fix for IBM WebSphere Application Server 9.0.5](../overview/was_905.md) -->

# Applying a CF

To apply a CF, you must update the product files with IBM® Installation Manager. You must also update properties files, download the cumulative fix, and run ConfigEngine tasks to apply the changes to each profile in your system. The HCL Digital Experience Combined Cumulative Fix readme file provides detailed instructions about how to apply a fix and planning information.

Use the [Health Checker](../../../../../deployment/install/traditional/cf_install/ccf_95_health_checker.md) tool to identify issues with your installation. Use the Health Checker tool on your target system before you apply a CF.

For more information, see [Apply Combined Cumulative Fix](../../../../../deployment/install/traditional/cf_install/index.md)

**Individual fixes:** Individual Fixes are included in the [Apply Combined Cumulative Fix](../../../../../deployment/install/traditional/cf_install/index.md) topic. However, if you plan to upgrade prior to CF08, the following iFixes are required. Install one of the following Fixes, based on your system, before you upgrade:

-   IBM WebSphere® Application Server Version 8.5.5.X FOR SDK 7.1: [PI50090: SHIP JDK IV77682 AS AN IFIX FOR WAS 8.5.5.X FOR SDK 7.1](https://support.hcltechsw.com/csm)
-   WebSphere Application Server Version 8.5.5.X FOR SDK 7: [PI50092: SHIP JDK IV77682 AS AN IFIX FOR WAS 8.5.5.X FOR SDK 7PI50092: SHIP JDK IV77682 AS AN IFIX FOR WAS 8.5.5.X FOR SDK 7](https://support.hcltechsw.com/csm)

1.  To apply this CF, follow the readme file instructions that apply to your environment. You can find separate instructions for stand-alone, cluster, farm, and remote search environments from the Overview topic. See the following documentation resources:

    -   [HCL Digital Experience Combined cumulative fix instructions: Stand-alone](../../../../../deployment/install/traditional/cf_install/ccf_95_standalone.md)
    -   [HCL Digital Experience Combined cumulative fix instructions: Cluster](../../../../../deployment/install/traditional/cf_install/ccf_95_cluster.md)
    -   [HCL Digital Experience Combined cumulative fix instructions: Farm](../../../../../deployment/install/traditional/cf_install/ccf_95_farm.md)
    -   [HCL Digital Experience Combined cumulative fix instructions: Remote search](../../../../../deployment/install/traditional/cf_install/ccf_95_remote_search.md)

