# Extend Web Content Manager

HCL DX Web Content Manager offers several facilities for developers, which allows you to extend the capabilities of the product.

## What is it For?

APIs provided by HCL DX enable developers to access most of the web content features of HCL DX. This means that they can write applications to manage content from outside of DX, or they can integrate content into their applications. An example of this would be a mobile application built with Volt MX that uses HCL DX web content so that non-technical users can update the content without recompiling the app.

Additionally, developers can extend the capability of HCL DX. Some information about that is given in this section, but other extension points such as [Web Content Manager (WCM) tags](../wcm_authoring/authoring_portlet/content_management_artifacts/tags/index.md) and [custom workflow actions](../wcm_authoring/authoring_portlet/change_management/workflow/workflow_stages_actions/index.md) are described elsewhere.

## Who Should Use It?

This information is primarily aimed at developers who either want to integrate web content or web content capabilities into their applications, or who want to extend HCL DX.

- **[HCL Web Content Manager API](./wcm_dev_api/index.md)**  
Using the WCM API to create, delete, move, copy, retrieve, search, and approve items.
- **[Creating custom plug-ins](./wcm_custom_plugin/index.md)**  
A custom plug-in allows you to run tasks. For example, you can create plug-ins to run when a page is rendered, store multi-locale text strings, and run when a file is uploaded.
- **[REST service for Web Content Manager](./wcm_rest/index.md)**  
Application developers can use Representational State Transfer (REST) services to work with WCM.
- **[REST service for Web Content Manager v2](./wcm_rest_v2/index.md)**  
Starting from CF217, you can run V2 APIs for WCM content and artifacts.
- **[Determining the current web content context](./wcm_dev_context.md)**  
Using the WCM Page Content Service, you can determine the current web content context of a portal page or Web Content Viewer portlet.
- **[Creating a custom HTML editor integration](./wcm_dev_custom_html_editor.md)**  
You can use custom HTML editors in all HTML fields of the authoring interface or specific HTML elements that are defined in an authoring template. Custom HTML fields are used to integrate third-party editors into the authoring interface.
- **[Creating a custom launch page](./wcm_dev_custom_ui.md)**  
You can configure an authoring portlet to use your custom-made launch page instead of the default user interface.
- **[Displaying data from external sources](./wcm_dev_displaying_data.md)**  
You can display content from external sources using standard Java tag libraries and a JSP element. Java code that uses standard Java APIs or tag libraries can be used to display and format data from databases, LDAP repositories, or send email.
- **[Taxonomies, categories, and keywords](./wcm_dev_profiling_taxonomy_planning.md)**  
Taxonomies, categories, and keywords allow you to control the content displayed in menus.
- **[Using remote actions](./wcm_dev_remoteactions.md)**  
Remote actions are used to trigger actions from the HCL WCM application.
- **[Storing translated text in a content item or site area](./wcm_dev_storing_translated_text.md)**  
Translated text can be stored in a content item or site area. The translated text can then be referenced in web content tags, or as localized text in web content authoring portlet forms.
- **[Java messaging services for web content](./wcm_jms_enable.md)**  
WCM supports event notifications such as item state changes, or services starting and stopping. These notifications can be delivered as messages to the Java messaging service.  
- **[AI analyzer API for content](./wcm_rest_v2_ai_analysis/index.md)**  
Starting from CF213, a new WCM REST v2 API is available for sentiment analysis of content, keyword extraction from content, and auto summarization of content element.
