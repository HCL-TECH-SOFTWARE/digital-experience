# How to export a single page or a page hierarchy

## Applies to
>
> HCL Digital Experience v8.5 and later

##  Introduction

This article provides step-by-step instructions for exporting a single page or a page hierarchy. You can export pages by using the Manage Pages portlet or XMLAccess.  

## Instructions

You can export a page or a page hierarchy using the Manage Pages portlet or XMLAccess.

### Option 1: Export ing via Manage Pages

1. Sign in to the Portal as a portal administrator (for example, the `wpsadmin` user).  
2. In the Portal menu, click **Home**, then click the **Administration** menu icon.  
3. On the Administration page, click **Site Management** to access Manage Pages.  
4. Locate the portal page you want to export. Navigate through the page structure from the Content Root link to the target page.  
5. Click **Export** for that page.  
6. The portlet prompts you to export either the selected page or the entire page hierarchy. Choose one of the following options:  
    * **Yes** – Export the entire page hierarchy.  
    * **No** – Export only the selected page.  
    * **Cancel** – Stop the export.  
7. If you select **Yes** or **No**, a pop-up window opens to save the XML configuration file. Enter a file name and select a location.  
8. When the export completes, the portlet displays a success message.  
9. On the "Download complete" screen, you can click **Open** to view the saved XML file. Verify that it does not contain a `<failure>` tag. If review is skipped, close the window.  

!!!note
    For more information, see:  
    [Exporting pages or page hierarchies using the Manage Pages portlet](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_admin_portlets_for_xml_config/adxmltsk_portlets_exp.md){target="_blank"}  
    [Using XMLAccess to export and import Portal pages](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0075798){target="_blank"}  

### Option 2: Exporting  via XMLAccess

You can use XMLAccess to export pages. Sample XML configuration files are located in `<PortalServer_root>/doc/xml-samples`.

To export a page using **ExportPage.xml**, follow these steps:

1. Navigate to the `<PortalServer_root>/doc/xml-samples` directory:

    ```bash
    cd /opt/HCL/PortalServer/doc/xml-samples
    ```

2. Copy the **ExportPage.xml** file (for example, as ExportPage1.xml).  
3. Open the copied file (**ExportPage1.xml**) in a text editor.  
4. Replace the default content `uniquename="ibm.portal.ssa.SamplePage"` with the unique name of the page you want to export.  
5. Run the following command to export the page:

    ```bash
    cd /opt/HCL/wp_profile/PortalServer/bin
    ./xmlaccess.sh -user <your_username> -password <your_password> -url http://<ipAddress>:<port>/wps/config/ -in /opt/HCLPortalServer/doc/xml-samples/<your_input_file>.xml -out /tmp/<your_result>.xml
    ```

    !!!note
        Replace `<your_username>`, `<your_password>`, `<ipAddress>`, `<port>`, `<your_input_file>`, and `<your_result>` with your values.  
        Example:  
        ```bash
        ./xmlaccess.sh -user wpsadmin -password wpsadmin -url http://localhost:10039/wps/config/ -in /opt/HCLPortalServer/doc/xml-samples/ExportPage1.xml -out /tmp/result.xml
        ```  
        Best practice: save the result.xmlin a temporary, easily accessible location.  

6. Import the XMLAccess output using the following command:

    ```bash
    ./xmlaccess.sh -user <your_username> -password <your_password> -url http://<ipAddress>:<port>/wps/config/ -in /tmp/<your_input_file>.xml -out <your_result>.xml
    ```

    !!!note
        Replace `<your_username>`, `<your_password>`, `<ipAddress>`, `<port>`, `<your_input_file>`, and `<your_result>` with your values.  
        Example:  
        ```bash
        ./xmlaccess.sh -user wpsadmin -password wpsadmin -url http://localhost:10039/wps/config/ -in /tmp/importFile.xml -out result_import.xml
        ```  

    * **or using the XML Import portlet:**  

        [Importing pages or page hierarchies by using the XML Import portlet](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_admin_portlets_for_xml_config/adxmltsk_portlets_imp.md){target="_blank"}  

7. Verify the imported page's in the **Manage Page portlet to confirm the result.

If it is preferred to export a page hierarchy, use the `ExportSubTree.xml` sample for exporting subtree of the content hierarchy. This script exports the page customizer place with all contained pages.

---

???+ info "Related information"
    [Exporting and transferring parts of a portal configuration](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/adxmltsk_xfer_partl_cfg.md){target="_blank"}  
    [Sample XML configuration files](../../../deployment/manage/portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md){target="_blank"}  
    [What are the recommended ways to move a Portal environment to a different/updated OS?](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0077427){target="_blank"}  
    [Transferring a complete configuration](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/adxmltsk_xfer_compl_cfg.md){target="_blank"}  
    [Using ReleaseBuilder effectively](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012741){target="_blank"}  
    [How to generate a complete XMLAccess export of a Portal configuration](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012516){target="_blank"}  
