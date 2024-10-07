# Directory structure

The topic shows the naming conventions that are used to denote the location of files on the servers and the types of resources you can find in those directories.

## PortalServer_root

Throughout this documentation, the installation location for the portal server component of HCL Portal is noted as PortalServer_root.

The following information shows the default location if it is not otherwise specified during installation:

-   **AIX®**

    /usr/HCL/WebSphere/PortalServer

-   **Linux™**

    /opt/HCL/WebSphere/PortalServer

    /opt/HCL/WebSphere/PortalExpress/PortalServer

-   **Windows™**

    C:\\Program Files\HCL\WebSphere\PortalServer
    
    C:\\Program Files\HCL\WebSphere\PortalExpress\PortalServer


## wp_profile_root

Throughout this documentation, the profile location is noted as wp_profile_root. The following information shows the default profile location if another location is not specified during installation:

-   **AIX®**

    /usr/HCL/WebSphere/wp_profile

-   **Linux™**

    /opt/HCL/WebSphere/wp_profile

    /opt/HCL/WebSphere/PortalExpress/AppServer/profiles/wp_profile

-   **Windows™**

    C:\\Program Files\HCL\WebSphere\wp_profile


## ConfigEngine_root

Throughout this documentation, the installation location for the Configuration Engine component is noted as ConfigEngine_root.

-   **AIX®**

    /usr/HCL/WebSphere/ConfigEngine

-   **Linux™**

    /opt/HCL/WebSphere/ConfigEngine

    /opt/HCL/WebSphere/PortalExpress/AppServer/profiles/ConfigEngine

-   **Windows™**

    C:\\Program Files\HCL\WebSphere\ConfigEngine


## Configuration Engine profile directory

The Configuration Engine profile directory is the location of the ConfigEngine task.

-   **AIX®**

    /usr/HCL/WebSphere/wp_profile/ConfigEngine

-   **Linux™**

    /opt/HCL/WebSphere/wp_profile/ConfigEngine

    /opt/HCL/WebSphere/PortalExpress/AppServer/profiles/wp_profile/ConfigEngine

-   **Windows™**

    C:\\Program Files\HCL\WebSphere\wp_profile\ConfigEngine


## HCL Portal directory structure after installation

HCL Portal has the following directory structure after installation:

!!!note
    On the Linux and IBM i operating systems, all directories are r/o.

```
`[PortalServer_root](wpsdirstr.md#wp_root)`          Root directory for HCL Portal
 |
 +-- ap
 |
 +-- base
 |
 +-- bin                    HCL Portal tools
 |
 +-- bp
 |
 +-- doc                    Javadoc and sample XMLAccess input files
 |
 +-- ext                    
 |
 +-- filesForDmgr            
 |
 +-- installer  
 |
 +-- jcr                    Resources for the Content Repository
 |
 +-- license                HCL Portal license agreement
 |
 +-- lwo   
 |
 +-- lwp04.infra         
 |
 +-- people                 
 |
 +-- prereq                 
 |
 +-- prereqs.infra          
 |
 +-- profileTemplates          
 |
 +-- properties             
 |
 +-- pzn                    
 |
 +-- pzn.ext                
 |
 +-- search                 
 |
 +-- shared                 Shared resources, including runtime JARs, TLDs, 
 |                          and other resources. 
 |                          The /app subdirectory is the application server's 
 |                          WPSLib shared library for HCL Portal
 |
 +-- solutionInstaller
 +-- theme 
 |
 +-- ui 
 |
 +-- version                Version information for various components
 |
 +-- wcm                    Source Web application files for web content manager
 |
 +-- wps.properties                    
```

## AppServer_root

Throughout this documentation, the installation location for WebSphere Application Server is noted as AppServer_root.

The following information shows the WebSphere Application Server installation directory:

HCL Portal Configuration profile directory cw_profile_root

Throughout this documentation, the configuration wizard profile location is noted as cw_profile_root. The following information shows the profile location:

-   **AIX®**

    /usr/HCL/WebSphere/AppServer/profiles/cw_profile

-   **Linux™**

    /opt/HCL/WebSphere/AppServer/profiles/cw_profile

-   **Windows™**

    C:\\Program Files\HCL\WebSphere\AppServer\profiles\cw_profile

The following information shows the default WebSphere Application Server installation location if it is not otherwise specified during installation:

-   **Linux™**

    /opt/HCL/WebSphere/PortalExpress/AppServer

-   **Windows™**

    C:\\Program Files\HCL\WebSphere\PortalExpress\AppServer

## HCLSoftware U learning materials

For an introduction and a demo on DX deployment, go to [Deployment for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1479){target="_blank"}. Several deployment options are provided in the course.

To learn how to do a traditional installation, go to [Deployment for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3086){target="_blank"}. In this course, you will learn more about additional installation tasks that applies to both container-based and traditional deployments using the Configuration Wizard, DXClient, ConfigEngine, and more. You can also try it out using the [Deployment Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab.pdf){target="_blank"} and corresponding [Deployment Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"  
    -   [Language support](../deployment/manage/portal_admin_tools/language_support/index.md)
    -   [System event logging](../deployment/manage/troubleshooting/logging_and_tracing/adsyslog.md)

