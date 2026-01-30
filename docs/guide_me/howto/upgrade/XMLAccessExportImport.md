# How to use XMLAccess to export and import portal pages

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

XML Access (XML Configuration Service) is a command-line batch utility that you can use to export and import portal configurations. You can export specific pages, partial configurations, or complete environments from one portal to another.

By default, HCL Digital Experience provides a set of standard XML samples with the installation binaries. You can find these samples in the following directory:  
`<PortalServer_root>/doc/xml-samples`

## XML Access features and use cases

You can use XML Access to:

- Transfer all or part of a portal configuration, including user data, from one system to another.  
- Back up the configuration of specific environments before applying new configurations.  
- Update existing portlets when a new WAR file is provided by development.  
- Overwrite artifacts or resources on the target system with the values defined in the XML file.  
- Create missing objects that are defined in the XML file but not present in the target system.  
- Simplify duplication of a portal environment from one server to another.  
- Update pages and portlets without losing user customizations. Customizations are retained because object IDs remain unchanged.

## Instructions

XML Access (XML Configuration Service) is a command-line batch utility that you can use to export and import portal configurations.  

This section explains how to use XML Access to export and import portal pages. The example shows how to export the **Home** portal page, delete it, and then restore it by importing the previously exported XML file.   

### Detailed steps

1. Sign in to the HCL Portal Server as an administrator.  

2. Go to **Administration > Portal User Interface > Content Root**.  

3. Select the **Export Page** icon for the **Home** portal page.  

    ![Export the Home page](./images/XMLAccessExportImport_image-8.png)  

4. In the pop-up window, select **Yes** to export the page hierarchy for the Home portal page.  

    ![Confirm export of Home page hierarchy](./images/XMLAccessExportImport_image-7.png)  

5. Select **Save** to download the exported file to your local system.  

    ![Save exported page file](./images/XMLAccessExportImport_image-6.png)  

    !!! note  
        The downloaded XML file (`pageExport.xml`) contains all the information required to restore the **Home** portal page later.  

6. Delete the **Home** page by selecting the **Delete** icon.  

    ![Delete the portal page](./images/XMLAccessExportImport_image-5.png)  

7. In the confirmation dialog, select **OK** to confirm deletion of the **Home** page and all its subpages.  

    ![Confirm delete action](./images/XMLAccessExportImport_image-4.png)  

8. Verify that the **Home** page no longer appears in the **Open Site Menu**.  

    ![Home page removed from Open Site Menu](./images/XMLAccessExportImport_image-3.png)  

9. To recreate the **Home** portal page, import the previously exported XML file.  
   Go to **Administration > Portal Settings > Import XML**, then select **Browse** and **Import**.  

    ![Import XML file](./images/XMLAccessExportImport_image-2.png)  

10. Wait for the success message that confirms the import process completed successfully.  

    ![Import successful message](./images/XMLAccessExportImport_image-1.png)    
