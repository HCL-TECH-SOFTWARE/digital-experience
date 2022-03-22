# HCL Digital Experience roadmap: Applying maintenance

Portal maintenance is delivered through individual fixes \(Fixes\) and Combined Cumulative Fixes \(CFs\), which is recommended to your environment.

For individual fixes, HCL encourages customers to remain up-to-date on the latest DX releases. As a result, DX only provides fixes on the latest release. Customers may be asked to upgrade to the latest DX release to assist with problem determination.

Use this roadmap to learn more about the following information:

-   What the latest Combined Cumulative Fix contains
-   How to apply the latest combined cumulative fix
-   How to configure and enable new Combined Cumulative Fix features

# Who should use this roadmap

Use this roadmap if you:

-   Installed HCL Digital Experience for the first time and want to apply a Fix or the latest Combined Cumulative Fix.
-   Need a high-level view of which features or improvements are ready to use by default after you apply the latest Combined Cumulative Fix and which features need additional configuration.

# Delivering updates

This section describes the strategy for delivering Digital Experience maintenance updates, including the release versioning scheme, to provide a clear maintenance and upgrade path for our customers.

## What is continuous delivery?

Continuous delivery consists of short development cycles with continuous integration and automated tests. The result is a releasable product at any time. Continuous delivery has the following benefits:

-   Accelerated time to market
-   Building the right product
-   Improved productivity and efficiency
-   Reliable releases
-   Improved product quality
-   Improved customer satisfaction

The continuous delivery features are delivered with the combined cumulative fixes.

## CF release versioning and update path

CF releases are sequentially numbered.

-   Between CF01 and CF19, the CF release versioning simply increments the 2-digit integer \(CF01, CF02, CF03…….CF19\). These CFs are applicable to an on-premise deployment.
    -   The first Combined Cumulative Fix applicable for 8.5 is CF01.
    -   The first Combined Cumulative Fix applicable for 9.0 is CF14.
    -   The first Combined Cumulative Fix applicable for 9.5 is CF17.
-   With DX Container releases, HCL DX introduced a change in the CF naming scheme. After CF196, single versioning for both container and on-premise CF is applied. This change also signifies that fixes for both deployments are included into one Combined Cumulative Fix deliverable.

    ![CF versioning for on-premises and container deployments](../images/rm_cf_onprem_container.png "Single CF versions for on-premises and container deployments")


Please see the following important points about this change:

-   Starting with CF196, versioning now implements a 3-digit integer that increments every release \(CF196, CF197, CF198… and so on.\)
-   Though the versioning is the same, the CFs are packaged separately and specific to each deployment. Please find the sample file naming for the CF package applicable to an on-premises deployment versus a container deployment.
    -   On-premises: HCL-DX-CF196\_Server\_Update.zip, HCL-DX-CF196\_Express\_Update.zip, or HCL-DX-CF196\_RemoteSearch\_Update.zip.
    -   Container: hcl-dx-kubernetes-v95-CF196.zip
-   CF196 and later releases are applicable to HCL DX 8.5, 9.0, and 9.5 on-premise deployments.
-   Customers can update directly to the latest CF release without installing multiple individual CFs \(for example, 8.5 CF17 to 8.5 CF196\).

# Learning about this Combined Cumulative Fix

Some combined cumulative fixes focus on fixing known issues that are identified by APARs. Other cumulative fixes are focused on new features.

1.  Get an overview of the features and improvements delivered in the latest combined cumulative fix.

    -   Documentation resource: [Combined Cumulative Fix Strategy](http://help.hcltechsw.com/digital-experience/9.5/overview/new_cf95.md)
2.  View the fixes delivered for HCL Digital Experience 9.5. The documentation provides specific information on how to enable and use the new feature.

    -   Documentation resource: [What's new with CF17](../overview/new_cf17.md)
    -   Documentation resource: [Fix for IBM WebSphere Application Server 9.0.5](../overview/was_905.md)

# Applying a Combined Cumulative Fix

To apply a Combined Cumulative Fix, you must update the product files with IBM® Installation Manager. You must also update properties files, download the cumulative fix, and run ConfigEngine tasks to apply the changes to each profile in your system. The HCL Digital Experience Combined Cumulative Fix readme file provides detailed instructions on how to apply a fix and planning information.

Use the Health Checker tool to identify issues with your installation. Use the Health Checker tool on your target system before you apply a Combined Cumulative Fix.

**Individual fixes:** Individual fixes \(Fixes\) are included in the Combined Cumulative Fix Strategy. However, if you are going to upgrade prior to CF08, the following iFixes are required. Install one of the following Fixes, based on your system, before you upgrade:

-   IBM WebSphere® Application Server Version 8.5.5.X FOR SDK 7.1: [PI50090: SHIP JDK IV77682 AS AN IFIX FOR WAS 8.5.5.X FOR SDK 7.1](https://support.hcltechsw.com/csm)
-   WebSphere Application Server Version 8.5.5.X FOR SDK 7: [PI50092: SHIP JDK IV77682 AS AN IFIX FOR WAS 8.5.5.X FOR SDK 7PI50092: SHIP JDK IV77682 AS AN IFIX FOR WAS 8.5.5.X FOR SDK 7](https://support.hcltechsw.com/csm)

1.  To apply this cumulative fix, follow the readme file instructions that apply to your environment. You can find separate instructions for stand-alone, cluster, farm, and remote search environments from the *Overview* topic.

    -   Documentation resource: [HCL Digital Experience Combined cumulative fix instructions: stand-alone](../../9.5/overview/ccf_95_standalone.md)
    -   Documentation resource: [HCL Digital Experience Combined cumulative fix instructions: cluster](../../9.5/overview/ccf_95_cluster.md)
    -   Documentation resource: [HCL Digital Experience Combined cumulative fix instructions: farm](../../9.5/overview/ccf_95_farm.md)
    -   Documentation resource: [HCL Digital Experience Combined cumulative fix instructions: remote search](../../9.5/overview/ccf_95_remote_search.md)

