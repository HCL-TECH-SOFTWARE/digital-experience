# Administration portlets overview

HCL Digital Experience has administration portlets that assist you with managing resources. Get an overview of the administration portlets and the tasks you can complete with each portlet.

!!!note
    Sub-administrators of virtual portals might not have access to all administration portlets listed here. For information, refer to the topics about multiple virtual portals.

!!!note
    The following list of pages and portlets assumes that Practioner Studio has been enabled. This enablement moved some of the pages that had been in the Administration area of Digital Experience to a new locations.

## Site Management

The following sections describe the portlets that are provided for customizing the user interface for HCL Digital Experience.

-   **Manage Pages**<br>

    Use the **Manage Pages** portlet to export page configurations in XML, create, edit, activate, order, and delete pages and external web pages and labels. Available tasks depend on which item is selected.

-   **Virtual Portal Manager**<br>

    Use the **Virtual Portal Manager** portlet to create, list, modify, and delete virtual portals. When you create a virtual portal, it is filled with the initial default content for virtual portals. For more information about the **Virtual Portal Manager**, refer to the portlet help.

-   **Page Templates**<br>

    Page Templates are not accessed by a portlet, but they provide a means for managing portal pages. Page templates include common page elements and make page creation easy. To work with page templates, users can, but do not have to configure pages and their properties, such as theme or page layout. For example, web site designers can create and manage page templates that match your web site design. Content authors can then use the page templates to create content ready pages for different content types. Working with page templates is not limited to administrators. Users need only limited access permissions to work with page templates.

-   **Search Sitemap**<br>

    The Search Sitemap portlet gives an overview of the pages that are visible in your Digital Experience installation. Administrators can use this to view each page in the entire site.


## Applications

The following sections describe the portlets that are provided for working with portlets, web modules, and applications.

-   **Web Modules**<br>

    Use the **Manage Web Modules** portlet to install new portlets from either a web service or a WAR file. You can also use the portlet to manage existing portlets or view a list of portlet applications for a web module. A web module is a WAR file that contains portlet applications.

-   **Manage Applications**<br>

    Use the **Manage Applications** portlet to enable a portlet application as a web service or to manage existing portlet applications. It displays a list of all web modules and associated portlet applications that are installed on HCL Digital Experience. You can view and change portlet application settings from this portlet. Tasks include renaming and deleting portlet applications, and modifying configuration parameters. See the Manage Applications portlet help for steps on completing these and related tasks.

-   **Manage Portlets**<br>

    Use the **Manage Portlets** portlet to view or manage existing portlets, or enable portlets as web services. It displays a list of all installed portlets. Use the **Manage Portlets** to view and change portlet settings. Tasks include renaming and deleting portlets, and adding, modifying, or deleting portlet configuration parameters. See the Manage Portlets help for steps on completing these and related tasks.

-   **Web Service Configuration**<br>

    Use the **Web Service Configuration** portlet to set up your portal for consuming web services for Remote Portlets (WSRP) by configuring WSRP Producers on the Consumer side. For more details, refer to the topics about Using WSRP services.

    You cannot use the **Web Service Configuration** portlet for the following actions:

    -   Provide web services that make your portlets available to other systems such as remote web services. To provide web services as a Producer, use the **Manage Portlets** portlet.
    -   Consume web services that integrate web services that are provided by a Producer as remote portlets. To consume web services as a Consumer, use the **Manage Web Modules** portlet.

-   **Virtual Web Application Manager**<br>

    Use the **Virtual Web Application Manager** portlet to create content provider profiles in your portal site. These profiles are required to integrate web-based content from different providers, such as Microsoft SharePoint. You can then create Web Dock applications based on the content provider application details that are rendered on a portal page in an iFrame.

-   **XML Import**<br>

    Use the **Import XML** portlet to import an XML file. For example, from a staging server you can export pages and portlets into XML with **XML export** on **Manage Pages** and then use the **Import XML** portlet to import the configuration to a production server.

## Themes and Skins

-   **Themes and Skins**<br>

    Use the **Themes and Skins** portlet to install, edit, and delete themes and skins. You can also select a default theme and skin with this portlet. See the Themes and Skins portlet help for specific instructions on these tasks.

## Security

