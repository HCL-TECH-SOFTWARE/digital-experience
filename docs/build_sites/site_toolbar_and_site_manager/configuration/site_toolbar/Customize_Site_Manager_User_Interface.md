# Customizing site manager User Interface

The site manager user interface can be customized by adding additional functionality.

## Introduction

As described in [Preparing the site toolbar](../dev-theme/themeopt_themeshelf.md), you can customize the Site Manager user interface to have additional functionality. A common request has been, to add an enhanced delete function that can delete the page and all referenced content.

## Add components dialog functionality

To add component dialog functionality, create two pages \(Example: Customize Site Manager and Customize Site Manager with WCM\) in the **Manage Pages** section Content Root\>Hidden Pages\>Toolbar Content Root\>Add.

![](../images/Customize%20site%20manager_manage%20pages.png)

Make sure that the pages are according to the meta data for the toolbar to display.

Sample xmlaccess of the meta data:

```
 
           <parameter name="ibm.portal.toolbar.cssClasses" type="string" update="set"><![CDATA[wpToolbarPageGeneral]]></parameter>
            <parameter name="ibm.portal.toolbar.isToolbarPage" type="string" update="set"><![CDATA[true]]></parameter>
            <parameter name="ibm.portal.toolbar.maxHeight" type="string" update="set"><![CDATA[100%]]></parameter>
            <parameter name="ibm.portal.toolbar.minHeight" type="string" update="set"><![CDATA[250px]]></parameter>
            <parameter name="ibm.portal.toolbar.reloadOnResize" type="string" update="set"><![CDATA[true]]></parameter>
            <parameter name="ibm.portal.toolbar.width" type="string" update="set"><![CDATA[100%]]></parameter>
```

The pages can have any theme assigned to them, like the Portal 8.5 theme.

A full xmlaccess export of a sample page with WCM is as follows:

