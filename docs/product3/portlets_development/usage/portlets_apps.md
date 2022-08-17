# Web modules, portlet applications, and portlets

A web module represents a web application. It is used to assemble servlets and JSP files as well as static content, such as HTML pages, into a single deployable unit.

Web modules are stored in web archive \(WAR\) files, which are standard Java archive files. The standard file extension for WAR files is `.war`. A Web module can contain one or more portlet applications, servlets, JavaServer Pages \(JSP\) files, and other files. A deployment descriptor, stored in an Extensible Markup Language \(XML\) file, declares the contents of the modules, information about the structure and external dependencies, and a description of how the components are to be used at run time.

Portlet applications are created implicitly when a WAR file is deployed. The portlet application holds one or more related portlets that come packaged in the same installation file. These portlets can share resources and send messages among themselves to communicate events. A portlet application may consist of a single portlet or multiple portlets. An example of a single portlet application is the Reminder portlet application, which contains a single portlet named Reminder Portlet. An example of a portlet application with multiple portlets is Portlet Manager Application, which contains Manage Web Modules, Manage Applications, and Manage Portlets.

You can add portlets to a running system at any time. After installation, the new portlets are immediately available to administrative users. They can assign the appropriate user roles to the appropriate groups and users so that they can access and use the portlets. Once available, the portlets can be selected for display on the portal pages of users and can be edited as appropriate. Identification information of WAR files is stored in a database for easy deployment in complex server environments with multiple portal servers. By allowing all files associated with a portlet to be packed into a single file, distribution and deployment of new portlets is made easier. Portlets can be distributed in WAR file format through websites and other means.

**Parent topic:**[Managing portlets, portlet applications, and iWidgets](../admin-system/adpltadmwork.md)