-   **Manage Users and Groups**<br>

    Use the **Manage Users and Groups** portlet to search for, edit, and delete existing users and groups. You can also create new users and groups and modify group membership.

-   **Resource Permissions**<br>

    Use the **Resource Permissions** portlet to set access roles. You can assign access roles to associate users and groups with resources to determine the level of interaction a user can have with a resource.

-   **User and Group Permissions**<br>

    Use the **User and Group Permissions** portlet to easily assign, view, and modify the roles and permissions that users and groups have on various resources. Refer to the **User and Group Permissions** portlet help.

-   **Credential Vault**<br>

    Use the **Credential Vault** portlet to complete tasks that are specific to vault management. You can add or manage vault segments and vault slots.


## Search

-   **Manage Search**<br>

    Use the **Manage Search** portlet to create and manage search services, search collections, and search scopes. Searchable resources include various document types, for example HTML and text documents. HCL Digital Experience sites can also be indexed and searched. Refer to the Manage Search portlet help for detailed instructions about working with search.

    **Tag Center**<br>

    The Tag Center contains 2 portlets for managing and viewing tagging and rating, Tag Cloud and Tag Results. Tag Cloud can be used to see tagged content and pages in either a cloud or list format. The Tag Results portlet will display the details of selected individual or groups of tags.

## Tracing

-   **Enable Tracing**<br>

    Use the **Enable Tracing** portlet to enable or disable the tracing logs. See the Enable Tracing portlet help for detailed instructions on working with logs.

    Use the **Enable Tracing** portlet to dynamically enable or disable trace-logging for individual classes and entire packages without restarting WebSphere Portal. In an HCL Portal cluster, the portlet lists and changes the currently running trace loggers on only one individual server (not the entire cluster). To dynamically change the trace specification for the entire cluster, you must use the Enable Tracing portlet on each individual server (horizontal or vertical cluster member).   

## Settings

-   **Global Settings**<br>

    You can use the **Global Settings** portlet to define what the user sees, including the default language and the **Find** link. The default language that is specified in Global Settings applies to all users when the language preference specified in their browser is not supported. For example, the portal is configured to support English, German, and Spanish, with English as the default language in **Global Settings**. A user, whose browser language preference is set to Italian, would see English because Italian is not supported in this case. A user can also select a preferred language when they register.

    The **Global Settings** portlet also determines what users see when they return to the portal. For example, you can choose to display the most recently viewed page rather than a default page. You can allow users themselves to choose what they see when they log on, or if they see the default page or the most recently viewed page. You can also determine a URL for the **Find** link. For more information about the **Find** link, refer to the topic about setting the search engine that opens when users select **Find**.

    !!!note
        The **Global Settings** portlet does not automatically enable each server in a portal cluster configurations. To set the same settings on other servers you must manually update each individual server.

-   **Custom Unique Names**<br>

    HCL Digital Experience uses object IDs to identify resources unambiguously even between different portals. They consist of an extended alphanumeric string that might be difficult to remember. Use the **Custom Unique Names** portlet to assign unique names to resources. You can select names that are easy to read and remember. These custom unique names make identification of resources easier than the object IDs assigned by HCL Digital Experience, for example when porting resources from one portal to another.

-   **Supported Markups**<br>

    Use the **Supported Markups** portlet to determine which markups are recognized. You can add, edit, activate or deactivate, and delete a markup. The installation default is HTML. See the **Supported Markups** portlet help for detailed instructions.

    !!!note
        Leave the default HTML markup enabled. Removing or changing the HTML markup causes access problems. If the default HTML markup is disabled, use the XML configuration interface to re-enable the HTML markup.

-   **Supported Clients**<br>

    With the **Supported Clients** portlet, you can determine what types of devices and web browsers can access the portal. You can add, edit, order, or delete clients. If you need to test a portlet with a device simulator, you might need to add the user agent string of the device simulator to the portal client list. Consult the documentation included with the device simulator to determine the user agent strings the simulator supports and add them with the **Supported Clients** portlet. Read the **Supported Clients** portlet help for detailed steps on working with clients.

## About

-   **About HCL Digital Experience**<br>

    This portlet shows the version and fix level of your HCL Digital Experience. It also shows the product numbers and the Copyright years.


