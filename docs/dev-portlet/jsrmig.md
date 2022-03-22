# Converting HCL Digital Experience portlets \(AIX, IBM I, Linux, Solaris, Windows\)

You can convert your basic HCL DX portlets and HCL DX portlets that use the Struts Portlet Framework to the standard portlet API.

## Converting basic HCL portlets to the standard

This topic describes some of the more common changes \(but not all\) that are required to convert an HCL portlet to a standard portlet. Many conversion tasks depend on the amount of complexity in the portlet code. You must become familiar with the Java Portlet Specification to determine any remaining changes that are not covered in this topic.

-   **Changing Java source**

    1.  Change import statements to use the standard packages.

        Change this:

        ```xmp
            import org.apache.jetspeed.portlet.*; 
            import org.apache.jetspeed.service.*; 
        
        ```

        to this:

        ```xmp
            import javax.portlet.*;
            import com.ibm.portal.portlet.service.*;   
        
        ```

    2.  Change class inheritance to use GenericPortlet. Notice that the ActionListener is not implemented.

        Change this:

        ```xmp
            public class SamplePortlet extends PortletAdapter implements ActionListener{  
            ...
            }
        
        ```

        to this:

        ```xmp
            public class SamplePortlet extends GenericPortlet{
            ...
            }
        
        ```

    3.  Change objects that are used for all render methods. In the standard portlet API, the PortletRequest and PortletResponse define common functions for the RenderRequest and RenderResponse subclasses. These subclasses are the arguments for all implementations of the render\(\) method, including doView\(\), doEdit\(\), and doHelp\(\).

        Change this:

        ```xmp
        
        
          public void doView(PortletRequest request, PortletResponse response) {  
             ...
          }
            
        
        ```

        to this:

        ```xmp
        
        
          public void doView(RenderRequest request, RenderResponse response)
               throws PortletException, IOException{
               ...
          }
        
        
        ```

    4.  Change the actionPerformed\(\) method. In the standard portlet API, this method is replaced by the processAction\(\) method, which does not require the portlet to implement a listener. The processAction\(\) methods accepts the ActionRequest and ActionResponse as arguments, which extend the PortletRequest and PortletResponse.

        Change this:

        ```xmp
        
        
            public void actionPerformed(ActionEvent event) throws PortletException{  
            ...
            }
            
        
        ```

        to this:

        ```xmp
        
        
          public void processAction(ActionRequest request, ActionResponse response)  
               throws PortletException, IOException{
               ...
          }     
        
        
        ```

    5.  Change how the response content type is set. In the standard portlet API, the MIME type of the output that is returned in the response must be set before including the JSP. HCL portlets declare the MIME type using the contentType attribute of JSP's page directive. Therefore, this change makes the contentType setting in the JSP unnecessary.

        Add the following code before including the JSP:

        ```xmp
        
        response.setContentType("text/html");
        
        
        ```

    6.  Change JSP includes. In the standard portlet API, JSPs are included by a request dispatcher's include\(\) method. In the portlets' render method, set the MIME type of the output before returning it in the response.

        Change this:

        ```xmp
        
        
            PortletContext context = getPortletConfig().getContext();
            context.include("/jsp/View.jsp", request, response);
            
        
        ```

        to this:

        ```xmp
        
        
            response.setContentType("text/html");
            PortletContext context = getPortletConfig().getPortletContext();
            context.getRequestDispatcher("/jsp/View.jsp").include( request, response);  
        
        
        ```

    7.  Change classes where user data is stored. In the standard portlet API, user data is stored in a PortletPreferences object, rather than the PortletData object that is available using the HCL portlet API. Notice the different getter methods that are used with the request object and setter methods that are used for the data object.

        Change this:

        ```xmp
        
        
                PortletData portData = request.getData();
                portData.setAttribute("userName", userName);
                portData.store();
            
        
        ```

        to this:

        ```xmp
        
        
                PortletPreferences prefs = request.getPreferences();
                prefs.setValue("userName",request.getParameter("username"));  
                prefs.store();
        
        
        ```

        Some preferences are read-only and can be modified only by an administrator. See [Change configuration parameters to preferences](#readonly) for information.

    8.  Change the method that is used for namespace encoding. For example, if the portlet uses encodeNamespace\(\) to return a unique string to be prefixed to a JavaScript variable name within the content that is generated by the portlet, the portlet can use getNamespace\(\).

        Change this:

        ```xmp
        
        
                PortletResponse.encodeNamespace()   
            
        
        ```

        to this:

        ```xmp
        
        
                RenderResponse.getNamespace()
        
        
        ```

    9.  Change how portlet URLs are generated. For example, a portlet's doEdit\(\) method might save the URI to the edit mode to pass to the JSP. The portlet must instantiate a PortletURL object using the createRenderURL\(\) method.

        Change this:

        ```xmp
        
        
              // Save URI for the edit page
              PortletURI editURI = response.createURI();
              ...
              // Preserve the edit page URI in the request to make 
              // it accessible by the edit JSP  
              request.setAttribute("editURI", editURI.toString());
            
        
        ```

        to this:

        ```xmp
        
        
              // Save URI for the edit page
              PortletURL editURL = response.createRenderURL();
              ...
              // Preserve the edit page URI in the request 
              // to make it accessible by the edit JSP  
              request.setAttribute("editURL", editURL.toString());
        
        
        ```

        The standard portlet API does not have an equivalent method for createReturnURI\(\). If the URL is intended to call the portlets' action method, however, the portlet should use the createActionURL\(\) method.

-   **Changing JSP source**

    1.  Change the tag library to use the standard tag library.

        Change this:

        ```xmp
        
        
            <%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
        
        
        ```

        to this:

        ```xmp
        
        
            <%@ taglib uri="http://java.sun.com/portlet" prefix="portlet" %>  
        
        
        ```

    2.  Change references to API objects. In the standard portlet API, the `<portlet:defineObjects />` JSP tag makes the RenderRequest, RenderResponse, and PortletConfig objects available to JSP files. After making this change, all references in the JSP to the PortletRequest and PortletResponse should be changed to the corresponding RenderRequest and RenderResponse.

        Change this:

        ```xmp
        
        
            <portletAPI:init /> 
            ...
            <%
            PortletData prefs = portletRequest.getData();
            %>    
        
        
        ```

        to this:

        ```xmp
        
        
           <portlet:defineObjects /> 
           ...
           <%
           PortletPreferences prefs = renderRequest.getPreferences();
           %>    
        
        
        ```

    3.  Change JSP tags that are used for namespace encoding. For example, if the portlet uses `<portletAPI:encodeNamespace/>` to uniquely qualify the name of a text input field, this tag must be changed as follows.

        Change this:

        ```xmp
        
        
           <input name="<portletAPI:encodeNamespace value='name'/>"  type="text" >   
        
        
        ```

        to this:

        ```xmp
        
        
           <input name="<portlet:namespace/>name"  type="text" >   
        
        
        ```

    4.  Change how portlet URLs are generated. If the portlet JSP creates a URL to itself, it should specify which method gets control using the `<portlet:actionURL/>` or `<portlet:renderURL/>` tags. Any parameters passed on the URL are specified using the `<portlet:param/>` tag.

        Change this:

        ```xmp
           <a href="<portletAPI:createURI>
                       <portlet:URIParameter name='action' value='search'/>   
                    </portlet:createURI>" >
        
        ```

        to this:

        ```xmp
           <a href="<portlet:actionURL>
                       <portlet:param name='action' value='search'/>
                    </portlet:actionURL>" >  
        
        ```

    5.  Change resource bundles. The `<portletAPI:text/>` tag of the HCL Portlet API has been deprecated and should be replaced in all portlets by the JSTL equivalent. See [Using JSTL in portlet JSPs](wpsbsoutput.md) for more information.

        Change this:

        ```xmp
        
        
            <portletAPI:text key="my.label" bundle="nls.myproperties"/>  
        
        
        ```

        to this:

        ```xmp
        
        
            <fmt:setBundle basename="nls.myproperties"/>
            ...
            <fmt:message key="my.label"/>
        
        
        ```

    6.  Change how resources are invoked from the JSP. For example, if the JSP displays an image, it should use the encodeURL\(\) method of the appropriate response object and, in addition, add the context path of the portlet from the request.

        Change this:

        ```xmp
        
        
          <img src='<%= portletResponse.encodeURL("images/photo01.jpg") %>' 
            alt="photo">   
        
        
        ```

        to this:

        ```xmp
        
        
        <img src='<%= renderResponse.encodeURL(renderRequest.getContextPath() + 
                      "/images/photo01.jpg") %>' alt="photo">
        
        
        ```

-   **Changing the portlet deployment descriptor**

    The following steps describe some of the differences between the portlet deployment descriptors of the HCL Portlet API and the Java Portlet Specification. However, the order of the elements in the standard portlet descriptor is important and strictly enforced during deployment. You should use a tool, such as Rational® Application Developer, that performs validation as you develop the portlet deployment descriptor.

    1.  Remove the DOCTYPE declaration. The portlet descriptor for the standard portlets uses an XML schema that is added in the next step.

        Remove this:

        ```xmp
        
        
        <!DOCTYPE portlet-app-def PUBLIC "-//IBM//DTD Portlet Application 1.1//EN"
                      "portlet_1.1.dtd "> 
        
        
        ```

    2.  Remove the `<portlet-app-def/>` element. The first-level element in the standard portlet descriptor is <portlet-app/\>.

        Remove this code:

        ```xmp
        
        
            <portlet-app-def>    
            ....
            </portlet-app-def>
        
        
        ```

    3.  Update the `<portlet-app/>` element.

        -   Add the schema definition and namespace declarations.
        -   Remove the major-version and minor-version attributes.
        -   Set the version attribute to the required version of the Java Portlet Specification. Currently, version `1.0` is the only supported specification version.
        -   Change the uid attribute to id.
        Change this code:

        ```xmp
        
        
           <portlet-app uid="com.mycompany.samples.MyPortletApp.001c" 
                        major-version="1" minor-version="0">
        
        
        ```

        to this code:

        ```xmp
        
        
        <portlet-app 
             xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_1_0.xsd" 
             version="1.0" 
             id="com.mycompany.samples.MyPortletApp.001c"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
             xsi:schemaLocation=
                "http://java.sun.com/xml/ns/portlet/portlet-app_1_0.xsd 
                 http://java.sun.com/xml/ns/portlet/portlet-app_1_0.xsd">
        
        
        ```

    4.  Remove all `<concrete-portlet-app/>` elements and their contents. Save any required information, such as configuration parameters and language definitions, for use in the portlet definition.
    5.  Update the `<portlet/>` element. Remove the href, minor-version, and major-version attributes.

        Change this code:

        ```xmp
        
        
           <portlet id="com.mycompany.samples.MyPortlet.110x" 
                    href="WEB-INF/web.xml#com.mycompany.samples.MyPortlet.href110x"   
                    major-version="1" minor-version="0">
        
        
        ```

        to this code:

        ```xmp
        
        
           <portlet id="com.mycompany.samples.MyPortlet.110x">
        
        
        ```

    6.  Move the definition of the portlet class from the web.xml file to the portlet.xml file.

        Remove this code from the web.xml file:

        ```xmp
        
        
            <servlet id="com.mycompany.samples.MyPortlet.001c">
                <servlet-name>MyPortlet</servlet-name>
                <servlet-class>com.mycompany.samples.MyPortlet</servlet-class>
            </servlet>
            <servlet-mapping 
                     id="ServletMapping_com.mycompany.samples.MyPortlet.001c">  
                <servlet-name>MyPortlet</servlet-name>
                <url-pattern>/MyPortlet/*</url-pattern>
            </servlet-mapping>
        
        
        ```

        Add this code to the portlet.xml file:

        ```xmp
        
        
                <portlet-class>com.mycompany.samples.MyPortlet</portlet-class>
        
        
        ```

    7.  Change how caching is defined. Use the `<expires/>` value from the HCL portlet descriptor as the value for the `<expiration-cache/>` element in the standard descriptor. There is no equivalent in the standard descriptor to the `<shared/>` element.

        Change this code:

        ```xmp
        
        
            <cache>
               <expires>-1</expires>
               <shared>no</shared>
            </cache> 
        
        
        ```

        to this code:

        ```xmp
        
        
            <expiration-cache>-1</expiration-cache>     
        
        
        ```

    8.  Change the content of the `<supports/>` element.

        -   Change supported markups to MIME types.
        -   Use the `<portlet-mode/>` element.
        The standard portlet descriptor allows you to declare only MIME types. In some cases, two markup types use the same MIME type. For example, both HTML and cHTML use 'text/html' as the MIME type. For standard portlets, HCL Portal accepts the value of a `wps.markup` initialization parameter as the markup type.

        Change this code:

        ```xmp
        
        
            <supports>
               <markup name="html">
                  <view />
                  <edit />
               </markup>
            </supports> 
        
        
        ```

        to this code:

        ```xmp
        
        
            <init-param>
               <name>wps.markup</name>
               <value>html,chtml</value>
            </init-param>
            ...
            <supports>
               <mime-type>text/html</mime-type>
               <portlet-mode>VIEW</portlet-mode>   
               <portlet-mode>EDIT</portlet-mode>
            </supports> 
        
        
        ```

        Be sure to place the initialization parameters before the `<expiration-cache>` element.

    9.  Remove window state elements. Normal, maximized, and minimized window states are supported by default and not declared in the standard portlet deployment descriptor.

        Remove this:

        ```xmp
        
        
            <allows>
               <maximized/>   
               <minimized/>
            </allows> 
        
        
        ```

    10. Change configuration parameters to preferences. In the standard portlet descriptor, preferences can be changed by users in any of the standard modes, or they can be declared as read-only and modified only by an administrator.

        Change this:

        ```xmp
        
        
                  <config-param>
                      <param-name>Location</param-name>
                      <param-value>Antartica</param-value>
                  </config-param>               
        
        
        ```

        to this:

        ```xmp
        
        
              <portlet-preferences>
                    <preference>
                        <name>Location</name>
                        <value>Antartica</value>
                        <read-only>true</read-only>
                    </preference>
              </portlet-preferences>           
        
        
        ```

    11. Change localized settings.
        1.  Remove the `<default-locale/>` element. In the standard portlet descriptor, the first locale listed in the descriptor is the default. If no locale is specified, then English is used as the default.
        2.  Create resource bundles for each supported language containing the title, short title, and keywords for the portlet. Use the following parameter names:

            ```xmp
            
                javax.portlet.title = My Portlet Title
                javax.portlet.short-title = Title
                javax.portlet.keywords = portlets, JSR 168, portal
              
            ```

        3.  Declare the resource bundle in the portlet descriptor as in the following example.

            ```xmp
            
                <resource-bundle>nls.MyPortlet</resource-bundle>
              
            ```

            In this example, the default resource bundle `MyPortlet.properties` is in the `/WEB-INF/nls` sub-directory of the WAR file and all of the locale-specific resource bundles append the locale to the file name \(for example, `MyPortlet_ja.properties` for Japanese\).

        4.  Declare each supported locale as in the following example:

            ```xmp
            
            
                <supported-locale>en</supported-locale>
                <supported-locale>de</supported-locale>  
            
              
            ```

        5.  Set the localized values for the portlet description and display name as in the following example.

            ```xmp
            
            
            <description xml:lang="EN">
               English description
            </description>
            <display-name xml:lang="EN">
               English display name
            </display>-name>
            <description xml:lang="DE">
               German description
            </description>
            <display-name xml:lang="DE">
               German display name
            </display>-name>
            
              
            ```

            **Note:** The display name should be set for compatibility reasons. However, it is not currently used by HCL Portal.


## Converting HCL Digital Experience portlets that use the Struts Portlet Framework

The existing versions of the Struts Portlet Framework supported the HCL Portal container API, or the legacy container. This release uses a newer version of the Struts Portlet Framework that supports the standard portlet container. This release will continue to ship a version to support the legacy container and a new version for the Standard container. The Struts Portlet Framework is still shipped as example war files that can be used to build the Struts application. The war files for each container can be distinguished by the name. The SPFLegacy examples support the legacy container, and the SPFStandard examples support the standard container. The SPFLegacyBlank.war file is the starting point for Struts applications for the Legacy container, and the SPFStandardBlank is the starting point for the Struts applications for the Standard container.

-   **The Struts Portlet Framework for the Legacy Container**

    The SPFLegacyBlank.war file contains the files to include with the Struts application. The directories of interest are the `WEB-INF/lib` and the `WEB-INF/tld` directory. Here is the list of libraries to be used in the application from the `WEB-INF/lib` directory:

    -   PortalStruts.jar
    -   PortalStrutsCommon.jar
    -   PortalStrutsTags.jar
    -   StrutsUpdateForPortal.jar
    -   wp.struts-commons-logging.jar
    -   commons-beanutils.jar
    -   commons-collections.jar
    -   commons-fileupload.jar
    -   commons-lang.jar
    -   commons-validator.jar
    -   struts-legacy.jar
    -   struts.jar
    The files from the `TLD` directory are

    -   struts-bean.tld
    -   struts-chtml.tld
    -   struts-html.tld
    -   struts-logic.tld
    -   struts-nested.tld
    -   struts-portal-html.tld
    -   struts-portal-wml.tld
    -   struts-template.tld
    -   struts-tiles.tld
    -   struts-wml.tld
-   **Files common to both the standard and HCL portlet containers**

    The following files are the Jakarta Struts 1.1 binary files, and the same in both the Standard and Legacy versions of the Struts Portlet Framework:

    -   commons-beanutils.jar
    -   commons-collections.jar
    -   commons-fileupload.jar
    -   commons-lang.jar
    -   commons-validator.jar
    -   struts-legacy.jar
    -   struts.jar
    The following files from the TLD directory are same on for both containers. This can change in future releases, so it is strongly encouraged to use the files from the blank for the required container.

    -   struts-bean.tld
    -   struts-chtml.tld
    -   struts-html.tld
    -   struts-logic.tld
    -   struts-nested.tld
    -   struts-portal-html.tld
    -   struts-portal-wml.tld
    -   struts-template.tld
    -   struts-tiles.tld
    -   struts-wml.tld
-   **Conversion to the Standard Version of the Struts Portlet Framework from previous versions of the Struts Portlet Framework**

    Converting the legacy version of the Struts Portlet Framework to the Standard versions starts with updating the jars, and TLDs cataloged with the SPFStandardBlank.war file.

    Here is a list of the files that should be updated in the `WEB-INF/lib` directory of the application:

    -   wp.struts.standard.framework.jar
    -   PortalStrutsCommon.jar
    -   PortalStrutsTags.jar
    -   StrutsUpdateForPortal.jar
    -   wp.struts-commons-logging.jar
    -   commons-beanutils.jar
    -   commons-collections.jar
    -   commons-fileupload.jar
    -   commons-lang.jar
    -   commons-validator.jar
    -   struts-legacy.jar
    -   struts.jar
    -   commons-digester.jar
    -   commons-logging.jar
    -   jakarta-oro.jar
    Here is a list of the TLD files that should be updated with the TLDs from the SPFStandardBlank.war file:

    -   struts-bean.tld
    -   struts-chtml.tld
    -   struts-html.tld
    -   struts-logic.tld
    -   struts-nested.tld
    -   struts-portal-html.tld
    -   struts-portal-wml.tld
    -   struts-template.tld
    -   struts-tiles.tld
    -   struts-wml.tld
    The PortalStruts.jar file is only required on the HCL container and must be deleted.

-   **Web Deployment Descriptor**

    The Standard container requires a web deployment descriptor because the application is packaged as a war file. However, most of the initialization parameters are now configured through the portlet deployment descriptor.

    1.  Remove the servlet class from the web deployment descriptor. The servlet-class is no longer that way to specify the portlet class for the application in the Standard container. The portlet is now specified as the portlet class in the portlet deployment descriptor.
    2.  Move the init parameters from the web deployment descriptor to the portlet deployment descriptor. Since the portlet class is now defined in the portlet deployment descriptor, the init parameters are also specified in the portlet deployment descriptor. Note, the init-parameter are specified as name and value in the portlet deployment descriptor, not param-name and param-value as they are named in the web deployment descriptor.
    3.  The taglib elements still remain in the web deployment descriptor, no changes required.
    4.  The welcome file elements still remain in the web deployment descriptor, no changes required.
-   **Portlet Deployment Descriptor**

    The definition for the Portlet Deployment Descriptor for the Standard container is different from the legacy container. There are some changes that are required for the converted example to deploy in the Standard container. The Help Center contains details for the semantics of the portlet deployment descriptor for the Standard container.

    1.  The Standard container introduces the portlet-class element for specifying the class of the portlet. The portlet class for the Struts Portlet Framework is `com.ibm.portal.struts.portlet.StrutsPortlet`.
    2.  The init parameters for the portlet are defined in the portlet deployment descriptor. The init parameters should be converted from the web deployment descriptor.
    3.  The Standard container does not have the abstract and concrete separation in the portlet deployment descriptor. The portlet element defines the supported modes, and portlet preferences.
    4.  The Struts Portlet Framework no longer uses a portlet filter. The FilterChain init parameter should not be converted.
-   **Struts Configuration File**

    The Struts Portlet Framework defines the Request Processor that must be configured in the Struts configuration file. The controller attribute processClass must be converted to the following value to be deployed on the Standard container: `<controller processorClass="com.ibm.portal.struts.portlet.WpRequestProcessor">` If the Struts application is using the Struts Request processor that supports Tiles, then the Struts plug-in must be converted as well: `<plug-in className="com.ibm.portal.struts.plugins.WpTilesPlugin">`

-   **Struts Action**

    The Struts action class is passed a HttpServletRequest object, so the application may not have a dependency on the Portal container. However, many applications use the PortletApiUtils to obtain the portlet request and interface directly with the portlet API. If so, then the application must replace the org.apache.jetspeed interfaces with the equivalent javax.portlet interfaces. The new interfaces are documented in the Help Center.

    **Note:** The following example illustrates the change in which the PortletApiUtils object is obtained:

    -   Old: `PortletApiUtils portletUtils = PortletApiUtils.getInstance();`
    -   New: `PortletApiUtils portletUtils = PortletApiUtils.getUtilsInstance();`
-   **StrutsPortlet**

    The `com.ibm.wps.portlets.struts.WpsStrutsPortlet` class for the legacy container extended the PortletAdapter class. The Struts application using the Struts Portlet Framework may have been customized by extending the WpsStrutsPortlet class. If so, those changes should be applied for the Standard container. The `com.ibm.portal.struts.portlet.StrutsPortlet` class for the Standard container extends the standard container's GenericPortlet.

-   **Request processor**

    The `com.ibm.wps.portlets.struts.WpsRequestProcessor` class for the legacy container may have been extended to customize the processing. The Request Processor class for the standard container is `com.ibm.portal.struts.portlet.WpRequestProcessor`. If the legacy interfaces were used for the customizations, these changes should be converted to the Standard interfaces.


