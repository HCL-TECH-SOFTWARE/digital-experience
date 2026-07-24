# How to create an external application JAR and invoke via JSP Component

## Applies to

> HCL Digital Experience 9.5 or higher

## Introduction

The following example shows the steps to create an external application JAR that later can be invoked via a Web Content Manager (WCM) JSP component.

## Instructions

1. Create a new Java Project in Rational Application Developer (RAD):

    * Create a new package named `simplesystemout`.
    * Create a new class named `jdrprint`.
    * Add the following code content to the class:

    ```java
    package simplesystemout;

    public class jdrprint {
        public static void PrintToSystemout() {
            System.out.println("JDRPrintClass"); 
        }
    }
    ```

2. Export the project as a JAR file and copy it to `<PortalServer_root>/shared/app`.

3. Create a new WCM JSP Component with path `/jsp/html/JDRPrint.jsp`. Add the following code to the file:

    ```jsp
    <%@ page import="com.ibm.workplace.wcm.api.*"%>
    <%@ page import="com.ibm.workplace.wcm.api.exceptions.*"%>
    <%@ page import="java.util.*,javax.servlet.jsp.JspWriter,java.io.*"%>
    <%
    out.print("Running JSP"); 
    simplesystemout.jdrprint.PrintToSystemout();                                                                                                              
    %>
    ```

4. Copy `JDRPrint.jsp` to `wcm.ear/ilwwcm.war/jsp/html`.

5. Render `JDRPrint.jsp` using the direct URL:
    ```text
    http://host:port/wps/wcm/jsp/html/JDRPrint.jsp
    ```

6. Verify the output entry in `SystemOut.log`.

???+ info "DISCLAIMER OF WARRANTIES"
    The following code is provided "AS IS" without warranty of any kind, either expressed or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of the code is with you. Should the code prove defective, you assume the cost of all necessary servicing, repair or correction.