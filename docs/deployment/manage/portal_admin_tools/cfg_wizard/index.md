# Configuration Wizard

Use the Configuration Wizard to set up stand-alone servers and new deployments, create clusters, migrate and update to new versions, and add new capabilities to existing deployments.

In the Configuration Wizard, you answer questions about the environment that you are configuring. Based on your answers, the wizard prompts you for custom values that are needed to configure your environment. Finally, the wizard generates custom steps and scripts to set up your environment.

!!!warning
    When using the Configuration Wizard in a container deployment, it always runs on the first Core Pod (`core-0`) only. All requests are routed to that Pod.

    When using the Configuration Wizard in a container deployment with multiple Core Pods, you must restart all Pods manually after the configuration with Configuration Wizard is successful. This is to ensure that all Pods reload the updated configurations.

    You can trigger the restart through any of the following:
    
    - [DXClient `restart-core-pods`command](../../../../extend_dx/development_tools/dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-pods)
    
    - `kubectl` command: `kubectl -n <namespace> rollout restart statefulset <release-name>-core`

## Default URLs

To access different administration user interfaces during the configuration process, you can use default URLs if needed.

Use the following default URLs to access the Configuration Wizard:

-   **Configuration Wizard**

    - Kube: https://yourserver:443/hcl/wizard

    - Docker: https://yourserver:10200/hcl/wizard

    - Default Standalone Local: https://yourserver:10200/hcl/wizard

    - Cluster: Can be freely configured. Default is https://yourserver:10200/hcl/wizard

!!! note 
    Older CFs still use ibm/wizard and not /hcl/wizard context root.
    

**Video**: [HCL Portal - How to Access ConfigWizard](https://www.youtube.com/watch?v=YAEO78T7coM&feature=youtu.be)

## HCLSoftware U learning materials

For an introduction and a demo on DX deployment, go to [Deployment for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1479){target="_blank"}. Several deployment options are provided in the course.

To learn how to do a traditional installation, go to [Deployment for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3086){target="_blank"}. In this course, you will learn more about additional installation tasks that applies to both container-based and traditional deployments using the Configuration Wizard, DXClient, ConfigEngine, and more. You can also try it out using the [Deployment Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab.pdf){target="_blank"} and corresponding [Deployment Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"
    - [WebSphere® Integrated Solutions Console](../WebSphere_Integrated_Solutions_Console.md)
