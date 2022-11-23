# Unsupported features


!!!important
    Unsupported features and themes must be removed prior to migration.

## Recently unsupported features
Newly unsupported features and themes must be removed prior to migration.

|Category|Unsupported|Recommended Action|Effective Date|
|--------|-----------|------------------|--------------|
|Configuring Web Content Manager|Ephox EditLive! Java based Rich Text Editor|The Ephox EditLive! Java based Rich Text Editor is no longer supported. You can also use the CK Editor as an alternative to Ephox EditLive!|December 2020|

## Previously unsupported features
### Unsupported in HCL Digital Experience 8.5 and later

|Category|Unsupported|Recommended Action|
|--------|-----------|------------------|
|Site set up|Web Clipper|The Web Clipper portlet is no longer supported. Use the Web Application Bridge solution instead.|
|Developing|HCL themes from a previous version|The themes  **Portal**, **PortalWeb2** and **Tab Menu - Page Builder** are no longer supported.<br> They no longer work and are no longer supported. You must manually update these themes. Merge their function into a clean copy of a Portal 8.5 theme on the target server. The PageBuilder2 and Portal 7002 themes are deprecated in 8.5.<br><br> Documentation resource: [Enabling a new functionality in a migrated portal](../deployment/manage/migrate/next_steps/enable_func_migrated_portal/index.md)|
|Administering|Composite applications|Composite applications are no longer supported. If you have a composite application in your system and you are migrating to HCL Digital Experience 8.5, the migration fails. Ensure that all composite applications are deleted before you start the migration. When you delete a composite application, you must also run the resource cleaner, otherwise pages can still exist in the database.<br><br>Documentation resource: [Enabling a new functionality in a migrated portal](../deployment/manage/migrate/next_steps/enable_func_migrated_portal/index.md)|
|Developing|CAI/TAI portlets|When you are migrating from one version to another, your script can contain references to the CAI/TAI portlets. These portlets are no longer available and any reference to these portlets cause your script to fail. For more information, see [Virtual Portal tasks](../deployment/manage/migrate/next_steps/post_mig_activities/portal_task/vp_post_mig_task/index.md).|
|Developing|IBM Portlet API|The IBM Portlet API is no longer supported. Go to [Converting HCL Digital Experience portlets to the Java Standard API](../extend_dx/portlets_development/portlet_api/converting_dx_portlets_to_java_standard_api/index.md) to learn how to convert your portlets that are based on IBM Portlet API to the Standard Portlet API. The JSR 168 standard API is still available and supported. |
|Developing|Struts Portlet Framework|The historical struts-based portlet frameworks are deprecated. Both the struts-based portlet framework based on the IBM Portlet API and the struts-based portlet framework based on the JSR 168 standard API are no longer available and are removed from support. Move all struts-based portlets that are based on this HCL framework to the [Apache Struts](https://struts.apache.org/){:target="_blank"} Portlet Framework. [Portlet Plugin](https://struts.apache.org/docs/portlet-plugin.html){:target="_blank"}|
|Integrating|Brightcove player|The Brightcove player is no longer supported. |
|Administering|SOAP support for remote search configuration |SOAP support for remote search is no longer supported. EJB is still supported. |
|Administering|Login screen|Login screens are no longer supported. If you need to customize your login process, you must use custom authentication filters instead of login screens. |
|Developing|Deprecated Business portlets|The following portlets **Reminder**, **Document Viewer**, **Webpage Portlet**, **My Query Reports** and **Microsoft Exchange 2003** were removed and are no longer supported.|
|Integrating|Deprecated Sametime portlets|The Sametime portlets **Who Is Here** (SametimeWhoIsHere.war)   **Sametime Contact List** (SametimeContactList.war) were removed and are no longer supported.|
|Developing|Deprecated Themes and Tags|The `<portal-core:cacheProxyUrl/>` tag was removed and is no longer supported: -   All Legacy themes|


### Unsupported in HCL Digital Experience 8.0 and later
|Unsupported|Recommended Action|
|-----------|------------------|
|Policy Editor portlet for Mail |CPP portlet is no longer shipped in WebSphere Portal Version 8.0  |
|Composite applications |Starting with Version 8.0, WebSphere Portal no longer supports Composite applications. You can still use the portal XML configuration interface to do this type of work.|
|Computer Associates eTrust SiteMinder|eTrust SiteMinder installations are not supported in this release. |
|Domino Extended Product Portlet wizard  |The configuration wizard to configure the Domino and Extended Product portlet was supported with the InstallShield. Because the IBM Installation Manager is now supported, the Domino and Extended Product portlet configuration wizard is no longer supported.|
|Integration with the IBM Mashup Center |WebSphere Portal Version 8.0 provides direct support for widget integration to portal pages, which enables development of mashup style applications. WebSphere Portal Version 8.0 does not support promotion of assets from the IBM Mashup Center catalog directly into the portal. For information about how to add iWidgets to your portal see Managing iWidgets in your portal. For information about how to construct mashup page applications by using WebSphere Portal Version 8.0 features see the section about Managed pages of the WebSphere Portal and Web Content Manager Version 8.0 product documentation.|
|Site management  |Earlier versions of WebSphere Portal provided the Resource Manager portlet for performing site management. With Version 8.0 of WebSphere Portal and Web Content Manager, this site management functionality has been replaced by the new functionality for managing pages. For more information refer to Managed pages.  |
|Session persistence on Struts portlets |Struts portlets do not support session replication in WebSphere Portal Version 8.0.|
|IBM Portlet API web content viewer portlet |The web content viewer portlet based on the IBM Portlet API has been deprecated and is no longer supported. It was replaced with the JSR 286 web content viewer portlet.  |
|IBM Portlet API remote web content viewer portlet |The remote web content viewer portlet based on the IBM Portlet API has been deprecated and is no longer supported. To display web content on a portal where Web Content Manager is not installed, use WSRP and the JSR 286 web content viewer.|
|IBM API Rendering Portlet  |The IBM API Rendering Portlet has been deprecated and is no longer supported.|
|Private wire APIs  |The WireModel artifacts referring to private wires have been deprecated and is no longer supported.|
