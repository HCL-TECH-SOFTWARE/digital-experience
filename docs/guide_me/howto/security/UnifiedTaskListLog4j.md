# How to uninstall the Unified Task List and Script Application Import Portlets to avoid Log4j warnings from security scan tools

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

Two HCL Digital Experience applications, the **Unified Task List Portlet** and the **Script Application Import Portlet**, include a version of log4j.jar which may be flagged by security scan tools as vulnerable.  As described in security bulletin [Is HCL Digital Experience vulnerable to CVE-2021-44228, Log4J 2 / Log4Shell?](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0095489){target="_blank"}, these log4j vulnerabilities cannot be exploited in HCL Digital Experience.

## Instructions

If you run on a HCL Digital Experience version that is lower then Cumulative Fix (CF) version 221, you might see that security scan tools may flag some DX Portlets as vulnerable. The log4j jars has been updated with CF221 to use version 2.23.1. With that the security scanning tools should not mark these log4j jars as a potential security leak anymore.  

If a lower DX version is used, the problem can be resolved as following:  

These Portlets may be safely removed from most HCL Digital Experience deployments, thereby removing the log4j.jar file and avoiding the flags in security scans.  

1. Determine whether your application relies on these Portlets:

    - Unified Task List integrates with process servers such as IBM Process Server.  
    - Script Application Import lets developers import script applications via a GUI.  This is generally required in development environments only.  Deployed script applications in test staging, and production systems will continue to function without this Portlet. Staging-to-production procedures can be used to deploy script applications to production, even absent this Portlet.  

2. Access the Manage Web Modules Portlet by one of:

    - In Practitioner Studio: `/wps/myportal/Practitioner/Administration/Applications/Web%20Modules`  
    - In legacy Administration UI: `/wps/myportal/Administration` > **Portlet Management** > **Web Modules**  

3. Sequentially locate and delete (trashcan icon) for each web module:  

    - unifiedtasklist.war
    - wp.sp.importexport.war

4. Following any staging-to-production procedures and/or CF installations, verify that these Portlets have not been redeployed unintentionally.  If so, repeat these steps.  
