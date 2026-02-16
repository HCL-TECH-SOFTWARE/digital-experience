# How to prevent Log4j warnings from security scanners

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

If you are using a version of HCL DX earlier than Cumulative Fix (CF) 221, security scanners may flag the Unified Task List and Script Application Import portlets as vulnerable. CF221 updates the Log4j JARs to version 2.23.1, which prevents these security scanner findings. To prevent false-positive scanner findings on versions prior to CF221, you can manually remove these portlets. This article describes how to remove these portlets.

!!!note
    These Log4j vulnerabilities cannot be exploited in HCL DX. For more information, refer to the HCL security bulletin [KB0095489](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0095489){target="_blank"}.

## Instructions

!!!important
    Verify these portlets are not redeployed after staging-to-production or CF installations.

1. Determine whether your application relies on these portlets:

    - Unified Task List integrates with process servers such as IBM Process Server.  
    - Script Application Import lets developers import script applications using a GUI. This is generally required in development environments only. Deployed script applications in test staging, and production systems will continue to function without this portlet. Staging-to-production procedures can be used to deploy script applications to production, even absent this portlet.  

2. Navigate to **Manage Web Modules**:

    - Practitioner Studio: `/wps/myportal/Practitioner/Administration/Applications/Web%20Modules`  
    - Legacy UI: **Administration** > **Portlet Management** > **Web Modules**

3. In each web module, locate and delete the following files:  

    - `unifiedtasklist.war`
    - `wp.sp.importexport.war`


