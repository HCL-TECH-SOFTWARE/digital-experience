# Generating output

View how portlets use JSPs to generate markup, create URLs to portlet resources, support multiple devices, markups, and languages in portlets, and make use of JSTL.

In the previous example, the [Hello World](wpsbscfg.md) portlet provided markup by using a Java PrintWriter. However, most portlets generate output using JSPs. One exception to this is when the portlet has to transform XML source. In this case, the portlet can use XSLT to generate markup.

## Using JSPs to generate markup

To separate portlet output from the main functionality of the portlet, use a JSP. The following code sample is the JSP for the view page of the jsrHelloJSP.war sample. All sample portlets are available from the portlet catalog by searching for navcode 1WP10017Z. See [Sample portlets](jsrsamp.md) for more information.

```xmp

<%@ taglib uri="http://java.sun.com/portlet" prefix="portletAPI" %>
<%@ page session="false"%>

<p class="portlet-font">Hello JSP!</p>

```

Separate JSPs would exist to provide the user interface for supporting any additional portlet modes, such as edit or help. The basic portlet wizard in Rational Application Developer allows you to create a portlet that provides JSPs for some of the other modes in which the portlet can be invoked.

The following shows the doView\(\) method provided in the jsrHelloJSP sample.

```xmp

package com.ibm.wps.samples.jsr;

import javax.portlet.*;
import java.io.*;

public class HelloJSP extends GenericPortlet {

  public void init(PortletConfig portletConfig) throws UnavailableException, PortletException
  {
    super.init(portletConfig);
  }

  public void doView(RenderRequest request, RenderResponse response)
                                   throws PortletException, IOException {
    // set return content type
    response.setContentType("text/html");
    PortletContext context = getPortletConfig().getPortletContext();
    context.getRequestDispatcher("/jsp/View.jsp").include( request, response);
  }

}

```

There are several points to keep in mind when writing your JSPs:

1.  For consistency in portal look and feel, use the portlet's class specifications in the JSR 168/JSR 286 specification.
2.  Be sure to include the appropriate tag library to obtain the needed functionality in your JSPs.
3.  Become familiar with the guidelines and best practices for portlet markup. For example, all named elements must be namespace-encoded, using the <portletAPI:encodeNamespace\> tag, to avoid clashes with other named elements on the portal page.
4.  Portlet JSPs cannot link directly to resources within the portlet's WAR directory structure.

## Creating URLs to portlet resources

Portlet JSPs cannot link directly to content \(for example, images, applets, other JSPs, or other resources\) within the portlet's WAR directory structure. Instead, they have to use the services of the portlet container to create portlet URLs from which the content can be accessed. Use the encodeURL\(\) method of the PortletResponse to access content within the portlet WAR structure. The following examples are used in the View World portlet samples.

-   **ibmViewWorld.war**

    ```xmp
    
    <img src='<%=portletResponse.encodeURL("images/earth.jpg")%>' 
         alt="Earth" />
    
    ```

-   **jsrViewWorld.war**

    For standard portlets, you also have to add the context path of the portlet from the request:

    ```xmp
    
    <img src='<%=renderResponse.encodeURL(renderRequest.getContextPath() + 
           "/images/earth.jpg")%>' 
             alt="Earth" />
    
    ```


The String returned by the encodeURL\(\) method returns the relative URL of the content, without the host name and domain information.

-   **Multimedia example**

    The following example shows how an audio file can be included in a JSP for a standard portlet.

    ```xmp
    
    
    <object 
       classid='<%=renderResponse.encodeURL(renderRequest.getContextPath() +
       "/audio/WakeUpSong.mp3")%>'
            type="audio/wav" width="300" height="18">
       <param name="controls" value="smallconsole" valuetype="data">
       <param name="autostart" value="true" valuetype="data">
       <param name="controller" value="true" valuetype="data">
    </object>
    
    
    ```

-   **Applet example**

    The following example shows how an applet can be included in an IBM portlet JSP.

    ```xmp
    
    <applet codebase='<%=response.encodeURL("applet")%>' 
            code="MyApplet.class" width="150" height="150">
        <param  name="timeout" value="3600">
        <param  name="border"  value="5">
        <param  name="font"   value="TimesRoman|BOLD|18">
        <param  name="bgcolor" value="ffffff">
    </applet>
    
    ```


## Using JSTL in portlet JSPs

The following example shows how to use JSTL to retrieve translated Strings from a resource bundle in your JSPs.

-   The JSTL tag library is included at the beginning of the JSP.
-   The <fmt:setBundle/\> tag indicates the resource bundle to use.
-   The <fmt:message/\> tag indicates the key to look for in the resource bundle.
-   For the image source, the encodeURL\(\) method is used in a Java scriptlet.

```xmp

<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
...
<fmt:setBundle basename="nls.reminder"/>
...
<img border='0'
     src='<%=response.encodeURL("task_add.gif")%>'
     title='<fmt:message key="add_reminder"/>'
     alt='<fmt:message key="add_reminder"/>'/>

```

The JARs required to implement JSTL tags are included with the portal server. You should not package these JARs in your portlet's WAR file.

**Related information**  


[JSP tags for standard portlets](jsrjsp.md)