```

<?xml version="1.0" encoding="UTF-8"?>
<request build="20220228-055523" type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
    <portal action="locate">
        <skin action="locate" domain="rel" objectid="ZK_00000000000000A0BR2B300670" uniquename="ibm.portal.85Hidden"/>
        <skin action="locate" domain="rel" objectid="ZK_00000000000000A0BR2B300672" uniquename="ibm.portal.85Standard"/>
        <skin action="locate" domain="rel" objectid="ZK_00000000000000A0BR2B300674" uniquename="ibm.portal.85HiddenPlus"/>
        <skin action="locate" domain="rel" objectid="ZK_00000000000000A0BR2B300676" uniquename="ibm.portal.85NoSkin"/>
        <theme action="locate" domain="rel" objectid="ZJ_00000000000000A0BR2B300QC6" uniquename="ibm.portal.85Theme"/>
        <theme action="locate" domain="rel" objectid="ZJ_00000000000000A0BR2B300MA1" uniquename="ibm.portal.85ToolbarTheme"/>
        <web-app action="locate" domain="rel" objectid="Z1_00000000000000A0BR2B300EO7" uid="ilwwcm-localrenderingportlet-jsr.war.webmod">
            <servlet action="locate" domain="rel" name="Web Content Viewer (JSR 286)" objectid="ZV_00000000000000A0BR2B300EO3"/>
            <portlet-app action="locate" domain="rel" name="ilwwcm-localrenderingportlet-jsr.war" objectid="Z2_00000000000000A0BR2B300E40" uid="ilwwcm-localrenderingportlet-jsr.war">
                <portlet action="locate" domain="rel" name="Web Content Viewer (JSR 286)" objectid="Z3_00000000000000A0BR2B300E87" uniquename="ibm.portal.Web.Content.Viewer.Jsr286"/>
            </portlet-app>
        </web-app>
        <content-node action="locate" domain="rel" objectid="Z6_000000000000000000000000A0" uniquename="wps.content.root"/>
        <content-node action="locate" domain="rel" objectid="Z6_00000000000000A0BR2B300G80" uniquename="ibm.portal.HiddenPages"/>
        <content-node action="locate" domain="rel" objectid="Z6_00000000000000A0BR2B300MQ6" uniquename="ibm.portal.toolbar.ContentRoot"/>
        <content-node action="locate" domain="rel" objectid="Z6_00000000000000A0BR2B300MQ1" uniquename="ibm.portal.toolbar.Create"/>
        <content-node action="update" active="true" allportletsallowed="true" content-parentref="Z6_00000000000000A0BR2B300MQ1" create-type="explicit" domain="rel" objectid="Z6_MAH8HJ802HLL80QVLPD88T00E5" ordinal="65836" themeref="ZJ_00000000000000A0BR2B300QC6" type="staticpage" uniquename="hcl.sample.toolbar.testitwcm">
            <localedata locale="en">
                <title>Customize Site Manager with WCM</title>
                <description>View and edit the basic properties of your portal page</description>
            </localedata>
            <pagecontents display-option="inline" markup="html">
                <content>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</content>
            </pagecontents>
            <parameter name="com.ibm.portal.IgnoreAccessControlInCaches" type="string" update="set"><![CDATA[false]]></parameter>
            <parameter name="com.ibm.portal.bookmarkable" type="string" update="set"><![CDATA[No]]></parameter>
            <parameter name="com.ibm.portal.feed.remote-cache-expiry" type="string" update="set"><![CDATA[86400]]></parameter>
            <parameter name="com.ibm.portal.friendly.name" type="string" update="set"><![CDATA[sampleoverviewtabwcm]]></parameter>
            <parameter name="com.ibm.portal.layout.template.expiration" type="string" update="set"><![CDATA[1647832373402]]></parameter>
            <parameter name="com.ibm.portal.layout.template.file.name.html" type="string" update="set"><![CDATA[layout.html]]></parameter>
            <parameter name="com.ibm.portal.layout.template.lastmodified" type="string" update="set"><![CDATA[1647969883583]]></parameter>
            <parameter name="com.ibm.portal.layout.template.markup" type="string" update="set"><![CDATA[html]]></parameter>
            <parameter name="com.ibm.portal.layout.template.ref" type="string" update="set"><![CDATA[layout-templates/1Column/]]></parameter>
            <parameter name="com.ibm.portal.remote-cache-expiry" type="string" update="set"><![CDATA[2622555]]></parameter>
            <parameter name="com.ibm.portal.remote-cache-scope" type="string" update="set"><![CDATA[NON-SHARED]]></parameter>
            <parameter name="com.ibm.portal.static.page.file.name.html" type="string" update="set"><![CDATA[layout.html]]></parameter>
            <parameter name="ibm.portal.toolbar.cssClasses" type="string" update="set"><![CDATA[wpToolbarPageGeneral]]></parameter>
            <parameter name="ibm.portal.toolbar.isToolbarPage" type="string" update="set"><![CDATA[true]]></parameter>
            <parameter name="ibm.portal.toolbar.maxHeight" type="string" update="set"><![CDATA[100%]]></parameter>
            <parameter name="ibm.portal.toolbar.minHeight" type="string" update="set"><![CDATA[250px]]></parameter>
            <parameter name="ibm.portal.toolbar.reloadOnResize" type="string" update="set"><![CDATA[true]]></parameter>
            <parameter name="ibm.portal.toolbar.width" type="string" update="set"><![CDATA[100%]]></parameter>
            <parameter name="param.sharing.scope" type="string" update="set"><![CDATA[toolbar]]></parameter>
            <parameter name="param.sharing.scope.{http://ibm.connections.com/portlet}" type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/datatype/content/resource-collections}" type="string" update="set"><![CDATA[toolbar]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/datatype/content}" type="string" update="set"><![CDATA[toolbar]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}path-info" type="string" update="set"><![CDATA[toolbar]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal}" type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/v8.0/portal-contextual-portal}" type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
            <parameter name="resourceaggregation.profile" type="string" update="set"><![CDATA[profiles/profile_deferred.json]]></parameter>
            <access-control externalized="false" owner="undefined" private="false"/>
            <content-mapping-info has-system-mapping="false"/>
            <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_MAH8HJ802HLL80QVLPD88T00U1" ordinal="100" orientation="H" skinref="undefined" type="container" width="undefined">
                <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_MAH8HJ802HLL80QVLPD88T00U5" ordinal="100" orientation="V" skinref="undefined" type="container" width="30%"/>
                <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_MAH8HJ802HLL80QVLPD88T00U3" ordinal="65636" orientation="V" skinref="undefined" type="container" width="undefined">
                    <parameter name="com.ibm.portal.layoutnode.localname" type="string" update="set"><![CDATA[ibmHiddenWidgets]]></parameter>
                    <parameter name="css-classes" type="string" update="set"><![CDATA[ibmDndRow wpthemeRow hiddenWidgetsContainer wpthemeCol12of12 wpthemeFull]]></parameter>
                </component>
                <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_MAH8HJ802HLL80QVLPD88T00U7" ordinal="131172" orientation="V" skinref="undefined" type="container" width="undefined">
                    <parameter name="com.ibm.portal.layoutnode.localname" type="string" update="set"><![CDATA[ibmMainContainer]]></parameter>
                    <parameter name="css-classes" type="string" update="set"><![CDATA[wpthemeLeft wpthemeCol ibmDndColumn wpthemeCol12of12 wpthemeFull wpthemePrimary]]></parameter>
                    <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_MAH8HJ802HLL80QVLPD88T0010" ordinal="65536" skinref="undefined" type="control" width="undefined">
                        <portletinstance action="update" domain="rel" objectid="Z5_MAH8HJ802HLL80QVLPD88T0014" portletref="Z3_00000000000000A0BR2B300E87">
                            <preferences name="SECTION_STATES" update="set">
                                <value><![CDATA[true]]></value>
                                <value><![CDATA[true]]></value>
                                <value><![CDATA[true]]></value>
                                <value><![CDATA[false]]></value>
                            </preferences>
                            <preferences name="WCM_CONTENT_CONTEXT_IDR" update="set">
                                <value><![CDATA[1b4c5d5f-5d01-4dae-ab5f-cbfca8ccd7db]]></value>
                            </preferences>
                            <preferences name="WCM_CONTENT_CONTEXT_TYPE" update="set">
                                <value><![CDATA[content]]></value>
                            </preferences>
                        </portletinstance>
                    </component>
                </component>
            </component>
        </content-node>
    </portal>
    <status element="all" result="ok"/>
</request>

```

