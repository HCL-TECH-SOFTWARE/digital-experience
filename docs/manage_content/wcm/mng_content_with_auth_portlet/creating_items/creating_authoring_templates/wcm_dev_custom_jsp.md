---
id: wcm_dev_custom_jsp
title: Customizing elements with JSP
---
# Customizing elements with JSP

A "custom JSP" field is available on some element types when added to an authoring template. You use this field to reference a JSP file to use instead of the element default view in the user interface. You can write JSP to control the design of an element, and to restrict the values that can be entered into an element.

**Storing JSP files:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: [my.custom.key];myfile where my.custom.key is a constant within the Web Content Manager configuration service.

**Custom bean and EditorBean API:**

The CustomBean and EditorBean API can be found under com.ibm.workplace.wcm.api.authoring in the Javadoc.

See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the PortalServer_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm directory.

## Referencing jsp files

When you reference a JSP file in the **custom JSP** field of the element properties view, you can use the following formats.

-   **When located within the ilwwcm-authoring.war/jsp/html directory of your server use this format**

    AppServer_root/installedApps/node-name/PA_WCM_Authoring_UI.ear/ilwwcm-authoring.war/jsp/html`

    !!!note
        The JSP page is also stored in the client war directory of the local rendering portlet or of the servlet or portlet that calls the JSP, if the Web Content Manager API is used. For example, to render a JSP page on a local rendering portlet, you would also need to store a copy of the JSP file under AppServer_root/installedApps/node-name/PA_WCMLocalRendering.ear/ilwwcm-localrende.war.

-   **When located within any other web application:**

    -   **contextPath;jspPath**

        Specifies an edit mode version of the field where the JSP is in another application. For example: /wps/customapplication;/jsp/editor.jsp

    -   **jspPath**

        Specifies an edit mode version of the field where the JSP is in same application as Web Content Manager.

    -   **editmode=contextPath;jspPath**

        Specifies an edit mode version of the field where the JSP is in another application.

    -   **editmode=jspPath**

        Specifies an edit mode version of the field where the JSP is in same application as Web Content Manager.

    -   **readmode=contextPath;jspPath**

        Specifies a read mode version of the field where the JSP is in another application.

    -   **readmode=jspPath**

        Specifies a read mode version of the field where the JSP is in same application as Web Content Manager.

    -   **readmode=contextPath;jspPath,editmode=contextPath;jspPath**

        Specifies an edit mode and read mode version of the field where the JSPs are in another application.

    -   **readmode=jspPath,editmode=jspPath**

        Specifies an edit mode and read mode version of the field where the JSPs are in same application as Web Content Manager.


## Text element example

```
<%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
<%@ page import="com.ibm.workplace.wcm.api.authoring.CustomItemBean" %>

<portletAPI:init />


<% 
    CustomItemBean customItem = 
    (CustomItemBean) request.getAttribute("CustomItemBean"); 
    customItem.setSubmitFunctionName("myoptionsubmit");
    String fvalue = (String)customItem.getFieldValue();
    fvalue = fvalue.replaceAll("\"", "&quot;").replaceAll("\"","&#39;");
%>

<script language='Javascript'>
function myoptionsubmit()
{
document.getElementById('<%=customItem.getFieldName()%>').value = 
document.getElementById('<%=customItem.getFieldName()%>_mycustomoption').value;
}
</script>

<INPUT id='<%=customItem.getFieldName()%>_mycustomoption' value="<%=fvalue%>">
```

## Rich Text element example

```
<%@ page import="com.ibm.workplace.wcm.app.ui.portlet.widget.EditorBean"%>
<%@ taglib uri="/WEB-INF/tld/wcm.tld" prefix="wcm" %>

<% 
   EditorBean editor = (EditorBean) request.getAttribute("EditorBean");
%>

<script language='Javascript'>
function setHtml(id, html) 
{
    document.getElementById(id + "_rte").value = html;
}

function getHtml(id)
{
     return document.getElementById(id + "_rte").value;
}

function setRichTextValue(theText)
{
    document.getElementById('<%= editor.getName()%>_rte').value = theText;
}
</script>

<textarea  cols="85" rows="15" id="<%= editor.getName() %>_rte"></textarea>

<script type="text/javascript">
   var initialValue = document.getElementById('<%= editor.getHiddenContentFieldName() %>_inithtml').value;
   var editorTextArea = document.getElementById('<%= editor.getName()%>_rte');
   editorTextArea.value = initialValue;

   if (initialisedRTEs != null)
   {
      initialisedRTEs = initialisedRTEs + 1;
   }
</script>
```

## Custom option selection element example with validation

This example is used to create a selection list of predefined options.

```
<%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
<%@ page import="com.ibm.workplace.wcm.api.authoring.CustomItemBean" %>

<portletAPI:init />


<% 
    CustomItemBean customItem = 
    (CustomItemBean) request.getAttribute("CustomItemBean"); 
    customItem.setSubmitFunctionName("mysubmit");
    String fvalue = (String)customItem.getFieldValue();
    fvalue = fvalue.replaceAll("\"", "&quot;").replaceAll("\"","&#39;");
