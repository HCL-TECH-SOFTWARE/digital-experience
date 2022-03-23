# Handling portlet preferences on the client 

One of the most useful aspects of the client side programming model is the ability to read, modify, and save portlet preferences on the client.

The interface `ibm.portal.portlet.PortletPreferences` JavaScript mirrors its server side counterpart `javax.portlet.PortletPreferences` as closely as possible. For the full description of the JavaScript interfaces refer to the public API documentation.

The following code sample shows how you can retrieve and read the portlet preferences on the client:

```
<script>
    function <%=namespace%>_handleLoadPortletPreferences(portletWindow, status, portletPrefs) { 
        if (status==ibm.portal.portlet.PortletWindow.STATUS_OK) {
            portletWindow.setAttribute("preferences", portletPrefs);
            alert("Preferences.getValue()\n"+portletPrefs.getValue("test"));
            var prefs = portletPrefs.getMap();
            var mapStr = "Preferences.getMap()\number of preferences: "+prefs.length + "\n";
            for (var i=0; i<prefs.length; i++) {
                mapStr += i+" - "+prefs[i].name+" - "+prefs[i].values+" - "+prefs[i].readonly + "\n";
            }
            alert(mapStr);
        }
        else { alert("error loading feed"); }
    }
    <%=namespace%>_portletWindow = new ibm.portal.portlet.PortletWindow("<%=portletWindowID%>");
    <%=namespace%>_portletWindow.getPortletPreferences(<%=namespace%>_handleLoadPortletPreferences);
</script>
```

For the full description of the JavaScript interfaces refer to the public API documentation.

**Parent topic:**[The client side portlet programming model ](../dev-portlet/w2_clntprgmdl.md)

