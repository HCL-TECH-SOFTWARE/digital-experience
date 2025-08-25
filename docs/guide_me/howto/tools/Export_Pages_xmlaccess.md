# How to export a single page individually or export page hierarchies?

## Applies to
>
> HCL Digital Experience v8.5 and later

##  Introduction

This guide provides detailed instructions to export a single page individually, excluding any page hierarchies or export the page and also page hierarchies.  

## Instructions

It is possible to export a page or page hierarchies by using the **Manage Pages** portlet or **xmlaccess**.  

### Option 1: Export via Manage Pages

1. Login to the Portal as an portal administrator. (etc. wpsadmin user)  
2. In the Portal menu, click to the **Home**- and then to the **Administration**-menu icon.  
3. On the Administration page click to **Site Management** for navigating to the **Manage Pages**.  
4. Locate the portal page that you want to export. (Clicking to the **Content Root** link and then go down in the page structure to the page that need to be exported.)  
5. Click **Export** for that page.  
6. The portlet is asking, if the entire page hierarchy, or only the selected page should be exported. Choose one of the following options:  
    * Click **Yes** to export the entire page hierarchy.  
    * Click **No** to export only the selected page.  
    * Click **Cancel** to stop the export.  
7. If you selected **Yes** or **No** in the previous step. The portlet opens a pop-up window to save the XML configuration file. Type a file name and select the location where the file should be saved.  
8. When the export is complete, the portlet will show a success message.  
9. On the "Download complete" screen, it is possible to click a **Open** button to view the newly saved XML configuration file. Check the content to ensure it does not contain a `<failure>` tag. If the file review should be skipped, close the extra window.  

!!!note
    For more information, please read:  
    [Exporting pages or page hierarchies by using the Manage Pages portlet](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_admin_portlets_for_xml_config/adxmltsk_portlets_exp.md){target="_blank"}  
    [Using XML Access to export and import Portal pages](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0075798){target="_blank"}  

### Option 2: Export via XMLAccess

It is possible to use **XMLAccess** to export pages. Sample XML configuration files are located in `<PortalServer_root>/doc/xml-samples`.

For example, to use **ExportPage.xml**, the following procedure can be used:  

1. Navigate to the location `<PortalServer_root>/doc/xml-samples`.

    For example:

     ```bash
     cd /opt/HCL/PortalServer/doc/xml-samples
     ```

2. Do a copy (duplication) of the **ExportPage.xml** file (etc. **ExportPage1.xml**)

3. Open the new file (etc. **ExportPage1.xml**) with an editor. 

4. In the new file (etc. **ExportPage1.xml**), replace the default content `uniquename="ibm.portal.ssa.SamplePage"` with the unique name of the page that should be exported.  

5. Run the following `xmlaccess` command to export the page:  

    ```bash
    cd /opt/HCL/wp_profile/PortalServer/bin
    ./xmlaccess.sh -user <your_username> -password <your_password> -url http://<ipAddress>:<port>/wps/config/ -in /opt/HCLPortalServer/doc/xml-samples/<your_input_file>.xml -out /tmp/<your_result>.xml
    ```

    !!!note
        Replace the tags `<your_username>, <your_password>, <ipAddress>, <port>, <your_input_file> and <your_result>` with your own values.  
        For example:  
        `./xmlaccess.sh -user wpsadmin -password wpsadmin -url http://localhost:10039/wps/config/ -in /opt/HCLPortalServer/doc/xml-samples/ExportPage1.xml -out /tmp/result.xml`  
        Best practice is to place the **result.xml** in a temporary, easily accessible location.  

6. Import the `xmlaccess` output using a command.

    * **Command:**  

        ```bash
        ./xmlaccess.sh -user <your_username> -password <your_password> -url http://<ipAddress>:<port>/wps/config/ -in /tmp/<your_input_file>.xml -out <your_result>.xml
        ```

        !!!note
            Replace the tags `<your_username>, <your_password>, <ipAddress>, <port>, <your_input_file> and <your_result>` with your own values.  
            For example:  
            `./xmlaccess.sh -user wpsadmin -password wpsadmin -url http://localhost:10039/wps/config/ -in /tmp/importFile.xml -out result_import.xml`  

    * **or using the XML Import portlet:**  

        [Importing pages or page hierarchies by using the XML Import portlet](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_admin_portlets_for_xml_config/adxmltsk_portlets_imp.md){target="_blank"}  

7. Verify the imported page's in the **Manage Page** portlet to confirm the result.

If it is preferred to export a page hierarchy, use the `ExportSubTree.xml` sample for exporting subtree of the content hierarchy. This script exports the page customizer place with all contained pages.

---

???+ info "Related information"
    [Exporting and transferring parts of a portal configuration](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/adxmltsk_xfer_partl_cfg.md){target="_blank"}  
    [Sample XML configuration files](../../../deployment/manage/portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md){target="_blank"}  
    [What are the recommended ways to move a Portal environment to a different/updated OS?](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0077427){target="_blank"}  
    [Transferring a complete configuration](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/adxmltsk_xfer_compl_cfg.md){target="_blank"}  
    [Using ReleaseBuilder effectively](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012741){target="_blank"}  
    [How to generate a complete XMLAccess export of a Portal configuration](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012516){target="_blank"}  
