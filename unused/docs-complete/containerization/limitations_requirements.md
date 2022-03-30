# Containerization requirements and limitations

This section describes the requirements to deploy the HCL Digital Experience 9.5 images to container platforms and current limitations.

**Attention:** Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience \(DX\) [Operator-based deployments](deploy_container_platforms.md) and will provide support only for [Helm-based deployments](helm.md). There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based deployments](helm_operator_migration.md).

Consult the [HCL Digital Experience 9.5 Support Statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) on the HCL Digital Experience Support pages for the latest updates on supported platforms, components, and release levels.

## Requirements and Limitations for Helm-based deployments

This section describes requirements and current limitations for HCL Digital Experience 9.5 Container Update CF200 and later deployments using Helm.

HCL DX 9.5 CF200 and later is architected to run on any Certified Kubernetes platform \([https://www.cncf.io/certification/software-conformance](https://www.cncf.io/certification/software-conformance)\), provided that,

-   the Kubernetes platform is hosted on x86\_64 hardware
-   the Kubernetes platform is officially supported by Helm \([https://helm.sh/docs/topics/kubernetes\_distros/](https://helm.sh/docs/topics/kubernetes_distros/)\).

For the list of Kubernetes versions that are tested and supported by HCL, refer to the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) page.

Even though the platforms might be Certified Kubernetes platforms, you might find the environments varying slightly based on the vendors. HCL Support will make a reasonable effort to assist the customer in problem resolution in scenarios where the Kubernetes version is still under support by the vendor. If there are any unresolved issues, HCL Support will provide alternative implementation recommendations or open Feature Requests for the problem scenario.

Internally, HCL tests DX against a range of Kubernetes platforms that is regularly reviewed and updated. We do not test with every single platform vendor, but aim to cover a representative sample of popular Kubernetes implementations. See the [HCL DX supported hardware and software statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) on the HCL Support Knowledge Base for additional details.

To deploy HCL Digital Experience 9.5 CF200 to the supported Kubernetes platforms using Helm, the following are required:

-   **Helm installation**:

    Download and install Helm to your target environment. HCL DX 9.5 CF200 and later container deployment is tested and is supported with Helm v3. For more information regarding the supported Helm version for individual Kubernetes versions, refer [Helm documentation](https://helm.sh/).

-   **Migration**:

    For information about migrating from Operator-based to Helm-based deployments, see [Migrating from Operator-based to Helm-based deployments](helm_operator_migration.md).

-   **Container platform capacity resource requirements**:

    The following table outlines the default minimum and maximum capacity of container resources requested by the HCL DX 9.5 Container Components in the Helm-based deployments.

    |Component|Resource name|Pod Minimum CPU|Pod Minimum Memory|No. of Pods Minimum|
    |---------|-------------|---------------|------------------|-------------------|
    |Core|core|0.8|3072MB|1|
    |Ring API|ringApi|0.1|128MB|1|
    |Content Composer|contentComposer|0.1|128MB|1|
    |Design Studio|designStudio|0.1|128MB|1|
    |Digital Asset Management|digitalAssetManagement|0.25|1024MB|1|
    |DAM Persistence Connection Pool|persistenceConnectionPool|0.5|512MB|1|
    |DAM Persistence Node|persistenceNode|1|1024MB|1|
    |DAM Persistence Metrics Exporter|persistenceMetricsExporter|0.1|128MB|0|
    |Image processor|imageProcessor|0.1|1280MB|1|
    |Open LDAP|openLdap|0.2|512MB|1|
    |Remote search|remoteSearch|0.25|768MB|1 \(Max 1 Pod\)|
    |Runtime Controller|runtimeController|0.1|256MB|1|
    |Ambassador Ingress|ambassadorIngress|0.2|300MB|1|
    |Ambassador Redis|ambassadorRedis|0.1|256MB|0|
    |Sidecar|sidecar|0.1|64MB|0|


## Requirements and Limitations for Operator-based deployments

**Attention:** Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience \(DX\) [Operator-based deployments](deploy_container_platforms.md) and will provide support only for [Helm-based deployments](helm.md). There will be no further updates or code fixes provided for the Operator-based deployments. HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with our customers as they transition from Operator-based to Helm-based deployments. For more information on the migration process, see [Migrating from Operator-based to Helm-based deployments](helm_operator_migration.md).

The following describes the requirements to deploy the HCL Digital Experience 9.5 images to container platforms and current limitations using the [Operator-based](dxtools_dxctl.md) deployment process:

-   **HCL Digital Experience 9.5 is supported on Docker, Red Hat OpenShift, Amazon Elastic Kubernetes Service \(EKS\), and Microsoft Azure Kubernetes Service \(AKS\), and Google Kubernetes Engine \(GKE\).** Other Kubernetes platforms are not fully supported. The HCL Operator is not likely to work, however, support for additional Kubernetes as a Service \(KaaS\) is ongoing and additions is reflected in the HCL Digital Experience 9.5 Support Statements.
    -   Additional features and functions may be tied to the use of the HCL DX Operators for deployment.
    -   ***HCL highly recommends following the deployment strategies outlined within this documentation.*** HCL Digital Experience 9.5 containerization is focused on deployment and it uses an operator-based deployment. The goals are:

        1.  To introduce a supported containerized deployment that HCL can continually extend;
        2.  To provide customers with the best possible experience;
        3.  To provide a high level of [customization](customization.md) in the deployment and continue to expand on that, along with increased automation; and
        4.  To maintain separation of product and custom code.
        Customers need to follow the recommended deployment model to ensure the availability of future functions and prevent potential conflicts.

        **Notes:**

        -   HCL Digital Experience is a database-intensive application, it is not recommended to use Apache Derby for production use. For specific versions of databases supported for production, see the [HCL Digital Experience 9.5 Support Statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514) on the HCL Digital Experience Support pages.
        -   Creation of Virtual Portals take longer when implemented in Red Hat OpenShift. Plan for adequate time to allow processing, and re-verify the results are completed by refreshing the web browser administrative panel.
        -   Customers should not modify the [HCL Digital Experience 9.5 Docker images](docker.md) provided by HCL for deployment. This restriction includes use of these images as a base to create a new image, which results in a new image ID and an unsupported configuration. Instead, customers deploying the images should follow best practices and maintain customizations in the wp\_profile and the deployment database. Scripts and custom files should be stored in wp\_profile \(/opt/HCL/wp\_profile/\). See the [Deployment](deployment.md) Help Center topics for more information
        -   Customers should not run multiple HCL Digital Experience 9.5 container deployments in a single Kubernetes namespace \(in the case of Red Hat OpenShift, in a single OpenShift project\).  This configuration is not supported at this time.
        -   It is not supported to run two different versions of HCL Digital Experience 9.5 container deployments in a single Kubernetes cluster.
    -   Use of [Web Application Bridge](../admin-system/wab.md)is currently unsupported on HCL Digital Experience 9.5 deployments to container platforms such as Kubernetes and Red Hat OpenShift, using the Operator-based deployment method.
    -   Beginning with HCL DX Container Update CF199, Web Application Bridge can be used in container deployments using the Helm deployment method.

-   **Supported file system requirements**:

    -   Requires an `**AccessMode**` of `**ReadWriteMany**`.
    -   Requires a minimum of **40 GB**, with the default request set to **100 GB**.
    **Note:** HCL Digital Experience is input-output \(I/O\) intensive and requires a high performing file system for optimization.


-   **Container platform capacity requirements**:

    The following table outlines the minimum and maximum capacity requested and managed by HCL DX 9.5 Container Components:

    |Component|Pod minimum CPU|Pod maximum CPU|Pod minimum memory|Pod maximum memory|No. of minimum pods|
    |---------|---------------|---------------|------------------|------------------|-------------------|
    |DX 9.5 Core|2|5|6 GB|8 GB|1|
    |Experience API|0.5|1|1 GB|2 GB|1|
    |Content Composer|0.5|1|1 GB|2 GB|1|
    |Digital Asset Management|0.5|2|1 GB|2 GB|3|
    |Persistence|1|2|1 GB|3 GB|1|
    |Image processor|1|2|2 GB|2 GB|1|
    |Remote search|1|3|1 GB|4 GB|1|
    |Operators|Shared - minimal|Shared - minimal|Shared - minimal|Shared - minimal|2|
    |Ambassador|0.3|1|400 MB|600 MB|3|
    |Redis|0.3|1|400 MB|600 MB|3|
    |Postgres-RO|1|2|1 GB|3 GB|1|

-   **Additional considerations in implementation**:
    -   **ConfigEngine and ConfigWizard should only be used when there is a single instance**

        When more than one instance is running, the ConfigEngine is disabled and the ConfigWizard route is removed. As an example, the Site Builder is calling the ConfigEngine in the background. But because multiple instances are running, an **Error 500** occurs because the ConfigEngine is disabled. AllConfigEngine.sh tasks should be run in configure mode with only one instance running.

    -   **JavaServer Faces \(JSF\) portlet bridge**

        With DX 9.5 Container Update CF171 and higher, WebSphere Application Server 9.0.5.2 is included and that IBM fix pack removed the IBM JSF portlet bridge. If you are using JSF portlets and leverage the JSF portlet bridge, proceed to the HCL DX 9.5 Container Update CF18 for the required JavaServer Faces Bridge support before moving to a container-based deployment.

        The HCL JavaServer Faces Bridge is added to HCL Digital Experience offerings with Container Update CF18 and CF18 on-premises platform CF update. For more information please see [What's New in Container Update CF18](../overview/new_cf18.md).

        **Note:** For information about the limitations related to JSF 2.2 support, see [Limitations when running HCL DX Portlet Bridge on WebSphere Application Server 9.0](../dev-portlet/dx_bridge_for_jsf_onwas9x.md#section_ig1_5hx_3qb).


**Parent topic:**[Digital Experience on containerized platforms](../containerization/deployment.md)

