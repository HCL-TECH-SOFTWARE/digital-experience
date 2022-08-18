# Hiding portlets within Applications palette categories

If a portlet has been added to a category by adding it to a page that has been placed under a category label, remove the page it has been added to. Alternatively, if you do not want to delete the page, you can mark it as hidden.

The following XMLAccess example marks a page as hidden.

```
<?xml version="1.0" encoding="UTF-8"?>
<request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" type="update" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
    <portal action="locate">
    
        <content-node action="locate" domain="rel" uniquename="wps.content.root"/>   
        <content-node action="locate" domain="rel" uniquename="ibm.portal.HiddenPages"/>
        <content-node action="locate" domain="rel" uniquename="com.ibm.portal.toolbar.applications.category.label.root"/>
                    
        <content-node action="update" active="true" content-parentref="com.ibm.portal.toolbar.applications.category.label.root" domain="rel" ordinal="700" 
type="label" uniquename="com.ibm.portal.toolbar.applications.category.label.administration">
            <supported-markup markup="html" update="set"/>
            <localedata locale="en">
                <title>Administration</title>
            </localedata>
            <parameter name="com.ibm.portal.Hidden" type="string" update="set"><![CDATA[true]]&gt;</parameter>
            <parameter name="com.ibm.portal.IgnoreAccessControlInCaches" type="string" update="set"><![CDATA[false]]&gt;</parameter>
            <parameter name="com.ibm.portal.remote-cache-expiry" type="string" update="set"><![CDATA[86400]]&gt;</parameter>
            <parameter name="com.ibm.portal.remote-cache-scope" type="string" update="set"><![CDATA[NON-SHARED]]&gt;</parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/datatype/content/resource-collections}" type="string" update="set">
<![CDATA[ibm.portal.sharing.scope.page]]&gt;</parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/datatype/content}" type="string" update="set"><![CDATA[ibm.portal.
sharing.scope.page]]&gt;</parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}path-info" type="string" update="set">
<![CDATA[ibm.portal.sharing.scope.page]]&gt;</parameter>
            <access-control externalized="false" owner="undefined" private="false">
                <role actionset="User" update="set">
                    <mapping subjectid="all authenticated portal users" subjecttype="user_group" update="set"/>
                </role>
            </access-control>  
        </content-node>
    </portal>
</request>
```

If a portlet becomes part of a category because the category label points to a feed returning portlet definitions \(which contains the portlet\), you can force the portlet to not appear by marking the portlet hidden. You can only mark the portlet hidden as long as the feed exposes portlet preferences, like the PortletDefinitionList feed does.

The following example marks a portlet as hidden.

```
<?xml version="1.0" encoding="UTF-8"?>
<request require-defined-oids="true" type="update" version="8.5.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:noNamespaceSchemaLocation=
"PortalConfig_8.5.0.xsd">
    <portal action="locate">
        <web-app action="update" active="true" objectid="Z1_00000000000000AGU4RF6L0004" uid="sample.webmod">
            <url>file:///sample.war</url>
            <servlet action="update" name="Sample" objectid="ZV_00000000000000AGU4RF6L0002"/>
            <servlet action="update" name="Sample" objectid="ZV_00000000000000AGU4RF6L0000"/>
            <portlet-app action="update" name="sample" objectid="Z2_00000000000000AGU4RF6L0006" uid="sample">
                <access-control externalized="false" owner="undefined" private="false">
                    <role actionset="User" update="set">
                        <mapping subjectid="all authenticated portal users" subjecttype="user_group" update="set"/>
                    </role>
                </access-control>
                <portlet action="update" name="Sample" objectid="Z3_00000000000000AGU4RF6L0001" 
servletref="ZV_00000000000000AGU4RF6L0000" uniquename="wps.p.Sample">
                 <preferences name="com.ibm.portal.Hidden" update="set">
                     <value><![CDATA[true]]&gt;</value>
                 </preferences>
                </portlet>
            </portlet-app>
        </web-app>
    </portal>
</request>
```

**Parent topic:**[Customizing the Applications palette](../admin-system/epc_app_categories.md)