More information on parameters, refer [Configuring the behavior of toolbar tabs](epc_adding_custom_source.sm.md).

Now you can see that a tab "Customize Site Manager" and "Customize Site Manager with WCM" are added.

![](../images/Customize%20site%20manager.png "Customize Site Manager")

![](../images/Customize%20site%20manager%20with%20WCM.png "Customize Site Manager with WCM")

## Adding functionality to the main Toolbar side dialog

Create two pages in the **Manage Pages** section Content Root\>Hidden Pages\>Toolbar Content Root \(see Toolbar Right and Left\).

![](../images/Customize%20site%20manager_manage%20side%20dialog.png)

Make sure that the pages are according to the meta data for the toolbar to display.

Sample xmlaccess of the meta data:

```
 
           <parameter name="ibm.portal.toolbar.cssClasses" type="string" update="set"><![CDATA[wpToolbarSiteManager]]></parameter>
            <parameter name="ibm.portal.toolbar.isToolbarPage" type="string" update="set"><![CDATA[true]]></parameter>
            <parameter name="ibm.portal.toolbar.reloadOnResize" type="string" update="set"><![CDATA[true]]></parameter>
            <parameter name="ibm.portal.toolbar.target" type="string" update="set"><![CDATA[secondary]]></parameter>

```

The parameter setting `ibm.portal.toolbar.target` controls, if the page is rendered on the right \(secondary\) or main left dialog \(primary\).

For the pages, to render best the Toolbar 8.5 theme provides the best experience.

A full xmlaccess export of a sample page with WCM is as follows:

