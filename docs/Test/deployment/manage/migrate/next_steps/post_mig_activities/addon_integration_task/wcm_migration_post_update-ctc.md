# Content Template

Content Template versions 3.x, 4.0.x, and 4.1.x are migrated along with all Web Content Manager data. These are additional migration steps that are required for Content Template after data migration is complete.

## Important post migration steps for Content Template versions 3.x, 4.0.x, and 4.1.x

As part of your migration to HCL Portal version 8.5 you must do all the migration steps and post-migration steps.

## Using the HCL Portal version 8.5 default theme

If you want to use the new HCL Portal version 8.5 default theme, including all the new features that are included with that theme, such as the updated toolbar, you need to download and install Content Template version 4.2 or higher. Follow the upgrade procedures in the Content Template version 4.2 documentation.

## Upgrading the Content Template Catalog 3.x theme to HCL Digital Experience 8.5

If you upgraded from Portal 7 to HCL Digital Experience 8.5, content and pages created with Content Template Catalog 3.x are migrated to HCL Digital Experience 8.5 automatically.

The version of Content Template 3.x that ran on Portal 7 was based on the PageBuilder2 theme. To run on HCL Digital Experience 8.5, install the Mashup Integration .ear file, which installs additional required modules. Then, use the XML Access script that is provided to configure the Content Template Catalog 3.x theme on the HCL Digital Experience 8.5 server.

1.  On the HCL Digital Experience 8.5 server, install the Mashup Integration .ear file by running the ConfigEngine batch or script file with the following arguments:
    -   **Windows™**

        ```
        ConfigEngine.bat action-create-ear-wp.mmi.deploy
        ```

    -   **AIX and Linux™**

        ```
        ./ConfigEngine.sh action-create-ear-wp.mmi.deploy
        ```

2.  Copy the following XML Access script and save it as an XML file:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    	<request type="update" version="8.5.0.0" 
    		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    		xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
    			<portal action="locate">
    				<theme action="update" active="true" context-root="/wps/PageBuilder2" default="false" 
    					domain="rel" resourceroot="PageBuilder2" uniquename="CTCTheme"/>
    			</portal>
    	</request>
    ```

3.  Log in to HCL Digital Experience as an administrator.
4.  Click the **Administration menu** icon. Then, click **Portal Settings > Import XML**.
5.  Import the file that is saved in Step 2.

## Enabling inline editing for Content Template version 3.x

Inline editing for Content Template version 3.x is not enabled during migration. To enable inline editing:

1.  Open the authoring portlet and go to the Content Template version 3.x Design library.
2.  Open the Inline Editing folder and edit all the toolbar components.
3.  Change the "On Editing" setting to "Edit live content".
4.  Save each component.

## Tagging and rating

If you use tagging and rating, then you must enable the new tag and rating widgets after migration. For more information, see [Enabling the new tag and rating widgets after a portal upgrade](../../../../../../deployment/manage/migrate/next_steps/enable_func_migrated_portal/mig_post_tagandrate.md).


