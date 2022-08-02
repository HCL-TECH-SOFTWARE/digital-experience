# Renaming Theme Templates

You can rename the default filename of the theme template from theme.html. In the ready-to-use theme renaming the theme.html file is used to provide a different theme view for the administrative pages.

This change can be done selectively for individual pages by setting a page metadata called `com.ibm.portal.theme.template.file.name.html`. This setting is not inherited along the navigation hierarchy.

To set the theme template on a page, you must use the XML configuration interface \(XMLAccess\).

1.  Export the page by using XMLAccess.

2.  Edit the resulting XML file and add the following parameter to the content-node, replacing my\_theme.html with your theme template file name.

    ```
    <parameter name="com.ibm.portal.theme.template.file.name.html" type="string" update="set"><![CDATA[my_theme.html]]></parameter>
    ```

3.  Save the XML file.

4.  Import the page using XMLAccess or the Import XML portlet.


**Parent topic:**[Theme templates \(theme.html\)](../dev-portlet/csa2_dgn_theme_html.md)

