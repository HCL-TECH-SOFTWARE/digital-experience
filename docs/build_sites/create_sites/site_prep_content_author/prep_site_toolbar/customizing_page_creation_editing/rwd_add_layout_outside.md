# Creating new styles or layouts by using a JSON file

You can add new styles or layouts to the site toolbar with a JSON file. Sometimes components outside of the theme want to contribute a new style or layout, without editing existing theme files. Components can easily be added to the theme through a catalog deliverable by using scripting and the Solutions Installer.

1.  Create new styles and layouts.

2.  Upload the styles or layouts to the portal. The out of box style and layout examples are in WebDAV at dav:fs-type1/themes/Portal8.5/css/ and dav:fs-type1/themes/Portal8.5/layout-templates.

3.  Create a JSON file to list and define the new styles and layouts. Base the style JSON file on the format in the topic *Creating a theme style*. The default JSON files can be used as examples and are in WebDAV at dav:fs-type1/themes/Portal8.5/system/.

4.  Add the new JSON files to the portal.

5.  Add theme metadata for each JSON file. The metadata keys are `ibm.portal.shelf.style.json.component` and `ibm.portal.shelf.layout.json.component`, for the style JSON files and layout JSON files, where component can be any string that uniquely identifies the contribution. The metadata values are URLs pointing to the JSON file location. Values that start with a forward slash \( `/` \) are treated as absolute URLs, and all other values are read relative to the theme root folder. By default, the theme root folder is in WebDAV at dav:fs-type1/themes/Portal8.5/

    The following example shows style and layout theme metadata for a component called **myAdditions**:

    ```
    <parameter name="ibm.portal.shelf.style.json.myAdditions" type="string" update="set">
    
         <![CDATA[system/myNewStyles.json]]&gt;</parameter>
    
         <!-- This URL will be read relative to the theme root folder -->
    
    <parameter name="ibm.portal.shelf.layout.json.myAdditions" type="string" update="set">
    
         <![CDATA[/myContextRoot/layouts/myNewLayouts.json]]&gt;</parameter>
    
         <!-- This is an absolute URL to a custom war file -->
    ```

    1.  To create and run an XML access script, use the following example as a model.

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <request build="wp85" type="update" version="8.5"
        	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        	xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
        	<portal action="locate">
        		<theme action="update" active="true"
        			default="true" domain="rel"
        			resourceroot="dynamicSpots" uniquename="ibm.portal.85Theme">
        			<parameter name="ibm.portal.shelf.style.json.myAdditions" 
        type="string" update="set">
               <![CDATA[system/myNewStyles.json]]&gt;</parameter> 
               <!-- This URL will be read relative to the theme root folder --> 
            <parameter name="ibm.portal.shelf.layout.json.myAdditions" type="string" update="set">
               <![CDATA[/myContextRoot/layouts/myNewLayouts.json]]&gt;</parameter>
               <!-- This is an absolute URL to a custom war file -->
        		</theme>
        	</portal>
        </request>
        ```

    2.  Copy the script to [PortalServer\_root](../../../../../guide_me/wpsdirstr.md)/bin.

    3.  Run the XML Access command: `xmlaccess -user user -password password -url localhost:port/wps/config -in AddCategories.xml -out AddCategoriesOutput`

6.  Log in to the portal and click **Edit Mode**.

7.  Verify that the new styles and layouts are present:

    -   If you have portal with combined cumulative fix 8 or later, proceed as follows:
        1.  Click the context menu for a page in the Site Manager tree view.
        2.  Click **Open Page Settings**.
        3.  Click the **Style** or **Layout** tab to view layouts or styles.
        
    -   If you have portal with Combined Cumulative Fix 7 or earlier, proceed as follows:
        1.  Select the **Page** tab.
        2.  Then, select the **Style** or **Layout** tab.


???+ info "Related information"
    - [Creating a theme style](../../../../themes_skins/customizing_theme/styles/themeopt_cust_newstyle.md)

