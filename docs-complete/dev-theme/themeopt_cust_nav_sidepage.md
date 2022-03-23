# Set side navigation for a page 

You can set the side navigation template for a specific page.

1.  Log on to your portal.

2.  Export the page where you want to apply the side navigation template.

    **Note:** You can export the page using XMLAccess or by using the Manage Pages portlet.

3.  Add the page metadata key com.ibm.portal.theme.template.file.name.html with a value `<![CDATA[theme_sidenav.html]]>` to the exported XML file.

    For example:

    ```
    <content-node action="update" content-parentref="wp.example.parent" active="true" objectid="wp.example.id" uniquename="wp.example">
    		...
    		<parameter name="com.ibm.portal.theme.template.file.name.html" type="string" update="set"><![CDATA[theme_sidenav.html]]></parameter>
    		...
    </content-node>
    ```

4.  Save the new page XML file.

5.  Import the XML file using the command line or the Import XML portlet.

6.  You can now navigate to the page and it is now rendered as a side navigation.


**Parent topic:**[Side navigation ](../dev-theme/themeopt_cust_nav_side.md)

