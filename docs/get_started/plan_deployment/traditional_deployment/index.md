# Planning to install HCL Digital Experience

Before you install HCL Digital Experience in a production environment, assess your hardware and software requirements, possible database configurations, security options, and LDAP server options.

!!!restriction
    The serverName parameter is hardcoded in the HCL Portal. The serverName parameter cannot be changed in a stand-alone environment. If you change the name, the ConfigEngine scripts do not work. For a clustered environment, see [Roadmaps for clusters](../traditional_deployment/roadmaps/rm_install_deployment/rm_clusters/rm_cluster_parent.md) for more information.


-   **[System requirements](../../system_requirements/index.md)**  
Before you install HCL Digital Experience, you must review the system requirements to ensure that you have the supported versions of prerequisite and co-requisite software and hardware.
-   **[HCL Digital Experience Support Statement](../../software_support.md)**  
This support statement proposes a revision to the definition of "supported" and "unsupported" regarding the various products on which HCL Digital Experience depends for correct operation.
-   **[User IDs and passwords](sec_chars.md)**  
Understanding character limitations for user IDs and passwords is important because they are used throughout the system to provide access and secure content.
-   **[HCL Web Content Manager environments](../traditional_deployment/wcm_env/index.md)**  
Reviewing the Web Content Manager environments helps you understand what happens in each environment and how you might set up your physical servers.
-   **[Database considerations](../traditional_deployment/database_consideration/index.md)**  
HCL Digital Experience includes an Apache Derby database that is configured and ready for immediate use. However, for a production environment or any environment for HCL Web Content Manager, you must use another supported database management system.
-   **[User registry considerations](../traditional_deployment/user_registry_consideration/index.md)**  
A user registry or repository authenticates users and retrieves information about users and groups for security-related functions, including authorization.
-   **[High availability](express_ha.md)**  
 The HCL Portal Express offering is licensed for use in a single-server configuration and cannot be used in either a cloned configuration or a clustered configuration except when implementing idle standby for the purpose of failover.
-   **[Cluster considerations](../traditional_deployment/cluster_consideration/index.md)**  
Multiple portal servers can be clustered with IBM WebSphere Application Server Network Deployment.
-   **[Virtual environment overview](plan_virt_envir.md)**  
Use virtualized environments to meet your business needs like production server consolidation, centralized management, or dynamic test environments.
-   **[Multiple profile support](plan_multiple_profile.md)**  
Multiple profiles give you the ability to have multiple, independently configured portal instances that run from the same installation.

## HCLSoftware U learning materials

For an introduction and a demo on DX deployment, go to [Deployment for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1479){target="_blank"}. Several deployment options are provided in the course.

To learn how to do a traditional installation, go to [Deployment for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3086){target="_blank"}. In this course, you will learn more about additional installation tasks that applies to both container-based and traditional deployments using the Configuration Wizard, DXClient, ConfigEngine, and more. You can also try it out using the [Deployment Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab.pdf){target="_blank"} and corresponding [Deployment Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"
    - [Target environment considerations](../../../deployment/manage/migrate/settingup_target_env/mig_plan_targetenvironment.md)

