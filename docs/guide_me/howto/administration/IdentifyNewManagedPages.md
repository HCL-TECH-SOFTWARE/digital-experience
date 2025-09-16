# How to Identify New Managed Pages in DX

## Applies to

> HCL Digital Experience 9.5 and Higher

## Introduction
You want to identify newly created managed pages in your DX environment.  In one use case, this was needed for a custom backup procedure.

## 
IMPORTANT NOTE:  The initial performance of the following steps will not produce a list of new pages.  A base XML file is needed which can be used in subsequent performances of these steps to generate a list of new managed pages by comparison.

1. Run the XMLAccess ExportPages.xml command.
Example:
/opt/IBM/WebSphere/wp_profile/PortalServer/bin/xmlaccess.sh -user wpsadmin -password password -url http://ipAddress:port/wps/config/ -in /opt/IBM/WebSphere/PortalServer/doc/xml-samples/ExportPage.xml -out result.xml

2. Grep on content-node to extract the pages and pipe the output to a new XML file. This will be the base file.
Example:
grep content-node >> new_pages_base.xml

3. Prior to running the next backup, perform steps 1 and 2 again to generate another XML file.

4. Use the 'diff' command to compare the XML files that were generated in the previous steps. This should give a list of new pages.

NOTE:  In a Windows deployment an application such as Notepad++ could be used search for "content-node" in order to create the base XML file as well as the subsequent comparison XML file.  The Compare plugin in Notepad++ can be used to compare the two files in order to generate the list of new pages.
