# How do I export a single page individually or export page hierarchies?

## Applies to
>
> HCL Digital Experience v8.5 and later

##  Introduction

You would like to export a single page individually, excluding any page hierarchies or export the page and also page hierarchies.

## Instructions

You can export page or page hierarchies by using the **Manage Pages** portlet or **xmlaccess**.

## Option 1: Export via Manage Pages

1. To open the **Manage Pages** portlet, click the Administration menu icon, then click **Portal User Interface** > **Manage Pages**.
2. Locate the portal page that you want to export.
3. Click **Export** for that page.
4. The portlet will ask if you want to export the entire page hierarchy or only the selected page. Choose one of the following options:
    * Click **Yes** to export the entire page hierarchy.
    * Click **No** to export only the selected page.
    * Click **Cancel** to stop the export.
5. If you selected **Yes** or **No** in the previous step. The portlet prompts you to save the XML configuration file. Type a file name and select the location where you want the file to be saved.
6. When the export is complete, the portlet will show a success message.
7. On the "Download complete" screen, you can click **Open** to view the newly saved XML configuration file. Check the content to ensure it does not contain a `<failure>` tag. If you don't want to view the file, close the extra window.

> **Note:** For more information, see the following references:
>
> * [Exporting pages or page hierarchies by using the Manage Pages portlet](/docs/deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_admin_portlets_for_xml_config/adxmltsk_portlets_exp.md)
> * [Using XML Access to export and import Portal pages](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0075798){target="_blank"}

---

## Option 2: Export via XMLAccess

You can also use **XMLAccess** to export pages. Sample XML configuration files are located in `PortalServer_root/doc/xml-samples`.

For example, to use `ExportPage.xml`:

1. Go to the location `<PortalServer_root>/doc/xml-samples`.

    ```bash
    cd /opt/IBM/WebSphere/PortalServer/doc/xml-samples
    ```

2. Edit the `ExportPage.xml` file. Replace the default content `uniquename="ibm.portal.ssa.SamplePage"` with the unique name of the page you want to export.
3. Run the following `xmlaccess` command to export the page.

    ```bash
    cd /opt/IBM/WebSphere/wp_profile/PortalServer/bin
    ./xmlaccess.sh -user wpsadmin -password password -url http://ipAddress:port/wps/config/ -in /opt/IBM/WebSphere/PortalServer/doc/xml-samples/ExportPage.xml -out result.xml
    ```

    > **Note:** Place `result.xml` in a temporary, easily accessible location.

4. Import the `xmlaccess` output using a command.
    * **Command:**

        ```bash
        ./xmlaccess.sh -user wpsadmin -password password -url http://ipAddress:port/wps/config/ -in /opt/IBM/WebSphere/wp_profile/PortalServer/bin/pageExport.xml -out result.xml
        ```

    * **or using the XML Import portlet:**
        [Importing pages or page hierarchies by using the XML Import portlet](/docs/deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_admin_portlets_for_xml_config/adxmltsk_portlets_imp.md)

5. Check the page's status in the **Manage Page** portlet to confirm the result.

If you prefer to export a page hierarchy, use the `ExportSubTree.xml` sample for exporting subtree of the content hierarchy. This script exports the page customizer place with all contained pages.

---

???+ info "Related information"

For more details and related topics, refer to these resources:

* [Exporting and transferring parts of a portal configuration](/docs/deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/adxmltsk_xfer_partl_cfg.md)
* [Sample XML configuration files](/docs/deployment/manage/portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md)
* [What are the recommended ways to move a Portal environment to a different/updated OS?](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0077427){target="_blank"}
* [ExportRelease.xml - Transferring a complete configuration](/docs/deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/adxmltsk_xfer_compl_cfg.md)
* [Using ReleaseBuilder effectively](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012741){target="_blank"}
* [How to generate a complete XMLAccess export of a Portal configuration](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012516){target="_blank"}
