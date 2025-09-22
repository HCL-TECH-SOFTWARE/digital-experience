# How to identify new managed pages in HCL Digital Experience

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

This article describes how to identify newly created managed pages in an HCL DX environment.  

## Instructions

!!! note
    Running these steps the first time won’t generate a list of new pages. You need a base XML file (original export) that can be used in later runs to compare and identify new managed pages. Export a full XML Access file as soon as the initial DX pages are created. Use that file to determine differences later.  

1. [Generating a complete XML Access export of a Portal configuration.](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/gen_xmlaccessexpt_ptlconfig.md)  

    Syntax:  
    `<wp_profile_root>/PortalServer/bin/xmlaccess.sh -user <USERNAME> -password <PASSWORD> -url http://<DX_HOST>:<PORT>/wps/config/ -in <PortalServer_root>/doc/xml-samples/Export.xml -out result.xml`  

    For Example:  
    `/opt/IBM/WebSphere/wp_profile/PortalServer/bin/xmlaccess.sh -user wpsadmin -password wpsadmin -url http://localhost:10039/wps/config/ -in /opt/IBM/WebSphere/PortalServer/doc/xml-samples/Export.xml -out result.xml`  

2. Use grep to extract content-node entries and pipe the output to a new XML file. This file is the base export.  

    Example:
    `grep content-node >> new_pages_base.xml`  

3. Over time, new pages might be created in your HCL Digital Experience environment. To identify them, repeat steps 1 and 2 to generate a new XML file.  

4. Use the **diff** command to compare the XML files generated in the previous steps. The comparison produces a list of new pages.  

!!! note
    In a Microsoft Windows deployment, you can use an application such as Notepad++ to search for the keyword content-node and create the base XML file and the comparison XML file. Use the Compare plugin in Notepad++ to compare the two files and generate the list of new pages.  
