# Developing portlets

Get an overview of the process of creating portlets, learn about the concepts of the APIs used to develop portlets, and view the samples to get you started. Also, learn about integrating features such as single sign-on, cooperative sharing of information using the property broker, and migrating Struts applications to the portlet environment.

**Note:** For z/OS®, this section relates to the non-z/OS development environment where HCL Digital Experience is installed.

HCL Digital Experience supports portlets written to the standard portlet API.

-   If you are not an experienced Java™ developer...

    you can quickly integrate many of your existing resources into HCL Portal without developing your own portlets.

-   If you have Java and servlet development experience but are new to portlet development...

    you should start by reading [Portlet concepts](wpsbpc.md) and [Standard portlet API](jsrapi.md). When you are ready to start developing portlets, see [Portlet creation basics](wpswrplt.md) for samples that demonstrate common features of the API.

-   If you have experience with Struts applications, see [Struts Portlet Framework](wpsstruts.md) for more information how to take an existing Struts application and convert it to a portlet.
-   If you are already familiar with portlet development using either the standard portlet API, see the following Help Center documentation topics:
    -   See [Portlet communication](pltcom_ptlt_com.md) for more information how you can enable portlets to share information with other portlets on the page, using the property broker service.
    -   See [Collaborative Services API and the person tag](../collab/i_coll_r_cs_api.md) for more information how you can integrate collaborative functionality into your portlets, such as online status, chat, and email.
-   See [JavaServer Faces implementation](../migrate/mig_post_jsf.md) for HCL's support statement about JSF 2.2 Support with HCL DX Portlet Bridge.

Rational® Application Developer includes tools designed to help you develop portlet applications for HCL Digital Experience.

-   **[Portlet concepts](../dev-portlet/wpsbpc.md)**  
Learn about portlets from a user's and an application developer's perspective. View a brief comparison between a portlet and a servlet and understand basic portlet concepts; know the effect of Java 2 security enablement on the operation of portlets that rely on certain privileges for processing.
-   **[Creating a simple portlet](../dev-portlet/wpsbscfg.md)**  
To create a simple portlet, you must write the portlet code, compile Java source, create the JAR file, write the portlet descriptors, set up the WAR file directory structure, and package and deploy the portlets.
-   **[Standard portlet API](../dev-portlet/jsrapi.md)**  
The Java Portlet Specification addresses the requirements of aggregation, personalization, presentation, and security for portlets running in a portal environment.
-   **[Portlet services](../dev-portlet/wpsptservice.md)**  
Portlet services are used to provide common functionality to portlets. Each portlet service has its own service-specific interface for the functionality that it offers.
-   **[Struts Portlet Framework](../dev-portlet/wpsstruts.md)**  
Struts are no longer supported in HCL Digital Experience
-   **[Web 2.0 user interface features](../dev-portlet/w2_ovu.md)**  
Learn about portal features that pertain to the Web 2.0 generation type of Web user interface.
-   **[Client-side aggregation reference](../dev-portlet/csa2r.md)**  
Refer to programming model guidelines for client-side mode or server-side mode.
-   **[Portlet communication](../dev-portlet/pltcom_ptlt_com.md)**  
HCL Digital Experience supports multiple ways for portlets to exchange or share information.
-   **[Dynamic user interfaces](../dev-portlet/wpsdynui_cpts.md)**  
Learn about dynamic user interfaces that include dynamic pages, dynamic portlets, dynamic UI configuration, dynamic UI properties, and shared dynamic UIs. Get an overview of how to develop a dynamic UI configuration.
-   **[Collaborative Services API and the person tag](../collab/i_coll_r_cs_api.md)**  
Collaborative Services are a set of methods and JavaServer Page tags that allow developers who are writing portlets for HCL Portal or other application servers to add Lotus collaborative functionality to their portlets. The services can be used to develop new custom portlets, or to add collaborative functionality \(for example, menus or person links indicating online status\) to existing portlets.
-   **[Portlet API](../dev-portlet/wpspapi.md)**  
The Portlet API is no longer supported starting with HCL Portal Version 8.5.0. You must convert portlets based on the Portlet API to the Standard Portlet API. Learn how to convert HCL DX Portlets to Standard API portlets.
-   **[Portlet development reference](../dev-portlet/wpsdevref.md)**  
View important information and concepts related to portlet development.
-   **[Predefined public render parameters](../dev-portlet/predef_pub_ren_param.md)**  
HCL Portal defines a set of portal-specific public render parameters, which can be used to work with portal-specific state information within portlets.
-   **[Sample portlets](../dev-portlet/jsrsamp.md)**  
Learn about the sample portlets included with HCL Digital Experience and view the steps to import these samples into IBM Rational Application Developer.

**Parent topic:**[Developing](../dev/developing_parent.md)

**Related information**  


[People Finder](../collab/i_coll_r_porcc_pfnd.md)

