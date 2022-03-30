# What's changed  8.5

HCL Digital Experience includes changes to existing features.

The following areas are changed:

-   **Installation Manager**

    The Installation Manager installs with an Apache Server database and a default file repository. Then, you must use the Configuration Wizard to set up a stand-alone or clustered environment.

-   **Roadmaps**

    Go to [Roadmaps to deploy your system](../install/deployment_patterns.md) to find information about installation and deployment options, migration options, and integration options.

-   **Configuration Wizard**

    You can now use the Configuration Wizard to set up a stand-alone server and set up a cluster. Use the wizard to transfer from the Apache Server database to another supported database, enable federated security, migrate your server, install add-ons, and more.

-   **Site toolbar**

    The system administrator can use the site toolbar to create the projects and templates for their websites. The content authors can use the site toolbar to create pages and to add content and applications to their websites.

    You can now access Administration from the toolbar. Click ![Administration menu icon](../images/toolbar_adminmenu.jpg) and select a specific area of administration from the menu. You can access all the Administration options in the navigation section after you open an administration page from the menu.

-   **Vanity URLs**

    Vanity URLs are a new feature. You can use vanity URLs instead of URL mappings. Go to [Vanity URLs](../wcm/vanity_urls.md) for information.

-   **Sun Java™ Directory Server**

    Sun Java Directory Server was rebranded to Oracle Directory Server.

-   **Web Application Bridge**

    The system administrator can create and configure multiple web dock applications. Then, the content author adds the application to their page without having to configure the Web Dock portlet.

-   **Remote search**

    You can install the remote search service with Installation Manager.

-   **Online help**

    There is online help for system administrators and a separate online help for content authors.

-   **HCL Web Content Manager**

    The Web Content Manager documentation is merged with the product documentation.

-   **Dojo**

    Dojo is not required anymore in your custom theme even in edit mode. You now can write a Dojo free theme, and still use Edit mode. However, some components require Dojo. You must use Dojo to use `wcm_inplaceEdit`, `wp_federated_documents_picker`, `wp_content_mapping_picker`, and the Search and Tag Center Profile.

-   **TopNav removal**

    The TopNav from earlier themes has been removed from desktop view. The TopNav itself still exists, but it is hidden on desktops. If you want to use the TopNav in the desktop view, you can update the dynamic content spot definition in your theme's plugin.xml.

-   **Default theme profiles**

    The standard profiles are now Lightweight and Lightweight with Dojo, Deferred and Deferred with Dojo, Basic Content and Basic Content with Dojo. The Full profile has been removed. Profiles can now be hidden also.

-   **Web Content Viewer \(JSR 286\) portlet**

    The display title of the JSR 286 Web Content Viewer portlet changed from Web Content Viewer \(JSR 286\) to Web Content Viewer. The portal shows the new display title in the toolbar and administration portlets.

    The portlet application ID, ilwwcm-localrenderingportlet-jsr.war, and the portlet name, Web Content Viewer \(JSR 286\), that are used with the XML configuration interface and with the portal scripting interface did not change.


**Related information**  


[Portlets no longer available ](../migrate/mig_removed_portlets.md)

**References:**  


[HCL Portal V8.0: What's changed](https://hclpnpsupport.hcltech.com/csm?id=kb_category&kb_category=c0ef98b71bb0778083cb86e9cd4bcbf2)

