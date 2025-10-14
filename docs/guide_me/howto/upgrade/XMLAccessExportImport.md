# How to use XML Access to export and import Portal pages

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

What is XML Access ?

XML Access (XML Configuration Service) is a command-line batch-processing utility for exporting & importing various portal configuration. It can export specific pages, complete or partial configuration from one portal to another.

By default, portal provides set for standard XML sample with WPS installation, we can find them in `/opt/HCL/PortalServer/doc/xml-samples`

XML Access is designed to transfer all or part of a Portal configuration including user data from one system to another.

* It is used for backing up the configuration of certain Environments, for loading new configurations, or for updating existing portlets when a new WAR file is provided by development.
* XML Access overwrites objects referred to as 'artifacts' or 'resources' it finds on the target system with the values specified in the XML file.
* Objects not present in the target system but defined in the XML will be created.This tool greatly eases the duplication of a portal environment from server A to server B.
* XML Access updates pages & portlets without losing user customization. User customization to a page or a portlet is retained because the object IDs are retained
* XML Access overwrites objects referred to as 'artifacts' or 'resources' it finds on the target system with the values specified in the XML file
* Objects not present in the target system but defined in the XML will be created.
* This tool greatly eases the duplication of a portal environment from server A to server B.
* XML Access updates pages & portlets without losing user customization. User customization to a page or a portlet is retained because the object IDs are retained.*

## Instructions

XML Access (XML Configuration Service) is a command-line batch-processing utility for exporting & importing various portal configurations. In this article we will learn how to export and import portal pages using this utility.

* Login as administrator in HCL Portal Server Console.
* Navigate to Administration -> Portal User Interface -> Content Root
* Click on the Export Page icon as shown below for the portal page Home.

![alt text](./images/XMLAccessExportImport_image-8.png)

* Below popup window will open. Click Yes to Export the page Hierarchy of Home portal page.

![alt text](./images/XMLAccessExportImport_image-7.png)

* Click Save to save the exported file to your local file system.

![alt text](./images/XMLAccessExportImport_image-6.png)

* Now Delete the Home page using delete icon shown in the image below.

![alt text](./images/XMLAccessExportImport_image-5.png)
 
* Click Ok.

![alt text](./images/XMLAccessExportImport_image-4.png)
 
* Now Home page is not showing on "Open Site Menu"

![alt text](./images/XMLAccessExportImport_image-3.png)
 
* Now to recreate the same Portal Page we will import the XML which was exported for that we navigate to `Administration -> Portal Settings -> Import XML -> Browse -> Import` as shown below.

![alt text](./images/XMLAccessExportImport_image-2.png)
 
* You will receive successful message as shown below once the import process is successfully completed.

 ![alt text](./images/XMLAccessExportImport_image-1.png)

* Now you see that the Open Site Menu -> Home is recreated again.

![alt text](./images/XMLAccessExportImport_image.png)


 
