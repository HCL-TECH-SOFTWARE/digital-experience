# Development considerations 

The goal of the migration process is to ensure that the target environment works similarly to the source environment. However, there are deprecated and unsupported features and changes in supported technical specifications that can prevent this transition from being seamless. Review the following topics for guidance on the development work that is required to maintain the functionality of the source environment and also begin preparation for enabling new features and functionality.

-   **[Deprecated features ](../migrate/mig_pre_deprecated.md)**  
Review the features that were available in previous versions of HCL Digital Experience but are no longer available.
-   **[Exploitation vs. toleration of applications and themes ](../migrate/mig_plan_exp_v_tol.md)**  
Toleration is the ability for the new version of HCL Digital Experience to support and host the portal site of the source environment exactly the way it was on the previous version. And, exploitation is the enhancement of the source environment site to take advantage of the new functionality that is made available in the new version.
-   **[Prepare applications and themes ](../migrate/mig_plan_prepare_apps_themes.md)**  
After the move to HCL Digital Experience 8.5, it is possible that applications and themes that depend on deprecated features will not function properly. To validate custom applications and themes, it is recommended to set up a basic stand-alone HCL Portal 8.5 server.
-   **[Supported toolbar customization ](../migrate/mig_plan_toolbar_customize.md)**  
In Version 8.5, only specific customizations are allowed for the HCL Digital Experience site toolbar. Only the supported toolbar customizations can be migrated to the new version.
-   **[JavaServer Faces implementation ](../migrate/mig_post_jsf.md)**  
The default JavaServer Faces \(JSF\) implementation has changed starting in WebSphere Application Server 8.

**Parent topic:**[Planning for migration ](../plan/mig_plan.md)

