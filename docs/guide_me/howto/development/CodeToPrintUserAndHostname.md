# How to use the PUMA API within a WCM JSP component to print out the user and hostname sending the request

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This document provides the sample code for using the PUMA API within a WCM JSP component to print out the user and hostname that initiated the request and describes how to do it.

## Instructions

To use the sample code, refer to the following steps:

1. Create a file named `puma.jsp` in the `<wp_profile_root>\installedApps\<yourCellName>\PA_WCMLRingPortJSR286.ear\ilwwcm-localrende.war\jsp\html>` directory.

2. Copy and paste the following code in the `puma.jsp` file:

    !!! Important
        DISCLAIMER OF WARRANTIES:
        The following enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

    ```jsp
    <%@ page import="java.util.*,javax.servlet.jsp.JspWriter,java.io.*"%>

    <%@ page import="com.ibm.workplace.wcm.api.*"%>

    <%@ page import="com.ibm.portal.puma.InvalidMemberIdException"%>
    <%@ page import="com.ibm.portal.um.PumaProfile"%>
    <%@ page import="com.ibm.portal.um.exceptions.*"%>
    <%@ page import="com.ibm.portal.um.portletservice.PumaHome"%>
    <%@ page import="com.ibm.portal.um.*"%>
    <%@ page import="com.ibm.wps.puma.UserManager.*"%>
    <%@ page import="com.ibm.wps.services.puma.PumaService"%>

    <%@ page import="javax.naming.InitialContext"%>
    <%@ page import="javax.naming.Context"%>

    <%@ page import="com.ibm.portal.portlet.service.PortletServiceHome"%>

    <%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
    <portlet:defineObjects/>

    <%

    out.println("remote host = " + request.getRemoteHost());

    Workspace workspace = WCM_API.getRepository().getWorkspace(request.getUserPrincipal());

    workspace.useDistinguishedNames(false);

    String replyAuthor = workspace.getUserProfile().getUsername();
    out.println("<br>replyAuthor: " + replyAuthor);

    Context context = new InitialContext();

    PumaHome pumaHome = (PumaHome)context.lookup(com.ibm.portal.um.PumaHome.JNDI_NAME);

    PortletServiceHome psh;
    javax.naming.Context ctx = new javax.naming.InitialContext();
    psh = (PortletServiceHome)ctx.lookup("portletservice/com.ibm.portal.um.portletservice.PumaHome");
    PumaHome service = (PumaHome) psh.getPortletService(PumaHome.class);

    PumaProfile pp = service.getProfile(renderRequest);
    User user = pp.getCurrentUser();

    List attributeList = new ArrayList();
    attributeList.add("sn");
    attributeList.add("givenName");
    attributeList.add("uid");
    attributeList.add("preferredLanguage");

    Map userAttributeMap = pp.getAttributes(user, attributeList);

    out.println("<br>DN of current User " + pp.getIdentifier(user) + "");
    out.println("<br>Attributes Values for current user");

    Iterator userAttributeIt = userAttributeMap.keySet().iterator();

    while(userAttributeIt.hasNext()){
    String attributeName = (String)userAttributeIt.next();
    Object attributeValue = userAttributeMap.get(attributeName);
    out.println(attributeName + " = " + attributeValue);
    out.println("");
    }

    %>
    ```

3. Create a JSP component with `/jsp/html/puma.jsp` in the `path` field.

4. Edit a presentation template to render the JSP component created in Step 3.

5. Toggle **Edit Mode:** to **ON** then go to **Edit Shared settings**.

6. Map the presentation template and authoring template to a site area and render content from the site area in the Web Content Viewer portlet.

7. Render the page with the Web Content Viewer portlet.
