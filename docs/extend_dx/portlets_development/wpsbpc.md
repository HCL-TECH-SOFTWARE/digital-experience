# Portlet concepts

Learn about portlets from a user's and an application developer's perspective. View a brief comparison between a portlet and a servlet and understand basic portlet concepts; know the effect of Java 2 security enablement on the operation of portlets that rely on certain privileges for processing.

Portlets are reusable Web modules that run on a portal server and provide access to Web-based content, applications, and other resources. Companies can create their own portlets or select portlets from a catalog of third-party portlets. Portlets are intended to be assembled into a larger portal page, with multiple instances of the same portlet displaying different data for each user.

From a user's perspective, a portlet is a window on a portal site that provides a specific service or information, for example, a calendar or news feed. From an application development perspective, portlets are pluggable Web modules that are designed to run inside a portlet container of a portal server.

The portlet container provides a run time environment in which portlets are instantiated, used, and finally destroyed. Portlets rely on the portal infrastructure to access user profile information, participate in window and action events, communicate with other portlets, access remote content, lookup credentials, and to store persistent data. The Portlet API provides standard interfaces for these functions. The portlet container is not a stand-alone container like the servlet container. Instead, it is implemented with the servlet container and reuses the functionality provided by the servlet container.

-   The Java Portlet Specification API. This is based on javax.portlet interfaces. HCL Portal supports the Java Portlet Specifications 1.0 and 2.0, also known as JSR168 and JSR286.

You can place both types of portlets on portal pages. However, a portlet cannot mix classes and methods from both packages.

Each portlet on the page is responsible for providing its output in the form of markup fragments to be integrated into the portal page. The portal is responsible for providing the markup surrounding each portlet. In HTML, for example, the portal can provide markup that gives each portlet a title bar with minimize, maximize, help, and edit icons.

## Portlets and the Servlet API

Portlets are special types of Web modules designed to run in the context of a portal. They are written to comply with a portlet API that is similar to the servlet API but addresses portal specific areas of concerns. In contrast to servlets, portlets may not send errors directly to browsers, forward requests, or write arbitrary markup to the output stream. Another difference compared to servlets is that portlets rely on specific features of the portal infrastructure, such as user profile information, storing and retrieving persistent settings, and getting client information.

Generally, portlets are administered more dynamically than servlets. Portlet applications consisting of several portlets can be installed and removed using the portal administration interface while the portal server is running. In a similar manner, the settings of a portlet can be changed by an administrator with appropriate access rights at any time without stopping/restarting the portal server Web application. Portlets can be created and deleted dynamically. For example, a clipping administration portlet can create new portlet instances whenever an administrator creates a new clipping.

## Java 2 security

Enablement of Java 2 security on the portal server can affect the operation of portlets that rely on certain privileges for processing. If your portlet requires certain privileges, for example, access to the file system or to the network, you might need to package a `was.policy` file in the portlet WAR indicating which privileges are needed. Even more important, any privileges needed by the portlet should be documented for the administrator.


???+ info "Related information"  
    -   [Java 2 security](../../deployment/manage/security/sec_java2.md)
    -   [Standard portlet API](../../extend_dx/portlets_development/standard_portlet_api/index.md)