%>

<SELECT id='<%=customItem.getFieldName()%>_mycustom'  >
<OPTION></OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("Option1") == 0)  {%>
SELECTED
<% } %>
>Option1</OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("Option2") == 0)  {%>
SELECTED
<% } %>
>Option2</OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("Option3") == 0)  {%>
SELECTED
<% } %>
>Option3</OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("Option4") == 0)  {%>
SELECTED
<% } %>
>Option4</OPTION>
</SELECT>

<script language='Javascript'>
function mysubmit()
{
	var selIndex=document.getElementById('<%=customItem.getFieldName()%>_mycustom').selectedIndex;
	
	if (selIndex <= 0)
	{
		document.getElementById("<%=customItem.getFieldName()%>").value = "";
	}
	else
	{
		document.getElementById("<%=customItem.getFieldName()%>").value = 
			document.getElementById('<%=customItem.getFieldName()%>_mycustom').options[selIndex].text;
	}
}
</script>
```

## Date element example

This example is used to create a selection list of predefined dates.

!!! note
    Only dates can be selected, not times.

```
<%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
<%@ page import="com.ibm.workplace.wcm.api.authoring.CustomItemBean" %>

<portletAPI:init />


<% 
    CustomItemBean customItem = 
    (CustomItemBean) request.getAttribute("CustomItemBean"); 
    customItem.setSubmitFunctionName("mydatesubmit");
    String fvalue = (String)customItem.getFieldValue();
    fvalue = fvalue.replaceAll("\"", "&quot;").replaceAll("\"","&#39;");
%>

<SELECT id='<%=customItem.getFieldName()%>_mycustomdate'  >
<OPTION></OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("Jul 4, 2005") == 0)  {%>
SELECTED
<% } %>
>Jul 4, 2005</OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("Aug 15, 2005") == 0)  {%>
SELECTED
<% } %>
>Aug 15, 2005</OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("Dec 25, 2005") == 0)  {%>
SELECTED
<% } %>
>Dec 25, 2005</OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("Jan 26, 2006") == 0)  {%>
SELECTED
<% } %>
>Jan 26, 2006</OPTION>
</SELECT>



<script language='Javascript'>
function mydatesubmit()
{
var selIndex=document.getElementById('<%=customItem.getFieldName()%>_mycustomdate').selectedIndex;

document.getElementById("<%=customItem.getFieldName()%>").value = 
document.getElementById('<%=customItem.getFieldName()%>_mycustomdate').options[selIndex].text;
}
</script>
```

## Number element example

This example is used to create a selection list of predefined numbers.

```
<%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
<%@ page import="com.ibm.workplace.wcm.api.authoring.CustomItemBean" %>

<portletAPI:init />


<% 
    CustomItemBean customItem = 
    (CustomItemBean) request.getAttribute("CustomItemBean"); 
    customItem.setSubmitFunctionName("mynumbersubmit");
    String fvalue = (String)customItem.getFieldValue();
    fvalue = fvalue.replaceAll("\"", "&quot;").replaceAll("\"","&#39;");
%>

<SELECT id='<%=customItem.getFieldName()%>_mycustomnumber'  >
<OPTION></OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("6") == 0)  {%>
SELECTED
<% } %>
>6</OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("8.5") == 0)  {%>
SELECTED
<% } %>
>8.5</OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("12") == 0)  {%>
SELECTED
<% } %>
>12</OPTION>
<OPTION 
<% if (((String)fvalue).compareTo("15.45") == 0)  {%>
SELECTED
<% } %>
>15.45</OPTION>
</SELECT>



<script language='Javascript'>
function mynumbersubmit()
{
var selIndex=document.getElementById('<%=customItem.getFieldName()%>_mycustomnumber').selectedIndex;


document.getElementById("<%=customItem.getFieldName()%>").value = 
document.getElementById('<%=customItem.getFieldName()%>_mycustomnumber').options[selIndex].text;
}
</script>
```

## User selection element example

This example is used to create a field to enter a user name.

```
<%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
<%@ page import="com.ibm.workplace.wcm.api.authoring.CustomItemBean" %>

<portletAPI:init />


<% 
    CustomItemBean customItem = 
    (CustomItemBean) request.getAttribute("CustomItemBean"); 
    customItem.setSubmitFunctionName("myusersubmit");
    String fvalue = (String)customItem.getFieldValue();
    fvalue = fvalue.replaceAll("\"", "&quot;").replaceAll("\"","&#39;");
%>
<script language='Javascript'>
function myusersubmit()
{
document.getElementById('<%=customItem.getFieldName()%>').value = 
document.getElementById('<%=customItem.getFieldName()%>_mycustomuser').value;
}
</script>

<INPUT id='<%=customItem.getFieldName()%>_mycustomuser' value="<%=fvalue%>">
```