```
<?xml version="1.0" encoding="UTF-8"?>
<request build="20220228-055523" type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
    <portal action="locate">
        <skin action="locate" domain="rel" objectid="ZK_00000000000000A0BR2B300670" uniquename="ibm.portal.85Hidden"/>
        <skin action="locate" domain="rel" objectid="ZK_00000000000000A0BR2B300672" uniquename="ibm.portal.85Standard"/>
        <skin action="locate" domain="rel" objectid="ZK_00000000000000A0BR2B300674" uniquename="ibm.portal.85HiddenPlus"/>
        <skin action="locate" domain="rel" objectid="ZK_00000000000000A0BR2B300676" uniquename="ibm.portal.85NoSkin"/>
        <theme action="locate" domain="rel" objectid="ZJ_00000000000000A0BR2B300MA1" uniquename="ibm.portal.85ToolbarTheme"/>
        <theme action="locate" domain="rel" objectid="ZJ_00000000000000A0BR2B300QC6" uniquename="ibm.portal.85Theme"/>
        <web-app action="locate" domain="rel" objectid="Z1_00000000000000A0BR2B300EO7" uid="ilwwcm-localrenderingportlet-jsr.war.webmod">
            <servlet action="locate" domain="rel" name="Web Content Viewer (JSR 286)" objectid="ZV_00000000000000A0BR2B300EO3"/>
            <portlet-app action="locate" domain="rel" name="ilwwcm-localrenderingportlet-jsr.war" objectid="Z2_00000000000000A0BR2B300E40" uid="ilwwcm-localrenderingportlet-jsr.war">
                <portlet action="locate" domain="rel" name="Web Content Viewer (JSR 286)" objectid="Z3_00000000000000A0BR2B300E87" uniquename="ibm.portal.Web.Content.Viewer.Jsr286"/>
            </portlet-app>
        </web-app>
        <content-node action="locate" domain="rel" objectid="Z6_000000000000000000000000A0" uniquename="wps.content.root"/>
        <content-node action="locate" domain="rel" objectid="Z6_00000000000000A0BR2B300G80" uniquename="ibm.portal.HiddenPages"/>
        <content-node action="locate" domain="rel" objectid="Z6_00000000000000A0BR2B300MQ6" uniquename="ibm.portal.toolbar.ContentRoot"/>
        <content-node action="update" active="true" allportletsallowed="true" content-parentref="Z6_00000000000000A0BR2B300MQ6" create-type="explicit" domain="rel" objectid="Z6_MAH8HJ802HMF00QVDMNEQQ30O6" ordinal="131372" themeref="undefined" type="staticpage" uniquename="hcl.sample.toolbar.toolbarright">
            <localedata locale="en">
                <title>ToolbarRight</title>
            </localedata>
            <pagecontents display-option="inline" markup="html">
                <content>UEsDBBQACAgIADBNXFQAAAAAAAAAAAAAAAALAAAAbGF5b3V0Lmh0bWyNkEFPwzAMhc/wK0zuEeqOqNtl0wQSSAgJcU4bl0ZKnClJV/Xf49KlCxwQp1h+9vP7UmtzhtaqGLeiN1ojfRj9iSkezFnsbm/qOylhXFpgCFJvIrSekjKEAVRAWNYWEeH9CZoJNHZqsAmknD2KG613J09ISV5Nftzdr23TuAPpNz/CeGJnh3tvq43vqk1uHAdrc81zAkg53ApefCwtxa6+5wg5SUyT5anWogoPjU/9qudnZv4GtWryQ4JeReDQ4DhYAT/DlWyXJBXnFP/AvlLl8jUYp8J0IWdhcJS1Z+zSnx9R0L/wgfUff9F9AVBLBwiMCOUM7AAAAPEBAABQSwECFAAUAAgICAAwTVxUjAjlDOwAAADxAQAACwAAAAAAAAAAAAAAAAAAAAAAbGF5b3V0Lmh0bWxQSwUGAAAAAAEAAQA5AAAAJQEAAAAA</content>
            </pagecontents>
            <parameter name="com.ibm.portal.IgnoreAccessControlInCaches" type="string" update="set"><![CDATA[false]]></parameter>
            <parameter name="com.ibm.portal.bookmarkable" type="string" update="set"><![CDATA[Yes]]></parameter>
            <parameter name="com.ibm.portal.feed.remote-cache-expiry" type="string" update="set"><![CDATA[86400]]></parameter>
            <parameter name="com.ibm.portal.friendly.name" type="string" update="set"><![CDATA[toolbarright]]></parameter>
            <parameter name="com.ibm.portal.layout.template.expiration" type="string" update="set"><![CDATA[1648068888189]]></parameter>
            <parameter name="com.ibm.portal.layout.template.file.name.html" type="string" update="set"><![CDATA[layout.html]]></parameter>
            <parameter name="com.ibm.portal.layout.template.lastmodified" type="string" update="set"><![CDATA[1648066780447]]></parameter>
            <parameter name="com.ibm.portal.layout.template.markup" type="string" update="set"><![CDATA[html]]></parameter>
            <parameter name="com.ibm.portal.layout.template.ref" type="string" update="set"><![CDATA[dav:fs-type1/themes/Toolbar8.5/layout-templates/1Column/]]></parameter>
            <parameter name="com.ibm.portal.remote-cache-expiry" type="string" update="set"><![CDATA[86400]]></parameter>
            <parameter name="com.ibm.portal.remote-cache-scope" type="string" update="set"><![CDATA[NON-SHARED]]></parameter>
            <parameter name="com.ibm.portal.static.page.file.name.html" type="string" update="set"><![CDATA[layout.html]]></parameter>
            <parameter name="ibm.portal.toolbar.cssClasses" type="string" update="set"><![CDATA[wpToolbarSiteManager]]></parameter>
            <parameter name="ibm.portal.toolbar.isToolbarPage" type="string" update="set"><![CDATA[true]]></parameter>
            <parameter name="ibm.portal.toolbar.reloadOnResize" type="string" update="set"><![CDATA[true]]></parameter>
            <parameter name="ibm.portal.toolbar.target" type="string" update="set"><![CDATA[secondary]]></parameter>
            <parameter name="param.sharing.scope.{http://ibm.connections.com/portlet}" type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/datatype/content/resource-collections}" type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/datatype/content}" type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}path-info" type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal}" type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
            <parameter name="param.sharing.scope.{http://www.ibm.com/xmlns/prod/websphere/portal/v8.0/portal-contextual-portal}" type="string" update="set"><![CDATA[ibm.portal.sharing.scope.page]]></parameter>
            <access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false"/>
            <content-mapping-info>
                <content-mapping content-id="gxsywmg-onrqetymskhkfuwptthunessennh" default="false" system="true"/>
            </content-mapping-info>
            <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_RD8HRNBSCON5E57CBD9A81B3C6" ordinal="65536" orientation="V" skinref="undefined" type="container" width="undefined">
                <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_89JE4NK9KFH90L2KUN2S365R43" ordinal="65536" orientation="V" skinref="undefined" type="container" width="undefined"/>
                <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_B628PQ0R7RE12IRRB55UH8KTH1" ordinal="131072" orientation="H" skinref="undefined" type="container" width="undefined">
                    <parameter name="com.ibm.portal.layoutnode.localname" type="string" update="set"><![CDATA[ibmHiddenWidgets]]></parameter>
                    <parameter name="css-classes" type="string" update="set"><![CDATA[ibmDndRow wpthemeRow hiddenWidgetsContainer wpthemeCol12of12 wpthemeFull]]></parameter>
                </component>
                <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_V8BI97VOC5RNOG7EJJJRGVCQ52" ordinal="196608" orientation="H" skinref="undefined" type="container" width="undefined">
                    <parameter name="com.ibm.portal.layoutnode.localname" type="string" update="set"><![CDATA[ibmMainContainer]]></parameter>
                    <parameter name="css-classes" type="string" update="set"><![CDATA[wpthemeLeft wpthemeCol ibmDndColumn wpthemeCol12of12 wpthemeFull wpthemePrimary]]></parameter>
                    <component action="update" active="true" deletable="undefined" domain="rel" modifiable="undefined" objectid="Z7_MAH8HJ802HQTB0QVTH2RN80080" ordinal="65536" skinref="undefined" type="control" width="undefined">
                        <portletinstance action="update" domain="rel" objectid="Z5_MAH8HJ802HQTB0QVTH2RN80084" portletref="Z3_00000000000000A0BR2B300E87">
                            <preferences name="SECTION_STATES" update="set">
                                <value><![CDATA[true]]></value>
                                <value><![CDATA[true]]></value>
                                <value><![CDATA[true]]></value>
                                <value><![CDATA[false]]></value>
                            </preferences>
                            <preferences name="WCM_CONTENT_CONTEXT_IDR" update="set">
                                <value><![CDATA[1b4c5d5f-5d01-4dae-ab5f-cbfca8ccd7db]]></value>
                            </preferences>
                            <preferences name="WCM_CONTENT_CONTEXT_TYPE" update="set">
                                <value><![CDATA[content]]></value>
                            </preferences>
                        </portletinstance>
                    </component>
                </component>
            </component>
        </content-node>
    </portal>
    <status element="all" result="ok"/>
</request>
```

