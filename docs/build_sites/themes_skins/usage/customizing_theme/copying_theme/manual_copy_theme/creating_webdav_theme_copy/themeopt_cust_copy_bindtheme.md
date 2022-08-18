# Binding your theme to the context root of the web application

You must bind your theme to the context root of the web application for your theme.

You can bind your theme by using XMLAccess in two ways: on the command line or in the Portal Administration pages. Use the steps in this procedure to bind your theme by using XMLAccess on the command line.

To bind your theme by using XMLAccess in the Portal Administration pages, click the **Administration menu** icon. Then, click **Portal Settings** \> **Import XML**. Click **Browse** and select the input.xml file. Then, click **Import** and copy the results from the **View Details** window.

1.  In [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\bin, create the file input.xml with the following contents:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
       xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd" 
       type="export"  
    >
    <portal action="locate">
    <skin action="export" objectid="*" />
    <theme action="export" objectid="*" />
    </portal>
    </request>
    ```

2.  From a command line, change to the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\bin directory and run the following xmlaccess command to export all skin and theme definitions to a file called output.xml:

    ```
    xmlaccess -user admin userid -password admin password -url hostname:10039/wps/config -in input.xml -out output.xml
    ```

3.  Edit the output.xml file. Search for the title of your theme, such as Custom Theme. Scroll up to the line with the surrounding `<theme>` tag. It is likely the last `<theme>` tag in the file. Modify it from:

    ```
    <theme action="update" active="true" context-root="/wps/themeModules" default="false" domain="rel" 
      objectid="ZJ_MLSU3F54089F00IP6G7P3F10S5" resourceroot="dynamicSpots">
    ```

    to:

    ```
    <theme action="update" active="true" context-root="/customTheme" default="false" domain="rel" 
      objectid="ZJ_MLSU3F54089F00IP6G7P3F10S5" resourceroot="dynamicSpots" uniquename="customTheme">
    ```

    Set the correct context-root and uniquename for your theme.

4.  Search for the title of your skin. Scroll up to the line with the surrounding `<skin>` tag; it is likely the last `<skin>` tag in the file. Modify it from:

    ```
    <skin action="update" active="true" context-root="/wps/themeModules" default="false" domain="rel" 
      objectid="ZK_73OKBB1A088IE0I5O7IP2J0G77" resourceroot="Hidden" type="default">
    ```

    to:

    ```
    <skin action="update" active="true" context-root="/customTheme" default="false" domain="rel" 
      objectid="ZK_73OKBB1A088IE0I5O7IP2J0G77" resourceroot="customSkin" type="default" uniquename="customSkin">
    ```

    Set the correct context-root, resourceroot, and uniquename for your skin.

    **Note:** resourceroot was used in previous versions of Portal when multiple themes were deployed in the same WAR file. It indicates which folder in the WAR file to find the specific theme. For the skin, this parameter should be set to the folder name where the skin is located.

5.  Find the `<theme>` tag for the Portal 8.5 theme. It is likely the first `<theme>` tag in the file. Find and copy one of the `<allowed-skin>` tag lines, such as:

    ```
    <allowed-skin skin="ZK_CGAH47L00GJJ40IDC03MS13OS2" update="set"/>
    ```

    Find the `<theme>` tag for your customTheme theme; it is likely the last `<theme>` tag in the file. Paste the `<allowed-skin>` tag line in just before the `<parameter>` tags. Modify the skin parameter value identifier to be the unique name of your customSkin skin, which can be found in the uniquename parameter of the `<skin>` tag of your customSkin skin. It is likely the last `<skin>` tag in the file, such as:

    ```
    <allowed-skin skin="customSkin" update="set"/>
    ```

6.  From the command line, run the following xmlaccess command to update the skin and theme definitions according to your change:

    ```
    xmlaccess -user admin userid -password admin password -url hostname:10039/wps/config -in output.xml -out output2.xml
    ```

7.  From the command line, run the following xmlaccess command to export all skin and theme definitions again to a file called output3.xml.

    ```
    xmlaccess -user admin userid -password admin password -url hostname:10039/wps/config -in input.xml -out output3.xml
    ```

8.  Edit the output3.xml file to verify that the result works, and then delete the input.xml, output.xml, output2.xml, and output3.xml files.


**Parent topic:**[Creating a WebDAV-based theme copy](../dev-theme/themeopt_themedev_manual_webdav.md)

