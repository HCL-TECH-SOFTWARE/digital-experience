# Developing 

This section includes developer documentation on extending applications and development assets for HCL Portal and HCL Web Content Manager.

Developing for HCL Digital Experience includes developing portlets, extending the applications that are provided with the portal, and more. HCL Digital Experience includes development assets such as the Script Application, DX Sync tool and more. IBM Rational Application Developer, available separately, can also be used to help you start developing quickly.

-   **[Changing to a developer mode environment](../install/chg_dev_mode.md)**  
Install HCL Digital Experience and then immediately change to a developer mode environment. Use this environment when you develop applications, themes, portals, and portlets. Startup performance is improved within a developer mode environment.
-   **[Dojo Toolkit ](../dev/dojo_overview.md)**  
HCL Digital Experience contains an instance of the Dojo Toolkit, a JavaScript library that is based on the Dojo Toolkit. When you develop components that use Dojo, you must be aware of how the portal uses Dojo, and the tips and restrictions when you use Dojo.
-   **[Extending HCL Portal class path ](../dev/ext_wp_classpath.md)**  

-   **[Developing themes and skins ](../dev-theme/themeopt_themes.md)**  
You can create themes using modules to contribute to separate areas of pages to provide flexibility, enhance the user experience, and maximize performance. To optimize themes on your website, use the theme optimization module framework. The framework separates feature-specific logic and capabilities from the theme code.
-   **[URL generation in HCL Portal ](../dev/url_gen_main.md)**  
Generating Portal URLs correctly is one of the most important tasks in programming an HCL Portal based application. There are several programming tools and techniques available for generating HCL Portal URLs in custom code. The following section introduces the programming tools available and discusses when it is most appropriate to use each of the tools.
-   **[Model SPI overview](../dev/dgn_modelovw.md)**  
Models provide information that is needed by HCL Portal to perform tasks such as content aggregation or building navigation to browse the aggregated content. The information that is aggregated is represented through models that can be accessed programmatically by using the Model SPI \(read-only\). The information of a model is usually persistent \(stored in a database\) but can also be transient \(computed and stored only in memory\). Models can be represented by using a tree structure \(nodes have a parent-child relationship\), a list structure, or a selection structure \(a selected element in a tree structure\).
-   **[Controller SPI](../dev/ctrlrapic_ovu.md)**  
You can use the Controller SPI for portal administration. It allows you to modify portal resources. It enhances the read-only portal Model SPI by adding writable aspects.
-   **[User and group management](../dev/wpspuma.md)**  
The Portal User Management Architecture \(PUMA\) System programming interface \(SPI\) provides interfaces for accessing the profiles of a portal User or Group.
-   **[Portal Access Control interfaces ](../dev/wppacintfce.md)**  
Portal Access Control provides interfaces for retrieving and modifying and access control information of portal resources, such as portlets or pages.
-   **[Developing portlets ](../dev-portlet/wpsdev.md)**  
Get an overview of the process of creating portlets, learn about the concepts of the APIs used to develop portlets, and view the samples to get you started. Also, learn about integrating features such as single sign-on, cooperative sharing of information using the property broker, and migrating Struts applications to the portlet environment.
-   **[Support for JavaServer Faces 2.2 ](../dev-portlet/dx_bridge_for_jsf_onwas9x.md)**  
HCL Digital Experience 8.5 and 9.5 includes the HCL Portlet 2.0 Bridge for JSF 2.2. The bridge provides customers an interface to developing and running JSF Portlets.
-   **[Web Developer Toolkit for HCL Digital Experience](../dev/web_developer_toolkit.md)**  
Learn more about what you can do with the Web Developer Toolkit for HCL Digital Experience.
-   **[The Script Application ](../script-portlet/script_portlet.md)**  
 The Script Application enables script developers to create portlets for HCL Digital Experience with HTML, JavaScript, and CSS.
-   **[The HCL Web Content Manager API ](../wcm/wcm_dev_api.md)**  
You can use the Web Content Manager API to extend functions of HCL Web Content Manager.
-   **[Digital Experience REST API explorers](../dev/api_explorers.md)**  

