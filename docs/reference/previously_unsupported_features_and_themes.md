# Previously unsupported features and themes for HCL Digital Experience 9.5

Unsupported features and themes must be removed prior to migration. 

|Category|Unsupported|Recommended Action|
|--------|-----------|------------------|
|Site set up|Web Clipper|The Web Clipper portlet is no longer supported. Use the Web Application Bridge solution instead.|
|Developing|HCL themes from a previous version|The following themes are no longer supported:-   Portal
-   PortalWeb2
-   Tab Menu - Page Builder

They no longer work and are no longer supported. You must manually update these themes. Merge their function into a clean copy of a Portal 8.5 theme on the target server. The PageBuilder2 and Portal 7002 themes are deprecated in 8.5.-   Documentation resource: [Enabling a new functionality in a migrated portal](../migrate/mig_t_enable_new.md)

|
|Administering|Composite applications|Composite applications are no longer supported. If you have a composite application in your system and you are migrating to HCL Digital Experience 8.5, the migration fails. Ensure that all composite applications are deleted before you start the migration. When you delete a composite application, you must also run the resource cleaner, otherwise pages can still exist in the database.-   Documentation resource: [Enabling new functionality in a migrated portal](../migrate/mig_t_enable_new.md)

|
|Developing|CAI/TAI portlets|When you are migrating from one version to another, your script can contain references to the CAI/TAI portlets. These portlets are no longer available and any reference to these portlets cause your script to fail. For more information, see [Virtual Portal tasks](../migrate/virt_portal_post_mig.md).|
|Developing|IBM Portlet API|The IBM Portlet API is no longer supported. Go to [Converting HCL Digital Experience portlets \(AIX IBM i Linux Solaris Windows\)](../dev-portlet/jsrmig.md) to learn how to convert your portlets that are based on IBM Portlet API to the Standard Portlet API. The JSR 168 standard API is still available and supported. |
|Developing|Struts Portlet Framework|The historical struts-based portlet frameworks are deprecated. Both the struts-based portlet framework based on the IBM Portlet API and the struts-based portlet framework based on the JSR 168 standard API are no longer available and are removed from support. Move all struts-based portlets that are based on this HCL framework to the Apache Struts Portlet Framework.  -   Documentation resource: [Apache Struts](https://struts.apache.org/)
-   Documentation resource: [Portlet Plugin](https://struts.apache.org/docs/portlet-plugin.md)

|
|Integrating|Brightcove player|The Brightcove player is no longer supported. |
|Administering|SOAP support for remote search configuration |SOAP support for remote search is no longer supported. EJB is still supported. |
|Administering|Login screen|Login screens are no longer supported. If you need to customize your login process, you must use custom authentication filters instead of login screens. |
|Developing|Deprecated Business portlets|The following Business portlets were removed and are no longer supported: -   Reminder
-   Document Viewer
-   Webpage portlet
-   My Query reports
-   Microsoft Exchange 2003

|
|Integrating|Deprecated Sametime portlets|The following Sametime portlets were removed in are no longer supported: -   Who Is Here \(SametimeWhoIsHere.war\)
-   Sametime Contact List \(SametimeContactList.war\)

|
|Developing|Deprecated Themes and Tags|The following portal themes and tags were removed and are no longer supported: -   All Legacy themes
-   `<portal-core:cacheProxyUrl/>` tag

|

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

|Unsupported|Recommended Action|
|-----------|------------------|
|Exchange, Domino, and POP3 are no longer supported protocols in the Common Mail portlet. |If you had been using CPP with Exchange, you can now use the Exchange portlets

 If you had been using CPP with Domino, you can now use the iNotes portlet.

|
|RSS portlet and IBM Feed Reader portlet are no longer shipped.|If you had been using RSS Portlet or IBM Feed Reader Portlet, you can now use IBM Syndicated Feed Portlet for WebSphere Portal. Alternatively, you can download the RSS portlet and IBM Feed Reader portlet from IBM WebSphere Portal Business Solutions Catalog. |
|The Common Calendar portlet is no longer being shipped.  |If you had been using CPP with Exchange, you can now use the Exchange portlets

 If you had been using CPP with Domino, you can now use the iNotes portlet.

|
|Document Manager|With this version of WebSphere Portal, Document Manager is no longer available. If you need to keep using a document library, then you will need to move your document library to a IBM Lotus Quickr server. See the WebSphere Portal Best Practices Wiki for further information. |
|Workflow for composite applications|Workflow for composite applications is no longer supported in this version. |
|Integration with WebSphere Process Server using the WebSphere Process Server Client and the My Processes and My Tasks portlets |The integration with WebSphere Process Server using the WebSphere Process Server Client and the My Processes and My Tasks portlets is being deprecated. It will be no longer supported in future releases. Instead, the integration with Process Server can be achieved using the IBM WebSphere Portal Unified Task List portlet, which simplifies the system setup and improves consumability. |
|Collaborative portlets  |The following collaborative portlets are no longer included with WebSphere Portal:-   My Lotus QuickPlaces
-   Inline QuickPlace
-   Domino Document Manager
-   Lotus Web Conferencing

**Note:** My Lotus QuickPlaces can be downloaded from the IBM WebSphere Portal Solutions Catalog. For more information, refer to the related topic IBM WebSphere Portal Solutions Catalog.

|
|Legacy sample portlets|The following legacy sample portlets are no longer provided: -   SPFLegacyBlank.war
-   SPFLegacyClock.war
-   SPFLegacyCommandManager.war
-   SPFLegacyEditMode.war
-   SPFLegacyFileUpload.war
-   SPFLegacyLookupAction.war
-   SPFLegacyMailReader.war
-   SPFLegacyMultipleServletContexts.war
-   SPFLegacyStockQuote.war
-   SPFLegacyTiles.war
-   SPFLegacyTransformation.war

|
|Microsoft Exchange 2000 portlet application|The Microsoft Exchange 2000 portlet application is no longer included. This portlet application contained the following portlets: -   MS Exchange 2000 Mail Portlet
-   MS Exchange 2000 Calendar Portlet 
-   MS Exchange 2000 Tasks Portlet
-   MS Exchange 2000 Contacts Portlet 
-   MS Exchange 2000 Notes Portlet 

|
|Transcoding technology|The transcoding technology previously provided with WebSphere Portal has been discontinued with this version. |
|Browser support|The following browsers are no longer supported in this version:-   Mozilla
-   Netscape

|
|JACL syntax for the Portal Scripting Interface|The JACL syntax for the Portal Scripting Interface has been replaced by Jython syntax. The JACL syntax is still supported, but this support will be discontinued in the future.|
|HP UX|HP UX is no longer supported in version 7.0. |

**Parent topic:**[Unsupported features for HCL Digital Experience 9.5](../reference/intr_depc95.md)

