# Getting started with the client-side programming model for portlets 

Getting started with the client-side programming Model requires a few updates to the portlet JSPs.

1.  Add a reference for the client-side programming model tag library:

    ```
    <%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v6.1/portlet-client-model"
         prefix="portlet-client-model" %>
    ```

2.  Declare the modules of the client-side programming model that you want to use:

    ```
    <portlet-client-model:init>
         <portlet-client-model:require module="ibm.portal.xml.*"/>
         <portlet-client-model:require module="ibm.portal.portlet.*"/>
    </portlet-client-model:init>
    ```

    For a complete list of modules for use with the client-side programming model refer to the public API documentation.

3.  To be able to work with the client-side programming model in your portlets, use the object `ibm.portal.portlet.PortletWindow` as an entry point:

    ```
    <script>
       var <%=namespace%>_portletWindow = new ibm.portal.portlet.PortletWindow("<%=portletWindowID%>");
    </script>
    ```

    ```
    <script>
       dojo.addOnLoad(function() {
          <%=namespace%>_portletWindow = new ibm.portal.portlet.PortletWindow("<%=portletWindowID%>");
       });
    </script>
    ```

    **Note:** Use the tag `portlet-client-model:init` to create the scripting variable `portletWindowID` for use in the JSP. The following example shows how you can start an `XMLPortletRequest`:

    ```
    <script>
    
    function sendXPR( /*string*/url, /*Function*/callback, /*String*/errMsg ) {
       var xpr = <%=namespace%>_portletWindow.newXMLPortletRequest();
       var me = this;
       xpr.onreadystatechange = function () { 
          if ( xpr.readyState == 4 ) {    
             if ( xpr.status == 200 ) {
                callback( xpr.responseText );
             }
          else {
             <%=namespace%>_portletWindow.logError("The request failed!", errMsg );
    
             }    
          }
       };
       xpr.open( "GET", url );
       xpr.send( null );
    }
    </script>
    ```


**Parent topic:**[The client side portlet programming model ](../dev-portlet/w2_clntprgmdl.md)