-   **[Search REST API specification ](../search-rest-api/search.md)**  
The following topics describe-s- the API calls to search HCL Digital Experience. You can search HCL Digital Experience web pages and content to find content that contains a specific text string in its title or content, or is tagged with a specific tag.
-   **[Extending tagging and rating by using service APIs ](../admin-system/tag_rate_dev.md)**  
Developers can enhance and extend the tagging and rating features of the portal. For this purpose the portal tagging and rating feature provides service APIs that you can use to enhance tagging and rating by your requirements.
-   **[How to create a custom launch page](../wcm/wcm_dev_custom_ui.md)**  
You can configure an authoring portlet to use a launch page of your own design instead of the default user interface.
-   **[How to create a custom HTML editor integration](../wcm/wcm_dev_custom_html_editor.md)**  
You can use custom HTML editors in all HTML fields of the authoring interface or specific HTML elements that are defined in an authoring template. Custom HTML fields are used to integrate third-party editors into the authoring interface.
-   **[How to use remote actions](../wcm/wcm_dev_remoteactions.md)**  
Remote actions are used to trigger actions from the HCL Web Content Manager application.
-   **[How to create custom plug-ins ](../wcm/wcm_dev_plugins.md)**  
A custom plug-in is a reusable Java class that you create to run a task. You can create custom plug-ins such as custom workflow actions, plug-ins to run when a page is rendered, plug-ins to store multi-locale text strings and plug-ins to run when a file is uploaded.
-   **[Digital Data Connector \(DDC\) for HCL Portal ](../social/plrf_ovu.md)**  
You can use the Digital Data Connector \(DDC\) for HCL Portal framework to integrate data from external data sources on your portal pages by using HCL Web Content Manager presentation components. External data means that the data does not need to be stored directly in HCL Web Content Manager. For example, you can use DDC to render social data that you have on your HCL Connections server or on other social platforms in the context of your portal pages. Other possible data sources include news feeds, task lists, product catalog information, to name just a few.
-   **[Determining the current web content context ](../wcm/wcm_dev_context.md)**  
To determine the current web content context of a portal page or Web Content Viewer portlet, you can use the WCM Page Context Service. This service provides the ID of the currently rendered item of a page or portlet.
-   **[REST service for Web Content Manager ](../wcm/wcm_rest.md)**  
Application developers can use Representational State Transfer \(REST\) services to work with Web Content Manager. The REST service for Web Content Manager provides authoring access to content items and elements. The service follows the Atom Publication Protocol, and Atom feeds, and entries are accessible in XML \(application/atom+xml\) and JSON \(application/json\) format.
-   **[HCL Experience API ](../open_api/openapi_overview.md)**  
This documentation provides developers with documentation on how to provision, configure, and use the HCL Experience API with the HCL Digital Experience 9.5 platform.
-   **[How to display data from external sources](../wcm/wcm_dev_displaying_data.md)**  
You display data from external sources, such as SQL databases, by using the same methods as you would when you create a website.
-   **[Instrumenting web content for Active Site Analytics](../admin-system/sa_asa4wcm.md)**  
You can collect information from web content for Active Site Analytics.
-   **[Java messaging services for web content](../wcm/wcm_jms_enable.md)**  
Web Content Manager supports for the notification of events such as item state changes, or services starting and stopping. These notifications can be delivered as messages to the Java messaging service.
-   **[Reference documents](../dev/reference_docs.md)**  
Reference copy of API, SPI, Javadoc, and more, for HCL Digital Experience 8.5 and 9.0.
-   **[Developing basic PAA file applications](../config/dev_sol_app.md)**  
Solution developers can create their own Portal Application Archive \(PAA\) files. The developers can then use the Configuration Wizard to add on their applications to their HCL Digital Experience environment.
-   **[Developing advanced PAA file applications ](../config/dev_sol_app_adv.md)**  
Developers can create their own advanced Portal Application Archive \(PAA\) file. The advanced PAA file contains custom content. The developers can then use the Configuration Wizard to add on their applications to their HCL Digital Experience environment.
-   **[HCL UX Screen Flow Manager](../screenflow/screenflow_intro.md)**  
The HCL UX Screen Flow Manager helps operators, developers, and dialog modelers develop fine-granular, small split portlets. Learn to configure the sequence, transitions, and workflow of a set of screens.

**Parent topic:**[HCL Digital Experience 9.5 Product Documentation](../welcome/wp95_welcome.md)

**Related information**  


[Setting up a website ](../site/site_setup.md)

