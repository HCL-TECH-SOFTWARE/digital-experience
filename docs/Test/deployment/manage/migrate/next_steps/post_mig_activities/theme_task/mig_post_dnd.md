# Enabling drag on a 7.0.0.2 migrated theme

The migrated 7.0.0.2 theme is not enabled with the drag metadata. Therefore, you must add the information to the theme definition.

Choose one of the following options to enable the drag feature in your migrated 7.0.0.2 theme:

-   Complete the following steps if you have a theme deployment script:

    1.  Edit your theme deployment script file.

    2.  Add the following parameter to your script:

        ```
        <parameter name="com.ibm.portal.theme.dnd.sources" type="string" update="set">
        <![CDATA[ibmDndColumn:com.ibm.pb.dnd.layout.LayoutColumnSource:vertical,ibmDndRow:com.ibm.pb.dnd.layout.LayoutRowSource:horizontal]]></parameter>
        ```

        The following is a sample theme deployment script file with the drag parameter included:

        ```
        <theme action="update" active="true" context-root="/wps/myCustomTheme" default="false" defaultskinref="myCustomSkin" domain="rel"  resourceroot="dynamicSpots" uniquename="my.custom.theme">
                    <localedata locale="en">
                        <title>Custom Theme</title>
                    </localedata>
                    <allowed-skin skin="myCustomSkin" update="set"/>
                    <parameter name="com.ibm.portal.layout.template.href" type="string" update="set"><![CDATA[dav:fs-type1/themes/customTheme/layout-templates/2ColumnEqual/]]></parameter>
                    <parameter name="com.ibm.portal.dojo.config.parseOnLoad" type="string" update="set"><![CDATA[false]]></parameter>
                    <parameter name="resourceaggregation.profile" type="string" update="set"><![CDATA[profiles/profile_deferred.json]]></parameter>
                    <parameter name="com.ibm.portal.theme.template.ref" type="string" update="set"><![CDATA[dav:fs-type1/themes/customTheme/]]></parameter>
                    <parameter name="com.ibm.portal.theme.dnd.sources" type="string" update="set">
        <![CDATA[ibmDndColumn:com.ibm.pb.dnd.layout.LayoutColumnSource:vertical,ibmDndRow:com.ibm.pb.dnd.layout.LayoutRowSource:horizontal]]></parameter>
                </theme>
        ```

    3.  Re-import your theme deployment script file.

-   Complete the following steps if you do not have a theme deployment script:

    1.  Export all themes and skins using the ExportThemesAndSkins.xml script. Locate the script in \\ibm\\PortalServer\\doc\\xml-samples directory

    2.  Locate your theme in the exported file and add the following parameter to your theme:

        ```
        <parameter name="com.ibm.portal.theme.dnd.sources" type="string" update="set">
        <![CDATA[ibmDndColumn:com.ibm.pb.dnd.layout.LayoutColumnSource:vertical,ibmDndRow:com.ibm.pb.dnd.layout.LayoutRowSource:horizontal]]></parameter>
        ```

    3.  Save your changes.

    4.  Import the saved file.



