# Portlets

Portlets are a central part of HCL Digital Experience. Portlets are small applications that are independently developed, deployed, managed, and displayed. Administrators and users compose personalized pages by choosing and arranging portlets, resulting in customized Web pages.

The portal ships a rich set of standard portlets. For the most up-to-date information about portlets, including the latest portlets that are available for download, visit the [HCL®Software Products Catalog](https://www.hcltechsw.com/products). Or, refer to Developing portlets for information on creating custom portlets.

## Portlet applications

Portlets are more than simple views of existing Web content. A portlet is a complete application, following a standard model-view-controller design. Portlets have multiple states and view modes, plus event and messaging capabilities.

Portlets run inside the application server, similar to the way a servlet runs on an application server, but are aggregated to a complete Web page by the HCL Portal server. The portlet container provides a run-time environment where portlets are instantiated, used, and finally destroyed. Portlets rely on the portal infrastructure to access user profile information, participate in window and action events, communicate with other portlets, access remote content, look up credentials, and store persistent data.

Generally, portlets are administered more dynamically than servlets. For example, portlet applications that consist of several portlets can be installed or removed while the HCL Portal component is running. The settings and access rights of a portlet can be changed by an administrator while HCL Portal is running, even in a production environment.

Portlet modes allow a portlet to display a different user interface, depending on the task that is required of the portlet. A portlet has several modes of display that can be invoked by icons on the portlet title bar: View, Help, Edit, Configure, and Edit Shared Settings.

A portlet is initially displayed in View mode. As the user interacts with the portlet, the portlet can display a sequence of view states, such as forms and responses, error messages, and other application-specific states. Help mode provides user assistance. Edit mode lets the user change portlet settings. For example, a weather portlet might provide an Edit page for users to specify location. Users must be logged into the portal to access Edit mode. Configure mode changes the default look of the portlet for all portlet instances and Edit Shared Settings changes the look of the portlet on a specific page.

Each portlet mode can be displayed in normal, maximized, or minimized state. When a portlet is maximized, it is displayed in the entire body of a page, replacing the view of other portlets. When a portlet is minimized, by default, only the portlet title bar is displayed on the page.

## Portlet API

The Java Portlet Specification addresses the requirements of aggregation, personalization, presentation, and security for portlets that run in a portal environment. The portal supports both portlet standards JSR 168 and JSR 286. For more information about the standard portlet API, go to the topic *Standard portlet API*.

## Portlet communications

The portal allows portlets to communicate with each other. Portlet communication can be used to exchange data between portlets. This feature makes the portal easier to use.

The portal supports events as defined in the JSR 286 specification. It allows administrators to wire portlets by using the portal user interface.

For example, one portlet can display information about accounts, and a second portlet displays information about transactions that occurred for one of the accounts over the last 30 days. To display this information, the transactions portlet needs to obtain the appropriate account information when it displays the transaction details. This exchange of information is accomplished by communication between the two portlets, by using events as described in the JSR 286 specification. In this example, the account portlet defines a publishing event in its portlet descriptor. The transaction portlet defines this event as a processing event in its portlet descriptor. By using the portal user interface, you can now wire those two portlets together. After you did this wiring, when the account portlet throws an event, the transaction portlet receives this event and can show information about the transactions of this account.

## Portlet services

Portlet services are used to provide common functionality to portlets. Each portlet service has its own service-specific interface for the functionality that it offers. The portal supports portlet services for standard portlets. Standard portlets use a JNDI lookup to retrieve a `PortletServiceHome` object, which is used to retrieve a portlet service implementation. A portlet service can be started only by the code within a portlet. For more information about portlet services in the portal, read *Portlet services*.

## Creating and customizing portlet applications

Web Experience Factory is included with the product and provides a robust selection of builders that supercharge the portlet development process without writing code. The rapid application development technology of Web Experience Factory enables portlet creation 40 —— 70 percent faster than using traditional J2EE development methods. With Web Experience Factory, you can rapidly develop and deploy custom service-oriented portlets and rich, interactive Web 2.0 style applications with features like drag-and-drop, in-line editing, type-ahead search, and intelligent page refresh functionality. Web Experience Factory transforms operational data into high-value business information by integrating data from a wide variety of packaged enterprise applications, repositories and data sources including SAP, Siebel, PeopleSoft, Domino®, Web, and REST services and leading relational databases through a rich, pre-built connector library.

Using Web Experience Factory and its patented dynamic profiling functionality, developers can easily empower business-user led portlet customization through personalization and create dynamic, micro-targeted applications that vary portlet content based on user role, geography, and more. Applications that are built with Web Experience Factory can be deployed to multiple run-time environments to provide the best user experience based on target audience, including the portal, Mashup Center, Lotus Notes®, and Expeditor and WebSphere® Application Server.

Web Experience Factory applications are standards based and comply with portlet standards including JSR 168 and JSR 286.

**Parent topic:**[Web content](../overview/content.md)

