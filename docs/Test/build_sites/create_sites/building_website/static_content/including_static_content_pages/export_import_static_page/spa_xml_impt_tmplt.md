# Importing a static page from an installed template

You can import a static content page from an installed layout template by using the XML configuration interface.

You can adapt the following example and use it to import a static page. It assumes that the portlet is already installed. Therefore it uses only the `locate` action for the Web module, and not the `update` action. For more information about layout templates refer to the topic about Theme layout templates.

Sample file CreatePageFromTemplate.xml

```
<request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" type="update"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd" create-oids="true">
    <portal action="locate">
        <web-app action="locate" uid="ilwwcm-localrenderingportlet-jsr.war.webmod">
           <portlet-app action="locate" uid="ilwwcm-localrenderingportlet-jsr.war">
                <portlet action="locate" objectid="theExamplePortlet" name="Web Content Viewer (JSR 286)">
                </portlet>
            </portlet-app>
        </web-app>

        <content-node action="locate" objectid="parentPage" uniquename="ibm.portal.Home"/>
        <content-node action="update" active="true" allportletsallowed="true" content-parentref="parentPage" 
                      create-type="explicit" domain="rel" ordinal="last" type="staticpage" 
                      uniquename="ibm.portal.ssa.SamplePage.2">
            <localedata locale="en" prefix="page.sample">
	               <title>Sample Static Page 1</title>
            </localedata>
	     
	    <pagecontents markup="html" display-option="inline"/>
	     
            <parameter name="com.ibm.portal.bookmarkable" type="string" 
                       update="set"><![CDATA[Yes]]&gt;</parameter>
            <parameter name="com.ibm.portal.friendly.name" type="string" 
                       update="set"><![CDATA[staticpage2]]&gt;</parameter>
            <parameter name="com.ibm.portal.layout.template.ref" type="string" 
                       update="set"><![CDATA[dav:fs-type1/layout-templates/2ColumnEqual]]&gt;</parameter>
	    <access-control externalized="false" owner="uid=wpsadmin,o=defaultwimfilebasedrealm" private="false"/>
            <component action="update" active="true" domain="rel" ordinal="100" orientation="V" type="container">
                <component action="update" active="true" domain="rel" ordinal="100" orientation="V" type="container"/>
                <component action="update" active="true" domain="rel" ordinal="100" orientation="H" type="container">
                    <parameter name="com.ibm.portal.layoutnode.localname" type="string" 
                               update="set"><![CDATA[portletContainer1]]&gt;</parameter>
                    <component action="update" active="true" domain="rel" ordinal="100" type="control">
                        <parameter name="com.ibm.portal.layoutnode.localname" type="string" 
                                   update="set"><![CDATA[portletWindow1]]&gt;</parameter>
                        <portletinstance action="update" domain="rel" portletref="theExamplePortlet" />
                    </component>
                </component>
            </component>
        </content-node>
    </portal>
</request>
```


???+ info "Related information"
    -   [Understanding the Portal 8.5 modularized theme](../../../../../themes_skins/portal85_modularized_theme/index.md)

