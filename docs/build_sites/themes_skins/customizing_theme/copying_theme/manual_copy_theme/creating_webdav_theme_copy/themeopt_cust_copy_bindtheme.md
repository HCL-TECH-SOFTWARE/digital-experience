# Binding your theme to the context root of the web application

You must bind your theme to the context root of the web application for your theme. You can bind your theme using XMLAccess through the command line or the Portal Administration pages.

## Binding your theme through the command line

Refer to the following steps to bind your theme using the command line.

1. In the [PortalServer\_root](../../../../../../guide_me/wpsdirstr.md)\\bin, create the file `input.xml` with the following contents:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
       xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd" 
       type="export"  
    >
    <portal action="locate">
    <skin action="export" objectid="*" />
    <theme action="export" objectid="*" />
    </portal>
    </request>
    ```

2. From a command line, switch to the [PortalServer\_root](../../../../../../guide_me/wpsdirstr.md)\\bin directory and run the following XMLAccess command to export all skin and theme definitions to a file called `output.xml`.

    ```
    xmlaccess -user admin userid -password admin password -url hostname:10039/wps/config -in input.xml -out output.xml
    ```

3. In the `output.xml` file, modify the `<theme>` tag of your theme.

    1. Search for the title of your theme, such as **Custom Theme**.
    
    2. Navigate to the line with the surrounding `<theme>` tag. It is likely the last `<theme>` tag in the file.
    
    3. Set the correct `context-root` and `uniquename` for your theme. For example, modify the tag from:

        ```
        <theme action="update" active="true" context-root="/wps/themeModules" default="false" domain="rel" 
          objectid="ZJ_MLSU3F54089F00IP6G7P3F10S5" resourceroot="dynamicSpots">
        ```

        to:

        ```
        <theme action="update" active="true" context-root="/customTheme" default="false" domain="rel" 
          objectid="ZJ_MLSU3F54089F00IP6G7P3F10S5" resourceroot="dynamicSpots" uniquename="customTheme">
        ```

4. Modify the `<skin>` tag of your theme.

    1. Search for the title of your skin.
    
    2. Navigate to the line with the surrounding `<skin>` tag. It is likely the last `<skin>` tag in the file.
    
    3. Set the correct `context-root`, `resourceroot`, and `uniquename` for your skin. For example, modify the tag from:

        ```
        <skin action="update" active="true" context-root="/wps/themeModules" default="false" domain="rel" 
          objectid="ZK_73OKBB1A088IE0I5O7IP2J0G77" resourceroot="Hidden" type="default">
        ```

        to:

        ```
        <skin action="update" active="true" context-root="/customTheme" default="false" domain="rel" 
          objectid="ZK_73OKBB1A088IE0I5O7IP2J0G77" resourceroot="customSkin" type="default" uniquename="customSkin">
        ```

    !!! note
        The `resourceroot` parameter was used in previous versions of Portal when multiple themes were deployed in the same WAR file. It indicates which folder in the WAR file to find the specific theme. For the skin, set this parameter to the folder name where the skin is located.

5.  Add the `<allowed-skin>` tag  to your `customTheme` theme.

    1. Find the `<theme>` tag for the Portal 8.5 theme. It is likely the first `<theme>` tag in the file. 
    
    2. Find and copy one of the `<allowed-skin>` tag lines, such as:

      ```
      <allowed-skin skin="ZK_CGAH47L00GJJ40IDC03MS13OS2" update="set"/>
      ```

    3. Find the `<theme>` tag for your `customTheme` theme. It is likely the last `<theme>` tag in the file. 
    
    4. Paste the `<allowed-skin>` tag line just before the `<parameter>` tags.
    
    5. Change the `skin` parameter value identifier to the unique name of your `customSkin` skin. You can find this name in the `uniquename` parameter of the `<skin>` tag of your `customSkin` skin. It is likely the last `<skin>` tag in the file, such as:

      ```
      <allowed-skin skin="customSkin" update="set"/>
      ```

6.  From the command line, run the following XMLAccess command to update the skin and theme definitions according to your change:

    ```
    xmlaccess -user admin userid -password admin password -url hostname:10039/wps/config -in output.xml -out output2.xml
    ```

7.  From the command line, run the following XMLAccess command to export all skin and theme definitions again to a file called `output3.xml`.

    ```
    xmlaccess -user admin userid -password admin password -url hostname:10039/wps/config -in input.xml -out output3.xml
    ```

8.  Edit the `output3.xml` file to verify that the result works, and then delete the `input.xml`, `output.xml`, `output2.xml`, and `output3.xml` files.

## Binding your theme through the Portal Administration page

Refer to the following steps to bind your theme by using XMLAccess in the Portal Administration pages.

1. Click the **Administration menu** icon.

2. Click **Portal Settings > Import XML**.

3. Click **Browse** and select the `input.xml` file.

4. Click **Import** and copy the results from the **View Details** window.
