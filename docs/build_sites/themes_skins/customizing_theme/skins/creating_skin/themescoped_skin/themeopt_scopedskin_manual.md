# Defining the skin and assigning it to a theme manually

When you create new skin resources, you can define them so that you can assign them to a theme.

You can define the skin and assign it to a theme by using **Manage properties** or manually. [Learn more about Defining the skin and assigning it to a theme using **Manage properties**](themeopt_scopedskin_etp.md#).

1.  Use the following code snippet as a template for the XMLAccess skin definition to import, where theme\_context, skin\_folder\_name, skin\_unique\_name, skin\_title, theme\_folder, skin\_folder\_name, and theme\_unique\_name are the unique values for your theme and skin.

    **Note:** This template creates a title in English only, but you can add more locales.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    				<request
    					xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" build="wp80" version="8.0"
    					xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd"
    					type="update" create-oids="true">
    					<portal action="locate">
    						<skin action="update" active="true" context-root="theme\_context" default="false" domain="rel" 
    						  resourceroot="skin\_folder\_name" type="default" objectid="skin\_unique\_name" uniquename="skin_unique_name">
    						<localedata locale="en">
    							skin\_title
    						</localedata>
    							<parameter name="com.ibm.portal.skintype" type="string" update="set"><![CDATA[template]]></parameter>
    							<parameter name="com.ibm.portal.skin.template.file.name.html" type="string" update="set"><![CDATA[skin.html]]></parameter>
    							<parameter name="com.ibm.portal.skin.template.ref" 
    							  type="string" update="set"><![CDATA[dav:fs-type1/themes/theme\_folder/skins/skin\_folder\_name/]]></parameter>
    						</skin>
    						<theme action="update" uniquename="theme\_unique\_name">
    							<allowed-skin skin="skin_unique_name" update="set"/>
    						</theme>
    					</portal>
    				</request>
    ```

2.  Import the XMLAccess skin definition by using the command line or the Import XML portlet.



