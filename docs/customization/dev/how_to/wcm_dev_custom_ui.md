# How to create a custom launch page

You can configure an authoring portlet to use a launch page of your own design instead of the default user interface.

A custom launch page can either be a JSP or HTML file. You use remote actions to call different views and functions from with the authoring portlet's user interface. You can also use the web content API to add other functions to your launch page. When you create a custom launch page, you configure your authoring portlet to use the custom launch page instead of the default authoring portlet user interface.

**Storing JSP files:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: \[my.custom.key\];myfile where my.custom.key is a constant within the Web Content Manager configuration service.

## A custom launch page example

This is a simple example of some code you can add to a JSP or HTML file, to allow users to create and view content items by using remote actions.

```
<%--
/* Sample Launch Page */
--%>

<%@ taglib uri="/WEB-INF/tld/wcm.tld" prefix="wcm" %>

<%--
/* Add your username and password here */
--%>
<wcm:initworkspace username="wpsadmin" password="wpsadmin" >
An error occurred initializing the WCM workspace:
<%=error%>
</wcm:initworkspace>

<%--
/* Setup your context here */
--%>
<wcm:setExplicitContext wcmWebAppPath="http://localhost:10039/wps/wcm" wcmServletPath="/myconnect" path="Web Content/Articles/Sample Article" >
An error occurred setting the WCM context:
<%=error%>
</wcm:setExplicitContext>

<div>
   <div>
      <a href='<wcm:plugin name="RemoteAction" action="new" type="com.ibm.workplace.wcm.api.WCM_Content"/>'>New Content</a>
   </div>
   <div>
      <a href='<wcm:plugin name="RemoteAction" view="contentbytitle" action="openmainview"/>'>View Content by Title</a>
   </div>
   <div>
	<a href='<wcm:plugin name="RemoteAction" view="explorer" action="openmainview"/>'>Open the Library Explorer view</a>
        </div>
</div>

```

**Reloading JSP files:**

JSP files that are stored in the PA\_WCM\_Authoring\_UI application are not reloaded, even if they are updated. You must restart the server, or put the JSP in a separate web application that is configured to reload JSP files, in order for changes you make to the JSP to be displayed.

**Parent topic:**[Developing](../dev/developing_parent.md)

