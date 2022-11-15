# Deployment descriptors

The deployment descriptors define configuration information for the portlets that a portlet application contains.

Each portlet application requires two deployment descriptors:

-   The portlet deployment descriptor provides the portal server with information about the portlet resources in the application, including configuration, support characteristics, and titles. The portal server uses this information to provide services for the portlet. For example, if a portlet registers its support for help and edit mode in the portlet deployment descriptor, the portal server renders icons to allow the user to start the portlet's help and edit pages. This file is always named portlet.xml.
-   The web application descriptor provides the application server with information about the web resources in the application. This file is always named web.xml. The format of this file is described in the Deployment Descriptor chapter of the *Servlet Specification*.

The following topics describe the deployment descriptors of a portlet application.

## Web application deployment descriptor

This section describes the required elements of the web.xml for standard portlets. For more information about the web application deployment descriptor, see the [Java Servlet Specification Version 2.3](http://jcp.org/aboutJava/communityprocess/first/jsr053/index.html).

-   **Web application descriptor for standard portlets**

    As described in the Java Portlet Specification, a portlet application is an extended web application and therefore has a servlet context. The portlet context uses most of its function from the servlet context of the portlet application. Since the web.xml is a mandatory item in a Java Platform, Enterprise Edition web ARchive, you must verify that your portlet application includes a web.xml in its WAR file that conforms to Version 2.3 or a later version of the Java servlet Specification. This ensures that the portlet application is compatible with other portal server implementations and HCL Portal. The web.xml must contain, at a minimum, the `<web-app/>` and `<display-name/>` elements. You can also include context-wide parameters using the `<init-param>` element. Refer to the *Java Servlet Specification Version* for more information about the structure of the web application deployment descriptor.


-   **HCL web application descriptor**

    As with other servlets that follow the Java Platform, Enterprise Edition model, portlets are packaged as WAR or EAR files with a web application deployment descriptor, web.xml. This descriptor defines each portlet as a servlet within the web application, including unique identifiers for each portlet, the portlet class, and initialization parameters.

    The definition of the servlets in the web.xml must be in the same order as the definition of portlets in the portlet.xml. The servlet identifier must be referenced by the portlet deployment descriptor, using the href attribute of the <portlet\> tag. As shown in the following table, the href attribute indicates the path of the web application descriptor in the WAR file that is appended by the servlet ID as the anchor.

    |portlet.xml|web.xml|
    |-----------|-------|
    |    ```xmp
  <portlet id="Portlet_1"
           href="WEB-INF/web.xml#Servlet_1">
    <portlet-name>Mail</portlet-name>
    ...
  </portlet>

    ```

|    ```xmp
  <servlet
    id="Servlet_1">
    <servlet-name>MailPortlet</servlet-name>
    ...
  </servlet>

    ```

|
    |    ```xmp
  <portlet id="Portlet_2"
           href="WEB-INF/web.xml#Servlet_2">
    <portlet-name>Calendar</portlet-name>
    ...
  </portlet>

    ```

|    ```xmp
  <servlet
    id="Servlet_2">
    <servlet-name>CalendarPortlet</servlet-name>
    ...
  </servlet>

    ```

|


## Portlet deployment descriptor

This section describes the portlet.xml for standard portlets.

-   The elements and structure of the HCL portlet.xml is provided in this topic.
-   For information about the portlet deployment descriptor for the standard portlet API, see the Java Portlet Specification.

-   **Guidelines for portlet application identifiers**

    The identifiers of portlet applications must identify them unambiguously in the area of their usage, which can be worldwide. The same is true for concrete portlet applications for portlets. To make this possible, follow these guidelines.

    -   Include the portlet's namespace in the identifier, using the same format that is used for the Java packages
    -   Add some portlet application-specific description
    -   Add some arbitrary characters to ensure uniqueness within the namespace, for example:

        ```xmp
         com.ibm.wps.samplet.mail.4969
        
        ```

    -   For HCL portlets, add suffixes for the corresponding concrete portlet applications, for example:

        ```xmp
         com.ibm.wps.samplet.mail.4969.1
        
        ```

    Portlet identifiers must be unique within the application.


-   **Standard portlet deployment descriptor**

    In the Java Portlet Specification, the portlet descriptor is in the format of an XML schema. Since the portlet is not a servlet, the portlet descriptor does not reference a corresponding servlet ID in the web.xml. The first-level element is the `<portlet-app/>`, which contains one or more `<portlet/>` definitions. Portlet-specific initialization parameters are stored in the portlet.xml by using the `<init-param/>` element and are obtained from the `PortletConfig` object that is provided during initialization.


-   **HCL portlet deployment descriptor**

    The structure of the HCL portlet deployment descriptor is defined by a DTD, which is located at wps.war/dtd/portlet\_1.1.dtd.

    For HCL portlets, each concrete portlet definition indicates its parent portlet using the href attribute of the <concrete-portlet\> tag. As shown in the following table, the href attribute indicates the portlet ID as an anchor.

    |Portlet tag|Concrete portlet tag|
    |-----------|--------------------|
    |    ```
  <portlet id="Portlet_1"
           href="WEB-INF/web.xml#Servlet_1">
    <portlet-name>Mail</portlet-name>
    ...
  </portlet>

    ```

|    ```
  <concrete-portlet href="#Portlet_1">
    <portlet-name>Mail Box</portlet-name>
    ...
  </concrete-portlet>

    ```

|
    |    ```
  <portlet id="Portlet_2"
           href="WEB-INF/web.xml#Servlet_2">
    <portlet-name>Calendar</portlet-name>
    ...
  </portlet>

    ```

|    ```
  <concrete-portlet href="#Portlet_2">
    <portlet-name>Group calendar</portlet-name>
    ...
  </concrete-portlet>

    ```

|


--\>

## Reserved parameter names

This section describes parameters that can be set for portlets. There are two types of parameters:

-   **Configuration parameters**

    These are parameters for a portlet that can be changed only by an administrator. They are defined in the file `portlet.xml` using either the <config-param/\> elements \(for HCL portlets\) or the <preferences/\> element marked as read-only \(for standard portlets\).


-   **Initialization parameters**

    These parameters are set during deployment. For standard portlets, they are set by the <init-param/\> element in the portlet.xml. For HCL portlets, they are set by the <init-param/\> element in the web.xml.


The following parameters can be set as configuration parameters in IBM portlets or initialization parameters in standard portlets:

-   **redirect.action.without.session = \(false\)**

    Set this parameter to true to enforce a redirect after an action on anonymous pages for this portlet.

-   **wps.enforce.redirect = \(false\)**

    Set this parameter to true if your portlet requires a redirect for a portlet action. The advantage of sending a redirect is that the URL changes to hold the complete state in the URL such that the resulting URL is present in the browser and can be bookmarked. The downside is that the additional request generates more load on the server. The portlet does not need the redirect after action if it does not set any public or private render parameters in processAction or processEvent.

-   **wps.markup**

    This is an initialization parameter in standard portlets to define the supported markup types for the portlet. Use it to differentiate between markup types, such as HTML and cHTML, that use the same MIME type.

-   **com.ibm.portal.automaximize**

    Set this parameter to true to automatically maximize the portlet when the user switches from view mode to any of the other supported modes. The default is false.

-   **wps.multiple.action.execution**

    Set this parameter to true to enable the user to run the same action URL several times.


The following parameter can be set as a configuration parameter in IBM portlets or read-only preferences in standard portlets:

-   **com.ibm.portal.pagecontext.enable = \(false\)**

    When you set this parameter to true, you indicate that the portlet can retrieve task properties. This parameter is used by task processing portlets. The default is false.


## Container run time options

The portal defines container run time options, which can be used by portlets that conform to the Java Portlet Specification 2.0 \(JSR286\). You set these parameters by using the <container-runtime-option\> element in the portlet.xml.

-   **com.ibm.portal.public.session**

    Set this parameter to true to allow session creation for anonymous users for this particular portlet. Example:

    ```
    <container-runtime-option>
       <name>com.ibm.portal.public.session</name>
       <value>true</value>
    </container-runtime-option>
    ```



???+ info "Related information"
    - [Standard portlet API](../standard_portlet_api/index.md)

