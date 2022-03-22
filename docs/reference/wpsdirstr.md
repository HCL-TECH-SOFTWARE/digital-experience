# Directory structure

The topic shows the naming conventions that are used to denote the location of files on the servers and the types of resources you can find in those directories.

## PortalServer\_root

Throughout this documentation, the installation location for the portal server component of HCL Portal is noted as PortalServer\_root.

For the IBM® i operating system, an extra variable is used to indicate the user data directory. The user data directory is noted as PortalServer\_root\_user.

The following information shows the default location if it is not otherwise specified during installation:

-   **AIX®**

    /usr/HCL/WebSphere/PortalServer

-   **HP-UX**

    /opt/HCL/WebSphere/PortalServer

-   **IBM® i**

    -   portal\_server\_root \(ProdData\)

        -   /QIBM/ProdData/WebSphere/PortalServer/V85/product offering
        -   /QIBM/ProdData/WebSphere/PortalServer/V85/<product offering\>
        Where product offering is Server or Express

    -   PortalServer\_root\_user \(UserData\)
        -   WebSphere® Application Server 8.5.5 for Network Deployment:
            -   /QIBM/UserData/WebSphere/AppServer/V85/ND/profiles/wp\_profile/PortalServer
-   **Linux™**

    /opt/HCL/WebSphere/PortalServer

    /opt/HCL/WebSphere/PortalExpress/PortalServer

-   **Solaris**

    /opt/HCL/WebSphere/PortalServer

-   **Windows™**

    C:\\Program Files\\HCL\\WebSphere\\PortalServerC:\\Program Files\\HCL\\WebSphere\\PortalExpress\\PortalServer


## wp\_profile\_root

Throughout this documentation, the profile location is noted as wp\_profile\_root. The following information shows the default profile location if another location is not specified during installation:

-   **AIX®**

    /usr/HCL/WebSphere/wp\_profile

-   **HP-UX**

    /opt/HCL/WebSphere/wp\_profile

-   **IBM® i**

    -   WebSphere® Application Server 8.5 for Network Deployment:
        -   /QIBM/UserData/WebSphere/AppServer/V85/ND/profiles/wp\_profile
    The wp\_profile is the default profile name but is used here as an example since there can be multiple profiles with self described or incremental names \(for example, wp\_profile1, wp\_profile2\).

-   **Linux™**

    /opt/HCL/WebSphere/wp\_profile

    /opt/HCL/WebSphere/PortalExpress/AppServer/profiles/wp\_profile

-   **Solaris**

    /opt/HCL/WebSphere/wp\_profile

-   **Windows™**

    C:\\Program Files\\HCL\\WebSphere\\wp\_profile


## ConfigEngine\_root

Throughout this documentation, the installation location for the Configuration Engine component is noted as ConfigEngine\_root.

-   **AIX®**

    /usr/HCL/WebSphere/ConfigEngine

-   **HP-UX**

    /opt/HCL/WebSphere/ConfigEngine

-   **IBM® i**

    /QIBM/ProdData/WebSphere/PortalServer/V85/ConfigEngine

-   **Linux™**

    /opt/HCL/WebSphere/ConfigEngine

    /opt/HCL/WebSphere/PortalExpress/AppServer/profiles/ConfigEngine

-   **Solaris**

    /opt/HCL/WebSphere/ConfigEngine

-   **Windows™**

    C:\\Program Files\\HCL\\WebSphere\\ConfigEngine


## Configuration Engine profile directory

The Configuration Engine profile directory is the location of the ConfigEngine task.

-   **AIX®**

    /usr/HCL/WebSphere/wp\_profile/ConfigEngine

-   **HP-UX**

    /opt/HCL/WebSphere/wp\_profile/ConfigEngine

-   **IBM® i**

    -   WebSphere® Application Server 8.5.5 for Network Deployment:
        -   /QIBM/UserData/WebSphere/AppServer/V85/ND/profiles/wp\_profile/ConfigEngine
    The wp\_profile is the default profile name but is used here as an example since there can be multiple profiles with self described or incremental names \(for example, wp\_profile1, wp\_profile2\).

-   **Linux™**

    /opt/HCL/WebSphere/wp\_profile/ConfigEngine

    /opt/HCL/WebSphere/PortalExpress/AppServer/profiles/wp\_profile/ConfigEngine

-   **Solaris**

    /opt/HCL/WebSphere/wp\_profile/ConfigEngine

-   **Windows™**

    C:\\Program Files\\HCL\\WebSphere\\wp\_profile\\ConfigEngine


## HCL Portal directory structure after installation

HCL Portal has the following directory structure after installation:

**Note:** On the Linux and IBM i operating systems, all directories are r/o.

```
`[PortalServer\_root](wpsdirstr.md#wp_root)`          Root directory for HCL Portal
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

## AppServer\_root

Throughout this documentation, the installation location for WebSphere Application Server is noted as AppServer\_root.

The following information shows the WebSphere Application Server installation directory:

HCL Portal Configuration profile directory cw\_profile\_root

Throughout this documentation, the configuration wizard profile location is noted as cw\_profile\_root. The following information shows the profile location:

-   **AIX®**

    /usr/HCL/WebSphere/AppServer/profiles/cw\_profile

-   **HP-UX**

    /opt/HCL/WebSphere/AppServer/profiles/cw\_profile

-   **IBM® i**

    WebSphere Application Server 8.5 for Network Deployment:/QIBM/UserData/WebSphere/AppServer/V8/ND/profiles/cw\_profile

-   **Linux™**

    /opt/HCL/WebSphere/AppServer/profiles/cw\_profile

-   **Solaris**

    /opt/HCL/WebSphere/AppServer/profiles/cw\_profile

-   **Windows™**

    C:\\Program Files\\HCL\\WebSphere\\AppServer\\profiles\\cw\_profile


-   **IBM® i**

    The installation location for WebSphere® Application Server is noted as app\_server\_root and refers to the UserData path, unless otherwise specified in the topic where you see it. The profile\_root following variable refers to the name given to the WebSphere® Application Server profile in use.


The following information shows the default WebSphere Application Server installation location if it is not otherwise specified during installation:

-   **IBM® i**

    The installation location for WebSphere® Application Server is noted as app\_server\_root and refers to the UserData path, unless otherwise specified in the topic where you see it. The profile\_root following variable refers to the name given to the WebSphere® Application Server profile in use.

-   **Linux™**

    /opt/HCL/WebSphere/PortalExpress/AppServer

-   **Windows™**

    C:\\Program Files\\HCL\\WebSphere\\PortalExpress\\AppServer


