# Changing the auto-loading of portlet capabilities with XMLAccess

You can change the auto-loading of portlet capabilities with XMLAccess.

1.  Export the theme. You can export all themes that are defined for HCL Portal with the following script, or insert the specific theme object ID you want to export.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd" type="export"
    create-oids="true">
        <portal action="locate">
           <theme action="export" objectid="*" />
        </portal>
    </request>
    ```

2.  Modify the value of the resourceaggregation.autoLoadPortletCapabilities parameter to true or false, or add the parameter if it does not exist.

    For example:

    ```
    <parameter name="resourceaggregation.autoLoadPortletCapabilities" type="string" update="set"><![CDATA[true]]></parameter>
    ```

3.  Import the XML file with the command line or Import XML.

4.  Restart HCL Portal.



