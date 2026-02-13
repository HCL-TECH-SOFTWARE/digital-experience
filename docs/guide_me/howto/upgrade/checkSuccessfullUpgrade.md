# How to determine if a HCL Digital Experience CF upgrade was successful?

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

You have just upgraded the maintenance level or cumulative fix (CF) level for HCL Digital Experience, but you are unsure whether or not the upgrade was successful.  How can you verify that the installation was successful?  

## Instructions

There are a number of places to check to ensure that the installation was successful:

1. Verify the ConfigTrace.log to see if there are any fatal errors for the applyCF task. The ConfigTrace.log is generally located in the `<wp_profile_root>/ConfigEngine/log` directory.

2. Verify the wps.properties under the PortalServer binaries and the wp_profile. Compare the wps.properties between the `<wp_profile>\PortalServer\wps.properties` and `<portalHome>\wps.properties` and ensure that the versions are the same.  

    !!!note
        The CF levels should reflect the upgraded level for both the properties files which indicates that the binaries and the portal profile were upgraded.  

3. Check the Installation Manager (IM) data, installed.xml file, to ensure it reflects the upgraded level. Make sure you have the installed.xsl file in the same directory, then open installed.xml in a browser.  

    **Linux/AIX:**  
    If IM is installed as root: `/var/ibm/InstallationManager`  
    If IM is installed as non-root: `/home/var/ibm/InstallationManager`  

    **Microsoft Windows:**  
    In Microsoft Windows the `<IM Data Dir>` is usually located under `C:\ProgramData\IBM\InstallationManager Program`.  
    Data may be hidden. You will need to set Windows to show all hidden folders.  
