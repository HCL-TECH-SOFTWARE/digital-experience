# Planning to install HCL Digital Experience

Before you install HCL Digital Experience in a production environment, assess your hardware and software needs, possible database configurations, security options, and LDAP server options.

!!!restriction
    The serverName is hardcoded to the HCL Portal. The serverName cannot be changed in a stand-alone environment. If you do change it, the ConfigEngine scripts do not work. For a clustered environment, see [Roadmaps for clusters](../traditional_deployment/roadmaps/rm_install_deployment/rm_clusters/rm_cluster_parent.md) for more information.


-   **[System requirements](../../system_requirements/index.md)**  
Before installing HCL Digital Experience, you must review the system requirements to ensure that you have the supported versions of prerequisite and co-requisite software and hardware.
-   **[HCL Digital Experience Support Statement](../../software_support.md)**  
This support statement proposes a revision to the definition of supported and unsupported about the various products of which HCL Digital Experience depends on for proper operation.
-   **[User IDs and passwords](sec_chars.md)**  
Understanding character limitations for user IDs and passwords is important because they are used throughout the system to provide access and secure content.
-   **[HCL Web Content Manager environments](../traditional_deployment/wcm_env/index.md)**  
Reviewing the Web Content Manager environments help you understand what happens in each environment and how you might want to set up your physical servers.
-   **[Database considerations](../traditional_deployment/database_consideration/index.md)**  
HCL Digital Experience includes an Apache Derby database that is configured and ready for immediate use. But for a production environment or any environment for HCL Web Content Manager, you must use one of the other supported database management systems.
-   **[User registry considerations](../traditional_deployment/user_registry_consideration/index.md)**  
A user registry or repository authenticates a user and retrieves information about users and groups to do security-related functions, including authorization.
-   **[High availability](express_ha.md)**  
 HCL Portal Express offering is licensed for use in a single-server configuration and may not be used in either a cloned configuration or a clustered configuration except when implementing idle standby for the purpose of failover.
-   **[Cluster considerations](../traditional_deployment/cluster_consideration/index.md)**  
Multiple portal servers can be clustered with IBM WebSphere Application Server Network Deployment.
-   **[Virtual environment overview](plan_virt_envir.md)**  
Use virtualized environments to meet your business needs like production server consolidation, centralized management, or dynamic test environments.
-   **[Multiple profile support](plan_multiple_profile.md)**  
Multiple profiles give you the ability to have multiple, independently configured portal instances that run from the same installation.

???+ info "Related information"
    - [Target environment considerations](../../../deployment/manage/migrate/settingup_target_env/mig_plan_targetenvironment.md)

