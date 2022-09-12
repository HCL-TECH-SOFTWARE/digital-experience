# Importing a static page in binary format

You can import a static content page in binary encoded content format by using the XML configuration interface.

You can adapt the following example and use it to import a static page. This example shows the following additional possibilities:

-   It assumes that the portlet is already installed. Therefore it uses only the `locate` action for the Web module, and not the `update` action.
-   It shows how you can specify the content of static page in binary format. To obtain the binary format content, export the page by using the XML configuration interface.
-   You can export the result to generate a template for your XML scripts.

**Sample file CreateStaticPage.xml**

```
<?xml version="1.0" encoding="UTF-8"?>
<request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" update="true"
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
               <title>Sample Page 1</title>
            </localedata>

            <pagecontents markup="html" display-option="inline">
                <content>UEsDBBQACAAIALKbTDcAAAAAAAAAAAAAAAALAAAAaW5kZXgxLmh0bWxtUE1rwzAMvQf6H0TuTeh1
                         ZL7stFsghZ5VW2sEjmxir1n//YTdbDAGOoj3IelpmAmdOTRD5uzJTLhETzBlzGxhxBsNfWVU0u/a
                         a3APc9AmmvPMCbQQUvVE9QB9lTkdFLpAMyYIQhDDquPyu6heLMGFvA0LwVjxDurcHX7Khz6WhY7v
                         YD2m9No+maMNkpGF1hYEF/oh3nb81Jr/nRuLC9sf26WAp1bzPPwvfHT0wcKZg7xsMXWx2y88B81w
                         neJMa02BvizsdWO5uTZNiTV6wkRw58QZPvVtNz2xhFNdfWvzDVBLBwjDeEQR4AAAAJMBAABQSwEC
                         FAAUAAgACACym0w3w3hEEeAAAACTAQAACwAAAAAAAAAAAAAAAAAAAAAAaW5kZXgxLmh0bWxQSwUG
                         AAAAAAEAAQA5AAAAGQEAAAAA
                </content>
            </pagecontents>

            <parameter name="com.ibm.portal.bookmarkable" type="string" 
                       update="set"><![CDATA[Yes]]&gt;</parameter>
            <parameter name="com.ibm.portal.friendly.name" type="string" 
                       update="set"><![CDATA[staticpage2]]&gt;</parameter>
            <parameter name="com.ibm.portal.static.page.file.name.html" type="string" 
                       update="set"><![CDATA[index1.html]]&gt;</parameter>
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
