# How to create an external application JAR file and invoke it using a JSP component

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Custom Java logic can be packaged externally into a JAR file and called directly from within Web Content Manager (WCM) components to extend portal capabilities. This article describes how to create an external application JAR file and invoke a custom Java class using a WCM JSP component.

## Instructions

???+ info "DISCLAIMER OF WARRANTIES"
    The following code is provided "AS IS" without warranty of any kind, either expressed or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of the code is with you. Should the code prove defective, you assume the cost of all necessary servicing, repair or correction.

1. Create a Java project in Rational Application Developer (RAD) containing a package named `simplesystemout` and a class named `jdrprint`.
2. Add the following code to the `jdrprint` class:

    ```java
    package simplesystemout;

    public class jdrprint {
        public static void PrintToSystemout() {
            System.out.println("JDRPrintClass"); 
        }
    }
    ```

3. Export the project as a JAR file and copy it to `<PortalServer_root>/shared/app`.
4. Create a WCM JSP component at `/jsp/html/JDRPrint.jsp` with the following code to `JDRPrint.jsp`:

    ```jsp
    <%@ page import="com.ibm.workplace.wcm.api.*"%>
    <%@ page import="com.ibm.workplace.wcm.api.exceptions.*"%>
    <%@ page import="java.util.*,javax.servlet.jsp.JspWriter,java.io.*"%>
    <%
    out.print("Running JSP"); 
    simplesystemout.jdrprint.PrintToSystemout();                                                                                                              
    %>
    ```

5. Copy `JDRPrint.jsp` to `wcm.ear/ilwwcm.war/jsp/html`.
6. Open the following URL to render `JDRPrint.jsp`:

    ```URL
    http://host:port/wps/wcm/jsp/html/JDRPrint.jsp
    ```

7. Verify the output entry in `SystemOut.log`.  