When you click the first functionality, the dialog on the right shows a page with a portlet \(sample of a WCM portlet\). The WCM portlet uses the shared render parameter to find the currently selected page. Now one could trigger custom logic in the page, e.g. modify settings of the page.

![](../images/Customize%20site%20manager_Authoring.png)

The 2nd button uses the same logic to show a page horizontally.

![](../images/Customize%20site%20manager_content%20manager.png)

More information on parameters, refer [Configuring the behavior of toolbar tabs](epc_adding_custom_source.sm.md).

## **Adding functionality to the page dialog**

**Note:** This functionality is added with CF203.

To add your own actions to the menu follow the steps:

1.  Generate a new label with the following unique name: hcl.portal.toolbarbuttons

2.  Create as many pages as you like - for each page a new menu item is added. You can choose any theme for the pages as needed.


For example:

1.  Create two pages \(ToolbarWCM and Hello World\) in the **Manage Pages** section Content Root\>Hidden Pages\>Toolbar Content Root\>ToolbarButtons.

    ![](../images/Customize%20site%20manager_manage%20pages_203.png)

2.  The new functionality **ToolbarWCM** and **Hello World** are added to the custom menu items of the page dialog.

![](../images/Customize%20site%20manager_Authoring_203.png "ToolbarWCM")

    When you click on any new button, the respective page is displayed.

    ![](../images/Customize%20site%20manager_Authoring_wcm_203.png)



