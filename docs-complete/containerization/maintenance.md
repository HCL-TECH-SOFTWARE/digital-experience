# Container administration 9.5

The information in this section enables administrators to manage select operations performance controls, and to update and replace their HCL Digital Experience 9.5 container images with the latest 9.5 container update release.

-   New HCL Digital Experience 9.5 CFxxx container images are released on a regular cadence.
-   Images include fixes to HCL Digital Experience \(comprised of HCL Portal and HCL Web Content Manager\), IBM WebSphere Application Server \(WAS\) Network Deployment, and the Java Development Kit \(JDK\), and additional components, such as the Experience API, Digital Asset Management, Content Composer, Remote Search, and more. Consult the Digital Experience [Deployment](../containerization/deployment.md) topic for the latest list of DX 9.5 Container Images delivered through the Container Update releases.
    -   Customers should not apply maintenance to an HCL Digital Experience 9.5 container image. Instead, they should run the update process as described below.
    -   Customers should not extend the HCL Digital Experience 9.5 container images. They are not intended to be used in the FROM instruction as a parent image.
-   Critical hot fixes are built for HCL Digital Experience 9.5 container releases when required outside of the container release process. HCL Digital Experience customers can contact HCL Customer Support if a critical fix is required for their HCL Digital Experience containerized deployment.
-   There is a separation of product and customer code. Customizations should be kept in the wp\_profile in the persistent volume and the external and the external database. As HCL Digital Experience 9.5 container development moves forward with the deployment type, an effort to better separate custom code from product code is planned.

    Video tutorial: [HCL Digital Experience - Update an HCL Portal Docker Container](https://www.youtube.com/watch?v=KxOFuyrA_TM&feature=youtu.be)

    ![](../images/container_maintenance_architecture.png "Maintenance overview")

    -   Starting with 9.5, under the HCL Digital Experience container update releases, as new HCL Digital Experience 9.5 images become available from HCL, customers can modify the custom resource instance to use 9.5. The initial HCL Digital Experience 9.5 container update release available to DX customers in the HCL Software License Portal page.
    -   This pattern is possible because customizations are not made to the image but isolated to the persistent volume and external database, which follows best practices.
    -   The procedure for updating to a new release of the HCL Digital Experience 9.5 image is detailed in the [Update the Digital Experience 9.5 Core Kubernetes Container Deployment](../containerization/update_dx_core_kubernetes_container_deployment.md).

-   **[Update the Digital Experience 9.5 Core Kubernetes or Red Hat OpenShift container deployment](../containerization/update_dx_core_kubernetes_container_deployment.md)**  
Update the Digital Experience 9.5 Core Kubernetes container deployment.
-   **[Update the HCL DX 9.5 Experience API, Content Composer, and Digital Asset Management components](../containerization/update_config_cc_dam.md)**  
This section provides the steps to update the HCL Digital Experience 9.5 Experience API, HCL Digital Experience 9.5 Content Composer, and HCL Digital Experience 9.5 Digital Asset Management components.
-   **[Optional: Configuration Settings to Manage Digital Asset Management Media upload storage services](../containerization/optional_digital_asset_management_storage_configuration_settings.md)**  
 This section outlines optional configuration steps to tune Digital Asset Management storage services.
-   **[HCL Digital Experience 9.5 Docker and Container initialization performance](../containerization/container_init_performance.md)**  
Beginning with from [HCL Digital Experience 9.5 Container Update](../overview/container_update_releases.md) CF192 release, container DX applications initialization performance is improved. Review the following guidance for information, defaults, and options to manage container applications initialization performance when deployed to Docker, Red Hat OpenShift, and Kubernetes platforms.
-   **[Customizing your container deployment](../containerization/customization.md)**  
This section outlines the customization options when deploying HCL Digital Experience Container.
-   **[Backup and recovery procedures Containerization](../containerization/operator_backup_and_recovery_procedures.md)**  
This section shows the deployment architecture and provides the instructions to create and manage backup and recovery of HCL Digital Experience components in containerized DX 9.5 environments.

**Parent topic:**[Operator-based deployment](../containerization/deploy_container_platforms.md)

