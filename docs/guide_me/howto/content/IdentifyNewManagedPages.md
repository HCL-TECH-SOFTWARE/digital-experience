# How to identify new managed pages in HCL Digital Experience

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

This document describes how to identify newly created managed pages in an HCL DX environment.  

## Instructions

!!!note  
    The initial performance of the following steps will not produce a list of new pages. A base (original) XML file is needed which can be used in subsequent performances of these steps to generate a list of new managed pages by comparison. It is suggested to do a full XML Access export as soon as the initial DX pages are created and for which later then the differences should be determined.  

1. [Generating a complete XML Access export of a Portal configuration.](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/gen_xmlaccessexpt_ptlconfig.md)  

    Syntax:  
    `<wp_profile_root>/PortalServer/bin/xmlaccess.sh -user <USERNAME> -password <PASSWORD> -url http://<DX_HOST>:<PORT>/wps/config/ -in <PortalServer_root>/doc/xml-samples/Export.xml -out result.xml`  

    For Example:  
    `/opt/IBM/WebSphere/wp_profile/PortalServer/bin/xmlaccess.sh -user wpsadmin -password wpsadmin -url http://localhost:10039/wps/config/ -in /opt/IBM/WebSphere/PortalServer/doc/xml-samples/Export.xml -out result.xml`  

2. Grep on content-node to extract the pages and pipe the output to a new XML file. This will be the base file.  

    Example:
    `grep content-node >> new_pages_base.xml`  

3. Over the time new pages may then will be created in your HCL Digital Experience environment. If you then want to determine new pages, perform steps 1 and 2 again to generate another XML file.  

4. Use the **diff** command to compare the XML files that were generated in the previous steps. This should give a list of new pages.  

!!!note
    In a Microsoft Windows deployment an application such as Notepad++ could be used to search for the keyword "content-node" in order to create the base XML file as well as the subsequent comparison XML file. The Compare plugin in Notepad++ can be used to compare the two files in order to generate the list of new pages.
