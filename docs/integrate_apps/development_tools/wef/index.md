<<<<<<< HEAD
# Development tools

Both the [Web Experience Factory](https://support.hcltechsw.com/csm?id=kb_search&spa=1&language=en,ja&query=web%20experience%20factory) and [IBM Rational Application Developer](https://www.ibm.com/products/rad-for-websphere-software) include functionality to help you develop Multichannel Digital Experience solutions.

## HCL Web Experience Factory

[HCL Web Experience Factory](https://support.hcltechsw.com/csm?id=kb_search&spa=1&language=en,ja&query=web%20experience%20factory) creates applications with rich, interactive digital experiences for delivery on desktop browsers, smartphones, tablets, and other channels. This application development tool enables developers to build custom web portlets, widgets, and applications for [HCL Digital Experience](https://www.hcltechsw.com/dx/features), and IBM WebSphere Application Server environments.
=======
# Web Experience Factory (WEF)

[Web Experience Factory](https://support.hcltechsw.com/csm?id=kb_search&spa=1&language=en,ja&query=web%20experience%20factory) creates applications with rich, interactive digital experiences for delivery on desktop browsers, smartphones, tablets, and other channels. This application development tool enables developers to build custom web portlets, widgets, and applications for [HCL Digital Experience](https://www.hcltechsw.com/dx/features), and IBM WebSphere Application Server environments.
>>>>>>> main

Web Experience Factory Designer is integrated into the Eclipse development environment.

Web Experience Factory Designer is a tool for developing Java™ 2 Platform, Enterprise Edition \(J2EE\) Web applications and portlets.

Web Experience Factory Designer is a plugin to Eclipse-based integrated development environments \(IDEs\). Working in the Web Experience Factory perspective in Eclipse, you create projects, for which you use builders and profile sets to develop models and generate the resulting Web applications from those models.

For more information about Web Experience Factory refer to the following resources:

<<<<<<< HEAD
-   [HCL Web Experience Factory](web_experience_factory.md)
-   [HCL Web Experience Factory Knowledge Articles and Technotes](https://support.hcltechsw.com/csm?id=kb_search&spa=1&language=en,ja&query=web%20experience%20factory)
-   [HCL Web Experience Factory Support Statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013647)

## IBM Rational® Application Developer

[IBM Rational® Application Developer for WebSphere Software](https://www.ibm.com/products/rad-for-websphere-software) includes tools designed to help developers develop portlet applications. The portlet tools provide the following capabilities:

-   Portlet project support for the standard portlet API
-   Web perspective views and editors for developing portlets
-   Portlet project wizard to create basic portlets, Faces portlets, and Struts portlets
-   Editing and validation of the portlet deployment descriptor \(portlet.xml\).
-   Testing and debugging of portlets within the workbench
-   Testing and debugging of portlets on a remote machine
-   Visual tooling to insert portlet programming objects into JSP files using Page Designer.
-   Educational tutorials, available in the Tutorials Gallery

For additional information about IBM Rational Application Developer, refer to the IBM product pages at [IBM Rational® Application Developer for WebSphere Software](https://www.ibm.com/products/rad-for-websphere-software).

-   **[HCL Web Experience Factory](../overview/web_experience_factory.md)**  
[HCL Web Experience Factory](https://support.hcltechsw.com/csm?id=kb_search&spa=1&language=en,ja&query=web%20experience%20factory) creates applications with rich, interactive digital experiences for delivery on desktop browsers, smartphones, tablets, and other channels. This application development tool enables developers to build custom web portlets, widgets, and applications for [HCL Digital Experience](https://www.hcltechsw.com/dx/features), and IBM WebSphere Application Server environments.

**Parent topic:**[Mobile](../overview/mobile.md)

=======
- [Web Experience Factory Knowledge Articles and Technotes](https://support.hcltechsw.com/csm?id=kb_search&spa=1&language=en,ja&query=web%20experience%20factory)
- [Web Experience Factory Support Statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013647)

## Web Experience Factory Designer - Overview

Web Experience Factory Designer is a tool for developing Java™ 2 Platform, Enterprise Edition \(J2EE\) Web applications and portlets. Web Experience Factory Designer is a plugin to Eclipse-based integrated development environments \(IDEs\). Working in the Web Experience Factory perspective in Eclipse, you create projects, for which you use builders and profile sets to develop models and generate the resulting Web applications from those models.

Each builder has a wizard user interface through which you specify input. The builder automatically generates or modifies part of the application. Profiles in profile sets let you tailor one application and generate multiple versions, for example, a different version for different human languages or different user groups. You assemble builders in models to implement a user interface or a data service. If you make a change in the inputs to a builder in a model, the application code is regenerated. The regeneration lets you iteratively develop an application. The builders generate all the necessary application code, including JSPs, Java classes, and XML documents. You use builders to implement design patterns to facilitate iterative development.

The HCL Digital Experience server framework provides multiple services, for example, page navigation and collaboration features. The Web Experience Factory Designer also facilitates the creation of new builders and profiles.

## About using Web Experience Factory Designer help

Web Experience Factory Designer provides context-sensitive help for all features and functions. You can access help in several ways:

- **F1 key**

  All Web Experience Factory Designer windows and dialogs provide context-sensitive help that describes the tasks supported by the window or dialog. To view this help, place the pointer in a window or dialog to establish context and press the F1 key.


- **Help button**

  Builder call editors provide a Help button that you can use to access configuration help for the builder. Eclipse Help menu item.


Web Experience Factory installs a documentation plugin into the Eclipse Help system. This plugin runs within the context of the Eclipse help engine, and can be accessed from the **Eclipse Help** menu. To access Web Experience Factory help in Eclipse, click **Help** \> **Help Contents** to open the Eclipse SDK Help window. From Contents, click **Web Experience Factory Designer** to display the introductory page.

## Key concepts: builders, models, and profiles

With Web Experience Factory, developers build portlets by snapping together a sequence of components called **builders**. Each builder has a simple wizard-like user interface and does the work of automatically generating or modifying part of an application. A builder implements an application design pattern.

Builders are assembled in models, which are like application production lines. Each time a change is made to any of the builders in a model, the application code is regenerated, allowing the developer to iteratively develop a custom portlet application. Some builders create webapp artifacts such as a page or a table, while other builders modify the artifacts created by previous builders by rearranging, hiding or adding columns to a table.

The builders generate all the application code, including JSPs, Java classes, and XML documents.

In addition, developers can create multiple variations of a portlet from one code base, without requiring additional code changes or republishing. This is done with the profiling feature of Web Experience Factory. Different profiles can be created for different user constituencies, based on any characteristics such as region, role, or group membership. The profiling technology is also used to support runtime configuration, so that business users can control application functionality through a simple browser interface. The net result is that Web Experience Factory allows companies to rapidly create adaptive applications that respond to change on demand – something traditional tools and technologies simply cannot provide.
>>>>>>> main
