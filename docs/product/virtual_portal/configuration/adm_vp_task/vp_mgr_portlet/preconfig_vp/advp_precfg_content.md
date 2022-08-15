# Preconfiguring the default content for virtual portals

When you create the virtual portal by using the Virtual Portal Manager portlet, the virtual portal is pre-filled with default content. This default content is determined by the default XML script file for initializing virtual portals.

This file can have different names, for example, `InitVirtualPortal.xml`, or `InitVirtualContentPortal.xml`, or `InitAdminVirtualPortal.xml`, depending on your portal installation. It is in a WebSphere® Application Server asset named VirtualPortal.zip. To get to this file, access the WebSphere Integrated Solutions Console, select **Applications** \> **Application Types** \> **Assets**, and locate the file in the list.

To find out which of these XML files is used for creating virtual portals in your installation, select **Manage Virtual Portals** to open **Virtual Portal Manager** portlet and select the option **Edit Shared Settings** from the portlet menu. This shows the WebSphere Application Server asset name and the XML file name inside that asset. To find out which content virtual portals have that you create, review the XML script file under the location that was given earlier.

Advanced master administrators can customize the default content for virtual portals as required by modifying or replacing the XML script that specifies the initial content for virtual portals.

**Note:** When you modify or replace this XML script, plan ahead and apply special care. You can add or remove some content to enhance or reduce the functionality of a virtual portal to a certain extent. The following portal resources are mandatory content of a virtual portal and must be included in a customized XML initialization script for virtual portals:

-   Content Root \(`wps.content.root`\)
-   Login \(`wps.Login`\)
-   Administration \(`ibm.portal.Administration`\).

Depending on the functionality that you want to make available, more content is required. For example, to allow templating. Include Application Root \(`wps.application.root`\) and Templates \(`ibm.portal.Templates`\).

1.  Add your custom XML script to a WebSphere Application Server asset.

    To make this addition, proceed as follows:

    1.  Export the file VirtualPortal.zip from your portal server.

    2.  Log in to the WebSphere Integrated Solutions Console.

    3.  Click **Applications** \> **Application Types** \> **Assets**.

    4.  Select VirtualPortal.zip.

    5.  Click **Export**.

    6.  Make a copy of the exported .zip file, and name the copy my\_VirtualPortal.zip or similar.

    7.  Add your custom virtual portal script to your copy of the .zip file. For example, the script file can be my\_InitVirtualPortal.xml. To add the script, use a utility program for .zip files.

    8.  Log in to the WebSphere Integrated Solutions Console.

    9.  Click **Applications** \> **Application Types** \> **Assets**.

    10. Click **Import**.

    11. Select your updated copy of the .zip file, for example my\_VirtualPortal.zip.

    12. Click **Next** \> **Next** \> **Finish**.

    13. Save your changes to the master configuration.

2.  Open the Manage Virtual Portals portlet by clicking the **Administration menu** icon. Then, click **Virtual Portals** \> **Manage Virtual Portals**.

3.  Open the **Manage Virtual Portals** portlet menu by clicking the dropdown arrow and select the option **Edit Shared Settings**.

4.  Edit the SCRIPT\_INIT\_VP parameter of the portlet. Replace the current value with the name of your custom XML script and custom asset compressed \(.zip\) file.

    You can specify this attribute as a file inside a WebSphere Application Server asset by using a syntax such as this:

    ```
    WebSphere:assetname=my\_VirtualPortal.zip:my\_InitVirtualPortalScript.xml
    ```

    where my\_VirtualPortal.zip is the name of your asset and my\_InitVirtualPortalScript.xml is the name of a file inside the asset. Do not update the default asset VirtualPortal.zip installed with HCL Portal. Instead, create and maintain a separate second asset independent of the default asset VirtualPortal.zip.

5.  If you want to create only an empty virtual portal with no content, you can specify the value for this parameter as follows: `WebSphere:assetname=VirtualPortal.zip:InitEmptyVirtualPortal.xml`.

6.  Click **OK** twice to save your changes.


**Parent topic:**[Preconfiguring virtual portals](../admin-system/advp_precfg.md)

**Related information**  


[Content of a virtual portal](../admin-system/advppln_content.md)

[Administering virtual portals](../admin-system/advp_adm.md)

[Using the Virtual Portal Manager administration portlet](../admin-system/advp_vpmgr_use.md)

[Filling a virtual portal with content](../admin-system/advp_tsk_fill_content.md)

[Migration: Virtual portals](../migrate/mig_plan_expect_vp.md)

